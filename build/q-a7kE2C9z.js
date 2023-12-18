import{d as vt}from"./q-OyUNoDim.js";/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */const{entries:st,setPrototypeOf:tt,isFrozen:Ut,getPrototypeOf:Ft,getOwnPropertyDescriptor:ct}=Object;let{freeze:E,seal:L,create:ft}=Object,{apply:Oe,construct:be}=typeof Reflect<"u"&&Reflect;E||(E=function(i){return i});L||(L=function(i){return i});Oe||(Oe=function(i,s,r){return i.apply(s,r)});be||(be=function(i,s){return new i(...s)});const ee=R(Array.prototype.forEach),nt=R(Array.prototype.pop),Y=R(Array.prototype.push),oe=R(String.prototype.toLowerCase),Re=R(String.prototype.toString),Ht=R(String.prototype.match),X=R(String.prototype.replace),zt=R(String.prototype.indexOf),Gt=R(String.prototype.trim),S=R(RegExp.prototype.test),V=Wt(TypeError);function R(l){return function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),g=1;g<s;g++)r[g-1]=arguments[g];return Oe(l,i,r)}}function Wt(l){return function(){for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return be(l,s)}}function a(l,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:oe;tt&&tt(l,null);let r=i.length;for(;r--;){let g=i[r];if(typeof g=="string"){const D=s(g);D!==g&&(Ut(i)||(i[r]=D),g=D)}l[g]=!0}return l}function H(l){const i=ft(null);for(const[s,r]of st(l))ct(l,s)!==void 0&&(i[s]=r);return i}function te(l,i){for(;l!==null;){const r=ct(l,i);if(r){if(r.get)return R(r.get);if(typeof r.value=="function")return R(r.value)}l=Ft(l)}function s(r){return console.warn("fallback value for",r),null}return s}const ot=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Le=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ne=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Bt=E(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),De=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Yt=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),it=E(["#text"]),at=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ye=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),rt=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ne=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Xt=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Vt=L(/<%[\w\W]*|[\w\W]*%>/gm),jt=L(/\${[\w\W]*}/gm),$t=L(/^data-[\-\w.\u00B7-\uFFFF]/),qt=L(/^aria-[\-\w]+$/),ut=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Kt=L(/^(?:\w+script|data):/i),Zt=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),mt=L(/^html$/i);var lt=Object.freeze({__proto__:null,MUSTACHE_EXPR:Xt,ERB_EXPR:Vt,TMPLIT_EXPR:jt,DATA_ATTR:$t,ARIA_ATTR:qt,IS_ALLOWED_URI:ut,IS_SCRIPT_OR_DATA:Kt,ATTR_WHITESPACE:Zt,DOCTYPE_NAME:mt});const Jt=function(){return typeof window>"u"?null:window},Qt=function(i,s){if(typeof i!="object"||typeof i.createPolicy!="function")return null;let r=null;const g="data-tt-policy-suffix";s&&s.hasAttribute(g)&&(r=s.getAttribute(g));const D="dompurify"+(r?"#"+r:"");try{return i.createPolicy(D,{createHTML(w){return w},createScriptURL(w){return w}})}catch{return console.warn("TrustedTypes policy "+D+" could not be created."),null}};function pt(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Jt();const i=o=>pt(o);if(i.version="3.0.6",i.removed=[],!l||!l.document||l.document.nodeType!==9)return i.isSupported=!1,i;let{document:s}=l;const r=s,g=r.currentScript,{DocumentFragment:D,HTMLTemplateElement:w,Node:ie,Element:Ie,NodeFilter:ae,NamedNodeMap:dt=l.NamedNodeMap||l.MozNamedAttrMap,HTMLFormElement:Tt,DOMParser:gt,trustedTypes:j}=l,$=Ie.prototype,_t=te($,"cloneNode"),Et=te($,"nextSibling"),ht=te($,"childNodes"),re=te($,"parentNode");if(typeof w=="function"){const o=s.createElement("template");o.content&&o.content.ownerDocument&&(s=o.content.ownerDocument)}let _,z="";const{implementation:le,createNodeIterator:At,createDocumentFragment:St,getElementsByTagName:Rt}=s,{importNode:Lt}=r;let N={};i.isSupported=typeof st=="function"&&typeof re=="function"&&le&&le.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:se,ERB_EXPR:ce,TMPLIT_EXPR:fe,DATA_ATTR:Nt,ARIA_ATTR:Dt,IS_SCRIPT_OR_DATA:yt,ATTR_WHITESPACE:Me}=lt;let{IS_ALLOWED_URI:Ce}=lt,u=null;const we=a({},[...ot,...Le,...Ne,...De,...it]);let m=null;const xe=a({},[...at,...ye,...rt,...ne]);let f=Object.seal(ft(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),G=null,ue=null,ke=!0,me=!0,Pe=!1,ve=!0,x=!1,b=!1,pe=!1,de=!1,k=!1,q=!1,K=!1,Ue=!0,Fe=!1;const Ot="user-content-";let Te=!0,W=!1,P={},v=null;const He=a({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ze=null;const Ge=a({},["audio","video","img","source","image","track"]);let ge=null;const We=a({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Z="http://www.w3.org/1998/Math/MathML",J="http://www.w3.org/2000/svg",y="http://www.w3.org/1999/xhtml";let U=y,_e=!1,Ee=null;const bt=a({},[Z,J,y],Re);let I=null;const It=["application/xhtml+xml","text/html"],Mt="text/html";let p=null,F=null;const Ct=s.createElement("form"),Be=function(e){return e instanceof RegExp||e instanceof Function},he=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(F&&F===e)){if((!e||typeof e!="object")&&(e={}),e=H(e),I=It.indexOf(e.PARSER_MEDIA_TYPE)===-1?I=Mt:I=e.PARSER_MEDIA_TYPE,p=I==="application/xhtml+xml"?Re:oe,u="ALLOWED_TAGS"in e?a({},e.ALLOWED_TAGS,p):we,m="ALLOWED_ATTR"in e?a({},e.ALLOWED_ATTR,p):xe,Ee="ALLOWED_NAMESPACES"in e?a({},e.ALLOWED_NAMESPACES,Re):bt,ge="ADD_URI_SAFE_ATTR"in e?a(H(We),e.ADD_URI_SAFE_ATTR,p):We,ze="ADD_DATA_URI_TAGS"in e?a(H(Ge),e.ADD_DATA_URI_TAGS,p):Ge,v="FORBID_CONTENTS"in e?a({},e.FORBID_CONTENTS,p):He,G="FORBID_TAGS"in e?a({},e.FORBID_TAGS,p):{},ue="FORBID_ATTR"in e?a({},e.FORBID_ATTR,p):{},P="USE_PROFILES"in e?e.USE_PROFILES:!1,ke=e.ALLOW_ARIA_ATTR!==!1,me=e.ALLOW_DATA_ATTR!==!1,Pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ve=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,x=e.SAFE_FOR_TEMPLATES||!1,b=e.WHOLE_DOCUMENT||!1,k=e.RETURN_DOM||!1,q=e.RETURN_DOM_FRAGMENT||!1,K=e.RETURN_TRUSTED_TYPE||!1,de=e.FORCE_BODY||!1,Ue=e.SANITIZE_DOM!==!1,Fe=e.SANITIZE_NAMED_PROPS||!1,Te=e.KEEP_CONTENT!==!1,W=e.IN_PLACE||!1,Ce=e.ALLOWED_URI_REGEXP||ut,U=e.NAMESPACE||y,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Be(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Be(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),x&&(me=!1),q&&(k=!0),P&&(u=a({},[...it]),m=[],P.html===!0&&(a(u,ot),a(m,at)),P.svg===!0&&(a(u,Le),a(m,ye),a(m,ne)),P.svgFilters===!0&&(a(u,Ne),a(m,ye),a(m,ne)),P.mathMl===!0&&(a(u,De),a(m,rt),a(m,ne))),e.ADD_TAGS&&(u===we&&(u=H(u)),a(u,e.ADD_TAGS,p)),e.ADD_ATTR&&(m===xe&&(m=H(m)),a(m,e.ADD_ATTR,p)),e.ADD_URI_SAFE_ATTR&&a(ge,e.ADD_URI_SAFE_ATTR,p),e.FORBID_CONTENTS&&(v===He&&(v=H(v)),a(v,e.FORBID_CONTENTS,p)),Te&&(u["#text"]=!0),b&&a(u,["html","head","body"]),u.table&&(a(u,["tbody"]),delete G.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw V('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw V('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=e.TRUSTED_TYPES_POLICY,z=_.createHTML("")}else _===void 0&&(_=Qt(j,g)),_!==null&&typeof z=="string"&&(z=_.createHTML(""));E&&E(e),F=e}},Ye=a({},["mi","mo","mn","ms","mtext"]),Xe=a({},["foreignobject","desc","title","annotation-xml"]),wt=a({},["title","style","font","a","script"]),Q=a({},Le);a(Q,Ne),a(Q,Bt);const Ae=a({},De);a(Ae,Yt);const xt=function(e){let t=re(e);(!t||!t.tagName)&&(t={namespaceURI:U,tagName:"template"});const n=oe(e.tagName),c=oe(t.tagName);return Ee[e.namespaceURI]?e.namespaceURI===J?t.namespaceURI===y?n==="svg":t.namespaceURI===Z?n==="svg"&&(c==="annotation-xml"||Ye[c]):!!Q[n]:e.namespaceURI===Z?t.namespaceURI===y?n==="math":t.namespaceURI===J?n==="math"&&Xe[c]:!!Ae[n]:e.namespaceURI===y?t.namespaceURI===J&&!Xe[c]||t.namespaceURI===Z&&!Ye[c]?!1:!Ae[n]&&(wt[n]||!Q[n]):!!(I==="application/xhtml+xml"&&Ee[e.namespaceURI]):!1},M=function(e){Y(i.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},Se=function(e,t){try{Y(i.removed,{attribute:t.getAttributeNode(e),from:t})}catch{Y(i.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!m[e])if(k||q)try{M(t)}catch{}else try{t.setAttribute(e,"")}catch{}},Ve=function(e){let t=null,n=null;if(de)e="<remove></remove>"+e;else{const T=Ht(e,/^[\r\n\t ]+/);n=T&&T[0]}I==="application/xhtml+xml"&&U===y&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const c=_?_.createHTML(e):e;if(U===y)try{t=new gt().parseFromString(c,I)}catch{}if(!t||!t.documentElement){t=le.createDocument(U,"template",null);try{t.documentElement.innerHTML=_e?z:c}catch{}}const d=t.body||t.documentElement;return e&&n&&d.insertBefore(s.createTextNode(n),d.childNodes[0]||null),U===y?Rt.call(t,b?"html":"body")[0]:b?t.documentElement:d},je=function(e){return At.call(e.ownerDocument||e,e,ae.SHOW_ELEMENT|ae.SHOW_COMMENT|ae.SHOW_TEXT,null)},kt=function(e){return e instanceof Tt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof dt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},$e=function(e){return typeof ie=="function"&&e instanceof ie},O=function(e,t,n){N[e]&&ee(N[e],c=>{c.call(i,t,n,F)})},qe=function(e){let t=null;if(O("beforeSanitizeElements",e,null),kt(e))return M(e),!0;const n=p(e.nodeName);if(O("uponSanitizeElement",e,{tagName:n,allowedTags:u}),e.hasChildNodes()&&!$e(e.firstElementChild)&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return M(e),!0;if(!u[n]||G[n]){if(!G[n]&&Ze(n)&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n)))return!1;if(Te&&!v[n]){const c=re(e)||e.parentNode,d=ht(e)||e.childNodes;if(d&&c){const T=d.length;for(let h=T-1;h>=0;--h)c.insertBefore(_t(d[h],!0),Et(e))}}return M(e),!0}return e instanceof Ie&&!xt(e)||(n==="noscript"||n==="noembed"||n==="noframes")&&S(/<\/no(script|embed|frames)/i,e.innerHTML)?(M(e),!0):(x&&e.nodeType===3&&(t=e.textContent,ee([se,ce,fe],c=>{t=X(t,c," ")}),e.textContent!==t&&(Y(i.removed,{element:e.cloneNode()}),e.textContent=t)),O("afterSanitizeElements",e,null),!1)},Ke=function(e,t,n){if(Ue&&(t==="id"||t==="name")&&(n in s||n in Ct))return!1;if(!(me&&!ue[t]&&S(Nt,t))){if(!(ke&&S(Dt,t))){if(!m[t]||ue[t]){if(!(Ze(e)&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&S(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n))))return!1}else if(!ge[t]){if(!S(Ce,X(n,Me,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&zt(n,"data:")===0&&ze[e])){if(!(Pe&&!S(yt,X(n,Me,"")))){if(n)return!1}}}}}}return!0},Ze=function(e){return e.indexOf("-")>0},Je=function(e){O("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m};let c=t.length;for(;c--;){const d=t[c],{name:T,namespaceURI:h,value:C}=d,B=p(T);let A=T==="value"?C:Gt(C);if(n.attrName=B,n.attrValue=A,n.keepAttr=!0,n.forceKeepAttr=void 0,O("uponSanitizeAttribute",e,n),A=n.attrValue,n.forceKeepAttr||(Se(T,e),!n.keepAttr))continue;if(!ve&&S(/\/>/i,A)){Se(T,e);continue}x&&ee([se,ce,fe],et=>{A=X(A,et," ")});const Qe=p(e.nodeName);if(Ke(Qe,B,A)){if(Fe&&(B==="id"||B==="name")&&(Se(T,e),A=Ot+A),_&&typeof j=="object"&&typeof j.getAttributeType=="function"&&!h)switch(j.getAttributeType(Qe,B)){case"TrustedHTML":{A=_.createHTML(A);break}case"TrustedScriptURL":{A=_.createScriptURL(A);break}}try{h?e.setAttributeNS(h,T,A):e.setAttribute(T,A),nt(i.removed)}catch{}}}O("afterSanitizeAttributes",e,null)},Pt=function o(e){let t=null;const n=je(e);for(O("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)O("uponSanitizeShadowNode",t,null),!qe(t)&&(t.content instanceof D&&o(t.content),Je(t));O("afterSanitizeShadowDOM",e,null)};return i.sanitize=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,n=null,c=null,d=null;if(_e=!o,_e&&(o="<!-->"),typeof o!="string"&&!$e(o))if(typeof o.toString=="function"){if(o=o.toString(),typeof o!="string")throw V("dirty is not a string, aborting")}else throw V("toString is not a function");if(!i.isSupported)return o;if(pe||he(e),i.removed=[],typeof o=="string"&&(W=!1),W){if(o.nodeName){const C=p(o.nodeName);if(!u[C]||G[C])throw V("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof ie)t=Ve("<!---->"),n=t.ownerDocument.importNode(o,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!k&&!x&&!b&&o.indexOf("<")===-1)return _&&K?_.createHTML(o):o;if(t=Ve(o),!t)return k?null:K?z:""}t&&de&&M(t.firstChild);const T=je(W?o:t);for(;c=T.nextNode();)qe(c)||(c.content instanceof D&&Pt(c.content),Je(c));if(W)return o;if(k){if(q)for(d=St.call(t.ownerDocument);t.firstChild;)d.appendChild(t.firstChild);else d=t;return(m.shadowroot||m.shadowrootmode)&&(d=Lt.call(r,d,!0)),d}let h=b?t.outerHTML:t.innerHTML;return b&&u["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&S(mt,t.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+h),x&&ee([se,ce,fe],C=>{h=X(h,C," ")}),_&&K?_.createHTML(h):h},i.setConfig=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};he(o),pe=!0},i.clearConfig=function(){F=null,pe=!1},i.isValidAttribute=function(o,e,t){F||he({});const n=p(o),c=p(e);return Ke(n,c,t)},i.addHook=function(o,e){typeof e=="function"&&(N[o]=N[o]||[],Y(N[o],e))},i.removeHook=function(o){if(N[o])return nt(N[o])},i.removeHooks=function(o){N[o]&&(N[o]=[])},i.removeAllHooks=function(){N={}},i}var en=pt();const nn=l=>{const i=/\[([^[]+)\]\((.*)\)/gm,r=en.sanitize(l).replace(i,"<a class='underline' href='$2'>$1</a>");return vt("p",{dangerouslySetInnerHTML:r},null,null,3,"fx_0")};export{nn as m};
