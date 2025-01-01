using Tsavorite.core;

namespace Garnet.server
{
    public struct EtagOffsetManagementContext
    {
        public int EtagIgnoredOffset { get; private set; }

        public int EtagIgnoredEnd { get; private set; }

        public long ExistingEtag { get; private set; }

        public int EtagOffsetForVarlen { get; private set; }

        public static void SetEtagOffsetBasedOnInputHeader(ref EtagOffsetManagementContext context)
        {
            context.EtagOffsetForVarlen = Constants.EtagSize;
        }

        public static unsafe void CalculateOffsets(ref EtagOffsetManagementContext context, bool hasEtag, ref SpanByte value)
        {
            if (hasEtag)
            {
                context.EtagOffsetForVarlen = context.EtagIgnoredOffset = Constants.EtagSize;
                context.EtagIgnoredEnd = value.LengthWithoutMetadata;
                context.ExistingEtag = *(long*)value.ToPointer();
            }
            else
            {
                // default values for when no Etag exists on a record
                context.EtagIgnoredOffset = 0;
                context.EtagIgnoredEnd = -1;
                context.ExistingEtag = Constants.BaseEtag;
            }
        }
    }
}