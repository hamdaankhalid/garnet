﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System;
using System.Threading;
using Garnet.common;
using Garnet.server;
using Microsoft.Extensions.Logging;
using Tsavorite.core;

namespace Garnet.cluster
{
    internal sealed class CheckpointStore
    {
        readonly StoreWrapper storeWrapper;
        readonly ClusterProvider clusterProvider;
        volatile CheckpointEntry head;
        volatile CheckpointEntry tail;
        readonly bool safelyRemoveOutdated;
        readonly ILogger logger;

        public CheckpointStore(StoreWrapper storeWrapper, ClusterProvider clusterProvider, bool safelyRemoveOutdated, ILogger logger = null)
        {
            this.storeWrapper = storeWrapper;
            this.clusterProvider = clusterProvider;
            this.safelyRemoveOutdated = safelyRemoveOutdated;
            this.head = this.tail = null;
            this.logger = logger;

            if (safelyRemoveOutdated)
                PurgeAllCheckpointsExceptEntry();
        }

        /// <summary>
        /// Initialize in-memory checkpoint store.
        /// Assume during initialization checkpoint requests will not be issued/processed.
        /// </summary>
        public void Initialize()
        {
            head = tail = GetLatestCheckpointEntryFromDisk();

            if (tail.metadata.storeVersion == -1 && tail.metadata.objectStoreVersion == -1) head = tail = null;

            // This purge does not check for active readers
            // 1. If primary is initializing then we will not have any active readers since not connections are established at recovery
            // 2. If replica is initializing during failover we do this before allowing other replicas to attach.
            if (safelyRemoveOutdated)
                PurgeAllCheckpointsExceptEntry(tail);
        }

        /// <summary>
        /// Wait for replicas to finish reading
        /// </summary>
        public void WaitForReplicas()
        {
            if (head == tail) return;
            var curr = head;
            while (curr != null)
            {
                while (!curr.TrySuspendReaders()) Thread.Yield();
                curr = curr.next;
            }
        }

        /// <summary>
        /// Method used at initialization to purge any orphan checkpoints except the latest checkpoint
        /// </summary>
        /// <param name="entry">CheckpointEntry</param>
        public void PurgeAllCheckpointsExceptEntry(CheckpointEntry entry = null)
        {
            entry ??= GetLatestCheckpointEntryFromDisk();
            if (entry == null) return;
            logger?.LogCheckpointEntry(LogLevel.Trace, nameof(PurgeAllCheckpointsExceptEntry), entry);
            PurgeAllCheckpointsExceptTokens(StoreType.Main, entry.metadata.storeHlogToken, entry.metadata.storeIndexToken);
            if (!clusterProvider.serverOptions.DisableObjects)
                PurgeAllCheckpointsExceptTokens(StoreType.Object, entry.metadata.objectStoreHlogToken, entry.metadata.objectStoreIndexToken);
        }

        /// <summary>
        /// Used to purge all checkpoint tokens except the tokens provided.
        /// </summary>
        /// <param name="storeType">StoreType</param>
        /// <param name="logToken">GUID token for log</param>
        /// <param name="indexToken">GUID token for index</param>
        public void PurgeAllCheckpointsExceptTokens(StoreType storeType, Guid logToken, Guid indexToken)
        {
            var ckptManager = clusterProvider.GetReplicationLogCheckpointManager(storeType);

            // Delete log checkpoints
            foreach (var toDeletelogToken in ckptManager.GetLogCheckpointTokens())
            {
                if (!toDeletelogToken.Equals(logToken))
                {
                    logger.LogTrace("Deleting log token {toDeletelogToken}", toDeletelogToken);
                    ckptManager.DeleteLogCheckpoint(toDeletelogToken);
                }
            }

            // Delete index checkpoints
            foreach (var toDeleteIndexToken in ckptManager.GetIndexCheckpointTokens())
            {
                if (!toDeleteIndexToken.Equals(indexToken))
                {
                    logger.LogTrace("Deleting index token {toDeleteIndexToken}", toDeleteIndexToken);
                    ckptManager.DeleteIndexCheckpoint(toDeleteIndexToken);
                }
            }
        }

