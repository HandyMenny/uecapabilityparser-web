import{u as C,v as q,q as g,h as D,b as W,m as v,g as y,o as s,f as U,i as Q}from"./q-BllQxhLr.js";import{B as $}from"./q-j_-OEw2u.js";import{A as R}from"./q-Lk5TQFe8.js";import{b as k,i as V,a as Z,c as j,d as F,f as G,h as Y,g as z}from"./q-BOiJhlLQ.js";const J=async()=>{const[c]=C();c.value++},X=async()=>{const[c]=C();c.value>1&&c.value--},H=q(g(()=>D(()=>import("./q-EGP8j6kL.js"),[]),"s_WXTgm1srZ7w")),K=c=>{const o=W(1);return v("form",null,{class:"mx-auto w-full max-w-7xl",autocomplete:"off","preventdefault:submit":!0,onSubmit$:g(()=>D(()=>Promise.resolve().then(()=>w),void 0),"s_QGQTmrw02uM",[o,c])},[[...Array(o.value).keys()].map(a=>v("div",null,null,y(H,{suffix:a+""},3,"0W_0"),1,`search-${a}`)),v("div",null,{class:"flex flex-wrap gap-x-4"},[y($,{type:"button",label:"Remove",get hidden(){return o.value<2},onClick$:g(()=>D(()=>Promise.resolve().then(()=>w),void 0),"s_dLrqCONi9ZY",[o]),[s]:{type:s,label:s,hidden:U(a=>a.value<2,[o]),onClick$:s}},3,"0W_1"),y($,{type:"button",label:"Add",onClick$:g(()=>D(()=>Promise.resolve().then(()=>w),void 0),"s_i0vI4B435ZI",[o]),[s]:{type:s,label:s,onClick$:s}},3,"0W_2"),v("div",null,{class:U(a=>a.value>1&&"min-w-full"||"flex-1",[o])},y($,{type:"submit",label:"Submit",[s]:{type:s,label:s}},3,"0W_3"),1,null)],1,null)],1,"0W_4")},ee=(c,o)=>{const[S,a]=C();try{const h=S.value,P=o,n=new FormData(P),O=[];for(let u=0;u<h;u++){const t=n.get(`field-${u}`),p=n.get(`comparator-${u}`),d=n.get(`value-${u}`);let m;if(k(t))m={type:"number",field:t,comparator:p,value:new Date(d).getTime()};else if(V(t))m={type:"number",field:t,comparator:p,value:parseInt(d)};else if(Z(t)||j(t))m={type:"string",field:t,comparator:p,value:d};else if(F(t))m={type:"strings",field:t,comparator:p,value:d.split(",").map(f=>f.trim())};else if(G(t)){const f=Y(t);m={type:"bands",field:t,comparator:p,value:d.split(",").map(_=>({type:f?"lte":"nr",band:parseInt(_)}))}}else if(z(t)){const f=parseInt(d),_=[];for(let i=0;i<f;i++){const e={lteDl:[],lteUl:[],nrDl:[],nrUl:[],nrDcDl:[],nrDcUl:[]},A=`combo-value${`-${u}-${i}`}`,T=parseInt(n.get(A));for(let I=0;I<T;I++){const b=`-${u}-${i}-${I}`,x=n.get(`type${b}`);if(x==null)continue;const N=parseInt(n.get(`band${b}`)),B=parseInt(n.get(`mimo${b}`)),L=n.get(`class${b}`),E=parseInt(n.get(`bw${b}`)),r={};r.type=x.replace("Dc",""),r.band=N,L!=null&&L.length>0&&(r.minBwClass=L),r.type!="lteUl"&&!isNaN(B)&&(r.minMimo=B),!isNaN(E)&&(r.type=="nrDl"||r.type=="nrUl")&&(r.minMaxBwPerCC=E),e[x].push(r)}T>0&&_.push(e)}const M=[];for(let i=0;i<_.length;i++){const e={},l=_[i];t=="LTE_COMBOS"||t=="NR_COMBOS"?(e.type="simple",e.type=="simple"&&(t=="LTE_COMBOS"?(e.dl=l.lteDl,e.ul=l.lteUl):(e.dl=l.nrDl,e.ul=l.nrUl))):(e.type="mrdc",e.type=="mrdc"&&(t=="ENDC_COMBOS"?(e.dlMaster=l.lteDl,e.ulMaster=l.lteUl,e.dlSecondary=l.nrDl,e.ulSecondary=l.nrUl):(e.dlMaster=l.nrDl,e.ulMaster=l.nrUl,e.dlSecondary=l.nrDcDl,e.ulSecondary=l.nrDcUl))),M.push(e)}m={type:"combos",field:t,comparator:p,value:M}}else throw"Not supported by this demo";O.push(m)}a.query.criteriaList=O}catch(h){throw new R(h)}},w=Object.freeze(Object.defineProperty({__proto__:null,_hW:Q,s_QGQTmrw02uM:ee,s_dLrqCONi9ZY:X,s_i0vI4B435ZI:J,s_iov0lSPLJrw:K},Symbol.toStringTag,{value:"Module"}));export{Q as _hW,ee as s_QGQTmrw02uM,X as s_dLrqCONi9ZY,J as s_i0vI4B435ZI,K as s_iov0lSPLJrw};
