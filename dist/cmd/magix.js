/*!3.8.12 MIT kooboy_li@163.com*/define("magix",["$"],e=>{let t=e("$"),r=t.isPlainObject,i=t.isArray,n=0,o="",l=[],f=",",a=null,s=window,d=void 0,$=document,h=t($),u=s.setTimeout,c="changed",p="change",g="pageunload",m="value",b="mxs",v="#";function w(){}let y,x,k=JSON.stringify,V="\x1e",A="object",I="prototype",T="params",C="path",S="mx-view",j=/[#?].*$/,N=/([^=&?\/#]+)=?([^&#?]*)/g,U=/(?!^)=|&/,_=e=>(e||"mx_")+n++,q=_(),M={rootId:_(),defaultView:q,error(e){throw e}},E=e=>typeof e==A?e:$.getElementById(e),O=e=>!e||typeof e!=A,P=(e,t,r)=>{let i,n,o,l=0;for(o in e)i=e[o],n=t[o],O(i)&&n===i||(r[o]=1,l=1),t[o]=i;return l},H=(e,t,r)=>{if(e=E(e),t=E(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:L,keys:R,hasOwnProperty:Z}=Object,B=t("head"),D=(e,t)=>{t&&!D[e]&&(D[e]=1,B.append(`<style>${t}`))},z=e=>e.id||(e.$a=1,e.id=_()),F=(e,t,r,n,o)=>{t=t||l,i(e)||(e=[e]),i(t)||(t=[t]);for(o of e)try{n=o&&o.apply(r,t)}catch(e){M.error(e)}return n},J=(e,t)=>e&&Z.call(e,t),Q=(e,t)=>{let r,i;if(O(t))(r=t+o)[0]==V&&J(e,r)&&(t=e[r]);else for(r in t)i=t[r],i=Q(e,i),t[r]=i;return t},X=(e,t)=>t.f-e.f||t.t-e.t;function G(e,t,r,i){(i=this).c=[],i.b=t||5,i.x=i.b+(e||20),i.r=r}L(G[I],{get(e){let t=this.c[V+e];return t&&(t.f++,t.t=n++,t=t.v),t},each(e,t,r,i,n){i=(r=this).c;for(n of i)e(n.v,t,r)},set(e,t){let r=this,i=r.c,o=V+e,l=i[o],f=r.b;if(!l){if(i.length>=r.x)for(i.sort(X);f--;)(l=i.pop()).f>0&&r.del(l.o);l={o:e},i.push(l),i[o]=l}l.v=t,l.f=1,l.t=n++},del(e){e=V+e;let t=this.c,r=t[e],i=this.r;r&&(r.f=-1,r.v=o,delete t[e],i&&F(i,r.o))},has(e){return J(this.c,V+e)}});let K=(e,t)=>{if(e){let r,n=[];if(q==e)x||(x=Xt.extend()),t(x);else if(s.seajs)seajs.use(e,(...e)=>{for(let t of e)n.push(t&&t.__esModule&&t.default||t);t&&t(...n)});else{i(e)||(e=[e]);for(r of e)r=n(r),n.push(r&&r.__esModule&&r.default||r);t&&t(...n)}}else t()};function W(){}let Y=(e,t,r,i,n)=>(W[I]=t[I],n=new W,L(n,r),L(e,i),n.constructor=e,e[I]=n,e),ee=t.find||t.zepto,te=ee.matchesSelector||ee.matches,re=(e,t)=>{t=e.data,e.eventTarget=t.e,F(t.f,e,t.v)},ie=(e,r,i,n,o)=>{o&&(r+=`.${o.i}`),n?t(e).off(r,i):t(e).on(r,o,i)};let ne,oe=new G,le=0,fe=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}ne[t]=r},ae=e=>{let t,r=oe.get(e);return r||(ne={},e==(t=e.replace(j,o))&&U.test(t)&&(t=o),e.replace(t,o).replace(N,fe),oe.set(e,r={a:t,b:ne})),{path:r.a,params:{...r.b}}},se=(e,t,r)=>{let i,n,l,f=[];for(n in t)i=t[n]+o,(!r||i||J(r,n))&&(i=encodeURIComponent(i),f.push(l=n+"="+i));return l&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+f.join("&")),e},de=(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},$e=new G,he=(e,t,r)=>($e.has(e)?r=$e.get(e):(r=F(Function(`return ${e}`)),e.indexOf(V)>-1?Q(t,r):$e.set(e,r)),r),ue={config:(e,t)=>(t=M,e&&(t=r(e)?L(t,e):t[e]),t),boot(e){L(M,e),K(M.ini,t=>{L(M,t,e),K(M.exts,()=>{Ze.on(c,Je),ye.on(c,Je),le=1,Pe()})})},toMap:de,toTry:F,toUrl:se,parseUrl:ae,mix:L,has:J,keys:R,inside:H,node:E,applyStyle:D,guid:_,use:K,Cache:G,nodeId:z},ce={fire(e,t,r,i){let n,l,f,a,s=this,d=s[V+e];if(t||(t={}),t.type=e,d)for(l=(n=d.length)-1;n--;)(a=d[f=i?n:l-n]).f?(a.x=1,F(a.f,t,s),a.x=o):a.x||(d.splice(f,1),l--);return(d=s[`on${e}`])&&F(d,t,s),r&&s.off(e),s},on(e,t){let r=V+e;return(this[r]||(this[r]=[])).push({f:t}),this},off(e,t){let r,i=V+e,n=this,l=n[i];if(t){if(l)for(r of l)if(r.f==t){r.f=o;break}}else delete n[i],delete n[`on${e}`];return n}};ue.Event=ce;let pe={},ge={},me={},be=0,ve=e=>{e=(e+o).split(",");for(let t of e)J(ge,t)?ge[t]++:ge[t]=1;return e},we=e=>{let t,r;for(t of e)J(ge,t)&&((r=--ge[t])||(delete ge[t],delete pe[t]))};let ye={get(e){let t=e?pe[e]:pe;return t},set(e){return be=P(e,pe,me)||be,this},digest(e){e&&ye.set(e),be&&(be=0,this.fire(c,{keys:me}),me={})},diff:()=>me,clean:e=>({ctor(){e=ve(e),this.on("destroy",()=>we(e))}}),...ce};ue.State=ye;let xe,ke="view",Ve=new G,Ae=new G,Ie=s.location,Te=0,Ce={query:{},params:{},href:o},Se=/(?:^.*\/\/[^\/]+|#.*$)/gi,je=/^[^#]*#?!?/;function Ne(e,t){return this[T][e]||t!==d&&t||o}let Ue,_e,qe,Me,Ee,Oe=(e,t)=>{e="#!"+e,t?Ie.replace(e):Ie.hash=e},Pe=()=>{let e,t,r=Le().srcHash;ie(s,"hashchange",(i,n,l)=>{t||(n=Le(),(e=n.srcHash)!=r&&(l=(()=>{i.p=1,r=e,t=o,Oe(e),Re()}),i={reject(){i.p=1,t=o,Oe(r)},resolve:l,prevent(){t=1}},Ze.fire(p,i),t||i.p||l()))}),ie(s,"beforeunload",(e,t,r)=>{if(e=e||s.event,t={},Ze.fire(g,t),r=t.msg)return e&&(e.returnValue=r),r}),Re()},He=$.title,Le=e=>{e=e||Ie.href;let t,i,n,l,f,a=Ve.get(e);return a||(a={get:Ne,href:e,srcQuery:t=e.replace(Se,o),srcHash:i=e.replace(je,o),query:n=ae(t),hash:l=ae(i),params:f={...n[T],...l[T]}},le&&(((e,t)=>{if(Ue||(Ue=M.routes||{},_e=M.unmatchView,qe=M.defaultView,Me=M.defaultPath||"/",Ee=M.rewrite),!e[ke]){let i=e.hash[C]||Me;Ee&&(i=Ee(i,e[T],Ue)),t=Ue[i]||_e||qe,e[C]=i,e[ke]=t,r(t)&&L(e,t)}})(a),Ve.set(e,a))),a},Re=()=>{let e=Le(),t=((e,t)=>{let r=e.href,i=t.href,n=r+V+i,o=Ae.get(n);if(!o){let i,l;o={params:l={},force:!r};let f,a=e[T],s=t[T],d=R(a).concat(R(s)),$=e=>{let t=a[e],r=s[e];t!=r&&(l[e]={from:t,to:r},i=1)};for(f of d)$(f);a=e,s=t,l=o,$(C),$(ke),Ae.set(n,o={a:i,b:o})}return o})(Ce,Ce=e);return!Te&&t.a&&((xe=t.b)[C]&&($.title=e.title||He),Ze.fire(c,xe)),Te=0,xe},Ze={parse:Le,diff:Re,to(e,t,i,n){!t&&r(e)&&(t=e,e=o);let l=ae(e),f=l[T],a=l[C],s=Ce[C],d=Ce[T],$=Ce.query[T];if(L(f,t),a)for(s in $)J(f,s)||(f[s]=o);else d&&(a=s,f={...d,...f});var h,u,c,p;u=Ce,c=i,p=n,(h=se(h=a,f,$))!=u.srcHash&&(Te=p,Oe(h,c))},...ce};ue.Router=Ze;let Be,De,ze=0,Fe=(e,t,r,i,n,o)=>{if(e&&e.$a!=ze&&(r=e.$v)&&r.$a>1){(t?((e,t,r)=>{let i,n=e.$os;if(n)for(i of n)if(r=J(t,i))break;return r})(r,t):Qt(r))&&r.$b(),n=e.children();for(o of n)Fe(Qe[o],t)}},Je=(e,t,r)=>{t=We(),(r=e[ke])?t.mountView(r.to):(ze=n++,Fe(t,e.keys))},Qe={},Xe=e=>{if(!e.$b&&!e.$d&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let{id:t,pId:r}=e,i=Qe[r];i&&!J(i.$e,t)&&(i.$e[t]=1,i.$rc++,Xe(i))}},Ge=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let{id:r,pId:i}=e,n=Qe[i];n&&J(n.$e,r)&&(n.$rc--,delete n.$e[r],Ge(n,t))}},Ke=(e,t,r,i)=>(i=(i=(i=Qe[e])&&i.$v)?i.$d.$a:{},t.indexOf(V)>0&&Q(i,r),i),We=e=>(Be||(y=$.body,e=M.rootId,E(e)||(y.id=e),Be=new rt(e)),Be),Ye=(e,t)=>{J(Qe,e)||(Qe[e]=t,rt.fire("add",{vframe:t}),(e=E(e))&&(e.vframe=t))},et=(e,t,r)=>{for(t=e.$f;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},tt=[];function rt(e,t,r){(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=r.$g||1,r.$e={},r.$f=[],r.pId=t,Ye(e,r)}L(rt,{all:()=>Qe,get:e=>Qe[e]},ce),L(rt[I],ce,{mountView(e,t){let r,i,n,l,f,a=this,s=a.id,d=E(s),$=a.pId;!a.$h&&d&&(a.$h=1,a.$i=d.innerHTML),a.unmountView(),a.$b=0,r=ae(e||o),n=r[C],d&&n&&(a[C]=e,l=r[T],Ke($,e,l),a.$j=r[C],L(l,t),i=a.$g,K(n,e=>{if(i==a.$g){if(!e)return M.error(Error(`id:${s} cannot load:${n}`));f=Jt(e),n=new e(s,a,l,d,f),a.$v=n,a.$a=ze,Bt(n),(l=F(n.init,[l,{node:d,deep:!n.tmpl}],n))||(l={then:e=>e()}),i=++a.$g,l.then(()=>{i==a.$g&&(n.$b(),n.tmpl||(a.$h=0,n.$e||n.endUpdate()))})}}))},unmountView(){let e,r,i=this,{$v:n,id:o}=i;i.$f=[],n&&(De||(r=1,De={id:o}),i.$b=1,i.unmountZone(0,1),Ge(i,De),i.$v=0,n.$a>0&&(n.$a=0,delete ft[o],delete at[o],n.fire("destroy",0,1,1),Lt(n,1),Bt(n,1),n.owner=0),n.$a--,(e=E(o))&&i.$h&&t(e).html(i.$i),r&&(De=0)),i.$g++},mountVframe(e,t,r){let i,n=this,o=n.id,l=n.$c;return Ge(n,{id:e}),(i=Qe[e])||(J(l,e)||(n.$n=0,n.$cc++),l[e]=e,(i=tt.pop())?rt.call(i,e,o):i=new rt(e,o)),i.mountView(t,r),i},mountZone(e,r){let i,n,o=this,l=[];e=e||o.id;let f=t(`#${e} [${S}]`);o.$d=1;for(i of f)i.$b||(n=z(i),i.$b=1,l.push([n,i.getAttribute(S)]));for([n,i]of l)o.mountVframe(n,i);o.$d=0,r||Xe(o)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=Qe[e]){let{$cr:l,pId:f}=r;r.unmountView(),n=l,(o=Qe[i=e])&&(delete Qe[i],rt.fire("remove",{vframe:o,fcc:n}),(i=E(i))&&(i.$b=0,i.vframe=0,i.$a=0)),r.id=r.pId=r.$c=r.$e=0,r.$h=0,r.off("alter"),r.off("created"),tt.push(r),(r=Qe[f])&&J(r.$c,e)&&(delete r.$c[e],r.$n=0,r.$cc--,t||Xe(r))}var i,n,o},unmountZone(e,t){let r,i=this;for(r in i.$c)(!e||r!=e&&H(r,e))&&i.unmountVframe(r,1);t||Xe(i)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=Qe[t.pId];return t},children(e){return(e=this).$n||(e.$n=R(e.$c))},invoke(e,t){let r,i,n,o,l,f=this.$f;return(i=this.$v)&&i.$e?r=(n=i[e])&&F(n,t,i):((o=f[l=V+e])&&(o.r=t===o.a),o={n:e,a:t,k:l},f.push(o),f[l]=o),r}}),ue.Vframe=rt,t.fn.invokeView=function(e,t){let r,i,n=[];for(r of this)i=r.vframe,n.push(i&&i.invoke(e,t));return n};let it=new G(30,10),nt=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,ot={},lt={},ft={},at={},st=0,dt=(e,t)=>{let r,i,n,o,f,a,s=[],d=e,$=e.getAttribute(`mx-${t}`),h=[],u=v,c=0;if($&&((f=it.get($))||(f={v:(f=$.match(nt)||l)[1],n:f[2],i:f[3]},it.set($,f)),f={...f,r:$}),f&&!f.v||lt[t]){if((n=at[i=d.$d])&&1==n[d.$e]&&(a=1,u=i),!a){for(h.push(d);d!=y&&(d=d.parentNode);){if(Qe[i=d.id]||(n=at[i=d.$d])&&1==n[d.$e]){u=i;break}h.push(d)}for($ of h)(i=at[u])||(i=at[u]={}),i[n=$.$e||($.$e=++st)]=1,$.$d=u}d=e.id,Qe[d]&&(c=u=d);do{if((r=Qe[u])&&(a=r.$v)){if(o=(n=a.$so)[t])for(d=o.length;d--;)n={r:i=o[d],v:u,n:i},i?!c&&te(e,i)&&s.push(n):c&&s.unshift(n);if(a.tmpl&&!c){f&&!f.v&&(f.v=u);break}c=0}}while(r&&(u=r.pId))}return f&&s.push(f),s},$t=e=>{let t,r,i,n,o,l,f,a,{target:s,type:d}=e,$=[];for(;s!=y;){if((t=dt(s,d)).length){$=[];for(let{v:r,r:$,n:h,i:u}of t){if(f!=r){if(f&&e.isPropagationStopped())break;f=r}(n=(i=Qe[r])&&i.$v)?(l=n[o=h+V+d])&&(e.eventTarget=s,a=u?he(u,n.$d.$a):{},e[T]=a,F(l,e,n)):e.stopPropagation()}}if((r=ft[l=s.$d])&&(r=r[s.$e])&&r[d]||e.isPropagationStopped()){$.length&&$.push(l);break}f=s.id,Qe[f]&&$.push(f),$.push(s),s=s.parentNode||y}if(l=$.length)for(r=v;l--;)(n=$[l]).nodeType?((t=ft[r])||(t=ft[r]={}),(a=t[f=n.$e||(n.$e=++st)])||(a=t[f]={}),a[d]=1):r=n},ht=(e,t,r)=>{let i=0|ot[e],n=r?-1:1;i&&r!==i||ie(y,e,$t,r),ot[e]=i+n,t&&(lt[e]=(0|lt[e])+n)},ut="http://www.w3.org/2000/svg",ct="http://www.w3.org/1998/Math/MathML",pt={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,`<svg xmlns="${ut}">`],m:[1,`<math xmlns="${ct}">`],_:[0,""]},gt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;pt.optgroup=pt.option,pt.tbody=pt.tfoot=pt.colgroup=pt.caption=pt.thead,pt.th=pt.td;let mt=$.implementation.createHTMLDocument(o),bt=mt.createElement("base");bt.href=$.location.href,mt.head.appendChild(bt);let vt=(e,t)=>{let r=z(t);e.$c[r]?e.unmountVframe(r,1):e.unmountZone(r,1)},wt={INPUT:[m,"checked"],TEXTAREA:[m],OPTION:["selected"]},yt=(e,t)=>(1==e.nodeType&&(e.$f?t=e.$g:((t=e.$a?o:e.id)||(t=e.getAttribute(b)),t||(t=e.getAttribute(S))&&(t=ae(t)[C]),e.$f=1,e.$g=t)),t),xt=(e,t,r,i,n)=>{let o,l,f,a,s,d=e.lastChild,$=t.firstChild,h=0,u={},c={};for(;d;)h++,(f=yt(d))&&(f=u[f]||(u[f]=[])).push(d),d=d.previousSibling;for(;$;)(f=yt($))&&(c[f]=1),$=$.nextSibling;for($=t.firstChild,s=t.childNodes.length<h,d=e.firstChild;$;)h--,o=$,$=$.nextSibling,(a=u[f=yt(o)])&&(a=a.pop())?(a!=d?s&&d.nextSibling==a?(e.appendChild(d),d=a.nextSibling):e.insertBefore(a,d):d=d.nextSibling,kt(a,o,e,r,i,n)):d?(f=yt(l=d))&&u[f]&&c[f]?(h++,r.c=1,e.insertBefore(o,l)):(d=d.nextSibling,kt(l,o,e,r,i,n)):(e.appendChild(o),r.c=1);for(;h-- >0;)l=e.lastChild,vt(i,l),e.removeChild(l),r.c=1},kt=(e,t,r,i,n,l,a)=>{if(((e,t)=>{let r,i=e.nodeName,n=wt[i],o=0;if(n)for(r of n)e[r]!=t[r]&&(o=1,e[r]=t[r]);return o})(e,t)||1==e.nodeType&&(a=e.hasAttribute("mxv"))||!e.isEqualNode||!e.isEqualNode(t))if(e.nodeName===t.nodeName)if(1===e.nodeType){let r=t.getAttribute(b);if(r&&r==e.getAttribute(b))return;let s,d,$,h,u,c,p,g=t.getAttribute(S),w=t.innerHTML,y=t.getAttribute("mxa"),x=!y||y!=e.getAttribute("mxa"),k=Qe[e.id],V=g&&ae(g);if(g&&k&&(!t.id||t.id==e.id)&&k.$j==V[C]&&(h=k.$v)){if(c=w!=k.$i,p=g!=k[C],$=e.getAttribute("mxv"),!c&&!p&&$){a=0,u=$.split(f);for($ of u)if($==v||J(l,$)){p=1;break}}p||c||a?($=h.$e&&h.$f)?(u=V[T],Ke(k.pId,g,u),k.$i=w,k[C]=g,V={node:t,deep:!h.tmpl,inner:c,query:p,keys:l},F($,[u,V],h)&&i.v.push(h),s=V.deep):(d=1,s=1):x=1}else s=1,d=k;d&&(i.c=1,k.unmountVframe(0,1)),x&&((e,t,r,i)=>{let n,l,f,a;delete e.$f;let s=e.attributes,d=t.attributes;for(l=s.length;l--;)n=s[l].name,t.hasAttribute(n)||("id"==n?i||r.d.push([e,o]):(r.c=1,e.removeAttribute(n)));for(l=d.length;l--;)f=(n=d[l]).name,a=n[m],e.getAttribute(f)!=a&&("id"==f?r.d.push([e,a]):(r.c=1,e.setAttribute(f,a)))})(e,t,i,k&&g),s&&xt(e,t,i,n,l)}else e.nodeValue!==t.nodeValue&&(i.c=1,e.nodeValue=t.nodeValue);else vt(n,e),r.replaceChild(t,e),i.c=1},Vt={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},At=/[&<>"'\`]/g,It=e=>""+(null==e?"":e),Tt=e=>`&${Vt[e]};`,Ct=e=>It(e).replace(At,Tt),St=(e,t,r,i)=>{for(i=e[V];--i;)if(e[r=V+i]===t)return r;return e[r=V+e[V]++]=t,r},jt={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},Nt=e=>jt[e],Ut=/[!')(*]/g,_t=e=>encodeURIComponent(It(e)).replace(Ut,Nt),qt=/[\\'"]/g,Mt=e=>It(e).replace(qt,"\\$&"),Et=(e,t)=>{let r,i,n=e.$k,o=e.$c,l=e.$b,f=Qe[l],a=f&&f.$v,s={d:[],v:[]},d=E(l),$=e.$d,u=e.$a,c=r=>{t.i<t.length?Et(e,t):(s=t.slice(),t.i=t.length=0,r&&a.fire("domready"),F(s))};if(t.i=t.length,e.$c=0,e.$k={},o&&a&&a.$a>0&&(r=a.tmpl)&&a.$d==e){a.fire("dompatch"),delete ft[l],delete at[l],i=((e,t)=>{let r,i=mt.createElement("div"),n=t.namespaceURI;r=n==ut?"g":n==ct?"m":(gt.exec(e)||[0,""])[1];let o=pt[r]||pt._;i.innerHTML=o[1]+e;let l=o[0];for(;l--;)i=i.lastChild;return i})(r($,l,u,Ct,It,_t,St,Mt),d),xt(d,i,s,f,n);for(i of s.d)i[0].id=i[1];f.$d=r=s.c||!a.$e;for(i of s.v)i.$b();r&&a.endUpdate(l),s.c&&h.trigger({type:"htmlchanged",vId:l}),c(1)}else c()};function Ot(e){let t=this;t.$b=e,t.$c=1,t.$d={vId:e},t.$a={[V]:1},t.$e=[],t.$k={}}L(Ot[I],{get(e,t){return t=this.$d,e&&(t=t[e]),t},set(e){let t=this;return t.$c=P(e,t.$d,t.$k)||t.$c,t},digest(e,t){let r=this.set(e),i=r.$e;i.push(t),i.i||Et(r,i)},snapshot(){return this.$f=k(this.$d),this},altered(){let e=this;if(e.$f)return e.$f!=k(e.$d)},translate(e){return Q(this.$d,e)},parse(e){return he(e,this.$a)}});let Pt=/^(\$?)([^<]*)<([^>]+)>$/,Ht=(e,t,r)=>(e.a?r=e:((r=function(e){F(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),Lt=(e,t)=>{let r,i,n=e.$r;for(r in n)i=n[r],(t||i.x)&&Rt(n,r,1)},Rt=(e,t,r,i)=>{let n,o,f=e[t];return f&&f!=i&&((n=(o=f.e).destroy)&&r&&F(n,l,o),delete e[t]),o},Zt=(e,t,r,i,n)=>{i=e[t],e[t]=e[r]=function(...e){(n=this).$a>0&&(n.$a++,n.fire("rendercall"),Lt(n),F(i,e,n))}},Bt=(e,t)=>{let r,{$eo:i,$so:n,$el:o,id:l}=e;for(r in i)ht(r,n[r],t);for(r of o)ie(r.e,r.n,re,t,{i:l,v:e,f:r.f,e:r.e})},Dt={win:s,doc:$},zt=(e,t,r)=>{let i,n,o,l,f={};for(n of e)for(i in n)o=n[i],l=f[i],"ctor"!=i?(Pt.test(i)&&(l?o=Ht(l,o):o.b=1),f[i]=o):r.push(o);for(i in f)J(t,i)||(t[i]=f[i])};function Ft(...e){let t=this._||(this._=[]);return zt(e,this[I],t),this}let Jt=e=>{if(!e[V]){e[V]=[];let t,r,i,n,o,l,a,s,d,$=e[I],h={},u=[],c={};(r=$.mixins)&&zt(r,$,e[V]);for(a in $)if(t=$[a],r=a.match(Pt)){[,l,i,n]=r,n=n.split(f);for(s of n){if(o=Dt[i],d=1,l){if(o){u.push({f:t,e:o,n:s});continue}d=2,(o=c[s])||(o=c[s]=[]),o[i]||(o[i]=1,o.push(i))}h[s]=h[s]|d,(o=$[s=i+V+s])?o.b&&(t.b?$[s]=Ht(t,o):J($,a)&&($[s]=t)):$[s]=t}}Zt($,"render","$b"),$.$eo=h,$.$el=u,$.$so=c,$.$f=$.assign}return e[V]},Qt=e=>{let t,r,i,n=e.$l;if(n.f&&(n.p&&(t=xe[C]),!t&&n.k)){i=xe[T];for(r of n.k)if(t=J(i,r))break}return t};function Xt(e,t,r,i,n){(n=this).owner=t,n.id=e,n.$l={k:[]},n.$r={},n.$a=1,n.updater=n.$d=new Ot(n.id),(e=Xt._)&&F(e,[r,{node:i,deep:!n.tmpl}],n)}L(Xt,{merge:Ft,extend:function e(t,r){let i=this,n=(t=t||{}).ctor,o=[];function l(e,t,r,n,f,a,s,d,$){i.call(s=this,e,t,r,n,f),a=l._,d=[r,{node:n,deep:!s.tmpl}],a&&F(a,d,s),($=o.concat(f)).length&&F($,d,s)}return n&&o.push(n),l.merge=Ft,l.extend=e,Y(l,i,t,r)}}),L(Xt[I],ce,{init:w,beginUpdate(e,t){(t=this).$a>0&&t.$e&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,i,n){(r=this).$a>0&&(e=e||r.id,t?n=t:(n=r.$e,r.$e=1),(i=r.owner).mountZone(e,t),n||u(r.wrapAsync(et),0,i))},wrapAsync(e,t){let r=this,i=r.$a;return(...n)=>{if(i>0&&i==r.$a)return e.apply(t||r,n)}},observeLocation(e,t){let i;(i=this.$l).f=1,r(e)&&(t=e[C],e=e[T]),i.p=t,e&&(i.k=(e+o).split(f))},observeState(e){this.$os=(e+o).split(f)},capture(e,t,r,i){return i=this.$r,t?(Rt(i,e,1,t),i[e]={e:t,x:r}):t=(i=i[e])&&i.e,t},release(e,t){return Rt(this.$r,e,t)},leaveTip(e,t){let r=this,i=n=>{let o="a",l="b";n.type!=p&&(o="b",l="a"),i[o]?(n.prevent(),n.reject()):t()&&(n.prevent(),i[l]=1,r.leaveConfirm(()=>{i[l]=0,n.resolve()},()=>{i[l]=0,n.reject()},e))},n=r=>{t()&&(r.msg=e)};Ze.on(p,i),Ze.on(g,n),r.on("unload",i),r.on("destroy",()=>{Ze.off(p,i),Ze.off(g,n)})},render:w}),ue.View=Xt;let Gt=t.type,Kt=t.now||Date.now;function Wt(){this.id=_("b"),this.$={}}L(Wt[I],{get(e,t){let r,n=this.$;if(e){let t,r=i(e)?e.slice():(e+o).split(".");for(;(t=r.shift())&&n;)n=n[t];t&&(n=d)}return t!==d&&(r=Gt(t))!=Gt(n)&&(n=t),n},set(e,t){r(e)||(e={[e]:t}),L(this.$,e)}});function Yt(e,t,r){(r=this[e])&&(delete this[e],F(r,t,r.e))}let er=(e,t,r,i,n,o)=>{let l=[],f=a,s=0;return function(d,$){s++;let h,u,c=this,p=c.$b,g=p.k;if(l[d+1]=c,$?(f=$,h=1):o.has(g)||(g&&o.set(g,c),p.t=Kt(),(u=p.a)&&F(u,c,c),(u=p.x)&&t.clear(u),h=1),!r.$d){let t=s==i;t&&(r.$e=0,2==n&&(l[0]=f,F(e,l,r))),1==n&&F(e,[$||a,c,t,d],r)}h&&t.fire("end",{bag:c,error:$})}},tr=(e,t,r,n,o)=>{if(e.$d)return e;if(e.$e)return e.enqueue(tr.bind(e,e,t,r,n,o));e.$e=1,i(t)||(t=[t]);let l=e.constructor,f=0,a=l.$f,s=er(r,l,e,t.length,n,l.$c);for(let e of t)if(e){let t,r=l.get(e,o),i=r.e,n=i.$b.k,d=s.bind(i,f++);n&&a[n]?a[n].push(d):r.u?(n&&((t=[d]).e=i,a[n]=t,d=Yt.bind(a,n)),l.$s(i,d)):d()}return e};function rr(){let e=this;e.id=_("s"),e.$g=[]}L(rr[I],{all(e,t){return tr(this,e,t,2)},save(e,t){return tr(this,e,t,2,1)},one(e,t){return tr(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,u(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&F(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let ir=(e,t)=>[k(t),k(e)].join(V),nr=(e,t,r,i)=>{(i=e&&e.$b)&&t[i.n]&&r.del(i.k)},or={add(e){let t,r=this.$b;i(e)||(e=[e]);for(t of e)if(t){let{name:e,cache:i}=t;t.cache=0|i,r[e]=t}},create(e){let t=this.meta(e),i=0|e.cache||t.cache,n=new Wt;n.set(t),n.$b={n:t.name,a:t.after,x:t.cleans,k:i&&ir(t,e)},r(e)&&n.set(e);let o=t.before;return o&&F(o,n,n),this.fire("begin",{bag:n}),n},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,i,n=this;return t||(r=n.cached(e)),r||(r=n.create(e),i=1),{e:r,u:i}},clear(e){this.$c.each(nr,de((e+o).split(f)))},cached(e){let t,r,i=this,n=i.$c,o=i.meta(e),l=0|e.cache||o.cache;if(l&&(r=ir(o,e)),r){let e=i.$f[r];e?t=e.e:(t=n.get(r))&&Kt()-t.$b.t>l&&(n.del(r),t=0)}return t},...ce};return rr.extend=((e,t,r)=>{function i(){rr.call(this)}return i.$s=e,i.$c=new G(t,r),i.$f={},i.$b={},Y(i,rr,a,or)}),ue.Service=rr,L(w[I],ce),w.extend=function e(t,r){let i=this,n=t&&t.ctor;function o(...e){i.apply(this,e),n&&n.apply(this,e)}return o.extend=e,Y(o,i,t,r)},ue.Base=w,ue.default=ue,ue});