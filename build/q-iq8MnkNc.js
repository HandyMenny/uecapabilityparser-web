import{l as _,o as d,I as p,F as m,j as r,g as i,_ as a,K as e,m as v,z as f,t as P,p as g,i as y}from"./q-sK9HTalN.js";import{C as T}from"./q-kwfKu-t4.js";import{M as h}from"./q-jDuKkj6P.js";import{T as w}from"./q-CctNuvdI.js";import{a as x}from"./q-DPyw6ytm.js";import{A as E}from"./q-bmToohCY.js";import{E as C,a as L}from"./q-y2-pKzoJ.js";const O=({track:t})=>{const[s,n]=_(),o=t(()=>n.value);if(o!=null)return s(o)},b=()=>{const[t,s]=_();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},D=()=>{const t=x(),s=d(void 0),o=p(i(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_vx8QB3U0mW8",[i(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_NdiPeYMKWOw"),s]));m(i(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_HjDTTLTuCps",[s,t]),{strategy:"document-ready"});const c=r(T,{centered:!0,[e]:{centered:e}},3,"0y_0");return r(f,{children:[r(w,{text:"View",[e]:{text:e}},3,"0y_1"),v("div",null,{class:"flex flex-1 flex-col"},r(P,{onPending:()=>c,onResolved:u=>(g(),u==null?c:r(h,{capabilitiesList:[u]},3,"0y_2")),value:o,[e]:{onPending:e,onResolved:e,value:e}},3,"0y_3"),1,null)]},1,"0y_4")},I=async t=>{const n=C.STORE+"getOutput";try{return(await L.get(n,{params:{id:t}})).data}catch(o){throw new E(o)}},l=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_1AFCdPDLG0I:D,s_HjDTTLTuCps:b,s_NdiPeYMKWOw:I,s_vx8QB3U0mW8:O},Symbol.toStringTag,{value:"Module"}));export{y as _hW,D as s_1AFCdPDLG0I,b as s_HjDTTLTuCps,I as s_NdiPeYMKWOw,O as s_vx8QB3U0mW8};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}