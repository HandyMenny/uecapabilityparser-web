import{A as T,m as g}from"./q-Lk5TQFe8.js";import{E as A,a as E}from"./q-Vw2Ei1e8.js";import{$ as L,u as c,L as w,A as R,E as o,K as e,b as p,B as x,f as O,e as h,O as P,k as u,_ as m,w as b}from"./q-B2JE0ZoP.js";import{A as S}from"./q-BYWMa2Y9.js";import{C as q}from"./q-DVO3yn3A.js";import{L as Y}from"./q-o4nyoZoJ.js";import{T as M}from"./q-C_WSgv6O.js";const k=async()=>{const t=A.STORE+"list";try{const n=(await E.get(t)).data,a=n.items,i=(n.multiItems??[]).filter(r=>r.indexLineIds.filter(I=>a.find(y=>y.id==I)).length>0),s=i.flatMap(r=>r.indexLineIds),v=[...a.filter(r=>!s.includes(r.id)),...i];return v.sort((r,f)=>f.timestamp-r.timestamp),v}catch(l){throw new T(l)}},D=()=>{const[t]=L();t.value=!0},K=({track:t})=>{const[l,n]=L();return t(()=>{l.value}),n()},W=()=>{const t=c(!1),n=w(u(()=>m(()=>Promise.resolve().then(()=>_),void 0),"s_K2AL36ToWNc",[t,u(()=>m(()=>Promise.resolve().then(()=>_),void 0),"s_8kHd0t4Kr4U")]));R(u(()=>m(()=>Promise.resolve().then(()=>_),void 0),"s_aI8LeIpOv9A",[t]),{strategy:"document-ready"});const a=o(q,{centered:!0,[e]:{centered:e}},3,"qY_0"),d=c(!1),i=c("");return o(h,{children:[o(M,{text:"Library",[e]:{text:e}},3,"qY_1"),p("div",null,{class:"flex flex-1 flex-col"},[o(x,{value:n,onPending:()=>a,onResolved:s=>(O(),s==null?a:o(Y,{data:s,searchId:"library",[e]:{searchId:e}},3,"qY_2")),onRejected:s=>(d.value=!0,i.value=g(s.message),o(h,null,3,"qY_3")),[e]:{value:e,onPending:e,onResolved:e,onRejected:e}},3,"qY_4"),o(S,{title:"Error",show:d,children:p("p",null,{dangerouslySetInnerHTML:P(s=>s.value,[i])},null,3,null),[e]:{title:e,show:e}},3,"qY_5")],1,null)]},1,"qY_6")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_8kHd0t4Kr4U:k,s_K2AL36ToWNc:K,s_aI8LeIpOv9A:D,s_d0IvhoDvWfs:W},Symbol.toStringTag,{value:"Module"}));export{b as _hW,k as s_8kHd0t4Kr4U,K as s_K2AL36ToWNc,D as s_aI8LeIpOv9A,W as s_d0IvhoDvWfs};
