import{C as l}from"./q-93c4c166.js";import{f as S,h as a,v as u,w as i,x as m}from"./q-571c73fd.js";import{c as n,a as M,b as T,d as c,e as p,f as D,g as d,h as U,i as L,j as f,k as b}from"./q-be23cf9e.js";const g=r=>{if(S(),r.combos===void 0||r.combos.length==0)return a(m,null,3,"YJ_0");const e=["NR DL","MIMO DL","MOD DL (QAM)","SCS DL (kHz)","BW DL (MHz)","NR UL","MIMO UL","MOD UL (QAM)","SCS UL (kHz)","BW UL (MHz)","BCS"],s=[];for(let t=0;t<e.length;t++)s.push([]);return r.combos.forEach(({components:t,bcs:h})=>{let o=0;s[o++].push(n(t,!0)),s[o++].push(M(t,!0)),s[o++].push(T(t,!0)),s[o++].push(c(t)),s[o++].push(p(t)),s[o++].push(D(t,!0)),s[o++].push(d(t,!0)),s[o++].push(U(t,!0)),s[o++].push(L(t)),s[o++].push(f(t)),s[o++].push(b(h))}),a(l,{get title(){return r.title},data:s,headers:e,hideEmpty:!0,[u]:{hideEmpty:u,title:i(t=>t.title,[r])}},3,"YJ_1")};export{g as s_ET5UV9wpTS8};
