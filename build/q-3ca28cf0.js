import{R as _,o as S,h as o,_ as r,W as P,s as E,j as p,f as h,S as c,Y as d,z as T,H as W}from"./q-0a566167.js";import{a as z}from"./q-47b9d439.js";import{S as A}from"./q-a76d7ae0.js";import{l as O}from"./q-01266c65.js";const R=async e=>{const[n]=_();try{const i="/store/getItem",a=(await z.get(i,{params:{id:e}})).data;n.value[e]=a}catch{}return n.value[e]},U=async()=>{var l;const[e,n,i]=_(),s=(l=e.value)==null?void 0:l.id;if(s==null)return;const a=i.value[s]??await n(s);return a==null?void 0:a.inputs},V=()=>{var i;const[e,n]=_();return(i=n.capabilitiesList)==null?void 0:i[e.value]},j=e=>{const[n]=_(),i=Number.parseInt(e);n.value=i},C=S(o(()=>r(()=>import("./q-d92dd740.js"),["build/q-d92dd740.js","build/q-0a566167.js","build/q-94a114a3.js","build/q-557e1a0a.js","build/q-22ff7a89.js","build/q-47b9d439.js"]),"s_CQ3Pn250fG0")),N=e=>{var b,g,f,x;const n=P(0),i=E(o(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_M2E6PEhzjpg",[n,e])),s=P({}),l=E(o(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_rWqyWnUJe4k",[i,o(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_9KFdxWCvbg4",[s]),s])),m=[],I=((b=e.capabilitiesList)==null?void 0:b.map(t=>t.metadata.description??"").filter(t=>t.length>0))??[],y=new Set(I).size==((g=e.capabilitiesList)==null?void 0:g.length),v=((f=e.capabilitiesList)==null?void 0:f.map(t=>t.logType))??[],L=new Set(v).size==v.length;return(x=e.capabilitiesList)==null||x.map((t,w)=>{m.push({label:y?t.metadata.description:L?O(t.logType):t.id,value:w})}),p(T,{children:[!e.hideTitle&&h("h1",null,{class:c(t=>"mb-2 text-center text-4xl font-semibold"+(t.hidden?" hidden":""),[e])},"View",3,"NL_0"),h("div",{class:"mb-4 flex flex-col "+(e.hidden||m.length<2?" hidden":"")},null,h("div",null,{class:"mx-auto w-full max-w-7xl"},p(A,{label:"Select log",onInput$:o(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_4gaGE7z61PU",[n]),options:m,[d]:{label:d,onInput$:d}},3,"NL_1"),1,null),1,null),p(C,{get capabilities(){return i.value},get inputs(){return l.value},get hidden(){return e.hidden},[d]:{capabilities:c(t=>t.value,[i]),hidden:c(t=>t.hidden,[e]),inputs:c(t=>t.value,[l])}},3,"NL_2")]},1,"NL_3")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:W,s_4gaGE7z61PU:j,s_9KFdxWCvbg4:R,s_AU75U67QNPw:N,s_M2E6PEhzjpg:V,s_rWqyWnUJe4k:U},Symbol.toStringTag,{value:"Module"}));export{W as _hW,j as s_4gaGE7z61PU,R as s_9KFdxWCvbg4,N as s_AU75U67QNPw,V as s_M2E6PEhzjpg,U as s_rWqyWnUJe4k};