import{_ as u,l as G,q as K,u as it,d as st,e as lt,Z as ct,f as ut,c as U,h as dt,o as M,b as f,A as _t,j as mt,g as z,N as vt,i as pt}from"./q-sK9HTalN.js";import{t as ft,j as $,k as x,r as tt,l as et,m as ot,n as J,o as yt,p as ht,q as Et,s as D,v as g,w as St,x as Ct,y as bt,z as qt,c as wt,C as gt,d as Rt,D as Lt,R as At,e as Pt,f as Dt,h as It,i as Tt}from"./q-DPyw6ytm.js";const kt=":root{view-transition-name:none}";const R=()=>u(()=>import("./q-_k_O1UBL.js"),__vite__mapDeps([])),Q=[["/",[R,()=>u(()=>import("./q-caSrULfF.js"),__vite__mapDeps([]))]],["library/advancedsearch/",[R,()=>u(()=>import("./q-UTgLXxHZ.js"),__vite__mapDeps([]))]],["view/multi/",[R,()=>u(()=>import("./q-OOpkQ_VW.js"),__vite__mapDeps([]))]],["library/",[R,()=>u(()=>import("./q-pxl6hyqA.js"),__vite__mapDeps([]))]],["parser/",[R,()=>u(()=>import("./q-GmbPj_D0.js"),__vite__mapDeps([]))]],["view/",[R,()=>u(()=>import("./q-gPT2Ddf2.js"),__vite__mapDeps([]))]]],B=[];const X=!0;const Ot=async(y,n)=>{const[h,S,a,C]=G(),{type:s="link",forceReload:m=y===void 0,replaceState:v=!1,scroll:b=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=y===void 0?l:ft(y,C.url);if(!$(o,l)){location.href=o.href;return}if(!m&&x(o,l)){s==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(s,o,new URL(location.href),et()),s==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:s,dest:o,forceReload:m,replaceState:v,scroll:b},ot(o,K()),J(Q,B,X,o.pathname),h.value=void 0,C.isNavigating=!0,new Promise(q=>{S.r=q})},Vt=({track:y})=>{const[n,h,S,a,C,s,m,v,b,l,o]=G();async function q(){var Z;const[d,L]=y(()=>[l.value,n.value]),nt=it(""),A=o.url,_=L?"form":d.type,rt=d.replaceState;let r,P,H=null,I;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let T=J(Q,B,X,r.pathname);I=K();const k=P=await ot(r,I,!0,L);if(!k){l.untrackedValue={type:_,dest:r};return}const j=k.href,O=new URL(j,r);yt(O,r)||(r=O,T=J(Q,B,X,r.pathname)),H=await T}if(H){const[T,k,j,O]=H,V=j,at=V[V.length-1];o.prevUrl=A,o.url=r,o.params={...k},l.untrackedValue={type:_,dest:r};const w=ht(P,o,V,nt);h.headings=at.headings,h.menu=O,S.value=st(V),a.links=w.links,a.meta=w.meta,a.styles=w.styles,a.scripts=w.scripts,a.title=w.title,a.frontmatter=w.frontmatter;{b.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;_==="popstate"&&(F=et()),(d.scroll&&(!d.forceReload||!x(r,A))&&(_==="link"||_==="popstate")||_==="form"&&!x(r,A))&&(document.__q_scroll_restore__=()=>tt(_,r,A,F));const Y=P==null?void 0:P.loaders,t=window;if(Y&&Object.assign(m,Y),Et.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),s(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const i=history.pushState,p=history.replaceState,E=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||g(document.documentElement),e);history.pushState=(e,c,N)=>(e=E(e),i.call(history,e,c,N)),history.replaceState=(e,c,N)=>(e=E(e),p.call(history,e,c,N))}document.body.addEventListener("click",i=>{if(i.defaultPrevented)return;const p=i.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const E=p.getAttribute("href"),e=new URL(location.href),c=new URL(E,e);if($(c,e)&&x(c,e)){if(i.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),D({...g(document.documentElement),x:0,y:0}),location.reload();return}s(p.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const i=g(document.documentElement);D(i)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const i=g(document.documentElement);D(i),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(Z=t._qCityBootstrap)==null||Z.remove(),t._qCityBootstrap=void 0,St.resolve()}if(_!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const i=g(document.documentElement);D(i)}Ct(window,_,A,r,rt),lt(I).then(()=>{var E;bt(I).setAttribute("q:route",T);const p=g(document.documentElement);D(p),t._qCityScrollEnabled=!0,o.isNavigating=!1,(E=v.r)==null||E.call(v)})}}}q()},Ut=y=>{ct(z(()=>u(()=>Promise.resolve().then(()=>W),void 0),"s_RPDJAz33WLA"));const n=qt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=ut("url");if(!h)throw new Error("Missing Qwik URL Env Data");const S=new URL(h),a=U({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},s=dt(U(n.response.loaders,{deep:!1})),m=M({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),v=U(wt),b=U({headings:void 0,menu:void 0}),l=M(),o=n.response.action,q=o?n.response.loaders[o]:void 0,d=M(q?{id:o,data:n.response.formData,output:{result:q,status:n.response.status}}:void 0),L=z(()=>u(()=>Promise.resolve().then(()=>W),void 0),"s_fX0bDjeJa0E",[d,C,m,a]);return f(gt,b),f(Rt,l),f(Lt,v),f(At,a),f(Pt,L),f(Dt,s),f(It,d),f(Tt,m),_t(z(()=>u(()=>Promise.resolve().then(()=>W),void 0),"s_02wMImzEAbk",[d,b,l,v,n,L,s,C,y,m,a])),mt(vt,null,3,"qY_0")},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:pt,s_02wMImzEAbk:Vt,s_RPDJAz33WLA:kt,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:Ot},Symbol.toStringTag,{value:"Module"}));export{pt as _hW,Vt as s_02wMImzEAbk,kt as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,Ot as s_fX0bDjeJa0E};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}