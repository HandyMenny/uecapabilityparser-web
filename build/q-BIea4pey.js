import{_ as A}from"./q-C7i0xNVT.js";import{w as K,a as q,x as U,y as x,t as T,q as w,s as y,z as b,l as z,m as Y}from"./q-CqQeKCeh.js";const G='((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',ye=y("qc-s"),me=y("qc-c"),_e=y("qc-ic"),J=y("qc-h"),X=y("qc-l"),Z=y("qc-n"),Ce=y("qc-a"),Ee=y("qc-ir"),Se=w(()=>A(()=>import("./q-D3WBTSLL.js"),[]),"s_DyVc0YBIqQU"),Ae=()=>{},we=T(w(()=>A(()=>import("./q-BU4-0TbL.js"),[]),"s_e0ssiDXoeAM")),k=new WeakMap,C=new Map,L=new Set,$="qaction",ve="qfunc",De="qdata",S=e=>e.pathname+e.search+e.hash,_=(e,t)=>new URL(e,t.href),p=(e,t)=>e.origin===t.origin,I=e=>e.endsWith("/")?e:e+"/",M=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&I(e)===I(t)},ee=(e,t)=>e.search===t.search,O=(e,t)=>ee(e,t)&&M(e,t),te=(e,t,n)=>{let s=t??"";return n&&(s+=(s?"&":"?")+$+"="+encodeURIComponent(n.id)),e+(e.endsWith("/")?"":"/")+"q-data.json"+s},qe=(e,t)=>{const n=e.href;if(typeof n=="string"&&typeof e.target!="string"&&!e.reload)try{const s=_(n.trim(),t.url),r=_("",t.url);if(p(s,r))return S(s)}catch(s){console.error(s)}else if(e.reload)return S(_("",t.url));return null},Te=(e,t)=>{if(e){const n=_(e,t.url),s=_("",t.url);return!O(n,s)}return!1},Oe=(e,t)=>{if(e){const n=_(e,t.url),s=_("",t.url);return!M(n,s)}return!1},ne=e=>e&&typeof e.then=="function",Pe=(e,t,n,s)=>{const r=se(),c={head:r,withLocale:a=>b(s,a),resolveValue:a=>{const i=a.__id;if(a.__brand==="server_loader"&&!(i in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=e.loaders[i];if(ne(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...t};for(let a=n.length-1;a>=0;a--){const i=n[a]&&n[a].head;i&&(typeof i=="function"?N(r,b(s,()=>i(c))):typeof i=="object"&&N(r,i))}return c.head},N=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),E(e.meta,t.meta),E(e.links,t.links),E(e.styles,t.styles),E(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},E=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const s=e.findIndex(r=>r.key===n.key);if(s>-1){e[s]=n;continue}}e.push(n)}},se=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function re(e,t){const n=V(e),s=W(e),r=V(t),o=W(t);return F(e,n,s,t,r,o)}function F(e,t,n,s,r,o){let c=null;for(;t<n;){const a=e.charCodeAt(t++),i=s.charCodeAt(r++);if(a===91){const l=H(e,t),f=t+(l?3:0),d=D(e,f,n,93),u=e.substring(f,d),h=D(e,d+1,n,47),g=e.substring(d+1,h);t=d+1;const m=r-1;if(l){const R=ce(u,g,s,m,o,e,t+g.length+1,n);if(R)return Object.assign(c||(c={}),R)}const v=D(s,m,o,47,g);if(v==-1)return null;const P=s.substring(m,v);if(!l&&!g&&!P)return null;r=v,(c||(c={}))[u]=decodeURIComponent(P)}else if(a!==i&&!(isNaN(i)&&oe(e,t)))return null}return Q(e,t)&&Q(s,r)?c||{}:null}function oe(e,t){return e.charCodeAt(t)===91&&H(e,t+1)}function W(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function Q(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function V(e){return e.charCodeAt(0)===47?1:0}function H(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function D(e,t,n,s,r=""){for(;t<n&&e.charCodeAt(t)!==s;)t++;const o=r.length;for(let c=0;c<o;c++)if(e.charCodeAt(t-o+c)!==r.charCodeAt(c))return-1;return t-o}let j;(function(e){e[e.EOL=0]="EOL",e[e.OPEN_BRACKET=91]="OPEN_BRACKET",e[e.CLOSE_BRACKET=93]="CLOSE_BRACKET",e[e.DOT=46]="DOT",e[e.SLASH=47]="SLASH"})(j||(j={}));function ce(e,t,n,s,r,o,c,a){n.charCodeAt(s)===47&&s++;let i=r;const l=t+"/";for(;i>=s;){const f=F(o,c,a,n,i,r);if(f){let u=n.substring(s,Math.min(i,r));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),f[e]=decodeURIComponent(u),f}const d=ae(n,s,l,i,s-1)+l.length;if(i===d)break;i=d}return null}function ae(e,t,n,s,r){let o=e.lastIndexOf(n,s);return o==s-n.length&&(o=e.lastIndexOf(n,s-n.length-1)),o>t?o:r}const Re=async(e,t,n,s)=>{if(Array.isArray(e))for(const r of e){const o=r[0],c=re(o,s);if(c){const a=r[1],i=r[3],l=new Array(a.length),f=[],d=ie(t,s);let u;return a.forEach((h,g)=>{B(h,f,m=>l[g]=m,n)}),B(d,f,h=>u=h==null?void 0:h.default,n),f.length>0&&await Promise.all(f),[o,c,l,u,i]}}return null},B=(e,t,n,s)=>{if(typeof e=="function"){const r=k.get(e);if(r)n(r);else{const o=e();typeof o.then=="function"?t.push(o.then(c=>{s!==!1&&k.set(e,c),n(c)})):o&&n(o)}}},ie=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(s=>s[0]===t||t.startsWith(s[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},be=(e,t,n,s,r=!1)=>{if(t!=="popstate"){const o=O(n,s),c=n.hash===s.hash;if(!o||!c){const a={_qCityScroll:le()};r?e.history.replaceState(a,"",S(s)):e.history.pushState(a,"",S(s))}}},le=()=>({x:0,y:0,w:0,h:0}),fe=e=>{e=e.endsWith("/")?e:e+"/",L.has(e)||(L.add(e),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[e]}})))},ke=async(e,t,n)=>{const s=e.pathname,r=e.search,o=te(s,r,n==null?void 0:n.action);let c;n!=null&&n.action||(c=C.get(o)),(n==null?void 0:n.prefetchSymbols)!==!1&&fe(s);let a;if(!c){const i=ue(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),c=fetch(o,i).then(l=>{const f=new URL(l.url),d=f.pathname.endsWith("/q-data.json");if(f.origin!==location.origin||!d){location.href=f.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(u=>{const h=K(u,t);if(!h){location.href=e.href;return}if(n!=null&&n.clearCache&&C.delete(o),h.redirect)location.href=h.redirect;else if(n!=null&&n.action){const{action:g}=n,m=h.loaders[g.id];a=()=>{g.resolve({status:l.status,result:m})}}return h});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=e.href)}),n!=null&&n.action||C.set(o,c)}return c.then(i=>(i||C.delete(o),a&&a(),i))},ue=e=>{const t=e==null?void 0:e.data;if(t)return t instanceof FormData?{method:"POST",body:t}:{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Le=()=>q(J),Ie=()=>q(X),Ne=()=>q(Z),We=()=>U(x("qwikcity")),Qe=(e,t,n,s,r)=>{e==="popstate"&&r?s.scrollTo(r.x,r.y):(e==="link"||e==="form")&&(he(t,n)||s.scrollTo(0,0))},he=(e,t)=>{const n=e.hash.slice(1),s=n&&document.getElementById(n);return s?(s.scrollIntoView(),!0):!!(!s&&e.hash&&O(e,t))},Ve=e=>({x:e.scrollLeft,y:e.scrollTop,w:Math.max(e.scrollWidth,e.clientWidth),h:Math.max(e.scrollHeight,e.clientHeight)}),je=()=>{const e=history.state;return e==null?void 0:e._qCityScroll},Be=e=>{const t=history.state||{};t._qCityScroll=e,history.replaceState(t,"")},Ke="_qCityScroller",Me=T(w(()=>A(()=>import("./q-DW7H1x-o.js"),[]),"s_TxCFOy819ag"));function Fe(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentElement;return e.closest("[q\\:container]")}const He=T(w(()=>A(()=>import("./q-BpU_I0F4.js"),[]),"s_8gdLBszqbaM")),Ue=e=>z("script",{nonce:Y(e,"nonce")},{dangerouslySetInnerHTML:G},null,3,"1Z_0"),xe=async function*(e,t,n){const s=e.getReader();try{let r="";const o=new TextDecoder;for(;!(n!=null&&n.aborted);){const c=await s.read();if(c.done)break;r+=o.decode(c.value,{stream:!0});const a=r.split(/\n/);r=a.pop();for(const i of a)yield await K(i,t)}}finally{s.releaseLock()}};export{Fe as A,We as B,me as C,J as D,Le as E,Ae as F,Me as G,we as H,ve as I,xe as J,De as K,He as L,Ke as Q,X as R,Ue as S,Ie as a,Oe as b,se as c,_e as d,Z as e,ye as f,qe as g,Ce as h,Ee as i,p as j,O as k,ke as l,je as m,Re as n,M as o,fe as p,Pe as q,Qe as r,Te as s,_ as t,Ne as u,C as v,Be as w,Ve as x,Se as y,be as z};
