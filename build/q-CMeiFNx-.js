import{W as v,S as x}from"./q-DIywAcZT.js";import{u as d,D as f,a as b,d as S,_ as p,f as u,g as O,q as n,h as l,S as m,i as L}from"./q-BllQxhLr.js";const P=v,R=(s,e,t)=>e<s.left||e>s.right||t<s.top||t>s.bottom,w=async s=>{const[e,t]=d();if(!e.isListboxOpenSig.value||!e.listboxRef.value||!e.triggerRef.value)return;const o=e.listboxRef.value.getBoundingClientRect(),a=e.triggerRef.value.getBoundingClientRect(),{clientX:i,clientY:_}=s,c=await t(o,i,_),g=await t(a,i,_);c&&g&&(e.isListboxOpenSig.value=!1)},I=({track:s,cleanup:e})=>{const[t,o]=d();s(()=>t.isListboxOpenSig.value),t.isListboxOpenSig.value&&window.addEventListener("pointerdown",o),e(()=>{window.removeEventListener("pointerdown",o)})},h=s=>{f(n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_Kr2H5qlfgeI"));const e=b(x),t=`${e.localId}-listbox`;return S(n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_0j6s60JYfP0",[e,n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_qw8PmAYPgw0",[e,n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_Sa5IcVHeiNo")])])),p("ul",{...s,children:O(m,null,3,"bD_0"),id:t,ref:e.listboxRef},{"data-closed":u(i=>i.isListboxOpenSig.value?void 0:"",[e],'!p0.isListboxOpenSig.value?"":undefined'),"data-open":u(i=>i.isListboxOpenSig.value?"":void 0,[e],'p0.isListboxOpenSig.value?"":undefined'),role:"listbox"},0,"bD_1")},r=Object.freeze(Object.defineProperty({__proto__:null,_hW:L,s_0j6s60JYfP0:I,s_CDIy00v0mUg:h,s_Kr2H5qlfgeI:P,s_Sa5IcVHeiNo:R,s_qw8PmAYPgw0:w},Symbol.toStringTag,{value:"Module"}));export{L as _hW,I as s_0j6s60JYfP0,h as s_CDIy00v0mUg,P as s_Kr2H5qlfgeI,R as s_Sa5IcVHeiNo,w as s_qw8PmAYPgw0};
