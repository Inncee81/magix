/*Magix3.0.4 Licensed MIT*/define("magix",["$"],function(n){var t,e=function(n,t){n?(c(n)||(n=[n]),require(n,t)):t&&t()},r=function(){},i=function(n,t,e,i,o){return r[w]=t[w],o=new r,P(o,e),P(n,i),o.constructor=n,n[w]=o,n},o=n.isPlainObject,c=n.isArray,f=function(t,e){n(t).html(e)},u=0,a="",d=[],s=d.slice,$=function(){},p=",",h=(window,document),m="#",l="",v="object",w="prototype",g=/[#?].*$/,y=/([^=&?\/#]+)=?([^&#?]*)/g,b=/(?!^)=|&/,x=function(n){return(n||"mx_")+u++},V=x(),I={rootId:x(),defaultView:V,error:function(n){throw n}},U=I.hasOwnProperty,Z=function(n){return typeof n==v?n:h.getElementById(n)},A=function(n,t,e){if(n=Z(n),t=Z(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},P=function(n,t,e){for(e in t)n[e]=t[e];return n},T=function(n,t,e,r,i,o){for(c(n)||(n=[n]),c(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(f){I.error(f)}return i},j=function(n,t){return n&&U.call(n,t)},k=function(n,t){return t.f-n.f||t.t-n.t},C=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};P(C[w],{get:function(n){var t=this,e=t.c,r=e[l+n];return r&&(r.f++,r.t=u++,r=r.v),r},set:function(n,t){var e=this,r=e.c,i=l+n,o=r[i],c=e.b;if(!o){if(r.length>=e.x)for(r.sort(k);c--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=u++},del:function(n){n=l+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=a,delete t[n],r&&T(r,e.o,e))},has:function(n){return j(this.c,l+n)}});var E,M=new C,O=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}E[t]=e},S=function(n){var t,e=M.get(n);return e||(E={},t=n.replace(g,a),n==t&&b.test(t)&&(t=a),n.replace(t,a).replace(y,O),M.set(n,e={a:t,b:E})),{path:e.a,params:P({},e.b)}},H=function(n,t,e){var r,i,o,c=[];for(i in t)r=t[i]+a,(!e||r||j(e,i))&&(r=encodeURIComponent(r),c.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+c.join("&")),n},L=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;i>e;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},R={config:function(n,t){return t=I,n&&(t=o(n)?P(t,n):t[n]),t},boot:function(n){P(I,n),e(I.exts,function(){z().mountView(I.defaultView)})},toMap:L,toTry:T,toUrl:H,parseUrl:S,mix:P,has:j,inside:A,node:Z,guid:x,Cache:C},q="on",B={fire:function(n,t,e,r){var i,o,c,f,u=l+n,a=this,d=a[u];if(t||(t={}),t.type||(t.type=n),d)for(i=d.length,o=i-1;i--;)c=r?i:o-i,f=d[c],f.d?(d.splice(c,1),o--):T(f.f,t,a);d=a[q+n],d&&T(d,t,a),e&&a.off(n)},on:function(n,t){var e=this,r=l+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=l+n,o=this,c=o[i];if(t){if(c)for(e=c.length;e--;)if(r=c[e],r.f==t&&!r.d){r.d=1;break}}else delete o[i],delete o[q+n]}};R.Event=B;var D,F,N=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=G[n.pId],e&&!j(e.$r,t)&&(e.$r[t]=1,e.$rc++,N(e)))},_=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=G[n.pId],r&&j(r.$r,e)&&(r.$rc--,delete r.$r[e],_(r,t)))},z=function(n,e){return D||(t=h.body,n=I.rootId,e=Z(n),e||(t.id=n),D=new Q(n)),D},G={},J=function(n,t){j(G,n)||(G[n]=t,Q.fire("add",{vframe:t}))},K=function(n,t,e){e=G[n],e&&(delete G[n],Q.fire("remove",{vframe:e,fcc:t}))},Q=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.pId=t,J(n,e)};P(Q,P({root:z,all:function(){return G},get:function(n){return G[n]}},B)),P(P(Q[w],B),{mountView:function(n,t){var r,i,o,c=this,f=Z(c.id);!c.$a&&f&&(c.$a=1,c.$t=f.innerHTML),c.unmountView(),c.$d=0,f&&n&&(c.path=n,r=S(n),i=++c.$s,e(r.path,function(n){if(i==c.$s){un(n);var e=P(r.params,t);o=new n({owner:c,id:c.id},e),c.$v=o,fn(o),o.init(e),o.render(),o.tmpl||o.$p||o.endUpdate()}}))},unmountView:function(){var n,t,e=this,r=e.$v;r&&(F||(t=1,F={id:e.id}),e.$d=1,e.unmountZone(0,1),_(e,F),e.$v=0,an(r),n=Z(e.id),n&&e.$a&&f(n,e.$t),t&&(F=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return _(i),r=G[n],r||(j(i.$c,n)||i.$cc++,i.$c[n]=n,r=new Q(n,i.id)),r.mountView(t,e),r},mountZone:function(t,e){var r,i,o,c=this;t=t||c.id;var f=n(m+t+" [mx-view]");for(c.$h=1,c.unmountZone(t,1),r=f.length-1;r>=0;r--)i=f[r],o=i.id||(i.id=x()),c.mountVframe(o,i.getAttribute("mx-view"),e);c.$h=0,N(c)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=G[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),K(n,r),e.id=e.pId=a,e=G[i],e&&j(e.$c,n)&&(delete e.$c[n],e.$cc--,t||N(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&A(e,n))&&r.unmountVframe(e,1);t||N(r)}}),R.Vframe=Q;var W=function(t,e,r,i){n(t)[i?"off":q](e,r)},X="parentNode",Y=new C(30,10),nn=/([^\(]+)\(([\s\S]*)?\)/,tn={},en=function(n){for(var e,r,i,o,c,f,u,a,s,$,p=n.target,h=n.type,m="mx-"+h,v=[];p!=t&&1==p.nodeType;){if(e=p.getAttribute(m)){if(v=[],c=p.$f,!c)for(f=p;f=f[X];)if(j(G,u=f.id)){p.$f=c=u;break}c?(i=G[c],o=i&&i.$v,o&&o.$s>0&&(a=Y.get(e),a||(a=e.match(nn)||d,a={n:a[1],i:a[2]},a.p=a.i&&T(Function("return "+a.i))||{},Y.set(e,a)),s=a.n+l+h,$=o[s],$&&(n.current=p,n.params=a.p,T($,n,o)))):I.error(Error("bad:"+e))}if((r=p.$)&&r[h]||n.mxStop||n.isPropagationStopped())break;v.push(p),p=p[X]||t}for(;p=v.pop();)r=p.$||(p.$={}),r[h]=1},rn=function(n,e){var r=0|tn[n],i=r>0?1:0;r+=e?-i:i,r||(W(t,n,en,e),e||(r=1)),tn[n]=r},on=/^([^<]+)<([^>]+)>$/,cn=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),T(t,s.call(arguments),e))}},fn=function(n,t){var e,r=n.$eo;for(e in r)rn(e,t)},un=function(n){if(!n[l]){n[l]=1;var t,e,r,i,o,c=n[w],f={};for(o in c)if(t=c[o],e=o.match(on))for(r=e[1],i=e[2],i=i.split(p);e=i.pop();)f[e]=1,c[r+l+e]=t;cn(c),c.$eo=f}},an=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),fn(n,1)),n.$s--},dn=function(n,t){t=this,P(t,n),t.$s=1},sn=dn[w];return P(dn,{extend:function(n,t){var e=this;n=n||{};var r=n.ctor,o=function(n,t){e.call(this,n,t),r&&r.call(this,t)};return o.extend=e.extend,i(o,e,n,t)}}),P(P(sn,B),{render:$,init:$,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n,1)},endUpdate:function(n,t){t=this,t.$s>0&&(t.$p=1,t.owner.mountZone(n))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=Z(n),e&&f(e,t)),r.endUpdate(n)}}),R.View=dn,define(V,function(){return dn.extend()}),R});