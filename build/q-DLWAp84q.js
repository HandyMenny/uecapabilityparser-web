import{u as l,a as m,b as h,d as w,_ as S,g as p,q as s,S as R,h as x}from"./q-CqQeKCeh.js";import{_ as r}from"./q-C7i0xNVT.js";import{C as O}from"./q-CNKChEG2.js";const P=({track:t})=>{const[e,n]=l();t(()=>e.isDraggingSig.value),n.value=e.numSlidesSig.value*e.slideRefsArray.value[0].value.offsetWidth*-1},D=t=>{const[e]=l();if(e.isDraggingSig.value){if(!e.containerRef.value)return;e.transitionDurationSig.value=0;const n=t.clientX-e.initialX.value,o=e.initialTransformX.value+n;if(o>50)return;e.slideOffsetSig.value=o;for(let i=0;i<e.slideRefsArray.value.length;i++){const u=e.slideRefsArray.value[i];if(!e.containerRef.value||!u.value)return;const _=window.getComputedStyle(e.containerRef.value),d=new DOMMatrix(_.transform).m41,v=Math.abs(d);if(!e.viewportRef.value)return;const c=u.value.offsetLeft,g=c+u.value.offsetWidth+e.spaceBetweenSlides,f=e.viewportRef.value.offsetWidth/2;if(v>c-f&&v<g-f){e.currentIndexSig.value=i||0;break}}}},y=t=>{const[e,n]=l();if(!(t.pointerType==="mouse"&&t.button!==0)){if(e.initialX.value=t.clientX,e.containerRef.value){const o=window.getComputedStyle(e.containerRef.value),i=new DOMMatrix(o.transform);e.initialTransformX.value=i.m41,e.isDraggingSig.value=!0}window.addEventListener("pointermove",n)}},T=()=>{const[t]=l();return t.transitionDurationSig.value=0},E=()=>{const[t]=l();return window.removeEventListener("pointermove",t)},L=t=>{const e=m(O),n=h(0);w(s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_MK7ZeF7gIg0",[e,n]));const o=s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_iTqga1uhyo4",[e]);return S("div",{ref:e.viewportRef,...t,children:p(R,null,3,"zZ_0"),onPointerDown$:s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_LwiHS8URHVA",[e,o]),onTransitionEnd$:s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_AOuM7nDGOUU",[e]),"window:onPointerUp$":s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_xwB8On0SKlk",[o])},{style:{overflowX:"visible",position:"relative"}},0,"zZ_1")},a=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_70GSGy0IKDw:L,s_AOuM7nDGOUU:T,s_LwiHS8URHVA:y,s_MK7ZeF7gIg0:P,s_iTqga1uhyo4:D,s_xwB8On0SKlk:E},Symbol.toStringTag,{value:"Module"}));export{x as _hW,L as s_70GSGy0IKDw,T as s_AOuM7nDGOUU,y as s_LwiHS8URHVA,P as s_MK7ZeF7gIg0,D as s_iTqga1uhyo4,E as s_xwB8On0SKlk};
