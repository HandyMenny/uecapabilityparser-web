import{$ as _,f as v,I as b,u as D,E as r,b as o,k as c,K as e,O as u,e as d,_ as f}from"./q-B2JE0ZoP.js";import{N as i}from"./q-BEQhg5s8.js";import{S as p}from"./q-D9iEY4YN.js";import{T as h}from"./q-eok4Gn_j.js";const x=async l=>{const[s]=_();s.value=l},I=()=>{const[l,s]=_();let a=l;return s.lte==!1&&(a=a.filter(t=>!t.value.startsWith("lte"))),s.nr==!1&&(a=a.filter(t=>!t.value.startsWith("nr"))),s.nrDc==!1&&(a=a.filter(t=>!t.value.startsWith("nrDc"))),a},$=l=>{v();const a=b(c(()=>f(()=>Promise.resolve().then(()=>m),void 0),"s_guku10G5RSY",[[{label:"LTE DL",value:"lteDl"},{label:"LTE UL",value:"lteUl"},{label:"NR DL",value:"nrDl"},{label:"NR UL",value:"nrUl"},{label:"NR DC DL",value:"nrDcDl"},{label:"NR DC UL",value:"nrDcUl"}],l])),t=D(l.lte?"lteDl":"nrDl");return r(d,{children:[o("div",null,{class:"flex-1"},r(p,{label:"Type",get name(){return`type-${l.suffix}`},get options(){return a.value},onInput$:c(()=>f(()=>Promise.resolve().then(()=>m),void 0),"s_jX0aOgUnahU",[t]),[e]:{label:e,name:u(n=>`type-${n.suffix}`,[l]),options:u(n=>n.value,[a]),onInput$:e}},3,"D8_0"),1,null),o("div",null,{class:"flex-1"},r(i,{min:0,label:"Band",get name(){return`band-${l.suffix}`},placeholder:"Insert value",[e]:{min:e,label:e,name:u(n=>`band-${n.suffix}`,[l]),placeholder:e}},3,"D8_1"),1,null),o("div",null,{class:"flex-1"},r(h,{label:"BW Class",get name(){return`class-${l.suffix}`},placeholder:"Insert value",[e]:{label:e,name:u(n=>`class-${n.suffix}`,[l]),placeholder:e}},3,"D8_2"),1,null),t.value!="lteUl"&&o("div",null,{class:"flex-1"},r(i,{min:0,label:"MIMO",get name(){return`mimo-${l.suffix}`},placeholder:"Insert value",[e]:{min:e,label:e,name:u(n=>`mimo-${n.suffix}`,[l]),placeholder:e}},3,"D8_3"),1,"D8_4"),t.value.startsWith("nr")&&o("div",null,{class:"flex-1"},r(i,{min:0,label:"BW per CC",get name(){return`bw-${l.suffix}`},placeholder:"Insert value",[e]:{min:e,label:e,name:u(n=>`bw-${n.suffix}`,[l]),placeholder:e}},3,"D8_5"),1,"D8_6")]},1,"D8_7")},m=Object.freeze(Object.defineProperty({__proto__:null,s_6sHTqeXob0Q:$,s_guku10G5RSY:I,s_jX0aOgUnahU:x},Symbol.toStringTag,{value:"Module"}));export{$ as s_6sHTqeXob0Q,I as s_guku10G5RSY,x as s_jX0aOgUnahU};
