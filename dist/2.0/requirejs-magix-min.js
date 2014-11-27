/*!Magix 2.0 Licensed MIT*/(function(e,t,n,r,i,a,o,s,u,c){c=1,u=function(e){return e.id||(e.id="mx_n_"+c++)},s("magix",["jquery","brix/event"],function(a,s){var f=a.isArray,h=a.isFunction,d=function(e){return"string"==a.type(e)},l=function(e){return"object"==a.type(e)},v=/\/\.(?:\/|$)|\/[^\/]+?\/\.{2}(?:\/|$)|\/\/+|\.{2}\//,m=/\/[^\/]*$/,g=/[#?].*$/,p=/([^=&?\/#]+)=?([^&#?]*)/g,$=/\?|(?!^)=/,y=/^https?:\/\//i,w="/",M="vframe",b=t.console,x=b&&b.error,q={tagName:M,rootId:"magix_vf_root",coded:1,error:x?function(e){b.error(e)}:r},C=q.hasOwnProperty,V=function(e,t){return e&&C.call(e,t)},k=function(t){return function(n,r,i){switch(arguments.length){case 0:i=t;break;case 1:i=l(n)?I(t,n):V(t,n)?t[n]:e;break;case 2:r===e?(delete t[n],i=r):t[n]=i=r}return i}},T=function(e,t){return t.f-e.f||t.t-e.t},_=function(e,t){var n=this;return n.get?(n.c=[],n.b=0|t||5,n.x=n.b+(e||20)):n=new _(e,t),n},I=function(e,t,n,r){for(r in t)n&&V(n,r)||(e[r]=t[r]);return e};I(_.prototype,{get:function(e){var t,n=this,r=n.c;return e=i+e,V(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,a=r.c,o=i+e,s=a[o];if(!V(a,o)){if(a.length>=r.x){a.sort(T);for(var u=r.b;u--;)s=a.pop(),s.f>0&&r.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=c++,s.m=n,t},del:function(e){e=i+e;var t=this.c,n=t[e];n&&(n.f=-1,n.v=z,delete t[e],n.m&&(j(n.m,n.o,n),n.m=z))},has:function(e){return V(this.c,i+e)}});var P=_(40),U=_(),j=function(e,t,n,r,i,a){for(f(e)||(e=[e]),t&&(f(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){q.error(o)}return i},E=function(e,t,n){if(q.coded)try{n=decodeURIComponent(n)}catch(r){}E.p[t]=n},O={mix:I,has:V,toTry:j,config:k(q),start:function(e){I(q,e),H([e.iniFile],function(t){q=I(q,t,e),q["!tnc"]=q.tagName!=M,lt.on("!ul",pt.loc),lt.on("changed",pt.loc),H(q.extensions||q.exts,lt.start)})},keys:Object.keys||function(e){var t,n=[];for(t in e)V(e,t)&&n.push(t);return n},local:k({}),path:function(e,t){var n,r=e+i+t,a=U.get(r),o=z;if(!U.has(r)){for(y.test(e)&&(n=e.indexOf(w,8),0>n&&(n=e.length),o=e.slice(0,n),e=e.slice(n)),e=e.replace(g,z).replace(m,w),(y.test(t)||t.charAt(0)==w)&&(e=z),a=e+t;v.test(a);)a=a.replace(v,w);U.set(r,a=o+a)}return a},toObject:function(e){var t,n,r=P.get(e);return r||(E.p=t={},n=e.replace(g,z),$.test(n)&&(n=z),e.replace(n,z).replace(p,E),P.set(e,r=[n,t])),{path:r[0],params:I({},r[1])}},toUrl:function(e,t,n){var r,i,a,o=[];for(i in t)r=t[i],(!n||r||V(n,i))&&(q.coded&&(r=encodeURIComponent(r)),a=1,o.push(i+"="+r));return a&&(e=(e&&e+($.test(e)?"&":"?"))+o.join("&")),e},toMap:function(e,t){var n,r,i,a={},o=arguments.length>1;if(e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[o?r[t]:r]=o?r:(0|a[r])+1;return a},Cache:_},A=function(){},R=function(e,t,n,r){var i=t.prototype;i.constructor=t,A.prototype=i;var a=new A;return I(a,n),I(e,r),a.constructor=e,e.prototype=a,e},H=function(e,t){e?(f(e)||(e=[e]),require(e,t)):t&&t()},N={fire:function(e,t,n,r){var a=i+e,o=this,s=o[a];if(s){t||(t={}),t.type||(t.type=e);for(var u,c,f=s.length,h=f-1;f--;)u=r?f:h-f,c=s[u],(c.d||c.r)&&(s.splice(u,1),h--),c.d||j(c.f,t,o);n=n||0>h}n&&delete o[a]},on:function(e,t,n,r){var a=this,o=i+e,s=a[o]||(a[o]=[]),u={f:t},c=0|n;c!==n?(n&&n.on&&r&&(n.on(r,function(){u.r=1},j),n=0),u.r=n,s.push(u)):s.splice(c,0,u)},off:function(e,t){var n=i+e,r=this[n];if(r)if(t){for(var a,o=r.length-1;o>=0;o--)if(a=r[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,j)}};O.mix(O.local,N),O.Event=N;var F,L,S,Z,B,D,z="",Q="path",J="view",G=O.keys,K=O.toUrl,W=O.toObject,X=O.config(),Y=O.Cache(),et=O.Cache(),tt=t.location,nt=t.history,rt={params:{},href:z},it=/(?:^https?:\/\/[^\/]+|#.*$)/gi,at=/^[^#]*#?!?/,ot="params",st=function(e,t,n){if(e){n=this[ot],e=(e+z).split(o);for(var r=0;e.length>r&&!(t=V(n,e[r]));r++);}return t},ut=function(){return this[Q]},ct=function(){return this[J]},ft=function(e,t,n,r){return n=this,r=n[ot],arguments.length>1?r[e]=t:r[e]||z},ht=function(e,t){var n,r,i,a;return L||(L={rs:X.routes||{},nf:X.unfoundView},i=X.defaultView,L.dv=i,a=X.defaultPath,n=L.rs,L.f=h(n),L.f||n[a]||!i||(n[a]=i),L[Q]=a),e||(e=L[Q]),n=L.rs,r=L.f?n.call(X,e,t):n[e],{view:r||L.nf||L.dv,path:e}},dt=function(e,t){var n=e.href,r=t.href,a=n+i+r,o=et.get(a);if(!o){var s,u,c,f;o={isParam:st,isPath:ut,isView:ct,location:t,force:!e.get},o[J]=c,o[Q]=c,o[ot]=f={};var h,d,l=e[ot],v=t[ot],m=[Q,J].concat(G(l),G(v));for(h=m.length-1;h>=0;h--)d=m[h],1==h&&(l=e,v=t,f=o),u=l[d],c=v[d],u!=c&&(f[d]={from:u,to:c},s=1);et.set(a,o=[s,o])}return o},lt=I({start:function(){S=X.edge,Z=S&&nt.pushState,B=S&&!Z,D=Z?"srcQuery":"srcHash",lt.bind(Z),lt.route()},parse:function(e,t){e=e||tt.href;var n,r,i,a,o,s,u=Y.get(e);return u||(i=e.replace(it,z),a=e.replace(at,z),o=W(i),s=W(a),B&&(s[Q]=O.path(tt.pathname,s[Q])),u={get:ft,set:ft,href:e,refHref:rt.href,srcQuery:i,srcHash:a,query:o,hash:s,params:I(I({},o[ot]),s[ot])},Y.set(e,u)),t&&!u[J]&&(r=u.hash[Q]||S&&u.query[Q],n=ht(r,u),I(u,n)),u},route:function(){var e=lt.parse(0,1),t=dt(rt,e);rt=e,t[0]&&(F=e,lt.fire("changed",t[1]))},navigate:function(e,t,n){if(F){!t&&l(e)&&(t=e,e=z);var r=W(e),i=F.query[ot],a=r[ot],o=r[Q],s=F[Q];if(I(a,t),o){if(o=O.path(s,o),B)for(var u in i)V(i,u)&&!V(a,u)&&(a[u]=z)}else o=s,a=I(I({},F[ot]),a);o=K(r[Q]=o,a,S?Q:i),o!=F[D]&&(Z?(nt[n?"replaceState":"pushState"](z,z,o),lt.route()):(I(r,F,r),r.srcHash=o,lt.fire("!ul",{loc:F=r}),o="#!"+o,n?tt.replace(o):tt.hash=o),lt.did=1)}}},N);O.Router=lt,lt.bind=function(e){var t=location.href;e?a(window).on("popstate",function(){var e=location.href==t;(lt.did||!e)&&(lt.did=1,lt.route())}):a(window).on("hashchange",lt.route)};var vt={},mt={},gt={},pt=O.mix({all:function(){return vt},add:function(e,t){V(vt,e)||(vt[e]=t,pt.fire("add",{vframe:t}))},get:function(e){return vt[e]},remove:function(e,t){var n=vt[e];n&&(delete vt[e],pt.fire("remove",{vframe:n,fcc:t}))},loc:function(e){var t,n=e.loc;if(n?t=1:n=e.location,I(mt,n),!t){I(gt,e);var r=Ft.root(pt,mt,gt);gt.view?r.mountView(n.view):Ft.update(r)}}},N);O.VOM=pt;var $t,yt,wt,Mt,bt,xt,qt,Ct,Vt,kt,Tt,_t=[],It="mx-vframe",V=O.has,Pt="querySelectorAll",Ut="alter",jt="created",Et="object",Ot=function(e){return typeof e==Et?e:n.getElementById(e)},At=function(e,t,r){return t=Ot(e),t&&(r=wt?n[Pt]("#"+u(t)+bt):t.getElementsByTagName($t)),r||_t},Rt=function(e,t,n){if(e=Ot(e),t=Ot(t),e&&t)if(e!==t)try{n=xt?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},Ht=function(e){if(e.cC==e.rC){var t=e.view;t&&!e.fcc&&(e.fcc=1,e.fca=0,t.fire(jt),e.fire(jt));var n=e.id,r=Tt.get(e.pId);r&&!V(r.rM,n)&&(r.rM[n]=r.cM[n],r.rC++,Ht(r))}},Nt=function(e,t){if(t||(t={}),!e.fca&&e.fcc){e.fcc=0;var n=e.view,r=e.id;n&&(e.fca=1,n.fire(Ut,t),e.fire(Ut,t));var i=Tt.get(e.pId);i&&V(i.rM,r)&&(i.rC--,delete i.rM[r],e._p||Nt(i,t))}},Ft=function(e,t){var n=this;n.id=e,n.cM={},n.cC=0,n.rC=0,n.sign=1,n.rM={},n.pId=t,Tt.add(e,n)};Ft.root=function(t,r,i){if(!qt){$t=X.tagName,yt=X["!tnc"],wt=yt&&n[Pt],bt=" "+$t+"["+It+"=true]",Mt=yt&&!wt;var a=n.body;xt=a.contains,Vt=r,kt=i,Tt=t;var o=X.rootId,s=Ot(o);s||(s=n.createElement($t),s.id=o,a.appendChild(s),s=e),qt=new Ft(o)}return qt},Ft.update=function(e){var t=e.view;if(e.viewInited&&t&&t.sign>0){var n=t.olChg(kt);n&&t.render(kt);for(var r,i=e.children(),a=0,o=i.length;o>a;a++)r=Tt.get(i[a]),r&&Ft.update(r)}},I(I(Ft.prototype,N),{mountView:function(e,t,n){var r=this,i=Ot(r.id);if(!r._a&&i&&(r._a=1,r._t=i.innerHTML),r.unmountView(n),r._d=0,e){r.path=e;var a=O.toObject(e),o=a.path,s=++r.sign;H(o,function(e){if(s==r.sign){Qt.prepare(e,Tt);var n=new e({owner:r,id:r.id,$:Ot,$i:Rt,path:o,vom:Tt,location:Vt});r.view=n;var u=function(e){r.mountZoneVframes(e.id)};n.on("interact",function(){n.hasTmpl||(i&&(i.innerHTML=r._t),u(Ot)),n.on("rendered",u),n.on("prerender",function(e){r.unmountZoneVframes(e.id,0,1)||Nt(r)})},0),n.load(I(a.params,t),kt)}})}},unmountView:function(e){var t=this,n=t.view;if(n){Ct||(Ct={}),t._d=1,t.unmountZoneVframes(0,e,1),Nt(t,Ct),t.view=0,n.oust();var r=Ot(t.id);r&&t._a&&!e&&(r.innerHTML=t._t),t.viewInited=0,Ct=0}t.sign++},mountVframe:function(e,t,n,r,i){var a=this;a.fcc&&!r&&Nt(a);var o=Tt.get(e);return o||(V(a.cM,e)||a.cC++,a.cM[e]=1,o=new Ft(e,a.id)),o._p=r,o.mountView(t,n,i),o},mountZoneVframes:function(e,t,n,r){var i=this;e=e||i.id,i.unmountZoneVframes(e,r,1);var a=At(e),o=a.length,s={};if(o)for(var c,f,h,d,l=0;o>l;l++)if(c=a[l],f=u(c),!V(s,f)&&(h=c.getAttribute("mx-view"),d=Mt?c.getAttribute(It):1,d||h)){i.mountVframe(f,h,t,n,r);for(var v,m=At(c),g=0,p=m.length;p>g;g++)v=m[g],s[u(v)]=1}Ht(i)},unmountVframe:function(e,t,n){var r=this;e=e||r.id;var i=Tt.get(e);if(i){var a=i.fcc;i.unmountView(t),Tt.remove(e,a);var o=Tt.get(i.pId);o&&V(o.cM,e)&&(delete o.cM[e],o.cC--,n||Ht(o))}},unmountZoneVframes:function(e,t,n){var r,i,a=this,o=a.cM;for(i in o)(!e||Rt(i,e))&&a.unmountVframe(i,t,r=1);return n||a._d||Ht(a),r},parent:function(e){var t=this,n=t;for(e=e>>>0||1;n&&e--;)n=Tt.get(n.pId);return n},children:function(){return O.keys(this.cM)},invokeView:function(e,t){var n,r=this;if(r.viewInited){var i=r.view,a=i&&i[e];a&&(n=j(a,t||_t,i))}return n}}),O.Vframe=Ft;var Lt=[],St=0,Zt="destroy",Bt=function(e,t){return function(){t=this,t.sign>0&&(t.sign++,t.fire("rendercall"),Dt(t),j(e,arguments,t))}},Dt=function(e,t){var n,r,i=e.$res;for(n in i)r=i[n],(t||r.x)&&zt(i,n,1)},zt=function(e,t,n){var r,i,a=e[t];a&&(r=a.e,i=r&&r[Zt],i&&j(i,Lt,r),(!a.k||n)&&delete e[t])},Qt=function(e){var t=this;I(t,e),t.$ol={ks:[]},t.$res={},t.sign=1,j(Qt.$,e,t)},Jt=Qt.prototype;Qt.$=[],Qt.prepare=function(e){if(!e[i]){e[i]=1;var t=e.prototype;t.render=Bt(t.render)}},Qt.mixin=function(e,t){t&&Qt.$.push(t),I(Jt,e)},I(I(Jt,N),{render:r,navigate:lt.navigate,init:r,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=function(r){e.tmpl=r,e.fire("interact",0,1),j(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(r)):r()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&t.fire("prerender",{id:e||t.id})},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e||t.id}))},wrapAsync:function(e,t){var n=this,r=n.sign;return function(){r>0&&(!t||r==n.sign)&&e&&e.apply(this,arguments)}},setHTML:function(e,t){var n,r=this;r.beginUpdate(e),r.sign>0&&(n=r.$(e),n&&(r.undelegateEvents(n),n.innerHTML=t,r.delegateEvents(n))),r.endUpdate(e)},observeLocation:function(e){var t,n=this;t=n.$ol,t.f=1;var r=t.ks;l(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=r.concat((e+z).split(o)))},olChg:function(e){var t,n=this,r=n.$ol;return r.f&&(r.pn&&(t=e.path),t||(t=e.isParam(r.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(Zt,0,1,1),Dt(e,1),e.undelegateEvents("#"+e.id)),e.sign--},inside:function(e,t){var n,r,i=this;for(t=(t+z).split(o),r=t.length-1;r>=0&&!(n=i.$i(e,t[r]));r--);return n},manage:function(e,t,n){var r=this,i=1,a=r.$res;e&&!d(e)&&(n=t,t=e,e=z),e?zt(a,e):(i=0,e="res_"+St++);var o={k:i,e:t,x:n};return a[e]=o,t},getManaged:function(t,n){var r=this,i=r.$res,a=t?e:i;return t&&V(i,t)&&(a=i[t].e,n&&delete i[t]),a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e){zt(this.$res,e,1)}}),O.View=Qt;var Gt={},Kt="?t="+Math.random(),Wt=s("mx-"),Xt={},Yt={};Jt.delegateEvents=function(e){Wt.delegateBxTypeEvents(a(e),this)},Jt.undelegateEvents=function(e){Wt.undelegateBxTypeEvents(a(e),this)},Jt.fetchTmpl=function(e,t){var n=this,r="tmpl"in n;if(r)t(n.tmpl);else if(V(Xt,e))t(Xt[e]);else{var i=e.indexOf("/"),o=e.substring(0,i);Gt[o]||(Gt[o]=require.s.contexts._.config.paths[o]);var s=Gt[o]+e.substring(i+1)+".html",u=Yt[s],c=function(n){t(Xt[e]=n)};u?u.push(c):(u=Yt[s]=[c],a.ajax({url:s+Kt,success:function(e){j(u,e),delete Yt[s]},error:function(e,t){j(u,t),delete Yt[s]}}))}},Qt.extend=function(t,n,r){var i=this;h(n)&&(r=n,n=e);var a=function(e){i.call(this,e),r&&r.call(this,e)};return a.extend=i.extend,R(a,i,t,n)};var en=l,tn=O.toString,nn="URL",rn="FORM",an=function(){this.id="m"+c++},on=function(e){return function(t,n,r){var a,o,s,u=this,c=i+e;u[c]||(u[c]={}),s=u[c],h(t)&&(t=O.toTry(t)),t&&!en(t)&&(a={},a[t]=n,t=a);for(o in t)r&&V(s,o)||(s[o]=t[o])}};O.mix(an.prototype,{sync:r,getFormParams:function(){return this[i+rn]},getUrlParams:function(){return this[i+nn]},setFormParams:on(rn),setUrlParams:on(nn),get:function(e,t,n){var r=this,i=arguments.length,a=2==i,o=r.$attrs;if(i){for(var s=(e+z).split(".");o&&s[0];)o=o[s.shift()];s[0]&&(o=n)}return a&&tn.call(t)!=tn.call(o)&&(o=t),o},set:function(e,t){var n=this;if(n.$attrs||(n.$attrs={}),e){if(!en(e)){var r={};r[e]=t,e=r}for(var i in e)n.$attrs[i]=e[i]}},request:function(e,t){var n=this;n.sync(function(r,i){en(i)||(i={data:i}),n.set(i),e(r,t)})}}),O.Model=an,an.extend=function(e,t,n){var r=this,i=function(){r.call(this),n&&n.call(this)};return R(i,r,e,t)};var sn=f,un=h,cn=1,fn=2,hn=4,dn="formParams",ln="urlParams",vn=[dn,ln],mn=Date.now||function(){return+new Date},gn=t.JSON,pn=12e5,$n=function(e,t,n,r){return t?un(e)&&n.push($n(j(e))):r=gn?gn.stringify(e):mn(),r},yn=function(e,t){for(var n,r=[$n(t),$n(e)],a=vn.length-1;a>-1;a--)n=vn[a],$n(e[n],1,r),$n(t[n],1,r);return $n(e.key,1,r),r.join(i)},wn=function(e){var t=e.cache;return t&&(t=t===!0?pn:0|t),t},Mn=function(e){throw Error(e)},bn=function(e,t,n){var r=this;r.$mClz=e,r.$mCache=O.Cache(t,n),r.$mReqs={},r.$mMetas={},r.id="mm"+c++},xn=function(e){var t=this;t.$host=e,t.$reqs={},t.sign=1,t.id="mr"+c++,t.$queue=[]},qn=[].slice,Cn=function(e,t,n,r){var i=function(a){return e.apply(t,[n,r,a,i.ost])};return i},Vn=function(e,t){var n=t.b,r=t.a,i=r[n];if(i){var a=i.q;delete r[n],j(a,e,i.e)}},kn=function(t,n,r,i){var a,o,s=this,u=n.a,c=n.c,f=n.d,h=n.g,d=n.i,l=n.j,v=n.k,m=n.l,g=n.m,p=n.n,$=n.o;n.b++,delete c[s.id];var y=s.$mm,w=y.key;if(f[t+1]=s,r)n.e=1,a=1,n.f=r,h.msg=r,h[t]=r,l.fire("fail",{model:s,msg:r}),o=1;else if(!d.has(w)){w&&d.set(w,s),y.time=mn();var M=y.after;M&&j(M,s),y.cls&&l.clearCache(y.cls),l.fire("done",{model:s}),o=1}if(!u.$ost&&!i){if(v==cn){var b=m?g[t]:g;b&&(p[t+1]=j(b,[a?h:e,s,h],u))}else if(v==fn){$[t]={m:s,e:a,s:r};for(var x,q,C=$.i||0;x=$[C];C++)q=m?g[C]:g,x.e&&(h.msg=x.s,h[C]=x.s),p[C+1]=j(q,[x.e?h:e,x.m,h].concat(p),u);$.i=C}n.b==n.h&&(n.e||(h=e),p[0]=h,v==hn&&(f[0]=h,p[1]=j(g,f,u)),u.$busy=0,u.doNext(p))}o&&l.fire("finish",{msg:r,model:s})},Tn=function(e,t,n,r,i){if(e.$ost)return e;if(e.$busy)return e.next(function(){Tn(this,t,n,r,i)});e.$busy=1,e.sign++;var a=e.$host,o=a.$mCache,s=a.$mReqs,u=e.$reqs;sn(t)||(t=[t]);var c=t.length,f=[],h=sn(n);h&&(f=Array(n.length));for(var d,l={a:e,b:0,c:e.$reqs,d:Array(c),g:{},h:c,i:o,j:a,k:r,l:h,m:n,n:f,o:[]},v=0;t.length>v;v++)if(d=t[v]){var m=a.getModel(d,i),g=m.entity,p=g.$mm.key,$=Cn(kn,g,v,l);$.id=e.id,p&&V(s,p)?s[p].q.push($):m.update?(u[g.id]=g,p&&(s[p]={q:[$],e:g},$=Vn),g.request($,{a:s,b:p})):$()}else Mn("empty model");return e},_n=function(e,t){return function(n,r){var i=qn.call(arguments,1);return Tn(this,n,i.length>1?i:r,e,t)}};I(bn,{create:function(e,t,n){return new bn(e,t,n)}}),I(xn.prototype,{fetchAll:function(e,t){return Tn(this,e,t,hn)},save:function(e,t){return Tn(this,e,t,hn,1)},fetchOrder:_n(fn),fetchOne:_n(cn),next:function(e){var t=this;return t.$ost||(t.$queue.push(e),t.doNext(t.$args)),t},doNext:function(e){var t=this;if(!t.$busy&&!t.$ost){t.$busy=1;var n=++t.sign;t.$ntId=setTimeout(function(){t.$busy=0,t.$args=e;var r,i=t.$queue,a=i.shift();a&&(r=j(a,e,t),n==t.sign&&t.doNext(r===i.$?e:[null,r]))},0)}},destroy:function(){var e=this;e.$ost=1,clearTimeout(e.$ntId);var t=e.$host,n=e.$reqs,r=t.$mReqs;for(var i in n){var a,o,s=n[i],u=s.$mm.key;if(u&&V(r,u)){a=r[u],o=a.q;for(var c,f=0;o.length>f;f++)c=o[f],c.id==e.id&&(c.ost=1)}}e.$reqs={},e.$queue=[],e.$busy=0}});var In=bn.prototype;return I(I(In,N),{registerModels:function(e){var t=this,n=t.$mMetas;sn(e)||(e=[e]);for(var r,i,a,o=0;e.length>o;o++)r=e[o],r&&(i=r.name,i?n[i]&&Mn("already exist:"+i):Mn("miss name"),a=wn(r),a&&(r.cache=a),n[i]=r)},registerMethods:function(e){I(this,e)},create:function(e){var t=this,n=t.getMeta(e),r=wn(e)||n.cache,i=new t.$mClz;i.set(n),i.$mm={name:n.name,after:n.after,cls:n.cleans,key:r&&yn(n,e)},e.name&&i.set(e),i.setUrlParams(n[ln]),i.setFormParams(n[dn]),i.setUrlParams(e[ln]),i.setFormParams(e[dn]);var a=n.before;return a&&j(a,i),t.fire("start",{model:i}),i},getMeta:function(e){var t=this,n=t.$mMetas,r=e.name||e,i=n[r];return i||Mn("Unfound:"+r),i},getModel:function(e,t){var n,r,i=this;return t||(n=i.getCached(e)),n||(r=1,n=i.create(e)),{entity:n,update:r}},createRequest:function(e,t,n){return e.manage(t,new xn(this),3>arguments.length||n)},clearCache:function(e){var t=this,n=t.$mCache,r=n.list();e=O.toMap((e+z).split(o));for(var i=0;r.length>i;i++){var a=r[i],s=a.v,u=s&&s.$mm;u&&V(e,u.name)&&n.del(u.key)}},getCached:function(e){var t,n,r=this,i=r.$mCache,a=r.getMeta(e),o=wn(e)||a.cache;if(o&&(n=yn(a,e)),n){var s=r.$mReqs,u=s[n];u?t=u.e:(t=i.get(n),t&&o>0&&mn()-t.$mm.time>o&&(i.del(n),t=0))}return t}}),O.Manager=bn,O})})(null,window,document,function(){},"","",",",define);