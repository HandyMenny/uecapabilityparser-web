import{p as b,l as P,u as g,a as k,g as D,s as A,b as K}from"./q-ATQcGGrC.js";import{l as O,b as f,X as S,k as $,j as m,y as p,a as d,_ as C}from"./q-YVXM7jeM.js";const L=(o,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const r=new URL(e.href);b(r.pathname),e.hasAttribute("data-prefetch")&&P(r,e,{prefetchSymbols:!1})}},j=async(o,e)=>{const[t,r,n,c]=O();o.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:r,replaceState:n,scroll:c}),e.removeAttribute("aria-pressed")))},w=o=>{const e=g(),t=k(),{onClick$:r,prefetch:n,reload:c,replaceState:_,scroll:v,...s}=o,a=f(()=>D({...s,reload:c},t));s["link:app"]=!!a,s.href=a||o.href;const h=f(()=>!!a&&n!==!1&&n!=="js"&&A(a,t)||void 0),i=f(()=>h||!!a&&n!==!1&&K(a,t))?p(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_Osdg8FnYTw4"):void 0,y=a?S((l,F)=>{l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.preventDefault()},"(event,target)=>{if(!(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)){event.preventDefault();}}"):void 0;return $("a",{...s,children:m(C,null,3,"AD_0"),"data-prefetch":h,onClick$:[y,r,a?p(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_pIf0khHUxfY",[e,c,_,v]):void 0],onFocus$:[s.onFocus$,i],onMouseOver$:[s.onMouseOver$,i],onQVisible$:[s.onQVisible$,i]},null,0,"AD_1")},u=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:w,s_Osdg8FnYTw4:L,s_pIf0khHUxfY:j},Symbol.toStringTag,{value:"Module"}));export{w as s_8gdLBszqbaM,L as s_Osdg8FnYTw4,j as s_pIf0khHUxfY};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
