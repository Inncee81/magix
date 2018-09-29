/*!3.8.12 MIT kooboy_li@163.com*/define("magix",["$"],function(h){var t=h.isPlainObject,u=h.isArray,a=0,k="",b=[],n=window,m=document,V=(n.setTimeout,"value"),T="mxs",j="#";var g,e=JSON.stringify,w="\x1e",r="object",y="prototype",U="params",A="path",C="mx-view",i=/[#?].*$/,o=/([^=&?\/#]+)=?([^&#?]*)/g,c=/(?!^)=|&/,d=function(n){return(n||"mx_")+a++},s={rootId:d(),error:function(n){throw n}},x=function(n){return typeof n==r?n:m.getElementById(n)},$=function(n){return!n||typeof n!=r},v=function(n,e,t){if(n=x(n),e=x(e),n&&e&&!(t=n==e))try{t=16==(16&e.compareDocumentPosition(n))}catch(n){}return t};function l(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])S(e,i)&&(n[i]=e[i]);return n}var p=s.hasOwnProperty,I=document.head,M=document.createElement("div"),_=function(n,e){e&&!_[n]&&(_[n]=1,M.innerHTML="<style>"+e,I.appendChild(M.firstChild))},Z=function(n){return n.id||(n.id=d())},O=function(n,e,t,r,i){e=e||b,u(n)||(n=[n]),u(e)||(e=[e]);for(var o=0,f=n;o<f.length;o++){i=f[o];try{r=i&&i.apply(t,e)}catch(n){s.error(n)}}return r},S=function(n,e){return n&&p.call(n,e)},q=function(n,e){var t,r;if($(e))(t=e+k)[0]==w&&S(n,t)&&(e=n[t]);else for(t in e)r=e[t],r=q(n,r),e[t]=r;return e},L=function(n,e){return e.f-n.f||e.t-n.t};function N(n,e,t,r){(r=this).c=[],r.b=e||5,r.x=r.b+(n||20),r.r=t}l(N[y],{get:function(n){var e=this.c[w+n];return e&&(e.f++,e.t=a++,e=e.v),e},set:function(n,e){var t=this.c,r=w+n,i=t[r],o=this.b;if(!i){if(t.length>=this.x)for(t.sort(L);o--;)0<(i=t.pop()).f&&this.del(i.o);i={o:n},t.push(i),t[r]=i}i.v=e,i.f=1,i.t=a++},del:function(n){n=w+n;var e=this.c,t=e[n],r=this.r;t&&(t.f=-1,t.v=k,delete e[n],r&&O(r,t.o))},has:function(n){return S(this.c,w+n)}});var P=function(e,t){if(e)if(u(e))require(e,t);else try{t(require(e))}catch(n){require([e],t)}else t&&t()};function z(){}var E,H,R,B=function(n,e,t,r,i){return z[y]=e[y],l(i=new z,t),l(n,r),(i.constructor=n)[y]=i,n},G=h.find||h.zepto,D=G.matchesSelector||G.matches,F=function(n,e){e=n.data,n.eventTarget=e.e,O(e.f,n,e.v)},J=function(n,e,t,r,i){i&&(e+="."+i.i),r?h(n).off(e,t):h(n).on(e,i,t)},K=function(n){return n},Q=new N,W=function(n,e,t){try{t=decodeURIComponent(t)}catch(n){}E[e]=t},X=function(n){var e,t=Q.get(n);return t||(E={},n==(e=n.replace(i,k))&&c.test(e)&&(e=k),n.replace(e,k).replace(o,W),Q.set(n,t={a:e,b:E})),{path:t.a,params:l({},t.b)}},Y=new N,nn=function(n,e,t){return Y.has(n)?t=Y.get(n):(t=O(Function("return "+n)),-1<n.indexOf(w)?q(e,t):Y.set(n,t)),t},en={config:function(n,e){return e=s,n&&(e=t(n)?l(e,n):e[n]),e},boot:function(n){l(s,n),P(s.exts,function(){an().mountView(s.defaultView)})},toMap:function(n,e){var t,r={};if(n)for(var i=0,o=n;i<o.length;i++)t=o[i],r[e&&t?t[e]:t]=e?t:1+(0|r[t]);return r},toTry:O,toUrl:function(n,e,t){var r,i,o,f=[];for(i in e)r=e[i]+k,(!t||r||S(t,i))&&(r=encodeURIComponent(r),f.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+f.join("&")),n},parseUrl:X,mix:l,has:S,keys:function(n,e,t){for(t in e=[],n)S(n,t)&&e.push(t);return e},inside:v,node:x,applyStyle:_,guid:d,use:P,Cache:N,fire:G_Trigger,nodeId:Z,guard:K},tn={fire:function(n,e,t,r){var i,o,f,u,a=this,c=a[w+n];if(e||(e={}),e.type=n,c)for(o=(i=c.length)-1;i--;)(u=c[f=r?i:o-i]).f?(u.x=1,O(u.f,e,a),u.x=k):u.x||(c.splice(f,1),o--);return(c=a["on"+n])&&O(c,e,a),t&&a.off(n),a},on:function(n,e){var t=w+n;return(this[t]||(this[t]=[])).push({f:e}),this},off:function(n,e){var t,r=w+n,i=this[r];if(e){if(i)for(var o=0,f=i;o<f.length;o++)if((t=f[o]).f==e){t.f=k;break}}else delete this[r],delete this["on"+n];return this}};en.Event=tn;var rn={},on=function(n){if(!n.$a&&!n.$b&&n.$cc==n.$rc){n.$cr||(n.$cr=1,n.$ca=0,n.fire("created"));var e=n.id,t=n.pId,r=rn[t];r&&!S(r.$d,e)&&(r.$d[e]=1,r.$rc++,on(r))}},fn=function(n,e){if(!n.$ca&&n.$cr){n.$cr=0,n.$ca=1,n.fire("alter",e);var t=n.id,r=n.pId,i=rn[r];i&&S(i.$d,t)&&(i.$rc--,delete i.$d[t],fn(i,e))}},un=function(n,e,t,r){return r=(r=(r=rn[n])&&r.$v)?r.$a.$a:{},0<e.indexOf(w)&&q(r,t),r},an=function(n){return H||(g=m.body,n=s.rootId,x(n)||(g.id=n),H=new sn(n)),H},cn=function(n,e){S(rn,n)||(rn[n]=e,sn.fire("add",{vframe:e}))},dn=[];function sn(n,e,t){(t=this).id=n,t.$c={},t.$cc=0,t.$rc=0,t.$e=t.$e||1,t.$d={},t.pId=e,cn(n,t)}l(sn,{all:function(){return rn},get:function(n){return rn[n]}},tn),l(sn[y],tn,{mountView:function(n,e){var t,r,i,o,f,u=this,a=u.id,c=x(a),d=u.pId;!u.$f&&c&&(u.$f=1,u.$g=c.innerHTML),u.unmountView(),u.$a=0,t=X(n||k),i=t[A],c&&i&&(u[A]=n,o=t[U],un(d,n,o),u.$h=t[A],l(o,e),r=u.$e,P(i,function(n){if(r==u.$e){if(!n)return s.error(Error("id:"+a+" cannot load:"+i));f=Yn(n),i=new n(a,u,o,c,f),u.$v=i,Kn(i),i.$d(),i.tmpl||(u.$f=0,i.$e||i.endUpdate())}}))},unmountView:function(){var n,e,t=this,r=t.$v,i=t.id;r&&(R||(e=1,R={id:i}),t.$a=1,t.unmountZone(0,1),fn(t,R),(t.$v=0)<r.$b&&(r.$b=0,delete ln[i],delete gn[i],r.fire("destroy",0,1,1),Kn(r,1),r.owner=0),r.$b--,(n=x(i))&&t.$f&&(n.innerHTML=t.$g),e&&(R=0)),t.$e++},mountVframe:function(n,e,t){var r,i=this.id,o=this.$c;return fn(this,{id:n}),(r=rn[n])||(S(o,n)||this.$cc++,o[n]=n,(r=dn.pop())?sn.call(r,n,i):r=new sn(n,i)),r.mountView(e,t),r},mountZone:function(n,e){var t,r,i=this,o=[];n=n||i.id;var f,u=h("#"+n+" ["+C+"]");i.$b=1;for(var a=0,c=u;a<c.length;a++)(t=c[a]).$a||(r=Z(t),t.$a=1,o.push([r,t.getAttribute(C)]));for(var d=0,s=o;d<s.length;d++)r=(f=s[d])[0],t=f[1],i.mountVframe(r,t);i.$b=0,e||on(i)},unmountVframe:function(n,e){var t,r,i,o;if(n=n?this.$c[n]:this.id,t=rn[n]){var f=t.$cr,u=t.pId;t.unmountView(),i=f,(o=rn[r=n])&&(delete rn[r],sn.fire("remove",{vframe:o,fcc:i}),(r=x(r))&&(r.$a=0)),t.id=t.pId=t.$c=t.$d=0,t.off("alter"),t.off("created"),dn.push(t),(t=rn[u])&&S(t.$c,n)&&(delete t.$c[n],t.$cc--,e||on(t))}},unmountZone:function(n,e){var t;for(t in this.$c)(!n||t!=n&&v(t,n))&&this.unmountVframe(t,1);e||on(this)}}),en.Vframe=sn;var hn=new N(30,10),$n=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,vn={},pn={},ln={},gn={},mn=0,bn=function(n,e){var t,r,i,o,f,u,a=[],c=n,d=n.getAttribute("mx-"+e),s=[],h=j,$=0;if(d&&((f=hn.get(d))||(f={v:(f=d.match($n)||b)[1],n:f[2],i:f[3]},hn.set(d,f)),f=l({},f,{r:d})),f&&!f.v||pn[e]){if((i=gn[r=c.$b])&&1==i[c.$d]&&(u=1,h=r),!u){for(s.push(c);c!=g&&(c=c.parentNode);){if(rn[r=c.id]||(i=gn[r=c.$b])&&1==i[c.$d]){h=r;break}s.push(c)}for(var v=0,p=s;v<p.length;v++)d=p[v],(r=gn[h])||(r=gn[h]={}),r[i=d.$d||(d.$d=++mn)]=1,d.$b=h}c=n.id,rn[c]&&($=h=c);do{if((t=rn[h])&&(u=t.$v)){if(o=(i=u.$so)[e])for(c=o.length;c--;)i={r:r=o[c],v:h,n:r},r?!$&&D(n,r)&&a.push(i):$&&a.unshift(i);if(u.tmpl&&!$){f&&!f.v&&(f.v=h);break}$=0}}while(t&&(h=t.pId))}return f&&a.push(f),a},wn=function(n){for(var e,t,r,i,o,f,u,a=n.target,c=n.type,d=[];a!=g;){if((e=bn(a,c)).length){d=[];for(var s=0,h=e;s<h.length;s++){var $=h[s],v=$.v,p=($.r,$.n),l=$.i;if(f!=v){if(f&&n.isPropagationStopped())break;f=v}(i=(r=rn[v])&&r.$v)?(o=i[p+w+c])&&(n.eventTarget=a,u=l?nn(l,i.$a.$a):{},n[U]=u,O(o,n,i)):n.stopPropagation()}}if((t=ln[o=a.$b])&&(t=t[a.$d])&&t[c]||n.isPropagationStopped()){d.length&&d.push(o);break}f=a.id,rn[f]&&d.push(f),d.push(a),a=a.parentNode||g}if(o=d.length)for(t=j;o--;)(i=d[o]).nodeType?((e=ln[t])||(e=ln[t]={}),(u=e[f=i.$d||(i.$d=++mn)])||(u=e[f]={}),u[c]=1):t=i},yn={input:1,br:1,hr:1,img:1,embed:1,source:1,area:1,param:1,col:1,track:1,wbr:1},xn=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,In=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,kn=/^<\/[a-z\d]+>/,Vn={input:[V,"checked"],textarea:[V],option:["selected"]},Tn=a;var jn=function(n,e){var t=Z(e);n.$c[t]?n.unmountVframe(t,1):n.unmountZone(t,1)},Un={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},An=function(n,e,t,r){var i,o,f=t.i,u=e.i;if(e)for(i in u)S(f,i)||("id"==i?r.d.push([n,k]):(r.c=1,n.removeAttribute(i)));for(i in f)o=f[i],e&&u[i]===o||("id"==i?r.d.push([n,o]):(r.c=1,n.setAttribute(i,o)))},Cn=function(n,e,t){var r,i=n.e;return i==Tn?r=m.createTextNode(n.j):(r=m.createElementNS(Un[i]||e.namespaceURI,i),An(r,0,n,t),n.c&&(r.innerHTML=n.c)),r},Mn=function(n,e,t,r,i,o){if(e){if(e.r||e.c!=t.c){var f=void 0,u=0,a=e.b,c=t.b,d=void 0,s=void 0,h=a.length,$=c.length,v=t.a,p=n.childNodes,l=void 0,g=void 0,m=void 0,b={};for(f=h;f--;)(l=(d=a[f]).m)&&(l=b[l]||(b[l]=[])).push({p:p[f],q:d});for(f=0;f<$;f++){for(;(d=a[u++])&&d.s;);(l=b[(s=c[f]).m])&&(l=l.pop())?(g=l.p,m=l.q,g!=p[f]&&(m.s=1,d=m,n.insertBefore(g,p[f])),_n(p[f],n,d,s,r,i,o)):d?b[d.m]&&v[d.m]?(h++,u--,r.c=1,n.insertBefore(Cn(s,n,r),p[f])):_n(p[f],n,d,s,r,i,o):(n.appendChild(Cn(s,n,r)),r.c=1)}for(f=$;f<h;f++)u=p[$],jn(i,u),n.removeChild(u),r.c=1}}else r.c=1,n.innerHTML=t.c},_n=function(n,e,t,r,i,o,f,u){var a=t.i,c=r.i;if(function(n,e,t){var r,i,o=e.e,f=Vn[o],u=t.i,a=0;if(f)for(var c=0,d=f;c<d.length;c++)r=d[c],i=S(u,r)?r!=V||u[r]:r==V&&k,n[r]!=i&&(a=1,n[r]=i);return a}(n,t,r)||(u=t.r)||t.j!=r.j)if(t.e==r.e){if(t.e==Tn)i.c=1,n.nodeValue=r.j;else if(!a[T]||a[T]!=c[T]){var d=c[C],s=r.c,h=t.f!=r.f,$=void 0,v=void 0,p=rn[n.id],l=void 0,g=void 0,m=d&&X(d),b=void 0,w=void 0,y=void 0;if(d&&p&&p.$h==m[A]&&a.id==c.id&&(g=p.$v)){if(w=s!=t.c,y=d!=p[A],l=a.mxv,!w&&!y&&l)for(var x=u=0,I=b=l.split(",");x<I.length;x++)if((l=I[x])==j||S(f,l)){y=1;break}(y||w||u)&&((l=g.$e&&g.$f)?(b=m[U],un(p.pId,d,b),p[A]=d,m={node:n,attr:h,deep:!g.tmpl,inner:w,query:y,keys:f},O(l,[b,m],g)&&i.v.push(g),$=m.deep):$=v=1)}else $=1,v=p;v&&(i.c=1,p.unmountVframe(0,1)),h&&An(n,t,r,i),!$||r.n&&t.n||Mn(n,t,r,i,o,f)}}else jn(o,n),e.replaceChild(Cn(r,e,i),n),i.c=1},Zn={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},On=/[&<>"'\`]/g,Sn=function(n){return""+(null==n?"":n)},qn=function(n){return"&"+Zn[n]+";"},Ln=function(n){return Sn(n).replace(On,qn)},Nn=function(n,e,t,r){for(r=n[w];--r;)if(n[t=w+r]===e)return t;return n[t=w+n[w]++]=e,t},Pn={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},zn=function(n){return Pn[n]},En=/[!')(*]/g,Hn=function(n){return encodeURIComponent(Sn(n)).replace(En,zn)},Rn=/[\\'"]/g,Bn=function(n){return Sn(n).replace(Rn,"\\$&")},Gn=function(e,t){var n,r,i=e.$k,o=e.$c,f=e.$b,u=rn[f],a=u&&u.$v,c={d:[],v:[]},d=x(f),s=e.$d,h=e.$a,$=function(n){t.i<t.length?Gn(e,t):(c=t.slice(),t.i=t.length=0,n&&a.fire("domready"),O(c))};if(t.i=t.length,e.$c=0,e.$k={},o&&a&&0<a.$b&&(n=a.tmpl)&&a.$a==e){a.fire("dompatch"),delete ln[f],delete gn[f],r=function(n){for(var e,t,r,i,o,f,u,a,c,d,s,h,$=n.length,v=0,p=0,l={a:{},b:[],c:n},g=n,m=[l];v<$&&(e=1,"<"==g[0]&&("/"==g[1]?(r=g.match(kn))&&(a=m.pop(),o=n.substring(a.d,v),"textarea"==a.e?(a.f.push({g:V,h:o}),a.i[V]=o,a.b=b):a.c=o,l=m[m.length-1],v+=f=r[0].length,a.j=n.substring(a.k,v),e=0):(r=g.match(xn))&&(i=r[1],e=r[0],o=[],c={},h=k,u=Vn[i],r[2].replace(In,function(n,e,t){t=t||k,"id"==e?h=t:e==C&&t&&!h?h=X(t)[A]:e!=T||h?"mxv"==e&&(u=1):h=t,o.push({g:e,h:t}),c[e]=t}),l.l=l.l||u,s=r[3]||S(yn,i),a={j:e,m:h,e:i,f:o,i:c,b:[],a:{},k:v,n:s,d:v+=f=e.length},h&&(l.a[h]=1),l.b.push(a),s||(m.push(a),l=a),e=0)),e&&(v+=f=(d=(t=g.indexOf("<"))<0?g:g.substring(0,t)).length,a={e:Tn,j:d},l.b.push(a)),p!=v);)g=g.substring(f),p=v;return l}(n(s,f,h,Ln,Sn,Hn,Nn,Bn)),Mn(d,e.$e,r,c,u,i),e.$e=r;for(var v=0,p=c.d;v<p.length;v++)(r=p[v])[0].id=r[1];u.$b=n=c.c||!a.$e;for(var l=0,g=c.v;l<g.length;l++)(r=g[l]).$d();n&&a.endUpdate(f),c.c&&G_Trigger(m,"htmlchanged",{vId:f}),$(1)}else $()};function Dn(n){var e,t=this;t.$b=n,t.$c=1,t.$d={vId:n},t.$a=((e={})[w]=1,e),t.$f=[],t.$k={}}l(Dn[y],{get:function(n,e){return e=this.$d,n&&(e=e[n]),e},set:function(n){var e=this;return e.$c=function(n,e,t){var r,i,o,f=0;for(o in n)r=n[o],i=e[o],$(r)&&i===r||(f=t[o]=1),e[o]=r;return f}(n,e.$d,e.$k)||e.$c,e},digest:function(n,e){var t=this.set(n),r=t.$f;r.push(e),r.i||Gn(t,r)},snapshot:function(){return this.$g=e(this.$d),this},altered:function(){if(this.$g)return this.$g!=e(this.$d)},translate:function(n){return q(this.$d,n)},parse:function(n){return nn(n,this.$a)}});var Fn=/^(\$?)([^<]*)<([^>]+)>$/,Jn=function(n,e,t){return n.a?t=n:((t=function(n){O(t.a,n,this)}).a=[n],t.b=1),t.a=t.a.concat(e.a||e),t},Kn=function(n,e){var t,r,i,o,f,u,a=n.$eo,c=n.$so,d=n.$el,s=n.id;for(t in a)i=c[r=t],o=e,void 0,f=0|vn[r],u=o?-1:1,f&&o!==f||J(g,r,wn,o),vn[r]=f+u,i&&(pn[r]=(0|pn[r])+u);for(var h=0,$=d;h<$.length;h++)t=$[h],J(t.e,t.n,F,e,{i:s,v:n,f:t.f,e:t.e})},Qn={win:n,doc:m},Wn=function(n,e,t){for(var r,i,o,f,u={},a=0,c=n;a<c.length;a++)for(r in i=c[a])o=i[r],f=u[r],"ctor"!=r?(Fn.test(r)&&(f?o=Jn(f,o):o.b=1),u[r]=o):t.push(o);for(r in u)S(e,r)||(e[r]=u[r])};function Xn(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=this._||(this._=[]);return Wn(n,this[y],t),this}var Yn=function(n){if(!n[w]){n[w]=[];var e=n[y],t=void 0,r=void 0,i=void 0,o={},f=[],u={},a=void 0,c=void 0,d=void 0,s=void 0,h=void 0;for(d in(r=e.mixins)&&Wn(r,e,n[w]),e)if(t=e[d],r=d.match(Fn)){c=r[1],i=r[2];for(var $=0,v=r[3].split(",");$<v.length;$++){if(s=v[$],a=Qn[i],h=1,c){if(a){f.push({f:t,e:a,n:s});continue}h=2,(a=u[s])||(a=u[s]=[]),a[i]||(a[i]=1,a.push(i))}o[s]=o[s]|h,(a=e[s=i+w+s])?a.b&&(t.b?e[s]=Jn(t,a):S(e,d)&&(e[s]=t)):e[s]=t}}g="$d",m=(p=e)[l="render"],p[l]=p[g]=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];0<(b=this).$b&&(b.$b++,b.fire("rendercall"),O(m,n,b))},e.$eo=o,e.$el=f,e.$so=u,e.$f=e.assign}var p,l,g,m,b;return n[w]};function ne(n,e,t,r,i){(i=this).owner=e,i.id=n,i.$b=1,i.updater=i.$a=new Dn(i.id),(n=ne._)&&O(n,[t,{node:r,deep:!i.tmpl}],i)}return l(ne,{merge:Xn,extend:function n(e,t){var c=this,r=(e=e||{}).ctor,d=[];function s(n,e,t,r,i,o,f,u,a){c.call(f=this,n,e,t,r,i),o=s._,u=[t,{node:r,deep:!f.tmpl}],o&&O(o,u,f),(a=d.concat(i)).length&&O(a,u,f)}return r&&d.push(r),s.merge=Xn,s.extend=n,B(s,c,e,t)}}),l(ne[y],tn,{beginUpdate:function(n,e){0<(e=this).$b&&e.$e&&e.owner.unmountZone(n,1)},endUpdate:function(n,e,t){0<(t=this).$b&&(n=n||t.id,e?f=e:t.$e=1,t.owner.mountZone(n,e))},wrapAsync:function(t,r){var i=this,o=i.$b;return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(0<o&&o==i.$b)return t.apply(r||i,n)}},render:function(){}}),en.View=ne,en});