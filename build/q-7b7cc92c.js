import{C as n}from"./q-47ef7121.js";import{l as u,d as l,v as r,w as h,g as d}from"./q-56243b0d.js";import{m as i,a as m,p}from"./q-9e2046df.js";const D=e=>{if(u(),e.bands===void 0||e.bands.length==0)return l(d,null,3,"Sy_0");const a=["Band","MIMO DL","MOD DL","MIMO UL","MOD UL","Power Class"],s=[];for(let t=0;t<a.length;t++)s.push([]);return e.bands.forEach(t=>{let o=0;s[o++].push(t.band.toString()),s[o++].push(i(t.mimoDl)),s[o++].push(m(t.modulationDl)),s[o++].push(i(t.mimoUl)),s[o++].push(m(t.modulationUl)),s[o++].push(p(t.powerClass))}),l(n,{get title(){return e.title},hideEmpty:!0,headers:a,data:s,[r]:{title:h(t=>t.title,[e]),hideEmpty:r}},3,"Sy_1")};export{D as s_XHwTFp0s9lo};
