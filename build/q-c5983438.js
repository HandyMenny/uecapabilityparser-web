import{a as p}from"./q-47b9d439.js";import{R as d,W as m,C as f,p as h,j as n,h as l,_ as c,f as _,z as v,M as P,i as b,Y as t,r as g,H as C}from"./q-0a566167.js";import{C as L}from"./q-bcf14b48.js";import{M}from"./q-ffeb1037.js";import{a as w}from"./q-2dfc0e55.js";const E=async s=>{const i="/store/"+"getMultiOutput";try{return(await p.get(i,{params:{id:s}})).data}catch(e){throw console.error(e),alert(e),e}},x=({track:s})=>{const[r,i]=d(),e=s(()=>i.value);if(e!=null)return r(e)},y=()=>{const[s,r]=d();s.value=r.url.searchParams.get("id")??new URLSearchParams(window==null?void 0:window.location.search).get("id")??""},O=()=>{const s=w(),r=m(void 0),e=f(l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_HNC7LMjQmKQ",[l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_OYk1QrPP0pw"),r]));h(l(()=>c(()=>Promise.resolve().then(()=>u),void 0),"s_dInJc0nFE8M",[r,s]),{strategy:"document-ready"});const o=n(L,{centered:!0,[t]:{centered:t}},3,"60_0");return n(v,{children:[_("h1",null,{class:"mb-2 text-center text-4xl font-semibold"},"View",3,null),_("div",null,{class:"flex flex-1 flex-col"},n(P,{onPending:()=>o,onResolved:a=>(b(),a==null?o:n(M,{get capabilitiesList(){return a.capabilitiesList},hideTitle:!0,[t]:{capabilitiesList:g(a,"capabilitiesList"),hideTitle:t}},3,"60_1")),value:e,[t]:{onPending:t,onResolved:t,value:t}},3,"60_2"),1,null)]},1,"60_3")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_HNC7LMjQmKQ:x,s_OYk1QrPP0pw:E,s_dInJc0nFE8M:y,s_tmK0u2EvIdc:O},Symbol.toStringTag,{value:"Module"}));export{C as _hW,x as s_HNC7LMjQmKQ,E as s_OYk1QrPP0pw,y as s_dInJc0nFE8M,O as s_tmK0u2EvIdc};
