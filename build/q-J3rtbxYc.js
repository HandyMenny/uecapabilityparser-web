import{A as p}from"./q-bmToohCY.js";import{E as d,a as m}from"./q-y2-pKzoJ.js";import{l as _,o as f,I as g,F as v,j as i,g as l,_ as c,K as e,m as P,z as E,B as h,p as w,E as C,i as b}from"./q-wmLSt4i7.js";import{C as I}from"./q-4mAkmHLo.js";import{M as L}from"./q-Il5uIlS4.js";import{T as O}from"./q-sVWZ-PS9.js";import{a as x}from"./q-6ooX8ese.js";const y=async t=>{const n=d.STORE+"getMultiOutput";try{return(await m.get(n,{params:{id:t}})).data}catch(r){throw new p(r)}},M=({track:t})=>{const[s,n]=_(),r=t(()=>n.value);if(r!=null)return s(r)},R=()=>{const[t,s]=_();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},T=()=>{const t=x(),s=f(void 0),r=g(l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_HNC7LMjQmKQ",[l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_OYk1QrPP0pw"),s]));v(l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_dInJc0nFE8M",[s,t]),{strategy:"document-ready"});const a=i(I,{centered:!0,[e]:{centered:e}},3,"60_0");return i(E,{children:[i(O,{text:"View",[e]:{text:e}},3,"60_1"),P("div",null,{class:"flex flex-1 flex-col"},i(h,{onPending:()=>a,onResolved:o=>(w(),o==null?a:i(L,{capabilitiesList:o.capabilitiesList??[],get groupDescription(){return o.description},[e]:{groupDescription:C(o,"description")}},3,"60_2")),value:r,[e]:{onPending:e,onResolved:e,value:e}},3,"60_3"),1,null)]},1,"60_4")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_HNC7LMjQmKQ:M,s_OYk1QrPP0pw:y,s_dInJc0nFE8M:R,s_tmK0u2EvIdc:T},Symbol.toStringTag,{value:"Module"}));export{b as _hW,M as s_HNC7LMjQmKQ,y as s_OYk1QrPP0pw,R as s_dInJc0nFE8M,T as s_tmK0u2EvIdc};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}