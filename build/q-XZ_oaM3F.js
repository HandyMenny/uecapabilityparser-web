import{u as d,i as x,a as _,b as I,d as v,e as T,_ as E,f as u,g as p,q as o,S as m,h as P}from"./q-CqQeKCeh.js";import{c as b,a as k,b as y}from"./q-CNKChEG2.js";import{_ as n}from"./q-C7i0xNVT.js";const L=()=>{const[i,e]=d();i.behavior==="single"&&e.value&&(i.currSelectedTriggerIndexSig.value=i.triggerElementsSig.value.indexOf(e.value))},C=()=>{const[i,e]=d();e.value&&(i.currFocusedTriggerIndexSig.value=i.triggerElementsSig.value.indexOf(e.value))},R=function({track:e}){const[r,t,s]=d();e(()=>r.selectedTriggerIdSig.value),r.behavior==="single"&&s!==r.selectedTriggerIdSig.value&&(t.isTriggerExpandedSig.value=!1)},$=function(){const[e]=d();e.defaultValue&&(e.isTriggerExpandedSig.value=!0)},O=function({cleanup:e}){const[r,t,s]=d();if(!s.value)return;t.disabled||r.updateTriggers$();function g(l){b.includes(l.key)&&l.preventDefault()}s.value.addEventListener("keydown",g),e(()=>{var l;(l=s.value)==null||l.removeEventListener("keydown",g)})},w=function({cleanup:e}){const[r]=d();e(()=>{r.updateTriggers$()})},D=()=>{const[i,e,r,t]=d();i.selectedTriggerIdSig.value=t,r(),i.collapsible?e.isTriggerExpandedSig.value=!e.isTriggerExpandedSig.value:e.isTriggerExpandedSig.value=!0},h=async i=>{const[e]=d();i.key==="ArrowUp"&&await e.focusPreviousTrigger$(),i.key==="ArrowDown"&&await e.focusNextTrigger$(),i.key==="Home"&&await e.focusFirstTrigger$(),i.key==="End"&&await e.focusLastTrigger$()},V=i=>{const e=x(i,["disabled"]),r=_(k),t=_(y),s=I(),g=`${t.itemId}-trigger`,l=`${t.itemId}-content`,S=o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_OPIX0WmIn3U",[r,s]),f=o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_aUMl0Mknykg",[r,s]);return v(o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_moIlZJ0XpGY",[r,t,g])),v(o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_ClIa90D1LOw",[t])),T(o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_py4L6HieTpw",[r,i,s])),T(o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_ZlkQX0dQ4iE",[r]),{strategy:"document-ready"}),E("button",{"aria-controls":l,"data-trigger-id":g,id:g,ref:s,...e,children:p(m,null,3,"RH_0"),onClick$:i.disabled?[]:[o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_vCRJEICs24o",[r,t,S,g]),e.onClick$],onFocus$:[f,e.onFocus$],onKeyDown$:[o(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_zRbRiLzl1zc",[r]),e.onKeyDown$]},{"aria-disabled":u(c=>c.disabled,[i],"p0.disabled"),"aria-expanded":u(c=>c.isTriggerExpandedSig.value,[t],"p0.isTriggerExpandedSig.value"),"data-state":u(c=>c.isTriggerExpandedSig.value?"open":"closed",[t],'p0.isTriggerExpandedSig.value?"open":"closed"'),disabled:u(c=>c.disabled,[i],"p0.disabled")},0,"RH_1")},a=Object.freeze(Object.defineProperty({__proto__:null,_hW:P,s_ClIa90D1LOw:$,s_HLYQug4XlU4:V,s_OPIX0WmIn3U:L,s_ZlkQX0dQ4iE:w,s_aUMl0Mknykg:C,s_moIlZJ0XpGY:R,s_py4L6HieTpw:O,s_vCRJEICs24o:D,s_zRbRiLzl1zc:h},Symbol.toStringTag,{value:"Module"}));export{P as _hW,$ as s_ClIa90D1LOw,V as s_HLYQug4XlU4,L as s_OPIX0WmIn3U,w as s_ZlkQX0dQ4iE,C as s_aUMl0Mknykg,R as s_moIlZJ0XpGY,O as s_py4L6HieTpw,D as s_vCRJEICs24o,h as s_zRbRiLzl1zc};
