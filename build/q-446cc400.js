import{C as n}from"./q-36cd155f.js";import{w as u,N as l,l as d,M as m,E as h}from"./q-65a24087.js";import{m as s,a as r}from"./q-ffe8966b.js";const D=o=>{if(u(),o.bands===void 0||o.bands.length==0)return l(d,null,3,"Sy_0");const i=["Band","MIMO DL","MOD DL","MIMO UL","MOD UL"],e=[];for(let t=0;t<i.length;t++)e.push([]);return o.bands.map(t=>{let a=0;e[a++].push(t.band.toString()),e[a++].push(s(t.mimoDl)),e[a++].push(r(t.modulationDl)),e[a++].push(s(t.mimoUl)),e[a++].push(r(t.modulationUl))}),l(n,{get title(){return o.title},hideEmpty:!0,headers:i,data:e,[m]:{title:h(t=>t.title,[o]),hideEmpty:m}},3,"Sy_1")};export{D as s_XHwTFp0s9lo};
