import{C as h}from"./q-DlFKBl5O.js";import{r as i,g as n,n as r,f as l,F as m}from"./q-CqQeKCeh.js";import{c as S,a as c,b as M,d,e as T,f as g,g as D,h as U,i as b,j as L,k as f}from"./q-DYnISpNU.js";import"./q-C7i0xNVT.js";const E=e=>{if(i(),e.combos===void 0||e.combos.length==0)return n(m,null,3,"YJ_0");const a=["NR DL","MIMO DL","MOD DL (QAM)","SCS DL (kHz)","BW DL (MHz)","NR UL","MIMO UL","MOD UL (QAM)","SCS UL (kHz)","BW UL (MHz)","BCS"],o=[];for(let t=0;t<a.length;t++)o.push([]);return e.combos.forEach(({components:t,bcs:u})=>{let s=0;o[s++].push(S(t,!0)),o[s++].push(c(t,!0)),o[s++].push(M(t,!0)),o[s++].push(d(t)),o[s++].push(T(t)),o[s++].push(g(t,!0)),o[s++].push(D(t,!0)),o[s++].push(U(t,!0)),o[s++].push(b(t)),o[s++].push(L(t)),o[s++].push(f(u))}),n(h,{get title(){return e.title},hideEmpty:!0,headers:a,data:o,get pagination(){return e.combos&&e.combos.length>25},coloredBands:!0,[r]:{title:l(t=>t.title,[e]),hideEmpty:r,pagination:l(t=>t.combos&&t.combos.length>25,[e]),coloredBands:r}},3,"YJ_1")};export{E as s_ET5UV9wpTS8};
