import{C as m}from"./q-93c4c166.js";import{f as i,h as a,v as h,w as n,x as u}from"./q-571c73fd.js";import{c as d,a as M,b as c,f as T,g as f,h as L,k as S}from"./q-be23cf9e.js";const D=e=>{if(i(),e.combos===void 0||e.combos.length==0)return a(u,null,3,"kF_0");const r=["LTE DL","MIMO DL","Mod DL (QAM)","LTE UL","MIMO UL","Mod UL (QAM)","BCS"],o=[];for(let t=0;t<r.length;t++)o.push([]);return e.combos.forEach(({components:t,bcs:l})=>{let s=0;o[s++].push(d(t)),o[s++].push(M(t)),o[s++].push(c(t)),o[s++].push(T(t)),o[s++].push(f(t)),o[s++].push(L(t)),o[s++].push(S(l))}),a(m,{get title(){return e.title},data:o,headers:r,hideEmpty:!0,[h]:{hideEmpty:h,title:n(t=>t.title,[e])}},3,"kF_1")};export{D as s_3UzNI81hmEw};
