import{o as v,s as x,x as m,P as h,h as o,C as i,K as r,g as a,_ as c,f as _,v as C}from"./q-IyuWTi_T.js";import{L as I}from"./q-8bWJ9aMq.js";const y=e=>{const s=e.inverted?" border-2 border-solid border-black bg-white text-black":" bg-black text-white",n=v(),l=a(()=>c(()=>Promise.resolve().then(()=>f),void 0),"s_FDBHr0yOvsA",[n,e]);return x(a(()=>c(()=>Promise.resolve().then(()=>f),void 0),"s_T0JQFyCbfMI",[l])),m("resize",a(()=>c(()=>Promise.resolve().then(()=>f),void 0),"s_27BIuhV8z9w",[l])),h(I,{class:"multiellipsis my-2 flex h-[150px] w-full overflow-hidden p-2 text-center text-lg focus:outline-none focus:ring focus:ring-gray-400"+s,ref:n,get href(){return e.url},children:o("div",null,{class:"m-auto break-words"},[o("span",null,null,i(t=>t.multilineLabel,[e]),3,null),e.multilineLabel&&e.label&&o("br",null,null,null,3,"oA_0"),o("span",null,null,i(t=>t.label,[e]),3,null),e.Icon!==void 0&&h(e.Icon,{class:"m-auto",[r]:{class:r}},3,"oA_1")],1,null),[r]:{href:i(t=>t.url,[e]),ref:r}},1,"oA_2")},L=e=>{const[s,n]=_();if(s.value){const l=s.value,t=l.querySelector("span");if(t==null)return;e&&t.textContent!==n.multilineLabel&&(t.textContent=n.multilineLabel??null);const d=l.clientHeight;if(l.scrollHeight==d||t.textContent==null)return;for(;t.offsetHeight+50>d;){const g=t.textContent.length,u=t.textContent.replace(/[\W\s]*(\S)+$/,""),b=g-u.length;if(b==0)break;b>3?t.textContent=u+"…":t.textContent=u}}},P=()=>{const[e]=_();e(!1)},A=()=>{const[e]=_();e(!0)},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_0sxvg6KsuAM:y,s_27BIuhV8z9w:A,s_FDBHr0yOvsA:L,s_T0JQFyCbfMI:P},Symbol.toStringTag,{value:"Module"}));export{C as _hW,y as s_0sxvg6KsuAM,A as s_27BIuhV8z9w,L as s_FDBHr0yOvsA,P as s_T0JQFyCbfMI};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}