import{a as h}from"./q-47b9d439.js";import{R as v,o as I,h as l,_ as a,W as L,C as y,p as R,j as i,f as u,z as g,M as P,i as T,Y as r,H as x}from"./q-0a566167.js";import{C as b}from"./q-bcf14b48.js";const A=async()=>{const e="/store/list";try{const o=(await h.get(e)).data,n=o.items,d=(o.multiItems??[]).filter(s=>s.indexLineIds.length>1),p=d.flatMap(s=>s.indexLineIds),m=[...n.filter(s=>!p.includes(s.id)),...d];return m.sort((s,f)=>f.timestamp-s.timestamp),m}catch(t){throw console.error(t),alert(t),t}},E=()=>{const[e]=v();e.value=!0},O=({track:e})=>{const[t,o]=v();return e(()=>{t.value}),o()},S=I(l(()=>a(()=>import("./q-ce9a985a.js"),["build/q-ce9a985a.js","build/q-0a566167.js","build/q-a65bb6f2.js"]),"s_QIGWB25C5SU")),W=()=>{const e=L(!1),o=y(l(()=>a(()=>Promise.resolve().then(()=>_),void 0),"s_K2AL36ToWNc",[e,l(()=>a(()=>Promise.resolve().then(()=>_),void 0),"s_8kHd0t4Kr4U")]));R(l(()=>a(()=>Promise.resolve().then(()=>_),void 0),"s_aI8LeIpOv9A",[e]),{strategy:"document-ready"});const n=i(b,{centered:!0,[r]:{centered:r}},3,"qY_0");return i(g,{children:[u("h1",null,{class:"mb-2 text-center text-4xl font-semibold"},"Library",3,null),u("div",null,{class:"flex flex-1 flex-col"},i(P,{onPending:()=>n,onResolved:c=>(T(),c==null?n:i(S,{data:c},3,"qY_1")),value:o,[r]:{onPending:r,onResolved:r,value:r}},3,"qY_2"),1,null)]},1,"qY_3")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_8kHd0t4Kr4U:A,s_K2AL36ToWNc:O,s_aI8LeIpOv9A:E,s_d0IvhoDvWfs:W},Symbol.toStringTag,{value:"Module"}));export{x as _hW,A as s_8kHd0t4Kr4U,O as s_K2AL36ToWNc,E as s_aI8LeIpOv9A,W as s_d0IvhoDvWfs};
