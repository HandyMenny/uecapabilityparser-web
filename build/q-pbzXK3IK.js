import{P as C,h as n,C as D,L}from"./q-OIKTu0zg.js";import{l as x,k as N}from"./q-bLh_hPAl.js";const w=t=>{var p,g,h,m;if(t.cap===void 0||t.cap.parserVersion===void 0)return C(L,null,3,"N1_0");const a=["Group Description","Description","Log Type","Upload Date","Parser Version","Processing time"],b=x(t.cap.logType),f=new Date(t.cap.timestamp).toLocaleString().replace(", "," "),s=t.cap.metadata.description,T=t.cap.metadata.processingTime,c=t.cap.metadata.groupDescription,l=[s==c?void 0:c,s,b,f,t.cap.parserVersion,T],y=["description","processingTime","defaultNR","groupDescription"];Object.keys(t.cap.metadata).forEach(function(e){const o=t.cap.metadata[e];y.includes(e)||(a.push(N(e)),l.push(o))});const r=((p=t.cap.lteca)==null?void 0:p.length)??0,i=((g=t.cap.endc)==null?void 0:g.length)??0,u=((h=t.cap.nrca)==null?void 0:h.length)??0,d=((m=t.cap.nrdc)==null?void 0:m.length)??0;return r>0&&(a.push("Total LTE CA Combos"),l.push(r.toString())),i>0&&(a.push("Total ENDC Combos"),l.push(i.toString())),u>0&&(a.push("Total NR CA Combos"),l.push(u.toString())),d>0&&(a.push("Total NRDC Combos"),l.push(d.toString())),n("details",null,{open:!0},[n("summary",null,{class:"mt-10 text-xl font-bold"},D(e=>e.title,[t]),3,null),n("table",null,{class:"w-full table-auto border-collapse border border-gray-500 text-left"},n("tbody",null,{class:"whitespace-pre align-text-top"},l.map((e,o)=>e!=null&&e.length>0&&n("tr",null,null,[n("th",null,{class:"border-collapse border border-gray-500 p-1.5"},a[o],1,null),n("td",null,{class:"border-collapse border border-gray-500 p-1.5"},e,1,null)],1,o)),1,null),1,null)],1,"N1_1")};export{w as s_h7pB8sysxA0};