        /// <summary>
        /// Add new checkpoint entry to in memory list.
        /// Assume that addition of new entries executes at completion of a checkpoint.
        /// Since there can be not concurrent checkpoints this method is not thread safe.
        /// </summary>
        /// <param name="entry"></param>
        /// <param name="fullCheckpoint"></param>
        public void AddCheckpointEntry(CheckpointEntry entry, bool fullCheckpoint = false)
        {
            // If not full checkpoint index checkpoint will be the one of the previous checkpoint
            if (!fullCheckpoint)
            {
                var lastEntry = tail ?? throw new GarnetException($"Checkpoint history unavailable, need full checkpoint for {entry}");
                entry.metadata.storeIndexToken = lastEntry.metadata.storeIndexToken;
                entry.metadata.objectStoreIndexToken = lastEntry.metadata.objectStoreIndexToken;
            }

            if (tail == null)
                head = tail = entry;
            else
            {
                // We don't have multiple writers because this method is called under the CheckpointLock
                // So it is safe to update in-place.
                tail.next = entry;
                tail = tail.next;
            }

            logger?.LogCheckpointEntry(LogLevel.Trace, nameof(AddCheckpointEntry), entry);

            if (safelyRemoveOutdated)
                DeleteOutdatedCheckpoints();
        }

        /// <summary>
        /// Method used to delete outdated checkpoints from in-memory list of checkpoint entries
        /// </summary>
        private void DeleteOutdatedCheckpoints()
        {
            // If only one in-memory checkpoint return
            if (head == tail) return;

            logger?.LogTrace("Try safe delete in-memory outdated checkpoints");
            var curr = head;
            while (curr != null && curr != tail)
            {
                logger?.LogCheckpointEntry(LogLevel.Trace, nameof(DeleteOutdatedCheckpoints), curr);

                // If cannot suspend readers for this entry
                if (!curr.TrySuspendReaders()) break;

                logger?.LogTrace("Suspended readers and deleting outdated checkpoint!");

                // Below check each checkpoint token separately if it is eligible for deletion
                if (CanDeleteToken(curr, CheckpointFileType.STORE_HLOG))
                    clusterProvider.GetReplicationLogCheckpointManager(StoreType.Main).DeleteLogCheckpoint(curr.metadata.storeHlogToken);

                if (CanDeleteToken(curr, CheckpointFileType.STORE_INDEX))
                    clusterProvider.GetReplicationLogCheckpointManager(StoreType.Main).DeleteIndexCheckpoint(curr.metadata.storeIndexToken);

                if (!clusterProvider.serverOptions.DisableObjects)
                {
                    if (CanDeleteToken(curr, CheckpointFileType.OBJ_STORE_HLOG))
                        clusterProvider.GetReplicationLogCheckpointManager(StoreType.Object).DeleteLogCheckpoint(curr.metadata.objectStoreHlogToken);

                    if (CanDeleteToken(curr, CheckpointFileType.OBJ_STORE_INDEX))
                        clusterProvider.GetReplicationLogCheckpointManager(StoreType.Object).DeleteIndexCheckpoint(curr.metadata.objectStoreIndexToken);
                }

                // At least one token can always be deleted thus invalidating the in-memory entry
                var next = curr.next;
                curr.next = null;
                curr = next;
            }

            // Update head after delete
            head = curr;
            logger?.LogCheckpointEntry(LogLevel.Trace, "Current Head", head);

            bool CanDeleteToken(CheckpointEntry toDelete, CheckpointFileType fileType)
            {
                var curr = toDelete.next;
                while (curr != null && curr != tail)
                {
                    // Token can be deleted when curr entry and toDelete do not share it
                    if (!curr.ContainsSharedToken(toDelete, fileType))
                        return true;

                    // If token is shared then try to suspend addition of new readers
                    if (!curr.TrySuspendReaders())
                        return false;

                    // If suspend new readers succeeds continue up the chain to find how far token is being used
                    curr = curr.next;
                }

                // Here we reached the tail so we can delete the token only if it is not shared with the tail
                return !curr.ContainsSharedToken(toDelete, fileType);
            }
        }

