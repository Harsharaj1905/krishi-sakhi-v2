(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();function Wx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var np={exports:{}},Ac={};var mv;function Mb(){if(mv)return Ac;mv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,u,f){var p=null;if(f!==void 0&&(p=""+f),u.key!==void 0&&(p=""+u.key),"key"in u){f={};for(var _ in u)_!=="key"&&(f[_]=u[_])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:p,ref:u!==void 0?u:null,props:f}}return Ac.Fragment=t,Ac.jsx=i,Ac.jsxs=i,Ac}var _v;function Eb(){return _v||(_v=1,np.exports=Mb()),np.exports}var k=Eb(),ip={exports:{}},Te={};var gv;function Tb(){if(gv)return Te;gv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function C(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,A={};function E(I,K,bt){this.props=I,this.context=K,this.refs=A,this.updater=bt||w}E.prototype.isReactComponent={},E.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},E.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=E.prototype;function B(I,K,bt){this.props=I,this.context=K,this.refs=A,this.updater=bt||w}var F=B.prototype=new P;F.constructor=B,N(F,E.prototype),F.isPureReactComponent=!0;var X=Array.isArray;function V(){}var j={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function H(I,K,bt){var wt=bt.ref;return{$$typeof:o,type:I,key:K,ref:wt!==void 0?wt:null,props:bt}}function vt(I,K){return H(I.type,K,I.props)}function Z(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function rt(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(bt){return K[bt]})}var ft=/\/+/g;function mt(I,K){return typeof I=="object"&&I!==null&&I.key!=null?rt(""+I.key):K.toString(36)}function lt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(V,V):(I.status="pending",I.then(function(K){I.status==="pending"&&(I.status="fulfilled",I.value=K)},function(K){I.status==="pending"&&(I.status="rejected",I.reason=K)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function G(I,K,bt,wt,Ot){var nt=typeof I;(nt==="undefined"||nt==="boolean")&&(I=null);var Lt=!1;if(I===null)Lt=!0;else switch(nt){case"bigint":case"string":case"number":Lt=!0;break;case"object":switch(I.$$typeof){case o:case t:Lt=!0;break;case y:return Lt=I._init,G(Lt(I._payload),K,bt,wt,Ot)}}if(Lt)return Ot=Ot(I),Lt=wt===""?"."+mt(I,0):wt,X(Ot)?(bt="",Lt!=null&&(bt=Lt.replace(ft,"$&/")+"/"),G(Ot,K,bt,"",function(de){return de})):Ot!=null&&(Z(Ot)&&(Ot=vt(Ot,bt+(Ot.key==null||I&&I.key===Ot.key?"":(""+Ot.key).replace(ft,"$&/")+"/")+Lt)),K.push(Ot)),1;Lt=0;var zt=wt===""?".":wt+":";if(X(I))for(var ae=0;ae<I.length;ae++)wt=I[ae],nt=zt+mt(wt,ae),Lt+=G(wt,K,bt,nt,Ot);else if(ae=C(I),typeof ae=="function")for(I=ae.call(I),ae=0;!(wt=I.next()).done;)wt=wt.value,nt=zt+mt(wt,ae++),Lt+=G(wt,K,bt,nt,Ot);else if(nt==="object"){if(typeof I.then=="function")return G(lt(I),K,bt,wt,Ot);throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Lt}function q(I,K,bt){if(I==null)return I;var wt=[],Ot=0;return G(I,wt,"","",function(nt){return K.call(bt,nt,Ot++)}),wt}function it(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(bt){(I._status===0||I._status===-1)&&(I._status=1,I._result=bt)},function(bt){(I._status===0||I._status===-1)&&(I._status=2,I._result=bt)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var At=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},xt={map:q,forEach:function(I,K,bt){q(I,function(){K.apply(this,arguments)},bt)},count:function(I){var K=0;return q(I,function(){K++}),K},toArray:function(I){return q(I,function(K){return K})||[]},only:function(I){if(!Z(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Te.Activity=b,Te.Children=xt,Te.Component=E,Te.Fragment=i,Te.Profiler=u,Te.PureComponent=B,Te.StrictMode=s,Te.Suspense=x,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,Te.__COMPILER_RUNTIME={__proto__:null,c:function(I){return j.H.useMemoCache(I)}},Te.cache=function(I){return function(){return I.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(I,K,bt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var wt=N({},I.props),Ot=I.key;if(K!=null)for(nt in K.key!==void 0&&(Ot=""+K.key),K)!D.call(K,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&K.ref===void 0||(wt[nt]=K[nt]);var nt=arguments.length-2;if(nt===1)wt.children=bt;else if(1<nt){for(var Lt=Array(nt),zt=0;zt<nt;zt++)Lt[zt]=arguments[zt+2];wt.children=Lt}return H(I.type,Ot,wt)},Te.createContext=function(I){return I={$$typeof:p,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},Te.createElement=function(I,K,bt){var wt,Ot={},nt=null;if(K!=null)for(wt in K.key!==void 0&&(nt=""+K.key),K)D.call(K,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ot[wt]=K[wt]);var Lt=arguments.length-2;if(Lt===1)Ot.children=bt;else if(1<Lt){for(var zt=Array(Lt),ae=0;ae<Lt;ae++)zt[ae]=arguments[ae+2];Ot.children=zt}if(I&&I.defaultProps)for(wt in Lt=I.defaultProps,Lt)Ot[wt]===void 0&&(Ot[wt]=Lt[wt]);return H(I,nt,Ot)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(I){return{$$typeof:_,render:I}},Te.isValidElement=Z,Te.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:it}},Te.memo=function(I,K){return{$$typeof:v,type:I,compare:K===void 0?null:K}},Te.startTransition=function(I){var K=j.T,bt={};j.T=bt;try{var wt=I(),Ot=j.S;Ot!==null&&Ot(bt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(V,At)}catch(nt){At(nt)}finally{K!==null&&bt.types!==null&&(K.types=bt.types),j.T=K}},Te.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},Te.use=function(I){return j.H.use(I)},Te.useActionState=function(I,K,bt){return j.H.useActionState(I,K,bt)},Te.useCallback=function(I,K){return j.H.useCallback(I,K)},Te.useContext=function(I){return j.H.useContext(I)},Te.useDebugValue=function(){},Te.useDeferredValue=function(I,K){return j.H.useDeferredValue(I,K)},Te.useEffect=function(I,K){return j.H.useEffect(I,K)},Te.useEffectEvent=function(I){return j.H.useEffectEvent(I)},Te.useId=function(){return j.H.useId()},Te.useImperativeHandle=function(I,K,bt){return j.H.useImperativeHandle(I,K,bt)},Te.useInsertionEffect=function(I,K){return j.H.useInsertionEffect(I,K)},Te.useLayoutEffect=function(I,K){return j.H.useLayoutEffect(I,K)},Te.useMemo=function(I,K){return j.H.useMemo(I,K)},Te.useOptimistic=function(I,K){return j.H.useOptimistic(I,K)},Te.useReducer=function(I,K,bt){return j.H.useReducer(I,K,bt)},Te.useRef=function(I){return j.H.useRef(I)},Te.useState=function(I){return j.H.useState(I)},Te.useSyncExternalStore=function(I,K,bt){return j.H.useSyncExternalStore(I,K,bt)},Te.useTransition=function(){return j.H.useTransition()},Te.version="19.2.1",Te}var vv;function Ym(){return vv||(vv=1,ip.exports=Tb()),ip.exports}var he=Ym();const qp=Wx(he);var ap={exports:{}},wc={},rp={exports:{}},sp={};var xv;function Ab(){return xv||(xv=1,(function(o){function t(G,q){var it=G.length;G.push(q);t:for(;0<it;){var At=it-1>>>1,xt=G[At];if(0<u(xt,q))G[At]=q,G[it]=xt,it=At;else break t}}function i(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var q=G[0],it=G.pop();if(it!==q){G[0]=it;t:for(var At=0,xt=G.length,I=xt>>>1;At<I;){var K=2*(At+1)-1,bt=G[K],wt=K+1,Ot=G[wt];if(0>u(bt,it))wt<xt&&0>u(Ot,bt)?(G[At]=Ot,G[wt]=it,At=wt):(G[At]=bt,G[K]=it,At=K);else if(wt<xt&&0>u(Ot,it))G[At]=Ot,G[wt]=it,At=wt;else break t}}return q}function u(G,q){var it=G.sortIndex-q.sortIndex;return it!==0?it:G.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var p=Date,_=p.now();o.unstable_now=function(){return p.now()-_}}var x=[],v=[],y=1,b=null,S=3,C=!1,w=!1,N=!1,A=!1,E=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function F(G){for(var q=i(v);q!==null;){if(q.callback===null)s(v);else if(q.startTime<=G)s(v),q.sortIndex=q.expirationTime,t(x,q);else break;q=i(v)}}function X(G){if(N=!1,F(G),!w)if(i(x)!==null)w=!0,V||(V=!0,rt());else{var q=i(v);q!==null&&lt(X,q.startTime-G)}}var V=!1,j=-1,D=5,H=-1;function vt(){return A?!0:!(o.unstable_now()-H<D)}function Z(){if(A=!1,V){var G=o.unstable_now();H=G;var q=!0;try{t:{w=!1,N&&(N=!1,P(j),j=-1),C=!0;var it=S;try{e:{for(F(G),b=i(x);b!==null&&!(b.expirationTime>G&&vt());){var At=b.callback;if(typeof At=="function"){b.callback=null,S=b.priorityLevel;var xt=At(b.expirationTime<=G);if(G=o.unstable_now(),typeof xt=="function"){b.callback=xt,F(G),q=!0;break e}b===i(x)&&s(x),F(G)}else s(x);b=i(x)}if(b!==null)q=!0;else{var I=i(v);I!==null&&lt(X,I.startTime-G),q=!1}}break t}finally{b=null,S=it,C=!1}q=void 0}}finally{q?rt():V=!1}}}var rt;if(typeof B=="function")rt=function(){B(Z)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,mt=ft.port2;ft.port1.onmessage=Z,rt=function(){mt.postMessage(null)}}else rt=function(){E(Z,0)};function lt(G,q){j=E(function(){G(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(G){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var it=S;S=q;try{return G()}finally{S=it}},o.unstable_requestPaint=function(){A=!0},o.unstable_runWithPriority=function(G,q){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var it=S;S=G;try{return q()}finally{S=it}},o.unstable_scheduleCallback=function(G,q,it){var At=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?At+it:At):it=At,G){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=it+xt,G={id:y++,callback:q,priorityLevel:G,startTime:it,expirationTime:xt,sortIndex:-1},it>At?(G.sortIndex=it,t(v,G),i(x)===null&&G===i(v)&&(N?(P(j),j=-1):N=!0,lt(X,it-At))):(G.sortIndex=xt,t(x,G),w||C||(w=!0,V||(V=!0,rt()))),G},o.unstable_shouldYield=vt,o.unstable_wrapCallback=function(G){var q=S;return function(){var it=S;S=q;try{return G.apply(this,arguments)}finally{S=it}}}})(sp)),sp}var yv;function wb(){return yv||(yv=1,rp.exports=Ab()),rp.exports}var op={exports:{}},ui={};var Sv;function Cb(){if(Sv)return ui;Sv=1;var o=Ym();function t(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)v+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(x,v,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:x,containerInfo:v,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ui.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ui.createPortal=function(x,v){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return f(x,v,null,y)},ui.flushSync=function(x){var v=p.T,y=s.p;try{if(p.T=null,s.p=2,x)return x()}finally{p.T=v,s.p=y,s.d.f()}},ui.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(x,v))},ui.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},ui.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var y=v.as,b=_(y,v.crossOrigin),S=typeof v.integrity=="string"?v.integrity:void 0,C=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;y==="style"?s.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:C}):y==="script"&&s.d.X(x,{crossOrigin:b,integrity:S,fetchPriority:C,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ui.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var y=_(v.as,v.crossOrigin);s.d.M(x,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(x)},ui.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var y=v.as,b=_(y,v.crossOrigin);s.d.L(x,y,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ui.preloadModule=function(x,v){if(typeof x=="string")if(v){var y=_(v.as,v.crossOrigin);s.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(x)},ui.requestFormReset=function(x){s.d.r(x)},ui.unstable_batchedUpdates=function(x,v){return x(v)},ui.useFormState=function(x,v,y){return p.H.useFormState(x,v,y)},ui.useFormStatus=function(){return p.H.useHostTransitionStatus()},ui.version="19.2.1",ui}var bv;function jx(){if(bv)return op.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),op.exports=Cb(),op.exports}var Mv;function Rb(){if(Mv)return wc;Mv=1;var o=wb(),t=Ym(),i=jx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(s(188))}function v(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var r=e,c=n;;){var d=r.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){r=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===r)return x(d),e;if(m===c)return x(d),n;m=m.sibling}throw Error(s(188))}if(r.return!==c.return)r=d,c=m;else{for(var T=!1,O=d.child;O;){if(O===r){T=!0,r=d,c=m;break}if(O===c){T=!0,c=d,r=m;break}O=O.sibling}if(!T){for(O=m.child;O;){if(O===r){T=!0,r=m,c=d;break}if(O===c){T=!0,c=m,r=d;break}O=O.sibling}if(!T)throw Error(s(189))}}if(r.alternate!==c)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),B=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case E:return"Profiler";case A:return"StrictMode";case X:return"Suspense";case V:return"SuspenseList";case H:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case B:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return n=e.displayName||null,n!==null?n:mt(e.type)||"Memo";case D:n=e._payload,e=e._init;try{return mt(e(n))}catch{}}return null}var lt=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},At=[],xt=-1;function I(e){return{current:e}}function K(e){0>xt||(e.current=At[xt],At[xt]=null,xt--)}function bt(e,n){xt++,At[xt]=e.current,e.current=n}var wt=I(null),Ot=I(null),nt=I(null),Lt=I(null);function zt(e,n){switch(bt(nt,n),bt(Ot,e),bt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?B0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=B0(n),e=F0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(wt),bt(wt,e)}function ae(){K(wt),K(Ot),K(nt)}function de(e){e.memoizedState!==null&&bt(Lt,e);var n=wt.current,r=F0(n,e.type);n!==r&&(bt(Ot,e),bt(wt,r))}function ve(e){Ot.current===e&&(K(wt),K(Ot)),Lt.current===e&&(K(Lt),bc._currentValue=it)}var hn,Ne;function ze(e){if(hn===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);hn=n&&n[1]||"",Ne=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hn+e+Ne}var qe=!1;function Ee(e,n){if(!e||qe)return"";qe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(n){var Ut=function(){throw Error()};if(Object.defineProperty(Ut.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ut,[])}catch(Mt){var gt=Mt}Reflect.construct(e,[],Ut)}else{try{Ut.call()}catch(Mt){gt=Mt}e.call(Ut.prototype)}}else{try{throw Error()}catch(Mt){gt=Mt}(Ut=e())&&typeof Ut.catch=="function"&&Ut.catch(function(){})}}catch(Mt){if(Mt&&gt&&typeof Mt.stack=="string")return[Mt.stack,gt.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),T=m[0],O=m[1];if(T&&O){var J=T.split(`
`),ht=O.split(`
`);for(d=c=0;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;for(;d<ht.length&&!ht[d].includes("DetermineComponentFrameRoot");)d++;if(c===J.length||d===ht.length)for(c=J.length-1,d=ht.length-1;1<=c&&0<=d&&J[c]!==ht[d];)d--;for(;1<=c&&0<=d;c--,d--)if(J[c]!==ht[d]){if(c!==1||d!==1)do if(c--,d--,0>d||J[c]!==ht[d]){var Rt=`
`+J[c].replace(" at new "," at ");return e.displayName&&Rt.includes("<anonymous>")&&(Rt=Rt.replace("<anonymous>",e.displayName)),Rt}while(1<=c&&0<=d);break}}}finally{qe=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ze(r):""}function gn(e,n){switch(e.tag){case 26:case 27:case 5:return ze(e.type);case 16:return ze("Lazy");case 13:return e.child!==n&&n!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return ze("Activity");default:return""}}function Q(e){try{var n="",r=null;do n+=gn(e,r),r=e,e=e.return;while(e);return n}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var xn=Object.prototype.hasOwnProperty,Be=o.unstable_scheduleCallback,Ze=o.unstable_cancelCallback,ce=o.unstable_shouldYield,W=o.unstable_requestPaint,R=o.unstable_now,at=o.unstable_getCurrentPriorityLevel,Ct=o.unstable_ImmediatePriority,Nt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,se=o.unstable_LowPriority,Gt=o.unstable_IdlePriority,pe=o.log,xe=o.unstable_setDisableYieldValue,Bt=null,It=null;function Jt(e){if(typeof pe=="function"&&xe(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Bt,e)}catch{}}var qt=Math.clz32?Math.clz32:et,Zt=Math.log,we=Math.LN2;function et(e){return e>>>=0,e===0?32:31-(Zt(e)/we|0)|0}var kt=256,Ht=262144,Qt=4194304;function Ft(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Et(e,n,r){var c=e.pendingLanes;if(c===0)return 0;var d=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var O=c&134217727;return O!==0?(c=O&~m,c!==0?d=Ft(c):(T&=O,T!==0?d=Ft(T):r||(r=O&~e,r!==0&&(d=Ft(r))))):(O=c&~m,O!==0?d=Ft(O):T!==0?d=Ft(T):r||(r=c&~e,r!==0&&(d=Ft(r)))),d===0?0:n!==0&&n!==d&&(n&m)===0&&(m=d&-d,r=n&-n,m>=r||m===32&&(r&4194048)!==0)?n:d}function ee(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function be(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function je(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ii(e,n,r,c,d,m){var T=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var O=e.entanglements,J=e.expirationTimes,ht=e.hiddenUpdates;for(r=T&~r;0<r;){var Rt=31-qt(r),Ut=1<<Rt;O[Rt]=0,J[Rt]=-1;var gt=ht[Rt];if(gt!==null)for(ht[Rt]=null,Rt=0;Rt<gt.length;Rt++){var Mt=gt[Rt];Mt!==null&&(Mt.lane&=-536870913)}r&=~Ut}c!==0&&bs(e,c,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~n))}function bs(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var c=31-qt(n);e.entangledLanes|=n,e.entanglements[c]=e.entanglements[c]|1073741824|r&261930}function Nr(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var c=31-qt(r),d=1<<c;d&n|e[c]&n&&(e[c]|=n),r&=~d}}function go(e,n){var r=n&-n;return r=(r&42)!==0?1:ti(r),(r&(e.suspendedLanes|n))!==0?0:r}function ti(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bi(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:lv(e.type))}function ir(e,n){var r=q.p;try{return q.p=e,n()}finally{q.p=r}}var bi=Math.random().toString(36).slice(2),Tn="__reactFiber$"+bi,An="__reactProps$"+bi,$i="__reactContainer$"+bi,mi="__reactEvents$"+bi,Ms="__reactListeners$"+bi,vo="__reactHandles$"+bi,xo="__reactResources$"+bi,ar="__reactMarker$"+bi;function Es(e){delete e[Tn],delete e[An],delete e[mi],delete e[Ms],delete e[vo]}function _a(e){var n=e[Tn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[$i]||r[Tn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=X0(e);e!==null;){if(r=e[Tn])return r;e=X0(e)}return n}e=r,r=e.parentNode}return null}function Da(e){if(e=e[Tn]||e[$i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ta(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function z(e){var n=e[xo];return n||(n=e[xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tt(e){e[ar]=!0}var yt=new Set,pt={};function ct(e,n){Vt(e,n),Vt(e+"Capture",n)}function Vt(e,n){for(pt[e]=n,e=0;e<n.length;e++)yt.add(n[e])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xt={},re={};function oe(e){return xn.call(re,e)?!0:xn.call(Xt,e)?!1:Kt.test(e)?re[e]=!0:(Xt[e]=!0,!1)}function jt(e,n,r){if(oe(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var c=n.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function ne(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function te(e,n,r,c){if(c===null)e.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+c)}}function Me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dn(e,n,r){var c=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var d=c.get,m=c.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(T){r=""+T,m.call(this,T)}}),Object.defineProperty(e,n,{enumerable:c.enumerable}),{getValue:function(){return r},setValue:function(T){r=""+T},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $t(e){if(!e._valueTracker){var n=sn(e)?"checked":"value";e._valueTracker=dn(e,n,""+e[n])}}function Le(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),c="";return e&&(c=sn(e)?e.checked?"true":"false":e.value),e=c,e!==r?(n.setValue(e),!0):!1}function ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function _e(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ei(e,n,r,c,d,m,T,O){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),n!=null?T==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Me(n)):e.value!==""+Me(n)&&(e.value=""+Me(n)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),n!=null?Wn(e,T,Me(n)):r!=null?Wn(e,T,Me(r)):c!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?e.name=""+Me(O):e.removeAttribute("name")}function Yn(e,n,r,c,d,m,T,O){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),n!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||n!=null)){$t(e);return}r=r!=null?""+Me(r):"",n=n!=null?""+Me(n):r,O||n===e.value||(e.value=n),e.defaultValue=n}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,e.checked=O?e.checked:!!c,e.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T),$t(e)}function Wn(e,n,r){n==="number"&&ie(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Ye(e,n,r,c){if(e=e.options,n){n={};for(var d=0;d<r.length;d++)n["$"+r[d]]=!0;for(r=0;r<e.length;r++)d=n.hasOwnProperty("$"+e[r].value),e[r].selected!==d&&(e[r].selected=d),d&&c&&(e[r].defaultSelected=!0)}else{for(r=""+Me(r),n=null,d=0;d<e.length;d++){if(e[d].value===r){e[d].selected=!0,c&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function Ie(e,n,r){if(n!=null&&(n=""+Me(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Me(r):""}function yn(e,n,r,c){if(n==null){if(c!=null){if(r!=null)throw Error(s(92));if(lt(c)){if(1<c.length)throw Error(s(93));c=c[0]}r=c}r==null&&(r=""),n=r}r=Me(n),e.defaultValue=r,c=e.textContent,c===r&&c!==""&&c!==null&&(e.value=c),$t(e)}function Nn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ni(e,n,r){var c=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":c?e.setProperty(n,r):typeof r!="number"||r===0||Mn.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Fi(e,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||n!=null&&n.hasOwnProperty(c)||(c.indexOf("--")===0?e.setProperty(c,""):c==="float"?e.cssFloat="":e[c]="");for(var d in n)c=n[d],n.hasOwnProperty(d)&&r[d]!==c&&ni(e,d,c)}else for(var m in n)n.hasOwnProperty(m)&&ni(e,m,n[m])}function Pa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ul=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Or(e){return Ul.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Mi(){}var So=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Se=null;function Hi(e){var n=Da(e);if(n&&(e=n.stateNode)){var r=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(ei(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var c=r[n];if(c!==e&&c.form===e.form){var d=c[An]||null;if(!d)throw Error(s(90));ei(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<r.length;n++)c=r[n],c.form===e.form&&Le(c)}break t;case"textarea":Ie(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&Ye(e,!!r.multiple,n,!1)}}}var ln=!1;function Nl(e,n,r){if(ln)return e(n,r);ln=!0;try{var c=e(n);return c}finally{if(ln=!1,(zr!==null||Se!==null)&&(qu(),zr&&(n=zr,e=Se,Se=zr=null,Hi(n),e)))for(n=0;n<e.length;n++)Hi(e[n])}}function rr(e,n){var r=e.stateNode;if(r===null)return null;var c=r[An]||null;if(c===null)return null;r=c[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=!1;if(ki)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){As=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{As=!1}var ea=null,sr=null,Rn=null;function Ua(){if(Rn)return Rn;var e,n=sr,r=n.length,c,d="value"in ea?ea.value:ea.textContent,m=d.length;for(e=0;e<r&&n[e]===d[e];e++);var T=r-e;for(c=1;c<=T&&n[r-c]===d[m-c];c++);return Rn=d.slice(e,1<c?1-c:void 0)}function ws(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cs(){return!0}function Qc(){return!1}function ii(e){function n(r,c,d,m,T){this._reactName=r,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var O in e)e.hasOwnProperty(O)&&(r=e[O],this[O]=r?r(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Cs:Qc,this.isPropagationStopped=Qc,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),n}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=ii(ga),Ir=b({},ga,{view:0,detail:0}),Ge=ii(Ir),Ol,_i,va,Rs=b({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==va&&(va&&e.type==="mousemove"?(Ol=e.screenX-va.screenX,_i=e.screenY-va.screenY):_i=Ol=0,va=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),$c=ii(Rs),zl=b({},Rs,{dataTransfer:0}),hh=ii(zl),tu=b({},Ir,{relatedTarget:0}),Il=ii(tu),dh=b({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Bl=ii(dh),ph=b({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),na=ii(ph),mh=b({},ga,{data:0}),Fl=ii(mh),Na={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nu[e])?!!n[e]:!1}function kl(){return Hl}var iu=b({},Ir,{key:function(e){if(e.key){var n=Na[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),au=ii(iu),_h=b({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=ii(_h),Gl=b({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),gh=ii(Gl),su=b({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),ou=ii(su),Mo=b({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),or=ii(Mo),vh=b({},ga,{newState:0,oldState:0}),Ls=ii(vh),Ei=[9,13,27,32],Eo=ki&&"CompositionEvent"in window,Br=null;ki&&"documentMode"in document&&(Br=document.documentMode);var xh=ki&&"TextEvent"in window&&!Br,To=ki&&(!Eo||Br&&8<Br&&11>=Br),Ao=" ",lu=!1;function cu(e,n){switch(e){case"keyup":return Ei.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Vi(e,n){switch(e){case"compositionend":return Vl(n);case"keypress":return n.which!==32?null:(lu=!0,Ao);case"textInput":return e=n.data,e===Ao&&lu?null:e;default:return null}}function Hr(e,n){if(Fr)return e==="compositionend"||!Eo&&cu(e,n)?(e=Ua(),Rn=sr=ea=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return To&&n.locale!=="ko"?null:n.data;default:return null}}var yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yh[e.type]:n==="textarea"}function uu(e,n,r,c){zr?Se?Se.push(c):Se=[c]:zr=c,n=tf(n,"onChange"),0<n.length&&(r=new bo("onChange","change",null,r,c),e.push({event:r,listeners:n}))}var aa=null,Ds=null;function Ps(e){P0(e,0)}function Us(e){var n=ta(e);if(Le(n))return e}function Ns(e,n){if(e==="change")return n}var fu=!1;if(ki){var ra;if(ki){var kr="oninput"in document;if(!kr){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),kr=typeof hu.oninput=="function"}ra=kr}else ra=!1;fu=ra&&(!document.documentMode||9<document.documentMode)}function wo(){aa&&(aa.detachEvent("onpropertychange",du),Ds=aa=null)}function du(e){if(e.propertyName==="value"&&Us(Ds)){var n=[];uu(n,Ds,e,Ts(e)),Nl(Ps,n)}}function xa(e,n,r){e==="focusin"?(wo(),aa=n,Ds=r,aa.attachEvent("onpropertychange",du)):e==="focusout"&&wo()}function Sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(Ds)}function Gr(e,n){if(e==="click")return Us(n)}function bh(e,n){if(e==="input"||e==="change")return Us(n)}function ya(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:ya;function Vr(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),c=Object.keys(n);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var d=r[c];if(!xn.call(n,d)||!Kn(e[d],n[d]))return!1}return!0}function Co(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Os(e,n){var r=Co(e);e=0;for(var c;r;){if(r.nodeType===3){if(c=e+r.textContent.length,e<=n&&c>=n)return{node:r,offset:n-e};e=c}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Co(r)}}function Ro(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ro(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ie(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=ie(e.document)}return n}function Oa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Lo=ki&&"documentMode"in document&&11>=document.documentMode,za=null,Do=null,Is=null,Wr=!1;function pu(e,n,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wr||za==null||za!==ie(c)||(c=za,"selectionStart"in c&&Oa(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Is&&Vr(Is,c)||(Is=c,c=tf(Do,"onSelect"),0<c.length&&(n=new bo("onSelect","select",null,n,r),e.push({event:n,listeners:c}),n.target=za)))}function Ia(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var jr={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Po={},mu={};ki&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function Jn(e){if(Po[e])return Po[e];if(!jr[e])return e;var n=jr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in mu)return Po[e]=n[r];return e}var Bs=Jn("animationend"),_u=Jn("animationiteration"),Fs=Jn("animationstart"),Mh=Jn("transitionrun"),gu=Jn("transitionstart"),Eh=Jn("transitioncancel"),Xr=Jn("transitionend"),vu=new Map,Ba="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ba.push("scrollEnd");function Ti(e,n){vu.set(e,n),ct(n,[e])}var Hs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ai=[],li=0,Uo=0;function ks(){for(var e=li,n=Uo=li=0;n<e;){var r=Ai[n];Ai[n++]=null;var c=Ai[n];Ai[n++]=null;var d=Ai[n];Ai[n++]=null;var m=Ai[n];if(Ai[n++]=null,c!==null&&d!==null){var T=c.pending;T===null?d.next=d:(d.next=T.next,T.next=d),c.pending=d}m!==0&&qr(r,d,m)}}function Fa(e,n,r,c){Ai[li++]=e,Ai[li++]=n,Ai[li++]=r,Ai[li++]=c,Uo|=c,e.lanes|=c,e=e.alternate,e!==null&&(e.lanes|=c)}function Wl(e,n,r,c){return Fa(e,n,r,c),Gs(e)}function sa(e,n){return Fa(e,null,null,n),Gs(e)}function qr(e,n,r){e.lanes|=r;var c=e.alternate;c!==null&&(c.lanes|=r);for(var d=!1,m=e.return;m!==null;)m.childLanes|=r,c=m.alternate,c!==null&&(c.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&n!==null&&(d=31-qt(r),e=m.hiddenUpdates,c=e[d],c===null?e[d]=[n]:c.push(n),n.lane=r|536870912),m):null}function Gs(e){if(50<mc)throw mc=0,Ad=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var lr={};function Th(e,n,r,c){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,n,r,c){return new Th(e,n,r,c)}function No(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,n){var r=e.alternate;return r===null?(r=ci(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function jl(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Vs(e,n,r,c,d,m){var T=0;if(c=e,typeof e=="function")No(e)&&(T=1);else if(typeof e=="string")T=fb(e,r,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case H:return e=ci(31,r,n,d),e.elementType=H,e.lanes=m,e;case N:return cr(r.children,d,m,n);case A:T=8,d|=24;break;case E:return e=ci(12,r,n,d|2),e.elementType=E,e.lanes=m,e;case X:return e=ci(13,r,n,d),e.elementType=X,e.lanes=m,e;case V:return e=ci(19,r,n,d),e.elementType=V,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:T=10;break t;case P:T=9;break t;case F:T=11;break t;case j:T=14;break t;case D:T=16,c=null;break t}T=29,r=Error(s(130,e===null?"null":typeof e,"")),c=null}return n=ci(T,r,n,d),n.elementType=e,n.type=c,n.lanes=m,n}function cr(e,n,r,c){return e=ci(7,e,c,n),e.lanes=r,e}function Oo(e,n,r){return e=ci(6,e,null,n),e.lanes=r,e}function Xl(e){var n=ci(18,null,null,0);return n.stateNode=e,n}function ql(e,n,r){return n=ci(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var a=new WeakMap;function l(e,n){if(typeof e=="object"&&e!==null){var r=a.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Q(n)},a.set(e,n),n)}return{value:e,source:n,stack:Q(n)}}var h=[],g=0,M=null,U=0,Y=[],ot=0,_t=null,Pt=1,Wt="";function me(e,n){h[g++]=U,h[g++]=M,M=e,U=n}function De(e,n,r){Y[ot++]=Pt,Y[ot++]=Wt,Y[ot++]=_t,_t=e;var c=Pt;e=Wt;var d=32-qt(c)-1;c&=~(1<<d),r+=1;var m=32-qt(n)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Pt=1<<32-qt(n)+d|r<<d|c,Wt=m+e}else Pt=1<<m|r<<d|c,Wt=e}function jn(e){e.return!==null&&(me(e,1),De(e,1,0))}function Ln(e){for(;e===M;)M=h[--g],h[g]=null,U=h[--g],h[g]=null;for(;e===_t;)_t=Y[--ot],Y[ot]=null,Wt=Y[--ot],Y[ot]=null,Pt=Y[--ot],Y[ot]=null}function gi(e,n){Y[ot++]=Pt,Y[ot++]=Wt,Y[ot++]=_t,Pt=n.id,Wt=n.overflow,_t=e}var $e=null,tn=null,Fe=!1,Ha=null,wi=!1,zo=Error(s(519));function ka(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(l(n,e)),zo}function Zl(e){var n=e.stateNode,r=e.type,c=e.memoizedProps;switch(n[Tn]=e,n[An]=c,r){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(r=0;r<gc.length;r++)ke(gc[r],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":ke("invalid",n),Yn(n,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":ke("invalid",n);break;case"textarea":ke("invalid",n),yn(n,c.value,c.defaultValue,c.children)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||c.suppressHydrationWarning===!0||z0(n.textContent,r)?(c.popover!=null&&(ke("beforetoggle",n),ke("toggle",n)),c.onScroll!=null&&ke("scroll",n),c.onScrollEnd!=null&&ke("scrollend",n),c.onClick!=null&&(n.onclick=Mi),n=!0):n=!1,n||ka(e,!0)}function wn(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:$e=$e.return}}function Sa(e){if(e!==$e)return!1;if(!Fe)return wn(e),Fe=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||kd(e.type,e.memoizedProps)),r=!r),r&&tn&&ka(e),wn(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=j0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=j0(e)}else n===27?(n=tn,os(e.type)?(e=Xd,Xd=null,tn=e):tn=n):tn=$e?ca(e.stateNode.nextSibling):null;return!0}function ur(){tn=$e=null,Fe=!1}function Yl(){var e=Ha;return e!==null&&(Di===null?Di=e:Di.push.apply(Di,e),Ha=null),e}function Ws(e){Ha===null?Ha=[e]:Ha.push(e)}var js=I(null),Ga=null,ba=null;function Zr(e,n,r){bt(js,n._currentValue),n._currentValue=r}function fr(e){e._currentValue=js.current,K(js)}function Ah(e,n,r){for(;e!==null;){var c=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),e===r)break;e=e.return}}function wh(e,n,r,c){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var T=d.child;m=m.firstContext;t:for(;m!==null;){var O=m;m=d;for(var J=0;J<n.length;J++)if(O.context===n[J]){m.lanes|=r,O=m.alternate,O!==null&&(O.lanes|=r),Ah(m.return,r,e),c||(T=null);break t}m=O.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(s(341));T.lanes|=r,m=T.alternate,m!==null&&(m.lanes|=r),Ah(T,r,e),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===e){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function Io(e,n,r,c){e=null;for(var d=n,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(s(387));if(T=T.memoizedProps,T!==null){var O=d.type;Kn(d.pendingProps.value,T.value)||(e!==null?e.push(O):e=[O])}}else if(d===Lt.current){if(T=d.alternate,T===null)throw Error(s(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(bc):e=[bc])}d=d.return}e!==null&&wh(n,e,r,c),n.flags|=262144}function xu(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xs(e){Ga=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ai(e){return S_(Ga,e)}function yu(e,n){return Ga===null&&Xs(e),S_(e,n)}function S_(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ba===null){if(e===null)throw Error(s(308));ba=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ba=ba.next=n;return r}var oS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,c){e.push(c)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},lS=o.unstable_scheduleCallback,cS=o.unstable_NormalPriority,Bn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ch(){return{controller:new oS,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&lS(cS,function(){e.controller.abort()})}var Jl=null,Rh=0,Bo=0,Fo=null;function uS(e,n){if(Jl===null){var r=Jl=[];Rh=0,Bo=Pd(),Fo={status:"pending",value:void 0,then:function(c){r.push(c)}}}return Rh++,n.then(b_,b_),n}function b_(){if(--Rh===0&&Jl!==null){Fo!==null&&(Fo.status="fulfilled");var e=Jl;Jl=null,Bo=0,Fo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fS(e,n){var r=[],c={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return e.then(function(){c.status="fulfilled",c.value=n;for(var d=0;d<r.length;d++)(0,r[d])(n)},function(d){for(c.status="rejected",c.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),c}var M_=G.S;G.S=function(e,n){s0=R(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uS(e,n),M_!==null&&M_(e,n)};var qs=I(null);function Lh(){var e=qs.current;return e!==null?e:vn.pooledCache}function Su(e,n){n===null?bt(qs,qs.current):bt(qs,n.pool)}function E_(){var e=Lh();return e===null?null:{parent:Bn._currentValue,pool:e}}var Ho=Error(s(460)),Dh=Error(s(474)),bu=Error(s(542)),Mu={then:function(){}};function T_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function A_(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Mi,Mi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,C_(e),e;default:if(typeof n.status=="string")n.then(Mi,Mi);else{if(e=vn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(c){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=c}},function(c){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=c}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,C_(e),e}throw Ys=n,Ho}}function Zs(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Ys=r,Ho):r}}var Ys=null;function w_(){if(Ys===null)throw Error(s(459));var e=Ys;return Ys=null,e}function C_(e){if(e===Ho||e===bu)throw Error(s(483))}var ko=null,Ql=0;function Eu(e){var n=Ql;return Ql+=1,ko===null&&(ko=[]),A_(ko,e,n)}function $l(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tu(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function R_(e){function n(st,$){if(e){var ut=st.deletions;ut===null?(st.deletions=[$],st.flags|=16):ut.push($)}}function r(st,$){if(!e)return null;for(;$!==null;)n(st,$),$=$.sibling;return null}function c(st){for(var $=new Map;st!==null;)st.key!==null?$.set(st.key,st):$.set(st.index,st),st=st.sibling;return $}function d(st,$){return st=oa(st,$),st.index=0,st.sibling=null,st}function m(st,$,ut){return st.index=ut,e?(ut=st.alternate,ut!==null?(ut=ut.index,ut<$?(st.flags|=67108866,$):ut):(st.flags|=67108866,$)):(st.flags|=1048576,$)}function T(st){return e&&st.alternate===null&&(st.flags|=67108866),st}function O(st,$,ut,Dt){return $===null||$.tag!==6?($=Oo(ut,st.mode,Dt),$.return=st,$):($=d($,ut),$.return=st,$)}function J(st,$,ut,Dt){var ge=ut.type;return ge===N?Rt(st,$,ut.props.children,Dt,ut.key):$!==null&&($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===D&&Zs(ge)===$.type)?($=d($,ut.props),$l($,ut),$.return=st,$):($=Vs(ut.type,ut.key,ut.props,null,st.mode,Dt),$l($,ut),$.return=st,$)}function ht(st,$,ut,Dt){return $===null||$.tag!==4||$.stateNode.containerInfo!==ut.containerInfo||$.stateNode.implementation!==ut.implementation?($=ql(ut,st.mode,Dt),$.return=st,$):($=d($,ut.children||[]),$.return=st,$)}function Rt(st,$,ut,Dt,ge){return $===null||$.tag!==7?($=cr(ut,st.mode,Dt,ge),$.return=st,$):($=d($,ut),$.return=st,$)}function Ut(st,$,ut){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Oo(""+$,st.mode,ut),$.return=st,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case C:return ut=Vs($.type,$.key,$.props,null,st.mode,ut),$l(ut,$),ut.return=st,ut;case w:return $=ql($,st.mode,ut),$.return=st,$;case D:return $=Zs($),Ut(st,$,ut)}if(lt($)||rt($))return $=cr($,st.mode,ut,null),$.return=st,$;if(typeof $.then=="function")return Ut(st,Eu($),ut);if($.$$typeof===B)return Ut(st,yu(st,$),ut);Tu(st,$)}return null}function gt(st,$,ut,Dt){var ge=$!==null?$.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return ge!==null?null:O(st,$,""+ut,Dt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case C:return ut.key===ge?J(st,$,ut,Dt):null;case w:return ut.key===ge?ht(st,$,ut,Dt):null;case D:return ut=Zs(ut),gt(st,$,ut,Dt)}if(lt(ut)||rt(ut))return ge!==null?null:Rt(st,$,ut,Dt,null);if(typeof ut.then=="function")return gt(st,$,Eu(ut),Dt);if(ut.$$typeof===B)return gt(st,$,yu(st,ut),Dt);Tu(st,ut)}return null}function Mt(st,$,ut,Dt,ge){if(typeof Dt=="string"&&Dt!==""||typeof Dt=="number"||typeof Dt=="bigint")return st=st.get(ut)||null,O($,st,""+Dt,ge);if(typeof Dt=="object"&&Dt!==null){switch(Dt.$$typeof){case C:return st=st.get(Dt.key===null?ut:Dt.key)||null,J($,st,Dt,ge);case w:return st=st.get(Dt.key===null?ut:Dt.key)||null,ht($,st,Dt,ge);case D:return Dt=Zs(Dt),Mt(st,$,ut,Dt,ge)}if(lt(Dt)||rt(Dt))return st=st.get(ut)||null,Rt($,st,Dt,ge,null);if(typeof Dt.then=="function")return Mt(st,$,ut,Eu(Dt),ge);if(Dt.$$typeof===B)return Mt(st,$,ut,yu($,Dt),ge);Tu($,Dt)}return null}function le(st,$,ut,Dt){for(var ge=null,en=null,fe=$,Pe=$=0,We=null;fe!==null&&Pe<ut.length;Pe++){fe.index>Pe?(We=fe,fe=null):We=fe.sibling;var nn=gt(st,fe,ut[Pe],Dt);if(nn===null){fe===null&&(fe=We);break}e&&fe&&nn.alternate===null&&n(st,fe),$=m(nn,$,Pe),en===null?ge=nn:en.sibling=nn,en=nn,fe=We}if(Pe===ut.length)return r(st,fe),Fe&&me(st,Pe),ge;if(fe===null){for(;Pe<ut.length;Pe++)fe=Ut(st,ut[Pe],Dt),fe!==null&&($=m(fe,$,Pe),en===null?ge=fe:en.sibling=fe,en=fe);return Fe&&me(st,Pe),ge}for(fe=c(fe);Pe<ut.length;Pe++)We=Mt(fe,st,Pe,ut[Pe],Dt),We!==null&&(e&&We.alternate!==null&&fe.delete(We.key===null?Pe:We.key),$=m(We,$,Pe),en===null?ge=We:en.sibling=We,en=We);return e&&fe.forEach(function(hs){return n(st,hs)}),Fe&&me(st,Pe),ge}function ye(st,$,ut,Dt){if(ut==null)throw Error(s(151));for(var ge=null,en=null,fe=$,Pe=$=0,We=null,nn=ut.next();fe!==null&&!nn.done;Pe++,nn=ut.next()){fe.index>Pe?(We=fe,fe=null):We=fe.sibling;var hs=gt(st,fe,nn.value,Dt);if(hs===null){fe===null&&(fe=We);break}e&&fe&&hs.alternate===null&&n(st,fe),$=m(hs,$,Pe),en===null?ge=hs:en.sibling=hs,en=hs,fe=We}if(nn.done)return r(st,fe),Fe&&me(st,Pe),ge;if(fe===null){for(;!nn.done;Pe++,nn=ut.next())nn=Ut(st,nn.value,Dt),nn!==null&&($=m(nn,$,Pe),en===null?ge=nn:en.sibling=nn,en=nn);return Fe&&me(st,Pe),ge}for(fe=c(fe);!nn.done;Pe++,nn=ut.next())nn=Mt(fe,st,Pe,nn.value,Dt),nn!==null&&(e&&nn.alternate!==null&&fe.delete(nn.key===null?Pe:nn.key),$=m(nn,$,Pe),en===null?ge=nn:en.sibling=nn,en=nn);return e&&fe.forEach(function(bb){return n(st,bb)}),Fe&&me(st,Pe),ge}function _n(st,$,ut,Dt){if(typeof ut=="object"&&ut!==null&&ut.type===N&&ut.key===null&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case C:t:{for(var ge=ut.key;$!==null;){if($.key===ge){if(ge=ut.type,ge===N){if($.tag===7){r(st,$.sibling),Dt=d($,ut.props.children),Dt.return=st,st=Dt;break t}}else if($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===D&&Zs(ge)===$.type){r(st,$.sibling),Dt=d($,ut.props),$l(Dt,ut),Dt.return=st,st=Dt;break t}r(st,$);break}else n(st,$);$=$.sibling}ut.type===N?(Dt=cr(ut.props.children,st.mode,Dt,ut.key),Dt.return=st,st=Dt):(Dt=Vs(ut.type,ut.key,ut.props,null,st.mode,Dt),$l(Dt,ut),Dt.return=st,st=Dt)}return T(st);case w:t:{for(ge=ut.key;$!==null;){if($.key===ge)if($.tag===4&&$.stateNode.containerInfo===ut.containerInfo&&$.stateNode.implementation===ut.implementation){r(st,$.sibling),Dt=d($,ut.children||[]),Dt.return=st,st=Dt;break t}else{r(st,$);break}else n(st,$);$=$.sibling}Dt=ql(ut,st.mode,Dt),Dt.return=st,st=Dt}return T(st);case D:return ut=Zs(ut),_n(st,$,ut,Dt)}if(lt(ut))return le(st,$,ut,Dt);if(rt(ut)){if(ge=rt(ut),typeof ge!="function")throw Error(s(150));return ut=ge.call(ut),ye(st,$,ut,Dt)}if(typeof ut.then=="function")return _n(st,$,Eu(ut),Dt);if(ut.$$typeof===B)return _n(st,$,yu(st,ut),Dt);Tu(st,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint"?(ut=""+ut,$!==null&&$.tag===6?(r(st,$.sibling),Dt=d($,ut),Dt.return=st,st=Dt):(r(st,$),Dt=Oo(ut,st.mode,Dt),Dt.return=st,st=Dt),T(st)):r(st,$)}return function(st,$,ut,Dt){try{Ql=0;var ge=_n(st,$,ut,Dt);return ko=null,ge}catch(fe){if(fe===Ho||fe===bu)throw fe;var en=ci(29,fe,null,st.mode);return en.lanes=Dt,en.return=st,en}finally{}}}var Ks=R_(!0),L_=R_(!1),Yr=!1;function Ph(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(e,n,r){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(on&2)!==0){var d=c.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),c.pending=n,n=Gs(e),qr(e,null,r),n}return Fa(e,c,n,r),Gs(e)}function tc(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var c=n.lanes;c&=e.pendingLanes,r|=c,n.lanes=r,Nr(e,r)}}function Nh(e,n){var r=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var d=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var T={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?d=m=T:m=m.next=T,r=r.next}while(r!==null);m===null?d=m=n:m=m.next=n}else d=m=n;r={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Oh=!1;function ec(){if(Oh){var e=Fo;if(e!==null)throw e}}function nc(e,n,r,c){Oh=!1;var d=e.updateQueue;Yr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var J=O,ht=J.next;J.next=null,T===null?m=ht:T.next=ht,T=J;var Rt=e.alternate;Rt!==null&&(Rt=Rt.updateQueue,O=Rt.lastBaseUpdate,O!==T&&(O===null?Rt.firstBaseUpdate=ht:O.next=ht,Rt.lastBaseUpdate=J))}if(m!==null){var Ut=d.baseState;T=0,Rt=ht=J=null,O=m;do{var gt=O.lane&-536870913,Mt=gt!==O.lane;if(Mt?(Ve&gt)===gt:(c&gt)===gt){gt!==0&&gt===Bo&&(Oh=!0),Rt!==null&&(Rt=Rt.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var le=e,ye=O;gt=n;var _n=r;switch(ye.tag){case 1:if(le=ye.payload,typeof le=="function"){Ut=le.call(_n,Ut,gt);break t}Ut=le;break t;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ye.payload,gt=typeof le=="function"?le.call(_n,Ut,gt):le,gt==null)break t;Ut=b({},Ut,gt);break t;case 2:Yr=!0}}gt=O.callback,gt!==null&&(e.flags|=64,Mt&&(e.flags|=8192),Mt=d.callbacks,Mt===null?d.callbacks=[gt]:Mt.push(gt))}else Mt={lane:gt,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Rt===null?(ht=Rt=Mt,J=Ut):Rt=Rt.next=Mt,T|=gt;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;Mt=O,O=Mt.next,Mt.next=null,d.lastBaseUpdate=Mt,d.shared.pending=null}}while(!0);Rt===null&&(J=Ut),d.baseState=J,d.firstBaseUpdate=ht,d.lastBaseUpdate=Rt,m===null&&(d.shared.lanes=0),ns|=T,e.lanes=T,e.memoizedState=Ut}}function D_(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function P_(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)D_(r[e],n)}var Go=I(null),Au=I(0);function U_(e,n){e=yr,bt(Au,e),bt(Go,n),yr=e|n.baseLanes}function zh(){bt(Au,yr),bt(Go,Go.current)}function Ih(){yr=Au.current,K(Go),K(Au)}var Wi=I(null),la=null;function Qr(e){var n=e.alternate;bt(On,On.current&1),bt(Wi,e),la===null&&(n===null||Go.current!==null||n.memoizedState!==null)&&(la=e)}function Bh(e){bt(On,On.current),bt(Wi,e),la===null&&(la=e)}function N_(e){e.tag===22?(bt(On,On.current),bt(Wi,e),la===null&&(la=e)):$r()}function $r(){bt(On,On.current),bt(Wi,Wi.current)}function ji(e){K(Wi),la===e&&(la=null),K(On)}var On=I(0);function wu(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Wd(r)||jd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hr=0,Ce=null,pn=null,Fn=null,Cu=!1,Vo=!1,Js=!1,Ru=0,ic=0,Wo=null,hS=0;function Dn(){throw Error(s(321))}function Fh(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Kn(e[r],n[r]))return!1;return!0}function Hh(e,n,r,c,d,m){return hr=m,Ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?gg:ed,Js=!1,m=r(c,d),Js=!1,Vo&&(m=z_(n,r,c,d)),O_(e),m}function O_(e){G.H=sc;var n=pn!==null&&pn.next!==null;if(hr=0,Fn=pn=Ce=null,Cu=!1,ic=0,Wo=null,n)throw Error(s(300));e===null||Hn||(e=e.dependencies,e!==null&&xu(e)&&(Hn=!0))}function z_(e,n,r,c){Ce=e;var d=0;do{if(Vo&&(Wo=null),ic=0,Vo=!1,25<=d)throw Error(s(301));if(d+=1,Fn=pn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}G.H=vg,m=n(r,c)}while(Vo);return m}function dS(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?ac(n):n,e=e.useState()[0],(pn!==null?pn.memoizedState:null)!==e&&(Ce.flags|=1024),n}function kh(){var e=Ru!==0;return Ru=0,e}function Gh(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Vh(e){if(Cu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cu=!1}hr=0,Fn=pn=Ce=null,Vo=!1,ic=Ru=0,Wo=null}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?Ce.memoizedState=Fn=e:Fn=Fn.next=e,Fn}function zn(){if(pn===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=pn.next;var n=Fn===null?Ce.memoizedState:Fn.next;if(n!==null)Fn=n,pn=e;else{if(e===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));pn=e,e={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Fn===null?Ce.memoizedState=Fn=e:Fn=Fn.next=e}return Fn}function Lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ac(e){var n=ic;return ic+=1,Wo===null&&(Wo=[]),e=A_(Wo,e,n),n=Ce,(Fn===null?n.memoizedState:Fn.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?gg:ed),e}function Du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ac(e);if(e.$$typeof===B)return ai(e)}throw Error(s(438,String(e)))}function Wh(e){var n=null,r=Ce.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var c=Ce.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(n={data:c.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Lu(),Ce.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),c=0;c<e;c++)r[c]=vt;return n.index++,r}function dr(e,n){return typeof n=="function"?n(e):n}function Pu(e){var n=zn();return jh(n,pn,e)}function jh(e,n,r){var c=e.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=r;var d=e.baseQueue,m=c.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}n.baseQueue=d=m,c.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{n=d.next;var O=T=null,J=null,ht=n,Rt=!1;do{var Ut=ht.lane&-536870913;if(Ut!==ht.lane?(Ve&Ut)===Ut:(hr&Ut)===Ut){var gt=ht.revertLane;if(gt===0)J!==null&&(J=J.next={lane:0,revertLane:0,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null}),Ut===Bo&&(Rt=!0);else if((hr&gt)===gt){ht=ht.next,gt===Bo&&(Rt=!0);continue}else Ut={lane:0,revertLane:ht.revertLane,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},J===null?(O=J=Ut,T=m):J=J.next=Ut,Ce.lanes|=gt,ns|=gt;Ut=ht.action,Js&&r(m,Ut),m=ht.hasEagerState?ht.eagerState:r(m,Ut)}else gt={lane:Ut,revertLane:ht.revertLane,gesture:ht.gesture,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},J===null?(O=J=gt,T=m):J=J.next=gt,Ce.lanes|=Ut,ns|=Ut;ht=ht.next}while(ht!==null&&ht!==n);if(J===null?T=m:J.next=O,!Kn(m,e.memoizedState)&&(Hn=!0,Rt&&(r=Fo,r!==null)))throw r;e.memoizedState=m,e.baseState=T,e.baseQueue=J,c.lastRenderedState=m}return d===null&&(c.lanes=0),[e.memoizedState,c.dispatch]}function Xh(e){var n=zn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var c=r.dispatch,d=r.pending,m=n.memoizedState;if(d!==null){r.pending=null;var T=d=d.next;do m=e(m,T.action),T=T.next;while(T!==d);Kn(m,n.memoizedState)||(Hn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),r.lastRenderedState=m}return[m,c]}function I_(e,n,r){var c=Ce,d=zn(),m=Fe;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=n();var T=!Kn((pn||d).memoizedState,r);if(T&&(d.memoizedState=r,Hn=!0),d=d.queue,Yh(H_.bind(null,c,d,e),[e]),d.getSnapshot!==n||T||Fn!==null&&Fn.memoizedState.tag&1){if(c.flags|=2048,jo(9,{destroy:void 0},F_.bind(null,c,d,r,n),null),vn===null)throw Error(s(349));m||(hr&127)!==0||B_(c,n,r)}return r}function B_(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Ce.updateQueue,n===null?(n=Lu(),Ce.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function F_(e,n,r,c){n.value=r,n.getSnapshot=c,k_(n)&&G_(e)}function H_(e,n,r){return r(function(){k_(n)&&G_(e)})}function k_(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Kn(e,r)}catch{return!0}}function G_(e){var n=sa(e,2);n!==null&&Pi(n,e,2)}function qh(e){var n=vi();if(typeof e=="function"){var r=e;if(e=r(),Js){Jt(!0);try{r()}finally{Jt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},n}function V_(e,n,r,c){return e.baseState=r,jh(e,pn,typeof c=="function"?c:dr)}function pS(e,n,r,c,d){if(Ou(e))throw Error(s(485));if(e=n.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};G.T!==null?r(!0):m.isTransition=!1,c(m),r=n.pending,r===null?(m.next=n.pending=m,W_(n,m)):(m.next=r.next,n.pending=r.next=m)}}function W_(e,n){var r=n.action,c=n.payload,d=e.state;if(n.isTransition){var m=G.T,T={};G.T=T;try{var O=r(d,c),J=G.S;J!==null&&J(T,O),j_(e,n,O)}catch(ht){Zh(e,n,ht)}finally{m!==null&&T.types!==null&&(m.types=T.types),G.T=m}}else try{m=r(d,c),j_(e,n,m)}catch(ht){Zh(e,n,ht)}}function j_(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){X_(e,n,c)},function(c){return Zh(e,n,c)}):X_(e,n,r)}function X_(e,n,r){n.status="fulfilled",n.value=r,q_(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,W_(e,r)))}function Zh(e,n,r){var c=e.pending;if(e.pending=null,c!==null){c=c.next;do n.status="rejected",n.reason=r,q_(n),n=n.next;while(n!==c)}e.action=null}function q_(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Z_(e,n){return n}function Y_(e,n){if(Fe){var r=vn.formState;if(r!==null){t:{var c=Ce;if(Fe){if(tn){e:{for(var d=tn,m=wi;d.nodeType!==8;){if(!m){d=null;break e}if(d=ca(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){tn=ca(d.nextSibling),c=d.data==="F!";break t}}ka(c)}c=!1}c&&(n=r[0])}}return r=vi(),r.memoizedState=r.baseState=n,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z_,lastRenderedState:n},r.queue=c,r=pg.bind(null,Ce,c),c.dispatch=r,c=qh(!1),m=td.bind(null,Ce,!1,c.queue),c=vi(),d={state:n,dispatch:null,action:e,pending:null},c.queue=d,r=pS.bind(null,Ce,d,m,r),d.dispatch=r,c.memoizedState=e,[n,r,!1]}function K_(e){var n=zn();return J_(n,pn,e)}function J_(e,n,r){if(n=jh(e,n,Z_)[0],e=Pu(dr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var c=ac(n)}catch(T){throw T===Ho?bu:T}else c=n;n=zn();var d=n.queue,m=d.dispatch;return r!==n.memoizedState&&(Ce.flags|=2048,jo(9,{destroy:void 0},mS.bind(null,d,r),null)),[c,m,e]}function mS(e,n){e.action=n}function Q_(e){var n=zn(),r=pn;if(r!==null)return J_(n,r,e);zn(),n=n.memoizedState,r=zn();var c=r.queue.dispatch;return r.memoizedState=e,[n,c,!1]}function jo(e,n,r,c){return e={tag:e,create:r,deps:c,inst:n,next:null},n=Ce.updateQueue,n===null&&(n=Lu(),Ce.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(c=r.next,r.next=e,e.next=c,n.lastEffect=e),e}function $_(){return zn().memoizedState}function Uu(e,n,r,c){var d=vi();Ce.flags|=e,d.memoizedState=jo(1|n,{destroy:void 0},r,c===void 0?null:c)}function Nu(e,n,r,c){var d=zn();c=c===void 0?null:c;var m=d.memoizedState.inst;pn!==null&&c!==null&&Fh(c,pn.memoizedState.deps)?d.memoizedState=jo(n,m,r,c):(Ce.flags|=e,d.memoizedState=jo(1|n,m,r,c))}function tg(e,n){Uu(8390656,8,e,n)}function Yh(e,n){Nu(2048,8,e,n)}function _S(e){Ce.flags|=4;var n=Ce.updateQueue;if(n===null)n=Lu(),Ce.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function eg(e){var n=zn().memoizedState;return _S({ref:n,nextImpl:e}),function(){if((on&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ng(e,n){return Nu(4,2,e,n)}function ig(e,n){return Nu(4,4,e,n)}function ag(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rg(e,n,r){r=r!=null?r.concat([e]):null,Nu(4,4,ag.bind(null,n,e),r)}function Kh(){}function sg(e,n){var r=zn();n=n===void 0?null:n;var c=r.memoizedState;return n!==null&&Fh(n,c[1])?c[0]:(r.memoizedState=[e,n],e)}function og(e,n){var r=zn();n=n===void 0?null:n;var c=r.memoizedState;if(n!==null&&Fh(n,c[1]))return c[0];if(c=e(),Js){Jt(!0);try{e()}finally{Jt(!1)}}return r.memoizedState=[c,n],c}function Jh(e,n,r){return r===void 0||(hr&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=l0(),Ce.lanes|=e,ns|=e,r)}function lg(e,n,r,c){return Kn(r,n)?r:Go.current!==null?(e=Jh(e,r,c),Kn(e,n)||(Hn=!0),e):(hr&42)===0||(hr&1073741824)!==0&&(Ve&261930)===0?(Hn=!0,e.memoizedState=r):(e=l0(),Ce.lanes|=e,ns|=e,n)}function cg(e,n,r,c,d){var m=q.p;q.p=m!==0&&8>m?m:8;var T=G.T,O={};G.T=O,td(e,!1,n,r);try{var J=d(),ht=G.S;if(ht!==null&&ht(O,J),J!==null&&typeof J=="object"&&typeof J.then=="function"){var Rt=fS(J,c);rc(e,n,Rt,Zi(e))}else rc(e,n,c,Zi(e))}catch(Ut){rc(e,n,{then:function(){},status:"rejected",reason:Ut},Zi())}finally{q.p=m,T!==null&&O.types!==null&&(T.types=O.types),G.T=T}}function gS(){}function Qh(e,n,r,c){if(e.tag!==5)throw Error(s(476));var d=ug(e).queue;cg(e,d,n,it,r===null?gS:function(){return fg(e),r(c)})}function ug(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:it},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fg(e){var n=ug(e);n.next===null&&(n=e.alternate.memoizedState),rc(e,n.next.queue,{},Zi())}function $h(){return ai(bc)}function hg(){return zn().memoizedState}function dg(){return zn().memoizedState}function vS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Zi();e=Kr(r);var c=Jr(n,e,r);c!==null&&(Pi(c,n,r),tc(c,n,r)),n={cache:Ch()},e.payload=n;return}n=n.return}}function xS(e,n,r){var c=Zi();r={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ou(e)?mg(n,r):(r=Wl(e,n,r,c),r!==null&&(Pi(r,e,c),_g(r,n,c)))}function pg(e,n,r){var c=Zi();rc(e,n,r,c)}function rc(e,n,r,c){var d={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))mg(n,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var T=n.lastRenderedState,O=m(T,r);if(d.hasEagerState=!0,d.eagerState=O,Kn(O,T))return Fa(e,n,d,0),vn===null&&ks(),!1}catch{}finally{}if(r=Wl(e,n,d,c),r!==null)return Pi(r,e,c),_g(r,n,c),!0}return!1}function td(e,n,r,c){if(c={lane:2,revertLane:Pd(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Ou(e)){if(n)throw Error(s(479))}else n=Wl(e,r,c,2),n!==null&&Pi(n,e,2)}function Ou(e){var n=e.alternate;return e===Ce||n!==null&&n===Ce}function mg(e,n){Vo=Cu=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function _g(e,n,r){if((r&4194048)!==0){var c=n.lanes;c&=e.pendingLanes,r|=c,n.lanes=r,Nr(e,r)}}var sc={readContext:ai,use:Du,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn};sc.useEffectEvent=Dn;var gg={readContext:ai,use:Du,useCallback:function(e,n){return vi().memoizedState=[e,n===void 0?null:n],e},useContext:ai,useEffect:tg,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Uu(4194308,4,ag.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Uu(4194308,4,e,n)},useInsertionEffect:function(e,n){Uu(4,2,e,n)},useMemo:function(e,n){var r=vi();n=n===void 0?null:n;var c=e();if(Js){Jt(!0);try{e()}finally{Jt(!1)}}return r.memoizedState=[c,n],c},useReducer:function(e,n,r){var c=vi();if(r!==void 0){var d=r(n);if(Js){Jt(!0);try{r(n)}finally{Jt(!1)}}}else d=n;return c.memoizedState=c.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},c.queue=e,e=e.dispatch=xS.bind(null,Ce,e),[c.memoizedState,e]},useRef:function(e){var n=vi();return e={current:e},n.memoizedState=e},useState:function(e){e=qh(e);var n=e.queue,r=pg.bind(null,Ce,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Kh,useDeferredValue:function(e,n){var r=vi();return Jh(r,e,n)},useTransition:function(){var e=qh(!1);return e=cg.bind(null,Ce,e.queue,!0,!1),vi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var c=Ce,d=vi();if(Fe){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),vn===null)throw Error(s(349));(Ve&127)!==0||B_(c,n,r)}d.memoizedState=r;var m={value:r,getSnapshot:n};return d.queue=m,tg(H_.bind(null,c,m,e),[e]),c.flags|=2048,jo(9,{destroy:void 0},F_.bind(null,c,m,r,n),null),r},useId:function(){var e=vi(),n=vn.identifierPrefix;if(Fe){var r=Wt,c=Pt;r=(c&~(1<<32-qt(c)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Ru++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=hS++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$h,useFormState:Y_,useActionState:Y_,useOptimistic:function(e){var n=vi();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=td.bind(null,Ce,!0,r),r.dispatch=n,[e,n]},useMemoCache:Wh,useCacheRefresh:function(){return vi().memoizedState=vS.bind(null,Ce)},useEffectEvent:function(e){var n=vi(),r={impl:e};return n.memoizedState=r,function(){if((on&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},ed={readContext:ai,use:Du,useCallback:sg,useContext:ai,useEffect:Yh,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Pu,useRef:$_,useState:function(){return Pu(dr)},useDebugValue:Kh,useDeferredValue:function(e,n){var r=zn();return lg(r,pn.memoizedState,e,n)},useTransition:function(){var e=Pu(dr)[0],n=zn().memoizedState;return[typeof e=="boolean"?e:ac(e),n]},useSyncExternalStore:I_,useId:hg,useHostTransitionStatus:$h,useFormState:K_,useActionState:K_,useOptimistic:function(e,n){var r=zn();return V_(r,pn,e,n)},useMemoCache:Wh,useCacheRefresh:dg};ed.useEffectEvent=eg;var vg={readContext:ai,use:Du,useCallback:sg,useContext:ai,useEffect:Yh,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Xh,useRef:$_,useState:function(){return Xh(dr)},useDebugValue:Kh,useDeferredValue:function(e,n){var r=zn();return pn===null?Jh(r,e,n):lg(r,pn.memoizedState,e,n)},useTransition:function(){var e=Xh(dr)[0],n=zn().memoizedState;return[typeof e=="boolean"?e:ac(e),n]},useSyncExternalStore:I_,useId:hg,useHostTransitionStatus:$h,useFormState:Q_,useActionState:Q_,useOptimistic:function(e,n){var r=zn();return pn!==null?V_(r,pn,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Wh,useCacheRefresh:dg};vg.useEffectEvent=eg;function nd(e,n,r,c){n=e.memoizedState,r=r(c,n),r=r==null?n:b({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var id={enqueueSetState:function(e,n,r){e=e._reactInternals;var c=Zi(),d=Kr(c);d.payload=n,r!=null&&(d.callback=r),n=Jr(e,d,c),n!==null&&(Pi(n,e,c),tc(n,e,c))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var c=Zi(),d=Kr(c);d.tag=1,d.payload=n,r!=null&&(d.callback=r),n=Jr(e,d,c),n!==null&&(Pi(n,e,c),tc(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Zi(),c=Kr(r);c.tag=2,n!=null&&(c.callback=n),n=Jr(e,c,r),n!==null&&(Pi(n,e,r),tc(n,e,r))}};function xg(e,n,r,c,d,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,m,T):n.prototype&&n.prototype.isPureReactComponent?!Vr(r,c)||!Vr(d,m):!0}function yg(e,n,r,c){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,c),n.state!==e&&id.enqueueReplaceState(n,n.state,null)}function Qs(e,n){var r=n;if("ref"in n){r={};for(var c in n)c!=="ref"&&(r[c]=n[c])}if(e=e.defaultProps){r===n&&(r=b({},r));for(var d in e)r[d]===void 0&&(r[d]=e[d])}return r}function Sg(e){Hs(e)}function bg(e){console.error(e)}function Mg(e){Hs(e)}function zu(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(c){setTimeout(function(){throw c})}}function Eg(e,n,r){try{var c=e.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ad(e,n,r){return r=Kr(r),r.tag=3,r.payload={element:null},r.callback=function(){zu(e,n)},r}function Tg(e){return e=Kr(e),e.tag=3,e}function Ag(e,n,r,c){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;e.payload=function(){return d(m)},e.callback=function(){Eg(n,r,c)}}var T=r.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Eg(n,r,c),typeof d!="function"&&(is===null?is=new Set([this]):is.add(this));var O=c.stack;this.componentDidCatch(c.value,{componentStack:O!==null?O:""})})}function yS(e,n,r,c,d){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(n=r.alternate,n!==null&&Io(n,r,d,!0),r=Wi.current,r!==null){switch(r.tag){case 31:case 13:return la===null?Zu():r.alternate===null&&Pn===0&&(Pn=3),r.flags&=-257,r.flags|=65536,r.lanes=d,c===Mu?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([c]):n.add(c),Rd(e,c,d)),!1;case 22:return r.flags|=65536,c===Mu?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([c]):r.add(c)),Rd(e,c,d)),!1}throw Error(s(435,r.tag))}return Rd(e,c,d),Zu(),!1}if(Fe)return n=Wi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,c!==zo&&(e=Error(s(422),{cause:c}),Ws(l(e,r)))):(c!==zo&&(n=Error(s(423),{cause:c}),Ws(l(n,r))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,c=l(c,r),d=ad(e.stateNode,c,d),Nh(e,d),Pn!==4&&(Pn=2)),!1;var m=Error(s(520),{cause:c});if(m=l(m,r),pc===null?pc=[m]:pc.push(m),Pn!==4&&(Pn=2),n===null)return!0;c=l(c,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=d&-d,r.lanes|=e,e=ad(r.stateNode,c,e),Nh(r,e),!1;case 1:if(n=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(is===null||!is.has(m))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Tg(d),Ag(d,e,r,c),Nh(r,d),!1}r=r.return}while(r!==null);return!1}var rd=Error(s(461)),Hn=!1;function ri(e,n,r,c){n.child=e===null?L_(n,null,r,c):Ks(n,e.child,r,c)}function wg(e,n,r,c,d){r=r.render;var m=n.ref;if("ref"in c){var T={};for(var O in c)O!=="ref"&&(T[O]=c[O])}else T=c;return Xs(n),c=Hh(e,n,r,T,m,d),O=kh(),e!==null&&!Hn?(Gh(e,n,d),pr(e,n,d)):(Fe&&O&&jn(n),n.flags|=1,ri(e,n,c,d),n.child)}function Cg(e,n,r,c,d){if(e===null){var m=r.type;return typeof m=="function"&&!No(m)&&m.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=m,Rg(e,n,m,c,d)):(e=Vs(r.type,null,c,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(m=e.child,!dd(e,d)){var T=m.memoizedProps;if(r=r.compare,r=r!==null?r:Vr,r(T,c)&&e.ref===n.ref)return pr(e,n,d)}return n.flags|=1,e=oa(m,c),e.ref=n.ref,e.return=n,n.child=e}function Rg(e,n,r,c,d){if(e!==null){var m=e.memoizedProps;if(Vr(m,c)&&e.ref===n.ref)if(Hn=!1,n.pendingProps=c=m,dd(e,d))(e.flags&131072)!==0&&(Hn=!0);else return n.lanes=e.lanes,pr(e,n,d)}return sd(e,n,r,c,d)}function Lg(e,n,r,c){var d=c.children,m=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((n.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;c=d&~m}else c=0,n.child=null;return Dg(e,n,m,r,c)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Su(n,m!==null?m.cachePool:null),m!==null?U_(n,m):zh(),N_(n);else return c=n.lanes=536870912,Dg(e,n,m!==null?m.baseLanes|r:r,r,c)}else m!==null?(Su(n,m.cachePool),U_(n,m),$r(),n.memoizedState=null):(e!==null&&Su(n,null),zh(),$r());return ri(e,n,d,r),n.child}function oc(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Dg(e,n,r,c,d){var m=Lh();return m=m===null?null:{parent:Bn._currentValue,pool:m},n.memoizedState={baseLanes:r,cachePool:m},e!==null&&Su(n,null),zh(),N_(n),e!==null&&Io(e,n,c,!0),n.childLanes=d,null}function Iu(e,n){return n=Fu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pg(e,n,r){return Ks(n,e.child,null,r),e=Iu(n,n.pendingProps),e.flags|=2,ji(n),n.memoizedState=null,e}function SS(e,n,r){var c=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Fe){if(c.mode==="hidden")return e=Iu(n,c),n.lanes=536870912,oc(null,e);if(Bh(n),(e=tn)?(e=W0(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_t!==null?{id:Pt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},r=Xl(e),r.return=n,n.child=r,$e=n,tn=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return Iu(n,c)}var m=e.memoizedState;if(m!==null){var T=m.dehydrated;if(Bh(n),d)if(n.flags&256)n.flags&=-257,n=Pg(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Hn||Io(e,n,r,!1),d=(r&e.childLanes)!==0,Hn||d){if(c=vn,c!==null&&(T=go(c,r),T!==0&&T!==m.retryLane))throw m.retryLane=T,sa(e,T),Pi(c,e,T),rd;Zu(),n=Pg(e,n,r)}else e=m.treeContext,tn=ca(T.nextSibling),$e=n,Fe=!0,Ha=null,wi=!1,e!==null&&gi(n,e),n=Iu(n,c),n.flags|=4096;return n}return e=oa(e.child,{mode:c.mode,children:c.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bu(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function sd(e,n,r,c,d){return Xs(n),r=Hh(e,n,r,c,void 0,d),c=kh(),e!==null&&!Hn?(Gh(e,n,d),pr(e,n,d)):(Fe&&c&&jn(n),n.flags|=1,ri(e,n,r,d),n.child)}function Ug(e,n,r,c,d,m){return Xs(n),n.updateQueue=null,r=z_(n,c,r,d),O_(e),c=kh(),e!==null&&!Hn?(Gh(e,n,m),pr(e,n,m)):(Fe&&c&&jn(n),n.flags|=1,ri(e,n,r,m),n.child)}function Ng(e,n,r,c,d){if(Xs(n),n.stateNode===null){var m=lr,T=r.contextType;typeof T=="object"&&T!==null&&(m=ai(T)),m=new r(c,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=id,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=c,m.state=n.memoizedState,m.refs={},Ph(n),T=r.contextType,m.context=typeof T=="object"&&T!==null?ai(T):lr,m.state=n.memoizedState,T=r.getDerivedStateFromProps,typeof T=="function"&&(nd(n,r,T,c),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&id.enqueueReplaceState(m,m.state,null),nc(n,c,m,d),ec(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),c=!0}else if(e===null){m=n.stateNode;var O=n.memoizedProps,J=Qs(r,O);m.props=J;var ht=m.context,Rt=r.contextType;T=lr,typeof Rt=="object"&&Rt!==null&&(T=ai(Rt));var Ut=r.getDerivedStateFromProps;Rt=typeof Ut=="function"||typeof m.getSnapshotBeforeUpdate=="function",O=n.pendingProps!==O,Rt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(O||ht!==T)&&yg(n,m,c,T),Yr=!1;var gt=n.memoizedState;m.state=gt,nc(n,c,m,d),ec(),ht=n.memoizedState,O||gt!==ht||Yr?(typeof Ut=="function"&&(nd(n,r,Ut,c),ht=n.memoizedState),(J=Yr||xg(n,r,J,c,gt,ht,T))?(Rt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=ht),m.props=c,m.state=ht,m.context=T,c=J):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{m=n.stateNode,Uh(e,n),T=n.memoizedProps,Rt=Qs(r,T),m.props=Rt,Ut=n.pendingProps,gt=m.context,ht=r.contextType,J=lr,typeof ht=="object"&&ht!==null&&(J=ai(ht)),O=r.getDerivedStateFromProps,(ht=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==Ut||gt!==J)&&yg(n,m,c,J),Yr=!1,gt=n.memoizedState,m.state=gt,nc(n,c,m,d),ec();var Mt=n.memoizedState;T!==Ut||gt!==Mt||Yr||e!==null&&e.dependencies!==null&&xu(e.dependencies)?(typeof O=="function"&&(nd(n,r,O,c),Mt=n.memoizedState),(Rt=Yr||xg(n,r,Rt,c,gt,Mt,J)||e!==null&&e.dependencies!==null&&xu(e.dependencies))?(ht||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,Mt,J),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,Mt,J)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&gt===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&gt===e.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=Mt),m.props=c,m.state=Mt,m.context=J,c=Rt):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&gt===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&gt===e.memoizedState||(n.flags|=1024),c=!1)}return m=c,Bu(e,n),c=(n.flags&128)!==0,m||c?(m=n.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,e!==null&&c?(n.child=Ks(n,e.child,null,d),n.child=Ks(n,null,r,d)):ri(e,n,r,d),n.memoizedState=m.state,e=n.child):e=pr(e,n,d),e}function Og(e,n,r,c){return ur(),n.flags|=256,ri(e,n,r,c),n.child}var od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(e){return{baseLanes:e,cachePool:E_()}}function cd(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=qi),e}function zg(e,n,r){var c=n.pendingProps,d=!1,m=(n.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),T&&(d=!0,n.flags&=-129),T=(n.flags&32)!==0,n.flags&=-33,e===null){if(Fe){if(d?Qr(n):$r(),(e=tn)?(e=W0(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_t!==null?{id:Pt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},r=Xl(e),r.return=n,n.child=r,$e=n,tn=null)):e=null,e===null)throw ka(n);return jd(e)?n.lanes=32:n.lanes=536870912,null}var O=c.children;return c=c.fallback,d?($r(),d=n.mode,O=Fu({mode:"hidden",children:O},d),c=cr(c,d,r,null),O.return=n,c.return=n,O.sibling=c,n.child=O,c=n.child,c.memoizedState=ld(r),c.childLanes=cd(e,T,r),n.memoizedState=od,oc(null,c)):(Qr(n),ud(n,O))}var J=e.memoizedState;if(J!==null&&(O=J.dehydrated,O!==null)){if(m)n.flags&256?(Qr(n),n.flags&=-257,n=fd(e,n,r)):n.memoizedState!==null?($r(),n.child=e.child,n.flags|=128,n=null):($r(),O=c.fallback,d=n.mode,c=Fu({mode:"visible",children:c.children},d),O=cr(O,d,r,null),O.flags|=2,c.return=n,O.return=n,c.sibling=O,n.child=c,Ks(n,e.child,null,r),c=n.child,c.memoizedState=ld(r),c.childLanes=cd(e,T,r),n.memoizedState=od,n=oc(null,c));else if(Qr(n),jd(O)){if(T=O.nextSibling&&O.nextSibling.dataset,T)var ht=T.dgst;T=ht,c=Error(s(419)),c.stack="",c.digest=T,Ws({value:c,source:null,stack:null}),n=fd(e,n,r)}else if(Hn||Io(e,n,r,!1),T=(r&e.childLanes)!==0,Hn||T){if(T=vn,T!==null&&(c=go(T,r),c!==0&&c!==J.retryLane))throw J.retryLane=c,sa(e,c),Pi(T,e,c),rd;Wd(O)||Zu(),n=fd(e,n,r)}else Wd(O)?(n.flags|=192,n.child=e.child,n=null):(e=J.treeContext,tn=ca(O.nextSibling),$e=n,Fe=!0,Ha=null,wi=!1,e!==null&&gi(n,e),n=ud(n,c.children),n.flags|=4096);return n}return d?($r(),O=c.fallback,d=n.mode,J=e.child,ht=J.sibling,c=oa(J,{mode:"hidden",children:c.children}),c.subtreeFlags=J.subtreeFlags&65011712,ht!==null?O=oa(ht,O):(O=cr(O,d,r,null),O.flags|=2),O.return=n,c.return=n,c.sibling=O,n.child=c,oc(null,c),c=n.child,O=e.child.memoizedState,O===null?O=ld(r):(d=O.cachePool,d!==null?(J=Bn._currentValue,d=d.parent!==J?{parent:J,pool:J}:d):d=E_(),O={baseLanes:O.baseLanes|r,cachePool:d}),c.memoizedState=O,c.childLanes=cd(e,T,r),n.memoizedState=od,oc(e.child,c)):(Qr(n),r=e.child,e=r.sibling,r=oa(r,{mode:"visible",children:c.children}),r.return=n,r.sibling=null,e!==null&&(T=n.deletions,T===null?(n.deletions=[e],n.flags|=16):T.push(e)),n.child=r,n.memoizedState=null,r)}function ud(e,n){return n=Fu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fu(e,n){return e=ci(22,e,null,n),e.lanes=0,e}function fd(e,n,r){return Ks(n,e.child,null,r),e=ud(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ig(e,n,r){e.lanes|=n;var c=e.alternate;c!==null&&(c.lanes|=n),Ah(e.return,n,r)}function hd(e,n,r,c,d,m){var T=e.memoizedState;T===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:d,treeForkCount:m}:(T.isBackwards=n,T.rendering=null,T.renderingStartTime=0,T.last=c,T.tail=r,T.tailMode=d,T.treeForkCount=m)}function Bg(e,n,r){var c=n.pendingProps,d=c.revealOrder,m=c.tail;c=c.children;var T=On.current,O=(T&2)!==0;if(O?(T=T&1|2,n.flags|=128):T&=1,bt(On,T),ri(e,n,c,r),c=Fe?U:0,!O&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ig(e,r,n);else if(e.tag===19)Ig(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(r=n.child,d=null;r!==null;)e=r.alternate,e!==null&&wu(e)===null&&(d=r),r=r.sibling;r=d,r===null?(d=n.child,n.child=null):(d=r.sibling,r.sibling=null),hd(n,!1,d,r,m,c);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&wu(e)===null){n.child=d;break}e=d.sibling,d.sibling=r,r=d,d=e}hd(n,!0,r,null,m,c);break;case"together":hd(n,!1,null,null,void 0,c);break;default:n.memoizedState=null}return n.child}function pr(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ns|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Io(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,r=oa(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=oa(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function dd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xu(e)))}function bS(e,n,r){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),Zr(n,Bn,e.memoizedState.cache),ur();break;case 27:case 5:de(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:Zr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bh(n),null;break;case 13:var c=n.memoizedState;if(c!==null)return c.dehydrated!==null?(Qr(n),n.flags|=128,null):(r&n.child.childLanes)!==0?zg(e,n,r):(Qr(n),e=pr(e,n,r),e!==null?e.sibling:null);Qr(n);break;case 19:var d=(e.flags&128)!==0;if(c=(r&n.childLanes)!==0,c||(Io(e,n,r,!1),c=(r&n.childLanes)!==0),d){if(c)return Bg(e,n,r);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),bt(On,On.current),c)break;return null;case 22:return n.lanes=0,Lg(e,n,r,n.pendingProps);case 24:Zr(n,Bn,e.memoizedState.cache)}return pr(e,n,r)}function Fg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)Hn=!0;else{if(!dd(e,r)&&(n.flags&128)===0)return Hn=!1,bS(e,n,r);Hn=(e.flags&131072)!==0}else Hn=!1,Fe&&(n.flags&1048576)!==0&&De(n,U,n.index);switch(n.lanes=0,n.tag){case 16:t:{var c=n.pendingProps;if(e=Zs(n.elementType),n.type=e,typeof e=="function")No(e)?(c=Qs(e,c),n.tag=1,n=Ng(null,n,e,c,r)):(n.tag=0,n=sd(null,n,e,c,r));else{if(e!=null){var d=e.$$typeof;if(d===F){n.tag=11,n=wg(null,n,e,c,r);break t}else if(d===j){n.tag=14,n=Cg(null,n,e,c,r);break t}}throw n=mt(e)||e,Error(s(306,n,""))}}return n;case 0:return sd(e,n,n.type,n.pendingProps,r);case 1:return c=n.type,d=Qs(c,n.pendingProps),Ng(e,n,c,d,r);case 3:t:{if(zt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));c=n.pendingProps;var m=n.memoizedState;d=m.element,Uh(e,n),nc(n,c,null,r);var T=n.memoizedState;if(c=T.cache,Zr(n,Bn,c),c!==m.cache&&wh(n,[Bn],r,!0),ec(),c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){n=Og(e,n,c,r);break t}else if(c!==d){d=l(Error(s(424)),n),Ws(d),n=Og(e,n,c,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=ca(e.firstChild),$e=n,Fe=!0,Ha=null,wi=!0,r=L_(n,null,c,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ur(),c===d){n=pr(e,n,r);break t}ri(e,n,c,r)}n=n.child}return n;case 26:return Bu(e,n),e===null?(r=K0(n.type,null,n.pendingProps,null))?n.memoizedState=r:Fe||(r=n.type,e=n.pendingProps,c=ef(nt.current).createElement(r),c[Tn]=n,c[An]=e,si(c,r,e),tt(c),n.stateNode=c):n.memoizedState=K0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return de(n),e===null&&Fe&&(c=n.stateNode=q0(n.type,n.pendingProps,nt.current),$e=n,wi=!0,d=tn,os(n.type)?(Xd=d,tn=ca(c.firstChild)):tn=d),ri(e,n,n.pendingProps.children,r),Bu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Fe&&((d=c=tn)&&(c=QS(c,n.type,n.pendingProps,wi),c!==null?(n.stateNode=c,$e=n,tn=ca(c.firstChild),wi=!1,d=!0):d=!1),d||ka(n)),de(n),d=n.type,m=n.pendingProps,T=e!==null?e.memoizedProps:null,c=m.children,kd(d,m)?c=null:T!==null&&kd(d,T)&&(n.flags|=32),n.memoizedState!==null&&(d=Hh(e,n,dS,null,null,r),bc._currentValue=d),Bu(e,n),ri(e,n,c,r),n.child;case 6:return e===null&&Fe&&((e=r=tn)&&(r=$S(r,n.pendingProps,wi),r!==null?(n.stateNode=r,$e=n,tn=null,e=!0):e=!1),e||ka(n)),null;case 13:return zg(e,n,r);case 4:return zt(n,n.stateNode.containerInfo),c=n.pendingProps,e===null?n.child=Ks(n,null,c,r):ri(e,n,c,r),n.child;case 11:return wg(e,n,n.type,n.pendingProps,r);case 7:return ri(e,n,n.pendingProps,r),n.child;case 8:return ri(e,n,n.pendingProps.children,r),n.child;case 12:return ri(e,n,n.pendingProps.children,r),n.child;case 10:return c=n.pendingProps,Zr(n,n.type,c.value),ri(e,n,c.children,r),n.child;case 9:return d=n.type._context,c=n.pendingProps.children,Xs(n),d=ai(d),c=c(d),n.flags|=1,ri(e,n,c,r),n.child;case 14:return Cg(e,n,n.type,n.pendingProps,r);case 15:return Rg(e,n,n.type,n.pendingProps,r);case 19:return Bg(e,n,r);case 31:return SS(e,n,r);case 22:return Lg(e,n,r,n.pendingProps);case 24:return Xs(n),c=ai(Bn),e===null?(d=Lh(),d===null&&(d=vn,m=Ch(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=r),d=m),n.memoizedState={parent:c,cache:d},Ph(n),Zr(n,Bn,d)):((e.lanes&r)!==0&&(Uh(e,n),nc(n,null,null,r),ec()),d=e.memoizedState,m=n.memoizedState,d.parent!==c?(d={parent:c,cache:c},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),Zr(n,Bn,c)):(c=m.cache,Zr(n,Bn,c),c!==d.cache&&wh(n,[Bn],r,!0))),ri(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function mr(e){e.flags|=4}function pd(e,n,r,c,d){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(h0())e.flags|=8192;else throw Ys=Mu,Dh}else e.flags&=-16777217}function Hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ev(n))if(h0())e.flags|=8192;else throw Ys=Mu,Dh}function Hu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?rn():536870912,e.lanes|=n,Yo|=n)}function lc(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function Sn(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,c=0;if(n)for(var d=e.child;d!==null;)r|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)r|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=c,e.childLanes=r,n}function MS(e,n,r){var c=n.pendingProps;switch(Ln(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(n),null;case 1:return Sn(n),null;case 3:return r=n.stateNode,c=null,e!==null&&(c=e.memoizedState.cache),n.memoizedState.cache!==c&&(n.flags|=2048),fr(Bn),ae(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sa(n)?mr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yl())),Sn(n),null;case 26:var d=n.type,m=n.memoizedState;return e===null?(mr(n),m!==null?(Sn(n),Hg(n,m)):(Sn(n),pd(n,d,null,c,r))):m?m!==e.memoizedState?(mr(n),Sn(n),Hg(n,m)):(Sn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==c&&mr(n),Sn(n),pd(n,d,e,c,r)),null;case 27:if(ve(n),r=nt.current,d=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==c&&mr(n);else{if(!c){if(n.stateNode===null)throw Error(s(166));return Sn(n),null}e=wt.current,Sa(n)?Zl(n):(e=q0(d,c,r),n.stateNode=e,mr(n))}return Sn(n),null;case 5:if(ve(n),d=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==c&&mr(n);else{if(!c){if(n.stateNode===null)throw Error(s(166));return Sn(n),null}if(m=wt.current,Sa(n))Zl(n);else{var T=ef(nt.current);switch(m){case 1:m=T.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=T.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=T.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=T.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=T.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?T.createElement("select",{is:c.is}):T.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?T.createElement(d,{is:c.is}):T.createElement(d)}}m[Tn]=n,m[An]=c;t:for(T=n.child;T!==null;){if(T.tag===5||T.tag===6)m.appendChild(T.stateNode);else if(T.tag!==4&&T.tag!==27&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===n)break t;for(;T.sibling===null;){if(T.return===null||T.return===n)break t;T=T.return}T.sibling.return=T.return,T=T.sibling}n.stateNode=m;t:switch(si(m,d,c),d){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break t;case"img":c=!0;break t;default:c=!1}c&&mr(n)}}return Sn(n),pd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==c&&mr(n);else{if(typeof c!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Sa(n)){if(e=n.stateNode,r=n.memoizedProps,c=null,d=$e,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}e[Tn]=n,e=!!(e.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||z0(e.nodeValue,r)),e||ka(n,!0)}else e=ef(e).createTextNode(c),e[Tn]=n,n.stateNode=e}return Sn(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(c=Sa(n),r!==null){if(e===null){if(!c)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Tn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Sn(n),e=!1}else r=Yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(ji(n),n):(ji(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Sn(n),null;case 13:if(c=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Sa(n),c!==null&&c.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Tn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Sn(n),d=!1}else d=Yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(ji(n),n):(ji(n),null)}return ji(n),(n.flags&128)!==0?(n.lanes=r,n):(r=c!==null,e=e!==null&&e.memoizedState!==null,r&&(c=n.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Hu(n,n.updateQueue),Sn(n),null);case 4:return ae(),e===null&&zd(n.stateNode.containerInfo),Sn(n),null;case 10:return fr(n.type),Sn(n),null;case 19:if(K(On),c=n.memoizedState,c===null)return Sn(n),null;if(d=(n.flags&128)!==0,m=c.rendering,m===null)if(d)lc(c,!1);else{if(Pn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=wu(e),m!==null){for(n.flags|=128,lc(c,!1),e=m.updateQueue,n.updateQueue=e,Hu(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)jl(r,e),r=r.sibling;return bt(On,On.current&1|2),Fe&&me(n,c.treeForkCount),n.child}e=e.sibling}c.tail!==null&&R()>ju&&(n.flags|=128,d=!0,lc(c,!1),n.lanes=4194304)}else{if(!d)if(e=wu(m),e!==null){if(n.flags|=128,d=!0,e=e.updateQueue,n.updateQueue=e,Hu(n,e),lc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Fe)return Sn(n),null}else 2*R()-c.renderingStartTime>ju&&r!==536870912&&(n.flags|=128,d=!0,lc(c,!1),n.lanes=4194304);c.isBackwards?(m.sibling=n.child,n.child=m):(e=c.last,e!==null?e.sibling=m:n.child=m,c.last=m)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=R(),e.sibling=null,r=On.current,bt(On,d?r&1|2:r&1),Fe&&me(n,c.treeForkCount),e):(Sn(n),null);case 22:case 23:return ji(n),Ih(),c=n.memoizedState!==null,e!==null?e.memoizedState!==null!==c&&(n.flags|=8192):c&&(n.flags|=8192),c?(r&536870912)!==0&&(n.flags&128)===0&&(Sn(n),n.subtreeFlags&6&&(n.flags|=8192)):Sn(n),r=n.updateQueue,r!==null&&Hu(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),c=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(c=n.memoizedState.cachePool.pool),c!==r&&(n.flags|=2048),e!==null&&K(qs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),fr(Bn),Sn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ES(e,n){switch(Ln(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fr(Bn),ae(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ve(n),null;case 31:if(n.memoizedState!==null){if(ji(n),n.alternate===null)throw Error(s(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(On),null;case 4:return ae(),null;case 10:return fr(n.type),null;case 22:case 23:return ji(n),Ih(),e!==null&&K(qs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return fr(Bn),null;case 25:return null;default:return null}}function kg(e,n){switch(Ln(n),n.tag){case 3:fr(Bn),ae();break;case 26:case 27:case 5:ve(n);break;case 4:ae();break;case 31:n.memoizedState!==null&&ji(n);break;case 13:ji(n);break;case 19:K(On);break;case 10:fr(n.type);break;case 22:case 23:ji(n),Ih(),e!==null&&K(qs);break;case 24:fr(Bn)}}function cc(e,n){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var d=c.next;r=d;do{if((r.tag&e)===e){c=void 0;var m=r.create,T=r.inst;c=m(),T.destroy=c}r=r.next}while(r!==d)}}catch(O){un(n,n.return,O)}}function ts(e,n,r){try{var c=n.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&e)===e){var T=c.inst,O=T.destroy;if(O!==void 0){T.destroy=void 0,d=n;var J=r,ht=O;try{ht()}catch(Rt){un(d,J,Rt)}}}c=c.next}while(c!==m)}}catch(Rt){un(n,n.return,Rt)}}function Gg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{P_(n,r)}catch(c){un(e,e.return,c)}}}function Vg(e,n,r){r.props=Qs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(c){un(e,n,c)}}function uc(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var c=e.stateNode;break;case 30:c=e.stateNode;break;default:c=e.stateNode}typeof r=="function"?e.refCleanup=r(c):r.current=c}}catch(d){un(e,n,d)}}function Va(e,n){var r=e.ref,c=e.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(d){un(e,n,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){un(e,n,d)}else r.current=null}function Wg(e){var n=e.type,r=e.memoizedProps,c=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break t;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(d){un(e,e.return,d)}}function md(e,n,r){try{var c=e.stateNode;XS(c,e.type,r,n),c[An]=n}catch(d){un(e,e.return,d)}}function jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function _d(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gd(e,n,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Mi));else if(c!==4&&(c===27&&os(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(gd(e,n,r),e=e.sibling;e!==null;)gd(e,n,r),e=e.sibling}function ku(e,n,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(c!==4&&(c===27&&os(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(ku(e,n,r),e=e.sibling;e!==null;)ku(e,n,r),e=e.sibling}function Xg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var c=e.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);si(n,c,r),n[Tn]=e,n[An]=r}catch(m){un(e,e.return,m)}}var _r=!1,kn=!1,vd=!1,qg=typeof WeakSet=="function"?WeakSet:Set,Qn=null;function TS(e,n){if(e=e.containerInfo,Fd=cf,e=zs(e),Oa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var T=0,O=-1,J=-1,ht=0,Rt=0,Ut=e,gt=null;e:for(;;){for(var Mt;Ut!==r||d!==0&&Ut.nodeType!==3||(O=T+d),Ut!==m||c!==0&&Ut.nodeType!==3||(J=T+c),Ut.nodeType===3&&(T+=Ut.nodeValue.length),(Mt=Ut.firstChild)!==null;)gt=Ut,Ut=Mt;for(;;){if(Ut===e)break e;if(gt===r&&++ht===d&&(O=T),gt===m&&++Rt===c&&(J=T),(Mt=Ut.nextSibling)!==null)break;Ut=gt,gt=Ut.parentNode}Ut=Mt}r=O===-1||J===-1?null:{start:O,end:J}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hd={focusedElem:e,selectionRange:r},cf=!1,Qn=n;Qn!==null;)if(n=Qn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Qn=e;else for(;Qn!==null;){switch(n=Qn,m=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)d=e[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=n,d=m.memoizedProps,m=m.memoizedState,c=r.stateNode;try{var le=Qs(r.type,d);e=c.getSnapshotBeforeUpdate(le,m),c.__reactInternalSnapshotBeforeUpdate=e}catch(ye){un(r,r.return,ye)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Vd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Qn=e;break}Qn=n.return}}function Zg(e,n,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:vr(e,r),c&4&&cc(5,r);break;case 1:if(vr(e,r),c&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(T){un(r,r.return,T)}else{var d=Qs(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(d,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){un(r,r.return,T)}}c&64&&Gg(r),c&512&&uc(r,r.return);break;case 3:if(vr(e,r),c&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{P_(e,n)}catch(T){un(r,r.return,T)}}break;case 27:n===null&&c&4&&Xg(r);case 26:case 5:vr(e,r),n===null&&c&4&&Wg(r),c&512&&uc(r,r.return);break;case 12:vr(e,r);break;case 31:vr(e,r),c&4&&Jg(e,r);break;case 13:vr(e,r),c&4&&Qg(e,r),c&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=NS.bind(null,r),tb(e,r))));break;case 22:if(c=r.memoizedState!==null||_r,!c){n=n!==null&&n.memoizedState!==null||kn,d=_r;var m=kn;_r=c,(kn=n)&&!m?xr(e,r,(r.subtreeFlags&8772)!==0):vr(e,r),_r=d,kn=m}break;case 30:break;default:vr(e,r)}}function Yg(e){var n=e.alternate;n!==null&&(e.alternate=null,Yg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Es(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var En=null,Ci=!1;function gr(e,n,r){for(r=r.child;r!==null;)Kg(e,n,r),r=r.sibling}function Kg(e,n,r){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Bt,r)}catch{}switch(r.tag){case 26:kn||Va(r,n),gr(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:kn||Va(r,n);var c=En,d=Ci;os(r.type)&&(En=r.stateNode,Ci=!1),gr(e,n,r),xc(r.stateNode),En=c,Ci=d;break;case 5:kn||Va(r,n);case 6:if(c=En,d=Ci,En=null,gr(e,n,r),En=c,Ci=d,En!==null)if(Ci)try{(En.nodeType===9?En.body:En.nodeName==="HTML"?En.ownerDocument.body:En).removeChild(r.stateNode)}catch(m){un(r,n,m)}else try{En.removeChild(r.stateNode)}catch(m){un(r,n,m)}break;case 18:En!==null&&(Ci?(e=En,G0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),il(e)):G0(En,r.stateNode));break;case 4:c=En,d=Ci,En=r.stateNode.containerInfo,Ci=!0,gr(e,n,r),En=c,Ci=d;break;case 0:case 11:case 14:case 15:ts(2,r,n),kn||ts(4,r,n),gr(e,n,r);break;case 1:kn||(Va(r,n),c=r.stateNode,typeof c.componentWillUnmount=="function"&&Vg(r,n,c)),gr(e,n,r);break;case 21:gr(e,n,r);break;case 22:kn=(c=kn)||r.memoizedState!==null,gr(e,n,r),kn=c;break;default:gr(e,n,r)}}function Jg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(r){un(n,n.return,r)}}}function Qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(r){un(n,n.return,r)}}function AS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new qg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new qg),n;default:throw Error(s(435,e.tag))}}function Gu(e,n){var r=AS(e);n.forEach(function(c){if(!r.has(c)){r.add(c);var d=OS.bind(null,e,c);c.then(d,d)}})}function Ri(e,n){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var d=r[c],m=e,T=n,O=T;t:for(;O!==null;){switch(O.tag){case 27:if(os(O.type)){En=O.stateNode,Ci=!1;break t}break;case 5:En=O.stateNode,Ci=!1;break t;case 3:case 4:En=O.stateNode.containerInfo,Ci=!0;break t}O=O.return}if(En===null)throw Error(s(160));Kg(m,T,d),En=null,Ci=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$g(n,e),n=n.sibling}var Ma=null;function $g(e,n){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ri(n,e),Li(e),c&4&&(ts(3,e,e.return),cc(3,e),ts(5,e,e.return));break;case 1:Ri(n,e),Li(e),c&512&&(kn||r===null||Va(r,r.return)),c&64&&_r&&(e=e.updateQueue,e!==null&&(c=e.callbacks,c!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var d=Ma;if(Ri(n,e),Li(e),c&512&&(kn||r===null||Va(r,r.return)),c&4){var m=r!==null?r.memoizedState:null;if(c=e.memoizedState,r===null)if(c===null)if(e.stateNode===null){t:{c=e.type,r=e.memoizedProps,d=d.ownerDocument||d;e:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[ar]||m[Tn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),si(m,c,r),m[Tn]=e,tt(m),c=m;break t;case"link":var T=$0("link","href",d).get(c+(r.href||""));if(T){for(var O=0;O<T.length;O++)if(m=T[O],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){T.splice(O,1);break e}}m=d.createElement(c),si(m,c,r),d.head.appendChild(m);break;case"meta":if(T=$0("meta","content",d).get(c+(r.content||""))){for(O=0;O<T.length;O++)if(m=T[O],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){T.splice(O,1);break e}}m=d.createElement(c),si(m,c,r),d.head.appendChild(m);break;default:throw Error(s(468,c))}m[Tn]=e,tt(m),c=m}e.stateNode=c}else tv(d,e.type,e.stateNode);else e.stateNode=Q0(d,c,e.memoizedProps);else m!==c?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,c===null?tv(d,e.type,e.stateNode):Q0(d,c,e.memoizedProps)):c===null&&e.stateNode!==null&&md(e,e.memoizedProps,r.memoizedProps)}break;case 27:Ri(n,e),Li(e),c&512&&(kn||r===null||Va(r,r.return)),r!==null&&c&4&&md(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Ri(n,e),Li(e),c&512&&(kn||r===null||Va(r,r.return)),e.flags&32){d=e.stateNode;try{Nn(d,"")}catch(le){un(e,e.return,le)}}c&4&&e.stateNode!=null&&(d=e.memoizedProps,md(e,d,r!==null?r.memoizedProps:d)),c&1024&&(vd=!0);break;case 6:if(Ri(n,e),Li(e),c&4){if(e.stateNode===null)throw Error(s(162));c=e.memoizedProps,r=e.stateNode;try{r.nodeValue=c}catch(le){un(e,e.return,le)}}break;case 3:if(rf=null,d=Ma,Ma=nf(n.containerInfo),Ri(n,e),Ma=d,Li(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{il(n.containerInfo)}catch(le){un(e,e.return,le)}vd&&(vd=!1,t0(e));break;case 4:c=Ma,Ma=nf(e.stateNode.containerInfo),Ri(n,e),Li(e),Ma=c;break;case 12:Ri(n,e),Li(e);break;case 31:Ri(n,e),Li(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Gu(e,c)));break;case 13:Ri(n,e),Li(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Wu=R()),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Gu(e,c)));break;case 22:d=e.memoizedState!==null;var J=r!==null&&r.memoizedState!==null,ht=_r,Rt=kn;if(_r=ht||d,kn=Rt||J,Ri(n,e),kn=Rt,_r=ht,Li(e),c&8192)t:for(n=e.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(r===null||J||_r||kn||$s(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){J=r=n;try{if(m=J.stateNode,d)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{O=J.stateNode;var Ut=J.memoizedProps.style,gt=Ut!=null&&Ut.hasOwnProperty("display")?Ut.display:null;O.style.display=gt==null||typeof gt=="boolean"?"":(""+gt).trim()}}catch(le){un(J,J.return,le)}}}else if(n.tag===6){if(r===null){J=n;try{J.stateNode.nodeValue=d?"":J.memoizedProps}catch(le){un(J,J.return,le)}}}else if(n.tag===18){if(r===null){J=n;try{var Mt=J.stateNode;d?V0(Mt,!0):V0(J.stateNode,!1)}catch(le){un(J,J.return,le)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}c&4&&(c=e.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,Gu(e,r))));break;case 19:Ri(n,e),Li(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Gu(e,c)));break;case 30:break;case 21:break;default:Ri(n,e),Li(e)}}function Li(e){var n=e.flags;if(n&2){try{for(var r,c=e.return;c!==null;){if(jg(c)){r=c;break}c=c.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var d=r.stateNode,m=_d(e);ku(e,m,d);break;case 5:var T=r.stateNode;r.flags&32&&(Nn(T,""),r.flags&=-33);var O=_d(e);ku(e,O,T);break;case 3:case 4:var J=r.stateNode.containerInfo,ht=_d(e);gd(e,ht,J);break;default:throw Error(s(161))}}catch(Rt){un(e,e.return,Rt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function t0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function vr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zg(e,n.alternate,n),n=n.sibling}function $s(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ts(4,n,n.return),$s(n);break;case 1:Va(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Vg(n,n.return,r),$s(n);break;case 27:xc(n.stateNode);case 26:case 5:Va(n,n.return),$s(n);break;case 22:n.memoizedState===null&&$s(n);break;case 30:$s(n);break;default:$s(n)}e=e.sibling}}function xr(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var c=n.alternate,d=e,m=n,T=m.flags;switch(m.tag){case 0:case 11:case 15:xr(d,m,r),cc(4,m);break;case 1:if(xr(d,m,r),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ht){un(c,c.return,ht)}if(c=m,d=c.updateQueue,d!==null){var O=c.stateNode;try{var J=d.shared.hiddenCallbacks;if(J!==null)for(d.shared.hiddenCallbacks=null,d=0;d<J.length;d++)D_(J[d],O)}catch(ht){un(c,c.return,ht)}}r&&T&64&&Gg(m),uc(m,m.return);break;case 27:Xg(m);case 26:case 5:xr(d,m,r),r&&c===null&&T&4&&Wg(m),uc(m,m.return);break;case 12:xr(d,m,r);break;case 31:xr(d,m,r),r&&T&4&&Jg(d,m);break;case 13:xr(d,m,r),r&&T&4&&Qg(d,m);break;case 22:m.memoizedState===null&&xr(d,m,r),uc(m,m.return);break;case 30:break;default:xr(d,m,r)}n=n.sibling}}function xd(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Kl(r))}function yd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kl(e))}function Ea(e,n,r,c){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)e0(e,n,r,c),n=n.sibling}function e0(e,n,r,c){var d=n.flags;switch(n.tag){case 0:case 11:case 15:Ea(e,n,r,c),d&2048&&cc(9,n);break;case 1:Ea(e,n,r,c);break;case 3:Ea(e,n,r,c),d&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kl(e)));break;case 12:if(d&2048){Ea(e,n,r,c),e=n.stateNode;try{var m=n.memoizedProps,T=m.id,O=m.onPostCommit;typeof O=="function"&&O(T,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(J){un(n,n.return,J)}}else Ea(e,n,r,c);break;case 31:Ea(e,n,r,c);break;case 13:Ea(e,n,r,c);break;case 23:break;case 22:m=n.stateNode,T=n.alternate,n.memoizedState!==null?m._visibility&2?Ea(e,n,r,c):fc(e,n):m._visibility&2?Ea(e,n,r,c):(m._visibility|=2,Xo(e,n,r,c,(n.subtreeFlags&10256)!==0||!1)),d&2048&&xd(T,n);break;case 24:Ea(e,n,r,c),d&2048&&yd(n.alternate,n);break;default:Ea(e,n,r,c)}}function Xo(e,n,r,c,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var m=e,T=n,O=r,J=c,ht=T.flags;switch(T.tag){case 0:case 11:case 15:Xo(m,T,O,J,d),cc(8,T);break;case 23:break;case 22:var Rt=T.stateNode;T.memoizedState!==null?Rt._visibility&2?Xo(m,T,O,J,d):fc(m,T):(Rt._visibility|=2,Xo(m,T,O,J,d)),d&&ht&2048&&xd(T.alternate,T);break;case 24:Xo(m,T,O,J,d),d&&ht&2048&&yd(T.alternate,T);break;default:Xo(m,T,O,J,d)}n=n.sibling}}function fc(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,c=n,d=c.flags;switch(c.tag){case 22:fc(r,c),d&2048&&xd(c.alternate,c);break;case 24:fc(r,c),d&2048&&yd(c.alternate,c);break;default:fc(r,c)}n=n.sibling}}var hc=8192;function qo(e,n,r){if(e.subtreeFlags&hc)for(e=e.child;e!==null;)n0(e,n,r),e=e.sibling}function n0(e,n,r){switch(e.tag){case 26:qo(e,n,r),e.flags&hc&&e.memoizedState!==null&&hb(r,Ma,e.memoizedState,e.memoizedProps);break;case 5:qo(e,n,r);break;case 3:case 4:var c=Ma;Ma=nf(e.stateNode.containerInfo),qo(e,n,r),Ma=c;break;case 22:e.memoizedState===null&&(c=e.alternate,c!==null&&c.memoizedState!==null?(c=hc,hc=16777216,qo(e,n,r),hc=c):qo(e,n,r));break;default:qo(e,n,r)}}function i0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function dc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var c=n[r];Qn=c,r0(c,e)}i0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)a0(e),e=e.sibling}function a0(e){switch(e.tag){case 0:case 11:case 15:dc(e),e.flags&2048&&ts(9,e,e.return);break;case 3:dc(e);break;case 12:dc(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vu(e)):dc(e);break;default:dc(e)}}function Vu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var c=n[r];Qn=c,r0(c,e)}i0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ts(8,n,n.return),Vu(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Vu(n));break;default:Vu(n)}e=e.sibling}}function r0(e,n){for(;Qn!==null;){var r=Qn;switch(r.tag){case 0:case 11:case 15:ts(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Kl(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Qn=c;else t:for(r=e;Qn!==null;){c=Qn;var d=c.sibling,m=c.return;if(Yg(c),c===r){Qn=null;break t}if(d!==null){d.return=m,Qn=d;break t}Qn=m}}}var wS={getCacheForType:function(e){var n=ai(Bn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return ai(Bn).controller.signal}},CS=typeof WeakMap=="function"?WeakMap:Map,on=0,vn=null,He=null,Ve=0,cn=0,Xi=null,es=!1,Zo=!1,Sd=!1,yr=0,Pn=0,ns=0,to=0,bd=0,qi=0,Yo=0,pc=null,Di=null,Md=!1,Wu=0,s0=0,ju=1/0,Xu=null,is=null,Xn=0,as=null,Ko=null,Sr=0,Ed=0,Td=null,o0=null,mc=0,Ad=null;function Zi(){return(on&2)!==0&&Ve!==0?Ve&-Ve:G.T!==null?Pd():Bi()}function l0(){if(qi===0)if((Ve&536870912)===0||Fe){var e=Ht;Ht<<=1,(Ht&3932160)===0&&(Ht=262144),qi=e}else qi=536870912;return e=Wi.current,e!==null&&(e.flags|=32),qi}function Pi(e,n,r){(e===vn&&(cn===2||cn===9)||e.cancelPendingCommit!==null)&&(Jo(e,0),rs(e,Ve,qi,!1)),Vn(e,r),((on&2)===0||e!==vn)&&(e===vn&&((on&2)===0&&(to|=r),Pn===4&&rs(e,Ve,qi,!1)),Wa(e))}function c0(e,n,r){if((on&6)!==0)throw Error(s(327));var c=!r&&(n&127)===0&&(n&e.expiredLanes)===0||ee(e,n),d=c?DS(e,n):Cd(e,n,!0),m=c;do{if(d===0){Zo&&!c&&rs(e,n,0,!1);break}else{if(r=e.current.alternate,m&&!RS(r)){d=Cd(e,n,!1),m=!1;continue}if(d===2){if(m=n,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){n=T;t:{var O=e;d=pc;var J=O.current.memoizedState.isDehydrated;if(J&&(Jo(O,T).flags|=256),T=Cd(O,T,!1),T!==2){if(Sd&&!J){O.errorRecoveryDisabledLanes|=m,to|=m,d=4;break t}m=Di,Di=d,m!==null&&(Di===null?Di=m:Di.push.apply(Di,m))}d=T}if(m=!1,d!==2)continue}}if(d===1){Jo(e,0),rs(e,n,0,!0);break}t:{switch(c=e,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:rs(c,n,qi,!es);break t;case 2:Di=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(d=Wu+300-R(),10<d)){if(rs(c,n,qi,!es),Et(c,0,!0)!==0)break t;Sr=n,c.timeoutHandle=H0(u0.bind(null,c,r,Di,Xu,Md,n,qi,to,Yo,es,m,"Throttled",-0,0),d);break t}u0(c,r,Di,Xu,Md,n,qi,to,Yo,es,m,null,-0,0)}}break}while(!0);Wa(e)}function u0(e,n,r,c,d,m,T,O,J,ht,Rt,Ut,gt,Mt){if(e.timeoutHandle=-1,Ut=n.subtreeFlags,Ut&8192||(Ut&16785408)===16785408){Ut={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Mi},n0(n,m,Ut);var le=(m&62914560)===m?Wu-R():(m&4194048)===m?s0-R():0;if(le=db(Ut,le),le!==null){Sr=m,e.cancelPendingCommit=le(v0.bind(null,e,n,m,r,c,d,T,O,J,Rt,Ut,null,gt,Mt)),rs(e,m,T,!ht);return}}v0(e,n,m,r,c,d,T,O,J)}function RS(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var d=r[c],m=d.getSnapshot;d=d.value;try{if(!Kn(m(),d))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rs(e,n,r,c){n&=~bd,n&=~to,e.suspendedLanes|=n,e.pingedLanes&=~n,c&&(e.warmLanes|=n),c=e.expirationTimes;for(var d=n;0<d;){var m=31-qt(d),T=1<<m;c[m]=-1,d&=~T}r!==0&&bs(e,r,n)}function qu(){return(on&6)===0?(_c(0),!1):!0}function wd(){if(He!==null){if(cn===0)var e=He.return;else e=He,ba=Ga=null,Vh(e),ko=null,Ql=0,e=He;for(;e!==null;)kg(e.alternate,e),e=e.return;He=null}}function Jo(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,YS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Sr=0,wd(),vn=e,He=r=oa(e.current,null),Ve=n,cn=0,Xi=null,es=!1,Zo=ee(e,n),Sd=!1,Yo=qi=bd=to=ns=Pn=0,Di=pc=null,Md=!1,(n&8)!==0&&(n|=n&32);var c=e.entangledLanes;if(c!==0)for(e=e.entanglements,c&=n;0<c;){var d=31-qt(c),m=1<<d;n|=e[d],c&=~m}return yr=n,ks(),r}function f0(e,n){Ce=null,G.H=sc,n===Ho||n===bu?(n=w_(),cn=3):n===Dh?(n=w_(),cn=4):cn=n===rd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xi=n,He===null&&(Pn=1,zu(e,l(n,e.current)))}function h0(){var e=Wi.current;return e===null?!0:(Ve&4194048)===Ve?la===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===la:!1}function d0(){var e=G.H;return G.H=sc,e===null?sc:e}function p0(){var e=G.A;return G.A=wS,e}function Zu(){Pn=4,es||(Ve&4194048)!==Ve&&Wi.current!==null||(Zo=!0),(ns&134217727)===0&&(to&134217727)===0||vn===null||rs(vn,Ve,qi,!1)}function Cd(e,n,r){var c=on;on|=2;var d=d0(),m=p0();(vn!==e||Ve!==n)&&(Xu=null,Jo(e,n)),n=!1;var T=Pn;t:do try{if(cn!==0&&He!==null){var O=He,J=Xi;switch(cn){case 8:wd(),T=6;break t;case 3:case 2:case 9:case 6:Wi.current===null&&(n=!0);var ht=cn;if(cn=0,Xi=null,Qo(e,O,J,ht),r&&Zo){T=0;break t}break;default:ht=cn,cn=0,Xi=null,Qo(e,O,J,ht)}}LS(),T=Pn;break}catch(Rt){f0(e,Rt)}while(!0);return n&&e.shellSuspendCounter++,ba=Ga=null,on=c,G.H=d,G.A=m,He===null&&(vn=null,Ve=0,ks()),T}function LS(){for(;He!==null;)m0(He)}function DS(e,n){var r=on;on|=2;var c=d0(),d=p0();vn!==e||Ve!==n?(Xu=null,ju=R()+500,Jo(e,n)):Zo=ee(e,n);t:do try{if(cn!==0&&He!==null){n=He;var m=Xi;e:switch(cn){case 1:cn=0,Xi=null,Qo(e,n,m,1);break;case 2:case 9:if(T_(m)){cn=0,Xi=null,_0(n);break}n=function(){cn!==2&&cn!==9||vn!==e||(cn=7),Wa(e)},m.then(n,n);break t;case 3:cn=7;break t;case 4:cn=5;break t;case 7:T_(m)?(cn=0,Xi=null,_0(n)):(cn=0,Xi=null,Qo(e,n,m,7));break;case 5:var T=null;switch(He.tag){case 26:T=He.memoizedState;case 5:case 27:var O=He;if(T?ev(T):O.stateNode.complete){cn=0,Xi=null;var J=O.sibling;if(J!==null)He=J;else{var ht=O.return;ht!==null?(He=ht,Yu(ht)):He=null}break e}}cn=0,Xi=null,Qo(e,n,m,5);break;case 6:cn=0,Xi=null,Qo(e,n,m,6);break;case 8:wd(),Pn=6;break t;default:throw Error(s(462))}}PS();break}catch(Rt){f0(e,Rt)}while(!0);return ba=Ga=null,G.H=c,G.A=d,on=r,He!==null?0:(vn=null,Ve=0,ks(),Pn)}function PS(){for(;He!==null&&!ce();)m0(He)}function m0(e){var n=Fg(e.alternate,e,yr);e.memoizedProps=e.pendingProps,n===null?Yu(e):He=n}function _0(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Ug(r,n,n.pendingProps,n.type,void 0,Ve);break;case 11:n=Ug(r,n,n.pendingProps,n.type.render,n.ref,Ve);break;case 5:Vh(n);default:kg(r,n),n=He=jl(n,yr),n=Fg(r,n,yr)}e.memoizedProps=e.pendingProps,n===null?Yu(e):He=n}function Qo(e,n,r,c){ba=Ga=null,Vh(n),ko=null,Ql=0;var d=n.return;try{if(yS(e,d,n,r,Ve)){Pn=1,zu(e,l(r,e.current)),He=null;return}}catch(m){if(d!==null)throw He=d,m;Pn=1,zu(e,l(r,e.current)),He=null;return}n.flags&32768?(Fe||c===1?e=!0:Zo||(Ve&536870912)!==0?e=!1:(es=e=!0,(c===2||c===9||c===3||c===6)&&(c=Wi.current,c!==null&&c.tag===13&&(c.flags|=16384))),g0(n,e)):Yu(n)}function Yu(e){var n=e;do{if((n.flags&32768)!==0){g0(n,es);return}e=n.return;var r=MS(n.alternate,n,yr);if(r!==null){He=r;return}if(n=n.sibling,n!==null){He=n;return}He=n=e}while(n!==null);Pn===0&&(Pn=5)}function g0(e,n){do{var r=ES(e.alternate,e);if(r!==null){r.flags&=32767,He=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){He=e;return}He=e=r}while(e!==null);Pn=6,He=null}function v0(e,n,r,c,d,m,T,O,J){e.cancelPendingCommit=null;do Ku();while(Xn!==0);if((on&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(m=n.lanes|n.childLanes,m|=Uo,Ii(e,r,m,T,O,J),e===vn&&(He=vn=null,Ve=0),Ko=n,as=e,Sr=r,Ed=m,Td=d,o0=c,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zS(Tt,function(){return M0(),null})):(e.callbackNode=null,e.callbackPriority=0),c=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||c){c=G.T,G.T=null,d=q.p,q.p=2,T=on,on|=4;try{TS(e,n,r)}finally{on=T,q.p=d,G.T=c}}Xn=1,x0(),y0(),S0()}}function x0(){if(Xn===1){Xn=0;var e=as,n=Ko,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=G.T,G.T=null;var c=q.p;q.p=2;var d=on;on|=4;try{$g(n,e);var m=Hd,T=zs(e.containerInfo),O=m.focusedElem,J=m.selectionRange;if(T!==O&&O&&O.ownerDocument&&Ro(O.ownerDocument.documentElement,O)){if(J!==null&&Oa(O)){var ht=J.start,Rt=J.end;if(Rt===void 0&&(Rt=ht),"selectionStart"in O)O.selectionStart=ht,O.selectionEnd=Math.min(Rt,O.value.length);else{var Ut=O.ownerDocument||document,gt=Ut&&Ut.defaultView||window;if(gt.getSelection){var Mt=gt.getSelection(),le=O.textContent.length,ye=Math.min(J.start,le),_n=J.end===void 0?ye:Math.min(J.end,le);!Mt.extend&&ye>_n&&(T=_n,_n=ye,ye=T);var st=Os(O,ye),$=Os(O,_n);if(st&&$&&(Mt.rangeCount!==1||Mt.anchorNode!==st.node||Mt.anchorOffset!==st.offset||Mt.focusNode!==$.node||Mt.focusOffset!==$.offset)){var ut=Ut.createRange();ut.setStart(st.node,st.offset),Mt.removeAllRanges(),ye>_n?(Mt.addRange(ut),Mt.extend($.node,$.offset)):(ut.setEnd($.node,$.offset),Mt.addRange(ut))}}}}for(Ut=[],Mt=O;Mt=Mt.parentNode;)Mt.nodeType===1&&Ut.push({element:Mt,left:Mt.scrollLeft,top:Mt.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<Ut.length;O++){var Dt=Ut[O];Dt.element.scrollLeft=Dt.left,Dt.element.scrollTop=Dt.top}}cf=!!Fd,Hd=Fd=null}finally{on=d,q.p=c,G.T=r}}e.current=n,Xn=2}}function y0(){if(Xn===2){Xn=0;var e=as,n=Ko,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=G.T,G.T=null;var c=q.p;q.p=2;var d=on;on|=4;try{Zg(e,n.alternate,n)}finally{on=d,q.p=c,G.T=r}}Xn=3}}function S0(){if(Xn===4||Xn===3){Xn=0,W();var e=as,n=Ko,r=Sr,c=o0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xn=5:(Xn=0,Ko=as=null,b0(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(is=null),ue(r),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Bt,n,void 0,(n.current.flags&128)===128)}catch{}if(c!==null){n=G.T,d=q.p,q.p=2,G.T=null;try{for(var m=e.onRecoverableError,T=0;T<c.length;T++){var O=c[T];m(O.value,{componentStack:O.stack})}}finally{G.T=n,q.p=d}}(Sr&3)!==0&&Ku(),Wa(e),d=e.pendingLanes,(r&261930)!==0&&(d&42)!==0?e===Ad?mc++:(mc=0,Ad=e):mc=0,_c(0)}}function b0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kl(n)))}function Ku(){return x0(),y0(),S0(),M0()}function M0(){if(Xn!==5)return!1;var e=as,n=Ed;Ed=0;var r=ue(Sr),c=G.T,d=q.p;try{q.p=32>r?32:r,G.T=null,r=Td,Td=null;var m=as,T=Sr;if(Xn=0,Ko=as=null,Sr=0,(on&6)!==0)throw Error(s(331));var O=on;if(on|=4,a0(m.current),e0(m,m.current,T,r),on=O,_c(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Bt,m)}catch{}return!0}finally{q.p=d,G.T=c,b0(e,n)}}function E0(e,n,r){n=l(r,n),n=ad(e.stateNode,n,2),e=Jr(e,n,2),e!==null&&(Vn(e,2),Wa(e))}function un(e,n,r){if(e.tag===3)E0(e,e,r);else for(;n!==null;){if(n.tag===3){E0(n,e,r);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(is===null||!is.has(c))){e=l(r,e),r=Tg(2),c=Jr(n,r,2),c!==null&&(Ag(r,c,n,e),Vn(c,2),Wa(c));break}}n=n.return}}function Rd(e,n,r){var c=e.pingCache;if(c===null){c=e.pingCache=new CS;var d=new Set;c.set(n,d)}else d=c.get(n),d===void 0&&(d=new Set,c.set(n,d));d.has(r)||(Sd=!0,d.add(r),e=US.bind(null,e,n,r),n.then(e,e))}function US(e,n,r){var c=e.pingCache;c!==null&&c.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,vn===e&&(Ve&r)===r&&(Pn===4||Pn===3&&(Ve&62914560)===Ve&&300>R()-Wu?(on&2)===0&&Jo(e,0):bd|=r,Yo===Ve&&(Yo=0)),Wa(e)}function T0(e,n){n===0&&(n=rn()),e=sa(e,n),e!==null&&(Vn(e,n),Wa(e))}function NS(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),T0(e,r)}function OS(e,n){var r=0;switch(e.tag){case 31:case 13:var c=e.stateNode,d=e.memoizedState;d!==null&&(r=d.retryLane);break;case 19:c=e.stateNode;break;case 22:c=e.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(n),T0(e,r)}function zS(e,n){return Be(e,n)}var Ju=null,$o=null,Ld=!1,Qu=!1,Dd=!1,ss=0;function Wa(e){e!==$o&&e.next===null&&($o===null?Ju=$o=e:$o=$o.next=e),Qu=!0,Ld||(Ld=!0,BS())}function _c(e,n){if(!Dd&&Qu){Dd=!0;do for(var r=!1,c=Ju;c!==null;){if(e!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var T=c.suspendedLanes,O=c.pingedLanes;m=(1<<31-qt(42|e)+1)-1,m&=d&~(T&~O),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,R0(c,m))}else m=Ve,m=Et(c,c===vn?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||ee(c,m)||(r=!0,R0(c,m));c=c.next}while(r);Dd=!1}}function IS(){A0()}function A0(){Qu=Ld=!1;var e=0;ss!==0&&ZS()&&(e=ss);for(var n=R(),r=null,c=Ju;c!==null;){var d=c.next,m=w0(c,n);m===0?(c.next=null,r===null?Ju=d:r.next=d,d===null&&($o=r)):(r=c,(e!==0||(m&3)!==0)&&(Qu=!0)),c=d}Xn!==0&&Xn!==5||_c(e),ss!==0&&(ss=0)}function w0(e,n){for(var r=e.suspendedLanes,c=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-qt(m),O=1<<T,J=d[T];J===-1?((O&r)===0||(O&c)!==0)&&(d[T]=be(O,n)):J<=n&&(e.expiredLanes|=O),m&=~O}if(n=vn,r=Ve,r=Et(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c=e.callbackNode,r===0||e===n&&(cn===2||cn===9)||e.cancelPendingCommit!==null)return c!==null&&c!==null&&Ze(c),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ee(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(c!==null&&Ze(c),ue(r)){case 2:case 8:r=Nt;break;case 32:r=Tt;break;case 268435456:r=Gt;break;default:r=Tt}return c=C0.bind(null,e),r=Be(r,c),e.callbackPriority=n,e.callbackNode=r,n}return c!==null&&c!==null&&Ze(c),e.callbackPriority=2,e.callbackNode=null,2}function C0(e,n){if(Xn!==0&&Xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Ku()&&e.callbackNode!==r)return null;var c=Ve;return c=Et(e,e===vn?c:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c===0?null:(c0(e,c,n),w0(e,R()),e.callbackNode!=null&&e.callbackNode===r?C0.bind(null,e):null)}function R0(e,n){if(Ku())return null;c0(e,n,!0)}function BS(){KS(function(){(on&6)!==0?Be(Ct,IS):A0()})}function Pd(){if(ss===0){var e=Bo;e===0&&(e=kt,kt<<=1,(kt&261888)===0&&(kt=256)),ss=e}return ss}function L0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Or(""+e)}function D0(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function FS(e,n,r,c,d){if(n==="submit"&&r&&r.stateNode===d){var m=L0((d[An]||null).action),T=c.submitter;T&&(n=(n=T[An]||null)?L0(n.formAction):T.getAttribute("formAction"),n!==null&&(m=n,T=null));var O=new bo("action","action",null,c,d);e.push({event:O,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ss!==0){var J=T?D0(d,T):new FormData(d);Qh(r,{pending:!0,data:J,method:d.method,action:m},null,J)}}else typeof m=="function"&&(O.preventDefault(),J=T?D0(d,T):new FormData(d),Qh(r,{pending:!0,data:J,method:d.method,action:m},m,J))},currentTarget:d}]})}}for(var Ud=0;Ud<Ba.length;Ud++){var Nd=Ba[Ud],HS=Nd.toLowerCase(),kS=Nd[0].toUpperCase()+Nd.slice(1);Ti(HS,"on"+kS)}Ti(Bs,"onAnimationEnd"),Ti(_u,"onAnimationIteration"),Ti(Fs,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Mh,"onTransitionRun"),Ti(gu,"onTransitionStart"),Ti(Eh,"onTransitionCancel"),Ti(Xr,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gc));function P0(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var c=e[r],d=c.event;c=c.listeners;t:{var m=void 0;if(n)for(var T=c.length-1;0<=T;T--){var O=c[T],J=O.instance,ht=O.currentTarget;if(O=O.listener,J!==m&&d.isPropagationStopped())break t;m=O,d.currentTarget=ht;try{m(d)}catch(Rt){Hs(Rt)}d.currentTarget=null,m=J}else for(T=0;T<c.length;T++){if(O=c[T],J=O.instance,ht=O.currentTarget,O=O.listener,J!==m&&d.isPropagationStopped())break t;m=O,d.currentTarget=ht;try{m(d)}catch(Rt){Hs(Rt)}d.currentTarget=null,m=J}}}}function ke(e,n){var r=n[mi];r===void 0&&(r=n[mi]=new Set);var c=e+"__bubble";r.has(c)||(U0(n,e,2,!1),r.add(c))}function Od(e,n,r){var c=0;n&&(c|=4),U0(r,e,c,n)}var $u="_reactListening"+Math.random().toString(36).slice(2);function zd(e){if(!e[$u]){e[$u]=!0,yt.forEach(function(r){r!=="selectionchange"&&(GS.has(r)||Od(r,!1,e),Od(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$u]||(n[$u]=!0,Od("selectionchange",!1,n))}}function U0(e,n,r,c){switch(lv(n)){case 2:var d=_b;break;case 8:d=gb;break;default:d=Jd}r=d.bind(null,n,r,e),d=void 0,!As||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),c?d!==void 0?e.addEventListener(n,r,{capture:!0,passive:d}):e.addEventListener(n,r,!0):d!==void 0?e.addEventListener(n,r,{passive:d}):e.addEventListener(n,r,!1)}function Id(e,n,r,c,d){var m=c;if((n&1)===0&&(n&2)===0&&c!==null)t:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===d)break;if(T===4)for(T=c.return;T!==null;){var J=T.tag;if((J===3||J===4)&&T.stateNode.containerInfo===d)return;T=T.return}for(;O!==null;){if(T=_a(O),T===null)return;if(J=T.tag,J===5||J===6||J===26||J===27){c=m=T;continue t}O=O.parentNode}}c=c.return}Nl(function(){var ht=m,Rt=Ts(r),Ut=[];t:{var gt=vu.get(e);if(gt!==void 0){var Mt=bo,le=e;switch(e){case"keypress":if(ws(r)===0)break t;case"keydown":case"keyup":Mt=au;break;case"focusin":le="focus",Mt=Il;break;case"focusout":le="blur",Mt=Il;break;case"beforeblur":case"afterblur":Mt=Il;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Mt=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Mt=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Mt=gh;break;case Bs:case _u:case Fs:Mt=Bl;break;case Xr:Mt=ou;break;case"scroll":case"scrollend":Mt=Ge;break;case"wheel":Mt=or;break;case"copy":case"cut":case"paste":Mt=na;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Mt=ru;break;case"toggle":case"beforetoggle":Mt=Ls}var ye=(n&4)!==0,_n=!ye&&(e==="scroll"||e==="scrollend"),st=ye?gt!==null?gt+"Capture":null:gt;ye=[];for(var $=ht,ut;$!==null;){var Dt=$;if(ut=Dt.stateNode,Dt=Dt.tag,Dt!==5&&Dt!==26&&Dt!==27||ut===null||st===null||(Dt=rr($,st),Dt!=null&&ye.push(vc($,Dt,ut))),_n)break;$=$.return}0<ye.length&&(gt=new Mt(gt,le,null,r,Rt),Ut.push({event:gt,listeners:ye}))}}if((n&7)===0){t:{if(gt=e==="mouseover"||e==="pointerover",Mt=e==="mouseout"||e==="pointerout",gt&&r!==So&&(le=r.relatedTarget||r.fromElement)&&(_a(le)||le[$i]))break t;if((Mt||gt)&&(gt=Rt.window===Rt?Rt:(gt=Rt.ownerDocument)?gt.defaultView||gt.parentWindow:window,Mt?(le=r.relatedTarget||r.toElement,Mt=ht,le=le?_a(le):null,le!==null&&(_n=f(le),ye=le.tag,le!==_n||ye!==5&&ye!==27&&ye!==6)&&(le=null)):(Mt=null,le=ht),Mt!==le)){if(ye=$c,Dt="onMouseLeave",st="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ye=ru,Dt="onPointerLeave",st="onPointerEnter",$="pointer"),_n=Mt==null?gt:ta(Mt),ut=le==null?gt:ta(le),gt=new ye(Dt,$+"leave",Mt,r,Rt),gt.target=_n,gt.relatedTarget=ut,Dt=null,_a(Rt)===ht&&(ye=new ye(st,$+"enter",le,r,Rt),ye.target=ut,ye.relatedTarget=_n,Dt=ye),_n=Dt,Mt&&le)e:{for(ye=VS,st=Mt,$=le,ut=0,Dt=st;Dt;Dt=ye(Dt))ut++;Dt=0;for(var ge=$;ge;ge=ye(ge))Dt++;for(;0<ut-Dt;)st=ye(st),ut--;for(;0<Dt-ut;)$=ye($),Dt--;for(;ut--;){if(st===$||$!==null&&st===$.alternate){ye=st;break e}st=ye(st),$=ye($)}ye=null}else ye=null;Mt!==null&&N0(Ut,gt,Mt,ye,!1),le!==null&&_n!==null&&N0(Ut,_n,le,ye,!0)}}t:{if(gt=ht?ta(ht):window,Mt=gt.nodeName&&gt.nodeName.toLowerCase(),Mt==="select"||Mt==="input"&&gt.type==="file")var en=Ns;else if(ia(gt))if(fu)en=bh;else{en=Sh;var fe=xa}else Mt=gt.nodeName,!Mt||Mt.toLowerCase()!=="input"||gt.type!=="checkbox"&&gt.type!=="radio"?ht&&Pa(ht.elementType)&&(en=Ns):en=Gr;if(en&&(en=en(e,ht))){uu(Ut,en,r,Rt);break t}fe&&fe(e,gt,ht),e==="focusout"&&ht&&gt.type==="number"&&ht.memoizedProps.value!=null&&Wn(gt,"number",gt.value)}switch(fe=ht?ta(ht):window,e){case"focusin":(ia(fe)||fe.contentEditable==="true")&&(za=fe,Do=ht,Is=null);break;case"focusout":Is=Do=za=null;break;case"mousedown":Wr=!0;break;case"contextmenu":case"mouseup":case"dragend":Wr=!1,pu(Ut,r,Rt);break;case"selectionchange":if(Lo)break;case"keydown":case"keyup":pu(Ut,r,Rt)}var Pe;if(Eo)t:{switch(e){case"compositionstart":var We="onCompositionStart";break t;case"compositionend":We="onCompositionEnd";break t;case"compositionupdate":We="onCompositionUpdate";break t}We=void 0}else Fr?cu(e,r)&&(We="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(We="onCompositionStart");We&&(To&&r.locale!=="ko"&&(Fr||We!=="onCompositionStart"?We==="onCompositionEnd"&&Fr&&(Pe=Ua()):(ea=Rt,sr="value"in ea?ea.value:ea.textContent,Fr=!0)),fe=tf(ht,We),0<fe.length&&(We=new Fl(We,e,null,r,Rt),Ut.push({event:We,listeners:fe}),Pe?We.data=Pe:(Pe=Vl(r),Pe!==null&&(We.data=Pe)))),(Pe=xh?Vi(e,r):Hr(e,r))&&(We=tf(ht,"onBeforeInput"),0<We.length&&(fe=new Fl("onBeforeInput","beforeinput",null,r,Rt),Ut.push({event:fe,listeners:We}),fe.data=Pe)),FS(Ut,e,ht,r,Rt)}P0(Ut,n)})}function vc(e,n,r){return{instance:e,listener:n,currentTarget:r}}function tf(e,n){for(var r=n+"Capture",c=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=rr(e,r),d!=null&&c.unshift(vc(e,d,m)),d=rr(e,n),d!=null&&c.push(vc(e,d,m))),e.tag===3)return c;e=e.return}return[]}function VS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N0(e,n,r,c,d){for(var m=n._reactName,T=[];r!==null&&r!==c;){var O=r,J=O.alternate,ht=O.stateNode;if(O=O.tag,J!==null&&J===c)break;O!==5&&O!==26&&O!==27||ht===null||(J=ht,d?(ht=rr(r,m),ht!=null&&T.unshift(vc(r,ht,J))):d||(ht=rr(r,m),ht!=null&&T.push(vc(r,ht,J)))),r=r.return}T.length!==0&&e.push({event:n,listeners:T})}var WS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function O0(e){return(typeof e=="string"?e:""+e).replace(WS,`
`).replace(jS,"")}function z0(e,n){return n=O0(n),O0(e)===n}function mn(e,n,r,c,d,m){switch(r){case"children":typeof c=="string"?n==="body"||n==="textarea"&&c===""||Nn(e,c):(typeof c=="number"||typeof c=="bigint")&&n!=="body"&&Nn(e,""+c);break;case"className":ne(e,"class",c);break;case"tabIndex":ne(e,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(e,r,c);break;case"style":Fi(e,c,m);break;case"data":if(n!=="object"){ne(e,"data",c);break}case"src":case"href":if(c===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=Or(""+c),e.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(n!=="input"&&mn(e,n,"name",d.name,d,null),mn(e,n,"formEncType",d.formEncType,d,null),mn(e,n,"formMethod",d.formMethod,d,null),mn(e,n,"formTarget",d.formTarget,d,null)):(mn(e,n,"encType",d.encType,d,null),mn(e,n,"method",d.method,d,null),mn(e,n,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=Or(""+c),e.setAttribute(r,c);break;case"onClick":c!=null&&(e.onclick=Mi);break;case"onScroll":c!=null&&ke("scroll",e);break;case"onScrollEnd":c!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(r=c.__html,r!=null){if(d.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":e.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){e.removeAttribute("xlink:href");break}r=Or(""+c),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""+c):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":c===!0?e.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,c):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?e.setAttribute(r,c):e.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?e.removeAttribute(r):e.setAttribute(r,c);break;case"popover":ke("beforetoggle",e),ke("toggle",e),jt(e,"popover",c);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":jt(e,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=yo.get(r)||r,jt(e,r,c))}}function Bd(e,n,r,c,d,m){switch(r){case"style":Fi(e,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(r=c.__html,r!=null){if(d.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof c=="string"?Nn(e,c):(typeof c=="number"||typeof c=="bigint")&&Nn(e,""+c);break;case"onScroll":c!=null&&ke("scroll",e);break;case"onScrollEnd":c!=null&&ke("scrollend",e);break;case"onClick":c!=null&&(e.onclick=Mi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),n=r.slice(2,d?r.length-7:void 0),m=e[An]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(n,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,c,d);break t}r in e?e[r]=c:c===!0?e.setAttribute(r,""):jt(e,r,c)}}}function si(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var c=!1,d=!1,m;for(m in r)if(r.hasOwnProperty(m)){var T=r[m];if(T!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:mn(e,n,m,T,r,null)}}d&&mn(e,n,"srcSet",r.srcSet,r,null),c&&mn(e,n,"src",r.src,r,null);return;case"input":ke("invalid",e);var O=m=T=d=null,J=null,ht=null;for(c in r)if(r.hasOwnProperty(c)){var Rt=r[c];if(Rt!=null)switch(c){case"name":d=Rt;break;case"type":T=Rt;break;case"checked":J=Rt;break;case"defaultChecked":ht=Rt;break;case"value":m=Rt;break;case"defaultValue":O=Rt;break;case"children":case"dangerouslySetInnerHTML":if(Rt!=null)throw Error(s(137,n));break;default:mn(e,n,c,Rt,r,null)}}Yn(e,m,O,J,ht,T,d,!1);return;case"select":ke("invalid",e),c=T=m=null;for(d in r)if(r.hasOwnProperty(d)&&(O=r[d],O!=null))switch(d){case"value":m=O;break;case"defaultValue":T=O;break;case"multiple":c=O;default:mn(e,n,d,O,r,null)}n=m,r=T,e.multiple=!!c,n!=null?Ye(e,!!c,n,!1):r!=null&&Ye(e,!!c,r,!0);return;case"textarea":ke("invalid",e),m=d=c=null;for(T in r)if(r.hasOwnProperty(T)&&(O=r[T],O!=null))switch(T){case"value":c=O;break;case"defaultValue":d=O;break;case"children":m=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(91));break;default:mn(e,n,T,O,r,null)}yn(e,c,d,m);return;case"option":for(J in r)if(r.hasOwnProperty(J)&&(c=r[J],c!=null))switch(J){case"selected":e.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:mn(e,n,J,c,r,null)}return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(c=0;c<gc.length;c++)ke(gc[c],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ht in r)if(r.hasOwnProperty(ht)&&(c=r[ht],c!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:mn(e,n,ht,c,r,null)}return;default:if(Pa(n)){for(Rt in r)r.hasOwnProperty(Rt)&&(c=r[Rt],c!==void 0&&Bd(e,n,Rt,c,r,void 0));return}}for(O in r)r.hasOwnProperty(O)&&(c=r[O],c!=null&&mn(e,n,O,c,r,null))}function XS(e,n,r,c){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,T=null,O=null,J=null,ht=null,Rt=null;for(Mt in r){var Ut=r[Mt];if(r.hasOwnProperty(Mt)&&Ut!=null)switch(Mt){case"checked":break;case"value":break;case"defaultValue":J=Ut;default:c.hasOwnProperty(Mt)||mn(e,n,Mt,null,c,Ut)}}for(var gt in c){var Mt=c[gt];if(Ut=r[gt],c.hasOwnProperty(gt)&&(Mt!=null||Ut!=null))switch(gt){case"type":m=Mt;break;case"name":d=Mt;break;case"checked":ht=Mt;break;case"defaultChecked":Rt=Mt;break;case"value":T=Mt;break;case"defaultValue":O=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(s(137,n));break;default:Mt!==Ut&&mn(e,n,gt,Mt,c,Ut)}}ei(e,T,O,J,ht,Rt,m,d);return;case"select":Mt=T=O=gt=null;for(m in r)if(J=r[m],r.hasOwnProperty(m)&&J!=null)switch(m){case"value":break;case"multiple":Mt=J;default:c.hasOwnProperty(m)||mn(e,n,m,null,c,J)}for(d in c)if(m=c[d],J=r[d],c.hasOwnProperty(d)&&(m!=null||J!=null))switch(d){case"value":gt=m;break;case"defaultValue":O=m;break;case"multiple":T=m;default:m!==J&&mn(e,n,d,m,c,J)}n=O,r=T,c=Mt,gt!=null?Ye(e,!!r,gt,!1):!!c!=!!r&&(n!=null?Ye(e,!!r,n,!0):Ye(e,!!r,r?[]:"",!1));return;case"textarea":Mt=gt=null;for(O in r)if(d=r[O],r.hasOwnProperty(O)&&d!=null&&!c.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:mn(e,n,O,null,c,d)}for(T in c)if(d=c[T],m=r[T],c.hasOwnProperty(T)&&(d!=null||m!=null))switch(T){case"value":gt=d;break;case"defaultValue":Mt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&mn(e,n,T,d,c,m)}Ie(e,gt,Mt);return;case"option":for(var le in r)if(gt=r[le],r.hasOwnProperty(le)&&gt!=null&&!c.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:mn(e,n,le,null,c,gt)}for(J in c)if(gt=c[J],Mt=r[J],c.hasOwnProperty(J)&&gt!==Mt&&(gt!=null||Mt!=null))switch(J){case"selected":e.selected=gt&&typeof gt!="function"&&typeof gt!="symbol";break;default:mn(e,n,J,gt,c,Mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in r)gt=r[ye],r.hasOwnProperty(ye)&&gt!=null&&!c.hasOwnProperty(ye)&&mn(e,n,ye,null,c,gt);for(ht in c)if(gt=c[ht],Mt=r[ht],c.hasOwnProperty(ht)&&gt!==Mt&&(gt!=null||Mt!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:mn(e,n,ht,gt,c,Mt)}return;default:if(Pa(n)){for(var _n in r)gt=r[_n],r.hasOwnProperty(_n)&&gt!==void 0&&!c.hasOwnProperty(_n)&&Bd(e,n,_n,void 0,c,gt);for(Rt in c)gt=c[Rt],Mt=r[Rt],!c.hasOwnProperty(Rt)||gt===Mt||gt===void 0&&Mt===void 0||Bd(e,n,Rt,gt,c,Mt);return}}for(var st in r)gt=r[st],r.hasOwnProperty(st)&&gt!=null&&!c.hasOwnProperty(st)&&mn(e,n,st,null,c,gt);for(Ut in c)gt=c[Ut],Mt=r[Ut],!c.hasOwnProperty(Ut)||gt===Mt||gt==null&&Mt==null||mn(e,n,Ut,gt,c,Mt)}function I0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),c=0;c<r.length;c++){var d=r[c],m=d.transferSize,T=d.initiatorType,O=d.duration;if(m&&O&&I0(T)){for(T=0,O=d.responseEnd,c+=1;c<r.length;c++){var J=r[c],ht=J.startTime;if(ht>O)break;var Rt=J.transferSize,Ut=J.initiatorType;Rt&&I0(Ut)&&(J=J.responseEnd,T+=Rt*(J<O?1:(O-ht)/(J-ht)))}if(--c,n+=8*(m+T)/(d.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fd=null,Hd=null;function ef(e){return e.nodeType===9?e:e.ownerDocument}function B0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gd=null;function ZS(){var e=window.event;return e&&e.type==="popstate"?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,k0=typeof Promise=="function"?Promise:void 0,KS=typeof queueMicrotask=="function"?queueMicrotask:typeof k0<"u"?function(e){return k0.resolve(null).then(e).catch(JS)}:H0;function JS(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function G0(e,n){var r=n,c=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(c===0){e.removeChild(d),il(n);return}c--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")c++;else if(r==="html")xc(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,xc(r);for(var m=r.firstChild;m;){var T=m.nextSibling,O=m.nodeName;m[ar]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=T}}else r==="body"&&xc(e.ownerDocument.body);r=d}while(r);il(n)}function V0(e,n){var r=e;e=0;do{var c=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=c}while(r)}function Vd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Vd(r),Es(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function QS(e,n,r,c){for(;e.nodeType===1;){var d=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!c&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(c){if(!e[ar])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=ca(e.nextSibling),e===null)break}return null}function $S(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=ca(e.nextSibling),e===null))return null;return e}function W0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ca(e.nextSibling),e===null))return null;return e}function Wd(e){return e.data==="$?"||e.data==="$~"}function jd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tb(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var c=function(){n(),r.removeEventListener("DOMContentLoaded",c)};r.addEventListener("DOMContentLoaded",c),e._reactRetry=c}}function ca(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xd=null;function j0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return ca(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function X0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function q0(e,n,r){switch(n=ef(r),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function xc(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Es(e)}var ua=new Map,Z0=new Set;function nf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var br=q.d;q.d={f:eb,r:nb,D:ib,C:ab,L:rb,m:sb,X:lb,S:ob,M:cb};function eb(){var e=br.f(),n=qu();return e||n}function nb(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?fg(n):br.r(e)}var tl=typeof document>"u"?null:document;function Y0(e,n,r){var c=tl;if(c&&typeof n=="string"&&n){var d=_e(n);d='link[rel="'+e+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),Z0.has(d)||(Z0.add(d),e={rel:e,crossOrigin:r,href:n},c.querySelector(d)===null&&(n=c.createElement("link"),si(n,"link",e),tt(n),c.head.appendChild(n)))}}function ib(e){br.D(e),Y0("dns-prefetch",e,null)}function ab(e,n){br.C(e,n),Y0("preconnect",e,n)}function rb(e,n,r){br.L(e,n,r);var c=tl;if(c&&e&&n){var d='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+_e(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+_e(r.imageSizes)+'"]')):d+='[href="'+_e(e)+'"]';var m=d;switch(n){case"style":m=el(e);break;case"script":m=nl(e)}ua.has(m)||(e=b({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),ua.set(m,e),c.querySelector(d)!==null||n==="style"&&c.querySelector(yc(m))||n==="script"&&c.querySelector(Sc(m))||(n=c.createElement("link"),si(n,"link",e),tt(n),c.head.appendChild(n)))}}function sb(e,n){br.m(e,n);var r=tl;if(r&&e){var c=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+_e(c)+'"][href="'+_e(e)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(e)}if(!ua.has(m)&&(e=b({rel:"modulepreload",href:e},n),ua.set(m,e),r.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Sc(m)))return}c=r.createElement("link"),si(c,"link",e),tt(c),r.head.appendChild(c)}}}function ob(e,n,r){br.S(e,n,r);var c=tl;if(c&&e){var d=z(c).hoistableStyles,m=el(e);n=n||"default";var T=d.get(m);if(!T){var O={loading:0,preload:null};if(T=c.querySelector(yc(m)))O.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},r),(r=ua.get(m))&&qd(e,r);var J=T=c.createElement("link");tt(J),si(J,"link",e),J._p=new Promise(function(ht,Rt){J.onload=ht,J.onerror=Rt}),J.addEventListener("load",function(){O.loading|=1}),J.addEventListener("error",function(){O.loading|=2}),O.loading|=4,af(T,n,c)}T={type:"stylesheet",instance:T,count:1,state:O},d.set(m,T)}}}function lb(e,n){br.X(e,n);var r=tl;if(r&&e){var c=z(r).hoistableScripts,d=nl(e),m=c.get(d);m||(m=r.querySelector(Sc(d)),m||(e=b({src:e,async:!0},n),(n=ua.get(d))&&Zd(e,n),m=r.createElement("script"),tt(m),si(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function cb(e,n){br.M(e,n);var r=tl;if(r&&e){var c=z(r).hoistableScripts,d=nl(e),m=c.get(d);m||(m=r.querySelector(Sc(d)),m||(e=b({src:e,async:!0,type:"module"},n),(n=ua.get(d))&&Zd(e,n),m=r.createElement("script"),tt(m),si(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function K0(e,n,r,c){var d=(d=nt.current)?nf(d):null;if(!d)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=el(r.href),r=z(d).hoistableStyles,c=r.get(n),c||(c={type:"style",instance:null,count:0,state:null},r.set(n,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=el(r.href);var m=z(d).hoistableStyles,T=m.get(e);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=d.querySelector(yc(e)))&&!m._p&&(T.instance=m,T.state.loading=5),ua.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ua.set(e,r),m||ub(d,e,r,T.state))),n&&c===null)throw Error(s(528,""));return T}if(n&&c!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nl(r),r=z(d).hoistableScripts,c=r.get(n),c||(c={type:"script",instance:null,count:0,state:null},r.set(n,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function el(e){return'href="'+_e(e)+'"'}function yc(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function ub(e,n,r,c){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?c.loading=1:(n=e.createElement("link"),c.preload=n,n.addEventListener("load",function(){return c.loading|=1}),n.addEventListener("error",function(){return c.loading|=2}),si(n,"link",r),tt(n),e.head.appendChild(n))}function nl(e){return'[src="'+_e(e)+'"]'}function Sc(e){return"script[async]"+e}function Q0(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var c=e.querySelector('style[data-href~="'+_e(r.href)+'"]');if(c)return n.instance=c,tt(c),c;var d=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(e.ownerDocument||e).createElement("style"),tt(c),si(c,"style",d),af(c,r.precedence,e),n.instance=c;case"stylesheet":d=el(r.href);var m=e.querySelector(yc(d));if(m)return n.state.loading|=4,n.instance=m,tt(m),m;c=J0(r),(d=ua.get(d))&&qd(c,d),m=(e.ownerDocument||e).createElement("link"),tt(m);var T=m;return T._p=new Promise(function(O,J){T.onload=O,T.onerror=J}),si(m,"link",c),n.state.loading|=4,af(m,r.precedence,e),n.instance=m;case"script":return m=nl(r.src),(d=e.querySelector(Sc(m)))?(n.instance=d,tt(d),d):(c=r,(d=ua.get(m))&&(c=b({},r),Zd(c,d)),e=e.ownerDocument||e,d=e.createElement("script"),tt(d),si(d,"link",c),e.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(c=n.instance,n.state.loading|=4,af(c,r.precedence,e));return n.instance}function af(e,n,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,T=0;T<c.length;T++){var O=c[T];if(O.dataset.precedence===n)m=O;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rf=null;function $0(e,n,r){if(rf===null){var c=new Map,d=rf=new Map;d.set(r,c)}else d=rf,c=d.get(r),c||(c=new Map,d.set(r,c));if(c.has(e))return c;for(c.set(e,null),r=r.getElementsByTagName(e),d=0;d<r.length;d++){var m=r[d];if(!(m[ar]||m[Tn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(n)||"";T=e+T;var O=c.get(T);O?O.push(m):c.set(T,[m])}}return c}function tv(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function fb(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ev(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hb(e,n,r,c){if(r.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=el(c.href),m=n.querySelector(yc(d));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=sf.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=m,tt(m);return}m=n.ownerDocument||n,c=J0(c),(d=ua.get(d))&&qd(c,d),m=m.createElement("link"),tt(m);var T=m;T._p=new Promise(function(O,J){T.onload=O,T.onerror=J}),si(m,"link",c),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=sf.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Yd=0;function db(e,n){return e.stylesheets&&e.count===0&&lf(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var c=setTimeout(function(){if(e.stylesheets&&lf(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+n);0<e.imgBytes&&Yd===0&&(Yd=62500*qS());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lf(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Yd?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(c),clearTimeout(d)}}:null}function sf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var of=null;function lf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,of=new Map,n.forEach(pb,e),of=null,sf.call(e))}function pb(e,n){if(!(n.state.loading&4)){var r=of.get(e);if(r)var c=r.get(null);else{r=new Map,of.set(e,r);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var T=d[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(r.set(T.dataset.precedence,T),c=T)}c&&r.set(null,c)}d=n.instance,T=d.getAttribute("data-precedence"),m=r.get(T)||c,m===c&&r.set(null,d),r.set(T,d),this.count++,c=sf.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),n.state.loading|=4}}var bc={$$typeof:B,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function mb(e,n,r,c,d,m,T,O,J){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=J,this.incompleteTransitions=new Map}function nv(e,n,r,c,d,m,T,O,J,ht,Rt,Ut){return e=new mb(e,n,r,T,J,ht,Rt,Ut,O),n=1,m===!0&&(n|=24),m=ci(3,null,null,n),e.current=m,m.stateNode=e,n=Ch(),n.refCount++,e.pooledCache=n,n.refCount++,m.memoizedState={element:c,isDehydrated:r,cache:n},Ph(m),e}function iv(e){return e?(e=lr,e):lr}function av(e,n,r,c,d,m){d=iv(d),c.context===null?c.context=d:c.pendingContext=d,c=Kr(n),c.payload={element:r},m=m===void 0?null:m,m!==null&&(c.callback=m),r=Jr(e,c,n),r!==null&&(Pi(r,e,n),tc(r,e,n))}function rv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Kd(e,n){rv(e,n),(e=e.alternate)&&rv(e,n)}function sv(e){if(e.tag===13||e.tag===31){var n=sa(e,67108864);n!==null&&Pi(n,e,67108864),Kd(e,67108864)}}function ov(e){if(e.tag===13||e.tag===31){var n=Zi();n=ti(n);var r=sa(e,n);r!==null&&Pi(r,e,n),Kd(e,n)}}var cf=!0;function _b(e,n,r,c){var d=G.T;G.T=null;var m=q.p;try{q.p=2,Jd(e,n,r,c)}finally{q.p=m,G.T=d}}function gb(e,n,r,c){var d=G.T;G.T=null;var m=q.p;try{q.p=8,Jd(e,n,r,c)}finally{q.p=m,G.T=d}}function Jd(e,n,r,c){if(cf){var d=Qd(c);if(d===null)Id(e,n,c,uf,r),cv(e,c);else if(xb(d,e,n,r,c))c.stopPropagation();else if(cv(e,c),n&4&&-1<vb.indexOf(e)){for(;d!==null;){var m=Da(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Ft(m.pendingLanes);if(T!==0){var O=m;for(O.pendingLanes|=2,O.entangledLanes|=2;T;){var J=1<<31-qt(T);O.entanglements[1]|=J,T&=~J}Wa(m),(on&6)===0&&(ju=R()+500,_c(0))}}break;case 31:case 13:O=sa(m,2),O!==null&&Pi(O,m,2),qu(),Kd(m,2)}if(m=Qd(c),m===null&&Id(e,n,c,uf,r),m===d)break;d=m}d!==null&&c.stopPropagation()}else Id(e,n,c,null,r)}}function Qd(e){return e=Ts(e),$d(e)}var uf=null;function $d(e){if(uf=null,e=_a(e),e!==null){var n=f(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=p(n),e!==null)return e;e=null}else if(r===31){if(e=_(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uf=e,null}function lv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case Ct:return 2;case Nt:return 8;case Tt:case se:return 32;case Gt:return 268435456;default:return 32}default:return 32}}var tp=!1,ls=null,cs=null,us=null,Mc=new Map,Ec=new Map,fs=[],vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(e,n){switch(e){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":Mc.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ec.delete(n.pointerId)}}function Tc(e,n,r,c,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:n,domEventName:r,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},n!==null&&(n=Da(n),n!==null&&sv(n)),e):(e.eventSystemFlags|=c,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function xb(e,n,r,c,d){switch(n){case"focusin":return ls=Tc(ls,e,n,r,c,d),!0;case"dragenter":return cs=Tc(cs,e,n,r,c,d),!0;case"mouseover":return us=Tc(us,e,n,r,c,d),!0;case"pointerover":var m=d.pointerId;return Mc.set(m,Tc(Mc.get(m)||null,e,n,r,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Ec.set(m,Tc(Ec.get(m)||null,e,n,r,c,d)),!0}return!1}function uv(e){var n=_a(e.target);if(n!==null){var r=f(n);if(r!==null){if(n=r.tag,n===13){if(n=p(r),n!==null){e.blockedOn=n,ir(e.priority,function(){ov(r)});return}}else if(n===31){if(n=_(r),n!==null){e.blockedOn=n,ir(e.priority,function(){ov(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ff(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Qd(e.nativeEvent);if(r===null){r=e.nativeEvent;var c=new r.constructor(r.type,r);So=c,r.target.dispatchEvent(c),So=null}else return n=Da(r),n!==null&&sv(n),e.blockedOn=r,!1;n.shift()}return!0}function fv(e,n,r){ff(e)&&r.delete(n)}function yb(){tp=!1,ls!==null&&ff(ls)&&(ls=null),cs!==null&&ff(cs)&&(cs=null),us!==null&&ff(us)&&(us=null),Mc.forEach(fv),Ec.forEach(fv)}function hf(e,n){e.blockedOn===n&&(e.blockedOn=null,tp||(tp=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yb)))}var df=null;function hv(e){df!==e&&(df=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){df===e&&(df=null);for(var n=0;n<e.length;n+=3){var r=e[n],c=e[n+1],d=e[n+2];if(typeof c!="function"){if($d(c||r)===null)continue;break}var m=Da(r);m!==null&&(e.splice(n,3),n-=3,Qh(m,{pending:!0,data:d,method:r.method,action:c},c,d))}}))}function il(e){function n(J){return hf(J,e)}ls!==null&&hf(ls,e),cs!==null&&hf(cs,e),us!==null&&hf(us,e),Mc.forEach(n),Ec.forEach(n);for(var r=0;r<fs.length;r++){var c=fs[r];c.blockedOn===e&&(c.blockedOn=null)}for(;0<fs.length&&(r=fs[0],r.blockedOn===null);)uv(r),r.blockedOn===null&&fs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var d=r[c],m=r[c+1],T=d[An]||null;if(typeof m=="function")T||hv(r);else if(T){var O=null;if(m&&m.hasAttribute("formAction")){if(d=m,T=m[An]||null)O=T.formAction;else if($d(d)!==null)continue}else O=T.action;typeof O=="function"?r[c+1]=O:(r.splice(c,3),c-=3),hv(r)}}}function dv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(T){return d=T})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),c||setTimeout(r,20)}function r(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){c=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function ep(e){this._internalRoot=e}pf.prototype.render=ep.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,c=Zi();av(r,c,e,n,null,null)},pf.prototype.unmount=ep.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;av(e.current,2,null,e,null,null),qu(),n[$i]=null}};function pf(e){this._internalRoot=e}pf.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bi();e={blockedOn:null,target:e,priority:n};for(var r=0;r<fs.length&&n!==0&&n<fs[r].priority;r++);fs.splice(r,0,e),r===0&&uv(e)}};var pv=t.version;if(pv!=="19.2.1")throw Error(s(527,pv,"19.2.1"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Sb={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mf.isDisabled&&mf.supportsFiber)try{Bt=mf.inject(Sb),It=mf}catch{}}return wc.createRoot=function(e,n){if(!u(e))throw Error(s(299));var r=!1,c="",d=Sg,m=bg,T=Mg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError)),n=nv(e,1,!1,null,null,r,c,null,d,m,T,dv),e[$i]=n.current,zd(e),new ep(n)},wc.hydrateRoot=function(e,n,r){if(!u(e))throw Error(s(299));var c=!1,d="",m=Sg,T=bg,O=Mg,J=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(T=r.onCaughtError),r.onRecoverableError!==void 0&&(O=r.onRecoverableError),r.formState!==void 0&&(J=r.formState)),n=nv(e,1,!0,n,r??null,c,d,J,m,T,O,dv),n.context=iv(null),r=n.current,c=Zi(),c=ti(c),d=Kr(c),d.callback=null,Jr(r,d,c),r=c,n.current.lanes=r,Vn(n,r),Wa(n),e[$i]=n.current,zd(e),new pf(n)},wc.version="19.2.1",wc}var Ev;function Lb(){if(Ev)return ap.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ap.exports=Rb(),ap.exports}var Db=Lb();function Xx(o,t){return function(){return o.apply(t,arguments)}}const{toString:Pb}=Object.prototype,{getPrototypeOf:Km}=Object,{iterator:nh,toStringTag:qx}=Symbol,ih=(o=>t=>{const i=Pb.call(t);return o[i]||(o[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),La=o=>(o=o.toLowerCase(),t=>ih(t)===o),ah=o=>t=>typeof t===o,{isArray:wl}=Array,Sl=ah("undefined");function Vc(o){return o!==null&&!Sl(o)&&o.constructor!==null&&!Sl(o.constructor)&&Ni(o.constructor.isBuffer)&&o.constructor.isBuffer(o)}const Zx=La("ArrayBuffer");function Ub(o){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(o):t=o&&o.buffer&&Zx(o.buffer),t}const Nb=ah("string"),Ni=ah("function"),Yx=ah("number"),Wc=o=>o!==null&&typeof o=="object",Ob=o=>o===!0||o===!1,Vf=o=>{if(ih(o)!=="object")return!1;const t=Km(o);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(qx in o)&&!(nh in o)},zb=o=>{if(!Wc(o)||Vc(o))return!1;try{return Object.keys(o).length===0&&Object.getPrototypeOf(o)===Object.prototype}catch{return!1}},Ib=La("Date"),Bb=La("File"),Fb=La("Blob"),Hb=La("FileList"),kb=o=>Wc(o)&&Ni(o.pipe),Gb=o=>{let t;return o&&(typeof FormData=="function"&&o instanceof FormData||Ni(o.append)&&((t=ih(o))==="formdata"||t==="object"&&Ni(o.toString)&&o.toString()==="[object FormData]"))},Vb=La("URLSearchParams"),[Wb,jb,Xb,qb]=["ReadableStream","Request","Response","Headers"].map(La),Zb=o=>o.trim?o.trim():o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function jc(o,t,{allOwnKeys:i=!1}={}){if(o===null||typeof o>"u")return;let s,u;if(typeof o!="object"&&(o=[o]),wl(o))for(s=0,u=o.length;s<u;s++)t.call(null,o[s],s,o);else{if(Vc(o))return;const f=i?Object.getOwnPropertyNames(o):Object.keys(o),p=f.length;let _;for(s=0;s<p;s++)_=f[s],t.call(null,o[_],_,o)}}function Kx(o,t){if(Vc(o))return null;t=t.toLowerCase();const i=Object.keys(o);let s=i.length,u;for(;s-- >0;)if(u=i[s],t===u.toLowerCase())return u;return null}const uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Jx=o=>!Sl(o)&&o!==uo;function Zp(){const{caseless:o,skipUndefined:t}=Jx(this)&&this||{},i={},s=(u,f)=>{const p=o&&Kx(i,f)||f;Vf(i[p])&&Vf(u)?i[p]=Zp(i[p],u):Vf(u)?i[p]=Zp({},u):wl(u)?i[p]=u.slice():(!t||!Sl(u))&&(i[p]=u)};for(let u=0,f=arguments.length;u<f;u++)arguments[u]&&jc(arguments[u],s);return i}const Yb=(o,t,i,{allOwnKeys:s}={})=>(jc(t,(u,f)=>{i&&Ni(u)?o[f]=Xx(u,i):o[f]=u},{allOwnKeys:s}),o),Kb=o=>(o.charCodeAt(0)===65279&&(o=o.slice(1)),o),Jb=(o,t,i,s)=>{o.prototype=Object.create(t.prototype,s),o.prototype.constructor=o,Object.defineProperty(o,"super",{value:t.prototype}),i&&Object.assign(o.prototype,i)},Qb=(o,t,i,s)=>{let u,f,p;const _={};if(t=t||{},o==null)return t;do{for(u=Object.getOwnPropertyNames(o),f=u.length;f-- >0;)p=u[f],(!s||s(p,o,t))&&!_[p]&&(t[p]=o[p],_[p]=!0);o=i!==!1&&Km(o)}while(o&&(!i||i(o,t))&&o!==Object.prototype);return t},$b=(o,t,i)=>{o=String(o),(i===void 0||i>o.length)&&(i=o.length),i-=t.length;const s=o.indexOf(t,i);return s!==-1&&s===i},tM=o=>{if(!o)return null;if(wl(o))return o;let t=o.length;if(!Yx(t))return null;const i=new Array(t);for(;t-- >0;)i[t]=o[t];return i},eM=(o=>t=>o&&t instanceof o)(typeof Uint8Array<"u"&&Km(Uint8Array)),nM=(o,t)=>{const s=(o&&o[nh]).call(o);let u;for(;(u=s.next())&&!u.done;){const f=u.value;t.call(o,f[0],f[1])}},iM=(o,t)=>{let i;const s=[];for(;(i=o.exec(t))!==null;)s.push(i);return s},aM=La("HTMLFormElement"),rM=o=>o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,s,u){return s.toUpperCase()+u}),Tv=(({hasOwnProperty:o})=>(t,i)=>o.call(t,i))(Object.prototype),sM=La("RegExp"),Qx=(o,t)=>{const i=Object.getOwnPropertyDescriptors(o),s={};jc(i,(u,f)=>{let p;(p=t(u,f,o))!==!1&&(s[f]=p||u)}),Object.defineProperties(o,s)},oM=o=>{Qx(o,(t,i)=>{if(Ni(o)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const s=o[i];if(Ni(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},lM=(o,t)=>{const i={},s=u=>{u.forEach(f=>{i[f]=!0})};return wl(o)?s(o):s(String(o).split(t)),i},cM=()=>{},uM=(o,t)=>o!=null&&Number.isFinite(o=+o)?o:t;function fM(o){return!!(o&&Ni(o.append)&&o[qx]==="FormData"&&o[nh])}const hM=o=>{const t=new Array(10),i=(s,u)=>{if(Wc(s)){if(t.indexOf(s)>=0)return;if(Vc(s))return s;if(!("toJSON"in s)){t[u]=s;const f=wl(s)?[]:{};return jc(s,(p,_)=>{const x=i(p,u+1);!Sl(x)&&(f[_]=x)}),t[u]=void 0,f}}return s};return i(o,0)},dM=La("AsyncFunction"),pM=o=>o&&(Wc(o)||Ni(o))&&Ni(o.then)&&Ni(o.catch),$x=((o,t)=>o?setImmediate:t?((i,s)=>(uo.addEventListener("message",({source:u,data:f})=>{u===uo&&f===i&&s.length&&s.shift()()},!1),u=>{s.push(u),uo.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Ni(uo.postMessage)),mM=typeof queueMicrotask<"u"?queueMicrotask.bind(uo):typeof process<"u"&&process.nextTick||$x,_M=o=>o!=null&&Ni(o[nh]),St={isArray:wl,isArrayBuffer:Zx,isBuffer:Vc,isFormData:Gb,isArrayBufferView:Ub,isString:Nb,isNumber:Yx,isBoolean:Ob,isObject:Wc,isPlainObject:Vf,isEmptyObject:zb,isReadableStream:Wb,isRequest:jb,isResponse:Xb,isHeaders:qb,isUndefined:Sl,isDate:Ib,isFile:Bb,isBlob:Fb,isRegExp:sM,isFunction:Ni,isStream:kb,isURLSearchParams:Vb,isTypedArray:eM,isFileList:Hb,forEach:jc,merge:Zp,extend:Yb,trim:Zb,stripBOM:Kb,inherits:Jb,toFlatObject:Qb,kindOf:ih,kindOfTest:La,endsWith:$b,toArray:tM,forEachEntry:nM,matchAll:iM,isHTMLForm:aM,hasOwnProperty:Tv,hasOwnProp:Tv,reduceDescriptors:Qx,freezeMethods:oM,toObjectSet:lM,toCamelCase:rM,noop:cM,toFiniteNumber:uM,findKey:Kx,global:uo,isContextDefined:Jx,isSpecCompliantForm:fM,toJSONObject:hM,isAsyncFn:dM,isThenable:pM,setImmediate:$x,asap:mM,isIterable:_M};function Re(o,t,i,s,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=o,this.name="AxiosError",t&&(this.code=t),i&&(this.config=i),s&&(this.request=s),u&&(this.response=u,this.status=u.status?u.status:null)}St.inherits(Re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:St.toJSONObject(this.config),code:this.code,status:this.status}}});const ty=Re.prototype,ey={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(o=>{ey[o]={value:o}});Object.defineProperties(Re,ey);Object.defineProperty(ty,"isAxiosError",{value:!0});Re.from=(o,t,i,s,u,f)=>{const p=Object.create(ty);St.toFlatObject(o,p,function(y){return y!==Error.prototype},v=>v!=="isAxiosError");const _=o&&o.message?o.message:"Error",x=t==null&&o?o.code:t;return Re.call(p,_,x,i,s,u),o&&p.cause==null&&Object.defineProperty(p,"cause",{value:o,configurable:!0}),p.name=o&&o.name||"Error",f&&Object.assign(p,f),p};const gM=null;function Yp(o){return St.isPlainObject(o)||St.isArray(o)}function ny(o){return St.endsWith(o,"[]")?o.slice(0,-2):o}function Av(o,t,i){return o?o.concat(t).map(function(u,f){return u=ny(u),!i&&f?"["+u+"]":u}).join(i?".":""):t}function vM(o){return St.isArray(o)&&!o.some(Yp)}const xM=St.toFlatObject(St,{},null,function(t){return/^is[A-Z]/.test(t)});function rh(o,t,i){if(!St.isObject(o))throw new TypeError("target must be an object");t=t||new FormData,i=St.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,A){return!St.isUndefined(A[N])});const s=i.metaTokens,u=i.visitor||y,f=i.dots,p=i.indexes,x=(i.Blob||typeof Blob<"u"&&Blob)&&St.isSpecCompliantForm(t);if(!St.isFunction(u))throw new TypeError("visitor must be a function");function v(w){if(w===null)return"";if(St.isDate(w))return w.toISOString();if(St.isBoolean(w))return w.toString();if(!x&&St.isBlob(w))throw new Re("Blob is not supported. Use a Buffer instead.");return St.isArrayBuffer(w)||St.isTypedArray(w)?x&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function y(w,N,A){let E=w;if(w&&!A&&typeof w=="object"){if(St.endsWith(N,"{}"))N=s?N:N.slice(0,-2),w=JSON.stringify(w);else if(St.isArray(w)&&vM(w)||(St.isFileList(w)||St.endsWith(N,"[]"))&&(E=St.toArray(w)))return N=ny(N),E.forEach(function(B,F){!(St.isUndefined(B)||B===null)&&t.append(p===!0?Av([N],F,f):p===null?N:N+"[]",v(B))}),!1}return Yp(w)?!0:(t.append(Av(A,N,f),v(w)),!1)}const b=[],S=Object.assign(xM,{defaultVisitor:y,convertValue:v,isVisitable:Yp});function C(w,N){if(!St.isUndefined(w)){if(b.indexOf(w)!==-1)throw Error("Circular reference detected in "+N.join("."));b.push(w),St.forEach(w,function(E,P){(!(St.isUndefined(E)||E===null)&&u.call(t,E,St.isString(P)?P.trim():P,N,S))===!0&&C(E,N?N.concat(P):[P])}),b.pop()}}if(!St.isObject(o))throw new TypeError("data must be an object");return C(o),t}function wv(o){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function Jm(o,t){this._pairs=[],o&&rh(o,this,t)}const iy=Jm.prototype;iy.append=function(t,i){this._pairs.push([t,i])};iy.toString=function(t){const i=t?function(s){return t.call(this,s,wv)}:wv;return this._pairs.map(function(u){return i(u[0])+"="+i(u[1])},"").join("&")};function yM(o){return encodeURIComponent(o).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ay(o,t,i){if(!t)return o;const s=i&&i.encode||yM;St.isFunction(i)&&(i={serialize:i});const u=i&&i.serialize;let f;if(u?f=u(t,i):f=St.isURLSearchParams(t)?t.toString():new Jm(t,i).toString(s),f){const p=o.indexOf("#");p!==-1&&(o=o.slice(0,p)),o+=(o.indexOf("?")===-1?"?":"&")+f}return o}class Cv{constructor(){this.handlers=[]}use(t,i,s){return this.handlers.push({fulfilled:t,rejected:i,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){St.forEach(this.handlers,function(s){s!==null&&t(s)})}}const ry={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},SM=typeof URLSearchParams<"u"?URLSearchParams:Jm,bM=typeof FormData<"u"?FormData:null,MM=typeof Blob<"u"?Blob:null,EM={isBrowser:!0,classes:{URLSearchParams:SM,FormData:bM,Blob:MM},protocols:["http","https","file","blob","url","data"]},Qm=typeof window<"u"&&typeof document<"u",Kp=typeof navigator=="object"&&navigator||void 0,TM=Qm&&(!Kp||["ReactNative","NativeScript","NS"].indexOf(Kp.product)<0),AM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wM=Qm&&window.location.href||"http://localhost",CM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qm,hasStandardBrowserEnv:TM,hasStandardBrowserWebWorkerEnv:AM,navigator:Kp,origin:wM},Symbol.toStringTag,{value:"Module"})),di={...CM,...EM};function RM(o,t){return rh(o,new di.classes.URLSearchParams,{visitor:function(i,s,u,f){return di.isNode&&St.isBuffer(i)?(this.append(s,i.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...t})}function LM(o){return St.matchAll(/\w+|\[(\w*)]/g,o).map(t=>t[0]==="[]"?"":t[1]||t[0])}function DM(o){const t={},i=Object.keys(o);let s;const u=i.length;let f;for(s=0;s<u;s++)f=i[s],t[f]=o[f];return t}function sy(o){function t(i,s,u,f){let p=i[f++];if(p==="__proto__")return!0;const _=Number.isFinite(+p),x=f>=i.length;return p=!p&&St.isArray(u)?u.length:p,x?(St.hasOwnProp(u,p)?u[p]=[u[p],s]:u[p]=s,!_):((!u[p]||!St.isObject(u[p]))&&(u[p]=[]),t(i,s,u[p],f)&&St.isArray(u[p])&&(u[p]=DM(u[p])),!_)}if(St.isFormData(o)&&St.isFunction(o.entries)){const i={};return St.forEachEntry(o,(s,u)=>{t(LM(s),u,i,0)}),i}return null}function PM(o,t,i){if(St.isString(o))try{return(t||JSON.parse)(o),St.trim(o)}catch(s){if(s.name!=="SyntaxError")throw s}return(i||JSON.stringify)(o)}const Xc={transitional:ry,adapter:["xhr","http","fetch"],transformRequest:[function(t,i){const s=i.getContentType()||"",u=s.indexOf("application/json")>-1,f=St.isObject(t);if(f&&St.isHTMLForm(t)&&(t=new FormData(t)),St.isFormData(t))return u?JSON.stringify(sy(t)):t;if(St.isArrayBuffer(t)||St.isBuffer(t)||St.isStream(t)||St.isFile(t)||St.isBlob(t)||St.isReadableStream(t))return t;if(St.isArrayBufferView(t))return t.buffer;if(St.isURLSearchParams(t))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let _;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return RM(t,this.formSerializer).toString();if((_=St.isFileList(t))||s.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return rh(_?{"files[]":t}:t,x&&new x,this.formSerializer)}}return f||u?(i.setContentType("application/json",!1),PM(t)):t}],transformResponse:[function(t){const i=this.transitional||Xc.transitional,s=i&&i.forcedJSONParsing,u=this.responseType==="json";if(St.isResponse(t)||St.isReadableStream(t))return t;if(t&&St.isString(t)&&(s&&!this.responseType||u)){const p=!(i&&i.silentJSONParsing)&&u;try{return JSON.parse(t,this.parseReviver)}catch(_){if(p)throw _.name==="SyntaxError"?Re.from(_,Re.ERR_BAD_RESPONSE,this,null,this.response):_}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:di.classes.FormData,Blob:di.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};St.forEach(["delete","get","head","post","put","patch"],o=>{Xc.headers[o]={}});const UM=St.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),NM=o=>{const t={};let i,s,u;return o&&o.split(`
`).forEach(function(p){u=p.indexOf(":"),i=p.substring(0,u).trim().toLowerCase(),s=p.substring(u+1).trim(),!(!i||t[i]&&UM[i])&&(i==="set-cookie"?t[i]?t[i].push(s):t[i]=[s]:t[i]=t[i]?t[i]+", "+s:s)}),t},Rv=Symbol("internals");function Cc(o){return o&&String(o).trim().toLowerCase()}function Wf(o){return o===!1||o==null?o:St.isArray(o)?o.map(Wf):String(o)}function OM(o){const t=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=i.exec(o);)t[s[1]]=s[2];return t}const zM=o=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());function lp(o,t,i,s,u){if(St.isFunction(s))return s.call(this,t,i);if(u&&(t=i),!!St.isString(t)){if(St.isString(s))return t.indexOf(s)!==-1;if(St.isRegExp(s))return s.test(t)}}function IM(o){return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,i,s)=>i.toUpperCase()+s)}function BM(o,t){const i=St.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(o,s+i,{value:function(u,f,p){return this[s].call(this,t,u,f,p)},configurable:!0})})}let Oi=class{constructor(t){t&&this.set(t)}set(t,i,s){const u=this;function f(_,x,v){const y=Cc(x);if(!y)throw new Error("header name must be a non-empty string");const b=St.findKey(u,y);(!b||u[b]===void 0||v===!0||v===void 0&&u[b]!==!1)&&(u[b||x]=Wf(_))}const p=(_,x)=>St.forEach(_,(v,y)=>f(v,y,x));if(St.isPlainObject(t)||t instanceof this.constructor)p(t,i);else if(St.isString(t)&&(t=t.trim())&&!zM(t))p(NM(t),i);else if(St.isObject(t)&&St.isIterable(t)){let _={},x,v;for(const y of t){if(!St.isArray(y))throw TypeError("Object iterator must return a key-value pair");_[v=y[0]]=(x=_[v])?St.isArray(x)?[...x,y[1]]:[x,y[1]]:y[1]}p(_,i)}else t!=null&&f(i,t,s);return this}get(t,i){if(t=Cc(t),t){const s=St.findKey(this,t);if(s){const u=this[s];if(!i)return u;if(i===!0)return OM(u);if(St.isFunction(i))return i.call(this,u,s);if(St.isRegExp(i))return i.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,i){if(t=Cc(t),t){const s=St.findKey(this,t);return!!(s&&this[s]!==void 0&&(!i||lp(this,this[s],s,i)))}return!1}delete(t,i){const s=this;let u=!1;function f(p){if(p=Cc(p),p){const _=St.findKey(s,p);_&&(!i||lp(s,s[_],_,i))&&(delete s[_],u=!0)}}return St.isArray(t)?t.forEach(f):f(t),u}clear(t){const i=Object.keys(this);let s=i.length,u=!1;for(;s--;){const f=i[s];(!t||lp(this,this[f],f,t,!0))&&(delete this[f],u=!0)}return u}normalize(t){const i=this,s={};return St.forEach(this,(u,f)=>{const p=St.findKey(s,f);if(p){i[p]=Wf(u),delete i[f];return}const _=t?IM(f):String(f).trim();_!==f&&delete i[f],i[_]=Wf(u),s[_]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const i=Object.create(null);return St.forEach(this,(s,u)=>{s!=null&&s!==!1&&(i[u]=t&&St.isArray(s)?s.join(", "):s)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,i])=>t+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...i){const s=new this(t);return i.forEach(u=>s.set(u)),s}static accessor(t){const s=(this[Rv]=this[Rv]={accessors:{}}).accessors,u=this.prototype;function f(p){const _=Cc(p);s[_]||(BM(u,p),s[_]=!0)}return St.isArray(t)?t.forEach(f):f(t),this}};Oi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);St.reduceDescriptors(Oi.prototype,({value:o},t)=>{let i=t[0].toUpperCase()+t.slice(1);return{get:()=>o,set(s){this[i]=s}}});St.freezeMethods(Oi);function cp(o,t){const i=this||Xc,s=t||i,u=Oi.from(s.headers);let f=s.data;return St.forEach(o,function(_){f=_.call(i,f,u.normalize(),t?t.status:void 0)}),u.normalize(),f}function oy(o){return!!(o&&o.__CANCEL__)}function Cl(o,t,i){Re.call(this,o??"canceled",Re.ERR_CANCELED,t,i),this.name="CanceledError"}St.inherits(Cl,Re,{__CANCEL__:!0});function ly(o,t,i){const s=i.config.validateStatus;!i.status||!s||s(i.status)?o(i):t(new Re("Request failed with status code "+i.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function FM(o){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(o);return t&&t[1]||""}function HM(o,t){o=o||10;const i=new Array(o),s=new Array(o);let u=0,f=0,p;return t=t!==void 0?t:1e3,function(x){const v=Date.now(),y=s[f];p||(p=v),i[u]=x,s[u]=v;let b=f,S=0;for(;b!==u;)S+=i[b++],b=b%o;if(u=(u+1)%o,u===f&&(f=(f+1)%o),v-p<t)return;const C=y&&v-y;return C?Math.round(S*1e3/C):void 0}}function kM(o,t){let i=0,s=1e3/t,u,f;const p=(v,y=Date.now())=>{i=y,u=null,f&&(clearTimeout(f),f=null),o(...v)};return[(...v)=>{const y=Date.now(),b=y-i;b>=s?p(v,y):(u=v,f||(f=setTimeout(()=>{f=null,p(u)},s-b)))},()=>u&&p(u)]}const Qf=(o,t,i=3)=>{let s=0;const u=HM(50,250);return kM(f=>{const p=f.loaded,_=f.lengthComputable?f.total:void 0,x=p-s,v=u(x),y=p<=_;s=p;const b={loaded:p,total:_,progress:_?p/_:void 0,bytes:x,rate:v||void 0,estimated:v&&_&&y?(_-p)/v:void 0,event:f,lengthComputable:_!=null,[t?"download":"upload"]:!0};o(b)},i)},Lv=(o,t)=>{const i=o!=null;return[s=>t[0]({lengthComputable:i,total:o,loaded:s}),t[1]]},Dv=o=>(...t)=>St.asap(()=>o(...t)),GM=di.hasStandardBrowserEnv?((o,t)=>i=>(i=new URL(i,di.origin),o.protocol===i.protocol&&o.host===i.host&&(t||o.port===i.port)))(new URL(di.origin),di.navigator&&/(msie|trident)/i.test(di.navigator.userAgent)):()=>!0,VM=di.hasStandardBrowserEnv?{write(o,t,i,s,u,f,p){if(typeof document>"u")return;const _=[`${o}=${encodeURIComponent(t)}`];St.isNumber(i)&&_.push(`expires=${new Date(i).toUTCString()}`),St.isString(s)&&_.push(`path=${s}`),St.isString(u)&&_.push(`domain=${u}`),f===!0&&_.push("secure"),St.isString(p)&&_.push(`SameSite=${p}`),document.cookie=_.join("; ")},read(o){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+o+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(o){this.write(o,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function WM(o){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(o)}function jM(o,t){return t?o.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):o}function cy(o,t,i){let s=!WM(t);return o&&(s||i==!1)?jM(o,t):t}const Pv=o=>o instanceof Oi?{...o}:o;function mo(o,t){t=t||{};const i={};function s(v,y,b,S){return St.isPlainObject(v)&&St.isPlainObject(y)?St.merge.call({caseless:S},v,y):St.isPlainObject(y)?St.merge({},y):St.isArray(y)?y.slice():y}function u(v,y,b,S){if(St.isUndefined(y)){if(!St.isUndefined(v))return s(void 0,v,b,S)}else return s(v,y,b,S)}function f(v,y){if(!St.isUndefined(y))return s(void 0,y)}function p(v,y){if(St.isUndefined(y)){if(!St.isUndefined(v))return s(void 0,v)}else return s(void 0,y)}function _(v,y,b){if(b in t)return s(v,y);if(b in o)return s(void 0,v)}const x={url:f,method:f,data:f,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:_,headers:(v,y,b)=>u(Pv(v),Pv(y),b,!0)};return St.forEach(Object.keys({...o,...t}),function(y){const b=x[y]||u,S=b(o[y],t[y],y);St.isUndefined(S)&&b!==_||(i[y]=S)}),i}const uy=o=>{const t=mo({},o);let{data:i,withXSRFToken:s,xsrfHeaderName:u,xsrfCookieName:f,headers:p,auth:_}=t;if(t.headers=p=Oi.from(p),t.url=ay(cy(t.baseURL,t.url,t.allowAbsoluteUrls),o.params,o.paramsSerializer),_&&p.set("Authorization","Basic "+btoa((_.username||"")+":"+(_.password?unescape(encodeURIComponent(_.password)):""))),St.isFormData(i)){if(di.hasStandardBrowserEnv||di.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if(St.isFunction(i.getHeaders)){const x=i.getHeaders(),v=["content-type","content-length"];Object.entries(x).forEach(([y,b])=>{v.includes(y.toLowerCase())&&p.set(y,b)})}}if(di.hasStandardBrowserEnv&&(s&&St.isFunction(s)&&(s=s(t)),s||s!==!1&&GM(t.url))){const x=u&&f&&VM.read(f);x&&p.set(u,x)}return t},XM=typeof XMLHttpRequest<"u",qM=XM&&function(o){return new Promise(function(i,s){const u=uy(o);let f=u.data;const p=Oi.from(u.headers).normalize();let{responseType:_,onUploadProgress:x,onDownloadProgress:v}=u,y,b,S,C,w;function N(){C&&C(),w&&w(),u.cancelToken&&u.cancelToken.unsubscribe(y),u.signal&&u.signal.removeEventListener("abort",y)}let A=new XMLHttpRequest;A.open(u.method.toUpperCase(),u.url,!0),A.timeout=u.timeout;function E(){if(!A)return;const B=Oi.from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),X={data:!_||_==="text"||_==="json"?A.responseText:A.response,status:A.status,statusText:A.statusText,headers:B,config:o,request:A};ly(function(j){i(j),N()},function(j){s(j),N()},X),A=null}"onloadend"in A?A.onloadend=E:A.onreadystatechange=function(){!A||A.readyState!==4||A.status===0&&!(A.responseURL&&A.responseURL.indexOf("file:")===0)||setTimeout(E)},A.onabort=function(){A&&(s(new Re("Request aborted",Re.ECONNABORTED,o,A)),A=null)},A.onerror=function(F){const X=F&&F.message?F.message:"Network Error",V=new Re(X,Re.ERR_NETWORK,o,A);V.event=F||null,s(V),A=null},A.ontimeout=function(){let F=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const X=u.transitional||ry;u.timeoutErrorMessage&&(F=u.timeoutErrorMessage),s(new Re(F,X.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,o,A)),A=null},f===void 0&&p.setContentType(null),"setRequestHeader"in A&&St.forEach(p.toJSON(),function(F,X){A.setRequestHeader(X,F)}),St.isUndefined(u.withCredentials)||(A.withCredentials=!!u.withCredentials),_&&_!=="json"&&(A.responseType=u.responseType),v&&([S,w]=Qf(v,!0),A.addEventListener("progress",S)),x&&A.upload&&([b,C]=Qf(x),A.upload.addEventListener("progress",b),A.upload.addEventListener("loadend",C)),(u.cancelToken||u.signal)&&(y=B=>{A&&(s(!B||B.type?new Cl(null,o,A):B),A.abort(),A=null)},u.cancelToken&&u.cancelToken.subscribe(y),u.signal&&(u.signal.aborted?y():u.signal.addEventListener("abort",y)));const P=FM(u.url);if(P&&di.protocols.indexOf(P)===-1){s(new Re("Unsupported protocol "+P+":",Re.ERR_BAD_REQUEST,o));return}A.send(f||null)})},ZM=(o,t)=>{const{length:i}=o=o?o.filter(Boolean):[];if(t||i){let s=new AbortController,u;const f=function(v){if(!u){u=!0,_();const y=v instanceof Error?v:this.reason;s.abort(y instanceof Re?y:new Cl(y instanceof Error?y.message:y))}};let p=t&&setTimeout(()=>{p=null,f(new Re(`timeout ${t} of ms exceeded`,Re.ETIMEDOUT))},t);const _=()=>{o&&(p&&clearTimeout(p),p=null,o.forEach(v=>{v.unsubscribe?v.unsubscribe(f):v.removeEventListener("abort",f)}),o=null)};o.forEach(v=>v.addEventListener("abort",f));const{signal:x}=s;return x.unsubscribe=()=>St.asap(_),x}},YM=function*(o,t){let i=o.byteLength;if(i<t){yield o;return}let s=0,u;for(;s<i;)u=s+t,yield o.slice(s,u),s=u},KM=async function*(o,t){for await(const i of JM(o))yield*YM(i,t)},JM=async function*(o){if(o[Symbol.asyncIterator]){yield*o;return}const t=o.getReader();try{for(;;){const{done:i,value:s}=await t.read();if(i)break;yield s}}finally{await t.cancel()}},Uv=(o,t,i,s)=>{const u=KM(o,t);let f=0,p,_=x=>{p||(p=!0,s&&s(x))};return new ReadableStream({async pull(x){try{const{done:v,value:y}=await u.next();if(v){_(),x.close();return}let b=y.byteLength;if(i){let S=f+=b;i(S)}x.enqueue(new Uint8Array(y))}catch(v){throw _(v),v}},cancel(x){return _(x),u.return()}},{highWaterMark:2})},Nv=64*1024,{isFunction:_f}=St,QM=(({Request:o,Response:t})=>({Request:o,Response:t}))(St.global),{ReadableStream:Ov,TextEncoder:zv}=St.global,Iv=(o,...t)=>{try{return!!o(...t)}catch{return!1}},$M=o=>{o=St.merge.call({skipUndefined:!0},QM,o);const{fetch:t,Request:i,Response:s}=o,u=t?_f(t):typeof fetch=="function",f=_f(i),p=_f(s);if(!u)return!1;const _=u&&_f(Ov),x=u&&(typeof zv=="function"?(w=>N=>w.encode(N))(new zv):async w=>new Uint8Array(await new i(w).arrayBuffer())),v=f&&_&&Iv(()=>{let w=!1;const N=new i(di.origin,{body:new Ov,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!N}),y=p&&_&&Iv(()=>St.isReadableStream(new s("").body)),b={stream:y&&(w=>w.body)};u&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!b[w]&&(b[w]=(N,A)=>{let E=N&&N[w];if(E)return E.call(N);throw new Re(`Response type '${w}' is not supported`,Re.ERR_NOT_SUPPORT,A)})});const S=async w=>{if(w==null)return 0;if(St.isBlob(w))return w.size;if(St.isSpecCompliantForm(w))return(await new i(di.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(St.isArrayBufferView(w)||St.isArrayBuffer(w))return w.byteLength;if(St.isURLSearchParams(w)&&(w=w+""),St.isString(w))return(await x(w)).byteLength},C=async(w,N)=>{const A=St.toFiniteNumber(w.getContentLength());return A??S(N)};return async w=>{let{url:N,method:A,data:E,signal:P,cancelToken:B,timeout:F,onDownloadProgress:X,onUploadProgress:V,responseType:j,headers:D,withCredentials:H="same-origin",fetchOptions:vt}=uy(w),Z=t||fetch;j=j?(j+"").toLowerCase():"text";let rt=ZM([P,B&&B.toAbortSignal()],F),ft=null;const mt=rt&&rt.unsubscribe&&(()=>{rt.unsubscribe()});let lt;try{if(V&&v&&A!=="get"&&A!=="head"&&(lt=await C(D,E))!==0){let I=new i(N,{method:"POST",body:E,duplex:"half"}),K;if(St.isFormData(E)&&(K=I.headers.get("content-type"))&&D.setContentType(K),I.body){const[bt,wt]=Lv(lt,Qf(Dv(V)));E=Uv(I.body,Nv,bt,wt)}}St.isString(H)||(H=H?"include":"omit");const G=f&&"credentials"in i.prototype,q={...vt,signal:rt,method:A.toUpperCase(),headers:D.normalize().toJSON(),body:E,duplex:"half",credentials:G?H:void 0};ft=f&&new i(N,q);let it=await(f?Z(ft,vt):Z(N,q));const At=y&&(j==="stream"||j==="response");if(y&&(X||At&&mt)){const I={};["status","statusText","headers"].forEach(Ot=>{I[Ot]=it[Ot]});const K=St.toFiniteNumber(it.headers.get("content-length")),[bt,wt]=X&&Lv(K,Qf(Dv(X),!0))||[];it=new s(Uv(it.body,Nv,bt,()=>{wt&&wt(),mt&&mt()}),I)}j=j||"text";let xt=await b[St.findKey(b,j)||"text"](it,w);return!At&&mt&&mt(),await new Promise((I,K)=>{ly(I,K,{data:xt,headers:Oi.from(it.headers),status:it.status,statusText:it.statusText,config:w,request:ft})})}catch(G){throw mt&&mt(),G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)?Object.assign(new Re("Network Error",Re.ERR_NETWORK,w,ft),{cause:G.cause||G}):Re.from(G,G&&G.code,w,ft)}}},t1=new Map,fy=o=>{let t=o&&o.env||{};const{fetch:i,Request:s,Response:u}=t,f=[s,u,i];let p=f.length,_=p,x,v,y=t1;for(;_--;)x=f[_],v=y.get(x),v===void 0&&y.set(x,v=_?new Map:$M(t)),y=v;return v};fy();const $m={http:gM,xhr:qM,fetch:{get:fy}};St.forEach($m,(o,t)=>{if(o){try{Object.defineProperty(o,"name",{value:t})}catch{}Object.defineProperty(o,"adapterName",{value:t})}});const Bv=o=>`- ${o}`,e1=o=>St.isFunction(o)||o===null||o===!1;function n1(o,t){o=St.isArray(o)?o:[o];const{length:i}=o;let s,u;const f={};for(let p=0;p<i;p++){s=o[p];let _;if(u=s,!e1(s)&&(u=$m[(_=String(s)).toLowerCase()],u===void 0))throw new Re(`Unknown adapter '${_}'`);if(u&&(St.isFunction(u)||(u=u.get(t))))break;f[_||"#"+p]=u}if(!u){const p=Object.entries(f).map(([x,v])=>`adapter ${x} `+(v===!1?"is not supported by the environment":"is not available in the build"));let _=i?p.length>1?`since :
`+p.map(Bv).join(`
`):" "+Bv(p[0]):"as no adapter specified";throw new Re("There is no suitable adapter to dispatch the request "+_,"ERR_NOT_SUPPORT")}return u}const hy={getAdapter:n1,adapters:$m};function up(o){if(o.cancelToken&&o.cancelToken.throwIfRequested(),o.signal&&o.signal.aborted)throw new Cl(null,o)}function Fv(o){return up(o),o.headers=Oi.from(o.headers),o.data=cp.call(o,o.transformRequest),["post","put","patch"].indexOf(o.method)!==-1&&o.headers.setContentType("application/x-www-form-urlencoded",!1),hy.getAdapter(o.adapter||Xc.adapter,o)(o).then(function(s){return up(o),s.data=cp.call(o,o.transformResponse,s),s.headers=Oi.from(s.headers),s},function(s){return oy(s)||(up(o),s&&s.response&&(s.response.data=cp.call(o,o.transformResponse,s.response),s.response.headers=Oi.from(s.response.headers))),Promise.reject(s)})}const dy="1.13.2",sh={};["object","boolean","number","function","string","symbol"].forEach((o,t)=>{sh[o]=function(s){return typeof s===o||"a"+(t<1?"n ":" ")+o}});const Hv={};sh.transitional=function(t,i,s){function u(f,p){return"[Axios v"+dy+"] Transitional option '"+f+"'"+p+(s?". "+s:"")}return(f,p,_)=>{if(t===!1)throw new Re(u(p," has been removed"+(i?" in "+i:"")),Re.ERR_DEPRECATED);return i&&!Hv[p]&&(Hv[p]=!0,console.warn(u(p," has been deprecated since v"+i+" and will be removed in the near future"))),t?t(f,p,_):!0}};sh.spelling=function(t){return(i,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)};function i1(o,t,i){if(typeof o!="object")throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const s=Object.keys(o);let u=s.length;for(;u-- >0;){const f=s[u],p=t[f];if(p){const _=o[f],x=_===void 0||p(_,f,o);if(x!==!0)throw new Re("option "+f+" must be "+x,Re.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new Re("Unknown option "+f,Re.ERR_BAD_OPTION)}}const jf={assertOptions:i1,validators:sh},ja=jf.validators;let po=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Cv,response:new Cv}}async request(t,i){try{return await this._request(t,i)}catch(s){if(s instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const f=u.stack?u.stack.replace(/^.+\n/,""):"";try{s.stack?f&&!String(s.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+f):s.stack=f}catch{}}throw s}}_request(t,i){typeof t=="string"?(i=i||{},i.url=t):i=t||{},i=mo(this.defaults,i);const{transitional:s,paramsSerializer:u,headers:f}=i;s!==void 0&&jf.assertOptions(s,{silentJSONParsing:ja.transitional(ja.boolean),forcedJSONParsing:ja.transitional(ja.boolean),clarifyTimeoutError:ja.transitional(ja.boolean)},!1),u!=null&&(St.isFunction(u)?i.paramsSerializer={serialize:u}:jf.assertOptions(u,{encode:ja.function,serialize:ja.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),jf.assertOptions(i,{baseUrl:ja.spelling("baseURL"),withXsrfToken:ja.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let p=f&&St.merge(f.common,f[i.method]);f&&St.forEach(["delete","get","head","post","put","patch","common"],w=>{delete f[w]}),i.headers=Oi.concat(p,f);const _=[];let x=!0;this.interceptors.request.forEach(function(N){typeof N.runWhen=="function"&&N.runWhen(i)===!1||(x=x&&N.synchronous,_.unshift(N.fulfilled,N.rejected))});const v=[];this.interceptors.response.forEach(function(N){v.push(N.fulfilled,N.rejected)});let y,b=0,S;if(!x){const w=[Fv.bind(this),void 0];for(w.unshift(..._),w.push(...v),S=w.length,y=Promise.resolve(i);b<S;)y=y.then(w[b++],w[b++]);return y}S=_.length;let C=i;for(;b<S;){const w=_[b++],N=_[b++];try{C=w(C)}catch(A){N.call(this,A);break}}try{y=Fv.call(this,C)}catch(w){return Promise.reject(w)}for(b=0,S=v.length;b<S;)y=y.then(v[b++],v[b++]);return y}getUri(t){t=mo(this.defaults,t);const i=cy(t.baseURL,t.url,t.allowAbsoluteUrls);return ay(i,t.params,t.paramsSerializer)}};St.forEach(["delete","get","head","options"],function(t){po.prototype[t]=function(i,s){return this.request(mo(s||{},{method:t,url:i,data:(s||{}).data}))}});St.forEach(["post","put","patch"],function(t){function i(s){return function(f,p,_){return this.request(mo(_||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:p}))}}po.prototype[t]=i(),po.prototype[t+"Form"]=i(!0)});let a1=class py{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(f){i=f});const s=this;this.promise.then(u=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](u);s._listeners=null}),this.promise.then=u=>{let f;const p=new Promise(_=>{s.subscribe(_),f=_}).then(u);return p.cancel=function(){s.unsubscribe(f)},p},t(function(f,p,_){s.reason||(s.reason=new Cl(f,p,_),i(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const i=this._listeners.indexOf(t);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const t=new AbortController,i=s=>{t.abort(s)};return this.subscribe(i),t.signal.unsubscribe=()=>this.unsubscribe(i),t.signal}static source(){let t;return{token:new py(function(u){t=u}),cancel:t}}};function r1(o){return function(i){return o.apply(null,i)}}function s1(o){return St.isObject(o)&&o.isAxiosError===!0}const Jp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Jp).forEach(([o,t])=>{Jp[t]=o});function my(o){const t=new po(o),i=Xx(po.prototype.request,t);return St.extend(i,po.prototype,t,{allOwnKeys:!0}),St.extend(i,t,null,{allOwnKeys:!0}),i.create=function(u){return my(mo(o,u))},i}const bn=my(Xc);bn.Axios=po;bn.CanceledError=Cl;bn.CancelToken=a1;bn.isCancel=oy;bn.VERSION=dy;bn.toFormData=rh;bn.AxiosError=Re;bn.Cancel=bn.CanceledError;bn.all=function(t){return Promise.all(t)};bn.spread=r1;bn.isAxiosError=s1;bn.mergeConfig=mo;bn.AxiosHeaders=Oi;bn.formToJSON=o=>sy(St.isHTMLForm(o)?new FormData(o):o);bn.getAdapter=hy.getAdapter;bn.HttpStatusCode=Jp;bn.default=bn;const{Axios:cR,AxiosError:uR,CanceledError:fR,isCancel:hR,CancelToken:dR,VERSION:pR,all:mR,Cancel:_R,isAxiosError:gR,spread:vR,toFormData:xR,AxiosHeaders:yR,HttpStatusCode:SR,formToJSON:bR,getAdapter:MR,mergeConfig:ER}=bn;function o1(o,t){const i=he.useRef(t);he.useEffect(function(){t!==i.current&&o.attributionControl!=null&&(i.current!=null&&o.attributionControl.removeAttribution(i.current),t!=null&&o.attributionControl.addAttribution(t)),i.current=t},[o,t])}jx();const l1=1;function c1(o){return Object.freeze({__version:l1,map:o})}function _y(o,t){return Object.freeze({...o,...t})}const t_=he.createContext(null);function e_(){const o=he.use(t_);if(o==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return o}function gy(o){function t(i,s){const{instance:u,context:f}=o(i).current;he.useImperativeHandle(s,()=>u);const{children:p}=i;return p==null?null:qp.createElement(t_,{value:f},p)}return he.forwardRef(t)}function u1(o){function t(i,s){const{instance:u}=o(i).current;return he.useImperativeHandle(s,()=>u),null}return he.forwardRef(t)}function vy(o,t){const i=he.useRef(void 0);he.useEffect(function(){return t!=null&&o.instance.on(t),i.current=t,function(){i.current!=null&&o.instance.off(i.current),i.current=null}},[o,t])}function n_(o,t){const i=o.pane??t.pane;return i?{...o,pane:i}:o}var zc={exports:{}};var f1=zc.exports,kv;function h1(){return kv||(kv=1,(function(o,t){(function(i,s){s(t)})(f1,(function(i){var s="1.9.4";function u(a){var l,h,g,M;for(h=1,g=arguments.length;h<g;h++){M=arguments[h];for(l in M)a[l]=M[l]}return a}var f=Object.create||(function(){function a(){}return function(l){return a.prototype=l,new a}})();function p(a,l){var h=Array.prototype.slice;if(a.bind)return a.bind.apply(a,h.call(arguments,1));var g=h.call(arguments,2);return function(){return a.apply(l,g.length?g.concat(h.call(arguments)):arguments)}}var _=0;function x(a){return"_leaflet_id"in a||(a._leaflet_id=++_),a._leaflet_id}function v(a,l,h){var g,M,U,Y;return Y=function(){g=!1,M&&(U.apply(h,M),M=!1)},U=function(){g?M=arguments:(a.apply(h,arguments),setTimeout(Y,l),g=!0)},U}function y(a,l,h){var g=l[1],M=l[0],U=g-M;return a===g&&h?a:((a-M)%U+U)%U+M}function b(){return!1}function S(a,l){if(l===!1)return a;var h=Math.pow(10,l===void 0?6:l);return Math.round(a*h)/h}function C(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function w(a){return C(a).split(/\s+/)}function N(a,l){Object.prototype.hasOwnProperty.call(a,"options")||(a.options=a.options?f(a.options):{});for(var h in l)a.options[h]=l[h];return a.options}function A(a,l,h){var g=[];for(var M in a)g.push(encodeURIComponent(h?M.toUpperCase():M)+"="+encodeURIComponent(a[M]));return(!l||l.indexOf("?")===-1?"?":"&")+g.join("&")}var E=/\{ *([\w_ -]+) *\}/g;function P(a,l){return a.replace(E,function(h,g){var M=l[g];if(M===void 0)throw new Error("No value provided for variable "+h);return typeof M=="function"&&(M=M(l)),M})}var B=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"};function F(a,l){for(var h=0;h<a.length;h++)if(a[h]===l)return h;return-1}var X="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function V(a){return window["webkit"+a]||window["moz"+a]||window["ms"+a]}var j=0;function D(a){var l=+new Date,h=Math.max(0,16-(l-j));return j=l+h,window.setTimeout(a,h)}var H=window.requestAnimationFrame||V("RequestAnimationFrame")||D,vt=window.cancelAnimationFrame||V("CancelAnimationFrame")||V("CancelRequestAnimationFrame")||function(a){window.clearTimeout(a)};function Z(a,l,h){if(h&&H===D)a.call(l);else return H.call(window,p(a,l))}function rt(a){a&&vt.call(window,a)}var ft={__proto__:null,extend:u,create:f,bind:p,get lastId(){return _},stamp:x,throttle:v,wrapNum:y,falseFn:b,formatNum:S,trim:C,splitWords:w,setOptions:N,getParamString:A,template:P,isArray:B,indexOf:F,emptyImageUrl:X,requestFn:H,cancelFn:vt,requestAnimFrame:Z,cancelAnimFrame:rt};function mt(){}mt.extend=function(a){var l=function(){N(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},h=l.__super__=this.prototype,g=f(h);g.constructor=l,l.prototype=g;for(var M in this)Object.prototype.hasOwnProperty.call(this,M)&&M!=="prototype"&&M!=="__super__"&&(l[M]=this[M]);return a.statics&&u(l,a.statics),a.includes&&(lt(a.includes),u.apply(null,[g].concat(a.includes))),u(g,a),delete g.statics,delete g.includes,g.options&&(g.options=h.options?f(h.options):{},u(g.options,a.options)),g._initHooks=[],g.callInitHooks=function(){if(!this._initHooksCalled){h.callInitHooks&&h.callInitHooks.call(this),this._initHooksCalled=!0;for(var U=0,Y=g._initHooks.length;U<Y;U++)g._initHooks[U].call(this)}},l},mt.include=function(a){var l=this.prototype.options;return u(this.prototype,a),a.options&&(this.prototype.options=l,this.mergeOptions(a.options)),this},mt.mergeOptions=function(a){return u(this.prototype.options,a),this},mt.addInitHook=function(a){var l=Array.prototype.slice.call(arguments,1),h=typeof a=="function"?a:function(){this[a].apply(this,l)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(h),this};function lt(a){if(!(typeof L>"u"||!L||!L.Mixin)){a=B(a)?a:[a];for(var l=0;l<a.length;l++)a[l]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var G={on:function(a,l,h){if(typeof a=="object")for(var g in a)this._on(g,a[g],l);else{a=w(a);for(var M=0,U=a.length;M<U;M++)this._on(a[M],l,h)}return this},off:function(a,l,h){if(!arguments.length)delete this._events;else if(typeof a=="object")for(var g in a)this._off(g,a[g],l);else{a=w(a);for(var M=arguments.length===1,U=0,Y=a.length;U<Y;U++)M?this._off(a[U]):this._off(a[U],l,h)}return this},_on:function(a,l,h,g){if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}if(this._listens(a,l,h)===!1){h===this&&(h=void 0);var M={fn:l,ctx:h};g&&(M.once=!0),this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(M)}},_off:function(a,l,h){var g,M,U;if(this._events&&(g=this._events[a],!!g)){if(arguments.length===1){if(this._firingCount)for(M=0,U=g.length;M<U;M++)g[M].fn=b;delete this._events[a];return}if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}var Y=this._listens(a,l,h);if(Y!==!1){var ot=g[Y];this._firingCount&&(ot.fn=b,this._events[a]=g=g.slice()),g.splice(Y,1)}}},fire:function(a,l,h){if(!this.listens(a,h))return this;var g=u({},l,{type:a,target:this,sourceTarget:l&&l.sourceTarget||this});if(this._events){var M=this._events[a];if(M){this._firingCount=this._firingCount+1||1;for(var U=0,Y=M.length;U<Y;U++){var ot=M[U],_t=ot.fn;ot.once&&this.off(a,_t,ot.ctx),_t.call(ot.ctx||this,g)}this._firingCount--}}return h&&this._propagateEvent(g),this},listens:function(a,l,h,g){typeof a!="string"&&console.warn('"string" type argument expected');var M=l;typeof l!="function"&&(g=!!l,M=void 0,h=void 0);var U=this._events&&this._events[a];if(U&&U.length&&this._listens(a,M,h)!==!1)return!0;if(g){for(var Y in this._eventParents)if(this._eventParents[Y].listens(a,l,h,g))return!0}return!1},_listens:function(a,l,h){if(!this._events)return!1;var g=this._events[a]||[];if(!l)return!!g.length;h===this&&(h=void 0);for(var M=0,U=g.length;M<U;M++)if(g[M].fn===l&&g[M].ctx===h)return M;return!1},once:function(a,l,h){if(typeof a=="object")for(var g in a)this._on(g,a[g],l,!0);else{a=w(a);for(var M=0,U=a.length;M<U;M++)this._on(a[M],l,h,!0)}return this},addEventParent:function(a){return this._eventParents=this._eventParents||{},this._eventParents[x(a)]=a,this},removeEventParent:function(a){return this._eventParents&&delete this._eventParents[x(a)],this},_propagateEvent:function(a){for(var l in this._eventParents)this._eventParents[l].fire(a.type,u({layer:a.target,propagatedFrom:a.target},a),!0)}};G.addEventListener=G.on,G.removeEventListener=G.clearAllEventListeners=G.off,G.addOneTimeEventListener=G.once,G.fireEvent=G.fire,G.hasEventListeners=G.listens;var q=mt.extend(G);function it(a,l,h){this.x=h?Math.round(a):a,this.y=h?Math.round(l):l}var At=Math.trunc||function(a){return a>0?Math.floor(a):Math.ceil(a)};it.prototype={clone:function(){return new it(this.x,this.y)},add:function(a){return this.clone()._add(xt(a))},_add:function(a){return this.x+=a.x,this.y+=a.y,this},subtract:function(a){return this.clone()._subtract(xt(a))},_subtract:function(a){return this.x-=a.x,this.y-=a.y,this},divideBy:function(a){return this.clone()._divideBy(a)},_divideBy:function(a){return this.x/=a,this.y/=a,this},multiplyBy:function(a){return this.clone()._multiplyBy(a)},_multiplyBy:function(a){return this.x*=a,this.y*=a,this},scaleBy:function(a){return new it(this.x*a.x,this.y*a.y)},unscaleBy:function(a){return new it(this.x/a.x,this.y/a.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=At(this.x),this.y=At(this.y),this},distanceTo:function(a){a=xt(a);var l=a.x-this.x,h=a.y-this.y;return Math.sqrt(l*l+h*h)},equals:function(a){return a=xt(a),a.x===this.x&&a.y===this.y},contains:function(a){return a=xt(a),Math.abs(a.x)<=Math.abs(this.x)&&Math.abs(a.y)<=Math.abs(this.y)},toString:function(){return"Point("+S(this.x)+", "+S(this.y)+")"}};function xt(a,l,h){return a instanceof it?a:B(a)?new it(a[0],a[1]):a==null?a:typeof a=="object"&&"x"in a&&"y"in a?new it(a.x,a.y):new it(a,l,h)}function I(a,l){if(a)for(var h=l?[a,l]:a,g=0,M=h.length;g<M;g++)this.extend(h[g])}I.prototype={extend:function(a){var l,h;if(!a)return this;if(a instanceof it||typeof a[0]=="number"||"x"in a)l=h=xt(a);else if(a=K(a),l=a.min,h=a.max,!l||!h)return this;return!this.min&&!this.max?(this.min=l.clone(),this.max=h.clone()):(this.min.x=Math.min(l.x,this.min.x),this.max.x=Math.max(h.x,this.max.x),this.min.y=Math.min(l.y,this.min.y),this.max.y=Math.max(h.y,this.max.y)),this},getCenter:function(a){return xt((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,a)},getBottomLeft:function(){return xt(this.min.x,this.max.y)},getTopRight:function(){return xt(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(a){var l,h;return typeof a[0]=="number"||a instanceof it?a=xt(a):a=K(a),a instanceof I?(l=a.min,h=a.max):l=h=a,l.x>=this.min.x&&h.x<=this.max.x&&l.y>=this.min.y&&h.y<=this.max.y},intersects:function(a){a=K(a);var l=this.min,h=this.max,g=a.min,M=a.max,U=M.x>=l.x&&g.x<=h.x,Y=M.y>=l.y&&g.y<=h.y;return U&&Y},overlaps:function(a){a=K(a);var l=this.min,h=this.max,g=a.min,M=a.max,U=M.x>l.x&&g.x<h.x,Y=M.y>l.y&&g.y<h.y;return U&&Y},isValid:function(){return!!(this.min&&this.max)},pad:function(a){var l=this.min,h=this.max,g=Math.abs(l.x-h.x)*a,M=Math.abs(l.y-h.y)*a;return K(xt(l.x-g,l.y-M),xt(h.x+g,h.y+M))},equals:function(a){return a?(a=K(a),this.min.equals(a.getTopLeft())&&this.max.equals(a.getBottomRight())):!1}};function K(a,l){return!a||a instanceof I?a:new I(a,l)}function bt(a,l){if(a)for(var h=l?[a,l]:a,g=0,M=h.length;g<M;g++)this.extend(h[g])}bt.prototype={extend:function(a){var l=this._southWest,h=this._northEast,g,M;if(a instanceof Ot)g=a,M=a;else if(a instanceof bt){if(g=a._southWest,M=a._northEast,!g||!M)return this}else return a?this.extend(nt(a)||wt(a)):this;return!l&&!h?(this._southWest=new Ot(g.lat,g.lng),this._northEast=new Ot(M.lat,M.lng)):(l.lat=Math.min(g.lat,l.lat),l.lng=Math.min(g.lng,l.lng),h.lat=Math.max(M.lat,h.lat),h.lng=Math.max(M.lng,h.lng)),this},pad:function(a){var l=this._southWest,h=this._northEast,g=Math.abs(l.lat-h.lat)*a,M=Math.abs(l.lng-h.lng)*a;return new bt(new Ot(l.lat-g,l.lng-M),new Ot(h.lat+g,h.lng+M))},getCenter:function(){return new Ot((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Ot(this.getNorth(),this.getWest())},getSouthEast:function(){return new Ot(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(a){typeof a[0]=="number"||a instanceof Ot||"lat"in a?a=nt(a):a=wt(a);var l=this._southWest,h=this._northEast,g,M;return a instanceof bt?(g=a.getSouthWest(),M=a.getNorthEast()):g=M=a,g.lat>=l.lat&&M.lat<=h.lat&&g.lng>=l.lng&&M.lng<=h.lng},intersects:function(a){a=wt(a);var l=this._southWest,h=this._northEast,g=a.getSouthWest(),M=a.getNorthEast(),U=M.lat>=l.lat&&g.lat<=h.lat,Y=M.lng>=l.lng&&g.lng<=h.lng;return U&&Y},overlaps:function(a){a=wt(a);var l=this._southWest,h=this._northEast,g=a.getSouthWest(),M=a.getNorthEast(),U=M.lat>l.lat&&g.lat<h.lat,Y=M.lng>l.lng&&g.lng<h.lng;return U&&Y},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(a,l){return a?(a=wt(a),this._southWest.equals(a.getSouthWest(),l)&&this._northEast.equals(a.getNorthEast(),l)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function wt(a,l){return a instanceof bt?a:new bt(a,l)}function Ot(a,l,h){if(isNaN(a)||isNaN(l))throw new Error("Invalid LatLng object: ("+a+", "+l+")");this.lat=+a,this.lng=+l,h!==void 0&&(this.alt=+h)}Ot.prototype={equals:function(a,l){if(!a)return!1;a=nt(a);var h=Math.max(Math.abs(this.lat-a.lat),Math.abs(this.lng-a.lng));return h<=(l===void 0?1e-9:l)},toString:function(a){return"LatLng("+S(this.lat,a)+", "+S(this.lng,a)+")"},distanceTo:function(a){return zt.distance(this,nt(a))},wrap:function(){return zt.wrapLatLng(this)},toBounds:function(a){var l=180*a/40075017,h=l/Math.cos(Math.PI/180*this.lat);return wt([this.lat-l,this.lng-h],[this.lat+l,this.lng+h])},clone:function(){return new Ot(this.lat,this.lng,this.alt)}};function nt(a,l,h){return a instanceof Ot?a:B(a)&&typeof a[0]!="object"?a.length===3?new Ot(a[0],a[1],a[2]):a.length===2?new Ot(a[0],a[1]):null:a==null?a:typeof a=="object"&&"lat"in a?new Ot(a.lat,"lng"in a?a.lng:a.lon,a.alt):l===void 0?null:new Ot(a,l,h)}var Lt={latLngToPoint:function(a,l){var h=this.projection.project(a),g=this.scale(l);return this.transformation._transform(h,g)},pointToLatLng:function(a,l){var h=this.scale(l),g=this.transformation.untransform(a,h);return this.projection.unproject(g)},project:function(a){return this.projection.project(a)},unproject:function(a){return this.projection.unproject(a)},scale:function(a){return 256*Math.pow(2,a)},zoom:function(a){return Math.log(a/256)/Math.LN2},getProjectedBounds:function(a){if(this.infinite)return null;var l=this.projection.bounds,h=this.scale(a),g=this.transformation.transform(l.min,h),M=this.transformation.transform(l.max,h);return new I(g,M)},infinite:!1,wrapLatLng:function(a){var l=this.wrapLng?y(a.lng,this.wrapLng,!0):a.lng,h=this.wrapLat?y(a.lat,this.wrapLat,!0):a.lat,g=a.alt;return new Ot(h,l,g)},wrapLatLngBounds:function(a){var l=a.getCenter(),h=this.wrapLatLng(l),g=l.lat-h.lat,M=l.lng-h.lng;if(g===0&&M===0)return a;var U=a.getSouthWest(),Y=a.getNorthEast(),ot=new Ot(U.lat-g,U.lng-M),_t=new Ot(Y.lat-g,Y.lng-M);return new bt(ot,_t)}},zt=u({},Lt,{wrapLng:[-180,180],R:6371e3,distance:function(a,l){var h=Math.PI/180,g=a.lat*h,M=l.lat*h,U=Math.sin((l.lat-a.lat)*h/2),Y=Math.sin((l.lng-a.lng)*h/2),ot=U*U+Math.cos(g)*Math.cos(M)*Y*Y,_t=2*Math.atan2(Math.sqrt(ot),Math.sqrt(1-ot));return this.R*_t}}),ae=6378137,de={R:ae,MAX_LATITUDE:85.0511287798,project:function(a){var l=Math.PI/180,h=this.MAX_LATITUDE,g=Math.max(Math.min(h,a.lat),-h),M=Math.sin(g*l);return new it(this.R*a.lng*l,this.R*Math.log((1+M)/(1-M))/2)},unproject:function(a){var l=180/Math.PI;return new Ot((2*Math.atan(Math.exp(a.y/this.R))-Math.PI/2)*l,a.x*l/this.R)},bounds:(function(){var a=ae*Math.PI;return new I([-a,-a],[a,a])})()};function ve(a,l,h,g){if(B(a)){this._a=a[0],this._b=a[1],this._c=a[2],this._d=a[3];return}this._a=a,this._b=l,this._c=h,this._d=g}ve.prototype={transform:function(a,l){return this._transform(a.clone(),l)},_transform:function(a,l){return l=l||1,a.x=l*(this._a*a.x+this._b),a.y=l*(this._c*a.y+this._d),a},untransform:function(a,l){return l=l||1,new it((a.x/l-this._b)/this._a,(a.y/l-this._d)/this._c)}};function hn(a,l,h,g){return new ve(a,l,h,g)}var Ne=u({},zt,{code:"EPSG:3857",projection:de,transformation:(function(){var a=.5/(Math.PI*de.R);return hn(a,.5,-a,.5)})()}),ze=u({},Ne,{code:"EPSG:900913"});function qe(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function Ee(a,l){var h="",g,M,U,Y,ot,_t;for(g=0,U=a.length;g<U;g++){for(ot=a[g],M=0,Y=ot.length;M<Y;M++)_t=ot[M],h+=(M?"L":"M")+_t.x+" "+_t.y;h+=l?ue.svg?"z":"x":""}return h||"M0 0"}var gn=document.documentElement.style,Q="ActiveXObject"in window,xn=Q&&!document.addEventListener,Be="msLaunchUri"in navigator&&!("documentMode"in document),Ze=ti("webkit"),ce=ti("android"),W=ti("android 2")||ti("android 3"),R=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),at=ce&&ti("Google")&&R<537&&!("AudioNode"in window),Ct=!!window.opera,Nt=!Be&&ti("chrome"),Tt=ti("gecko")&&!Ze&&!Ct&&!Q,se=!Nt&&ti("safari"),Gt=ti("phantom"),pe="OTransition"in gn,xe=navigator.platform.indexOf("Win")===0,Bt=Q&&"transition"in gn,It="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!W,Jt="MozPerspective"in gn,qt=!window.L_DISABLE_3D&&(Bt||It||Jt)&&!pe&&!Gt,Zt=typeof orientation<"u"||ti("mobile"),we=Zt&&Ze,et=Zt&&It,kt=!window.PointerEvent&&window.MSPointerEvent,Ht=!!(window.PointerEvent||kt),Qt="ontouchstart"in window||!!window.TouchEvent,Ft=!window.L_NO_TOUCH&&(Qt||Ht),Et=Zt&&Ct,ee=Zt&&Tt,be=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,rn=(function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testPassiveEventSupport",b,l),window.removeEventListener("testPassiveEventSupport",b,l)}catch{}return a})(),je=(function(){return!!document.createElement("canvas").getContext})(),Vn=!!(document.createElementNS&&qe("svg").createSVGRect),Ii=!!Vn&&(function(){var a=document.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),bs=!Vn&&(function(){try{var a=document.createElement("div");a.innerHTML='<v:shape adj="1"/>';var l=a.firstChild;return l.style.behavior="url(#default#VML)",l&&typeof l.adj=="object"}catch{return!1}})(),Nr=navigator.platform.indexOf("Mac")===0,go=navigator.platform.indexOf("Linux")===0;function ti(a){return navigator.userAgent.toLowerCase().indexOf(a)>=0}var ue={ie:Q,ielt9:xn,edge:Be,webkit:Ze,android:ce,android23:W,androidStock:at,opera:Ct,chrome:Nt,gecko:Tt,safari:se,phantom:Gt,opera12:pe,win:xe,ie3d:Bt,webkit3d:It,gecko3d:Jt,any3d:qt,mobile:Zt,mobileWebkit:we,mobileWebkit3d:et,msPointer:kt,pointer:Ht,touch:Ft,touchNative:Qt,mobileOpera:Et,mobileGecko:ee,retina:be,passiveEvents:rn,canvas:je,svg:Vn,vml:bs,inlineSvg:Ii,mac:Nr,linux:go},Bi=ue.msPointer?"MSPointerDown":"pointerdown",ir=ue.msPointer?"MSPointerMove":"pointermove",bi=ue.msPointer?"MSPointerUp":"pointerup",Tn=ue.msPointer?"MSPointerCancel":"pointercancel",An={touchstart:Bi,touchmove:ir,touchend:bi,touchcancel:Tn},$i={touchstart:z,touchmove:ta,touchend:ta,touchcancel:ta},mi={},Ms=!1;function vo(a,l,h){return l==="touchstart"&&Da(),$i[l]?(h=$i[l].bind(this,h),a.addEventListener(An[l],h,!1),h):(console.warn("wrong event specified:",l),b)}function xo(a,l,h){if(!An[l]){console.warn("wrong event specified:",l);return}a.removeEventListener(An[l],h,!1)}function ar(a){mi[a.pointerId]=a}function Es(a){mi[a.pointerId]&&(mi[a.pointerId]=a)}function _a(a){delete mi[a.pointerId]}function Da(){Ms||(document.addEventListener(Bi,ar,!0),document.addEventListener(ir,Es,!0),document.addEventListener(bi,_a,!0),document.addEventListener(Tn,_a,!0),Ms=!0)}function ta(a,l){if(l.pointerType!==(l.MSPOINTER_TYPE_MOUSE||"mouse")){l.touches=[];for(var h in mi)l.touches.push(mi[h]);l.changedTouches=[l],a(l)}}function z(a,l){l.MSPOINTER_TYPE_TOUCH&&l.pointerType===l.MSPOINTER_TYPE_TOUCH&&Rn(l),ta(a,l)}function tt(a){var l={},h,g;for(g in a)h=a[g],l[g]=h&&h.bind?h.bind(a):h;return a=l,l.type="dblclick",l.detail=2,l.isTrusted=!1,l._simulated=!0,l}var yt=200;function pt(a,l){a.addEventListener("dblclick",l);var h=0,g;function M(U){if(U.detail!==1){g=U.detail;return}if(!(U.pointerType==="mouse"||U.sourceCapabilities&&!U.sourceCapabilities.firesTouchEvents)){var Y=ws(U);if(!(Y.some(function(_t){return _t instanceof HTMLLabelElement&&_t.attributes.for})&&!Y.some(function(_t){return _t instanceof HTMLInputElement||_t instanceof HTMLSelectElement}))){var ot=Date.now();ot-h<=yt?(g++,g===2&&l(tt(U))):g=1,h=ot}}}return a.addEventListener("click",M),{dblclick:l,simDblclick:M}}function ct(a,l){a.removeEventListener("dblclick",l.dblclick),a.removeEventListener("click",l.simDblclick)}var Vt=Yn(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Kt=Yn(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Xt=Kt==="webkitTransition"||Kt==="OTransition"?Kt+"End":"transitionend";function re(a){return typeof a=="string"?document.getElementById(a):a}function oe(a,l){var h=a.style[l]||a.currentStyle&&a.currentStyle[l];if((!h||h==="auto")&&document.defaultView){var g=document.defaultView.getComputedStyle(a,null);h=g?g[l]:null}return h==="auto"?null:h}function jt(a,l,h){var g=document.createElement(a);return g.className=l||"",h&&h.appendChild(g),g}function ne(a){var l=a.parentNode;l&&l.removeChild(a)}function te(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function Me(a){var l=a.parentNode;l&&l.lastChild!==a&&l.appendChild(a)}function sn(a){var l=a.parentNode;l&&l.firstChild!==a&&l.insertBefore(a,l.firstChild)}function dn(a,l){if(a.classList!==void 0)return a.classList.contains(l);var h=In(a);return h.length>0&&new RegExp("(^|\\s)"+l+"(\\s|$)").test(h)}function $t(a,l){if(a.classList!==void 0)for(var h=w(l),g=0,M=h.length;g<M;g++)a.classList.add(h[g]);else if(!dn(a,l)){var U=In(a);ie(a,(U?U+" ":"")+l)}}function Le(a,l){a.classList!==void 0?a.classList.remove(l):ie(a,C((" "+In(a)+" ").replace(" "+l+" "," ")))}function ie(a,l){a.className.baseVal===void 0?a.className=l:a.className.baseVal=l}function In(a){return a.correspondingElement&&(a=a.correspondingElement),a.className.baseVal===void 0?a.className:a.className.baseVal}function _e(a,l){"opacity"in a.style?a.style.opacity=l:"filter"in a.style&&ei(a,l)}function ei(a,l){var h=!1,g="DXImageTransform.Microsoft.Alpha";try{h=a.filters.item(g)}catch{if(l===1)return}l=Math.round(l*100),h?(h.Enabled=l!==100,h.Opacity=l):a.style.filter+=" progid:"+g+"(opacity="+l+")"}function Yn(a){for(var l=document.documentElement.style,h=0;h<a.length;h++)if(a[h]in l)return a[h];return!1}function Wn(a,l,h){var g=l||new it(0,0);a.style[Vt]=(ue.ie3d?"translate("+g.x+"px,"+g.y+"px)":"translate3d("+g.x+"px,"+g.y+"px,0)")+(h?" scale("+h+")":"")}function Ye(a,l){a._leaflet_pos=l,ue.any3d?Wn(a,l):(a.style.left=l.x+"px",a.style.top=l.y+"px")}function Ie(a){return a._leaflet_pos||new it(0,0)}var yn,Nn,Mn;if("onselectstart"in document)yn=function(){Se(window,"selectstart",Rn)},Nn=function(){ln(window,"selectstart",Rn)};else{var ni=Yn(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);yn=function(){if(ni){var a=document.documentElement.style;Mn=a[ni],a[ni]="none"}},Nn=function(){ni&&(document.documentElement.style[ni]=Mn,Mn=void 0)}}function Fi(){Se(window,"dragstart",Rn)}function Pa(){ln(window,"dragstart",Rn)}var yo,Ul;function Or(a){for(;a.tabIndex===-1;)a=a.parentNode;a.style&&(Mi(),yo=a,Ul=a.style.outlineStyle,a.style.outlineStyle="none",Se(window,"keydown",Mi))}function Mi(){yo&&(yo.style.outlineStyle=Ul,yo=void 0,Ul=void 0,ln(window,"keydown",Mi))}function So(a){do a=a.parentNode;while((!a.offsetWidth||!a.offsetHeight)&&a!==document.body);return a}function Ts(a){var l=a.getBoundingClientRect();return{x:l.width/a.offsetWidth||1,y:l.height/a.offsetHeight||1,boundingClientRect:l}}var zr={__proto__:null,TRANSFORM:Vt,TRANSITION:Kt,TRANSITION_END:Xt,get:re,getStyle:oe,create:jt,remove:ne,empty:te,toFront:Me,toBack:sn,hasClass:dn,addClass:$t,removeClass:Le,setClass:ie,getClass:In,setOpacity:_e,testProp:Yn,setTransform:Wn,setPosition:Ye,getPosition:Ie,get disableTextSelection(){return yn},get enableTextSelection(){return Nn},disableImageDrag:Fi,enableImageDrag:Pa,preventOutline:Or,restoreOutline:Mi,getSizedParentNode:So,getScale:Ts};function Se(a,l,h,g){if(l&&typeof l=="object")for(var M in l)ki(a,M,l[M],h);else{l=w(l);for(var U=0,Y=l.length;U<Y;U++)ki(a,l[U],h,g)}return this}var Hi="_leaflet_events";function ln(a,l,h,g){if(arguments.length===1)Nl(a),delete a[Hi];else if(l&&typeof l=="object")for(var M in l)As(a,M,l[M],h);else if(l=w(l),arguments.length===2)Nl(a,function(ot){return F(l,ot)!==-1});else for(var U=0,Y=l.length;U<Y;U++)As(a,l[U],h,g);return this}function Nl(a,l){for(var h in a[Hi]){var g=h.split(/\d/)[0];(!l||l(g))&&As(a,g,null,null,h)}}var rr={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ki(a,l,h,g){var M=l+x(h)+(g?"_"+x(g):"");if(a[Hi]&&a[Hi][M])return this;var U=function(ot){return h.call(g||a,ot||window.event)},Y=U;!ue.touchNative&&ue.pointer&&l.indexOf("touch")===0?U=vo(a,l,U):ue.touch&&l==="dblclick"?U=pt(a,U):"addEventListener"in a?l==="touchstart"||l==="touchmove"||l==="wheel"||l==="mousewheel"?a.addEventListener(rr[l]||l,U,ue.passiveEvents?{passive:!1}:!1):l==="mouseenter"||l==="mouseleave"?(U=function(ot){ot=ot||window.event,ga(a,ot)&&Y(ot)},a.addEventListener(rr[l],U,!1)):a.addEventListener(l,Y,!1):a.attachEvent("on"+l,U),a[Hi]=a[Hi]||{},a[Hi][M]=U}function As(a,l,h,g,M){M=M||l+x(h)+(g?"_"+x(g):"");var U=a[Hi]&&a[Hi][M];if(!U)return this;!ue.touchNative&&ue.pointer&&l.indexOf("touch")===0?xo(a,l,U):ue.touch&&l==="dblclick"?ct(a,U):"removeEventListener"in a?a.removeEventListener(rr[l]||l,U,!1):a.detachEvent("on"+l,U),a[Hi][M]=null}function Gi(a){return a.stopPropagation?a.stopPropagation():a.originalEvent?a.originalEvent._stopped=!0:a.cancelBubble=!0,this}function ea(a){return ki(a,"wheel",Gi),this}function sr(a){return Se(a,"mousedown touchstart dblclick contextmenu",Gi),a._leaflet_disable_click=!0,this}function Rn(a){return a.preventDefault?a.preventDefault():a.returnValue=!1,this}function Ua(a){return Rn(a),Gi(a),this}function ws(a){if(a.composedPath)return a.composedPath();for(var l=[],h=a.target;h;)l.push(h),h=h.parentNode;return l}function Cs(a,l){if(!l)return new it(a.clientX,a.clientY);var h=Ts(l),g=h.boundingClientRect;return new it((a.clientX-g.left)/h.x-l.clientLeft,(a.clientY-g.top)/h.y-l.clientTop)}var Qc=ue.linux&&ue.chrome?window.devicePixelRatio:ue.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function ii(a){return ue.edge?a.wheelDeltaY/2:a.deltaY&&a.deltaMode===0?-a.deltaY/Qc:a.deltaY&&a.deltaMode===1?-a.deltaY*20:a.deltaY&&a.deltaMode===2?-a.deltaY*60:a.deltaX||a.deltaZ?0:a.wheelDelta?(a.wheelDeltaY||a.wheelDelta)/2:a.detail&&Math.abs(a.detail)<32765?-a.detail*20:a.detail?a.detail/-32765*60:0}function ga(a,l){var h=l.relatedTarget;if(!h)return!0;try{for(;h&&h!==a;)h=h.parentNode}catch{return!1}return h!==a}var bo={__proto__:null,on:Se,off:ln,stopPropagation:Gi,disableScrollPropagation:ea,disableClickPropagation:sr,preventDefault:Rn,stop:Ua,getPropagationPath:ws,getMousePosition:Cs,getWheelDelta:ii,isExternalTarget:ga,addListener:Se,removeListener:ln},Ir=q.extend({run:function(a,l,h,g){this.stop(),this._el=a,this._inProgress=!0,this._duration=h||.25,this._easeOutPower=1/Math.max(g||.5,.2),this._startPos=Ie(a),this._offset=l.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Z(this._animate,this),this._step()},_step:function(a){var l=+new Date-this._startTime,h=this._duration*1e3;l<h?this._runFrame(this._easeOut(l/h),a):(this._runFrame(1),this._complete())},_runFrame:function(a,l){var h=this._startPos.add(this._offset.multiplyBy(a));l&&h._round(),Ye(this._el,h),this.fire("step")},_complete:function(){rt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(a){return 1-Math.pow(1-a,this._easeOutPower)}}),Ge=q.extend({options:{crs:Ne,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(a,l){l=N(this,l),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(a),this._initLayout(),this._onResize=p(this._onResize,this),this._initEvents(),l.maxBounds&&this.setMaxBounds(l.maxBounds),l.zoom!==void 0&&(this._zoom=this._limitZoom(l.zoom)),l.center&&l.zoom!==void 0&&this.setView(nt(l.center),l.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Kt&&ue.any3d&&!ue.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Se(this._proxy,Xt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(a,l,h){if(l=l===void 0?this._zoom:this._limitZoom(l),a=this._limitCenter(nt(a),l,this.options.maxBounds),h=h||{},this._stop(),this._loaded&&!h.reset&&h!==!0){h.animate!==void 0&&(h.zoom=u({animate:h.animate},h.zoom),h.pan=u({animate:h.animate,duration:h.duration},h.pan));var g=this._zoom!==l?this._tryAnimatedZoom&&this._tryAnimatedZoom(a,l,h.zoom):this._tryAnimatedPan(a,h.pan);if(g)return clearTimeout(this._sizeTimer),this}return this._resetView(a,l,h.pan&&h.pan.noMoveStart),this},setZoom:function(a,l){return this._loaded?this.setView(this.getCenter(),a,{zoom:l}):(this._zoom=a,this)},zoomIn:function(a,l){return a=a||(ue.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+a,l)},zoomOut:function(a,l){return a=a||(ue.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-a,l)},setZoomAround:function(a,l,h){var g=this.getZoomScale(l),M=this.getSize().divideBy(2),U=a instanceof it?a:this.latLngToContainerPoint(a),Y=U.subtract(M).multiplyBy(1-1/g),ot=this.containerPointToLatLng(M.add(Y));return this.setView(ot,l,{zoom:h})},_getBoundsCenterZoom:function(a,l){l=l||{},a=a.getBounds?a.getBounds():wt(a);var h=xt(l.paddingTopLeft||l.padding||[0,0]),g=xt(l.paddingBottomRight||l.padding||[0,0]),M=this.getBoundsZoom(a,!1,h.add(g));if(M=typeof l.maxZoom=="number"?Math.min(l.maxZoom,M):M,M===1/0)return{center:a.getCenter(),zoom:M};var U=g.subtract(h).divideBy(2),Y=this.project(a.getSouthWest(),M),ot=this.project(a.getNorthEast(),M),_t=this.unproject(Y.add(ot).divideBy(2).add(U),M);return{center:_t,zoom:M}},fitBounds:function(a,l){if(a=wt(a),!a.isValid())throw new Error("Bounds are not valid.");var h=this._getBoundsCenterZoom(a,l);return this.setView(h.center,h.zoom,l)},fitWorld:function(a){return this.fitBounds([[-90,-180],[90,180]],a)},panTo:function(a,l){return this.setView(a,this._zoom,{pan:l})},panBy:function(a,l){if(a=xt(a).round(),l=l||{},!a.x&&!a.y)return this.fire("moveend");if(l.animate!==!0&&!this.getSize().contains(a))return this._resetView(this.unproject(this.project(this.getCenter()).add(a)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ir,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),l.noMoveStart||this.fire("movestart"),l.animate!==!1){$t(this._mapPane,"leaflet-pan-anim");var h=this._getMapPanePos().subtract(a).round();this._panAnim.run(this._mapPane,h,l.duration||.25,l.easeLinearity)}else this._rawPanBy(a),this.fire("move").fire("moveend");return this},flyTo:function(a,l,h){if(h=h||{},h.animate===!1||!ue.any3d)return this.setView(a,l,h);this._stop();var g=this.project(this.getCenter()),M=this.project(a),U=this.getSize(),Y=this._zoom;a=nt(a),l=l===void 0?Y:l;var ot=Math.max(U.x,U.y),_t=ot*this.getZoomScale(Y,l),Pt=M.distanceTo(g)||1,Wt=1.42,me=Wt*Wt;function De(wn){var Sa=wn?-1:1,ur=wn?_t:ot,Yl=_t*_t-ot*ot+Sa*me*me*Pt*Pt,Ws=2*ur*me*Pt,js=Yl/Ws,Ga=Math.sqrt(js*js+1)-js,ba=Ga<1e-9?-18:Math.log(Ga);return ba}function jn(wn){return(Math.exp(wn)-Math.exp(-wn))/2}function Ln(wn){return(Math.exp(wn)+Math.exp(-wn))/2}function gi(wn){return jn(wn)/Ln(wn)}var $e=De(0);function tn(wn){return ot*(Ln($e)/Ln($e+Wt*wn))}function Fe(wn){return ot*(Ln($e)*gi($e+Wt*wn)-jn($e))/me}function Ha(wn){return 1-Math.pow(1-wn,1.5)}var wi=Date.now(),zo=(De(1)-$e)/Wt,ka=h.duration?1e3*h.duration:1e3*zo*.8;function Zl(){var wn=(Date.now()-wi)/ka,Sa=Ha(wn)*zo;wn<=1?(this._flyToFrame=Z(Zl,this),this._move(this.unproject(g.add(M.subtract(g).multiplyBy(Fe(Sa)/Pt)),Y),this.getScaleZoom(ot/tn(Sa),Y),{flyTo:!0})):this._move(a,l)._moveEnd(!0)}return this._moveStart(!0,h.noMoveStart),Zl.call(this),this},flyToBounds:function(a,l){var h=this._getBoundsCenterZoom(a,l);return this.flyTo(h.center,h.zoom,l)},setMaxBounds:function(a){return a=wt(a),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),a.isValid()?(this.options.maxBounds=a,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(a){var l=this.options.minZoom;return this.options.minZoom=a,this._loaded&&l!==a&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(a):this},setMaxZoom:function(a){var l=this.options.maxZoom;return this.options.maxZoom=a,this._loaded&&l!==a&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(a):this},panInsideBounds:function(a,l){this._enforcingBounds=!0;var h=this.getCenter(),g=this._limitCenter(h,this._zoom,wt(a));return h.equals(g)||this.panTo(g,l),this._enforcingBounds=!1,this},panInside:function(a,l){l=l||{};var h=xt(l.paddingTopLeft||l.padding||[0,0]),g=xt(l.paddingBottomRight||l.padding||[0,0]),M=this.project(this.getCenter()),U=this.project(a),Y=this.getPixelBounds(),ot=K([Y.min.add(h),Y.max.subtract(g)]),_t=ot.getSize();if(!ot.contains(U)){this._enforcingBounds=!0;var Pt=U.subtract(ot.getCenter()),Wt=ot.extend(U).getSize().subtract(_t);M.x+=Pt.x<0?-Wt.x:Wt.x,M.y+=Pt.y<0?-Wt.y:Wt.y,this.panTo(this.unproject(M),l),this._enforcingBounds=!1}return this},invalidateSize:function(a){if(!this._loaded)return this;a=u({animate:!1,pan:!0},a===!0?{animate:!0}:a);var l=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var h=this.getSize(),g=l.divideBy(2).round(),M=h.divideBy(2).round(),U=g.subtract(M);return!U.x&&!U.y?this:(a.animate&&a.pan?this.panBy(U):(a.pan&&this._rawPanBy(U),this.fire("move"),a.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(p(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:l,newSize:h}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(a){if(a=this._locateOptions=u({timeout:1e4,watch:!1},a),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var l=p(this._handleGeolocationResponse,this),h=p(this._handleGeolocationError,this);return a.watch?this._locationWatchId=navigator.geolocation.watchPosition(l,h,a):navigator.geolocation.getCurrentPosition(l,h,a),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(a){if(this._container._leaflet_id){var l=a.code,h=a.message||(l===1?"permission denied":l===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:l,message:"Geolocation error: "+h+"."})}},_handleGeolocationResponse:function(a){if(this._container._leaflet_id){var l=a.coords.latitude,h=a.coords.longitude,g=new Ot(l,h),M=g.toBounds(a.coords.accuracy*2),U=this._locateOptions;if(U.setView){var Y=this.getBoundsZoom(M);this.setView(g,U.maxZoom?Math.min(Y,U.maxZoom):Y)}var ot={latlng:g,bounds:M,timestamp:a.timestamp};for(var _t in a.coords)typeof a.coords[_t]=="number"&&(ot[_t]=a.coords[_t]);this.fire("locationfound",ot)}},addHandler:function(a,l){if(!l)return this;var h=this[a]=new l(this);return this._handlers.push(h),this.options[a]&&h.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ne(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(rt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var a;for(a in this._layers)this._layers[a].remove();for(a in this._panes)ne(this._panes[a]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(a,l){var h="leaflet-pane"+(a?" leaflet-"+a.replace("Pane","")+"-pane":""),g=jt("div",h,l||this._mapPane);return a&&(this._panes[a]=g),g},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var a=this.getPixelBounds(),l=this.unproject(a.getBottomLeft()),h=this.unproject(a.getTopRight());return new bt(l,h)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(a,l,h){a=wt(a),h=xt(h||[0,0]);var g=this.getZoom()||0,M=this.getMinZoom(),U=this.getMaxZoom(),Y=a.getNorthWest(),ot=a.getSouthEast(),_t=this.getSize().subtract(h),Pt=K(this.project(ot,g),this.project(Y,g)).getSize(),Wt=ue.any3d?this.options.zoomSnap:1,me=_t.x/Pt.x,De=_t.y/Pt.y,jn=l?Math.max(me,De):Math.min(me,De);return g=this.getScaleZoom(jn,g),Wt&&(g=Math.round(g/(Wt/100))*(Wt/100),g=l?Math.ceil(g/Wt)*Wt:Math.floor(g/Wt)*Wt),Math.max(M,Math.min(U,g))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new it(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(a,l){var h=this._getTopLeftPoint(a,l);return new I(h,h.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(a){return this.options.crs.getProjectedBounds(a===void 0?this.getZoom():a)},getPane:function(a){return typeof a=="string"?this._panes[a]:a},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(a,l){var h=this.options.crs;return l=l===void 0?this._zoom:l,h.scale(a)/h.scale(l)},getScaleZoom:function(a,l){var h=this.options.crs;l=l===void 0?this._zoom:l;var g=h.zoom(a*h.scale(l));return isNaN(g)?1/0:g},project:function(a,l){return l=l===void 0?this._zoom:l,this.options.crs.latLngToPoint(nt(a),l)},unproject:function(a,l){return l=l===void 0?this._zoom:l,this.options.crs.pointToLatLng(xt(a),l)},layerPointToLatLng:function(a){var l=xt(a).add(this.getPixelOrigin());return this.unproject(l)},latLngToLayerPoint:function(a){var l=this.project(nt(a))._round();return l._subtract(this.getPixelOrigin())},wrapLatLng:function(a){return this.options.crs.wrapLatLng(nt(a))},wrapLatLngBounds:function(a){return this.options.crs.wrapLatLngBounds(wt(a))},distance:function(a,l){return this.options.crs.distance(nt(a),nt(l))},containerPointToLayerPoint:function(a){return xt(a).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(a){return xt(a).add(this._getMapPanePos())},containerPointToLatLng:function(a){var l=this.containerPointToLayerPoint(xt(a));return this.layerPointToLatLng(l)},latLngToContainerPoint:function(a){return this.layerPointToContainerPoint(this.latLngToLayerPoint(nt(a)))},mouseEventToContainerPoint:function(a){return Cs(a,this._container)},mouseEventToLayerPoint:function(a){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))},mouseEventToLatLng:function(a){return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))},_initContainer:function(a){var l=this._container=re(a);if(l){if(l._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Se(l,"scroll",this._onScroll,this),this._containerId=x(l)},_initLayout:function(){var a=this._container;this._fadeAnimated=this.options.fadeAnimation&&ue.any3d,$t(a,"leaflet-container"+(ue.touch?" leaflet-touch":"")+(ue.retina?" leaflet-retina":"")+(ue.ielt9?" leaflet-oldie":"")+(ue.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var l=oe(a,"position");l!=="absolute"&&l!=="relative"&&l!=="fixed"&&l!=="sticky"&&(a.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var a=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ye(this._mapPane,new it(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||($t(a.markerPane,"leaflet-zoom-hide"),$t(a.shadowPane,"leaflet-zoom-hide"))},_resetView:function(a,l,h){Ye(this._mapPane,new it(0,0));var g=!this._loaded;this._loaded=!0,l=this._limitZoom(l),this.fire("viewprereset");var M=this._zoom!==l;this._moveStart(M,h)._move(a,l)._moveEnd(M),this.fire("viewreset"),g&&this.fire("load")},_moveStart:function(a,l){return a&&this.fire("zoomstart"),l||this.fire("movestart"),this},_move:function(a,l,h,g){l===void 0&&(l=this._zoom);var M=this._zoom!==l;return this._zoom=l,this._lastCenter=a,this._pixelOrigin=this._getNewPixelOrigin(a),g?h&&h.pinch&&this.fire("zoom",h):((M||h&&h.pinch)&&this.fire("zoom",h),this.fire("move",h)),this},_moveEnd:function(a){return a&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return rt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(a){Ye(this._mapPane,this._getMapPanePos().subtract(a))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(a){this._targets={},this._targets[x(this._container)]=this;var l=a?ln:Se;l(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&l(window,"resize",this._onResize,this),ue.any3d&&this.options.transform3DLimit&&(a?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){rt(this._resizeRequest),this._resizeRequest=Z(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var a=this._getMapPanePos();Math.max(Math.abs(a.x),Math.abs(a.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(a,l){for(var h=[],g,M=l==="mouseout"||l==="mouseover",U=a.target||a.srcElement,Y=!1;U;){if(g=this._targets[x(U)],g&&(l==="click"||l==="preclick")&&this._draggableMoved(g)){Y=!0;break}if(g&&g.listens(l,!0)&&(M&&!ga(U,a)||(h.push(g),M))||U===this._container)break;U=U.parentNode}return!h.length&&!Y&&!M&&this.listens(l,!0)&&(h=[this]),h},_isClickDisabled:function(a){for(;a&&a!==this._container;){if(a._leaflet_disable_click)return!0;a=a.parentNode}},_handleDOMEvent:function(a){var l=a.target||a.srcElement;if(!(!this._loaded||l._leaflet_disable_events||a.type==="click"&&this._isClickDisabled(l))){var h=a.type;h==="mousedown"&&Or(l),this._fireDOMEvent(a,h)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(a,l,h){if(a.type==="click"){var g=u({},a);g.type="preclick",this._fireDOMEvent(g,g.type,h)}var M=this._findEventTargets(a,l);if(h){for(var U=[],Y=0;Y<h.length;Y++)h[Y].listens(l,!0)&&U.push(h[Y]);M=U.concat(M)}if(M.length){l==="contextmenu"&&Rn(a);var ot=M[0],_t={originalEvent:a};if(a.type!=="keypress"&&a.type!=="keydown"&&a.type!=="keyup"){var Pt=ot.getLatLng&&(!ot._radius||ot._radius<=10);_t.containerPoint=Pt?this.latLngToContainerPoint(ot.getLatLng()):this.mouseEventToContainerPoint(a),_t.layerPoint=this.containerPointToLayerPoint(_t.containerPoint),_t.latlng=Pt?ot.getLatLng():this.layerPointToLatLng(_t.layerPoint)}for(Y=0;Y<M.length;Y++)if(M[Y].fire(l,_t,!0),_t.originalEvent._stopped||M[Y].options.bubblingMouseEvents===!1&&F(this._mouseEvents,l)!==-1)return}},_draggableMoved:function(a){return a=a.dragging&&a.dragging.enabled()?a:this,a.dragging&&a.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var a=0,l=this._handlers.length;a<l;a++)this._handlers[a].disable()},whenReady:function(a,l){return this._loaded?a.call(l||this,{target:this}):this.on("load",a,l),this},_getMapPanePos:function(){return Ie(this._mapPane)||new it(0,0)},_moved:function(){var a=this._getMapPanePos();return a&&!a.equals([0,0])},_getTopLeftPoint:function(a,l){var h=a&&l!==void 0?this._getNewPixelOrigin(a,l):this.getPixelOrigin();return h.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(a,l){var h=this.getSize()._divideBy(2);return this.project(a,l)._subtract(h)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(a,l,h){var g=this._getNewPixelOrigin(h,l);return this.project(a,l)._subtract(g)},_latLngBoundsToNewLayerBounds:function(a,l,h){var g=this._getNewPixelOrigin(h,l);return K([this.project(a.getSouthWest(),l)._subtract(g),this.project(a.getNorthWest(),l)._subtract(g),this.project(a.getSouthEast(),l)._subtract(g),this.project(a.getNorthEast(),l)._subtract(g)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(a){return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())},_limitCenter:function(a,l,h){if(!h)return a;var g=this.project(a,l),M=this.getSize().divideBy(2),U=new I(g.subtract(M),g.add(M)),Y=this._getBoundsOffset(U,h,l);return Math.abs(Y.x)<=1&&Math.abs(Y.y)<=1?a:this.unproject(g.add(Y),l)},_limitOffset:function(a,l){if(!l)return a;var h=this.getPixelBounds(),g=new I(h.min.add(a),h.max.add(a));return a.add(this._getBoundsOffset(g,l))},_getBoundsOffset:function(a,l,h){var g=K(this.project(l.getNorthEast(),h),this.project(l.getSouthWest(),h)),M=g.min.subtract(a.min),U=g.max.subtract(a.max),Y=this._rebound(M.x,-U.x),ot=this._rebound(M.y,-U.y);return new it(Y,ot)},_rebound:function(a,l){return a+l>0?Math.round(a-l)/2:Math.max(0,Math.ceil(a))-Math.max(0,Math.floor(l))},_limitZoom:function(a){var l=this.getMinZoom(),h=this.getMaxZoom(),g=ue.any3d?this.options.zoomSnap:1;return g&&(a=Math.round(a/g)*g),Math.max(l,Math.min(h,a))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Le(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(a,l){var h=this._getCenterOffset(a)._trunc();return(l&&l.animate)!==!0&&!this.getSize().contains(h)?!1:(this.panBy(h,l),!0)},_createAnimProxy:function(){var a=this._proxy=jt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(a),this.on("zoomanim",function(l){var h=Vt,g=this._proxy.style[h];Wn(this._proxy,this.project(l.center,l.zoom),this.getZoomScale(l.zoom,1)),g===this._proxy.style[h]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ne(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var a=this.getCenter(),l=this.getZoom();Wn(this._proxy,this.project(a,l),this.getZoomScale(l,1))},_catchTransitionEnd:function(a){this._animatingZoom&&a.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(a,l,h){if(this._animatingZoom)return!0;if(h=h||{},!this._zoomAnimated||h.animate===!1||this._nothingToAnimate()||Math.abs(l-this._zoom)>this.options.zoomAnimationThreshold)return!1;var g=this.getZoomScale(l),M=this._getCenterOffset(a)._divideBy(1-1/g);return h.animate!==!0&&!this.getSize().contains(M)?!1:(Z(function(){this._moveStart(!0,h.noMoveStart||!1)._animateZoom(a,l,!0)},this),!0)},_animateZoom:function(a,l,h,g){this._mapPane&&(h&&(this._animatingZoom=!0,this._animateToCenter=a,this._animateToZoom=l,$t(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:a,zoom:l,noUpdate:g}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(p(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Le(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ol(a,l){return new Ge(a,l)}var _i=mt.extend({options:{position:"topright"},initialize:function(a){N(this,a)},getPosition:function(){return this.options.position},setPosition:function(a){var l=this._map;return l&&l.removeControl(this),this.options.position=a,l&&l.addControl(this),this},getContainer:function(){return this._container},addTo:function(a){this.remove(),this._map=a;var l=this._container=this.onAdd(a),h=this.getPosition(),g=a._controlCorners[h];return $t(l,"leaflet-control"),h.indexOf("bottom")!==-1?g.insertBefore(l,g.firstChild):g.appendChild(l),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ne(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(a){this._map&&a&&a.screenX>0&&a.screenY>0&&this._map.getContainer().focus()}}),va=function(a){return new _i(a)};Ge.include({addControl:function(a){return a.addTo(this),this},removeControl:function(a){return a.remove(),this},_initControlPos:function(){var a=this._controlCorners={},l="leaflet-",h=this._controlContainer=jt("div",l+"control-container",this._container);function g(M,U){var Y=l+M+" "+l+U;a[M+U]=jt("div",Y,h)}g("top","left"),g("top","right"),g("bottom","left"),g("bottom","right")},_clearControlPos:function(){for(var a in this._controlCorners)ne(this._controlCorners[a]);ne(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Rs=_i.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(a,l,h,g){return h<g?-1:g<h?1:0}},initialize:function(a,l,h){N(this,h),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var g in a)this._addLayer(a[g],g);for(g in l)this._addLayer(l[g],g,!0)},onAdd:function(a){this._initLayout(),this._update(),this._map=a,a.on("zoomend",this._checkDisabledLayers,this);for(var l=0;l<this._layers.length;l++)this._layers[l].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(a){return _i.prototype.addTo.call(this,a),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(a,l){return this._addLayer(a,l),this._map?this._update():this},addOverlay:function(a,l){return this._addLayer(a,l,!0),this._map?this._update():this},removeLayer:function(a){a.off("add remove",this._onLayerChange,this);var l=this._getLayer(x(a));return l&&this._layers.splice(this._layers.indexOf(l),1),this._map?this._update():this},expand:function(){$t(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var a=this._map.getSize().y-(this._container.offsetTop+50);return a<this._section.clientHeight?($t(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=a+"px"):Le(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Le(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var a="leaflet-control-layers",l=this._container=jt("div",a),h=this.options.collapsed;l.setAttribute("aria-haspopup",!0),sr(l),ea(l);var g=this._section=jt("section",a+"-list");h&&(this._map.on("click",this.collapse,this),Se(l,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var M=this._layersLink=jt("a",a+"-toggle",l);M.href="#",M.title="Layers",M.setAttribute("role","button"),Se(M,{keydown:function(U){U.keyCode===13&&this._expandSafely()},click:function(U){Rn(U),this._expandSafely()}},this),h||this.expand(),this._baseLayersList=jt("div",a+"-base",g),this._separator=jt("div",a+"-separator",g),this._overlaysList=jt("div",a+"-overlays",g),l.appendChild(g)},_getLayer:function(a){for(var l=0;l<this._layers.length;l++)if(this._layers[l]&&x(this._layers[l].layer)===a)return this._layers[l]},_addLayer:function(a,l,h){this._map&&a.on("add remove",this._onLayerChange,this),this._layers.push({layer:a,name:l,overlay:h}),this.options.sortLayers&&this._layers.sort(p(function(g,M){return this.options.sortFunction(g.layer,M.layer,g.name,M.name)},this)),this.options.autoZIndex&&a.setZIndex&&(this._lastZIndex++,a.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;te(this._baseLayersList),te(this._overlaysList),this._layerControlInputs=[];var a,l,h,g,M=0;for(h=0;h<this._layers.length;h++)g=this._layers[h],this._addItem(g),l=l||g.overlay,a=a||!g.overlay,M+=g.overlay?0:1;return this.options.hideSingleBase&&(a=a&&M>1,this._baseLayersList.style.display=a?"":"none"),this._separator.style.display=l&&a?"":"none",this},_onLayerChange:function(a){this._handlingClick||this._update();var l=this._getLayer(x(a.target)),h=l.overlay?a.type==="add"?"overlayadd":"overlayremove":a.type==="add"?"baselayerchange":null;h&&this._map.fire(h,l)},_createRadioElement:function(a,l){var h='<input type="radio" class="leaflet-control-layers-selector" name="'+a+'"'+(l?' checked="checked"':"")+"/>",g=document.createElement("div");return g.innerHTML=h,g.firstChild},_addItem:function(a){var l=document.createElement("label"),h=this._map.hasLayer(a.layer),g;a.overlay?(g=document.createElement("input"),g.type="checkbox",g.className="leaflet-control-layers-selector",g.defaultChecked=h):g=this._createRadioElement("leaflet-base-layers_"+x(this),h),this._layerControlInputs.push(g),g.layerId=x(a.layer),Se(g,"click",this._onInputClick,this);var M=document.createElement("span");M.innerHTML=" "+a.name;var U=document.createElement("span");l.appendChild(U),U.appendChild(g),U.appendChild(M);var Y=a.overlay?this._overlaysList:this._baseLayersList;return Y.appendChild(l),this._checkDisabledLayers(),l},_onInputClick:function(){if(!this._preventClick){var a=this._layerControlInputs,l,h,g=[],M=[];this._handlingClick=!0;for(var U=a.length-1;U>=0;U--)l=a[U],h=this._getLayer(l.layerId).layer,l.checked?g.push(h):l.checked||M.push(h);for(U=0;U<M.length;U++)this._map.hasLayer(M[U])&&this._map.removeLayer(M[U]);for(U=0;U<g.length;U++)this._map.hasLayer(g[U])||this._map.addLayer(g[U]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var a=this._layerControlInputs,l,h,g=this._map.getZoom(),M=a.length-1;M>=0;M--)l=a[M],h=this._getLayer(l.layerId).layer,l.disabled=h.options.minZoom!==void 0&&g<h.options.minZoom||h.options.maxZoom!==void 0&&g>h.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var a=this._section;this._preventClick=!0,Se(a,"click",Rn),this.expand();var l=this;setTimeout(function(){ln(a,"click",Rn),l._preventClick=!1})}}),$c=function(a,l,h){return new Rs(a,l,h)},zl=_i.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(a){var l="leaflet-control-zoom",h=jt("div",l+" leaflet-bar"),g=this.options;return this._zoomInButton=this._createButton(g.zoomInText,g.zoomInTitle,l+"-in",h,this._zoomIn),this._zoomOutButton=this._createButton(g.zoomOutText,g.zoomOutTitle,l+"-out",h,this._zoomOut),this._updateDisabled(),a.on("zoomend zoomlevelschange",this._updateDisabled,this),h},onRemove:function(a){a.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(a){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(a.shiftKey?3:1))},_zoomOut:function(a){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(a.shiftKey?3:1))},_createButton:function(a,l,h,g,M){var U=jt("a",h,g);return U.innerHTML=a,U.href="#",U.title=l,U.setAttribute("role","button"),U.setAttribute("aria-label",l),sr(U),Se(U,"click",Ua),Se(U,"click",M,this),Se(U,"click",this._refocusOnMap,this),U},_updateDisabled:function(){var a=this._map,l="leaflet-disabled";Le(this._zoomInButton,l),Le(this._zoomOutButton,l),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||a._zoom===a.getMinZoom())&&($t(this._zoomOutButton,l),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||a._zoom===a.getMaxZoom())&&($t(this._zoomInButton,l),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ge.mergeOptions({zoomControl:!0}),Ge.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new zl,this.addControl(this.zoomControl))});var hh=function(a){return new zl(a)},tu=_i.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(a){var l="leaflet-control-scale",h=jt("div",l),g=this.options;return this._addScales(g,l+"-line",h),a.on(g.updateWhenIdle?"moveend":"move",this._update,this),a.whenReady(this._update,this),h},onRemove:function(a){a.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(a,l,h){a.metric&&(this._mScale=jt("div",l,h)),a.imperial&&(this._iScale=jt("div",l,h))},_update:function(){var a=this._map,l=a.getSize().y/2,h=a.distance(a.containerPointToLatLng([0,l]),a.containerPointToLatLng([this.options.maxWidth,l]));this._updateScales(h)},_updateScales:function(a){this.options.metric&&a&&this._updateMetric(a),this.options.imperial&&a&&this._updateImperial(a)},_updateMetric:function(a){var l=this._getRoundNum(a),h=l<1e3?l+" m":l/1e3+" km";this._updateScale(this._mScale,h,l/a)},_updateImperial:function(a){var l=a*3.2808399,h,g,M;l>5280?(h=l/5280,g=this._getRoundNum(h),this._updateScale(this._iScale,g+" mi",g/h)):(M=this._getRoundNum(l),this._updateScale(this._iScale,M+" ft",M/l))},_updateScale:function(a,l,h){a.style.width=Math.round(this.options.maxWidth*h)+"px",a.innerHTML=l},_getRoundNum:function(a){var l=Math.pow(10,(Math.floor(a)+"").length-1),h=a/l;return h=h>=10?10:h>=5?5:h>=3?3:h>=2?2:1,l*h}}),Il=function(a){return new tu(a)},dh='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Bl=_i.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(ue.inlineSvg?dh+" ":"")+"Leaflet</a>"},initialize:function(a){N(this,a),this._attributions={}},onAdd:function(a){a.attributionControl=this,this._container=jt("div","leaflet-control-attribution"),sr(this._container);for(var l in a._layers)a._layers[l].getAttribution&&this.addAttribution(a._layers[l].getAttribution());return this._update(),a.on("layeradd",this._addAttribution,this),this._container},onRemove:function(a){a.off("layeradd",this._addAttribution,this)},_addAttribution:function(a){a.layer.getAttribution&&(this.addAttribution(a.layer.getAttribution()),a.layer.once("remove",function(){this.removeAttribution(a.layer.getAttribution())},this))},setPrefix:function(a){return this.options.prefix=a,this._update(),this},addAttribution:function(a){return a?(this._attributions[a]||(this._attributions[a]=0),this._attributions[a]++,this._update(),this):this},removeAttribution:function(a){return a?(this._attributions[a]&&(this._attributions[a]--,this._update()),this):this},_update:function(){if(this._map){var a=[];for(var l in this._attributions)this._attributions[l]&&a.push(l);var h=[];this.options.prefix&&h.push(this.options.prefix),a.length&&h.push(a.join(", ")),this._container.innerHTML=h.join(' <span aria-hidden="true">|</span> ')}}});Ge.mergeOptions({attributionControl:!0}),Ge.addInitHook(function(){this.options.attributionControl&&new Bl().addTo(this)});var ph=function(a){return new Bl(a)};_i.Layers=Rs,_i.Zoom=zl,_i.Scale=tu,_i.Attribution=Bl,va.layers=$c,va.zoom=hh,va.scale=Il,va.attribution=ph;var na=mt.extend({initialize:function(a){this._map=a},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});na.addTo=function(a,l){return a.addHandler(l,this),this};var mh={Events:G},Fl=ue.touch?"touchstart mousedown":"mousedown",Na=q.extend({options:{clickTolerance:3},initialize:function(a,l,h,g){N(this,g),this._element=a,this._dragStartTarget=l||a,this._preventOutline=h},enable:function(){this._enabled||(Se(this._dragStartTarget,Fl,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Na._dragging===this&&this.finishDrag(!0),ln(this._dragStartTarget,Fl,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(a){if(this._enabled&&(this._moved=!1,!dn(this._element,"leaflet-zoom-anim"))){if(a.touches&&a.touches.length!==1){Na._dragging===this&&this.finishDrag();return}if(!(Na._dragging||a.shiftKey||a.which!==1&&a.button!==1&&!a.touches)&&(Na._dragging=this,this._preventOutline&&Or(this._element),Fi(),yn(),!this._moving)){this.fire("down");var l=a.touches?a.touches[0]:a,h=So(this._element);this._startPoint=new it(l.clientX,l.clientY),this._startPos=Ie(this._element),this._parentScale=Ts(h);var g=a.type==="mousedown";Se(document,g?"mousemove":"touchmove",this._onMove,this),Se(document,g?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(a){if(this._enabled){if(a.touches&&a.touches.length>1){this._moved=!0;return}var l=a.touches&&a.touches.length===1?a.touches[0]:a,h=new it(l.clientX,l.clientY)._subtract(this._startPoint);!h.x&&!h.y||Math.abs(h.x)+Math.abs(h.y)<this.options.clickTolerance||(h.x/=this._parentScale.x,h.y/=this._parentScale.y,Rn(a),this._moved||(this.fire("dragstart"),this._moved=!0,$t(document.body,"leaflet-dragging"),this._lastTarget=a.target||a.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),$t(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(h),this._moving=!0,this._lastEvent=a,this._updatePosition())}},_updatePosition:function(){var a={originalEvent:this._lastEvent};this.fire("predrag",a),Ye(this._element,this._newPos),this.fire("drag",a)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(a){Le(document.body,"leaflet-dragging"),this._lastTarget&&(Le(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ln(document,"mousemove touchmove",this._onMove,this),ln(document,"mouseup touchend touchcancel",this._onUp,this),Pa(),Nn();var l=this._moved&&this._moving;this._moving=!1,Na._dragging=!1,l&&this.fire("dragend",{noInertia:a,distance:this._newPos.distanceTo(this._startPos)})}});function eu(a,l,h){var g,M=[1,4,2,8],U,Y,ot,_t,Pt,Wt,me,De;for(U=0,Wt=a.length;U<Wt;U++)a[U]._code=or(a[U],l);for(ot=0;ot<4;ot++){for(me=M[ot],g=[],U=0,Wt=a.length,Y=Wt-1;U<Wt;Y=U++)_t=a[U],Pt=a[Y],_t._code&me?Pt._code&me||(De=Mo(Pt,_t,me,l,h),De._code=or(De,l),g.push(De)):(Pt._code&me&&(De=Mo(Pt,_t,me,l,h),De._code=or(De,l),g.push(De)),g.push(_t));a=g}return a}function nu(a,l){var h,g,M,U,Y,ot,_t,Pt,Wt;if(!a||a.length===0)throw new Error("latlngs not passed");Ei(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var me=nt([0,0]),De=wt(a),jn=De.getNorthWest().distanceTo(De.getSouthWest())*De.getNorthEast().distanceTo(De.getNorthWest());jn<1700&&(me=Hl(a));var Ln=a.length,gi=[];for(h=0;h<Ln;h++){var $e=nt(a[h]);gi.push(l.project(nt([$e.lat-me.lat,$e.lng-me.lng])))}for(ot=_t=Pt=0,h=0,g=Ln-1;h<Ln;g=h++)M=gi[h],U=gi[g],Y=M.y*U.x-U.y*M.x,_t+=(M.x+U.x)*Y,Pt+=(M.y+U.y)*Y,ot+=Y*3;ot===0?Wt=gi[0]:Wt=[_t/ot,Pt/ot];var tn=l.unproject(xt(Wt));return nt([tn.lat+me.lat,tn.lng+me.lng])}function Hl(a){for(var l=0,h=0,g=0,M=0;M<a.length;M++){var U=nt(a[M]);l+=U.lat,h+=U.lng,g++}return nt([l/g,h/g])}var kl={__proto__:null,clipPolygon:eu,polygonCenter:nu,centroid:Hl};function iu(a,l){if(!l||!a.length)return a.slice();var h=l*l;return a=gh(a,h),a=ru(a,h),a}function au(a,l,h){return Math.sqrt(Ls(a,l,h,!0))}function _h(a,l,h){return Ls(a,l,h)}function ru(a,l){var h=a.length,g=typeof Uint8Array<"u"?Uint8Array:Array,M=new g(h);M[0]=M[h-1]=1,Gl(a,M,l,0,h-1);var U,Y=[];for(U=0;U<h;U++)M[U]&&Y.push(a[U]);return Y}function Gl(a,l,h,g,M){var U=0,Y,ot,_t;for(ot=g+1;ot<=M-1;ot++)_t=Ls(a[ot],a[g],a[M],!0),_t>U&&(Y=ot,U=_t);U>h&&(l[Y]=1,Gl(a,l,h,g,Y),Gl(a,l,h,Y,M))}function gh(a,l){for(var h=[a[0]],g=1,M=0,U=a.length;g<U;g++)vh(a[g],a[M])>l&&(h.push(a[g]),M=g);return M<U-1&&h.push(a[U-1]),h}var su;function ou(a,l,h,g,M){var U=g?su:or(a,h),Y=or(l,h),ot,_t,Pt;for(su=Y;;){if(!(U|Y))return[a,l];if(U&Y)return!1;ot=U||Y,_t=Mo(a,l,ot,h,M),Pt=or(_t,h),ot===U?(a=_t,U=Pt):(l=_t,Y=Pt)}}function Mo(a,l,h,g,M){var U=l.x-a.x,Y=l.y-a.y,ot=g.min,_t=g.max,Pt,Wt;return h&8?(Pt=a.x+U*(_t.y-a.y)/Y,Wt=_t.y):h&4?(Pt=a.x+U*(ot.y-a.y)/Y,Wt=ot.y):h&2?(Pt=_t.x,Wt=a.y+Y*(_t.x-a.x)/U):h&1&&(Pt=ot.x,Wt=a.y+Y*(ot.x-a.x)/U),new it(Pt,Wt,M)}function or(a,l){var h=0;return a.x<l.min.x?h|=1:a.x>l.max.x&&(h|=2),a.y<l.min.y?h|=4:a.y>l.max.y&&(h|=8),h}function vh(a,l){var h=l.x-a.x,g=l.y-a.y;return h*h+g*g}function Ls(a,l,h,g){var M=l.x,U=l.y,Y=h.x-M,ot=h.y-U,_t=Y*Y+ot*ot,Pt;return _t>0&&(Pt=((a.x-M)*Y+(a.y-U)*ot)/_t,Pt>1?(M=h.x,U=h.y):Pt>0&&(M+=Y*Pt,U+=ot*Pt)),Y=a.x-M,ot=a.y-U,g?Y*Y+ot*ot:new it(M,U)}function Ei(a){return!B(a[0])||typeof a[0][0]!="object"&&typeof a[0][0]<"u"}function Eo(a){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Ei(a)}function Br(a,l){var h,g,M,U,Y,ot,_t,Pt;if(!a||a.length===0)throw new Error("latlngs not passed");Ei(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var Wt=nt([0,0]),me=wt(a),De=me.getNorthWest().distanceTo(me.getSouthWest())*me.getNorthEast().distanceTo(me.getNorthWest());De<1700&&(Wt=Hl(a));var jn=a.length,Ln=[];for(h=0;h<jn;h++){var gi=nt(a[h]);Ln.push(l.project(nt([gi.lat-Wt.lat,gi.lng-Wt.lng])))}for(h=0,g=0;h<jn-1;h++)g+=Ln[h].distanceTo(Ln[h+1])/2;if(g===0)Pt=Ln[0];else for(h=0,U=0;h<jn-1;h++)if(Y=Ln[h],ot=Ln[h+1],M=Y.distanceTo(ot),U+=M,U>g){_t=(U-g)/M,Pt=[ot.x-_t*(ot.x-Y.x),ot.y-_t*(ot.y-Y.y)];break}var $e=l.unproject(xt(Pt));return nt([$e.lat+Wt.lat,$e.lng+Wt.lng])}var xh={__proto__:null,simplify:iu,pointToSegmentDistance:au,closestPointOnSegment:_h,clipSegment:ou,_getEdgeIntersection:Mo,_getBitCode:or,_sqClosestPointOnSegment:Ls,isFlat:Ei,_flat:Eo,polylineCenter:Br},To={project:function(a){return new it(a.lng,a.lat)},unproject:function(a){return new Ot(a.y,a.x)},bounds:new I([-180,-90],[180,90])},Ao={R:6378137,R_MINOR:6356752314245179e-9,bounds:new I([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(a){var l=Math.PI/180,h=this.R,g=a.lat*l,M=this.R_MINOR/h,U=Math.sqrt(1-M*M),Y=U*Math.sin(g),ot=Math.tan(Math.PI/4-g/2)/Math.pow((1-Y)/(1+Y),U/2);return g=-h*Math.log(Math.max(ot,1e-10)),new it(a.lng*l*h,g)},unproject:function(a){for(var l=180/Math.PI,h=this.R,g=this.R_MINOR/h,M=Math.sqrt(1-g*g),U=Math.exp(-a.y/h),Y=Math.PI/2-2*Math.atan(U),ot=0,_t=.1,Pt;ot<15&&Math.abs(_t)>1e-7;ot++)Pt=M*Math.sin(Y),Pt=Math.pow((1-Pt)/(1+Pt),M/2),_t=Math.PI/2-2*Math.atan(U*Pt)-Y,Y+=_t;return new Ot(Y*l,a.x*l/h)}},lu={__proto__:null,LonLat:To,Mercator:Ao,SphericalMercator:de},cu=u({},zt,{code:"EPSG:3395",projection:Ao,transformation:(function(){var a=.5/(Math.PI*Ao.R);return hn(a,.5,-a,.5)})()}),Vl=u({},zt,{code:"EPSG:4326",projection:To,transformation:hn(1/180,1,-1/180,.5)}),Fr=u({},Lt,{projection:To,transformation:hn(1,0,-1,0),scale:function(a){return Math.pow(2,a)},zoom:function(a){return Math.log(a)/Math.LN2},distance:function(a,l){var h=l.lng-a.lng,g=l.lat-a.lat;return Math.sqrt(h*h+g*g)},infinite:!0});Lt.Earth=zt,Lt.EPSG3395=cu,Lt.EPSG3857=Ne,Lt.EPSG900913=ze,Lt.EPSG4326=Vl,Lt.Simple=Fr;var Vi=q.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(a){return a.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(a){return a&&a.removeLayer(this),this},getPane:function(a){return this._map.getPane(a?this.options[a]||a:this.options.pane)},addInteractiveTarget:function(a){return this._map._targets[x(a)]=this,this},removeInteractiveTarget:function(a){return delete this._map._targets[x(a)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(a){var l=a.target;if(l.hasLayer(this)){if(this._map=l,this._zoomAnimated=l._zoomAnimated,this.getEvents){var h=this.getEvents();l.on(h,this),this.once("remove",function(){l.off(h,this)},this)}this.onAdd(l),this.fire("add"),l.fire("layeradd",{layer:this})}}});Ge.include({addLayer:function(a){if(!a._layerAdd)throw new Error("The provided object is not a Layer.");var l=x(a);return this._layers[l]?this:(this._layers[l]=a,a._mapToAdd=this,a.beforeAdd&&a.beforeAdd(this),this.whenReady(a._layerAdd,a),this)},removeLayer:function(a){var l=x(a);return this._layers[l]?(this._loaded&&a.onRemove(this),delete this._layers[l],this._loaded&&(this.fire("layerremove",{layer:a}),a.fire("remove")),a._map=a._mapToAdd=null,this):this},hasLayer:function(a){return x(a)in this._layers},eachLayer:function(a,l){for(var h in this._layers)a.call(l,this._layers[h]);return this},_addLayers:function(a){a=a?B(a)?a:[a]:[];for(var l=0,h=a.length;l<h;l++)this.addLayer(a[l])},_addZoomLimit:function(a){(!isNaN(a.options.maxZoom)||!isNaN(a.options.minZoom))&&(this._zoomBoundLayers[x(a)]=a,this._updateZoomLevels())},_removeZoomLimit:function(a){var l=x(a);this._zoomBoundLayers[l]&&(delete this._zoomBoundLayers[l],this._updateZoomLevels())},_updateZoomLevels:function(){var a=1/0,l=-1/0,h=this._getZoomSpan();for(var g in this._zoomBoundLayers){var M=this._zoomBoundLayers[g].options;a=M.minZoom===void 0?a:Math.min(a,M.minZoom),l=M.maxZoom===void 0?l:Math.max(l,M.maxZoom)}this._layersMaxZoom=l===-1/0?void 0:l,this._layersMinZoom=a===1/0?void 0:a,h!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Hr=Vi.extend({initialize:function(a,l){N(this,l),this._layers={};var h,g;if(a)for(h=0,g=a.length;h<g;h++)this.addLayer(a[h])},addLayer:function(a){var l=this.getLayerId(a);return this._layers[l]=a,this._map&&this._map.addLayer(a),this},removeLayer:function(a){var l=a in this._layers?a:this.getLayerId(a);return this._map&&this._layers[l]&&this._map.removeLayer(this._layers[l]),delete this._layers[l],this},hasLayer:function(a){var l=typeof a=="number"?a:this.getLayerId(a);return l in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(a){var l=Array.prototype.slice.call(arguments,1),h,g;for(h in this._layers)g=this._layers[h],g[a]&&g[a].apply(g,l);return this},onAdd:function(a){this.eachLayer(a.addLayer,a)},onRemove:function(a){this.eachLayer(a.removeLayer,a)},eachLayer:function(a,l){for(var h in this._layers)a.call(l,this._layers[h]);return this},getLayer:function(a){return this._layers[a]},getLayers:function(){var a=[];return this.eachLayer(a.push,a),a},setZIndex:function(a){return this.invoke("setZIndex",a)},getLayerId:function(a){return x(a)}}),yh=function(a,l){return new Hr(a,l)},ia=Hr.extend({addLayer:function(a){return this.hasLayer(a)?this:(a.addEventParent(this),Hr.prototype.addLayer.call(this,a),this.fire("layeradd",{layer:a}))},removeLayer:function(a){return this.hasLayer(a)?(a in this._layers&&(a=this._layers[a]),a.removeEventParent(this),Hr.prototype.removeLayer.call(this,a),this.fire("layerremove",{layer:a})):this},setStyle:function(a){return this.invoke("setStyle",a)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var a=new bt;for(var l in this._layers){var h=this._layers[l];a.extend(h.getBounds?h.getBounds():h.getLatLng())}return a}}),uu=function(a,l){return new ia(a,l)},aa=mt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(a){N(this,a)},createIcon:function(a){return this._createIcon("icon",a)},createShadow:function(a){return this._createIcon("shadow",a)},_createIcon:function(a,l){var h=this._getIconUrl(a);if(!h){if(a==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var g=this._createImg(h,l&&l.tagName==="IMG"?l:null);return this._setIconStyles(g,a),(this.options.crossOrigin||this.options.crossOrigin==="")&&(g.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),g},_setIconStyles:function(a,l){var h=this.options,g=h[l+"Size"];typeof g=="number"&&(g=[g,g]);var M=xt(g),U=xt(l==="shadow"&&h.shadowAnchor||h.iconAnchor||M&&M.divideBy(2,!0));a.className="leaflet-marker-"+l+" "+(h.className||""),U&&(a.style.marginLeft=-U.x+"px",a.style.marginTop=-U.y+"px"),M&&(a.style.width=M.x+"px",a.style.height=M.y+"px")},_createImg:function(a,l){return l=l||document.createElement("img"),l.src=a,l},_getIconUrl:function(a){return ue.retina&&this.options[a+"RetinaUrl"]||this.options[a+"Url"]}});function Ds(a){return new aa(a)}var Ps=aa.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(a){return typeof Ps.imagePath!="string"&&(Ps.imagePath=this._detectIconPath()),(this.options.imagePath||Ps.imagePath)+aa.prototype._getIconUrl.call(this,a)},_stripUrl:function(a){var l=function(h,g,M){var U=g.exec(h);return U&&U[M]};return a=l(a,/^url\((['"])?(.+)\1\)$/,2),a&&l(a,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var a=jt("div","leaflet-default-icon-path",document.body),l=oe(a,"background-image")||oe(a,"backgroundImage");if(document.body.removeChild(a),l=this._stripUrl(l),l)return l;var h=document.querySelector('link[href$="leaflet.css"]');return h?h.href.substring(0,h.href.length-11-1):""}}),Us=na.extend({initialize:function(a){this._marker=a},addHooks:function(){var a=this._marker._icon;this._draggable||(this._draggable=new Na(a,a,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),$t(a,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Le(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(a){var l=this._marker,h=l._map,g=this._marker.options.autoPanSpeed,M=this._marker.options.autoPanPadding,U=Ie(l._icon),Y=h.getPixelBounds(),ot=h.getPixelOrigin(),_t=K(Y.min._subtract(ot).add(M),Y.max._subtract(ot).subtract(M));if(!_t.contains(U)){var Pt=xt((Math.max(_t.max.x,U.x)-_t.max.x)/(Y.max.x-_t.max.x)-(Math.min(_t.min.x,U.x)-_t.min.x)/(Y.min.x-_t.min.x),(Math.max(_t.max.y,U.y)-_t.max.y)/(Y.max.y-_t.max.y)-(Math.min(_t.min.y,U.y)-_t.min.y)/(Y.min.y-_t.min.y)).multiplyBy(g);h.panBy(Pt,{animate:!1}),this._draggable._newPos._add(Pt),this._draggable._startPos._add(Pt),Ye(l._icon,this._draggable._newPos),this._onDrag(a),this._panRequest=Z(this._adjustPan.bind(this,a))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(a){this._marker.options.autoPan&&(rt(this._panRequest),this._panRequest=Z(this._adjustPan.bind(this,a)))},_onDrag:function(a){var l=this._marker,h=l._shadow,g=Ie(l._icon),M=l._map.layerPointToLatLng(g);h&&Ye(h,g),l._latlng=M,a.latlng=M,a.oldLatLng=this._oldLatLng,l.fire("move",a).fire("drag",a)},_onDragEnd:function(a){rt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",a)}}),Ns=Vi.extend({options:{icon:new Ps,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(a,l){N(this,l),this._latlng=nt(a)},onAdd:function(a){this._zoomAnimated=this._zoomAnimated&&a.options.markerZoomAnimation,this._zoomAnimated&&a.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(a){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&a.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(a){var l=this._latlng;return this._latlng=nt(a),this.update(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},setZIndexOffset:function(a){return this.options.zIndexOffset=a,this.update()},getIcon:function(){return this.options.icon},setIcon:function(a){return this.options.icon=a,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var a=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(a)}return this},_initIcon:function(){var a=this.options,l="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),h=a.icon.createIcon(this._icon),g=!1;h!==this._icon&&(this._icon&&this._removeIcon(),g=!0,a.title&&(h.title=a.title),h.tagName==="IMG"&&(h.alt=a.alt||"")),$t(h,l),a.keyboard&&(h.tabIndex="0",h.setAttribute("role","button")),this._icon=h,a.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Se(h,"focus",this._panOnFocus,this);var M=a.icon.createShadow(this._shadow),U=!1;M!==this._shadow&&(this._removeShadow(),U=!0),M&&($t(M,l),M.alt=""),this._shadow=M,a.opacity<1&&this._updateOpacity(),g&&this.getPane().appendChild(this._icon),this._initInteraction(),M&&U&&this.getPane(a.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ln(this._icon,"focus",this._panOnFocus,this),ne(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ne(this._shadow),this._shadow=null},_setPos:function(a){this._icon&&Ye(this._icon,a),this._shadow&&Ye(this._shadow,a),this._zIndex=a.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(a){this._icon&&(this._icon.style.zIndex=this._zIndex+a)},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center).round();this._setPos(l)},_initInteraction:function(){if(this.options.interactive&&($t(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Us)){var a=this.options.draggable;this.dragging&&(a=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Us(this),a&&this.dragging.enable()}},setOpacity:function(a){return this.options.opacity=a,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var a=this.options.opacity;this._icon&&_e(this._icon,a),this._shadow&&_e(this._shadow,a)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var a=this._map;if(a){var l=this.options.icon.options,h=l.iconSize?xt(l.iconSize):xt(0,0),g=l.iconAnchor?xt(l.iconAnchor):xt(0,0);a.panInside(this._latlng,{paddingTopLeft:g,paddingBottomRight:h.subtract(g)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function fu(a,l){return new Ns(a,l)}var ra=Vi.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(a){this._renderer=a.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(a){return N(this,a),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&a&&Object.prototype.hasOwnProperty.call(a,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),kr=ra.extend({options:{fill:!0,radius:10},initialize:function(a,l){N(this,l),this._latlng=nt(a),this._radius=this.options.radius},setLatLng:function(a){var l=this._latlng;return this._latlng=nt(a),this.redraw(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(a){return this.options.radius=this._radius=a,this.redraw()},getRadius:function(){return this._radius},setStyle:function(a){var l=a&&a.radius||this._radius;return ra.prototype.setStyle.call(this,a),this.setRadius(l),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var a=this._radius,l=this._radiusY||a,h=this._clickTolerance(),g=[a+h,l+h];this._pxBounds=new I(this._point.subtract(g),this._point.add(g))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(a){return a.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function hu(a,l){return new kr(a,l)}var wo=kr.extend({initialize:function(a,l,h){if(typeof l=="number"&&(l=u({},h,{radius:l})),N(this,l),this._latlng=nt(a),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(a){return this._mRadius=a,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var a=[this._radius,this._radiusY||this._radius];return new bt(this._map.layerPointToLatLng(this._point.subtract(a)),this._map.layerPointToLatLng(this._point.add(a)))},setStyle:ra.prototype.setStyle,_project:function(){var a=this._latlng.lng,l=this._latlng.lat,h=this._map,g=h.options.crs;if(g.distance===zt.distance){var M=Math.PI/180,U=this._mRadius/zt.R/M,Y=h.project([l+U,a]),ot=h.project([l-U,a]),_t=Y.add(ot).divideBy(2),Pt=h.unproject(_t).lat,Wt=Math.acos((Math.cos(U*M)-Math.sin(l*M)*Math.sin(Pt*M))/(Math.cos(l*M)*Math.cos(Pt*M)))/M;(isNaN(Wt)||Wt===0)&&(Wt=U/Math.cos(Math.PI/180*l)),this._point=_t.subtract(h.getPixelOrigin()),this._radius=isNaN(Wt)?0:_t.x-h.project([Pt,a-Wt]).x,this._radiusY=_t.y-Y.y}else{var me=g.unproject(g.project(this._latlng).subtract([this._mRadius,0]));this._point=h.latLngToLayerPoint(this._latlng),this._radius=this._point.x-h.latLngToLayerPoint(me).x}this._updateBounds()}});function du(a,l,h){return new wo(a,l,h)}var xa=ra.extend({options:{smoothFactor:1,noClip:!1},initialize:function(a,l){N(this,l),this._setLatLngs(a)},getLatLngs:function(){return this._latlngs},setLatLngs:function(a){return this._setLatLngs(a),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(a){for(var l=1/0,h=null,g=Ls,M,U,Y=0,ot=this._parts.length;Y<ot;Y++)for(var _t=this._parts[Y],Pt=1,Wt=_t.length;Pt<Wt;Pt++){M=_t[Pt-1],U=_t[Pt];var me=g(a,M,U,!0);me<l&&(l=me,h=g(a,M,U))}return h&&(h.distance=Math.sqrt(l)),h},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Br(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(a,l){return l=l||this._defaultShape(),a=nt(a),l.push(a),this._bounds.extend(a),this.redraw()},_setLatLngs:function(a){this._bounds=new bt,this._latlngs=this._convertLatLngs(a)},_defaultShape:function(){return Ei(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(a){for(var l=[],h=Ei(a),g=0,M=a.length;g<M;g++)h?(l[g]=nt(a[g]),this._bounds.extend(l[g])):l[g]=this._convertLatLngs(a[g]);return l},_project:function(){var a=new I;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,a),this._bounds.isValid()&&a.isValid()&&(this._rawPxBounds=a,this._updateBounds())},_updateBounds:function(){var a=this._clickTolerance(),l=new it(a,a);this._rawPxBounds&&(this._pxBounds=new I([this._rawPxBounds.min.subtract(l),this._rawPxBounds.max.add(l)]))},_projectLatlngs:function(a,l,h){var g=a[0]instanceof Ot,M=a.length,U,Y;if(g){for(Y=[],U=0;U<M;U++)Y[U]=this._map.latLngToLayerPoint(a[U]),h.extend(Y[U]);l.push(Y)}else for(U=0;U<M;U++)this._projectLatlngs(a[U],l,h)},_clipPoints:function(){var a=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}var l=this._parts,h,g,M,U,Y,ot,_t;for(h=0,M=0,U=this._rings.length;h<U;h++)for(_t=this._rings[h],g=0,Y=_t.length;g<Y-1;g++)ot=ou(_t[g],_t[g+1],a,g,!0),ot&&(l[M]=l[M]||[],l[M].push(ot[0]),(ot[1]!==_t[g+1]||g===Y-2)&&(l[M].push(ot[1]),M++))}},_simplifyPoints:function(){for(var a=this._parts,l=this.options.smoothFactor,h=0,g=a.length;h<g;h++)a[h]=iu(a[h],l)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(a,l){var h,g,M,U,Y,ot,_t=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(h=0,U=this._parts.length;h<U;h++)for(ot=this._parts[h],g=0,Y=ot.length,M=Y-1;g<Y;M=g++)if(!(!l&&g===0)&&au(a,ot[M],ot[g])<=_t)return!0;return!1}});function Sh(a,l){return new xa(a,l)}xa._flat=Eo;var Gr=xa.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return nu(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(a){var l=xa.prototype._convertLatLngs.call(this,a),h=l.length;return h>=2&&l[0]instanceof Ot&&l[0].equals(l[h-1])&&l.pop(),l},_setLatLngs:function(a){xa.prototype._setLatLngs.call(this,a),Ei(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Ei(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var a=this._renderer._bounds,l=this.options.weight,h=new it(l,l);if(a=new I(a.min.subtract(h),a.max.add(h)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}for(var g=0,M=this._rings.length,U;g<M;g++)U=eu(this._rings[g],a,!0),U.length&&this._parts.push(U)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(a){var l=!1,h,g,M,U,Y,ot,_t,Pt;if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(U=0,_t=this._parts.length;U<_t;U++)for(h=this._parts[U],Y=0,Pt=h.length,ot=Pt-1;Y<Pt;ot=Y++)g=h[Y],M=h[ot],g.y>a.y!=M.y>a.y&&a.x<(M.x-g.x)*(a.y-g.y)/(M.y-g.y)+g.x&&(l=!l);return l||xa.prototype._containsPoint.call(this,a,!0)}});function bh(a,l){return new Gr(a,l)}var ya=ia.extend({initialize:function(a,l){N(this,l),this._layers={},a&&this.addData(a)},addData:function(a){var l=B(a)?a:a.features,h,g,M;if(l){for(h=0,g=l.length;h<g;h++)M=l[h],(M.geometries||M.geometry||M.features||M.coordinates)&&this.addData(M);return this}var U=this.options;if(U.filter&&!U.filter(a))return this;var Y=Kn(a,U);return Y?(Y.feature=Lo(a),Y.defaultOptions=Y.options,this.resetStyle(Y),U.onEachFeature&&U.onEachFeature(a,Y),this.addLayer(Y)):this},resetStyle:function(a){return a===void 0?this.eachLayer(this.resetStyle,this):(a.options=u({},a.defaultOptions),this._setLayerStyle(a,this.options.style),this)},setStyle:function(a){return this.eachLayer(function(l){this._setLayerStyle(l,a)},this)},_setLayerStyle:function(a,l){a.setStyle&&(typeof l=="function"&&(l=l(a.feature)),a.setStyle(l))}});function Kn(a,l){var h=a.type==="Feature"?a.geometry:a,g=h?h.coordinates:null,M=[],U=l&&l.pointToLayer,Y=l&&l.coordsToLatLng||Co,ot,_t,Pt,Wt;if(!g&&!h)return null;switch(h.type){case"Point":return ot=Y(g),Vr(U,a,ot,l);case"MultiPoint":for(Pt=0,Wt=g.length;Pt<Wt;Pt++)ot=Y(g[Pt]),M.push(Vr(U,a,ot,l));return new ia(M);case"LineString":case"MultiLineString":return _t=Os(g,h.type==="LineString"?0:1,Y),new xa(_t,l);case"Polygon":case"MultiPolygon":return _t=Os(g,h.type==="Polygon"?1:2,Y),new Gr(_t,l);case"GeometryCollection":for(Pt=0,Wt=h.geometries.length;Pt<Wt;Pt++){var me=Kn({geometry:h.geometries[Pt],type:"Feature",properties:a.properties},l);me&&M.push(me)}return new ia(M);case"FeatureCollection":for(Pt=0,Wt=h.features.length;Pt<Wt;Pt++){var De=Kn(h.features[Pt],l);De&&M.push(De)}return new ia(M);default:throw new Error("Invalid GeoJSON object.")}}function Vr(a,l,h,g){return a?a(l,h):new Ns(h,g&&g.markersInheritOptions&&g)}function Co(a){return new Ot(a[1],a[0],a[2])}function Os(a,l,h){for(var g=[],M=0,U=a.length,Y;M<U;M++)Y=l?Os(a[M],l-1,h):(h||Co)(a[M]),g.push(Y);return g}function Ro(a,l){return a=nt(a),a.alt!==void 0?[S(a.lng,l),S(a.lat,l),S(a.alt,l)]:[S(a.lng,l),S(a.lat,l)]}function zs(a,l,h,g){for(var M=[],U=0,Y=a.length;U<Y;U++)M.push(l?zs(a[U],Ei(a[U])?0:l-1,h,g):Ro(a[U],g));return!l&&h&&M.length>0&&M.push(M[0].slice()),M}function Oa(a,l){return a.feature?u({},a.feature,{geometry:l}):Lo(l)}function Lo(a){return a.type==="Feature"||a.type==="FeatureCollection"?a:{type:"Feature",properties:{},geometry:a}}var za={toGeoJSON:function(a){return Oa(this,{type:"Point",coordinates:Ro(this.getLatLng(),a)})}};Ns.include(za),wo.include(za),kr.include(za),xa.include({toGeoJSON:function(a){var l=!Ei(this._latlngs),h=zs(this._latlngs,l?1:0,!1,a);return Oa(this,{type:(l?"Multi":"")+"LineString",coordinates:h})}}),Gr.include({toGeoJSON:function(a){var l=!Ei(this._latlngs),h=l&&!Ei(this._latlngs[0]),g=zs(this._latlngs,h?2:l?1:0,!0,a);return l||(g=[g]),Oa(this,{type:(h?"Multi":"")+"Polygon",coordinates:g})}}),Hr.include({toMultiPoint:function(a){var l=[];return this.eachLayer(function(h){l.push(h.toGeoJSON(a).geometry.coordinates)}),Oa(this,{type:"MultiPoint",coordinates:l})},toGeoJSON:function(a){var l=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(l==="MultiPoint")return this.toMultiPoint(a);var h=l==="GeometryCollection",g=[];return this.eachLayer(function(M){if(M.toGeoJSON){var U=M.toGeoJSON(a);if(h)g.push(U.geometry);else{var Y=Lo(U);Y.type==="FeatureCollection"?g.push.apply(g,Y.features):g.push(Y)}}}),h?Oa(this,{geometries:g,type:"GeometryCollection"}):{type:"FeatureCollection",features:g}}});function Do(a,l){return new ya(a,l)}var Is=Do,Wr=Vi.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(a,l,h){this._url=a,this._bounds=wt(l),N(this,h)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&($t(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ne(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(a){return this.options.opacity=a,this._image&&this._updateOpacity(),this},setStyle:function(a){return a.opacity&&this.setOpacity(a.opacity),this},bringToFront:function(){return this._map&&Me(this._image),this},bringToBack:function(){return this._map&&sn(this._image),this},setUrl:function(a){return this._url=a,this._image&&(this._image.src=a),this},setBounds:function(a){return this._bounds=wt(a),this._map&&this._reset(),this},getEvents:function(){var a={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var a=this._url.tagName==="IMG",l=this._image=a?this._url:jt("img");if($t(l,"leaflet-image-layer"),this._zoomAnimated&&$t(l,"leaflet-zoom-animated"),this.options.className&&$t(l,this.options.className),l.onselectstart=b,l.onmousemove=b,l.onload=p(this.fire,this,"load"),l.onerror=p(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),a){this._url=l.src;return}l.src=this._url,l.alt=this.options.alt},_animateZoom:function(a){var l=this._map.getZoomScale(a.zoom),h=this._map._latLngBoundsToNewLayerBounds(this._bounds,a.zoom,a.center).min;Wn(this._image,h,l)},_reset:function(){var a=this._image,l=new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),h=l.getSize();Ye(a,l.min),a.style.width=h.x+"px",a.style.height=h.y+"px"},_updateOpacity:function(){_e(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var a=this.options.errorOverlayUrl;a&&this._url!==a&&(this._url=a,this._image.src=a)},getCenter:function(){return this._bounds.getCenter()}}),pu=function(a,l,h){return new Wr(a,l,h)},Ia=Wr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var a=this._url.tagName==="VIDEO",l=this._image=a?this._url:jt("video");if($t(l,"leaflet-image-layer"),this._zoomAnimated&&$t(l,"leaflet-zoom-animated"),this.options.className&&$t(l,this.options.className),l.onselectstart=b,l.onmousemove=b,l.onloadeddata=p(this.fire,this,"load"),a){for(var h=l.getElementsByTagName("source"),g=[],M=0;M<h.length;M++)g.push(h[M].src);this._url=h.length>0?g:[l.src];return}B(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(l.style,"objectFit")&&(l.style.objectFit="fill"),l.autoplay=!!this.options.autoplay,l.loop=!!this.options.loop,l.muted=!!this.options.muted,l.playsInline=!!this.options.playsInline;for(var U=0;U<this._url.length;U++){var Y=jt("source");Y.src=this._url[U],l.appendChild(Y)}}});function jr(a,l,h){return new Ia(a,l,h)}var Po=Wr.extend({_initImage:function(){var a=this._image=this._url;$t(a,"leaflet-image-layer"),this._zoomAnimated&&$t(a,"leaflet-zoom-animated"),this.options.className&&$t(a,this.options.className),a.onselectstart=b,a.onmousemove=b}});function mu(a,l,h){return new Po(a,l,h)}var Jn=Vi.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(a,l){a&&(a instanceof Ot||B(a))?(this._latlng=nt(a),N(this,l)):(N(this,a),this._source=l),this.options.content&&(this._content=this.options.content)},openOn:function(a){return a=arguments.length?a:this._source._map,a.hasLayer(this)||a.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(a){return this._map?this.close():(arguments.length?this._source=a:a=this._source,this._prepareOpen(),this.openOn(a._map)),this},onAdd:function(a){this._zoomAnimated=a._zoomAnimated,this._container||this._initLayout(),a._fadeAnimated&&_e(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),a._fadeAnimated&&_e(this._container,1),this.bringToFront(),this.options.interactive&&($t(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(a){a._fadeAnimated?(_e(this._container,0),this._removeTimeout=setTimeout(p(ne,void 0,this._container),200)):ne(this._container),this.options.interactive&&(Le(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(a){return this._latlng=nt(a),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(a){return this._content=a,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var a={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Me(this._container),this},bringToBack:function(){return this._map&&sn(this._container),this},_prepareOpen:function(a){var l=this._source;if(!l._map)return!1;if(l instanceof ia){l=null;var h=this._source._layers;for(var g in h)if(h[g]._map){l=h[g];break}if(!l)return!1;this._source=l}if(!a)if(l.getCenter)a=l.getCenter();else if(l.getLatLng)a=l.getLatLng();else if(l.getBounds)a=l.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(a),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var a=this._contentNode,l=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof l=="string")a.innerHTML=l;else{for(;a.hasChildNodes();)a.removeChild(a.firstChild);a.appendChild(l)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var a=this._map.latLngToLayerPoint(this._latlng),l=xt(this.options.offset),h=this._getAnchor();this._zoomAnimated?Ye(this._container,a.add(h)):l=l.add(a).add(h);var g=this._containerBottom=-l.y,M=this._containerLeft=-Math.round(this._containerWidth/2)+l.x;this._container.style.bottom=g+"px",this._container.style.left=M+"px"}},_getAnchor:function(){return[0,0]}});Ge.include({_initOverlay:function(a,l,h,g){var M=l;return M instanceof a||(M=new a(g).setContent(l)),h&&M.setLatLng(h),M}}),Vi.include({_initOverlay:function(a,l,h,g){var M=h;return M instanceof a?(N(M,g),M._source=this):(M=l&&!g?l:new a(g,this),M.setContent(h)),M}});var Bs=Jn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(a){return a=arguments.length?a:this._source._map,!a.hasLayer(this)&&a._popup&&a._popup.options.autoClose&&a.removeLayer(a._popup),a._popup=this,Jn.prototype.openOn.call(this,a)},onAdd:function(a){Jn.prototype.onAdd.call(this,a),a.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ra||this._source.on("preclick",Gi))},onRemove:function(a){Jn.prototype.onRemove.call(this,a),a.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ra||this._source.off("preclick",Gi))},getEvents:function(){var a=Jn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(a.preclick=this.close),this.options.keepInView&&(a.moveend=this._adjustPan),a},_initLayout:function(){var a="leaflet-popup",l=this._container=jt("div",a+" "+(this.options.className||"")+" leaflet-zoom-animated"),h=this._wrapper=jt("div",a+"-content-wrapper",l);if(this._contentNode=jt("div",a+"-content",h),sr(l),ea(this._contentNode),Se(l,"contextmenu",Gi),this._tipContainer=jt("div",a+"-tip-container",l),this._tip=jt("div",a+"-tip",this._tipContainer),this.options.closeButton){var g=this._closeButton=jt("a",a+"-close-button",l);g.setAttribute("role","button"),g.setAttribute("aria-label","Close popup"),g.href="#close",g.innerHTML='<span aria-hidden="true">&#215;</span>',Se(g,"click",function(M){Rn(M),this.close()},this)}},_updateLayout:function(){var a=this._contentNode,l=a.style;l.width="",l.whiteSpace="nowrap";var h=a.offsetWidth;h=Math.min(h,this.options.maxWidth),h=Math.max(h,this.options.minWidth),l.width=h+1+"px",l.whiteSpace="",l.height="";var g=a.offsetHeight,M=this.options.maxHeight,U="leaflet-popup-scrolled";M&&g>M?(l.height=M+"px",$t(a,U)):Le(a,U),this._containerWidth=this._container.offsetWidth},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center),h=this._getAnchor();Ye(this._container,l.add(h))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var a=this._map,l=parseInt(oe(this._container,"marginBottom"),10)||0,h=this._container.offsetHeight+l,g=this._containerWidth,M=new it(this._containerLeft,-h-this._containerBottom);M._add(Ie(this._container));var U=a.layerPointToContainerPoint(M),Y=xt(this.options.autoPanPadding),ot=xt(this.options.autoPanPaddingTopLeft||Y),_t=xt(this.options.autoPanPaddingBottomRight||Y),Pt=a.getSize(),Wt=0,me=0;U.x+g+_t.x>Pt.x&&(Wt=U.x+g-Pt.x+_t.x),U.x-Wt-ot.x<0&&(Wt=U.x-ot.x),U.y+h+_t.y>Pt.y&&(me=U.y+h-Pt.y+_t.y),U.y-me-ot.y<0&&(me=U.y-ot.y),(Wt||me)&&(this.options.keepInView&&(this._autopanning=!0),a.fire("autopanstart").panBy([Wt,me]))}},_getAnchor:function(){return xt(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),_u=function(a,l){return new Bs(a,l)};Ge.mergeOptions({closePopupOnClick:!0}),Ge.include({openPopup:function(a,l,h){return this._initOverlay(Bs,a,l,h).openOn(this),this},closePopup:function(a){return a=arguments.length?a:this._popup,a&&a.close(),this}}),Vi.include({bindPopup:function(a,l){return this._popup=this._initOverlay(Bs,this._popup,a,l),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(a){return this._popup&&(this instanceof ia||(this._popup._source=this),this._popup._prepareOpen(a||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(a){return this._popup&&this._popup.setContent(a),this},getPopup:function(){return this._popup},_openPopup:function(a){if(!(!this._popup||!this._map)){Ua(a);var l=a.layer||a.target;if(this._popup._source===l&&!(l instanceof ra)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(a.latlng);return}this._popup._source=l,this.openPopup(a.latlng)}},_movePopup:function(a){this._popup.setLatLng(a.latlng)},_onKeyPress:function(a){a.originalEvent.keyCode===13&&this._openPopup(a)}});var Fs=Jn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(a){Jn.prototype.onAdd.call(this,a),this.setOpacity(this.options.opacity),a.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(a){Jn.prototype.onRemove.call(this,a),a.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var a=Jn.prototype.getEvents.call(this);return this.options.permanent||(a.preclick=this.close),a},_initLayout:function(){var a="leaflet-tooltip",l=a+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=jt("div",l),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+x(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(a){var l,h,g=this._map,M=this._container,U=g.latLngToContainerPoint(g.getCenter()),Y=g.layerPointToContainerPoint(a),ot=this.options.direction,_t=M.offsetWidth,Pt=M.offsetHeight,Wt=xt(this.options.offset),me=this._getAnchor();ot==="top"?(l=_t/2,h=Pt):ot==="bottom"?(l=_t/2,h=0):ot==="center"?(l=_t/2,h=Pt/2):ot==="right"?(l=0,h=Pt/2):ot==="left"?(l=_t,h=Pt/2):Y.x<U.x?(ot="right",l=0,h=Pt/2):(ot="left",l=_t+(Wt.x+me.x)*2,h=Pt/2),a=a.subtract(xt(l,h,!0)).add(Wt).add(me),Le(M,"leaflet-tooltip-right"),Le(M,"leaflet-tooltip-left"),Le(M,"leaflet-tooltip-top"),Le(M,"leaflet-tooltip-bottom"),$t(M,"leaflet-tooltip-"+ot),Ye(M,a)},_updatePosition:function(){var a=this._map.latLngToLayerPoint(this._latlng);this._setPosition(a)},setOpacity:function(a){this.options.opacity=a,this._container&&_e(this._container,a)},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center);this._setPosition(l)},_getAnchor:function(){return xt(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Mh=function(a,l){return new Fs(a,l)};Ge.include({openTooltip:function(a,l,h){return this._initOverlay(Fs,a,l,h).openOn(this),this},closeTooltip:function(a){return a.close(),this}}),Vi.include({bindTooltip:function(a,l){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Fs,this._tooltip,a,l),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(a){if(!(!a&&this._tooltipHandlersAdded)){var l=a?"off":"on",h={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?h.add=this._openTooltip:(h.mouseover=this._openTooltip,h.mouseout=this.closeTooltip,h.click=this._openTooltip,this._map?this._addFocusListeners():h.add=this._addFocusListeners),this._tooltip.options.sticky&&(h.mousemove=this._moveTooltip),this[l](h),this._tooltipHandlersAdded=!a}},openTooltip:function(a){return this._tooltip&&(this instanceof ia||(this._tooltip._source=this),this._tooltip._prepareOpen(a)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(a){return this._tooltip&&this._tooltip.setContent(a),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(a){var l=typeof a.getElement=="function"&&a.getElement();l&&(Se(l,"focus",function(){this._tooltip._source=a,this.openTooltip()},this),Se(l,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(a){var l=typeof a.getElement=="function"&&a.getElement();l&&l.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(a){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var l=this;this._map.once("moveend",function(){l._openOnceFlag=!1,l._openTooltip(a)});return}this._tooltip._source=a.layer||a.target,this.openTooltip(this._tooltip.options.sticky?a.latlng:void 0)}},_moveTooltip:function(a){var l=a.latlng,h,g;this._tooltip.options.sticky&&a.originalEvent&&(h=this._map.mouseEventToContainerPoint(a.originalEvent),g=this._map.containerPointToLayerPoint(h),l=this._map.layerPointToLatLng(g)),this._tooltip.setLatLng(l)}});var gu=aa.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(a){var l=a&&a.tagName==="DIV"?a:document.createElement("div"),h=this.options;if(h.html instanceof Element?(te(l),l.appendChild(h.html)):l.innerHTML=h.html!==!1?h.html:"",h.bgPos){var g=xt(h.bgPos);l.style.backgroundPosition=-g.x+"px "+-g.y+"px"}return this._setIconStyles(l,"icon"),l},createShadow:function(){return null}});function Eh(a){return new gu(a)}aa.Default=Ps;var Xr=Vi.extend({options:{tileSize:256,opacity:1,updateWhenIdle:ue.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(a){N(this,a)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(a){a._addZoomLimit(this)},onRemove:function(a){this._removeAllTiles(),ne(this._container),a._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Me(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(sn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(a){return this.options.opacity=a,this._updateOpacity(),this},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var a=this._clampZoom(this._map.getZoom());a!==this._tileZoom&&(this._tileZoom=a,this._updateLevels()),this._update()}return this},getEvents:function(){var a={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=v(this._onMoveEnd,this.options.updateInterval,this)),a.move=this._onMove),this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},createTile:function(){return document.createElement("div")},getTileSize:function(){var a=this.options.tileSize;return a instanceof it?a:new it(a,a)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(a){for(var l=this.getPane().children,h=-a(-1/0,1/0),g=0,M=l.length,U;g<M;g++)U=l[g].style.zIndex,l[g]!==this._container&&U&&(h=a(h,+U));isFinite(h)&&(this.options.zIndex=h+a(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!ue.ielt9){_e(this._container,this.options.opacity);var a=+new Date,l=!1,h=!1;for(var g in this._tiles){var M=this._tiles[g];if(!(!M.current||!M.loaded)){var U=Math.min(1,(a-M.loaded)/200);_e(M.el,U),U<1?l=!0:(M.active?h=!0:this._onOpaqueTile(M),M.active=!0)}}h&&!this._noPrune&&this._pruneTiles(),l&&(rt(this._fadeFrame),this._fadeFrame=Z(this._updateOpacity,this))}},_onOpaqueTile:b,_initContainer:function(){this._container||(this._container=jt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var a=this._tileZoom,l=this.options.maxZoom;if(a!==void 0){for(var h in this._levels)h=Number(h),this._levels[h].el.children.length||h===a?(this._levels[h].el.style.zIndex=l-Math.abs(a-h),this._onUpdateLevel(h)):(ne(this._levels[h].el),this._removeTilesAtZoom(h),this._onRemoveLevel(h),delete this._levels[h]);var g=this._levels[a],M=this._map;return g||(g=this._levels[a]={},g.el=jt("div","leaflet-tile-container leaflet-zoom-animated",this._container),g.el.style.zIndex=l,g.origin=M.project(M.unproject(M.getPixelOrigin()),a).round(),g.zoom=a,this._setZoomTransform(g,M.getCenter(),M.getZoom()),b(g.el.offsetWidth),this._onCreateLevel(g)),this._level=g,g}},_onUpdateLevel:b,_onRemoveLevel:b,_onCreateLevel:b,_pruneTiles:function(){if(this._map){var a,l,h=this._map.getZoom();if(h>this.options.maxZoom||h<this.options.minZoom){this._removeAllTiles();return}for(a in this._tiles)l=this._tiles[a],l.retain=l.current;for(a in this._tiles)if(l=this._tiles[a],l.current&&!l.active){var g=l.coords;this._retainParent(g.x,g.y,g.z,g.z-5)||this._retainChildren(g.x,g.y,g.z,g.z+2)}for(a in this._tiles)this._tiles[a].retain||this._removeTile(a)}},_removeTilesAtZoom:function(a){for(var l in this._tiles)this._tiles[l].coords.z===a&&this._removeTile(l)},_removeAllTiles:function(){for(var a in this._tiles)this._removeTile(a)},_invalidateAll:function(){for(var a in this._levels)ne(this._levels[a].el),this._onRemoveLevel(Number(a)),delete this._levels[a];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(a,l,h,g){var M=Math.floor(a/2),U=Math.floor(l/2),Y=h-1,ot=new it(+M,+U);ot.z=+Y;var _t=this._tileCoordsToKey(ot),Pt=this._tiles[_t];return Pt&&Pt.active?(Pt.retain=!0,!0):(Pt&&Pt.loaded&&(Pt.retain=!0),Y>g?this._retainParent(M,U,Y,g):!1)},_retainChildren:function(a,l,h,g){for(var M=2*a;M<2*a+2;M++)for(var U=2*l;U<2*l+2;U++){var Y=new it(M,U);Y.z=h+1;var ot=this._tileCoordsToKey(Y),_t=this._tiles[ot];if(_t&&_t.active){_t.retain=!0;continue}else _t&&_t.loaded&&(_t.retain=!0);h+1<g&&this._retainChildren(M,U,h+1,g)}},_resetView:function(a){var l=a&&(a.pinch||a.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),l,l)},_animateZoom:function(a){this._setView(a.center,a.zoom,!0,a.noUpdate)},_clampZoom:function(a){var l=this.options;return l.minNativeZoom!==void 0&&a<l.minNativeZoom?l.minNativeZoom:l.maxNativeZoom!==void 0&&l.maxNativeZoom<a?l.maxNativeZoom:a},_setView:function(a,l,h,g){var M=Math.round(l);this.options.maxZoom!==void 0&&M>this.options.maxZoom||this.options.minZoom!==void 0&&M<this.options.minZoom?M=void 0:M=this._clampZoom(M);var U=this.options.updateWhenZooming&&M!==this._tileZoom;(!g||U)&&(this._tileZoom=M,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),M!==void 0&&this._update(a),h||this._pruneTiles(),this._noPrune=!!h),this._setZoomTransforms(a,l)},_setZoomTransforms:function(a,l){for(var h in this._levels)this._setZoomTransform(this._levels[h],a,l)},_setZoomTransform:function(a,l,h){var g=this._map.getZoomScale(h,a.zoom),M=a.origin.multiplyBy(g).subtract(this._map._getNewPixelOrigin(l,h)).round();ue.any3d?Wn(a.el,M,g):Ye(a.el,M)},_resetGrid:function(){var a=this._map,l=a.options.crs,h=this._tileSize=this.getTileSize(),g=this._tileZoom,M=this._map.getPixelWorldBounds(this._tileZoom);M&&(this._globalTileRange=this._pxBoundsToTileRange(M)),this._wrapX=l.wrapLng&&!this.options.noWrap&&[Math.floor(a.project([0,l.wrapLng[0]],g).x/h.x),Math.ceil(a.project([0,l.wrapLng[1]],g).x/h.y)],this._wrapY=l.wrapLat&&!this.options.noWrap&&[Math.floor(a.project([l.wrapLat[0],0],g).y/h.x),Math.ceil(a.project([l.wrapLat[1],0],g).y/h.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(a){var l=this._map,h=l._animatingZoom?Math.max(l._animateToZoom,l.getZoom()):l.getZoom(),g=l.getZoomScale(h,this._tileZoom),M=l.project(a,this._tileZoom).floor(),U=l.getSize().divideBy(g*2);return new I(M.subtract(U),M.add(U))},_update:function(a){var l=this._map;if(l){var h=this._clampZoom(l.getZoom());if(a===void 0&&(a=l.getCenter()),this._tileZoom!==void 0){var g=this._getTiledPixelBounds(a),M=this._pxBoundsToTileRange(g),U=M.getCenter(),Y=[],ot=this.options.keepBuffer,_t=new I(M.getBottomLeft().subtract([ot,-ot]),M.getTopRight().add([ot,-ot]));if(!(isFinite(M.min.x)&&isFinite(M.min.y)&&isFinite(M.max.x)&&isFinite(M.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var Pt in this._tiles){var Wt=this._tiles[Pt].coords;(Wt.z!==this._tileZoom||!_t.contains(new it(Wt.x,Wt.y)))&&(this._tiles[Pt].current=!1)}if(Math.abs(h-this._tileZoom)>1){this._setView(a,h);return}for(var me=M.min.y;me<=M.max.y;me++)for(var De=M.min.x;De<=M.max.x;De++){var jn=new it(De,me);if(jn.z=this._tileZoom,!!this._isValidTile(jn)){var Ln=this._tiles[this._tileCoordsToKey(jn)];Ln?Ln.current=!0:Y.push(jn)}}if(Y.sort(function($e,tn){return $e.distanceTo(U)-tn.distanceTo(U)}),Y.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var gi=document.createDocumentFragment();for(De=0;De<Y.length;De++)this._addTile(Y[De],gi);this._level.el.appendChild(gi)}}}},_isValidTile:function(a){var l=this._map.options.crs;if(!l.infinite){var h=this._globalTileRange;if(!l.wrapLng&&(a.x<h.min.x||a.x>h.max.x)||!l.wrapLat&&(a.y<h.min.y||a.y>h.max.y))return!1}if(!this.options.bounds)return!0;var g=this._tileCoordsToBounds(a);return wt(this.options.bounds).overlaps(g)},_keyToBounds:function(a){return this._tileCoordsToBounds(this._keyToTileCoords(a))},_tileCoordsToNwSe:function(a){var l=this._map,h=this.getTileSize(),g=a.scaleBy(h),M=g.add(h),U=l.unproject(g,a.z),Y=l.unproject(M,a.z);return[U,Y]},_tileCoordsToBounds:function(a){var l=this._tileCoordsToNwSe(a),h=new bt(l[0],l[1]);return this.options.noWrap||(h=this._map.wrapLatLngBounds(h)),h},_tileCoordsToKey:function(a){return a.x+":"+a.y+":"+a.z},_keyToTileCoords:function(a){var l=a.split(":"),h=new it(+l[0],+l[1]);return h.z=+l[2],h},_removeTile:function(a){var l=this._tiles[a];l&&(ne(l.el),delete this._tiles[a],this.fire("tileunload",{tile:l.el,coords:this._keyToTileCoords(a)}))},_initTile:function(a){$t(a,"leaflet-tile");var l=this.getTileSize();a.style.width=l.x+"px",a.style.height=l.y+"px",a.onselectstart=b,a.onmousemove=b,ue.ielt9&&this.options.opacity<1&&_e(a,this.options.opacity)},_addTile:function(a,l){var h=this._getTilePos(a),g=this._tileCoordsToKey(a),M=this.createTile(this._wrapCoords(a),p(this._tileReady,this,a));this._initTile(M),this.createTile.length<2&&Z(p(this._tileReady,this,a,null,M)),Ye(M,h),this._tiles[g]={el:M,coords:a,current:!0},l.appendChild(M),this.fire("tileloadstart",{tile:M,coords:a})},_tileReady:function(a,l,h){l&&this.fire("tileerror",{error:l,tile:h,coords:a});var g=this._tileCoordsToKey(a);h=this._tiles[g],h&&(h.loaded=+new Date,this._map._fadeAnimated?(_e(h.el,0),rt(this._fadeFrame),this._fadeFrame=Z(this._updateOpacity,this)):(h.active=!0,this._pruneTiles()),l||($t(h.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:h.el,coords:a})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),ue.ielt9||!this._map._fadeAnimated?Z(this._pruneTiles,this):setTimeout(p(this._pruneTiles,this),250)))},_getTilePos:function(a){return a.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(a){var l=new it(this._wrapX?y(a.x,this._wrapX):a.x,this._wrapY?y(a.y,this._wrapY):a.y);return l.z=a.z,l},_pxBoundsToTileRange:function(a){var l=this.getTileSize();return new I(a.min.unscaleBy(l).floor(),a.max.unscaleBy(l).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var a in this._tiles)if(!this._tiles[a].loaded)return!1;return!0}});function vu(a){return new Xr(a)}var Ba=Xr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(a,l){this._url=a,l=N(this,l),l.detectRetina&&ue.retina&&l.maxZoom>0?(l.tileSize=Math.floor(l.tileSize/2),l.zoomReverse?(l.zoomOffset--,l.minZoom=Math.min(l.maxZoom,l.minZoom+1)):(l.zoomOffset++,l.maxZoom=Math.max(l.minZoom,l.maxZoom-1)),l.minZoom=Math.max(0,l.minZoom)):l.zoomReverse?l.minZoom=Math.min(l.maxZoom,l.minZoom):l.maxZoom=Math.max(l.minZoom,l.maxZoom),typeof l.subdomains=="string"&&(l.subdomains=l.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(a,l){return this._url===a&&l===void 0&&(l=!0),this._url=a,l||this.redraw(),this},createTile:function(a,l){var h=document.createElement("img");return Se(h,"load",p(this._tileOnLoad,this,l,h)),Se(h,"error",p(this._tileOnError,this,l,h)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(h.referrerPolicy=this.options.referrerPolicy),h.alt="",h.src=this.getTileUrl(a),h},getTileUrl:function(a){var l={r:ue.retina?"@2x":"",s:this._getSubdomain(a),x:a.x,y:a.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var h=this._globalTileRange.max.y-a.y;this.options.tms&&(l.y=h),l["-y"]=h}return P(this._url,u(l,this.options))},_tileOnLoad:function(a,l){ue.ielt9?setTimeout(p(a,this,null,l),0):a(null,l)},_tileOnError:function(a,l,h){var g=this.options.errorTileUrl;g&&l.getAttribute("src")!==g&&(l.src=g),a(h,l)},_onTileRemove:function(a){a.tile.onload=null},_getZoomForUrl:function(){var a=this._tileZoom,l=this.options.maxZoom,h=this.options.zoomReverse,g=this.options.zoomOffset;return h&&(a=l-a),a+g},_getSubdomain:function(a){var l=Math.abs(a.x+a.y)%this.options.subdomains.length;return this.options.subdomains[l]},_abortLoading:function(){var a,l;for(a in this._tiles)if(this._tiles[a].coords.z!==this._tileZoom&&(l=this._tiles[a].el,l.onload=b,l.onerror=b,!l.complete)){l.src=X;var h=this._tiles[a].coords;ne(l),delete this._tiles[a],this.fire("tileabort",{tile:l,coords:h})}},_removeTile:function(a){var l=this._tiles[a];if(l)return l.el.setAttribute("src",X),Xr.prototype._removeTile.call(this,a)},_tileReady:function(a,l,h){if(!(!this._map||h&&h.getAttribute("src")===X))return Xr.prototype._tileReady.call(this,a,l,h)}});function Ti(a,l){return new Ba(a,l)}var Hs=Ba.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(a,l){this._url=a;var h=u({},this.defaultWmsParams);for(var g in l)g in this.options||(h[g]=l[g]);l=N(this,l);var M=l.detectRetina&&ue.retina?2:1,U=this.getTileSize();h.width=U.x*M,h.height=U.y*M,this.wmsParams=h},onAdd:function(a){this._crs=this.options.crs||a.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var l=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[l]=this._crs.code,Ba.prototype.onAdd.call(this,a)},getTileUrl:function(a){var l=this._tileCoordsToNwSe(a),h=this._crs,g=K(h.project(l[0]),h.project(l[1])),M=g.min,U=g.max,Y=(this._wmsVersion>=1.3&&this._crs===Vl?[M.y,M.x,U.y,U.x]:[M.x,M.y,U.x,U.y]).join(","),ot=Ba.prototype.getTileUrl.call(this,a);return ot+A(this.wmsParams,ot,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+Y},setParams:function(a,l){return u(this.wmsParams,a),l||this.redraw(),this}});function Ai(a,l){return new Hs(a,l)}Ba.WMS=Hs,Ti.wms=Ai;var li=Vi.extend({options:{padding:.1},initialize:function(a){N(this,a),x(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),$t(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var a={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(a.zoomanim=this._onAnimZoom),a},_onAnimZoom:function(a){this._updateTransform(a.center,a.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(a,l){var h=this._map.getZoomScale(l,this._zoom),g=this._map.getSize().multiplyBy(.5+this.options.padding),M=this._map.project(this._center,l),U=g.multiplyBy(-h).add(M).subtract(this._map._getNewPixelOrigin(a,l));ue.any3d?Wn(this._container,U,h):Ye(this._container,U)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var a in this._layers)this._layers[a]._reset()},_onZoomEnd:function(){for(var a in this._layers)this._layers[a]._project()},_updatePaths:function(){for(var a in this._layers)this._layers[a]._update()},_update:function(){var a=this.options.padding,l=this._map.getSize(),h=this._map.containerPointToLayerPoint(l.multiplyBy(-a)).round();this._bounds=new I(h,h.add(l.multiplyBy(1+a*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Uo=li.extend({options:{tolerance:0},getEvents:function(){var a=li.prototype.getEvents.call(this);return a.viewprereset=this._onViewPreReset,a},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){li.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var a=this._container=document.createElement("canvas");Se(a,"mousemove",this._onMouseMove,this),Se(a,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Se(a,"mouseout",this._handleMouseOut,this),a._leaflet_disable_events=!0,this._ctx=a.getContext("2d")},_destroyContainer:function(){rt(this._redrawRequest),delete this._ctx,ne(this._container),ln(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var a;this._redrawBounds=null;for(var l in this._layers)a=this._layers[l],a._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){li.prototype._update.call(this);var a=this._bounds,l=this._container,h=a.getSize(),g=ue.retina?2:1;Ye(l,a.min),l.width=g*h.x,l.height=g*h.y,l.style.width=h.x+"px",l.style.height=h.y+"px",ue.retina&&this._ctx.scale(2,2),this._ctx.translate(-a.min.x,-a.min.y),this.fire("update")}},_reset:function(){li.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(a){this._updateDashArray(a),this._layers[x(a)]=a;var l=a._order={layer:a,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=l),this._drawLast=l,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(a){this._requestRedraw(a)},_removePath:function(a){var l=a._order,h=l.next,g=l.prev;h?h.prev=g:this._drawLast=g,g?g.next=h:this._drawFirst=h,delete a._order,delete this._layers[x(a)],this._requestRedraw(a)},_updatePath:function(a){this._extendRedrawBounds(a),a._project(),a._update(),this._requestRedraw(a)},_updateStyle:function(a){this._updateDashArray(a),this._requestRedraw(a)},_updateDashArray:function(a){if(typeof a.options.dashArray=="string"){var l=a.options.dashArray.split(/[, ]+/),h=[],g,M;for(M=0;M<l.length;M++){if(g=Number(l[M]),isNaN(g))return;h.push(g)}a.options._dashArray=h}else a.options._dashArray=a.options.dashArray},_requestRedraw:function(a){this._map&&(this._extendRedrawBounds(a),this._redrawRequest=this._redrawRequest||Z(this._redraw,this))},_extendRedrawBounds:function(a){if(a._pxBounds){var l=(a.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new I,this._redrawBounds.extend(a._pxBounds.min.subtract([l,l])),this._redrawBounds.extend(a._pxBounds.max.add([l,l]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var a=this._redrawBounds;if(a){var l=a.getSize();this._ctx.clearRect(a.min.x,a.min.y,l.x,l.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var a,l=this._redrawBounds;if(this._ctx.save(),l){var h=l.getSize();this._ctx.beginPath(),this._ctx.rect(l.min.x,l.min.y,h.x,h.y),this._ctx.clip()}this._drawing=!0;for(var g=this._drawFirst;g;g=g.next)a=g.layer,(!l||a._pxBounds&&a._pxBounds.intersects(l))&&a._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(a,l){if(this._drawing){var h,g,M,U,Y=a._parts,ot=Y.length,_t=this._ctx;if(ot){for(_t.beginPath(),h=0;h<ot;h++){for(g=0,M=Y[h].length;g<M;g++)U=Y[h][g],_t[g?"lineTo":"moveTo"](U.x,U.y);l&&_t.closePath()}this._fillStroke(_t,a)}}},_updateCircle:function(a){if(!(!this._drawing||a._empty())){var l=a._point,h=this._ctx,g=Math.max(Math.round(a._radius),1),M=(Math.max(Math.round(a._radiusY),1)||g)/g;M!==1&&(h.save(),h.scale(1,M)),h.beginPath(),h.arc(l.x,l.y/M,g,0,Math.PI*2,!1),M!==1&&h.restore(),this._fillStroke(h,a)}},_fillStroke:function(a,l){var h=l.options;h.fill&&(a.globalAlpha=h.fillOpacity,a.fillStyle=h.fillColor||h.color,a.fill(h.fillRule||"evenodd")),h.stroke&&h.weight!==0&&(a.setLineDash&&a.setLineDash(l.options&&l.options._dashArray||[]),a.globalAlpha=h.opacity,a.lineWidth=h.weight,a.strokeStyle=h.color,a.lineCap=h.lineCap,a.lineJoin=h.lineJoin,a.stroke())},_onClick:function(a){for(var l=this._map.mouseEventToLayerPoint(a),h,g,M=this._drawFirst;M;M=M.next)h=M.layer,h.options.interactive&&h._containsPoint(l)&&(!(a.type==="click"||a.type==="preclick")||!this._map._draggableMoved(h))&&(g=h);this._fireEvent(g?[g]:!1,a)},_onMouseMove:function(a){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var l=this._map.mouseEventToLayerPoint(a);this._handleMouseHover(a,l)}},_handleMouseOut:function(a){var l=this._hoveredLayer;l&&(Le(this._container,"leaflet-interactive"),this._fireEvent([l],a,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(a,l){if(!this._mouseHoverThrottled){for(var h,g,M=this._drawFirst;M;M=M.next)h=M.layer,h.options.interactive&&h._containsPoint(l)&&(g=h);g!==this._hoveredLayer&&(this._handleMouseOut(a),g&&($t(this._container,"leaflet-interactive"),this._fireEvent([g],a,"mouseover"),this._hoveredLayer=g)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,a),this._mouseHoverThrottled=!0,setTimeout(p(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(a,l,h){this._map._fireDOMEvent(l,h||l.type,a)},_bringToFront:function(a){var l=a._order;if(l){var h=l.next,g=l.prev;if(h)h.prev=g;else return;g?g.next=h:h&&(this._drawFirst=h),l.prev=this._drawLast,this._drawLast.next=l,l.next=null,this._drawLast=l,this._requestRedraw(a)}},_bringToBack:function(a){var l=a._order;if(l){var h=l.next,g=l.prev;if(g)g.next=h;else return;h?h.prev=g:g&&(this._drawLast=g),l.prev=null,l.next=this._drawFirst,this._drawFirst.prev=l,this._drawFirst=l,this._requestRedraw(a)}}});function ks(a){return ue.canvas?new Uo(a):null}var Fa=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<lvml:"+a+' class="lvml">')}}catch{}return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Wl={_initContainer:function(){this._container=jt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(li.prototype._update.call(this),this.fire("update"))},_initPath:function(a){var l=a._container=Fa("shape");$t(l,"leaflet-vml-shape "+(this.options.className||"")),l.coordsize="1 1",a._path=Fa("path"),l.appendChild(a._path),this._updateStyle(a),this._layers[x(a)]=a},_addPath:function(a){var l=a._container;this._container.appendChild(l),a.options.interactive&&a.addInteractiveTarget(l)},_removePath:function(a){var l=a._container;ne(l),a.removeInteractiveTarget(l),delete this._layers[x(a)]},_updateStyle:function(a){var l=a._stroke,h=a._fill,g=a.options,M=a._container;M.stroked=!!g.stroke,M.filled=!!g.fill,g.stroke?(l||(l=a._stroke=Fa("stroke")),M.appendChild(l),l.weight=g.weight+"px",l.color=g.color,l.opacity=g.opacity,g.dashArray?l.dashStyle=B(g.dashArray)?g.dashArray.join(" "):g.dashArray.replace(/( *, *)/g," "):l.dashStyle="",l.endcap=g.lineCap.replace("butt","flat"),l.joinstyle=g.lineJoin):l&&(M.removeChild(l),a._stroke=null),g.fill?(h||(h=a._fill=Fa("fill")),M.appendChild(h),h.color=g.fillColor||g.color,h.opacity=g.fillOpacity):h&&(M.removeChild(h),a._fill=null)},_updateCircle:function(a){var l=a._point.round(),h=Math.round(a._radius),g=Math.round(a._radiusY||h);this._setPath(a,a._empty()?"M0 0":"AL "+l.x+","+l.y+" "+h+","+g+" 0,"+65535*360)},_setPath:function(a,l){a._path.v=l},_bringToFront:function(a){Me(a._container)},_bringToBack:function(a){sn(a._container)}},sa=ue.vml?Fa:qe,qr=li.extend({_initContainer:function(){this._container=sa("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=sa("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ne(this._container),ln(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){li.prototype._update.call(this);var a=this._bounds,l=a.getSize(),h=this._container;(!this._svgSize||!this._svgSize.equals(l))&&(this._svgSize=l,h.setAttribute("width",l.x),h.setAttribute("height",l.y)),Ye(h,a.min),h.setAttribute("viewBox",[a.min.x,a.min.y,l.x,l.y].join(" ")),this.fire("update")}},_initPath:function(a){var l=a._path=sa("path");a.options.className&&$t(l,a.options.className),a.options.interactive&&$t(l,"leaflet-interactive"),this._updateStyle(a),this._layers[x(a)]=a},_addPath:function(a){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(a._path),a.addInteractiveTarget(a._path)},_removePath:function(a){ne(a._path),a.removeInteractiveTarget(a._path),delete this._layers[x(a)]},_updatePath:function(a){a._project(),a._update()},_updateStyle:function(a){var l=a._path,h=a.options;l&&(h.stroke?(l.setAttribute("stroke",h.color),l.setAttribute("stroke-opacity",h.opacity),l.setAttribute("stroke-width",h.weight),l.setAttribute("stroke-linecap",h.lineCap),l.setAttribute("stroke-linejoin",h.lineJoin),h.dashArray?l.setAttribute("stroke-dasharray",h.dashArray):l.removeAttribute("stroke-dasharray"),h.dashOffset?l.setAttribute("stroke-dashoffset",h.dashOffset):l.removeAttribute("stroke-dashoffset")):l.setAttribute("stroke","none"),h.fill?(l.setAttribute("fill",h.fillColor||h.color),l.setAttribute("fill-opacity",h.fillOpacity),l.setAttribute("fill-rule",h.fillRule||"evenodd")):l.setAttribute("fill","none"))},_updatePoly:function(a,l){this._setPath(a,Ee(a._parts,l))},_updateCircle:function(a){var l=a._point,h=Math.max(Math.round(a._radius),1),g=Math.max(Math.round(a._radiusY),1)||h,M="a"+h+","+g+" 0 1,0 ",U=a._empty()?"M0 0":"M"+(l.x-h)+","+l.y+M+h*2+",0 "+M+-h*2+",0 ";this._setPath(a,U)},_setPath:function(a,l){a._path.setAttribute("d",l)},_bringToFront:function(a){Me(a._path)},_bringToBack:function(a){sn(a._path)}});ue.vml&&qr.include(Wl);function Gs(a){return ue.svg||ue.vml?new qr(a):null}Ge.include({getRenderer:function(a){var l=a.options.renderer||this._getPaneRenderer(a.options.pane)||this.options.renderer||this._renderer;return l||(l=this._renderer=this._createRenderer()),this.hasLayer(l)||this.addLayer(l),l},_getPaneRenderer:function(a){if(a==="overlayPane"||a===void 0)return!1;var l=this._paneRenderers[a];return l===void 0&&(l=this._createRenderer({pane:a}),this._paneRenderers[a]=l),l},_createRenderer:function(a){return this.options.preferCanvas&&ks(a)||Gs(a)}});var lr=Gr.extend({initialize:function(a,l){Gr.prototype.initialize.call(this,this._boundsToLatLngs(a),l)},setBounds:function(a){return this.setLatLngs(this._boundsToLatLngs(a))},_boundsToLatLngs:function(a){return a=wt(a),[a.getSouthWest(),a.getNorthWest(),a.getNorthEast(),a.getSouthEast()]}});function Th(a,l){return new lr(a,l)}qr.create=sa,qr.pointsToPath=Ee,ya.geometryToLayer=Kn,ya.coordsToLatLng=Co,ya.coordsToLatLngs=Os,ya.latLngToCoords=Ro,ya.latLngsToCoords=zs,ya.getFeature=Oa,ya.asFeature=Lo,Ge.mergeOptions({boxZoom:!0});var ci=na.extend({initialize:function(a){this._map=a,this._container=a._container,this._pane=a._panes.overlayPane,this._resetStateTimeout=0,a.on("unload",this._destroy,this)},addHooks:function(){Se(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ln(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ne(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(a){if(!a.shiftKey||a.which!==1&&a.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),yn(),Fi(),this._startPoint=this._map.mouseEventToContainerPoint(a),Se(document,{contextmenu:Ua,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(a){this._moved||(this._moved=!0,this._box=jt("div","leaflet-zoom-box",this._container),$t(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(a);var l=new I(this._point,this._startPoint),h=l.getSize();Ye(this._box,l.min),this._box.style.width=h.x+"px",this._box.style.height=h.y+"px"},_finish:function(){this._moved&&(ne(this._box),Le(this._container,"leaflet-crosshair")),Nn(),Pa(),ln(document,{contextmenu:Ua,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(a){if(!(a.which!==1&&a.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(p(this._resetState,this),0);var l=new bt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(l).fire("boxzoomend",{boxZoomBounds:l})}},_onKeyDown:function(a){a.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ge.addInitHook("addHandler","boxZoom",ci),Ge.mergeOptions({doubleClickZoom:!0});var No=na.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(a){var l=this._map,h=l.getZoom(),g=l.options.zoomDelta,M=a.originalEvent.shiftKey?h-g:h+g;l.options.doubleClickZoom==="center"?l.setZoom(M):l.setZoomAround(a.containerPoint,M)}});Ge.addInitHook("addHandler","doubleClickZoom",No),Ge.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var oa=na.extend({addHooks:function(){if(!this._draggable){var a=this._map;this._draggable=new Na(a._mapPane,a._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),a.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),a.on("zoomend",this._onZoomEnd,this),a.whenReady(this._onZoomEnd,this))}$t(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Le(this._map._container,"leaflet-grab"),Le(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var a=this._map;if(a._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var l=wt(this._map.options.maxBounds);this._offsetLimit=K(this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(l.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;a.fire("movestart").fire("dragstart"),a.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(a){if(this._map.options.inertia){var l=this._lastTime=+new Date,h=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(h),this._times.push(l),this._prunePositions(l)}this._map.fire("move",a).fire("drag",a)},_prunePositions:function(a){for(;this._positions.length>1&&a-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var a=this._map.getSize().divideBy(2),l=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=l.subtract(a).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(a,l){return a-(a-l)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var a=this._draggable._newPos.subtract(this._draggable._startPos),l=this._offsetLimit;a.x<l.min.x&&(a.x=this._viscousLimit(a.x,l.min.x)),a.y<l.min.y&&(a.y=this._viscousLimit(a.y,l.min.y)),a.x>l.max.x&&(a.x=this._viscousLimit(a.x,l.max.x)),a.y>l.max.y&&(a.y=this._viscousLimit(a.y,l.max.y)),this._draggable._newPos=this._draggable._startPos.add(a)}},_onPreDragWrap:function(){var a=this._worldWidth,l=Math.round(a/2),h=this._initialWorldOffset,g=this._draggable._newPos.x,M=(g-l+h)%a+l-h,U=(g+l+h)%a-l-h,Y=Math.abs(M+h)<Math.abs(U+h)?M:U;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=Y},_onDragEnd:function(a){var l=this._map,h=l.options,g=!h.inertia||a.noInertia||this._times.length<2;if(l.fire("dragend",a),g)l.fire("moveend");else{this._prunePositions(+new Date);var M=this._lastPos.subtract(this._positions[0]),U=(this._lastTime-this._times[0])/1e3,Y=h.easeLinearity,ot=M.multiplyBy(Y/U),_t=ot.distanceTo([0,0]),Pt=Math.min(h.inertiaMaxSpeed,_t),Wt=ot.multiplyBy(Pt/_t),me=Pt/(h.inertiaDeceleration*Y),De=Wt.multiplyBy(-me/2).round();!De.x&&!De.y?l.fire("moveend"):(De=l._limitOffset(De,l.options.maxBounds),Z(function(){l.panBy(De,{duration:me,easeLinearity:Y,noMoveStart:!0,animate:!0})}))}}});Ge.addInitHook("addHandler","dragging",oa),Ge.mergeOptions({keyboard:!0,keyboardPanDelta:80});var jl=na.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(a){this._map=a,this._setPanDelta(a.options.keyboardPanDelta),this._setZoomDelta(a.options.zoomDelta)},addHooks:function(){var a=this._map._container;a.tabIndex<=0&&(a.tabIndex="0"),Se(a,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ln(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var a=document.body,l=document.documentElement,h=a.scrollTop||l.scrollTop,g=a.scrollLeft||l.scrollLeft;this._map._container.focus(),window.scrollTo(g,h)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(a){var l=this._panKeys={},h=this.keyCodes,g,M;for(g=0,M=h.left.length;g<M;g++)l[h.left[g]]=[-1*a,0];for(g=0,M=h.right.length;g<M;g++)l[h.right[g]]=[a,0];for(g=0,M=h.down.length;g<M;g++)l[h.down[g]]=[0,a];for(g=0,M=h.up.length;g<M;g++)l[h.up[g]]=[0,-1*a]},_setZoomDelta:function(a){var l=this._zoomKeys={},h=this.keyCodes,g,M;for(g=0,M=h.zoomIn.length;g<M;g++)l[h.zoomIn[g]]=a;for(g=0,M=h.zoomOut.length;g<M;g++)l[h.zoomOut[g]]=-a},_addHooks:function(){Se(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ln(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(a){if(!(a.altKey||a.ctrlKey||a.metaKey)){var l=a.keyCode,h=this._map,g;if(l in this._panKeys){if(!h._panAnim||!h._panAnim._inProgress)if(g=this._panKeys[l],a.shiftKey&&(g=xt(g).multiplyBy(3)),h.options.maxBounds&&(g=h._limitOffset(xt(g),h.options.maxBounds)),h.options.worldCopyJump){var M=h.wrapLatLng(h.unproject(h.project(h.getCenter()).add(g)));h.panTo(M)}else h.panBy(g)}else if(l in this._zoomKeys)h.setZoom(h.getZoom()+(a.shiftKey?3:1)*this._zoomKeys[l]);else if(l===27&&h._popup&&h._popup.options.closeOnEscapeKey)h.closePopup();else return;Ua(a)}}});Ge.addInitHook("addHandler","keyboard",jl),Ge.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Vs=na.extend({addHooks:function(){Se(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ln(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(a){var l=ii(a),h=this._map.options.wheelDebounceTime;this._delta+=l,this._lastMousePos=this._map.mouseEventToContainerPoint(a),this._startTime||(this._startTime=+new Date);var g=Math.max(h-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(p(this._performZoom,this),g),Ua(a)},_performZoom:function(){var a=this._map,l=a.getZoom(),h=this._map.options.zoomSnap||0;a._stop();var g=this._delta/(this._map.options.wheelPxPerZoomLevel*4),M=4*Math.log(2/(1+Math.exp(-Math.abs(g))))/Math.LN2,U=h?Math.ceil(M/h)*h:M,Y=a._limitZoom(l+(this._delta>0?U:-U))-l;this._delta=0,this._startTime=null,Y&&(a.options.scrollWheelZoom==="center"?a.setZoom(l+Y):a.setZoomAround(this._lastMousePos,l+Y))}});Ge.addInitHook("addHandler","scrollWheelZoom",Vs);var cr=600;Ge.mergeOptions({tapHold:ue.touchNative&&ue.safari&&ue.mobile,tapTolerance:15});var Oo=na.extend({addHooks:function(){Se(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ln(this._map._container,"touchstart",this._onDown,this)},_onDown:function(a){if(clearTimeout(this._holdTimeout),a.touches.length===1){var l=a.touches[0];this._startPos=this._newPos=new it(l.clientX,l.clientY),this._holdTimeout=setTimeout(p(function(){this._cancel(),this._isTapValid()&&(Se(document,"touchend",Rn),Se(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",l))},this),cr),Se(document,"touchend touchcancel contextmenu",this._cancel,this),Se(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function a(){ln(document,"touchend",Rn),ln(document,"touchend touchcancel",a)},_cancel:function(){clearTimeout(this._holdTimeout),ln(document,"touchend touchcancel contextmenu",this._cancel,this),ln(document,"touchmove",this._onMove,this)},_onMove:function(a){var l=a.touches[0];this._newPos=new it(l.clientX,l.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(a,l){var h=new MouseEvent(a,{bubbles:!0,cancelable:!0,view:window,screenX:l.screenX,screenY:l.screenY,clientX:l.clientX,clientY:l.clientY});h._simulated=!0,l.target.dispatchEvent(h)}});Ge.addInitHook("addHandler","tapHold",Oo),Ge.mergeOptions({touchZoom:ue.touch,bounceAtZoomLimits:!0});var Xl=na.extend({addHooks:function(){$t(this._map._container,"leaflet-touch-zoom"),Se(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Le(this._map._container,"leaflet-touch-zoom"),ln(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(a){var l=this._map;if(!(!a.touches||a.touches.length!==2||l._animatingZoom||this._zooming)){var h=l.mouseEventToContainerPoint(a.touches[0]),g=l.mouseEventToContainerPoint(a.touches[1]);this._centerPoint=l.getSize()._divideBy(2),this._startLatLng=l.containerPointToLatLng(this._centerPoint),l.options.touchZoom!=="center"&&(this._pinchStartLatLng=l.containerPointToLatLng(h.add(g)._divideBy(2))),this._startDist=h.distanceTo(g),this._startZoom=l.getZoom(),this._moved=!1,this._zooming=!0,l._stop(),Se(document,"touchmove",this._onTouchMove,this),Se(document,"touchend touchcancel",this._onTouchEnd,this),Rn(a)}},_onTouchMove:function(a){if(!(!a.touches||a.touches.length!==2||!this._zooming)){var l=this._map,h=l.mouseEventToContainerPoint(a.touches[0]),g=l.mouseEventToContainerPoint(a.touches[1]),M=h.distanceTo(g)/this._startDist;if(this._zoom=l.getScaleZoom(M,this._startZoom),!l.options.bounceAtZoomLimits&&(this._zoom<l.getMinZoom()&&M<1||this._zoom>l.getMaxZoom()&&M>1)&&(this._zoom=l._limitZoom(this._zoom)),l.options.touchZoom==="center"){if(this._center=this._startLatLng,M===1)return}else{var U=h._add(g)._divideBy(2)._subtract(this._centerPoint);if(M===1&&U.x===0&&U.y===0)return;this._center=l.unproject(l.project(this._pinchStartLatLng,this._zoom).subtract(U),this._zoom)}this._moved||(l._moveStart(!0,!1),this._moved=!0),rt(this._animRequest);var Y=p(l._move,l,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Z(Y,this,!0),Rn(a)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,rt(this._animRequest),ln(document,"touchmove",this._onTouchMove,this),ln(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ge.addInitHook("addHandler","touchZoom",Xl),Ge.BoxZoom=ci,Ge.DoubleClickZoom=No,Ge.Drag=oa,Ge.Keyboard=jl,Ge.ScrollWheelZoom=Vs,Ge.TapHold=Oo,Ge.TouchZoom=Xl,i.Bounds=I,i.Browser=ue,i.CRS=Lt,i.Canvas=Uo,i.Circle=wo,i.CircleMarker=kr,i.Class=mt,i.Control=_i,i.DivIcon=gu,i.DivOverlay=Jn,i.DomEvent=bo,i.DomUtil=zr,i.Draggable=Na,i.Evented=q,i.FeatureGroup=ia,i.GeoJSON=ya,i.GridLayer=Xr,i.Handler=na,i.Icon=aa,i.ImageOverlay=Wr,i.LatLng=Ot,i.LatLngBounds=bt,i.Layer=Vi,i.LayerGroup=Hr,i.LineUtil=xh,i.Map=Ge,i.Marker=Ns,i.Mixin=mh,i.Path=ra,i.Point=it,i.PolyUtil=kl,i.Polygon=Gr,i.Polyline=xa,i.Popup=Bs,i.PosAnimation=Ir,i.Projection=lu,i.Rectangle=lr,i.Renderer=li,i.SVG=qr,i.SVGOverlay=Po,i.TileLayer=Ba,i.Tooltip=Fs,i.Transformation=ve,i.Util=ft,i.VideoOverlay=Ia,i.bind=p,i.bounds=K,i.canvas=ks,i.circle=du,i.circleMarker=hu,i.control=va,i.divIcon=Eh,i.extend=u,i.featureGroup=uu,i.geoJSON=Do,i.geoJson=Is,i.gridLayer=vu,i.icon=Ds,i.imageOverlay=pu,i.latLng=nt,i.latLngBounds=wt,i.layerGroup=yh,i.map=Ol,i.marker=fu,i.point=xt,i.polygon=bh,i.polyline=Sh,i.popup=_u,i.rectangle=Th,i.setOptions=N,i.stamp=x,i.svg=Gs,i.svgOverlay=mu,i.tileLayer=Ti,i.tooltip=Mh,i.transformation=hn,i.version=s,i.videoOverlay=jr;var ql=window.L;i.noConflict=function(){return window.L=ql,this},window.L=i}))})(zc,zc.exports)),zc.exports}var qc=h1();const xy=Wx(qc);function i_(o,t,i){return Object.freeze({instance:o,context:t,container:i})}function a_(o,t){return t==null?function(s,u){const f=he.useRef(void 0);return f.current||(f.current=o(s,u)),f}:function(s,u){const f=he.useRef(void 0);f.current||(f.current=o(s,u));const p=he.useRef(s),{instance:_}=f.current;return he.useEffect(function(){p.current!==s&&(t(_,s,p.current),p.current=s)},[_,s,t]),f}}function yy(o,t){he.useEffect(function(){return(t.layerContainer??t.map).addLayer(o.instance),function(){t.layerContainer?.removeLayer(o.instance),t.map.removeLayer(o.instance)}},[t,o])}function Sy(o){return function(i){const s=e_(),u=o(n_(i,s),s);return o1(s.map,i.attribution),vy(u.current,i.eventHandlers),yy(u.current,s),u}}function d1(o,t){const i=he.useRef(void 0);he.useEffect(function(){if(t.pathOptions!==i.current){const u=t.pathOptions??{};o.instance.setStyle(u),i.current=u}},[o,t])}function p1(o){return function(i){const s=e_(),u=o(n_(i,s),s);return vy(u.current,i.eventHandlers),yy(u.current,s),d1(u.current,i),u}}function m1(o,t){const i=a_(o,t),s=Sy(i);return gy(s)}function _1(o,t){const i=a_(o,t),s=p1(i);return gy(s)}function g1(o,t){const i=a_(o,t),s=Sy(i);return u1(s)}function v1(o,t,i){const{opacity:s,zIndex:u}=t;s!=null&&s!==i.opacity&&o.setOpacity(s),u!=null&&u!==i.zIndex&&o.setZIndex(u)}function by(){return e_().map}function x1(o){const t=by();return he.useEffect(function(){return t.on(o),function(){t.off(o)}},[t,o]),t}function y1({bounds:o,boundsOptions:t,center:i,children:s,className:u,id:f,placeholder:p,style:_,whenReady:x,zoom:v,...y},b){const[S]=he.useState({className:u,id:f,style:_}),[C,w]=he.useState(null),N=he.useRef(void 0);he.useImperativeHandle(b,()=>C?.map??null,[C]);const A=he.useCallback(P=>{if(P!==null&&!N.current){const B=new qc.Map(P,y);N.current=B,i!=null&&v!=null?B.setView(i,v):o!=null&&B.fitBounds(o,t),x!=null&&B.whenReady(x),w(c1(B))}},[]);he.useEffect(()=>()=>{C?.map.remove()},[C]);const E=C?qp.createElement(t_,{value:C},s):p??null;return qp.createElement("div",{...S,ref:A},E)}const S1=he.forwardRef(y1),b1=m1(function({position:t,...i},s){const u=new qc.Marker(t,i);return i_(u,_y(s,{overlayContainer:u}))},function(t,i,s){i.position!==s.position&&t.setLatLng(i.position),i.icon!=null&&i.icon!==s.icon&&t.setIcon(i.icon),i.zIndexOffset!=null&&i.zIndexOffset!==s.zIndexOffset&&t.setZIndexOffset(i.zIndexOffset),i.opacity!=null&&i.opacity!==s.opacity&&t.setOpacity(i.opacity),t.dragging!=null&&i.draggable!==s.draggable&&(i.draggable===!0?t.dragging.enable():t.dragging.disable())}),M1=_1(function({positions:t,...i},s){const u=new qc.Polygon(t,i);return i_(u,_y(s,{overlayContainer:u}))},function(t,i,s){i.positions!==s.positions&&t.setLatLngs(i.positions)}),E1=g1(function({url:t,...i},s){const u=new qc.TileLayer(t,n_(i,s));return i_(u,s)},function(t,i,s){v1(t,i,s);const{url:u}=i;u!=null&&u!==s.url&&t.setUrl(u)});const r_="183",T1=0,Gv=1,A1=2,Xf=1,w1=2,Ic=3,Ss=0,zi=1,Cr=2,Lr=0,xl=1,Vv=2,Wv=3,jv=4,C1=5,lo=100,R1=101,L1=102,D1=103,P1=104,U1=200,N1=201,O1=202,z1=203,Qp=204,$p=205,I1=206,B1=207,F1=208,H1=209,k1=210,G1=211,V1=212,W1=213,j1=214,tm=0,em=1,nm=2,bl=3,im=4,am=5,rm=6,sm=7,s_=0,X1=1,q1=2,Ja=0,My=1,Ey=2,Ty=3,Ay=4,wy=5,Cy=6,Ry=7,Ly=300,_o=301,Ml=302,fp=303,hp=304,oh=306,om=1e3,Rr=1001,lm=1002,oi=1003,Z1=1004,gf=1005,pi=1006,dp=1007,fo=1008,Qi=1009,Dy=1010,Py=1011,Fc=1012,o_=1013,$a=1014,Ya=1015,Pr=1016,l_=1017,c_=1018,Hc=1020,Uy=35902,Ny=35899,Oy=1021,zy=1022,Ra=1023,Ur=1026,ho=1027,Iy=1028,u_=1029,El=1030,f_=1031,h_=1033,qf=33776,Zf=33777,Yf=33778,Kf=33779,cm=35840,um=35841,fm=35842,hm=35843,dm=36196,pm=37492,mm=37496,_m=37488,gm=37489,vm=37490,xm=37491,ym=37808,Sm=37809,bm=37810,Mm=37811,Em=37812,Tm=37813,Am=37814,wm=37815,Cm=37816,Rm=37817,Lm=37818,Dm=37819,Pm=37820,Um=37821,Nm=36492,Om=36494,zm=36495,Im=36283,Bm=36284,Fm=36285,Hm=36286,Y1=3200,By=0,K1=1,xs="",ha="srgb",Tl="srgb-linear",$f="linear",fn="srgb",al=7680,Xv=519,J1=512,Q1=513,$1=514,d_=515,tE=516,eE=517,p_=518,nE=519,qv=35044,Zv="300 es",Ka=2e3,kc=2001;function iE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function th(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function aE(){const o=th("canvas");return o.style.display="block",o}const Yv={};function Kv(...o){const t="THREE."+o.shift();console.log(t,...o)}function Fy(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Ae(...o){o=Fy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function an(...o){o=Fy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function eh(...o){const t=o.join(" ");t in Yv||(Yv[t]=!0,Ae(...o))}function rE(o,t,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const sE={[tm]:em,[nm]:rm,[im]:sm,[bl]:am,[em]:tm,[rm]:nm,[sm]:im,[am]:bl};class Rl{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const u=s[t];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const u=s.slice(0);for(let f=0,p=u.length;f<p;f++)u[f].call(this,t);t.target=null}}}const fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pp=Math.PI/180,km=180/Math.PI;function Zc(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fi[o&255]+fi[o>>8&255]+fi[o>>16&255]+fi[o>>24&255]+"-"+fi[t&255]+fi[t>>8&255]+"-"+fi[t>>16&15|64]+fi[t>>24&255]+"-"+fi[i&63|128]+fi[i>>8&255]+"-"+fi[i>>16&255]+fi[i>>24&255]+fi[s&255]+fi[s>>8&255]+fi[s>>16&255]+fi[s>>24&255]).toLowerCase()}function Xe(o,t,i){return Math.max(t,Math.min(i,o))}function oE(o,t){return(o%t+t)%t}function mp(o,t,i){return(1-i)*o+i*t}function Rc(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ui(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Je{constructor(t=0,i=0){Je.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Xe(this.x,t.x,i.x),this.y=Xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Xe(this.x,t,i),this.y=Xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-t.x,p=this.y-t.y;return this.x=f*s-p*u+t.x,this.y=f*u+p*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ll{constructor(t=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=u}static slerpFlat(t,i,s,u,f,p,_){let x=s[u+0],v=s[u+1],y=s[u+2],b=s[u+3],S=f[p+0],C=f[p+1],w=f[p+2],N=f[p+3];if(b!==N||x!==S||v!==C||y!==w){let A=x*S+v*C+y*w+b*N;A<0&&(S=-S,C=-C,w=-w,N=-N,A=-A);let E=1-_;if(A<.9995){const P=Math.acos(A),B=Math.sin(P);E=Math.sin(E*P)/B,_=Math.sin(_*P)/B,x=x*E+S*_,v=v*E+C*_,y=y*E+w*_,b=b*E+N*_}else{x=x*E+S*_,v=v*E+C*_,y=y*E+w*_,b=b*E+N*_;const P=1/Math.sqrt(x*x+v*v+y*y+b*b);x*=P,v*=P,y*=P,b*=P}}t[i]=x,t[i+1]=v,t[i+2]=y,t[i+3]=b}static multiplyQuaternionsFlat(t,i,s,u,f,p){const _=s[u],x=s[u+1],v=s[u+2],y=s[u+3],b=f[p],S=f[p+1],C=f[p+2],w=f[p+3];return t[i]=_*w+y*b+x*C-v*S,t[i+1]=x*w+y*S+v*b-_*C,t[i+2]=v*w+y*C+_*S-x*b,t[i+3]=y*w-_*b-x*S-v*C,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,u){return this._x=t,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,u=t._y,f=t._z,p=t._order,_=Math.cos,x=Math.sin,v=_(s/2),y=_(u/2),b=_(f/2),S=x(s/2),C=x(u/2),w=x(f/2);switch(p){case"XYZ":this._x=S*y*b+v*C*w,this._y=v*C*b-S*y*w,this._z=v*y*w+S*C*b,this._w=v*y*b-S*C*w;break;case"YXZ":this._x=S*y*b+v*C*w,this._y=v*C*b-S*y*w,this._z=v*y*w-S*C*b,this._w=v*y*b+S*C*w;break;case"ZXY":this._x=S*y*b-v*C*w,this._y=v*C*b+S*y*w,this._z=v*y*w+S*C*b,this._w=v*y*b-S*C*w;break;case"ZYX":this._x=S*y*b-v*C*w,this._y=v*C*b+S*y*w,this._z=v*y*w-S*C*b,this._w=v*y*b+S*C*w;break;case"YZX":this._x=S*y*b+v*C*w,this._y=v*C*b+S*y*w,this._z=v*y*w-S*C*b,this._w=v*y*b-S*C*w;break;case"XZY":this._x=S*y*b-v*C*w,this._y=v*C*b-S*y*w,this._z=v*y*w+S*C*b,this._w=v*y*b+S*C*w;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,u=Math.sin(s);return this._x=t.x*u,this._y=t.y*u,this._z=t.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],u=i[4],f=i[8],p=i[1],_=i[5],x=i[9],v=i[2],y=i[6],b=i[10],S=s+_+b;if(S>0){const C=.5/Math.sqrt(S+1);this._w=.25/C,this._x=(y-x)*C,this._y=(f-v)*C,this._z=(p-u)*C}else if(s>_&&s>b){const C=2*Math.sqrt(1+s-_-b);this._w=(y-x)/C,this._x=.25*C,this._y=(u+p)/C,this._z=(f+v)/C}else if(_>b){const C=2*Math.sqrt(1+_-s-b);this._w=(f-v)/C,this._x=(u+p)/C,this._y=.25*C,this._z=(x+y)/C}else{const C=2*Math.sqrt(1+b-s-_);this._w=(p-u)/C,this._x=(f+v)/C,this._y=(x+y)/C,this._z=.25*C}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(t,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,u=t._y,f=t._z,p=t._w,_=i._x,x=i._y,v=i._z,y=i._w;return this._x=s*y+p*_+u*v-f*x,this._y=u*y+p*x+f*_-s*v,this._z=f*y+p*v+s*x-u*_,this._w=p*y-s*_-u*x-f*v,this._onChangeCallback(),this}slerp(t,i){let s=t._x,u=t._y,f=t._z,p=t._w,_=this.dot(t);_<0&&(s=-s,u=-u,f=-f,p=-p,_=-_);let x=1-i;if(_<.9995){const v=Math.acos(_),y=Math.sin(v);x=Math.sin(x*v)/y,i=Math.sin(i*v)/y,this._x=this._x*x+s*i,this._y=this._y*x+u*i,this._z=this._z*x+f*i,this._w=this._w*x+p*i,this._onChangeCallback()}else this._x=this._x*x+s*i,this._y=this._y*x+u*i,this._z=this._z*x+f*i,this._w=this._w*x+p*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(t),u*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class dt{constructor(t=0,i=0,s=0){dt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Jv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Jv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,u=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,u=this.z,f=t.elements,p=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*p,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*p,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*p,this}applyQuaternion(t){const i=this.x,s=this.y,u=this.z,f=t.x,p=t.y,_=t.z,x=t.w,v=2*(p*u-_*s),y=2*(_*i-f*u),b=2*(f*s-p*i);return this.x=i+x*v+p*b-_*y,this.y=s+x*y+_*v-f*b,this.z=u+x*b+f*y-p*v,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,u=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Xe(this.x,t.x,i.x),this.y=Xe(this.y,t.y,i.y),this.z=Xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Xe(this.x,t,i),this.y=Xe(this.y,t,i),this.z=Xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,u=t.y,f=t.z,p=i.x,_=i.y,x=i.z;return this.x=u*x-f*_,this.y=f*p-s*x,this.z=s*_-u*p,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _p.copy(this).projectOnVector(t),this.sub(_p)}reflect(t){return this.sub(_p.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,u=this.z-t.z;return i*i+s*s+u*u}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const u=Math.sin(i)*t;return this.x=u*Math.sin(s),this.y=Math.cos(i)*t,this.z=u*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),u=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _p=new dt,Jv=new Ll;class Ue{constructor(t,i,s,u,f,p,_,x,v){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,u,f,p,_,x,v)}set(t,i,s,u,f,p,_,x,v){const y=this.elements;return y[0]=t,y[1]=u,y[2]=_,y[3]=i,y[4]=f,y[5]=x,y[6]=s,y[7]=p,y[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,u=i.elements,f=this.elements,p=s[0],_=s[3],x=s[6],v=s[1],y=s[4],b=s[7],S=s[2],C=s[5],w=s[8],N=u[0],A=u[3],E=u[6],P=u[1],B=u[4],F=u[7],X=u[2],V=u[5],j=u[8];return f[0]=p*N+_*P+x*X,f[3]=p*A+_*B+x*V,f[6]=p*E+_*F+x*j,f[1]=v*N+y*P+b*X,f[4]=v*A+y*B+b*V,f[7]=v*E+y*F+b*j,f[2]=S*N+C*P+w*X,f[5]=S*A+C*B+w*V,f[8]=S*E+C*F+w*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],u=t[2],f=t[3],p=t[4],_=t[5],x=t[6],v=t[7],y=t[8];return i*p*y-i*_*v-s*f*y+s*_*x+u*f*v-u*p*x}invert(){const t=this.elements,i=t[0],s=t[1],u=t[2],f=t[3],p=t[4],_=t[5],x=t[6],v=t[7],y=t[8],b=y*p-_*v,S=_*x-y*f,C=v*f-p*x,w=i*b+s*S+u*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/w;return t[0]=b*N,t[1]=(u*v-y*s)*N,t[2]=(_*s-u*p)*N,t[3]=S*N,t[4]=(y*i-u*x)*N,t[5]=(u*f-_*i)*N,t[6]=C*N,t[7]=(s*x-v*i)*N,t[8]=(p*i-s*f)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,u,f,p,_){const x=Math.cos(f),v=Math.sin(f);return this.set(s*x,s*v,-s*(x*p+v*_)+p+t,-u*v,u*x,-u*(-v*p+x*_)+_+i,0,0,1),this}scale(t,i){return this.premultiply(gp.makeScale(t,i)),this}rotate(t){return this.premultiply(gp.makeRotation(-t)),this}translate(t,i){return this.premultiply(gp.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gp=new Ue,Qv=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lE(){const o={enabled:!0,workingColorSpace:Tl,spaces:{},convert:function(u,f,p){return this.enabled===!1||f===p||!f||!p||(this.spaces[f].transfer===fn&&(u.r=Dr(u.r),u.g=Dr(u.g),u.b=Dr(u.b)),this.spaces[f].primaries!==this.spaces[p].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===fn&&(u.r=yl(u.r),u.g=yl(u.g),u.b=yl(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===xs?$f:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,p){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return eh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return eh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Tl]:{primaries:t,whitePoint:s,transfer:$f,toXYZ:Qv,fromXYZ:$v,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ha},outputColorSpaceConfig:{drawingBufferColorSpace:ha}},[ha]:{primaries:t,whitePoint:s,transfer:fn,toXYZ:Qv,fromXYZ:$v,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ha}}}),o}const Qe=lE();function Dr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rl;class cE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{rl===void 0&&(rl=th("canvas")),rl.width=t.width,rl.height=t.height;const u=rl.getContext("2d");t instanceof ImageData?u.putImageData(t,0,0):u.drawImage(t,0,0,t.width,t.height),s=rl}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=th("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const u=s.getImageData(0,0,t.width,t.height),f=u.data;for(let p=0;p<f.length;p++)f[p]=Dr(f[p]/255)*255;return s.putImageData(u,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Dr(i[s]/255)*255):i[s]=Dr(i[s]);return{data:i,width:t.width,height:t.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uE=0;class m_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Zc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let p=0,_=u.length;p<_;p++)u[p].isDataTexture?f.push(vp(u[p].image)):f.push(vp(u[p]))}else f=vp(u);s.url=f}return i||(t.images[this.uuid]=s),s}}function vp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let fE=0;const xp=new dt;class yi extends Rl{constructor(t=yi.DEFAULT_IMAGE,i=yi.DEFAULT_MAPPING,s=Rr,u=Rr,f=pi,p=fo,_=Ra,x=Qi,v=yi.DEFAULT_ANISOTROPY,y=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Zc(),this.name="",this.source=new m_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=p,this.anisotropy=v,this.format=_,this.internalFormat=null,this.type=x,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xp).x}get height(){return this.source.getSize(xp).y}get depth(){return this.source.getSize(xp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){Ae(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ly)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case om:t.x=t.x-Math.floor(t.x);break;case Rr:t.x=t.x<0?0:1;break;case lm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case om:t.y=t.y-Math.floor(t.y);break;case Rr:t.y=t.y<0?0:1;break;case lm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=Ly;yi.DEFAULT_ANISOTROPY=1;class Un{constructor(t=0,i=0,s=0,u=1){Un.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,u){return this.x=t,this.y=i,this.z=s,this.w=u,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,u=this.z,f=this.w,p=t.elements;return this.x=p[0]*i+p[4]*s+p[8]*u+p[12]*f,this.y=p[1]*i+p[5]*s+p[9]*u+p[13]*f,this.z=p[2]*i+p[6]*s+p[10]*u+p[14]*f,this.w=p[3]*i+p[7]*s+p[11]*u+p[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,u,f;const x=t.elements,v=x[0],y=x[4],b=x[8],S=x[1],C=x[5],w=x[9],N=x[2],A=x[6],E=x[10];if(Math.abs(y-S)<.01&&Math.abs(b-N)<.01&&Math.abs(w-A)<.01){if(Math.abs(y+S)<.1&&Math.abs(b+N)<.1&&Math.abs(w+A)<.1&&Math.abs(v+C+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(v+1)/2,F=(C+1)/2,X=(E+1)/2,V=(y+S)/4,j=(b+N)/4,D=(w+A)/4;return B>F&&B>X?B<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(B),u=V/s,f=j/s):F>X?F<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(F),s=V/u,f=D/u):X<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(X),s=j/f,u=D/f),this.set(s,u,f,i),this}let P=Math.sqrt((A-w)*(A-w)+(b-N)*(b-N)+(S-y)*(S-y));return Math.abs(P)<.001&&(P=1),this.x=(A-w)/P,this.y=(b-N)/P,this.z=(S-y)/P,this.w=Math.acos((v+C+E-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Xe(this.x,t.x,i.x),this.y=Xe(this.y,t.y,i.y),this.z=Xe(this.z,t.z,i.z),this.w=Xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Xe(this.x,t,i),this.y=Xe(this.y,t,i),this.z=Xe(this.z,t,i),this.w=Xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hE extends Rl{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Un(0,0,t,i),this.scissorTest=!1,this.viewport=new Un(0,0,t,i),this.textures=[];const u={width:t,height:i,depth:s.depth},f=new yi(u),p=s.count;for(let _=0;_<p;_++)this.textures[_]=f.clone(),this.textures[_].isRenderTargetTexture=!0,this.textures[_].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=t,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},t.textures[i].image);this.textures[i].source=new m_(u)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qa extends hE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Hy extends yi{constructor(t=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:u},this.magFilter=oi,this.minFilter=oi,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dE extends yi{constructor(t=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:u},this.magFilter=oi,this.minFilter=oi,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(t,i,s,u,f,p,_,x,v,y,b,S,C,w,N,A){Cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,u,f,p,_,x,v,y,b,S,C,w,N,A)}set(t,i,s,u,f,p,_,x,v,y,b,S,C,w,N,A){const E=this.elements;return E[0]=t,E[4]=i,E[8]=s,E[12]=u,E[1]=f,E[5]=p,E[9]=_,E[13]=x,E[2]=v,E[6]=y,E[10]=b,E[14]=S,E[3]=C,E[7]=w,E[11]=N,E[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,u=1/sl.setFromMatrixColumn(t,0).length(),f=1/sl.setFromMatrixColumn(t,1).length(),p=1/sl.setFromMatrixColumn(t,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*p,i[9]=s[9]*p,i[10]=s[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,u=t.y,f=t.z,p=Math.cos(s),_=Math.sin(s),x=Math.cos(u),v=Math.sin(u),y=Math.cos(f),b=Math.sin(f);if(t.order==="XYZ"){const S=p*y,C=p*b,w=_*y,N=_*b;i[0]=x*y,i[4]=-x*b,i[8]=v,i[1]=C+w*v,i[5]=S-N*v,i[9]=-_*x,i[2]=N-S*v,i[6]=w+C*v,i[10]=p*x}else if(t.order==="YXZ"){const S=x*y,C=x*b,w=v*y,N=v*b;i[0]=S+N*_,i[4]=w*_-C,i[8]=p*v,i[1]=p*b,i[5]=p*y,i[9]=-_,i[2]=C*_-w,i[6]=N+S*_,i[10]=p*x}else if(t.order==="ZXY"){const S=x*y,C=x*b,w=v*y,N=v*b;i[0]=S-N*_,i[4]=-p*b,i[8]=w+C*_,i[1]=C+w*_,i[5]=p*y,i[9]=N-S*_,i[2]=-p*v,i[6]=_,i[10]=p*x}else if(t.order==="ZYX"){const S=p*y,C=p*b,w=_*y,N=_*b;i[0]=x*y,i[4]=w*v-C,i[8]=S*v+N,i[1]=x*b,i[5]=N*v+S,i[9]=C*v-w,i[2]=-v,i[6]=_*x,i[10]=p*x}else if(t.order==="YZX"){const S=p*x,C=p*v,w=_*x,N=_*v;i[0]=x*y,i[4]=N-S*b,i[8]=w*b+C,i[1]=b,i[5]=p*y,i[9]=-_*y,i[2]=-v*y,i[6]=C*b+w,i[10]=S-N*b}else if(t.order==="XZY"){const S=p*x,C=p*v,w=_*x,N=_*v;i[0]=x*y,i[4]=-b,i[8]=v*y,i[1]=S*b+N,i[5]=p*y,i[9]=C*b-w,i[2]=w*b-C,i[6]=_*y,i[10]=N*b+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pE,t,mE)}lookAt(t,i,s){const u=this.elements;return Yi.subVectors(t,i),Yi.lengthSq()===0&&(Yi.z=1),Yi.normalize(),ds.crossVectors(s,Yi),ds.lengthSq()===0&&(Math.abs(s.z)===1?Yi.x+=1e-4:Yi.z+=1e-4,Yi.normalize(),ds.crossVectors(s,Yi)),ds.normalize(),vf.crossVectors(Yi,ds),u[0]=ds.x,u[4]=vf.x,u[8]=Yi.x,u[1]=ds.y,u[5]=vf.y,u[9]=Yi.y,u[2]=ds.z,u[6]=vf.z,u[10]=Yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,u=i.elements,f=this.elements,p=s[0],_=s[4],x=s[8],v=s[12],y=s[1],b=s[5],S=s[9],C=s[13],w=s[2],N=s[6],A=s[10],E=s[14],P=s[3],B=s[7],F=s[11],X=s[15],V=u[0],j=u[4],D=u[8],H=u[12],vt=u[1],Z=u[5],rt=u[9],ft=u[13],mt=u[2],lt=u[6],G=u[10],q=u[14],it=u[3],At=u[7],xt=u[11],I=u[15];return f[0]=p*V+_*vt+x*mt+v*it,f[4]=p*j+_*Z+x*lt+v*At,f[8]=p*D+_*rt+x*G+v*xt,f[12]=p*H+_*ft+x*q+v*I,f[1]=y*V+b*vt+S*mt+C*it,f[5]=y*j+b*Z+S*lt+C*At,f[9]=y*D+b*rt+S*G+C*xt,f[13]=y*H+b*ft+S*q+C*I,f[2]=w*V+N*vt+A*mt+E*it,f[6]=w*j+N*Z+A*lt+E*At,f[10]=w*D+N*rt+A*G+E*xt,f[14]=w*H+N*ft+A*q+E*I,f[3]=P*V+B*vt+F*mt+X*it,f[7]=P*j+B*Z+F*lt+X*At,f[11]=P*D+B*rt+F*G+X*xt,f[15]=P*H+B*ft+F*q+X*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],u=t[8],f=t[12],p=t[1],_=t[5],x=t[9],v=t[13],y=t[2],b=t[6],S=t[10],C=t[14],w=t[3],N=t[7],A=t[11],E=t[15],P=x*C-v*S,B=_*C-v*b,F=_*S-x*b,X=p*C-v*y,V=p*S-x*y,j=p*b-_*y;return i*(N*P-A*B+E*F)-s*(w*P-A*X+E*V)+u*(w*B-N*X+E*j)-f*(w*F-N*V+A*j)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const u=this.elements;return t.isVector3?(u[12]=t.x,u[13]=t.y,u[14]=t.z):(u[12]=t,u[13]=i,u[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],u=t[2],f=t[3],p=t[4],_=t[5],x=t[6],v=t[7],y=t[8],b=t[9],S=t[10],C=t[11],w=t[12],N=t[13],A=t[14],E=t[15],P=i*_-s*p,B=i*x-u*p,F=i*v-f*p,X=s*x-u*_,V=s*v-f*_,j=u*v-f*x,D=y*N-b*w,H=y*A-S*w,vt=y*E-C*w,Z=b*A-S*N,rt=b*E-C*N,ft=S*E-C*A,mt=P*ft-B*rt+F*Z+X*vt-V*H+j*D;if(mt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const lt=1/mt;return t[0]=(_*ft-x*rt+v*Z)*lt,t[1]=(u*rt-s*ft-f*Z)*lt,t[2]=(N*j-A*V+E*X)*lt,t[3]=(S*V-b*j-C*X)*lt,t[4]=(x*vt-p*ft-v*H)*lt,t[5]=(i*ft-u*vt+f*H)*lt,t[6]=(A*F-w*j-E*B)*lt,t[7]=(y*j-S*F+C*B)*lt,t[8]=(p*rt-_*vt+v*D)*lt,t[9]=(s*vt-i*rt-f*D)*lt,t[10]=(w*V-N*F+E*P)*lt,t[11]=(b*F-y*V-C*P)*lt,t[12]=(_*H-p*Z-x*D)*lt,t[13]=(i*Z-s*H+u*D)*lt,t[14]=(N*B-w*X-A*P)*lt,t[15]=(y*X-b*B+S*P)*lt,this}scale(t){const i=this.elements,s=t.x,u=t.y,f=t.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],u=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,p=t.x,_=t.y,x=t.z,v=f*p,y=f*_;return this.set(v*p+s,v*_-u*x,v*x+u*_,0,v*_+u*x,y*_+s,y*x-u*p,0,v*x-u*_,y*x+u*p,f*x*x+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,u,f,p){return this.set(1,s,f,0,t,1,p,0,i,u,1,0,0,0,0,1),this}compose(t,i,s){const u=this.elements,f=i._x,p=i._y,_=i._z,x=i._w,v=f+f,y=p+p,b=_+_,S=f*v,C=f*y,w=f*b,N=p*y,A=p*b,E=_*b,P=x*v,B=x*y,F=x*b,X=s.x,V=s.y,j=s.z;return u[0]=(1-(N+E))*X,u[1]=(C+F)*X,u[2]=(w-B)*X,u[3]=0,u[4]=(C-F)*V,u[5]=(1-(S+E))*V,u[6]=(A+P)*V,u[7]=0,u[8]=(w+B)*j,u[9]=(A-P)*j,u[10]=(1-(S+N))*j,u[11]=0,u[12]=t.x,u[13]=t.y,u[14]=t.z,u[15]=1,this}decompose(t,i,s){const u=this.elements;t.x=u[12],t.y=u[13],t.z=u[14];const f=this.determinant();if(f===0)return s.set(1,1,1),i.identity(),this;let p=sl.set(u[0],u[1],u[2]).length();const _=sl.set(u[4],u[5],u[6]).length(),x=sl.set(u[8],u[9],u[10]).length();f<0&&(p=-p),Ta.copy(this);const v=1/p,y=1/_,b=1/x;return Ta.elements[0]*=v,Ta.elements[1]*=v,Ta.elements[2]*=v,Ta.elements[4]*=y,Ta.elements[5]*=y,Ta.elements[6]*=y,Ta.elements[8]*=b,Ta.elements[9]*=b,Ta.elements[10]*=b,i.setFromRotationMatrix(Ta),s.x=p,s.y=_,s.z=x,this}makePerspective(t,i,s,u,f,p,_=Ka,x=!1){const v=this.elements,y=2*f/(i-t),b=2*f/(s-u),S=(i+t)/(i-t),C=(s+u)/(s-u);let w,N;if(x)w=f/(p-f),N=p*f/(p-f);else if(_===Ka)w=-(p+f)/(p-f),N=-2*p*f/(p-f);else if(_===kc)w=-p/(p-f),N=-p*f/(p-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+_);return v[0]=y,v[4]=0,v[8]=S,v[12]=0,v[1]=0,v[5]=b,v[9]=C,v[13]=0,v[2]=0,v[6]=0,v[10]=w,v[14]=N,v[3]=0,v[7]=0,v[11]=-1,v[15]=0,this}makeOrthographic(t,i,s,u,f,p,_=Ka,x=!1){const v=this.elements,y=2/(i-t),b=2/(s-u),S=-(i+t)/(i-t),C=-(s+u)/(s-u);let w,N;if(x)w=1/(p-f),N=p/(p-f);else if(_===Ka)w=-2/(p-f),N=-(p+f)/(p-f);else if(_===kc)w=-1/(p-f),N=-f/(p-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+_);return v[0]=y,v[4]=0,v[8]=0,v[12]=S,v[1]=0,v[5]=b,v[9]=0,v[13]=C,v[2]=0,v[6]=0,v[10]=w,v[14]=N,v[3]=0,v[7]=0,v[11]=0,v[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const sl=new dt,Ta=new Cn,pE=new dt(0,0,0),mE=new dt(1,1,1),ds=new dt,vf=new dt,Yi=new dt,tx=new Cn,ex=new Ll;class tr{constructor(t=0,i=0,s=0,u=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,u=this._order){return this._x=t,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const u=t.elements,f=u[0],p=u[4],_=u[8],x=u[1],v=u[5],y=u[9],b=u[2],S=u[6],C=u[10];switch(i){case"XYZ":this._y=Math.asin(Xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-y,C),this._z=Math.atan2(-p,f)):(this._x=Math.atan2(S,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(_,C),this._z=Math.atan2(x,v)):(this._y=Math.atan2(-b,f),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-b,C),this._z=Math.atan2(-p,v)):(this._y=0,this._z=Math.atan2(x,f));break;case"ZYX":this._y=Math.asin(-Xe(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(S,C),this._z=Math.atan2(x,f)):(this._x=0,this._z=Math.atan2(-p,v));break;case"YZX":this._z=Math.asin(Xe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-y,v),this._y=Math.atan2(-b,f)):(this._x=0,this._y=Math.atan2(_,C));break;case"XZY":this._z=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(S,v),this._y=Math.atan2(_,f)):(this._x=Math.atan2(-y,C),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return tx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ex.setFromEuler(this),this.setFromQuaternion(ex,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class ky{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _E=0;const nx=new dt,ol=new Ll,Mr=new Cn,xf=new dt,Lc=new dt,gE=new dt,vE=new Ll,ix=new dt(1,0,0),ax=new dt(0,1,0),rx=new dt(0,0,1),sx={type:"added"},xE={type:"removed"},ll={type:"childadded",child:null},yp={type:"childremoved",child:null};class Si extends Rl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Zc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Si.DEFAULT_UP.clone();const t=new dt,i=new tr,s=new Ll,u=new dt(1,1,1);function f(){s.setFromEuler(i,!1)}function p(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new Cn},normalMatrix:{value:new Ue}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=Si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ky,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ol.setFromAxisAngle(t,i),this.quaternion.multiply(ol),this}rotateOnWorldAxis(t,i){return ol.setFromAxisAngle(t,i),this.quaternion.premultiply(ol),this}rotateX(t){return this.rotateOnAxis(ix,t)}rotateY(t){return this.rotateOnAxis(ax,t)}rotateZ(t){return this.rotateOnAxis(rx,t)}translateOnAxis(t,i){return nx.copy(t).applyQuaternion(this.quaternion),this.position.add(nx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ix,t)}translateY(t){return this.translateOnAxis(ax,t)}translateZ(t){return this.translateOnAxis(rx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xf.copy(t):xf.set(t,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),Lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Lc,xf,this.up):Mr.lookAt(xf,Lc,this.up),this.quaternion.setFromRotationMatrix(Mr),u&&(Mr.extractRotation(u.matrixWorld),ol.setFromRotationMatrix(Mr),this.quaternion.premultiply(ol.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(an("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sx),ll.child=t,this.dispatchEvent(ll),ll.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xE),yp.child=t,this.dispatchEvent(yp),yp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sx),ll.child=t,this.dispatchEvent(ll),ll.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const p=this.children[s].getObjectByProperty(t,i);if(p!==void 0)return p}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const u=this.children;for(let f=0,p=u.length;f<p;f++)u[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lc,t,gE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lc,vE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,u=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,p=u.length;f<p;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),this.static!==!1&&(u.static=this.static),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(_=>({..._,boundingBox:_.boundingBox?_.boundingBox.toJSON():void 0,boundingSphere:_.boundingSphere?_.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(_=>({..._})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(t),u.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(_,x){return _[x.uuid]===void 0&&(_[x.uuid]=x.toJSON(t)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(t.geometries,this.geometry);const _=this.geometry.parameters;if(_!==void 0&&_.shapes!==void 0){const x=_.shapes;if(Array.isArray(x))for(let v=0,y=x.length;v<y;v++){const b=x[v];f(t.shapes,b)}else f(t.shapes,x)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const _=[];for(let x=0,v=this.material.length;x<v;x++)_.push(f(t.materials,this.material[x]));u.material=_}else u.material=f(t.materials,this.material);if(this.children.length>0){u.children=[];for(let _=0;_<this.children.length;_++)u.children.push(this.children[_].toJSON(t).object)}if(this.animations.length>0){u.animations=[];for(let _=0;_<this.animations.length;_++){const x=this.animations[_];u.animations.push(f(t.animations,x))}}if(i){const _=p(t.geometries),x=p(t.materials),v=p(t.textures),y=p(t.images),b=p(t.shapes),S=p(t.skeletons),C=p(t.animations),w=p(t.nodes);_.length>0&&(s.geometries=_),x.length>0&&(s.materials=x),v.length>0&&(s.textures=v),y.length>0&&(s.images=y),b.length>0&&(s.shapes=b),S.length>0&&(s.skeletons=S),C.length>0&&(s.animations=C),w.length>0&&(s.nodes=w)}return s.object=u,s;function p(_){const x=[];for(const v in _){const y=_[v];delete y.metadata,x.push(y)}return x}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const u=t.children[s];this.add(u.clone())}return this}}Si.DEFAULT_UP=new dt(0,1,0);Si.DEFAULT_MATRIX_AUTO_UPDATE=!0;Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yf extends Si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yE={type:"move"};class Sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new dt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new dt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new dt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new dt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let u=null,f=null,p=null;const _=this._targetRay,x=this._grip,v=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(v&&t.hand){p=!0;for(const N of t.hand.values()){const A=i.getJointPose(N,s),E=this._getHandJoint(v,N);A!==null&&(E.matrix.fromArray(A.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=A.radius),E.visible=A!==null}const y=v.joints["index-finger-tip"],b=v.joints["thumb-tip"],S=y.position.distanceTo(b.position),C=.02,w=.005;v.inputState.pinching&&S>C+w?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!v.inputState.pinching&&S<=C-w&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else x!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,f.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(f.linearVelocity)):x.hasLinearVelocity=!1,f.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(f.angularVelocity)):x.hasAngularVelocity=!1));_!==null&&(u=i.getPose(t.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(_.matrix.fromArray(u.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,u.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(u.linearVelocity)):_.hasLinearVelocity=!1,u.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(u.angularVelocity)):_.hasAngularVelocity=!1,this.dispatchEvent(yE)))}return _!==null&&(_.visible=u!==null),x!==null&&(x.visible=f!==null),v!==null&&(v.visible=p!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new yf;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Sf={h:0,s:0,l:0};function bp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ke{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const u=t;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ha){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,u=Qe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Qe.colorSpaceToWorking(this,u),this}setHSL(t,i,s,u=Qe.workingColorSpace){if(t=oE(t,1),i=Xe(i,0,1),s=Xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,p=2*s-f;this.r=bp(p,f,t+1/3),this.g=bp(p,f,t),this.b=bp(p,f,t-1/3)}return Qe.colorSpaceToWorking(this,u),this}setStyle(t,i=ha){function s(f){f!==void 0&&parseFloat(f)<1&&Ae("Color: Alpha component of "+t+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const p=u[1],_=u[2];switch(p){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:Ae("Color: Unknown color model "+t)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=u[1],p=f.length;if(p===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(f,16),i);Ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ha){const s=Gy[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}copyLinearToSRGB(t){return this.r=yl(t.r),this.g=yl(t.g),this.b=yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ha){return Qe.workingToColorSpace(hi.copy(this),t),Math.round(Xe(hi.r*255,0,255))*65536+Math.round(Xe(hi.g*255,0,255))*256+Math.round(Xe(hi.b*255,0,255))}getHexString(t=ha){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Qe.workingColorSpace){Qe.workingToColorSpace(hi.copy(this),i);const s=hi.r,u=hi.g,f=hi.b,p=Math.max(s,u,f),_=Math.min(s,u,f);let x,v;const y=(_+p)/2;if(_===p)x=0,v=0;else{const b=p-_;switch(v=y<=.5?b/(p+_):b/(2-p-_),p){case s:x=(u-f)/b+(u<f?6:0);break;case u:x=(f-s)/b+2;break;case f:x=(s-u)/b+4;break}x/=6}return t.h=x,t.s=v,t.l=y,t}getRGB(t,i=Qe.workingColorSpace){return Qe.workingToColorSpace(hi.copy(this),i),t.r=hi.r,t.g=hi.g,t.b=hi.b,t}getStyle(t=ha){Qe.workingToColorSpace(hi.copy(this),t);const i=hi.r,s=hi.g,u=hi.b;return t!==ha?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(t,i,s){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+i,ps.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ps),t.getHSL(Sf);const s=mp(ps.h,Sf.h,i),u=mp(ps.s,Sf.s,i),f=mp(ps.l,Sf.l,i);return this.setHSL(s,u,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,u=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hi=new Ke;Ke.NAMES=Gy;class __{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(t),this.density=i}clone(){return new __(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class SE extends Si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Aa=new dt,Er=new dt,Mp=new dt,Tr=new dt,cl=new dt,ul=new dt,ox=new dt,Ep=new dt,Tp=new dt,Ap=new dt,wp=new Un,Cp=new Un,Rp=new Un;class Ca{constructor(t=new dt,i=new dt,s=new dt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,u){u.subVectors(s,i),Aa.subVectors(t,i),u.cross(Aa);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(t,i,s,u,f){Aa.subVectors(u,i),Er.subVectors(s,i),Mp.subVectors(t,i);const p=Aa.dot(Aa),_=Aa.dot(Er),x=Aa.dot(Mp),v=Er.dot(Er),y=Er.dot(Mp),b=p*v-_*_;if(b===0)return f.set(0,0,0),null;const S=1/b,C=(v*x-_*y)*S,w=(p*y-_*x)*S;return f.set(1-C-w,w,C)}static containsPoint(t,i,s,u){return this.getBarycoord(t,i,s,u,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(t,i,s,u,f,p,_,x){return this.getBarycoord(t,i,s,u,Tr)===null?(x.x=0,x.y=0,"z"in x&&(x.z=0),"w"in x&&(x.w=0),null):(x.setScalar(0),x.addScaledVector(f,Tr.x),x.addScaledVector(p,Tr.y),x.addScaledVector(_,Tr.z),x)}static getInterpolatedAttribute(t,i,s,u,f,p){return wp.setScalar(0),Cp.setScalar(0),Rp.setScalar(0),wp.fromBufferAttribute(t,i),Cp.fromBufferAttribute(t,s),Rp.fromBufferAttribute(t,u),p.setScalar(0),p.addScaledVector(wp,f.x),p.addScaledVector(Cp,f.y),p.addScaledVector(Rp,f.z),p}static isFrontFacing(t,i,s,u){return Aa.subVectors(s,i),Er.subVectors(t,i),Aa.cross(Er).dot(u)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,u){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[u]),this}setFromAttributeAndIndices(t,i,s,u){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,u),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Aa.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Aa.cross(Er).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ca.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ca.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,u,f){return Ca.getInterpolation(t,this.a,this.b,this.c,i,s,u,f)}containsPoint(t){return Ca.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ca.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,u=this.b,f=this.c;let p,_;cl.subVectors(u,s),ul.subVectors(f,s),Ep.subVectors(t,s);const x=cl.dot(Ep),v=ul.dot(Ep);if(x<=0&&v<=0)return i.copy(s);Tp.subVectors(t,u);const y=cl.dot(Tp),b=ul.dot(Tp);if(y>=0&&b<=y)return i.copy(u);const S=x*b-y*v;if(S<=0&&x>=0&&y<=0)return p=x/(x-y),i.copy(s).addScaledVector(cl,p);Ap.subVectors(t,f);const C=cl.dot(Ap),w=ul.dot(Ap);if(w>=0&&C<=w)return i.copy(f);const N=C*v-x*w;if(N<=0&&v>=0&&w<=0)return _=v/(v-w),i.copy(s).addScaledVector(ul,_);const A=y*w-C*b;if(A<=0&&b-y>=0&&C-w>=0)return ox.subVectors(f,u),_=(b-y)/(b-y+(C-w)),i.copy(u).addScaledVector(ox,_);const E=1/(A+N+S);return p=N*E,_=S*E,i.copy(s).addScaledVector(cl,p).addScaledVector(ul,_)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yc{constructor(t=new dt(1/0,1/0,1/0),i=new dt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wa.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wa.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wa.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let p=0,_=f.count;p<_;p++)t.isMesh===!0?t.getVertexPosition(p,wa):wa.fromBufferAttribute(f,p),wa.applyMatrix4(t.matrixWorld),this.expandByPoint(wa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bf.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bf.copy(s.boundingBox)),bf.applyMatrix4(t.matrixWorld),this.union(bf)}const u=t.children;for(let f=0,p=u.length;f<p;f++)this.expandByObject(u[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wa),wa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dc),Mf.subVectors(this.max,Dc),fl.subVectors(t.a,Dc),hl.subVectors(t.b,Dc),dl.subVectors(t.c,Dc),ms.subVectors(hl,fl),_s.subVectors(dl,hl),eo.subVectors(fl,dl);let i=[0,-ms.z,ms.y,0,-_s.z,_s.y,0,-eo.z,eo.y,ms.z,0,-ms.x,_s.z,0,-_s.x,eo.z,0,-eo.x,-ms.y,ms.x,0,-_s.y,_s.x,0,-eo.y,eo.x,0];return!Lp(i,fl,hl,dl,Mf)||(i=[1,0,0,0,1,0,0,0,1],!Lp(i,fl,hl,dl,Mf))?!1:(Ef.crossVectors(ms,_s),i=[Ef.x,Ef.y,Ef.z],Lp(i,fl,hl,dl,Mf))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ar=[new dt,new dt,new dt,new dt,new dt,new dt,new dt,new dt],wa=new dt,bf=new Yc,fl=new dt,hl=new dt,dl=new dt,ms=new dt,_s=new dt,eo=new dt,Dc=new dt,Mf=new dt,Ef=new dt,no=new dt;function Lp(o,t,i,s,u){for(let f=0,p=o.length-3;f<=p;f+=3){no.fromArray(o,f);const _=u.x*Math.abs(no.x)+u.y*Math.abs(no.y)+u.z*Math.abs(no.z),x=t.dot(no),v=i.dot(no),y=s.dot(no);if(Math.max(-Math.max(x,v,y),Math.min(x,v,y))>_)return!1}return!0}const Gn=new dt,Tf=new Je;let bE=0;class da{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=qv,this.updateRanges=[],this.gpuType=Ya,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[t+u]=i.array[s+u];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tf.fromBufferAttribute(this,i),Tf.applyMatrix3(t),this.setXY(i,Tf.x,Tf.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix3(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Rc(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ui(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Rc(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Rc(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Rc(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Rc(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ui(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ui(i,this.array),s=Ui(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,u){return t*=this.itemSize,this.normalized&&(i=Ui(i,this.array),s=Ui(s,this.array),u=Ui(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=u,this}setXYZW(t,i,s,u,f){return t*=this.itemSize,this.normalized&&(i=Ui(i,this.array),s=Ui(s,this.array),u=Ui(u,this.array),f=Ui(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=u,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qv&&(t.usage=this.usage),t}}class Vy extends da{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Wy extends da{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pa extends da{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ME=new Yc,Pc=new dt,Dp=new dt;class lh{constructor(t=new dt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ME.setFromPoints(t).getCenter(s);let u=0;for(let f=0,p=t.length;f<p;f++)u=Math.max(u,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(u),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pc.subVectors(t,this.center);const i=Pc.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(Pc,u/s),this.radius+=u}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pc.copy(t.center).add(Dp)),this.expandByPoint(Pc.copy(t.center).sub(Dp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let EE=0;const fa=new Cn,Pp=new Si,pl=new dt,Ki=new Yc,Uc=new Yc,$n=new dt;class ma extends Rl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Zc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iE(t)?Wy:Vy)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new Ue().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(t),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fa.makeRotationFromQuaternion(t),this.applyMatrix4(fa),this}rotateX(t){return fa.makeRotationX(t),this.applyMatrix4(fa),this}rotateY(t){return fa.makeRotationY(t),this.applyMatrix4(fa),this}rotateZ(t){return fa.makeRotationZ(t),this.applyMatrix4(fa),this}translate(t,i,s){return fa.makeTranslation(t,i,s),this.applyMatrix4(fa),this}scale(t,i,s){return fa.makeScale(t,i,s),this.applyMatrix4(fa),this}lookAt(t){return Pp.lookAt(t),Pp.updateMatrix(),this.applyMatrix4(Pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pl).negate(),this.translate(pl.x,pl.y,pl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=t.length;u<f;u++){const p=t[u];s.push(p.x,p.y,p.z||0)}this.setAttribute("position",new pa(s,3))}else{const s=Math.min(t.length,i.count);for(let u=0;u<s;u++){const f=t[u];i.setXYZ(u,f.x,f.y,f.z||0)}t.length>i.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new dt(-1/0,-1/0,-1/0),new dt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];Ki.setFromBufferAttribute(f),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new dt,1/0);return}if(t){const s=this.boundingSphere.center;if(Ki.setFromBufferAttribute(t),i)for(let f=0,p=i.length;f<p;f++){const _=i[f];Uc.setFromBufferAttribute(_),this.morphTargetsRelative?($n.addVectors(Ki.min,Uc.min),Ki.expandByPoint($n),$n.addVectors(Ki.max,Uc.max),Ki.expandByPoint($n)):(Ki.expandByPoint(Uc.min),Ki.expandByPoint(Uc.max))}Ki.getCenter(s);let u=0;for(let f=0,p=t.count;f<p;f++)$n.fromBufferAttribute(t,f),u=Math.max(u,s.distanceToSquared($n));if(i)for(let f=0,p=i.length;f<p;f++){const _=i[f],x=this.morphTargetsRelative;for(let v=0,y=_.count;v<y;v++)$n.fromBufferAttribute(_,v),x&&(pl.fromBufferAttribute(t,v),$n.add(pl)),u=Math.max(u,s.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new da(new Float32Array(4*s.count),4));const p=this.getAttribute("tangent"),_=[],x=[];for(let D=0;D<s.count;D++)_[D]=new dt,x[D]=new dt;const v=new dt,y=new dt,b=new dt,S=new Je,C=new Je,w=new Je,N=new dt,A=new dt;function E(D,H,vt){v.fromBufferAttribute(s,D),y.fromBufferAttribute(s,H),b.fromBufferAttribute(s,vt),S.fromBufferAttribute(f,D),C.fromBufferAttribute(f,H),w.fromBufferAttribute(f,vt),y.sub(v),b.sub(v),C.sub(S),w.sub(S);const Z=1/(C.x*w.y-w.x*C.y);isFinite(Z)&&(N.copy(y).multiplyScalar(w.y).addScaledVector(b,-C.y).multiplyScalar(Z),A.copy(b).multiplyScalar(C.x).addScaledVector(y,-w.x).multiplyScalar(Z),_[D].add(N),_[H].add(N),_[vt].add(N),x[D].add(A),x[H].add(A),x[vt].add(A))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let D=0,H=P.length;D<H;++D){const vt=P[D],Z=vt.start,rt=vt.count;for(let ft=Z,mt=Z+rt;ft<mt;ft+=3)E(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const B=new dt,F=new dt,X=new dt,V=new dt;function j(D){X.fromBufferAttribute(u,D),V.copy(X);const H=_[D];B.copy(H),B.sub(X.multiplyScalar(X.dot(H))).normalize(),F.crossVectors(V,H);const Z=F.dot(x[D])<0?-1:1;p.setXYZW(D,B.x,B.y,B.z,Z)}for(let D=0,H=P.length;D<H;++D){const vt=P[D],Z=vt.start,rt=vt.count;for(let ft=Z,mt=Z+rt;ft<mt;ft+=3)j(t.getX(ft+0)),j(t.getX(ft+1)),j(t.getX(ft+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new da(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,C=s.count;S<C;S++)s.setXYZ(S,0,0,0);const u=new dt,f=new dt,p=new dt,_=new dt,x=new dt,v=new dt,y=new dt,b=new dt;if(t)for(let S=0,C=t.count;S<C;S+=3){const w=t.getX(S+0),N=t.getX(S+1),A=t.getX(S+2);u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,N),p.fromBufferAttribute(i,A),y.subVectors(p,f),b.subVectors(u,f),y.cross(b),_.fromBufferAttribute(s,w),x.fromBufferAttribute(s,N),v.fromBufferAttribute(s,A),_.add(y),x.add(y),v.add(y),s.setXYZ(w,_.x,_.y,_.z),s.setXYZ(N,x.x,x.y,x.z),s.setXYZ(A,v.x,v.y,v.z)}else for(let S=0,C=i.count;S<C;S+=3)u.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),p.fromBufferAttribute(i,S+2),y.subVectors(p,f),b.subVectors(u,f),y.cross(b),s.setXYZ(S+0,y.x,y.y,y.z),s.setXYZ(S+1,y.x,y.y,y.z),s.setXYZ(S+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)$n.fromBufferAttribute(t,i),$n.normalize(),t.setXYZ(i,$n.x,$n.y,$n.z)}toNonIndexed(){function t(_,x){const v=_.array,y=_.itemSize,b=_.normalized,S=new v.constructor(x.length*y);let C=0,w=0;for(let N=0,A=x.length;N<A;N++){_.isInterleavedBufferAttribute?C=x[N]*_.data.stride+_.offset:C=x[N]*y;for(let E=0;E<y;E++)S[w++]=v[C++]}return new da(S,y,b)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ma,s=this.index.array,u=this.attributes;for(const _ in u){const x=u[_],v=t(x,s);i.setAttribute(_,v)}const f=this.morphAttributes;for(const _ in f){const x=[],v=f[_];for(let y=0,b=v.length;y<b;y++){const S=v[y],C=t(S,s);x.push(C)}i.morphAttributes[_]=x}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let _=0,x=p.length;_<x;_++){const v=p[_];i.addGroup(v.start,v.count,v.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const x=this.parameters;for(const v in x)x[v]!==void 0&&(t[v]=x[v]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const x in s){const v=s[x];t.data.attributes[x]=v.toJSON(t.data)}const u={};let f=!1;for(const x in this.morphAttributes){const v=this.morphAttributes[x],y=[];for(let b=0,S=v.length;b<S;b++){const C=v[b];y.push(C.toJSON(t.data))}y.length>0&&(u[x]=y,f=!0)}f&&(t.data.morphAttributes=u,t.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(t.data.groups=JSON.parse(JSON.stringify(p)));const _=this.boundingSphere;return _!==null&&(t.data.boundingSphere=_.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const u=t.attributes;for(const v in u){const y=u[v];this.setAttribute(v,y.clone(i))}const f=t.morphAttributes;for(const v in f){const y=[],b=f[v];for(let S=0,C=b.length;S<C;S++)y.push(b[S].clone(i));this.morphAttributes[v]=y}this.morphTargetsRelative=t.morphTargetsRelative;const p=t.groups;for(let v=0,y=p.length;v<y;v++){const b=p[v];this.addGroup(b.start,b.count,b.materialIndex)}const _=t.boundingBox;_!==null&&(this.boundingBox=_.clone());const x=t.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TE=0;class Dl extends Rl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Zc(),this.name="",this.type="Material",this.blending=xl,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qp,this.blendDst=$p,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Ae(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){Ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xl&&(s.blending=this.blending),this.side!==Ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qp&&(s.blendSrc=this.blendSrc),this.blendDst!==$p&&(s.blendDst=this.blendDst),this.blendEquation!==lo&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==al&&(s.stencilFail=this.stencilFail),this.stencilZFail!==al&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==al&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const p=[];for(const _ in f){const x=f[_];delete x.metadata,p.push(x)}return p}if(i){const f=u(t.textures),p=u(t.images);f.length>0&&(s.textures=f),p.length>0&&(s.images=p)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wr=new dt,Up=new dt,Af=new dt,gs=new dt,Np=new dt,wf=new dt,Op=new dt;class jy{constructor(t=new dt,i=new dt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wr)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=wr.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(wr.copy(this.origin).addScaledVector(this.direction,i),wr.distanceToSquared(t))}distanceSqToSegment(t,i,s,u){Up.copy(t).add(i).multiplyScalar(.5),Af.copy(i).sub(t).normalize(),gs.copy(this.origin).sub(Up);const f=t.distanceTo(i)*.5,p=-this.direction.dot(Af),_=gs.dot(this.direction),x=-gs.dot(Af),v=gs.lengthSq(),y=Math.abs(1-p*p);let b,S,C,w;if(y>0)if(b=p*x-_,S=p*_-x,w=f*y,b>=0)if(S>=-w)if(S<=w){const N=1/y;b*=N,S*=N,C=b*(b+p*S+2*_)+S*(p*b+S+2*x)+v}else S=f,b=Math.max(0,-(p*S+_)),C=-b*b+S*(S+2*x)+v;else S=-f,b=Math.max(0,-(p*S+_)),C=-b*b+S*(S+2*x)+v;else S<=-w?(b=Math.max(0,-(-p*f+_)),S=b>0?-f:Math.min(Math.max(-f,-x),f),C=-b*b+S*(S+2*x)+v):S<=w?(b=0,S=Math.min(Math.max(-f,-x),f),C=S*(S+2*x)+v):(b=Math.max(0,-(p*f+_)),S=b>0?f:Math.min(Math.max(-f,-x),f),C=-b*b+S*(S+2*x)+v);else S=p>0?-f:f,b=Math.max(0,-(p*S+_)),C=-b*b+S*(S+2*x)+v;return s&&s.copy(this.origin).addScaledVector(this.direction,b),u&&u.copy(Up).addScaledVector(Af,S),C}intersectSphere(t,i){wr.subVectors(t.center,this.origin);const s=wr.dot(this.direction),u=wr.dot(wr)-s*s,f=t.radius*t.radius;if(u>f)return null;const p=Math.sqrt(f-u),_=s-p,x=s+p;return x<0?null:_<0?this.at(x,i):this.at(_,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,u,f,p,_,x;const v=1/this.direction.x,y=1/this.direction.y,b=1/this.direction.z,S=this.origin;return v>=0?(s=(t.min.x-S.x)*v,u=(t.max.x-S.x)*v):(s=(t.max.x-S.x)*v,u=(t.min.x-S.x)*v),y>=0?(f=(t.min.y-S.y)*y,p=(t.max.y-S.y)*y):(f=(t.max.y-S.y)*y,p=(t.min.y-S.y)*y),s>p||f>u||((f>s||isNaN(s))&&(s=f),(p<u||isNaN(u))&&(u=p),b>=0?(_=(t.min.z-S.z)*b,x=(t.max.z-S.z)*b):(_=(t.max.z-S.z)*b,x=(t.min.z-S.z)*b),s>x||_>u)||((_>s||s!==s)&&(s=_),(x<u||u!==u)&&(u=x),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(t){return this.intersectBox(t,wr)!==null}intersectTriangle(t,i,s,u,f){Np.subVectors(i,t),wf.subVectors(s,t),Op.crossVectors(Np,wf);let p=this.direction.dot(Op),_;if(p>0){if(u)return null;_=1}else if(p<0)_=-1,p=-p;else return null;gs.subVectors(this.origin,t);const x=_*this.direction.dot(wf.crossVectors(gs,wf));if(x<0)return null;const v=_*this.direction.dot(Np.cross(gs));if(v<0||x+v>p)return null;const y=-_*gs.dot(Op);return y<0?null:this.at(y/p,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xy extends Dl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const lx=new Cn,io=new jy,Cf=new lh,cx=new dt,Rf=new dt,Lf=new dt,Df=new dt,zp=new dt,Pf=new dt,ux=new dt,Uf=new dt;class er extends Si{constructor(t=new ma,i=new Xy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=u.length;f<p;f++){const _=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[_]=f}}}}getVertexPosition(t,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,p=s.morphTargetsRelative;i.fromBufferAttribute(u,t);const _=this.morphTargetInfluences;if(f&&_){Pf.set(0,0,0);for(let x=0,v=f.length;x<v;x++){const y=_[x],b=f[x];y!==0&&(zp.fromBufferAttribute(b,t),p?Pf.addScaledVector(zp,y):Pf.addScaledVector(zp.sub(i),y))}i.add(Pf)}return i}raycast(t,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cf.copy(s.boundingSphere),Cf.applyMatrix4(f),io.copy(t.ray).recast(t.near),!(Cf.containsPoint(io.origin)===!1&&(io.intersectSphere(Cf,cx)===null||io.origin.distanceToSquared(cx)>(t.far-t.near)**2))&&(lx.copy(f).invert(),io.copy(t.ray).applyMatrix4(lx),!(s.boundingBox!==null&&io.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,io)))}_computeIntersections(t,i,s){let u;const f=this.geometry,p=this.material,_=f.index,x=f.attributes.position,v=f.attributes.uv,y=f.attributes.uv1,b=f.attributes.normal,S=f.groups,C=f.drawRange;if(_!==null)if(Array.isArray(p))for(let w=0,N=S.length;w<N;w++){const A=S[w],E=p[A.materialIndex],P=Math.max(A.start,C.start),B=Math.min(_.count,Math.min(A.start+A.count,C.start+C.count));for(let F=P,X=B;F<X;F+=3){const V=_.getX(F),j=_.getX(F+1),D=_.getX(F+2);u=Nf(this,E,t,s,v,y,b,V,j,D),u&&(u.faceIndex=Math.floor(F/3),u.face.materialIndex=A.materialIndex,i.push(u))}}else{const w=Math.max(0,C.start),N=Math.min(_.count,C.start+C.count);for(let A=w,E=N;A<E;A+=3){const P=_.getX(A),B=_.getX(A+1),F=_.getX(A+2);u=Nf(this,p,t,s,v,y,b,P,B,F),u&&(u.faceIndex=Math.floor(A/3),i.push(u))}}else if(x!==void 0)if(Array.isArray(p))for(let w=0,N=S.length;w<N;w++){const A=S[w],E=p[A.materialIndex],P=Math.max(A.start,C.start),B=Math.min(x.count,Math.min(A.start+A.count,C.start+C.count));for(let F=P,X=B;F<X;F+=3){const V=F,j=F+1,D=F+2;u=Nf(this,E,t,s,v,y,b,V,j,D),u&&(u.faceIndex=Math.floor(F/3),u.face.materialIndex=A.materialIndex,i.push(u))}}else{const w=Math.max(0,C.start),N=Math.min(x.count,C.start+C.count);for(let A=w,E=N;A<E;A+=3){const P=A,B=A+1,F=A+2;u=Nf(this,p,t,s,v,y,b,P,B,F),u&&(u.faceIndex=Math.floor(A/3),i.push(u))}}}}function AE(o,t,i,s,u,f,p,_){let x;if(t.side===zi?x=s.intersectTriangle(p,f,u,!0,_):x=s.intersectTriangle(u,f,p,t.side===Ss,_),x===null)return null;Uf.copy(_),Uf.applyMatrix4(o.matrixWorld);const v=i.ray.origin.distanceTo(Uf);return v<i.near||v>i.far?null:{distance:v,point:Uf.clone(),object:o}}function Nf(o,t,i,s,u,f,p,_,x,v){o.getVertexPosition(_,Rf),o.getVertexPosition(x,Lf),o.getVertexPosition(v,Df);const y=AE(o,t,i,s,Rf,Lf,Df,ux);if(y){const b=new dt;Ca.getBarycoord(ux,Rf,Lf,Df,b),u&&(y.uv=Ca.getInterpolatedAttribute(u,_,x,v,b,new Je)),f&&(y.uv1=Ca.getInterpolatedAttribute(f,_,x,v,b,new Je)),p&&(y.normal=Ca.getInterpolatedAttribute(p,_,x,v,b,new dt),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const S={a:_,b:x,c:v,normal:new dt,materialIndex:0};Ca.getNormal(Rf,Lf,Df,S.normal),y.face=S,y.barycoord=b}return y}class wE extends yi{constructor(t=null,i=1,s=1,u,f,p,_,x,v=oi,y=oi,b,S){super(null,p,_,x,v,y,u,f,b,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ip=new dt,CE=new dt,RE=new Ue;class oo{constructor(t=new dt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,u){return this.normal.set(t,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const u=Ip.subVectors(s,i).cross(CE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ip),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(t.start).addScaledVector(s,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||RE.getNormalMatrix(t),u=this.coplanarPoint(Ip).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ao=new lh,LE=new Je(.5,.5),Of=new dt;class g_{constructor(t=new oo,i=new oo,s=new oo,u=new oo,f=new oo,p=new oo){this.planes=[t,i,s,u,f,p]}set(t,i,s,u,f,p){const _=this.planes;return _[0].copy(t),_[1].copy(i),_[2].copy(s),_[3].copy(u),_[4].copy(f),_[5].copy(p),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ka,s=!1){const u=this.planes,f=t.elements,p=f[0],_=f[1],x=f[2],v=f[3],y=f[4],b=f[5],S=f[6],C=f[7],w=f[8],N=f[9],A=f[10],E=f[11],P=f[12],B=f[13],F=f[14],X=f[15];if(u[0].setComponents(v-p,C-y,E-w,X-P).normalize(),u[1].setComponents(v+p,C+y,E+w,X+P).normalize(),u[2].setComponents(v+_,C+b,E+N,X+B).normalize(),u[3].setComponents(v-_,C-b,E-N,X-B).normalize(),s)u[4].setComponents(x,S,A,F).normalize(),u[5].setComponents(v-x,C-S,E-A,X-F).normalize();else if(u[4].setComponents(v-x,C-S,E-A,X-F).normalize(),i===Ka)u[5].setComponents(v+x,C+S,E+A,X+F).normalize();else if(i===kc)u[5].setComponents(x,S,A,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ao.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ao)}intersectsSprite(t){ao.center.set(0,0,0);const i=LE.distanceTo(t.center);return ao.radius=.7071067811865476+i,ao.applyMatrix4(t.matrixWorld),this.intersectsSphere(ao)}intersectsSphere(t){const i=this.planes,s=t.center,u=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(Of.x=u.normal.x>0?t.max.x:t.min.x,Of.y=u.normal.y>0?t.max.y:t.min.y,Of.z=u.normal.z>0?t.max.z:t.min.z,u.distanceToPoint(Of)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qy extends Dl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fx=new Cn,Gm=new jy,zf=new lh,If=new dt;class DE extends Si{constructor(t=new ma,i=new qy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,u=this.matrixWorld,f=t.params.Points.threshold,p=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zf.copy(s.boundingSphere),zf.applyMatrix4(u),zf.radius+=f,t.ray.intersectsSphere(zf)===!1)return;fx.copy(u).invert(),Gm.copy(t.ray).applyMatrix4(fx);const _=f/((this.scale.x+this.scale.y+this.scale.z)/3),x=_*_,v=s.index,b=s.attributes.position;if(v!==null){const S=Math.max(0,p.start),C=Math.min(v.count,p.start+p.count);for(let w=S,N=C;w<N;w++){const A=v.getX(w);If.fromBufferAttribute(b,A),hx(If,A,x,u,t,i,this)}}else{const S=Math.max(0,p.start),C=Math.min(b.count,p.start+p.count);for(let w=S,N=C;w<N;w++)If.fromBufferAttribute(b,w),hx(If,w,x,u,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,p=u.length;f<p;f++){const _=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[_]=f}}}}}function hx(o,t,i,s,u,f,p){const _=Gm.distanceSqToPoint(o);if(_<i){const x=new dt;Gm.closestPointToPoint(o,x),x.applyMatrix4(s);const v=u.ray.origin.distanceTo(x);if(v<u.near||v>u.far)return;f.push({distance:v,distanceToRay:Math.sqrt(_),point:x,index:t,face:null,faceIndex:null,barycoord:null,object:p})}}class Zy extends yi{constructor(t=[],i=_o,s,u,f,p,_,x,v,y){super(t,i,s,u,f,p,_,x,v,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gc extends yi{constructor(t,i,s=$a,u,f,p,_=oi,x=oi,v,y=Ur,b=1){if(y!==Ur&&y!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:b};super(S,u,f,p,_,x,y,s,v),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new m_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class PE extends Gc{constructor(t,i=$a,s=_o,u,f,p=oi,_=oi,x,v=Ur){const y={width:t,height:t,depth:1},b=[y,y,y,y,y,y];super(t,t,i,s,u,f,p,_,x,v),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yy extends yi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kc extends ma{constructor(t=1,i=1,s=1,u=1,f=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:p};const _=this;u=Math.floor(u),f=Math.floor(f),p=Math.floor(p);const x=[],v=[],y=[],b=[];let S=0,C=0;w("z","y","x",-1,-1,s,i,t,p,f,0),w("z","y","x",1,-1,s,i,-t,p,f,1),w("x","z","y",1,1,t,s,i,u,p,2),w("x","z","y",1,-1,t,s,-i,u,p,3),w("x","y","z",1,-1,t,i,s,u,f,4),w("x","y","z",-1,-1,t,i,-s,u,f,5),this.setIndex(x),this.setAttribute("position",new pa(v,3)),this.setAttribute("normal",new pa(y,3)),this.setAttribute("uv",new pa(b,2));function w(N,A,E,P,B,F,X,V,j,D,H){const vt=F/j,Z=X/D,rt=F/2,ft=X/2,mt=V/2,lt=j+1,G=D+1;let q=0,it=0;const At=new dt;for(let xt=0;xt<G;xt++){const I=xt*Z-ft;for(let K=0;K<lt;K++){const bt=K*vt-rt;At[N]=bt*P,At[A]=I*B,At[E]=mt,v.push(At.x,At.y,At.z),At[N]=0,At[A]=0,At[E]=V>0?1:-1,y.push(At.x,At.y,At.z),b.push(K/j),b.push(1-xt/D),q+=1}}for(let xt=0;xt<D;xt++)for(let I=0;I<j;I++){const K=S+I+lt*xt,bt=S+I+lt*(xt+1),wt=S+(I+1)+lt*(xt+1),Ot=S+(I+1)+lt*xt;x.push(K,bt,Ot),x.push(bt,wt,Ot),it+=6}_.addGroup(C,it,H),C+=it,S+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jc extends ma{constructor(t=[],i=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:u};const f=[],p=[];_(u),v(s),y(),this.setAttribute("position",new pa(f,3)),this.setAttribute("normal",new pa(f.slice(),3)),this.setAttribute("uv",new pa(p,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function _(P){const B=new dt,F=new dt,X=new dt;for(let V=0;V<i.length;V+=3)C(i[V+0],B),C(i[V+1],F),C(i[V+2],X),x(B,F,X,P)}function x(P,B,F,X){const V=X+1,j=[];for(let D=0;D<=V;D++){j[D]=[];const H=P.clone().lerp(F,D/V),vt=B.clone().lerp(F,D/V),Z=V-D;for(let rt=0;rt<=Z;rt++)rt===0&&D===V?j[D][rt]=H:j[D][rt]=H.clone().lerp(vt,rt/Z)}for(let D=0;D<V;D++)for(let H=0;H<2*(V-D)-1;H++){const vt=Math.floor(H/2);H%2===0?(S(j[D][vt+1]),S(j[D+1][vt]),S(j[D][vt])):(S(j[D][vt+1]),S(j[D+1][vt+1]),S(j[D+1][vt]))}}function v(P){const B=new dt;for(let F=0;F<f.length;F+=3)B.x=f[F+0],B.y=f[F+1],B.z=f[F+2],B.normalize().multiplyScalar(P),f[F+0]=B.x,f[F+1]=B.y,f[F+2]=B.z}function y(){const P=new dt;for(let B=0;B<f.length;B+=3){P.x=f[B+0],P.y=f[B+1],P.z=f[B+2];const F=A(P)/2/Math.PI+.5,X=E(P)/Math.PI+.5;p.push(F,1-X)}w(),b()}function b(){for(let P=0;P<p.length;P+=6){const B=p[P+0],F=p[P+2],X=p[P+4],V=Math.max(B,F,X),j=Math.min(B,F,X);V>.9&&j<.1&&(B<.2&&(p[P+0]+=1),F<.2&&(p[P+2]+=1),X<.2&&(p[P+4]+=1))}}function S(P){f.push(P.x,P.y,P.z)}function C(P,B){const F=P*3;B.x=t[F+0],B.y=t[F+1],B.z=t[F+2]}function w(){const P=new dt,B=new dt,F=new dt,X=new dt,V=new Je,j=new Je,D=new Je;for(let H=0,vt=0;H<f.length;H+=9,vt+=6){P.set(f[H+0],f[H+1],f[H+2]),B.set(f[H+3],f[H+4],f[H+5]),F.set(f[H+6],f[H+7],f[H+8]),V.set(p[vt+0],p[vt+1]),j.set(p[vt+2],p[vt+3]),D.set(p[vt+4],p[vt+5]),X.copy(P).add(B).add(F).divideScalar(3);const Z=A(X);N(V,vt+0,P,Z),N(j,vt+2,B,Z),N(D,vt+4,F,Z)}}function N(P,B,F,X){X<0&&P.x===1&&(p[B]=P.x-1),F.x===0&&F.z===0&&(p[B]=X/2/Math.PI+.5)}function A(P){return Math.atan2(P.z,-P.x)}function E(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.vertices,t.indices,t.radius,t.detail)}}class v_ extends Jc{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,u=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(u,f,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new v_(t.radius,t.detail)}}class x_ extends Jc{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,u,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new x_(t.radius,t.detail)}}class ch extends ma{constructor(t=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:u};const f=t/2,p=i/2,_=Math.floor(s),x=Math.floor(u),v=_+1,y=x+1,b=t/_,S=i/x,C=[],w=[],N=[],A=[];for(let E=0;E<y;E++){const P=E*S-p;for(let B=0;B<v;B++){const F=B*b-f;w.push(F,-P,0),N.push(0,0,1),A.push(B/_),A.push(1-E/x)}}for(let E=0;E<x;E++)for(let P=0;P<_;P++){const B=P+v*E,F=P+v*(E+1),X=P+1+v*(E+1),V=P+1+v*E;C.push(B,F,V),C.push(F,X,V)}this.setIndex(C),this.setAttribute("position",new pa(w,3)),this.setAttribute("normal",new pa(N,3)),this.setAttribute("uv",new pa(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ch(t.width,t.height,t.widthSegments,t.heightSegments)}}class y_ extends Jc{constructor(t=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],u=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,u,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new y_(t.radius,t.detail)}}function Al(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const u=o[i][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=u.clone():Array.isArray(u)?t[i][s]=u.slice():t[i][s]=u}}return t}function xi(o){const t={};for(let i=0;i<o.length;i++){const s=Al(o[i]);for(const u in s)t[u]=s[u]}return t}function UE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ky(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}const NE={clone:Al,merge:xi};var OE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Dl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Al(t.uniforms),this.uniformsGroups=UE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const p=this.uniforms[u].value;p&&p.isTexture?i.uniforms[u]={type:"t",value:p.toJSON(t).uuid}:p&&p.isColor?i.uniforms[u]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[u]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[u]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[u]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[u]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[u]={type:"m4",value:p.toArray()}:i.uniforms[u]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class IE extends nr{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bp extends Dl{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=By,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=s_,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class BE extends Dl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FE extends Dl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jy extends Si{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Fp=new Cn,dx=new dt,px=new dt;class HE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new Cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new g_,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;dx.setFromMatrixPosition(t.matrixWorld),i.position.copy(dx),px.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(px),i.updateMatrixWorld(),Fp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fp,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===kc||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Fp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bf=new dt,Ff=new Ll,Xa=new dt;class Qy extends Si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=Ka,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bf,Ff,Xa),Xa.x===1&&Xa.y===1&&Xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bf,Ff,Xa.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Bf,Ff,Xa),Xa.x===1&&Xa.y===1&&Xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bf,Ff,Xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new dt,mx=new Je,_x=new Je;class Ji extends Qy{constructor(t=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=km*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return km*2*Math.atan(Math.tan(pp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,i){return this.getViewBounds(t,mx,_x),i.subVectors(_x,mx)}setViewOffset(t,i,s,u,f,p){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(pp*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const p=this.view;if(this.view!==null&&this.view.enabled){const x=p.fullWidth,v=p.fullHeight;f+=p.offsetX*u/x,i-=p.offsetY*s/v,u*=p.width/x,s*=p.height/v}const _=this.filmOffset;_!==0&&(f+=t*_/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kE extends HE{constructor(){super(new Ji(90,1,.5,500)),this.isPointLightShadow=!0}}class gx extends Jy{constructor(t,i,s=0,u=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=u,this.shadow=new kE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class $y extends Qy{constructor(t=-1,i=1,s=1,u=-1,f=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=p,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,u,f,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-t,p=s+t,_=u+i,x=u-i;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,p=f+v*this.view.width,_-=y*this.view.offsetY,x=_-y*this.view.height}this.projectionMatrix.makeOrthographic(f,p,_,x,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class GE extends Jy{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ml=-90,_l=1;class VE extends Si{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ji(ml,_l,t,i);u.layers=this.layers,this.add(u);const f=new Ji(ml,_l,t,i);f.layers=this.layers,this.add(f);const p=new Ji(ml,_l,t,i);p.layers=this.layers,this.add(p);const _=new Ji(ml,_l,t,i);_.layers=this.layers,this.add(_);const x=new Ji(ml,_l,t,i);x.layers=this.layers,this.add(x);const v=new Ji(ml,_l,t,i);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,u,f,p,_,x]=i;for(const v of i)this.remove(v);if(t===Ka)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),_.up.set(0,1,0),_.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(t===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),_.up.set(0,-1,0),_.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const v of i)this.add(v),v.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,p,_,x,v,y]=this.children,b=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let A=!1;t.isWebGLRenderer===!0?A=t.state.buffers.depth.getReversed():A=t.reversedDepthBuffer,t.setRenderTarget(s,0,u),A&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,u),A&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,2,u),A&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(s,3,u),A&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(s,4,u),A&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,u),A&&t.autoClear===!1&&t.clearDepth(),t.render(i,y),t.setRenderTarget(b,S,C),t.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class WE extends Ji{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function vx(o,t,i,s){const u=jE(s);switch(i){case Oy:return o*t;case Iy:return o*t/u.components*u.byteLength;case u_:return o*t/u.components*u.byteLength;case El:return o*t*2/u.components*u.byteLength;case f_:return o*t*2/u.components*u.byteLength;case zy:return o*t*3/u.components*u.byteLength;case Ra:return o*t*4/u.components*u.byteLength;case h_:return o*t*4/u.components*u.byteLength;case qf:case Zf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Yf:case Kf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case um:case hm:return Math.max(o,16)*Math.max(t,8)/4;case cm:case fm:return Math.max(o,8)*Math.max(t,8)/2;case dm:case pm:case _m:case gm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mm:case vm:case xm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ym:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case bm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Mm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Em:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Tm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Am:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case wm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Cm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Rm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Lm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Dm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Pm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Um:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Nm:case Om:case zm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Im:case Bm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Fm:case Hm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jE(o){switch(o){case Qi:case Dy:return{byteLength:1,components:1};case Fc:case Py:case Pr:return{byteLength:2,components:1};case l_:case c_:return{byteLength:2,components:4};case $a:case o_:case Ya:return{byteLength:4,components:1};case Uy:case Ny:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:r_}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=r_);function tS(){let o=null,t=!1,i=null,s=null;function u(f,p){i(f,p),s=o.requestAnimationFrame(u)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(u),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function XE(o){const t=new WeakMap;function i(_,x){const v=_.array,y=_.usage,b=v.byteLength,S=o.createBuffer();o.bindBuffer(x,S),o.bufferData(x,v,y),_.onUploadCallback();let C;if(v instanceof Float32Array)C=o.FLOAT;else if(typeof Float16Array<"u"&&v instanceof Float16Array)C=o.HALF_FLOAT;else if(v instanceof Uint16Array)_.isFloat16BufferAttribute?C=o.HALF_FLOAT:C=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)C=o.SHORT;else if(v instanceof Uint32Array)C=o.UNSIGNED_INT;else if(v instanceof Int32Array)C=o.INT;else if(v instanceof Int8Array)C=o.BYTE;else if(v instanceof Uint8Array)C=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)C=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:S,type:C,bytesPerElement:v.BYTES_PER_ELEMENT,version:_.version,size:b}}function s(_,x,v){const y=x.array,b=x.updateRanges;if(o.bindBuffer(v,_),b.length===0)o.bufferSubData(v,0,y);else{b.sort((C,w)=>C.start-w.start);let S=0;for(let C=1;C<b.length;C++){const w=b[S],N=b[C];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++S,b[S]=N)}b.length=S+1;for(let C=0,w=b.length;C<w;C++){const N=b[C];o.bufferSubData(v,N.start*y.BYTES_PER_ELEMENT,y,N.start,N.count)}x.clearUpdateRanges()}x.onUploadCallback()}function u(_){return _.isInterleavedBufferAttribute&&(_=_.data),t.get(_)}function f(_){_.isInterleavedBufferAttribute&&(_=_.data);const x=t.get(_);x&&(o.deleteBuffer(x.buffer),t.delete(_))}function p(_,x){if(_.isInterleavedBufferAttribute&&(_=_.data),_.isGLBufferAttribute){const y=t.get(_);(!y||y.version<_.version)&&t.set(_,{buffer:_.buffer,type:_.type,bytesPerElement:_.elementSize,version:_.version});return}const v=t.get(_);if(v===void 0)t.set(_,i(_,x));else if(v.version<_.version){if(v.size!==_.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,_,x),v.version=_.version}}return{get:u,remove:f,update:p}}var qE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_T=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ET=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ew=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ew=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:qE,alphahash_pars_fragment:ZE,alphamap_fragment:YE,alphamap_pars_fragment:KE,alphatest_fragment:JE,alphatest_pars_fragment:QE,aomap_fragment:$E,aomap_pars_fragment:tT,batching_pars_vertex:eT,batching_vertex:nT,begin_vertex:iT,beginnormal_vertex:aT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:oT,clipping_planes_fragment:lT,clipping_planes_pars_fragment:cT,clipping_planes_pars_vertex:uT,clipping_planes_vertex:fT,color_fragment:hT,color_pars_fragment:dT,color_pars_vertex:pT,color_vertex:mT,common:_T,cube_uv_reflection_fragment:gT,defaultnormal_vertex:vT,displacementmap_pars_vertex:xT,displacementmap_vertex:yT,emissivemap_fragment:ST,emissivemap_pars_fragment:bT,colorspace_fragment:MT,colorspace_pars_fragment:ET,envmap_fragment:TT,envmap_common_pars_fragment:AT,envmap_pars_fragment:wT,envmap_pars_vertex:CT,envmap_physical_pars_fragment:FT,envmap_vertex:RT,fog_vertex:LT,fog_pars_vertex:DT,fog_fragment:PT,fog_pars_fragment:UT,gradientmap_pars_fragment:NT,lightmap_pars_fragment:OT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:IT,lights_pars_begin:BT,lights_toon_fragment:HT,lights_toon_pars_fragment:kT,lights_phong_fragment:GT,lights_phong_pars_fragment:VT,lights_physical_fragment:WT,lights_physical_pars_fragment:jT,lights_fragment_begin:XT,lights_fragment_maps:qT,lights_fragment_end:ZT,logdepthbuf_fragment:YT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:JT,logdepthbuf_vertex:QT,map_fragment:$T,map_pars_fragment:tA,map_particle_fragment:eA,map_particle_pars_fragment:nA,metalnessmap_fragment:iA,metalnessmap_pars_fragment:aA,morphinstance_vertex:rA,morphcolor_vertex:sA,morphnormal_vertex:oA,morphtarget_pars_vertex:lA,morphtarget_vertex:cA,normal_fragment_begin:uA,normal_fragment_maps:fA,normal_pars_fragment:hA,normal_pars_vertex:dA,normal_vertex:pA,normalmap_pars_fragment:mA,clearcoat_normal_fragment_begin:_A,clearcoat_normal_fragment_maps:gA,clearcoat_pars_fragment:vA,iridescence_pars_fragment:xA,opaque_fragment:yA,packing:SA,premultiplied_alpha_fragment:bA,project_vertex:MA,dithering_fragment:EA,dithering_pars_fragment:TA,roughnessmap_fragment:AA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:CA,shadowmap_pars_vertex:RA,shadowmap_vertex:LA,shadowmask_pars_fragment:DA,skinbase_vertex:PA,skinning_pars_vertex:UA,skinning_vertex:NA,skinnormal_vertex:OA,specularmap_fragment:zA,specularmap_pars_fragment:IA,tonemapping_fragment:BA,tonemapping_pars_fragment:FA,transmission_fragment:HA,transmission_pars_fragment:kA,uv_pars_fragment:GA,uv_pars_vertex:VA,uv_vertex:WA,worldpos_vertex:jA,background_vert:XA,background_frag:qA,backgroundCube_vert:ZA,backgroundCube_frag:YA,cube_vert:KA,cube_frag:JA,depth_vert:QA,depth_frag:$A,distance_vert:tw,distance_frag:ew,equirect_vert:nw,equirect_frag:iw,linedashed_vert:aw,linedashed_frag:rw,meshbasic_vert:sw,meshbasic_frag:ow,meshlambert_vert:lw,meshlambert_frag:cw,meshmatcap_vert:uw,meshmatcap_frag:fw,meshnormal_vert:hw,meshnormal_frag:dw,meshphong_vert:pw,meshphong_frag:mw,meshphysical_vert:_w,meshphysical_frag:gw,meshtoon_vert:vw,meshtoon_frag:xw,points_vert:yw,points_frag:Sw,shadow_vert:bw,shadow_frag:Mw,sprite_vert:Ew,sprite_frag:Tw},Yt={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Za={basic:{uniforms:xi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:xi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:xi([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:xi([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:xi([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:xi([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:xi([Yt.points,Yt.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:xi([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:xi([Yt.common,Yt.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:xi([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:xi([Yt.sprite,Yt.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:xi([Yt.common,Yt.displacementmap,{referencePosition:{value:new dt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:xi([Yt.lights,Yt.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Za.physical={uniforms:xi([Za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Hf={r:0,b:0,g:0},ro=new tr,Aw=new Cn;function ww(o,t,i,s,u,f){const p=new Ke(0);let _=u===!0?0:1,x,v,y=null,b=0,S=null;function C(P){let B=P.isScene===!0?P.background:null;if(B&&B.isTexture){const F=P.backgroundBlurriness>0;B=t.get(B,F)}return B}function w(P){let B=!1;const F=C(P);F===null?A(p,_):F&&F.isColor&&(A(F,1),B=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,f):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(P,B){const F=C(B);F&&(F.isCubeTexture||F.mapping===oh)?(v===void 0&&(v=new er(new Kc(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Al(Za.backgroundCube.uniforms),vertexShader:Za.backgroundCube.vertexShader,fragmentShader:Za.backgroundCube.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(X,V,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(v)),ro.copy(B.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(ro)),v.material.toneMapped=Qe.getTransfer(F.colorSpace)!==fn,(y!==F||b!==F.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,y=F,b=F.version,S=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(x===void 0&&(x=new er(new ch(2,2),new nr({name:"BackgroundMaterial",uniforms:Al(Za.background.uniforms),vertexShader:Za.background.vertexShader,fragmentShader:Za.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(x)),x.material.uniforms.t2D.value=F,x.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,x.material.toneMapped=Qe.getTransfer(F.colorSpace)!==fn,F.matrixAutoUpdate===!0&&F.updateMatrix(),x.material.uniforms.uvTransform.value.copy(F.matrix),(y!==F||b!==F.version||S!==o.toneMapping)&&(x.material.needsUpdate=!0,y=F,b=F.version,S=o.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null))}function A(P,B){P.getRGB(Hf,Ky(o)),i.buffers.color.setClear(Hf.r,Hf.g,Hf.b,B,f)}function E(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return p},setClearColor:function(P,B=1){p.set(P),_=B,A(p,_)},getClearAlpha:function(){return _},setClearAlpha:function(P){_=P,A(p,_)},render:w,addToRenderList:N,dispose:E}}function Cw(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,p=!1;function _(Z,rt,ft,mt,lt){let G=!1;const q=b(Z,mt,ft,rt);f!==q&&(f=q,v(f.object)),G=C(Z,mt,ft,lt),G&&w(Z,mt,ft,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(G||p)&&(p=!1,F(Z,rt,ft,mt),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function x(){return o.createVertexArray()}function v(Z){return o.bindVertexArray(Z)}function y(Z){return o.deleteVertexArray(Z)}function b(Z,rt,ft,mt){const lt=mt.wireframe===!0;let G=s[rt.id];G===void 0&&(G={},s[rt.id]=G);const q=Z.isInstancedMesh===!0?Z.id:0;let it=G[q];it===void 0&&(it={},G[q]=it);let At=it[ft.id];At===void 0&&(At={},it[ft.id]=At);let xt=At[lt];return xt===void 0&&(xt=S(x()),At[lt]=xt),xt}function S(Z){const rt=[],ft=[],mt=[];for(let lt=0;lt<i;lt++)rt[lt]=0,ft[lt]=0,mt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:ft,attributeDivisors:mt,object:Z,attributes:{},index:null}}function C(Z,rt,ft,mt){const lt=f.attributes,G=rt.attributes;let q=0;const it=ft.getAttributes();for(const At in it)if(it[At].location>=0){const I=lt[At];let K=G[At];if(K===void 0&&(At==="instanceMatrix"&&Z.instanceMatrix&&(K=Z.instanceMatrix),At==="instanceColor"&&Z.instanceColor&&(K=Z.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;q++}return f.attributesNum!==q||f.index!==mt}function w(Z,rt,ft,mt){const lt={},G=rt.attributes;let q=0;const it=ft.getAttributes();for(const At in it)if(it[At].location>=0){let I=G[At];I===void 0&&(At==="instanceMatrix"&&Z.instanceMatrix&&(I=Z.instanceMatrix),At==="instanceColor"&&Z.instanceColor&&(I=Z.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),lt[At]=K,q++}f.attributes=lt,f.attributesNum=q,f.index=mt}function N(){const Z=f.newAttributes;for(let rt=0,ft=Z.length;rt<ft;rt++)Z[rt]=0}function A(Z){E(Z,0)}function E(Z,rt){const ft=f.newAttributes,mt=f.enabledAttributes,lt=f.attributeDivisors;ft[Z]=1,mt[Z]===0&&(o.enableVertexAttribArray(Z),mt[Z]=1),lt[Z]!==rt&&(o.vertexAttribDivisor(Z,rt),lt[Z]=rt)}function P(){const Z=f.newAttributes,rt=f.enabledAttributes;for(let ft=0,mt=rt.length;ft<mt;ft++)rt[ft]!==Z[ft]&&(o.disableVertexAttribArray(ft),rt[ft]=0)}function B(Z,rt,ft,mt,lt,G,q){q===!0?o.vertexAttribIPointer(Z,rt,ft,lt,G):o.vertexAttribPointer(Z,rt,ft,mt,lt,G)}function F(Z,rt,ft,mt){N();const lt=mt.attributes,G=ft.getAttributes(),q=rt.defaultAttributeValues;for(const it in G){const At=G[it];if(At.location>=0){let xt=lt[it];if(xt===void 0&&(it==="instanceMatrix"&&Z.instanceMatrix&&(xt=Z.instanceMatrix),it==="instanceColor"&&Z.instanceColor&&(xt=Z.instanceColor)),xt!==void 0){const I=xt.normalized,K=xt.itemSize,bt=t.get(xt);if(bt===void 0)continue;const wt=bt.buffer,Ot=bt.type,nt=bt.bytesPerElement,Lt=Ot===o.INT||Ot===o.UNSIGNED_INT||xt.gpuType===o_;if(xt.isInterleavedBufferAttribute){const zt=xt.data,ae=zt.stride,de=xt.offset;if(zt.isInstancedInterleavedBuffer){for(let ve=0;ve<At.locationSize;ve++)E(At.location+ve,zt.meshPerAttribute);Z.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let ve=0;ve<At.locationSize;ve++)A(At.location+ve);o.bindBuffer(o.ARRAY_BUFFER,wt);for(let ve=0;ve<At.locationSize;ve++)B(At.location+ve,K/At.locationSize,Ot,I,ae*nt,(de+K/At.locationSize*ve)*nt,Lt)}else{if(xt.isInstancedBufferAttribute){for(let zt=0;zt<At.locationSize;zt++)E(At.location+zt,xt.meshPerAttribute);Z.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let zt=0;zt<At.locationSize;zt++)A(At.location+zt);o.bindBuffer(o.ARRAY_BUFFER,wt);for(let zt=0;zt<At.locationSize;zt++)B(At.location+zt,K/At.locationSize,Ot,I,K*nt,K/At.locationSize*zt*nt,Lt)}}else if(q!==void 0){const I=q[it];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(At.location,I);break;case 3:o.vertexAttrib3fv(At.location,I);break;case 4:o.vertexAttrib4fv(At.location,I);break;default:o.vertexAttrib1fv(At.location,I)}}}}P()}function X(){H();for(const Z in s){const rt=s[Z];for(const ft in rt){const mt=rt[ft];for(const lt in mt){const G=mt[lt];for(const q in G)y(G[q].object),delete G[q];delete mt[lt]}}delete s[Z]}}function V(Z){if(s[Z.id]===void 0)return;const rt=s[Z.id];for(const ft in rt){const mt=rt[ft];for(const lt in mt){const G=mt[lt];for(const q in G)y(G[q].object),delete G[q];delete mt[lt]}}delete s[Z.id]}function j(Z){for(const rt in s){const ft=s[rt];for(const mt in ft){const lt=ft[mt];if(lt[Z.id]===void 0)continue;const G=lt[Z.id];for(const q in G)y(G[q].object),delete G[q];delete lt[Z.id]}}}function D(Z){for(const rt in s){const ft=s[rt],mt=Z.isInstancedMesh===!0?Z.id:0,lt=ft[mt];if(lt!==void 0){for(const G in lt){const q=lt[G];for(const it in q)y(q[it].object),delete q[it];delete lt[G]}delete ft[mt],Object.keys(ft).length===0&&delete s[rt]}}}function H(){vt(),p=!0,f!==u&&(f=u,v(f.object))}function vt(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:_,reset:H,resetDefaultState:vt,dispose:X,releaseStatesOfGeometry:V,releaseStatesOfObject:D,releaseStatesOfProgram:j,initAttributes:N,enableAttribute:A,disableUnusedAttributes:P}}function Rw(o,t,i){let s;function u(v){s=v}function f(v,y){o.drawArrays(s,v,y),i.update(y,s,1)}function p(v,y,b){b!==0&&(o.drawArraysInstanced(s,v,y,b),i.update(y,s,b))}function _(v,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,v,0,y,0,b);let C=0;for(let w=0;w<b;w++)C+=y[w];i.update(C,s,1)}function x(v,y,b,S){if(b===0)return;const C=t.get("WEBGL_multi_draw");if(C===null)for(let w=0;w<v.length;w++)p(v[w],y[w],S[w]);else{C.multiDrawArraysInstancedWEBGL(s,v,0,y,0,S,0,b);let w=0;for(let N=0;N<b;N++)w+=y[N]*S[N];i.update(w,s,1)}}this.setMode=u,this.render=f,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function Lw(o,t,i,s){let u;function f(){if(u!==void 0)return u;if(t.has("EXT_texture_filter_anisotropic")===!0){const j=t.get("EXT_texture_filter_anisotropic");u=o.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function p(j){return!(j!==Ra&&s.convert(j)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function _(j){const D=j===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(j!==Qi&&s.convert(j)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==Ya&&!D)}function x(j){if(j==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=i.precision!==void 0?i.precision:"highp";const y=x(v);y!==v&&(Ae("WebGLRenderer:",v,"not supported, using",y,"instead."),v=y);const b=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),C=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=o.getParameter(o.MAX_SAMPLES),V=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:x,textureFormatReadable:p,textureTypeReadable:_,precision:v,logarithmicDepthBuffer:b,reversedDepthBuffer:S,maxTextures:C,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:A,maxAttributes:E,maxVertexUniforms:P,maxVaryings:B,maxFragmentUniforms:F,maxSamples:X,samples:V}}function Dw(o){const t=this;let i=null,s=0,u=!1,f=!1;const p=new oo,_=new Ue,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(b,S){const C=b.length!==0||S||s!==0||u;return u=S,s=b.length,C},this.beginShadows=function(){f=!0,y(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(b,S){i=y(b,S,0)},this.setState=function(b,S,C){const w=b.clippingPlanes,N=b.clipIntersection,A=b.clipShadows,E=o.get(b);if(!u||w===null||w.length===0||f&&!A)f?y(null):v();else{const P=f?0:s,B=P*4;let F=E.clippingState||null;x.value=F,F=y(w,S,B,C);for(let X=0;X!==B;++X)F[X]=i[X];E.clippingState=F,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=P}};function v(){x.value!==i&&(x.value=i,x.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function y(b,S,C,w){const N=b!==null?b.length:0;let A=null;if(N!==0){if(A=x.value,w!==!0||A===null){const E=C+N*4,P=S.matrixWorldInverse;_.getNormalMatrix(P),(A===null||A.length<E)&&(A=new Float32Array(E));for(let B=0,F=C;B!==N;++B,F+=4)p.copy(b[B]).applyMatrix4(P,_),p.normal.toArray(A,F),A[F+3]=p.constant}x.value=A,x.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,A}}const ys=4,xx=[.125,.215,.35,.446,.526,.582],co=20,Pw=256,Nc=new $y,yx=new Ke;let Hp=null,kp=0,Gp=0,Vp=!1;const Uw=new dt;class Sx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,u=100,f={}){const{size:p=256,position:_=Uw}=f;Hp=this._renderer.getRenderTarget(),kp=this._renderer.getActiveCubeFace(),Gp=this._renderer.getActiveMipmapLevel(),Vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);const x=this._allocateTargets();return x.depthBuffer=!0,this._sceneToCubeUV(t,s,u,x,_),i>0&&this._blur(x,0,0,i),this._applyPMREM(x),this._cleanup(x),x}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hp,kp,Gp),this._renderer.xr.enabled=Vp,t.scissorTest=!1,gl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_o||t.mapping===Ml?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hp=this._renderer.getRenderTarget(),kp=this._renderer.getActiveCubeFace(),Gp=this._renderer.getActiveMipmapLevel(),Vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Pr,format:Ra,colorSpace:Tl,depthBuffer:!1},u=bx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bx(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nw(f)),this._blurMaterial=zw(f,t,i),this._ggxMaterial=Ow(f,t,i)}return u}_compileMaterial(t){const i=new er(new ma,t);this._renderer.compile(i,Nc)}_sceneToCubeUV(t,i,s,u,f){const x=new Ji(90,1,i,s),v=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],b=this._renderer,S=b.autoClear,C=b.toneMapping;b.getClearColor(yx),b.toneMapping=Ja,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(u),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new er(new Kc,new Xy({name:"PMREM.Background",side:zi,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,A=N.material;let E=!1;const P=t.background;P?P.isColor&&(A.color.copy(P),t.background=null,E=!0):(A.color.copy(yx),E=!0);for(let B=0;B<6;B++){const F=B%3;F===0?(x.up.set(0,v[B],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x+y[B],f.y,f.z)):F===1?(x.up.set(0,0,v[B]),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y+y[B],f.z)):(x.up.set(0,v[B],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y,f.z+y[B]));const X=this._cubeSize;gl(u,F*X,B>2?X:0,X,X),b.setRenderTarget(u),E&&b.render(N,x),b.render(t,x)}b.toneMapping=C,b.autoClear=S,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,u=t.mapping===_o||t.mapping===Ml;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mx());const f=u?this._cubemapMaterial:this._equirectMaterial,p=this._lodMeshes[0];p.material=f;const _=f.uniforms;_.envMap.value=t;const x=this._cubeSize;gl(i,0,0,3*x,2*x),s.setRenderTarget(i),s.render(p,Nc)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const u=this._renderer,f=this._pingPongRenderTarget,p=this._ggxMaterial,_=this._lodMeshes[s];_.material=p;const x=p.uniforms,v=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),b=Math.sqrt(v*v-y*y),S=0+v*1.25,C=b*S,{_lodMax:w}=this,N=this._sizeLods[s],A=3*N*(s>w-ys?s-w+ys:0),E=4*(this._cubeSize-N);x.envMap.value=t.texture,x.roughness.value=C,x.mipInt.value=w-i,gl(f,A,E,3*N,2*N),u.setRenderTarget(f),u.render(_,Nc),x.envMap.value=f.texture,x.roughness.value=0,x.mipInt.value=w-s,gl(t,A,E,3*N,2*N),u.setRenderTarget(t),u.render(_,Nc)}_blur(t,i,s,u,f){const p=this._pingPongRenderTarget;this._halfBlur(t,p,i,s,u,"latitudinal",f),this._halfBlur(p,t,s,s,u,"longitudinal",f)}_halfBlur(t,i,s,u,f,p,_){const x=this._renderer,v=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const y=3,b=this._lodMeshes[u];b.material=v;const S=v.uniforms,C=this._sizeLods[s]-1,w=isFinite(f)?Math.PI/(2*C):2*Math.PI/(2*co-1),N=f/w,A=isFinite(f)?1+Math.floor(y*N):co;A>co&&Ae(`sigmaRadians, ${f}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${co}`);const E=[];let P=0;for(let j=0;j<co;++j){const D=j/N,H=Math.exp(-D*D/2);E.push(H),j===0?P+=H:j<A&&(P+=2*H)}for(let j=0;j<E.length;j++)E[j]=E[j]/P;S.envMap.value=t.texture,S.samples.value=A,S.weights.value=E,S.latitudinal.value=p==="latitudinal",_&&(S.poleAxis.value=_);const{_lodMax:B}=this;S.dTheta.value=w,S.mipInt.value=B-s;const F=this._sizeLods[u],X=3*F*(u>B-ys?u-B+ys:0),V=4*(this._cubeSize-F);gl(i,X,V,3*F,2*F),x.setRenderTarget(i),x.render(b,Nc)}}function Nw(o){const t=[],i=[],s=[];let u=o;const f=o-ys+1+xx.length;for(let p=0;p<f;p++){const _=Math.pow(2,u);t.push(_);let x=1/_;p>o-ys?x=xx[p-o+ys-1]:p===0&&(x=0),i.push(x);const v=1/(_-2),y=-v,b=1+v,S=[y,y,b,y,b,b,y,y,b,b,y,b],C=6,w=6,N=3,A=2,E=1,P=new Float32Array(N*w*C),B=new Float32Array(A*w*C),F=new Float32Array(E*w*C);for(let V=0;V<C;V++){const j=V%3*2/3-1,D=V>2?0:-1,H=[j,D,0,j+2/3,D,0,j+2/3,D+1,0,j,D,0,j+2/3,D+1,0,j,D+1,0];P.set(H,N*w*V),B.set(S,A*w*V);const vt=[V,V,V,V,V,V];F.set(vt,E*w*V)}const X=new ma;X.setAttribute("position",new da(P,N)),X.setAttribute("uv",new da(B,A)),X.setAttribute("faceIndex",new da(F,E)),s.push(new er(X,null)),u>ys&&u--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function bx(o,t,i){const s=new Qa(o,t,i);return s.texture.mapping=oh,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gl(o,t,i,s,u){o.viewport.set(t,i,s,u),o.scissor.set(t,i,s,u)}function Ow(o,t,i){return new nr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function zw(o,t,i){const s=new Float32Array(co),u=new dt(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Mx(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Ex(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class eS extends Qa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},u=[s,s,s,s,s,s];this.texture=new Zy(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new Kc(5,5,5),f=new nr({name:"CubemapFromEquirect",uniforms:Al(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zi,blending:Lr});f.uniforms.tEquirect.value=i;const p=new er(u,f),_=i.minFilter;return i.minFilter===fo&&(i.minFilter=pi),new VE(1,10,this).update(t,p),i.minFilter=_,p.geometry.dispose(),p.material.dispose(),this}clear(t,i=!0,s=!0,u=!0){const f=t.getRenderTarget();for(let p=0;p<6;p++)t.setRenderTarget(this,p),t.clear(i,s,u);t.setRenderTarget(f)}}function Iw(o){let t=new WeakMap,i=new WeakMap,s=null;function u(S,C=!1){return S==null?null:C?p(S):f(S)}function f(S){if(S&&S.isTexture){const C=S.mapping;if(C===fp||C===hp)if(t.has(S)){const w=t.get(S).texture;return _(w,S.mapping)}else{const w=S.image;if(w&&w.height>0){const N=new eS(w.height);return N.fromEquirectangularTexture(o,S),t.set(S,N),S.addEventListener("dispose",v),_(N.texture,S.mapping)}else return null}}return S}function p(S){if(S&&S.isTexture){const C=S.mapping,w=C===fp||C===hp,N=C===_o||C===Ml;if(w||N){let A=i.get(S);const E=A!==void 0?A.texture.pmremVersion:0;if(S.isRenderTargetTexture&&S.pmremVersion!==E)return s===null&&(s=new Sx(o)),A=w?s.fromEquirectangular(S,A):s.fromCubemap(S,A),A.texture.pmremVersion=S.pmremVersion,i.set(S,A),A.texture;if(A!==void 0)return A.texture;{const P=S.image;return w&&P&&P.height>0||N&&P&&x(P)?(s===null&&(s=new Sx(o)),A=w?s.fromEquirectangular(S):s.fromCubemap(S),A.texture.pmremVersion=S.pmremVersion,i.set(S,A),S.addEventListener("dispose",y),A.texture):null}}}return S}function _(S,C){return C===fp?S.mapping=_o:C===hp&&(S.mapping=Ml),S}function x(S){let C=0;const w=6;for(let N=0;N<w;N++)S[N]!==void 0&&C++;return C===w}function v(S){const C=S.target;C.removeEventListener("dispose",v);const w=t.get(C);w!==void 0&&(t.delete(C),w.dispose())}function y(S){const C=S.target;C.removeEventListener("dispose",y);const w=i.get(C);w!==void 0&&(i.delete(C),w.dispose())}function b(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:b}}function Bw(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const u=o.getExtension(s);return t[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&eh("WebGLRenderer: "+s+" extension not supported."),u}}}function Fw(o,t,i,s){const u={},f=new WeakMap;function p(b){const S=b.target;S.index!==null&&t.remove(S.index);for(const w in S.attributes)t.remove(S.attributes[w]);S.removeEventListener("dispose",p),delete u[S.id];const C=f.get(S);C&&(t.remove(C),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function _(b,S){return u[S.id]===!0||(S.addEventListener("dispose",p),u[S.id]=!0,i.memory.geometries++),S}function x(b){const S=b.attributes;for(const C in S)t.update(S[C],o.ARRAY_BUFFER)}function v(b){const S=[],C=b.index,w=b.attributes.position;let N=0;if(w===void 0)return;if(C!==null){const P=C.array;N=C.version;for(let B=0,F=P.length;B<F;B+=3){const X=P[B+0],V=P[B+1],j=P[B+2];S.push(X,V,V,j,j,X)}}else{const P=w.array;N=w.version;for(let B=0,F=P.length/3-1;B<F;B+=3){const X=B+0,V=B+1,j=B+2;S.push(X,V,V,j,j,X)}}const A=new(w.count>=65535?Wy:Vy)(S,1);A.version=N;const E=f.get(b);E&&t.remove(E),f.set(b,A)}function y(b){const S=f.get(b);if(S){const C=b.index;C!==null&&S.version<C.version&&v(b)}else v(b);return f.get(b)}return{get:_,update:x,getWireframeAttribute:y}}function Hw(o,t,i){let s;function u(S){s=S}let f,p;function _(S){f=S.type,p=S.bytesPerElement}function x(S,C){o.drawElements(s,C,f,S*p),i.update(C,s,1)}function v(S,C,w){w!==0&&(o.drawElementsInstanced(s,C,f,S*p,w),i.update(C,s,w))}function y(S,C,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,C,0,f,S,0,w);let A=0;for(let E=0;E<w;E++)A+=C[E];i.update(A,s,1)}function b(S,C,w,N){if(w===0)return;const A=t.get("WEBGL_multi_draw");if(A===null)for(let E=0;E<S.length;E++)v(S[E]/p,C[E],N[E]);else{A.multiDrawElementsInstancedWEBGL(s,C,0,f,S,0,N,0,w);let E=0;for(let P=0;P<w;P++)E+=C[P]*N[P];i.update(E,s,1)}}this.setMode=u,this.setIndex=_,this.render=x,this.renderInstances=v,this.renderMultiDraw=y,this.renderMultiDrawInstances=b}function kw(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,p,_){switch(i.calls++,p){case o.TRIANGLES:i.triangles+=_*(f/3);break;case o.LINES:i.lines+=_*(f/2);break;case o.LINE_STRIP:i.lines+=_*(f-1);break;case o.LINE_LOOP:i.lines+=_*f;break;case o.POINTS:i.points+=_*f;break;default:an("WebGLInfo: Unknown draw mode:",p);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:u,update:s}}function Gw(o,t,i){const s=new WeakMap,u=new Un;function f(p,_,x){const v=p.morphTargetInfluences,y=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,b=y!==void 0?y.length:0;let S=s.get(_);if(S===void 0||S.count!==b){let vt=function(){D.dispose(),s.delete(_),_.removeEventListener("dispose",vt)};var C=vt;S!==void 0&&S.texture.dispose();const w=_.morphAttributes.position!==void 0,N=_.morphAttributes.normal!==void 0,A=_.morphAttributes.color!==void 0,E=_.morphAttributes.position||[],P=_.morphAttributes.normal||[],B=_.morphAttributes.color||[];let F=0;w===!0&&(F=1),N===!0&&(F=2),A===!0&&(F=3);let X=_.attributes.position.count*F,V=1;X>t.maxTextureSize&&(V=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const j=new Float32Array(X*V*4*b),D=new Hy(j,X,V,b);D.type=Ya,D.needsUpdate=!0;const H=F*4;for(let Z=0;Z<b;Z++){const rt=E[Z],ft=P[Z],mt=B[Z],lt=X*V*4*Z;for(let G=0;G<rt.count;G++){const q=G*H;w===!0&&(u.fromBufferAttribute(rt,G),j[lt+q+0]=u.x,j[lt+q+1]=u.y,j[lt+q+2]=u.z,j[lt+q+3]=0),N===!0&&(u.fromBufferAttribute(ft,G),j[lt+q+4]=u.x,j[lt+q+5]=u.y,j[lt+q+6]=u.z,j[lt+q+7]=0),A===!0&&(u.fromBufferAttribute(mt,G),j[lt+q+8]=u.x,j[lt+q+9]=u.y,j[lt+q+10]=u.z,j[lt+q+11]=mt.itemSize===4?u.w:1)}}S={count:b,texture:D,size:new Je(X,V)},s.set(_,S),_.addEventListener("dispose",vt)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)x.getUniforms().setValue(o,"morphTexture",p.morphTexture,i);else{let w=0;for(let A=0;A<v.length;A++)w+=v[A];const N=_.morphTargetsRelative?1:1-w;x.getUniforms().setValue(o,"morphTargetBaseInfluence",N),x.getUniforms().setValue(o,"morphTargetInfluences",v)}x.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function Vw(o,t,i,s,u){let f=new WeakMap;function p(v){const y=u.render.frame,b=v.geometry,S=t.get(v,b);if(f.get(S)!==y&&(t.update(S),f.set(S,y)),v.isInstancedMesh&&(v.hasEventListener("dispose",x)===!1&&v.addEventListener("dispose",x),f.get(v)!==y&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),f.set(v,y))),v.isSkinnedMesh){const C=v.skeleton;f.get(C)!==y&&(C.update(),f.set(C,y))}return S}function _(){f=new WeakMap}function x(v){const y=v.target;y.removeEventListener("dispose",x),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:p,dispose:_}}const Ww={[My]:"LINEAR_TONE_MAPPING",[Ey]:"REINHARD_TONE_MAPPING",[Ty]:"CINEON_TONE_MAPPING",[Ay]:"ACES_FILMIC_TONE_MAPPING",[Cy]:"AGX_TONE_MAPPING",[Ry]:"NEUTRAL_TONE_MAPPING",[wy]:"CUSTOM_TONE_MAPPING"};function jw(o,t,i,s,u){const f=new Qa(t,i,{type:o,depthBuffer:s,stencilBuffer:u}),p=new Qa(t,i,{type:Pr,depthBuffer:!1,stencilBuffer:!1}),_=new ma;_.setAttribute("position",new pa([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new pa([0,2,0,0,2,0],2));const x=new IE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new er(_,x),y=new $y(-1,1,1,-1,0,1);let b=null,S=null,C=!1,w,N=null,A=[],E=!1;this.setSize=function(P,B){f.setSize(P,B),p.setSize(P,B);for(let F=0;F<A.length;F++){const X=A[F];X.setSize&&X.setSize(P,B)}},this.setEffects=function(P){A=P,E=A.length>0&&A[0].isRenderPass===!0;const B=f.width,F=f.height;for(let X=0;X<A.length;X++){const V=A[X];V.setSize&&V.setSize(B,F)}},this.begin=function(P,B){if(C||P.toneMapping===Ja&&A.length===0)return!1;if(N=B,B!==null){const F=B.width,X=B.height;(f.width!==F||f.height!==X)&&this.setSize(F,X)}return E===!1&&P.setRenderTarget(f),w=P.toneMapping,P.toneMapping=Ja,!0},this.hasRenderPass=function(){return E},this.end=function(P,B){P.toneMapping=w,C=!0;let F=f,X=p;for(let V=0;V<A.length;V++){const j=A[V];if(j.enabled!==!1&&(j.render(P,X,F,B),j.needsSwap!==!1)){const D=F;F=X,X=D}}if(b!==P.outputColorSpace||S!==P.toneMapping){b=P.outputColorSpace,S=P.toneMapping,x.defines={},Qe.getTransfer(b)===fn&&(x.defines.SRGB_TRANSFER="");const V=Ww[S];V&&(x.defines[V]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=F.texture,P.setRenderTarget(N),P.render(v,y),N=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){f.dispose(),p.dispose(),_.dispose(),x.dispose()}}const nS=new yi,Vm=new Gc(1,1),iS=new Hy,aS=new dE,rS=new Zy,Tx=[],Ax=[],wx=new Float32Array(16),Cx=new Float32Array(9),Rx=new Float32Array(4);function Pl(o,t,i){const s=o[0];if(s<=0||s>0)return o;const u=t*i;let f=Tx[u];if(f===void 0&&(f=new Float32Array(u),Tx[u]=f),t!==0){s.toArray(f,0);for(let p=1,_=0;p!==t;++p)_+=i,o[p].toArray(f,_)}return f}function qn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Zn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function fh(o,t){let i=Ax[t];i===void 0&&(i=new Int32Array(t),Ax[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Xw(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function qw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;o.uniform2fv(this.addr,t),Zn(i,t)}}function Zw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(qn(i,t))return;o.uniform3fv(this.addr,t),Zn(i,t)}}function Yw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;o.uniform4fv(this.addr,t),Zn(i,t)}}function Kw(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Zn(i,t)}else{if(qn(i,s))return;Rx.set(s),o.uniformMatrix2fv(this.addr,!1,Rx),Zn(i,s)}}function Jw(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Zn(i,t)}else{if(qn(i,s))return;Cx.set(s),o.uniformMatrix3fv(this.addr,!1,Cx),Zn(i,s)}}function Qw(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(qn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Zn(i,t)}else{if(qn(i,s))return;wx.set(s),o.uniformMatrix4fv(this.addr,!1,wx),Zn(i,s)}}function $w(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function t2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;o.uniform2iv(this.addr,t),Zn(i,t)}}function e2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;o.uniform3iv(this.addr,t),Zn(i,t)}}function n2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;o.uniform4iv(this.addr,t),Zn(i,t)}}function i2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function a2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(qn(i,t))return;o.uniform2uiv(this.addr,t),Zn(i,t)}}function r2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(qn(i,t))return;o.uniform3uiv(this.addr,t),Zn(i,t)}}function s2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(qn(i,t))return;o.uniform4uiv(this.addr,t),Zn(i,t)}}function o2(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Vm.compareFunction=i.isReversedDepthBuffer()?p_:d_,f=Vm):f=nS,i.setTexture2D(t||f,u)}function l2(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(t||aS,u)}function c2(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(t||rS,u)}function u2(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(t||iS,u)}function f2(o){switch(o){case 5126:return Xw;case 35664:return qw;case 35665:return Zw;case 35666:return Yw;case 35674:return Kw;case 35675:return Jw;case 35676:return Qw;case 5124:case 35670:return $w;case 35667:case 35671:return t2;case 35668:case 35672:return e2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return a2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return u2}}function h2(o,t){o.uniform1fv(this.addr,t)}function d2(o,t){const i=Pl(t,this.size,2);o.uniform2fv(this.addr,i)}function p2(o,t){const i=Pl(t,this.size,3);o.uniform3fv(this.addr,i)}function m2(o,t){const i=Pl(t,this.size,4);o.uniform4fv(this.addr,i)}function _2(o,t){const i=Pl(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function g2(o,t){const i=Pl(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function v2(o,t){const i=Pl(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function x2(o,t){o.uniform1iv(this.addr,t)}function y2(o,t){o.uniform2iv(this.addr,t)}function S2(o,t){o.uniform3iv(this.addr,t)}function b2(o,t){o.uniform4iv(this.addr,t)}function M2(o,t){o.uniform1uiv(this.addr,t)}function E2(o,t){o.uniform2uiv(this.addr,t)}function T2(o,t){o.uniform3uiv(this.addr,t)}function A2(o,t){o.uniform4uiv(this.addr,t)}function w2(o,t,i){const s=this.cache,u=t.length,f=fh(i,u);qn(s,f)||(o.uniform1iv(this.addr,f),Zn(s,f));let p;this.type===o.SAMPLER_2D_SHADOW?p=Vm:p=nS;for(let _=0;_!==u;++_)i.setTexture2D(t[_]||p,f[_])}function C2(o,t,i){const s=this.cache,u=t.length,f=fh(i,u);qn(s,f)||(o.uniform1iv(this.addr,f),Zn(s,f));for(let p=0;p!==u;++p)i.setTexture3D(t[p]||aS,f[p])}function R2(o,t,i){const s=this.cache,u=t.length,f=fh(i,u);qn(s,f)||(o.uniform1iv(this.addr,f),Zn(s,f));for(let p=0;p!==u;++p)i.setTextureCube(t[p]||rS,f[p])}function L2(o,t,i){const s=this.cache,u=t.length,f=fh(i,u);qn(s,f)||(o.uniform1iv(this.addr,f),Zn(s,f));for(let p=0;p!==u;++p)i.setTexture2DArray(t[p]||iS,f[p])}function D2(o){switch(o){case 5126:return h2;case 35664:return d2;case 35665:return p2;case 35666:return m2;case 35674:return _2;case 35675:return g2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return y2;case 35668:case 35672:return S2;case 35669:case 35673:return b2;case 5125:return M2;case 36294:return E2;case 36295:return T2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return w2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return L2}}class P2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=f2(i.type)}}class U2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=D2(i.type)}}class N2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const u=this.seq;for(let f=0,p=u.length;f!==p;++f){const _=u[f];_.setValue(t,i[_.id],s)}}}const Wp=/(\w+)(\])?(\[|\.)?/g;function Lx(o,t){o.seq.push(t),o.map[t.id]=t}function O2(o,t,i){const s=o.name,u=s.length;for(Wp.lastIndex=0;;){const f=Wp.exec(s),p=Wp.lastIndex;let _=f[1];const x=f[2]==="]",v=f[3];if(x&&(_=_|0),v===void 0||v==="["&&p+2===u){Lx(i,v===void 0?new P2(_,o,t):new U2(_,o,t));break}else{let b=i.map[_];b===void 0&&(b=new N2(_),Lx(i,b)),i=b}}}class Jf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let p=0;p<s;++p){const _=t.getActiveUniform(i,p),x=t.getUniformLocation(i,_.name);O2(_,x,this)}const u=[],f=[];for(const p of this.seq)p.type===t.SAMPLER_2D_SHADOW||p.type===t.SAMPLER_CUBE_SHADOW||p.type===t.SAMPLER_2D_ARRAY_SHADOW?u.push(p):f.push(p);u.length>0&&(this.seq=u.concat(f))}setValue(t,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(t,s,u)}setOptional(t,i,s){const u=i[s];u!==void 0&&this.setValue(t,s,u)}static upload(t,i,s,u){for(let f=0,p=i.length;f!==p;++f){const _=i[f],x=s[_.id];x.needsUpdate!==!1&&_.setValue(t,x.value,u)}}static seqWithValue(t,i){const s=[];for(let u=0,f=t.length;u!==f;++u){const p=t[u];p.id in i&&s.push(p)}return s}}function Dx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const z2=37297;let I2=0;function B2(o,t){const i=o.split(`
`),s=[],u=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let p=u;p<f;p++){const _=p+1;s.push(`${_===t?">":" "} ${_}: ${i[p]}`)}return s.join(`
`)}const Px=new Ue;function F2(o){Qe._getMatrix(Px,Qe.workingColorSpace,o);const t=`mat3( ${Px.elements.map(i=>i.toFixed(4))} )`;switch(Qe.getTransfer(o)){case $f:return[t,"LinearTransferOETF"];case fn:return[t,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Ux(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const p=/ERROR: 0:(\d+)/.exec(f);if(p){const _=parseInt(p[1]);return i.toUpperCase()+`

`+f+`

`+B2(o.getShaderSource(t),_)}else return f}function H2(o,t){const i=F2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const k2={[My]:"Linear",[Ey]:"Reinhard",[Ty]:"Cineon",[Ay]:"ACESFilmic",[Cy]:"AgX",[Ry]:"Neutral",[wy]:"Custom"};function G2(o,t){const i=k2[t];return i===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kf=new dt;function V2(){Qe.getLuminanceCoefficients(kf);const o=kf.x.toFixed(4),t=kf.y.toFixed(4),i=kf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bc).join(`
`)}function j2(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function X2(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(t,u),p=f.name;let _=1;f.type===o.FLOAT_MAT2&&(_=2),f.type===o.FLOAT_MAT3&&(_=3),f.type===o.FLOAT_MAT4&&(_=4),i[p]={type:f.type,location:o.getAttribLocation(t,p),locationSize:_}}return i}function Bc(o){return o!==""}function Nx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ox(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wm(o){return o.replace(q2,Y2)}const Z2=new Map;function Y2(o,t){let i=Oe[t];if(i===void 0){const s=Z2.get(t);if(s!==void 0)i=Oe[s],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Wm(i)}const K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zx(o){return o.replace(K2,J2)}function J2(o,t,i,s){let u="";for(let f=parseInt(t);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function Ix(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Q2={[Xf]:"SHADOWMAP_TYPE_PCF",[Ic]:"SHADOWMAP_TYPE_VSM"};function $2(o){return Q2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tC={[_o]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE",[oh]:"ENVMAP_TYPE_CUBE_UV"};function eC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":tC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const nC={[Ml]:"ENVMAP_MODE_REFRACTION"};function iC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":nC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aC={[s_]:"ENVMAP_BLENDING_MULTIPLY",[X1]:"ENVMAP_BLENDING_MIX",[q1]:"ENVMAP_BLENDING_ADD"};function rC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":aC[o.combine]||"ENVMAP_BLENDING_NONE"}function sC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function oC(o,t,i,s){const u=o.getContext(),f=i.defines;let p=i.vertexShader,_=i.fragmentShader;const x=$2(i),v=eC(i),y=iC(i),b=rC(i),S=sC(i),C=W2(i),w=j2(f),N=u.createProgram();let A,E,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(A=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Bc).join(`
`),A.length>0&&(A+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Bc).join(`
`),E.length>0&&(E+=`
`)):(A=[Ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bc).join(`
`),E=[Ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",i.envMap?"#define "+b:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?Oe.tonemapping_pars_fragment:"",i.toneMapping!==Ja?G2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,H2("linearToOutputTexel",i.outputColorSpace),V2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bc).join(`
`)),p=Wm(p),p=Nx(p,i),p=Ox(p,i),_=Wm(_),_=Nx(_,i),_=Ox(_,i),p=zx(p),_=zx(_),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,A=[C,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,E=["#define varying in",i.glslVersion===Zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const B=P+A+p,F=P+E+_,X=Dx(u,u.VERTEX_SHADER,B),V=Dx(u,u.FRAGMENT_SHADER,F);u.attachShader(N,X),u.attachShader(N,V),i.index0AttributeName!==void 0?u.bindAttribLocation(N,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(N,0,"position"),u.linkProgram(N);function j(Z){if(o.debug.checkShaderErrors){const rt=u.getProgramInfoLog(N)||"",ft=u.getShaderInfoLog(X)||"",mt=u.getShaderInfoLog(V)||"",lt=rt.trim(),G=ft.trim(),q=mt.trim();let it=!0,At=!0;if(u.getProgramParameter(N,u.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,N,X,V);else{const xt=Ux(u,X,"vertex"),I=Ux(u,V,"fragment");an("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(N,u.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+lt+`
`+xt+`
`+I)}else lt!==""?Ae("WebGLProgram: Program Info Log:",lt):(G===""||q==="")&&(At=!1);At&&(Z.diagnostics={runnable:it,programLog:lt,vertexShader:{log:G,prefix:A},fragmentShader:{log:q,prefix:E}})}u.deleteShader(X),u.deleteShader(V),D=new Jf(u,N),H=X2(u,N)}let D;this.getUniforms=function(){return D===void 0&&j(this),D};let H;this.getAttributes=function(){return H===void 0&&j(this),H};let vt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return vt===!1&&(vt=u.getProgramParameter(N,z2)),vt},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=I2++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=X,this.fragmentShader=V,this}let lC=0;class cC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(s),p=this._getShaderCacheForMaterial(t);return p.has(u)===!1&&(p.add(u),u.usedTimes++),p.has(f)===!1&&(p.add(f),f.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new uC(t),i.set(t,s)),s}}class uC{constructor(t){this.id=lC++,this.code=t,this.usedTimes=0}}function fC(o,t,i,s,u,f){const p=new ky,_=new cC,x=new Set,v=[],y=new Map,b=s.logarithmicDepthBuffer;let S=s.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return x.add(D),D===0?"uv":`uv${D}`}function N(D,H,vt,Z,rt){const ft=Z.fog,mt=rt.geometry,lt=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Z.environment:null,G=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,q=t.get(D.envMap||lt,G),it=q&&q.mapping===oh?q.image.height:null,At=C[D.type];D.precision!==null&&(S=s.getMaxPrecision(D.precision),S!==D.precision&&Ae("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const xt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,I=xt!==void 0?xt.length:0;let K=0;mt.morphAttributes.position!==void 0&&(K=1),mt.morphAttributes.normal!==void 0&&(K=2),mt.morphAttributes.color!==void 0&&(K=3);let bt,wt,Ot,nt;if(At){const je=Za[At];bt=je.vertexShader,wt=je.fragmentShader}else bt=D.vertexShader,wt=D.fragmentShader,_.update(D),Ot=_.getVertexShaderID(D),nt=_.getFragmentShaderID(D);const Lt=o.getRenderTarget(),zt=o.state.buffers.depth.getReversed(),ae=rt.isInstancedMesh===!0,de=rt.isBatchedMesh===!0,ve=!!D.map,hn=!!D.matcap,Ne=!!q,ze=!!D.aoMap,qe=!!D.lightMap,Ee=!!D.bumpMap,gn=!!D.normalMap,Q=!!D.displacementMap,xn=!!D.emissiveMap,Be=!!D.metalnessMap,Ze=!!D.roughnessMap,ce=D.anisotropy>0,W=D.clearcoat>0,R=D.dispersion>0,at=D.iridescence>0,Ct=D.sheen>0,Nt=D.transmission>0,Tt=ce&&!!D.anisotropyMap,se=W&&!!D.clearcoatMap,Gt=W&&!!D.clearcoatNormalMap,pe=W&&!!D.clearcoatRoughnessMap,xe=at&&!!D.iridescenceMap,Bt=at&&!!D.iridescenceThicknessMap,It=Ct&&!!D.sheenColorMap,Jt=Ct&&!!D.sheenRoughnessMap,qt=!!D.specularMap,Zt=!!D.specularColorMap,we=!!D.specularIntensityMap,et=Nt&&!!D.transmissionMap,kt=Nt&&!!D.thicknessMap,Ht=!!D.gradientMap,Qt=!!D.alphaMap,Ft=D.alphaTest>0,Et=!!D.alphaHash,ee=!!D.extensions;let be=Ja;D.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(be=o.toneMapping);const rn={shaderID:At,shaderType:D.type,shaderName:D.name,vertexShader:bt,fragmentShader:wt,defines:D.defines,customVertexShaderID:Ot,customFragmentShaderID:nt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:de,batchingColor:de&&rt._colorsTexture!==null,instancing:ae,instancingColor:ae&&rt.instanceColor!==null,instancingMorph:ae&&rt.morphTexture!==null,outputColorSpace:Lt===null?o.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Tl,alphaToCoverage:!!D.alphaToCoverage,map:ve,matcap:hn,envMap:Ne,envMapMode:Ne&&q.mapping,envMapCubeUVHeight:it,aoMap:ze,lightMap:qe,bumpMap:Ee,normalMap:gn,displacementMap:Q,emissiveMap:xn,normalMapObjectSpace:gn&&D.normalMapType===K1,normalMapTangentSpace:gn&&D.normalMapType===By,metalnessMap:Be,roughnessMap:Ze,anisotropy:ce,anisotropyMap:Tt,clearcoat:W,clearcoatMap:se,clearcoatNormalMap:Gt,clearcoatRoughnessMap:pe,dispersion:R,iridescence:at,iridescenceMap:xe,iridescenceThicknessMap:Bt,sheen:Ct,sheenColorMap:It,sheenRoughnessMap:Jt,specularMap:qt,specularColorMap:Zt,specularIntensityMap:we,transmission:Nt,transmissionMap:et,thicknessMap:kt,gradientMap:Ht,opaque:D.transparent===!1&&D.blending===xl&&D.alphaToCoverage===!1,alphaMap:Qt,alphaTest:Ft,alphaHash:Et,combine:D.combine,mapUv:ve&&w(D.map.channel),aoMapUv:ze&&w(D.aoMap.channel),lightMapUv:qe&&w(D.lightMap.channel),bumpMapUv:Ee&&w(D.bumpMap.channel),normalMapUv:gn&&w(D.normalMap.channel),displacementMapUv:Q&&w(D.displacementMap.channel),emissiveMapUv:xn&&w(D.emissiveMap.channel),metalnessMapUv:Be&&w(D.metalnessMap.channel),roughnessMapUv:Ze&&w(D.roughnessMap.channel),anisotropyMapUv:Tt&&w(D.anisotropyMap.channel),clearcoatMapUv:se&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:It&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&w(D.sheenRoughnessMap.channel),specularMapUv:qt&&w(D.specularMap.channel),specularColorMapUv:Zt&&w(D.specularColorMap.channel),specularIntensityMapUv:we&&w(D.specularIntensityMap.channel),transmissionMapUv:et&&w(D.transmissionMap.channel),thicknessMapUv:kt&&w(D.thicknessMap.channel),alphaMapUv:Qt&&w(D.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(gn||ce),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!mt.attributes.uv&&(ve||Qt),fog:!!ft,useFog:D.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||mt.attributes.normal===void 0&&gn===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:zt,skinning:rt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:K,numDirLights:H.directional.length,numPointLights:H.point.length,numSpotLights:H.spot.length,numSpotLightMaps:H.spotLightMap.length,numRectAreaLights:H.rectArea.length,numHemiLights:H.hemi.length,numDirLightShadows:H.directionalShadowMap.length,numPointLightShadows:H.pointShadowMap.length,numSpotLightShadows:H.spotShadowMap.length,numSpotLightShadowsWithMaps:H.numSpotLightShadowsWithMaps,numLightProbes:H.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&vt.length>0,shadowMapType:o.shadowMap.type,toneMapping:be,decodeVideoTexture:ve&&D.map.isVideoTexture===!0&&Qe.getTransfer(D.map.colorSpace)===fn,decodeVideoTextureEmissive:xn&&D.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(D.emissiveMap.colorSpace)===fn,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Cr,flipSided:D.side===zi,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ee&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&D.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return rn.vertexUv1s=x.has(1),rn.vertexUv2s=x.has(2),rn.vertexUv3s=x.has(3),x.clear(),rn}function A(D){const H=[];if(D.shaderID?H.push(D.shaderID):(H.push(D.customVertexShaderID),H.push(D.customFragmentShaderID)),D.defines!==void 0)for(const vt in D.defines)H.push(vt),H.push(D.defines[vt]);return D.isRawShaderMaterial===!1&&(E(H,D),P(H,D),H.push(o.outputColorSpace)),H.push(D.customProgramCacheKey),H.join()}function E(D,H){D.push(H.precision),D.push(H.outputColorSpace),D.push(H.envMapMode),D.push(H.envMapCubeUVHeight),D.push(H.mapUv),D.push(H.alphaMapUv),D.push(H.lightMapUv),D.push(H.aoMapUv),D.push(H.bumpMapUv),D.push(H.normalMapUv),D.push(H.displacementMapUv),D.push(H.emissiveMapUv),D.push(H.metalnessMapUv),D.push(H.roughnessMapUv),D.push(H.anisotropyMapUv),D.push(H.clearcoatMapUv),D.push(H.clearcoatNormalMapUv),D.push(H.clearcoatRoughnessMapUv),D.push(H.iridescenceMapUv),D.push(H.iridescenceThicknessMapUv),D.push(H.sheenColorMapUv),D.push(H.sheenRoughnessMapUv),D.push(H.specularMapUv),D.push(H.specularColorMapUv),D.push(H.specularIntensityMapUv),D.push(H.transmissionMapUv),D.push(H.thicknessMapUv),D.push(H.combine),D.push(H.fogExp2),D.push(H.sizeAttenuation),D.push(H.morphTargetsCount),D.push(H.morphAttributeCount),D.push(H.numDirLights),D.push(H.numPointLights),D.push(H.numSpotLights),D.push(H.numSpotLightMaps),D.push(H.numHemiLights),D.push(H.numRectAreaLights),D.push(H.numDirLightShadows),D.push(H.numPointLightShadows),D.push(H.numSpotLightShadows),D.push(H.numSpotLightShadowsWithMaps),D.push(H.numLightProbes),D.push(H.shadowMapType),D.push(H.toneMapping),D.push(H.numClippingPlanes),D.push(H.numClipIntersection),D.push(H.depthPacking)}function P(D,H){p.disableAll(),H.instancing&&p.enable(0),H.instancingColor&&p.enable(1),H.instancingMorph&&p.enable(2),H.matcap&&p.enable(3),H.envMap&&p.enable(4),H.normalMapObjectSpace&&p.enable(5),H.normalMapTangentSpace&&p.enable(6),H.clearcoat&&p.enable(7),H.iridescence&&p.enable(8),H.alphaTest&&p.enable(9),H.vertexColors&&p.enable(10),H.vertexAlphas&&p.enable(11),H.vertexUv1s&&p.enable(12),H.vertexUv2s&&p.enable(13),H.vertexUv3s&&p.enable(14),H.vertexTangents&&p.enable(15),H.anisotropy&&p.enable(16),H.alphaHash&&p.enable(17),H.batching&&p.enable(18),H.dispersion&&p.enable(19),H.batchingColor&&p.enable(20),H.gradientMap&&p.enable(21),D.push(p.mask),p.disableAll(),H.fog&&p.enable(0),H.useFog&&p.enable(1),H.flatShading&&p.enable(2),H.logarithmicDepthBuffer&&p.enable(3),H.reversedDepthBuffer&&p.enable(4),H.skinning&&p.enable(5),H.morphTargets&&p.enable(6),H.morphNormals&&p.enable(7),H.morphColors&&p.enable(8),H.premultipliedAlpha&&p.enable(9),H.shadowMapEnabled&&p.enable(10),H.doubleSided&&p.enable(11),H.flipSided&&p.enable(12),H.useDepthPacking&&p.enable(13),H.dithering&&p.enable(14),H.transmission&&p.enable(15),H.sheen&&p.enable(16),H.opaque&&p.enable(17),H.pointsUvs&&p.enable(18),H.decodeVideoTexture&&p.enable(19),H.decodeVideoTextureEmissive&&p.enable(20),H.alphaToCoverage&&p.enable(21),D.push(p.mask)}function B(D){const H=C[D.type];let vt;if(H){const Z=Za[H];vt=NE.clone(Z.uniforms)}else vt=D.uniforms;return vt}function F(D,H){let vt=y.get(H);return vt!==void 0?++vt.usedTimes:(vt=new oC(o,H,D,u),v.push(vt),y.set(H,vt)),vt}function X(D){if(--D.usedTimes===0){const H=v.indexOf(D);v[H]=v[v.length-1],v.pop(),y.delete(D.cacheKey),D.destroy()}}function V(D){_.remove(D)}function j(){_.dispose()}return{getParameters:N,getProgramCacheKey:A,getUniforms:B,acquireProgram:F,releaseProgram:X,releaseShaderCache:V,programs:v,dispose:j}}function hC(){let o=new WeakMap;function t(p){return o.has(p)}function i(p){let _=o.get(p);return _===void 0&&(_={},o.set(p,_)),_}function s(p){o.delete(p)}function u(p,_,x){o.get(p)[_]=x}function f(){o=new WeakMap}return{has:t,get:i,remove:s,update:u,dispose:f}}function dC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Bx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Fx(){const o=[];let t=0;const i=[],s=[],u=[];function f(){t=0,i.length=0,s.length=0,u.length=0}function p(S){let C=0;return S.isInstancedMesh&&(C+=2),S.isSkinnedMesh&&(C+=1),C}function _(S,C,w,N,A,E){let P=o[t];return P===void 0?(P={id:S.id,object:S,geometry:C,material:w,materialVariant:p(S),groupOrder:N,renderOrder:S.renderOrder,z:A,group:E},o[t]=P):(P.id=S.id,P.object=S,P.geometry=C,P.material=w,P.materialVariant=p(S),P.groupOrder=N,P.renderOrder=S.renderOrder,P.z=A,P.group=E),t++,P}function x(S,C,w,N,A,E){const P=_(S,C,w,N,A,E);w.transmission>0?s.push(P):w.transparent===!0?u.push(P):i.push(P)}function v(S,C,w,N,A,E){const P=_(S,C,w,N,A,E);w.transmission>0?s.unshift(P):w.transparent===!0?u.unshift(P):i.unshift(P)}function y(S,C){i.length>1&&i.sort(S||dC),s.length>1&&s.sort(C||Bx),u.length>1&&u.sort(C||Bx)}function b(){for(let S=t,C=o.length;S<C;S++){const w=o[S];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:x,unshift:v,finish:b,sort:y}}function pC(){let o=new WeakMap;function t(s,u){const f=o.get(s);let p;return f===void 0?(p=new Fx,o.set(s,[p])):u>=f.length?(p=new Fx,f.push(p)):p=f[u],p}function i(){o=new WeakMap}return{get:t,dispose:i}}function mC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new dt,color:new Ke};break;case"SpotLight":i={position:new dt,direction:new dt,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new dt,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new dt,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":i={color:new Ke,position:new dt,halfWidth:new dt,halfHeight:new dt};break}return o[t.id]=i,i}}}function _C(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let gC=0;function vC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function xC(o){const t=new mC,i=_C(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)s.probe.push(new dt);const u=new dt,f=new Cn,p=new Cn;function _(v){let y=0,b=0,S=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let C=0,w=0,N=0,A=0,E=0,P=0,B=0,F=0,X=0,V=0,j=0;v.sort(vC);for(let H=0,vt=v.length;H<vt;H++){const Z=v[H],rt=Z.color,ft=Z.intensity,mt=Z.distance;let lt=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===El?lt=Z.shadow.map.texture:lt=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)y+=rt.r*ft,b+=rt.g*ft,S+=rt.b*ft;else if(Z.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(Z.sh.coefficients[G],ft);j++}else if(Z.isDirectionalLight){const G=t.get(Z);if(G.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){const q=Z.shadow,it=i.get(Z);it.shadowIntensity=q.intensity,it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,s.directionalShadow[C]=it,s.directionalShadowMap[C]=lt,s.directionalShadowMatrix[C]=Z.shadow.matrix,P++}s.directional[C]=G,C++}else if(Z.isSpotLight){const G=t.get(Z);G.position.setFromMatrixPosition(Z.matrixWorld),G.color.copy(rt).multiplyScalar(ft),G.distance=mt,G.coneCos=Math.cos(Z.angle),G.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),G.decay=Z.decay,s.spot[N]=G;const q=Z.shadow;if(Z.map&&(s.spotLightMap[X]=Z.map,X++,q.updateMatrices(Z),Z.castShadow&&V++),s.spotLightMatrix[N]=q.matrix,Z.castShadow){const it=i.get(Z);it.shadowIntensity=q.intensity,it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,s.spotShadow[N]=it,s.spotShadowMap[N]=lt,F++}N++}else if(Z.isRectAreaLight){const G=t.get(Z);G.color.copy(rt).multiplyScalar(ft),G.halfWidth.set(Z.width*.5,0,0),G.halfHeight.set(0,Z.height*.5,0),s.rectArea[A]=G,A++}else if(Z.isPointLight){const G=t.get(Z);if(G.color.copy(Z.color).multiplyScalar(Z.intensity),G.distance=Z.distance,G.decay=Z.decay,Z.castShadow){const q=Z.shadow,it=i.get(Z);it.shadowIntensity=q.intensity,it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,it.shadowCameraNear=q.camera.near,it.shadowCameraFar=q.camera.far,s.pointShadow[w]=it,s.pointShadowMap[w]=lt,s.pointShadowMatrix[w]=Z.shadow.matrix,B++}s.point[w]=G,w++}else if(Z.isHemisphereLight){const G=t.get(Z);G.skyColor.copy(Z.color).multiplyScalar(ft),G.groundColor.copy(Z.groundColor).multiplyScalar(ft),s.hemi[E]=G,E++}}A>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Yt.LTC_FLOAT_1,s.rectAreaLTC2=Yt.LTC_FLOAT_2):(s.rectAreaLTC1=Yt.LTC_HALF_1,s.rectAreaLTC2=Yt.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=b,s.ambient[2]=S;const D=s.hash;(D.directionalLength!==C||D.pointLength!==w||D.spotLength!==N||D.rectAreaLength!==A||D.hemiLength!==E||D.numDirectionalShadows!==P||D.numPointShadows!==B||D.numSpotShadows!==F||D.numSpotMaps!==X||D.numLightProbes!==j)&&(s.directional.length=C,s.spot.length=N,s.rectArea.length=A,s.point.length=w,s.hemi.length=E,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=F+X-V,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=j,D.directionalLength=C,D.pointLength=w,D.spotLength=N,D.rectAreaLength=A,D.hemiLength=E,D.numDirectionalShadows=P,D.numPointShadows=B,D.numSpotShadows=F,D.numSpotMaps=X,D.numLightProbes=j,s.version=gC++)}function x(v,y){let b=0,S=0,C=0,w=0,N=0;const A=y.matrixWorldInverse;for(let E=0,P=v.length;E<P;E++){const B=v[E];if(B.isDirectionalLight){const F=s.directional[b];F.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(A),b++}else if(B.isSpotLight){const F=s.spot[C];F.position.setFromMatrixPosition(B.matrixWorld),F.position.applyMatrix4(A),F.direction.setFromMatrixPosition(B.matrixWorld),u.setFromMatrixPosition(B.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(A),C++}else if(B.isRectAreaLight){const F=s.rectArea[w];F.position.setFromMatrixPosition(B.matrixWorld),F.position.applyMatrix4(A),p.identity(),f.copy(B.matrixWorld),f.premultiply(A),p.extractRotation(f),F.halfWidth.set(B.width*.5,0,0),F.halfHeight.set(0,B.height*.5,0),F.halfWidth.applyMatrix4(p),F.halfHeight.applyMatrix4(p),w++}else if(B.isPointLight){const F=s.point[S];F.position.setFromMatrixPosition(B.matrixWorld),F.position.applyMatrix4(A),S++}else if(B.isHemisphereLight){const F=s.hemi[N];F.direction.setFromMatrixPosition(B.matrixWorld),F.direction.transformDirection(A),N++}}}return{setup:_,setupView:x,state:s}}function Hx(o){const t=new xC(o),i=[],s=[];function u(y){v.camera=y,i.length=0,s.length=0}function f(y){i.push(y)}function p(y){s.push(y)}function _(){t.setup(i)}function x(y){t.setupView(i,y)}const v={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:u,state:v,setupLights:_,setupLightsView:x,pushLight:f,pushShadow:p}}function yC(o){let t=new WeakMap;function i(u,f=0){const p=t.get(u);let _;return p===void 0?(_=new Hx(o),t.set(u,[_])):f>=p.length?(_=new Hx(o),p.push(_)):_=p[f],_}function s(){t=new WeakMap}return{get:i,dispose:s}}const SC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MC=[new dt(1,0,0),new dt(-1,0,0),new dt(0,1,0),new dt(0,-1,0),new dt(0,0,1),new dt(0,0,-1)],EC=[new dt(0,-1,0),new dt(0,-1,0),new dt(0,0,1),new dt(0,0,-1),new dt(0,-1,0),new dt(0,-1,0)],kx=new Cn,Oc=new dt,jp=new dt;function TC(o,t,i){let s=new g_;const u=new Je,f=new Je,p=new Un,_=new BE,x=new FE,v={},y=i.maxTextureSize,b={[Ss]:zi,[zi]:Ss,[Cr]:Cr},S=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:SC,fragmentShader:bC}),C=S.clone();C.defines.HORIZONTAL_PASS=1;const w=new ma;w.setAttribute("position",new da(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new er(w,S),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let E=this.type;this.render=function(V,j,D){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||V.length===0)return;this.type===w1&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xf);const H=o.getRenderTarget(),vt=o.getActiveCubeFace(),Z=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Lr),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const ft=E!==this.type;ft&&j.traverse(function(mt){mt.material&&(Array.isArray(mt.material)?mt.material.forEach(lt=>lt.needsUpdate=!0):mt.material.needsUpdate=!0)});for(let mt=0,lt=V.length;mt<lt;mt++){const G=V[mt],q=G.shadow;if(q===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;u.copy(q.mapSize);const it=q.getFrameExtents();u.multiply(it),f.copy(q.mapSize),(u.x>y||u.y>y)&&(u.x>y&&(f.x=Math.floor(y/it.x),u.x=f.x*it.x,q.mapSize.x=f.x),u.y>y&&(f.y=Math.floor(y/it.y),u.y=f.y*it.y,q.mapSize.y=f.y));const At=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=At,q.map===null||ft===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ic){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Qa(u.x,u.y,{format:El,type:Pr,minFilter:pi,magFilter:pi,generateMipmaps:!1}),q.map.texture.name=G.name+".shadowMap",q.map.depthTexture=new Gc(u.x,u.y,Ya),q.map.depthTexture.name=G.name+".shadowMapDepth",q.map.depthTexture.format=Ur,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=oi,q.map.depthTexture.magFilter=oi}else G.isPointLight?(q.map=new eS(u.x),q.map.depthTexture=new PE(u.x,$a)):(q.map=new Qa(u.x,u.y),q.map.depthTexture=new Gc(u.x,u.y,$a)),q.map.depthTexture.name=G.name+".shadowMap",q.map.depthTexture.format=Ur,this.type===Xf?(q.map.depthTexture.compareFunction=At?p_:d_,q.map.depthTexture.minFilter=pi,q.map.depthTexture.magFilter=pi):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=oi,q.map.depthTexture.magFilter=oi);q.camera.updateProjectionMatrix()}const xt=q.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<xt;I++){if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,I),o.clear();else{I===0&&(o.setRenderTarget(q.map),o.clear());const K=q.getViewport(I);p.set(f.x*K.x,f.y*K.y,f.x*K.z,f.y*K.w),rt.viewport(p)}if(G.isPointLight){const K=q.camera,bt=q.matrix,wt=G.distance||K.far;wt!==K.far&&(K.far=wt,K.updateProjectionMatrix()),Oc.setFromMatrixPosition(G.matrixWorld),K.position.copy(Oc),jp.copy(K.position),jp.add(MC[I]),K.up.copy(EC[I]),K.lookAt(jp),K.updateMatrixWorld(),bt.makeTranslation(-Oc.x,-Oc.y,-Oc.z),kx.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(kx,K.coordinateSystem,K.reversedDepth)}else q.updateMatrices(G);s=q.getFrustum(),F(j,D,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===Ic&&P(q,D),q.needsUpdate=!1}E=this.type,A.needsUpdate=!1,o.setRenderTarget(H,vt,Z)};function P(V,j){const D=t.update(N);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,C.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,C.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Qa(u.x,u.y,{format:El,type:Pr})),S.uniforms.shadow_pass.value=V.map.depthTexture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(j,null,D,S,N,null),C.uniforms.shadow_pass.value=V.mapPass.texture,C.uniforms.resolution.value=V.mapSize,C.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(j,null,D,C,N,null)}function B(V,j,D,H){let vt=null;const Z=D.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(Z!==void 0)vt=Z;else if(vt=D.isPointLight===!0?x:_,o.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const rt=vt.uuid,ft=j.uuid;let mt=v[rt];mt===void 0&&(mt={},v[rt]=mt);let lt=mt[ft];lt===void 0&&(lt=vt.clone(),mt[ft]=lt,j.addEventListener("dispose",X)),vt=lt}if(vt.visible=j.visible,vt.wireframe=j.wireframe,H===Ic?vt.side=j.shadowSide!==null?j.shadowSide:j.side:vt.side=j.shadowSide!==null?j.shadowSide:b[j.side],vt.alphaMap=j.alphaMap,vt.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,vt.map=j.map,vt.clipShadows=j.clipShadows,vt.clippingPlanes=j.clippingPlanes,vt.clipIntersection=j.clipIntersection,vt.displacementMap=j.displacementMap,vt.displacementScale=j.displacementScale,vt.displacementBias=j.displacementBias,vt.wireframeLinewidth=j.wireframeLinewidth,vt.linewidth=j.linewidth,D.isPointLight===!0&&vt.isMeshDistanceMaterial===!0){const rt=o.properties.get(vt);rt.light=D}return vt}function F(V,j,D,H,vt){if(V.visible===!1)return;if(V.layers.test(j.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&vt===Ic)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,V.matrixWorld);const ft=t.update(V),mt=V.material;if(Array.isArray(mt)){const lt=ft.groups;for(let G=0,q=lt.length;G<q;G++){const it=lt[G],At=mt[it.materialIndex];if(At&&At.visible){const xt=B(V,At,H,vt);V.onBeforeShadow(o,V,j,D,ft,xt,it),o.renderBufferDirect(D,null,ft,xt,V,it),V.onAfterShadow(o,V,j,D,ft,xt,it)}}}else if(mt.visible){const lt=B(V,mt,H,vt);V.onBeforeShadow(o,V,j,D,ft,lt,null),o.renderBufferDirect(D,null,ft,lt,V,null),V.onAfterShadow(o,V,j,D,ft,lt,null)}}const rt=V.children;for(let ft=0,mt=rt.length;ft<mt;ft++)F(rt[ft],j,D,H,vt)}function X(V){V.target.removeEventListener("dispose",X);for(const D in v){const H=v[D],vt=V.target.uuid;vt in H&&(H[vt].dispose(),delete H[vt])}}}function AC(o,t){function i(){let et=!1;const kt=new Un;let Ht=null;const Qt=new Un(0,0,0,0);return{setMask:function(Ft){Ht!==Ft&&!et&&(o.colorMask(Ft,Ft,Ft,Ft),Ht=Ft)},setLocked:function(Ft){et=Ft},setClear:function(Ft,Et,ee,be,rn){rn===!0&&(Ft*=be,Et*=be,ee*=be),kt.set(Ft,Et,ee,be),Qt.equals(kt)===!1&&(o.clearColor(Ft,Et,ee,be),Qt.copy(kt))},reset:function(){et=!1,Ht=null,Qt.set(-1,0,0,0)}}}function s(){let et=!1,kt=!1,Ht=null,Qt=null,Ft=null;return{setReversed:function(Et){if(kt!==Et){const ee=t.get("EXT_clip_control");Et?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),kt=Et;const be=Ft;Ft=null,this.setClear(be)}},getReversed:function(){return kt},setTest:function(Et){Et?Lt(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(Et){Ht!==Et&&!et&&(o.depthMask(Et),Ht=Et)},setFunc:function(Et){if(kt&&(Et=sE[Et]),Qt!==Et){switch(Et){case tm:o.depthFunc(o.NEVER);break;case em:o.depthFunc(o.ALWAYS);break;case nm:o.depthFunc(o.LESS);break;case bl:o.depthFunc(o.LEQUAL);break;case im:o.depthFunc(o.EQUAL);break;case am:o.depthFunc(o.GEQUAL);break;case rm:o.depthFunc(o.GREATER);break;case sm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Qt=Et}},setLocked:function(Et){et=Et},setClear:function(Et){Ft!==Et&&(Ft=Et,kt&&(Et=1-Et),o.clearDepth(Et))},reset:function(){et=!1,Ht=null,Qt=null,Ft=null,kt=!1}}}function u(){let et=!1,kt=null,Ht=null,Qt=null,Ft=null,Et=null,ee=null,be=null,rn=null;return{setTest:function(je){et||(je?Lt(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(je){kt!==je&&!et&&(o.stencilMask(je),kt=je)},setFunc:function(je,Vn,Ii){(Ht!==je||Qt!==Vn||Ft!==Ii)&&(o.stencilFunc(je,Vn,Ii),Ht=je,Qt=Vn,Ft=Ii)},setOp:function(je,Vn,Ii){(Et!==je||ee!==Vn||be!==Ii)&&(o.stencilOp(je,Vn,Ii),Et=je,ee=Vn,be=Ii)},setLocked:function(je){et=je},setClear:function(je){rn!==je&&(o.clearStencil(je),rn=je)},reset:function(){et=!1,kt=null,Ht=null,Qt=null,Ft=null,Et=null,ee=null,be=null,rn=null}}}const f=new i,p=new s,_=new u,x=new WeakMap,v=new WeakMap;let y={},b={},S=new WeakMap,C=[],w=null,N=!1,A=null,E=null,P=null,B=null,F=null,X=null,V=null,j=new Ke(0,0,0),D=0,H=!1,vt=null,Z=null,rt=null,ft=null,mt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(it)[1]),G=q>=1):it.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),G=q>=2);let At=null,xt={};const I=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),bt=new Un().fromArray(I),wt=new Un().fromArray(K);function Ot(et,kt,Ht,Qt){const Ft=new Uint8Array(4),Et=o.createTexture();o.bindTexture(et,Et),o.texParameteri(et,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(et,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ee=0;ee<Ht;ee++)et===o.TEXTURE_3D||et===o.TEXTURE_2D_ARRAY?o.texImage3D(kt,0,o.RGBA,1,1,Qt,0,o.RGBA,o.UNSIGNED_BYTE,Ft):o.texImage2D(kt+ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ft);return Et}const nt={};nt[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),p.setClear(1),_.setClear(0),Lt(o.DEPTH_TEST),p.setFunc(bl),Ee(!1),gn(Gv),Lt(o.CULL_FACE),ze(Lr);function Lt(et){y[et]!==!0&&(o.enable(et),y[et]=!0)}function zt(et){y[et]!==!1&&(o.disable(et),y[et]=!1)}function ae(et,kt){return b[et]!==kt?(o.bindFramebuffer(et,kt),b[et]=kt,et===o.DRAW_FRAMEBUFFER&&(b[o.FRAMEBUFFER]=kt),et===o.FRAMEBUFFER&&(b[o.DRAW_FRAMEBUFFER]=kt),!0):!1}function de(et,kt){let Ht=C,Qt=!1;if(et){Ht=S.get(kt),Ht===void 0&&(Ht=[],S.set(kt,Ht));const Ft=et.textures;if(Ht.length!==Ft.length||Ht[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,ee=Ft.length;Et<ee;Et++)Ht[Et]=o.COLOR_ATTACHMENT0+Et;Ht.length=Ft.length,Qt=!0}}else Ht[0]!==o.BACK&&(Ht[0]=o.BACK,Qt=!0);Qt&&o.drawBuffers(Ht)}function ve(et){return w!==et?(o.useProgram(et),w=et,!0):!1}const hn={[lo]:o.FUNC_ADD,[R1]:o.FUNC_SUBTRACT,[L1]:o.FUNC_REVERSE_SUBTRACT};hn[D1]=o.MIN,hn[P1]=o.MAX;const Ne={[U1]:o.ZERO,[N1]:o.ONE,[O1]:o.SRC_COLOR,[Qp]:o.SRC_ALPHA,[k1]:o.SRC_ALPHA_SATURATE,[F1]:o.DST_COLOR,[I1]:o.DST_ALPHA,[z1]:o.ONE_MINUS_SRC_COLOR,[$p]:o.ONE_MINUS_SRC_ALPHA,[H1]:o.ONE_MINUS_DST_COLOR,[B1]:o.ONE_MINUS_DST_ALPHA,[G1]:o.CONSTANT_COLOR,[V1]:o.ONE_MINUS_CONSTANT_COLOR,[W1]:o.CONSTANT_ALPHA,[j1]:o.ONE_MINUS_CONSTANT_ALPHA};function ze(et,kt,Ht,Qt,Ft,Et,ee,be,rn,je){if(et===Lr){N===!0&&(zt(o.BLEND),N=!1);return}if(N===!1&&(Lt(o.BLEND),N=!0),et!==C1){if(et!==A||je!==H){if((E!==lo||F!==lo)&&(o.blendEquation(o.FUNC_ADD),E=lo,F=lo),je)switch(et){case xl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vv:o.blendFunc(o.ONE,o.ONE);break;case Wv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case jv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:an("WebGLState: Invalid blending: ",et);break}else switch(et){case xl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Wv:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jv:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",et);break}P=null,B=null,X=null,V=null,j.set(0,0,0),D=0,A=et,H=je}return}Ft=Ft||kt,Et=Et||Ht,ee=ee||Qt,(kt!==E||Ft!==F)&&(o.blendEquationSeparate(hn[kt],hn[Ft]),E=kt,F=Ft),(Ht!==P||Qt!==B||Et!==X||ee!==V)&&(o.blendFuncSeparate(Ne[Ht],Ne[Qt],Ne[Et],Ne[ee]),P=Ht,B=Qt,X=Et,V=ee),(be.equals(j)===!1||rn!==D)&&(o.blendColor(be.r,be.g,be.b,rn),j.copy(be),D=rn),A=et,H=!1}function qe(et,kt){et.side===Cr?zt(o.CULL_FACE):Lt(o.CULL_FACE);let Ht=et.side===zi;kt&&(Ht=!Ht),Ee(Ht),et.blending===xl&&et.transparent===!1?ze(Lr):ze(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),p.setFunc(et.depthFunc),p.setTest(et.depthTest),p.setMask(et.depthWrite),f.setMask(et.colorWrite);const Qt=et.stencilWrite;_.setTest(Qt),Qt&&(_.setMask(et.stencilWriteMask),_.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),_.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),xn(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?Lt(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(et){vt!==et&&(et?o.frontFace(o.CW):o.frontFace(o.CCW),vt=et)}function gn(et){et!==T1?(Lt(o.CULL_FACE),et!==Z&&(et===Gv?o.cullFace(o.BACK):et===A1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),Z=et}function Q(et){et!==rt&&(G&&o.lineWidth(et),rt=et)}function xn(et,kt,Ht){et?(Lt(o.POLYGON_OFFSET_FILL),(ft!==kt||mt!==Ht)&&(ft=kt,mt=Ht,p.getReversed()&&(kt=-kt),o.polygonOffset(kt,Ht))):zt(o.POLYGON_OFFSET_FILL)}function Be(et){et?Lt(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function Ze(et){et===void 0&&(et=o.TEXTURE0+lt-1),At!==et&&(o.activeTexture(et),At=et)}function ce(et,kt,Ht){Ht===void 0&&(At===null?Ht=o.TEXTURE0+lt-1:Ht=At);let Qt=xt[Ht];Qt===void 0&&(Qt={type:void 0,texture:void 0},xt[Ht]=Qt),(Qt.type!==et||Qt.texture!==kt)&&(At!==Ht&&(o.activeTexture(Ht),At=Ht),o.bindTexture(et,kt||nt[et]),Qt.type=et,Qt.texture=kt)}function W(){const et=xt[At];et!==void 0&&et.type!==void 0&&(o.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(et){an("WebGLState:",et)}}function at(){try{o.compressedTexImage3D(...arguments)}catch(et){an("WebGLState:",et)}}function Ct(){try{o.texSubImage2D(...arguments)}catch(et){an("WebGLState:",et)}}function Nt(){try{o.texSubImage3D(...arguments)}catch(et){an("WebGLState:",et)}}function Tt(){try{o.compressedTexSubImage2D(...arguments)}catch(et){an("WebGLState:",et)}}function se(){try{o.compressedTexSubImage3D(...arguments)}catch(et){an("WebGLState:",et)}}function Gt(){try{o.texStorage2D(...arguments)}catch(et){an("WebGLState:",et)}}function pe(){try{o.texStorage3D(...arguments)}catch(et){an("WebGLState:",et)}}function xe(){try{o.texImage2D(...arguments)}catch(et){an("WebGLState:",et)}}function Bt(){try{o.texImage3D(...arguments)}catch(et){an("WebGLState:",et)}}function It(et){bt.equals(et)===!1&&(o.scissor(et.x,et.y,et.z,et.w),bt.copy(et))}function Jt(et){wt.equals(et)===!1&&(o.viewport(et.x,et.y,et.z,et.w),wt.copy(et))}function qt(et,kt){let Ht=v.get(kt);Ht===void 0&&(Ht=new WeakMap,v.set(kt,Ht));let Qt=Ht.get(et);Qt===void 0&&(Qt=o.getUniformBlockIndex(kt,et.name),Ht.set(et,Qt))}function Zt(et,kt){const Qt=v.get(kt).get(et);x.get(kt)!==Qt&&(o.uniformBlockBinding(kt,Qt,et.__bindingPointIndex),x.set(kt,Qt))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},At=null,xt={},b={},S=new WeakMap,C=[],w=null,N=!1,A=null,E=null,P=null,B=null,F=null,X=null,V=null,j=new Ke(0,0,0),D=0,H=!1,vt=null,Z=null,rt=null,ft=null,mt=null,bt.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),p.reset(),_.reset()}return{buffers:{color:f,depth:p,stencil:_},enable:Lt,disable:zt,bindFramebuffer:ae,drawBuffers:de,useProgram:ve,setBlending:ze,setMaterial:qe,setFlipSided:Ee,setCullFace:gn,setLineWidth:Q,setPolygonOffset:xn,setScissorTest:Be,activeTexture:Ze,bindTexture:ce,unbindTexture:W,compressedTexImage2D:R,compressedTexImage3D:at,texImage2D:xe,texImage3D:Bt,updateUBOMapping:qt,uniformBlockBinding:Zt,texStorage2D:Gt,texStorage3D:pe,texSubImage2D:Ct,texSubImage3D:Nt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:se,scissor:It,viewport:Jt,reset:we}}function wC(o,t,i,s,u,f,p){const _=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Je,y=new WeakMap;let b;const S=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(W,R){return C?new OffscreenCanvas(W,R):th("canvas")}function N(W,R,at){let Ct=1;const Nt=ce(W);if((Nt.width>at||Nt.height>at)&&(Ct=at/Math.max(Nt.width,Nt.height)),Ct<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){const Tt=Math.floor(Ct*Nt.width),se=Math.floor(Ct*Nt.height);b===void 0&&(b=w(Tt,se));const Gt=R?w(Tt,se):b;return Gt.width=Tt,Gt.height=se,Gt.getContext("2d").drawImage(W,0,0,Tt,se),Ae("WebGLRenderer: Texture has been resized from ("+Nt.width+"x"+Nt.height+") to ("+Tt+"x"+se+")."),Gt}else return"data"in W&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Nt.width+"x"+Nt.height+")."),W;return W}function A(W){return W.generateMipmaps}function E(W){o.generateMipmap(W)}function P(W){return W.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?o.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function B(W,R,at,Ct,Nt=!1){if(W!==null){if(o[W]!==void 0)return o[W];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let Tt=R;if(R===o.RED&&(at===o.FLOAT&&(Tt=o.R32F),at===o.HALF_FLOAT&&(Tt=o.R16F),at===o.UNSIGNED_BYTE&&(Tt=o.R8)),R===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(Tt=o.R8UI),at===o.UNSIGNED_SHORT&&(Tt=o.R16UI),at===o.UNSIGNED_INT&&(Tt=o.R32UI),at===o.BYTE&&(Tt=o.R8I),at===o.SHORT&&(Tt=o.R16I),at===o.INT&&(Tt=o.R32I)),R===o.RG&&(at===o.FLOAT&&(Tt=o.RG32F),at===o.HALF_FLOAT&&(Tt=o.RG16F),at===o.UNSIGNED_BYTE&&(Tt=o.RG8)),R===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(Tt=o.RG8UI),at===o.UNSIGNED_SHORT&&(Tt=o.RG16UI),at===o.UNSIGNED_INT&&(Tt=o.RG32UI),at===o.BYTE&&(Tt=o.RG8I),at===o.SHORT&&(Tt=o.RG16I),at===o.INT&&(Tt=o.RG32I)),R===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(Tt=o.RGB8UI),at===o.UNSIGNED_SHORT&&(Tt=o.RGB16UI),at===o.UNSIGNED_INT&&(Tt=o.RGB32UI),at===o.BYTE&&(Tt=o.RGB8I),at===o.SHORT&&(Tt=o.RGB16I),at===o.INT&&(Tt=o.RGB32I)),R===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(Tt=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(Tt=o.RGBA16UI),at===o.UNSIGNED_INT&&(Tt=o.RGBA32UI),at===o.BYTE&&(Tt=o.RGBA8I),at===o.SHORT&&(Tt=o.RGBA16I),at===o.INT&&(Tt=o.RGBA32I)),R===o.RGB&&(at===o.UNSIGNED_INT_5_9_9_9_REV&&(Tt=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(Tt=o.R11F_G11F_B10F)),R===o.RGBA){const se=Nt?$f:Qe.getTransfer(Ct);at===o.FLOAT&&(Tt=o.RGBA32F),at===o.HALF_FLOAT&&(Tt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(Tt=se===fn?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(Tt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(Tt=o.RGB5_A1)}return(Tt===o.R16F||Tt===o.R32F||Tt===o.RG16F||Tt===o.RG32F||Tt===o.RGBA16F||Tt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Tt}function F(W,R){let at;return W?R===null||R===$a||R===Hc?at=o.DEPTH24_STENCIL8:R===Ya?at=o.DEPTH32F_STENCIL8:R===Fc&&(at=o.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===$a||R===Hc?at=o.DEPTH_COMPONENT24:R===Ya?at=o.DEPTH_COMPONENT32F:R===Fc&&(at=o.DEPTH_COMPONENT16),at}function X(W,R){return A(W)===!0||W.isFramebufferTexture&&W.minFilter!==oi&&W.minFilter!==pi?Math.log2(Math.max(R.width,R.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?R.mipmaps.length:1}function V(W){const R=W.target;R.removeEventListener("dispose",V),D(R),R.isVideoTexture&&y.delete(R)}function j(W){const R=W.target;R.removeEventListener("dispose",j),vt(R)}function D(W){const R=s.get(W);if(R.__webglInit===void 0)return;const at=W.source,Ct=S.get(at);if(Ct){const Nt=Ct[R.__cacheKey];Nt.usedTimes--,Nt.usedTimes===0&&H(W),Object.keys(Ct).length===0&&S.delete(at)}s.remove(W)}function H(W){const R=s.get(W);o.deleteTexture(R.__webglTexture);const at=W.source,Ct=S.get(at);delete Ct[R.__cacheKey],p.memory.textures--}function vt(W){const R=s.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),s.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let Ct=0;Ct<6;Ct++){if(Array.isArray(R.__webglFramebuffer[Ct]))for(let Nt=0;Nt<R.__webglFramebuffer[Ct].length;Nt++)o.deleteFramebuffer(R.__webglFramebuffer[Ct][Nt]);else o.deleteFramebuffer(R.__webglFramebuffer[Ct]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[Ct])}else{if(Array.isArray(R.__webglFramebuffer))for(let Ct=0;Ct<R.__webglFramebuffer.length;Ct++)o.deleteFramebuffer(R.__webglFramebuffer[Ct]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Ct=0;Ct<R.__webglColorRenderbuffer.length;Ct++)R.__webglColorRenderbuffer[Ct]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[Ct]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const at=W.textures;for(let Ct=0,Nt=at.length;Ct<Nt;Ct++){const Tt=s.get(at[Ct]);Tt.__webglTexture&&(o.deleteTexture(Tt.__webglTexture),p.memory.textures--),s.remove(at[Ct])}s.remove(W)}let Z=0;function rt(){Z=0}function ft(){const W=Z;return W>=u.maxTextures&&Ae("WebGLTextures: Trying to use "+W+" texture units while this GPU supports only "+u.maxTextures),Z+=1,W}function mt(W){const R=[];return R.push(W.wrapS),R.push(W.wrapT),R.push(W.wrapR||0),R.push(W.magFilter),R.push(W.minFilter),R.push(W.anisotropy),R.push(W.internalFormat),R.push(W.format),R.push(W.type),R.push(W.generateMipmaps),R.push(W.premultiplyAlpha),R.push(W.flipY),R.push(W.unpackAlignment),R.push(W.colorSpace),R.join()}function lt(W,R){const at=s.get(W);if(W.isVideoTexture&&Be(W),W.isRenderTargetTexture===!1&&W.isExternalTexture!==!0&&W.version>0&&at.__version!==W.version){const Ct=W.image;if(Ct===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Ct.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(at,W,R);return}}else W.isExternalTexture&&(at.__webglTexture=W.sourceTexture?W.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+R)}function G(W,R){const at=s.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&at.__version!==W.version){nt(at,W,R);return}else W.isExternalTexture&&(at.__webglTexture=W.sourceTexture?W.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+R)}function q(W,R){const at=s.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&at.__version!==W.version){nt(at,W,R);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+R)}function it(W,R){const at=s.get(W);if(W.isCubeDepthTexture!==!0&&W.version>0&&at.__version!==W.version){Lt(at,W,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+R)}const At={[om]:o.REPEAT,[Rr]:o.CLAMP_TO_EDGE,[lm]:o.MIRRORED_REPEAT},xt={[oi]:o.NEAREST,[Z1]:o.NEAREST_MIPMAP_NEAREST,[gf]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[dp]:o.LINEAR_MIPMAP_NEAREST,[fo]:o.LINEAR_MIPMAP_LINEAR},I={[J1]:o.NEVER,[nE]:o.ALWAYS,[Q1]:o.LESS,[d_]:o.LEQUAL,[$1]:o.EQUAL,[p_]:o.GEQUAL,[tE]:o.GREATER,[eE]:o.NOTEQUAL};function K(W,R){if(R.type===Ya&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===pi||R.magFilter===dp||R.magFilter===gf||R.magFilter===fo||R.minFilter===pi||R.minFilter===dp||R.minFilter===gf||R.minFilter===fo)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(W,o.TEXTURE_WRAP_S,At[R.wrapS]),o.texParameteri(W,o.TEXTURE_WRAP_T,At[R.wrapT]),(W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY)&&o.texParameteri(W,o.TEXTURE_WRAP_R,At[R.wrapR]),o.texParameteri(W,o.TEXTURE_MAG_FILTER,xt[R.magFilter]),o.texParameteri(W,o.TEXTURE_MIN_FILTER,xt[R.minFilter]),R.compareFunction&&(o.texParameteri(W,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(W,o.TEXTURE_COMPARE_FUNC,I[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===oi||R.minFilter!==gf&&R.minFilter!==fo||R.type===Ya&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(W,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,u.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function bt(W,R){let at=!1;W.__webglInit===void 0&&(W.__webglInit=!0,R.addEventListener("dispose",V));const Ct=R.source;let Nt=S.get(Ct);Nt===void 0&&(Nt={},S.set(Ct,Nt));const Tt=mt(R);if(Tt!==W.__cacheKey){Nt[Tt]===void 0&&(Nt[Tt]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,at=!0),Nt[Tt].usedTimes++;const se=Nt[W.__cacheKey];se!==void 0&&(Nt[W.__cacheKey].usedTimes--,se.usedTimes===0&&H(R)),W.__cacheKey=Tt,W.__webglTexture=Nt[Tt].texture}return at}function wt(W,R,at){return Math.floor(Math.floor(W/at)/R)}function Ot(W,R,at,Ct){const Tt=W.updateRanges;if(Tt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,at,Ct,R.data);else{Tt.sort((Bt,It)=>Bt.start-It.start);let se=0;for(let Bt=1;Bt<Tt.length;Bt++){const It=Tt[se],Jt=Tt[Bt],qt=It.start+It.count,Zt=wt(Jt.start,R.width,4),we=wt(It.start,R.width,4);Jt.start<=qt+1&&Zt===we&&wt(Jt.start+Jt.count-1,R.width,4)===Zt?It.count=Math.max(It.count,Jt.start+Jt.count-It.start):(++se,Tt[se]=Jt)}Tt.length=se+1;const Gt=o.getParameter(o.UNPACK_ROW_LENGTH),pe=o.getParameter(o.UNPACK_SKIP_PIXELS),xe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Bt=0,It=Tt.length;Bt<It;Bt++){const Jt=Tt[Bt],qt=Math.floor(Jt.start/4),Zt=Math.ceil(Jt.count/4),we=qt%R.width,et=Math.floor(qt/R.width),kt=Zt,Ht=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,we),o.pixelStorei(o.UNPACK_SKIP_ROWS,et),i.texSubImage2D(o.TEXTURE_2D,0,we,et,kt,Ht,at,Ct,R.data)}W.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Gt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),o.pixelStorei(o.UNPACK_SKIP_ROWS,xe)}}function nt(W,R,at){let Ct=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Ct=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Ct=o.TEXTURE_3D);const Nt=bt(W,R),Tt=R.source;i.bindTexture(Ct,W.__webglTexture,o.TEXTURE0+at);const se=s.get(Tt);if(Tt.version!==se.__version||Nt===!0){i.activeTexture(o.TEXTURE0+at);const Gt=Qe.getPrimaries(Qe.workingColorSpace),pe=R.colorSpace===xs?null:Qe.getPrimaries(R.colorSpace),xe=R.colorSpace===xs||Gt===pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Bt=N(R.image,!1,u.maxTextureSize);Bt=Ze(R,Bt);const It=f.convert(R.format,R.colorSpace),Jt=f.convert(R.type);let qt=B(R.internalFormat,It,Jt,R.colorSpace,R.isVideoTexture);K(Ct,R);let Zt;const we=R.mipmaps,et=R.isVideoTexture!==!0,kt=se.__version===void 0||Nt===!0,Ht=Tt.dataReady,Qt=X(R,Bt);if(R.isDepthTexture)qt=F(R.format===ho,R.type),kt&&(et?i.texStorage2D(o.TEXTURE_2D,1,qt,Bt.width,Bt.height):i.texImage2D(o.TEXTURE_2D,0,qt,Bt.width,Bt.height,0,It,Jt,null));else if(R.isDataTexture)if(we.length>0){et&&kt&&i.texStorage2D(o.TEXTURE_2D,Qt,qt,we[0].width,we[0].height);for(let Ft=0,Et=we.length;Ft<Et;Ft++)Zt=we[Ft],et?Ht&&i.texSubImage2D(o.TEXTURE_2D,Ft,0,0,Zt.width,Zt.height,It,Jt,Zt.data):i.texImage2D(o.TEXTURE_2D,Ft,qt,Zt.width,Zt.height,0,It,Jt,Zt.data);R.generateMipmaps=!1}else et?(kt&&i.texStorage2D(o.TEXTURE_2D,Qt,qt,Bt.width,Bt.height),Ht&&Ot(R,Bt,It,Jt)):i.texImage2D(o.TEXTURE_2D,0,qt,Bt.width,Bt.height,0,It,Jt,Bt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){et&&kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,qt,we[0].width,we[0].height,Bt.depth);for(let Ft=0,Et=we.length;Ft<Et;Ft++)if(Zt=we[Ft],R.format!==Ra)if(It!==null)if(et){if(Ht)if(R.layerUpdates.size>0){const ee=vx(Zt.width,Zt.height,R.format,R.type);for(const be of R.layerUpdates){const rn=Zt.data.subarray(be*ee/Zt.data.BYTES_PER_ELEMENT,(be+1)*ee/Zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ft,0,0,be,Zt.width,Zt.height,1,It,rn)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ft,0,0,0,Zt.width,Zt.height,Bt.depth,It,Zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ft,qt,Zt.width,Zt.height,Bt.depth,0,Zt.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Ht&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ft,0,0,0,Zt.width,Zt.height,Bt.depth,It,Jt,Zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ft,qt,Zt.width,Zt.height,Bt.depth,0,It,Jt,Zt.data)}else{et&&kt&&i.texStorage2D(o.TEXTURE_2D,Qt,qt,we[0].width,we[0].height);for(let Ft=0,Et=we.length;Ft<Et;Ft++)Zt=we[Ft],R.format!==Ra?It!==null?et?Ht&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ft,0,0,Zt.width,Zt.height,It,Zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ft,qt,Zt.width,Zt.height,0,Zt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Ht&&i.texSubImage2D(o.TEXTURE_2D,Ft,0,0,Zt.width,Zt.height,It,Jt,Zt.data):i.texImage2D(o.TEXTURE_2D,Ft,qt,Zt.width,Zt.height,0,It,Jt,Zt.data)}else if(R.isDataArrayTexture)if(et){if(kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,qt,Bt.width,Bt.height,Bt.depth),Ht)if(R.layerUpdates.size>0){const Ft=vx(Bt.width,Bt.height,R.format,R.type);for(const Et of R.layerUpdates){const ee=Bt.data.subarray(Et*Ft/Bt.data.BYTES_PER_ELEMENT,(Et+1)*Ft/Bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Et,Bt.width,Bt.height,1,It,Jt,ee)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Bt.width,Bt.height,Bt.depth,It,Jt,Bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,Bt.width,Bt.height,Bt.depth,0,It,Jt,Bt.data);else if(R.isData3DTexture)et?(kt&&i.texStorage3D(o.TEXTURE_3D,Qt,qt,Bt.width,Bt.height,Bt.depth),Ht&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Bt.width,Bt.height,Bt.depth,It,Jt,Bt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,Bt.width,Bt.height,Bt.depth,0,It,Jt,Bt.data);else if(R.isFramebufferTexture){if(kt)if(et)i.texStorage2D(o.TEXTURE_2D,Qt,qt,Bt.width,Bt.height);else{let Ft=Bt.width,Et=Bt.height;for(let ee=0;ee<Qt;ee++)i.texImage2D(o.TEXTURE_2D,ee,qt,Ft,Et,0,It,Jt,null),Ft>>=1,Et>>=1}}else if(we.length>0){if(et&&kt){const Ft=ce(we[0]);i.texStorage2D(o.TEXTURE_2D,Qt,qt,Ft.width,Ft.height)}for(let Ft=0,Et=we.length;Ft<Et;Ft++)Zt=we[Ft],et?Ht&&i.texSubImage2D(o.TEXTURE_2D,Ft,0,0,It,Jt,Zt):i.texImage2D(o.TEXTURE_2D,Ft,qt,It,Jt,Zt);R.generateMipmaps=!1}else if(et){if(kt){const Ft=ce(Bt);i.texStorage2D(o.TEXTURE_2D,Qt,qt,Ft.width,Ft.height)}Ht&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,Jt,Bt)}else i.texImage2D(o.TEXTURE_2D,0,qt,It,Jt,Bt);A(R)&&E(Ct),se.__version=Tt.version,R.onUpdate&&R.onUpdate(R)}W.__version=R.version}function Lt(W,R,at){if(R.image.length!==6)return;const Ct=bt(W,R),Nt=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+at);const Tt=s.get(Nt);if(Nt.version!==Tt.__version||Ct===!0){i.activeTexture(o.TEXTURE0+at);const se=Qe.getPrimaries(Qe.workingColorSpace),Gt=R.colorSpace===xs?null:Qe.getPrimaries(R.colorSpace),pe=R.colorSpace===xs||se===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const xe=R.isCompressedTexture||R.image[0].isCompressedTexture,Bt=R.image[0]&&R.image[0].isDataTexture,It=[];for(let Et=0;Et<6;Et++)!xe&&!Bt?It[Et]=N(R.image[Et],!0,u.maxCubemapSize):It[Et]=Bt?R.image[Et].image:R.image[Et],It[Et]=Ze(R,It[Et]);const Jt=It[0],qt=f.convert(R.format,R.colorSpace),Zt=f.convert(R.type),we=B(R.internalFormat,qt,Zt,R.colorSpace),et=R.isVideoTexture!==!0,kt=Tt.__version===void 0||Ct===!0,Ht=Nt.dataReady;let Qt=X(R,Jt);K(o.TEXTURE_CUBE_MAP,R);let Ft;if(xe){et&&kt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,we,Jt.width,Jt.height);for(let Et=0;Et<6;Et++){Ft=It[Et].mipmaps;for(let ee=0;ee<Ft.length;ee++){const be=Ft[ee];R.format!==Ra?qt!==null?et?Ht&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee,0,0,be.width,be.height,qt,be.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee,we,be.width,be.height,0,be.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?Ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee,0,0,be.width,be.height,qt,Zt,be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee,we,be.width,be.height,0,qt,Zt,be.data)}}}else{if(Ft=R.mipmaps,et&&kt){Ft.length>0&&Qt++;const Et=ce(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,we,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Bt){et?Ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,It[Et].width,It[Et].height,qt,Zt,It[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,we,It[Et].width,It[Et].height,0,qt,Zt,It[Et].data);for(let ee=0;ee<Ft.length;ee++){const rn=Ft[ee].image[Et].image;et?Ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee+1,0,0,rn.width,rn.height,qt,Zt,rn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee+1,we,rn.width,rn.height,0,qt,Zt,rn.data)}}else{et?Ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,qt,Zt,It[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,we,qt,Zt,It[Et]);for(let ee=0;ee<Ft.length;ee++){const be=Ft[ee];et?Ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee+1,0,0,qt,Zt,be.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ee+1,we,qt,Zt,be.image[Et])}}}A(R)&&E(o.TEXTURE_CUBE_MAP),Tt.__version=Nt.version,R.onUpdate&&R.onUpdate(R)}W.__version=R.version}function zt(W,R,at,Ct,Nt,Tt){const se=f.convert(at.format,at.colorSpace),Gt=f.convert(at.type),pe=B(at.internalFormat,se,Gt,at.colorSpace),xe=s.get(R),Bt=s.get(at);if(Bt.__renderTarget=R,!xe.__hasExternalTextures){const It=Math.max(1,R.width>>Tt),Jt=Math.max(1,R.height>>Tt);Nt===o.TEXTURE_3D||Nt===o.TEXTURE_2D_ARRAY?i.texImage3D(Nt,Tt,pe,It,Jt,R.depth,0,se,Gt,null):i.texImage2D(Nt,Tt,pe,It,Jt,0,se,Gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,W),xn(R)?_.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ct,Nt,Bt.__webglTexture,0,Q(R)):(Nt===o.TEXTURE_2D||Nt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Nt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Ct,Nt,Bt.__webglTexture,Tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(W,R,at){if(o.bindRenderbuffer(o.RENDERBUFFER,W),R.depthBuffer){const Ct=R.depthTexture,Nt=Ct&&Ct.isDepthTexture?Ct.type:null,Tt=F(R.stencilBuffer,Nt),se=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;xn(R)?_.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Q(R),Tt,R.width,R.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Q(R),Tt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,se,o.RENDERBUFFER,W)}else{const Ct=R.textures;for(let Nt=0;Nt<Ct.length;Nt++){const Tt=Ct[Nt],se=f.convert(Tt.format,Tt.colorSpace),Gt=f.convert(Tt.type),pe=B(Tt.internalFormat,se,Gt,Tt.colorSpace);xn(R)?_.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Q(R),pe,R.width,R.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Q(R),pe,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,pe,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function de(W,R,at){const Ct=R.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,W),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Nt=s.get(R.depthTexture);if(Nt.__renderTarget=R,(!Nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Ct){if(Nt.__webglInit===void 0&&(Nt.__webglInit=!0,R.depthTexture.addEventListener("dispose",V)),Nt.__webglTexture===void 0){Nt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Nt.__webglTexture),K(o.TEXTURE_CUBE_MAP,R.depthTexture);const xe=f.convert(R.depthTexture.format),Bt=f.convert(R.depthTexture.type);let It;R.depthTexture.format===Ur?It=o.DEPTH_COMPONENT24:R.depthTexture.format===ho&&(It=o.DEPTH24_STENCIL8);for(let Jt=0;Jt<6;Jt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,0,It,R.width,R.height,0,xe,Bt,null)}}else lt(R.depthTexture,0);const Tt=Nt.__webglTexture,se=Q(R),Gt=Ct?o.TEXTURE_CUBE_MAP_POSITIVE_X+at:o.TEXTURE_2D,pe=R.depthTexture.format===ho?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(R.depthTexture.format===Ur)xn(R)?_.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Gt,Tt,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,pe,Gt,Tt,0);else if(R.depthTexture.format===ho)xn(R)?_.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Gt,Tt,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,pe,Gt,Tt,0);else throw new Error("Unknown depthTexture format")}function ve(W){const R=s.get(W),at=W.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==W.depthTexture){const Ct=W.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Ct){const Nt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Ct.removeEventListener("dispose",Nt)};Ct.addEventListener("dispose",Nt),R.__depthDisposeCallback=Nt}R.__boundDepthTexture=Ct}if(W.depthTexture&&!R.__autoAllocateDepthBuffer)if(at)for(let Ct=0;Ct<6;Ct++)de(R.__webglFramebuffer[Ct],W,Ct);else{const Ct=W.texture.mipmaps;Ct&&Ct.length>0?de(R.__webglFramebuffer[0],W,0):de(R.__webglFramebuffer,W,0)}else if(at){R.__webglDepthbuffer=[];for(let Ct=0;Ct<6;Ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[Ct]),R.__webglDepthbuffer[Ct]===void 0)R.__webglDepthbuffer[Ct]=o.createRenderbuffer(),ae(R.__webglDepthbuffer[Ct],W,!1);else{const Nt=W.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=R.__webglDepthbuffer[Ct];o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,Tt)}}else{const Ct=W.texture.mipmaps;if(Ct&&Ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),ae(R.__webglDepthbuffer,W,!1);else{const Nt=W.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,Tt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function hn(W,R,at){const Ct=s.get(W);R!==void 0&&zt(Ct.__webglFramebuffer,W,W.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&ve(W)}function Ne(W){const R=W.texture,at=s.get(W),Ct=s.get(R);W.addEventListener("dispose",j);const Nt=W.textures,Tt=W.isWebGLCubeRenderTarget===!0,se=Nt.length>1;if(se||(Ct.__webglTexture===void 0&&(Ct.__webglTexture=o.createTexture()),Ct.__version=R.version,p.memory.textures++),Tt){at.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer[Gt]=[];for(let pe=0;pe<R.mipmaps.length;pe++)at.__webglFramebuffer[Gt][pe]=o.createFramebuffer()}else at.__webglFramebuffer[Gt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer=[];for(let Gt=0;Gt<R.mipmaps.length;Gt++)at.__webglFramebuffer[Gt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(se)for(let Gt=0,pe=Nt.length;Gt<pe;Gt++){const xe=s.get(Nt[Gt]);xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture(),p.memory.textures++)}if(W.samples>0&&xn(W)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Nt.length;Gt++){const pe=Nt[Gt];at.__webglColorRenderbuffer[Gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Gt]);const xe=f.convert(pe.format,pe.colorSpace),Bt=f.convert(pe.type),It=B(pe.internalFormat,xe,Bt,pe.colorSpace,W.isXRRenderTarget===!0),Jt=Q(W);o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,It,W.width,W.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Gt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),W.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),ae(at.__webglDepthRenderbuffer,W,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Tt){i.bindTexture(o.TEXTURE_CUBE_MAP,Ct.__webglTexture),K(o.TEXTURE_CUBE_MAP,R);for(let Gt=0;Gt<6;Gt++)if(R.mipmaps&&R.mipmaps.length>0)for(let pe=0;pe<R.mipmaps.length;pe++)zt(at.__webglFramebuffer[Gt][pe],W,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,pe);else zt(at.__webglFramebuffer[Gt],W,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);A(R)&&E(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(se){for(let Gt=0,pe=Nt.length;Gt<pe;Gt++){const xe=Nt[Gt],Bt=s.get(xe);let It=o.TEXTURE_2D;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(It=W.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,Bt.__webglTexture),K(It,xe),zt(at.__webglFramebuffer,W,xe,o.COLOR_ATTACHMENT0+Gt,It,0),A(xe)&&E(It)}i.unbindTexture()}else{let Gt=o.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(Gt=W.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Gt,Ct.__webglTexture),K(Gt,R),R.mipmaps&&R.mipmaps.length>0)for(let pe=0;pe<R.mipmaps.length;pe++)zt(at.__webglFramebuffer[pe],W,R,o.COLOR_ATTACHMENT0,Gt,pe);else zt(at.__webglFramebuffer,W,R,o.COLOR_ATTACHMENT0,Gt,0);A(R)&&E(Gt),i.unbindTexture()}W.depthBuffer&&ve(W)}function ze(W){const R=W.textures;for(let at=0,Ct=R.length;at<Ct;at++){const Nt=R[at];if(A(Nt)){const Tt=P(W),se=s.get(Nt).__webglTexture;i.bindTexture(Tt,se),E(Tt),i.unbindTexture()}}}const qe=[],Ee=[];function gn(W){if(W.samples>0){if(xn(W)===!1){const R=W.textures,at=W.width,Ct=W.height;let Nt=o.COLOR_BUFFER_BIT;const Tt=W.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,se=s.get(W),Gt=R.length>1;if(Gt)for(let xe=0;xe<R.length;xe++)i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,se.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const pe=W.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let xe=0;xe<R.length;xe++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(Nt|=o.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(Nt|=o.STENCIL_BUFFER_BIT)),Gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const Bt=s.get(R[xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Bt,0)}o.blitFramebuffer(0,0,at,Ct,0,0,at,Ct,Nt,o.NEAREST),x===!0&&(qe.length=0,Ee.length=0,qe.push(o.COLOR_ATTACHMENT0+xe),W.depthBuffer&&W.resolveDepthBuffer===!1&&(qe.push(Tt),Ee.push(Tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Gt)for(let xe=0;xe<R.length;xe++){i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const Bt=s.get(R[xe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,se.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.TEXTURE_2D,Bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.resolveDepthBuffer===!1&&x){const R=W.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Q(W){return Math.min(u.maxSamples,W.samples)}function xn(W){const R=s.get(W);return W.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Be(W){const R=p.render.frame;y.get(W)!==R&&(y.set(W,R),W.update())}function Ze(W,R){const at=W.colorSpace,Ct=W.format,Nt=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||at!==Tl&&at!==xs&&(Qe.getTransfer(at)===fn?(Ct!==Ra||Nt!==Qi)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",at)),R}function ce(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(v.width=W.naturalWidth||W.width,v.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(v.width=W.displayWidth,v.height=W.displayHeight):(v.width=W.width,v.height=W.height),v}this.allocateTextureUnit=ft,this.resetTextureUnits=rt,this.setTexture2D=lt,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=it,this.rebindTextures=hn,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=xn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function CC(o,t){function i(s,u=xs){let f;const p=Qe.getTransfer(u);if(s===Qi)return o.UNSIGNED_BYTE;if(s===l_)return o.UNSIGNED_SHORT_4_4_4_4;if(s===c_)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Uy)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ny)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Dy)return o.BYTE;if(s===Py)return o.SHORT;if(s===Fc)return o.UNSIGNED_SHORT;if(s===o_)return o.INT;if(s===$a)return o.UNSIGNED_INT;if(s===Ya)return o.FLOAT;if(s===Pr)return o.HALF_FLOAT;if(s===Oy)return o.ALPHA;if(s===zy)return o.RGB;if(s===Ra)return o.RGBA;if(s===Ur)return o.DEPTH_COMPONENT;if(s===ho)return o.DEPTH_STENCIL;if(s===Iy)return o.RED;if(s===u_)return o.RED_INTEGER;if(s===El)return o.RG;if(s===f_)return o.RG_INTEGER;if(s===h_)return o.RGBA_INTEGER;if(s===qf||s===Zf||s===Yf||s===Kf)if(p===fn)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===qf)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zf)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yf)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kf)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===qf)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zf)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yf)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kf)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cm||s===um||s===fm||s===hm)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===cm)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===um)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fm)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hm)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dm||s===pm||s===mm||s===_m||s===gm||s===vm||s===xm)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===dm||s===pm)return p===fn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===mm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===_m)return f.COMPRESSED_R11_EAC;if(s===gm)return f.COMPRESSED_SIGNED_R11_EAC;if(s===vm)return f.COMPRESSED_RG11_EAC;if(s===xm)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ym||s===Sm||s===bm||s===Mm||s===Em||s===Tm||s===Am||s===wm||s===Cm||s===Rm||s===Lm||s===Dm||s===Pm||s===Um)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===ym)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Em)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Am)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pm)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Um)return p===fn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nm||s===Om||s===zm)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Nm)return p===fn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Om)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zm)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Im||s===Bm||s===Fm||s===Hm)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Im)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Bm)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fm)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hm)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hc?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const RC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Yy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new nr({vertexShader:RC,fragmentShader:LC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new er(new ch(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PC extends Rl{constructor(t,i){super();const s=this;let u=null,f=1,p=null,_="local-floor",x=1,v=null,y=null,b=null,S=null,C=null,w=null;const N=typeof XRWebGLBinding<"u",A=new DC,E={},P=i.getContextAttributes();let B=null,F=null;const X=[],V=[],j=new Je;let D=null;const H=new Ji;H.viewport=new Un;const vt=new Ji;vt.viewport=new Un;const Z=[H,vt],rt=new WE;let ft=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Lt=X[nt];return Lt===void 0&&(Lt=new Sp,X[nt]=Lt),Lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let Lt=X[nt];return Lt===void 0&&(Lt=new Sp,X[nt]=Lt),Lt.getGripSpace()},this.getHand=function(nt){let Lt=X[nt];return Lt===void 0&&(Lt=new Sp,X[nt]=Lt),Lt.getHandSpace()};function lt(nt){const Lt=V.indexOf(nt.inputSource);if(Lt===-1)return;const zt=X[Lt];zt!==void 0&&(zt.update(nt.inputSource,nt.frame,v||p),zt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function G(){u.removeEventListener("select",lt),u.removeEventListener("selectstart",lt),u.removeEventListener("selectend",lt),u.removeEventListener("squeeze",lt),u.removeEventListener("squeezestart",lt),u.removeEventListener("squeezeend",lt),u.removeEventListener("end",G),u.removeEventListener("inputsourceschange",q);for(let nt=0;nt<X.length;nt++){const Lt=V[nt];Lt!==null&&(V[nt]=null,X[nt].disconnect(Lt))}ft=null,mt=null,A.reset();for(const nt in E)delete E[nt];t.setRenderTarget(B),C=null,S=null,b=null,u=null,F=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(D),t.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){f=nt,s.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){_=nt,s.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||p},this.setReferenceSpace=function(nt){v=nt},this.getBaseLayer=function(){return S!==null?S:C},this.getBinding=function(){return b===null&&N&&(b=new XRWebGLBinding(u,i)),b},this.getFrame=function(){return w},this.getSession=function(){return u},this.setSession=async function(nt){if(u=nt,u!==null){if(B=t.getRenderTarget(),u.addEventListener("select",lt),u.addEventListener("selectstart",lt),u.addEventListener("selectend",lt),u.addEventListener("squeeze",lt),u.addEventListener("squeezestart",lt),u.addEventListener("squeezeend",lt),u.addEventListener("end",G),u.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await i.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(j),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,ae=null,de=null;P.depth&&(de=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,zt=P.stencil?ho:Ur,ae=P.stencil?Hc:$a);const ve={colorFormat:i.RGBA8,depthFormat:de,scaleFactor:f};b=this.getBinding(),S=b.createProjectionLayer(ve),u.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),F=new Qa(S.textureWidth,S.textureHeight,{format:Ra,type:Qi,depthTexture:new Gc(S.textureWidth,S.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const zt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};C=new XRWebGLLayer(u,i,zt),u.updateRenderState({baseLayer:C}),t.setPixelRatio(1),t.setSize(C.framebufferWidth,C.framebufferHeight,!1),F=new Qa(C.framebufferWidth,C.framebufferHeight,{format:Ra,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:C.ignoreDepthValues===!1,resolveStencilBuffer:C.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(x),v=null,p=await u.requestReferenceSpace(_),Ot.setContext(u),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function q(nt){for(let Lt=0;Lt<nt.removed.length;Lt++){const zt=nt.removed[Lt],ae=V.indexOf(zt);ae>=0&&(V[ae]=null,X[ae].disconnect(zt))}for(let Lt=0;Lt<nt.added.length;Lt++){const zt=nt.added[Lt];let ae=V.indexOf(zt);if(ae===-1){for(let ve=0;ve<X.length;ve++)if(ve>=V.length){V.push(zt),ae=ve;break}else if(V[ve]===null){V[ve]=zt,ae=ve;break}if(ae===-1)break}const de=X[ae];de&&de.connect(zt)}}const it=new dt,At=new dt;function xt(nt,Lt,zt){it.setFromMatrixPosition(Lt.matrixWorld),At.setFromMatrixPosition(zt.matrixWorld);const ae=it.distanceTo(At),de=Lt.projectionMatrix.elements,ve=zt.projectionMatrix.elements,hn=de[14]/(de[10]-1),Ne=de[14]/(de[10]+1),ze=(de[9]+1)/de[5],qe=(de[9]-1)/de[5],Ee=(de[8]-1)/de[0],gn=(ve[8]+1)/ve[0],Q=hn*Ee,xn=hn*gn,Be=ae/(-Ee+gn),Ze=Be*-Ee;if(Lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ze),nt.translateZ(Be),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),de[10]===-1)nt.projectionMatrix.copy(Lt.projectionMatrix),nt.projectionMatrixInverse.copy(Lt.projectionMatrixInverse);else{const ce=hn+Be,W=Ne+Be,R=Q-Ze,at=xn+(ae-Ze),Ct=ze*Ne/W*ce,Nt=qe*Ne/W*ce;nt.projectionMatrix.makePerspective(R,at,Ct,Nt,ce,W),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function I(nt,Lt){Lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(u===null)return;let Lt=nt.near,zt=nt.far;A.texture!==null&&(A.depthNear>0&&(Lt=A.depthNear),A.depthFar>0&&(zt=A.depthFar)),rt.near=vt.near=H.near=Lt,rt.far=vt.far=H.far=zt,(ft!==rt.near||mt!==rt.far)&&(u.updateRenderState({depthNear:rt.near,depthFar:rt.far}),ft=rt.near,mt=rt.far),rt.layers.mask=nt.layers.mask|6,H.layers.mask=rt.layers.mask&-5,vt.layers.mask=rt.layers.mask&-3;const ae=nt.parent,de=rt.cameras;I(rt,ae);for(let ve=0;ve<de.length;ve++)I(de[ve],ae);de.length===2?xt(rt,H,vt):rt.projectionMatrix.copy(H.projectionMatrix),K(nt,rt,ae)};function K(nt,Lt,zt){zt===null?nt.matrix.copy(Lt.matrixWorld):(nt.matrix.copy(zt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Lt.projectionMatrix),nt.projectionMatrixInverse.copy(Lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=km*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(S===null&&C===null))return x},this.setFoveation=function(nt){x=nt,S!==null&&(S.fixedFoveation=nt),C!==null&&C.fixedFoveation!==void 0&&(C.fixedFoveation=nt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(rt)},this.getCameraTexture=function(nt){return E[nt]};let bt=null;function wt(nt,Lt){if(y=Lt.getViewerPose(v||p),w=Lt,y!==null){const zt=y.views;C!==null&&(t.setRenderTargetFramebuffer(F,C.framebuffer),t.setRenderTarget(F));let ae=!1;zt.length!==rt.cameras.length&&(rt.cameras.length=0,ae=!0);for(let Ne=0;Ne<zt.length;Ne++){const ze=zt[Ne];let qe=null;if(C!==null)qe=C.getViewport(ze);else{const gn=b.getViewSubImage(S,ze);qe=gn.viewport,Ne===0&&(t.setRenderTargetTextures(F,gn.colorTexture,gn.depthStencilTexture),t.setRenderTarget(F))}let Ee=Z[Ne];Ee===void 0&&(Ee=new Ji,Ee.layers.enable(Ne),Ee.viewport=new Un,Z[Ne]=Ee),Ee.matrix.fromArray(ze.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ze.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(qe.x,qe.y,qe.width,qe.height),Ne===0&&(rt.matrix.copy(Ee.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),ae===!0&&rt.cameras.push(Ee)}const de=u.enabledFeatures;if(de&&de.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&N){b=s.getBinding();const Ne=b.getDepthInformation(zt[0]);Ne&&Ne.isValid&&Ne.texture&&A.init(Ne,u.renderState)}if(de&&de.includes("camera-access")&&N){t.state.unbindTexture(),b=s.getBinding();for(let Ne=0;Ne<zt.length;Ne++){const ze=zt[Ne].camera;if(ze){let qe=E[ze];qe||(qe=new Yy,E[ze]=qe);const Ee=b.getCameraImage(ze);qe.sourceTexture=Ee}}}}for(let zt=0;zt<X.length;zt++){const ae=V[zt],de=X[zt];ae!==null&&de!==void 0&&de.update(ae,Lt,v||p)}bt&&bt(nt,Lt),Lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Lt}),w=null}const Ot=new tS;Ot.setAnimationLoop(wt),this.setAnimationLoop=function(nt){bt=nt},this.dispose=function(){}}}const so=new tr,UC=new Cn;function NC(o,t){function i(A,E){A.matrixAutoUpdate===!0&&A.updateMatrix(),E.value.copy(A.matrix)}function s(A,E){E.color.getRGB(A.fogColor.value,Ky(o)),E.isFog?(A.fogNear.value=E.near,A.fogFar.value=E.far):E.isFogExp2&&(A.fogDensity.value=E.density)}function u(A,E,P,B,F){E.isMeshBasicMaterial?f(A,E):E.isMeshLambertMaterial?(f(A,E),E.envMap&&(A.envMapIntensity.value=E.envMapIntensity)):E.isMeshToonMaterial?(f(A,E),b(A,E)):E.isMeshPhongMaterial?(f(A,E),y(A,E),E.envMap&&(A.envMapIntensity.value=E.envMapIntensity)):E.isMeshStandardMaterial?(f(A,E),S(A,E),E.isMeshPhysicalMaterial&&C(A,E,F)):E.isMeshMatcapMaterial?(f(A,E),w(A,E)):E.isMeshDepthMaterial?f(A,E):E.isMeshDistanceMaterial?(f(A,E),N(A,E)):E.isMeshNormalMaterial?f(A,E):E.isLineBasicMaterial?(p(A,E),E.isLineDashedMaterial&&_(A,E)):E.isPointsMaterial?x(A,E,P,B):E.isSpriteMaterial?v(A,E):E.isShadowMaterial?(A.color.value.copy(E.color),A.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function f(A,E){A.opacity.value=E.opacity,E.color&&A.diffuse.value.copy(E.color),E.emissive&&A.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(A.map.value=E.map,i(E.map,A.mapTransform)),E.alphaMap&&(A.alphaMap.value=E.alphaMap,i(E.alphaMap,A.alphaMapTransform)),E.bumpMap&&(A.bumpMap.value=E.bumpMap,i(E.bumpMap,A.bumpMapTransform),A.bumpScale.value=E.bumpScale,E.side===zi&&(A.bumpScale.value*=-1)),E.normalMap&&(A.normalMap.value=E.normalMap,i(E.normalMap,A.normalMapTransform),A.normalScale.value.copy(E.normalScale),E.side===zi&&A.normalScale.value.negate()),E.displacementMap&&(A.displacementMap.value=E.displacementMap,i(E.displacementMap,A.displacementMapTransform),A.displacementScale.value=E.displacementScale,A.displacementBias.value=E.displacementBias),E.emissiveMap&&(A.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,A.emissiveMapTransform)),E.specularMap&&(A.specularMap.value=E.specularMap,i(E.specularMap,A.specularMapTransform)),E.alphaTest>0&&(A.alphaTest.value=E.alphaTest);const P=t.get(E),B=P.envMap,F=P.envMapRotation;B&&(A.envMap.value=B,so.copy(F),so.x*=-1,so.y*=-1,so.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),A.envMapRotation.value.setFromMatrix4(UC.makeRotationFromEuler(so)),A.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=E.reflectivity,A.ior.value=E.ior,A.refractionRatio.value=E.refractionRatio),E.lightMap&&(A.lightMap.value=E.lightMap,A.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,A.lightMapTransform)),E.aoMap&&(A.aoMap.value=E.aoMap,A.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,A.aoMapTransform))}function p(A,E){A.diffuse.value.copy(E.color),A.opacity.value=E.opacity,E.map&&(A.map.value=E.map,i(E.map,A.mapTransform))}function _(A,E){A.dashSize.value=E.dashSize,A.totalSize.value=E.dashSize+E.gapSize,A.scale.value=E.scale}function x(A,E,P,B){A.diffuse.value.copy(E.color),A.opacity.value=E.opacity,A.size.value=E.size*P,A.scale.value=B*.5,E.map&&(A.map.value=E.map,i(E.map,A.uvTransform)),E.alphaMap&&(A.alphaMap.value=E.alphaMap,i(E.alphaMap,A.alphaMapTransform)),E.alphaTest>0&&(A.alphaTest.value=E.alphaTest)}function v(A,E){A.diffuse.value.copy(E.color),A.opacity.value=E.opacity,A.rotation.value=E.rotation,E.map&&(A.map.value=E.map,i(E.map,A.mapTransform)),E.alphaMap&&(A.alphaMap.value=E.alphaMap,i(E.alphaMap,A.alphaMapTransform)),E.alphaTest>0&&(A.alphaTest.value=E.alphaTest)}function y(A,E){A.specular.value.copy(E.specular),A.shininess.value=Math.max(E.shininess,1e-4)}function b(A,E){E.gradientMap&&(A.gradientMap.value=E.gradientMap)}function S(A,E){A.metalness.value=E.metalness,E.metalnessMap&&(A.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,A.metalnessMapTransform)),A.roughness.value=E.roughness,E.roughnessMap&&(A.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,A.roughnessMapTransform)),E.envMap&&(A.envMapIntensity.value=E.envMapIntensity)}function C(A,E,P){A.ior.value=E.ior,E.sheen>0&&(A.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),A.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(A.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,A.sheenColorMapTransform)),E.sheenRoughnessMap&&(A.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,A.sheenRoughnessMapTransform))),E.clearcoat>0&&(A.clearcoat.value=E.clearcoat,A.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(A.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,A.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(A.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===zi&&A.clearcoatNormalScale.value.negate())),E.dispersion>0&&(A.dispersion.value=E.dispersion),E.iridescence>0&&(A.iridescence.value=E.iridescence,A.iridescenceIOR.value=E.iridescenceIOR,A.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(A.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,A.iridescenceMapTransform)),E.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),E.transmission>0&&(A.transmission.value=E.transmission,A.transmissionSamplerMap.value=P.texture,A.transmissionSamplerSize.value.set(P.width,P.height),E.transmissionMap&&(A.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,A.transmissionMapTransform)),A.thickness.value=E.thickness,E.thicknessMap&&(A.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=E.attenuationDistance,A.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(A.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(A.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=E.specularIntensity,A.specularColor.value.copy(E.specularColor),E.specularColorMap&&(A.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,A.specularColorMapTransform)),E.specularIntensityMap&&(A.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,A.specularIntensityMapTransform))}function w(A,E){E.matcap&&(A.matcap.value=E.matcap)}function N(A,E){const P=t.get(E).light;A.referencePosition.value.setFromMatrixPosition(P.matrixWorld),A.nearDistance.value=P.shadow.camera.near,A.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function OC(o,t,i,s){let u={},f={},p=[];const _=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function x(P,B){const F=B.program;s.uniformBlockBinding(P,F)}function v(P,B){let F=u[P.id];F===void 0&&(w(P),F=y(P),u[P.id]=F,P.addEventListener("dispose",A));const X=B.program;s.updateUBOMapping(P,X);const V=t.render.frame;f[P.id]!==V&&(S(P),f[P.id]=V)}function y(P){const B=b();P.__bindingPointIndex=B;const F=o.createBuffer(),X=P.__size,V=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,X,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,B,F),F}function b(){for(let P=0;P<_;P++)if(p.indexOf(P)===-1)return p.push(P),P;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const B=u[P.id],F=P.uniforms,X=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,B);for(let V=0,j=F.length;V<j;V++){const D=Array.isArray(F[V])?F[V]:[F[V]];for(let H=0,vt=D.length;H<vt;H++){const Z=D[H];if(C(Z,V,H,X)===!0){const rt=Z.__offset,ft=Array.isArray(Z.value)?Z.value:[Z.value];let mt=0;for(let lt=0;lt<ft.length;lt++){const G=ft[lt],q=N(G);typeof G=="number"||typeof G=="boolean"?(Z.__data[0]=G,o.bufferSubData(o.UNIFORM_BUFFER,rt+mt,Z.__data)):G.isMatrix3?(Z.__data[0]=G.elements[0],Z.__data[1]=G.elements[1],Z.__data[2]=G.elements[2],Z.__data[3]=0,Z.__data[4]=G.elements[3],Z.__data[5]=G.elements[4],Z.__data[6]=G.elements[5],Z.__data[7]=0,Z.__data[8]=G.elements[6],Z.__data[9]=G.elements[7],Z.__data[10]=G.elements[8],Z.__data[11]=0):(G.toArray(Z.__data,mt),mt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,Z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function C(P,B,F,X){const V=P.value,j=B+"_"+F;if(X[j]===void 0)return typeof V=="number"||typeof V=="boolean"?X[j]=V:X[j]=V.clone(),!0;{const D=X[j];if(typeof V=="number"||typeof V=="boolean"){if(D!==V)return X[j]=V,!0}else if(D.equals(V)===!1)return D.copy(V),!0}return!1}function w(P){const B=P.uniforms;let F=0;const X=16;for(let j=0,D=B.length;j<D;j++){const H=Array.isArray(B[j])?B[j]:[B[j]];for(let vt=0,Z=H.length;vt<Z;vt++){const rt=H[vt],ft=Array.isArray(rt.value)?rt.value:[rt.value];for(let mt=0,lt=ft.length;mt<lt;mt++){const G=ft[mt],q=N(G),it=F%X,At=it%q.boundary,xt=it+At;F+=At,xt!==0&&X-xt<q.storage&&(F+=X-xt),rt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=F,F+=q.storage}}}const V=F%X;return V>0&&(F+=X-V),P.__size=F,P.__cache={},this}function N(P){const B={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(B.boundary=4,B.storage=4):P.isVector2?(B.boundary=8,B.storage=8):P.isVector3||P.isColor?(B.boundary=16,B.storage=12):P.isVector4?(B.boundary=16,B.storage=16):P.isMatrix3?(B.boundary=48,B.storage=48):P.isMatrix4?(B.boundary=64,B.storage=64):P.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",P),B}function A(P){const B=P.target;B.removeEventListener("dispose",A);const F=p.indexOf(B.__bindingPointIndex);p.splice(F,1),o.deleteBuffer(u[B.id]),delete u[B.id],delete f[B.id]}function E(){for(const P in u)o.deleteBuffer(u[P]);p=[],u={},f={}}return{bind:x,update:v,dispose:E}}const zC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qa=null;function IC(){return qa===null&&(qa=new wE(zC,16,16,El,Pr),qa.name="DFG_LUT",qa.minFilter=pi,qa.magFilter=pi,qa.wrapS=Rr,qa.wrapT=Rr,qa.generateMipmaps=!1,qa.needsUpdate=!0),qa}class BC{constructor(t={}){const{canvas:i=aE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:p=!1,antialias:_=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:v=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:S=!1,outputBufferType:C=Qi}=t;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=p;const N=C,A=new Set([h_,f_,u_]),E=new Set([Qi,$a,Fc,Hc,l_,c_]),P=new Uint32Array(4),B=new Int32Array(4);let F=null,X=null;const V=[],j=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let vt=!1;this._outputColorSpace=ha;let Z=0,rt=0,ft=null,mt=-1,lt=null;const G=new Un,q=new Un;let it=null;const At=new Ke(0);let xt=0,I=i.width,K=i.height,bt=1,wt=null,Ot=null;const nt=new Un(0,0,I,K),Lt=new Un(0,0,I,K);let zt=!1;const ae=new g_;let de=!1,ve=!1;const hn=new Cn,Ne=new dt,ze=new Un,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function gn(){return ft===null?bt:1}let Q=s;function xn(z,tt){return i.getContext(z,tt)}try{const z={alpha:!0,depth:u,stencil:f,antialias:_,premultipliedAlpha:x,preserveDrawingBuffer:v,powerPreference:y,failIfMajorPerformanceCaveat:b};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${r_}`),i.addEventListener("webglcontextlost",ee,!1),i.addEventListener("webglcontextrestored",be,!1),i.addEventListener("webglcontextcreationerror",rn,!1),Q===null){const tt="webgl2";if(Q=xn(tt,z),Q===null)throw xn(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw an("WebGLRenderer: "+z.message),z}let Be,Ze,ce,W,R,at,Ct,Nt,Tt,se,Gt,pe,xe,Bt,It,Jt,qt,Zt,we,et,kt,Ht,Qt;function Ft(){Be=new Bw(Q),Be.init(),kt=new CC(Q,Be),Ze=new Lw(Q,Be,t,kt),ce=new AC(Q,Be),Ze.reversedDepthBuffer&&S&&ce.buffers.depth.setReversed(!0),W=new kw(Q),R=new hC,at=new wC(Q,Be,ce,R,Ze,kt,W),Ct=new Iw(H),Nt=new XE(Q),Ht=new Cw(Q,Nt),Tt=new Fw(Q,Nt,W,Ht),se=new Vw(Q,Tt,Nt,Ht,W),Zt=new Gw(Q,Ze,at),It=new Dw(R),Gt=new fC(H,Ct,Be,Ze,Ht,It),pe=new NC(H,R),xe=new pC,Bt=new yC(Be),qt=new ww(H,Ct,ce,se,w,x),Jt=new TC(H,se,Ze),Qt=new OC(Q,W,Ze,ce),we=new Rw(Q,Be,W),et=new Hw(Q,Be,W),W.programs=Gt.programs,H.capabilities=Ze,H.extensions=Be,H.properties=R,H.renderLists=xe,H.shadowMap=Jt,H.state=ce,H.info=W}Ft(),N!==Qi&&(D=new jw(N,i.width,i.height,u,f));const Et=new PC(H,Q);this.xr=Et,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const z=Be.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=Be.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(z){z!==void 0&&(bt=z,this.setSize(I,K,!1))},this.getSize=function(z){return z.set(I,K)},this.setSize=function(z,tt,yt=!0){if(Et.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}I=z,K=tt,i.width=Math.floor(z*bt),i.height=Math.floor(tt*bt),yt===!0&&(i.style.width=z+"px",i.style.height=tt+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,z,tt)},this.getDrawingBufferSize=function(z){return z.set(I*bt,K*bt).floor()},this.setDrawingBufferSize=function(z,tt,yt){I=z,K=tt,bt=yt,i.width=Math.floor(z*yt),i.height=Math.floor(tt*yt),this.setViewport(0,0,z,tt)},this.setEffects=function(z){if(N===Qi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let tt=0;tt<z.length;tt++)if(z[tt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(G)},this.getViewport=function(z){return z.copy(nt)},this.setViewport=function(z,tt,yt,pt){z.isVector4?nt.set(z.x,z.y,z.z,z.w):nt.set(z,tt,yt,pt),ce.viewport(G.copy(nt).multiplyScalar(bt).round())},this.getScissor=function(z){return z.copy(Lt)},this.setScissor=function(z,tt,yt,pt){z.isVector4?Lt.set(z.x,z.y,z.z,z.w):Lt.set(z,tt,yt,pt),ce.scissor(q.copy(Lt).multiplyScalar(bt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(z){ce.setScissorTest(zt=z)},this.setOpaqueSort=function(z){wt=z},this.setTransparentSort=function(z){Ot=z},this.getClearColor=function(z){return z.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(z=!0,tt=!0,yt=!0){let pt=0;if(z){let ct=!1;if(ft!==null){const Vt=ft.texture.format;ct=A.has(Vt)}if(ct){const Vt=ft.texture.type,Kt=E.has(Vt),Xt=qt.getClearColor(),re=qt.getClearAlpha(),oe=Xt.r,jt=Xt.g,ne=Xt.b;Kt?(P[0]=oe,P[1]=jt,P[2]=ne,P[3]=re,Q.clearBufferuiv(Q.COLOR,0,P)):(B[0]=oe,B[1]=jt,B[2]=ne,B[3]=re,Q.clearBufferiv(Q.COLOR,0,B))}else pt|=Q.COLOR_BUFFER_BIT}tt&&(pt|=Q.DEPTH_BUFFER_BIT),yt&&(pt|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pt!==0&&Q.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ee,!1),i.removeEventListener("webglcontextrestored",be,!1),i.removeEventListener("webglcontextcreationerror",rn,!1),qt.dispose(),xe.dispose(),Bt.dispose(),R.dispose(),Ct.dispose(),se.dispose(),Ht.dispose(),Qt.dispose(),Gt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",ti),Et.removeEventListener("sessionend",ue),Bi.stop()};function ee(z){z.preventDefault(),Kv("WebGLRenderer: Context Lost."),vt=!0}function be(){Kv("WebGLRenderer: Context Restored."),vt=!1;const z=W.autoReset,tt=Jt.enabled,yt=Jt.autoUpdate,pt=Jt.needsUpdate,ct=Jt.type;Ft(),W.autoReset=z,Jt.enabled=tt,Jt.autoUpdate=yt,Jt.needsUpdate=pt,Jt.type=ct}function rn(z){an("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function je(z){const tt=z.target;tt.removeEventListener("dispose",je),Vn(tt)}function Vn(z){Ii(z),R.remove(z)}function Ii(z){const tt=R.get(z).programs;tt!==void 0&&(tt.forEach(function(yt){Gt.releaseProgram(yt)}),z.isShaderMaterial&&Gt.releaseShaderCache(z))}this.renderBufferDirect=function(z,tt,yt,pt,ct,Vt){tt===null&&(tt=qe);const Kt=ct.isMesh&&ct.matrixWorld.determinant()<0,Xt=xo(z,tt,yt,pt,ct);ce.setMaterial(pt,Kt);let re=yt.index,oe=1;if(pt.wireframe===!0){if(re=Tt.getWireframeAttribute(yt),re===void 0)return;oe=2}const jt=yt.drawRange,ne=yt.attributes.position;let te=jt.start*oe,Me=(jt.start+jt.count)*oe;Vt!==null&&(te=Math.max(te,Vt.start*oe),Me=Math.min(Me,(Vt.start+Vt.count)*oe)),re!==null?(te=Math.max(te,0),Me=Math.min(Me,re.count)):ne!=null&&(te=Math.max(te,0),Me=Math.min(Me,ne.count));const sn=Me-te;if(sn<0||sn===1/0)return;Ht.setup(ct,pt,Xt,yt,re);let dn,$t=we;if(re!==null&&(dn=Nt.get(re),$t=et,$t.setIndex(dn)),ct.isMesh)pt.wireframe===!0?(ce.setLineWidth(pt.wireframeLinewidth*gn()),$t.setMode(Q.LINES)):$t.setMode(Q.TRIANGLES);else if(ct.isLine){let Le=pt.linewidth;Le===void 0&&(Le=1),ce.setLineWidth(Le*gn()),ct.isLineSegments?$t.setMode(Q.LINES):ct.isLineLoop?$t.setMode(Q.LINE_LOOP):$t.setMode(Q.LINE_STRIP)}else ct.isPoints?$t.setMode(Q.POINTS):ct.isSprite&&$t.setMode(Q.TRIANGLES);if(ct.isBatchedMesh)if(ct._multiDrawInstances!==null)eh("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount,ct._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))$t.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const Le=ct._multiDrawStarts,ie=ct._multiDrawCounts,In=ct._multiDrawCount,_e=re?Nt.get(re).bytesPerElement:1,ei=R.get(pt).currentProgram.getUniforms();for(let Yn=0;Yn<In;Yn++)ei.setValue(Q,"_gl_DrawID",Yn),$t.render(Le[Yn]/_e,ie[Yn])}else if(ct.isInstancedMesh)$t.renderInstances(te,sn,ct.count);else if(yt.isInstancedBufferGeometry){const Le=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,ie=Math.min(yt.instanceCount,Le);$t.renderInstances(te,sn,ie)}else $t.render(te,sn)};function bs(z,tt,yt){z.transparent===!0&&z.side===Cr&&z.forceSinglePass===!1?(z.side=zi,z.needsUpdate=!0,mi(z,tt,yt),z.side=Ss,z.needsUpdate=!0,mi(z,tt,yt),z.side=Cr):mi(z,tt,yt)}this.compile=function(z,tt,yt=null){yt===null&&(yt=z),X=Bt.get(yt),X.init(tt),j.push(X),yt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(tt.layers)&&(X.pushLight(ct),ct.castShadow&&X.pushShadow(ct))}),z!==yt&&z.traverseVisible(function(ct){ct.isLight&&ct.layers.test(tt.layers)&&(X.pushLight(ct),ct.castShadow&&X.pushShadow(ct))}),X.setupLights();const pt=new Set;return z.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Vt=ct.material;if(Vt)if(Array.isArray(Vt))for(let Kt=0;Kt<Vt.length;Kt++){const Xt=Vt[Kt];bs(Xt,yt,ct),pt.add(Xt)}else bs(Vt,yt,ct),pt.add(Vt)}),X=j.pop(),pt},this.compileAsync=function(z,tt,yt=null){const pt=this.compile(z,tt,yt);return new Promise(ct=>{function Vt(){if(pt.forEach(function(Kt){R.get(Kt).currentProgram.isReady()&&pt.delete(Kt)}),pt.size===0){ct(z);return}setTimeout(Vt,10)}Be.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let Nr=null;function go(z){Nr&&Nr(z)}function ti(){Bi.stop()}function ue(){Bi.start()}const Bi=new tS;Bi.setAnimationLoop(go),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(z){Nr=z,Et.setAnimationLoop(z),z===null?Bi.stop():Bi.start()},Et.addEventListener("sessionstart",ti),Et.addEventListener("sessionend",ue),this.render=function(z,tt){if(tt!==void 0&&tt.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(vt===!0)return;const yt=Et.enabled===!0&&Et.isPresenting===!0,pt=D!==null&&(ft===null||yt)&&D.begin(H,ft);if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(tt),tt=Et.getCamera()),z.isScene===!0&&z.onBeforeRender(H,z,tt,ft),X=Bt.get(z,j.length),X.init(tt),j.push(X),hn.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),ae.setFromProjectionMatrix(hn,Ka,tt.reversedDepth),ve=this.localClippingEnabled,de=It.init(this.clippingPlanes,ve),F=xe.get(z,V.length),F.init(),V.push(F),Et.enabled===!0&&Et.isPresenting===!0){const Kt=H.xr.getDepthSensingMesh();Kt!==null&&ir(Kt,tt,-1/0,H.sortObjects)}ir(z,tt,0,H.sortObjects),F.finish(),H.sortObjects===!0&&F.sort(wt,Ot),Ee=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Ee&&qt.addToRenderList(F,z),this.info.render.frame++,de===!0&&It.beginShadows();const ct=X.state.shadowsArray;if(Jt.render(ct,z,tt),de===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pt&&D.hasRenderPass())===!1){const Kt=F.opaque,Xt=F.transmissive;if(X.setupLights(),tt.isArrayCamera){const re=tt.cameras;if(Xt.length>0)for(let oe=0,jt=re.length;oe<jt;oe++){const ne=re[oe];Tn(Kt,Xt,z,ne)}Ee&&qt.render(z);for(let oe=0,jt=re.length;oe<jt;oe++){const ne=re[oe];bi(F,z,ne,ne.viewport)}}else Xt.length>0&&Tn(Kt,Xt,z,tt),Ee&&qt.render(z),bi(F,z,tt)}ft!==null&&rt===0&&(at.updateMultisampleRenderTarget(ft),at.updateRenderTargetMipmap(ft)),pt&&D.end(H),z.isScene===!0&&z.onAfterRender(H,z,tt),Ht.resetDefaultState(),mt=-1,lt=null,j.pop(),j.length>0?(X=j[j.length-1],de===!0&&It.setGlobalState(H.clippingPlanes,X.state.camera)):X=null,V.pop(),V.length>0?F=V[V.length-1]:F=null};function ir(z,tt,yt,pt){if(z.visible===!1)return;if(z.layers.test(tt.layers)){if(z.isGroup)yt=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(tt);else if(z.isLight)X.pushLight(z),z.castShadow&&X.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||ae.intersectsSprite(z)){pt&&ze.setFromMatrixPosition(z.matrixWorld).applyMatrix4(hn);const Kt=se.update(z),Xt=z.material;Xt.visible&&F.push(z,Kt,Xt,yt,ze.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||ae.intersectsObject(z))){const Kt=se.update(z),Xt=z.material;if(pt&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),ze.copy(z.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),ze.copy(Kt.boundingSphere.center)),ze.applyMatrix4(z.matrixWorld).applyMatrix4(hn)),Array.isArray(Xt)){const re=Kt.groups;for(let oe=0,jt=re.length;oe<jt;oe++){const ne=re[oe],te=Xt[ne.materialIndex];te&&te.visible&&F.push(z,Kt,te,yt,ze.z,ne)}}else Xt.visible&&F.push(z,Kt,Xt,yt,ze.z,null)}}const Vt=z.children;for(let Kt=0,Xt=Vt.length;Kt<Xt;Kt++)ir(Vt[Kt],tt,yt,pt)}function bi(z,tt,yt,pt){const{opaque:ct,transmissive:Vt,transparent:Kt}=z;X.setupLightsView(yt),de===!0&&It.setGlobalState(H.clippingPlanes,yt),pt&&ce.viewport(G.copy(pt)),ct.length>0&&An(ct,tt,yt),Vt.length>0&&An(Vt,tt,yt),Kt.length>0&&An(Kt,tt,yt),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Tn(z,tt,yt,pt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;if(X.state.transmissionRenderTarget[pt.id]===void 0){const te=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");X.state.transmissionRenderTarget[pt.id]=new Qa(1,1,{generateMipmaps:!0,type:te?Pr:Qi,minFilter:fo,samples:Math.max(4,Ze.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const Vt=X.state.transmissionRenderTarget[pt.id],Kt=pt.viewport||G;Vt.setSize(Kt.z*H.transmissionResolutionScale,Kt.w*H.transmissionResolutionScale);const Xt=H.getRenderTarget(),re=H.getActiveCubeFace(),oe=H.getActiveMipmapLevel();H.setRenderTarget(Vt),H.getClearColor(At),xt=H.getClearAlpha(),xt<1&&H.setClearColor(16777215,.5),H.clear(),Ee&&qt.render(yt);const jt=H.toneMapping;H.toneMapping=Ja;const ne=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),X.setupLightsView(pt),de===!0&&It.setGlobalState(H.clippingPlanes,pt),An(z,yt,pt),at.updateMultisampleRenderTarget(Vt),at.updateRenderTargetMipmap(Vt),Be.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Me=0,sn=tt.length;Me<sn;Me++){const dn=tt[Me],{object:$t,geometry:Le,material:ie,group:In}=dn;if(ie.side===Cr&&$t.layers.test(pt.layers)){const _e=ie.side;ie.side=zi,ie.needsUpdate=!0,$i($t,yt,pt,Le,ie,In),ie.side=_e,ie.needsUpdate=!0,te=!0}}te===!0&&(at.updateMultisampleRenderTarget(Vt),at.updateRenderTargetMipmap(Vt))}H.setRenderTarget(Xt,re,oe),H.setClearColor(At,xt),ne!==void 0&&(pt.viewport=ne),H.toneMapping=jt}function An(z,tt,yt){const pt=tt.isScene===!0?tt.overrideMaterial:null;for(let ct=0,Vt=z.length;ct<Vt;ct++){const Kt=z[ct],{object:Xt,geometry:re,group:oe}=Kt;let jt=Kt.material;jt.allowOverride===!0&&pt!==null&&(jt=pt),Xt.layers.test(yt.layers)&&$i(Xt,tt,yt,re,jt,oe)}}function $i(z,tt,yt,pt,ct,Vt){z.onBeforeRender(H,tt,yt,pt,ct,Vt),z.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),ct.onBeforeRender(H,tt,yt,pt,z,Vt),ct.transparent===!0&&ct.side===Cr&&ct.forceSinglePass===!1?(ct.side=zi,ct.needsUpdate=!0,H.renderBufferDirect(yt,tt,pt,ct,z,Vt),ct.side=Ss,ct.needsUpdate=!0,H.renderBufferDirect(yt,tt,pt,ct,z,Vt),ct.side=Cr):H.renderBufferDirect(yt,tt,pt,ct,z,Vt),z.onAfterRender(H,tt,yt,pt,ct,Vt)}function mi(z,tt,yt){tt.isScene!==!0&&(tt=qe);const pt=R.get(z),ct=X.state.lights,Vt=X.state.shadowsArray,Kt=ct.state.version,Xt=Gt.getParameters(z,ct.state,Vt,tt,yt),re=Gt.getProgramCacheKey(Xt);let oe=pt.programs;pt.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?tt.environment:null,pt.fog=tt.fog;const jt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;pt.envMap=Ct.get(z.envMap||pt.environment,jt),pt.envMapRotation=pt.environment!==null&&z.envMap===null?tt.environmentRotation:z.envMapRotation,oe===void 0&&(z.addEventListener("dispose",je),oe=new Map,pt.programs=oe);let ne=oe.get(re);if(ne!==void 0){if(pt.currentProgram===ne&&pt.lightsStateVersion===Kt)return vo(z,Xt),ne}else Xt.uniforms=Gt.getUniforms(z),z.onBeforeCompile(Xt,H),ne=Gt.acquireProgram(Xt,re),oe.set(re,ne),pt.uniforms=Xt.uniforms;const te=pt.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(te.clippingPlanes=It.uniform),vo(z,Xt),pt.needsLights=Es(z),pt.lightsStateVersion=Kt,pt.needsLights&&(te.ambientLightColor.value=ct.state.ambient,te.lightProbe.value=ct.state.probe,te.directionalLights.value=ct.state.directional,te.directionalLightShadows.value=ct.state.directionalShadow,te.spotLights.value=ct.state.spot,te.spotLightShadows.value=ct.state.spotShadow,te.rectAreaLights.value=ct.state.rectArea,te.ltc_1.value=ct.state.rectAreaLTC1,te.ltc_2.value=ct.state.rectAreaLTC2,te.pointLights.value=ct.state.point,te.pointLightShadows.value=ct.state.pointShadow,te.hemisphereLights.value=ct.state.hemi,te.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,te.spotLightMatrix.value=ct.state.spotLightMatrix,te.spotLightMap.value=ct.state.spotLightMap,te.pointShadowMatrix.value=ct.state.pointShadowMatrix),pt.currentProgram=ne,pt.uniformsList=null,ne}function Ms(z){if(z.uniformsList===null){const tt=z.currentProgram.getUniforms();z.uniformsList=Jf.seqWithValue(tt.seq,z.uniforms)}return z.uniformsList}function vo(z,tt){const yt=R.get(z);yt.outputColorSpace=tt.outputColorSpace,yt.batching=tt.batching,yt.batchingColor=tt.batchingColor,yt.instancing=tt.instancing,yt.instancingColor=tt.instancingColor,yt.instancingMorph=tt.instancingMorph,yt.skinning=tt.skinning,yt.morphTargets=tt.morphTargets,yt.morphNormals=tt.morphNormals,yt.morphColors=tt.morphColors,yt.morphTargetsCount=tt.morphTargetsCount,yt.numClippingPlanes=tt.numClippingPlanes,yt.numIntersection=tt.numClipIntersection,yt.vertexAlphas=tt.vertexAlphas,yt.vertexTangents=tt.vertexTangents,yt.toneMapping=tt.toneMapping}function xo(z,tt,yt,pt,ct){tt.isScene!==!0&&(tt=qe),at.resetTextureUnits();const Vt=tt.fog,Kt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial?tt.environment:null,Xt=ft===null?H.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Tl,re=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial&&!pt.envMap||pt.isMeshPhongMaterial&&!pt.envMap,oe=Ct.get(pt.envMap||Kt,re),jt=pt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,ne=!!yt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),te=!!yt.morphAttributes.position,Me=!!yt.morphAttributes.normal,sn=!!yt.morphAttributes.color;let dn=Ja;pt.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(dn=H.toneMapping);const $t=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,Le=$t!==void 0?$t.length:0,ie=R.get(pt),In=X.state.lights;if(de===!0&&(ve===!0||z!==lt)){const Mn=z===lt&&pt.id===mt;It.setState(pt,z,Mn)}let _e=!1;pt.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==In.state.version||ie.outputColorSpace!==Xt||ct.isBatchedMesh&&ie.batching===!1||!ct.isBatchedMesh&&ie.batching===!0||ct.isBatchedMesh&&ie.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&ie.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&ie.instancing===!1||!ct.isInstancedMesh&&ie.instancing===!0||ct.isSkinnedMesh&&ie.skinning===!1||!ct.isSkinnedMesh&&ie.skinning===!0||ct.isInstancedMesh&&ie.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&ie.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&ie.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&ie.instancingMorph===!1&&ct.morphTexture!==null||ie.envMap!==oe||pt.fog===!0&&ie.fog!==Vt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==It.numPlanes||ie.numIntersection!==It.numIntersection)||ie.vertexAlphas!==jt||ie.vertexTangents!==ne||ie.morphTargets!==te||ie.morphNormals!==Me||ie.morphColors!==sn||ie.toneMapping!==dn||ie.morphTargetsCount!==Le)&&(_e=!0):(_e=!0,ie.__version=pt.version);let ei=ie.currentProgram;_e===!0&&(ei=mi(pt,tt,ct));let Yn=!1,Wn=!1,Ye=!1;const Ie=ei.getUniforms(),yn=ie.uniforms;if(ce.useProgram(ei.program)&&(Yn=!0,Wn=!0,Ye=!0),pt.id!==mt&&(mt=pt.id,Wn=!0),Yn||lt!==z){ce.buffers.depth.getReversed()&&z.reversedDepth!==!0&&(z._reversedDepth=!0,z.updateProjectionMatrix()),Ie.setValue(Q,"projectionMatrix",z.projectionMatrix),Ie.setValue(Q,"viewMatrix",z.matrixWorldInverse);const ni=Ie.map.cameraPosition;ni!==void 0&&ni.setValue(Q,Ne.setFromMatrixPosition(z.matrixWorld)),Ze.logarithmicDepthBuffer&&Ie.setValue(Q,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&Ie.setValue(Q,"isOrthographic",z.isOrthographicCamera===!0),lt!==z&&(lt=z,Wn=!0,Ye=!0)}if(ie.needsLights&&(In.state.directionalShadowMap.length>0&&Ie.setValue(Q,"directionalShadowMap",In.state.directionalShadowMap,at),In.state.spotShadowMap.length>0&&Ie.setValue(Q,"spotShadowMap",In.state.spotShadowMap,at),In.state.pointShadowMap.length>0&&Ie.setValue(Q,"pointShadowMap",In.state.pointShadowMap,at)),ct.isSkinnedMesh){Ie.setOptional(Q,ct,"bindMatrix"),Ie.setOptional(Q,ct,"bindMatrixInverse");const Mn=ct.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ie.setValue(Q,"boneTexture",Mn.boneTexture,at))}ct.isBatchedMesh&&(Ie.setOptional(Q,ct,"batchingTexture"),Ie.setValue(Q,"batchingTexture",ct._matricesTexture,at),Ie.setOptional(Q,ct,"batchingIdTexture"),Ie.setValue(Q,"batchingIdTexture",ct._indirectTexture,at),Ie.setOptional(Q,ct,"batchingColorTexture"),ct._colorsTexture!==null&&Ie.setValue(Q,"batchingColorTexture",ct._colorsTexture,at));const Nn=yt.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Zt.update(ct,yt,ei),(Wn||ie.receiveShadow!==ct.receiveShadow)&&(ie.receiveShadow=ct.receiveShadow,Ie.setValue(Q,"receiveShadow",ct.receiveShadow)),(pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial)&&pt.envMap===null&&tt.environment!==null&&(yn.envMapIntensity.value=tt.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=IC()),Wn&&(Ie.setValue(Q,"toneMappingExposure",H.toneMappingExposure),ie.needsLights&&ar(yn,Ye),Vt&&pt.fog===!0&&pe.refreshFogUniforms(yn,Vt),pe.refreshMaterialUniforms(yn,pt,bt,K,X.state.transmissionRenderTarget[z.id]),Jf.upload(Q,Ms(ie),yn,at)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(Jf.upload(Q,Ms(ie),yn,at),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&Ie.setValue(Q,"center",ct.center),Ie.setValue(Q,"modelViewMatrix",ct.modelViewMatrix),Ie.setValue(Q,"normalMatrix",ct.normalMatrix),Ie.setValue(Q,"modelMatrix",ct.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const Mn=pt.uniformsGroups;for(let ni=0,Fi=Mn.length;ni<Fi;ni++){const Pa=Mn[ni];Qt.update(Pa,ei),Qt.bind(Pa,ei)}}return ei}function ar(z,tt){z.ambientLightColor.needsUpdate=tt,z.lightProbe.needsUpdate=tt,z.directionalLights.needsUpdate=tt,z.directionalLightShadows.needsUpdate=tt,z.pointLights.needsUpdate=tt,z.pointLightShadows.needsUpdate=tt,z.spotLights.needsUpdate=tt,z.spotLightShadows.needsUpdate=tt,z.rectAreaLights.needsUpdate=tt,z.hemisphereLights.needsUpdate=tt}function Es(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(z,tt,yt){const pt=R.get(z);pt.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),R.get(z.texture).__webglTexture=tt,R.get(z.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:yt,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,tt){const yt=R.get(z);yt.__webglFramebuffer=tt,yt.__useDefaultFramebuffer=tt===void 0};const _a=Q.createFramebuffer();this.setRenderTarget=function(z,tt=0,yt=0){ft=z,Z=tt,rt=yt;let pt=null,ct=!1,Vt=!1;if(z){const Xt=R.get(z);if(Xt.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(Q.FRAMEBUFFER,Xt.__webglFramebuffer),G.copy(z.viewport),q.copy(z.scissor),it=z.scissorTest,ce.viewport(G),ce.scissor(q),ce.setScissorTest(it),mt=-1;return}else if(Xt.__webglFramebuffer===void 0)at.setupRenderTarget(z);else if(Xt.__hasExternalTextures)at.rebindTextures(z,R.get(z.texture).__webglTexture,R.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){const jt=z.depthTexture;if(Xt.__boundDepthTexture!==jt){if(jt!==null&&R.has(jt)&&(z.width!==jt.image.width||z.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(z)}}const re=z.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Vt=!0);const oe=R.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(oe[tt])?pt=oe[tt][yt]:pt=oe[tt],ct=!0):z.samples>0&&at.useMultisampledRTT(z)===!1?pt=R.get(z).__webglMultisampledFramebuffer:Array.isArray(oe)?pt=oe[yt]:pt=oe,G.copy(z.viewport),q.copy(z.scissor),it=z.scissorTest}else G.copy(nt).multiplyScalar(bt).floor(),q.copy(Lt).multiplyScalar(bt).floor(),it=zt;if(yt!==0&&(pt=_a),ce.bindFramebuffer(Q.FRAMEBUFFER,pt)&&ce.drawBuffers(z,pt),ce.viewport(G),ce.scissor(q),ce.setScissorTest(it),ct){const Xt=R.get(z.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Xt.__webglTexture,yt)}else if(Vt){const Xt=tt;for(let re=0;re<z.textures.length;re++){const oe=R.get(z.textures[re]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+re,oe.__webglTexture,yt,Xt)}}else if(z!==null&&yt!==0){const Xt=R.get(z.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Xt.__webglTexture,yt)}mt=-1},this.readRenderTargetPixels=function(z,tt,yt,pt,ct,Vt,Kt,Xt=0){if(!(z&&z.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=R.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Kt!==void 0&&(re=re[Kt]),re){ce.bindFramebuffer(Q.FRAMEBUFFER,re);try{const oe=z.textures[Xt],jt=oe.format,ne=oe.type;if(z.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Xt),!Ze.textureFormatReadable(jt)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(ne)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=z.width-pt&&yt>=0&&yt<=z.height-ct&&Q.readPixels(tt,yt,pt,ct,kt.convert(jt),kt.convert(ne),Vt)}finally{const oe=ft!==null?R.get(ft).__webglFramebuffer:null;ce.bindFramebuffer(Q.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(z,tt,yt,pt,ct,Vt,Kt,Xt=0){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=R.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Kt!==void 0&&(re=re[Kt]),re)if(tt>=0&&tt<=z.width-pt&&yt>=0&&yt<=z.height-ct){ce.bindFramebuffer(Q.FRAMEBUFFER,re);const oe=z.textures[Xt],jt=oe.format,ne=oe.type;if(z.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Xt),!Ze.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,te),Q.bufferData(Q.PIXEL_PACK_BUFFER,Vt.byteLength,Q.STREAM_READ),Q.readPixels(tt,yt,pt,ct,kt.convert(jt),kt.convert(ne),0);const Me=ft!==null?R.get(ft).__webglFramebuffer:null;ce.bindFramebuffer(Q.FRAMEBUFFER,Me);const sn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await rE(Q,sn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,te),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Vt),Q.deleteBuffer(te),Q.deleteSync(sn),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,tt=null,yt=0){const pt=Math.pow(2,-yt),ct=Math.floor(z.image.width*pt),Vt=Math.floor(z.image.height*pt),Kt=tt!==null?tt.x:0,Xt=tt!==null?tt.y:0;at.setTexture2D(z,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,yt,0,0,Kt,Xt,ct,Vt),ce.unbindTexture()};const Da=Q.createFramebuffer(),ta=Q.createFramebuffer();this.copyTextureToTexture=function(z,tt,yt=null,pt=null,ct=0,Vt=0){let Kt,Xt,re,oe,jt,ne,te,Me,sn;const dn=z.isCompressedTexture?z.mipmaps[Vt]:z.image;if(yt!==null)Kt=yt.max.x-yt.min.x,Xt=yt.max.y-yt.min.y,re=yt.isBox3?yt.max.z-yt.min.z:1,oe=yt.min.x,jt=yt.min.y,ne=yt.isBox3?yt.min.z:0;else{const yn=Math.pow(2,-ct);Kt=Math.floor(dn.width*yn),Xt=Math.floor(dn.height*yn),z.isDataArrayTexture?re=dn.depth:z.isData3DTexture?re=Math.floor(dn.depth*yn):re=1,oe=0,jt=0,ne=0}pt!==null?(te=pt.x,Me=pt.y,sn=pt.z):(te=0,Me=0,sn=0);const $t=kt.convert(tt.format),Le=kt.convert(tt.type);let ie;tt.isData3DTexture?(at.setTexture3D(tt,0),ie=Q.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(at.setTexture2DArray(tt,0),ie=Q.TEXTURE_2D_ARRAY):(at.setTexture2D(tt,0),ie=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,tt.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,tt.unpackAlignment);const In=Q.getParameter(Q.UNPACK_ROW_LENGTH),_e=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),ei=Q.getParameter(Q.UNPACK_SKIP_PIXELS),Yn=Q.getParameter(Q.UNPACK_SKIP_ROWS),Wn=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,dn.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,dn.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,oe),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,jt),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,ne);const Ye=z.isDataArrayTexture||z.isData3DTexture,Ie=tt.isDataArrayTexture||tt.isData3DTexture;if(z.isDepthTexture){const yn=R.get(z),Nn=R.get(tt),Mn=R.get(yn.__renderTarget),ni=R.get(Nn.__renderTarget);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Fi=0;Fi<re;Fi++)Ye&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,R.get(z).__webglTexture,ct,ne+Fi),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,R.get(tt).__webglTexture,Vt,sn+Fi)),Q.blitFramebuffer(oe,jt,Kt,Xt,te,Me,Kt,Xt,Q.DEPTH_BUFFER_BIT,Q.NEAREST);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ct!==0||z.isRenderTargetTexture||R.has(z)){const yn=R.get(z),Nn=R.get(tt);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,Da),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ta);for(let Mn=0;Mn<re;Mn++)Ye?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,yn.__webglTexture,ct,ne+Mn):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,yn.__webglTexture,ct),Ie?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Nn.__webglTexture,Vt,sn+Mn):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Nn.__webglTexture,Vt),ct!==0?Q.blitFramebuffer(oe,jt,Kt,Xt,te,Me,Kt,Xt,Q.COLOR_BUFFER_BIT,Q.NEAREST):Ie?Q.copyTexSubImage3D(ie,Vt,te,Me,sn+Mn,oe,jt,Kt,Xt):Q.copyTexSubImage2D(ie,Vt,te,Me,oe,jt,Kt,Xt);ce.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ce.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Ie?z.isDataTexture||z.isData3DTexture?Q.texSubImage3D(ie,Vt,te,Me,sn,Kt,Xt,re,$t,Le,dn.data):tt.isCompressedArrayTexture?Q.compressedTexSubImage3D(ie,Vt,te,Me,sn,Kt,Xt,re,$t,dn.data):Q.texSubImage3D(ie,Vt,te,Me,sn,Kt,Xt,re,$t,Le,dn):z.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Vt,te,Me,Kt,Xt,$t,Le,dn.data):z.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Vt,te,Me,dn.width,dn.height,$t,dn.data):Q.texSubImage2D(Q.TEXTURE_2D,Vt,te,Me,Kt,Xt,$t,Le,dn);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,In),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,_e),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,ei),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Yn),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,Wn),Vt===0&&tt.generateMipmaps&&Q.generateMipmap(ie),ce.unbindTexture()},this.initRenderTarget=function(z){R.get(z).__webglFramebuffer===void 0&&at.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?at.setTextureCube(z,0):z.isData3DTexture?at.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?at.setTexture2DArray(z,0):at.setTexture2D(z,0),ce.unbindTexture()},this.resetState=function(){Z=0,rt=0,ft=null,ce.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ka}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Qe._getUnpackColorSpace()}}function FC(){const o=he.useRef(null);return he.useEffect(()=>{if(!o.current)return;const t=new SE;t.fog=new __(988970,.02);const i=new Ji(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=30;const s=new BC({alpha:!0,antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(s.domElement);const u=new ma,f=2e3,p=new Float32Array(f*3),_=new Float32Array(f*3);for(let V=0;V<f*3;V+=3){p[V]=(Math.random()-.5)*100,p[V+1]=(Math.random()-.5)*100,p[V+2]=(Math.random()-.5)*100;const j=Math.random();j<.33?(_[V]=.06,_[V+1]=.73,_[V+2]=.5):j<.66?(_[V]=.23,_[V+1]=.51,_[V+2]=.96):(_[V]=.55,_[V+1]=.36,_[V+2]=.89)}u.setAttribute("position",new da(p,3)),u.setAttribute("color",new da(_,3));const x=new qy({size:.3,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0}),v=new DE(u,x);t.add(v);const y=[],b=[new v_(1,0),new x_(1,0),new y_(1,0)],S=[new Bp({color:1096065,transparent:!0,opacity:.3,wireframe:!0}),new Bp({color:3900150,transparent:!0,opacity:.3,wireframe:!0}),new Bp({color:9133302,transparent:!0,opacity:.3,wireframe:!0})];for(let V=0;V<15;V++){const j=b[V%b.length],D=S[V%S.length],H=new er(j,D);H.position.x=(Math.random()-.5)*60,H.position.y=(Math.random()-.5)*60,H.position.z=(Math.random()-.5)*30-10,H.rotation.x=Math.random()*Math.PI,H.rotation.y=Math.random()*Math.PI,H.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02},floatSpeed:Math.random()*.5+.5,floatOffset:Math.random()*Math.PI*2},y.push(H),t.add(H)}const C=new GE(4210752,.5);t.add(C);const w=new gx(1096065,1,50);w.position.set(10,10,10),t.add(w);const N=new gx(3900150,1,50);N.position.set(-10,-10,10),t.add(N);let A=0,E=0;const P=V=>{A=V.clientX/window.innerWidth*2-1,E=-(V.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",P);let B=0;const F=()=>{requestAnimationFrame(F),B+=.001,v.rotation.y+=5e-4,v.rotation.x+=2e-4,y.forEach(V=>{V.rotation.x+=V.userData.rotationSpeed.x,V.rotation.y+=V.userData.rotationSpeed.y,V.position.y+=Math.sin(B*V.userData.floatSpeed+V.userData.floatOffset)*.02}),i.position.x+=(A*5-i.position.x)*.05,i.position.y+=(E*5-i.position.y)*.05,i.lookAt(t.position),s.render(t,i)};F();const X=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",X),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("resize",X),o.current?.removeChild(s.domElement),s.dispose(),u.dispose(),b.forEach(V=>V.dispose()),S.forEach(V=>V.dispose())}},[]),k.jsx("div",{ref:o,className:"three-canvas"})}function HC({onGetStarted:o}){const[t,i]=he.useState(!1),[s,u]=he.useState(!1);he.useEffect(()=>{const p=()=>i(window.scrollY>50);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const f=["Home","Features","Demo"];return k.jsx("nav",{className:`navbar ${t?"scrolled":""}`,children:k.jsxs("div",{className:"nav-container",children:[k.jsxs("div",{className:"nav-logo",children:[k.jsx("div",{className:"logo-icon",children:"🌾"}),k.jsx("span",{className:"logo-text",children:"Krishi Sakhi"})]}),k.jsxs("div",{className:`nav-menu ${s?"active":""}`,children:[f.map(p=>k.jsx("a",{href:`#${p.toLowerCase()}`,className:"nav-link",onClick:()=>u(!1),children:p},p)),k.jsx("button",{onClick:o,className:"btn-primary btn-nav",children:"Get Started"})]}),k.jsxs("button",{className:"mobile-menu-btn",onClick:()=>u(!s),children:[k.jsx("span",{}),k.jsx("span",{}),k.jsx("span",{})]})]})})}function kC({onDemoClick:o,onExploreClick:t}){return k.jsx("section",{id:"home",className:"hero-section",children:k.jsx("div",{className:"container hero-container",children:k.jsxs("div",{className:"hero-content",children:[k.jsx("div",{className:"hero-icon-wrapper",children:k.jsx("div",{className:"hero-icon",children:"🌾"})}),k.jsxs("h1",{className:"hero-title",children:["Krishi Sakhi",k.jsx("span",{className:"hero-subtitle",children:"V2.0"})]}),k.jsx("p",{className:"hero-description",children:"Revolutionizing Indian agriculture with AI-powered precision farming. Your digital companion for smarter, sustainable farming."}),k.jsxs("div",{className:"hero-buttons",children:[k.jsx("button",{onClick:o,className:"btn-primary btn-large",children:"🚀 Live Demo"}),k.jsx("button",{onClick:t,className:"btn-secondary btn-large",children:"✨ Explore Features"})]}),k.jsx("div",{className:"stats-grid",children:[{value:"24K+",label:"Training Images"},{value:"17",label:"Disease Classes"},{value:"3",label:"AI Services"},{value:"97%",label:"Accuracy"}].map(i=>k.jsxs("div",{className:"stat-card",children:[k.jsx("div",{className:"stat-value",children:i.value}),k.jsx("div",{className:"stat-label",children:i.label})]},i.label))})]})})})}function GC(){const o=[{icon:"🗺️",iconBg:"rgba(74, 222, 128, 0.2)",iconColor:"#4ade80",title:"Magic Map",items:["Click-to-crop recommendation","Real-time soil analysis","Random Forest ML"]},{icon:"🔬",iconBg:"rgba(251, 146, 60, 0.2)",iconColor:"#fb923c",title:"Crop Doctor",items:["Tomato, Potato, Maize","17 disease detection","MobileNetV2 CNN"]},{icon:"🤖",iconBg:"rgba(192, 132, 252, 0.2)",iconColor:"#c084fc",title:"AI Assistant",items:["24/7 farming guidance","Multi-language support","GPT-powered insights"]}];return k.jsx("section",{id:"features",className:"features-section",children:k.jsxs("div",{className:"container",children:[k.jsxs("div",{className:"section-header",children:[k.jsx("span",{className:"section-badge",children:"✨ Core Features"}),k.jsx("h2",{className:"section-title",children:"AI-Powered Farming Suite"}),k.jsx("p",{className:"section-description",children:"Three revolutionary tools working together to empower farmers"})]}),k.jsx("div",{className:"features-grid",children:o.map((t,i)=>k.jsxs("div",{className:"feature-card",style:{animationDelay:`${i*.2}s`},children:[k.jsx("div",{className:"feature-icon-wrapper",style:{background:t.iconBg},children:k.jsx("span",{className:"feature-icon",children:t.icon})}),k.jsx("h3",{className:"feature-title",children:t.title}),k.jsx("ul",{className:"feature-list",children:t.items.map((s,u)=>k.jsxs("li",{style:{color:t.iconColor},children:[k.jsx("span",{children:"✓"})," ",s]},u))}),k.jsx("div",{className:"feature-arrow",style:{background:`linear-gradient(90deg, ${t.iconColor}20, transparent)`},children:k.jsx("span",{style:{color:t.iconColor},children:"→"})})]},t.title))})]})})}function VC({onGetStarted:o}){return k.jsx("section",{id:"demo",className:"cta-section",children:k.jsx("div",{className:"container",children:k.jsxs("div",{className:"cta-card",children:[k.jsx("div",{className:"cta-decoration cta-decoration-1"}),k.jsx("div",{className:"cta-decoration cta-decoration-2"}),k.jsxs("div",{className:"cta-content",children:[k.jsx("h2",{className:"cta-title",children:"Ready to Transform Your Farming?"}),k.jsx("p",{className:"cta-description",children:"Join thousands of farmers using AI to make smarter decisions and increase crop yields."}),k.jsx("button",{onClick:o,className:"btn-primary btn-cta",children:"🌱 Get Started Free"})]})]})})})}function WC(){return k.jsx("footer",{id:"contact",className:"footer",children:k.jsxs("div",{className:"container",children:[k.jsxs("div",{className:"footer-grid",children:[k.jsxs("div",{className:"footer-brand",children:[k.jsxs("div",{className:"footer-logo",children:[k.jsx("span",{children:"🌾"})," Krishi Sakhi"]}),k.jsx("p",{className:"footer-description",children:"Empowering farmers with AI-driven insights for sustainable agriculture."})]}),[{title:"Product",links:["Features","Demo","Pricing"]},{title:"Resources",links:["Documentation","API","Support"]},{title:"Company",links:["About","Blog","Contact"]}].map(o=>k.jsxs("div",{className:"footer-column",children:[k.jsx("h4",{className:"footer-column-title",children:o.title}),k.jsx("ul",{className:"footer-links",children:o.links.map(t=>k.jsx("li",{children:k.jsx("a",{href:"#",className:"footer-link",children:t})},t))})]},o.title))]}),k.jsxs("div",{className:"footer-bottom",children:[k.jsx("p",{className:"footer-copyright",children:"© 2024 Krishi Sakhi. Built for Indian farmers."}),k.jsx("div",{className:"footer-social",children:["Twitter","GitHub","LinkedIn"].map(o=>k.jsx("a",{href:"#",className:"footer-social-link",children:o},o))})]})]})})}function jC({onGetStarted:o}){return k.jsxs("div",{className:"landing-page",children:[k.jsx("style",{children:`
        /* Base Styles */
        .landing-page {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          overflow-x: hidden;
        }

        .three-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 24px;
          background: transparent;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #fff;
        }

        .btn-nav {
          padding: 10px 24px;
          font-size: 14px;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-menu-btn span {
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Buttons */
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          border: none;
          color: #fff;
          padding: 12px 28px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 12px 28px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .btn-large {
          padding: 20px 48px;
          font-size: 18px;
        }

        .btn-cta {
          padding: 24px 64px;
          font-size: 18px;
          box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
        }

        .btn-cta:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 16px 50px rgba(16, 185, 129, 0.5);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 80px;
        }

        .hero-container {
          text-align: center;
        }

        .hero-content {
          animation: fadeInUp 1s ease-out forwards;
        }

        .hero-icon-wrapper {
          width: 128px;
          height: 128px;
          margin: 0 auto 32px;
        }

        .hero-icon {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.4);
          animation: pulseGlow 2s infinite;
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 900;
          background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          display: block;
          font-size: clamp(24px, 4vw, 48px);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8);
        }

        .hero-description {
          font-size: clamp(16px, 2vw, 20px);
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto 48px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          align-items: center;
          margin-bottom: 80px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 32px;
          margin-top: 80px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        }

        .stat-value {
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Features Section */
        .features-section {
          padding: 128px 24px;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #4ade80;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 24px;
          border-radius: 100px;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 48px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          animation: fadeInUp 0.8s ease-out both;
          opacity: 0;
          transition: transform 0.5s ease;
        }

        .feature-card:hover {
          transform: translateY(-20px) scale(1.02);
        }

        .feature-icon-wrapper {
          width: 96px;
          height: 96px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          font-size: 40px;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon-wrapper {
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          text-align: center;
          margin-bottom: 24px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          text-align: center;
        }

        .feature-list li {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .feature-arrow {
          width: 100%;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          font-size: 20px;
        }

        /* CTA Section */
        .cta-section {
          padding: 128px 24px;
          position: relative;
        }

        .cta-card {
          max-width: 900px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-decoration {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-decoration-1 {
          top: -50px;
          right: -50px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
        }

        .cta-decoration-2 {
          bottom: -50px;
          left: -50px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Footer */
        .footer {
          padding: 64px 24px 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(15, 23, 42, 0.5);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(3, 1fr);
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .footer-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        .footer-column-title {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #4ade80;
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-social {
          display: flex;
          gap: 20px;
        }

        .footer-social-link {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-social-link:hover {
          color: #4ade80;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #10b981, #3b82f6);
          border-radius: 4px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.98);
            flex-direction: column;
            padding: 24px;
            gap: 16px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn-large {
            width: 100%;
            max-width: 300px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .cta-card {
            padding: 40px 24px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}),k.jsx(FC,{}),k.jsx(HC,{onGetStarted:o}),k.jsx(kC,{onDemoClick:o,onExploreClick:()=>{document.getElementById("features")?.scrollIntoView({behavior:"smooth"})}}),k.jsx(GC,{}),k.jsx(VC,{onGetStarted:o}),k.jsx(WC,{})]})}delete xy.Icon.Default.prototype._getIconUrl;xy.Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"});const Gf={minLat:11.5,maxLat:18.5,minLng:74,maxLng:78.6},XC=[15.3173,75.7139],jm=[[11.5,74],[18.5,78.6]],sS=[[18.45,74.15],[18.38,74.6],[17.98,74.35],[17.7,74.08],[17.28,74.1],[16.95,73.98],[16.5,74.1],[16,74.45],[15.65,74],[15.2,74],[14.85,74.23],[14.2,74.35],[13.75,74.65],[13.4,74.82],[13,74.85],[12.45,75],[12,75.38],[11.6,75.65],[11.5,76.4],[11.7,77],[12,77.6],[12.6,77.9],[13.2,78.15],[13.7,78.2],[14.2,78.1],[14.8,78],[15.4,77.9],[16,77.5],[16.5,77.3],[17,77.45],[17.5,77.3],[17.9,77.45],[18.15,77.2],[18.45,76.8],[18.45,76],[18.4,75.3],[18.45,74.15]];function qC(o,t){if(o<Gf.minLat||o>Gf.maxLat||t<Gf.minLng||t>Gf.maxLng)return!1;let i=!1;const s=sS;for(let u=0,f=s.length-1;u<s.length;f=u++){const p=s[u][1],_=s[u][0],x=s[f][1],v=s[f][0];_>o!=v>o&&t<(x-p)*(o-_)/(v-_)+p&&(i=!i)}return i}const ZC=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  #root { max-width: 100%; padding: 0; text-align: left; }
  :root {
    --g400:#4ade80; --g500:#22c55e; --g600:#16a34a; --g700:#15803d; --g800:#166534;
    --gold:#d4a843;
    --d0:#080c10; --d1:#0d1117; --d2:#111820; --d3:#172030; --d4:#1e2d3d; --d5:#263547;
    --t1:#eef2ee; --t2:#9eb89e; --t3:#5a7a5a;
    --bdr:rgba(255,255,255,0.06); --bdrg:rgba(74,222,128,0.18);
    --r:14px; --rs:8px;
    --sh:0 24px 64px rgba(0,0,0,0.55);
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideIn { from { opacity:0; transform:translateX(-18px); } to { opacity:1; transform:translateX(0); } }
  @keyframes pulseDot { 0%,100% { opacity:.3; transform:scale(.8); } 50% { opacity:1; transform:scale(1.2); } }
  @keyframes floatUp { 0%,100% { transform:translateY(0) rotate(0deg); opacity:.25; } 50% { transform:translateY(-36px) rotate(180deg); opacity:.55; } }
  .fadeUp { animation: fadeUp .35s ease both; }
  .slideIn { animation: slideIn .4s ease both; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--d5); border-radius: 3px; }
  .leaflet-top, .leaflet-bottom { z-index: 800 !important; }
  input:-webkit-autofill { -webkit-box-shadow: 0 0 0 1000px var(--d3) inset !important; -webkit-text-fill-color: var(--t1) !important; }
`;function Gx(){return he.useEffect(()=>{const o=document.createElement("style");return o.textContent=ZC,document.head.appendChild(o),()=>document.head.removeChild(o)},[]),null}function Xm(){return k.jsx("span",{style:{display:"inline-block",width:15,height:15,border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.7s linear infinite",marginRight:8,flexShrink:0}})}function vl({size:o=22,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M7 20h10"}),k.jsx("path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}),k.jsx("path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}),k.jsx("path",{d:"M14.1 6a7 7 0 0 1 1.4 1.4c.4.6.6 1.3.6 2-.9.1-1.7 0-2.4-.3-.8-.3-1.4-.8-2-1.6-.5-.8-.9-1.9-.9-3.1 1.5.3 2.5.9 3.3 1.6z"})]})}function YC({size:o=22,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}),k.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"18"}),k.jsx("line",{x1:"15",y1:"6",x2:"15",y2:"21"})]})}function KC({size:o=22,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M6 18h8"}),k.jsx("path",{d:"M3 21h18"}),k.jsx("path",{d:"M14 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}),k.jsx("path",{d:"M14 7l-3 3"}),k.jsx("path",{d:"M9.5 9.5 7 12l-2-2 2.5-2.5"}),k.jsx("path",{d:"m14 7 2-2-2-2-2 2"})]})}function JC({size:o=22,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),k.jsx("circle",{cx:"12",cy:"5",r:"2"}),k.jsx("path",{d:"M12 7v4"})]})}function QC({size:o=18,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),k.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}function $C({size:o=26,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),k.jsx("polyline",{points:"17 8 12 3 7 8"}),k.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]})}function qm({size:o=18,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),k.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function tR({size:o=17,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),k.jsx("polyline",{points:"16 17 21 12 16 7"}),k.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})}function eR({size:o=17,color:t="currentColor"}){return k.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),k.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}function Zm({children:o,onClick:t,disabled:i,type:s="button"}){const[u,f]=he.useState(!1);return k.jsx("button",{type:s,onClick:t,disabled:i,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:"13px 20px",borderRadius:"var(--rs)",border:"1px solid rgba(74,222,128,0.2)",cursor:i?"not-allowed":"pointer",background:u&&!i?"linear-gradient(135deg,var(--g600),var(--g500))":"linear-gradient(135deg,var(--g700),var(--g600))",boxShadow:u&&!i?"0 4px 20px rgba(22,163,74,0.35)":"none",transform:u&&!i?"translateY(-1px)":"none",color:"#fff",fontSize:15,fontWeight:600,fontFamily:"'Plus Jakarta Sans',sans-serif",opacity:i?.5:1,transition:"all .2s"},children:o})}function Vx({title:o,data:t,error:i}){return i?k.jsxs("div",{className:"fadeUp",style:{background:"rgba(239,68,68,0.06)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"var(--r)",overflow:"hidden",marginTop:20},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 20px",background:"rgba(239,68,68,0.08)",borderBottom:"1px solid rgba(239,68,68,0.15)"},children:[k.jsx("span",{style:{fontSize:16},children:"⚠️"}),k.jsx("span",{style:{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:600,color:"#f87171"},children:"Error"})]}),k.jsx("p",{style:{padding:"14px 20px",color:"#fca5a5",fontSize:14,lineHeight:1.6},children:t.error||"Unknown error occurred."})]}):k.jsxs("div",{className:"fadeUp",style:{background:"var(--d3)",border:"1px solid var(--bdrg)",borderRadius:"var(--r)",overflow:"hidden",marginTop:20},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 20px",background:"rgba(74,222,128,0.05)",borderBottom:"1px solid rgba(74,222,128,0.1)"},children:[k.jsx("span",{style:{color:"var(--g400)",fontSize:16},children:"✦"}),k.jsx("span",{style:{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:600,color:"var(--g400)"},children:o})]}),Object.entries(t).map(([s,u])=>k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 20px",borderBottom:"1px solid rgba(255,255,255,0.04)",gap:16},children:[k.jsx("span",{style:{fontSize:13,fontWeight:500,color:"var(--t2)",textTransform:"capitalize",whiteSpace:"nowrap"},children:s.replace(/_/g," ")}),k.jsx("span",{style:{fontSize:14,fontWeight:700,color:"var(--t1)",textAlign:"right",maxWidth:"60%",wordBreak:"break-word",fontVariantNumeric:"tabular-nums"},children:typeof u=="object"?JSON.stringify(u):String(u)})]},s))]})}function nR(){const o=by();return he.useEffect(()=>{o.setMaxBounds(jm),o.on("drag",()=>o.panInsideBounds(jm,{animate:!1}))},[o]),null}function iR({onMapClick:o}){return x1({click(t){o(t.latlng)}}),null}function Xp({badge:o,title:t,desc:i}){return k.jsxs("div",{style:{marginBottom:28},children:[k.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(74,222,128,0.07)",border:"1px solid rgba(74,222,128,0.14)",color:"var(--g400)",fontSize:11,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",padding:"5px 13px",borderRadius:100,marginBottom:14},children:o}),k.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,30px)",fontWeight:600,color:"var(--t1)",lineHeight:1.2},children:t}),k.jsx("p",{style:{fontSize:15,fontWeight:300,color:"var(--t2)",marginTop:8,lineHeight:1.65,maxWidth:580},children:i})]})}function aR({onLoginSuccess:o}){const[t,i]=he.useState(""),[s,u]=he.useState(""),[f,p]=he.useState(""),[_,x]=he.useState(!1),[v,y]=he.useState(!1),[b,S]=he.useState({username:"",password:"",email:""}),[C,w]=he.useState(""),N=async E=>{E.preventDefault(),x(!0),p("");try{const P=await bn.post("http://127.0.0.1:8000/api/login/",{username:t,password:s});o(P.data.user.username)}catch{p("Invalid username or password. Please try again.")}finally{x(!1)}},A=async E=>{E.preventDefault(),w("");try{await bn.post("http://127.0.0.1:8000/api/register/",b),w("ok"),S({username:"",password:"",email:""}),setTimeout(()=>{y(!1),w("")},3e3)}catch(P){w("err:"+(P.response?.data?.error||"Registration failed."))}};return k.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",overflow:"hidden",background:"radial-gradient(ellipse at 15% 60%, #0a2218 0%, #080c10 55%), radial-gradient(ellipse at 85% 20%, #0f2a14 0%, transparent 50%)"},children:[k.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(74,222,128,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(74,222,128,0.025) 1px,transparent 1px)",backgroundSize:"52px 52px"}}),k.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:Array.from({length:14},(E,P)=>k.jsx("div",{style:{position:"absolute",bottom:-10,left:`${P*7+3}%`,width:P%3===0?4:6,height:P%3===0?4:6,background:P%2===0?"var(--g500)":"var(--gold)",borderRadius:P%4===0?"2px":"50%",animation:`floatUp ${9+P*.8}s ease-in-out ${P*.6}s infinite`}},P))}),v&&k.jsx("div",{onClick:E=>E.target===E.currentTarget&&y(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,padding:20,animation:"fadeUp .2s ease both"},children:k.jsxs("div",{style:{background:"var(--d2)",border:"1px solid var(--bdr)",borderRadius:"var(--r)",boxShadow:"var(--sh)",padding:36,width:"100%",maxWidth:400,position:"relative"},children:[k.jsx("button",{onClick:()=>y(!1),style:{position:"absolute",top:14,right:14,background:"var(--d3)",border:"1px solid var(--bdr)",borderRadius:8,padding:6,color:"var(--t2)",cursor:"pointer",display:"flex",alignItems:"center"},children:k.jsx(eR,{})}),k.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[k.jsx(vl,{size:34,color:"var(--g400)"}),k.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:600,color:"var(--t1)",marginTop:10,marginBottom:4},children:"Create Account"}),k.jsx("div",{style:{fontSize:13,color:"var(--t3)"},children:"Join the Krishi Sakhi community"})]}),k.jsxs("form",{onSubmit:A,style:{display:"flex",flexDirection:"column",gap:14},children:[["username","email","password"].map(E=>k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[k.jsx("label",{style:{fontSize:12,fontWeight:500,color:"var(--t2)"},children:E.charAt(0).toUpperCase()+E.slice(1)}),k.jsx("div",{style:{position:"relative"},children:k.jsx("input",{type:E==="password"?"password":E==="email"?"email":"text",required:E!=="email",value:b[E],placeholder:`Enter ${E}`,onChange:P=>S({...b,[E]:P.target.value}),style:{width:"100%",background:"var(--d3)",border:"1px solid var(--bdr)",borderRadius:"var(--rs)",padding:"11px 14px",fontSize:14,color:"var(--t1)",fontFamily:"'Plus Jakarta Sans',sans-serif",outline:"none"},onFocus:P=>{P.target.style.borderColor="var(--g500)",P.target.style.boxShadow="0 0 0 3px rgba(74,222,128,0.08)"},onBlur:P=>{P.target.style.borderColor="var(--bdr)",P.target.style.boxShadow="none"}})})]},E)),k.jsx(Zm,{type:"submit",children:"Create Account"})]}),C&&k.jsx("div",{style:{marginTop:14,padding:"10px 14px",borderRadius:"var(--rs)",fontSize:13,textAlign:"center",background:C==="ok"?"rgba(74,222,128,0.08)":"rgba(239,68,68,0.08)",border:C==="ok"?"1px solid rgba(74,222,128,0.2)":"1px solid rgba(239,68,68,0.2)",color:C==="ok"?"var(--g400)":"#fca5a5"},children:C==="ok"?"✓ Account created! You can now sign in.":C.replace("err:","")})]})}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:64,maxWidth:1040,width:"100%",zIndex:1,animation:"fadeUp .55s ease both",flexWrap:"wrap",justifyContent:"center"},children:[k.jsxs("div",{style:{flex:1,minWidth:280},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:52},children:[k.jsx("div",{style:{width:54,height:54,background:"linear-gradient(135deg,var(--g800),var(--g500))",borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 0 1px rgba(74,222,128,0.2), 0 8px 32px rgba(22,163,74,0.3)"},children:k.jsx(vl,{size:28,color:"#fff"})}),k.jsxs("div",{children:[k.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:21,fontWeight:600,color:"var(--t1)",lineHeight:1},children:"Krishi Sakhi"}),k.jsx("div",{style:{fontSize:11,fontWeight:500,color:"var(--g400)",letterSpacing:".08em",textTransform:"uppercase",marginTop:3},children:"AI Farming Intelligence"})]})]}),k.jsxs("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(34px,5vw,56px)",fontWeight:400,color:"var(--t1)",lineHeight:1.15,marginBottom:18},children:["Grow Smarter.",k.jsx("br",{}),k.jsx("em",{style:{color:"var(--g400)",fontStyle:"italic"},children:"Farm Better."})]}),k.jsxs("p",{style:{fontSize:16,fontWeight:300,color:"var(--t2)",lineHeight:1.75,maxWidth:400,marginBottom:36},children:["AI-powered crop recommendations, disease detection and expert advice — built exclusively for ",k.jsx("strong",{style:{color:"var(--t1)",fontWeight:600},children:"Karnataka farmers"}),"."]}),k.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginBottom:44},children:["🌾 Smart Crop Maps","🔬 Disease Diagnosis","🤖 AI Guidance"].map(E=>k.jsx("span",{style:{fontSize:13,fontWeight:500,color:"var(--g400)",background:"rgba(74,222,128,0.06)",border:"1px solid rgba(74,222,128,0.14)",padding:"7px 14px",borderRadius:100},children:E},E))}),k.jsx("div",{style:{display:"flex",gap:36},children:[["V2.0","ML Model"],["15+","Crops"],["94%","Accuracy"]].map(([E,P])=>k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[k.jsx("span",{style:{fontFamily:"'Playfair Display',serif",fontSize:30,fontWeight:400,color:"var(--gold)"},children:E}),k.jsx("span",{style:{fontSize:12,color:"var(--t3)"},children:P})]},P))})]}),k.jsxs("div",{style:{background:"var(--d2)",border:"1px solid var(--bdr)",borderRadius:24,boxShadow:"var(--sh)",padding:40,width:380,flexShrink:0},children:[k.jsxs("div",{style:{marginBottom:28},children:[k.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:600,color:"var(--t1)",marginBottom:4},children:"Welcome Back"}),k.jsx("div",{style:{fontSize:14,color:"var(--t3)"},children:"Sign in to your account"})]}),k.jsxs("form",{onSubmit:N,style:{display:"flex",flexDirection:"column",gap:16},children:[[{label:"Username",type:"text",val:t,set:i},{label:"Password",type:"password",val:s,set:u}].map(({label:E,type:P,val:B,set:F})=>k.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[k.jsx("label",{style:{fontSize:12,fontWeight:500,color:"var(--t2)"},children:E}),k.jsxs("div",{style:{position:"relative"},children:[k.jsx("span",{style:{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:"var(--t3)",pointerEvents:"none",fontSize:14,display:"flex"},children:E==="Password"?"🔒":k.jsx(qm,{size:15,color:"var(--t3)"})}),k.jsx("input",{type:P,value:B,placeholder:`Enter ${E.toLowerCase()}`,onChange:X=>F(X.target.value),style:{width:"100%",background:"var(--d3)",border:"1px solid var(--bdr)",borderRadius:"var(--rs)",padding:"12px 14px 12px 38px",fontSize:14,color:"var(--t1)",fontFamily:"'Plus Jakarta Sans',sans-serif",outline:"none"},onFocus:X=>{X.target.style.borderColor="var(--g500)",X.target.style.boxShadow="0 0 0 3px rgba(74,222,128,0.08)"},onBlur:X=>{X.target.style.borderColor="var(--bdr)",X.target.style.boxShadow="none"}})]})]},E)),f&&k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:"var(--rs)",padding:"10px 14px"},children:[k.jsx("span",{style:{fontSize:14},children:"⚠️"}),k.jsx("span",{style:{fontSize:13,color:"#fca5a5"},children:f})]}),k.jsx(Zm,{type:"submit",disabled:_,children:_?k.jsxs(k.Fragment,{children:[k.jsx(Xm,{}),"Signing in…"]}):"Sign In →"})]}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,margin:"20px 0"},children:[k.jsx("div",{style:{flex:1,height:1,background:"var(--bdr)"}}),k.jsx("span",{style:{fontSize:12,color:"var(--t3)"},children:"or"}),k.jsx("div",{style:{flex:1,height:1,background:"var(--bdr)"}})]}),k.jsxs("p",{style:{fontSize:13,color:"var(--t3)",textAlign:"center"},children:["New here?"," ",k.jsx("button",{onClick:()=>y(!0),style:{background:"none",border:"none",color:"var(--g400)",cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"'Plus Jakarta Sans',sans-serif"},children:"Create free account"})]}),k.jsx("p",{style:{fontSize:12,color:"var(--t3)",textAlign:"center",marginTop:10},children:k.jsx("a",{href:"#!",style:{color:"var(--t3)",textDecoration:"none"},children:"Forgot password?"})})]})]})]})}function rR({username:o,onLogout:t}){const[i,s]=he.useState("map"),[u,f]=he.useState(null),[p,_]=he.useState(null),[x,v]=he.useState(!1),[y,b]=he.useState(!1),[S,C]=he.useState(null),[w,N]=he.useState(null),[A,E]=he.useState(null),[P,B]=he.useState(!1),[F,X]=he.useState(""),[V,j]=he.useState([]),[D,H]=he.useState(!1),vt=he.useRef(null),Z=he.useRef(null);he.useEffect(()=>{vt.current?.scrollIntoView({behavior:"smooth"})},[V,D]);const rt=async I=>{const{lat:K,lng:bt}=I;if(b(!1),!qC(K,bt)){b(!0),setTimeout(()=>b(!1),3500);return}f(I),v(!0),_(null);try{const wt=await bn.post("http://127.0.0.1:8000/api/recommend-from-location/",{latitude:parseFloat(K.toFixed(6)),longitude:parseFloat(bt.toFixed(6))},{timeout:12e3});_({data:wt.data})}catch(wt){let Ot="Failed to get recommendation. ";wt.response?Ot+=`Server error: ${wt.response.status}`:wt.request?Ot+="Backend is not responding. Make sure python manage.py runserver is running.":Ot+=wt.message,_({error:!0,data:{error:Ot}})}finally{v(!1)}},ft=I=>{const K=I.target.files[0];K&&(C(K),N(URL.createObjectURL(K)),E(null))},mt=async()=>{if(!S)return;B(!0),E(null);const I=new FormData;I.append("image",S);try{const K=await bn.post("http://127.0.0.1:8000/api/predict-disease-v2/",I,{headers:{"Content-Type":"multipart/form-data"}});E({data:K.data})}catch{E({error:!0,data:{error:"Diagnosis failed. Is the backend running?"}})}finally{B(!1)}},lt=async I=>{if(I.preventDefault(),!F.trim())return;const K=[...V,{role:"user",text:F}];j(K),X(""),H(!0);try{const bt=await bn.post("http://127.0.0.1:8000/api/assistant/",{message:F});j([...K,{role:"bot",text:bt.data.response}])}catch{j([...K,{role:"bot",text:"Sorry, I'm having trouble connecting. Please try again."}])}finally{H(!1)}},G=[{id:"map",label:"Magic Map",Icon:YC},{id:"doc",label:"Crop Doctor",Icon:KC},{id:"chat",label:"AI Assistant",Icon:JC}];function q(){return k.jsxs("div",{className:"fadeUp",children:[k.jsx(Xp,{badge:"📍 Karnataka AI",title:"Magic Map Recommender",desc:"Click anywhere inside Karnataka to get instant AI-powered crop recommendations. Clicks outside the state are blocked."}),y&&k.jsxs("div",{className:"fadeUp",style:{display:"flex",alignItems:"center",gap:10,background:"rgba(245,158,11,0.08)",border:"1px solid rgba(245,158,11,0.25)",borderRadius:"var(--rs)",padding:"12px 16px",marginBottom:16},children:[k.jsx("span",{style:{fontSize:18},children:"⚠️"}),k.jsx("span",{style:{fontSize:13,fontWeight:500,color:"#fcd34d"},children:"That location is outside Karnataka. Please click within the state boundary."})]}),k.jsxs("div",{style:{height:440,borderRadius:"var(--r)",overflow:"hidden",border:"1px solid var(--bdrg)",boxShadow:"0 4px 32px rgba(0,0,0,0.45)",position:"relative",marginBottom:16},children:[k.jsxs(S1,{center:XC,zoom:7,minZoom:6,maxZoom:13,maxBounds:jm,maxBoundsViscosity:1,style:{height:"100%",width:"100%"},children:[k.jsx(E1,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),k.jsx(nR,{}),k.jsx(iR,{onMapClick:rt}),k.jsx(M1,{positions:sS,pathOptions:{color:"#4ade80",weight:2,opacity:.5,fillColor:"#4ade80",fillOpacity:.04,dashArray:"6,4"}}),u&&k.jsx(b1,{position:u})]}),k.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:"rgba(8,12,16,0.88)",backdropFilter:"blur(10px)",border:"1px solid var(--bdrg)",color:"var(--g400)",fontSize:13,fontWeight:600,padding:"8px 18px",borderRadius:100,zIndex:900,pointerEvents:"none",whiteSpace:"nowrap"},children:"🗺️ Karnataka — Click to get crop recommendation"})]}),x&&k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 0"},children:[k.jsx(Xm,{}),k.jsx("span",{style:{fontSize:14,fontWeight:500,color:"var(--g400)"},children:"Analyzing soil & climate data…"})]}),p&&k.jsx(Vx,{title:"Crop Recommendation",...p})]})}function it(){const[I,K]=he.useState(!1);return k.jsxs("div",{className:"fadeUp",children:[k.jsx(Xp,{badge:"🔬 Disease AI",title:"Multi-Crop Doctor V2",desc:"Upload a clear photo of a Tomato, Potato, or Maize leaf. Our deep-learning model diagnoses diseases in seconds."}),k.jsxs("div",{onClick:()=>Z.current?.click(),onMouseEnter:()=>K(!0),onMouseLeave:()=>K(!1),style:{background:I?"rgba(74,222,128,0.03)":"var(--d3)",border:I?"2px dashed rgba(74,222,128,0.35)":"2px dashed var(--d5)",borderRadius:"var(--r)",padding:"36px 40px",cursor:"pointer",marginBottom:16,transition:"all .2s"},children:[k.jsx("input",{ref:Z,type:"file",accept:"image/*",onChange:ft,style:{display:"none"}}),w?k.jsxs("div",{style:{position:"relative"},children:[k.jsx("img",{src:w,alt:"Leaf preview",style:{maxHeight:220,borderRadius:12,display:"block",margin:"0 auto"}}),k.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:12,opacity:I?1:0,transition:"opacity .2s"},children:k.jsx("span",{style:{fontSize:14,fontWeight:600,color:"#fff"},children:"Click to change image"})})]}):k.jsxs("div",{style:{textAlign:"center"},children:[k.jsx("div",{style:{width:64,height:64,background:"rgba(74,222,128,0.08)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:k.jsx($C,{size:26,color:"var(--g400)"})}),k.jsx("div",{style:{fontSize:16,fontWeight:600,color:"var(--t1)",marginBottom:6},children:"Drop your leaf photo here"}),k.jsx("div",{style:{fontSize:13,color:"var(--t3)"},children:"or click to browse · JPG PNG WEBP"})]})]}),k.jsx(Zm,{onClick:mt,disabled:!S||P,children:P?k.jsxs(k.Fragment,{children:[k.jsx(Xm,{}),"Diagnosing…"]}):"🔍 Diagnose Plant"}),A&&k.jsx(Vx,{title:"Diagnosis Result",...A})]})}function At(){return k.jsxs("div",{className:"fadeUp",style:{display:"flex",flexDirection:"column",height:"calc(100vh - 112px)"},children:[k.jsx(Xp,{badge:"🤖 AI Powered",title:"Farming AI Assistant",desc:"Ask anything about Karnataka farming — crops, soil, weather, government schemes, irrigation and more."}),k.jsxs("div",{style:{flex:1,overflowY:"auto",background:"var(--d3)",borderRadius:"var(--r)",border:"1px solid var(--bdr)",padding:20,display:"flex",flexDirection:"column",gap:12,marginBottom:12},children:[V.length===0&&k.jsxs("div",{style:{margin:"auto",textAlign:"center",padding:32},children:[k.jsx("div",{style:{fontSize:42,marginBottom:12},children:"🌱"}),k.jsx("p",{style:{fontSize:15,color:"var(--t2)",marginBottom:20},children:"Ask your farming AI anything"}),k.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"},children:["Best crops for Mysore district?","Drip irrigation setup tips?","PM Fasal Bima scheme?","Soil testing labs in Bangalore?"].map(I=>k.jsx("button",{onClick:()=>X(I),style:{fontSize:13,fontWeight:500,color:"var(--t2)",background:"var(--d4)",border:"1px solid var(--bdr)",padding:"8px 14px",borderRadius:100,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",transition:"all .15s"},onMouseEnter:K=>{K.target.style.borderColor="var(--bdrg)",K.target.style.color="var(--g400)"},onMouseLeave:K=>{K.target.style.borderColor="var(--bdr)",K.target.style.color="var(--t2)"},children:I},I))})]}),V.map((I,K)=>k.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:10,flexDirection:I.role==="user"?"row-reverse":"row"},children:[k.jsx("div",{style:{width:28,height:28,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:I.role==="bot"?"linear-gradient(135deg,var(--g800),var(--g600))":"var(--d5)"},children:I.role==="bot"?k.jsx(vl,{size:14,color:"#fff"}):k.jsx(qm,{size:14,color:"var(--t2)"})}),k.jsx("div",{className:"fadeUp",style:{maxWidth:"72%",padding:"12px 16px",fontSize:14,lineHeight:1.65,borderRadius:I.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",background:I.role==="user"?"linear-gradient(135deg,var(--g800),var(--g700))":"var(--d4)",color:I.role==="user"?"#e8f5e8":"var(--t1)"},children:I.text})]},K)),D&&k.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:[k.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"linear-gradient(135deg,var(--g800),var(--g600))",display:"flex",alignItems:"center",justifyContent:"center"},children:k.jsx(vl,{size:14,color:"#fff"})}),k.jsx("div",{style:{padding:"14px 18px",background:"var(--d4)",borderRadius:"16px 16px 16px 4px",display:"flex",gap:5,alignItems:"center"},children:[0,.2,.4].map(I=>k.jsx("span",{style:{width:7,height:7,background:"var(--t3)",borderRadius:"50%",animation:`pulseDot 1.2s ease-in-out ${I}s infinite`,display:"inline-block"}},I))})]}),k.jsx("div",{ref:vt})]}),k.jsxs("form",{onSubmit:lt,style:{display:"flex",gap:10,background:"var(--d3)",border:"1px solid var(--bdr)",borderRadius:14,padding:8},children:[k.jsx("input",{value:F,onChange:I=>X(I.target.value),placeholder:"Ask about farming, crops, schemes, soil…",style:{flex:1,background:"transparent",border:"none",outline:"none",padding:"10px 12px",fontSize:14,color:"var(--t1)",fontFamily:"'Plus Jakarta Sans',sans-serif"}}),k.jsx("button",{type:"submit",disabled:D,style:{background:"linear-gradient(135deg,var(--g700),var(--g600))",border:"none",color:"#fff",width:42,height:42,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",cursor:D?"not-allowed":"pointer",opacity:D?.5:1,flexShrink:0,transition:"all .15s"},children:k.jsx(QC,{})})]})]})}function xt({id:I,label:K,Icon:bt}){const wt=i===I,[Ot,nt]=he.useState(!1);return k.jsxs("button",{onClick:()=>s(I),onMouseEnter:()=>nt(!0),onMouseLeave:()=>nt(!1),style:{display:"flex",alignItems:"center",gap:12,padding:"11px 14px",borderRadius:"var(--rs)",width:"100%",textAlign:"left",border:wt?"1px solid rgba(74,222,128,0.2)":"1px solid transparent",background:wt?"rgba(74,222,128,0.09)":Ot?"var(--d3)":"transparent",color:wt?"var(--g400)":Ot?"var(--t2)":"var(--t3)",fontSize:14,fontWeight:wt?600:500,fontFamily:"'Plus Jakarta Sans',sans-serif",cursor:"pointer",transition:"all .15s"},children:[k.jsx(bt,{size:19,color:wt?"var(--g400)":"currentColor"}),k.jsx("span",{children:K}),wt&&k.jsx("span",{style:{marginLeft:"auto",width:6,height:6,borderRadius:"50%",background:"var(--g400)"}})]})}return k.jsxs("div",{style:{display:"flex",height:"100vh",overflow:"hidden",background:"var(--d1)"},children:[k.jsxs("aside",{className:"slideIn",style:{width:232,minWidth:232,background:"var(--d2)",borderRight:"1px solid var(--bdr)",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"22px 14px"},children:[k.jsxs("div",{children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"0 8px",marginBottom:44},children:[k.jsx("div",{style:{width:38,height:38,background:"linear-gradient(135deg,var(--g800),var(--g500))",borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(22,163,74,0.25)"},children:k.jsx(vl,{size:20,color:"#fff"})}),k.jsxs("div",{children:[k.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:600,color:"var(--t1)"},children:"Krishi Sakhi"}),k.jsx("div",{style:{fontSize:10,fontWeight:600,color:"var(--g400)",letterSpacing:".07em",textTransform:"uppercase"},children:"V2.0"})]})]}),k.jsx("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",letterSpacing:".1em",textTransform:"uppercase",padding:"0 14px",marginBottom:10},children:"Navigation"}),k.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:3},children:G.map(I=>k.jsx(xt,{...I},I.id))}),k.jsxs("div",{style:{margin:"32px 8px 0",padding:14,background:"rgba(74,222,128,0.05)",border:"1px solid rgba(74,222,128,0.12)",borderRadius:"var(--rs)",display:"flex",flexDirection:"column",gap:6},children:[k.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--g400)",letterSpacing:".06em",textTransform:"uppercase"},children:"📍 Region"}),k.jsx("div",{style:{fontSize:13,fontWeight:600,color:"var(--t1)"},children:"Karnataka, India"}),k.jsx("div",{style:{fontSize:12,color:"var(--t3)"},children:"Map restricted to state boundary"})]})]}),k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 8px",borderTop:"1px solid var(--bdr)",marginTop:16},children:[k.jsx("div",{style:{width:34,height:34,background:"var(--d4)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--t2)",flexShrink:0},children:k.jsx(qm,{size:16,color:"var(--t2)"})}),k.jsxs("div",{style:{flex:1,minWidth:0,overflow:"hidden"},children:[k.jsx("div",{style:{fontSize:13,fontWeight:600,color:"var(--t1)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:o}),k.jsx("div",{style:{fontSize:11,color:"var(--g400)"},children:"Farmer Pro"})]}),k.jsx("button",{onClick:t,title:"Logout",style:{background:"transparent",border:"none",color:"var(--t3)",cursor:"pointer",padding:6,borderRadius:8,display:"flex",alignItems:"center",transition:"all .15s"},onMouseEnter:I=>{I.currentTarget.style.color="#f87171",I.currentTarget.style.background="rgba(248,113,113,0.1)"},onMouseLeave:I=>{I.currentTarget.style.color="var(--t3)",I.currentTarget.style.background="transparent"},children:k.jsx(tR,{})})]})]}),k.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[k.jsxs("header",{style:{display:"none",padding:"14px 18px 0",flexDirection:"column",gap:10,borderBottom:"1px solid var(--bdr)",background:"var(--d2)"},id:"ks-mob-header",children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"'Playfair Display',serif",fontSize:18,color:"var(--t1)"},children:[k.jsx(vl,{size:18,color:"var(--g400)"})," Krishi Sakhi"]}),k.jsx("div",{style:{display:"flex",gap:4},children:G.map(({id:I,label:K,Icon:bt})=>k.jsxs("button",{onClick:()=>s(I),style:{display:"flex",alignItems:"center",gap:5,padding:"7px 12px",borderRadius:8,border:"none",background:i===I?"rgba(74,222,128,0.1)":"transparent",color:i===I?"var(--g400)":"var(--t3)",fontSize:12,fontWeight:i===I?600:400,fontFamily:"'Plus Jakarta Sans',sans-serif",cursor:"pointer"},children:[k.jsx(bt,{size:14,color:"currentColor"}),K]},I))})]}),k.jsx("div",{style:{flex:1,overflowY:"auto",padding:32},children:k.jsxs("div",{style:{maxWidth:800},children:[i==="map"&&k.jsx(q,{}),i==="doc"&&k.jsx(it,{}),i==="chat"&&k.jsx(At,{})]})})]}),k.jsx("style",{children:`
        @media (max-width: 720px) {
          aside { display: none !important; }
          #ks-mob-header { display: flex !important; }
        }
      `})]})}function sR(){const[o,t]=he.useState("landing"),[i,s]=he.useState(null),u=()=>{t(i?"dashboard":"login")},f=_=>{s(_),t("dashboard")},p=()=>{s(null),t("landing")};return o==="landing"?k.jsx(jC,{onGetStarted:u}):o==="login"?k.jsxs(k.Fragment,{children:[k.jsx(Gx,{}),k.jsx(aR,{onLoginSuccess:f})]}):k.jsxs(k.Fragment,{children:[k.jsx(Gx,{}),k.jsx(rR,{username:i,onLogout:p})]})}Db.createRoot(document.getElementById("root")).render(k.jsx(he.StrictMode,{children:k.jsx(sR,{})}));
