import{a as _}from"./q-82afda87.js";import{W as m,r as g,e as a,C as y,m as l,a as o,p as i,_ as f,d as p}from"./q-8f3f0f08.js";import{L as b}from"./q-613940b3.js";const x=async()=>{const r="/version";try{return(await _.get(r)).data.version}catch(t){console.error(t),alert(t)}},v=()=>{const r=l(()=>o(()=>Promise.resolve().then(()=>c),void 0),"s_2FkqKIwqRhE"),t=e=>{const n="https://github.com/HandyMenny/uecapabilityparser/";return e.startsWith("nightly-")?n+"releases/tag/"+e:e.startsWith("commit@")?n+"commit/"+e.split("@")[1]:e.match(/\d+.\d+.\d+/)?n+"releases/tag/v"+e:n},u=e=>e.startsWith("nightly-")?e.substring(8).replace(/-/g,""):e.startsWith("commit@")?e.substring(7):e,s=m(void 0);g(l(()=>o(()=>Promise.resolve().then(()=>c),void 0),"s_e0xoaZ7UNJs",[r,s]));const d="by HandyMenny",h="https://github.com/HandyMenny";return a("header",null,{class:"flex justify-between bg-black px-5 py-2"},[a("div",null,null,[y(b,{children:"UE Capability Parser",class:"text-xl text-white hover:underline active:underline",href:"/",title:"UE Capability Parser",[i]:{class:i,href:i,title:i}},3,"SN_0"),s.value!==void 0&&a("a",{href:t(s.value)},{class:"ml-0.5 align-[super] text-sm text-gray-300 hover:underline active:underline",target:"_blank"},u(s.value),1,"SN_1")],1,null),a("a",{href:h},{class:"text-xl text-white hover:underline active:underline",target:"_blank"},d,1,null)],1,"SN_2")},E=async()=>{const[r,t]=f();t.value=await r()},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_2FkqKIwqRhE:x,s_ceU05TscGYE:v,s_e0xoaZ7UNJs:E},Symbol.toStringTag,{value:"Module"}));export{p as _hW,x as s_2FkqKIwqRhE,v as s_ceU05TscGYE,E as s_e0xoaZ7UNJs};
