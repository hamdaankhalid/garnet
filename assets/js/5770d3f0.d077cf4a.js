"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2391],{7383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"dev/tsavorite/storefunctions","title":"StoreFunctions and Allocator Wrapper","description":"This section discusses both of these because they were part of a change to add two additional type args, TStoreFunctions and TAllocator, to TsavoriteKV as well as the various sessions and *Context (e.g. BasicContext). The purpose of both of these is to provide better performance by inlining calls. StoreFunctions also provides better logical design for the location of the operations that are store-level rather than session-level, as described below.","source":"@site/docs/dev/tsavorite/storefunctions.md","sourceDirName":"dev/tsavorite","slug":"/dev/tsavorite/storefunctions","permalink":"/garnet/docs/dev/tsavorite/storefunctions","draft":false,"unlisted":false,"editUrl":"https://github.com/microsoft/garnet/tree/main/website/docs/dev/tsavorite/storefunctions.md","tags":[],"version":"current","frontMatter":{"id":"storefunctions","sidebar_label":"StoreFunctions","title":"StoreFunctions and Allocator Wrapper"},"sidebar":"garnetDocSidebar","previous":{"title":"Locking","permalink":"/garnet/docs/dev/tsavorite/locking"},"next":{"title":"EpochProtection","permalink":"/garnet/docs/dev/tsavorite/epoch"}}');var o=n(4848),i=n(8453);const r={id:"storefunctions",sidebar_label:"StoreFunctions",title:"StoreFunctions and Allocator Wrapper"},a="StoreFunctions and Allocator Struct Wrapper",c={},l=[{value:"StoreFunctions overview",id:"storefunctions-overview",level:2},{value:"Allocator Wrapper overview",id:"allocator-wrapper-overview",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"storefunctions-and-allocator-struct-wrapper",children:"StoreFunctions and Allocator Struct Wrapper"})}),"\n",(0,o.jsxs)(t.p,{children:["This section discusses both of these because they were part of a change to add two additional type args, ",(0,o.jsx)(t.code,{children:"TStoreFunctions"})," and ",(0,o.jsx)(t.code,{children:"TAllocator"}),", to ",(0,o.jsx)(t.code,{children:"TsavoriteKV"})," as well as the various sessions and ",(0,o.jsx)(t.code,{children:"*Context"})," (e.g. ",(0,o.jsx)(t.code,{children:"BasicContext"}),"). The purpose of both of these is to provide better performance by inlining calls. StoreFunctions also provides better logical design for the location of the operations that are store-level rather than session-level, as described below."]}),"\n",(0,o.jsxs)(t.p,{children:["From the caller point of view, we have two new type parameters on ",(0,o.jsx)(t.code,{children:"TsavoriteKV<TKey, TValue, TStoreFunctions, TAllocator>"}),". The ",(0,o.jsx)(t.code,{children:"TStoreFunctions"})," and ",(0,o.jsx)(t.code,{children:"TAllocator"})," are also on ",(0,o.jsx)(t.code,{children:"*.Context"})," (e.g. ",(0,o.jsx)(t.code,{children:"BasicContext"}),") as well. C# allows the 'using' alias only as the first lines of a namespace declaration, and the alias is file-local and recognized by subsequent 'using' aliases, so the \"Api\" aliases such as ",(0,o.jsx)(t.code,{children:"BasicGarnetApi"})," in multiple files are much longer now."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"TsavoriteKV"})," constructor has been changed to take 3 parameters:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"KVSettings<TKey, TValue>"}),". This replaces the previous long list of parameters. ",(0,o.jsx)(t.code,{children:"LogSettings"}),", ",(0,o.jsx)(t.code,{children:"ReadCacheSettings"}),", and ",(0,o.jsx)(t.code,{children:"CheckpointSettings"})," have become internal classes, used only by ",(0,o.jsx)(t.code,{children:"TsavoriteKV"})," (created from ",(0,o.jsx)(t.code,{children:"TsavoriteKVSettings"}),") when instantiating the Allocators (e.g. the new ",(0,o.jsx)(t.code,{children:"AllocatorSettings"})," has a ",(0,o.jsx)(t.code,{children:"LogSettings"})," member). ",(0,o.jsx)(t.code,{children:"SerializerSettings"})," has been removed in favor of methods on ",(0,o.jsx)(t.code,{children:"IStoreFunctions"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["An instance of ",(0,o.jsx)(t.code,{children:"TStoreFunctions"}),". This is usually obtained by a call to a static ",(0,o.jsx)(t.code,{children:"StoreFunctions"})," factory method to create it, passing the individual components to be contained."]}),"\n",(0,o.jsxs)(t.li,{children:["A factory ",(0,o.jsx)(t.code,{children:"Func<>"})," for the ",(0,o.jsx)(t.code,{children:"TAllocator"})," instantiation."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"These are described in more detail below."}),"\n",(0,o.jsx)(t.h2,{id:"storefunctions-overview",children:"StoreFunctions overview"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"StoreFunctions"})," refers to the set of callback functions that reside at the ",(0,o.jsx)(t.code,{children:"TsavoriteKV"})," level, analogous to ",(0,o.jsx)(t.code,{children:"ISessionFunctions"})," at the session level. Similar to ",(0,o.jsx)(t.code,{children:"ISessionFunctions"}),", there is an ",(0,o.jsx)(t.code,{children:"IStoreFunctions"}),". However, the ",(0,o.jsx)(t.code,{children:"ISessionFunctions"})," implementation can be either a struct or a class' Tsavorite provides the ",(0,o.jsx)(t.code,{children:"SessionFunctionsBase"})," class, which may be inherited from, as a utility. Type parameters implemented by classes, however, do not generate inlined code."]}),"\n",(0,o.jsxs)(t.p,{children:["Because ",(0,o.jsx)(t.code,{children:"IStoreFunctions"})," is intended to provide maximum inlining, Tsavorite does not provide a ",(0,o.jsx)(t.code,{children:"StoreFunctionsBase"}),". Instead, Tsavorite provides a ",(0,o.jsx)(t.code,{children:"StoreFunctions"})," struct implementation, with optional implementations passed in, for:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Key Comparison (previously passed as an ",(0,o.jsx)(t.code,{children:"ITsavoriteKeyComparer"})," interface, which is not inlined)"]}),"\n",(0,o.jsxs)(t.li,{children:["Key and Value Serializers. Due to limitations on type arguments, these must be passed as ",(0,o.jsx)(t.code,{children:"Func<>"})," which creates the implementation instance, and because serialization is an expensive operation, we stay with the ",(0,o.jsx)(t.code,{children:"IObjectSerializer<TKey>"})," and ",(0,o.jsx)(t.code,{children:"IObjectSerializer<TValue>"})," interfaces rather than clutter the ",(0,o.jsx)(t.code,{children:"IStoreFunctions<TKey, TValue>"})," interface with the Key and Value Serializer type args."]}),"\n",(0,o.jsxs)(t.li,{children:["Record disposal (previously on ",(0,o.jsx)(t.code,{children:"ISessionFunctions"}),' as multiple methods, and now only a single method with a "reason" parameter).']}),"\n",(0,o.jsxs)(t.li,{children:["Checkpoint completion callback (previously on ",(0,o.jsx)(t.code,{children:"ISessionFunctions"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Of course, because ",(0,o.jsx)(t.code,{children:"TsavoriteKV"})," has the ",(0,o.jsx)(t.code,{children:"TStoreFunctions"})," type parameter, this can be any type implemented by the caller, including a class instance (which would be slower)."]}),"\n",(0,o.jsx)(t.h2,{id:"allocator-wrapper-overview",children:"Allocator Wrapper overview"}),"\n",(0,o.jsxs)(t.p,{children:["As with ",(0,o.jsx)(t.code,{children:"StoreFunctions"}),", the Allocator Wrapper is intended to provide maximal inlining. As noted above, type parameters implemented by classes do not generate inlined code; the JITted code is general, for a single ",(0,o.jsx)(t.code,{children:"IntPtr"}),"-sized reference. For structs, however, the JITter generates code specific to that specific struct type, in part because the size can vary (e.g. when pushed on the stack as a parameter)."]}),"\n",(0,o.jsx)(t.p,{children:"There is a hack that allows a type parameter implemented by a class to be inlined: the generic type must be for a struct that wraps the class type and makes calls on that class type in a non-generic way. This is the approach the Allocator Wrapper takes:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"BlittableAllocator"}),", ",(0,o.jsx)(t.code,{children:"GenericAllocator"}),", and ",(0,o.jsx)(t.code,{children:"SpanByteAllocator"})," classes are now the wrapper structs, with ",(0,o.jsx)(t.code,{children:"Key"}),", ",(0,o.jsx)(t.code,{children:"Value"}),", and ",(0,o.jsx)(t.code,{children:"TStoreFunctions"})," type args. These implement the ",(0,o.jsx)(t.code,{children:"IAllocator"})," interface."]}),"\n",(0,o.jsxs)(t.li,{children:["There are new ",(0,o.jsx)(t.code,{children:"BlittableAllocatorImpl"}),", ",(0,o.jsx)(t.code,{children:"GenericAllocatorImpl"}),", and ",(0,o.jsx)(t.code,{children:"SpanByteAllocatorImpl"})," classes that implement most of the functionality as previously, including inheriting from ",(0,o.jsx)(t.code,{children:"AllocatorBase"}),". These also have ",(0,o.jsx)(t.code,{children:"Key"}),", ",(0,o.jsx)(t.code,{children:"Value"}),", and ",(0,o.jsx)(t.code,{children:"TStoreFunctions"})," type args; the ",(0,o.jsx)(t.code,{children:"TAllocator"})," is not needed as a type arg because it is known to be the ",(0,o.jsx)(t.code,{children:"XxxAllocator"})," Wrapper struct. The wrapper structs contain an instance of the ",(0,o.jsx)(t.code,{children:"XxxAllocatorImpl"})," class."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"AllocatorBase"})," itself now contains a ",(0,o.jsx)(t.code,{children:"_wrapper"})," field that is a struct-wrapper instance (which contains the instance pointer of the fully-derived allocator class) that is constrained to the ",(0,o.jsx)(t.code,{children:"IAllocator"})," interface. ",(0,o.jsx)(t.code,{children:"AllocatorBase"})," itself is templated on ",(0,o.jsx)(t.code,{children:"TStoreFunctions"})," and ",(0,o.jsx)(t.code,{children:"TAllocator"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The new Allocator definition supports two interfaces:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"IAllocatorCallbacks"}),", which is inherited by ",(0,o.jsx)(t.code,{children:"IAllocator"}),". This contains the derived-Allocator methods called by ",(0,o.jsx)(t.code,{children:"AllocatorBase"})," that we want to inline rather then virtcall. The struct wrapper ",(0,o.jsx)(t.code,{children:"AllocatorBase._wrapper"})," implements ",(0,o.jsx)(t.code,{children:"IAllocatorCallbacks"}),", so the call on ",(0,o.jsx)(t.code,{children:"_wrapper"})," inlines the call to ",(0,o.jsx)(t.code,{children:"IAllocatorCallbacks"}),", which then calls down to the derived ",(0,o.jsx)(t.code,{children:"*AllocatorImpl"})," class implementation."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"IAllocator : IAllocatorCallbacks"}),". This is all inlined calls on the Allocator, including ",(0,o.jsx)(t.code,{children:"IAllocatorCallbacks"}),".","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["It turns out not to be possible to keep ",(0,o.jsx)(t.code,{children:"IAllocatorCalbacks"})," as a separate type arg because ",(0,o.jsx)(t.code,{children:"IAllocator"})," must propagate, but ",(0,o.jsx)(t.code,{children:"IAllocatorCallbacks"})," remains as a separate interface (instead of combining it all into ",(0,o.jsx)(t.code,{children:"IAllocator"}),") as the organization may be useful."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["There are still a number of abstract ",(0,o.jsx)(t.code,{children:"AllocatorBase"})," methods, for which inlining of the method call is not important due to the time for the overall call. These are mostly IO and Scan/Iteration methods."]}),"\n",(0,o.jsxs)(t.p,{children:["Within ",(0,o.jsx)(t.code,{children:"TsavoriteKV"}),", we have:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"hlog"})," remains, but is now of type ",(0,o.jsx)(t.code,{children:"TAllocator"})," (the wrapper struct)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"hlogBase"})," is new; it is the ",(0,o.jsx)(t.code,{children:"AllocatorBase"}),". All the calls on the allocator that we don\u2019t need to inline (or are not virtual, such as *Address) are now called on hlogBase.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["It might be cleaner to rename these to ",(0,o.jsx)(t.code,{children:"allocator"})," and ",(0,o.jsx)(t.code,{children:"allocatorBase"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["There is a new ",(0,o.jsx)(t.code,{children:"AllocatorSettings"})," class as well that is created by ",(0,o.jsx)(t.code,{children:"TsavoriteKV"})," when instantiating the allocator. Allocator instantiation is done by a factory ",(0,o.jsx)(t.code,{children:"Func<AllocatorSettings, TStoreFunctions>"})," rather that being passed in as an object, because:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The caller would have to know more internal stuff such as the epoch, whether to create readcache, and so on."}),"\n",(0,o.jsxs)(t.li,{children:["We create temporary ",(0,o.jsx)(t.code,{children:"TsavoriteKV"}),"s, such as when Scanning or Compacting, so there is no way to pass these instances in."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);