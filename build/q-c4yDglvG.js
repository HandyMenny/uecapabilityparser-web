import{o as b,s as g,x as m,h as r,C as h,P as x,g as u,_ as a,K as v,f as _,v as C}from"./q-OIKTu0zg.js";import{u as I}from"./q-dke5IiR0.js";const P=e=>{const n=I(),i=e.inverted?" border-2 border-solid border-black bg-white text-black":" bg-black text-white",l=e.hidden?" hidden":"",t=b(),s=u(()=>a(()=>Promise.resolve().then(()=>c),void 0),"s_FDBHr0yOvsA",[t,e]);return g(u(()=>a(()=>Promise.resolve().then(()=>c),void 0),"s_T0JQFyCbfMI",[s])),m("resize",u(()=>a(()=>Promise.resolve().then(()=>c),void 0),"s_27BIuhV8z9w",[s])),r("button",{class:"multiellipsis my-2 h-[150px] w-full overflow-hidden p-2 text-center text-lg focus:outline-none focus:ring focus:ring-gray-400"+i+l,ref:t},{onClick$:u(()=>a(()=>Promise.resolve().then(()=>c),void 0),"s_7eUE8HwhGfw",[n,e])},[r("span",null,null,h(o=>o.multilineLabel,[e]),3,null),e.multilineLabel&&e.label&&r("br",null,null,null,3,"oA_0"),r("span",null,null,h(o=>o.label,[e]),3,null),e.Icon!==void 0&&x(e.Icon,{class:"m-auto",[v]:{class:v}},3,"oA_1")],1,"oA_2")},w=e=>{const[n,i]=_();if(n.value){const l=n.value,t=l.firstChild;if(t==null)return;e&&t.textContent!==i.multilineLabel&&(t.textContent=i.multilineLabel??null);const s=l.clientHeight;if(l.scrollHeight==s||t.textContent==null)return;for(;t.offsetHeight+50>s;){const o=t.textContent.length,f=t.textContent.replace(/[\W\s]*(\S)+$/,""),d=o-f.length;if(d==0)break;d>3?t.textContent=f+"…":t.textContent=f}}},A=()=>{const[e]=_();e(!1)},E=()=>{const[e]=_();e(!0)},y=()=>{const[e,n]=_();return e(n.url)},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_0sxvg6KsuAM:P,s_27BIuhV8z9w:E,s_7eUE8HwhGfw:y,s_FDBHr0yOvsA:w,s_T0JQFyCbfMI:A},Symbol.toStringTag,{value:"Module"}));export{C as _hW,P as s_0sxvg6KsuAM,E as s_27BIuhV8z9w,y as s_7eUE8HwhGfw,w as s_FDBHr0yOvsA,A as s_T0JQFyCbfMI};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}