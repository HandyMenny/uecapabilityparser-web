import{A as v,m as P}from"./q-Lk5TQFe8.js";import{E as h,a as w}from"./q-ChQqLFQJ.js";import{u as f,b as l,L as E,e as L,g as o,o as e,m,R as M,s as x,M as R,F as g,f as b,q as u,h as c,i as T}from"./q-BllQxhLr.js";import{A as C}from"./q-DHIS4TvB.js";import{C as j}from"./q-CsHD8lWQ.js";import{M as y}from"./q-BrF60kEh.js";import{T as A}from"./q-BMLO-jUc.js";import{a as I}from"./q-Dzbbrchh.js";const O=async s=>{const i=h.STORE+"getMultiOutput";try{return(await w.get(i,{params:{id:s}})).data}catch(n){throw new v(n)}},Q=({track:s})=>{const[r,i]=f(),n=s(()=>i.value);if(n!=null)return r(n)},S=()=>{const[s,r]=f();s.value=r.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},D=()=>{const s=I(),r=l(void 0),n=E(u(()=>c(()=>Promise.resolve().then(()=>_),void 0),"s_HNC7LMjQmKQ",[u(()=>c(()=>Promise.resolve().then(()=>_),void 0),"s_OYk1QrPP0pw"),r]));L(u(()=>c(()=>Promise.resolve().then(()=>_),void 0),"s_dInJc0nFE8M",[r,s]),{strategy:"document-ready"});const a=o(j,{centered:!0,[e]:{centered:e}},3,"60_0"),d=l(!1),p=l("");return o(g,{children:[o(A,{text:"View",[e]:{text:e}},3,"60_1"),m("div",null,{class:"flex flex-1 flex-col"},[o(M,{value:n,onPending:()=>a,onResolved:t=>(x(),t==null?a:o(y,{capabilitiesList:t.capabilitiesList??[],get groupDescription(){return t.description},[e]:{groupDescription:R(t,"description")}},3,"60_2")),onRejected:t=>(d.value=!0,p.value=P(t.message),o(g,null,3,"60_3")),[e]:{value:e,onPending:e,onResolved:e,onRejected:e}},3,"60_4"),o(C,{title:"Error",show:d,children:m("p",null,{dangerouslySetInnerHTML:b(t=>t.value,[p])},null,3,null),[e]:{title:e,show:e}},3,"60_5")],1,null)]},1,"60_6")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:T,s_HNC7LMjQmKQ:Q,s_OYk1QrPP0pw:O,s_dInJc0nFE8M:S,s_tmK0u2EvIdc:D},Symbol.toStringTag,{value:"Module"}));export{T as _hW,Q as s_HNC7LMjQmKQ,O as s_OYk1QrPP0pw,S as s_dInJc0nFE8M,D as s_tmK0u2EvIdc};
