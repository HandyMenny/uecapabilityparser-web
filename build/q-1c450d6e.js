import{a as h}from"./q-82afda87.js";import{W as _,r as d,e as a,C as m,m as i,a as o,p as l,_ as g,d as y}from"./q-8f3f0f08.js";import{L as f}from"./q-2772f544.js";const p=async()=>{const r="/version";try{return(await h.get(r)).data.version}catch(t){console.error(t),alert(t)}},b=()=>{const r=i(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_2FkqKIwqRhE"),t=e=>{const n="https://github.com/HandyMenny/uecapabilityparser/";return e.startsWith("nightly-")?n+"releases/tag/"+e:e.startsWith("commit@")?n+"commit/"+e.split("@")[1]:e.match(/\d+.\d+.\d+/)?n+"releases/tag/v"+e:n},c=e=>e.startsWith("nightly-")?e.substring(8).replace(/-/g,""):e.startsWith("commit@")?e.substring(7):e,s=_(void 0);return d(i(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_e0xoaZ7UNJs",[r,s])),a("header",null,{class:"flex justify-between bg-black px-5 py-2"},[a("div",null,null,[m(f,{children:"UE Capability Parser",class:"text-xl text-white hover:underline active:underline",href:"/",title:"UE Capability Parser",[l]:{class:l,href:l,title:l}},3,"SN_0"),s.value!==void 0&&a("a",{href:t(s.value)},{class:"ml-0.5 align-[super] text-sm text-gray-300 hover:underline active:underline",target:"_blank"},c(s.value),1,"SN_1")],1,null),a("a",null,{class:"text-xl text-white hover:underline active:underline",href:"https://github.com/HandyMenny",target:"_blank"},"by handymenny",3,null)],1,"SN_2")},x=async()=>{const[r,t]=g();t.value=await r()},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_2FkqKIwqRhE:p,s_ceU05TscGYE:b,s_e0xoaZ7UNJs:x},Symbol.toStringTag,{value:"Module"}));export{y as _hW,p as s_2FkqKIwqRhE,b as s_ceU05TscGYE,x as s_e0xoaZ7UNJs};
