import{u as r,a as S,b as _,d as c,_ as p,f,g as h,q as o,h as a,S as m,i as x}from"./q-BllQxhLr.js";import{C as E}from"./q-DIywAcZT.js";const w=()=>{const[t,e]=r();if(t.isDraggingSig.value=!1,!t.containerRef.value||!e.value)return;const s=window.getComputedStyle(t.containerRef.value),u=new DOMMatrix(s.transform).m41,n=Math.abs(u);if(!t.viewportRef.value)return;const d=e.value.offsetLeft,g=d+e.value.offsetWidth+t.spaceBetweenSlides,v=t.viewportRef.value.offsetWidth/2;n>d-v&&n<g-v&&(t.transitionDurationSig.value=300,t.slideOffsetSig.value=d*-1)},R=()=>{const[t,e,s]=r();e.value=t.numSlidesSig.value,t.numSlidesSig.value++,t.slideRefsArray.value=[...t.slideRefsArray.value,s]},D=({track:t})=>{const[e,s]=r();t(()=>e.isDraggingSig.value),e.isDraggingSig.value?window.addEventListener("pointerup",s):window.removeEventListener("pointerup",s)},P=({track:t})=>{const[e,s,i]=r();t(()=>e.currentIndexSig.value),s.value===e.currentIndexSig.value&&i.value&&(e.transitionDurationSig.value=625,e.slideOffsetSig.value=i.value.offsetLeft*-1),setTimeout(()=>{e.transitionDurationSig.value=625},0)},C=({...t})=>{const e=S(E),s=_(),i=_(null),u=o(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_FSgoJCasbhA",[e,s]);return c(o(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_liDUAtwVZiQ",[e,i,s])),c(o(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_l4X05q5ES4E",[e,u])),c(o(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_0TE4M0YgkyE",[e,i,s])),p("div",{ref:s,...t,children:h(m,null,3,"eY_0")},{"data-slide-num":f(n=>n.value,[i],"p0.value"),style:f(n=>({marginRight:`${n.spaceBetweenSlides}px`}),[e],"{marginRight:`${p0.spaceBetweenSlides}px`}")},0,"eY_1")},l=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_0JbfXIJ7X4o:C,s_0TE4M0YgkyE:P,s_FSgoJCasbhA:w,s_l4X05q5ES4E:D,s_liDUAtwVZiQ:R},Symbol.toStringTag,{value:"Module"}));export{x as _hW,C as s_0JbfXIJ7X4o,P as s_0TE4M0YgkyE,w as s_FSgoJCasbhA,D as s_l4X05q5ES4E,R as s_liDUAtwVZiQ};
