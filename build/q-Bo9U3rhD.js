import{a1 as T,a2 as w,a3 as I,a4 as m,a5 as E,a0 as y}from"./q-CNKChEG2.js";import{u as _,j as D,b as x,d as f,k as R,_ as V,g as j,q as i,S as z,h as C}from"./q-CqQeKCeh.js";import{_ as l}from"./q-C7i0xNVT.js";const K=function({track:n}){const[e,a,s]=_(),o=n(()=>e.tabInfoList),d=s.value;T(o,a,s,{tabIdToSelect:d},!0)},M=function({track:n}){const[e,a,s]=_(),o=n(()=>e.selectedIndex);T(e.tabInfoList,a,s,{indexToSelect:o})},$=function({track:n}){const[e,a,s,o]=_(),d=n(()=>s.value);T(a.tabInfoList,s,o,{indexToSelect:d}),typeof s.value<"u"&&(e==null||e(s.value))},N=function({track:n}){const[e,a,s]=_(),o=n(()=>e.selectedTabId);T(e.tabInfoList,a,s,{tabIdToSelect:o})},X=function({track:n}){const[e,a,s,o]=_();let d=n(()=>o.value);if(typeof d!="string"){const c=w(a.tabInfoList,0);c&&(d=c.tabId)}T(a.tabInfoList,s,o,{tabIdToSelect:d}),typeof o.value<"u"&&(e==null||e(o.value))},F=function({track:n}){const[e,a]=_();if(!e)return;const s=n(()=>a.value);typeof s=="number"&&s>=0&&e(s)},H=t=>{const[n,e,a]=_();T(n.tabInfoList,e,a,{tabIdToSelect:t})},J=t=>{const[n,e]=_();n==="automatic"&&e(t)},U=(t,n)=>{const[e,a,s]=_(),o=a.value,d=e.tabInfoList.findIndex(S=>S.tabId===n);let c;!s&&t===I.ArrowRight||s&&t===I.ArrowDown?c=m(e.tabInfoList,d+1,{wrap:!0}):!s&&t===I.ArrowLeft||s&&t===I.ArrowUp?c=E(e.tabInfoList,d,{wrap:!0}):t===I.Home||t===I.PageUp?c=m(e.tabInfoList,0):(t===I.End||t===I.PageDown)&&(c=E(e.tabInfoList,e.tabInfoList.length)),c&&v(c.index);function v(S){const g=o==null?void 0:o.children[0];(g==null?void 0:g.children[S]).focus()}},Y=t=>{const{tabInfoList:n,behavior:e="manual",selectedTabId:a,selectedIndex:s,vertical:o,selectedClassName:d,onSelectedIndexChange$:c,onSelectedTabIdChange$:v,"bind:selectedIndex":S,"bind:selectedTabId":g,...P}=t,h=D(),p=x(),A=x(),b=S||A,O=x(),u=g||O;f(i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_jXgz0XyNKTo",[t,b,u])),f(i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_VzzduUXGcdw",[t,b,u])),f(i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_Lxbat20NR5o",[c,t,b,u])),f(i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_AHPlzvHKJpc",[t,b,u])),f(i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_6TtlIMy3PM8",[v,t,b,u])),f(i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_dcjl3anE84g",[c,b]));const L=i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_wuRYlp09lLI",[t,b,u]);return R(y,{selectTab$:L,tabsPrefix:h,onTabKeyDown$:i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_ufjEVm17vpM",[t,p,o]),selectIfAutomatic$:i(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_mprJgo5irY4",[e,L]),selectedTabIdSig:u,selectedClassName:d}),V("div",{ref:p,...P,children:j(z,null,3,"8n_3")},null,0,"8n_4")},r=Object.freeze(Object.defineProperty({__proto__:null,_hW:C,s_6TtlIMy3PM8:X,s_AHPlzvHKJpc:N,s_Bf05nBSg4Ok:Y,s_Lxbat20NR5o:$,s_VzzduUXGcdw:M,s_dcjl3anE84g:F,s_jXgz0XyNKTo:K,s_mprJgo5irY4:J,s_ufjEVm17vpM:U,s_wuRYlp09lLI:H},Symbol.toStringTag,{value:"Module"}));export{C as _hW,X as s_6TtlIMy3PM8,N as s_AHPlzvHKJpc,Y as s_Bf05nBSg4Ok,$ as s_Lxbat20NR5o,M as s_VzzduUXGcdw,F as s_dcjl3anE84g,K as s_jXgz0XyNKTo,J as s_mprJgo5irY4,U as s_ufjEVm17vpM,H as s_wuRYlp09lLI};
