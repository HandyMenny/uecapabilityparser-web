import{C}from"./q-k-lyyoSW.js";import{l as h,P as i,L as p,K as e}from"./q-OIKTu0zg.js";const L=n=>{if(h(),!n.nrBands.some(a=>a.maxBwDl??a.maxBwUl??a.maxCCsDl??a.maxCCsUl!=null))return i(p,{children:n.nrBands.map(a=>a.band).join(", ")},1,"ZI_0");const o=["Band","BW DL (MHz)","BW UL (MHz)","CCs DL","CCs UL"],s=[];for(let a=0;a<o.length;a++)s.push([]);return n.nrBands.forEach(a=>{var r,m,l,d;let t=0;s[t++].push(a.band.toString()),s[t++].push(((r=a.maxBwDl)==null?void 0:r.toString())??""),s[t++].push(((m=a.maxBwUl)==null?void 0:m.toString())??""),s[t++].push(((l=a.maxCCsDl)==null?void 0:l.toString())??""),s[t++].push(((d=a.maxCCsUl)==null?void 0:d.toString())??"")}),i(C,{data:s,headers:o,hideEmpty:!0,noSpoiler:!0,[e]:{hideEmpty:e,noSpoiler:e}},3,"ZI_1")};export{L as s_HLnpFzyWYaE};