        /// <summary>
        /// Return latest checkpoint entry and increment readers counter.
        /// Caller is responsible for releasing reader by calling removeReader on entry
        /// </summary>
        /// <returns></returns>
        public bool GetLatestCheckpointEntryFromMemory(out CheckpointEntry cEntry)
        {
            cEntry = null;
            var _tail = tail;
            if (_tail == null)
            {
                cEntry = new CheckpointEntry()
                {
                    metadata = new()
                    {
                        storeCheckpointCoveredAofAddress = 0,
                        objectCheckpointCoveredAofAddress = clusterProvider.serverOptions.DisableObjects ? long.MaxValue : 0
                    },
                    _lock = default
                };
                _ = cEntry.TryAddReader();
                return true;
            }

            if (!_tail.TryAddReader())
                return false;

            cEntry = _tail;
            return true;
        }

        /// <summary>
        /// Return latest checkpoint entry from disk by scanning all available tokens
        /// </summary>
        /// <returns></returns>
        public CheckpointEntry GetLatestCheckpointEntryFromDisk()
        {
            Guid objectStoreHLogToken = default;
            Guid objectStoreIndexToken = default;
            var objectStoreVersion = -1L;
            storeWrapper.store.GetLatestCheckpointTokens(out var storeHLogToken, out var storeIndexToken, out var storeVersion);
            storeWrapper.objectStore?.GetLatestCheckpointTokens(out objectStoreHLogToken, out objectStoreIndexToken, out objectStoreVersion);
            var (storeCheckpointCoveredAofAddress, storePrimaryReplId) = GetCheckpointCookieMetadata(StoreType.Main, storeHLogToken);
            var (objectCheckpointCoveredAofAddress, objectStorePrimaryReplId) = objectStoreHLogToken == default ? (long.MaxValue, null) : GetCheckpointCookieMetadata(StoreType.Object, objectStoreHLogToken);

            CheckpointEntry entry = new()
            {
                metadata = new()
                {
                    storeVersion = storeVersion,
                    storeHlogToken = storeHLogToken,
                    storeIndexToken = storeIndexToken,
                    storeCheckpointCoveredAofAddress = storeCheckpointCoveredAofAddress,
                    storePrimaryReplId = storePrimaryReplId,

                    objectStoreVersion = objectStoreVersion,
                    objectStoreHlogToken = objectStoreHLogToken,
                    objectStoreIndexToken = objectStoreIndexToken,
                    objectCheckpointCoveredAofAddress = objectCheckpointCoveredAofAddress,
                    objectStorePrimaryReplId = objectStorePrimaryReplId,
                },
                _lock = new SingleWriterMultiReaderLock()
            };
            return entry;

            (long, string) GetCheckpointCookieMetadata(StoreType storeType, Guid fileToken)
            {
                if (fileToken == default) return (0, null);
                var ckptManager = clusterProvider.GetReplicationLogCheckpointManager(storeType);
                var pageSizeBits = storeType == StoreType.Main ? clusterProvider.serverOptions.PageSizeBits() : clusterProvider.serverOptions.ObjectStorePageSizeBits();
                using (var deltaFileDevice = ckptManager.GetDeltaLogDevice(fileToken))
                {
                    if (deltaFileDevice is not null)
                    {
                        deltaFileDevice.Initialize(-1);
                        if (deltaFileDevice.GetFileSize(0) > 0)
                        {
                            var deltaLog = new DeltaLog(deltaFileDevice, pageSizeBits, -1);
                            deltaLog.InitializeForReads();
                            return ckptManager.GetCheckpointCookieMetadata(fileToken, deltaLog, true, -1);
                        }
                    }
                }
                return ckptManager.GetCheckpointCookieMetadata(fileToken, null, false, -1);
            }
        }

        /// <summary>
        /// Get latest checkpoint from memory info
        /// </summary>
        /// <returns></returns>
        public string GetLatestCheckpointFromMemoryInfo()
        {
            var _tail = tail;
            if (_tail == null)
                return "(empty)";

            try
            {
                return _tail.ToString();
            }
            catch
            {
                return "(empty)";
            }
        }

        /// <summary>
        /// Get latest checkpoint from memory info
        /// </summary>
        /// <returns></returns>
        public string GetLatestCheckpointFromDiskInfo()
        {
            var cEntry = GetLatestCheckpointEntryFromDisk();
            if (cEntry == null)
                return "(empty)";
            try
            {
                return cEntry.ToString();
            }
            catch
            {
                return "(empty)";
            }
        }
    }
}