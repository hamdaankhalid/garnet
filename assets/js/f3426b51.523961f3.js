"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4970],{5053:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var l=s(4848),r=s(8453);const a={id:"server-commands",sidebar_label:"Server Management",title:"Server Management",slug:"server"},i=void 0,t={id:"commands/server-commands",title:"Server Management",description:"COMMAND",source:"@site/docs/commands/server.md",sourceDirName:"commands",slug:"/commands/server",permalink:"/garnet/docs/commands/server",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/commands/server.md",tags:[],version:"current",frontMatter:{id:"server-commands",sidebar_label:"Server Management",title:"Server Management",slug:"server"},sidebar:"garnetDocSidebar",previous:{title:"Data Structures",permalink:"/garnet/docs/commands/data-structures"},next:{title:"Client Management",permalink:"/garnet/docs/commands/client"}},d={},c=[{value:"COMMAND",id:"command",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Resp Reply",id:"resp-reply",level:4},{value:"COMMAND COUNT",id:"command-count",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Resp Reply",id:"resp-reply-1",level:4},{value:"COMMAND DOCS",id:"command-docs",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Resp Reply",id:"resp-reply-2",level:4},{value:"COMMAND GETKEYS",id:"command-getkeys",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"Resp Reply",id:"resp-reply-3",level:4},{value:"COMMAND GETKEYSANDFLAGS",id:"command-getkeysandflags",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"Resp Reply",id:"resp-reply-4",level:4},{value:"COMMAND INFO",id:"command-info",level:3},{value:"Syntax",id:"syntax-5",level:4},{value:"Resp Reply",id:"resp-reply-5",level:4},{value:"COMMITAOF",id:"commitaof",level:3},{value:"Syntax",id:"syntax-6",level:4},{value:"Resp Reply",id:"resp-reply-6",level:4},{value:"CONFIG GET",id:"config-get",level:3},{value:"Syntax",id:"syntax-7",level:4},{value:"Resp Reply",id:"resp-reply-7",level:4},{value:"CONFIG SET",id:"config-set",level:3},{value:"Syntax",id:"syntax-8",level:4},{value:"Resp Reply",id:"resp-reply-8",level:4},{value:"DBSIZE",id:"dbsize",level:3},{value:"Syntax",id:"syntax-9",level:4},{value:"Resp Reply",id:"resp-reply-9",level:4},{value:"FLUSHALL",id:"flushall",level:3},{value:"Syntax",id:"syntax-10",level:4},{value:"Resp Reply",id:"resp-reply-10",level:4},{value:"FLUSHDB",id:"flushdb",level:3},{value:"Syntax",id:"syntax-11",level:4},{value:"Resp Reply",id:"resp-reply-11",level:4},{value:"LATENCY HELP",id:"latency-help",level:3},{value:"Syntax",id:"syntax-12",level:4},{value:"Resp Reply",id:"resp-reply-12",level:4},{value:"LATENCY HISTOGRAM",id:"latency-histogram",level:3},{value:"Syntax",id:"syntax-13",level:4},{value:"Resp Reply",id:"resp-reply-13",level:4},{value:"LATENCY RESET",id:"latency-reset",level:3},{value:"Syntax",id:"syntax-14",level:4},{value:"Resp Reply",id:"resp-reply-14",level:4},{value:"MEMORY USAGE",id:"memory-usage",level:3},{value:"Syntax",id:"syntax-15",level:4},{value:"Resp Reply",id:"resp-reply-15",level:4},{value:"REPLICAOF",id:"replicaof",level:3},{value:"Syntax",id:"syntax-16",level:4},{value:"Resp Reply",id:"resp-reply-16",level:4},{value:"ROLE",id:"role",level:3},{value:"Syntax",id:"syntax-17",level:4},{value:"Resp Reply",id:"resp-reply-17",level:4},{value:"Master output",id:"master-output",level:2},{value:"Output of the command on replicas",id:"output-of-the-command-on-replicas",level:2},{value:"SLAVEOF",id:"slaveof",level:3},{value:"Syntax",id:"syntax-18",level:4},{value:"Resp Reply",id:"resp-reply-18",level:4},{value:"TIME",id:"time",level:3},{value:"Syntax",id:"syntax-19",level:4},{value:"Resp Reply",id:"resp-reply-19",level:4},{value:"MONITOR",id:"monitor",level:3},{value:"Syntax",id:"syntax-20",level:4},{value:"Resp Reply",id:"resp-reply-20",level:4}];function h(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"command",children:"COMMAND"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COMMAND\n"})}),"\n",(0,l.jsx)(n.p,{children:"Return an array with details about every Garnet command."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a nested list of command details."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"command-count",children:"COMMAND COUNT"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COMMAND COUNT\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns Integer reply of number of total commands in this Garnet server."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-1",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the number of commands returned by COMMAND."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"command-docs",children:"COMMAND DOCS"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-2",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COMMAND DOCS [command-name [command-name ...]]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Return documentary information about commands."}),"\n",(0,l.jsx)(n.p,{children:"By default, the reply includes all of the server's commands. You can use the optional command-name argument to specify the names of one or more commands."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-2",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a map, as a flattened array, where each key is a command name, and each value is the documentary information."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"command-getkeys",children:"COMMAND GETKEYS"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-3",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COMMAND GETKEYS command-name [arg [arg ...]]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns an array of keys that would be accessed by the given command."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"command-name"}),": The name of the command to analyze"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"arg"}),": The arguments that would be passed to the command"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-3",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a list of keys that the command would access."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"command-getkeysandflags",children:"COMMAND GETKEYSANDFLAGS"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-4",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COMMAND GETKEYSANDFLAGS command-name [arg [arg ...]]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns an array of key names and access flags for keys that would be accessed by the given command."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"command-name"}),": The name of the command to analyze"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"arg"}),": The arguments that would be passed to the command"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-4",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a nested array where each item contains:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"The key name"}),"\n",(0,l.jsx)(n.li,{children:"An array of access flag strings that apply to that key"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"command-info",children:"COMMAND INFO"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-5",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COMMAND INFO [command-name [command-name ...]]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns Array reply of details about multiple Garnet commands."}),"\n",(0,l.jsx)(n.p,{children:"Same result format as COMMAND except you can specify which commands get returned."}),"\n",(0,l.jsx)(n.p,{children:"If you request details about non-existing commands, their return position will be nil."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-5",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a nested list of command details."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"commitaof",children:"COMMITAOF"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-6",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"COMMITAOF\n"})}),"\n",(0,l.jsx)(n.p,{children:"This command manually issues a commit to write ahead logging (append-only file)"}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-6",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: AOF file committed"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"config-get",children:"CONFIG GET"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-7",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"CONFIG GET parameter [parameter ...]\n"})}),"\n",(0,l.jsx)(n.p,{children:"The CONFIG GET command is used to read the configuration parameters of a running Garnet server."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-7",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a list of configuration parameters matching the provided arguments."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"config-set",children:"CONFIG SET"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-8",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"CONFIG SET parameter value [parameter value ...]\n"})}),"\n",(0,l.jsx)(n.p,{children:"The CONFIG SET command is used in order to reconfigure the server at run time without the need to restart Garnet."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-8",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK when the configuration was set properly. Otherwise an error is returned."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"dbsize",children:"DBSIZE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-9",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"DBSIZE\n"})}),"\n",(0,l.jsx)(n.p,{children:"Return the number of keys in the currently-selected database."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-9",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the number of keys in the currently-selected database."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"flushall",children:"FLUSHALL"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-10",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"FLUSHALL [ASYNC | SYNC]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Delete all the keys of all the existing databases, not just the currently selected one. This command never fails."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-10",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"flushdb",children:"FLUSHDB"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-11",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"FLUSHDB [ASYNC | SYNC]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Delete all the keys of the currently selected DB. This command never fails."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-11",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"latency-help",children:"LATENCY HELP"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-12",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"LATENCY HELP\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns all the supported LATENCY sub-commands"}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-12",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a list of LATENCY supported sub-command details."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"latency-histogram",children:"LATENCY HISTOGRAM"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-13",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"LATENCY HISTOGRAM [event [event ...]]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Return latency histogram of or more ",(0,l.jsx)(n.code,{children:"<event>"})," classes. ",(0,l.jsx)(n.br,{}),"\n","If no commands are specified then all histograms are replied"]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-13",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"latency-reset",children:"LATENCY RESET"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-14",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"LATENCY RESET [event [event ...]]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Reset latency data of one or more ",(0,l.jsx)(n.code,{children:"<event>"})," (default: reset all data for all event classes)."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-14",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"memory-usage",children:"MEMORY USAGE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-15",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"MEMORY USAGE key [SAMPLES count]\n"})}),"\n",(0,l.jsx)(n.p,{children:"The MEMORY USAGE command reports the number of bytes that a key and its value require to be stored in RAM."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-15",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"One of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Integer reply: the memory usage in bytes."}),"\n",(0,l.jsx)(n.li,{children:"Null reply: if the key does not exist."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"replicaof",children:"REPLICAOF"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-16",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"REPLICAOF <host port | NO ONE>\n"})}),"\n",(0,l.jsx)(n.p,{children:"The REPLICAOF command can change the replication settings of a replica on the fly."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-16",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"role",children:"ROLE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-17",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ROLE\n"})}),"\n",(0,l.jsx)(n.p,{children:"Provide information on the role of a Redis instance in the context of replication, by returning if the instance is currently a master, slave, or sentinel. The command also returns additional information about the state of the replication (if the role is master or slave) or the list of monitored master names (if the role is sentinel)."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-17",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"The command returns an array of elements. The elements of the array depends on the role."}),"\n",(0,l.jsx)(n.h2,{id:"master-output",children:"Master output"}),"\n",(0,l.jsx)(n.p,{children:"The master output is composed of the following parts:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["The string ",(0,l.jsx)(n.code,{children:"master"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"The current master replication offset, which is an offset that masters and replicas share to understand, in partial resynchronizations, the part of the replication stream the replicas needs to fetch to continue."}),"\n",(0,l.jsx)(n.li,{children:"An array composed of three elements array representing the connected replicas. Every sub-array contains the replica IP, port, and the last acknowledged replication offset."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"output-of-the-command-on-replicas",children:"Output of the command on replicas"}),"\n",(0,l.jsx)(n.p,{children:"The replica output is composed of the following parts:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["The string ",(0,l.jsx)(n.code,{children:"slave"}),", because of backward compatibility (see note at the end of this page)."]}),"\n",(0,l.jsx)(n.li,{children:"The IP of the master."}),"\n",(0,l.jsx)(n.li,{children:"The port number of the master."}),"\n",(0,l.jsxs)(n.li,{children:["The state of the replication from the point of view of the master, that can be ",(0,l.jsx)(n.code,{children:"connect"})," (the instance needs to connect to its master), ",(0,l.jsx)(n.code,{children:"connecting"})," (the master-replica connection is in progress), ",(0,l.jsx)(n.code,{children:"sync"})," (the master and replica are trying to perform the synchronization), ",(0,l.jsx)(n.code,{children:"connected"})," (the replica is online)."]}),"\n",(0,l.jsx)(n.li,{children:"The amount of data received from the replica so far in terms of master replication offset."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"slaveof",children:"SLAVEOF"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-18",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"SLAVEOF <host port | NO ONE>\n"})}),"\n",(0,l.jsx)(n.p,{children:"The SLAVEOF command can change the replication settings of a slave on the fly."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-18",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"time",children:"TIME"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-19",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"TIME\n"})}),"\n",(0,l.jsx)(n.p,{children:"The TIME command returns the current server time as a two items lists: a Unix timestamp and the amount of microseconds already elapsed in the current second. Basically the interface is very similar to the one of the gettimeofday system call."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-19",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: specifically, a two-element array consisting of the Unix timestamp in seconds and the microseconds' count."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"monitor",children:"MONITOR"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-20",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"MONITOR\n"})}),"\n",(0,l.jsx)(n.p,{children:"MONITOR is a debugging command that streams back every command processed by the Redis server. It can help in understanding what is happening to the database."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-20",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Non-standard return value. Dumps the received commands in an infinite flow."}),"\n",(0,l.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var l=s(6540);const r={},a=l.createContext(r);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);