import{C as h}from"./q-pVLUnNww.js";import{s as i,g as C,F as p,o as n}from"./q-BllQxhLr.js";const g=e=>{if(i(),!e.nrBands.some(a=>a.maxBwDl??a.maxBwUl??a.maxCCsDl??a.maxCCsUl!=null))return C(p,{children:e.nrBands.map(a=>a.band).join(", ")},1,"ZI_0");const o=["Band","BW DL (MHz)","BW UL (MHz)","CCs DL","CCs UL"],s=[];for(let a=0;a<o.length;a++)s.push([]);return e.nrBands.forEach(a=>{var r,m,d,l;let t=0;s[t++].push(a.band.toString()),s[t++].push(((r=a.maxBwDl)==null?void 0:r.toString())??""),s[t++].push(((m=a.maxBwUl)==null?void 0:m.toString())??""),s[t++].push(((d=a.maxCCsDl)==null?void 0:d.toString())??""),s[t++].push(((l=a.maxCCsUl)==null?void 0:l.toString())??"")}),C(h,{hideEmpty:!0,headers:o,data:s,noSpoiler:!0,[n]:{hideEmpty:n,noSpoiler:n}},3,"ZI_1")};export{g as s_HLnpFzyWYaE};
