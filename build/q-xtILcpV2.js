import{A as d}from"./q-VKuMynVY.js";import{E as p,a as m}from"./q-ZppFbWGL.js";import{f as _,o as f,z as v,s as P,P as i,g as l,_ as c,K as e,h as g,L as E,R as h,l as L,B as w,v as R}from"./q-HklCxkIg.js";import{C as b}from"./q-CZVzQPE4.js";import{M as C}from"./q-XVuOIrcP.js";import{T as O}from"./q-rBIsUg44.js";import{a as x}from"./q-ll-yfXHt.js";const y=async t=>{const n=p.STORE+"getMultiOutput";try{return(await m.get(n,{params:{id:t}})).data}catch(r){throw new d(r)}},M=({track:t})=>{const[s,n]=_(),r=t(()=>n.value);if(r!=null)return s(r)},I=()=>{const[t,s]=_();t.value=s.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},T=()=>{const t=x(),s=f(void 0),r=v(l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_HNC7LMjQmKQ",[l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_OYk1QrPP0pw"),s]));P(l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_dInJc0nFE8M",[s,t]),{strategy:"document-ready"});const a=i(b,{centered:!0,[e]:{centered:e}},3,"60_0");return i(E,{children:[i(O,{text:"View",[e]:{text:e}},3,"60_1"),g("div",null,{class:"flex flex-1 flex-col"},i(h,{onPending:()=>a,onResolved:o=>(L(),o==null?a:i(C,{capabilitiesList:o.capabilitiesList??[],get groupDescription(){return o.description},[e]:{groupDescription:w(o,"description")}},3,"60_2")),value:r,[e]:{onPending:e,onResolved:e,value:e}},3,"60_3"),1,null)]},1,"60_4")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_HNC7LMjQmKQ:M,s_OYk1QrPP0pw:y,s_dInJc0nFE8M:I,s_tmK0u2EvIdc:T},Symbol.toStringTag,{value:"Module"}));export{R as _hW,M as s_HNC7LMjQmKQ,y as s_OYk1QrPP0pw,I as s_dInJc0nFE8M,T as s_tmK0u2EvIdc};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}