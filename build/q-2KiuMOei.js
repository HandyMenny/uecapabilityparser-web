import{l as c,k as j,e as s,a as b,K as t,b as g,y as r,_ as u}from"./q-kBRCEvCZ.js";import{R as y}from"./q-POVI9Nn8.js";const A=()=>{const[n,e]=c();e>1&&n(e-1)},D=()=>{const[n,e]=c();e(n)},I=()=>{const[n,e,l]=c();e<l&&n(e+1)},O=n=>{const{selectedPage:e,totalPages:l,onPageChange$:o,siblingCount:P,hidePrevButton:f=!1,hideNextButton:p=!1,disabled:i=!1,customArrowTexts:{previous:v="PREV",next:C="NEXT"}={},defaultClass:h="",selectedClass:m="",dividerClass:B="",nextButtonClass:x="",prevButtonClass:E="",...T}=n,$=()=>!f&&e>1,R=()=>!p&&e!==l,d=y(l,e,P||1);return console.log(d),j("nav",{...T,children:[s("button",{class:x,disabled:i||!$(),onClick$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_DbuSTP4glBw",[o,e])},{"aria-label":"prevAriaLabel"},[b(g,{name:"prefix",[t]:{name:t}},3,"f1_0"),s("span",null,null,v,3,null)],0,null),d.map((a,k)=>{const L=e===a;return s("span",null,null,typeof a=="string"?s("button",{class:B},{disabled:!0},"...",3,"f1_1"):s("button",{"aria-current":e===a,"aria-label":`Page ${a} of ${l}`,class:[h,e===a&&m],disabled:i||L,onClick$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_hBI599j54ok",[a,o])},null,a,0,null),1,k)}),s("button",{class:E,disabled:i||!R(),onClick$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_flm2HZRc0gQ",[o,e,l])},{"aria-label":"nextAriaLabel"},[s("span",null,null,C,3,null),b(g,{name:"suffix",[t]:{name:t}},3,"f1_2")],0,null)]},{"aria-label":"pagination","data-testid":"pagination"},0,"f1_3")},_=Object.freeze(Object.defineProperty({__proto__:null,s_DbuSTP4glBw:A,s_W5aD6KjRTnY:O,s_flm2HZRc0gQ:I,s_hBI599j54ok:D},Symbol.toStringTag,{value:"Module"}));export{A as s_DbuSTP4glBw,O as s_W5aD6KjRTnY,I as s_flm2HZRc0gQ,D as s_hBI599j54ok};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
