import{$ as d,r as m,k as i,_ as s,u as b,b as r,O as t,E as o,K as n}from"./q-B2JE0ZoP.js";import{B as _}from"./q-CgdlzuZG.js";import{N as f}from"./q-BEQhg5s8.js";const v=async()=>{const[e]=d();e.value>1&&e.value--},x=m(i(()=>s(()=>import("./q-DvIJhQ4V.js"),[]),"s_qDtOTkDyxBY")),y=e=>{const u=b(1);return r("div",null,{class:"flex flex-col"},[r("label",null,{for:t(l=>`multi-combo-${l.suffix}`,[e]),"aria-label":t(l=>l.label,[e]),class:"my-2"},t(l=>l.label,[e]),3,null),r("div",null,{class:"border-2 border-solid border-gray-500 px-4",id:t(l=>`multi-combo-${l.suffix}`,[e])},[o(f,{get name(){return`value-${e.suffix}`},get value(){return u.value},hidden:!0,[n]:{name:t(l=>`value-${l.suffix}`,[e]),value:t(l=>l.value,[u]),hidden:n}},3,"3V_0"),[...Array(u.value).keys()].map(l=>r("div",null,null,o(x,{suffix:`${e.suffix}-${l}`,get lte(){return e.lte},get nr(){return e.nr},get nrDc(){return e.nrDc},label:"Components",[n]:{lte:t(a=>a.lte,[e]),nr:t(a=>a.nr,[e]),nrDc:t(a=>a.nrDc,[e]),label:n}},3,"3V_1"),1,`multi-combo-${e.suffix}-${l}`)),r("div",null,{class:"flex flex-wrap gap-x-4"},[o(_,{type:"button",label:"Remove",get hidden(){return u.value<2},onClick$:i(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_WMHjPx0hMCY",[u]),[n]:{type:n,label:n,hidden:t(l=>l.value<2,[u]),onClick$:n}},3,"3V_2"),o(_,{type:"button",label:"Add",onClick$:i(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_L9Lk8iJjnJI",[u]),[n]:{type:n,label:n,onClick$:n}},3,"3V_3")],1,null)],1,null)],1,"3V_4")},$=async()=>{const[e]=d();e.value++},c=Object.freeze(Object.defineProperty({__proto__:null,s_2pjEpZsdP20:y,s_L9Lk8iJjnJI:$,s_WMHjPx0hMCY:v},Symbol.toStringTag,{value:"Module"}));export{y as s_2pjEpZsdP20,$ as s_L9Lk8iJjnJI,v as s_WMHjPx0hMCY};
