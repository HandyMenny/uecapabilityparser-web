import{N as e,O as b,U as u,d}from"./q-e637c15e.js";const m=t=>{const r=t.data.map(a=>a.every(l=>l===""||l===void 0));return e("details",null,{open:!0},[e("summary",null,{class:"mt-10 text-xl font-bold"},b(a=>a.title,[t]),3,null),e("table",null,{class:"w-full table-auto border-collapse border border-gray-500 text-left"},[e("thead",null,null,e("tr",null,null,t.headers.map((a,l)=>u(d,{children:!(t.hideEmpty&&r[l])&&e("th",null,{class:"min-w-[5rem] border-collapse border border-gray-500 p-1.5"},a,1,l)},1,"pq_0")),1,null),1,null),e("tbody",null,{class:"whitespace-pre align-text-top"},t.data[0].map((a,l)=>e("tr",null,null,t.data.map((s,n)=>u(d,{children:!(t.hideEmpty&&r[n])&&e("td",null,{class:"border-collapse border border-gray-500 p-1.5"},s[l],1,l+n)},1,"pq_1")),1,l)),1,null)],1,null)],1,"pq_2")};export{m as s_qPWSbvCeiUw};
