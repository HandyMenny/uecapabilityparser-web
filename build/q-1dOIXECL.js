import{C as u}from"./q-5Wogx49t.js";import{g as n,j as r,p as l,S as h,R as d}from"./q-SMsUJ5It.js";import{m as i,a as m,p}from"./q-1h43lCrU.js";const M=o=>{if(n(),o.bands===void 0||o.bands.length==0)return r(d,null,3,"Sy_0");const a=["Band","MIMO DL","MOD DL","MIMO UL","MOD UL","Power Class"],s=[];for(let t=0;t<a.length;t++)s.push([]);return o.bands.forEach(t=>{let e=0;s[e++].push(t.band.toString()),s[e++].push(i(t.mimoDl)),s[e++].push(m(t.modulationDl)),s[e++].push(i(t.mimoUl)),s[e++].push(m(t.modulationUl)),s[e++].push(p(t.powerClass))}),r(u,{get title(){return o.title},data:s,headers:a,hideEmpty:!0,[l]:{hideEmpty:l,title:h(t=>t.title,[o])}},3,"Sy_1")};export{M as s_XHwTFp0s9lo};