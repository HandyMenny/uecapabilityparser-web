import{C as F}from"./q-47ef7121.js";import{l as L,d as u,v as M,w as R,g as D}from"./q-56243b0d.js";import{c,a as n,b as i,d as m,e as U,f as d,g as p,h as T,i as f,j as z,k as H}from"./q-be23cf9e.js";const B=e=>{if(L(),e.combos===void 0||e.combos.length==0)return u(D,null,3,"l2_0");const a=["FR1 DL","FR1 MIMO DL","FR1 MOD DL (QAM)","FR1 SCS DL (kHz)","FR1 BW DL (MHz)","FR2 DL","FR2 MIMO DL","FR2 MOD DL (QAM)","FR2 SCS DL (kHz)","FR2 BW DL (MHz)","FR1 UL","FR1 MIMO UL","FR1 MOD UL (QAM)","FR1 SCS UL (kHz)","FR1 BW UL (MHz)","FR2 UL","FR2 MIMO UL","FR2 MOD UL (QAM)","FR2 SCS UL (kHz)","FR2 BW UL (MHz)","BCS"],t=[];for(let r=0;r<a.length;r++)t.push([]);return e.combos.forEach(({componentsFr1:r,componentsFr2:h,bcs:S})=>{let s=0;const l=[r,h];l.forEach(o=>{t[s++].push(c(o,!0)),t[s++].push(n(o,!0)),t[s++].push(i(o,!0)),t[s++].push(m(o)),t[s++].push(U(o))}),l.forEach(o=>{t[s++].push(d(o,!0)),t[s++].push(p(o,!0)),t[s++].push(T(o,!0)),t[s++].push(f(o)),t[s++].push(z(o))}),t[s++].push(H(S))}),u(F,{get title(){return e.title},hideEmpty:!0,headers:a,data:t,[M]:{title:R(r=>r.title,[e]),hideEmpty:M}},3,"l2_1")};export{B as s_Zdgphc4Ye00};
