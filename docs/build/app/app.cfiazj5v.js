/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(n,t,e,o){"use strict";function i(n,t,e,o,i,c,r){let l=e.n+(o||C),f=e[l];if(f||(f=e[l=e.n+C]),f){let o=t.t;if(t.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=t.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[l]){r=f.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");t.c(o,r,e.length&&e[e.length-1].nextSibling||o.r),c[l]=!0,n.i.set(o,c)}}}function c(n){return{l:n[0],f:n[1],u:!!n[2],s:!!n[3],a:!!n[4]}}function r(n,t,e,o){const i=n.p.get(t);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(t))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),n.p.delete(t))}function l(n,t,e){let o,i=null,c=!1,r=!1;for(var l=arguments.length;l-- >2;)A.push(arguments[l]);for(;A.length>0;)if((e=A.pop())&&void 0!==e.pop)for(l=e.length;l--;)A.push(e[l]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].d+=e:null===i?i=[r?{d:e}:e]:i.push(r?{d:e}:e),c=r;if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(l in t.class)t.class[l]&&A.push(l);t.class=A.join(" "),A.length=0}null!=t.v&&(o=t.v)}return"function"==typeof n?n(Object.assign({},t,{m:i})):{y:n,b:i,d:void 0,w:t,M:o,g:void 0,k:!1}}function f(n,t){n.C.has(t)||(n.C.set(t,!0),n.W?n.queue.write(()=>u(n,t)):n.queue.tick(()=>u(n,t)))}function u(n,t,e,o,i,c){if(n.C.delete(t),!n.j.has(t)){if(o=n.x.get(t),e=!o){if((i=n.p.get(t))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{u(n,t)}),void(i.$onRender=i["s-rc"]);o=function r(n,t,e,o,i,c,l){try{(function f(n,t,e,o,i,c,r){for(r in n.O.set(o,e),n.N.has(e)||n.N.set(e,{}),(c=Object.assign({color:{type:String}},t.properties)).mode={type:String},c)a(n,c[r],e,o,r,i)})(n,i=n.S(t).A,t,o=new i,e)}catch(e){o={},n.T(e,7,t,!0)}return n.x.set(t,o),o}(n,t,n.L.get(t))}c&&c.then?c.then(()=>s(n,t,o,e)):s(n,t,o,e)}}function s(n,t,e,o){(function i(n,t,e,o,c){try{const i=t.A.host;let r;if(o.render||o.hostData||i||r){n.q=!0;const i=o.render&&o.render();let r;n.q=!1;const f=n.R.get(e)||{};f.g=e;const u=l(null,r,i);n.R.set(e,n.render(f,u,c,t.A.encapsulation))}n.B(n,n.D,t,o.mode,e),e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(n=>n()),e["s-rc"]=null)}catch(t){n.q=!1,n.T(t,8,e,!0)}})(n,n.S(t),t,e,!o);try{o?t["s-init"]():y(n.R.get(t))}catch(e){n.T(e,6,t,!0)}}function a(n,t,e,o,i,c,r,l){if(t.type||t.state){const f=n.N.get(e);t.state||(!t.attr||void 0!==f[i]&&""!==f[i]||(r=c&&c.P)&&E(l=r[t.attr])&&(f[i]=function f(n,t){if(E(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}(t.type,l)),e.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=e[i]),delete e[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[S+i]=t.watchCallbacks.slice()),d(o,i,function u(t){return(t=n.N.get(n.O.get(this)))&&t[i]},function s(e,o){(o=n.O.get(this))&&(t.state||t.mutable)&&p(n,o,i,e)})}}function p(n,t,e,o,i,c,r){(i=n.N.get(t))||n.N.set(t,i={}),o!==i[e]&&(i[e]=o,n.x.get(t)&&(i[S+e],!n.q&&t["s-rn"]&&f(n,t)))}function d(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function v(n,t,e,o,i,c,r,l,f){if("class"!==e||c)if("style"===e){for(l in o=o||W,i=i||W,o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.S(t);o&&o.F&&o.F[e]?m(t,e,i):"ref"!==e&&(m(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i?function u(n,t,e){const o=t!==(t=t.replace(/^xlink\:?/,"")),i=T[t];!i||e&&"false"!==e?"function"!=typeof e&&(i&&(e=""),o?n.setAttributeNS(L,O(t),e):n.setAttribute(t,e)):o?n.removeAttributeNS(L,O(t)):n.removeAttribute(t)}(t,e,i):!c||null!=i&&!1!==i||t.removeAttribute(e);else e=O(e)in t?O(e.substring(2)):O(e[2])+e.substring(3),i?i!==o&&n.D.H(t,e,i):n.D.I(t,e);else if(o!==i){const n=null==o||""===o?j:o.trim().split(/\s+/),e=null==i||""===i?j:i.trim().split(/\s+/);let c=null==t.className||""===t.className?j:t.className.trim().split(/\s+/);for(l=0,f=n.length;l<f;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,f=e.length;l<f;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function m(n,t,e){try{n[t]=e}catch(n){}}function h(n,t,e,o,i){const c=11===e.g.nodeType&&e.g.host?e.g.host:e.g,r=t&&t.w||W,l=e.w||W;for(i in r)l&&null!=l[i]||null==r[i]||v(n,c,i,r[i],void 0,o,e.k);for(i in l)i in r&&l[i]===("value"===i||"checked"===i?c[i]:r[i])||v(n,c,i,r[i],l[i],o,e.k)}function y(n,t){n&&(n.w&&n.w.ref&&n.w.ref(t?null:n.g),n.b&&n.b.forEach(n=>{y(n,t)}))}function b(n,t,e,o,i){const c=n.U(t);let r,l,f,u;if(i&&1===c){(l=n.z(t,k))&&(f=l.split("."))[0]===o&&((u={}).y=n.Q(u.g=t),e.b||(e.b=[]),e.b[f[1]]=u,e=u,i=""!==f[2]);for(let c=0;c<t.childNodes.length;c++)b(n,t.childNodes[c],e,o,i)}else 3===c&&(r=t.previousSibling)&&8===n.U(r)&&"s"===(f=n.Z(r).split("."))[0]&&f[1]===o&&((u={d:n.Z(t)}).g=t,e.b||(e.b=[]),e.b[f[2]]=u)}function w(n,t,e,o,i){return e["s-cr"]||n.z(e,g)||function c(n,t){return n&&1===t.encapsulation}(n.e,t)||n.c(e,e["s-cr"]=n.G(""),n.J(e)[0]),n.e||1!==t.encapsulation||(e.shadowRoot=e),o={K:e["s-id"],P:{}},t.F&&Object.keys(t.F).forEach(c=>{(i=t.F[c].V)&&(o.P[i]=n.z(e,i))}),o}function $(n,t,e,o){e.connectedCallback=function(){(function e(n,t,o){n.j.delete(o),n.X.has(o)||(n.X.set(o,!0),o["s-id"]||(o["s-id"]=n.Y()),function i(n,t,e){for(e=t;e=n.D._(e);)if(n.nn(e)){n.tn.has(t)||(n.p.set(t,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,o),n.queue.tick(()=>n.en(t,o,w(n.D,t,o))))})(n,t,this)},e.disconnectedCallback=function(){(function t(n,e,o){!n.on&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.U(t);t=n.o(t)}}(n.D,e)&&(n.j.set(e,!0),r(n,e),y(n.R.get(e),!0),n.D.I(e),n.in.delete(e),[n.p,n.cn,n.L].forEach(n=>n.delete(e)))})(n,this)},e["s-init"]=function(){(function t(n,e,o,i,c){if(!n.tn.has(e)&&n.x.get(e)&&!n.j.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],n.tn.set(e,!0);try{y(n.R.get(e)),(c=n.cn.get(e))&&(c.forEach(n=>n(e)),n.cn.delete(e))}catch(t){n.T(t,4,e)}e.classList.add(o),r(n,e)}})(n,this,o)},e.forceUpdate=function(){f(n,this)},function i(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].rn;1===i||2===i?d(e,o,function t(){return(n.N.get(this)||{})[o]},function t(e){p(n,this,o,e)}):6===i&&function c(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}(e,o,N)})}(n,t.F,e)}function M(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.ln.querySelector(e)),i||(i=t[e]=n.fn(e),n.un(n.ln,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const g="data-ssrv",k="data-ssrc",C="$",W={},j=[],x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},E=n=>null!=n,O=n=>n.toLowerCase(),N=()=>{},A=[],S="wc-",T={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},L="http://www.w3.org/1999/xlink";let q=!1;(function R(t,e,o,r,u,s){const a={html:{}},p={},d=o[t]=o[t]||{},v=function m(n,t,e){n.sn||(n.sn=((n,t,e,o)=>n.addEventListener(t,e,o)),n.an=((n,t,e,o)=>n.removeEventListener(t,e,o)));const o=new WeakMap,i={pn:e.documentElement,t:e.head,ln:e.body,dn:!1,U:n=>n.nodeType,fn:n=>e.createElement(n),vn:(n,t)=>e.createElementNS(n,t),mn:n=>e.createTextNode(n),G:n=>e.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),hn:n=>n.remove(),un:(n,t)=>n.appendChild(t),J:n=>n.childNodes,o:n=>n.parentNode,yn:n=>n.nextSibling,Q:n=>O(n.tagName),Z:n=>n.textContent,bn:(n,t)=>n.textContent=t,z:(n,t)=>n.getAttribute(t),wn:(n,t,e)=>n.setAttribute(t,e),$n:(n,t,e,o)=>n.setAttributeNS(t,e,o),Mn:(n,t)=>n.removeAttribute(t),gn:(n,o)=>"child"===o?n.firstElementChild:"parent"===o?i._(n):"body"===o?i.ln:"document"===o?e:"window"===o?t:n,H:(t,e,c,r,l,f,u,s)=>{const a=e;let p=t,d=o.get(t);if(d&&d[a]&&d[a](),"string"==typeof f?p=i.gn(t,f):"object"==typeof f?p=f:(s=e.split(":")).length>1&&(p=i.gn(t,s[0]),e=s[1]),!p)return;let v=c;(s=e.split(".")).length>1&&(e=s[0],v=(n=>{n.keyCode===x[s[1]]&&c(n)})),u=i.dn?{capture:!!r,passive:!!l}:!!r,n.sn(p,e,v,u),d||o.set(t,d={}),d[a]=(()=>{p&&n.an(p,e,v,u),d[a]=null})},I:(n,t)=>{const e=o.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(n=>{e[n]&&e[n]()}))},kn:(n,e,o)=>n&&n.dispatchEvent(new t.CustomEvent(e,o)),_:(n,t)=>(t=i.o(n))&&11===i.U(t)?t.host:t};return i}(d,o,r);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=r,e.resourcesUrl=e.publicPath=u,d.h=l,d.Context=e;const y=o.$definedCmps=o.$definedCmps||{};let k=0;const W={D:v,Cn:function j(n,t){y[n.n]||(y[n.n]=!0,$(W,n,t.prototype,s),o.customElements.define(n.n,t))},Wn:e.emit,S:n=>a[v.Q(n)],jn:n=>e[n],isClient:!0,nn:n=>!(!y[v.Q(n)]&&!W.S(n)),Y:()=>t+k++,T:(n,t,e)=>void 0,xn:n=>(function t(n,e,o){return{create:M(n,e,o,"create"),componentOnReady:M(n,e,o,"componentOnReady")}})(v,p,n),queue:e.queue=function N(t,e,o,i){function c(n){for(;n=s.shift();)n();o=!1}function r(n,e){for(n=f(),c();e=a.shift();)e(n);for(;(e=p.shift())&&f()-n<40;)e(n);(i=a.length>0||p.length>0)&&t.raf(l)}function l(n,e){for(c();e=a.shift();)e();for(n=4+f();(e=p.shift())&&f()<n;)e();(i=a.length>0||p.length>0)&&t.raf(r)}const f=()=>e.performance.now(),u=Promise.resolve(),s=[],a=[],p=[];return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{tick:n=>{s.push(n),o||(o=!0,u.then(c))},read:n=>{a.push(n),i||(i=!0,t.raf(r))},write:n=>{p.push(n),i||(i=!0,t.raf(r))}}}(d,o),en:function A(n,t){if(t.mode||(t.mode=v.z(t,"mode")||e.mode),w(W.D,n,t),n.A)f(W,t);else{const e="string"==typeof n.En?n.En:n.En[t.mode],o=u+e+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(v.e,n)?".sc":"")+".js";import(o).then(e=>{try{n.A=e[(n=>O(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||C);if(!t[i]){const e=n.fn("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.un(n.t,e)}}}(v,n,n.A)}catch(t){n.A=class{}}f(W,t)}).catch(n=>void 0)}},p:new WeakMap,i:new WeakMap,X:new WeakMap,in:new WeakMap,tn:new WeakMap,O:new WeakMap,L:new WeakMap,x:new WeakMap,j:new WeakMap,C:new WeakMap,cn:new WeakMap,On:new WeakMap,R:new WeakMap,N:new WeakMap};W.render=function S(n,t){function e(o,i,r,l,f,p,d,v,m){if(!s&&"slot"===o.y){if(Object.keys(u).length&&(a&&t.wn(i,a+"-slot",""),v=E(d=o.w&&o.w.name)?u[d]:u.Nn,E(v))){for(n.on=!0,l=0;l<v.length;l++)p=v[l],t.hn(p),t.un(i,p),8!==p.nodeType&&(m=!0);!m&&o.b&&c(i,[],o.b),n.on=!1}return null}if(E(o.d))o.g=t.mn(o.d);else{f=o.g=q||"svg"===o.y?t.vn("http://www.w3.org/2000/svg",o.y):t.fn(o.y),q="svg"===o.y||"foreignObject"!==o.y&&q,h(n,null,o,q),E(a)&&f.An!==a&&t.wn(f,f.An=a,"");const i=o.b;if(i)for(l=0;l<i.length;++l)(p=e(i[l],f))&&t.un(f,p);"svg"===o.y&&(q=!1)}return o.g}function o(n,o,i,c,r,l,f,u){const s=n["s-cr"]||n.$defaultHolder;for(l=s&&t.o(s)||n;c<=r;++c)(u=i[c])&&(f=E(u.d)?t.mn(u.d):e(u,n))&&(u.g=f,t.c(l,f,o))}function i(n,e,o){for(;e<=o;++e)E(n[e])&&t.hn(n[e].g)}function c(n,c,u){let s,a,p,d,v=0,m=0,h=c.length-1,y=c[0],b=c[h],w=u.length-1,$=u[0],M=u[w];for(;v<=h&&m<=w;)null==y?y=c[++v]:null==b?b=c[--h]:null==$?$=u[++m]:null==M?M=u[--w]:r(y,$)?(f(y,$),y=c[++v],$=u[++m]):r(b,M)?(f(b,M),b=c[--h],M=u[--w]):r(y,M)?(f(y,M),t.c(n,y.g,t.yn(b.g)),y=c[++v],M=u[--w]):r(b,$)?(f(b,$),t.c(n,b.g,y.g),b=c[--h],$=u[++m]):(E(s)||(s=l(c,v,h)),a=s[$.M],E(a)?((p=c[a]).y!==$.y?d=e($,n):(f(p,$),c[a]=void 0,d=p.g),$=u[++m]):(d=e($,n),$=u[++m]),d&&t.c(y.g&&y.g.parentNode||n,d,y.g));v>h?o(n,null==u[w+1]?null:u[w+1].g,u,m,w):m>w&&i(c,v,h)}function r(n,t){return n.y===t.y&&n.M===t.M}function l(n,t,e){const o={};let i,c,r;for(i=t;i<=e;++i)null!=(r=n[i])&&void 0!==(c=r.M)&&(o.Sn=i);return o}function f(e,r,l){const f=r.g=e.g,u=e.b,s=r.b;q=r.g&&E(t._(r.g))&&void 0!==r.g.ownerSVGElement,q="svg"===r.y||"foreignObject"!==r.y&&q,E(r.d)?(l=f["s-cr"]||f.$defaultHolder)?t.bn(t.o(l),r.d):e.d!==r.d&&t.bn(f,r.d):("slot"!==r.y&&h(n,e,r,q),E(u)&&E(s)?c(f,u,s):E(s)?(E(e.d)&&t.bn(f,""),o(f,null,s,0,s.length-1)):E(u)&&i(u,0,u.length-1)),q&&"svg"===r.y&&(q=!1)}let u,s,a;return function n(e,o,i,c,r){return function l(n,t,e,o,i,c,r){if(o=t&&n.o(t))for(i=n.J(o),c=0;c<i.length;c++)o=i[c],1===n.U(o)&&E(r=n.z(o,"slot"))?e[r]?e[r].push(o):e[r]=[o]:e.Nn?e.Nn.push(o):e.Nn=[o]}(t,e.g["s-cr"],u={}),a="scoped"===c||"shadow"===c&&!t.e?"data-"+t.Q(e.g):null,i||a&&t.wn(e.g,a+"-host",""),f(e,o),o}}(W,v);const T=v.pn;T["s-ld"]=[],T["s-rn"]=!0,T["s-init"]=(()=>{W.tn.set(T,d.loaded=W.W=!0),v.kn(o,"appload",{detail:{namespace:t}})}),function L(n,t,e){const o=e.querySelectorAll(`[${g}]`),i=o.length;let c,r,l,f,u,s;if(i>0)for(n.tn.set(e,!0),f=0;f<i;f++)for(c=o[f],r=t.z(c,g),(l={}).y=t.Q(l.g=c),n.R.set(c,l),u=0,s=c.childNodes.length;u<s;u++)b(t,c.childNodes[u],l,r,!0)}(W,v,T),W.B=i,(d.components||[]).map(n=>(function t(n,e,o,i){const r={n:n[0],F:{color:{V:"color"}}};r.En=n[1];const l=n[3];if(l)for(o=0;o<l.length;o++)i=l[o],r.F[i[0]]={rn:i[1],Tn:!!i[2],V:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,Ln:i[4]};return r.encapsulation=n[4],n[5]&&(r.qn=n[5].map(c)),e[r.n]=r})(n,a)).forEach(n=>W.Cn(n,class extends HTMLElement{})),function R(n,t){t.componentOnReady=((t,e)=>{if(n.S(t)&&!n.tn.has(t)){const o=n.cn.get(t)||[];o.push(e),n.cn.set(t,o)}else e(t)}),t.$r&&t.$r.forEach(n=>t.componentOnReady(n[0],n[1])),t.$r=null}(W,d),d.initialized=!0})(o,e,n,t,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"App","hydrated");