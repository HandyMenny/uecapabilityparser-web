import{o as b,v as r,_ as s,Q as d,j as n,p as a,S as l,R as h,A as m}from"./q-S9UpRIKE.js";import{S as g}from"./q-d_pFcQSE.js";const c=b(r(()=>s(()=>import("./q-tKtYkztZ.js"),__vite__mapDeps([0,1])),"s_Los8QK00QAE")),o=b(r(()=>s(()=>import("./q-Ybk7I87c.js"),__vite__mapDeps([2,1])),"s_xm15NHoTGpg")),p=b(r(()=>s(()=>import("./q-Aim3vtzo.js"),__vite__mapDeps([3,1])),"s_kossQWD3PXY")),v=t=>{const i=d("H"),u=[{label:"UE Capability Information Hex Dump",value:"H"},{label:"Wireshark UE Capability Information",value:"W"},{label:"NSG UE Capability Information",value:"N"},{label:"LTE Carrier policy",value:"C"},{label:"NR Cap Prune",value:"CNR"},{label:"28874 nvitem binary",value:"E"},{label:"0xB0CD (LTE RRC Supported CA Combos)",value:"Q"},{label:"0xB0CD (LTE RRC Supported CA Combos) hexdump",value:"QLTE"},{label:"0xB826 (NR5G RRC Supported CA Combos) hexdump",value:"QNR"},{label:"Mediatek CA_COMB_INFO as text",value:"M"},{label:"Osix UE Capability Information",value:"O"},{label:"Qcat UE Capability Information",value:"QC"},{label:"Qct Modem Capabilities",value:"RF"},{label:"Shannon NR UE cap config",value:"SHNR"}];return t.multiparse&&(u.push({label:"PCAP",value:"P"}),u.push({label:"DLF",value:"DLF"}),u.push({label:"QMDL",value:"QMDL"}),u.push({label:"HDF",value:"HDF"}),u.push({label:"SDM",value:"SDM"})),n(h,{children:[n(g,{label:"Log Type",options:u,placeholder:"log-type",get name(){return`${t.prefix}type`},get disabled(){return t.submitting.value},onInput$:r(()=>s(()=>Promise.resolve().then(()=>C),void 0),"s_wLtKhMEeaVM",[i]),[a]:{disabled:l(e=>e.submitting.value,[t]),label:a,name:l(e=>`${e.prefix}type`,[t]),onInput$:a,placeholder:a}},3,"0M_0"),n(p,{label:"Description",placeholder:"Enter a description. The description will be saved if store is enabled",get name(){return`${t.prefix}description`},[a]:{label:a,name:l(e=>`${e.prefix}description`,[t]),placeholder:a}},3,"0M_1"),n(c,{label:(()=>{switch(i.value){case"C":return"Attach files containing LTE carrier policy combos";case"CNR":return"Attach files containing NR Cap prune combos";case"E":return"Attach an NVItem 28874";case"Q":return"Attach files containing 0xB0CD items as text";case"QLTE":return"Attach files containing 0xB0CD hexdumps";case"QNR":return"Attach files containing 0xB826 hexdumps";case"M":return"Attach files containing CA_COMB_INFO logs as text";case"H":return"Attach a file containing the UE Capability Information or UE EUTRA Capability hexdump";case"RF":return"Attach a file containing CA COMBOS from Qct Modem Capabilities";case"SHNR":return"Attach a Shannon NR UE cap config protobuf (.binarypb)";case"P":return"Attach a PCAP file (.pcap)";case"DLF":case"QMDL":case"HDF":case"SDM":return"Attach a diag log";default:return"Attach files representing a unique set of UE Capability Information"}})(),get name(){return`${t.prefix}inputFile`},get multiple(){return!["E","H","SHNR","P","DLF","QMDL","HDF","SDM"].includes(i.value)},get disabled(){return t.submitting.value},[a]:{disabled:l(e=>e.submitting.value,[t]),multiple:l(e=>!["E","H","SHNR","P","DLF","QMDL","HDF","SDM"].includes(e.value),[i]),name:l(e=>`${e.prefix}inputFile`,[t])}},3,"0M_2"),n(o,{label:(()=>{switch(i.value){case"C":case"CNR":case"Q":case"QNR":case"QLTE":case"M":return"Or paste them below";case"E":case"SHNR":case"P":case"DLF":case"QMDL":case"HDF":case"SDM":return"Or paste its hexdump below";default:return"Or paste it below"}})(),placeholder:"Paste the log content",get name(){return`${t.prefix}inputText`},get halfHeight(){return i.value=="H"},get disabled(){return t.submitting.value},[a]:{disabled:l(e=>e.submitting.value,[t]),halfHeight:l(e=>e.value=="H",[i]),name:l(e=>`${e.prefix}inputText`,[t]),placeholder:a}},3,"0M_3"),n(c,{label:"Attach a file containing the UE MRDC Capability hexdump",get name(){return`${t.prefix}inputENDCFile`},get disabled(){return t.submitting.value},get hidden(){return i.value!="H"},[a]:{disabled:l(e=>e.submitting.value,[t]),hidden:l(e=>e.value!="H",[i]),label:a,name:l(e=>`${e.prefix}inputENDCFile`,[t])}},3,"0M_4"),n(o,{label:"Or paste it below",placeholder:"Paste the log content",get name(){return`${t.prefix}inputENDCText`},get disabled(){return t.submitting.value},halfHeight:!0,get hidden(){return i.value!="H"},[a]:{disabled:l(e=>e.submitting.value,[t]),halfHeight:a,hidden:l(e=>e.value!="H",[i]),label:a,name:l(e=>`${e.prefix}inputENDCText`,[t]),placeholder:a}},3,"0M_5"),n(c,{label:"Attach a file containing the UE NR Capability hexdump",get name(){return`${t.prefix}inputNRFile`},get disabled(){return t.submitting.value},get hidden(){return i.value!="H"},[a]:{disabled:l(e=>e.submitting.value,[t]),hidden:l(e=>e.value!="H",[i]),label:a,name:l(e=>`${e.prefix}inputNRFile`,[t])}},3,"0M_6"),n(o,{label:"Or paste it below",placeholder:"Paste the log content",get name(){return`${t.prefix}inputNRText`},get disabled(){return t.submitting.value},halfHeight:!0,get hidden(){return i.value!="H"},[a]:{disabled:l(e=>e.submitting.value,[t]),halfHeight:a,hidden:l(e=>e.value!="H",[i]),label:a,name:l(e=>`${e.prefix}inputNRText`,[t]),placeholder:a}},3,"0M_7")]},1,"0M_8")},f=t=>{const[i]=m();i.value=t},C=Object.freeze(Object.defineProperty({__proto__:null,s_RxJnt3K50Co:v,s_wLtKhMEeaVM:f},Symbol.toStringTag,{value:"Module"}));export{v as s_RxJnt3K50Co,f as s_wLtKhMEeaVM};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["build/q-tKtYkztZ.js","build/q-S9UpRIKE.js","build/q-Ybk7I87c.js","build/q-Aim3vtzo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}