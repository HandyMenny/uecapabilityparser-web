import{c as l,o as m,F as u,r as d}from"./q-e60c8767.js";import{F as w}from"./q-6c12c75d.js";const h=async function(...o){const[i]=l(),n=o.length>0&&o[0]instanceof AbortSignal?o.shift():void 0;{const s=m(),f=o.map(t=>t instanceof SubmitEvent&&t.target instanceof HTMLFormElement?new FormData(t.target):t instanceof Event||t instanceof Node?null:t),a=i.getHash(),e=await fetch(`?qfunc=${a}`,{method:"POST",headers:{"Content-Type":"application/qwik-json","X-QRL":a},signal:n,body:await u([i,...f])}),c=e.headers.get("Content-Type");if(e.ok&&c==="text/qwik-json-stream"&&e.body)return async function*(){try{for await(const t of w(e.body,s??document.documentElement,n))yield t}finally{n!=null&&n.aborted||await e.body.cancel()}}();if(c==="application/qwik-json"){const t=await e.text(),r=await d(t,s??document.documentElement);if(e.status===500)throw r;return r}}};export{h as s_wOIPfiQ04l4};
