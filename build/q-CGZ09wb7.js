import{$ as I,I as q,u as t,T as D,d as $,a as A,P as Q,E as j,k as v,_ as S,H as k,w as J}from"./q-B2JE0ZoP.js";import{f as M}from"./q-DoZ_E8dk.js";const W=()=>{const[p,l,r,d]=I(),u=l,c=r,g=p;return d.map((e,i)=>{let s,n,o,b;if(typeof e=="string")s=e,n=e,o=!1;else if(s=e[c],n=e[u],o=!!e[g],typeof n!="string")throw new Error('Qwik UI: Combobox optionLabelKey was not provided, and the option was not a string. Please provide a value for optionLabelKey, use the property name "label", or ensure that the option is a string.');return{option:e,key:i,value:s,label:n,disabled:o,lcLabel:b}})},Z=async function({track:l}){var s;const[r,d,u,c]=I(),g=l(()=>c.value),e=l(()=>u.value);let i=await((s=l(()=>r))==null?void 0:s.resolve());i||(i=(n,o)=>{if(!o)return[];if(!n)return o;const b=n.toLowerCase();return o.filter(f=>{let{lcLabel:a}=f;return a||(a=f.label.toLowerCase(),f.lcLabel=a),a.includes(b)})}),d.value=i(e,g)},z=p=>{const{"bind:isListboxOpen":l,"bind:isInputFocused":r,"bind:inputValue":d,"bind:highlightedIndex":u,"bind:selectedIndex":c,options:g,defaultLabel:e="",optionValueKey:i="value",optionLabelKey:s="label",optionDisabledKey:n="disabled",filter$:o,...b}=p,f=q(v(()=>S(()=>Promise.resolve().then(()=>h),void 0),"s_ucTqZ00im1o",[n,s,i,g])),a=t([]),x=t(e),_=d||x;D(v(()=>S(()=>Promise.resolve().then(()=>h),void 0),"s_2PyQf4t7JhE",[o,a,_,f]));const y=t(),L=t(),m=t(),P=t(),w=t(),K=t(-1),O=c||K,V=t(!1),E=l||V,R=t(!1),T=r||R,C=t(-1),F=u||C,H=$();return A(M,{filteredOptionsSig:a,inputValueSig:_,labelRef:y,inputRef:m,popoverRef:P,localId:H,triggerRef:w,listboxRef:L,isInputFocusedSig:T,isListboxOpenSig:E,highlightedIndexSig:F,selectedIndexSig:O,defaultLabel:e,optionValueKey:i,optionLabelKey:s,optionDisabledKey:n}),Q("div",{...b,children:j(k,null,3,"Rq_0")},null,0,"Rq_1")},h=Object.freeze(Object.defineProperty({__proto__:null,_hW:J,s_2PyQf4t7JhE:Z,s_cYgw4H4Ms2s:z,s_ucTqZ00im1o:W},Symbol.toStringTag,{value:"Module"}));export{J as _hW,Z as s_2PyQf4t7JhE,z as s_cYgw4H4Ms2s,W as s_ucTqZ00im1o};
