import{a as _,E as O}from"./q-s5IYQJWZ.js";var tt=Symbol("cache-parser");function S(t){return(typeof t=="string"||typeof t=="number")&&(t=Number(t))>=0&&t<1/0}function y(t){return t===!0||typeof t=="number"||typeof t=="string"&&t!=="false"}var b=Number;function et(t){var e=Object.defineProperty({},tt,{enumerable:!1,value:1});if(!t||typeof t!="string")return e;var r=function(u){var c={},p=u.toLowerCase().replace(/\s+/g,"").split(",");for(var m in p){var v,g=p[m].split("=",2);c[g[0]]=(v=g[1])==null||v}return c}(t),o=r["max-age"],a=r["max-stale"],n=r["min-fresh"],s=r["s-maxage"],i=r["stale-if-error"],d=r["stale-while-revalidate"];return y(r.immutable)&&(e.immutable=!0),S(o)&&(e.maxAge=b(o)),S(a)&&(e.maxStale=b(a)),S(n)&&(e.minFresh=b(n)),y(r["must-revalidate"])&&(e.mustRevalidate=!0),y(r["must-understand"])&&(e.mustUnderstand=!0),y(r["no-cache"])&&(e.noCache=!0),y(r["no-store"])&&(e.noStore=!0),y(r["no-transform"])&&(e.noTransform=!0),y(r["only-if-cached"])&&(e.onlyIfCached=!0),y(r.private)&&(e.private=!0),y(r["proxy-revalidate"])&&(e.proxyRevalidate=!0),y(r.public)&&(e.public=!0),S(s)&&(e.sMaxAge=b(s)),S(i)&&(e.staleIfError=b(i)),S(d)&&(e.staleWhileRevalidate=b(d)),e}var rt=Symbol();function at(){var t,e,r=new Promise(function(o,a){t=o,e=a});return r.resolve=t,r.reject=e,r[rt]=1,r}function nt(t,e){return t>e?1:-1}function A(t,e){var r=5381;if(typeof t=="object"&&t!==null&&(t.toString===Object.prototype.toString||t.toString===Array.prototype.toString)){e||(e=new WeakSet);for(var o=Object.keys(t).sort(nt),a=0;a<o.length;a++){var n=o[a],s=t[n];if(r=33*r^A(n,e),typeof s=="object"&&s!==null&&(t.toString===Object.prototype.toString||t.toString===Array.prototype.toString)){if(e.has(s))continue;e.add(s)}r=33*r^A(s,e)}return 33*r^A(t.constructor,e)}var i=typeof t;try{t instanceof Date?i+=t.getTime():i+=String(t)}catch{i+=String(Object.assign({},t))}for(var d=0;d<i.length;d++)r=33*r^i.charCodeAt(d);return r}/*!
 * Axios Cache Interceptor v1.3.3
 * (c) 2021-present Arthur Fiorette & Contributors
 * Released under the MIT License.
 */var x={d:(t,e)=>{for(var r in e)x.o(e,r)&&!x.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},h={};x.d(h,{h4:()=>f,UN:()=>z,uu:()=>Z,Kd:()=>k,ZF:()=>ct,nv:()=>T,p:()=>W,E7:()=>K,NQ:()=>X,xK:()=>Y,G6:()=>q,LN:()=>B,Bw:()=>I,Ad:()=>E,$k:()=>G,v8:()=>it,Jk:()=>H,tI:()=>V,iS:()=>F});const R=(t=>{var e={};return x.d(e,t),e})({parse:()=>et}),f=Object.freeze({IfModifiedSince:"if-modified-since",LastModified:"last-modified",IfNoneMatch:"if-none-match",CacheControl:"cache-control",Pragma:"pragma",ETag:"etag",Expires:"expires",Age:"age",XAxiosCacheEtag:"x-axios-cache-etag",XAxiosCacheLastModified:"x-axios-cache-last-modified",XAxiosCacheStaleIfError:"x-axios-cache-stale-if-error"}),X=t=>{if(!t)return"not enough headers";const e=t[f.CacheControl];if(e){const{noCache:o,noStore:a,maxAge:n,maxStale:s,immutable:i,staleWhileRevalidate:d}=(0,R.parse)(String(e));if(o||a)return"dont cache";if(i)return{cache:31536e6};if(n!==void 0){const u=t[f.Age];return{cache:u?1e3*(n-Number(u)):1e3*n,stale:s!==void 0?1e3*s:d!==void 0?1e3*d:void 0}}}const r=t[f.Expires];if(r){const o=Date.parse(String(r))-Date.now();return o>=0?{cache:o}:"dont cache"}return"not enough headers"},ot=(t=>{var e={};return x.d(e,t),e})({deferred:()=>at});function K(t){return t?e=>t(e)||e===304:e=>e>=200&&e<300||e===304}function E(t="get",e=[]){return t=t.toLowerCase(),e.some(r=>r===t)}function F(t,e){var r;e.headers||(e.headers={});const{etag:o,modifiedSince:a}=e.cache;if(o){const n=o===!0?(r=t.data)===null||r===void 0?void 0:r.headers[f.ETag]:o;n&&(e.headers[f.IfNoneMatch]=n)}a&&(e.headers[f.IfModifiedSince]=a===!0?t.data.headers[f.LastModified]||new Date(t.createdAt).toUTCString():a.toUTCString())}function W(t,e){return t.status===304&&e?(t.cached=!0,t.data=e.data,t.status=e.status,t.statusText=e.statusText,t.headers=Object.assign(Object.assign({},e.headers),t.headers),e):{data:t.data,status:t.status,statusText:t.statusText,headers:t.headers}}function q(t){const e=async r=>{var o,a,n,s,i,d,u,c,p,m,v,g,M,P,$;if(r.id=t.generateKey(r),r.cache===!1||(r.cache=Object.assign(Object.assign({},t.defaults.cache),r.cache),r.cache.cacheTakeover&&((o=(m=r.headers)[v=f.CacheControl])!==null&&o!==void 0||(m[v]="no-cache"),(a=(g=r.headers)[M=f.Pragma])!==null&&a!==void 0||(g[M]="no-cache"),(n=(P=r.headers)[$=f.Expires])!==null&&n!==void 0||(P[$]="0")),!E(r.method,r.cache.methods)))return r;let l=await t.storage.get(r.id,r);const C=r.cache.override;t:if(l.state==="empty"||l.state==="stale"||C){if(t.waiting[r.id]&&!C&&(l=await t.storage.get(r.id,r),l.state!=="empty"))break t;return t.waiting[r.id]=(0,ot.deferred)(),t.waiting[r.id].catch(()=>{}),await t.storage.set(r.id,{state:"loading",previous:C?l.data?"stale":"empty":l.state,data:l.data,createdAt:C&&!l.createdAt?Date.now():l.createdAt},r),l.state==="stale"&&F(l,r),r.validateStatus=K(r.validateStatus),(l.state==="stale"||l.data)&&await((i=(s=r.cache).hydrate)===null||i===void 0?void 0:i.call(s,l)),r}let w;if(l.state==="loading"){const D=t.waiting[r.id];if(!D)return l.data&&await((u=(d=r.cache).hydrate)===null||u===void 0?void 0:u.call(d,l)),r;try{w=await D}catch{return l.data&&await((p=(c=r.cache).hydrate)===null||p===void 0?void 0:p.call(c,l)),e(r)}}else w=l.data;return r.adapter=function(){return Promise.resolve({config:r,data:w.data,headers:w.headers,status:w.status,statusText:w.statusText,cached:!0,id:r.id})},r};return{onFulfilled:e,apply:()=>t.interceptors.request.use(e)}}async function H(t,e){var r;if(typeof e=="function")return e(t);const{statusCheck:o,responseMatch:a,containsHeaders:n}=e;if(o&&!await o(t.status)||a&&!await a(t))return!1;if(n){for(const[s,i]of Object.entries(n))if(!await i((r=t.headers[s.toLowerCase()])!==null&&r!==void 0?r:t.headers[s]))return!1}return!0}async function V(t,e,r){if(typeof r=="function")return r(e);for(const[o,a]of Object.entries(r)){if(a==="delete"){await t.remove(o,e.config);continue}const n=await t.get(o,e.config);if(n.state==="loading")continue;const s=await a(n,e);s!=="delete"?s!=="ignore"&&await t.set(o,s,e.config):await t.remove(o,e.config)}}function B(t){const e=async(a,n)=>{var s;await t.storage.remove(a,n),(s=t.waiting[a])===null||s===void 0||s.reject(),delete t.waiting[a]},r=async a=>{var n;if(!(a!=null&&a.config))throw a;a.id=a.config.id,(n=a.cached)!==null&&n!==void 0||(a.cached=!1);const s=a.config,i=s.cache;if(a.cached)return a;if(!i)return a.cached=!1,a;if(i.update&&await V(t.storage,a,i.update),!E(s.method,i.methods))return a;const d=await t.storage.get(a.id,s);if(d.state!=="loading")return a;if(!d.data&&!await H(a,i.cachePredicate))return await e(a.id,s),a;for(const g of Object.keys(a.headers))g.startsWith("x-axios-cache")&&delete a.headers[g];i.etag&&i.etag!==!0&&(a.headers[f.XAxiosCacheEtag]=i.etag),i.modifiedSince&&(a.headers[f.XAxiosCacheLastModified]=i.modifiedSince===!0?"use-cache-timestamp":i.modifiedSince.toUTCString());let u,c=i.ttl||-1;if(i.interpretHeader){const g=t.headerInterpreter(a.headers);if(g==="dont cache")return await e(a.id,s),a;g!=="not enough headers"&&(typeof g=="number"?c=g:(c=g.cache,u=g.stale))}const p=W(a,d.data);typeof c=="function"&&(c=await c(a)),i.staleIfError&&(a.headers[f.XAxiosCacheStaleIfError]=String(c));const m={state:"cached",ttl:c,staleTtl:u,createdAt:Date.now(),data:p},v=t.waiting[a.id];return v&&(v.resolve(m.data),delete t.waiting[a.id]),await t.storage.set(a.id,m,s),a},o=async a=>{var n;if(!a.isAxiosError||!a.config)throw a;const s=a.config,i=s.id,d=s.cache,u=a.response;if(!d||!i)throw a;if(!E(s.method,d.methods))throw await e(i,s),a;const c=await t.storage.get(i,s);if(c.state!=="loading"||c.previous!=="stale")throw await e(i,s),a;if(d.staleIfError){const p=String(u==null?void 0:u.headers[f.CacheControl]),m=p&&(0,R.parse)(p).staleIfError,v=typeof d.staleIfError=="function"?await d.staleIfError(u,c,a):d.staleIfError===!0&&m?1e3*m:d.staleIfError;if(v===!0||typeof v=="number"&&c.createdAt+v>Date.now())return(n=t.waiting[i])===null||n===void 0||n.resolve(c.data),delete t.waiting[i],await t.storage.set(i,{state:"stale",createdAt:Date.now(),data:c.data},s),{cached:!0,config:s,id:i,data:c.data.data,headers:c.data.headers,status:c.data.status,statusText:c.data.statusText}}throw await e(i,s),a};return{onFulfilled:r,onRejected:o,apply:()=>t.interceptors.response.use(r,o)}}const G=t=>!!t&&!!t["is-storage"];function Q(t){const e=t.data.headers;return f.ETag in e||f.LastModified in e||f.XAxiosCacheEtag in e||f.XAxiosCacheLastModified in e}function T(t){return!String(t.data.headers[f.CacheControl]).includes("must-revalidate")&&(!!Q(t)||t.state==="cached"&&t.staleTtl!==void 0&&Math.abs(Date.now()-(t.createdAt+t.ttl))<=t.staleTtl)}function I(t){return t.ttl!==void 0&&t.createdAt+t.ttl<=Date.now()}function k({set:t,find:e,remove:r}){return{"is-storage":1,set:t,remove:r,get:async(o,a)=>{let n=await e(o,a);if(!n)return{state:"empty"};if(n.state==="empty"||n.state==="loading")return n;if(n.state==="cached"){if(!I(n))return n;if(!T(n))return await r(o,a),{state:"empty"};n={state:"stale",createdAt:n.createdAt,data:n.data,ttl:n.staleTtl!==void 0?n.staleTtl+n.ttl:void 0},await t(o,n,a)}return I(n)?Q(n)?n:(await r(o,a),{state:"empty"}):n}}}function Z(t=!1,e=!1,r=!1){const o=k({set:(a,n)=>{if(r){let s=Object.keys(o.data);if(s.length>=r)for(o.cleanup(),s=Object.keys(o.data);s.length>=r;)delete o.data[s.shift()]}o.data[a]=t==="double"?typeof structuredClone=="function"?structuredClone(n):JSON.parse(JSON.stringify(n)):n},remove:a=>{delete o.data[a]},find:a=>{const n=o.data[a];return t&&n!==void 0?typeof structuredClone=="function"?structuredClone(n):JSON.parse(JSON.stringify(n)):n}});return o.data=Object.create(null),o.cleanup=()=>{const a=Object.keys(o.data);let n,s,i=-1;for(;++i<a.length;)s=a[i],n=o.data[s],n.state!=="empty"?n.state==="cached"&&I(n)&&!T(n)&&o.remove(s):o.remove(s)},e&&(o.cleaner=setInterval(o.cleanup,e)),o}const st=(t=>{var e={};return x.d(e,t),e})({hash:()=>A}),U=/^\/|\/$/g;function z(t){return e=>{if(e.id)return e.id;const r=t(e);return typeof r=="string"||typeof r=="number"?`${r}`:`${(0,st.hash)(r)}`}}const Y=z(({baseURL:t,url:e,method:r,params:o,data:a})=>(t=t!==void 0?t.replace(U,""):"",e=e!==void 0?e.replace(U,""):"",{url:t+(t&&e?"/":"")+e,params:o,method:r=r!==void 0?r.toLowerCase():"get",data:a}));function it(t,e={}){var r,o,a,n,s,i,d,u;const c=t;if(c.defaults.cache)throw new Error("setupCache() should be called only once");if(c.storage=e.storage||Z(),!G(c.storage))throw new Error("Use buildStorage() function");return c.waiting=e.waiting||{},c.generateKey=e.generateKey||Y,c.headerInterpreter=e.headerInterpreter||X,c.requestInterceptor=e.requestInterceptor||q(c),c.responseInterceptor=e.responseInterceptor||B(c),c.debug=e.debug||function(){},c.defaults.cache={update:e.update||{},ttl:(r=e.ttl)!==null&&r!==void 0?r:3e5,methods:e.methods||["get","head"],cachePredicate:e.cachePredicate||{statusCheck:p=>[200,203,300,301,302,404,405,410,414,501].includes(p)},etag:(o=e.etag)===null||o===void 0||o,modifiedSince:(a=e.modifiedSince)!==null&&a!==void 0?a:e.etag===!1,interpretHeader:(n=e.interpretHeader)===null||n===void 0||n,cacheTakeover:(s=e.cacheTakeover)===null||s===void 0||s,staleIfError:(i=e.staleIfError)===null||i===void 0||i,override:(d=e.override)!==null&&d!==void 0&&d,hydrate:(u=e.hydrate)!==null&&u!==void 0?u:void 0},c.requestInterceptor.apply(),c.responseInterceptor.apply(),c}function ct(t,e="axios-cache-"){return k({find:r=>{const o=t.getItem(e+r);return o?JSON.parse(o):void 0},remove:r=>{t.removeItem(e+r)},set:(r,o)=>{const a=()=>t.setItem(e+r,JSON.stringify(o));try{return a()}catch{const s=Object.entries(t).filter(i=>i[0].startsWith(e)).map(i=>[i[0],JSON.parse(i[1])]);for(const i of s)i[1].state==="cached"&&I(i[1])&&!T(i[1])&&t.removeItem(i[0]);try{return a()}catch{const d=s.sort((u,c)=>(u[1].createdAt||0)-(c[1].createdAt||0));for(const u of d){t.removeItem(u[0]);try{return a()}catch{}}}t.removeItem(e+r)}}})}h.h4;h.UN;h.uu;h.Kd;h.ZF;h.nv;h.p;h.E7;h.NQ;h.xK;h.G6;h.LN;h.Bw;h.Ad;h.$k;var dt=h.v8;h.Jk;h.tI;h.iS;const ut=_.create(),j=dt(ut),N={cache:{ttl:"1000 * 60",interpretHeader:!1,staleIfError:!1}},L=async()=>{const t=O.STATUS;try{const e=await j.get(t,{...N,validateStatus:()=>!0});if(e.status==200)return e.data}catch(e){console.error(e)}},lt=async()=>{const t=O.VERSION;try{return(await j.get(t,N)).data.version}catch(e){console.error(e)}},ft=async()=>{const t=O.STORE+"status";try{return(await j.get(t,N)).data.enabled==!0}catch(e){console.error(e)}return!1},ht=async()=>{const t=O.PARSEMULTI;try{const e=await j.get(t,{...N,validateStatus:()=>!0});return e.status!==404&&e.status<500}catch{return!1}};let J;(function(t){t.getVersion=async()=>{const e=await L();return e!=null?e.version:await lt()},t.isStoreSuported=async()=>{const e=await L();return e!=null?e.endpoints.includes("/store/list"):await ft()},t.isMultiSupported=async()=>{const e=await L();return e!=null?e.endpoints.includes("/parse/multi"):await ht()}})(J||(J={}));export{J as S};
