import{u as A,G as K,y as m,_ as x,g as z,Z as P,n as Z,M as p,d as E,Y as n,q as y,A as M,p as Y}from"./q-OyUNoDim.js";import{a as I}from"./q-QLjAsgXu.js";import{B as W}from"./q-R2-L3Y_F.js";import{C as X}from"./q-bMS8yB9f.js";import{M as J}from"./q-FDJeQ89d.js";import{T as V}from"./q-uHTLEijd.js";const ee=typeof btoa=="function",k=typeof Buffer=="function";typeof TextDecoder=="function"&&new TextDecoder;const q=typeof TextEncoder=="function"?new TextEncoder:void 0,te="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",T=Array.prototype.slice.call(te);(e=>{let t={};return e.forEach((s,a)=>t[s]=a),t})(T);const _=String.fromCharCode.bind(String);typeof Uint8Array.from=="function"&&Uint8Array.from.bind(Uint8Array);const G=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),ae=e=>{let t,s,a,r,d="";const v=e.length%3;for(let l=0;l<e.length;){if((s=e.charCodeAt(l++))>255||(a=e.charCodeAt(l++))>255||(r=e.charCodeAt(l++))>255)throw new TypeError("invalid character found");t=s<<16|a<<8|r,d+=T[t>>18&63]+T[t>>12&63]+T[t>>6&63]+T[t&63]}return v?d.slice(0,v-3)+"===".substring(v):d},H=ee?e=>btoa(e):k?e=>Buffer.from(e,"binary").toString("base64"):ae,U=k?e=>Buffer.from(e).toString("base64"):e=>{let s=[];for(let a=0,r=e.length;a<r;a+=4096)s.push(_.apply(null,e.subarray(a,a+4096)));return H(s.join(""))},j=(e,t=!1)=>t?G(U(e)):U(e),se=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?_(192|t>>>6)+_(128|t&63):_(224|t>>>12&15)+_(128|t>>>6&63)+_(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return _(240|t>>>18&7)+_(128|t>>>12&63)+_(128|t>>>6&63)+_(128|t&63)}},ne=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,re=e=>e.replace(ne,se),Q=k?e=>Buffer.from(e,"utf8").toString("base64"):q?e=>U(q.encode(e)):e=>H(re(e)),B=(e,t=!1)=>t?G(Q(e)):Q(e),oe=async(e,t)=>{const[s,a,r,d,v,l,F]=A();d.value=void 0,l.value=!0;try{const u=new FormData(t),o=s.value,f=[];for(let i=0;i<o;i++){const c=u.get(`${i}-type`),g=await F(c,u.get(`${i}-inputText`)),D=u.getAll(`${i}-inputFile`);let C="";if(D.length>1){const N=await Promise.all(D.map(async b=>await b.text()));C=B(N.reduce((b,L)=>b+`

`+L))}else D.length!=0&&(C=await a(D[0]));const w=C.length>0?C:g;if(c=="P"&&w.startsWith("Cg0NC")&&w[5]>"f"&&w[5]<"w")throw"PcapNg isn't supported, please convert this file to PCAP before submitting.";let R="",S="";if(c=="H"){const N=B(u.get(`${i}-inputENDCText`)),b=await a(u.get(`${i}-inputENDCFile`));R=b.length>0?b:N;const L=B(u.get(`${i}-inputNRText`)),$=await a(u.get(`${i}-inputNRFile`));S=$.length>0?$:L}const O=u.get(`${i}-description`);r?f.push({type:c,inputs:[w,R,S],subTypes:["LTE","ENDC","NR"],description:O}):f.push({type:c,input:w,inputENDC:R,inputNR:S,multiple0xB826:!0,description:O})}if(r){const i="/parse/multi",c=await I.post(i,f),g=c.data;if(g.capabilitiesList==null)throw"Parsing failed. The input is invalid or doesn't contain valid data.";history.pushState({},"","/view/multi/?id="+c.data.id),window.addEventListener("popstate",()=>{d.value=void 0,v.value=void 0,l.value=!1},{once:!0}),l.value=!1,d.value=g.capabilitiesList,v.value=g.description}else{const i="/parse/",c=await I.post(i,f[0]);history.pushState({},"","/view/?id="+c.data.id),window.addEventListener("popstate",()=>{d.value=void 0,v.value=void 0,l.value=!1},{once:!0});const g=c.data;l.value=!1,d.value=[g],v.value=void 0}}catch(u){console.error(u),l.value=!1,alert(u)}},ie=async e=>{const t=await e.arrayBuffer();return j(new Uint8Array(t))},le=async()=>{const[e]=A(),t="/parse/multi";try{const s=await I.get(t,{validateStatus:()=>!0});e.value=s.status!==404&&s.status<500}catch{e.value=!1}},ue=()=>{const[e]=A();e.value>1&&e.value--},ce=async(e,t)=>{const[s]=A();return e=="E"||e=="SHNR"||e=="P"||e=="DLF"||e=="QMDL"||e=="HDF"||e=="SDM"?j(await s(t)):B(t)},de=e=>{var a;const s=(a=e.replace(/\s|0x|,|;/g,"").toUpperCase().match(/[0-9A-Fa-f]{1,2}/g))==null?void 0:a.map(r=>parseInt(r,16));return Uint8Array.from(s??[])},fe=()=>{const[e]=A();e()},pe=()=>{const[e]=A();e.value++},_e=K(m(()=>x(()=>import("./q-c4i_b6D5.js"),__vite__mapDeps([])),"s_RxJnt3K50Co")),ve=()=>{z();const e=P(void 0),t=P(void 0),s=P(!1),a=P(1),r=P(!1),F=m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_XNkxOB2umQE",[a,m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_FPWv3lWNHQg"),r,e,t,s,m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_GMaQow7nNzE",[m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_Iqiy8FRI5Ek")])]);return Z(m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_Rsa6BhqxF4U",[m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_dhAdK6R80Rc",[r])]),{strategy:"document-ready"}),p(M,{children:[E("div",null,{class:y((o,f)=>f.value||o.value!==void 0?"hidden":"",[e,s])},[p(V,{addClasses:"mb-4",text:"Parser",[n]:{addClasses:n,text:n}},3,"aW_0"),E("div",null,{class:"my-[-1rem] flex flex-1 flex-col"},E("form",null,{autocomplete:"off",class:"m-auto w-full max-w-2xl",onSubmit$:F,"preventdefault:submit":!0},[[...Array(a.value).keys()].map(o=>p(_e,{prefix:`${o}-`,submitting:s,get multiparse(){return r.value},[n]:{multiparse:y(f=>f.value,[r]),submitting:n}},3,o)),E("div",null,{class:"flex flex-wrap gap-x-4"},[p(W,{label:"Remove",type:"button",get hidden(){return!r.value||a.value<2},onClick$:m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_PZjg2AEq0h0",[a]),[n]:{hidden:y((o,f)=>!f.value||o.value<2,[a,r]),label:n,onClick$:n,type:n}},3,"aW_1"),p(W,{label:"Add",type:"button",get hidden(){return!r.value},onClick$:m(()=>x(()=>Promise.resolve().then(()=>h),void 0),"s_iTi9KwAcEYg",[a]),[n]:{hidden:y(o=>!o.value,[r]),label:n,onClick$:n,type:n}},3,"aW_2"),E("div",null,{class:y(o=>o.value>1&&"min-w-full"||"flex-1",[a])},p(W,{label:"Submit",type:"submit",[n]:{label:n,type:n}},3,"aW_3"),1,null)],1,null)],1,null),1,null)],1,null),e.value==null&&s.value&&E("div",null,{class:"flex flex-1 flex-col"},p(X,{centered:!0,[n]:{centered:n}},3,"aW_4"),1,"aW_5"),e.value!==void 0&&!s.value&&p(M,{children:[p(V,{text:"View",[n]:{text:n}},3,"aW_6"),p(J,{get capabilitiesList(){return e.value},get groupDescription(){return t.value},[n]:{capabilitiesList:y(o=>o.value,[e]),groupDescription:y(o=>o.value,[t])}},3,"aW_7")]},1,"aW_8")]},1,"aW_9")},h=Object.freeze(Object.defineProperty({__proto__:null,_hW:Y,s_FPWv3lWNHQg:ie,s_GMaQow7nNzE:ce,s_Iqiy8FRI5Ek:de,s_PZjg2AEq0h0:ue,s_Rsa6BhqxF4U:fe,s_XNkxOB2umQE:oe,s_dhAdK6R80Rc:le,s_iTi9KwAcEYg:pe,s_wW02utqxH8E:ve},Symbol.toStringTag,{value:"Module"}));export{Y as _hW,ie as s_FPWv3lWNHQg,ce as s_GMaQow7nNzE,de as s_Iqiy8FRI5Ek,ue as s_PZjg2AEq0h0,fe as s_Rsa6BhqxF4U,oe as s_XNkxOB2umQE,le as s_dhAdK6R80Rc,pe as s_iTi9KwAcEYg,ve as s_wW02utqxH8E};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}