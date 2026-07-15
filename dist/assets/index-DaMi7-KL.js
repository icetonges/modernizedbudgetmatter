(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))c(x);new MutationObserver(x=>{for(const B of x)if(B.type==="childList")for(const k of B.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&c(k)}).observe(document,{childList:!0,subtree:!0});function w(x){const B={};return x.integrity&&(B.integrity=x.integrity),x.referrerPolicy&&(B.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?B.credentials="include":x.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function c(x){if(x.ep)return;x.ep=!0;const B=w(x);fetch(x.href,B)}})();var Cl={exports:{}},Ds={};var Hp;function Ff(){if(Hp)return Ds;Hp=1;var d=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function w(c,x,B){var k=null;if(B!==void 0&&(k=""+B),x.key!==void 0&&(k=""+x.key),"key"in x){B={};for(var D in x)D!=="key"&&(B[D]=x[D])}else B=x;return x=B.ref,{$$typeof:d,type:c,key:k,ref:x!==void 0?x:null,props:B}}return Ds.Fragment=m,Ds.jsx=w,Ds.jsxs=w,Ds}var Up;function Lf(){return Up||(Up=1,Cl.exports=Ff()),Cl.exports}var s=Lf(),Ml={exports:{}},Y={};var Pp;function Jf(){if(Pp)return Y;Pp=1;var d=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),k=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),V=Symbol.iterator;function _e(h){return h===null||typeof h!="object"?null:(h=V&&h[V]||h["@@iterator"],typeof h=="function"?h:null)}var Fe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ue=Object.assign,Nt={};function tt(h,T,z){this.props=h,this.context=T,this.refs=Nt,this.updater=z||Fe}tt.prototype.isReactComponent={},tt.prototype.setState=function(h,T){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,T,"setState")},tt.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function ta(){}ta.prototype=tt.prototype;function Ge(h,T,z){this.props=h,this.context=T,this.refs=Nt,this.updater=z||Fe}var pt=Ge.prototype=new ta;pt.constructor=Ge,Ue(pt,tt.prototype),pt.isPureReactComponent=!0;var _t=Array.isArray;function Le(){}var $={H:null,A:null,T:null,S:null},Je=Object.prototype.hasOwnProperty;function Bt(h,T,z){var q=z.ref;return{$$typeof:d,type:h,key:T,ref:q!==void 0?q:null,props:z}}function Ka(h,T){return Bt(h.type,T,h.props)}function kt(h){return typeof h=="object"&&h!==null&&h.$$typeof===d}function Ie(h){var T={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(z){return T[z]})}var _a=/\/+/g;function Rt(h,T){return typeof h=="object"&&h!==null&&h.key!=null?Ie(""+h.key):T.toString(36)}function jt(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Le,Le):(h.status="pending",h.then(function(T){h.status==="pending"&&(h.status="fulfilled",h.value=T)},function(T){h.status==="pending"&&(h.status="rejected",h.reason=T)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function j(h,T,z,q,L){var Z=typeof h;(Z==="undefined"||Z==="boolean")&&(h=null);var ie=!1;if(h===null)ie=!0;else switch(Z){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(h.$$typeof){case d:case m:ie=!0;break;case N:return ie=h._init,j(ie(h._payload),T,z,q,L)}}if(ie)return L=L(h),ie=q===""?"."+Rt(h,0):q,_t(L)?(z="",ie!=null&&(z=ie.replace(_a,"$&/")+"/"),j(L,T,z,"",function(Gn){return Gn})):L!=null&&(kt(L)&&(L=Ka(L,z+(L.key==null||h&&h.key===L.key?"":(""+L.key).replace(_a,"$&/")+"/")+ie)),T.push(L)),1;ie=0;var Pe=q===""?".":q+":";if(_t(h))for(var we=0;we<h.length;we++)q=h[we],Z=Pe+Rt(q,we),ie+=j(q,T,z,Z,L);else if(we=_e(h),typeof we=="function")for(h=we.call(h),we=0;!(q=h.next()).done;)q=q.value,Z=Pe+Rt(q,we++),ie+=j(q,T,z,Z,L);else if(Z==="object"){if(typeof h.then=="function")return j(jt(h),T,z,q,L);throw T=String(h),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ie}function O(h,T,z){if(h==null)return h;var q=[],L=0;return j(h,q,"","",function(Z){return T.call(z,Z,L++)}),q}function P(h){if(h._status===-1){var T=h._result;T=T(),T.then(function(z){(h._status===0||h._status===-1)&&(h._status=1,h._result=z)},function(z){(h._status===0||h._status===-1)&&(h._status=2,h._result=z)}),h._status===-1&&(h._status=0,h._result=T)}if(h._status===1)return h._result.default;throw h._result}var le=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},pe={map:O,forEach:function(h,T,z){O(h,function(){T.apply(this,arguments)},z)},count:function(h){var T=0;return O(h,function(){T++}),T},toArray:function(h){return O(h,function(T){return T})||[]},only:function(h){if(!kt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return Y.Activity=R,Y.Children=pe,Y.Component=tt,Y.Fragment=w,Y.Profiler=x,Y.PureComponent=Ge,Y.StrictMode=c,Y.Suspense=_,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,Y.__COMPILER_RUNTIME={__proto__:null,c:function(h){return $.H.useMemoCache(h)}},Y.cache=function(h){return function(){return h.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(h,T,z){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var q=Ue({},h.props),L=h.key;if(T!=null)for(Z in T.key!==void 0&&(L=""+T.key),T)!Je.call(T,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&T.ref===void 0||(q[Z]=T[Z]);var Z=arguments.length-2;if(Z===1)q.children=z;else if(1<Z){for(var ie=Array(Z),Pe=0;Pe<Z;Pe++)ie[Pe]=arguments[Pe+2];q.children=ie}return Bt(h.type,L,q)},Y.createContext=function(h){return h={$$typeof:k,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:B,_context:h},h},Y.createElement=function(h,T,z){var q,L={},Z=null;if(T!=null)for(q in T.key!==void 0&&(Z=""+T.key),T)Je.call(T,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(L[q]=T[q]);var ie=arguments.length-2;if(ie===1)L.children=z;else if(1<ie){for(var Pe=Array(ie),we=0;we<ie;we++)Pe[we]=arguments[we+2];L.children=Pe}if(h&&h.defaultProps)for(q in ie=h.defaultProps,ie)L[q]===void 0&&(L[q]=ie[q]);return Bt(h,Z,L)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(h){return{$$typeof:D,render:h}},Y.isValidElement=kt,Y.lazy=function(h){return{$$typeof:N,_payload:{_status:-1,_result:h},_init:P}},Y.memo=function(h,T){return{$$typeof:M,type:h,compare:T===void 0?null:T}},Y.startTransition=function(h){var T=$.T,z={};$.T=z;try{var q=h(),L=$.S;L!==null&&L(z,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(Le,le)}catch(Z){le(Z)}finally{T!==null&&z.types!==null&&(T.types=z.types),$.T=T}},Y.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},Y.use=function(h){return $.H.use(h)},Y.useActionState=function(h,T,z){return $.H.useActionState(h,T,z)},Y.useCallback=function(h,T){return $.H.useCallback(h,T)},Y.useContext=function(h){return $.H.useContext(h)},Y.useDebugValue=function(){},Y.useDeferredValue=function(h,T){return $.H.useDeferredValue(h,T)},Y.useEffect=function(h,T){return $.H.useEffect(h,T)},Y.useEffectEvent=function(h){return $.H.useEffectEvent(h)},Y.useId=function(){return $.H.useId()},Y.useImperativeHandle=function(h,T,z){return $.H.useImperativeHandle(h,T,z)},Y.useInsertionEffect=function(h,T){return $.H.useInsertionEffect(h,T)},Y.useLayoutEffect=function(h,T){return $.H.useLayoutEffect(h,T)},Y.useMemo=function(h,T){return $.H.useMemo(h,T)},Y.useOptimistic=function(h,T){return $.H.useOptimistic(h,T)},Y.useReducer=function(h,T,z){return $.H.useReducer(h,T,z)},Y.useRef=function(h){return $.H.useRef(h)},Y.useState=function(h){return $.H.useState(h)},Y.useSyncExternalStore=function(h,T,z){return $.H.useSyncExternalStore(h,T,z)},Y.useTransition=function(){return $.H.useTransition()},Y.version="19.2.7",Y}var Yp;function El(){return Yp||(Yp=1,Ml.exports=Jf()),Ml.exports}var te=El(),Tl={exports:{}},Os={},_l={exports:{}},Bl={};var Fp;function If(){return Fp||(Fp=1,(function(d){function m(j,O){var P=j.length;j.push(O);e:for(;0<P;){var le=P-1>>>1,pe=j[le];if(0<x(pe,O))j[le]=O,j[P]=pe,P=le;else break e}}function w(j){return j.length===0?null:j[0]}function c(j){if(j.length===0)return null;var O=j[0],P=j.pop();if(P!==O){j[0]=P;e:for(var le=0,pe=j.length,h=pe>>>1;le<h;){var T=2*(le+1)-1,z=j[T],q=T+1,L=j[q];if(0>x(z,P))q<pe&&0>x(L,z)?(j[le]=L,j[q]=P,le=q):(j[le]=z,j[T]=P,le=T);else if(q<pe&&0>x(L,P))j[le]=L,j[q]=P,le=q;else break e}}return O}function x(j,O){var P=j.sortIndex-O.sortIndex;return P!==0?P:j.id-O.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var B=performance;d.unstable_now=function(){return B.now()}}else{var k=Date,D=k.now();d.unstable_now=function(){return k.now()-D}}var _=[],M=[],N=1,R=null,V=3,_e=!1,Fe=!1,Ue=!1,Nt=!1,tt=typeof setTimeout=="function"?setTimeout:null,ta=typeof clearTimeout=="function"?clearTimeout:null,Ge=typeof setImmediate<"u"?setImmediate:null;function pt(j){for(var O=w(M);O!==null;){if(O.callback===null)c(M);else if(O.startTime<=j)c(M),O.sortIndex=O.expirationTime,m(_,O);else break;O=w(M)}}function _t(j){if(Ue=!1,pt(j),!Fe)if(w(_)!==null)Fe=!0,Le||(Le=!0,Ie());else{var O=w(M);O!==null&&jt(_t,O.startTime-j)}}var Le=!1,$=-1,Je=5,Bt=-1;function Ka(){return Nt?!0:!(d.unstable_now()-Bt<Je)}function kt(){if(Nt=!1,Le){var j=d.unstable_now();Bt=j;var O=!0;try{e:{Fe=!1,Ue&&(Ue=!1,ta($),$=-1),_e=!0;var P=V;try{t:{for(pt(j),R=w(_);R!==null&&!(R.expirationTime>j&&Ka());){var le=R.callback;if(typeof le=="function"){R.callback=null,V=R.priorityLevel;var pe=le(R.expirationTime<=j);if(j=d.unstable_now(),typeof pe=="function"){R.callback=pe,pt(j),O=!0;break t}R===w(_)&&c(_),pt(j)}else c(_);R=w(_)}if(R!==null)O=!0;else{var h=w(M);h!==null&&jt(_t,h.startTime-j),O=!1}}break e}finally{R=null,V=P,_e=!1}O=void 0}}finally{O?Ie():Le=!1}}}var Ie;if(typeof Ge=="function")Ie=function(){Ge(kt)};else if(typeof MessageChannel<"u"){var _a=new MessageChannel,Rt=_a.port2;_a.port1.onmessage=kt,Ie=function(){Rt.postMessage(null)}}else Ie=function(){tt(kt,0)};function jt(j,O){$=tt(function(){j(d.unstable_now())},O)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(j){j.callback=null},d.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<j?Math.floor(1e3/j):5},d.unstable_getCurrentPriorityLevel=function(){return V},d.unstable_next=function(j){switch(V){case 1:case 2:case 3:var O=3;break;default:O=V}var P=V;V=O;try{return j()}finally{V=P}},d.unstable_requestPaint=function(){Nt=!0},d.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var P=V;V=j;try{return O()}finally{V=P}},d.unstable_scheduleCallback=function(j,O,P){var le=d.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?le+P:le):P=le,j){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=P+pe,j={id:N++,callback:O,priorityLevel:j,startTime:P,expirationTime:pe,sortIndex:-1},P>le?(j.sortIndex=P,m(M,j),w(_)===null&&j===w(M)&&(Ue?(ta($),$=-1):Ue=!0,jt(_t,P-le))):(j.sortIndex=pe,m(_,j),Fe||_e||(Fe=!0,Le||(Le=!0,Ie()))),j},d.unstable_shouldYield=Ka,d.unstable_wrapCallback=function(j){var O=V;return function(){var P=V;V=O;try{return j.apply(this,arguments)}finally{V=P}}}})(Bl)),Bl}var Lp;function Vf(){return Lp||(Lp=1,_l.exports=If()),_l.exports}var kl={exports:{}},He={};var Jp;function Zf(){if(Jp)return He;Jp=1;var d=El();function m(_){var M="https://react.dev/errors/"+_;if(1<arguments.length){M+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)M+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+_+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(){}var c={d:{f:w,r:function(){throw Error(m(522))},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},x=Symbol.for("react.portal");function B(_,M,N){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:R==null?null:""+R,children:_,containerInfo:M,implementation:N}}var k=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(_,M){if(_==="font")return"";if(typeof M=="string")return M==="use-credentials"?M:""}return He.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,He.createPortal=function(_,M){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M||M.nodeType!==1&&M.nodeType!==9&&M.nodeType!==11)throw Error(m(299));return B(_,M,null,N)},He.flushSync=function(_){var M=k.T,N=c.p;try{if(k.T=null,c.p=2,_)return _()}finally{k.T=M,c.p=N,c.d.f()}},He.preconnect=function(_,M){typeof _=="string"&&(M?(M=M.crossOrigin,M=typeof M=="string"?M==="use-credentials"?M:"":void 0):M=null,c.d.C(_,M))},He.prefetchDNS=function(_){typeof _=="string"&&c.d.D(_)},He.preinit=function(_,M){if(typeof _=="string"&&M&&typeof M.as=="string"){var N=M.as,R=D(N,M.crossOrigin),V=typeof M.integrity=="string"?M.integrity:void 0,_e=typeof M.fetchPriority=="string"?M.fetchPriority:void 0;N==="style"?c.d.S(_,typeof M.precedence=="string"?M.precedence:void 0,{crossOrigin:R,integrity:V,fetchPriority:_e}):N==="script"&&c.d.X(_,{crossOrigin:R,integrity:V,fetchPriority:_e,nonce:typeof M.nonce=="string"?M.nonce:void 0})}},He.preinitModule=function(_,M){if(typeof _=="string")if(typeof M=="object"&&M!==null){if(M.as==null||M.as==="script"){var N=D(M.as,M.crossOrigin);c.d.M(_,{crossOrigin:N,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0})}}else M==null&&c.d.M(_)},He.preload=function(_,M){if(typeof _=="string"&&typeof M=="object"&&M!==null&&typeof M.as=="string"){var N=M.as,R=D(N,M.crossOrigin);c.d.L(_,N,{crossOrigin:R,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0,type:typeof M.type=="string"?M.type:void 0,fetchPriority:typeof M.fetchPriority=="string"?M.fetchPriority:void 0,referrerPolicy:typeof M.referrerPolicy=="string"?M.referrerPolicy:void 0,imageSrcSet:typeof M.imageSrcSet=="string"?M.imageSrcSet:void 0,imageSizes:typeof M.imageSizes=="string"?M.imageSizes:void 0,media:typeof M.media=="string"?M.media:void 0})}},He.preloadModule=function(_,M){if(typeof _=="string")if(M){var N=D(M.as,M.crossOrigin);c.d.m(_,{as:typeof M.as=="string"&&M.as!=="script"?M.as:void 0,crossOrigin:N,integrity:typeof M.integrity=="string"?M.integrity:void 0})}else c.d.m(_)},He.requestFormReset=function(_){c.d.r(_)},He.unstable_batchedUpdates=function(_,M){return _(M)},He.useFormState=function(_,M,N){return k.H.useFormState(_,M,N)},He.useFormStatus=function(){return k.H.useHostTransitionStatus()},He.version="19.2.7",He}var Ip;function Qf(){if(Ip)return kl.exports;Ip=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(m){console.error(m)}}return d(),kl.exports=Zf(),kl.exports}var Vp;function Xf(){if(Vp)return Os;Vp=1;var d=Vf(),m=El(),w=Qf();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function B(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function k(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(B(e)!==e)throw Error(c(188))}function M(e){var t=e.alternate;if(!t){if(t=B(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return _(i),e;if(o===n)return _(i),t;o=o.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=o;else{for(var r=!1,l=i.child;l;){if(l===a){r=!0,a=i,n=o;break}if(l===n){r=!0,n=i,a=o;break}l=l.sibling}if(!r){for(l=o.child;l;){if(l===a){r=!0,a=o,n=i;break}if(l===n){r=!0,n=o,a=i;break}l=l.sibling}if(!r)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,V=Symbol.for("react.element"),_e=Symbol.for("react.transitional.element"),Fe=Symbol.for("react.portal"),Ue=Symbol.for("react.fragment"),Nt=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),ta=Symbol.for("react.consumer"),Ge=Symbol.for("react.context"),pt=Symbol.for("react.forward_ref"),_t=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),Ka=Symbol.for("react.memo_cache_sentinel"),kt=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=kt&&e[kt]||e["@@iterator"],typeof e=="function"?e:null)}var _a=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_a?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ue:return"Fragment";case tt:return"Profiler";case Nt:return"StrictMode";case _t:return"Suspense";case Le:return"SuspenseList";case Bt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Fe:return"Portal";case Ge:return e.displayName||"Context";case ta:return(e._context.displayName||"Context")+".Consumer";case pt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var jt=Array.isArray,j=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},le=[],pe=-1;function h(e){return{current:e}}function T(e){0>pe||(e.current=le[pe],le[pe]=null,pe--)}function z(e,t){pe++,le[pe]=e.current,e.current=t}var q=h(null),L=h(null),Z=h(null),ie=h(null);function Pe(e,t){switch(z(Z,t),z(L,e),z(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lp(t),e=cp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(q),z(q,e)}function we(){T(q),T(L),T(Z)}function Gn(e){e.memoizedState!==null&&z(ie,e);var t=q.current,a=cp(t,e.type);t!==a&&(z(L,e),z(q,a))}function Rs(e){L.current===e&&(T(q),T(L)),ie.current===e&&(T(ie),Ts._currentValue=P)}var oo,Gl;function Ba(e){if(oo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);oo=t&&t[1]||"",Gl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oo+e+Gl}var ro=!1;function lo(e,t){if(!e||ro)return"";ro=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(y){var v=y}Reflect.construct(e,[],C)}else{try{C.call()}catch(y){v=y}e.call(C.prototype)}}else{try{throw Error()}catch(y){v=y}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(y){if(y&&v&&typeof y.stack=="string")return[y.stack,v.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),r=o[0],l=o[1];if(r&&l){var u=r.split(`
`),b=l.split(`
`);for(i=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;if(n===u.length||i===b.length)for(n=u.length-1,i=b.length-1;1<=n&&0<=i&&u[n]!==b[i];)i--;for(;1<=n&&0<=i;n--,i--)if(u[n]!==b[i]){if(n!==1||i!==1)do if(n--,i--,0>i||u[n]!==b[i]){var A=`
`+u[n].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=n&&0<=i);break}}}finally{ro=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ba(a):""}function yh(e,t){switch(e.tag){case 26:case 27:case 5:return Ba(e.type);case 16:return Ba("Lazy");case 13:return e.child!==t&&t!==null?Ba("Suspense Fallback"):Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 15:return lo(e.type,!1);case 11:return lo(e.type.render,!1);case 1:return lo(e.type,!0);case 31:return Ba("Activity");default:return""}}function Hl(e){try{var t="",a=null;do t+=yh(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var co=Object.prototype.hasOwnProperty,uo=d.unstable_scheduleCallback,po=d.unstable_cancelCallback,xh=d.unstable_shouldYield,wh=d.unstable_requestPaint,at=d.unstable_now,Ah=d.unstable_getCurrentPriorityLevel,Ul=d.unstable_ImmediatePriority,Pl=d.unstable_UserBlockingPriority,qs=d.unstable_NormalPriority,jh=d.unstable_LowPriority,Yl=d.unstable_IdlePriority,Sh=d.log,Ch=d.unstable_setDisableYieldValue,Hn=null,nt=null;function aa(e){if(typeof Sh=="function"&&Ch(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Hn,e)}catch{}}var st=Math.clz32?Math.clz32:_h,Mh=Math.log,Th=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(Mh(e)/Th|0)|0}var Gs=256,Hs=262144,Us=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ps(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var l=n&134217727;return l!==0?(n=l&~o,n!==0?i=ka(n):(r&=l,r!==0?i=ka(r):a||(a=l&~e,a!==0&&(i=ka(a))))):(l=n&~o,l!==0?i=ka(l):r!==0?i=ka(r):a||(a=n&~e,a!==0&&(i=ka(a)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:i}function Un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fl(){var e=Us;return Us<<=1,(Us&62914560)===0&&(Us=4194304),e}function ho(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Pn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kh(e,t,a,n,i,o){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,u=e.expirationTimes,b=e.hiddenUpdates;for(a=r&~a;0<a;){var A=31-st(a),C=1<<A;l[A]=0,u[A]=-1;var v=b[A];if(v!==null)for(b[A]=null,A=0;A<v.length;A++){var y=v[A];y!==null&&(y.lane&=-536870913)}a&=~C}n!==0&&Ll(e,n,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(r&~t))}function Ll(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-st(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Jl(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-st(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Il(e,t){var a=t&-t;return a=(a&42)!==0?1:mo(a),(a&(e.suspendedLanes|t))!==0?0:a}function mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vl(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:Op(e.type))}function Zl(e,t){var a=O.p;try{return O.p=e,t()}finally{O.p=a}}var na=Math.random().toString(36).slice(2),Oe="__reactFiber$"+na,Ve="__reactProps$"+na,Wa="__reactContainer$"+na,go="__reactEvents$"+na,Dh="__reactListeners$"+na,Oh="__reactHandles$"+na,Ql="__reactResources$"+na,Yn="__reactMarker$"+na;function bo(e){delete e[Oe],delete e[Ve],delete e[go],delete e[Dh],delete e[Oh]}function $a(e){var t=e[Oe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Wa]||a[Oe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=gp(e);e!==null;){if(a=e[Oe])return a;e=gp(e)}return t}e=a,a=e.parentNode}return null}function en(e){if(e=e[Oe]||e[Wa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function tn(e){var t=e[Ql];return t||(t=e[Ql]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Yn]=!0}var Xl=new Set,Kl={};function Da(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Kl[e]=t,e=0;e<t.length;e++)Xl.add(t[e])}var zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wl={},$l={};function Eh(e){return co.call($l,e)?!0:co.call(Wl,e)?!1:zh.test(e)?$l[e]=!0:(Wl[e]=!0,!1)}function Ys(e,t,a){if(Eh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Fs(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nh(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,o.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){if(!e._valueTracker){var t=ec(e)?"checked":"value";e._valueTracker=Nh(e,t,""+e[t])}}function tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ec(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rh=/[\n"\\]/g;function mt(e){return e.replace(Rh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yo(e,t,a,n,i,o,r,l){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?xo(e,r,ht(t)):a!=null?xo(e,r,ht(a)):n!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+ht(l):e.removeAttribute("name")}function ac(e,t,a,n,i,o,r,l){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){vo(e);return}a=a!=null?""+ht(a):"",t=t!=null?""+ht(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),vo(e)}function xo(e,t,a){t==="number"&&Ls(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ht(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nc(e,t,a){if(t!=null&&(t=""+ht(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ht(a):""}function sc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(jt(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ht(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),vo(e)}function sn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var qh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ic(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||qh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function oc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&ic(e,i,n)}else for(var o in t)t.hasOwnProperty(o)&&ic(e,o,t[o])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Js(e){return Hh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Ao=null;function jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,rn=null;function rc(e){var t=en(e);if(t&&(e=t.stateNode)){var a=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(yo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Ve]||null;if(!i)throw Error(c(90));yo(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&tc(n)}break e;case"textarea":nc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&nn(e,!!a.multiple,t,!1)}}}var So=!1;function lc(e,t,a){if(So)return e(t,a);So=!0;try{var n=e(t);return n}finally{if(So=!1,(on!==null||rn!==null)&&(Oi(),on&&(t=on,e=rn,rn=on=null,rc(t),e)))for(t=0;t<e.length;t++)rc(e[t])}}function Ln(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ve]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Co=!1;if(Ht)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Co=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Co=!1}var sa=null,Mo=null,Is=null;function cc(){if(Is)return Is;var e,t=Mo,a=t.length,n,i="value"in sa?sa.value:sa.textContent,o=i.length;for(e=0;e<a&&t[e]===i[e];e++);var r=a-e;for(n=1;n<=r&&t[a-n]===i[o-n];n++);return Is=i.slice(e,1<n?1-n:void 0)}function Vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function dc(){return!1}function Ze(e){function t(a,n,i,o,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=r,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zs:dc,this.isPropagationStopped=dc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Ze(Oa),In=R({},Oa,{view:0,detail:0}),Uh=Ze(In),To,_o,Vn,Xs=R({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(To=e.screenX-Vn.screenX,_o=e.screenY-Vn.screenY):_o=To=0,Vn=e),To)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),uc=Ze(Xs),Ph=R({},Xs,{dataTransfer:0}),Yh=Ze(Ph),Fh=R({},In,{relatedTarget:0}),Bo=Ze(Fh),Lh=R({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=Ze(Lh),Ih=R({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vh=Ze(Ih),Zh=R({},Oa,{data:0}),pc=Ze(Zh),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kh[e])?!!t[e]:!1}function ko(){return Wh}var $h=R({},In,{key:function(e){if(e.key){var t=Qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(e){return e.type==="keypress"?Vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),em=Ze($h),tm=R({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=Ze(tm),am=R({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),nm=Ze(am),sm=R({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),im=Ze(sm),om=R({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rm=Ze(om),lm=R({},Oa,{newState:0,oldState:0}),cm=Ze(lm),dm=[9,13,27,32],Do=Ht&&"CompositionEvent"in window,Zn=null;Ht&&"documentMode"in document&&(Zn=document.documentMode);var um=Ht&&"TextEvent"in window&&!Zn,mc=Ht&&(!Do||Zn&&8<Zn&&11>=Zn),fc=" ",gc=!1;function bc(e,t){switch(e){case"keyup":return dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function pm(e,t){switch(e){case"compositionend":return vc(t);case"keypress":return t.which!==32?null:(gc=!0,fc);case"textInput":return e=t.data,e===fc&&gc?null:e;default:return null}}function hm(e,t){if(ln)return e==="compositionend"||!Do&&bc(e,t)?(e=cc(),Is=Mo=sa=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mc&&t.locale!=="ko"?null:t.data;default:return null}}var mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mm[e.type]:t==="textarea"}function xc(e,t,a,n){on?rn?rn.push(n):rn=[n]:on=n,t=Hi(t,"onChange"),0<t.length&&(a=new Qs("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Qn=null,Xn=null;function fm(e){ap(e,0)}function Ks(e){var t=Fn(e);if(tc(t))return e}function wc(e,t){if(e==="change")return t}var Ac=!1;if(Ht){var Oo;if(Ht){var zo="oninput"in document;if(!zo){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),zo=typeof jc.oninput=="function"}Oo=zo}else Oo=!1;Ac=Oo&&(!document.documentMode||9<document.documentMode)}function Sc(){Qn&&(Qn.detachEvent("onpropertychange",Cc),Xn=Qn=null)}function Cc(e){if(e.propertyName==="value"&&Ks(Xn)){var t=[];xc(t,Xn,e,jo(e)),lc(fm,t)}}function gm(e,t,a){e==="focusin"?(Sc(),Qn=t,Xn=a,Qn.attachEvent("onpropertychange",Cc)):e==="focusout"&&Sc()}function bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ks(Xn)}function vm(e,t){if(e==="click")return Ks(t)}function ym(e,t){if(e==="input"||e==="change")return Ks(t)}function xm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:xm;function Kn(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!co.call(t,i)||!it(e[i],t[i]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,t){var a=Mc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mc(a)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ls(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ls(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wm=Ht&&"documentMode"in document&&11>=document.documentMode,cn=null,No=null,Wn=null,Ro=!1;function kc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ro||cn==null||cn!==Ls(n)||(n=cn,"selectionStart"in n&&Eo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wn&&Kn(Wn,n)||(Wn=n,n=Hi(No,"onSelect"),0<n.length&&(t=new Qs("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=cn)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var dn={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},qo={},Dc={};Ht&&(Dc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Ea(e){if(qo[e])return qo[e];if(!dn[e])return e;var t=dn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Dc)return qo[e]=t[a];return e}var Oc=Ea("animationend"),zc=Ea("animationiteration"),Ec=Ea("animationstart"),Am=Ea("transitionrun"),jm=Ea("transitionstart"),Sm=Ea("transitioncancel"),Nc=Ea("transitionend"),Rc=new Map,Go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Go.push("scrollEnd");function St(e,t){Rc.set(e,t),Da(t,[e])}var Ws=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],un=0,Ho=0;function $s(){for(var e=un,t=Ho=un=0;t<e;){var a=ft[t];ft[t++]=null;var n=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var o=ft[t];if(ft[t++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}o!==0&&qc(a,i,o)}}function ei(e,t,a,n){ft[un++]=e,ft[un++]=t,ft[un++]=a,ft[un++]=n,Ho|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Uo(e,t,a,n){return ei(e,t,a,n),ti(e)}function Na(e,t){return ei(e,null,null,t),ti(e)}function qc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-st(a),e=o.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),o):null}function ti(e){if(50<xs)throw xs=0,Qr=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pn={};function Cm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,n){return new Cm(e,t,a,n)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Gc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ai(e,t,a,n,i,o){var r=0;if(n=e,typeof e=="function")Po(e)&&(r=1);else if(typeof e=="string")r=Df(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Bt:return e=ot(31,a,t,i),e.elementType=Bt,e.lanes=o,e;case Ue:return Ra(a.children,i,o,t);case Nt:r=8,i|=24;break;case tt:return e=ot(12,a,t,i|2),e.elementType=tt,e.lanes=o,e;case _t:return e=ot(13,a,t,i),e.elementType=_t,e.lanes=o,e;case Le:return e=ot(19,a,t,i),e.elementType=Le,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ge:r=10;break e;case ta:r=9;break e;case pt:r=11;break e;case $:r=14;break e;case Je:r=16,n=null;break e}r=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=ot(r,a,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Ra(e,t,a,n){return e=ot(7,e,n,t),e.lanes=a,e}function Yo(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function Hc(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function Fo(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Uc=new WeakMap;function gt(e,t){if(typeof e=="object"&&e!==null){var a=Uc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Hl(t)},Uc.set(e,t),t)}return{value:e,source:t,stack:Hl(t)}}var hn=[],mn=0,ni=null,$n=0,bt=[],vt=0,ia=null,Dt=1,Ot="";function Pt(e,t){hn[mn++]=$n,hn[mn++]=ni,ni=e,$n=t}function Pc(e,t,a){bt[vt++]=Dt,bt[vt++]=Ot,bt[vt++]=ia,ia=e;var n=Dt;e=Ot;var i=32-st(n)-1;n&=~(1<<i),a+=1;var o=32-st(t)+i;if(30<o){var r=i-i%5;o=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Dt=1<<32-st(t)+i|a<<i|n,Ot=o+e}else Dt=1<<o|a<<i|n,Ot=e}function Lo(e){e.return!==null&&(Pt(e,1),Pc(e,1,0))}function Jo(e){for(;e===ni;)ni=hn[--mn],hn[mn]=null,$n=hn[--mn],hn[mn]=null;for(;e===ia;)ia=bt[--vt],bt[vt]=null,Ot=bt[--vt],bt[vt]=null,Dt=bt[--vt],bt[vt]=null}function Yc(e,t){bt[vt++]=Dt,bt[vt++]=Ot,bt[vt++]=ia,Dt=t.id,Ot=t.overflow,ia=e}var ze=null,me=null,ee=!1,oa=null,yt=!1,Io=Error(c(519));function ra(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw es(gt(t,e)),Io}function Fc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Oe]=e,t[Ve]=n,a){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(a=0;a<As.length;a++)X(As[a],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),ac(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),sc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||op(t.textContent,a)?(n.popover!=null&&(X("beforetoggle",t),X("toggle",t)),n.onScroll!=null&&X("scroll",t),n.onScrollEnd!=null&&X("scrollend",t),n.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ra(e,!0)}function Lc(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:ze=ze.return}}function fn(e){if(e!==ze)return!1;if(!ee)return Lc(e),ee=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dl(e.type,e.memoizedProps)),a=!a),a&&me&&ra(e),Lc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));me=fp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));me=fp(e)}else t===27?(t=me,wa(e.type)?(e=fl,fl=null,me=e):me=t):me=ze?wt(e.stateNode.nextSibling):null;return!0}function qa(){me=ze=null,ee=!1}function Vo(){var e=oa;return e!==null&&(We===null?We=e:We.push.apply(We,e),oa=null),e}function es(e){oa===null?oa=[e]:oa.push(e)}var Zo=h(null),Ga=null,Yt=null;function la(e,t,a){z(Zo,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=Zo.current,T(Zo)}function Qo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Xo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var r=i.child;o=o.firstContext;e:for(;o!==null;){var l=o;o=i;for(var u=0;u<t.length;u++)if(l.context===t[u]){o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),Qo(o.return,a,e),n||(r=null);break e}o=l.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(c(341));r.lanes|=a,o=r.alternate,o!==null&&(o.lanes|=a),Qo(r,a,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function gn(e,t,a,n){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var l=i.type;it(i.pendingProps.value,r.value)||(e!==null?e.push(l):e=[l])}}else if(i===ie.current){if(r=i.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ts):e=[Ts])}i=i.return}e!==null&&Xo(t,e,a,n),t.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ga=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ee(e){return Jc(Ga,e)}function ii(e,t){return Ga===null&&Ha(e),Jc(e,t)}function Jc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Yt===null){if(e===null)throw Error(c(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return a}var Mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Tm=d.unstable_scheduleCallback,_m=d.unstable_NormalPriority,Se={$$typeof:Ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ko(){return{controller:new Mm,data:new Map,refCount:0}}function ts(e){e.refCount--,e.refCount===0&&Tm(_m,function(){e.controller.abort()})}var as=null,Wo=0,bn=0,vn=null;function Bm(e,t){if(as===null){var a=as=[];Wo=0,bn=tl(),vn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Wo++,t.then(Ic,Ic),t}function Ic(){if(--Wo===0&&as!==null){vn!==null&&(vn.status="fulfilled");var e=as;as=null,bn=0,vn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function km(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Vc=j.S;j.S=function(e,t){ku=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bm(e,t),Vc!==null&&Vc(e,t)};var Ua=h(null);function $o(){var e=Ua.current;return e!==null?e:he.pooledCache}function oi(e,t){t===null?z(Ua,Ua.current):z(Ua,t.pool)}function Zc(){var e=$o();return e===null?null:{parent:Se._currentValue,pool:e}}var yn=Error(c(460)),er=Error(c(474)),ri=Error(c(542)),li={then:function(){}};function Qc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wc(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wc(e),e}throw Ya=t,yn}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ya=a,yn):a}}var Ya=null;function Kc(){if(Ya===null)throw Error(c(459));var e=Ya;return Ya=null,e}function Wc(e){if(e===yn||e===ri)throw Error(c(483))}var xn=null,ns=0;function ci(e){var t=ns;return ns+=1,xn===null&&(xn=[]),Xc(xn,e,t)}function ss(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===V?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $c(e){function t(f,p){if(e){var g=f.deletions;g===null?(f.deletions=[p],f.flags|=16):g.push(p)}}function a(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function n(f){for(var p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(f,p){return f=Ut(f,p),f.index=0,f.sibling=null,f}function o(f,p,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<p?(f.flags|=67108866,p):g):(f.flags|=67108866,p)):(f.flags|=1048576,p)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function l(f,p,g,S){return p===null||p.tag!==6?(p=Yo(g,f.mode,S),p.return=f,p):(p=i(p,g),p.return=f,p)}function u(f,p,g,S){var H=g.type;return H===Ue?A(f,p,g.props.children,S,g.key):p!==null&&(p.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Je&&Pa(H)===p.type)?(p=i(p,g.props),ss(p,g),p.return=f,p):(p=ai(g.type,g.key,g.props,null,f.mode,S),ss(p,g),p.return=f,p)}function b(f,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Fo(g,f.mode,S),p.return=f,p):(p=i(p,g.children||[]),p.return=f,p)}function A(f,p,g,S,H){return p===null||p.tag!==7?(p=Ra(g,f.mode,S,H),p.return=f,p):(p=i(p,g),p.return=f,p)}function C(f,p,g){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Yo(""+p,f.mode,g),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _e:return g=ai(p.type,p.key,p.props,null,f.mode,g),ss(g,p),g.return=f,g;case Fe:return p=Fo(p,f.mode,g),p.return=f,p;case Je:return p=Pa(p),C(f,p,g)}if(jt(p)||Ie(p))return p=Ra(p,f.mode,g,null),p.return=f,p;if(typeof p.then=="function")return C(f,ci(p),g);if(p.$$typeof===Ge)return C(f,ii(f,p),g);di(f,p)}return null}function v(f,p,g,S){var H=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return H!==null?null:l(f,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _e:return g.key===H?u(f,p,g,S):null;case Fe:return g.key===H?b(f,p,g,S):null;case Je:return g=Pa(g),v(f,p,g,S)}if(jt(g)||Ie(g))return H!==null?null:A(f,p,g,S,null);if(typeof g.then=="function")return v(f,p,ci(g),S);if(g.$$typeof===Ge)return v(f,p,ii(f,g),S);di(f,g)}return null}function y(f,p,g,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(g)||null,l(p,f,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _e:return f=f.get(S.key===null?g:S.key)||null,u(p,f,S,H);case Fe:return f=f.get(S.key===null?g:S.key)||null,b(p,f,S,H);case Je:return S=Pa(S),y(f,p,g,S,H)}if(jt(S)||Ie(S))return f=f.get(g)||null,A(p,f,S,H,null);if(typeof S.then=="function")return y(f,p,g,ci(S),H);if(S.$$typeof===Ge)return y(f,p,g,ii(p,S),H);di(p,S)}return null}function E(f,p,g,S){for(var H=null,ae=null,G=p,I=p=0,W=null;G!==null&&I<g.length;I++){G.index>I?(W=G,G=null):W=G.sibling;var ne=v(f,G,g[I],S);if(ne===null){G===null&&(G=W);break}e&&G&&ne.alternate===null&&t(f,G),p=o(ne,p,I),ae===null?H=ne:ae.sibling=ne,ae=ne,G=W}if(I===g.length)return a(f,G),ee&&Pt(f,I),H;if(G===null){for(;I<g.length;I++)G=C(f,g[I],S),G!==null&&(p=o(G,p,I),ae===null?H=G:ae.sibling=G,ae=G);return ee&&Pt(f,I),H}for(G=n(G);I<g.length;I++)W=y(G,f,I,g[I],S),W!==null&&(e&&W.alternate!==null&&G.delete(W.key===null?I:W.key),p=o(W,p,I),ae===null?H=W:ae.sibling=W,ae=W);return e&&G.forEach(function(Ma){return t(f,Ma)}),ee&&Pt(f,I),H}function U(f,p,g,S){if(g==null)throw Error(c(151));for(var H=null,ae=null,G=p,I=p=0,W=null,ne=g.next();G!==null&&!ne.done;I++,ne=g.next()){G.index>I?(W=G,G=null):W=G.sibling;var Ma=v(f,G,ne.value,S);if(Ma===null){G===null&&(G=W);break}e&&G&&Ma.alternate===null&&t(f,G),p=o(Ma,p,I),ae===null?H=Ma:ae.sibling=Ma,ae=Ma,G=W}if(ne.done)return a(f,G),ee&&Pt(f,I),H;if(G===null){for(;!ne.done;I++,ne=g.next())ne=C(f,ne.value,S),ne!==null&&(p=o(ne,p,I),ae===null?H=ne:ae.sibling=ne,ae=ne);return ee&&Pt(f,I),H}for(G=n(G);!ne.done;I++,ne=g.next())ne=y(G,f,I,ne.value,S),ne!==null&&(e&&ne.alternate!==null&&G.delete(ne.key===null?I:ne.key),p=o(ne,p,I),ae===null?H=ne:ae.sibling=ne,ae=ne);return e&&G.forEach(function(Yf){return t(f,Yf)}),ee&&Pt(f,I),H}function ue(f,p,g,S){if(typeof g=="object"&&g!==null&&g.type===Ue&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _e:e:{for(var H=g.key;p!==null;){if(p.key===H){if(H=g.type,H===Ue){if(p.tag===7){a(f,p.sibling),S=i(p,g.props.children),S.return=f,f=S;break e}}else if(p.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Je&&Pa(H)===p.type){a(f,p.sibling),S=i(p,g.props),ss(S,g),S.return=f,f=S;break e}a(f,p);break}else t(f,p);p=p.sibling}g.type===Ue?(S=Ra(g.props.children,f.mode,S,g.key),S.return=f,f=S):(S=ai(g.type,g.key,g.props,null,f.mode,S),ss(S,g),S.return=f,f=S)}return r(f);case Fe:e:{for(H=g.key;p!==null;){if(p.key===H)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){a(f,p.sibling),S=i(p,g.children||[]),S.return=f,f=S;break e}else{a(f,p);break}else t(f,p);p=p.sibling}S=Fo(g,f.mode,S),S.return=f,f=S}return r(f);case Je:return g=Pa(g),ue(f,p,g,S)}if(jt(g))return E(f,p,g,S);if(Ie(g)){if(H=Ie(g),typeof H!="function")throw Error(c(150));return g=H.call(g),U(f,p,g,S)}if(typeof g.then=="function")return ue(f,p,ci(g),S);if(g.$$typeof===Ge)return ue(f,p,ii(f,g),S);di(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,p!==null&&p.tag===6?(a(f,p.sibling),S=i(p,g),S.return=f,f=S):(a(f,p),S=Yo(g,f.mode,S),S.return=f,f=S),r(f)):a(f,p)}return function(f,p,g,S){try{ns=0;var H=ue(f,p,g,S);return xn=null,H}catch(G){if(G===yn||G===ri)throw G;var ae=ot(29,G,null,f.mode);return ae.lanes=S,ae.return=f,ae}}}var Fa=$c(!0),ed=$c(!1),ca=!1;function tr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ar(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(se&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=ti(e),qc(e,null,a),t}return ei(e,n,t,a),ti(e)}function is(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Jl(e,a)}}function nr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=r:o=o.next=r,a=a.next}while(a!==null);o===null?i=o=t:o=o.next=t}else i=o=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var sr=!1;function os(){if(sr){var e=vn;if(e!==null)throw e}}function rs(e,t,a,n){sr=!1;var i=e.updateQueue;ca=!1;var o=i.firstBaseUpdate,r=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,b=u.next;u.next=null,r===null?o=b:r.next=b,r=u;var A=e.alternate;A!==null&&(A=A.updateQueue,l=A.lastBaseUpdate,l!==r&&(l===null?A.firstBaseUpdate=b:l.next=b,A.lastBaseUpdate=u))}if(o!==null){var C=i.baseState;r=0,A=b=u=null,l=o;do{var v=l.lane&-536870913,y=v!==l.lane;if(y?(K&v)===v:(n&v)===v){v!==0&&v===bn&&(sr=!0),A!==null&&(A=A.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var E=e,U=l;v=t;var ue=a;switch(U.tag){case 1:if(E=U.payload,typeof E=="function"){C=E.call(ue,C,v);break e}C=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=U.payload,v=typeof E=="function"?E.call(ue,C,v):E,v==null)break e;C=R({},C,v);break e;case 2:ca=!0}}v=l.callback,v!==null&&(e.flags|=64,y&&(e.flags|=8192),y=i.callbacks,y===null?i.callbacks=[v]:y.push(v))}else y={lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},A===null?(b=A=y,u=C):A=A.next=y,r|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);A===null&&(u=C),i.baseState=u,i.firstBaseUpdate=b,i.lastBaseUpdate=A,o===null&&(i.shared.lanes=0),ga|=r,e.lanes=r,e.memoizedState=C}}function td(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ad(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)td(a[e],t)}var wn=h(null),ui=h(0);function nd(e,t){e=Wt,z(ui,e),z(wn,t),Wt=e|t.baseLanes}function ir(){z(ui,Wt),z(wn,wn.current)}function or(){Wt=ui.current,T(wn),T(ui)}var rt=h(null),xt=null;function pa(e){var t=e.alternate;z(Ae,Ae.current&1),z(rt,e),xt===null&&(t===null||wn.current!==null||t.memoizedState!==null)&&(xt=e)}function rr(e){z(Ae,Ae.current),z(rt,e),xt===null&&(xt=e)}function sd(e){e.tag===22?(z(Ae,Ae.current),z(rt,e),xt===null&&(xt=e)):ha()}function ha(){z(Ae,Ae.current),z(rt,rt.current)}function lt(e){T(rt),xt===e&&(xt=null),T(Ae)}var Ae=h(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hl(a)||ml(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lt=0,J=null,ce=null,Ce=null,hi=!1,An=!1,La=!1,mi=0,ls=0,jn=null,Dm=0;function ve(){throw Error(c(321))}function lr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!it(e[a],t[a]))return!1;return!0}function cr(e,t,a,n,i,o){return Lt=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Pd:Sr,La=!1,o=a(n,i),La=!1,An&&(o=od(t,a,n,i)),id(e),o}function id(e){j.H=us;var t=ce!==null&&ce.next!==null;if(Lt=0,Ce=ce=J=null,hi=!1,ls=0,jn=null,t)throw Error(c(300));e===null||Me||(e=e.dependencies,e!==null&&si(e)&&(Me=!0))}function od(e,t,a,n){J=e;var i=0;do{if(An&&(jn=null),ls=0,An=!1,25<=i)throw Error(c(301));if(i+=1,Ce=ce=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Yd,o=t(a,n)}while(An);return o}function Om(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?cs(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(J.flags|=1024),t}function dr(){var e=mi!==0;return mi=0,e}function ur(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function pr(e){if(hi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hi=!1}Lt=0,Ce=ce=J=null,An=!1,ls=mi=0,jn=null}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?J.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function je(){if(ce===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Ce===null?J.memoizedState:Ce.next;if(t!==null)Ce=t,ce=e;else{if(e===null)throw J.alternate===null?Error(c(467)):Error(c(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Ce===null?J.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function fi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cs(e){var t=ls;return ls+=1,jn===null&&(jn=[]),e=Xc(jn,e,t),t=J,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Pd:Sr),e}function gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cs(e);if(e.$$typeof===Ge)return Ee(e)}throw Error(c(438,String(e)))}function hr(e){var t=null,a=J.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=J.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=fi(),J.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ka;return t.index++,a}function Jt(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=je();return mr(t,ce,e)}function mr(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,o=n.pending;if(o!==null){if(i!==null){var r=i.next;i.next=o.next,o.next=r}t.baseQueue=i=o,n.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var l=r=null,u=null,b=t,A=!1;do{var C=b.lane&-536870913;if(C!==b.lane?(K&C)===C:(Lt&C)===C){var v=b.revertLane;if(v===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),C===bn&&(A=!0);else if((Lt&v)===v){b=b.next,v===bn&&(A=!0);continue}else C={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},u===null?(l=u=C,r=o):u=u.next=C,J.lanes|=v,ga|=v;C=b.action,La&&a(o,C),o=b.hasEagerState?b.eagerState:a(o,C)}else v={lane:C,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},u===null?(l=u=v,r=o):u=u.next=v,J.lanes|=C,ga|=C;b=b.next}while(b!==null&&b!==t);if(u===null?r=o:u.next=l,!it(o,e.memoizedState)&&(Me=!0,A&&(a=vn,a!==null)))throw a;e.memoizedState=o,e.baseState=r,e.baseQueue=u,n.lastRenderedState=o}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function fr(e){var t=je(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,o=t.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do o=e(o,r.action),r=r.next;while(r!==i);it(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function rd(e,t,a){var n=J,i=je(),o=ee;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var r=!it((ce||i).memoizedState,a);if(r&&(i.memoizedState=a,Me=!0),i=i.queue,vr(dd.bind(null,n,i,e),[e]),i.getSnapshot!==t||r||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Sn(9,{destroy:void 0},cd.bind(null,n,i,a,t),null),he===null)throw Error(c(349));o||(Lt&127)!==0||ld(n,t,a)}return a}function ld(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=J.updateQueue,t===null?(t=fi(),J.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function cd(e,t,a,n){t.value=a,t.getSnapshot=n,ud(t)&&pd(e)}function dd(e,t,a){return a(function(){ud(t)&&pd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!it(e,a)}catch{return!0}}function pd(e){var t=Na(e,2);t!==null&&$e(t,e,2)}function gr(e){var t=Ye();if(typeof e=="function"){var a=e;if(e=a(),La){aa(!0);try{a()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},t}function hd(e,t,a,n){return e.baseState=a,mr(e,ce,typeof n=="function"?n:Jt)}function zm(e,t,a,n,i){if(xi(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){o.listeners.push(r)}};j.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,md(t,o)):(o.next=a.next,t.pending=a.next=o)}}function md(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var o=j.T,r={};j.T=r;try{var l=a(i,n),u=j.S;u!==null&&u(r,l),fd(e,t,l)}catch(b){br(e,t,b)}finally{o!==null&&r.types!==null&&(o.types=r.types),j.T=o}}else try{o=a(i,n),fd(e,t,o)}catch(b){br(e,t,b)}}function fd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){gd(e,t,n)},function(n){return br(e,t,n)}):gd(e,t,a)}function gd(e,t,a){t.status="fulfilled",t.value=a,bd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,md(e,a)))}function br(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,bd(t),t=t.next;while(t!==n)}e.action=null}function bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vd(e,t){return t}function yd(e,t){if(ee){var a=he.formState;if(a!==null){e:{var n=J;if(ee){if(me){t:{for(var i=me,o=yt;i.nodeType!==8;){if(!o){i=null;break t}if(i=wt(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){me=wt(i.nextSibling),n=i.data==="F!";break e}}ra(n)}n=!1}n&&(t=a[0])}}return a=Ye(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vd,lastRenderedState:t},a.queue=n,a=Gd.bind(null,J,n),n.dispatch=a,n=gr(!1),o=jr.bind(null,J,!1,n.queue),n=Ye(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=zm.bind(null,J,i,o,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function xd(e){var t=je();return wd(t,ce,e)}function wd(e,t,a){if(t=mr(e,t,vd)[0],e=bi(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=cs(t)}catch(r){throw r===yn?ri:r}else n=t;t=je();var i=t.queue,o=i.dispatch;return a!==t.memoizedState&&(J.flags|=2048,Sn(9,{destroy:void 0},Em.bind(null,i,a),null)),[n,o,e]}function Em(e,t){e.action=t}function Ad(e){var t=je(),a=ce;if(a!==null)return wd(t,a,e);je(),t=t.memoizedState,a=je();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Sn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=J.updateQueue,t===null&&(t=fi(),J.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function jd(){return je().memoizedState}function vi(e,t,a,n){var i=Ye();J.flags|=e,i.memoizedState=Sn(1|t,{destroy:void 0},a,n===void 0?null:n)}function yi(e,t,a,n){var i=je();n=n===void 0?null:n;var o=i.memoizedState.inst;ce!==null&&n!==null&&lr(n,ce.memoizedState.deps)?i.memoizedState=Sn(t,o,a,n):(J.flags|=e,i.memoizedState=Sn(1|t,o,a,n))}function Sd(e,t){vi(8390656,8,e,t)}function vr(e,t){yi(2048,8,e,t)}function Nm(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=fi(),J.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Cd(e){var t=je().memoizedState;return Nm({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Md(e,t){return yi(4,2,e,t)}function Td(e,t){return yi(4,4,e,t)}function _d(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bd(e,t,a){a=a!=null?a.concat([e]):null,yi(4,4,_d.bind(null,t,e),a)}function yr(){}function kd(e,t){var a=je();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&lr(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Dd(e,t){var a=je();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&lr(t,n[1]))return n[0];if(n=e(),La){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[n,t],n}function xr(e,t,a){return a===void 0||(Lt&1073741824)!==0&&(K&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ou(),J.lanes|=e,ga|=e,a)}function Od(e,t,a,n){return it(a,t)?a:wn.current!==null?(e=xr(e,a,n),it(e,t)||(Me=!0),e):(Lt&42)===0||(Lt&1073741824)!==0&&(K&261930)===0?(Me=!0,e.memoizedState=a):(e=Ou(),J.lanes|=e,ga|=e,t)}function zd(e,t,a,n,i){var o=O.p;O.p=o!==0&&8>o?o:8;var r=j.T,l={};j.T=l,jr(e,!1,t,a);try{var u=i(),b=j.S;if(b!==null&&b(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var A=km(u,n);ds(e,t,A,ut(e))}else ds(e,t,n,ut(e))}catch(C){ds(e,t,{then:function(){},status:"rejected",reason:C},ut())}finally{O.p=o,r!==null&&l.types!==null&&(r.types=l.types),j.T=r}}function Rm(){}function wr(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Ed(e).queue;zd(e,i,t,P,a===null?Rm:function(){return Nd(e),a(n)})}function Ed(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nd(e){var t=Ed(e);t.next===null&&(t=e.alternate.memoizedState),ds(e,t.next.queue,{},ut())}function Ar(){return Ee(Ts)}function Rd(){return je().memoizedState}function qd(){return je().memoizedState}function qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ut();e=da(a);var n=ua(t,e,a);n!==null&&($e(n,t,a),is(n,t,a)),t={cache:Ko()},e.payload=t;return}t=t.return}}function Gm(e,t,a){var n=ut();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xi(e)?Hd(t,a):(a=Uo(e,t,a,n),a!==null&&($e(a,e,n),Ud(a,t,n)))}function Gd(e,t,a){var n=ut();ds(e,t,a,n)}function ds(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xi(e))Hd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var r=t.lastRenderedState,l=o(r,a);if(i.hasEagerState=!0,i.eagerState=l,it(l,r))return ei(e,t,i,0),he===null&&$s(),!1}catch{}if(a=Uo(e,t,i,n),a!==null)return $e(a,e,n),Ud(a,t,n),!0}return!1}function jr(e,t,a,n){if(n={lane:2,revertLane:tl(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},xi(e)){if(t)throw Error(c(479))}else t=Uo(e,a,n,2),t!==null&&$e(t,e,2)}function xi(e){var t=e.alternate;return e===J||t!==null&&t===J}function Hd(e,t){An=hi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ud(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Jl(e,a)}}var us={readContext:Ee,use:gi,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};us.useEffectEvent=ve;var Pd={readContext:Ee,use:gi,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Sd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,vi(4194308,4,_d.bind(null,t,e),a)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){vi(4,2,e,t)},useMemo:function(e,t){var a=Ye();t=t===void 0?null:t;var n=e();if(La){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ye();if(a!==void 0){var i=a(t);if(La){aa(!0);try{a(t)}finally{aa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Gm.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:function(e){e=gr(e);var t=e.queue,a=Gd.bind(null,J,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:yr,useDeferredValue:function(e,t){var a=Ye();return xr(a,e,t)},useTransition:function(){var e=gr(!1);return e=zd.bind(null,J,e.queue,!0,!1),Ye().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=J,i=Ye();if(ee){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),he===null)throw Error(c(349));(K&127)!==0||ld(n,t,a)}i.memoizedState=a;var o={value:a,getSnapshot:t};return i.queue=o,Sd(dd.bind(null,n,o,e),[e]),n.flags|=2048,Sn(9,{destroy:void 0},cd.bind(null,n,o,a,t),null),a},useId:function(){var e=Ye(),t=he.identifierPrefix;if(ee){var a=Ot,n=Dt;a=(n&~(1<<32-st(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=mi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Dm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ar,useFormState:yd,useActionState:yd,useOptimistic:function(e){var t=Ye();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=jr.bind(null,J,!0,a),a.dispatch=t,[e,t]},useMemoCache:hr,useCacheRefresh:function(){return Ye().memoizedState=qm.bind(null,J)},useEffectEvent:function(e){var t=Ye(),a={impl:e};return t.memoizedState=a,function(){if((se&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Sr={readContext:Ee,use:gi,useCallback:kd,useContext:Ee,useEffect:vr,useImperativeHandle:Bd,useInsertionEffect:Md,useLayoutEffect:Td,useMemo:Dd,useReducer:bi,useRef:jd,useState:function(){return bi(Jt)},useDebugValue:yr,useDeferredValue:function(e,t){var a=je();return Od(a,ce.memoizedState,e,t)},useTransition:function(){var e=bi(Jt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:cs(e),t]},useSyncExternalStore:rd,useId:Rd,useHostTransitionStatus:Ar,useFormState:xd,useActionState:xd,useOptimistic:function(e,t){var a=je();return hd(a,ce,e,t)},useMemoCache:hr,useCacheRefresh:qd};Sr.useEffectEvent=Cd;var Yd={readContext:Ee,use:gi,useCallback:kd,useContext:Ee,useEffect:vr,useImperativeHandle:Bd,useInsertionEffect:Md,useLayoutEffect:Td,useMemo:Dd,useReducer:fr,useRef:jd,useState:function(){return fr(Jt)},useDebugValue:yr,useDeferredValue:function(e,t){var a=je();return ce===null?xr(a,e,t):Od(a,ce.memoizedState,e,t)},useTransition:function(){var e=fr(Jt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:cs(e),t]},useSyncExternalStore:rd,useId:Rd,useHostTransitionStatus:Ar,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var a=je();return ce!==null?hd(a,ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hr,useCacheRefresh:qd};Yd.useEffectEvent=Cd;function Cr(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:R({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mr={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ut(),i=da(n);i.payload=t,a!=null&&(i.callback=a),t=ua(e,i,n),t!==null&&($e(t,e,n),is(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ut(),i=da(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ua(e,i,n),t!==null&&($e(t,e,n),is(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ut(),n=da(a);n.tag=2,t!=null&&(n.callback=t),t=ua(e,n,a),t!==null&&($e(t,e,a),is(t,e,a))}};function Fd(e,t,a,n,i,o,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,r):t.prototype&&t.prototype.isPureReactComponent?!Kn(a,n)||!Kn(i,o):!0}function Ld(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Mr.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=R({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Jd(e){Ws(e)}function Id(e){console.error(e)}function Vd(e){Ws(e)}function wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Zd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Tr(e,t,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(e,t)},a}function Qd(e){return e=da(e),e.tag=3,e}function Xd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;e.payload=function(){return i(o)},e.callback=function(){Zd(t,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Zd(t,a,n),typeof i!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})})}function Hm(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&gn(t,a,i,!0),a=rt.current,a!==null){switch(a.tag){case 31:case 13:return xt===null?zi():a.alternate===null&&ye===0&&(ye=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===li?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Wr(e,n,i)),!1;case 22:return a.flags|=65536,n===li?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Wr(e,n,i)),!1}throw Error(c(435,a.tag))}return Wr(e,n,i),zi(),!1}if(ee)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Io&&(e=Error(c(422),{cause:n}),es(gt(e,a)))):(n!==Io&&(t=Error(c(423),{cause:n}),es(gt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=gt(n,a),i=Tr(e.stateNode,n,i),nr(e,i),ye!==4&&(ye=2)),!1;var o=Error(c(520),{cause:n});if(o=gt(o,a),ys===null?ys=[o]:ys.push(o),ye!==4&&(ye=2),t===null)return!0;n=gt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Tr(a.stateNode,n,e),nr(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Qd(i),Xd(i,e,a,n),nr(a,i),!1}a=a.return}while(a!==null);return!1}var _r=Error(c(461)),Me=!1;function Ne(e,t,a,n){t.child=e===null?ed(t,null,a,n):Fa(t,e.child,a,n)}function Kd(e,t,a,n,i){a=a.render;var o=t.ref;if("ref"in n){var r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}else r=n;return Ha(t),n=cr(e,t,a,r,o,i),l=dr(),e!==null&&!Me?(ur(e,t,i),It(e,t,i)):(ee&&l&&Lo(t),t.flags|=1,Ne(e,t,n,i),t.child)}function Wd(e,t,a,n,i){if(e===null){var o=a.type;return typeof o=="function"&&!Po(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,$d(e,t,o,n,i)):(e=ai(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Rr(e,i)){var r=o.memoizedProps;if(a=a.compare,a=a!==null?a:Kn,a(r,n)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Ut(o,n),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,a,n,i){if(e!==null){var o=e.memoizedProps;if(Kn(o,n)&&e.ref===t.ref)if(Me=!1,t.pendingProps=n=o,Rr(e,i))(e.flags&131072)!==0&&(Me=!0);else return t.lanes=e.lanes,It(e,t,i)}return Br(e,t,a,n,i)}function eu(e,t,a,n){var i=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~o}else n=0,t.child=null;return tu(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(t,o!==null?o.cachePool:null),o!==null?nd(t,o):ir(),sd(t);else return n=t.lanes=536870912,tu(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(oi(t,o.cachePool),nd(t,o),ha(),t.memoizedState=null):(e!==null&&oi(t,null),ir(),ha());return Ne(e,t,i,a),t.child}function ps(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tu(e,t,a,n,i){var o=$o();return o=o===null?null:{parent:Se._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&oi(t,null),ir(),sd(t),e!==null&&gn(e,t,n,!0),t.childLanes=i,null}function Ai(e,t){return t=Si({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function au(e,t,a){return Fa(t,e.child,null,a),e=Ai(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function Um(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(n.mode==="hidden")return e=Ai(t,n),t.lanes=536870912,ps(null,e);if(rr(t),(e=me)?(e=mp(e,yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Hc(e),a.return=t,t.child=a,ze=t,me=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return Ai(t,n)}var o=e.memoizedState;if(o!==null){var r=o.dehydrated;if(rr(t),i)if(t.flags&256)t.flags&=-257,t=au(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Me||gn(e,t,a,!1),i=(a&e.childLanes)!==0,Me||i){if(n=he,n!==null&&(r=Il(n,a),r!==0&&r!==o.retryLane))throw o.retryLane=r,Na(e,r),$e(n,e,r),_r;zi(),t=au(e,t,a)}else e=o.treeContext,me=wt(r.nextSibling),ze=t,ee=!0,oa=null,yt=!1,e!==null&&Yc(t,e),t=Ai(t,n),t.flags|=4096;return t}return e=Ut(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ji(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Br(e,t,a,n,i){return Ha(t),a=cr(e,t,a,n,void 0,i),n=dr(),e!==null&&!Me?(ur(e,t,i),It(e,t,i)):(ee&&n&&Lo(t),t.flags|=1,Ne(e,t,a,i),t.child)}function nu(e,t,a,n,i,o){return Ha(t),t.updateQueue=null,a=od(t,n,a,i),id(e),n=dr(),e!==null&&!Me?(ur(e,t,o),It(e,t,o)):(ee&&n&&Lo(t),t.flags|=1,Ne(e,t,a,o),t.child)}function su(e,t,a,n,i){if(Ha(t),t.stateNode===null){var o=pn,r=a.contextType;typeof r=="object"&&r!==null&&(o=Ee(r)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mr,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},tr(t),r=a.contextType,o.context=typeof r=="object"&&r!==null?Ee(r):pn,o.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Cr(t,a,r,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&Mr.enqueueReplaceState(o,o.state,null),rs(t,n,o,i),os(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var l=t.memoizedProps,u=Ja(a,l);o.props=u;var b=o.context,A=a.contextType;r=pn,typeof A=="object"&&A!==null&&(r=Ee(A));var C=a.getDerivedStateFromProps;A=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,A||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l||b!==r)&&Ld(t,o,n,r),ca=!1;var v=t.memoizedState;o.state=v,rs(t,n,o,i),os(),b=t.memoizedState,l||v!==b||ca?(typeof C=="function"&&(Cr(t,a,C,n),b=t.memoizedState),(u=ca||Fd(t,a,u,n,v,b,r))?(A||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=b),o.props=n,o.state=b,o.context=r,n=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,ar(e,t),r=t.memoizedProps,A=Ja(a,r),o.props=A,C=t.pendingProps,v=o.context,b=a.contextType,u=pn,typeof b=="object"&&b!==null&&(u=Ee(b)),l=a.getDerivedStateFromProps,(b=typeof l=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==C||v!==u)&&Ld(t,o,n,u),ca=!1,v=t.memoizedState,o.state=v,rs(t,n,o,i),os();var y=t.memoizedState;r!==C||v!==y||ca||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof l=="function"&&(Cr(t,a,l,n),y=t.memoizedState),(A=ca||Fd(t,a,A,n,v,y,u)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(b||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),o.props=n,o.state=y,o.context=u,n=A):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,ji(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,a,i)):Ne(e,t,a,i),t.memoizedState=o.state,e=t.child):e=It(e,t,i),e}function iu(e,t,a,n){return qa(),t.flags|=256,Ne(e,t,a,n),t.child}var kr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dr(e){return{baseLanes:e,cachePool:Zc()}}function Or(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=dt),e}function ou(e,t,a){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,r;if((r=o)||(r=e!==null&&e.memoizedState===null?!1:(Ae.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(i?pa(t):ha(),(e=me)?(e=mp(e,yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ia!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Hc(e),a.return=t,t.child=a,ze=t,me=null)):e=null,e===null)throw ra(t);return ml(e)?t.lanes=32:t.lanes=536870912,null}var l=n.children;return n=n.fallback,i?(ha(),i=t.mode,l=Si({mode:"hidden",children:l},i),n=Ra(n,i,a,null),l.return=t,n.return=t,l.sibling=n,t.child=l,n=t.child,n.memoizedState=Dr(a),n.childLanes=Or(e,r,a),t.memoizedState=kr,ps(null,n)):(pa(t),zr(t,l))}var u=e.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(o)t.flags&256?(pa(t),t.flags&=-257,t=Er(e,t,a)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,t=null):(ha(),l=n.fallback,i=t.mode,n=Si({mode:"visible",children:n.children},i),l=Ra(l,i,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,Fa(t,e.child,null,a),n=t.child,n.memoizedState=Dr(a),n.childLanes=Or(e,r,a),t.memoizedState=kr,t=ps(null,n));else if(pa(t),ml(l)){if(r=l.nextSibling&&l.nextSibling.dataset,r)var b=r.dgst;r=b,n=Error(c(419)),n.stack="",n.digest=r,es({value:n,source:null,stack:null}),t=Er(e,t,a)}else if(Me||gn(e,t,a,!1),r=(a&e.childLanes)!==0,Me||r){if(r=he,r!==null&&(n=Il(r,a),n!==0&&n!==u.retryLane))throw u.retryLane=n,Na(e,n),$e(r,e,n),_r;hl(l)||zi(),t=Er(e,t,a)}else hl(l)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,me=wt(l.nextSibling),ze=t,ee=!0,oa=null,yt=!1,e!==null&&Yc(t,e),t=zr(t,n.children),t.flags|=4096);return t}return i?(ha(),l=n.fallback,i=t.mode,u=e.child,b=u.sibling,n=Ut(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,b!==null?l=Ut(b,l):(l=Ra(l,i,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,ps(null,n),n=t.child,l=e.child.memoizedState,l===null?l=Dr(a):(i=l.cachePool,i!==null?(u=Se._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Zc(),l={baseLanes:l.baseLanes|a,cachePool:i}),n.memoizedState=l,n.childLanes=Or(e,r,a),t.memoizedState=kr,ps(e.child,n)):(pa(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function zr(e,t){return t=Si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Si(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function Er(e,t,a){return Fa(t,e.child,null,a),e=zr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ru(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Qo(e.return,t,a)}function Nr(e,t,a,n,i,o){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:o}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=o)}function lu(e,t,a){var n=t.pendingProps,i=n.revealOrder,o=n.tail;n=n.children;var r=Ae.current,l=(r&2)!==0;if(l?(r=r&1|2,t.flags|=128):r&=1,z(Ae,r),Ne(e,t,n,a),n=ee?$n:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,a,t);else if(e.tag===19)ru(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&pi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Nr(t,!1,i,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Nr(t,!0,a,null,o,n);break;case"together":Nr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function It(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(gn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Rr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function Pm(e,t,a){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),la(t,Se,e.memoizedState.cache),qa();break;case 27:case 5:Gn(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,rr(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(pa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ou(e,t,a):(pa(t),e=It(e,t,a),e!==null?e.sibling:null);pa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(gn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return lu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(Ae,Ae.current),n)break;return null;case 22:return t.lanes=0,eu(e,t,a,t.pendingProps);case 24:la(t,Se,e.memoizedState.cache)}return It(e,t,a)}function cu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Me=!0;else{if(!Rr(e,a)&&(t.flags&128)===0)return Me=!1,Pm(e,t,a);Me=(e.flags&131072)!==0}else Me=!1,ee&&(t.flags&1048576)!==0&&Pc(t,$n,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")Po(e)?(n=Ja(e,n),t.tag=1,t=su(null,t,e,n,a)):(t.tag=0,t=Br(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===pt){t.tag=11,t=Kd(null,t,e,n,a);break e}else if(i===$){t.tag=14,t=Wd(null,t,e,n,a);break e}}throw t=Rt(e)||e,Error(c(306,t,""))}}return t;case 0:return Br(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ja(n,t.pendingProps),su(e,t,n,i,a);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;i=o.element,ar(e,t),rs(t,n,null,a);var r=t.memoizedState;if(n=r.cache,la(t,Se,n),n!==o.cache&&Xo(t,[Se],a,!0),os(),n=r.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=iu(e,t,n,a);break e}else if(n!==i){i=gt(Error(c(424)),t),es(i),t=iu(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=wt(e.firstChild),ze=t,ee=!0,oa=null,yt=!0,a=ed(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),n===i){t=It(e,t,a);break e}Ne(e,t,n,a)}t=t.child}return t;case 26:return ji(e,t),e===null?(a=xp(t.type,null,t.pendingProps,null))?t.memoizedState=a:ee||(a=t.type,e=t.pendingProps,n=Ui(Z.current).createElement(a),n[Oe]=t,n[Ve]=e,Re(n,a,e),ke(n),t.stateNode=n):t.memoizedState=xp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&ee&&(n=t.stateNode=bp(t.type,t.pendingProps,Z.current),ze=t,yt=!0,i=me,wa(t.type)?(fl=i,me=wt(n.firstChild)):me=i),Ne(e,t,t.pendingProps.children,a),ji(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((i=n=me)&&(n=vf(n,t.type,t.pendingProps,yt),n!==null?(t.stateNode=n,ze=t,me=wt(n.firstChild),yt=!1,i=!0):i=!1),i||ra(t)),Gn(t),i=t.type,o=t.pendingProps,r=e!==null?e.memoizedProps:null,n=o.children,dl(i,o)?n=null:r!==null&&dl(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=cr(e,t,Om,null,null,a),Ts._currentValue=i),ji(e,t),Ne(e,t,n,a),t.child;case 6:return e===null&&ee&&((e=a=me)&&(a=yf(a,t.pendingProps,yt),a!==null?(t.stateNode=a,ze=t,me=null,e=!0):e=!1),e||ra(t)),null;case 13:return ou(e,t,a);case 4:return Pe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Fa(t,null,n,a):Ne(e,t,n,a),t.child;case 11:return Kd(e,t,t.type,t.pendingProps,a);case 7:return Ne(e,t,t.pendingProps,a),t.child;case 8:return Ne(e,t,t.pendingProps.children,a),t.child;case 12:return Ne(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,la(t,t.type,n.value),Ne(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ha(t),i=Ee(i),n=n(i),t.flags|=1,Ne(e,t,n,a),t.child;case 14:return Wd(e,t,t.type,t.pendingProps,a);case 15:return $d(e,t,t.type,t.pendingProps,a);case 19:return lu(e,t,a);case 31:return Um(e,t,a);case 22:return eu(e,t,a,t.pendingProps);case 24:return Ha(t),n=Ee(Se),e===null?(i=$o(),i===null&&(i=he,o=Ko(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),t.memoizedState={parent:n,cache:i},tr(t),la(t,Se,i)):((e.lanes&a)!==0&&(ar(e,t),rs(t,null,null,a),os()),i=e.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),la(t,Se,n)):(n=o.cache,la(t,Se,n),n!==i.cache&&Xo(t,[Se],a,!0))),Ne(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Vt(e){e.flags|=4}function qr(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Ru())e.flags|=8192;else throw Ya=li,er}else e.flags&=-16777217}function du(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cp(t))if(Ru())e.flags|=8192;else throw Ya=li,er}function Ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fl():536870912,e.lanes|=t,_n|=t)}function hs(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ym(e,t,a){var n=t.pendingProps;switch(Jo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return fe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ft(Se),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fn(t)?Vt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vo())),fe(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(Vt(t),o!==null?(fe(t),du(t,o)):(fe(t),qr(t,i,null,n,a))):o?o!==e.memoizedState?(Vt(t),fe(t),du(t,o)):(fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Vt(t),fe(t),qr(t,i,e,n,a)),null;case 27:if(Rs(t),a=Z.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Vt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return fe(t),null}e=q.current,fn(t)?Fc(t):(e=bp(i,n,a),t.stateNode=e,Vt(t))}return fe(t),null;case 5:if(Rs(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Vt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return fe(t),null}if(o=q.current,fn(t))Fc(t);else{var r=Ui(Z.current);switch(o){case 1:o=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=r.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}o[Oe]=t,o[Ve]=n;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)o.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=o;e:switch(Re(o,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Vt(t)}}return fe(t),qr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Vt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=Z.current,fn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ze,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Oe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||op(e.nodeValue,a)),e||ra(t,!0)}else e=Ui(e).createTextNode(n),e[Oe]=t,t.stateNode=e}return fe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=fn(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Oe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),e=!1}else a=Vo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return fe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Oe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else i=Vo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ci(t,t.updateQueue),fe(t),null);case 4:return we(),e===null&&il(t.stateNode.containerInfo),fe(t),null;case 10:return Ft(t.type),fe(t),null;case 19:if(T(Ae),n=t.memoizedState,n===null)return fe(t),null;if(i=(t.flags&128)!==0,o=n.rendering,o===null)if(i)hs(n,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=pi(e),o!==null){for(t.flags|=128,hs(n,!1),e=o.updateQueue,t.updateQueue=e,Ci(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Gc(a,e),a=a.sibling;return z(Ae,Ae.current&1|2),ee&&Pt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&at()>ki&&(t.flags|=128,i=!0,hs(n,!1),t.lanes=4194304)}else{if(!i)if(e=pi(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ci(t,e),hs(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!ee)return fe(t),null}else 2*at()-n.renderingStartTime>ki&&a!==536870912&&(t.flags|=128,i=!0,hs(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=at(),e.sibling=null,a=Ae.current,z(Ae,i?a&1|2:a&1),ee&&Pt(t,n.treeForkCount),e):(fe(t),null);case 22:case 23:return lt(t),or(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),a=t.updateQueue,a!==null&&Ci(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&T(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Se),fe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Fm(e,t){switch(Jo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Se),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Rs(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(c(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(Ae),null;case 4:return we(),null;case 10:return Ft(t.type),null;case 22:case 23:return lt(t),or(),e!==null&&T(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Se),null;case 25:return null;default:return null}}function uu(e,t){switch(Jo(t),t.tag){case 3:Ft(Se),we();break;case 26:case 27:case 5:Rs(t);break;case 4:we();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:T(Ae);break;case 10:Ft(t.type);break;case 22:case 23:lt(t),or(),e!==null&&T(Ua);break;case 24:Ft(Se)}}function ms(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var o=a.create,r=a.inst;n=o(),r.destroy=n}a=a.next}while(a!==i)}}catch(l){re(t,t.return,l)}}function ma(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){var r=n.inst,l=r.destroy;if(l!==void 0){r.destroy=void 0,i=t;var u=a,b=l;try{b()}catch(A){re(i,u,A)}}}n=n.next}while(n!==o)}}catch(A){re(t,t.return,A)}}function pu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ad(t,a)}catch(n){re(e,e.return,n)}}}function hu(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){re(e,t,n)}}function fs(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){re(e,t,i)}}function zt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){re(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){re(e,t,i)}else a.current=null}function mu(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){re(e,e.return,i)}}function Gr(e,t,a){try{var n=e.stateNode;pf(n,e.type,a,t),n[Ve]=t}catch(i){re(e,e.return,i)}}function fu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Hr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ur(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(n!==4&&(n===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ur(e,t,a),e=e.sibling;e!==null;)Ur(e,t,a),e=e.sibling}function Mi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Mi(e,t,a),e=e.sibling;e!==null;)Mi(e,t,a),e=e.sibling}function gu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Re(t,n,a),t[Oe]=e,t[Ve]=a}catch(o){re(e,e.return,o)}}var Zt=!1,Te=!1,Pr=!1,bu=typeof WeakSet=="function"?WeakSet:Set,De=null;function Lm(e,t){if(e=e.containerInfo,ll=Vi,e=Bc(e),Eo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var r=0,l=-1,u=-1,b=0,A=0,C=e,v=null;t:for(;;){for(var y;C!==a||i!==0&&C.nodeType!==3||(l=r+i),C!==o||n!==0&&C.nodeType!==3||(u=r+n),C.nodeType===3&&(r+=C.nodeValue.length),(y=C.firstChild)!==null;)v=C,C=y;for(;;){if(C===e)break t;if(v===a&&++b===i&&(l=r),v===o&&++A===n&&(u=r),(y=C.nextSibling)!==null)break;C=v,v=C.parentNode}C=y}a=l===-1||u===-1?null:{start:l,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(cl={focusedElem:e,selectionRange:a},Vi=!1,De=t;De!==null;)if(t=De,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,De=e;else for(;De!==null;){switch(t=De,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var E=Ja(a.type,i);e=n.getSnapshotBeforeUpdate(E,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(U){re(a,a.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)pl(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pl(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,De=e;break}De=t.return}}function vu(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),n&4&&ms(5,a);break;case 1:if(Xt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){re(a,a.return,r)}else{var i=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){re(a,a.return,r)}}n&64&&pu(a),n&512&&fs(a,a.return);break;case 3:if(Xt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ad(e,t)}catch(r){re(a,a.return,r)}}break;case 27:t===null&&n&4&&gu(a);case 26:case 5:Xt(e,a),t===null&&n&4&&mu(a),n&512&&fs(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),n&4&&wu(e,a);break;case 13:Xt(e,a),n&4&&Au(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$m.bind(null,a),xf(e,a))));break;case 22:if(n=a.memoizedState!==null||Zt,!n){t=t!==null&&t.memoizedState!==null||Te,i=Zt;var o=Te;Zt=n,(Te=t)&&!o?Kt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Zt=i,Te=o}break;case 30:break;default:Xt(e,a)}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Qe=!1;function Qt(e,t,a){for(a=a.child;a!==null;)xu(e,t,a),a=a.sibling}function xu(e,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Hn,a)}catch{}switch(a.tag){case 26:Te||zt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||zt(a,t);var n=ge,i=Qe;wa(a.type)&&(ge=a.stateNode,Qe=!1),Qt(e,t,a),Ss(a.stateNode),ge=n,Qe=i;break;case 5:Te||zt(a,t);case 6:if(n=ge,i=Qe,ge=null,Qt(e,t,a),ge=n,Qe=i,ge!==null)if(Qe)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(a.stateNode)}catch(o){re(a,t,o)}else try{ge.removeChild(a.stateNode)}catch(o){re(a,t,o)}break;case 18:ge!==null&&(Qe?(e=ge,pp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rn(e)):pp(ge,a.stateNode));break;case 4:n=ge,i=Qe,ge=a.stateNode.containerInfo,Qe=!0,Qt(e,t,a),ge=n,Qe=i;break;case 0:case 11:case 14:case 15:ma(2,a,t),Te||ma(4,a,t),Qt(e,t,a);break;case 1:Te||(zt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&hu(a,t,n)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Te=(n=Te)||a.memoizedState!==null,Qt(e,t,a),Te=n;break;default:Qt(e,t,a)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rn(e)}catch(a){re(t,t.return,a)}}}function Au(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rn(e)}catch(a){re(t,t.return,a)}}function Jm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bu),t;default:throw Error(c(435,e.tag))}}function Ti(e,t){var a=Jm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=ef.bind(null,e,n);n.then(i,i)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=e,r=t,l=r;e:for(;l!==null;){switch(l.tag){case 27:if(wa(l.type)){ge=l.stateNode,Qe=!1;break e}break;case 5:ge=l.stateNode,Qe=!1;break e;case 3:case 4:ge=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(ge===null)throw Error(c(160));xu(o,r,i),ge=null,Qe=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ju(t,e),t=t.sibling}var Ct=null;function ju(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ke(e),n&4&&(ma(3,e,e.return),ms(3,e),ma(5,e,e.return));break;case 1:Xe(t,e),Ke(e),n&512&&(Te||a===null||zt(a,a.return)),n&64&&Zt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ct;if(Xe(t,e),Ke(e),n&512&&(Te||a===null||zt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Yn]||o[Oe]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Re(o,n,a),o[Oe]=e,ke(o),n=o;break e;case"link":var r=jp("link","href",i).get(n+(a.href||""));if(r){for(var l=0;l<r.length;l++)if(o=r[l],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(l,1);break t}}o=i.createElement(n),Re(o,n,a),i.head.appendChild(o);break;case"meta":if(r=jp("meta","content",i).get(n+(a.content||""))){for(l=0;l<r.length;l++)if(o=r[l],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(l,1);break t}}o=i.createElement(n),Re(o,n,a),i.head.appendChild(o);break;default:throw Error(c(468,n))}o[Oe]=e,ke(o),n=o}e.stateNode=n}else Sp(i,e.type,e.stateNode);else e.stateNode=Ap(i,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Sp(i,e.type,e.stateNode):Ap(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Gr(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ke(e),n&512&&(Te||a===null||zt(a,a.return)),a!==null&&n&4&&Gr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ke(e),n&512&&(Te||a===null||zt(a,a.return)),e.flags&32){i=e.stateNode;try{sn(i,"")}catch(E){re(e,e.return,E)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Gr(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Pr=!0);break;case 6:if(Xe(t,e),Ke(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(E){re(e,e.return,E)}}break;case 3:if(Fi=null,i=Ct,Ct=Pi(t.containerInfo),Xe(t,e),Ct=i,Ke(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(E){re(e,e.return,E)}Pr&&(Pr=!1,Su(e));break;case 4:n=Ct,Ct=Pi(e.stateNode.containerInfo),Xe(t,e),Ke(e),Ct=n;break;case 12:Xe(t,e),Ke(e);break;case 31:Xe(t,e),Ke(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ti(e,n)));break;case 13:Xe(t,e),Ke(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bi=at()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ti(e,n)));break;case 22:i=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,b=Zt,A=Te;if(Zt=b||i,Te=A||u,Xe(t,e),Te=A,Zt=b,Ke(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||u||Zt||Te||Ia(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(o=u.stateNode,i)r=o.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{l=u.stateNode;var C=u.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null;l.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(E){re(u,u.return,E)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(E){re(u,u.return,E)}}}else if(t.tag===18){if(a===null){u=t;try{var y=u.stateNode;i?hp(y,!0):hp(u.stateNode,!1)}catch(E){re(u,u.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ti(e,a))));break;case 19:Xe(t,e),Ke(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ti(e,n)));break;case 30:break;case 21:break;default:Xe(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(fu(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,o=Hr(e);Mi(e,o,i);break;case 5:var r=a.stateNode;a.flags&32&&(sn(r,""),a.flags&=-33);var l=Hr(e);Mi(e,l,r);break;case 3:case 4:var u=a.stateNode.containerInfo,b=Hr(e);Ur(e,b,u);break;default:throw Error(c(161))}}catch(A){re(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Su(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Su(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),Ia(t);break;case 1:zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&hu(t,t.return,a),Ia(t);break;case 27:Ss(t.stateNode);case 26:case 5:zt(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function Kt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,o=t,r=o.flags;switch(o.tag){case 0:case 11:case 15:Kt(i,o,a),ms(4,o);break;case 1:if(Kt(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(b){re(n,n.return,b)}if(n=o,i=n.updateQueue,i!==null){var l=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)td(u[i],l)}catch(b){re(n,n.return,b)}}a&&r&64&&pu(o),fs(o,o.return);break;case 27:gu(o);case 26:case 5:Kt(i,o,a),a&&n===null&&r&4&&mu(o),fs(o,o.return);break;case 12:Kt(i,o,a);break;case 31:Kt(i,o,a),a&&r&4&&wu(i,o);break;case 13:Kt(i,o,a),a&&r&4&&Au(i,o);break;case 22:o.memoizedState===null&&Kt(i,o,a),fs(o,o.return);break;case 30:break;default:Kt(i,o,a)}t=t.sibling}}function Yr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ts(a))}function Fr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ts(e))}function Mt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cu(e,t,a,n),t=t.sibling}function Cu(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,n),i&2048&&ms(9,t);break;case 1:Mt(e,t,a,n);break;case 3:Mt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ts(e)));break;case 12:if(i&2048){Mt(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,r=o.id,l=o.onPostCommit;typeof l=="function"&&l(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){re(t,t.return,u)}}else Mt(e,t,a,n);break;case 31:Mt(e,t,a,n);break;case 13:Mt(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,r=t.alternate,t.memoizedState!==null?o._visibility&2?Mt(e,t,a,n):gs(e,t):o._visibility&2?Mt(e,t,a,n):(o._visibility|=2,Cn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Yr(r,t);break;case 24:Mt(e,t,a,n),i&2048&&Fr(t.alternate,t);break;default:Mt(e,t,a,n)}}function Cn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,r=t,l=a,u=n,b=r.flags;switch(r.tag){case 0:case 11:case 15:Cn(o,r,l,u,i),ms(8,r);break;case 23:break;case 22:var A=r.stateNode;r.memoizedState!==null?A._visibility&2?Cn(o,r,l,u,i):gs(o,r):(A._visibility|=2,Cn(o,r,l,u,i)),i&&b&2048&&Yr(r.alternate,r);break;case 24:Cn(o,r,l,u,i),i&&b&2048&&Fr(r.alternate,r);break;default:Cn(o,r,l,u,i)}t=t.sibling}}function gs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:gs(a,n),i&2048&&Yr(n.alternate,n);break;case 24:gs(a,n),i&2048&&Fr(n.alternate,n);break;default:gs(a,n)}t=t.sibling}}var bs=8192;function Mn(e,t,a){if(e.subtreeFlags&bs)for(e=e.child;e!==null;)Mu(e,t,a),e=e.sibling}function Mu(e,t,a){switch(e.tag){case 26:Mn(e,t,a),e.flags&bs&&e.memoizedState!==null&&Of(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,t,a);break;case 3:case 4:var n=Ct;Ct=Pi(e.stateNode.containerInfo),Mn(e,t,a),Ct=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bs,bs=16777216,Mn(e,t,a),bs=n):Mn(e,t,a));break;default:Mn(e,t,a)}}function Tu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];De=n,Bu(n,e)}Tu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_u(e),e=e.sibling}function _u(e){switch(e.tag){case 0:case 11:case 15:vs(e),e.flags&2048&&ma(9,e,e.return);break;case 3:vs(e);break;case 12:vs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_i(e)):vs(e);break;default:vs(e)}}function _i(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];De=n,Bu(n,e)}Tu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),_i(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,_i(t));break;default:_i(t)}e=e.sibling}}function Bu(e,t){for(;De!==null;){var a=De;switch(a.tag){case 0:case 11:case 15:ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ts(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,De=n;else e:for(a=e;De!==null;){n=De;var i=n.sibling,o=n.return;if(yu(n),n===a){De=null;break e}if(i!==null){i.return=o,De=i;break e}De=o}}}var Im={getCacheForType:function(e){var t=Ee(Se),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ee(Se).controller.signal}},Vm=typeof WeakMap=="function"?WeakMap:Map,se=0,he=null,Q=null,K=0,oe=0,ct=null,fa=!1,Tn=!1,Lr=!1,Wt=0,ye=0,ga=0,Va=0,Jr=0,dt=0,_n=0,ys=null,We=null,Ir=!1,Bi=0,ku=0,ki=1/0,Di=null,ba=null,Be=0,va=null,Bn=null,$t=0,Vr=0,Zr=null,Du=null,xs=0,Qr=null;function ut(){return(se&2)!==0&&K!==0?K&-K:j.T!==null?tl():Vl()}function Ou(){if(dt===0)if((K&536870912)===0||ee){var e=Hs;Hs<<=1,(Hs&3932160)===0&&(Hs=262144),dt=e}else dt=536870912;return e=rt.current,e!==null&&(e.flags|=32),dt}function $e(e,t,a){(e===he&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(kn(e,0),ya(e,K,dt,!1)),Pn(e,a),((se&2)===0||e!==he)&&(e===he&&((se&2)===0&&(Va|=a),ye===4&&ya(e,K,dt,!1)),Et(e))}function zu(e,t,a){if((se&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Un(e,t),i=n?Xm(e,t):Kr(e,t,!0),o=n;do{if(i===0){Tn&&!n&&ya(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Zm(a)){i=Kr(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var l=e;i=ys;var u=l.current.memoizedState.isDehydrated;if(u&&(kn(l,r).flags|=256),r=Kr(l,r,!1),r!==2){if(Lr&&!u){l.errorRecoveryDisabledLanes|=o,Va|=o,i=4;break e}o=We,We=i,o!==null&&(We===null?We=o:We.push.apply(We,o))}i=r}if(o=!1,i!==2)continue}}if(i===1){kn(e,0),ya(e,t,0,!0);break}e:{switch(n=e,o=i,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ya(n,t,dt,!fa);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Bi+300-at(),10<i)){if(ya(n,t,dt,!fa),Ps(n,0,!0)!==0)break e;$t=t,n.timeoutHandle=dp(Eu.bind(null,n,a,We,Di,Ir,t,dt,Va,_n,fa,o,"Throttled",-0,0),i);break e}Eu(n,a,We,Di,Ir,t,dt,Va,_n,fa,o,null,-0,0)}}break}while(!0);Et(e)}function Eu(e,t,a,n,i,o,r,l,u,b,A,C,v,y){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Mu(t,o,C);var E=(o&62914560)===o?Bi-at():(o&4194048)===o?ku-at():0;if(E=zf(C,E),E!==null){$t=o,e.cancelPendingCommit=E(Yu.bind(null,e,t,o,a,n,i,r,l,u,A,C,null,v,y)),ya(e,o,r,!b);return}}Yu(e,t,o,a,n,i,r,l,u)}function Zm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!it(o(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ya(e,t,a,n){t&=~Jr,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var o=31-st(i),r=1<<o;n[o]=-1,i&=~r}a!==0&&Ll(e,a,t)}function Oi(){return(se&6)===0?(ws(0),!1):!0}function Xr(){if(Q!==null){if(oe===0)var e=Q.return;else e=Q,Yt=Ga=null,pr(e),xn=null,ns=0,e=Q;for(;e!==null;)uu(e.alternate,e),e=e.return;Q=null}}function kn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ff(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$t=0,Xr(),he=e,Q=a=Ut(e.current,null),K=t,oe=0,ct=null,fa=!1,Tn=Un(e,t),Lr=!1,_n=dt=Jr=Va=ga=ye=0,We=ys=null,Ir=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-st(n),o=1<<i;t|=e[i],n&=~o}return Wt=t,$s(),a}function Nu(e,t){J=null,j.H=us,t===yn||t===ri?(t=Kc(),oe=3):t===er?(t=Kc(),oe=4):oe=t===_r?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,Q===null&&(ye=1,wi(e,gt(t,e.current)))}function Ru(){var e=rt.current;return e===null?!0:(K&4194048)===K?xt===null:(K&62914560)===K||(K&536870912)!==0?e===xt:!1}function qu(){var e=j.H;return j.H=us,e===null?us:e}function Gu(){var e=j.A;return j.A=Im,e}function zi(){ye=4,fa||(K&4194048)!==K&&rt.current!==null||(Tn=!0),(ga&134217727)===0&&(Va&134217727)===0||he===null||ya(he,K,dt,!1)}function Kr(e,t,a){var n=se;se|=2;var i=qu(),o=Gu();(he!==e||K!==t)&&(Di=null,kn(e,t)),t=!1;var r=ye;e:do try{if(oe!==0&&Q!==null){var l=Q,u=ct;switch(oe){case 8:Xr(),r=6;break e;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var b=oe;if(oe=0,ct=null,Dn(e,l,u,b),a&&Tn){r=0;break e}break;default:b=oe,oe=0,ct=null,Dn(e,l,u,b)}}Qm(),r=ye;break}catch(A){Nu(e,A)}while(!0);return t&&e.shellSuspendCounter++,Yt=Ga=null,se=n,j.H=i,j.A=o,Q===null&&(he=null,K=0,$s()),r}function Qm(){for(;Q!==null;)Hu(Q)}function Xm(e,t){var a=se;se|=2;var n=qu(),i=Gu();he!==e||K!==t?(Di=null,ki=at()+500,kn(e,t)):Tn=Un(e,t);e:do try{if(oe!==0&&Q!==null){t=Q;var o=ct;t:switch(oe){case 1:oe=0,ct=null,Dn(e,t,o,1);break;case 2:case 9:if(Qc(o)){oe=0,ct=null,Uu(t);break}t=function(){oe!==2&&oe!==9||he!==e||(oe=7),Et(e)},o.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:Qc(o)?(oe=0,ct=null,Uu(t)):(oe=0,ct=null,Dn(e,t,o,7));break;case 5:var r=null;switch(Q.tag){case 26:r=Q.memoizedState;case 5:case 27:var l=Q;if(r?Cp(r):l.stateNode.complete){oe=0,ct=null;var u=l.sibling;if(u!==null)Q=u;else{var b=l.return;b!==null?(Q=b,Ei(b)):Q=null}break t}}oe=0,ct=null,Dn(e,t,o,5);break;case 6:oe=0,ct=null,Dn(e,t,o,6);break;case 8:Xr(),ye=6;break e;default:throw Error(c(462))}}Km();break}catch(A){Nu(e,A)}while(!0);return Yt=Ga=null,j.H=n,j.A=i,se=a,Q!==null?0:(he=null,K=0,$s(),ye)}function Km(){for(;Q!==null&&!xh();)Hu(Q)}function Hu(e){var t=cu(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Ei(e):Q=t}function Uu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=nu(a,t,t.pendingProps,t.type,void 0,K);break;case 11:t=nu(a,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:pr(t);default:uu(a,t),t=Q=Gc(t,Wt),t=cu(a,t,Wt)}e.memoizedProps=e.pendingProps,t===null?Ei(e):Q=t}function Dn(e,t,a,n){Yt=Ga=null,pr(t),xn=null,ns=0;var i=t.return;try{if(Hm(e,i,t,a,K)){ye=1,wi(e,gt(a,e.current)),Q=null;return}}catch(o){if(i!==null)throw Q=i,o;ye=1,wi(e,gt(a,e.current)),Q=null;return}t.flags&32768?(ee||n===1?e=!0:Tn||(K&536870912)!==0?e=!1:(fa=e=!0,(n===2||n===9||n===3||n===6)&&(n=rt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Pu(t,e)):Ei(t)}function Ei(e){var t=e;do{if((t.flags&32768)!==0){Pu(t,fa);return}e=t.return;var a=Ym(t.alternate,t,Wt);if(a!==null){Q=a;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);ye===0&&(ye=5)}function Pu(e,t){do{var a=Fm(e.alternate,e);if(a!==null){a.flags&=32767,Q=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=a}while(e!==null);ye=6,Q=null}function Yu(e,t,a,n,i,o,r,l,u){e.cancelPendingCommit=null;do Ni();while(Be!==0);if((se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Ho,kh(e,a,o,r,l,u),e===he&&(Q=he=null,K=0),Bn=t,va=e,$t=a,Vr=o,Zr=i,Du=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tf(qs,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null,i=O.p,O.p=2,r=se,se|=4;try{Lm(e,t,a)}finally{se=r,O.p=i,j.T=n}}Be=1,Fu(),Lu(),Ju()}}function Fu(){if(Be===1){Be=0;var e=va,t=Bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var n=O.p;O.p=2;var i=se;se|=4;try{ju(t,e);var o=cl,r=Bc(e.containerInfo),l=o.focusedElem,u=o.selectionRange;if(r!==l&&l&&l.ownerDocument&&_c(l.ownerDocument.documentElement,l)){if(u!==null&&Eo(l)){var b=u.start,A=u.end;if(A===void 0&&(A=b),"selectionStart"in l)l.selectionStart=b,l.selectionEnd=Math.min(A,l.value.length);else{var C=l.ownerDocument||document,v=C&&C.defaultView||window;if(v.getSelection){var y=v.getSelection(),E=l.textContent.length,U=Math.min(u.start,E),ue=u.end===void 0?U:Math.min(u.end,E);!y.extend&&U>ue&&(r=ue,ue=U,U=r);var f=Tc(l,U),p=Tc(l,ue);if(f&&p&&(y.rangeCount!==1||y.anchorNode!==f.node||y.anchorOffset!==f.offset||y.focusNode!==p.node||y.focusOffset!==p.offset)){var g=C.createRange();g.setStart(f.node,f.offset),y.removeAllRanges(),U>ue?(y.addRange(g),y.extend(p.node,p.offset)):(g.setEnd(p.node,p.offset),y.addRange(g))}}}}for(C=[],y=l;y=y.parentNode;)y.nodeType===1&&C.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<C.length;l++){var S=C[l];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Vi=!!ll,cl=ll=null}finally{se=i,O.p=n,j.T=a}}e.current=t,Be=2}}function Lu(){if(Be===2){Be=0;var e=va,t=Bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var n=O.p;O.p=2;var i=se;se|=4;try{vu(e,t.alternate,t)}finally{se=i,O.p=n,j.T=a}}Be=3}}function Ju(){if(Be===4||Be===3){Be=0,wh();var e=va,t=Bn,a=$t,n=Du;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,Bn=va=null,Iu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ba=null),fo(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Hn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=j.T,i=O.p,O.p=2,j.T=null;try{for(var o=e.onRecoverableError,r=0;r<n.length;r++){var l=n[r];o(l.value,{componentStack:l.stack})}}finally{j.T=t,O.p=i}}($t&3)!==0&&Ni(),Et(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Qr?xs++:(xs=0,Qr=e):xs=0,ws(0)}}function Iu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ts(t)))}function Ni(){return Fu(),Lu(),Ju(),Vu()}function Vu(){if(Be!==5)return!1;var e=va,t=Vr;Vr=0;var a=fo($t),n=j.T,i=O.p;try{O.p=32>a?32:a,j.T=null,a=Zr,Zr=null;var o=va,r=$t;if(Be=0,Bn=va=null,$t=0,(se&6)!==0)throw Error(c(331));var l=se;if(se|=4,_u(o.current),Cu(o,o.current,r,a),se=l,ws(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Hn,o)}catch{}return!0}finally{O.p=i,j.T=n,Iu(e,t)}}function Zu(e,t,a){t=gt(a,t),t=Tr(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(Pn(e,2),Et(e))}function re(e,t,a){if(e.tag===3)Zu(e,e,a);else for(;t!==null;){if(t.tag===3){Zu(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ba===null||!ba.has(n))){e=gt(a,e),a=Qd(2),n=ua(t,a,2),n!==null&&(Xd(a,n,t,e),Pn(n,2),Et(n));break}}t=t.return}}function Wr(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Vm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Lr=!0,i.add(a),e=Wm.bind(null,e,t,a),t.then(e,e))}function Wm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,he===e&&(K&a)===a&&(ye===4||ye===3&&(K&62914560)===K&&300>at()-Bi?(se&2)===0&&kn(e,0):Jr|=a,_n===K&&(_n=0)),Et(e)}function Qu(e,t){t===0&&(t=Fl()),e=Na(e,t),e!==null&&(Pn(e,t),Et(e))}function $m(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qu(e,a)}function ef(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Qu(e,a)}function tf(e,t){return uo(e,t)}var Ri=null,On=null,$r=!1,qi=!1,el=!1,xa=0;function Et(e){e!==On&&e.next===null&&(On===null?Ri=On=e:On=On.next=e),qi=!0,$r||($r=!0,nf())}function ws(e,t){if(!el&&qi){el=!0;do for(var a=!1,n=Ri;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var r=n.suspendedLanes,l=n.pingedLanes;o=(1<<31-st(42|e)+1)-1,o&=i&~(r&~l),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,$u(n,o))}else o=K,o=Ps(n,n===he?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Un(n,o)||(a=!0,$u(n,o));n=n.next}while(a);el=!1}}function af(){Xu()}function Xu(){qi=$r=!1;var e=0;xa!==0&&mf()&&(e=xa);for(var t=at(),a=null,n=Ri;n!==null;){var i=n.next,o=Ku(n,t);o===0?(n.next=null,a===null?Ri=i:a.next=i,i===null&&(On=a)):(a=n,(e!==0||(o&3)!==0)&&(qi=!0)),n=i}Be!==0&&Be!==5||ws(e),xa!==0&&(xa=0)}function Ku(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var r=31-st(o),l=1<<r,u=i[r];u===-1?((l&a)===0||(l&n)!==0)&&(i[r]=Bh(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}if(t=he,a=K,a=Ps(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&po(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Un(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&po(n),fo(a)){case 2:case 8:a=Pl;break;case 32:a=qs;break;case 268435456:a=Yl;break;default:a=qs}return n=Wu.bind(null,e),a=uo(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&po(n),e.callbackPriority=2,e.callbackNode=null,2}function Wu(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ni()&&e.callbackNode!==a)return null;var n=K;return n=Ps(e,e===he?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(zu(e,n,t),Ku(e,at()),e.callbackNode!=null&&e.callbackNode===a?Wu.bind(null,e):null)}function $u(e,t){if(Ni())return null;zu(e,t,!0)}function nf(){gf(function(){(se&6)!==0?uo(Ul,af):Xu()})}function tl(){if(xa===0){var e=bn;e===0&&(e=Gs,Gs<<=1,(Gs&261888)===0&&(Gs=256)),xa=e}return xa}function ep(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Js(""+e)}function tp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function sf(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var o=ep((i[Ve]||null).action),r=n.submitter;r&&(t=(t=r[Ve]||null)?ep(t.formAction):r.getAttribute("formAction"),t!==null&&(o=t,r=null));var l=new Qs("action","action",null,n,i);e.push({event:l,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(xa!==0){var u=r?tp(i,r):new FormData(i);wr(a,{pending:!0,data:u,method:i.method,action:o},null,u)}}else typeof o=="function"&&(l.preventDefault(),u=r?tp(i,r):new FormData(i),wr(a,{pending:!0,data:u,method:i.method,action:o},o,u))},currentTarget:i}]})}}for(var al=0;al<Go.length;al++){var nl=Go[al],of=nl.toLowerCase(),rf=nl[0].toUpperCase()+nl.slice(1);St(of,"on"+rf)}St(Oc,"onAnimationEnd"),St(zc,"onAnimationIteration"),St(Ec,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(Am,"onTransitionRun"),St(jm,"onTransitionStart"),St(Sm,"onTransitionCancel"),St(Nc,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(As));function ap(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var r=n.length-1;0<=r;r--){var l=n[r],u=l.instance,b=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=b;try{o(i)}catch(A){Ws(A)}i.currentTarget=null,o=u}else for(r=0;r<n.length;r++){if(l=n[r],u=l.instance,b=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=b;try{o(i)}catch(A){Ws(A)}i.currentTarget=null,o=u}}}}function X(e,t){var a=t[go];a===void 0&&(a=t[go]=new Set);var n=e+"__bubble";a.has(n)||(np(t,e,2,!1),a.add(n))}function sl(e,t,a){var n=0;t&&(n|=4),np(a,e,n,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function il(e){if(!e[Gi]){e[Gi]=!0,Xl.forEach(function(a){a!=="selectionchange"&&(lf.has(a)||sl(a,!1,e),sl(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,sl("selectionchange",!1,t))}}function np(e,t,a,n){switch(Op(t)){case 2:var i=Rf;break;case 8:i=qf;break;default:i=xl}a=i.bind(null,t,a,e),i=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function ol(e,t,a,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var l=n.stateNode.containerInfo;if(l===i)break;if(r===4)for(r=n.return;r!==null;){var u=r.tag;if((u===3||u===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;l!==null;){if(r=$a(l),r===null)return;if(u=r.tag,u===5||u===6||u===26||u===27){n=o=r;continue e}l=l.parentNode}}n=n.return}lc(function(){var b=o,A=jo(a),C=[];e:{var v=Rc.get(e);if(v!==void 0){var y=Qs,E=e;switch(e){case"keypress":if(Vs(a)===0)break e;case"keydown":case"keyup":y=em;break;case"focusin":E="focus",y=Bo;break;case"focusout":E="blur",y=Bo;break;case"beforeblur":case"afterblur":y=Bo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=nm;break;case Oc:case zc:case Ec:y=Jh;break;case Nc:y=im;break;case"scroll":case"scrollend":y=Uh;break;case"wheel":y=rm;break;case"copy":case"cut":case"paste":y=Vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=hc;break;case"toggle":case"beforetoggle":y=cm}var U=(t&4)!==0,ue=!U&&(e==="scroll"||e==="scrollend"),f=U?v!==null?v+"Capture":null:v;U=[];for(var p=b,g;p!==null;){var S=p;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||f===null||(S=Ln(p,f),S!=null&&U.push(js(p,S,g))),ue)break;p=p.return}0<U.length&&(v=new y(v,E,null,a,A),C.push({event:v,listeners:U}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&a!==Ao&&(E=a.relatedTarget||a.fromElement)&&($a(E)||E[Wa]))break e;if((y||v)&&(v=A.window===A?A:(v=A.ownerDocument)?v.defaultView||v.parentWindow:window,y?(E=a.relatedTarget||a.toElement,y=b,E=E?$a(E):null,E!==null&&(ue=B(E),U=E.tag,E!==ue||U!==5&&U!==27&&U!==6)&&(E=null)):(y=null,E=b),y!==E)){if(U=uc,S="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(U=hc,S="onPointerLeave",f="onPointerEnter",p="pointer"),ue=y==null?v:Fn(y),g=E==null?v:Fn(E),v=new U(S,p+"leave",y,a,A),v.target=ue,v.relatedTarget=g,S=null,$a(A)===b&&(U=new U(f,p+"enter",E,a,A),U.target=g,U.relatedTarget=ue,S=U),ue=S,y&&E)t:{for(U=cf,f=y,p=E,g=0,S=f;S;S=U(S))g++;S=0;for(var H=p;H;H=U(H))S++;for(;0<g-S;)f=U(f),g--;for(;0<S-g;)p=U(p),S--;for(;g--;){if(f===p||p!==null&&f===p.alternate){U=f;break t}f=U(f),p=U(p)}U=null}else U=null;y!==null&&sp(C,v,y,U,!1),E!==null&&ue!==null&&sp(C,ue,E,U,!0)}}e:{if(v=b?Fn(b):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var ae=wc;else if(yc(v))if(Ac)ae=ym;else{ae=bm;var G=gm}else y=v.nodeName,!y||y.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?b&&wo(b.elementType)&&(ae=wc):ae=vm;if(ae&&(ae=ae(e,b))){xc(C,ae,a,A);break e}G&&G(e,v,b),e==="focusout"&&b&&v.type==="number"&&b.memoizedProps.value!=null&&xo(v,"number",v.value)}switch(G=b?Fn(b):window,e){case"focusin":(yc(G)||G.contentEditable==="true")&&(cn=G,No=b,Wn=null);break;case"focusout":Wn=No=cn=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,kc(C,a,A);break;case"selectionchange":if(wm)break;case"keydown":case"keyup":kc(C,a,A)}var I;if(Do)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else ln?bc(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(mc&&a.locale!=="ko"&&(ln||W!=="onCompositionStart"?W==="onCompositionEnd"&&ln&&(I=cc()):(sa=A,Mo="value"in sa?sa.value:sa.textContent,ln=!0)),G=Hi(b,W),0<G.length&&(W=new pc(W,e,null,a,A),C.push({event:W,listeners:G}),I?W.data=I:(I=vc(a),I!==null&&(W.data=I)))),(I=um?pm(e,a):hm(e,a))&&(W=Hi(b,"onBeforeInput"),0<W.length&&(G=new pc("onBeforeInput","beforeinput",null,a,A),C.push({event:G,listeners:W}),G.data=I)),sf(C,e,b,a,A)}ap(C,t)})}function js(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hi(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Ln(e,a),i!=null&&n.unshift(js(e,i,o)),i=Ln(e,t),i!=null&&n.push(js(e,i,o))),e.tag===3)return n;e=e.return}return[]}function cf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sp(e,t,a,n,i){for(var o=t._reactName,r=[];a!==null&&a!==n;){var l=a,u=l.alternate,b=l.stateNode;if(l=l.tag,u!==null&&u===n)break;l!==5&&l!==26&&l!==27||b===null||(u=b,i?(b=Ln(a,o),b!=null&&r.unshift(js(a,b,u))):i||(b=Ln(a,o),b!=null&&r.push(js(a,b,u)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var df=/\r\n?/g,uf=/\u0000|\uFFFD/g;function ip(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(uf,"")}function op(e,t){return t=ip(t),ip(e)===t}function de(e,t,a,n,i,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||sn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&sn(e,""+n);break;case"className":Fs(e,"class",n);break;case"tabIndex":Fs(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Fs(e,a,n);break;case"style":oc(e,n,o);break;case"data":if(t!=="object"){Fs(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Js(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&de(e,t,"name",i.name,i,null),de(e,t,"formEncType",i.formEncType,i,null),de(e,t,"formMethod",i.formMethod,i,null),de(e,t,"formTarget",i.formTarget,i,null)):(de(e,t,"encType",i.encType,i,null),de(e,t,"method",i.method,i,null),de(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Js(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Gt);break;case"onScroll":n!=null&&X("scroll",e);break;case"onScrollEnd":n!=null&&X("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Js(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":X("beforetoggle",e),X("toggle",e),Ys(e,"popover",n);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ys(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gh.get(a)||a,Ys(e,a,n))}}function rl(e,t,a,n,i,o){switch(a){case"style":oc(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?sn(e,n):(typeof n=="number"||typeof n=="bigint")&&sn(e,""+n);break;case"onScroll":n!=null&&X("scroll",e);break;case"onScrollEnd":n!=null&&X("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),o=e[Ve]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ys(e,a,n)}}}function Re(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",e),X("load",e);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var r=a[o];if(r!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:de(e,t,o,r,a,null)}}i&&de(e,t,"srcSet",a.srcSet,a,null),n&&de(e,t,"src",a.src,a,null);return;case"input":X("invalid",e);var l=o=r=i=null,u=null,b=null;for(n in a)if(a.hasOwnProperty(n)){var A=a[n];if(A!=null)switch(n){case"name":i=A;break;case"type":r=A;break;case"checked":u=A;break;case"defaultChecked":b=A;break;case"value":o=A;break;case"defaultValue":l=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:de(e,t,n,A,a,null)}}ac(e,o,l,u,b,r,i,!1);return;case"select":X("invalid",e),n=r=o=null;for(i in a)if(a.hasOwnProperty(i)&&(l=a[i],l!=null))switch(i){case"value":o=l;break;case"defaultValue":r=l;break;case"multiple":n=l;default:de(e,t,i,l,a,null)}t=o,a=r,e.multiple=!!n,t!=null?nn(e,!!n,t,!1):a!=null&&nn(e,!!n,a,!0);return;case"textarea":X("invalid",e),o=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"value":n=l;break;case"defaultValue":i=l;break;case"children":o=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:de(e,t,r,l,a,null)}sc(e,n,i,o);return;case"option":for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null)&&(u==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":de(e,t,u,n,a,null));return;case"dialog":X("beforetoggle",e),X("toggle",e),X("cancel",e),X("close",e);break;case"iframe":case"object":X("load",e);break;case"video":case"audio":for(n=0;n<As.length;n++)X(As[n],e);break;case"image":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"embed":case"source":case"link":X("error",e),X("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in a)if(a.hasOwnProperty(b)&&(n=a[b],n!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:de(e,t,b,n,a,null)}return;default:if(wo(t)){for(A in a)a.hasOwnProperty(A)&&(n=a[A],n!==void 0&&rl(e,t,A,n,a,void 0));return}}for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null&&de(e,t,l,n,a,null))}function pf(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,r=null,l=null,u=null,b=null,A=null;for(y in a){var C=a[y];if(a.hasOwnProperty(y)&&C!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":u=C;default:n.hasOwnProperty(y)||de(e,t,y,null,n,C)}}for(var v in n){var y=n[v];if(C=a[v],n.hasOwnProperty(v)&&(y!=null||C!=null))switch(v){case"type":o=y;break;case"name":i=y;break;case"checked":b=y;break;case"defaultChecked":A=y;break;case"value":r=y;break;case"defaultValue":l=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,t));break;default:y!==C&&de(e,t,v,y,n,C)}}yo(e,r,l,u,b,A,o,i);return;case"select":y=r=l=v=null;for(o in a)if(u=a[o],a.hasOwnProperty(o)&&u!=null)switch(o){case"value":break;case"multiple":y=u;default:n.hasOwnProperty(o)||de(e,t,o,null,n,u)}for(i in n)if(o=n[i],u=a[i],n.hasOwnProperty(i)&&(o!=null||u!=null))switch(i){case"value":v=o;break;case"defaultValue":l=o;break;case"multiple":r=o;default:o!==u&&de(e,t,i,o,n,u)}t=l,a=r,n=y,v!=null?nn(e,!!a,v,!1):!!n!=!!a&&(t!=null?nn(e,!!a,t,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":y=v=null;for(l in a)if(i=a[l],a.hasOwnProperty(l)&&i!=null&&!n.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:de(e,t,l,null,n,i)}for(r in n)if(i=n[r],o=a[r],n.hasOwnProperty(r)&&(i!=null||o!=null))switch(r){case"value":v=i;break;case"defaultValue":y=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==o&&de(e,t,r,i,n,o)}nc(e,v,y);return;case"option":for(var E in a)v=a[E],a.hasOwnProperty(E)&&v!=null&&!n.hasOwnProperty(E)&&(E==="selected"?e.selected=!1:de(e,t,E,null,n,v));for(u in n)v=n[u],y=a[u],n.hasOwnProperty(u)&&v!==y&&(v!=null||y!=null)&&(u==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":de(e,t,u,v,n,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in a)v=a[U],a.hasOwnProperty(U)&&v!=null&&!n.hasOwnProperty(U)&&de(e,t,U,null,n,v);for(b in n)if(v=n[b],y=a[b],n.hasOwnProperty(b)&&v!==y&&(v!=null||y!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(c(137,t));break;default:de(e,t,b,v,n,y)}return;default:if(wo(t)){for(var ue in a)v=a[ue],a.hasOwnProperty(ue)&&v!==void 0&&!n.hasOwnProperty(ue)&&rl(e,t,ue,void 0,n,v);for(A in n)v=n[A],y=a[A],!n.hasOwnProperty(A)||v===y||v===void 0&&y===void 0||rl(e,t,A,v,n,y);return}}for(var f in a)v=a[f],a.hasOwnProperty(f)&&v!=null&&!n.hasOwnProperty(f)&&de(e,t,f,null,n,v);for(C in n)v=n[C],y=a[C],!n.hasOwnProperty(C)||v===y||v==null&&y==null||de(e,t,C,v,n,y)}function rp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],o=i.transferSize,r=i.initiatorType,l=i.duration;if(o&&l&&rp(r)){for(r=0,l=i.responseEnd,n+=1;n<a.length;n++){var u=a[n],b=u.startTime;if(b>l)break;var A=u.transferSize,C=u.initiatorType;A&&rp(C)&&(u=u.responseEnd,r+=A*(u<l?1:(l-b)/(u-b)))}if(--n,t+=8*(o+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ll=null,cl=null;function Ui(e){return e.nodeType===9?e:e.ownerDocument}function lp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ul=null;function mf(){var e=window.event;return e&&e.type==="popstate"?e===ul?!1:(ul=e,!0):(ul=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,ff=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,gf=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(e){return up.resolve(null).then(e).catch(bf)}:dp;function bf(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function pp(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Rn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ss(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ss(a);for(var o=a.firstChild;o;){var r=o.nextSibling,l=o.nodeName;o[Yn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=r}}else a==="body"&&Ss(e.ownerDocument.body);a=i}while(a);Rn(t)}function hp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function pl(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pl(a),bo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vf(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Yn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function yf(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function mp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function hl(e){return e.data==="$?"||e.data==="$~"}function ml(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xf(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fl=null;function fp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function gp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function bp(e,t,a){switch(t=Ui(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ss(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bo(e)}var At=new Map,vp=new Set;function Pi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=O.d;O.d={f:wf,r:Af,D:jf,C:Sf,L:Cf,m:Mf,X:_f,S:Tf,M:Bf};function wf(){var e=ea.f(),t=Oi();return e||t}function Af(e){var t=en(e);t!==null&&t.tag===5&&t.type==="form"?Nd(t):ea.r(e)}var zn=typeof document>"u"?null:document;function yp(e,t,a){var n=zn;if(n&&typeof t=="string"&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),vp.has(i)||(vp.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Re(t,"link",e),ke(t),n.head.appendChild(t)))}}function jf(e){ea.D(e),yp("dns-prefetch",e,null)}function Sf(e,t){ea.C(e,t),yp("preconnect",e,t)}function Cf(e,t,a){ea.L(e,t,a);var n=zn;if(n&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+mt(a.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var o=i;switch(t){case"style":o=En(e);break;case"script":o=Nn(e)}At.has(o)||(e=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),At.set(o,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Cs(o))||t==="script"&&n.querySelector(Ms(o))||(t=n.createElement("link"),Re(t,"link",e),ke(t),n.head.appendChild(t)))}}function Mf(e,t){ea.m(e,t);var a=zn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+mt(n)+'"][href="'+mt(e)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Nn(e)}if(!At.has(o)&&(e=R({rel:"modulepreload",href:e},t),At.set(o,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ms(o)))return}n=a.createElement("link"),Re(n,"link",e),ke(n),a.head.appendChild(n)}}}function Tf(e,t,a){ea.S(e,t,a);var n=zn;if(n&&e){var i=tn(n).hoistableStyles,o=En(e);t=t||"default";var r=i.get(o);if(!r){var l={loading:0,preload:null};if(r=n.querySelector(Cs(o)))l.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},a),(a=At.get(o))&&gl(e,a);var u=r=n.createElement("link");ke(u),Re(u,"link",e),u._p=new Promise(function(b,A){u.onload=b,u.onerror=A}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Yi(r,t,n)}r={type:"stylesheet",instance:r,count:1,state:l},i.set(o,r)}}}function _f(e,t){ea.X(e,t);var a=zn;if(a&&e){var n=tn(a).hoistableScripts,i=Nn(e),o=n.get(i);o||(o=a.querySelector(Ms(i)),o||(e=R({src:e,async:!0},t),(t=At.get(i))&&bl(e,t),o=a.createElement("script"),ke(o),Re(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Bf(e,t){ea.M(e,t);var a=zn;if(a&&e){var n=tn(a).hoistableScripts,i=Nn(e),o=n.get(i);o||(o=a.querySelector(Ms(i)),o||(e=R({src:e,async:!0,type:"module"},t),(t=At.get(i))&&bl(e,t),o=a.createElement("script"),ke(o),Re(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function xp(e,t,a,n){var i=(i=Z.current)?Pi(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=En(a.href),a=tn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=En(a.href);var o=tn(i).hoistableStyles,r=o.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,r),(o=i.querySelector(Cs(e)))&&!o._p&&(r.instance=o,r.state.loading=5),At.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(e,a),o||kf(i,e,a,r.state))),t&&n===null)throw Error(c(528,""));return r}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nn(a),a=tn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function En(e){return'href="'+mt(e)+'"'}function Cs(e){return'link[rel="stylesheet"]['+e+"]"}function wp(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function kf(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Re(t,"link",a),ke(t),e.head.appendChild(t))}function Nn(e){return'[src="'+mt(e)+'"]'}function Ms(e){return"script[async]"+e}function Ap(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+mt(a.href)+'"]');if(n)return t.instance=n,ke(n),n;var i=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ke(n),Re(n,"style",i),Yi(n,a.precedence,e),t.instance=n;case"stylesheet":i=En(a.href);var o=e.querySelector(Cs(i));if(o)return t.state.loading|=4,t.instance=o,ke(o),o;n=wp(a),(i=At.get(i))&&gl(n,i),o=(e.ownerDocument||e).createElement("link"),ke(o);var r=o;return r._p=new Promise(function(l,u){r.onload=l,r.onerror=u}),Re(o,"link",n),t.state.loading|=4,Yi(o,a.precedence,e),t.instance=o;case"script":return o=Nn(a.src),(i=e.querySelector(Ms(o)))?(t.instance=i,ke(i),i):(n=a,(i=At.get(o))&&(n=R({},a),bl(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),ke(i),Re(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Yi(n,a.precedence,e));return t.instance}function Yi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,r=0;r<n.length;r++){var l=n[r];if(l.dataset.precedence===t)o=l;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function gl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fi=null;function jp(e,t,a){if(Fi===null){var n=new Map,i=Fi=new Map;i.set(a,n)}else i=Fi,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var o=a[i];if(!(o[Yn]||o[Oe]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var r=o.getAttribute(t)||"";r=e+r;var l=n.get(r);l?l.push(o):n.set(r,[o])}}return n}function Sp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Df(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Of(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=En(n.href),o=t.querySelector(Cs(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Li.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,ke(o);return}o=t.ownerDocument||t,n=wp(n),(i=At.get(i))&&gl(n,i),o=o.createElement("link"),ke(o);var r=o;r._p=new Promise(function(l,u){r.onload=l,r.onerror=u}),Re(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Li.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var vl=0;function zf(e,t){return e.stylesheets&&e.count===0&&Ii(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&vl===0&&(vl=62500*hf());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ii(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>vl?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Li(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ii(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ji=null;function Ii(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ji=new Map,t.forEach(Ef,e),Ji=null,Li.call(e))}function Ef(e,t){if(!(t.state.loading&4)){var a=Ji.get(e);if(a)var n=a.get(null);else{a=new Map,Ji.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var r=i[o];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=t.instance,r=i.getAttribute("data-precedence"),o=a.get(r)||n,o===n&&a.set(null,i),a.set(r,i),this.count++,n=Li.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ts={$$typeof:Ge,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Nf(e,t,a,n,i,o,r,l,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.hiddenUpdates=ho(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Mp(e,t,a,n,i,o,r,l,u,b,A,C){return e=new Nf(e,t,a,r,u,b,A,C,l),t=1,o===!0&&(t|=24),o=ot(3,null,null,t),e.current=o,o.stateNode=e,t=Ko(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},tr(o),e}function Tp(e){return e?(e=pn,e):pn}function _p(e,t,a,n,i,o){i=Tp(i),n.context===null?n.context=i:n.pendingContext=i,n=da(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=ua(e,n,t),a!==null&&($e(a,e,t),is(a,e,t))}function Bp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function yl(e,t){Bp(e,t),(e=e.alternate)&&Bp(e,t)}function kp(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&$e(t,e,67108864),yl(e,67108864)}}function Dp(e){if(e.tag===13||e.tag===31){var t=ut();t=mo(t);var a=Na(e,t);a!==null&&$e(a,e,t),yl(e,t)}}var Vi=!0;function Rf(e,t,a,n){var i=j.T;j.T=null;var o=O.p;try{O.p=2,xl(e,t,a,n)}finally{O.p=o,j.T=i}}function qf(e,t,a,n){var i=j.T;j.T=null;var o=O.p;try{O.p=8,xl(e,t,a,n)}finally{O.p=o,j.T=i}}function xl(e,t,a,n){if(Vi){var i=wl(n);if(i===null)ol(e,t,n,Zi,a),zp(e,n);else if(Hf(i,e,t,a,n))n.stopPropagation();else if(zp(e,n),t&4&&-1<Gf.indexOf(e)){for(;i!==null;){var o=en(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var r=ka(o.pendingLanes);if(r!==0){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;r;){var u=1<<31-st(r);l.entanglements[1]|=u,r&=~u}Et(o),(se&6)===0&&(ki=at()+500,ws(0))}}break;case 31:case 13:l=Na(o,2),l!==null&&$e(l,o,2),Oi(),yl(o,2)}if(o=wl(n),o===null&&ol(e,t,n,Zi,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else ol(e,t,n,null,a)}}function wl(e){return e=jo(e),Al(e)}var Zi=null;function Al(e){if(Zi=null,e=$a(e),e!==null){var t=B(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=k(t),e!==null)return e;e=null}else if(a===31){if(e=D(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Op(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ah()){case Ul:return 2;case Pl:return 8;case qs:case jh:return 32;case Yl:return 268435456;default:return 32}default:return 32}}var jl=!1,Aa=null,ja=null,Sa=null,_s=new Map,Bs=new Map,Ca=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zp(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":_s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(t.pointerId)}}function ks(e,t,a,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=en(t),t!==null&&kp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hf(e,t,a,n,i){switch(t){case"focusin":return Aa=ks(Aa,e,t,a,n,i),!0;case"dragenter":return ja=ks(ja,e,t,a,n,i),!0;case"mouseover":return Sa=ks(Sa,e,t,a,n,i),!0;case"pointerover":var o=i.pointerId;return _s.set(o,ks(_s.get(o)||null,e,t,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Bs.set(o,ks(Bs.get(o)||null,e,t,a,n,i)),!0}return!1}function Ep(e){var t=$a(e.target);if(t!==null){var a=B(t);if(a!==null){if(t=a.tag,t===13){if(t=k(a),t!==null){e.blockedOn=t,Zl(e.priority,function(){Dp(a)});return}}else if(t===31){if(t=D(a),t!==null){e.blockedOn=t,Zl(e.priority,function(){Dp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wl(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ao=n,a.target.dispatchEvent(n),Ao=null}else return t=en(a),t!==null&&kp(t),e.blockedOn=a,!1;t.shift()}return!0}function Np(e,t,a){Qi(e)&&a.delete(t)}function Uf(){jl=!1,Aa!==null&&Qi(Aa)&&(Aa=null),ja!==null&&Qi(ja)&&(ja=null),Sa!==null&&Qi(Sa)&&(Sa=null),_s.forEach(Np),Bs.forEach(Np)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Uf)))}var Ki=null;function Rp(e){Ki!==e&&(Ki=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Al(n||a)===null)continue;break}var o=en(a);o!==null&&(e.splice(t,3),t-=3,wr(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Rn(e){function t(u){return Xi(u,e)}Aa!==null&&Xi(Aa,e),ja!==null&&Xi(ja,e),Sa!==null&&Xi(Sa,e),_s.forEach(t),Bs.forEach(t);for(var a=0;a<Ca.length;a++){var n=Ca[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Ep(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],r=i[Ve]||null;if(typeof o=="function")r||Rp(a);else if(r){var l=null;if(o&&o.hasAttribute("formAction")){if(i=o,r=o[Ve]||null)l=r.formAction;else if(Al(i)!==null)continue}else l=r.action;typeof l=="function"?a[n+1]=l:(a.splice(n,3),n-=3),Rp(a)}}}function qp(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Sl(e){this._internalRoot=e}Wi.prototype.render=Sl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=ut();_p(a,n,e,t,null,null)},Wi.prototype.unmount=Sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_p(e.current,2,null,e,null,null),Oi(),t[Wa]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vl();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ca.length&&t!==0&&t<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Ep(e)}};var Gp=m.version;if(Gp!=="19.2.7")throw Error(c(527,Gp,"19.2.7"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=M(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Pf={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Hn=$i.inject(Pf),nt=$i}catch{}}return Os.createRoot=function(e,t){if(!x(e))throw Error(c(299));var a=!1,n="",i=Jd,o=Id,r=Vd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Mp(e,1,!1,null,null,a,n,null,i,o,r,qp),e[Wa]=t.current,il(e),new Sl(t)},Os.hydrateRoot=function(e,t,a){if(!x(e))throw Error(c(299));var n=!1,i="",o=Jd,r=Id,l=Vd,u=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=Mp(e,1,!0,t,a??null,n,i,u,o,r,l,qp),t.context=Tp(null),a=t.current,n=ut(),n=mo(n),i=da(n),i.callback=null,ua(a,i,n),a=n,t.current.lanes=a,Pn(t,a),Et(t),e[Wa]=t.current,il(e),new Wi(t)},Os.version="19.2.7",Os}var Zp;function Kf(){if(Zp)return Tl.exports;Zp=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(m){console.error(m)}}return d(),Tl.exports=Xf(),Tl.exports}var Wf=Kf();const $f=d=>d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eg=d=>d.replace(/^([A-Z])|[\s-_]+(\w)/g,(m,w,c)=>c?c.toUpperCase():w.toLowerCase()),Qp=d=>{const m=eg(d);return m.charAt(0).toUpperCase()+m.slice(1)},rh=(...d)=>d.filter((m,w,c)=>!!m&&m.trim()!==""&&c.indexOf(m)===w).join(" ").trim(),tg=d=>{for(const m in d)if(m.startsWith("aria-")||m==="role"||m==="title")return!0};var ag={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ng=te.forwardRef(({color:d="currentColor",size:m=24,strokeWidth:w=2,absoluteStrokeWidth:c,className:x="",children:B,iconNode:k,...D},_)=>te.createElement("svg",{ref:_,...ag,width:m,height:m,stroke:d,strokeWidth:c?Number(w)*24/Number(m):w,className:rh("lucide",x),...!B&&!tg(D)&&{"aria-hidden":"true"},...D},[...k.map(([M,N])=>te.createElement(M,N)),...Array.isArray(B)?B:[B]]));const F=(d,m)=>{const w=te.forwardRef(({className:c,...x},B)=>te.createElement(ng,{ref:B,iconNode:m,className:rh(`lucide-${$f(Qp(d))}`,`lucide-${d}`,c),...x}));return w.displayName=Qp(d),w};const sg=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],ig=F("arrow-down",sg);const og=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],rg=F("arrow-left",og);const lg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qe=F("arrow-right",lg);const cg=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],dg=F("book-marked",cg);const ug=[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]],pg=F("book-open-check",ug);const hg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Nl=F("book-open",hg);const mg=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Xp=F("boxes",mg);const fg=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],gg=F("chart-column",fg);const bg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],vg=F("chevron-down",bg);const yg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xa=F("circle-check",yg);const xg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],to=F("circle-dollar-sign",xg);const wg=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],zl=F("clock-3",wg);const Ag=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],jg=F("cloud",Ag);const Sg=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Kp=F("code-xml",Sg);const Cg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],et=F("external-link",Cg);const Mg=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],lh=F("file-check-2",Mg);const Tg=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],_g=F("file-input",Tg);const Bg=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]],kg=F("file-output",Bg);const Dg=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Og=F("file-search",Dg);const zg=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ao=F("file-text",zg);const Eg=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Ng=F("gauge",Eg);const Rg=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",key:"pgg06f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m21.5 10.5-8-8",key:"a17d9x"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m8.5 7.5 8 8",key:"1oyaui"}]],ch=F("gavel",Rg);const qg=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Gg=F("github",qg);const Hg=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],Za=F("landmark",Hg);const Ug=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Pg=F("layers",Ug);const Yg=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]],Fg=F("library-big",Yg);const Lg=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],dh=F("lightbulb",Lg);const Jg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ig=F("menu",Jg);const Vg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Zg=F("moon",Vg);const Qg=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Xg=F("rocket",Qg);const Kg=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Rl=F("scale",Kg);const Wg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Qa=F("search",Wg);const $g=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],zs=F("shield-check",$g);const eb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],tb=F("sparkles",eb);const ab=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],nb=F("sun",ab);const sb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],uh=F("target",sb);const ib=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],ob=F("terminal",ib);const rb=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],lb=F("triangle-alert",rb);const cb=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],db=F("users-round",cb);const ub=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]],pb=F("wallet-cards",ub);const hb=[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]],Dl=F("waypoints",hb);const mb=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],fb=F("workflow",mb);const gb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ph=F("x",gb),hh=[{route:"/",legacyPath:"index.html",title:"Welcome to Budget Matter",description:"How Federal budget is planned, formulated, executed, and reported.",html:`<h1 class="my-4">Welcome to Budget Matter</h1>

    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Budget Process</h4>
          <div class="card-body">
            <p class="card-text">How Federal budget is planned, formulated, executed, and reported.</p>
          </div>
          <div class="card-footer">
            <a href="/process" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Budget Laws</h4>
          <div class="card-body">
            <p class="card-text">Legislative and regulatory requirements set forth for financial management function.
            </p>
          </div>
          <div class="card-footer">
            <a href="/policy" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Portfolio</h4>
          <div class="card-body">
            <p class="card-text">Real-world applications</p>
          </div>
          <div class="card-footer">
            <a href="/portfolio-1-col" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <h3>Personal Projects</h3>

    <div class="row">
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/tableau-1-citibike"><img class="card-img-top" src="/assets/img/tableau-1-citibike.JPG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/tableau-1-citibike">Tableau Citi Bike Analysis</a>
            </h4>
            <p class="card-text">Use Tableau to conduct NYC's Citi Bike Share Program Usage analysis.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project7/project7"><img class="card-img-top" src="/assets/project7/Spend%20Plan%20Demo.gif" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project7/project7">Budget Spend Plan Model</a>
            </h4>
            <p class="card-text">Scenario-driven self-balance tool to plan and monitor Federal budget exeuction.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project10/project10"><img class="card-img-top" src="/assets/project10/book.gif" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project10/project10">Python - Office Excel 1</a>
            </h4>
            <p class="card-text">Use Python to Combine Excel Workbooks and/or Worksheets</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project11/project11"><img class="card-img-top" src="/assets/project11/compare.gif" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project11/project11">Python - Office Excel 2</a>
            </h4>
            <p class="card-text">Use Python to Compare Data and Changes in Excel Workbook.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project6/project6"><img class="card-img-top" src="/assets/project6/project6.PNG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project6/project6">Machine Learning in Python</a>
            </h4>
            <p class="card-text">Use Python Machine Learning to analyze and explore happiness.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project9/project9"><img class=" card-img-top" src="/assets/project9/vba.jpg" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project9/project9">Excel VBA Examples</a>
            </h4>
            <p class="card-text">Use VBA functionalities to conduct data comparison, mining, analysis.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project13/project13"><img class="card-img-top" src="/assets/project13/project13.PNG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project13/project13">Federal Spending Dashboard</a>
            </h4>
            <p class="card-text">Tableau based dashboard to track federal budget and spending.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project14/project14"><img class="card-img-top" src="/assets/project14/project14.PNG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project14/project14">Budget Execution</a>
            </h4>
            <p class="card-text">Tableau based dashboard to track and compare budget execution.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project15/project15"><img class="card-img-top" src="/assets/project15/sqlalchemy.png" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project15/project15">SQL Data, Python</a>
            </h4>
            <p class="card-text">SQL Data, Python Data Analysis &amp; Visualization</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project8/project8"><img class="card-img-top" src="/assets/project8/project8.PNG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project8/project8">Python, JS D3, and Leaflet</a>
            </h4>
            <p class="card-text">Conduct data mining, create map, add interactivity to the webpage.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/tableau-3-covid19"><img class="card-img-top" src="/assets/img/tableau-3-covid19.JPG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/tableau-3-covid19">COVID-19 Dashboard</a>
            </h4>
            <p class="card-text">Use Tableau to visualize the COVID-19 spread over last four months.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/tableau-2-fed-avg-salary"><img class="card-img-top" src="/assets/img/tableau-2-fed-avg-salary.JPG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/tableau-2-fed-avg-salary">About Federal Employment</a>
            </h4>
            <p class="card-text">Based on released FY 2018 data that is available to public.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project5/project5"><img class="card-img-top" src="/assets/img/project5.PNG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project5/project5">The Power of Plots</a>
            </h4>
            <p class="card-text">Apply Python Matplotlib to a real-world situation</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project4/project4"><img class="card-img-top" src="/assets/img/project4.PNG" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project4/project4">Biodiversity Dashboard</a>
            </h4>
            <p class="card-text">Use JavaScript, CSS, D3, Plotly to build interactive dashboard </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card h-100">
          <a href="/project12/project12"><img class="card-img-top" src="/assets/project12/text.gif" alt="Budget Matter visual"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/project12/project12">Use Python to Analyze Text</a>
            </h4>
            <p class="card-text">Perform Sentiment Analysis on Text.</p>
          </div>
        </div>
      </div>
    </div>`},{route:"/about",legacyPath:"about.html",title:"About",description:"Budget Matter is a knowledge sharing website, which is developed and maintained by Peter S, a Federal budget professional with budgeting, advanced and predictive analysis, program managing, accounting, and computer…",html:`<h1 class="mt-4 mb-3">About
      
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item active">About</li>
    </ol>

    
    <div class="row">
      <div class="col-lg-6">
        <img class="img-fluid rounded mb-4" src="/assets/img/budgetmatter.png" alt="Budget Matter visual">
      </div>
      <div class="col-lg-6">
        <h2>About Budget Matter</h2>
        <p><a href="https://budgetmatter.github.io/">Budget Matter</a> is a knowledge sharing website, which is developed and
          maintained by <a href="mailto:peterbudgetnote@gmail.com">Peter S</a>, a Federal budget professional with
          budgeting, advanced and predictive analysis, program managing, accounting, and computer programming
          background. </p>
        <p><a href="https://budgetmatter.github.io/">Budget Matter</a> aims to provide knowledge in federal budget
          process, financial management, and needed technical
          skills in data analysis and visualization. </p>
        <p><a href="https://budgetmatter.github.io/">Budget Matter</a> also aims to introduce tool and process to
          improve operation efficiency and result. It includes information on office software (Excel, Access, Tableau, etc.), system and database
          administration, information
          technology integration.</p>
      </div>

    </div>`},{route:"/b16_apportionments",legacyPath:"b16_apportionments.html",title:"Execution - Step 16: Budget Apportionment",description:"OMB Circular A-11 provides detailed instructions on preparing apportionments and is included in its entirety at the end of this chapter. Part IV covers all accounts except credit programs, which are covered in Part V.…",html:`<h3 class="my-4">Execution - Step 16: Budget Apportionment</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e15_oversight">Previous: Enactment - Step 15: Congress Oversight</a>
        <a id="custombuttonr" href="/b17_report">Next: Execution - Step 17: Reports on Budget Execution</a>
        <br> <br>
        
        
        <p>OMB Circular A-11 provides detailed instructions on preparing apportionments and is
          included in its entirety at the end of this chapter. Part IV covers all accounts except credit programs, which
          are covered in Part V. The material here supplements and clarifies the instructions contained in Part IV.</p>
        <p>The purpose of apportionment is to prevent agencies from incurring obligations at a
          rate which would require the appropriation of additional funds for the fiscal year in progress. A single
          apportionment is made for an entire appropriation or fund account and is prepared on the Apportionment and
          Reapportionment Schedule (S.F. 132). Section 121 of Circular A-11 contains detailed explanations of the line
          entries on the form.</p>
        <p>The legal basis for apportionment is contained at 31 U.S.C. 1512. The statute
          provides that the apportionment:</p>
        <ul class="list-group">
          <li class="list-group-item">will be made to achieve the most effective and economical use of resources; and</li>
          <li class="list-group-item">may be made by time periods (Category A) and/or activities, projects, etc., (Category B).</li>
        </ul>
        <br>
        <p>Requests for Category B apportionments must be submitted and approved by OMB prior to submitting the initial apportionment. When additional resources become available, an apportionable account is reapportioned.  With few exceptions, all accounts must be apportioned. Section 120 of Part IV of Circular A-11 lists exceptions to apportionment requirements. The major exceptions are non-revolving intra-governmental funds and funds considered by the President to be confidential in nature.   Section 120 of Circular A-11 requires that agency submits a list of all accounts to OMB by August 1st of each year. The list breaks out all accounts as follows:</p>

        <ul class="list-group">
          <li class="list-group-item">apportionable;</li>
          <li class="list-group-item">fully exempt from apportionment; and</li>
          <li class="list-group-item">whole accounts automatically apportioned.</li>
        </ul>
        <br>
        <p>U.S.C. 1515 (see Chapter II, Section 1) to fund:</p>
        <ul class="list-group">
          <li class="list-group-item">mandatory pay raises;</li>
          <li class="list-group-item">laws passed by Congress after the budget estimates were submitted; and</li>
          <li class="list-group-item">an emergency involving the safety of human life, protection of property or the immediate welfare of individuals when an existing appropriation is insufficient to fund amounts required by law.</li>
        </ul>
        <br>
        <p>A footnote and statement identical to the examples included in section 120.38 of Circular A-11 must be included with all requests for Deficiency or Supplemental Apportionments.</p>
        <p>Section 112 of OMB Circular A-11 provides detailed guidance on the reporting and treatment of rescission and deferral proposals. Amounts withheld for rescission or deferral are not apportioned. OMB must transmit special messages notifying Congress of all proposed rescissions or deferrals. (These special messages are discussed in Section 5 of this chapter of the Handbook.) Amounts withheld are reflected on lines 9 and 10 of the Apportionment and Reapportionment Schedule. Section 112 explains reapportionment procedures following Congressional action or inaction on rescission proposals and deferrals. </p>
        <p>A reapportionment request to release funds proposed for rescission must be sent to OMB prior to the expiration of the 45 days of continuous session during which Congress must pass legislation in order for a rescission to take effect. If Congress disapproves a deferral reflected on an apportionment, the reapportionment request releasing the funds must be submitted to OMB not later than one day following the enactment of the disapproving legislation.</p>
        <p>Section 120 Circular A-11 requires that apportionments be based on financial plans. Therefore, each request for apportionment or reapportionment must be accompanied by a financial plan supporting the request. The only exception to this requirement is initial apportionments where available funds are severely limited. Operating unit budget officers should obtain prior approval from the Office of Budget to submit initial apportionments without accompanying financial plans. </p>
        <p>Amounts apportioned in the first quarter should include a reasonable amount for contingencies. Details should be shown on the financial plan.</p>
        <p>Agency prepares and forwards apportionment requests to OMB for action. OMB returns the original, including any differences between the request and OMB action, by the date specified for that type of apportionment. Except as provided by law, funds may not be obligated in the absence of an approved apportionment.</p>
        <p><b>Standard Apportionment Procedures</b></p>
        <p>The OMB due dates for initial apportionments are as follows:</p>
        <img id="imageR7" src="/assets/img/apportionmentschdule.png" alt="Budget Matter visual">

        <p><b>August 21st</b>All accounts where at least a portion of resources become available for obligation without Congressional action. Such resources include unobligated balances for multi-year and no-year accounts, recoveries, deferrals and reimbursements. If an appropriation has been enacted, all accounts where all budgetary resources result from current action by Congress.   </p>
        <p><b>10 calendar days after enactment</b> Accounts where all budgetary resources after enactment result from current action by Congress and an appropriation was not enacted in time to meet the August 21st date. Accounts have budgetary resources independent of Congressional action and are thus subject to the August 21st initial apportionment date. Narrative explanations of the assumptions used in developing estimates accompany these apportionments. Estimates for unobligated balances carried forward and anticipated recoveries are based on past experience and anticipated obligation rates (Actuals will be apportioned later). Anticipated reimbursements are listed by source in a footnote, either on the back of the form or on a separate attachment. OMB must act by September 10th on initial apportionments submitted by August 21st. </p>
        <p>Initial apportionments for accounts with resources resulting solely from current Congressional action must be acted on within 30 calendar days of the approval of the appropriation or September 10th, whichever is later. </p>
        <p>OMB does not usually require submission of a Request for Apportionment or Reapportionment when Congress enacts a short-term Continuing Resolution. The Continuing Resolution usually specifies a rate at which obligations may be made; i.e., "the lower of the current rate or the rate contained in the House passed version of the appropriation bill." In these cases, OMB sends a Bulletin (i.e., OMB Bulletin CY-1) on how to determine the appropriate rate. The bulletin may include criteria for approval of automatic apportionments. For accounts which meet the criteria, the apportionments do not have to be submitted to OMB unless requested by OMB examiners. Agency determines which of the department's accounts meet the criteria for automatic apportionment. The appropriate amounts are "automatically apportioned" if so, stipulated in the bulletin. When full-year funding is enacted, the subsequent reapportionment will reflect the automatically apportioned amounts in the "Amount on latest S.F. 132" column. Guidance on automatic apportionments varies from year to year and operating unit budget officers should follow current guidance from OMB and the Office of Budget. </p>
        <p>A Reapportionment request is submitted to OMB as soon as a change in a previous apportionment becomes necessary due to a change in available resources, with certain exceptions as described below. If the change is the result of approval of legislation providing budget authority after the initial apportionment was made, the request is due to OMB within 10 calendar days of enactment. In other cases (i.e., significant change in reimbursements or recoveries), the request must be made in sufficient time to allow action by OMB before the revised amounts are needed for obligation. It is recommended that, if possible, requests be submitted at least a month before the funds are needed. Apportionment action for a specified time period may not be changed after the end of the period.</p>
        <p>Unobligated balances of amounts previously apportioned are available for obligation in later periods within the fiscal year unless specified by OMB. All reapportionment requests must be accompanied by current financial plans and narrative explanations.</p>
        <p>After an agency receives an approved apportionment, it allocates the money among its administrative units, projects, activities, etc. The amount allocated cannot exceed the apportionment. Allocations exceeding apportionments are a violation of the Antideficiency Act. </p>
        <a id="custombuttonl" href="/e15_oversight">Previous: Enactment - Step 15: Congress Oversight</a>
        <a id="custombuttonr" href="/b17_report">Next: Execution - Step 17: Reports on Budget Execution</a>
      </div>
    </div>`},{route:"/b17_report",legacyPath:"b17_report.html",title:"Execution - Step 17 Reports on Budget Execution",description:"Part IV, II, Section 130 of OMB Circular A-11 provides detailed instructions on preparing the Report on Budget Execution (S.F. 133) for most accounts, including credit programs. The material here supplements the…",html:`<h3 class="my-4">Execution - Step 17 Reports on Budget Execution</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/b16_apportionments">Previous: Execution - Step 16: Budget Apportionment</a>
        <a id="custombuttonr" href="/b18_rescission">Next: Execution - Step 18: Rescissions and Deferrals</a>
        <br> <br>
        
        
        <p>Part IV, II, Section 130 of OMB Circular A-11 provides detailed instructions on preparing the Report on Budget Execution (S.F. 133) for most accounts, including credit programs. The material here supplements the instructions in OMB Circular A-11.</p>
        <p>Agencies may substitute computer-produced reports in lieu of the S.F. 133 if advance approval is obtained from OMB. Agencies are encouraged to request the use of substitute reports whenever such reports would increase economy or efficiency. However, all such reports must conform to the format of the S.F. 133, be of the same size, shape, and quality, and use normal punctuation in dollar amounts. </p>
        <p>The S.F. 133 is prepared by the accounting officer for each operating unit and signed by an officer designated by the head of the agency. The initial fourth quarter reports are preliminary. Amended reports (designated as "FINAL" at the top center of the form) are submitted to OMB no later than November 30th in all cases where the balances on the preliminary report differ from those reported to Treasury for inclusion in the annual Treasury Annual Report Index. The originals of the quarterly and final S.F. 133 are sent to OMB; copies are sent to the House and Senate Appropriations Committees.</p>
        <p>The S.F. 133 (or approved substitute) is required for each open account, whether or not the account is apportioned. Expired accounts are included on the same form as the unexpired account(s) carrying the same appropriation title. Unless OMB determines otherwise, the first column of the S.F. 133 provides information on unexpired accounts in the appropriation; the second column reflects the status of expired accounts; the third column combines the amounts in columns one and two.</p>
        <p>The entries on the "Budgetary Resources" portion of the S.F. 133 (lines 1-7) correspond to lines 1-7 of the latest approved apportionment. The second part of the form, "Status of Budgetary Resources", shows the extent to which available resources have been obligated. The final section of the form shows the relationship between obligations and outlays.</p>
        <p>Section 130 of OMB Circular A-11 provides detailed explanations of line entries. Agency budget officers compare the budgetary resources, obligations, and balances data with the latest approved apportionment, and the obligations and disbursements with the obligations and outlays reported on the Financial Plans.   </p>
        <a id="custombuttonl" href="/b16_apportionments">Previous: Execution - Step 16: Budget Apportionment</a>
        <a id="custombuttonr" href="/b18_rescission">Next: Execution - Step 18: Rescissions and Deferrals</a>
      </div>
    </div>`},{route:"/b18_rescission",legacyPath:"b18_rescission.html",title:"Execution - Step 18 Rescissions and Deferrals",description:"Congress established reporting requirements for rescissions and deferrals in the Congressional Budget and Impoundment Control Act of 1974. The Balanced Budget and Emergency Deficit Control Act changed deferral…",html:`<h3 class="my-4">Execution - Step 18 Rescissions and Deferrals</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/b17_report">Previous: Execution - Step 17: Reports on Budget Execution</a>
        <a id="custombuttonr" href="/b19_outlay">Next: Execution - Step 19: Monitoring Federal Outlays</a>
        <br> <br>
        
        
        <p>Congress established reporting requirements for rescissions and deferrals in the
          Congressional Budget and Impoundment Control Act of 1974. The Balanced Budget and Emergency Deficit Control
          Act changed deferral procedures to reflect Supreme Court Decisions regarding vetoes by one House of Congress
          and overruling deferrals made for policy reasons. Section 112 of OMB Circular A-11 provides guidance on:
          preparing special and supplementary messages on rescission and deferral proposals; the establishment of
          reserves; and preparing apportionment requests for deferrals and rescission proposals.</p>
        <p>A rescission is enacted legislation which cancels previously enacted budget
          authority before the authority would otherwise lapse. A rescission may be proposed by the President or a
          Member of Congress. A rescission proposed by the President must be approved by both Houses of Congress within
          45 days of continuous session in order to take effect.</p>
        <p>A deferral is any action or inaction by an officer or employee of the United States
          Government that temporarily withholds, delays, or effectively precludes the obligation or expenditure of
          budget authority. A deferral occurs unless both Houses of Congress pass a resolution disapproving the
          deferral.</p>
        <p>Reserves may be established under 31 U.S.C. 1512 solely to:</p>
        <ul class="list-group">
          <li class="list-group-item"> provide for contingencies; or</li>
          <li class="list-group-item"> effect savings made possible through changes in requirements or greater
            efficiency of operations.</li>
        </ul>
        <br>
        <p>The President must transmit a special message to Congress whenever he proposes a
          rescission or funds are deferred. A rescission message is required whenever the President determines that:</p>
        <ul class="list-group">
          <li class="list-group-item"> all or part of any budget authority will not be required to carry out the full
            objectives of the program;</li>
          <li class="list-group-item">all or part of any budget authority limited to a fiscal year is to be reserved
            from obligation for the entire fiscal year; or </li>
          <li class="list-group-item"> budget authority should be rescinded for fiscal policy or other reasons.</li>
        </ul>
        <br>
        <p>A deferral message is required whenever funds provided for a specific purpose or
          project are deferred. Agencies must report all amounts deferred, whether or not the deferral is reflected on
          an apportionment. If an agency has made a policy decision to obligate apportioned funds at a slower pace than
          that intended by Congress, it is a reportable deferral. Each special message contains the information listed
          in Section 112.7 of Circular A-11. If information contained in a special message changes, agency submits the
          information on supplementary messages discussed in Section 112.9. OMB prepares reports on the status of all
          rescissions and deferrals. Generally, OMB can complete these reports without further assistance from agency.
          However, bureaus should notify the Office of Budget if all or portions of agency deferrals are released.</p>
        <p>Agency should review all deferrals periodically so that amounts deferred for part
          of the year may be released in time to be used before the end of the year. Deferrals of funds which expire at
          the end of the year should be reviewed in sufficient time to determine if a rescission should be proposed
          before the beginning of the fourth quarter. A fourth quarter rescission of expiring funds is proposed only in
          exceptional cases. </p>
        <a id="custombuttonl" href="/b17_report">Previous: Execution - Step 17: Reports on Budget Execution</a>
        <a id="custombuttonr" href="/b19_outlay">Next: Execution - Step 19: Monitoring Federal Outlays</a>
      </div>
    </div>`},{route:"/b19_outlay",legacyPath:"b19_outlay.html",title:"Execution - Step 19 Monitoring Federal Outlays",description:"The purpose of outlay monitoring is to reduce the Government's interest costs. Realistic outlay estimates enable Treasury to borrow only amounts actually needed to finance Government activities. OMB Circular A-11,…",html:`<h3 class="my-4">Execution - Step 19 Monitoring Federal Outlays</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/b18_rescission">Previous: Execution - Step 18: Rescissions and Deferrals</a>
        <a id="custombuttonr" href="/b20_finplan">Next: Execution - Step 20: Financial Plan</a>
        <br> <br>
        
        
        

        <p>The purpose of outlay monitoring is to reduce the Government's interest costs.
          Realistic outlay estimates enable Treasury to borrow only amounts actually needed to finance Government
          activities. OMB Circular A-11, Section 135 provides instructions on monitoring Federal outlays. Agency must
          prepare monthly plans and submit periodic reports and revisions. </p>
        <p>Agency submits outlay plans and reports for each account to the Office of Budget
          five (5) days before the OMB due date. An initial plan and three updates are required annually as outlined in
          Section 135.9 of Circular A-11.</p>
        <p>Outlay estimates are based on the best current estimate of the amount to be spent
          by month. The totals are consistent with the President's budget as amended by Congress. In cases where
          Congressional amendment of the budget is not complete, but some actions are almost certain to occur (e.g.,
          both the Senate and House bills have made the same amendment to the President's budget, but the conference
          report has not yet been acted upon), agency should discuss the situation with the OMB prior to preparing a
          revised outlay plan. The monthly breakdown of the totals reflects a realistic assessment of recent trends and
          the past history of outlay patterns for each account. A statement explaining the assumptions used and any
          unusual or special circumstances accompanies each outlay plan.</p>
        <p></p>
        <p></p>
        <p></p>

        <ul class="list-group">
          <li class="list-group-item"><b>October 1st - Initial Plan: </b>The initial plan includes data for the final
            month of the year in progress and monthly estimates for the fiscal year beginning October 1st. Generally,
            the totals for the upcoming year reflect the 20CY column of the 20BY budget currently pending at OMB and the
            estimate for September should agree with the last update. </li>
          <li class="list-group-item"><b>One week after Budget Transmittal to Congress - 1st Update: </b>The first
            update includes actuals through December and the plan for the balance of the year. Differences in totals
            from the initial plan may be due to changes in prior year balances, amendments to the Current Year included
            in the President's Budget, revised outlay rates included in the President's Budget, pay raise supplementals,
            etc. Monthly outlay patterns may change from the initial plan due to more realistic assessments of spending
            patterns and trends.</li>
          <li class="list-group-item"><b>May - Update: </b>The second outlay update is scheduled for May and includes
            actual data through March and monthly estimates from October through September of the Budget Year.</li>
          <li class="list-group-item"><b>July - Final Update: </b>The timing of the final update is based on the date of
            the Mid-session review. 31 U.S.C. 1106 requires that the Mid-session Review be submitted to Congress by July
            16th. This final update shows cumulative totals through May and estimates for the balance of the current
            year and the budget year. The final update may incorporate changes in totals and/or monthly breakouts
            resulting from completed or "almost certain" Congressional action as discussed above.</li>


        </ul>
        <br>
        <p></p>
        <a id="custombuttonl" href="/b18_rescission">Previous: Execution - Step 18: Rescissions and Deferrals</a>
        <a id="custombuttonr" href="/b20_finplan">Next: Execution - Step 20: Financial Plan</a>
      </div>
    </div>`},{route:"/b20_finplan",legacyPath:"b20_finplan.html",title:"Execution - Step 20 Financial Plan",description:"The requirements outlined in this section are intended to ensure agency compliance with legal and administrative requirements. 31 U.S.C. 1514 requires that each agency have a system of administrative control of funds.…",html:`<h3 class="my-4">Execution - Step 20 Financial Plan</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/b19_outlay">Previous: Execution - Step 19: Monitoring Federal Outlays</a>
        <a id="custombuttonr" href="/b21_reprogram">Next: Execution - Step 21 Reprogramming</a>
        <br> <br>
        
        
        <p>The requirements outlined in this section are intended to ensure agency compliance
          with legal and administrative requirements. 31 U.S.C. 1514 requires that each agency have a system of
          administrative control of funds. Section 120 of OMB Circular A-11 requires that all requests for apportionment
          or reapportionment be supported by financial plans. Section 120.25 of the Circular requires monitoring of
          Federal employment and submission of an FTE and staffing plan.</p>
        <p>The primary purposes of financial plans are to:</p>
        <ul class="list-group">
          <li class="list-group-item">ensure that obligations are made in accordance with plans presented in the budget
            justifications and items included in the enacted appropriation bill; </li>
          <li class="list-group-item"> assist in determining to what extent items included in Committee reports but not
            specified in bill language should be funded;</li>
          <li class="list-group-item"> assess the need for Congressional notification of reprogramming actions;</li>
          <li class="list-group-item"> assist in managing and controlling the obligation of funds so as to avoid a
            deficiency;</li>
          <li class="list-group-item"> identify the timing of unusual events; e.g., a major procurement or staffing
            increase resulting from a new program effort; and</li>
          <li class="list-group-item"> assess the effects of continuing resolutions or program reductions.</li>
        </ul>
        <br>
        <p>Operating units are responsible for maintaining detailed financial and staffing
          plans which reflect monthly obligations and FTE usage by program, project and activity. For purposes of
          financial plans and reprogrammings, a program, project or activity is defined as the most specific budget item
          identified in any of the following:</p>
        <ul class="list-group">
          <li class="list-group-item">the Program and Financing Schedule in the President’s annual budget appendix;</li>
          <li class="list-group-item">the enacted appropriation bill; and</li>
          <li class="list-group-item">House, Senate or Conference reports and explanatory statements on the
            appropriation bill.</li>
        </ul>
        <br>
        <p>The level of detail which meets the definition of a program, project or activity
          varies among operating units and may change with each annual appropriation act. When the enacted appropriation
          bill and Committee reports do not specify otherwise, a program, project or activity is equivalent to the line
          item detail presented in the Congressional justifications. In cases where Congress has included bill or report
          language listing specific projects the operating unit is expected to fund, the items included in the detailed
          internal financial plans are more specific.</p>
        <p>All reports will reflect changes due to all reprogramming actions, including
          reprogrammings which do not require prior Congressional notification. In addition, all requests for
          reapportionment will be accompanied by revised financial plans. Interim financial and staffing plans may be
          required if a short-term Continuing Resolution is enacted in lieu of an appropriation act. </p>
        <p>Financial Plans of monthly totals by account and monthly by subactivity as shown in
          the Congressional budget “Summary of Resource Requirements” (salmon sheet). The staffing plan reflects FTE and
          staffing for the entire operating unit in one report. On the initial plan, the "Last Plan" line agrees with
          the 20CY President's Budget. Line 3a is the total of lines 1a and 2a; line 3b is the total of lines 1b and 2b,
          etc. The "Revised Plan" line reflects the Recommended Conference Action. If necessary, this line will later be
          revised to reflect enacted appropriations. The staffing plan submitted to OMB in the middle of the year (March
          1st) includes any 20CY changes included in the President's 20BY Budget Request to Congress. When reports are
          made against the plan, actual data will agree with the S.F. 113A and 113G. Plans are accompanied by a
          narrative statement.</p>
        <p> <b>Example of Financial Plan, AKA Budget Operate Plan, Spend Plan</b></p>
          <a href="/assets/project7/spendplan.gif" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/project7/spendplan.gif" alt="Budget Matter visual"></a>
        <a id="custombuttonl" href="/b19_outlay">Previous: Execution - Step 19: Monitoring Federal Outlays</a>
        <a id="custombuttonr" href="/b21_reprogram">Next: Execution - Step 21 Reprogramming</a>
      </div>
    </div>`},{route:"/b21_reprogram",legacyPath:"b21_reprogram.html",title:"Execution - Step 21 Reprogramming",description:"Enacted appropriations and other budgetary legislation may vary in the level of detail they provide regarding how agencies should spend the funds that have been provided. Even when the purpose of appropriations is…",html:`<h3 class="my-4">Execution - Step 21 Reprogramming</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/b20_finplan">Previous: Execution - Step 20: Financial Plan</a>
        <a id="custombuttonr" href="/b22_directive">Next: Execution - Step 22: Congressional Directives</a>
        <br> <br>
        
        
        <p>Enacted appropriations and other budgetary legislation may vary in the level of
          detail they provide regarding how agencies should spend the funds that have been provided. Even when the
          purpose of appropriations is specified in great detail, agencies may be provided with some flexibility to make
          budgetary adjustments throughout the fiscal year. These adjustments may be necessary due to changing or
          unforeseen circumstances. In some instances, agencies are provided with transfer authority (i.e., authority to
          shift funds from one appropriations or fund account to another). In addition, agencies are generally permitted
          to shift funds from one purpose to another within an appropriations account. This practice, usually referred
          to as "reprogramming," is subject to statutorily imposed limitations.</p>
        <p>Reprogramming process is to realign funds within an appropriation or fund account
          to use for different purposes than those contemplated at the time of appropriation (for example, obligating
          budgetary resources for a program, project or activity different from the one originally planned).</p>
        <p>A reprogramming request package consists of:</p>
        <ul class="list-group">
          <li class="list-group-item">A signed memorandum / letter briefly highlighting the request. No request will be
            processed by the Department without a signed hard copy of this letter by the bureau head. </li>
          <li class="list-group-item">A letter requests OMB clearance to transmit a notification to Congress of the
            agency’s intention to reorganize the affected operating units. The reprogramming has to be cleared by OMB
            before letters to the Hill are signed.</li>
          <li class="list-group-item">A draft letter to the Chairmen and Ranking Minority Members of Senate and House
            Committees on Appropriations.</li>
          <li class="list-group-item">Notification of Proposed Changes </li>
          <li class="list-group-item">Accompanying backup material, tables, charts, lists, maps.</li>
          <li class="list-group-item">Current and Proposed Organization Charts in cases of reorganization.</li>
        </ul>
        <br>
        <p>An agency may only transfer budgetary resources if Congress has provided the agency
          with the statutory authority to do so. Transfer authority may be provided either in authorizing statutes or in
          appropriations acts. Transfer authority may be broad or narrow in scope, and may apply to all agencies, to
          select agencies, or only to a single agency. Transfer authority may be limited to a specific dollar amount.
          Alternatively, transfer authority may be provided for an indefinite amount, but with specific restrictions on
          the circumstances under which the authority may be used.</p>
        <p>Reprogramming is generally permitted unless otherwise restricted or prohibited by
          statute. An agency's ability to reprogram may be restricted by including "limiting provisions" within its
          annual appropriations acts or other statutes. In addition, an agency may not reprogram funds if doing so would
          violate any other provisions of law. </p>
        <p>In general, transferred and reprogrammed funds are subject to any limitations or
          conditions that were imposed by their original appropriations act. Statutes that provide transfer and
          reprogramming authority will commonly impose additional limitations or conditions, such as "not-to-exceed"
          limits, which place a cap on the amount of funds that may be transferred or reprogrammed, and "purpose"
          restrictions, which prohibit transferred or reprogrammed funds from being used for certain activities.</p>
        <p>Agencies may be required by statute to notify Congress prior to (or shortly after)
          transferring or reprogramming funds. Such requirements usually involve notification to the relevant House and
          Senate Appropriations Committees a certain number of days (often 15, 30, or 45 calendar days) prior to
          transferring or reprogramming funds. Typically, all account-to-account transfers will require prior
          notification to Congress. Reprogramming actions generally require prior notification only when they exceed a
          certain dollar amount or "threshold."</p>
        <p>When done so in accordance with the applicable authorities and procedures,
          transferring or reprogramming funds may enable agencies to operate more effectively or efficiently, and in a
          manner that is consistent with congressional intent. When transfers or reprogramming actions deviate from the
          applicable authorities, procedures, and limitations, however, it is possible that funds may be used in ways
          contrary to congressional intent.</p>
        <p>Transfers (i.e., the shift of budgetary resources from one appropriations or fund
          account to another) typically involve movement of funds within an agency or department, but may also involve
          movement of funds between two or more agencies or departments.8 An agency or department may only transfer
          budgetary resources if it has been provided the statutory authority to do so. A general restriction on
          transfers may be found in 31 U.S.C. Section 1532, which provides, in part, "An amount available under law may
          be withdrawn from one appropriation account and credited to another or to a working fund only when authorized
          by law."9 According to the Government Accountability Office (GAO), all transfers are prohibited without
          statutory authority, including "(1) transfers from one agency to another, (2) transfers from one account to
          another within the same agency, and (3) transfers to an interagency or intra-agency working fund. In each
          instance statutory authority is required."</p>
        <a id="custombuttonl" href="/b20_finplan">Previous: Execution - Step 20: Financial Plan</a>
        <a id="custombuttonr" href="/b22_directive">Next: Execution - Step 22: Congressional Directives</a>
      </div>
    </div>`},{route:"/b22_directive",legacyPath:"b22_directive.html",title:"Execution - Step 22 Congressional Directives",description:"A Congressional Directive is any statement included in the Reports by the House, Senate or Conference Appropriations Committees; or appropriations bill language; which directs agency to take action (or inaction)…",html:`<h3 class="my-4">Execution - Step 22 Congressional Directives</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/b21_reprogram">Previous: Execution - Step 21: Reprogramming</a>
        <a id="custombuttonr" href="/policy">Next: Budget Law</a>
        <br> <br>
        <a href="/assets/img/executionroles.png" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/executionroles.png" alt="Budget Matter visual"></a>
        
        <p>A Congressional Directive is any statement included in the Reports by the House, Senate or Conference Appropriations Committees; or appropriations bill language; which directs agency to take action (or inaction) regarding its programs and/or operations. A Congressional Directive reflects legislative intent and should be taken seriously.</p>
        <p>The Appropriations Committees require that the Department provide written responses to each directive in a format prescribed by the Committees. Generally, the Committees request that the responses be available for their use during the Appropriations hearings.</p>
        <p>Though Report Language is not legally binding, agency non-compliance with report language has sometimes resulted in Congress inserting similar or more restrictive language into the following year's appropriation act language. Bill language is law and thus, legally binding. A common sense approach also dictates that the agency makes reasonable attempts to maintain good relations with the Appropriations Committees since the availability of budgetary resources needed to carry out our programs is dependent on their favorable action. Therefore, with few exceptions, the agency’s policy is to comply with Congressional Directives unless compliance would be illegal or contradict Administration policy. The agency individually reviews all cases when an agency proposes non-compliance and the Administration has not indicated non-compliance through official communications. (i.e., deferral or rescission proposal).</p>
        <p>OMB may direct that the Department direct non-compliance with particular Congressional Directives under certain circumstances, such as in FY 88 when the President submitted a list of "wasteful spending" items to Congress, but did not formally propose rescissions.</p>
        <p>Congressional Directives responses describe, in sufficient detail, the steps being taken to implement the item, including the scheduled date of implementation and any barriers to successful completion of the item. If the agency proposes noncompliance, the response should state the reasons for noncompliance, the actions which the agency plans to take and the steps needed to carry out the action.</p>
        <p>The language of the directives must be exactly as included in the report or the enacted appropriation bill except for obvious typographical errors. If an item is covered in more than one source and the language is identical, cite each source in a single report. If the language is not identical, but addresses the same topic, treat them as separate responses and note that the item is also addressed in another response, citing the title of the other response.</p>
        <p>In many cases, language contained in the House or Senate bill or report differ from the Conference Report. If the Conference Report contradicts or amends the language in the House or Senate Report, a response is developed which addresses the language in the individual report or bill. The response should include language similar to: "The Conference Report included language on this subject which amended the amounts included in the House report. The amounts in the Conference report were..." If language is in the report or bill of either House and not addressed in the Conference report or the enacted law, the agency should develop a response to the individual language and treat it in the same manner as matters addressed in the Conference Report. </p>
        <a id="custombuttonl" href="/b21_reprogram">Previous: Execution - Step 21: Reprogramming</a>
        <a id="custombuttonr" href="/policy">Next: Budget Law</a>
      </div>
    </div>`},{route:"/contact",legacyPath:"contact.html",title:"Contact Subheading",description:"3481 Melrose Place Beverly Hills, CA 90210",html:`<h1 class="mt-4 mb-3">Contact
      <small>Subheading</small>
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item active">Contact</li>
    </ol>

    
    <div class="row">
      
      <div class="col-lg-8 mb-4">
        
        <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
      </div>
      
      <div class="col-lg-4 mb-4">
        <h3>Contact Details</h3>
        <p>
          3481 Melrose Place
          <br>Beverly Hills, CA 90210
          <br>
        </p>
        <p>
          <abbr title="Phone">P</abbr>: (123) 456-7890
        </p>
        <p>
          <abbr title="Email">E</abbr>:
          <a href="mailto:name@example.com">name@example.com
          </a>
        </p>
        <p>
          <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
        </p>
      </div>
    </div>
    

    
    
    <div class="row">
      <div class="col-lg-8 mb-4">
        <h3>Send us a Message</h3>
        <form name="sentMessage" id="contactForm" novalidate="">
          <div class="control-group form-group">
            <div class="controls">
              <label>Full Name:</label>
              <input type="text" class="form-control" id="name" required="" data-validation-required-message="Please enter your name.">
              <p class="help-block"></p>
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Phone Number:</label>
              <input type="tel" class="form-control" id="phone" required="" data-validation-required-message="Please enter your phone number.">
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Email Address:</label>
              <input type="email" class="form-control" id="email" required="" data-validation-required-message="Please enter your email address.">
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Message:</label>
              <textarea rows="10" cols="100" class="form-control" id="message" required="" data-validation-required-message="Please enter your message" maxlength="999"></textarea>
            </div>
          </div>
          <div id="success"></div>
          
          <button type="submit" class="btn btn-primary" id="sendMessageButton">Send Message</button>
        </form>
      </div>

    </div>`},{route:"/e10_appropriation",legacyPath:"e10_appropriation.html",title:"Enactment - Step 10: Budget Appropriation",description:'Unlike the budget resolution and authorization steps, the third step in the enactment process, appropriations, is required by the U.S. Constitution. Article I, Section 9 states: "No money shall be drawn from the…',html:`<h3 class="my-4">Enactment - Step 10: Budget Appropriation</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e9_authorization">Previous: Enactment - Step 9: Budget Authorization</a>
        <a id="custombuttonr" href="/e11_hearing">Next: Enactment - Step 11: Congress Hearings</a>
        <br> <br>
        
        
        <p> Unlike the budget resolution and authorization steps, the third step in the
          enactment process, appropriations, is required by the U.S. Constitution. Article I, Section 9 states: "No
          money shall be drawn from the Treasury, but in consequence of Appropriations made by law." During this phase
          of the budget enactment process, Congress produces several appropriations acts that provide budget authority.
          This budget authority allows the various Federal agencies to incur obligations for specified purposes, up to
          the amounts defined in the legislation. </p>
        <p> The House Appropriation Committee and Senate Appropriation Committee conduct
          hearings beginning in February with the House ending in May and the Senate ending in June. Markups occur from
          May to June for the House and from June to July for the Senate. The Appropriations committees send their
          versions of the Appropriations bills to their chamber floor for debate and approval; June for the House and
          August for the Senate. A conference is convened in September to resolve differences between the House and
          Senate versions. The common versions of each appropriations bill passed by both chambers in September are
          known as the Appropriations Acts. The target date for completion of all budget enactment actions is October 1.
        </p>
        <p> <b>Appropriations Process</b> </p>

        <ul class="list-group">
          <li class="list-group-item">1. The HAC, SAC and their subcommittees hold hearings after the submission of
            the President's Budget. </li>
          <li class="list-group-item">2. During mark-up sessions, the subcommittees review the President's Budget and
            make adjustments. </li>
          <li class="list-group-item">3. Each subcommittee creates an appropriations bill and generates a report.
          </li>
          <li class="list-group-item">4. Each appropriations bill produced by a subcommittee is considered by the
            Appropriations Committee (HAC or SAC) and reported out to the floor of the House or Senate. </li>
          <li class="list-group-item">5. On the floor, the proposed bill is debated, amended, and approved. </li>
          <li class="list-group-item">6. Once the House and Senate have passed their bills, they convene a conference
            to discuss and resolve differences. </li>
          <li class="list-group-item">7. Once the bill is passed in identical form by the House and Senate, it becomes
            an Act and is sent to the President for signature to become law.</li>

        </ul>
        <br>
        <p> Congress generally produces 12 appropriations acts each year to fund the
          operations of the Federal government. The 12 appropriations acts are: </p>
        <ul class="list-group">

          <li class="list-group-item">• Agriculture, Rural Development, Food &amp; Drug Administration &amp; Related Agencies;
          </li>
          <li class="list-group-item">• Commerce, Justice, Science &amp; Related Agencies; </li>
          <li class="list-group-item">• Energy &amp; Water Development; </li>
          <li class="list-group-item">• Defense; </li>
          <li class="list-group-item">• Homeland Security; </li>
          <li class="list-group-item">• Labor, Health &amp; Human Services, Education &amp; Related Agencies; </li>
          <li class="list-group-item">• State, Foreign Operations &amp; Related Agencies; </li>
          <li class="list-group-item">• Military Construction, Veterans Affairs &amp; Related Agencies;</li>
          <li class="list-group-item">• Interior, Environment &amp; Related Agencies; </li>
          <li class="list-group-item">• Transportation, Housing &amp; Urban Development, &amp; Related Agencies; </li>
          <li class="list-group-item">• Financial Services &amp; General Government; </li>
          <li class="list-group-item">• Legislative Branch. </li>
        </ul>
        <p> In addition to providing the bulk of budget authority, the Appropriations Acts
          contain language governing the use of the funds appropriated. Some of this language is general in nature (for
          example, rules concerning the use of expired appropriations) and some is very specific (such as language
          prohibiting funds from being spent on a particular program until a report is submitted). </p>
        <p> The HAC, SAC and their subcommittees hold hearings that begin after the submission
          of the President's Budget. Initial "posture" hearings are conducted with the most senior members of the
          executive branch and Federal agencies who discuss and defend the programs in the President's Budget. Follow-on
          hearings over the next several months delve into a variety of issues of particular interest to the committees
          (for example, particular acquisition programs, military personnel quality of life issues, etc.).</p>
        <p> During mark-up sessions, subcommittee members (and staffers) conduct a
          line-by-line review of the President's Budget, making adjustments as desired. Each subcommittee creates an
          appropriations bill covering the matters under its purview. Some legislative language pertaining to policy may
          also be incorporated into an appropriations bill, although most policy matters pertaining to DoD are included
          in the National Defense Authorization bill. Each subcommittee also generates a report containing further
          explanation of its intent. Each appropriations bill produced by a subcommittee is considered by the full
          Appropriations Committee (HAC or SAC), then reported out to the floor of the House or Senate as appropriate.
          On the floor, the proposed bill will be debated, possibly amended, and finally approved. Both the House and
          Senate aim to complete the work on their appropriations bills before the annual August recess each year.</p>
        <p> Once both the House and Senate have passed their bills, a conference is convened
          to discuss and resolve the differences between the two versions. A single revised version of the
          appropriations bill, accompanied by a conference report, is sent to the full House and Senate for
          consideration. Once passed by both chambers, it becomes an Act and is sent to the President for signature into
          law, hopefully before the start of the new fiscal year on October 1. </p>
        <p> When the Authorization and Appropriations Acts do not agree on the dollar amount
          for a particular program, the Appropriations Act generally prevails. This is certainly the case when the
          amount authorized exceeds the amount appropriated, since the program cannot exceed the budget authority it
          receives in the Appropriations Act. When the amount appropriated exceeds the amount authorized, the
          Comptroller General has ruled that agency may spend the entire appropriated amount. However, to maintain good
          relations with Congress, agency does not do so immediately. Instead, agency will seek the agreement of the
          legislative committees to spend the "excess" appropriated funds, which is generally granted. </p>
        <br>
        <a id="custombuttonl" href="/e9_authorization">Previous: Enactment - Step 9: Budget Authorization</a>
        <a id="custombuttonr" href="/e11_hearing">Next: Enactment - Step 11: Congress Hearings</a>
      </div>

    </div>`},{route:"/e11_hearing",legacyPath:"e11_hearing.html",title:"Enactment - Step 11: Congress Hearing",description:"The House and Senate Committees on Appropriations conduct a full inquiry into the President's Budget Request. This is accomplished through a series of hearings in which Executive Branch officials and others present…",html:`<h3 class="my-4">Enactment - Step 11: Congress Hearing</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e10_appropriation">Previous: Enactment - Step 10: Budget Appropriation</a>
        <a id="custombuttonr" href="/e12_q_a">Next: Enactment - Step 12: Questions for the Record </a>
        <br> <br>
        
        <p> The House and Senate Committees on Appropriations conduct a full inquiry into the
          President's Budget Request. This is accomplished through a series of hearings in which Executive Branch
          officials and others present testimony to the Congress on the President's Budget. In the hearings, federal
          agencies have the opportunity to clarify, supplement, and update their budget justifications through prepared
          statements and a question and answer session on matters of special concern to the Congress and, if necessary,
          through written responses to questions from Members. </p>
        <p> The House and Senate Committees on Appropriations have 12 subcommittees
          respectively, each responsible for at least one regular appropriation bill. The Committee on Appropriations is
          one of 20 standing committees in the House and one of 16 standing committees in the Senate -- the House
          Committee consists of 66 members; the Senate committee of 29 members. </p>
        <p> The general procedure of the subcommittee is to conduct informal business through
          designated staff assistants working with the Office of Budget staff. Formal communications generally take
          place between the subcommittee Chairman and the Secretary or the Chief Financial Officer/Assistant Secretary
          for Administration. </p>
        <p> <b>Hearings</b> </p>
        <p> Procedures applicable to both House and Senate </p>
        <p> Because of the recurring, demanding nature of Appropriations Committee work, the
          House and Senate permit these committees more latitude than other committees with respect to procedure. The
          major exception allows Appropriations subcommittees to conduct hearings while the House and Senate are in
          session, and to have priority on the calendar. Hearings and meetings with the Appropriations Committees are
          held in the Capitol building to permit members to attend roll calls and to vote with a minimum of disruption
          to the hearings process. Verification of this data can be found on the Internet on the Appropriations
          Committee websites. </p>
        <p> Space in the hearing room is limited; witnesses and their staffs should wait in
          the corridor outside the hearing room, or in a waiting room as directed by the Office of Budget and
          subcommittee staff until it is their turn to enter the hearing room. </p>
        <p> After identification of the item under consideration and the witnesses, the person
          designated as the principal witness is given the opportunity to make an opening statement highlighting and
          emphasizing the salient features of the budget request. The Chairman, followed by other subcommittee members,
          addresses questions to the principal witness, first on the opening statement and then on other elements of
          each appropriation request. If principal witnesses cannot answer, or wishes their response to be amplified,
          they may refer questions to other witnesses present or offer to supply additional data. </p>
        <p> Ordinarily, supporting witnesses do not participate in testimony unless called
          upon by the principal witness or the Chairman. However, such witnesses may interject themselves, if it is
          obviously necessary to do so, by requesting permission of the Chairman, such as: (a) "Mr. Chairman, perhaps I
          can respond to your inquiry-." (b) "Mr. Chairman, if I may be permitted to supplement Mr. 's remarks--"; or
          (c) "Mr. Chairman, I think I might be able to clarify this matter---". </p>
        <p> Supporting witnesses should never interject themselves unless the procedure has
          been agreed to in advance with the principal witness and the supporting witness is absolutely certain (no
          mistakes allowed) that they can provide a fully satisfactory response to an unanswered question, or can
          clarify an obvious and material misunderstanding. </p>
        <p> If exhibits or documents are requested or called for in response to questions from
          the Chairman or other subcommittee members, the exhibits or documents must in all cases be offered to the
          Chairman (handed to the subcommittee clerk) rather than directly to another subcommittee member. For example:
          "Mr. Chairman, I have here a table which I think contains the information requested." To the extent that the
          need for exhibits and documents to be submitted can be anticipated, the subcommittee staff should be furnished
          copies in advance through the Budget Officer. This will assure a minimum of surprises and a more effective
          hearing. </p>
        <p> It is considered a prerogative of the Chairman as to whether or not exhibits or
          documents are placed in the record. Witnesses should not offer exhibits "for the record," but only "in
          response to your request," or "for the information of the Committee." </p>
        <p> House Procedures </p>
        <p> The House may conduct separate hearings. Hearings are normally open to the public
          and a limited number of public seats are available. Attendance by federal agencies should be limited to
          witnesses and essential staff support to permit a maximum number of seats to be used by the public. Hearings
          are not normally conducted unless both majority and minority representatives are present. </p>
        <p> Senate Procedures </p>
        <p> Under current practice, the Senate holds fewer hearings than the House. Senate
          hearings are generally limited to an overview appearance by the Secretary with perhaps one or two of the
          larger agency operating units receiving a separate hearing. Again, these hearings are normally open to the
          public and attendance by non-essential personnel should be limited to permit maximum public attendance.
          Although every effort is made to have maximum representation and participation by the members of the
          subcommittee at all hearings, they may be conducted with only one member of the subcommittee present. </p>
        <p> Time Schedule </p>
        <p> Agency is responsible for developing, with subcommittee staff, the time schedule
          for the appearance of witnesses, coordinating changes in the schedule, and keeping principal witnesses and
          designated budget officers advised. House and Senate hearings are usually held between February and April.
        </p>
        <p> The time constraints on the Appropriations Committees must be considered in
          setting time schedules for hearings, and, except for extraordinary situations in which the public interest
          would be manifestly jeopardized, agency officials must adjust their personal time schedules to meet
          subcommittee requirements. Usually, within the general time constraint, the initial hearing is set at a date
          convenient to the Secretary with other time schedules following immediately thereafter. </p>
        <p> It is rare that either the House or Senate is able to exactly maintain the initial
          schedule. Agency officials must take this into account and keep their own schedules sufficiently flexible to
          accommodate delays. </p>
        <p> Witnesses should not request a change in the time for which they are scheduled
          except in the most urgent circumstances. Any deviation from the schedule requires the subcommittee staff to
          coordinate changes with members who often schedule their attendance for selected witnesses or programs.
          Schedule changes also require changes for other operating units which cannot always be made on short notice.
          If a change appears necessary, it must be arranged by designated official through the clerk of the
          subcommittee. Operating units should not take up such problems directly with the subcommittee. </p>
        <p> Witness preparation </p>
        <p> Witnesses at appropriations hearings represent the entire executive branch and are
          expected to support the President's budget decisions to the best of their ability. All witnesses must be
          familiar with the provisions of Section 22 of OMB Circular A-11 relating to agency testimony before, and
          communications with, the Congress on budgetary matters. </p>
        <p> Witnesses are expected to be thoroughly familiar with the contents of the
          justification material for the items being considered and with the programs which they represent.
          Subcommittees expect the principal witness to be able to answer most questions. There are times, however, when
          there are questions on details with which the principal witness could not be expected to be familiar, and
          these may be properly referred to a supporting witness. </p>
        <p> Witnesses should also review and be prepared to comment on legislative proposals
          presented by the Administration or Members of Congress, GAO reports, Inspector General and internal audits,
          communications within the Administration which have been made public, and any magazine, newspaper, radio or
          television reports relating to the agency's programs which may be of interest to the Subcommittee. </p>
        <p> Witnesses can prepare themselves by having special briefings from operating unit
          program and budget staff and by examination of previous hearing records for problems or questions which have
          been of particular concern to the subcommittees in the past. Frequently, the examination of these records
          brings to mind potential problem areas for which specially prepared data may be required by the subcommittee.
        </p>
        <p> The basic guideline for witnesses is to be frank and responsive in all
          presentations to the committees. Witnesses should place their primary concern on being fully responsive, and
          should watch for opportunities to clarify obvious misunderstandings. </p>
        <p> Witnesses should also consider the following guidelines: </p>
        <ul class="list-group">
          <li class="list-group-item"> Agency’s case is expected to be made in the justification material and in the
            principal witnesses' opening statements. Opportunity is often afforded to strengthen the Agency's case in
            response to subcommittee questions, but it is generally a mistake to depend on expectations of favorable
            questions from the subcommittee as the primary basis for justifying a budget. .</li>
          <li class="list-group-item"> Witnesses must support the details of the official justifications as presented
            to the Committee and provide explanations of requirements consistent with the terms of the printed
            justifications.</li>
          <li class="list-group-item"> It is usually a good idea in responding to questions to state what is in the
            justifications or, when appropriate, even to read from them -- testimony not related to the justifications
            before the Committee, or not consistent with them, can result in confusion and misinterpretation or
            misunderstanding of the item under consideration. </li>
          <li class="list-group-item"> Answers to questions should be concise and to the point. </li>
          <li class="list-group-item"> Do not try to anticipate the next question and answer it: the subcommittee
            Chairman and members usually like to develop their own lines of inquiry. </li>
          <li class="list-group-item"> If answers to questions are not known, witnesses should frankly say so and
            offer to supply the information as soon as possible. </li>
          <li class="list-group-item"> If a question calls for a yes or no answer, witnesses are expected to respond
            accordingly and then request permission to elaborate, if desired. </li>
          <li class="list-group-item"> Witnesses should not attempt to answer questions of agency policy which fall
            within the purview of another agency official. </li>
          <li class="list-group-item"> Witnesses should avoid being argumentative. </li>
          <li class="list-group-item"> Witnesses are expected to support decisions of the President, OMB and the
            Secretary. </li>
          <li class="list-group-item"> Only the principal witness should answer questions unless he refers the
            question to a supporting witness, or the question is specifically directed to another witness. </li>
          <li class="list-group-item"> Occasionally, a witness is asked a question which he thinks may involve matters
            of national security, or other matters which should not be made public. When this is so, the witness
            should ask the Chairman: "May I go off the record for a moment before I respond to your question?" Explain
            to the Chairman the reasons for the concern. Appropriations Committee members and staff are usually
            cleared for security data and are sensitive to information which should not be made public. The general
            approach should be full willingness to give sensitive information to the committee, even though it should
            not be made public. This situation sometimes puts the witness in a dilemma since he must maintain the
            integrity of security classification, but permission of the Chairman is needed to go off the record. </li>
          <li class="list-group-item"> Agency witnesses are assigned to one side of the table. </li>
          <li class="list-group-item"> If other agencies are involved, witnesses must share responsibility for joint
            decisions and should be cautious in testifying not to cast blame, criticize, or otherwise jeopardize other
            parts of estimates or appropriations or the operations of other agencies. </li>
          <li class="list-group-item"> All witnesses must be available at the Committee room promptly at the time
            scheduled. </li>
          <li class="list-group-item"> No one not listed on the witness list will be permitted inside the hearing room
            during closed hearings without specific permission of the Chairman. </li>
          <li class="list-group-item"> In closed hearings, participants must treat as confidential all proceedings
            until the printed hearings are released. </li>
        </ul>
        <br>
        <p>Materials Submitted Prior to Hearings </p>
        <p> The names and titles of prospective witnesses are to be identified and submitted
          by memorandum prior to the scheduled hearing. It is not always possible to make room at the hearing for all of
          the witnesses that an agency may wish to attend. Committees are not favorably impressed with large numbers of
          witnesses who are not expected to participate, and in particular with those who do not have answers when
          questions are directed their way. No one should be included on the witness list who is not expected or
          prepared to either testify or to provide supporting data. </p>
        <p>Each principal witness is expected to present a summary written statement of the
          budget proposal for which he is responsible. However, the statement should present clearly and concisely what
          the budget proposal is and the justification for it; its figures should be readily consistent with summary
          tables in the justifications, and its content should follow the same order as the justifications or make it
          clear why a different order is followed. Center heads should be inserted whenever the subject matter changes
          and as necessary to highlight important points. </p>
        <p>In both the House and Senate, statements are usually placed in the record and
          highlighted. Copies of these statements and of any statement which is read must be made available to the
          Committee through the Office of Budget and brought to the hearing to be made available to the public. No set
          rules regarding the length of the statement are made because of the wide variation among Agency operating
          units in the size and complexity of the basic programs and the budget requests. Typically, each significant
          element of the budget request is expected to be dealt with in the statement. Effective statements sometimes
          can be presented in three or four pages where there are few changes from the current year appropriation. The
          committees prefer short statements to maximize the time for their questions. </p>
        <p>Each principal witness testifying for the first time before an appropriations
          subcommittee should have a biographic sketch available. </p>
        <p>Materials Printed for Publication </p>
        <p> Shortly after individual hearings are completed, one copy of the hearings
          transcript is picked up from the subcommittee by agency. A limited time is allowed to proofread and correct
          any errors in the transcript. Time available is limited because the House cannot mark up the budget request
          until their hearings are published. It is the agency’s responsibility to return the edited transcript within
          the specified time limits. </p>
        <p> Changes or notations in the transcript must be made in medium soft black pencil. A
          flag should be attached to each page on which a correction is made. Changes are restricted to correction of
          grammatical or other obvious errors and omissions. The intent of testimony must not be altered. The
          subcommittee reserves the right to delete editorial changes violating these principles. Under no circumstances
          shall testimony of subcommittee members be altered. Marginal notes should be used to indicate obvious
          typographical errors in members' testimony. If there is a misstatement of fact or some other reason which you
          believe justifies making a change, attach a note indicating the page and the proposed change. </p>
        <p> Descriptive headings, commonly called center heads, which briefly identify the
          subject matter being discussed should be inserted in the center of the page at appropriate places. As a
          general guide, headings should be inserted at least every three pages of transcript and whenever the subject
          matter changes. Where the transcript calls for an insert to be placed in the record, the insert should be
          identified by a brief heading. If the subject matter following the insert changes, a new heading is required
          as explained above. </p>
        <p> Inserts for the Record </p>
        <p> Material to be inserted in the record for the House or Senate must be prepared on
          letter size paper (8 1/2 by 11 inches), and attached to the transcript (as indicated below), together with a
          listing of all items to be furnished, showing the title of the insert and page number. The insert should be
          numbered in the upper right-hand corner with the same number as the transcript page calling for the insert,
          plus the letter "a", i.e., 745a, and placed immediately after page 745. If the transcript calls for more than
          one insert on the same page, then each insert will be numbered with the letters "a", "b", "c", etc.: i.e., the
          first insert will be 745a; the second, 745b; the third, 745c; and so on, and all pages will be placed
          immediately following page 745 of the transcript. If the material to be inserted is short (such as an
          explanation requiring only a few words or not more than one or two lines), this information can be written in
          at the appropriate place in the transcript in pencil, rather than attaching a separate sheet. Under unusual
          circumstances, where it is physically impossible to submit the material with the transcript, the list should
          indicate the expected submission date. A copy of each insertion, together with the list, must be furnished for
          agency budget files. Material to be inserted in the record should not be reduced before attaching to the
          transcript. </p>
        <br>
        <a id="custombuttonl" href="/e10_appropriation">Previous: Enactment - Step 10: Budget Appropriation</a>
        <a id="custombuttonr" href="/e12_q_a">Next: Enactment - Step 12: Questions for the Record </a>
      </div>

    </div>`},{route:"/e12_q_a",legacyPath:"e12_q_a.html",title:"Enactment - Step 12: Questions for Record",description:"Questions requiring input from multiple bureaus must be coordinated by the lead bureau assigned to the question. Answers to questions for the record must adhere to the requirements described below.",html:`<h3 class="my-4">Enactment - Step 12: Questions for Record</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e11_hearing">Previous: Enactment - Step 11: Budget Hearing</a>
        <a id="custombuttonr" href="/e13_appeal">Next: Enactment - Step 13: Appeal</a>
        <br> <br>
        <h4 class="my-4">Questions for the Record (QFRs) ((AKA “Questions and Answers” (Q&amp;A))</h4>

        
        

        <p> Questions requiring input from multiple bureaus must be coordinated by the lead
          bureau assigned to the question. Answers to questions for the record must adhere to the requirements described
          below. </p>
        <ul class="list-group">
          <li class="list-group-item">• Documents should be prepared in Microsoft Word using Times New Roman font, size
            12; </li>
          <li class="list-group-item">• Left margin should be set at 1.6", right margin at 1.2", top and bottom margins
            at 1"; </li>
          <li class="list-group-item">• All text should be single-spaced with double-spacing between paragraphs, topics,
            and center heads; </li>
          <li class="list-group-item">• A center head in CAPS identifying the senator or representative for each
            member’s set of questions should be included; QUESTIONS SUBMITTED BY [INSERT REPRESENTATIVE OR SENATOR’S
            NAME]. </li>
          <li class="list-group-item">• The topic of the question should be identified and underlined following the
            center head; </li>
          <li class="list-group-item">• Questions should be restated verbatim in bold type; </li>
          <li class="list-group-item">• Succinct answers with a minimum of one complete sentence per question should be
            prepared; “Yes” or “No” answers are not acceptable. </li>
          <li class="list-group-item">• “QUESTION:” should precede each question; “ANSWER:” should precede each answer
            (both must be in all caps); and indentations are not permitted. </li>
          <li class="list-group-item">• There should be a new page for each member’s set of questions (a set of
            questions encompasses all of the member’s questions). </li>
        </ul>
        <br>
        <p>Transcripts and QFRs are reviewed and subsequently cleared by multiple offices. The
          process for the review of transcripts and QFRs is described below. For convenience, “documents” will be used
          to denote the QFRs, transcripts, and transcript inserts. </p>
        <p> Agency receives the documents from the congressional committee with the applicable
          due date noted. Agency distributes the documents to the responsible operating units with due dates and any
          other necessary guidance. Operating units then provide their input. </p>
        <p> Agency reviews the documents and requests clarification from the operating units
          when necessary. Agency forwards the documents to OMB for review. Any questions OMB may have will go through
          budget office who will work with operating units to ensure responses are timely and responsive. Operating
          units should refrain from contacting OMB directly without the involvement of budget office. </p>
        <p> Subsequent to OMB clearance, Agency will forward the documents to the Secretarial
          staff offices for review. Upon clearance by Secretarial staff, agency transmits the documents to the
          congressional committee. </p>
        <br>
        <a id="custombuttonl" href="/e11_hearing">Previous: Enactment - Step 11: Budget Hearing</a>
        <a id="custombuttonr" href="/e13_appeal">Next: Enactment - Step 13: Appeal</a>
      </div>

    </div>`},{route:"/e13_appeal",legacyPath:"e13_appeal.html",title:"Enactment - Step 13: Budget Appeal",description:"House Action",html:`<h3 class="my-4">Enactment - Step 13: Budget Appeal</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e12_q_a">Previous: Enactment - Step 12: Questions for the Record </a>
        <a id="custombuttonr" href="/e14_cr">Next: Enactment - Step 14: Enactment Issues</a>
        <br> <br>
        
        
        <h4 class="my-4">Committee Action and Appeals </h4>
        <p><b>House Action</b> </p>
        <p> After the hearings, the House subcommittee meets and "marks up" the President's
          Budget with its own recommendations and drafts the appropriations bill and report. At this point, the bill
          receives a number (H.R.) which remains the bill number through all further stages leading to its enactment.
          The full committee then meets to review the subcommittee action, revise or adopt the bill and report, and
          order the bill reported to the House. The bill goes to the House floor, where it is passed with or without
          amendments. The House passed version of the bill is referred to the Senate Appropriations Committee. </p>
        <p> Impact Statements </p>
        <p>The basic rule on impact statements is that agencies are pledged to support the
          Budget as submitted by the President unless he/she or OMB approves its amendment. Concurrence with an
          appropriation change made by the House, either upward or downward, or a language change, is in effect agreeing
          to an amended budget, and needs OMB review and clearance. </p>
        <p> The paramount factor in preparing impact statements is to maintain the integrity
          of the policies and priorities stated in the President's Budget, and the Economic and State of the Union
          messages. This leads to two general guidelines which OMB usually insists on: support the elimination of any
          increases made by the House which would call for expenditure in excess of amounts requested; and justify the
          need for restoration of the full amount requested for important Administration initiatives. </p>
        <p>Agencies are also expected to address any reduction which would impair programs
          essential to the public health and safety. The issue in these cases many times is whether a reduction did in
          fact compromise the President's policies and priorities, or actually impair an essential program. For example,
          the House may have no quarrel with a program, but feels it could be carried out for less money, or the passage
          of time or other factors make it unlikely that the full amount requested can be spent in the budget year. </p>
        <p> To be taken into account are such matters as the relative priority of reductions
          compared with items allowed, whether programs are eliminated entirely or merely reduced in scope, whether it
          might be feasible to stretch out the time schedule for attaining objectives, and whether any arguments can be
          advanced for getting the Senate to take on the responsibility of changing the House position. </p>
        <p> Within 48 hours of House full committee action, operating units submit to agency a
          breakout of the totals included in the House report by activity and subactivity as shown on the Summary of
          Resource Requirements (salmon sheet). The timely submission of this information will be facilitated if the
          operating unit has developed an internal financial plan. Each subactivity includes figures for budget
          authority for the President’s Budget and House allowance. </p>
        <p> Summary statements accompany the tabular material. It is important to be specific
          as to what will happen to the program outputs and objectives if the House allowance is enacted. Statements
          should include narrative on the following. </p>

        <ul class="list-group">
          <li class="list-group-item">The overall programmatic impacts, such as the potential for reductions in-force or
            furloughs, discontinued programs, etc.; </li>
          <li class="list-group-item">New restrictions or limitations and their impacts; </li>

          <li class="list-group-item">List of earmarks/unrequested projects; </li>
          <li class="list-group-item">Possible requirements for reprogramming; </li>
          <li class="list-group-item">Inconsistencies between appropriations and report language; </li>
          <li class="list-group-item">Technical errors; and </li>
          <li class="list-group-item">Outcome of House action on funding provided for adjustments-to base and specific
            program changes requested in the President’s Budget. </li>
        </ul>
        <br>
        <p><b>Senate Action</b> </p>
        <p> Although the Senate Appropriations Subcommittee holds hearings on the budget request prior to the House report and action, it rarely reports or takes action until after the House has held its “mark-up” and reported on the bill to the floor of the House. </p>
        <p> The Senate subcommittee marks up and drafts its revisions to the House bill and prepares its own report. As in the House, the full committee then reviews the subcommittee action and adopts or revises the bill and report and orders the bill reported to the Senate. The Senate version of the bill as reported is voted on by the Senate and passed with or without amendments. Impact statements, as discussed in the previous section, will be due to the Office of Budget within 48 hours of Senate full committee action. </p>
        <p><b>Appeals to the Conference Committee </b> </p>
        <p>Once both houses have passed their versions of the bill, House and Senate “managers” or conferees are appointed by the presiding officers of both houses. If the House and Senate allowances for an item are different, the item is called "conferenceable." If the two allowances are the same, although they may be different from the President's Budget request, the item is "non-conference able." The same guidance on House and Senate impact statements applies to conference action except that tabular information includes columns for "Conference Action." Impact statements for House and Senate allowances will be forwarded to congressional clerks for consideration.  </p>
        <p> Apple is the process by which agency appeals proposed Congressional changes ("marks") to the President's Budget request.</p>
        <p> As the authorization and appropriations committees mark up the President's Budget request, agency tracks the mark-up and makes appeals in an attempt to minimize the impact of the marks. In addition to appealing funding marks, agency may also appeal marks affecting personnel levels, procurement quantities, and legislative language that may adversely affect the department or the efficient execution of a program.</p>
        <p>Operation units are asked to provide candidate programs for appeal. While agency consolidates and coordinates all appeal materials, operation units must ensure that materials submitted in support of appeal candidates are accurate and remain up-to-date. Agency appeals are transmitted under cover of a letter prepared by budget office and signed by the Head of agency. Appeals are addressed to the chair of the next committee to take action on the budget request, or in the case of appeals to conferees, to the chairs of both the House and Senate committees. </p>
        <p>Once a congressional committee has marked the budget, agency can appeal to the next committee in that process (authorization or appropriation) considering the budget. The House of Representatives traditionally marks fiscal bills first, so agency appeals generally only go to the Senate committees and the conferences. Since the authorization and appropriations processes are proceeding simultaneously, by agreement with Congress the marks in each process are considered and appealed separately (independently) from each other. </p>
        <p>In the authorization process, the House committees usually make the initial mark. Agency may appeal the House mark to the Senate committees. Once the Senate committees has marked the budget request, agency may appeal to the Authorization Conference. In the appropriations process, the House Appropriations Committee (HAC) makes the initial mark, which agency may appeal to the Senate Appropriations Committee (SAC). Once the SAC has marked, agency may appeal to the Appropriations Conference. </p>
        <p> If a mark affects the funding level of a program, agency may appeal for the amount closest to the President's Budget within the last two congressional marks (or for the President's Budget amount if only one mark exists).</p>
        <p>Appropriations process marks and appeals example.  </p>
        <p> The President's budget request included $100 million for Program X. The HAC marks Program X at $83 million. agency appeals to the SAC for $100 million. The SAC marks Program X at $110 million after considering agency appeal. One of the marks (SAC's) is more than the President's Budget request, so agency should appeal to the amount in the President's Budget request. agency appeals to the Appropriations Conference for $100 million. The Appropriations Conference marks Program X at $95 million after considering agency’s appeal.</p>
        <br>
        <a id="custombuttonl" href="/e12_q_a">Previous: Enactment - Step 12: Questions for the Record </a>
        <a id="custombuttonr" href="/e14_cr">Next: Enactment - Step 14: Enactment Issues</a>
      </div>
    </div>`},{route:"/e14_cr",legacyPath:"e14_cr.html",title:"Enactment - Step 14: Enactment Issues",description:"The Conferees reconcile the differences between the two versions and issue a conference report which must then be approved by each house. This approval constitutes passage of the appropriation by the Congress. The bill…",html:`<h3 class="my-4">Enactment - Step 14: Enactment Issues</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e13_appeal">Previous: Enactment - Step 13: Budget Appeal</a>
        <a id="custombuttonr" href="/e15_oversight">Next: Enactment - Step 15: Oversight Reports</a>
        <br> <br>
        
        

        <p>The Conferees reconcile the differences between the two versions and issue a
          conference report which must then be approved by each house. This approval constitutes passage of the
          appropriation by the Congress. The bill is then sent to the President for signature. </p>
        <p>When an appropriation bill is not passed by the Congress by the beginning of the
          fiscal year, all outstanding appropriation bills may be combined into one "Continuing Resolution" which
          carries a new bill number, H.J. Res. The new bill incorporates the provisions of the individual appropriation
          bills. </p>
        <p>Enactment Issues pertaining to two common issues that agency faces with respect to
          the enactment process: continuing resolutions and new starts. </p>
        <p>If Congress is unable to pass one or more appropriations acts by the beginning of
          the fiscal year (October 1), it will usually provide Continuing Resolution Authority (CRA) to prevent agencies
          whose appropriations have not been passed from shutting down. The CRA provides "stopgap" funding to keep
          affected agencies operating for a specified period of time. This period, spelled out in the Continuing
          Resolution, may range from a few days to a few weeks or months, depending on when Congress anticipates that it
          can pass the final appropriations act(s). </p>
        <p> A Continuing Resolution Act is a law, signed by the President, providing
          Continuing Resolution Authority. Unlike an appropriations act, a Continuing Resolution Act does not specify
          dollar amounts of budget authority. Rather, it permits activities to operate at "the current rate of
          operations," which is usually based on one of the following levels: </p>
        <ul class="list-group">
            <li class="list-group-item">The amount the activity was appropriated in the prior year </li>
            <li class="list-group-item">The lowest Congressional mark to date </li>
        </ul>
        <br>
        <p>Other spending level limits may be specified in the Continuing Resolution Act,
          depending on the status of the appropriations bills and whether or not a program was "zeroed-out" (that is,
          all program funding deleted) during the committee mark-ups. </p>
        <p> The interpretation of a "current rate of operations" is left to the individual
          agencies, but clearly is not intended to permit obligation of an entire year's worth of funding during the
          period covered by the CRA.</p>
        <p>DoD Example </p>
        <p>By law, many of DoD's acquisition efforts must be authorized before funds can be
          spent. Therefore, Congress is concerned about DoD's initiation of "new starts" funded by RDT&amp;E and Procurement
          appropriations. According to the DoD Financial Management Regulation 7000.14-R, Volume 3, Chapter 6, Paragraph
          060401E, a "new start" is defined as any program, subprogram, modification, project, or subproject not
          previously justified by DoD and funded by Congress through the normal budget process. </p>
        <p>The House and Senate Armed Services and Appropriations committees must either
          approve or be notified of all new starts before funds can be obligated, except for certain safety
          modifications. Written approval from the congressional committees prior to execution of funds ("prior
          approval") is required when a new start establishes: 1. A new procurement line item, program, subprogram, or
          modification costing $20 million or more in the first three years, 2. A new RDT&amp;E program element, project, or
          subproject costing $10 million or more in the first three years.</p>
        <p>Congress must be given letter notification of new starts that do not meet the
          criteria for prior approval. Funds for such letter notification new starts may not be released for execution
          until at least 31 days after the notification is received by the congressional committees. </p>
        <p>New safety modifications with a total cost of less than $20 million are excepted
          from the normal rules pertaining to Congressional prior approval and notification. Due to the urgency of such
          safety modifications, they require only letter notification to Congress. Funds may be spent on these projects
          immediately once the notification letter has been delivered to the appropriate Congressional committees. </p>
        <p>With the exception of certain urgent safety modifications, the House and Senate
          Armed Services and Appropriations committees must either approve or be notified of all new starts before funds
          can be obligated. Certain new starts that are urgent safety modifications may obligate funds before providing
          letter notification to or obtaining prior approval from the Congressional committees as an exception to normal
          rules. </p>
        <p>Congress must be given letter notification of new starts that do not meet the
          criteria for prior approval. Funds for such new starts are not released until at least 30 days after
          notification is received. </p>
        <a id="custombuttonl" href="/e13_appeal">Previous: Enactment - Step 13: Budget Appeal</a>
        <a id="custombuttonr" href="/e15_oversight">Next: Enactment - Step 15: Oversight Reports</a>
      </div>

    </div>`},{route:"/e15_oversight",legacyPath:"e15_oversight.html",title:"Enactment - Step 15: Oversight Reports",description:"Specific requests or directives to agencies are often included in the House and Senate reports accompanying appropriations bills. These directives may require agencies to provide reports on the progress of specified…",html:`<h3 class="my-4">Enactment - Step 15: Oversight Reports</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e13_appeal">Previous: Enactment - Step 14: Enactment Issues</a>
        <a id="custombuttonr" href="/execution">Next: Execution Overview</a>
        <br> <br>
        
        
        <h4 class="my-4">Oversight and reconciliation</h4>

        <p>Specific requests or directives to agencies are often included in the House and
          Senate reports accompanying appropriations bills. These directives may require agencies to provide reports on
          the progress of specified activities or to provide additional information on identified topics. Under normal
          circumstances, only requests included in both House and Senate reports or adopted by reference in the
          Conference Report will be subject to action. Also, in the event that particularly sensitive or critical items
          are requested in either the House or Senate reports, the Office of Budget will confer with bureaus to ensure
          that these reports that are treated appropriately. </p>
        <p><b>DoD Example</b> </p>
        <p>Congress and DoD both require timely, consistent, and reliable information
          regarding the status of Major Defense Acquisition Programs (MDAPs) and Major Automated Information System
          (MAIS) programs in terms of cost, schedule, and technical performance. The three primary reports designed to
          provide this information are the Selected Acquisition Report (SAR), the Defense Acquisition Executive Summary
          (DAES) (released within DoD only), and the Unit Cost Report (UCR). Typically, once a program has been
          designated a SAR program, it is also required to comply with the DAES and UCR requirements. </p>
        <p>Selected Acquisition Reports (SARs) are submitted to Congress for all ACAT I
          programs in accordance with 10 U.S.C. Section 2432. The SAR provides the status of total program cost,
          schedule, and performance along with program unit cost and unit cost breach information. This information is
          provided in concise form emphasizing new information and changes since the last report. Each SAR must include
          a full, life-cycle cost analysis for the reporting program, each of its evolutionary blocks, as available, and
          for its antecedent program, if applicable. Pre-Milestone B projects may submit SARs reporting only RDT&amp;E
          costs. </p>
        <p>A Nunn-McCurdy cost breach occurs when either of the following criteria are met:
        </p>
        <ul class="list-group">
          <li class="list-group-item">The current estimate of Program Acquisition Unit Cost (PAUC) exceeds the PAUC
            objective in the currently approved Acquisition Program Baseline (APB) by 15% or exceeds the PAUC
            objective in the original APB by 30% or more, with both costs expressed in program base year dollars. PAUC
            is the system’s Program Acquisition Cost divided by the total number of fully configured development and
            production end items expected to be procured; </li>
          <li class="list-group-item">The current estimate of Average Procurement Unit Cost (APUC) exceeds the APUC
            objective in the currently approved Acquisition Program Baseline (APB) by 15% or exceeds the APUC
            objective in the original APB by 30% or more, with both costs expressed in program base year dollars. APUC
            is the system’s Procurement Cost divided by the total number of fully configured production end items
            expected to be procured; </li>
          <li class="list-group-item">"original approved APB" refers to that established at program initiation
            (Milestone B in most cases) • The statute defines the cost breaches above as 'Significant Cost Growth'.
          </li>
        </ul>
        <br>
        <p> The SAR submission requirement for a program for a given fiscal year may be waived
          if certain criteria are met: • The program has not entered the Engineering and Manufacturing Development phase
          (formerly known as the System Development and Demonstration phase) and there is no approved Acquisition
          Program Baseline, or • A reasonable cost estimate has not been established for the program, or • The system
          configuration for the program is not well defined. As described in DoD acquisition guidance, the USD (AT&amp;L)
          may consider terminating a program's SAR submissions when 90% of expected production deliveries or 90% of
          planned acquisition expenditures have been made or when the program is no longer considered an ACAT I program.
        </p>
        <p><b>Omnibus Budget Reconciliation Act </b> </p>
        <p>The Omnibus Budget Reconciliation Act of 1993 (or OBRA-93) was enacted by the 103rd
          United States Congress and signed into law by President Bill Clinton. It has also been unofficially referred
          to as the Deficit Reduction Act of 1993. Part XIII of the law is also called the Revenue Reconciliation Act of
          1993. </p>
        <p>The bill stemmed from a budget proposal made by Clinton in February 1993; he sought
          a mix of tax increases and spending reductions that would cut the deficit in half by 1997. Though every
          congressional Republican voted against the bill, it passed by narrow margins in both the House of
          Representatives and the Senate. The act increased the top federal income tax rate from 31% to 39.6%, increased
          the corporate income tax rate, raised fuel taxes, and raised various other taxes. The bill also included $255
          billion in spending cuts over a five-year period. The effects of the bill helped the US federal government to
          experience in 1998 its first budget surplus since the 1960s. </p>
        <ul class="list-group">
          <li class="list-group-item">Previously, the top individual tax rate of 31% applied to all income over
            $51,900. The Act created a new bracket of 36% for income above $115,000 and 39.6% for income above
            $250,000. </li>
          <li class="list-group-item">Previously, corporate income above $335,000 was taxed at 34%. The Act created
            new brackets of 35% for income from $10 million to $15 million, 38% for income from $15 million to $18.33
            million, and 35% for income above $18.33 million. </li>
          <li class="list-group-item">The 2.9% Medicare tax had previously been capped to apply to the first $135,000
            of income. The cap was removed.</li>
          <li class="list-group-item">Transportation fuels taxes were raised by 4.3 cents per gallon.</li>
          <li class="list-group-item">The portion of Social Security benefits subject to income taxes was raised from
            50% to 85%.</li>
          <li class="list-group-item">The phaseout of the personal exemption and the limit on itemized deductions were
            permanently extended.</li>
          <li class="list-group-item">The AMT tax rate was increased from 24% to tiered rates of 26% and 28%.</li>
          <li class="list-group-item">Part IV Section 14131: Expansion of the Earned Income Tax Credit and added
            inflation adjustments.</li>
          <li class="list-group-item">$255 billion in spending cuts over a five-year period; much of the cuts affected
            Medicare or the military. </li>
        </ul>
        <br>
        <a id="custombuttonl" href="/e13_appeal">Previous: Enactment - Step 14: Enactment Issues</a>
        <a id="custombuttonr" href="/execution">Next: Execution Overview</a>
      </div>
    </div>`},{route:"/e8_resolution",legacyPath:"e8_resolution.html",title:"Enactment - Step 8: Budget Resolution",description:"Once the President's Budget is submitted to Congress by the first Monday in February, it must be enacted into law. The Congressional budget enactment process consists of three phases: Budget Resolution; Authorization;…",html:`<h3 class="my-4">Enactment - Step 8: Budget Resolution</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/enactment">Previous: Enactment Overview</a>
        <a id="custombuttonr" href="/e9_authorization">Next: Formulation - Step 9: Budget Authorization</a>
        <br> <br>
        
        

        <p> Once the President's Budget is submitted to Congress by the first Monday in
          February, it must be enacted into law. The Congressional budget enactment process consists of three phases:
          Budget Resolution; Authorization; and Appropriation </p>
        <p> The first step in the budget enactment process provides an overall blueprint for
          the Congressional budget process. During Budget Resolution Phase, the House Budget Committee and Senate Budget
          Committee Hearings begin in February, with markups made by both committees in March. Each committee refers its
          version of the budget resolution for approval by a floor vote of its chamber (House or Senate). A conference
          is convened in April to resolve differences. This phase culminates with the Concurrent Budget Resolution. </p>
        <p> The annual budget resolution is an agreement between the House and Senate on a
          budget plan for the upcoming fiscal year and at least the following four fiscal years. The budget resolution
          is in the form of a concurrent resolution, so it is not sent to the president for his signature and thus does
          not become law, but it does provide a framework for subsequent legislative action on the appropriations bills.
        </p>
        <p> Section 301(a) of the 1974 Budget Act, as amended, requires that the budget
          resolution include the following matters for the upcoming fiscal year and at least the ensuing four fiscal
          years: </p>
        <ul class="list-group">
          
            <li class="list-group-item">1. aggregate levels of new budget authority, outlays, the budget surplus or
              deficit, and the public debt;</li>
            <li class="list-group-item">2. aggregate level of federal revenues and the amount, if any, by which the
              aggregate level of federal revenues should be increased or decreased by legislative action;</li>
            <li class="list-group-item">3. amount of new budget authority and outlays for each of the major functional
              categories; and for purposes of Senate enforcement rules, Social Security outlays and revenues (although
              these amounts are not included in the budget surplus or deficit totals due to their off-budget status).
            </li>
          
        </ul>
        <br>
        <p> The Concurrent Budget Resolution (CBR) provides guidance for revenue and spending
          legislation to be enacted by Congress. The CBR specifies the amounts of revenue, budget authority, and outlays
          that are authorized for the coming fiscal year and as many as nine years following. In effect, the CBR
          establishes budget authority and outlay "spending ceilings" for each of 21 major government functions. </p>
        <p> <b>Major Government Functions</b> </p>
        <p> • 050 - National Defense • 150 - International Affairs • 250 - General Science,
          Space, and Technology • 270 - Energy • 300 - Natural Resources and Environment • 350 - Agriculture • 370 -
          Commerce and Housing Credit • 400 - Transportation • 450 - Community and Regional Development • 500 -
          Education, Training, Employment and Social Services • 550 – Health 570 - Medicare • 600 - Income Security •
          650 - Social Security • 700 - Veterans Benefits and Services • 750 - Administration of Justice • 800 - General
          Government • 900 - Net Interest • 920 - Allowances • 950 - Undistributed Offsetting Receipts • 970 - Overseas
          Deployments and Other Activities</p>
        <p> The House and Senate Budget Committees are responsible for developing and
          reporting the budget resolution. The Budget Committees hold hearings and receive testimony from Members of
          Congress and representatives from federal departments and agencies, the general public, and national
          organizations. Three regular hearings include separate testimony from the director of the Office of Management
          and Budget (OMB), the director of the Congressional Budget Office (CBO), and the chair of the Federal Reserve
          Board. The OMB director provides an explanation of the President’s budget submission; the CBO director
          presents an analysis of the President’s budget proposals and independent baseline budget projections; and the
          Federal Reserve chair provides an assessment of the state of the national economy. </p>
        <p> Another source of input comes from the “views and estimates” of congressional
          committees with jurisdiction over spending and revenues. </p>
        <p> Congressional Budget Office (CBO) analysis goes to both the House Budget Committee
          (HBC) and the Senate Budget Committee (SBC) in February. While the President's Budget estimates are based on
          economic assumptions of the Office of Management and Budget, CBO makes its own economic projections to
          estimate revenues and outlays that would result from the President's Budget request. These views and
          estimates, frequently submitted in the form of a letter to the chair and ranking member of the budget
          committee, typically include comments on the President’s budget proposals and estimates of the budgetary
          impact of any legislation likely to be considered during the current session of Congress. The budget
          committees are not bound by these recommendations. The views and estimates often are printed in the committee
          report accompanying the budget resolution or compiled as a separate committee print. </p>
        <p> Each Budget Committee then presents its version of the budget resolution for
          review, debate and ultimate passage by their respective chambers. The HBC sends the House Budget Resolution to
          the House floor, while the SBC sends the Senate Budget Resolution to the Senate floor. Both of these documents
          are amended in the full House and Senate, respectively. Once the House and Senate have each approved their
          version of the budget, the HBC and SBC hold a joint conference to craft a Concurrent Budget Resolution, which
          goes to the floors of both the House and Senate for vote. Once the House and Senate have both passed their own
          versions of the budget resolution, a conference is convened to resolve the differences between the two
          versions and craft a single common resolution, which, when passed by both chambers, becomes the Concurrent
          Budget Resolution. The CBR is not a law since it is not signed by the President. However, if a bill is
          proposed in either chamber that would exceed a spending ceiling set in the resolution, it may be challenged by
          raising a point of order. In that case, 60 percent of the membership must vote to pass the measure.</p>
        <p> The budget resolution process is not required by the Constitution, but rather is
          rooted in the Congressional Budget and Impoundment Control Act of 1974. This act also created the CBO.
          Technically, no appropriation or authorization bill can be considered until the CBR is passed, so Congress
          aims to pass a CBR no later than April 15 each year. If a CBR has not been passed by May 15, however,
          appropriations and authorizations bills may be considered, using the spending limits established by the
          previous year's CBR.</p>
        <p> The outlay amounts specified in the CBR represent the maximum amounts that
          Congress should allow as a result of its appropriations legislation for a particular fiscal year. Also, the
          CBR provides budget guidance for the upcoming fiscal year as well as several years beyond. However, the budget
          authority amounts specified in the CBR do not represent the minimum amounts that Congress should provide in
          its appropriations legislation for a particular fiscal year, they represent the maximum amounts. </p>
        <a id="custombuttonl" href="/enactment">Previous: Enactment Overview</a>
        <a id="custombuttonr" href="/e9_authorization">Next: Formulation - Step 9: Budget Authorization</a>
      </div>

    </div>`},{route:"/e9_authorization",legacyPath:"e9_authorization.html",title:"Enactment - Step 9: Budget Authorization",description:"The second step in the budget enactment process, authorization, originated in 1946 as a means of providing assistance to the Appropriations Committees in considering the increasingly complex defense budget request. The…",html:`<h3 class="my-4">Enactment - Step 9: Budget Authorization</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e8_resolution">Previous: Enactment - Step 8: Budget Resolution</a>
        <a id="custombuttonr" href="/e10_appropriation">Next: Enactment - Step 10: Budget Appropriation</a>
        <br> <br>
        
        

        <p> The second step in the budget enactment process, authorization, originated in 1946
          as a means of providing assistance to the Appropriations Committees in considering the increasingly complex
          defense budget request. The authorization process also allows more members to become involved in the review of
          the President's Budget request. Most authorization bills today are for multiple years, with the exception of
          defense and intelligence agency authorizations, which happen annually. The defense authorization bills are
          referred to as the National Defense Authorization Act.</p>
        <p> An authorization act is "A law that establishes or continues one or more Federal
          agencies or programs, establishes the terms and conditions under which they operate, authorizes the enactment
          of appropriations, and specifies how appropriated funds are to be used. Authorizations acts sometimes provide
          permanent appropriations." </p>
        <p> During Authorization Phase, the House legislative committees and Senate
          legislative committees conduct hearings between February and April. Both committees make markups between April
          and May, and then refer their versions of the Authorization bill to the floor for debate and approval
          beginning in May. A conference is convened in July to resolve differences between the House and Senate bills.
          The common version of the bill passed by both chambers in September is known as the Authorization Act. The Act
          becomes law when signed by the President. </p>
        <p> Authorizing Legislation is an authorizing measure can establish, continue, or
          modify an agency, program, or activity for a fixed or indefinite period of time. It also may set forth the
          duties and functions of an agency or program, its organizational structure, and the responsibilities of agency
          or program officials. Authorizing legislation also authorizes, implicitly or explicitly, the enactment of
          appropriations for an agency or program. If explicit, the amount authorized to be appropriated may be
          specified for each fiscal year or may be indefinite (providing “such sums as may be necessary”). The
          authorization of appropriations is intended to provide guidance regarding the appropriate amount of funds to
          carry out the authorized activities of an agency. Authorizing bills fall under the jurisdiction of most of the
          other standing committees of the House and Senate. Almost all of the standing House committees and Senate
          committees have authorizing responsibilities. The topics, agencies, or programs that a bill deals with
          determines to which committee or committees it is referred. </p>
        <p> Legislative committees committee have several subcommittees that concentrate on
          various aspects of the President's Budget proposal, and hold hearings that begin after the submission of the
          President's Budget. Initial "posture" hearings are conducted with the most senior members of the executive
          branch, DoD and the Services who discuss and defend the programs in the President's Budget. Follow-on hearings
          over the next several months delve into a variety of issues of particular interest to the committees (for
          example, particular acquisition programs, military personnel quality of life issues, etc.).
        </p><p>
          During mark-up sessions, committee members (and staffers) conduct a line-by-line review of the President's
          Budget, making adjustments as desired. After adding appropriate legislative language pertaining to policy, the
          HASC and SASC will each send their own versions of the authorization bill to the floor of their respective
          chambers. On the floor, the proposed bill will be debated, possibly amended, and finally approved. Each
          authorization bill has a report associated with it providing additional explanation of its intent. Both the
          House and Senate aim to complete the work on their authorization bills by the end of June each year. </p>
        <p>
          During mark-up sessions, committee members (and staffers) conduct a line-by-line review of the President's
          Budget, making adjustments as desired. After adding appropriate legislative language pertaining to policy, the
          HASC and SASC will each send their own versions of the authorization bill to the floor of their respective
          chambers. On the floor, the proposed bill will be debated, possibly amended, and finally approved. Each
          authorization bill has a report associated with it providing additional explanation of its intent. Both the
          House and Senate aim to complete the work on their authorization bills by the end of June each year.</p>
        <p>Once both the House and Senate have passed their bills, a Defense Authorization
          Conference Committee is
          convened to discuss and resolve the differences between the two versions. A single revised version of the
          Authorization Bill, accompanied by a conference report, is sent to the full House and Senate for
          consideration. Once passed by both chambers, it becomes an Act and is sent to the President for signature into
          law, hopefully before the start of the new fiscal year on October 1. </p>
        <p>
          House and Senate rules do not permit Congress to appropriate funds for any unauthorized program or activity.
          Moreover, funds should not be appropriated for a program or activity in excess of the recommended funding
          level in the Authorization Act. In practice, however, appropriations often differ from authorized amounts. The
          report accompanying the Authorization Act is not a law. It is a document that describes the congressional
          intent behind the Authorization Act's provisions, contains information often referred to as "congressional
          language". </p>
        <p>
          While the power over appropriations is granted to Congress by the U.S. Constitution, the authorization
          appropriation process is derived from House and Senate rules. The formal process consists of two sequential
          steps: </p>
        <ul class="list-group">

            <li class="list-group-item"> 1. enactment of an authorization measure that may create or continue an agency,
              program, or activity as well as authorize the subsequent enactment of appropriations; and </li>
            <li class="list-group-item"> 2. enactment of appropriations to provide funds for the authorized agency,
              program, or activity. </li>
    
        </ul>
        <br>
        <p>Legislative committees, such as the House Committee on Armed Services and the
          Senate Committee on Commerce, Science, and Transportation, are responsible for authorizing legislation related
          to the agencies and programs under their jurisdiction; most standing committees have authorizing
          responsibilities. </p>
        <p>Authorizations bills can recommend funding levels for the agencies and programs
          they authorize, but their recommendations are non-binding. Congress can place recommended funding levels for
          the agencies and programs they authorize in an authorization bill, but their recommendations are non-binding.
          The recommendations can be for specific amounts in specific years for specific purposes, or it can be an
          unlimited amount ("such sums as may be necessary") in a particular time period or indefinitely. It is the
          appropriations bills that determine how much funding those agencies and programs will get.</p>
        <p>The Appropriations Committees of the House and Senate have jurisdiction over
          appropriations measures. As discussed below, House and Senate rules generally prohibit the encroachment of
          these committee responsibilities by the authorizers and appropriators. Agencies and programs funded through
          the annual appropriations process, referred to as discretionary spending, generally follow this two-step
          process. Not all federal agencies and programs, however, are funded through this authorization-appropriations
          process. Funding for some agencies and programs is provided by the authorizing legislation, bypassing this
          two-step process. Such spending, referred to as direct (or mandatory) spending, currently constitutes about
          55% of all federal spending. Some direct spending, mostly entitlement programs, is funded by permanent
          appropriations in the authorizing law. Other direct spending (referred to as appropriated entitlements), such
          as Medicaid, is funded in appropriations acts, but the amount appropriated is controlled by the existing
          authorizing statute.</p>
        <p>Enforcing the Authorization-Appropriations Process Longstanding rules of the House
          and Senate attempt to retain the separation between the authorization and appropriations tasks within this
          process, and these rules may be enforced through points of order. The application of these rules can be
          complicated, and the following merely summarizes their main provisions. First, the House and Senate place
          restrictions on appropriations for agencies and activities not authorized by law. The House (Rule XXI, clause
          2) prohibits any appropriation, whether in a reported appropriations bill or offered as an amendment, for an
          expenditure not authorized by law. The Senate (Rule XVI, paragraph 1) prohibits floor amendments proposing
          appropriations for an agency or activity not authorized by law, with certain exceptions. In contrast to the
          House, the Senate does not prohibit committee amendments or measures reported by the Appropriations Committee
          from including an appropriation for an agency or activity not authorized by law. Second, the House (Rule XXI,
          clause 2) and Senate (Rule XVI, paragraphs 2 and 4) prohibit the inclusion of legislative language (such as an
          authorization) in an appropriations measure. Third, the House (Rule XXI, clause 4), but not the Senate,
          prohibits appropriations in authorizing legislation. While the rules are intended to encourage the adherence
          to this process, a point of order must be raised to enforce the rules. In addition, the rules may be waived by
          suspension of the rules, by unanimous consent, or, in the House, by a special rule. Further, the Senate, in
          some cases, may allow legislative language in an appropriations act if it determines, by an affirmative vote,
          that such language is germane to legislative language already in the act as passed by the House.3 Unauthorized
          appropriations or legislative provision in an appropriations act signed into law would have, in most cases,
          full force and effect (e.g., an agency may spend the entire amount of an unauthorized appropriation),
          regardless of these congressional restrictions. </p>
        <br>
        <a id="custombuttonl" href="/e8_resolution">Previous: Enactment - Step 8: Budget Resolution</a>
        <a id="custombuttonr" href="/e10_appropriation">Next: Enactment - Step 10: Budget Appropriation</a>
      </div>
    </div>`},{route:"/enactment",legacyPath:"enactment.html",title:"Congressional Enactment Process",description:"Congressional budget actions may be classified according to three distinct types of measures involved:",html:`<h3 class="my-4">Congressional Enactment Process</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/f7_omb2congress">Previous: Formulation - Step 7: OMB Submission to Congress</a>
        <a id="custombuttonr" href="/e8_resolution">Next: Enactment - Step 8: Budget Resolution</a>
        <br><br>
        <a href="/assets/img/congressenactoverview.PNG" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/congressenactoverview.PNG" alt="Budget Matter visual"></a>
        <p> Congressional budget actions may be classified according to three distinct types
          of measures involved: </p>
        <ul class="list-group">
            <li class="list-group-item"> 1. Adoption of a budget resolution; the steps associated with this action
              commonly are referred to as the “congressional budget process”; </li>
            <li class="list-group-item"> 2. Passage of the annual appropriations bills, including regular, supplemental,
              and continuing appropriations measures; </li>
            <li class="list-group-item"> 3. Passage of other legislation affecting the federal budget, such as
              authorizing legislation, reconciliation bills, and measures changing tax law, modifying entitlement
              programs, or adjusting the debt limit. The budget resolution is Congress’s main procedure for linking
              these different types of measures. </li>
        </ul>
        <br>
        <p> The Congress begins its work on its budget resolution shortly after it receives
          the President’s Budget. Under the procedures established by the Congressional Budget Act of 1974, the Congress
          decides on budget targets before commencing action on individual appropriations. The Act requires each
          standing committee of the House and Senate to recommend budget levels and report legislative plans concerning
          matters within the committee’s jurisdiction to the Budget Committee in each body. The House and Senate Budget
          Committees then each design and report, and each body then considers, a concurrent resolution on the budget.
          The congressional timetable calls for the House and Senate to resolve differences between their respective
          versions of the congressional budget resolution and adopt a single budget resolution by April 15 of each year.
          In the report on the budget resolution, the Budget Committees allocate the total on budget authority and
          outlays set forth in the resolution to the Appropriations Committees and the other committees that have
          jurisdiction over spending. These committee al locations are commonly known as “302(a)” allocations, in
          reference to the section of the Congressional Budget Act that provides for them. The Appropriations Committees
          are then required to divide their 302(a) allocations of bud get authority and outlays among their
          subcommittees. These subcommittee allocations are known as “302(b)” al locations. There are procedural hurdles
          associated with considering appropriations bills that would breach or further breach an Appropriations
          subcommittee’s 302(b) allocation. Similar procedural hurdles exist for considering legislation that would
          cause the 302(a) allocation for any committee to be breached or further breached. The Budget Committees’
          reports may discuss assumptions about the level of funding for major programs. While these assumptions do not
          bind the other committees and subcommittees, they may influence their decisions.</p>

        <img id="imageR7" src="/assets/img/congressenacttimeline.PNG" alt="Budget Matter visual">

        <p> Budget resolutions may include “reserve funds,” which permit adjustment of the
          resolution allocations as necessary to accommodate legislation addressing specific matters, such as healthcare
          or tax reform. Reserve funds are most often limited to legislation that is deficit neutral, including
          increases in some areas offset by decreases in others. The budget resolution may also contain “reconciliation
          directives”. </p>
        <p> Since the concurrent resolution on the budget is not a law, it does not require
          the President’s approval. However, the Congress considers the President’s views in preparing budget
          resolutions, because legislation developed to meet congressional budget allocations does require the
          President’s approval. In some years, the President and the joint leadership of Congress have formally agreed
          on plans to reduce the deficit or balance the budget. These agreements were then reflected in the budget
          resolution and legislation passed for those years. </p>
        <p> If the Congress does not pass a budget resolution, the House and Senate typically
          adopt one or more “deeming resolutions” in the form of a simple resolution or as a pro vision of a larger
          bill. A deeming resolution may serve nearly all functions of a budget resolution, except it may not trigger
          reconciliation procedures in the Senate. </p>
        <p> Once the Congress approves the budget resolution, it turns its attention to
          enacting appropriations bills and authorizing legislation. The Appropriations Committee in each body has
          jurisdiction over annual appropriations. These committees are divided into subcommittees that hold hearings
          and review detailed budget justification materials prepared by the Executive Branch agencies within the
          subcommittee’s jurisdiction. After a bill has been drafted by a subcommittee, the full committee and the whole
          House, in turn, must approve the bill, sometimes with amendments to the original version. The House then
          forwards the bill to the Senate, where a similar review follows. If the Senate disagrees with the House on
          particular matters in the bill, which is often the case, the two bodies form a conference committee
          (consisting of some Members of each body) to resolve the differences. The conference committee revises the
          bill and returns it to both bodies for approval. When the revised bill is agreed to, first in the House and
          then in the Senate, the Congress sends it to the President for approval or veto. </p>
        <p> The Congress also provides budget authority in laws other than appropriations
          acts. In fact, while annual appropriations acts fund the majority of Federal programs, they account for only
          about a third of the total spending in a typical year. Authorizing legislation controls the rest of the
          spending, which is commonly called “mandatory spending.” A distinctive feature of these authorizing laws is
          that they provide agencies with the authority or requirement to spend money without first requiring the
          Appropriations Committees to enact funding. This category of spending includes interest the Government pays on
          the public debt and the spending of several major programs, such as Social Security, Medicare, Medicaid, un
          employment insurance, and Federal employee retirement. Almost all taxes and most other receipts also result
          from authorizing laws. Article I, Section 7, of the Constitution provides that all bills for raising revenue
          shall originate in the House of Representatives. In the House, the Ways and Means Committee initiates tax
          bills; in the Senate, the Finance Committee has jurisdiction over tax laws. </p>
        <p> The budget resolution often includes reconciliation directives, which require
          authorizing committees to recommend changes in laws that affect receipts or mandatory spending. They direct
          each designated committee to report amendments to the laws under the committee’s jurisdiction that would
          achieve changes in the levels of receipts or reductions in mandatory spending controlled by those laws. These
          directives specify the dollar amount of changes that each designated committee is expected to achieve, but do
          not specify which laws are to be changed or the changes to be made. However, the Budget Committees’ reports on
          the budget resolution frequently discuss assumptions about how the laws would be changed. Like other
          assumptions in the report, they do not bind the committees of jurisdiction but may influence their decisions.
          A reconciliation instruction may also specify the total amount by which the statutory limit on the public debt
          is to be changed. </p>
        <p> The committees subject to reconciliation directives draft the implementing
          legislation. Such legislation may, for example, change the tax code, revise benefit formulas or eligibility
          requirements for benefit programs, or authorize Government agencies to charge fees to cover some of their
          costs. Reconciliation bills are typically omnibus legislation, combining the legislation submitted by each
          reconciled committee in a single act. </p>
        <p> Such a large and complicated bill would be difficult to enact under normal
          legislative procedures because it usually involves changes to tax rates or to popular social programs,
          generally to reduce projected deficits. The Senate considers such omnibus reconciliation acts under expedited
          procedures that limit total debate on the bill. To offset the procedural advantage gained by expedited
          procedures, the Senate places significant restrictions on the substantive content of the reconciliation
          measure itself, as well as on amendments to the measure. Any material in the bill that is extraneous or that
          contains changes to the Federal Old Age and Survivors Insurance and the Federal Disability Insurance programs
          is not in order under the Senate’s expedited reconciliation procedures. Nongermane amendments are also
          prohibited. The House does not allow reconciliation bills to increase mandatory spending in net, but does
          allow such bills to increase deficits by reducing revenues. Reconciliation acts, together with appropriations
          acts for the year, are usually used to implement broad agreements between the President and the Congress on
          those occasions where the two branches have negotiated a comprehensive budget plan. Reconciliation acts have
          sometimes included other matters, such as laws providing the means for enforcing these agreements. </p>
        <p> Since 1977, when the start of the fiscal year was established as October 1, there
          have been only three fiscal years (1989, 1995, and 1997) for which the Congress agreed to and enacted every
          regular appropriations bill by that date. When one or more appropriations bills has not been agreed to by this
          date, the Congress usually enacts a joint resolution called a “continuing resolution’’ (CR), which is an
          interim or stopgap appropriations bill that provides authority for the affected agencies to continue
          operations at some specified level until a specific date or until the regular appropriations are enacted.
          Occasionally, a CR has funded a portion or all of the Government for the entire year. </p>
        <p> The Congress must present these CRs to the President for approval or veto. In some
          cases, Congresses have failed to pass a CR or Presidents have rejected CRs because they contained unacceptable
          provisions. Left without funds, Government agencies were required by law to shut down operations—with
          exceptions for some limited activities—until the Congress passed a CR the President would approve. Shutdowns
          have lasted for periods of a day to several weeks. </p>
        <a href="/assets/img/enactment.PNG" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/congressenactdetail.PNG" alt="Budget Matter visual"></a>
        <div class="col-md-12">
          <a href="/e8_resolution" "=""><b>Enactment - Step 8: Budget Resolution</b></a>
          <br>
          <a>The annual budget resolution is an agreement between the House and Senate on a budget plan for the upcoming
            fiscal year and at least the following four fiscal years. </a>
          <br>
          <a id="custombutton" href="/e8_resolution" "="">Read More: Enactment - Step 8: Budget
            Resolution</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/e9_authorization" "=""><b>Enactment - Step 9: Budget Authorization</b></a>
          <br>
          <a>An authorization act is "A law that establishes or continues one or more Federal agencies or programs,
            establishes the terms and conditions under which they operate, authorizes the enactment of appropriations,
            and specifies how appropriated funds are to be used. Authorizations acts sometimes provide permanent
            appropriations." </a>
          <br>
          <a id="custombutton" href="/e9_authorization">Read More: Enactment - Step 9: Budget
            Authorization</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/e10_appropriation"><b>Enactment - Step 10: Budget Appropriation</b></a>
          <br>
          <a>Appropriation is the act of setting aside money for a specific purpose. A company or a government
            appropriates money in its budget-making processes. In the U.S., appropriations for the federal government
            are earmarked by congress.</a>
          <br>
          <a id="custombutton" href="/e10_appropriation">Read More: Enactment - Step 10: Budget
            Appropriation</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/e11_hearing"><b>Enactment - Step 11: Congress Hearing</b></a>
          <br>
          <a>Hearings and Meetings are held in connection with budget requests to the Secretary, OMB or the
            Congress at which witnesses clarify and justify to the satisfaction of the secretarial staff, OMB,
            or the appropriations subcommittees, items contained in the budget submissions.</a>
          <br>
          <a id="custombutton" href="/e11_hearing">Read More: Enactment - Step 11: Congress Hearing</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/e12_q_a"><b>Enactment - Step 12: Questions for the Record</b></a>
          <br>
          <a>Agency prepares information and answers questions to the congressional committee.</a>
          <br>
          <a id="custombutton" href="/e12_q_a">Read More: Enactment - Step 12: Questions for the Record</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/e13_appeal"><b>Enactment - Step 13: Budget Appeal</b></a>
          <br>
          <a>Appeal is a request to  the Congress
            that reconsideration be given to the amount of proposed budget authority or ceiling allocation
            that should be approved for a given program. This is usually accompanied by a statement of the
            impact of the decision on the activity.</a>
          <br>
          <a id="custombutton" href="/e13_appeal">Read More: Enactment - Step 13: Budget Appeal</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/e14_cr"><b>Enactment - Step 14: Enactment Issues</b></a>
          <br>
          <a>Enactment Issues pertaining to two common issues that agency faces with respect to the enactment process: continuing resolutions and new starts.</a>
          <br>
          <a id="custombutton" href="/e14_cr" target="_blank">Read More: Enactment - Step 14: Enactment Issues</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/e15_oversight"><b>Enactment - Step 15: Oversight and Reconciliation</b></a>
          <br>
          <a>Specific requests or directives to agency are often included in the House and Senate reports accompanying appropriations bills require agencies to provide reports.</a>
          <br>
          <a id="custombutton" href="/e15_oversight">Read More: Enactment - Step 15: Oversight and Reconciliation</a>
          <br>
          <br>
        </div>
        <br>
        <a id="custombuttonl" href="/f7_omb2congress">Previous: Formulation - Step 7: OMB Submission to Congress</a>
        <a id="custombuttonr" href="/e8_resolution">Next: Enactment - Step 8: Budget Resolution</a>
      </div>
    </div>`},{route:"/execution",legacyPath:"execution.html",title:"Budget Execution Overview",description:"Budget execution is the process by which the financial resources made available to an agency are directed and controlled toward achieving the purposes and objects for which budgets were approved. The process involves…",html:`<h3 class="my-4">Budget Execution Overview</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/e15_oversight">Previous: Enactment - Step 15 Budget Oversights and Reconcilation</a>
        <a id="custombuttonr" href="/b16_apportionments">Next: Execution - Step 16: Budget Apportionment</a>
        <br><br>
        
        <img id="imageR" src="/assets/img/executionspending.jpg" alt="Budget Matter visual">

        <p> Budget execution is the process by which the financial resources made available to
          an agency are directed and controlled toward achieving the purposes and objects for which budgets were
          approved. The process involves compliance with both legal and administrative requirements. OMB Circular A-11
          provides detailed instructions on all aspects of budget execution. </p>
        

        <p> The General Accounting Office publication, Principles of Federal Appropriations
          Law, is a comprehensive reference regarding the basic principles of appropriation law. It discusses the
          statutes and regulations governing appropriations matters and references significant decisions rendered by the
          Comptroller General and the courts. Each operating unit budget office should have a copy of this document
          available for reference. </p>
        <p> Principles of Federal Appropriations Law discusses the use of budgetary resources
          in terms of availability as to purpose, time and amount. According to this concept, the legality of an
          expenditure depends on three things: </p>
        <ul class="list-group">
          <li class="list-group-item"> the purpose of the expenditure must be proper;</li>
          <li class="list-group-item"> the obligation must occur within the time limits applicable to the appropriation;
            and</li>
          <li class="list-group-item"> the obligation must be within the amounts Congress has established.</li>
        </ul>
        <br>
        <img id="imageR" src="/assets/img/executionoverview.PNG" alt="Budget Matter visual">

        <p> Proper budget execution requires compliance with these three principles. The
          instructions contained in Circular A-11, if properly followed, will assure that budget execution in the agency
          meets required standards. 31 U.S.C. 1301 and 1341 provide the basic legal framework for budget execution. </p>
        <p> Section 1301 provides that "appropriations shall be applied only to the objects
          for which the appropriations were made." A single appropriation account may provide funds for numerous
          programs and activities, thus providing an agency considerable discretion in spending the money. Nevertheless,
          agency spending is usually guided by the justifications presented to the Appropriations Committees; and the
          enacted appropriations bill and accompanying reports.</p>

        <p> Section 1301 also states that an appropriation in a regular, annual appropriation
          law remains available only for that fiscal year unless the act "expressly provides that it is available after
          the fiscal year covered by the law in which it appears" or the appropriation is for rivers and harbors,
          lighthouses, public buildings or the pay of the Navy and Marine Corps. </p>

        <p> Section 1341 prohibits obligation or expenditure in excess of the amount
          appropriated and the incurring of obligations in advance of appropriations, except as "authorized by law".</p>

        <p> Steps in Budget Execution </p>
        <ul class="list-group">
          <li class="list-group-item"> 1. Financial Plans: The agency's financial plan is the first phase of budget
            execution. The President's Budget is the framework of the initial financial plan and should be internally
            updated through the various phases of Congressional action leading to enactment. Per Section 120.21 of OMB
            Circular A-11, financial plans must accompany all apportionment and reapportionment requests to OMB.</li>
          <li class="list-group-item"> 2. Apportionments and Reapportionments: Except in a few cases as provided by law,
            funds contained in appropriations legislation and other funds, (including reimbursements, recoveries of
            prior year funds, and carryover funds) may not be obligated until they are apportioned. See Section 120 of
            Circular A-11 for additional information on exceptions. Apportionment requests prepared by agencies are not
            valid until OMB approves the apportionment. Usually, the signature of the appropriate OMB official
            constitutes approval. Exceptions are: emergencies involving the safety of human life or the protection of
            property for which OMB may provide telephone approval of apportionments under Section 120.35 of OMB Circular
            A-11; and adjustments not requiring submission of a reapportionment request and which are considered to be
            "automatically apportioned" as provided under Section 120.36 of the Circular. Agencies then allot the
            apportioned funds among their operating units or other administrative subdivisions. When the level of funds
            provided changes, (supplemental appropriations, extensions of continuing resolutions, enactment of full year
            appropriations, etc.), agencies must prepare reapportionment requests and receive OMB approval before the
            funds may be obligated. </li>
          <li class="list-group-item"> 3. Reports on Budget Execution: Accounting officers prepare and certify reports
            on budget execution. Part 4, II of Circular A-11 provide instructions for preparation and use of budget
            execution reports. </li>
          <li class="list-group-item"> 4. Other Requirements: Agency also prepare outlay plans and reports and respond
            to Congressional Directives. If an account includes a deferral or a rescission proposal, operating units
            prepare a variety of additional material. Reprogrammings require another set of information. These subjects
            are covered in Circular A-11. </li>
        </ul>
        <br>
        <div class="col-md-12">
          <a href="/b16_apportionments"><b>Execution - Step 16 Budget Apportionment</b></a>
          <br>
          <a>An apportionment is an Office of Management and Budget-approved plan to use budgetary resources (31 U.S.C.
            §§ 1513–b; Executive Order 11541). It typically limits the obligations the federal government may incur for
            specified time periods, programs, activities, projects, objects, etc. </a>
          <br>
          <a id="custombutton" href="/b16_apportionments">Read More: Execution - Step 16 Budget
            Apportionment</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/b17_report"><b>Execution - Step 17 Reports on Budget Execution</b></a>
          <br>
          <a>Part IV, II, Section 130 of OMB Circular A-11 provides detailed instructions on preparing the Report on
            Budget Execution (S.F. 133) for most accounts, including credit programs. </a>
          <br>
          <a id="custombutton" href="/b17_report">Read More: Execution - Step 17 Reports on Budget
            Execution</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/b18_rescission"><b>Execution - Step 18 Rescissions and Deferrals</b></a>
          <br>
          <a>A rescission is enacted legislation which cancels previously enacted budget authority before the authority
            would otherwise lapse. A deferral is any action or inaction by an officer or employee of the United States
            Government that temporarily withholds, delays, or effectively precludes the obligation or expenditure of
            budget authority. </a>
          <br>
          <a id="custombutton" href="/b18_rescission">Read More: Execution - Step 18 Rescissions &amp;
            Deferrals</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/b19_outlay"><b>Execution - Step 19 Monitoring Federal Outlays</b></a>
          <br>
          <a>Agency will report and monitor its financial condition throughout the year. The purpose of outlay monitoring is to reduce the Government's interest costs. </a>
          <br>
          <a id="custombutton" href="/b19_outlay">Read More: Execution - Step 19 Monitoring Federal
            Outlays</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/b20_finplan"><b>Execution - Step 20 Financial Plan</b></a>
          <br>
          <a> Financial plan details out agency's execution plan throughout the year. 31 U.S.C. 1514 requires that each agency have a system of administrative control of funds.</a>
          <br>
          <a id="custombutton" href="/b20_finplan">Read More: Execution - Step 20 Financial Plan</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/b21_reprogram"><b>Execution - Step 21 Reprogramming</b></a>
          <br>
          <a>Reprogramming process is to realign funds within an appropriation or fund account to use for different
            purposes than those contemplated at the time of appropriation.</a>
          <br>
          <a id="custombutton" href="/b21_reprogram">Read More: Execution - Step 21
            Reprogramming</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/b22_directive"><b>Execution - Step 22 Congressional Directive</b></a>
          <br>
          <a>A Congressional Directive reflects legislative intent.</a>
          <br>
          <a id="custombutton" href="/b22_directive">Read More: Execution - Step 22 Congressional
            Directives</a>
          <br>
          <br>
        </div>
        <a id="custombuttonl" href="/e15_oversight">Previous: Enactment - Step 15 Budget Oversights and Reconcilation</a>
        <a id="custombuttonr" href="/b16_apportionments">Next: Execution - Step 16: Budget Apportionment</a>
      </div>
    </div>`},{route:"/f1_planning",legacyPath:"f1_planning.html",title:"Formulation - Step 1: Planning",description:"The objective of planning is to develop strategic guidance documents that reflect the priorities of agency which will enable it to align its direction with that of the Administration. Agency should examine current…",html:`<h3 class="my-4">Formulation - Step 1: Planning</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/formulation">Previous: Formulation Overview</a>
        <a id="custombuttonr" href="/f2_guidance">Next: Formulation - Step 2: Guidance</a>
        <br> <br>
        
        <img id="imageR7" src="/assets/img/formulation%20a1.png" alt="Budget Matter visual">

        <p> The objective of planning is to develop strategic guidance documents that reflect
          the priorities of agency which will enable it to align its direction with that of the Administration. Agency
          should examine current operation environment, considering legislation and mission requirement changes, and the
          need for efficient management of agency resources. Supporting the planning process is a series of strategic
          planning documents. </p>
        <p> The focus should be on: </p>
        <ul class="list-group">
            <li class="list-group-item">1. Defining/updating the agency’s strategy necessary to help achieve statutory
              missions.</li>
            <li class="list-group-item">2. Planning the integrated and balanced resources and manpower necessary to
              accomplish that strategy.</li>
        </ul>
        <br>
        <p> Planning process is a meticulous process that can begin as early as three years in
          advance of the budget year, and it can last sixteen months. The performance plan may be used to structure the
          budget submission, or at minimum, be part of the agency’s budget submission to OMB and to Congress. Changes in
          the plan should reflect changes to the program activities in the budget request. A performance plan
          establishes both near-term (1 year) and longer-term (3-5 years) goals for each program included in the
          Agency's budget request. The budget planning process should enable agency to focus on the performance and
          deliverables, and align the budget from the input and functions of the agency to the performance results. </p>
        <p> The outputs of the planning process should demonstrate a clear connection between
          the budget requested for the upcoming fiscal year and the achievement of goals set forth in the strategic
          plan. Formal guidance helps to document this process and establishes a starting point from which the agency
          will formulate the budget. It should: </p>
        <ul class="list-group">
          <li class="list-group-item"> 1. Depict a combined long-term view of the operation environment;</li>
          <li class="list-group-item"> 2. Help shape the investment blueprint for the future years;</li>
          <li class="list-group-item"> 3. Provide concise programming priorities and requirements in support of the
            strategic documents.</li>
        </ul>
        <br>
        <p> Agency strategic plan, performance plan and report can be found at
          performance.gov, and more detail information can be found on agency’s public website. </p>
        <ul class="list-group">
          <li class="list-group-item"> The GPRA in 1993 had established strategic planning, performance planning, and
            reporting as a framework for agencies to communicate progress in achieving their missions.</li>
          <li class="list-group-item">The GPRA Modernization Act of 2010 updates the Federal Government's performance
            management framework, helps agencies to focus on highest priorities and creating a culture where data and
            empirical evidence play a greater role in policy, budget, and management decisions, requires performance
            planning and reporting on a central website.</li>
        </ul>
        <a id="custombuttonl" href="/formulation">Previous: Formulation Overview</a>
        <a id="custombuttonr" href="/f2_guidance">Next: Formulation - Step 2: Guidance</a>
      </div>

    </div>`},{route:"/f1_planning copy",legacyPath:"f1_planning copy.html",title:"Formulation - Step 1: Planning",description:"The objective of planning is to develop strategic guidance documents that reflect the priorities of agency which will enable it to align its direction with that of the Administration. Agency should examine current…",html:`<h3 class="my-4">Formulation - Step 1: Planning</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/formulation">Previous: Formulation Overview</a>
        <a id="custombuttonr" href="/f2_guidance">Next: Formulation - Step 2: Guidance</a>
        <br> <br>
        
        <img id="imageR7" src="/assets/img/formulation%20a1.png" alt="Budget Matter visual">

        <p> The objective of planning is to develop strategic guidance documents that reflect
          the priorities of agency which will enable it to align its direction with that of the Administration. Agency
          should examine current operation environment, considering legislation and mission requirement changes, and the
          need for efficient management of agency resources. Supporting the planning process is a series of strategic
          planning documents. </p>
        <p> The focus should be on: </p>
        <ul class="list-group">
          <b>
            <li class="list-group-item">1. Defining/updating the agency’s strategy necessary to help achieve statutory
              missions.</li>
            <li class="list-group-item">2. Planning the integrated and balanced resources and manpower necessary to
              accomplish that strategy.</li>
          </b>
        </ul>
        <br>
        <p> Planning process is a meticulous process that can begin as early as three years in
          advance of the budget year, and it can last sixteen months. The performance plan may be used to structure the
          budget submission, or at minimum, be part of the agency’s budget submission to OMB and to Congress. Changes in
          the plan should reflect changes to the program activities in the budget request. A performance plan
          establishes both near-term (1 year) and longer-term (3-5 years) goals for each program included in the
          Agency's budget request. The budget planning process should enable agency to focus on the performance and
          deliverables, and align the budget from the input and functions of the agency to the performance results. </p>
        <p> The outputs of the planning process should demonstrate a clear connection between
          the budget requested for the upcoming fiscal year and the achievement of goals set forth in the strategic
          plan. Formal guidance helps to document this process and establishes a starting point from which the agency
          will formulate the budget. It should: </p>
        <ul class="list-group">
          <b>
          <li class="list-group-item"> 1. Depict a combined long-term view of the operation environment;</li>
          <li class="list-group-item"> 2. Help shape the investment blueprint for the future years;</li>
          <li class="list-group-item"> 3. Provide concise programming priorities and requirements in support of the
            strategic documents.</li></b>
        </ul>
        <br>
        <p> Agency strategic plan, performance plan and report can be found at
          performance.gov, and more detail information can be found on agency’s public website. </p>
        <ul class="list-group">
          <b>
          <li class="list-group-item"> The GPRA in 1993 had established strategic planning, performance planning, and
            reporting as a framework for agencies to communicate progress in achieving their missions.</li>
          <li class="list-group-item">The GPRA Modernization Act of 2010 updates the Federal Government's performance
            management framework, helps agencies to focus on highest priorities and creating a culture where data and
            empirical evidence play a greater role in policy, budget, and management decisions, requires performance
            planning and reporting on a central website.</li>
        </b></ul><b>
        <br>
        <a id="custombuttonl" href="/formulation">Previous: Formulation Overview</a>
        <a id="custombuttonr" href="/f2_guidance">Next: Formulation - Step 2: Guidance</a>
      </b></div><b>

    </b></div><b>
  </b>`},{route:"/f2_guidance",legacyPath:"f2_guidance.html",title:"Formulation - Step 2: Guidance",description:"Usually by late spring of each year, the Office of Management and Budget (OMB) sends out a budget planning guidance memorandum, also referred to as the “Spring Guidance”. Guidance provides top-level guidance and…",html:`<h3 class="my-4">Formulation - Step 2: Guidance</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/f1_planning">Previous: Formulation - Step 1: Planning</a>
        <a id="custombuttonr" href="/f3_internal">Next: Formulation - Step 3: Internal Budget Request</a>
        <br> <br>
        
        <img id="imageR7" src="/assets/img/formulation%20a2.png" alt="Budget Matter visual">

        <p> Usually by late spring of each year, the Office of Management and Budget (OMB)
          sends out a budget planning guidance memorandum, also referred to as the “Spring Guidance”. Guidance provides
          top-level guidance and programmatic priorities. It includes a preliminary budget formulation schedule,
          programmatic roles and funding levels, workforce planning guidance and targets, estimates of institutional
          capabilities and requirements. The outyear estimates included in the previous budget serve as a starting point
          for the next budget. The OMB usually sends out guidance separately to set up fiscal control number, which is
          not publicly available. Agency may choose to accept the established control and policy guidance. Agency may
          also seek direct approach to negotiate with OMB or utilize different channels throughout the formulation
          phases to get more attend to get more resources or policy changes. </p>
        <p> The guidance may also include specific instructions for how agency budget requests
          may help achieve the President’s budgetary priorities and other policy goals. Executive agencies prepare their
          budget requests in accordance with the instructions and guidance provided by OMB. </p>
          <img id="imageR" src="/assets/img/omba11cover.PNG" alt="Budget Matter visual">
          <p> OMB also issues Circular No. A–11 to all Federal agencies in late June or early
          July. This Circular provides detailed instructions for submitting budget data and materials. It contains an
          overview of applicable budgetary laws, policies for the preparation and submission of budgetary estimates, and
          information on financial management and budget data systems. It also provides agencies with directions for
          budget execution and guidance regarding agency interaction with Congress and the public. </p>
        <p> While the general contents and timeline for agency budget submissions are guided
          by OMB, agencies also have their own internal procedures for developing the requests they submit to OMB. In
          practice, budget preparation is likely a time- and data-intensive process for agencies, involving detailed
          analysis and estimation of past and future budgetary resources. </p>
        <br>
        <a id="custombuttonl" href="/f1_planning">Previous: Formulation - Step 1: Planning</a>
        <a id="custombuttonr" href="/f3_internal">Next: Formulation - Step 3: Internal Budget Request</a>
      </div>

    </div>`},{route:"/f3_internal",legacyPath:"f3_internal.html",title:"Formulation - Step 3: Internal Budget Request",description:"Internal budget process often refers to program and budget review process. Agency make further resource allocation among operating components by issuing agency fiscal guidance with considerations of historical…",html:`<h3 class="my-4">Formulation - Step 3: Internal Budget Request</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/f2_guidance">Previous: Formulation - Step 2: Guidance</a>
        <a id="custombuttonr" href="/f4_decision">Next: Formulation - Step 4: Internal Budget Review and
          Decision</a>
        <br> <br>
        <a href="/assets/img/formulation%20a3.png" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/formulation%20a3.png" alt="Budget Matter visual"></a>
        <p> Internal budget process often refers to program and budget review process. Agency
          make further resource allocation among operating components by issuing agency fiscal guidance with
          considerations of historical budgeting documents, performance reports, and among other factors: </p>
        <ul class="list-group">
            <li class="list-group-item">1. Budget limits and programmatic guidance from the Administration and OMB;
            </li>
            <li class="list-group-item">2. Recent legislation, including authorization and appropriation acts;
              availability and costs of institutional capabilities;</li>
            <li class="list-group-item">3. Outstanding issues that arose during the prior cycle of budget formulation;
              riation acts;</li>
            <li class="list-group-item">4. Proposed future investment strategies.</li>
        </ul>
        <br>
        <p> Agency also issues detail program and budget review guidance to guide operating
          components through internal budget process. The guidance contains detail formulation schedule, programmatic
          roles and funding levels, workforce planning guidance and targets, estimates of institutional capabilities and
          requirements. </p>
        <p> Agency and its sub-components usually conduct two cycles of extensive reviews with
          the first review for five-year requirement from June to September, and the second review with primary focus on
          first year budget due to program and policy changes from October to January.</p>

        <p> Operating components officially starts the process by receiving fiscal guidance
          from the agency, and actively participate throughout the whole process. The outcome of the process has a
          direct impact on its budget and operation; therefore, components have the most incentive to prepare and
          protect its budget. Senior management, finance management, and program offices of components often collaborate
          together during the process as an organization effort. </p>
        <p> Operating components collect information, conduct extensive analysis, align budget
          request with the line of effort with legislative and policy guidance, and prepare data submission into
          systems, budget justification, exhibits, and presentations. </p>
        <p> During the internal budget request process, the main steps been taken in place
          are:</p>

        <ul class="list-group">
        
            <li class="list-group-item"> 1. Publish internal schedule and guidance; conduct kick-off meeting;</li>
            <li class="list-group-item"> 2. Send out data call to sub-components;</li>
            <li class="list-group-item"> 3. Consolidate collected data, and conduct analysis for cost projection,
              feasibility, affordability, consistence, and trade-off;</li>
            <li class="list-group-item"> 4. Coordinate with senior management and sub-components to determine funding
              strategy for budget submission, issue nomination, and unfunded requirements; </li>
            <li class="list-group-item"> 5. Make internal decision and prioritize programs and functions; </li>
            <li class="list-group-item"> 6. Convert data for submission to OMB MAX and agency systems formats;</li>
            <li class="list-group-item"> 7. Submit budget data, exhibit, justification, issue nomination into systems
              according to agency schedule.</li>
        
        </ul>

        <br>
        <a id="custombuttonl" href="/f2_guidance">Previous: Formulation - Step 2: Guidance</a>
        <a id="custombuttonr" href="/f4_decision">Next: Formulation - Step 4: Internal Budget Review and
          Decision</a>
      </div>
    </div>`},{route:"/f4_decision",legacyPath:"f4_decision.html",title:"Formulation - Step 4: Internal Budget Review and Decision",description:"Due to many reasons and operation environment changes, agency and its components may face fiscal constraints to carry out operations within the limited time period. Sometime, agency and its components may decide to…",html:`<h3 class="my-4">Formulation - Step 4: Internal Budget Review and Decision</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/f3_internal">Previous: Formulation - Step 3: Internal Budget Request</a>
        <a id="custombuttonr" href="/f5_submission">Next: Formulation - Step 5: Submission to OMB</a>
        <br> <br>
        <a href="/assets/img/formulation%20a4.png" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/formulation%20a4.png" alt="Budget Matter visual"></a>
        <p> Due to many reasons and operation environment changes, agency and its components
          may face fiscal constraints to carry out operations within the limited time period. Sometime, agency and its
          components may decide to look inside to make trade off, delay execution, improve operation efficiency to fund
          other emerging priorities. However, the option may not always the choice. Agency and its components may have
          to seek additional resource beyond what are allocated to their resources. Competitions among them for limited
          resources are rough. The key factors to make a strong case to help them win the competitions are essential to
          their operation outcomes. </p>
        <p> Agency and its components should prepare themselves by: </p>

        <ul class="list-group">
          
            <li class="list-group-item">1. Be familiar with agency and OMB’s review and decision process and timeline,
              with consideration of current and future fiscal and political environment; </li>
            <li class="list-group-item">2. Find the root causes of the lacking of fiscal resource; </li>
            <li class="list-group-item">3. Align the emerging requirements and/or unfunded requirements with the agency,
              OMB, and the Administration’s strategic and performance plan if applicable;</li>
            <li class="list-group-item">4. Align the emerging requirements with operation environment or legislative
              changes if applicable; </li>
            <li class="list-group-item">5. Adopt data-driven culture, conduct extensive analysis to show the clear trail
              of needs; </li>
            <li class="list-group-item">6. Adopt analytic storytelling method, and develop a strong case and position on
              what and how to ask for it, and; </li>
            <li class="list-group-item">7. Show approval of historical performance outcomes with cost saving or
              revenue/benefit generated; </li>
            <li class="list-group-item">8. Be consistent with promoting agency’s mission and seek public, political, and
              legislative influence. </li>
        
        </ul>
        <br>
        <p> Agency should also realize the budget decision can be a political decision. The
          agency should develop a strategy on how to approach OMBs and the Administration based on historical
          information, emerging environment, and even political considerations, including the relationship between
          agency’s leadership with OMB leadership. </p>
        <p> Agency can raise the issue as early as the “Spring Guidance” been given in late
          spring, and may continue to seek solution as the budget review process starts in September at OMB. There is
          also policy initiative driven emerging requirement, which can be process as late as December or January, and
          often resolved at Cabinet Secretaries level, and may elevated to the President and White House senior
          advisors. Once PB is in the final phase of development, it’s practically impossible to make changes, but
          supplemental requests can still be the last effort to take. </p>

        <p> Some agencies, particularly large agencies, have established internal issue review
          and approval process to address and resolve budget issue internally. Agency review components’ issue
          nomination at working groups level with participants from program and budget, and technical subject matter
          experts on the topics. The outputs of the working group are a consolidated list of prioritized requirements
          and recommendations for agency’s head to make a decision. </p>
        <br>
        <a id="custombuttonl" href="/f3_internal">Previous: Formulation - Step 3: Internal Budget Request</a>
        <a id="custombuttonr" href="/f5_submission">Next: Formulation - Step 5: Submission to OMB</a>
      </div>

    </div>`},{route:"/f5_submission",legacyPath:"f5_submission.html",title:"Formulation - Step 5: Submission to OMB",description:"OMB was created by the 1921 Budget and Accounting Act as the Bureau of the Budget, and be reconstituted as OMB in 1970. Its primary function is to oversee the development and implementation of the federal budget. In…",html:`<h3 class="my-4">Formulation - Step 5: Submission to OMB</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/f4_decision">Previous: Formulation - Step 4: Internal Budget Review and
          Decision</a>
        <a id="custombuttonr" href="/f6_ombdecision">Next: Formulation - Step 6: OMB Decision and Reconciliation</a>
        <br> <br>
        <a href="/assets/img/formulation%20a5.png" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/formulation%20a5.png" alt="Budget Matter visual"></a>
        <p> OMB was created by the 1921 Budget and Accounting Act as the Bureau of the Budget,
          and be reconstituted as OMB in 1970. Its primary function is to oversee the development and implementation of
          the federal budget. In some years, OMB has the dominant role in budget policy; in other seasons, it faces
          tough competition from other presidential agencies and advisors. OMB reviews major policy issues and updates
          its multi-year forecasts for spending and revenue. Together with the Council of Economic Advisers (CEA), it
          reviews the budget outlook and policy alternatives and presented to the President. </p>
        <p> After the President makes his initial policy decisions regarding the budget, OMB
          is responsible for notifying federal departments and agencies. These decisions may include specific budgetary
          guidelines and spending ceilings to be used by agencies in the preparation of their budgets. Generally, these
          instructions vary from year to year depending on current budgetary and political conditions. OMB communicates
          process and policy guidelines to agencies through circulars, bulletins, and other detailed communications. In
          particular, OMB Circular No. A-11 contains detailed instructions and schedules for submission of agency budget
          requests and other material to ensure that budget requests adhere to standardized conventions and formats. OMB
          staff also maintain ongoing contact with agencies as they formulate their budget requests to provide guidance
          and to keep apprised of agencies’ budgetary concerns. </p>
        <p> Federal agencies annual budget requests include: </p>

        <ul class="list-group">
          <li class="list-group-item">1. Budget data submission to OMB MAX system with required format; </li>
          <li class="list-group-item">2. Detail budget justification to explain program changes and expenditure types;
          </li>
          <li class="list-group-item">3. Executive summary to highlight submission packages;</li>
          <li class="list-group-item">4. Required budget exhibits to provide additional inside on selected expenditure
            categories and programs;</li>
          <li class="list-group-item">5. Prior year execution financial results and performance report; </li>
          <li class="list-group-item">6. Issue paper to address additional resource request.</li>
        </ul>
        <br>
        <img id="imageR" src="/assets/img/ombschedule.PNG" alt="Budget Matter visual">
        <p> Federal agencies submit their formal budget requests to OMB in early fall, usually
          about five months before the President Budget submission to Congress. OMB reviews executive agencies annual
          budget request to ensure that they are consistent with the President’s policy objectives. If an agency
          includes legislative initiatives in its budget request, OMB determines whether the proposals are consistent
          with the President’s policy goals. Agency requests are first reviewed by the OMB program examiners who are
          responsible for the associated policy areas. Agency requests may also be reviewed by more senior OMB
          officials. Prior to making a recommendation, OMB program examiners may ask for additional information from
          agencies, either informally or by conducting formal hearings. Examiners’ recommendations are reviewed by more
          senior OMB officials, culminating in review and approval by the OMB Director and the President. Agencies have
          a brief period during which they may appeal to the President for higher levels than were recommended by OMB.
        </p>
        <p> OMB also assists in the integration of program performance and budgeting. Under
          the Government Performance and Results Act (GPRA) of 1993 (P.L. 103-62), OMB is required to have agencies
          prepare annual performance plans along with their budget requests. Like agency budget requests, agency
          performance plans are submitted to OMB for review in early fall. OMB staff review the agency performance
          plans, and the OMB director gives final approval to these plans. Agencies must revise their performance plans
          to reflect these decisions. Based on these agency annual performance plans, OMB is required to prepare a
          government-wide performance plan as a part of the President’s budget. The “accountability tool” is intended to
          assist OMB budget examiners and agency program managers in making “evidence-based funding decisions.”</p>
        <br>
        <a id="custombuttonl" href="/f4_decision">Previous: Formulation - Step 4: Internal Budget Review and
          Decision</a>
        <a id="custombuttonr" href="/f6_ombdecision">Next: Formulation - Step 6: OMB Decision and Reconciliation</a>
      </div>
    </div>`},{route:"/f6_ombdecision",legacyPath:"f6_ombdecision.html",title:"Formulation - Step 6: OMB Decision and Reconciliation",description:"In early fall, agencies submit their budget requests to OMB, where analysts review them and identify issues that OMB officials need to discuss with the agencies. OMB and the agencies resolve many issues themselves. It…",html:`<h3 class="my-4">Formulation - Step 6: OMB Decision and Reconciliation</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/f5_submission">Previous: Formulation - Step 5: Submission to OMB</a>
        <a id="custombuttonr" href="/f7_omb2congress">Next: Formulation - Step 7: President Budget submission to
          Congress</a>
        <br> <br>
        <a href="/assets/img/formulation%20a6.png" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/formulation%20a6.png" alt="Budget Matter visual"></a>
        <p> In early fall, agencies submit their budget requests to OMB, where analysts review
          them and identify issues that OMB officials need to discuss with the agencies. OMB and the agencies resolve
          many issues themselves. It is expected that agencies will seek more funds for programs in their jurisdiction
          and that OMB will seek to constrain budgetary growth. This process begins with OMB review of agencies OMB
          submission, follows with Passback (traditionally the Monday following Thanksgiving), and ends with OMB's
          settlement direction.</p>
        <img id="imageR7" src="/assets/img/ombpassback.PNG" alt="Budget Matter visual">

        <p> Passback (“Passed-back”) is the OMB’s formal response to the Federal agencies on
          their annual budget requests. The OMB may increase, decrease, or maintain budget totals. The Passback process
          and the content of Passback decisions has differed under each Administration and each OMB Director. Passback
          may also include program policy changes or personnel ceilings. The settlement document provides post-appeal
          OMB guidance to which agencies will comply. Passback and settlement may also detail requirements for new
          reports or deliverables that the federal agencies will provide to OMB. After receiving Passback, agencies
          usually have a 72-hour turnaround window in which to analyze the guidance and submit any appeals and
          justification materials. It is not uncommon for OMB to conduct additional information gathering and analyses
          before issuing its settlement position. OMB's delivery of settlement can also be delayed by events occurring
          in Congress or the Administration. </p>
        <p> The agency needs to analyze the impact of the Passback, conduct technical review
          with consideration of political impact, develop a strategy to guide through the process, and carefully make
          decision whether to appeal or not. Agencies may choose to submit an appeal on one or more elements (often
          termed a reclama) to the OMB Director. To support the appeal, agencies should provide justification materials
          and engages in discussion with OMB until OMB finalizes its budget guidance and programmatic decisions in the
          settlement. This decision-making process is usually completed by late December around Christmas. Depending on
          the procedures established by the OMB Director, it may require the involvement of White House policy officials
          and the President. </p>

        <p> The final stage before deliver to Congress is to adjust and reconcile detailed
          budget data and the preparation of the budget documents. The decision-makers must consider the effects of
          economic and technical assumptions on the budget estimates. Interest rates, economic growth, the rate of
          inflation, the unemployment rate, and the number of people eligible for various benefit programs, among other
          factors, affect Government spending and receipts. Small changes in these assumptions can alter budget
          estimates by billions of dollars. Thus, the budget formulation process involves the simultaneous consideration
          of the resource needs of individual programs, the allocation of resources among the agencies and functions of
          the Federal Government, and the total outlays and receipts that are appropriate in light of current and
          prospective economic conditions. Final numbers are locked in OMB budget systems, Congressional roll-out
          materials and President’s Budget volume and Appendix are finalized in January. </p>
        <br>
        <a id="custombuttonl" href="/f5_submission">Previous: Formulation - Step 5: Submission to OMB</a>
        <a id="custombuttonr" href="/f7_omb2congress">Next: Formulation - Step 7: President Budget submission to
          Congress</a>
      </div>

    </div>`},{route:"/f7_omb2congress",legacyPath:"f7_omb2congress.html",title:"Formulation - Step 7: President Budget submission to Congress",description:"OMB transmits the President’s Budget to the Congress on or after the first Monday in January but not later than the first Monday in February of each year for the following fiscal year. In years when a Presidential…",html:`<h3 class="my-4">Formulation - Step 7: President Budget submission to Congress</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/f6_ombdecision">Previous: Formulation - Step 6: OMB Decision and
          Reconciliation</a>
        <a id="custombuttonr" href="/enactment">Next: Congressional Enactment Process</a>
        <br> <br>
        <a href="/assets/img/formulation%20a7.png" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/formulation%20a7.png" alt="Budget Matter visual"></a>
        <p> OMB transmits the President’s Budget to the Congress on or after the first Monday
          in January but not later than the first Monday in February of each year for the following fiscal year. In
          years when a Presidential transition has taken place, this timeline for budget release is commonly extended to
          allow the new administration sufficient time to take office and formulate its budget policy. While there is no
          specific timeline set for this circumstance, the detailed budget is usually completed and released in April or
          May. However, in order to aid the congressional budget process new administrations often release a budget
          blueprint that contains broad spending outlines and descriptions of major policies and priorities in February
          or March. </p>
        <p> Under 31 U.S.C. Section 1105, the President is required to provide certain
          information in the budget submission to Congress. The complete list of content the President is required to
          submit as part of the budget proposal is extensive, and includes:</p>
        <ul class="list-group">
          <ul class="list-group">
            
              <li class="list-group-item">1. Estimated receipts, expenditures, and proposed appropriations for the next
                five fiscal years;
              </li>
              <li class="list-group-item">2. Actual receipts, expenditures, and appropriations for the previous fiscal
                year; </li>
              <li class="list-group-item">3. Information on the public debt; </li>
              <li class="list-group-item">4. Separate statements of amounts for specified appropriations accounts and
                trust funds, among other things.</li>
          
          </ul>
        </ul>
        <br>
        <p> The budget submission includes the following volumes: </p>

        <ul class="list-group">
     
            <li class="list-group-item"> 1. Budget of the U.S. Government--includes summary pages highlighting the
              President’s policy priorities, budgetary aggregates tables, and a detailed narrative description of
              proposed government activities, organized by issue and agency;</li>
            <li class="list-group-item"> 2. Historical Tables--provides a historical overview of federal government
              finances, including time series statistics on budget authority, government receipts, outlays, government
              employment, gross domestic product (GDP), and the federal debt going back several decades and in some
              cases as far back as 1789;</li>
            <li class="list-group-item"> 3. Analytical Perspectives-- contains in-depth analysis of government
              programs, including credit and insurance programs, discussion of crosscut budgets that span two or more
              agencies, and technical explanation of the budget baselines used in the analyses and estimates contained
              in the President’s budget proposal; </li>
            <li class="list-group-item"> 4. Appendix --includes detailed budget estimates and financial information on
              individual programs and appropriations accounts, proposed text of appropriations language, and
              information on the legislative and judicial branch appropriations that are not included in other volumes
              of the President’s budget proposal; </li>
            <li class="list-group-item"> 5. Supplemental materials – such as legislative proposals for budget process
              reform, a brief guide to the budget that is intended for members of the public, or a summary of proposed
              spending reductions or program consolidations. </li>
  
        </ul>
        <br>
        <p> The President may also update the budget by submitting supplemental requests and
          revisions to Congress. The President is required to submit a supplemental summary of the budget, commonly
          referred to as the Mid-Session Review (MSR), before July 16 of each year. The MSR is required to include any
          substantial changes in estimates of expenditures, receipts, or substantial changes to obligations plus any
          changes in outlays or budget authority requested. The MSR may reflect changes in economic conditions,
          budgetary actions taken by Congress, or other factors that have led the President to make adjustments to the
          initial budget submission.</p>
        <img id="imageR7" src="/assets/img/ombrole.PNG" alt="Budget Matter visual">

        <p> The OMB plays an essential role in the preparation of the President’s budget
          submission to Congress. OMB sets forth the framework by which federal agencies formulate their budget
          requests, and is responsible for ensuring agency budget requests are consistent with the President’s agenda
          and policy goals. As a consequence, the OMB director potentially can wield a great deal of influence over
          agency budget requests and the final shape of the President’s budget. The finalized agency budgets are then
          incorporated into the budget the President submits to Congress. OMB is responsible for preparing the
          accompanying budget documents that provide an explanation and justification of the President’s
          government-wide budget policy. The budget documents then are printed and submitted to Congress and the
          public. </p>
        <p> Once the President has submitted the budget, OMB and agency officials explain
          and justify the request to Congress. This frequently involves both formal and informal interactions. Early
          in the congressional budget process, often in the week following the submission of the President’s budget,
          the OMB Director and other Cabinet officials usually provide testimony regarding the President’s broad
          budgetary objectives before congressional committees. Once the President has submitted the budget, OMB and
          agency officials explain and justify the request to Congress. This frequently involves both formal and
          informal interactions. Early in the congressional budget process, often in the week following the submission
          of the President’s budget, the OMB Director and other Cabinet officials usually provide testimony regarding
          the President’s broad budgetary objectives before congressional committees. </p>
        <p> Agencies also submit written justification of their budget requests to the
          appropriations committee and subcommittees of jurisdiction in each chamber. Federal agencies budget
          submissions also include annual performance plan. Some of them have listed it as separate documents, while
          others integrate it into one document. </p>
        <p> As budgetary legislation is being formulated by Congress, agency officials are
          often called before the appropriations subcommittees to justify and explain their budget requests to
          Congress. To ensure that all testimony and written justification materials are consistent with the
          President’s policy objectives, OMB reviews materials before agencies provide them to Congress. Agency
          testimony and written justification materials facilitate dialogue and information sharing between federal
          agencies and congressional committees. Justification materials are often the starting point for language
          contained in the committee reports that accompany each appropriations bill. Agency justification materials
          also provide program details that Congress may use when determining the amounts to be appropriated and the
          language to be included in reports accompanying appropriations acts. How well the documents explain and
          justify agencies budget requirement to fulfill their performance goal is essential. Finally, federal
          agencies and other Administration officials interact with Members of Congress informally. While the
          specifics of these informal communications are not public, committees may seek to develop ongoing
          relationships with the agencies within their jurisdiction.</p>
        <br>
        <a id="custombuttonl" href="/f6_ombdecision">Previous: Formulation - Step 6: OMB Decision and
          Reconciliation</a>
        <a id="custombuttonr" href="/enactment">Next: Congressional Enactment Process</a>
      </div>
    </div>`},{route:"/formulation",legacyPath:"formulation.html",title:"Formulation Process Overview",description:"Formulation is the process federal Agencies plan, formulate, and estimate program budget. The budget formulation process takes place almost exclusively with the executive branch of government, though it can include a…",html:`<h3 class="my-4">Formulation Process Overview</h3>
    <hr>
    
    <div class="row mb-4">
      <div class="col-md-12">
        <a id="custombuttonl" href="/process">Previous: Budget Process Overview</a>
        <a id="custombuttonr" href="/f1_planning">Next: Formulation - Step 1: Planning</a>
        <br><br>
        <p> Formulation is the process federal Agencies plan, formulate, and estimate program
          budget. The budget formulation process takes place almost exclusively with the executive branch of government,
          though it can include a number of actors within the branch. The process is usually carried out behind closed
          door. The budget is built on future years needs with baseline of prior years’ execution. Decisions made during
          the formulation stage often have impacts several years into the future. The process usually starts 18-24 months
          prior to the execution year. The long lead times and the fact that appropriations have not yet been made for
          the next year mean that the budget is prepared with a great deal of uncertainty about economic conditions and
          congressional actions.</p>
        <a href="/assets/img/formulation%20a.PNG" target="_blank"><img class="img-fluid rounded mb-4" src="/assets/img/formulation%20a.PNG" alt="Budget Matter visual"></a>
        <p> There are seven key formulation steps: </p>
        <div class="col-md-12">
          <a href="/f1_planning"><b>Formulation - Step 1: Planning</b></a>
          <br>
          <a>Federal agency builds performance planning with estimated resources and align with strategic plan.</a>
          <br>
          <a id="custombutton" href="/f1_planning">Read More: Formulation - Step 1: Planning</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/f2_guidance"><b>Formulation - Step 2: Guidance</b></a>
          <br>
          <a>OMB creates and issues Fiscal Guidance to set control for federal agency. Agency further distributes control number among programs and align with strategic and performance plans.</a>
          <br>
          <a id="custombutton" href="/f2_guidance">Read More: Formulation - Step 2: Guidance</a>
          <br>
          <br>
        </div>
        <div class="col-md-12">
          <a href="/f3_internal"><b>Formulation - Step 3: Internal Budget Reuqest</b></a>
          <br>
          <a>Federal agency distributes intenal fiscal guidances to fund holders, and fund holders start internal
            budget
            projection at detail line item and program elements level.</a>
          <br>
          <a id="custombutton" href="/f3_internal">Read More: Formulation - Step 3: Internal Budget
            Reuqest</a>
          <br>
          <br>

        </div>
        <div class="col-md-12">
          <a href="/f4_decision"><b>Formulation - Step 4: Internal Budget Review and
              Decision</b></a>
          <br>
          <a>Federal agency conducts program and budget review process to align resources among programs and fund holders, and make
            decisoins on issue nominations.</a>
          <br>
          <a id="custombutton" href="/f4_decision">Read More: Formulation - Step 4: Internal Budget
            Review and Decision</a>
          <br>
          <br>

        </div>
        <div class="col-md-12">
          <a href="/f5_submission"><b>Formulation - Step 5: Submission to OMB</b></a>
          <br>
          <a>Federal agency inputs budget request into OMB MAX Database, submits justification, and proposal appeal for
            OMB passback if applicable.</a>
          <br>
          <a id="custombutton" href="/f5_submission">Read More: Formulation - Step 5: Submission to
            OMB</a>
          <br>
          <br>

        </div>
        <div class="col-md-12">
          <a href="/f6_ombdecision"><b>Formulation - Step 6: OMB Decision and Reconciliation</b></a>
          <br>
          <a>OMB reconciles agency submission, coordinates with stakeholders, nagotiates to make final decision, and realign resources as
            needed.</a>
          <br>
          <a id="custombutton" href="/f6_ombdecision">Read More: Formulation - Step 6: OMB Decision
            and Reconciliation</a>
          <br>
          <br>

        </div>
        <div class="col-md-12">
          <a href="/f7_omb2congress"><b>Formulation - Step 7: President Budget Submission to
              Congress</b></a>
          <br>
          <a> OMB consolidates agency submission as part of President Budget book, and submits to Congress.</a>
          <br>
          <a id="custombutton" href="/f7_omb2congress">Read More: Formulation - Step 7: President
            Budget Submission</a>
          <br>
        </div>
        <br><br>
        <a id="custombuttonl" href="/process">Previous: Budget Process Overview</a>
        <a id="custombuttonr" href="/f1_planning">Next: Formulation - Step 1: Planning</a>
      </div>
    </div>`},{route:"/policy",legacyPath:"policy.html",title:"Budget Laws",description:"The Budget and Accounting Act of 1921 created the core of the current Federal budget process. Before enactment of this law, there was no annual centralized budgeting in the Executive Branch. Federal Government agencies…",html:`<h1 class="my-4">Budget Laws</h1>
    <div class="row mb-4">
      <div class="col-md-12">
                
            <p> The Budget and Accounting Act of 1921 created the core of the current Federal
          budget process. Before enactment of this law, there was no annual centralized budgeting in the Executive
          Branch. Federal Government agencies usually sent budget requests independently to congressional committees
          with no coordination of the various requests in formulating the Federal Government’s budget. The Budget and
          Accounting Act required the President to coordinate the budget requests for all Government agencies and to
          send a comprehensive budget to the Congress. The Congress has amended the requirements many times and portions
          of the Act are codified in Title 31, United States Code. The major laws that govern the budget process are as
          follows: </p>
        <ul class="list-group">
  
            <li class="list-group-item"> <b>Article 1, section 8, clause 1 of the Constitution</b>, which empowers the Congress
              to collect taxes. </li>
            <li class="list-group-item"> <b>Article 1, section 9, clause 7 of the Constitution</b>, which requires
              appropriations in law before money may be spent from the Treasury and the publication of a regular
              statement of the receipts and expenditures of all public money.
            </li>
            <li class="list-group-item"> <b>Antideficiency Act(codified in Chapters 13 and 15 of Title 31, United States
              Code)</b>, which prescribes rules and procedures for budget execution. </li>
            <li class="list-group-item"> <b>Balanced Budget and Emergency Deficit Control Act of 1985</b>, as amended, which
              establishes limits on discretionary spending and provides mechanisms for enforcing mandatory spending and
              discretionary spending limits. </li>
            <li class="list-group-item"> <b>Chapter 11 of Title 31, United States Code</b>, which prescribes procedures for
              submission of the President’s budget and information to be contained in it. </li>

            <li class="list-group-item"> <b>Congressional Budget and Impoundment Control Act of 1974 (Public Law 93–344)</b>,
              as amended. This Act comprises the: </li>
          
              <li class="list-group-item"> a: Congressional Budget Act of 1974, as amended, which prescribes the
                congressional budget process; and</li>
              <li class="list-group-item"> b: Impoundment Control Act of 1974, as amended, which controls certain aspects
                of budget execution. </li>
              <li class="list-group-item"> c: Federal Credit Reform Act of 1990, as amended (2 USC 661–661f), which the
                Budget Enforcement Act of 1990 included as an amendment to the Congressional Budget Act to prescribe the
                budget treatment for Federal credit programs. </li>

      
            <li class="list-group-item"> <b>Chapter 31 of Title 31, United States Code</b>, which provides the authority for
              the Secretary of the Treasury to issue debt to finance the deficit and establishes a statutory limit on
              the level of the debt. </li>
            <li class="list-group-item"> <b>Chapter 33 of Title 31, United States Code</b>, which establishes the Department of
              the Treasury as the authority for making disbursements of public funds, with the authority to delegate
              that authority to executive agencies in the interests of economy and efficiency.</li>

            <li class="list-group-item"> <b>Government Performance and Results Act of 1993 (Public Law 103–62</b>, as amended)
              which emphasizes managing for results. It requires agencies to prepare strategic plans, annual performance
              plans, and annual performance reports. </li>
            <li class="list-group-item"> <b>Statutory Pay-As-You-Go Act of 2010</b>, which establishes a budget enforcement
              mechanism generally requiring that direct spending and revenue legislation enacted into law not increase
              the deficit. </li>
        </ul>
        <br>
        <p> The Federal Government uses three primary enforcement mechanisms to control
          revenues, spending, and deficits. </p>
        <ul class="list-group">
          <li class="list-group-item"> 1. The Statutory Pay-As-You-Go Act of 2010, enacted on February 12, 2010,
            reestablished a statutory procedure to enforce a rule of deficit neutrality on new revenue and mandatory
            spending legislation. </li>
          <li class="list-group-item"> 2. The Budget Control Act of 2011 (BCA), enacted on August 2, 2011, amended the
            Balanced Budget and Emergency Deficit Control Act of 1985 (BBEDCA) by reinstating limits (“caps”) on the
            amount of discretionary budget authority that can be provided through the annual appropriations process.
          </li>
          <li class="list-group-item"> 3. The BCA also created a Joint Select Committee on Deficit Reduction that was
            instructed to develop a bill to reduce the Federal deficit by at least $1.5 trillion over a 10year period,
            and imposed automatic spending cuts to achieve $1.2 trillion of deficit reduction over nine years after
            the Joint Committee process failed to achieve its deficit reduction goal. </li>

        </ul>
        <br>
        <img id="imageR" src="/assets/img/budgetlaws.jpg" alt="Budget Matter visual">

        <p> Government agencies may not spend or obligate more than the Congress has
          appropriated, and they may use funds only for purposes specified in law. The Antideficiency Act prohibits them
          from spending or obligating the Government to spend in advance or in excess of an appropriation, unless
          specific authority to do so has been provided in law. Additionally, the Antideficiency Act requires the
          President to apportion the budgetary resources available for most executive branch agencies. The President has
          delegated this authority to OMB. Some apportionments are by time periods (usually by quarter of the fiscal
          year), some are by projects or activities, and others are by a combination of both. Agencies may request OMB
          to reapportion funds during the year to accommodate changing circumstances. This system helps to ensure that
          funds do not run out before the end of the fiscal year. During the budget execution phase, the Government
          sometimes finds that it needs more funding than the Congress has appropriated for the fiscal year because of
          unanticipated circumstances. For example, more might be needed to respond to a severe natural disaster. Under
          such circumstances, the Congress may enact a supplemental appropriation.</p>
        <p> On the other hand, the President may propose to reduce a previously enacted
          appropriation, through a “rescission” or “cancellation” of those funds. How the President proposes this
          reduction determines whether it is considered a rescission or a cancellation. A rescission is a reduction in
          previously enacted appropriations proposed following the requirements of the Impoundment Control Act (ICA).
          The ICA allows the President, using the specific authorities in that Act, to transmit a “special message” to
          the Congress to inform them of these proposed rescissions, at which time the funding can be withheld from
          obligation for up to 45 days on the OMB approved apportionment. Agencies are instructed not to withhold funds
          without the prior approval of OMB. If the Congress does not act to rescind these funds within the 45-day
          period, the funds are made available for obligation. In May of 2018, the President proposed the largest single
          ICA rescissions package by sending a request to permanently reduce approximately $15 billion of budget
          authority. </p>
        <p> The President can also propose reductions to previously enacted appropriations
          outside of the ICA; in these cases, these reductions are referred to as cancellations. Cancellation proposals
          are not subject to the requirements and procedures of the ICA and amounts cannot be withheld from obligation.
          The 2021 President’s Budget includes $18 billion in proposed cancellations. </p>
      </div>
    </div>`},{route:"/portfolio-1-col",legacyPath:"portfolio-1-col.html",title:"Portfolio",description:"Scenario-driven self-balance tool to plan and monitor Federal budget exeuction.",html:`<h1 class="mt-4 mb-3">Portfolio
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item active">Projects</li>
    </ol>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/project7/project7">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project7/Spend%20Plan%20Demo.gif" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Federal Budget Spend Plan Model</h3>
        <p>Scenario-driven self-balance tool to plan and monitor Federal budget exeuction.</p>
        <a class="btn btn-primary" href="/project7/project7">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/tableau-1-citibike">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/tableau-1-citibike.JPG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Tableau Citi Bike Usage Analysis</h3>
        <p>Show the usage of bike sharing program in New York City. Visulize the riding routes, the geographic locations
          and route, busiest bike stations. </p>
        <a class="btn btn-primary" href="/tableau-1-citibike">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/project10/project10">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project10/book.gif" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Python - Office Excel 1</h3>
        <p>Use Python to Combine Excel Workbooks and/or Worksheets.
        </p>
        <a class="btn btn-primary" href="/project10/project10">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/project11/project11">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project11/compare.gif" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Python - Office Excel 2</h3>
        <p>Use Python to Compare Data and Changes in Excel Workbook. </p>
        <a class="btn btn-primary" href="/project11/project11">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>
    
    <div class="row">
      <div class="col-md-7">
        <a href="/project9/project9">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project9/vba.jpg" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>VBA Code Examples for Excel</h3>
        <p>Use VBA functionalities to conduct data comparison, mining, analysis. </p>
        <a class="btn btn-primary" href="/project9/project9">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    
    <hr>
    
    <div class="row">

      <div class="col-md-7">
        <a href="/project13/project13">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project13/project13.PNG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Federal Spending Dashboard</h3>
        <p>Tableau based dashboard to track federal budget and spending.</p>
        <a class="btn btn-primary" href="/project13/project13">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    
    <hr>
    
    <div class="row">

      <div class="col-md-7">
        <a href="/project14/project14">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project14/project14.PNG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Budget Execution Dashboard</h3>
        <p>Tableau based dashboard to track and compare budget execution.</p>
        <a class="btn btn-primary" href="/project14/project14">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    
    <hr>
    
    <div class="row">

      <div class="col-md-7">
        <a href="/project15/project15">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project15/sqlalchemy.png" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>SQL Data, Python</h3>
        <p>SQL Data, Python Data Analysis &amp; Visualization</p>
        <a class="btn btn-primary" href="/project15/project15">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    
    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/project12/project12">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project12/text.gif" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Use Python to Analyze Text</h3>
        <p>Perform Sentiment Analysis on Text. </p>
        <a class="btn btn-primary" href="/project12/project12">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>
    
    <div class="row">
      <div class="col-md-7">
        <a href="/tableau-2-fed-avg-salary">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/tableau-2-fed-avg-salary.JPG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Tableau Federal Employee Average Salary</h3>
        <p>Show trend and distribution of Federal employment and it’s salary levels by geographic locations, education
          levels, and agencies. </p>
        <p>Note: based on released FY 2018 data that is available to public.</p>

        <a class="btn btn-primary" href="/tableau-2-fed-avg-salary">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/tableau-3-covid19">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/tableau-3-covid19.JPG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>COVID19 Dashboard</h3>
        <p>This visualization shows COVID19 cases and deaths, and detail is showed at state and county level. </p>
        <a class="btn btn-primary" href="/tableau-3-covid19">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">

      <div class="col-md-7">
        <a href="/project5/project5">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/project5.PNG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>The Power of Plots</h3>
        <p>Apply Python Matplotlib to a real-world situation</p>
        <a class="btn btn-primary" href="/project5/project5">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">

      <div class="col-md-7">
        <a href="/project4/project4">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/project4.PNG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Belly Button Biodiversity Dashboard</h3>
        <p>Use JavaScript, CSS, D3, Plotly to build interactive dashboard</p>
        <a class="btn btn-primary" href="/project4/project4">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>
    
    <div class="row">

      <div class="col-md-7">
        <a href="/project6/project6">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project6/project6.PNG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Machine Learning in Python</h3>
        <p>Use Python Machine Learning to conduct analysis to explore impacting factors</p>
        <a class="btn btn-primary" href="/project6/project6">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">

      <div class="col-md-7">
        <a href="/project8/project8">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/project8/project8.PNG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Python, JS D3, and Leaflet GeoMap </h3>
        <p>Use Python, JavaScript, D3, and Leaflet to conduct data mining, create map object, add data point, layers,
          pop-up, legend, and interactivity to the webpage.</p>
        <a class="btn btn-primary" href="/project8/project8">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    
    <hr>`},{route:"/portfolio-p-2",legacyPath:"portfolio-p-2.html",title:"Portfolio 2",description:"Coming Soon",html:`<h1 class="mt-4 mb-3">Portfolio 2
      
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item active">Portfolio 1</li>
    </ol>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/tableau-1-citibike">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/tableau-1-citibike.JPG" alt="Budget Matter visual">
        </a></div><a href="/tableau-1-citibike">
      </a><div class="col-md-5"><a href="/tableau-1-citibike">
        <h3>Tableau Citi Bike Usage Analysis</h3>
        <p>Coming Soon</p>
        </a><a class="btn btn-primary" href="/tableau-1-citibike">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/tableau-2-fed-avg-salary">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/tableau-2-fed-avg-salary.JPG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Tableau Federal Employee Average Salary</h3>
        <p>Coming Soon</p>
        <a class="btn btn-primary" href="/tableau-2-fed-avg-salary">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="#">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/ComingSoon.jpg" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Project Three</h3>
        <p>Coming Soon</p>
        <a class="btn btn-primary" href="#">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">

      <div class="col-md-7">
        <a href="#">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/ComingSoon.jpg" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Project Four</h3>
        <p>Coming Soon</p>
        <a class="btn btn-primary" href="#">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/tableau-2-fed-avg-salary">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/tableau-2-fed-avg-salary.JPG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Tableau Federal Employee Average Salary</h3>
        <p>Coming Soon</p>
        <a class="btn btn-primary" href="/tableau-2-fed-avg-salary">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    

    <hr>

    
    <div class="row">
      <div class="col-md-7">
        <a href="/tableau-2-fed-avg-salary">
          <img class="img-fluid rounded mb-3 mb-md-0" src="/assets/img/tableau-2-fed-avg-salary.JPG" alt="Budget Matter visual">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Tableau Federal Employee Average Salary</h3>
        <p>Coming Soon</p>
        <a class="btn btn-primary" href="/tableau-2-fed-avg-salary">View Project
          <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
    


    <hr>

    
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">«</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>`},{route:"/process",legacyPath:"process.html",title:"Budget Process",description:"The Budget and Accounting Act requires the President to submit a budget. Federal budget process provides the means for the President and the Congress to decide how much money to spend, what to spend it on, and how to…",html:`<h1 class="mt-4 mb-3">Budget Process
      
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item active">Budget Process</li>
    </ol>

    
    <img id="imageL" src="/assets/img/budgetprocessoverview.PNG" alt="Budget Matter visual">
    <p>The Budget and Accounting Act requires the President to submit a budget. Federal budget
      process provides the means for the President and the Congress to decide how much money to spend, what to spend it
      on, and how to raise the money they have decided to spend. Through federal budget process, they determine the
      allocation of resources among the agencies of the Federal Government and between the Federal Government and the
      private sector. Federal budget process focuses primarily on dollars, but it also allocates other resources, such
      as Federal employment. Federal budgeting is a cyclical activity that begins with the formulation of the
      President’s annual budget and concludes with the audit and review of execution outcomes and performance.</p>
    <p> Budgeting for the federal government is a complex process with very intensive
      activities and actions conducted by various levels of inputs and coordinations, and active participation of the
      President and its executive offices, congressional leaders and their staff members. The process related to a
      single fiscal year budget usually stretch over a period of two and-a-half calendar years (or longer). The three
      main stages are:I. Formulation of the President’s Budget; II. Congressional Enactment Process; III. Execution of
      Enacted Budget. </p>
    <p> Federal agencies further break down those three stages into more detail processes to
      guide them through. </p>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <p class="card-text"><b><a href="/formulation">I. Formulation of the President’s Budget</a></b></p>
            <a href="/f1_planning">1. Planning</a>
            <br><a href="/f2_guidance">2. Guidance</a>
            <br><a href="/f3_internal">3. Internal Budget Reuqest</a>
            <br><a href="/f4_decision">4. Internal Budget Review and Decision</a>
            <br><a href="/f5_submission">5. Submission to OMB</a>
            <br><a href="/f6_ombdecision">6. OMB Decision and Reconciliation</a>
            <br><a href="/f7_omb2congress">7. PB Submission to Congress</a>
          </div>
          <div class="card-footer">
            <a href="/formulation" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <p class="card-text"><a href="/enactment"><b>II. Congressional Enactment Process</b></a></p>
             <a href="/e8_resolution">8. Budget Resolution</a>
             <br><a href="/e9_authorization">9. Budget Authorization</a>
            <br><a href="/e10_appropriation">10. Budget Appropriation</a>
            <br><a href="/e11_hearing">11. Congress Hearing</a>
            <br><a href="/e12_q_a">12. Questions for the Record</a>
            <br> <a href="/e13_appeal">13. Budget Appeal</a>
            <br><a href="/e14_cr">14. Enactment Issues</a>
            <br><a href="/e15_oversight">15. Oversight and Reconciliation</a>
          </div>
          <div class="card-footer">
            <a href="/enactment" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <p class="card-text"><a href="/execution"><b>III. Execution of Enacted Budget</b></a></p>
            <a href="/b16_apportionments">16. Budget Apportionment</a>
            <br><a href="/b17_report">17. Reports on Budget Execution</a>
            <br><a href="/b18_rescission">18. Rescissions and Deferrals</a>
            <br><a href="/b19_outlay">19. Monitoring Federal Outlays</a>
            <br><a href="/b20_finplan">20. Financial Plan</a>
            <br><a href="/b21_reprogram">21. Reprogramming</a>
            <br><a href="/b22_directive">22. Congressional Directive</a>
          </div>
          <div class="card-footer">
            <a href="/execution" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 portfolio-item">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">
              <a>Chart 1: DoD Budget Process Map</a>
            </h4>
          </div>
          <img class="img-fluid rounded" src="/assets/img/DAU%20DoD%20Budget%20PRocess%20Map.PNG" alt="Budget Matter visual">
        </div>
      </div>
      <div class="col-lg-6 portfolio-item">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">
              <a>Chart 2: NASA Budget Process Map</a>
            </h4>
          </div>
          <img class="img-fluid rounded" src="/assets/img/NASA%20Budget%20Process%20Map.png" alt="Budget Matter visual">
        </div>
      </div>
    </div>
    <p>The key players and their core functions during budget process are: </p>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Federal Agencies</h4>
          <div class="card-body">
            <p class="card-text">Federal Agencies formulate and present budget requests to acquire needed resources, and execute their budget to
              accomplish statutory mission requirements. The process can start as early as 24 months
              prior to the execution year, and DoD uses PPBE to guide through the process since 1962.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">OMB</h4>
          <div class="card-body">
            <p class="card-text">OMB publishes and updates policy annually, sets up the control for federal agencies,
              consolidates and releases the President Budget, works with Congress during the enactment process,
              provides policy, and distributes apportionment for execution.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Congress</h4>
          <div class="card-body">
            <p class="card-text">Congressional Enactment Process starts in Feb, and passes Budget Resolution,
              Authorization and Appropriation Bill before Fiscal Years starts on Oct 1. If appropriation bills are
              failed to pass, federal agencies shut down or operate under CR. </p>
          </div>
        </div>
      </div>
    </div>
    <p>As the budget is being considered, federal agencies must deal with three different
      fiscal years at the same time: </p>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-20">
          <div class="card-body">
            <p class="card-text"><b>Current Fiscal Year Budget Execution and Review</b></p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-200">
          <div class="card-body">
            <p class="card-text"><b>Upcoming Fiscal Year Budget Formulation and Enactment</b></p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <p class="card-text"><b>Future Year(s) Budget Planning</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 portfolio-item">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">
              <a>Chart 3: OMB Budget Schedule</a>
            </h4>
          </div>
          <img class="img-fluid rounded" src="/assets/img/OMB%20Budget%20Schedule.PNG" alt="Budget Matter visual">
        </div>
      </div>
      <div class="col-lg-6 portfolio-item">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">
              <a>Chart 4: DoD Resouces Allocation Process</a>
            </h4>
          </div>
          <img class="img-fluid rounded" src="/assets/img/DAU%20DoD%20Budget%20Cycle.png" alt="Budget Matter visual">
        </div>
      </div>
    </div>
    <p></p>`},{route:"/project10/project10",legacyPath:"project10/project10.html",title:"Use Python to Combine Excel Files and/or Worksheets",description:"The manual process of combing data from multiple sources can be very painful, time consuming, difficult to change. Using Python and Pandas can automate the process to parse multiple Excel files/worksheets, combine the…",html:`<h1 class="mt-4 mb-3">Use Python to Combine Excel Files and/or Worksheets 
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Python Excel</li>
    </ol>

    <p> The manual process of combing data from multiple sources can be very painful, time
      consuming, difficult to change. Using Python and Pandas can automate the process to parse multiple Excel
      files/worksheets, combine the data, conduct analysis, and export to new single file. It will dramatically improve
      the quality of final product and increase the operation efficiency. </p>
    <p> <b>Chart 1a: Combing Multiple Excel Workbooks Animation </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project10/book.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 1b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project10/book1.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project10/book2.PNG" alt="Budget Matter visual"></a>

    <p> <b>Chart 2a: Combing Multiple Excel Worksheets Animation </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project10/sheet.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 2b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project10/sheet1.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project10/sheet2.PNG" alt="Budget Matter visual"></a>`},{route:"/project11/project11",legacyPath:"project11/project11.html",title:"Use Python to Compare Data and Identify Changes in Excel Files",description:"The manual process of comparing data between two Excel files can be very painful, time consuming, sometime impossible due to the complexity and volumes of data. Using Python and Pandas can automate the process to parse…",html:`<h1 class="mt-4 mb-3">Use Python to Compare Data and Identify Changes in Excel Files 
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Python Excel</li>
    </ol>

    <p> The manual process of comparing data between two Excel files can be very painful, time
      consuming, sometime impossible due to the complexity and volumes of data. Using Python and Pandas can
      automate the process to parse multiple Excel files/worksheets, compare and display data, conduct analysis, and
      export to new single file. It will dramatically improve the quality of final product and increase the operation
      efficiency. </p>
    <p> <b>Chart 1a: Comparing Data and Identifying Changes between Excel Workbooks Animation </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project11/compare.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 1b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project11/compare1.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project11/compare2.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project11/compare3.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project11/compare4.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project11/compare5.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project11/compare6.PNG" alt="Budget Matter visual"></a>`},{route:"/project12/project12",legacyPath:"project12/project12.html",title:"Use Python to Analyze Text",description:"This example is meant to provide a cursory look at the world mood according to the Twitter profiles of news agencies. In essence, the script allows one to quickly perform a sentiment analysis on the most recent tweets…",html:`<h1 class="mt-4 mb-3">Use Python to Analyze Text
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Python Text</li>
    </ol>

    <p> This example is meant to provide a cursory look at the world mood
      according to the Twitter profiles of news agencies. In essence, the script allows one to quickly perform a
      sentiment analysis on the most recent tweets of any given Twitter accounts and plot the results. Notable libraries
      used to complete this application include: Matplotlib, Pandas, Tweepy, VADER Sentiment Analysis, and
      Seaborn.</p>
      <p> Sentiment
      analysis is simply the process of working out (statistically) whether a piece of text is positive, negative or
      neutral. The majority of sentiment analysis approaches take one of two forms: polarity-based, where pieces of
      texts are classified as either positive or negative, or valence-based, where the intensity of the sentiment is
      taken into account. </p>
      <p> VADER (Valence Aware
      Dictionary and sEntiment Reasoner) is a lexicon and rule-based
      sentiment analysis tool that is specifically attuned to sentiments expressed in social media. </p>
    <p> <b>Chart 1a: Use Pyton to Analyze Text</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 1b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text1.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text2.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text3.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text4.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text5.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text6.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project12/text7.PNG" alt="Budget Matter visual"></a>`},{route:"/project13/project13",legacyPath:"project13/project13.html",title:"Federal Government Spending Dashboard",description:"Tableau based dashboard to track federal budget and spending.",html:`<h1 class="mt-4 mb-3">Federal Government Spending Dashboard
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Tableau, Budget</li>
    </ol>
    <p> Tableau based dashboard to track federal budget and spending.</p>
    <div class="tableauPlaceholder" id="viz1593016383117"><object class="tableauViz">
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F">
        <param name="embed_code_version" value="3">
        <param name="site_root" value="">
        <param name="name" value="FederalGovernmentSpendingDashboard/Dashboard1">
        <param name="tabs" value="no">
        <param name="toolbar" value="yes">
        <param name="static_image" value="https://public.tableau.com/static/images/Fe/FederalGovernmentSpendingDashboard/Dashboard1/1.png">
        <param name="animate_transition" value="yes">
        <param name="display_static_image" value="yes">
        <param name="display_spinner" value="yes">
        <param name="display_overlay" value="yes">
        <param name="display_count" value="yes">
        <param name="language" value="en"></object></div>`},{route:"/project14/project14",legacyPath:"project14/project14.html",title:"Federal Budget Execution Dashboard Template",description:"Tableau based dashboard to track and compare budget execution.",html:`<h1 class="mt-4 mb-3">Federal Budget Execution Dashboard Template
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Tableau, Budget</li>
    </ol>

    <p> Tableau based dashboard to track and compare budget execution.</p>
    <div class="tableauPlaceholder" id="viz1593016636003"><object class="tableauViz">
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F">
        <param name="embed_code_version" value="3">
        <param name="site_root" value="">
        <param name="name" value="Budget_15927103644200/Dashboard1">
        <param name="tabs" value="no">
        <param name="toolbar" value="yes">
        <param name="static_image" value="https://public.tableau.com/static/images/Bu/Budget_15927103644200/Dashboard1/1.png">
        <param name="animate_transition" value="yes">
        <param name="display_static_image" value="yes">
        <param name="display_spinner" value="yes">
        <param name="display_overlay" value="yes">
        <param name="display_count" value="yes">
        <param name="language" value="en"></object></div>`},{route:"/project15/project15",legacyPath:"project15/project15.html",title:"SQL Data, Python Data Analysis & Visualization",description:"Basic Steps:",html:`<h1 class="mt-4 mb-3">SQL Data, Python Data Analysis &amp; Visualization
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Python, SQLAlchemy</li>
    </ol>
    <p> Basic Steps: </p>
    <ul class="list-group">
      <li class="list-group-item">1). Use SQLAlchemy to retrive data from SQL data;</li>
      <li class="list-group-item">2). Use Pandas to perform data analysis;</li>
      <li class="list-group-item">3). Visualize the result with Matplotlib.
      </li>
    </ul>
    <br>
    <p> <b>Chart 1b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db1.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db2.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db3.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db4.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db5.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db6.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db7.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db8.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project15/db9.PNG" alt="Budget Matter visual"></a>`},{route:"/project4/project4",legacyPath:"project4/project4.html",title:"Belly Button Biodiversity Dashboard",description:"Use JavaScript, CSS, D3, Plotly to build interactive dashboard",html:`<h1 class="my-4">Belly Button Biodiversity Dashboard</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">JS CSS D3</li>
    </ol>
    <p>Use JavaScript, CSS, D3, Plotly to build interactive dashboard</p>
    <hr>
    <div class="row">
      <div class="col-md-2">
        <div class="well">
          <h5>Test Subject ID:</h5>
          <select id="selDataset" onchange="optionChanged(this.value)"></select>
        </div>
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Demographic Info</h3>
          </div>
          <div id="sample-metadata" class="panel-body"></div>
        </div>
      </div>
      <div class="col-md-5">
        <div id="bar"></div>
      </div>
      <div class="col-md-5">
        <div id="gauge"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div id="bubble"></div>
      </div>
    </div>`},{route:"/project5/project5",legacyPath:"project5/project5.html",title:"The Power of Plots",description:"Apply Python Matplotlib to a real-world situation",html:`<h1 class="my-4">The Power of Plots</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Python Matplotlib</li>
    </ol>
    <p>Apply Python Matplotlib to a real-world situation</p>
    <hr>
    <div class="inner_cell">
      <div class="text_cell_render border-box-sizing rendered_html">
        <h4>Analysis</h4>
        <ul>
          <li>Overall, it is clear that Capomulin outperforms all other treatment options in the screen.</li>
          <li>Capomulin was the only treatment to reduce tumor volume. It held to a 19% reduction in tumor volume
            over the course of trial, whereas all other drugs were correlated with an increase in tumor volume by
            roughly 40-50%.</li>
          <li>Capomulin greatly limited the spread of the tumor compared to other treatment options. By study end,
            the average mouse on Capomulin had only 1 new metastatic site, as opposed to the average 2-3 found in
            mice of other treatment options.</li>
          <li>Lastly, mice on the Capomulin treatment had the highest survival rate of any treatment in the
            screen. Over 90% of mice treated by Capomulin survived the full duration of the trial, compared to
            only 35-45% of mice on other treatment options. </li>
        </ul>

      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item"> <img src="/assets/project5/code1.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code2.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code3.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code4.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code5.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code6.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code7.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code8.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code9.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code10.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project5/code11.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
    </ul>`},{route:"/project5/Project5 BU",legacyPath:"project5/Project5 BU.html",title:"Pymaceuticals Inc.¶",description:"100 rows × 3 columns",html:`<div tabindex="-1" id="notebook" class="border-box-sizing">
      <div class="container" id="notebook-container">

        <div class="cell border-box-sizing text_cell rendered">
          <div class="prompt input_prompt">
          </div>
          <div class="inner_cell">
            <div class="text_cell_render border-box-sizing rendered_html">
              <h1 id="Pymaceuticals-Inc.">Pymaceuticals Inc.<a class="anchor-link" href="#Pymaceuticals-Inc.">¶</a>
              </h1>
              <hr>
              <h3 id="Analysis">Analysis<a class="anchor-link" href="#Analysis">¶</a></h3>
              <ul>
                <li>Overall, it is clear that Capomulin outperforms all other treatment options in the screen.</li>
                <li>Capomulin was the only treatment to reduce tumor volume. It held to a 19% reduction in tumor volume
                  over the course of trial, whereas all other drugs were correlated with an increase in tumor volume by
                  roughly 40-50%.</li>
                <li>Capomulin greatly limited the spread of the tumor compared to other treatment options. By study end,
                  the average mouse on Capomulin had only 1 new metastatic site, as opposed to the average 2-3 found in
                  mice of other treatment options.</li>
                <li>Lastly, mice on the Capomulin treatment had the highest survival rate of any treatment in the
                  screen. Over 90% of mice treated by Capomulin survived the full duration of the trial, compared to
                  only 35-45% of mice on other treatment options. </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[1]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Dependencies and Setup</span>
<span class="o">%</span><span class="k">matplotlib</span> inline
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>

<span class="c1"># Hide warning messages in notebook</span>
<span class="kn">import</span> <span class="nn">warnings</span>
<span class="n">warnings</span><span class="o">.</span><span class="n">filterwarnings</span><span class="p">(</span><span class="s1">'ignore'</span><span class="p">)</span>

<span class="c1"># File to Load (Remember to Change These)</span>
<span class="n">mouse_drug_data_to_load</span> <span class="o">=</span> <span class="s2">"data/mouse_drug_data.csv"</span>
<span class="n">clinical_trial_data_to_load</span> <span class="o">=</span> <span class="s2">"data/clinicaltrial_data.csv"</span>

<span class="c1"># Read the Mouse and Drug Data and the Clinical Trial Data</span>
<span class="n">mouse_drug_data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">mouse_drug_data_to_load</span><span class="p">)</span>
<span class="n">clinical_data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="n">clinical_trial_data_to_load</span><span class="p">)</span>

<span class="c1"># Combine the data into a single dataset</span>
<span class="n">clinical_data_complete</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">merge</span><span class="p">(</span><span class="n">clinical_data</span><span class="p">,</span> <span class="n">mouse_drug_data</span><span class="p">,</span> <span class="n">how</span><span class="o">=</span><span class="s2">"left"</span><span class="p">,</span> <span class="n">on</span><span class="o">=</span><span class="p">[</span><span class="s2">"Mouse ID"</span><span class="p">,</span> <span class="s2">"Mouse ID"</span><span class="p">])</span>

<span class="c1"># Display the data table for preview</span>
<span class="n">clinical_data_complete</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[1]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Mouse ID</th>
                          <th>Timepoint</th>
                          <th>Tumor Volume (mm3)</th>
                          <th>Metastatic Sites</th>
                          <th>Drug</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>b128</td>
                          <td>0</td>
                          <td>45.0</td>
                          <td>0</td>
                          <td>Capomulin</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td>f932</td>
                          <td>0</td>
                          <td>45.0</td>
                          <td>0</td>
                          <td>Ketapril</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>g107</td>
                          <td>0</td>
                          <td>45.0</td>
                          <td>0</td>
                          <td>Ketapril</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>a457</td>
                          <td>0</td>
                          <td>45.0</td>
                          <td>0</td>
                          <td>Ketapril</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>c819</td>
                          <td>0</td>
                          <td>45.0</td>
                          <td>0</td>
                          <td>Ketapril</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing text_cell rendered">
          <div class="prompt input_prompt">
          </div>
          <div class="inner_cell">
            <div class="text_cell_render border-box-sizing rendered_html">
              <h2 id="Tumor-Response-to-Treatment">Tumor Response to Treatment<a class="anchor-link" href="#Tumor-Response-to-Treatment">¶</a></h2>
            </div>
          </div>
        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[2]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Store the Mean Tumor Volume Data Grouped by Drug and Timepoint </span>
<span class="n">tumor_vols_mean</span> <span class="o">=</span> <span class="n">clinical_data_complete</span><span class="o">.</span><span class="n">groupby</span><span class="p">([</span><span class="s2">"Drug"</span><span class="p">,</span> <span class="s2">"Timepoint"</span><span class="p">])</span><span class="o">.</span><span class="n">mean</span><span class="p">()[</span><span class="s2">"Tumor Volume (mm3)"</span><span class="p">]</span>

<span class="c1"># Convert to DataFrame</span>
<span class="n">tumor_vols_mean</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">tumor_vols_mean</span><span class="p">)</span>

<span class="c1"># Flatten the column headings</span>
<span class="n">tumor_vols_mean</span> <span class="o">=</span> <span class="n">tumor_vols_mean</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>

<span class="c1"># Preview DataFrame</span>
<span class="n">tumor_vols_mean</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[2]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Drug</th>
                          <th>Timepoint</th>
                          <th>Tumor Volume (mm3)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>Capomulin</td>
                          <td>0</td>
                          <td>45.000000</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td>Capomulin</td>
                          <td>5</td>
                          <td>44.266086</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Capomulin</td>
                          <td>10</td>
                          <td>43.084291</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Capomulin</td>
                          <td>15</td>
                          <td>42.064317</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Capomulin</td>
                          <td>20</td>
                          <td>40.716325</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>Capomulin</td>
                          <td>25</td>
                          <td>39.939528</td>
                        </tr>
                        <tr>
                          <th>6</th>
                          <td>Capomulin</td>
                          <td>30</td>
                          <td>38.769339</td>
                        </tr>
                        <tr>
                          <th>7</th>
                          <td>Capomulin</td>
                          <td>35</td>
                          <td>37.816839</td>
                        </tr>
                        <tr>
                          <th>8</th>
                          <td>Capomulin</td>
                          <td>40</td>
                          <td>36.958001</td>
                        </tr>
                        <tr>
                          <th>9</th>
                          <td>Capomulin</td>
                          <td>45</td>
                          <td>36.236114</td>
                        </tr>
                        <tr>
                          <th>10</th>
                          <td>Ceftamin</td>
                          <td>0</td>
                          <td>45.000000</td>
                        </tr>
                        <tr>
                          <th>11</th>
                          <td>Ceftamin</td>
                          <td>5</td>
                          <td>46.503051</td>
                        </tr>
                        <tr>
                          <th>12</th>
                          <td>Ceftamin</td>
                          <td>10</td>
                          <td>48.285125</td>
                        </tr>
                        <tr>
                          <th>13</th>
                          <td>Ceftamin</td>
                          <td>15</td>
                          <td>50.094055</td>
                        </tr>
                        <tr>
                          <th>14</th>
                          <td>Ceftamin</td>
                          <td>20</td>
                          <td>52.157049</td>
                        </tr>
                        <tr>
                          <th>15</th>
                          <td>Ceftamin</td>
                          <td>25</td>
                          <td>54.287674</td>
                        </tr>
                        <tr>
                          <th>16</th>
                          <td>Ceftamin</td>
                          <td>30</td>
                          <td>56.769517</td>
                        </tr>
                        <tr>
                          <th>17</th>
                          <td>Ceftamin</td>
                          <td>35</td>
                          <td>58.827548</td>
                        </tr>
                        <tr>
                          <th>18</th>
                          <td>Ceftamin</td>
                          <td>40</td>
                          <td>61.467895</td>
                        </tr>
                        <tr>
                          <th>19</th>
                          <td>Ceftamin</td>
                          <td>45</td>
                          <td>64.132421</td>
                        </tr>
                        <tr>
                          <th>20</th>
                          <td>Infubinol</td>
                          <td>0</td>
                          <td>45.000000</td>
                        </tr>
                        <tr>
                          <th>21</th>
                          <td>Infubinol</td>
                          <td>5</td>
                          <td>47.062001</td>
                        </tr>
                        <tr>
                          <th>22</th>
                          <td>Infubinol</td>
                          <td>10</td>
                          <td>49.403909</td>
                        </tr>
                        <tr>
                          <th>23</th>
                          <td>Infubinol</td>
                          <td>15</td>
                          <td>51.296397</td>
                        </tr>
                        <tr>
                          <th>24</th>
                          <td>Infubinol</td>
                          <td>20</td>
                          <td>53.197691</td>
                        </tr>
                        <tr>
                          <th>25</th>
                          <td>Infubinol</td>
                          <td>25</td>
                          <td>55.715252</td>
                        </tr>
                        <tr>
                          <th>26</th>
                          <td>Infubinol</td>
                          <td>30</td>
                          <td>58.299397</td>
                        </tr>
                        <tr>
                          <th>27</th>
                          <td>Infubinol</td>
                          <td>35</td>
                          <td>60.742461</td>
                        </tr>
                        <tr>
                          <th>28</th>
                          <td>Infubinol</td>
                          <td>40</td>
                          <td>63.162824</td>
                        </tr>
                        <tr>
                          <th>29</th>
                          <td>Infubinol</td>
                          <td>45</td>
                          <td>65.755562</td>
                        </tr>
                        <tr>
                          <th>...</th>
                          <td>...</td>
                          <td>...</td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <th>70</th>
                          <td>Ramicane</td>
                          <td>0</td>
                          <td>45.000000</td>
                        </tr>
                        <tr>
                          <th>71</th>
                          <td>Ramicane</td>
                          <td>5</td>
                          <td>43.944859</td>
                        </tr>
                        <tr>
                          <th>72</th>
                          <td>Ramicane</td>
                          <td>10</td>
                          <td>42.531957</td>
                        </tr>
                        <tr>
                          <th>73</th>
                          <td>Ramicane</td>
                          <td>15</td>
                          <td>41.495061</td>
                        </tr>
                        <tr>
                          <th>74</th>
                          <td>Ramicane</td>
                          <td>20</td>
                          <td>40.238325</td>
                        </tr>
                        <tr>
                          <th>75</th>
                          <td>Ramicane</td>
                          <td>25</td>
                          <td>38.974300</td>
                        </tr>
                        <tr>
                          <th>76</th>
                          <td>Ramicane</td>
                          <td>30</td>
                          <td>38.703137</td>
                        </tr>
                        <tr>
                          <th>77</th>
                          <td>Ramicane</td>
                          <td>35</td>
                          <td>37.451996</td>
                        </tr>
                        <tr>
                          <th>78</th>
                          <td>Ramicane</td>
                          <td>40</td>
                          <td>36.574081</td>
                        </tr>
                        <tr>
                          <th>79</th>
                          <td>Ramicane</td>
                          <td>45</td>
                          <td>34.955595</td>
                        </tr>
                        <tr>
                          <th>80</th>
                          <td>Stelasyn</td>
                          <td>0</td>
                          <td>45.000000</td>
                        </tr>
                        <tr>
                          <th>81</th>
                          <td>Stelasyn</td>
                          <td>5</td>
                          <td>47.527452</td>
                        </tr>
                        <tr>
                          <th>82</th>
                          <td>Stelasyn</td>
                          <td>10</td>
                          <td>49.463844</td>
                        </tr>
                        <tr>
                          <th>83</th>
                          <td>Stelasyn</td>
                          <td>15</td>
                          <td>51.529409</td>
                        </tr>
                        <tr>
                          <th>84</th>
                          <td>Stelasyn</td>
                          <td>20</td>
                          <td>54.067395</td>
                        </tr>
                        <tr>
                          <th>85</th>
                          <td>Stelasyn</td>
                          <td>25</td>
                          <td>56.166123</td>
                        </tr>
                        <tr>
                          <th>86</th>
                          <td>Stelasyn</td>
                          <td>30</td>
                          <td>59.826738</td>
                        </tr>
                        <tr>
                          <th>87</th>
                          <td>Stelasyn</td>
                          <td>35</td>
                          <td>62.440699</td>
                        </tr>
                        <tr>
                          <th>88</th>
                          <td>Stelasyn</td>
                          <td>40</td>
                          <td>65.356386</td>
                        </tr>
                        <tr>
                          <th>89</th>
                          <td>Stelasyn</td>
                          <td>45</td>
                          <td>68.438310</td>
                        </tr>
                        <tr>
                          <th>90</th>
                          <td>Zoniferol</td>
                          <td>0</td>
                          <td>45.000000</td>
                        </tr>
                        <tr>
                          <th>91</th>
                          <td>Zoniferol</td>
                          <td>5</td>
                          <td>46.851818</td>
                        </tr>
                        <tr>
                          <th>92</th>
                          <td>Zoniferol</td>
                          <td>10</td>
                          <td>48.689881</td>
                        </tr>
                        <tr>
                          <th>93</th>
                          <td>Zoniferol</td>
                          <td>15</td>
                          <td>50.779059</td>
                        </tr>
                        <tr>
                          <th>94</th>
                          <td>Zoniferol</td>
                          <td>20</td>
                          <td>53.170334</td>
                        </tr>
                        <tr>
                          <th>95</th>
                          <td>Zoniferol</td>
                          <td>25</td>
                          <td>55.432935</td>
                        </tr>
                        <tr>
                          <th>96</th>
                          <td>Zoniferol</td>
                          <td>30</td>
                          <td>57.713531</td>
                        </tr>
                        <tr>
                          <th>97</th>
                          <td>Zoniferol</td>
                          <td>35</td>
                          <td>60.089372</td>
                        </tr>
                        <tr>
                          <th>98</th>
                          <td>Zoniferol</td>
                          <td>40</td>
                          <td>62.916692</td>
                        </tr>
                        <tr>
                          <th>99</th>
                          <td>Zoniferol</td>
                          <td>45</td>
                          <td>65.960888</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>100 rows × 3 columns</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[3]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Store the Standard Error of Tumor Volumes Grouped by Drug and Timepoint</span>
<span class="n">tumor_vols_sem</span> <span class="o">=</span> <span class="n">clinical_data_complete</span><span class="o">.</span><span class="n">groupby</span><span class="p">([</span><span class="s2">"Drug"</span><span class="p">,</span> <span class="s2">"Timepoint"</span><span class="p">])</span><span class="o">.</span><span class="n">sem</span><span class="p">()[</span><span class="s2">"Tumor Volume (mm3)"</span><span class="p">]</span>

<span class="c1"># Convert to DataFrame</span>
<span class="n">tumor_vols_sem</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">tumor_vols_sem</span><span class="p">)</span>

<span class="c1"># Preview DataFrame</span>
<span class="n">tumor_vols_sem</span><span class="o">.</span><span class="n">head</span><span class="p">()</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[3]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Drug</th>
                          <th>Timepoint</th>
                          <th>Tumor Volume (mm3)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>Capomulin</td>
                          <td>0</td>
                          <td>0.000000</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td>Capomulin</td>
                          <td>5</td>
                          <td>0.448593</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Capomulin</td>
                          <td>10</td>
                          <td>0.702684</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Capomulin</td>
                          <td>15</td>
                          <td>0.838617</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Capomulin</td>
                          <td>20</td>
                          <td>0.909731</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[4]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Minor Data Munging to Re-Format the Data Frames</span>
<span class="n">tumor_vols_mean</span> <span class="o">=</span> <span class="n">tumor_vols_mean</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
<span class="n">tumor_vols_pivot_mean</span> <span class="o">=</span> <span class="n">tumor_vols_mean</span><span class="o">.</span><span class="n">pivot</span><span class="p">(</span><span class="n">index</span><span class="o">=</span><span class="s2">"Timepoint"</span><span class="p">,</span> <span class="n">columns</span><span class="o">=</span><span class="s2">"Drug"</span><span class="p">)[</span><span class="s2">"Tumor Volume (mm3)"</span><span class="p">]</span>

<span class="n">tumor_vols_sem</span> <span class="o">=</span> <span class="n">tumor_vols_sem</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
<span class="n">tumor_vols_pivot_sem</span> <span class="o">=</span> <span class="n">tumor_vols_sem</span><span class="o">.</span><span class="n">pivot</span><span class="p">(</span><span class="n">index</span><span class="o">=</span><span class="s2">"Timepoint"</span><span class="p">,</span> <span class="n">columns</span><span class="o">=</span><span class="s2">"Drug"</span><span class="p">)[</span><span class="s2">"Tumor Volume (mm3)"</span><span class="p">]</span>

<span class="c1"># Preview that Reformatting worked</span>
<span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[4]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th>Drug</th>
                          <th>Capomulin</th>
                          <th>Ceftamin</th>
                          <th>Infubinol</th>
                          <th>Ketapril</th>
                          <th>Naftisol</th>
                          <th>Placebo</th>
                          <th>Propriva</th>
                          <th>Ramicane</th>
                          <th>Stelasyn</th>
                          <th>Zoniferol</th>
                        </tr>
                        <tr>
                          <th>Timepoint</th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                          <td>45.000000</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>44.266086</td>
                          <td>46.503051</td>
                          <td>47.062001</td>
                          <td>47.389175</td>
                          <td>46.796098</td>
                          <td>47.125589</td>
                          <td>47.248967</td>
                          <td>43.944859</td>
                          <td>47.527452</td>
                          <td>46.851818</td>
                        </tr>
                        <tr>
                          <th>10</th>
                          <td>43.084291</td>
                          <td>48.285125</td>
                          <td>49.403909</td>
                          <td>49.582269</td>
                          <td>48.694210</td>
                          <td>49.423329</td>
                          <td>49.101541</td>
                          <td>42.531957</td>
                          <td>49.463844</td>
                          <td>48.689881</td>
                        </tr>
                        <tr>
                          <th>15</th>
                          <td>42.064317</td>
                          <td>50.094055</td>
                          <td>51.296397</td>
                          <td>52.399974</td>
                          <td>50.933018</td>
                          <td>51.359742</td>
                          <td>51.067318</td>
                          <td>41.495061</td>
                          <td>51.529409</td>
                          <td>50.779059</td>
                        </tr>
                        <tr>
                          <th>20</th>
                          <td>40.716325</td>
                          <td>52.157049</td>
                          <td>53.197691</td>
                          <td>54.920935</td>
                          <td>53.644087</td>
                          <td>54.364417</td>
                          <td>53.346737</td>
                          <td>40.238325</td>
                          <td>54.067395</td>
                          <td>53.170334</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[15]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Generate the Plot (with Error Bars)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">tumor_vols_pivot_mean</span><span class="p">[</span><span class="s2">"Capomulin"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">tumor_vols_pivot_sem</span><span class="p">[</span><span class="s2">"Capomulin"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"r"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"o"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">tumor_vols_pivot_mean</span><span class="p">[</span><span class="s2">"Infubinol"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">tumor_vols_pivot_sem</span><span class="p">[</span><span class="s2">"Infubinol"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"b"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"^"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">tumor_vols_pivot_mean</span><span class="p">[</span><span class="s2">"Ketapril"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">tumor_vols_pivot_sem</span><span class="p">[</span><span class="s2">"Ketapril"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"g"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"s"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">tumor_vols_pivot_mean</span><span class="p">[</span><span class="s2">"Placebo"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">tumor_vols_pivot_sem</span><span class="p">[</span><span class="s2">"Placebo"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"k"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"d"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Tumor Response to Treatment"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Tumor Volume (mm3)"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Time (Days)"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">grid</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="s1">'y'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">([</span><span class="s1">'Capomulin'</span><span class="p">,</span> <span class="s1">'Infubinol'</span><span class="p">,</span> <span class="s1">'Ketapril'</span><span class="p">,</span> <span class="s1">'Placebo'</span><span class="p">],</span><span class="n">loc</span><span class="o">=</span><span class="s2">"best"</span><span class="p">,</span> <span class="n">fontsize</span><span class="o">=</span><span class="s2">"small"</span><span class="p">,</span> <span class="n">fancybox</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>

<span class="c1"># Save the Figure</span>
<span class="n">plt</span><span class="o">.</span><span class="n">savefig</span><span class="p">(</span><span class="s2">"analysis/Fig1.png"</span><span class="p">)</span>

<span class="c1"># Show the Figure</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt"></div>




                <div class="output_png output_subarea ">
                  <img src="/assets/generated/523b11c57bb2e626.png">
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing text_cell rendered">
          <div class="prompt input_prompt">
          </div>
          <div class="inner_cell">
            <div class="text_cell_render border-box-sizing rendered_html">
              <h2 id="Metastatic-Response-to-Treatment">Metastatic Response to Treatment<a class="anchor-link" href="#Metastatic-Response-to-Treatment">¶</a></h2>
            </div>
          </div>
        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[6]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Store the Mean Met. Site Data Grouped by Drug and Timepoint </span>
<span class="n">met_sites_mean</span> <span class="o">=</span> <span class="n">clinical_data_complete</span><span class="o">.</span><span class="n">groupby</span><span class="p">([</span><span class="s2">"Drug"</span><span class="p">,</span> <span class="s2">"Timepoint"</span><span class="p">])</span><span class="o">.</span><span class="n">mean</span><span class="p">()[</span><span class="s2">"Metastatic Sites"</span><span class="p">]</span>

<span class="c1"># Convert to DataFrame</span>
<span class="n">met_sites_mean</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">met_sites_mean</span><span class="p">)</span>

<span class="c1"># Preview DataFrame</span>
<span class="n">met_sites_mean</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[6]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th>Metastatic Sites</th>
                        </tr>
                        <tr>
                          <th>Drug</th>
                          <th>Timepoint</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th rowspan="5" valign="top">Capomulin</th>
                          <th>0</th>
                          <td>0.000000</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>0.160000</td>
                        </tr>
                        <tr>
                          <th>10</th>
                          <td>0.320000</td>
                        </tr>
                        <tr>
                          <th>15</th>
                          <td>0.375000</td>
                        </tr>
                        <tr>
                          <th>20</th>
                          <td>0.652174</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[7]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Store the Standard Error associated with Met. Sites Grouped by Drug and Timepoint </span>
<span class="n">met_sites_sem</span> <span class="o">=</span> <span class="n">clinical_data_complete</span><span class="o">.</span><span class="n">groupby</span><span class="p">([</span><span class="s2">"Drug"</span><span class="p">,</span> <span class="s2">"Timepoint"</span><span class="p">])</span><span class="o">.</span><span class="n">sem</span><span class="p">()[</span><span class="s2">"Metastatic Sites"</span><span class="p">]</span>

<span class="c1"># Convert to DataFrame</span>
<span class="n">met_sites_sem</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">met_sites_sem</span><span class="p">)</span>

<span class="c1"># Preview DataFrame</span>
<span class="n">met_sites_sem</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[7]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th>Metastatic Sites</th>
                        </tr>
                        <tr>
                          <th>Drug</th>
                          <th>Timepoint</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th rowspan="5" valign="top">Capomulin</th>
                          <th>0</th>
                          <td>0.000000</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>0.074833</td>
                        </tr>
                        <tr>
                          <th>10</th>
                          <td>0.125433</td>
                        </tr>
                        <tr>
                          <th>15</th>
                          <td>0.132048</td>
                        </tr>
                        <tr>
                          <th>20</th>
                          <td>0.161621</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[8]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Minor Data Munging to Re-Format the Data Frames</span>
<span class="n">met_sites_mean</span> <span class="o">=</span> <span class="n">met_sites_mean</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
<span class="n">met_sites_pivot_mean</span> <span class="o">=</span> <span class="n">met_sites_mean</span><span class="o">.</span><span class="n">pivot</span><span class="p">(</span><span class="n">index</span><span class="o">=</span><span class="s2">"Timepoint"</span><span class="p">,</span> <span class="n">columns</span><span class="o">=</span><span class="s2">"Drug"</span><span class="p">)[</span><span class="s2">"Metastatic Sites"</span><span class="p">]</span>

<span class="n">met_sites_sem</span> <span class="o">=</span> <span class="n">met_sites_sem</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
<span class="n">met_sites_pivot_sem</span> <span class="o">=</span> <span class="n">met_sites_sem</span><span class="o">.</span><span class="n">pivot</span><span class="p">(</span><span class="n">index</span><span class="o">=</span><span class="s2">"Timepoint"</span><span class="p">,</span> <span class="n">columns</span><span class="o">=</span><span class="s2">"Drug"</span><span class="p">)[</span><span class="s2">"Metastatic Sites"</span><span class="p">]</span>

<span class="c1"># Preview that Reformatting worked</span>
<span class="n">met_sites_pivot_mean</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[8]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th>Drug</th>
                          <th>Capomulin</th>
                          <th>Ceftamin</th>
                          <th>Infubinol</th>
                          <th>Ketapril</th>
                          <th>Naftisol</th>
                          <th>Placebo</th>
                          <th>Propriva</th>
                          <th>Ramicane</th>
                          <th>Stelasyn</th>
                          <th>Zoniferol</th>
                        </tr>
                        <tr>
                          <th>Timepoint</th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                          <td>0.000000</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>0.160000</td>
                          <td>0.380952</td>
                          <td>0.280000</td>
                          <td>0.304348</td>
                          <td>0.260870</td>
                          <td>0.375000</td>
                          <td>0.320000</td>
                          <td>0.120000</td>
                          <td>0.240000</td>
                          <td>0.166667</td>
                        </tr>
                        <tr>
                          <th>10</th>
                          <td>0.320000</td>
                          <td>0.600000</td>
                          <td>0.666667</td>
                          <td>0.590909</td>
                          <td>0.523810</td>
                          <td>0.833333</td>
                          <td>0.565217</td>
                          <td>0.250000</td>
                          <td>0.478261</td>
                          <td>0.500000</td>
                        </tr>
                        <tr>
                          <th>15</th>
                          <td>0.375000</td>
                          <td>0.789474</td>
                          <td>0.904762</td>
                          <td>0.842105</td>
                          <td>0.857143</td>
                          <td>1.250000</td>
                          <td>0.764706</td>
                          <td>0.333333</td>
                          <td>0.782609</td>
                          <td>0.809524</td>
                        </tr>
                        <tr>
                          <th>20</th>
                          <td>0.652174</td>
                          <td>1.111111</td>
                          <td>1.050000</td>
                          <td>1.210526</td>
                          <td>1.150000</td>
                          <td>1.526316</td>
                          <td>1.000000</td>
                          <td>0.347826</td>
                          <td>0.952381</td>
                          <td>1.294118</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[16]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Generate the Plot (with Error Bars)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">met_sites_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">met_sites_pivot_mean</span><span class="p">[</span><span class="s2">"Capomulin"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">met_sites_pivot_sem</span><span class="p">[</span><span class="s2">"Capomulin"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"r"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"o"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">met_sites_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">met_sites_pivot_mean</span><span class="p">[</span><span class="s2">"Infubinol"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">met_sites_pivot_sem</span><span class="p">[</span><span class="s2">"Infubinol"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"b"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"^"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">met_sites_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">met_sites_pivot_mean</span><span class="p">[</span><span class="s2">"Ketapril"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">met_sites_pivot_sem</span><span class="p">[</span><span class="s2">"Ketapril"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"g"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"s"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">errorbar</span><span class="p">(</span><span class="n">met_sites_pivot_mean</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">met_sites_pivot_mean</span><span class="p">[</span><span class="s2">"Placebo"</span><span class="p">],</span> <span class="n">yerr</span><span class="o">=</span><span class="n">met_sites_pivot_sem</span><span class="p">[</span><span class="s2">"Placebo"</span><span class="p">],</span> <span class="n">color</span><span class="o">=</span><span class="s2">"k"</span><span class="p">,</span> <span class="n">marker</span><span class="o">=</span><span class="s2">"d"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Metastatic Spread During Treatment"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Met. Sites"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Treatment Duration (Days)"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">grid</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="s1">'y'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">([</span><span class="s1">'Capomulin'</span><span class="p">,</span> <span class="s1">'Infubinol'</span><span class="p">,</span> <span class="s1">'Ketapril'</span><span class="p">,</span> <span class="s1">'Placebo'</span><span class="p">],</span> <span class="n">loc</span><span class="o">=</span><span class="s2">"best"</span><span class="p">,</span> <span class="n">fontsize</span><span class="o">=</span><span class="s2">"small"</span><span class="p">,</span> <span class="n">fancybox</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>

<span class="c1"># Save the Figure</span>
<span class="n">plt</span><span class="o">.</span><span class="n">savefig</span><span class="p">(</span><span class="s2">"analysis/Fig2.png"</span><span class="p">)</span>

<span class="c1"># Show the Figure</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt"></div>




                <div class="output_png output_subarea ">
                  <img src="/assets/generated/ba65028be0bcd6e2.png">
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing text_cell rendered">
          <div class="prompt input_prompt">
          </div>
          <div class="inner_cell">
            <div class="text_cell_render border-box-sizing rendered_html">
              <h2 id="Survival-Rates">Survival Rates<a class="anchor-link" href="#Survival-Rates">¶</a></h2>
            </div>
          </div>
        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[10]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Store the Count of Mice Grouped by Drug and Timepoint (W can pass any metric)</span>
<span class="n">survival_count</span> <span class="o">=</span> <span class="n">clinical_data_complete</span><span class="o">.</span><span class="n">groupby</span><span class="p">([</span><span class="s2">"Drug"</span><span class="p">,</span> <span class="s2">"Timepoint"</span><span class="p">])</span><span class="o">.</span><span class="n">count</span><span class="p">()[</span><span class="s2">"Tumor Volume (mm3)"</span><span class="p">]</span>

<span class="c1"># Convert to DataFrame</span>
<span class="n">survival_count</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">({</span><span class="s2">"Mouse Count"</span><span class="p">:</span> <span class="n">survival_count</span><span class="p">})</span>

<span class="c1"># Preview DataFrame</span>
<span class="n">survival_count</span><span class="o">.</span><span class="n">head</span><span class="p">()</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[10]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Drug</th>
                          <th>Timepoint</th>
                          <th>Mouse Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>Capomulin</td>
                          <td>0</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <th>1</th>
                          <td>Capomulin</td>
                          <td>5</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Capomulin</td>
                          <td>10</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Capomulin</td>
                          <td>15</td>
                          <td>24</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Capomulin</td>
                          <td>20</td>
                          <td>23</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[11]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Minor Data Munging to Re-Format the Data Frames</span>
<span class="n">survival_count</span> <span class="o">=</span> <span class="n">survival_count</span><span class="o">.</span><span class="n">reset_index</span><span class="p">()</span>
<span class="n">survival_count_pivot</span> <span class="o">=</span> <span class="n">survival_count</span><span class="o">.</span><span class="n">pivot</span><span class="p">(</span><span class="n">index</span><span class="o">=</span><span class="s2">"Timepoint"</span><span class="p">,</span> <span class="n">columns</span><span class="o">=</span><span class="s2">"Drug"</span><span class="p">)[</span><span class="s2">"Mouse Count"</span><span class="p">]</span>

<span class="c1"># Preview the Data Frame</span>
<span class="n">survival_count_pivot</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[11]:</div>



                <div class="output_html rendered_html output_subarea output_execute_result">
                  <div>
                    
                    <table border="1" class="dataframe">
                      <thead>
                        <tr>
                          <th>Drug</th>
                          <th>Capomulin</th>
                          <th>Ceftamin</th>
                          <th>Infubinol</th>
                          <th>Ketapril</th>
                          <th>Naftisol</th>
                          <th>Placebo</th>
                          <th>Propriva</th>
                          <th>Ramicane</th>
                          <th>Stelasyn</th>
                          <th>Zoniferol</th>
                        </tr>
                        <tr>
                          <th>Timepoint</th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>0</th>
                          <td>25</td>
                          <td>25</td>
                          <td>25</td>
                          <td>25</td>
                          <td>25</td>
                          <td>25</td>
                          <td>26</td>
                          <td>25</td>
                          <td>26</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>25</td>
                          <td>21</td>
                          <td>25</td>
                          <td>23</td>
                          <td>23</td>
                          <td>24</td>
                          <td>25</td>
                          <td>25</td>
                          <td>25</td>
                          <td>24</td>
                        </tr>
                        <tr>
                          <th>10</th>
                          <td>25</td>
                          <td>20</td>
                          <td>21</td>
                          <td>22</td>
                          <td>21</td>
                          <td>24</td>
                          <td>23</td>
                          <td>24</td>
                          <td>23</td>
                          <td>22</td>
                        </tr>
                        <tr>
                          <th>15</th>
                          <td>24</td>
                          <td>19</td>
                          <td>21</td>
                          <td>19</td>
                          <td>21</td>
                          <td>20</td>
                          <td>17</td>
                          <td>24</td>
                          <td>23</td>
                          <td>21</td>
                        </tr>
                        <tr>
                          <th>20</th>
                          <td>23</td>
                          <td>18</td>
                          <td>20</td>
                          <td>19</td>
                          <td>20</td>
                          <td>19</td>
                          <td>17</td>
                          <td>23</td>
                          <td>21</td>
                          <td>17</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[17]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Generate the Plot (Accounting for percentages)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="mi">100</span> <span class="o">*</span> <span class="n">survival_count_pivot</span><span class="p">[</span><span class="s2">"Capomulin"</span><span class="p">]</span> <span class="o">/</span> <span class="mi">25</span><span class="p">,</span> <span class="s2">"ro"</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="mi">100</span> <span class="o">*</span> <span class="n">survival_count_pivot</span><span class="p">[</span><span class="s2">"Infubinol"</span><span class="p">]</span> <span class="o">/</span> <span class="mi">25</span><span class="p">,</span> <span class="s2">"b^"</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="mi">100</span> <span class="o">*</span> <span class="n">survival_count_pivot</span><span class="p">[</span><span class="s2">"Ketapril"</span><span class="p">]</span> <span class="o">/</span> <span class="mi">25</span><span class="p">,</span> <span class="s2">"gs"</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">5</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="mi">100</span> <span class="o">*</span> <span class="n">survival_count_pivot</span><span class="p">[</span><span class="s2">"Placebo"</span><span class="p">]</span> <span class="o">/</span> <span class="mi">25</span> <span class="p">,</span> <span class="s2">"kd"</span><span class="p">,</span> <span class="n">linestyle</span><span class="o">=</span><span class="s2">"dashed"</span><span class="p">,</span> <span class="n">markersize</span><span class="o">=</span><span class="mi">6</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mf">0.50</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">"Survival During Treatment"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"Survival Rate (%)"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"Time (Days)"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">grid</span><span class="p">(</span><span class="kc">True</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">legend</span><span class="p">([</span><span class="s1">'Capomulin'</span><span class="p">,</span> <span class="s1">'Infubinol'</span><span class="p">,</span> <span class="s1">'Ketapril'</span><span class="p">,</span> <span class="s1">'Placebo'</span><span class="p">],</span> <span class="n">loc</span><span class="o">=</span><span class="s2">"best"</span><span class="p">,</span> <span class="n">fontsize</span><span class="o">=</span><span class="s2">"small"</span><span class="p">,</span> <span class="n">fancybox</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>

<span class="c1"># Save the Figure</span>
<span class="n">plt</span><span class="o">.</span><span class="n">savefig</span><span class="p">(</span><span class="s2">"analysis/Fig3.png"</span><span class="p">)</span>

<span class="c1"># Show the Figure</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt"></div>




                <div class="output_png output_subarea ">
                  <img src="/assets/generated/203c75856b5a57d7.png">
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing text_cell rendered">
          <div class="prompt input_prompt">
          </div>
          <div class="inner_cell">
            <div class="text_cell_render border-box-sizing rendered_html">
              <h2 id="Summary-Bar-Graph">Summary Bar Graph<a class="anchor-link" href="#Summary-Bar-Graph">¶</a>
              </h2>
            </div>
          </div>
        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[13]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Calculate the percent changes for each drug</span>
<span class="n">tumor_pct_change</span> <span class="o">=</span>  <span class="mi">100</span> <span class="o">*</span> <span class="p">(</span><span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">-</span> <span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">/</span> <span class="n">tumor_vols_pivot_mean</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="n">tumor_pct_change_sem</span> <span class="o">=</span>  <span class="mi">100</span> <span class="o">*</span> <span class="p">(</span><span class="n">tumor_vols_pivot_sem</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">-</span> <span class="n">tumor_vols_pivot_sem</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">/</span> <span class="n">tumor_vols_pivot_sem</span><span class="o">.</span><span class="n">iloc</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>

<span class="c1"># Display the data to confirm</span>
<span class="n">tumor_pct_change</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt output_prompt">Out[13]:</div>




                <div class="output_text output_subarea output_execute_result">
                  <pre>Drug
Capomulin   -19.475303
Ceftamin     42.516492
Infubinol    46.123472
Ketapril     57.028795
Naftisol     53.923347
Placebo      51.297960
Propriva     47.241175
Ramicane    -22.320900
Stelasyn     52.085134
Zoniferol    46.579751
dtype: float64</pre>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[14]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span><span class="c1"># Store all Relevant Percent Changes into a Tuple</span>
<span class="n">pct_changes</span> <span class="o">=</span> <span class="p">(</span><span class="n">tumor_pct_change</span><span class="p">[</span><span class="s2">"Capomulin"</span><span class="p">],</span> 
               <span class="n">tumor_pct_change</span><span class="p">[</span><span class="s2">"Infubinol"</span><span class="p">],</span> 
               <span class="n">tumor_pct_change</span><span class="p">[</span><span class="s2">"Ketapril"</span><span class="p">],</span> 
               <span class="n">tumor_pct_change</span><span class="p">[</span><span class="s2">"Placebo"</span><span class="p">])</span>

<span class="c1"># Splice the data between passing and failing drugs</span>
<span class="n">fig</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">subplots</span><span class="p">()</span>
<span class="n">ind</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">pct_changes</span><span class="p">))</span>  
<span class="n">width</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">rectsPass</span> <span class="o">=</span> <span class="n">ax</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">ind</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">pct_changes</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">width</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'green'</span><span class="p">)</span>
<span class="n">rectsFail</span> <span class="o">=</span> <span class="n">ax</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">ind</span><span class="p">[</span><span class="mi">1</span><span class="p">:],</span> <span class="n">pct_changes</span><span class="p">[</span><span class="mi">1</span><span class="p">:],</span> <span class="n">width</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">'red'</span><span class="p">)</span>

<span class="c1"># Orient widths. Add labels, tick marks, etc. </span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_ylabel</span><span class="p">(</span><span class="s1">'% Tumor Volume Change'</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s1">'Tumor Change Over 45 Day Treatment'</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_xticks</span><span class="p">(</span><span class="n">ind</span> <span class="o">+</span> <span class="mf">0.5</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_xticklabels</span><span class="p">((</span><span class="s1">'Capomulin'</span><span class="p">,</span> <span class="s1">'Infubinol'</span><span class="p">,</span> <span class="s1">'Ketapril'</span><span class="p">,</span> <span class="s1">'Placebo'</span><span class="p">))</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_autoscaley_on</span><span class="p">(</span><span class="kc">False</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_ylim</span><span class="p">([</span><span class="o">-</span><span class="mi">30</span><span class="p">,</span><span class="mi">70</span><span class="p">])</span>
<span class="n">ax</span><span class="o">.</span><span class="n">grid</span><span class="p">(</span><span class="kc">True</span><span class="p">)</span>

<span class="c1"># Use functions to label the percentages of changes</span>
<span class="k">def</span> <span class="nf">autolabelFail</span><span class="p">(</span><span class="n">rects</span><span class="p">):</span>
    <span class="k">for</span> <span class="n">rect</span> <span class="ow">in</span> <span class="n">rects</span><span class="p">:</span>
        <span class="n">height</span> <span class="o">=</span> <span class="n">rect</span><span class="o">.</span><span class="n">get_height</span><span class="p">()</span>
        <span class="n">ax</span><span class="o">.</span><span class="n">text</span><span class="p">(</span><span class="n">rect</span><span class="o">.</span><span class="n">get_x</span><span class="p">()</span> <span class="o">+</span> <span class="n">rect</span><span class="o">.</span><span class="n">get_width</span><span class="p">()</span><span class="o">/</span><span class="mf">2.</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span>
                <span class="s1">'</span><span class="si">%d%%</span><span class="s1">'</span> <span class="o">%</span> <span class="nb">int</span><span class="p">(</span><span class="n">height</span><span class="p">),</span>
                <span class="n">ha</span><span class="o">=</span><span class="s1">'center'</span><span class="p">,</span> <span class="n">va</span><span class="o">=</span><span class="s1">'bottom'</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s2">"white"</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">autolabelPass</span><span class="p">(</span><span class="n">rects</span><span class="p">):</span>
    <span class="k">for</span> <span class="n">rect</span> <span class="ow">in</span> <span class="n">rects</span><span class="p">:</span>
        <span class="n">height</span> <span class="o">=</span> <span class="n">rect</span><span class="o">.</span><span class="n">get_height</span><span class="p">()</span>
        <span class="n">ax</span><span class="o">.</span><span class="n">text</span><span class="p">(</span><span class="n">rect</span><span class="o">.</span><span class="n">get_x</span><span class="p">()</span> <span class="o">+</span> <span class="n">rect</span><span class="o">.</span><span class="n">get_width</span><span class="p">()</span><span class="o">/</span><span class="mf">2.</span><span class="p">,</span> <span class="o">-</span><span class="mi">8</span><span class="p">,</span>
                <span class="s1">'-</span><span class="si">%d%%</span><span class="s1"> '</span> <span class="o">%</span> <span class="nb">int</span><span class="p">(</span><span class="n">height</span><span class="p">),</span>
                <span class="n">ha</span><span class="o">=</span><span class="s1">'center'</span><span class="p">,</span> <span class="n">va</span><span class="o">=</span><span class="s1">'bottom'</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s2">"white"</span><span class="p">)</span>

<span class="c1"># Call functions to implement the function calls</span>
<span class="n">autolabelPass</span><span class="p">(</span><span class="n">rectsPass</span><span class="p">)</span>
<span class="n">autolabelFail</span><span class="p">(</span><span class="n">rectsFail</span><span class="p">)</span>

<span class="c1"># Save the Figure</span>
<span class="n">fig</span><span class="o">.</span><span class="n">savefig</span><span class="p">(</span><span class="s2">"analysis/Fig4.png"</span><span class="p">)</span>

<span class="c1"># Show the Figure</span>
<span class="n">fig</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre>
                </div>

              </div>
            </div>
          </div>

          <div class="output_wrapper">
            <div class="output">


              <div class="output_area">

                <div class="prompt"></div>




                <div class="output_png output_subarea ">
                  <img src="/assets/generated/4a0e927e9d0d921a.png">
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="cell border-box-sizing code_cell rendered">
          <div class="input">
            <div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
            <div class="inner_cell">
              <div class="input_area">
                <div class=" highlight hl-ipython3">
                  <pre><span></span> 
</pre>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>`},{route:"/project6/project6",legacyPath:"project6/project6.html",title:"Machine Learning in Python",description:"The World Happiness Report numerates the happiness index by country with a number of factors considered. I utilized Machine Learning techniques to conduct further analysis to explore the level of impacts. After…",html:`<h1 class="my-4">Machine Learning in Python</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Machine Learning in Python</li>
    </ol>
    <hr>
    <p>The World Happiness Report numerates the happiness index by
      country with a number of factors considered. I utilized Machine Learning techniques to conduct further analysis
      to explore the level of impacts. After cleaning and training our dataset, I ran a multi-regression analysis and
      created a happiness formula to better explain the correlations among the happiness factors and happiness score.
      Seven of these factors have a more significant impact on happiness score, and freedom and life expectancy were the
      factors that had the biggest impact, and generosity has a surprisingly
      smaller effect on happiness score. The correlations among those factors are all positive as well, which explains
      the existence of ripple effects These possible gaps among countries on the happiness index can be expected to vary
      depending on the inputs/factors involved. </p>
    <ul class="list-group">
      <li class="list-group-item"> <img src="/assets/project6/code1.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code2.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code3.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code4.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code5.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code6.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code7.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code8.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code9.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code10.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code11.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code12.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code13.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code14.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code15.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code16.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code17.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project6/code18.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
    </ul>`},{route:"/project7/project7",legacyPath:"project7/project7.html",title:"Federal Budget Operate Plan Model",description:'Federal Budget Operate Plan, AKA "Spend Plan", "Financial Plan", is the first phase of budget execution. Below excel-based scenario-driven self-balance spend plan model is a tool to plan and monitor budget before and…',html:`<h1 class="mt-4 mb-3">Federal Budget Operate Plan Model</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Excel</li>
    </ol>

    <p> Federal Budget Operate Plan, AKA "Spend Plan", "Financial Plan", is the first phase of budget
      execution. Below excel-based scenario-driven self-balance spend plan model is a tool to plan and
      monitor budget before and during the year of the execution.</p>
    <p> <b>Chart 1: Federal Budget Operate Plan Model Demonstration </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project7/Spend%20Plan%20Demo.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 2: Federal Budget Operate Plan Model Process Map </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project7/project7%20Process.PNG" alt="Budget Matter visual"></a>
    <p> <b>Federal Budget Operate Plan TAB "Model" Detail Description by Section</b> </p>
    <ul class="list-group">
      <li class="list-group-item">1. The scenarios based allocation and execution combinations can produce over 300
        outcomes, with pre-built 4 allocation options, 7 non-pay execution, and 11 pay execution scenarios.</li>
      <li class="list-group-item">2. The internal fund decision tools enable agency to conduct trade off analysis, shift
        funding priorities, funding new requirements, resolve execution deltas between budget costs and actuals, and
        maintain the balance of budget.</li>
      <li class="list-group-item">3. The “external request” portion enable users to adjust increased/decreased baseline
        number based on Department and Congress decision.</li>
      <li class="list-group-item">4. “The allocation and execution” provide detail information on execution outcome
        based on option selection, internal fund decision, and external adjustment.</li>
      <li class="list-group-item">5. The visualization allow users to gain clear understanding with each scenario
        outcome.</li>
    </ul>
    <br>
    <p> <b>Chart 3: Federal Budget Operate Plan Model TAB "Model" Section Description </b></p>
    <ul class="list-group">
      <li class="list-group-item"> <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project7/project7paysection.PNG" alt="Budget Matter visual"></a>
    </li></ul>
    <br>
    <p> <b>Federal Budget Operate Plan TAB "Model" Selected Excel Formulas and Functions</b>
    </p>
    <ul class="list-group">
      <li class="list-group-item"><b>1: " = IFERROR(VLOOKUP(A10,Factor!AG:AH,2,0),“oops ") "</b><br>Formula used in
        “Model” to
        generate scenarios description based on user selection from
        dropdown menu in the section of “Budget Simulation Scenarios”.</li>
      <li class="list-group-item"><b>2: " = -IF(H6="Use N-Pay",(I6-B21)*B20,0)-IF(H7="Use
          N-Pay",I7*G21,0)+I14 "</b><br>Formula used in “Model” to make adjustments on revised baseline based on the
        user
        input on “Fund Source” of pay and non-pay and “Amount” on “internal fund decision tool for Pay and for Non-Pay”
      </li>
      <li class="list-group-item"><b>3: " = IF(H6="Absorbed in Pay",-(I6-B21)*B20/G21,0)+IF(H7="Use
          N-Pay",I7,0)-I14/G21+D20 "
        </b><br>Formula used in “Model” to make adjustments on FTE changes based on the user input on “internal fund
        decision tool for pay and non-pay”.
      </li>
      <li class="list-group-item"><b>4: "=IFERROR(SUMIFS(Worksheet!$F:$F,
          Worksheet!$D:$D,Model!B24,Worksheet!E:E, Model!$A$10),0) "</b><br>Formula used
        in “Model” to pull selected data in the section of “Allocation and Execution Scenarios”
      </li>
    </ul>
    <br>
    <p> <b>Federal Budget Operate Plan TAB "Worksheet" Selected Excel Formulas and
        Functions</b> </p>
    <p> Formula used in “Worksheet” to retrieve the monthly data based on the user
      selection on “Allocation”, “Pay”, and “Non-Pay” dropdown menu.</p>
    <ul class="list-group">
      <li class="list-group-item"><b>1. "=SUMIFS(Allocation!I:I, Allocation!D:D, Worksheet!D11,Allocation!E:E,
          Worksheet!E11, Allocation!B:B, Worksheet!B11) "</b>
      </li>
      <li class="list-group-item"><b>2. " = VLOOKUP(D26,'Non-Pay Model'!$C:$P,MATCH(Worksheet!E26,'Non-Pay
          Model'!$C$1:$P$1,0),0) "</b>
      </li>
      <li class="list-group-item"><b>3. " = VLOOKUP(D38,'Pay Model'!$A$91:$P$103,MATCH(Worksheet!E38,'Pay
          Model'!$A$91:$P$91,0),0) "</b> </li>
    </ul>
    <br>

    <p> <b>Federal Budget Operate Plan TAB "Non-Pay Model" Selected Excel Formulas and
        Functions</b> </p>
    <p> Use “IF” and “VLOOKUP” combinations to fill out the execution and plan data, if
      “VLOOKUP” has positive return from execution data report, then the monthly data field will contain actual
      execution data, otherwise, it will show plan data. </p>
    <ul class="list-group">
      <li class="list-group-item"><b>1.
          " = IF(VLOOKUP(C5,'Actual WS'!A:B,2,0)&gt;0,VLOOKUP(C5,'Actual WS'!A:B,2,0),O5) "</b>
      </li>
    </ul>
    <br>
    <p> <b>Federal Budget Operate Plan TAB "Pay Model" Selected Excel Formulas and
        Functions</b> </p>
    <p> To calculate FTE QTR distribution by consider the working days by QTR and the FTE
      equivalent of the End Strength.</p>
    <ul class="list-group">
      <li class="list-group-item"><b>1.
          " = BU!$B$4/(($D$2/$C$2)+($D$3/$C$3)*(H$3/H$2)+($D$4/$C$4)*(H$4/H$2)+($D$5/$C$5)*(H$5/H$2)) "</b>
        <br>
        <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project7/project7paymodelcalcu.png" alt="Budget Matter visual"></a>
      </li>
    </ul>
    <br>

    <p> <b>Chart 4: Federal Budget Operate Plan TAB "Pay Model"</b> </p>
    <ul class="list-group">
      <li class="list-group-item"> <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project7/project7paymodel.PNG" alt="Budget Matter visual"></a>
    </li></ul>
    <br>
    <p> <b>Chart 5: Federal Budget Operate Plan TAB "Pay Weight" </b> </p>
    <ul class="list-group">
      <li class="list-group-item"> <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project7/project7payweight.PNG" alt="Budget Matter visual"></a>
    </li></ul>
    <br>

    <p> Budget Allocation Scenarios:</p>
    <ul class="list-group">
      <li class="list-group-item">1. ALLT-A- 1:1:1:1 - Typical OMB allocation: 25% per QTR.</li>
      <li class="list-group-item">2. ALLT-B- 3:3:3:1 - Accerlated QTR Allocation: 30% per QTR for 1st three QTRs.</li>
      <li class="list-group-item">3. ALLT-C- CR - CR Allocation: pro rata share of prior year agency budget.</li>
      <li class="list-group-item">4. ALLT-D- CR+APPN - Combination of CR ceiling and Appripriation with 1st Half Year
        under CR, 2nd under APPN</li>
    </ul>
    <br>
    <p> Non Pay exeuction scenarios are based on customized execution by months with
      consideration of historcal data, year to date current execution, and initial plan of execution. </p>
    <ul class="list-group">
      <li class="list-group-item"> N1. FY21 Plan - Typical FY spend plan and obligation rate target. </li>
      <li class="list-group-item"> N2. FY21Plan W Actual - Spend Plan with Actual Update
      </li>
      <li class="list-group-item"> N3. His-Median (CR1) - Historical execution rate during CR period.
      </li>
      <li class="list-group-item"> N4. His-Min (CR2) - Historical execution rate during CR period with lowest obligation
        rate in 1st QTR.
      </li>
      <li class="list-group-item"> N5. His-Max (APPN) - Historical execution rate with budget enacted with highest
        obligation during 1st QTR.
      </li>
      <li class="list-group-item"> N6. His-AVG All - The average rate of all historical exeuction.
      </li>
      <li class="list-group-item"> N7. His-WGT CR+APPN - The weighted average of the historical exeuction rate.
      </li>
    </ul>
    <br>
    <p> Salary and expenses are driven by agency's hiring strategy and budget position, and 11
      pay exeuction and hiring scenarios give agency options to find the option to balance its agency budget and working
      forces. </p>
    <ul class="list-group">
      <li class="list-group-item"> Hire 1 Q1 Hiring Freeze: During hiring freeze, no new hires and lowest payroll cost
        in
        1st QTR, however, it bring highest ES at YE in order to reach FTE goal.
      </li>
      <li class="list-group-item"> Hire 2 Q1 Essential Hire: Hire up to 40% of losses, result in lower payroll costs in
        1st QTR.
      </li>
      <li class="list-group-item"> Hire 3 Q1 Flat: Hire strategy to only fill current vacant positions, lower payroll
        costs in 1st QTR, but higher than average ES on board at YE.
      </li>
      <li class="list-group-item"> Hire 4 Bell Grow: Hiring by QTR Ratio 2:3:3:2 will result in moderate 1st QTR cost
        and
        average ES grow at YE.
      </li>
      <li class="list-group-item"> Hire 5 Linear Grow: Linear Growth Hiring Strategy will result in moderate 1st QTR
        cost
        and average ES grow at YE.
      </li>
      <li class="list-group-item"> Hire 6 Log Grow: Logistic Curve Growth Hiring Strategy results in moderate 1st QTR
        cost and average ES grow at YE.
      </li>
      <li class="list-group-item"> Hire 7 Steady Grow: Hiring by QTR Ratio: 1:1:1:1 will result in moderate 1st QTR cost
        and average ES grow at YE.
      </li>
      <li class="list-group-item"> Hire 8 Inverted Bell Grow: Hiring by QTR Ratio: 3:2:2:3 will result in moderate 1st
        QTR cost and average ES grow at YE.
      </li>
      <li class="list-group-item"> Hire 9 All Grow in Q1: Aggressive 1st QTR hiring strategy results highest 1st QTR
        payroll costs, relative lower ES at YE.
      </li>
      <li class="list-group-item"> Hire 10 FTE = ES: Aggressive 1st QTR hiring strategy results highest 1st QTR payroll
        costs, FTE equals ES at YE.
      </li>
      <li class="list-group-item"> Hire 11 FTE &gt; ES: Aggressive 1st QTR hiring strategy results highest 1st QTR payroll
        costs, ES at YE less than FTE.
      </li>
    </ul>
    <p></p>
    <p></p>
    <p></p>`},{route:"/project8/project8",legacyPath:"project8/project8.html",title:"Python Data Mining, JS D3, and Leaflet GeoMap",description:"",html:`<h1 class="mt-4 mb-3">Python Data Mining, JS D3, and Leaflet GeoMap</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Python, D3, Leaflet</li>
    </ol>
    
    <div id="map" class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0">
      <div class="leaflet-pane leaflet-map-pane">
        <div class="leaflet-pane leaflet-tile-pane">
          <div class="leaflet-layer ">
            <div class="leaflet-tile-container leaflet-zoom-animated"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded">
            </div>
          </div>
          <div class="leaflet-layer ">
            <div class="leaflet-tile-container leaflet-zoom-animated"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded">
            </div>
          </div>
        </div>
        <div class="leaflet-pane leaflet-shadow-pane"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt="">
        </div>
        <div class="leaflet-pane leaflet-overlay-pane"></div>
        <div class="leaflet-pane leaflet-marker-pane"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0">
        </div>
        <div class="leaflet-pane leaflet-tooltip-pane"></div>
        <div class="leaflet-pane leaflet-popup-pane"></div>
        <div class="leaflet-proxy leaflet-zoom-animated">
        </div>
      </div>
      <div class="leaflet-control-container">
        <div class="leaflet-top leaflet-left">
          <div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out">−</a></div>
        </div>
        <div class="leaflet-top leaflet-right"></div>
        <div class="leaflet-bottom leaflet-left"></div>
        <div class="leaflet-bottom leaflet-right">
          <div class="leaflet-control-attribution leaflet-control"><a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a></div>
        </div>
      </div>
    </div>
    <br>
    <p>
    </p><h3>Python Data Mining</h3>
    <p></p>
    <p>Adding Geographic Informaiton in geojson file and happiness score in CSV file. </p>
    <ul class="list-group">
      <li class="list-group-item"> <img src="/assets/project8/Geo1.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project8/Geo2.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project8/Geo3.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
    </ul>
    <br>
    <p>
    </p><h3>JavaScript</h3>
    <p></p>
    <p>Create map object, add data point, layers, pop-up, legend, and interactivity to the
      webpage. </p>
    <ul class="list-group">
      <li class="list-group-item"> <img src="/assets/project8/js1.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
      <li class="list-group-item"> <img src="/assets/project8/js2.PNG" class="mx-auto d-block" alt="Budget Matter visual"></li>
    </ul>`},{route:"/project8/project8 copy",legacyPath:"project8/project8 copy.html",title:"Python Data Mining, JS D3, and Leaflet GeoMap",description:"",html:`<h1 class="mt-4 mb-3">Python Data Mining, JS D3, and Leaflet GeoMap</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Python, D3, Leaflet</li>
    </ol>
    <p> </p>
    <ul class="list-group">
      <li class="list-group-item">.</li>
    </ul>
    <br>
    

    <div id="map" class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0">
      <div class="leaflet-pane leaflet-map-pane">
        <div class="leaflet-pane leaflet-tile-pane">
          <div class="leaflet-layer ">
            <div class="leaflet-tile-container leaflet-zoom-animated"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded">
            </div>
          </div>
          <div class="leaflet-layer ">
            <div class="leaflet-tile-container leaflet-zoom-animated"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/8/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/9/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/7/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/10/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/4.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/3.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/6/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.light/4/11/5.png?access_token=pk.eyJ1Ijoicm9iZWx3b24iLCJhIjoiY2s1aGU5Mzc2MDJ4NDNkcDdxMng2ajA4YSJ9.Ojwn4foHr3H5Y1G8iui6cA" class="leaflet-tile leaflet-tile-loaded">
            </div>
          </div>
        </div>
        <div class="leaflet-pane leaflet-shadow-pane"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt=""><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt="">
        </div>
        <div class="leaflet-pane leaflet-overlay-pane"></div>
        <div class="leaflet-pane leaflet-marker-pane"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"><img src="https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0">
        </div>
        <div class="leaflet-pane leaflet-tooltip-pane"></div>
        <div class="leaflet-pane leaflet-popup-pane"></div>
        <div class="leaflet-proxy leaflet-zoom-animated">
        </div>
      </div>
      <div class="leaflet-control-container">
        <div class="leaflet-top leaflet-left">
          <div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out">−</a></div>
        </div>
        <div class="leaflet-top leaflet-right"></div>
        <div class="leaflet-bottom leaflet-left"></div>
        <div class="leaflet-bottom leaflet-right">
          <div class="leaflet-control-attribution leaflet-control"><a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a></div>
        </div>
      </div>
    </div>
    <br> <br>

    <h3 class="mt-4 mb-3">Python Data Mining </h3>
    <h5 class="mt-4 mb-3">Adding Geographic Informaiton in geojson file and happiness score in CSV file.</h5>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <div tabindex="-1" id="notebook" class="border-box-sizing">
          <div class="container" id="notebook-container">

            <div class="cell border-box-sizing code_cell rendered">
              <div class="input">
                <div class="prompt input_prompt">In&nbsp;[13]:</div>
                <div class="inner_cell">
                  <div class="input_area">
                    <div class=" highlight hl-ipython3">
                      <pre><span></span><span class="kn">import</span> <span class="nn">json</span>
      <span class="kn">import</span> <span class="nn">geojson</span>
      <span class="kn">from</span> <span class="nn">pprint</span> <span class="kn">import</span> <span class="n">pprint</span>
      <span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
      </pre>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div class="cell border-box-sizing code_cell rendered">
              <div class="input">
                <div class="prompt input_prompt">In&nbsp;[14]:</div>
                <div class="inner_cell">
                  <div class="input_area">
                    <div class=" highlight hl-ipython3">
                      <pre><span></span><span class="n">worldgeojson</span> <span class="o">=</span> <span class="p">{</span>
          <span class="s2">"type"</span><span class="p">:</span> <span class="s2">"FeatureCollection"</span><span class="p">,</span>
          <span class="s2">"features"</span><span class="p">:</span> <span class="p">[]</span>
      <span class="p">}</span>
      </pre>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div class="cell border-box-sizing code_cell rendered">
              <div class="input">
                <div class="prompt input_prompt">In&nbsp;[21]:</div>
                <div class="inner_cell">
                  <div class="input_area">
                    <div class=" highlight hl-ipython3">
                      <pre><span></span><span class="n">happy</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="s2">"map_2019.csv"</span><span class="p">)</span>
      <span class="n">happiness</span> <span class="o">=</span> <span class="n">happy</span><span class="o">.</span><span class="n">round</span><span class="p">({</span><span class="s1">'happiness_score'</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> <span class="s1">'gdp_per_capita'</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> <span class="s1">'social_support'</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> <span class="s1">'life_expectancy'</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> <span class="s1">'freedom'</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> 
                      <span class="s1">'generosity'</span><span class="p">:</span><span class="mi">2</span><span class="p">,</span> <span class="s1">'government_corr'</span><span class="p">:</span> <span class="mi">2</span><span class="p">})</span>
      <span class="n">happiness</span><span class="o">.</span><span class="n">info</span><span class="p">()</span>
      </pre>
                    </div>

                  </div>
                </div>
              </div>

              <div class="output_wrapper">
                <div class="output">


                  <div class="output_area">

                    <div class="prompt"></div>


                    <div class="output_subarea output_stream output_stdout output_text">
                      <pre>&lt;class 'pandas.core.frame.DataFrame'&gt;
      RangeIndex: 156 entries, 0 to 155
      Data columns (total 9 columns):
      country            156 non-null object
      happiness_rank     156 non-null int64
      happiness_score    156 non-null float64
      gdp_per_capita     156 non-null float64
      social_support     156 non-null float64
      life_expectancy    156 non-null float64
      freedom            156 non-null float64
      generosity         156 non-null float64
      government_corr    156 non-null float64
      dtypes: float64(7), int64(1), object(1)
      memory usage: 11.1+ KB
      </pre>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div class="cell border-box-sizing code_cell rendered">
              <div class="input">
                <div class="prompt input_prompt">In&nbsp;[23]:</div>
                <div class="inner_cell">
                  <div class="input_area">
                    <div class=" highlight hl-ipython3">
                      <pre><span></span><span class="n">happiness</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">25</span><span class="p">)</span>
      </pre>
                    </div>

                  </div>
                </div>
              </div>

              <div class="output_wrapper">
                <div class="output">


                  <div class="output_area">

                    <div class="prompt output_prompt">Out[23]:</div>



                    <div class="output_html rendered_html output_subarea output_execute_result">
                      <div>
                        
                        <table border="1" class="dataframe">
                          <thead>
                            <tr>
                              <th></th>
                              <th>country</th>
                              <th>happiness_rank</th>
                              <th>happiness_score</th>
                              <th>gdp_per_capita</th>
                              <th>social_support</th>
                              <th>life_expectancy</th>
                              <th>freedom</th>
                              <th>generosity</th>
                              <th>government_corr</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>0</th>
                              <td>Finland</td>
                              <td>1</td>
                              <td>7.77</td>
                              <td>1.34</td>
                              <td>1.59</td>
                              <td>0.99</td>
                              <td>0.60</td>
                              <td>0.15</td>
                              <td>0.39</td>
                            </tr>
                            <tr>
                              <th>1</th>
                              <td>Denmark</td>
                              <td>2</td>
                              <td>7.60</td>
                              <td>1.38</td>
                              <td>1.57</td>
                              <td>1.00</td>
                              <td>0.59</td>
                              <td>0.25</td>
                              <td>0.41</td>
                            </tr>
                            <tr>
                              <th>2</th>
                              <td>Norway</td>
                              <td>3</td>
                              <td>7.55</td>
                              <td>1.49</td>
                              <td>1.58</td>
                              <td>1.03</td>
                              <td>0.60</td>
                              <td>0.27</td>
                              <td>0.34</td>
                            </tr>
                            <tr>
                              <th>3</th>
                              <td>Iceland</td>
                              <td>4</td>
                              <td>7.49</td>
                              <td>1.38</td>
                              <td>1.62</td>
                              <td>1.03</td>
                              <td>0.59</td>
                              <td>0.35</td>
                              <td>0.12</td>
                            </tr>
                            <tr>
                              <th>4</th>
                              <td>Netherlands</td>
                              <td>5</td>
                              <td>7.49</td>
                              <td>1.40</td>
                              <td>1.52</td>
                              <td>1.00</td>
                              <td>0.56</td>
                              <td>0.32</td>
                              <td>0.30</td>
                            </tr>
                            <tr>
                              <th>5</th>
                              <td>Switzerland</td>
                              <td>6</td>
                              <td>7.48</td>
                              <td>1.45</td>
                              <td>1.53</td>
                              <td>1.05</td>
                              <td>0.57</td>
                              <td>0.26</td>
                              <td>0.34</td>
                            </tr>
                            <tr>
                              <th>6</th>
                              <td>Sweden</td>
                              <td>7</td>
                              <td>7.34</td>
                              <td>1.39</td>
                              <td>1.49</td>
                              <td>1.01</td>
                              <td>0.57</td>
                              <td>0.27</td>
                              <td>0.37</td>
                            </tr>
                            <tr>
                              <th>7</th>
                              <td>New Zealand</td>
                              <td>8</td>
                              <td>7.31</td>
                              <td>1.30</td>
                              <td>1.56</td>
                              <td>1.03</td>
                              <td>0.58</td>
                              <td>0.33</td>
                              <td>0.38</td>
                            </tr>
                            <tr>
                              <th>8</th>
                              <td>Canada</td>
                              <td>9</td>
                              <td>7.28</td>
                              <td>1.36</td>
                              <td>1.50</td>
                              <td>1.04</td>
                              <td>0.58</td>
                              <td>0.28</td>
                              <td>0.31</td>
                            </tr>
                            <tr>
                              <th>9</th>
                              <td>Austria</td>
                              <td>10</td>
                              <td>7.25</td>
                              <td>1.38</td>
                              <td>1.48</td>
                              <td>1.02</td>
                              <td>0.53</td>
                              <td>0.24</td>
                              <td>0.23</td>
                            </tr>
                            <tr>
                              <th>10</th>
                              <td>Australia</td>
                              <td>11</td>
                              <td>7.23</td>
                              <td>1.37</td>
                              <td>1.55</td>
                              <td>1.04</td>
                              <td>0.56</td>
                              <td>0.33</td>
                              <td>0.29</td>
                            </tr>
                            <tr>
                              <th>11</th>
                              <td>Costa Rica</td>
                              <td>12</td>
                              <td>7.17</td>
                              <td>1.03</td>
                              <td>1.44</td>
                              <td>0.96</td>
                              <td>0.56</td>
                              <td>0.14</td>
                              <td>0.09</td>
                            </tr>
                            <tr>
                              <th>12</th>
                              <td>Israel</td>
                              <td>13</td>
                              <td>7.14</td>
                              <td>1.28</td>
                              <td>1.46</td>
                              <td>1.03</td>
                              <td>0.37</td>
                              <td>0.26</td>
                              <td>0.08</td>
                            </tr>
                            <tr>
                              <th>13</th>
                              <td>Luxembourg</td>
                              <td>14</td>
                              <td>7.09</td>
                              <td>1.61</td>
                              <td>1.48</td>
                              <td>1.01</td>
                              <td>0.53</td>
                              <td>0.19</td>
                              <td>0.32</td>
                            </tr>
                            <tr>
                              <th>14</th>
                              <td>United Kingdom</td>
                              <td>15</td>
                              <td>7.05</td>
                              <td>1.33</td>
                              <td>1.54</td>
                              <td>1.00</td>
                              <td>0.45</td>
                              <td>0.35</td>
                              <td>0.28</td>
                            </tr>
                            <tr>
                              <th>15</th>
                              <td>Ireland</td>
                              <td>16</td>
                              <td>7.02</td>
                              <td>1.50</td>
                              <td>1.55</td>
                              <td>1.00</td>
                              <td>0.52</td>
                              <td>0.30</td>
                              <td>0.31</td>
                            </tr>
                            <tr>
                              <th>16</th>
                              <td>Germany</td>
                              <td>17</td>
                              <td>6.98</td>
                              <td>1.37</td>
                              <td>1.45</td>
                              <td>0.99</td>
                              <td>0.50</td>
                              <td>0.26</td>
                              <td>0.26</td>
                            </tr>
                            <tr>
                              <th>17</th>
                              <td>Belgium</td>
                              <td>18</td>
                              <td>6.92</td>
                              <td>1.36</td>
                              <td>1.50</td>
                              <td>0.99</td>
                              <td>0.47</td>
                              <td>0.16</td>
                              <td>0.21</td>
                            </tr>
                            <tr>
                              <th>18</th>
                              <td>United States of America</td>
                              <td>19</td>
                              <td>6.89</td>
                              <td>1.43</td>
                              <td>1.46</td>
                              <td>0.87</td>
                              <td>0.45</td>
                              <td>0.28</td>
                              <td>0.13</td>
                            </tr>
                            <tr>
                              <th>19</th>
                              <td>Czech Republic</td>
                              <td>20</td>
                              <td>6.85</td>
                              <td>1.27</td>
                              <td>1.49</td>
                              <td>0.92</td>
                              <td>0.46</td>
                              <td>0.05</td>
                              <td>0.04</td>
                            </tr>
                            <tr>
                              <th>20</th>
                              <td>United Arab Emirates</td>
                              <td>21</td>
                              <td>6.82</td>
                              <td>1.50</td>
                              <td>1.31</td>
                              <td>0.82</td>
                              <td>0.60</td>
                              <td>0.26</td>
                              <td>0.18</td>
                            </tr>
                            <tr>
                              <th>21</th>
                              <td>Malta</td>
                              <td>22</td>
                              <td>6.73</td>
                              <td>1.30</td>
                              <td>1.52</td>
                              <td>1.00</td>
                              <td>0.56</td>
                              <td>0.38</td>
                              <td>0.15</td>
                            </tr>
                            <tr>
                              <th>22</th>
                              <td>Mexico</td>
                              <td>23</td>
                              <td>6.60</td>
                              <td>1.07</td>
                              <td>1.32</td>
                              <td>0.86</td>
                              <td>0.43</td>
                              <td>0.07</td>
                              <td>0.07</td>
                            </tr>
                            <tr>
                              <th>23</th>
                              <td>France</td>
                              <td>24</td>
                              <td>6.59</td>
                              <td>1.32</td>
                              <td>1.47</td>
                              <td>1.04</td>
                              <td>0.44</td>
                              <td>0.11</td>
                              <td>0.18</td>
                            </tr>
                            <tr>
                              <th>24</th>
                              <td>Taiwan</td>
                              <td>25</td>
                              <td>6.45</td>
                              <td>1.37</td>
                              <td>1.43</td>
                              <td>0.91</td>
                              <td>0.35</td>
                              <td>0.24</td>
                              <td>0.10</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div class="cell border-box-sizing code_cell rendered">
              <div class="input">
                <div class="prompt input_prompt">In&nbsp;[24]:</div>
                <div class="inner_cell">
                  <div class="input_area">
                    <div class=" highlight hl-ipython3">
                      <pre><span></span><span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="s1">'countries.geo.json'</span><span class="p">)</span> <span class="k">as</span> <span class="n">f</span><span class="p">:</span>
          <span class="n">features</span> <span class="o">=</span> <span class="n">json</span><span class="o">.</span><span class="n">load</span><span class="p">(</span><span class="n">f</span><span class="p">)[</span><span class="s2">"features"</span><span class="p">]</span>
          <span class="k">for</span> <span class="n">foo</span> <span class="ow">in</span> <span class="n">features</span><span class="p">:</span>
              <span class="k">try</span><span class="p">:</span>
                  <span class="n">name</span> <span class="o">=</span> <span class="n">foo</span><span class="p">[</span><span class="s1">'properties'</span><span class="p">][</span><span class="s2">"name"</span><span class="p">]</span>
                  <span class="n">happydata</span> <span class="o">=</span> <span class="n">happiness</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">happiness</span><span class="p">[</span><span class="s2">"country"</span><span class="p">]</span> <span class="o">==</span> <span class="n">name</span><span class="p">,</span> <span class="p">:]</span>
                  <span class="n">happydict</span> <span class="o">=</span> <span class="n">happydata</span><span class="o">.</span><span class="n">to_dict</span><span class="p">(</span><span class="n">orient</span> <span class="o">=</span> <span class="s1">'records'</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span>
                  <span class="n">foo</span><span class="p">[</span><span class="s2">"properties"</span><span class="p">]</span> <span class="o">=</span> <span class="n">happydict</span>
                  <span class="n">worldgeojson</span><span class="p">[</span><span class="s2">"features"</span><span class="p">]</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">foo</span><span class="p">)</span>
              <span class="k">except</span><span class="p">:</span>
                  <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s1">'An error occured for name #: </span><span class="si">{name}</span><span class="s1">'</span><span class="p">)</span>
                  
      </pre>
                    </div>

                  </div>
                </div>
              </div>

              <div class="output_wrapper">
                <div class="output">


                  <div class="output_area">

                    <div class="prompt"></div>


                    <div class="output_subarea output_stream output_stdout output_text">
                      <pre>An error occured for name #: Angola
      An error occured for name #: Antarctica
      An error occured for name #: French Southern and Antarctic Lands
      An error occured for name #: The Bahamas
      An error occured for name #: Belize
      An error occured for name #: Bermuda
      An error occured for name #: Brunei
      An error occured for name #: Democratic Republic of the Congo
      An error occured for name #: Republic of the Congo
      An error occured for name #: Cuba
      An error occured for name #: Djibouti
      An error occured for name #: Eritrea
      An error occured for name #: Fiji
      An error occured for name #: Falkland Islands
      An error occured for name #: Guinea Bissau
      An error occured for name #: Equatorial Guinea
      An error occured for name #: Greenland
      An error occured for name #: French Guiana
      An error occured for name #: Guyana
      An error occured for name #: Macedonia
      An error occured for name #: New Caledonia
      An error occured for name #: Oman
      An error occured for name #: Papua New Guinea
      An error occured for name #: Puerto Rico
      An error occured for name #: North Korea
      An error occured for name #: Western Sahara
      An error occured for name #: Sudan
      An error occured for name #: Solomon Islands
      An error occured for name #: Somaliland
      An error occured for name #: Republic of Serbia
      An error occured for name #: Suriname
      An error occured for name #: East Timor
      An error occured for name #: Trinidad and Tobago
      An error occured for name #: United Republic of Tanzania
      An error occured for name #: Vanuatu
      An error occured for name #: West Bank
      </pre>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div class="cell border-box-sizing code_cell rendered">
              <div class="input">
                <div class="prompt input_prompt">In&nbsp;[25]:</div>
                <div class="inner_cell">
                  <div class="input_area">
                    <div class=" highlight hl-ipython3">
                      <pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">foo</span><span class="p">)</span>
      </pre>
                    </div>

                  </div>
                </div>
              </div>

              <div class="output_wrapper">
                <div class="output">


                  <div class="output_area">

                    <div class="prompt"></div>


                    <div class="output_subarea output_stream output_stdout output_text">
                      <pre>{'type': 'Feature', 'id': 'ZWE', 'properties': {'country': 'Zimbabwe', 'happiness_rank': 146, 'happiness_score': 3.66, 'gdp_per_capita': 0.37, 'social_support': 1.11, 'life_expectancy': 0.43, 'freedom': 0.36, 'generosity': 0.15, 'government_corr': 0.09}, 'geometry': {'type': 'Polygon', 'coordinates': [[[31.191409, -22.25151], [30.659865, -22.151567], [30.322883, -22.271612], [29.839037, -22.102216], [29.432188, -22.091313], [28.794656, -21.639454], [28.02137, -21.485975], [27.727228, -20.851802], [27.724747, -20.499059], [27.296505, -20.39152], [26.164791, -19.293086], [25.850391, -18.714413], [25.649163, -18.536026], [25.264226, -17.73654], [26.381935, -17.846042], [26.706773, -17.961229], [27.044427, -17.938026], [27.598243, -17.290831], [28.467906, -16.4684], [28.825869, -16.389749], [28.947463, -16.043051], [29.516834, -15.644678], [30.274256, -15.507787], [30.338955, -15.880839], [31.173064, -15.860944], [31.636498, -16.07199], [31.852041, -16.319417], [32.328239, -16.392074], [32.847639, -16.713398], [32.849861, -17.979057], [32.654886, -18.67209], [32.611994, -19.419383], [32.772708, -19.715592], [32.659743, -20.30429], [32.508693, -20.395292], [32.244988, -21.116489], [31.191409, -22.25151]]]}}
      </pre>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div class="cell border-box-sizing code_cell rendered">
              <div class="input">
                <div class="prompt input_prompt">In&nbsp;[26]:</div>
                <div class="inner_cell">
                  <div class="input_area">
                    <div class=" highlight hl-ipython3">
                      <pre><span></span><span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="s1">'countries.geo.json'</span><span class="p">,</span> <span class="s1">'w'</span><span class="p">)</span> <span class="k">as</span> <span class="n">fp</span><span class="p">:</span>
          <span class="n">geojson</span><span class="o">.</span><span class="n">dump</span><span class="p">(</span><span class="n">worldgeojson</span><span class="p">,</span> <span class="n">fp</span><span class="p">)</span>
      </pre>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>
    </ol>`},{route:"/project9/project9",legacyPath:"project9/project9.html",title:"VBA Code Examples for Excel",description:"VBA stands for Visual Basic for Applications. VBA is a programming language which was developed by Microsoft and is included in most products that are part of Microsoft Office.",html:`<h1 class="mt-4 mb-3">VBA Code Examples for Excel 
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Excel VBA</li>
    </ol>

    <p> VBA stands for Visual Basic for Applications. VBA is a programming language which was
      developed by Microsoft and is included in most products that are part of Microsoft Office.</p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba.PNG" alt="Budget Matter visual"></a>
    <ul class="list-group">
      <li class="list-group-item">1. VBA is effective and efficient when it comes to repetitive solutions to formatting
        or correction problems.</li>
      <li class="list-group-item">2. VBA can be used to interact with the Office application or document in a particular
        way that is not part of the standard application.</li>
      <li class="list-group-item">3. VBA can be used to interact with the details of two or more Office
        applications at the same time and then modify the content in one application based on the content in another.
      </li>
    </ul>
    <br>
    <p> <b>Chart 1a: Use Excel VBA script to track, find, replace data elements </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba1hornet.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 1b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba1.PNG" alt="Budget Matter visual"></a>
    <p> <b>Chart 2a: Use Excel VBA script to return values </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba2lotto.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 2b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba2.PNG" alt="Budget Matter visual"></a>
    <p> <b>Chart 3a: Use Excel VBA script to combine data in different Excel sheets into one
        massive table on a new sheet </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba3combine.gif" alt="Budget Matter visual"></a>
    <p> <b>Chart 3b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba3a.PNG" alt="Budget Matter visual"></a>
    <p> <b>Chart 4a: Use Excel VBA script to analyze real stock market data </b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba4stock1.gif" alt="Budget Matter visual"></a>
    <p> <b>Federal Budget Operate Plan TAB "Model" Detail Description by Section</b> </p>
    <p> <b>Chart 4b: Codes</b></p>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba4.1.PNG" alt="Budget Matter visual"></a>
    <a href="#"><img class="img-fluid rounded mb-4" src="/assets/project9/vba4.2.PNG" alt="Budget Matter visual"></a>`},{route:"/tableau-1-citibike",legacyPath:"tableau-1-citibike.html",title:"Citi Bike Analysis",description:"",html:`<h1 class="mt-4 mb-3">Citi Bike Analysis
      
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Tableau</li>
    </ol>
    <div class="tableauPlaceholder" id="viz1588774332504"><object class="tableauViz"><param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F"> <param name="embed_code_version" value="3"> <param name="site_root" value=""><param name="name" value="Citi_15824261544430/CitiBikeJan2020"><param name="tabs" value="no"><param name="toolbar" value="yes"><param name="static_image" value="https://public.tableau.com/static/images/Ci/Citi_15824261544430/CitiBikeJan2020/1.png"> <param name="animate_transition" value="yes"><param name="display_static_image" value="yes"><param name="display_spinner" value="yes"><param name="display_overlay" value="yes"><param name="display_count" value="yes"></object></div>`},{route:"/tableau-2-fed-avg-salary",legacyPath:"tableau-2-fed-avg-salary.html",title:"Feds Salary",description:"Note: based on released FY 2018 data that is available to public.",html:`<h1 class="mt-4 mb-3">Feds Salary
      
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Tableau</li>
    </ol>
    <div class="tableauPlaceholder" id="viz1588774949194"><object class="tableauViz">
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F">
        <param name="embed_code_version" value="3">
        <param name="site_root" value="">
        <param name="name" value="Labor-Fed-092018/DB">
        <param name="tabs" value="no">
        <param name="toolbar" value="yes">
        <param name="static_image" value="https://public.tableau.com/static/images/La/Labor-Fed-092018/DB/1.png">
        <param name="animate_transition" value="yes">
        <param name="display_static_image" value="yes">
        <param name="display_spinner" value="yes">
        <param name="display_overlay" value="yes">
        <param name="display_count" value="yes"></object></div>
    
    <br>
    <p>Note: based on released FY 2018 data that is available to public.</p>
    <br>
      <p> World Map based on Longitude and Latitude. Color shows sum of Number of Records. Details are shown for Measure
      Names and Country. US Map based on Longitude and Latitude. Color shows average of Salary. Details are shown for
      State. </p>
    <p> Count of Number of Records for each Loslvlt. Color shows details about Edlvltypt. The data is filtered on
      Agytypt, Agysubt, Agelvlt, Occtypt, Occt, Payplan, Payplant, PPGRD (DTppgrd.txt), Sallvlt, Pptypt, Occfamt and
      Agyt. The Agytypt filter keeps Cabinet Level Agencies, Large Independent Agencies (1000 or more employees), Medium
      Independent Agencies (100-999 employees) and Small Independent Agencies (less than 100 employees). The Agysubt
      filter keeps 529 of 1,058 members. The Agelvlt filter keeps 12 of 11 members. The Occtypt filter keeps Blue Collar
      and White Collar. The Occt filter keeps 676 of 1,322 members. The Payplan filter keeps 171 of 235 members. The
      Payplant filter keeps 171 of 235 members. The PPGRD (DTppgrd.txt) filter excludes CE-09 and CE-10. The Sallvlt
      filter keeps 26 of 34 members. The Pptypt filter keeps General Schedule and Equivalently Graded (GSEG) Pay Plans,
      Other White Collar Pay Plans, Prevailing Rate Pay Plans (Blue Collar) and Unspecified or Not Applicable. The
      Occfamt filter keeps 59 of 57 members. The Agyt filter keeps 125 of 155 members. The view is filtered on Loslvlt,
      which keeps 10 of 10 members.</p>
    <p>Average of Salary for each Agysubt broken down by Occt. Color shows details about Sallvlt. The data is filtered
      on Agytypt, Agyt, Agelvlt, Edlvltypt, Loslvlt, Occtypt, Payplant, PPGRD (DTppgrd.txt), Occfamt and Payplan. The
      Agytypt filter keeps Cabinet Level Agencies, Large Independent Agencies (1000 or more employees), Medium
      Independent Agencies (100-999 employees) and Small Independent Agencies (less than 100 employees). The Agyt filter
      keeps 125 of 155 members. The Agelvlt filter keeps 12 of 11 members. The Edlvltypt filter keeps 10 of 11 members.
      The Loslvlt filter keeps 11 of 10 members. The Occtypt filter keeps Blue Collar and White Collar. The Payplant
      filter keeps 171 of 235 members. The PPGRD (DTppgrd.txt) filter excludes CE-09 and CE-10. The Occfamt filter keeps
      05xx-ACCOUNTING AND BUDGET and 06xx-MEDICAL, HOSPITAL, DENTAL &amp; PUB HEALTH. The Payplan filter keeps 12 of 235
      members. The view is filtered on Agysubt and Occt. The Agysubt filter keeps 60 of 529 members. The Occt filter
      keeps 8 of 1,322 members. </p>`},{route:"/tableau-3-covid19",legacyPath:"tableau-3-covid19.html",title:"COVID19 Dashboard",description:"",html:`<h1 class="mt-4 mb-3">COVID19 Dashboard
      
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/portfolio-1-col">Portfolio</a>
      </li>
      <li class="breadcrumb-item active">Tableau</li>
    </ol>
    <div class="tableauPlaceholder" id="viz1588974557600"><object class="tableauViz">
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F">
        <param name="embed_code_version" value="3">
        <param name="site_root" value="">
        <param name="name" value="PsTableau-03/Dashboard1">
        <param name="tabs" value="no">
        <param name="toolbar" value="yes">
        <param name="static_image" value="https://public.tableau.com/static/images/Ps/PsTableau-03/Dashboard1/1.png">
        <param name="animate_transition" value="yes">
        <param name="display_static_image" value="yes">
        <param name="display_spinner" value="yes">
        <param name="display_overlay" value="yes">
        <param name="display_count" value="yes"></object></div>`}],bb=[{title:"DoD FMR Glossary",summary:"The complete January 2024 DoD 7000.14-R glossary, rebuilt as a searchable A–Z reference with all 224 official definitions and source-page citations.",route:"/knowledge/dod-fmr/glossary",category:"Reference",readingTime:"30 min",featured:!0},{title:"A-11 · Section 20 — Terms and Concepts",summary:"A visual, searchable reference to the Federal budget vocabulary and budget-authority concepts defined in OMB Circular A-11 Section 20.",route:"/knowledge/a-11/section-20",category:"Reference",readingTime:"20 min",featured:!0},{title:"Federal Budget and Appropriations Law",summary:"An in-depth professional introduction to the constitutional framework, core statutes, execution controls, historical cases, and real-world appropriation decisions.",route:"/knowledge/federal-budget-laws",category:"Reference",readingTime:"25 min",featured:!0},{title:"Website Transformation and AI Studio Publishing",summary:"The production blueprint used to modernize Budget Matter and publish it at a custom ai.studio address.",route:"/build-and-publish",category:"Engineering",readingTime:"12 min",featured:!0},{title:"The Federal Budget Process",summary:"A visual tour of formulation, congressional enactment, and agency execution from beginning to end.",route:"/process",category:"Guide",readingTime:"10 min"},{title:"Federal Budget Legal Framework",summary:"A current visual map of the constitutional, statutory, and administrative controls that shape federal budgeting.",route:"/policy",category:"Reference",readingTime:"10 min"},{title:"Budget Spend Plan Model",summary:"An applied portfolio example for turning appropriated resources into an executable financial plan.",route:"/project7/project7",category:"Model",readingTime:"6 min"}],vb={"/tableau-1-citibike":{label:"Citi Bike (Jan 2020)",view:"Citi_15824261544430/CitiBikeJan2020",preview:"https://public.tableau.com/static/images/Ci/Citi_15824261544430/CitiBikeJan2020/1_rss.png",desktopHeight:840,mobileHeight:2477},"/tableau-2-fed-avg-salary":{label:"Federal Employee Salary",view:"Labor-Fed-092018/DB",preview:"https://public.tableau.com/static/images/La/Labor-Fed-092018/DB/1_rss.png",desktopHeight:870,mobileHeight:1450},"/tableau-3-covid19":{label:"COVID-19 Dashboard",view:"PsTableau-03/Dashboard1",preview:"https://public.tableau.com/static/images/Ps/PsTableau-03/Dashboard1/1_rss.png",desktopHeight:840,mobileHeight:1177},"/project13/project13":{label:"Federal Government Spending Dashboard",view:"FederalGovernmentSpendingDashboard/Dashboard1",preview:"https://public.tableau.com/static/images/Fe/FederalGovernmentSpendingDashboard/Dashboard1/1_rss.png",desktopHeight:840,mobileHeight:1277},"/project14/project14":{label:"Budget and Execution Historical Table",view:"Budget_15927103644200/Dashboard1",preview:"https://public.tableau.com/static/images/Bu/Budget_15927103644200/Dashboard1/1_rss.png",desktopHeight:840,mobileHeight:1177}},yb="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";function xb({project:d}){te.useEffect(()=>{if(document.getElementById("tableau-embedding-api"))return;const x=document.createElement("script");x.id="tableau-embedding-api",x.type="module",x.src=yb,document.head.appendChild(x)},[]);const m=`https://public.tableau.com/views/${d.view}`,w=window.innerWidth<=600?d.mobileHeight:d.desktopHeight,c=te.createElement("tableau-viz",{src:m,width:"100%",height:String(w),toolbar:"bottom","hide-tabs":"",device:window.innerWidth<=600?"phone":"desktop","aria-label":d.label});return s.jsxs("section",{className:"tableau-embed","aria-label":`${d.label} interactive visualization`,children:[s.jsxs("div",{className:"tableau-embed-frame",style:{minHeight:`${w}px`,backgroundImage:`linear-gradient(rgba(7,28,42,.1),rgba(7,28,42,.1)),url("${d.preview}")`},children:[s.jsxs("div",{className:"tableau-loading","aria-hidden":"true",children:[s.jsx("span",{}),"Loading interactive dashboard…"]}),c]}),s.jsxs("div",{className:"tableau-embed-footer",children:[s.jsx("span",{children:"Interactive visualization hosted by Tableau Public"}),s.jsxs("a",{href:m,target:"_blank",rel:"noreferrer","aria-label":`Open ${d.label} on Tableau Public`,children:["Open in Tableau Public ",s.jsx(et,{size:16})]})]})]})}const wb=[{year:"1787–1789",title:"Constitutional power of the purse",body:"Article I gives Congress the taxing, borrowing, and spending powers. The Appropriations Clause makes an enacted appropriation a legal condition for drawing money from the Treasury and requires public accounts."},{year:"1870–1906",title:"Antideficiency controls take shape",body:"Congress first prohibited departments from exceeding appropriations, then strengthened the rule, restricted voluntary services, added penalties, and developed the apportionment system."},{year:"1921",title:"Budget and Accounting Act",body:"The Act required a consolidated presidential budget, created the Bureau of the Budget—later OMB—and established the General Accounting Office, now GAO."},{year:"1974",title:"Congressional Budget and Impoundment Control Act",body:"Congress created its Budget Committees and CBO, established the budget-resolution and reconciliation framework, and prescribed the exclusive statutory process for rescissions and deferrals."},{year:"1985–1987",title:"Deficit control and separation of powers",body:"Gramm–Rudman–Hollings introduced sequestration. After Bowsher v. Synar invalidated the Comptroller General’s executive role, Congress revised the enforcement mechanism."},{year:"1990",title:"Budget Enforcement and credit reform",body:"The Budget Enforcement Act shifted attention to discretionary caps and PAYGO; the Federal Credit Reform Act moved loans and guarantees to subsidy-cost budgeting."},{year:"1990–2010",title:"Management, performance, and accountability",body:"The CFO Act, GPRA, and GPRA Modernization Act linked resources to financial control, auditable reporting, strategic goals, and measurable performance."},{year:"2010–2013",title:"PAYGO and sequestration return",body:"Statutory PAYGO created rolling scorecards for direct spending and revenue laws. The Budget Control Act of 2011 triggered the 2013 sequestration and capped discretionary funding through FY2021."},{year:"2021–2026",title:"Transparency and renewed impoundment scrutiny",body:"Congress required online budget justifications and apportionment transparency. GAO’s recent decisions and FY2025 Antideficiency Act compilation show that execution law remains an active oversight field."}],Ab=[{rule:"Purpose",question:"May this account buy it?",answer:"Start with the appropriation and authorizing law. Apply the necessary-expense test: the item must bear a logical relationship to the appropriation, not be prohibited, and not belong to another more specific appropriation.",example:"An agency wants to pay a public-awareness campaign from an IT modernization account. Mission relevance alone is insufficient if the expense is outside the account’s statutory object."},{rule:"Time",question:"Is this a bona fide need of the fund’s period?",answer:"Identify whether the money is annual, multiple-year, or no-year. An annual appropriation generally serves needs arising during that fiscal year; severable services and nonseverable undertakings require different analyses.",example:"A year-end order cannot merely stockpile next year’s routine needs. A properly documented, nonseverable project may be charged when the need arises even if performance continues later."},{rule:"Amount",question:"Is enough legally available?",answer:"Check the account balance, statutory ceilings and floors, OMB apportionment, agency allotments, commitments, and prior obligations before creating a binding obligation.",example:"A valid contract that exceeds an allotment can trigger 31 U.S.C. §1517 even when the parent appropriation still has an unobligated balance."},{rule:"Movement",question:"Transfer or reprogramming?",answer:"A transfer moves budget authority between appropriation accounts and requires statutory authority. A reprogramming shifts funds within an account; it may be constrained by law, report language, and committee-notification procedures.",example:"Moving funds from Operations to Procurement is not an internal management adjustment—it needs transfer authority and compliance with any transfer ceiling."},{rule:"Continuing resolution",question:"What may continue before full-year funding?",answer:"Read the CR itself and OMB guidance. Agencies normally operate at a prescribed rate and under restrictions on new starts, accelerated obligations, or actions that would preempt final congressional decisions.",example:"A program authorized in permanent law may still lack usable annual budget authority. Under a CR, a new production line may be barred even when the account receives a temporary rate."},{rule:"Lapse or withholding",question:"Must activity stop, or may funds be delayed?",answer:"During a lapse, continue only activities with available funding or a recognized legal exception. With enacted funds, an executive delay must be programmatic or comply with the Impoundment Control Act; policy disagreement is not independent authority.",example:"Personnel protecting life or property may incur limited obligations during a shutdown, but payment generally awaits an appropriation. A policy pause cannot be held through expiration to defeat Congress’s decision."}],jb=[["Constitution Annotated: Appropriations Clause","https://constitution.congress.gov/browse/article-1/section-9/clause-7/"],["GAO Red Book","https://www.gao.gov/legal/appropriations-law/red-book"],["GAO Antideficiency Act resources","https://www.gao.gov/legal/appropriations-law/resources"],["GAO Impoundment Control Act decisions","https://www.gao.gov/legal/appropriations-law/impoundment-control-act"],["OMB Circular A-11","https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf"],["CRS: Executive Budget Process","https://www.congress.gov/crs-product/R47019"],["CRS: Federal Funding Gaps","https://www.congress.gov/crs-products/product/pdf/RS/RS20348"],["Title 31, Chapter 13","https://uscode.house.gov/view.xhtml?edition=prelim&req=granuleid%3AUSC-prelim-title31-chapter13"]];function Sb({onNavigate:d}){return te.useEffect(()=>{document.title="Federal Budget and Appropriations Law | Budget Matter"},[]),s.jsxs("main",{className:"law-paper",children:[s.jsx("section",{className:"law-paper-hero",children:s.jsxs("div",{className:"law-paper-hero-content",children:[s.jsx("p",{className:"eyebrow",children:"Budget Matter professional reference · updated July 13, 2026"}),s.jsx("h1",{children:"Federal Budget and Appropriations Law"}),s.jsx("p",{className:"law-deck",children:"A practical introduction to what the law requires, why the controls exist, how money moves from legislation to execution, and what history teaches when constitutional boundaries are tested."}),s.jsxs("div",{className:"law-paper-meta",children:[s.jsx("span",{children:"Professional introduction"}),s.jsx("span",{children:"25 minute read"}),s.jsx("span",{children:"Primary government sources"})]})]})}),s.jsxs("article",{className:"native-shell law-paper-body",children:[s.jsxs("aside",{className:"law-scope",children:[s.jsx(zs,{}),s.jsxs("div",{children:[s.jsx("strong",{children:"Scope and method"}),s.jsx("p",{children:"This paper explains the generally applicable federal framework. An agency must still read the current appropriation, authorizing law, general provisions, account language, OMB apportionment, and its own fund-control regulations. It is educational analysis, not a legal opinion for a particular transaction."})]})]}),s.jsxs("section",{className:"law-introduction",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"The governing idea"}),s.jsx("h2",{children:"Constitutional foundation"})]}),s.jsxs("div",{children:[s.jsx("p",{children:"Federal budget law is the operating system of representative government. Article I, section 9, clause 7 provides that money may be drawn from the Treasury only as a consequence of appropriations made by law. That short command does three jobs: Congress decides whether public money is available; executive officers may execute but not rewrite that decision; and the public is entitled to an account of receipts and expenditures."}),s.jsxs("p",{children:["An appropriation is therefore more than financing. It is legislation that defines authority through ",s.jsx("strong",{children:"purpose, time, and amount"}),". These dimensions convert policy into administrable boundaries. They also make accountability possible: an auditor, inspector general, appropriations committee, court, or taxpayer can compare what Congress enacted with what the executive branch obligated and spent."]}),s.jsx("p",{children:"The President’s budget remains a recommendation. Congress may accept, reject, restructure, or ignore it. Once legislation is enacted, however, the President must faithfully execute the resulting law, subject to the limited flexibility Congress has granted."})]})]}),s.jsxs("section",{className:"law-control-stack","aria-label":"Federal budget legal control stack",children:[s.jsx("p",{className:"section-kicker",children:"From highest authority to transaction"}),s.jsx("h2",{children:"The legal control stack"}),s.jsx("div",{className:"control-stack",children:[["01","Constitution","Congress holds the purse; the President executes enacted law."],["02","Organic and authorizing statutes","Create agencies, programs, duties, benefits, and substantive limits."],["03","Budget and appropriations statutes","Provide and condition budget authority; establish process and enforcement."],["04","Apportionment and fund controls","OMB and agencies subdivide authority to prevent deficiency or premature exhaustion."],["05","Obligation and outlay","Officials create legal liabilities, record them, receive performance, and make payment."],["06","Reporting and oversight","SF 133, financial statements, USASpending, inspectors general, GAO, and Congress test compliance."]].map(([m,w,c])=>s.jsxs("div",{children:[s.jsx("span",{children:m}),s.jsx("h3",{children:w}),s.jsx("p",{children:c})]},m))})]}),s.jsxs("section",{className:"law-workflow",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Authority becomes action"}),s.jsx("h2",{children:"How the appropriations system works"})]}),s.jsx("p",{children:"The process is not one statute or one annual vote. It is a chain of legal decisions, with a different institution responsible at each control point."})]}),s.jsx("ol",{className:"law-flow",children:[["Authorize","Congress creates or continues a program and may set eligibility, duties, or an authorization of appropriations. Authorization alone usually does not supply spendable budget authority."],["Set the fiscal plan","The congressional budget resolution coordinates totals and may provide reconciliation instructions. It is not presented to the President and does not itself fund agencies."],["Allocate and appropriate","A 302(a) allocation reaches the Appropriations Committees; 302(b) suballocations guide the 12 subcommittees. Enacted appropriations supply budget authority and legal conditions."],["Apportion and allot","OMB apportions most executive resources under the Antideficiency Act. Agencies then allot or suballot funds under approved administrative-control systems."],["Commit and obligate","A commitment reserves funds administratively; an obligation creates a definite legal liability. Obligations must satisfy purpose, time, amount, and 31 U.S.C. §1501 recording requirements."],["Perform and outlay","Goods, services, grants, or benefits are delivered and the government liquidates obligations through payments. An outlay is not the same event as an obligation."],["Report and oversee","Agencies reconcile execution data, report budgetary resources and financial results, evaluate performance, and respond to congressional, GAO, inspector-general, and public oversight."]].map(([m,w],c)=>s.jsxs("li",{children:[s.jsx("span",{children:String(c+1).padStart(2,"0")}),s.jsxs("div",{children:[s.jsx("h3",{children:m}),s.jsx("p",{children:w})]})]},m))})]}),s.jsxs("section",{className:"availability-section",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"The transaction test"}),s.jsx("h2",{children:"Purpose · Time · Amount"})]}),s.jsx("p",{children:"Appropriations law review should occur before an official commits the government—not after an invoice arrives."})]}),s.jsxs("div",{className:"availability-grid",children:[s.jsxs("article",{children:[s.jsx(Za,{}),s.jsx("h3",{children:"Purpose"}),s.jsx("strong",{children:"31 U.S.C. §1301(a)"}),s.jsx("p",{children:"Use appropriations only for the objects Congress made available. The necessary-expense doctrine fills reasonable operational gaps but cannot defeat an express prohibition or a more specific appropriation."})]}),s.jsxs("article",{children:[s.jsx(zl,{}),s.jsx("h3",{children:"Time"}),s.jsx("strong",{children:"31 U.S.C. §1502(a)"}),s.jsx("p",{children:"Charge a fixed-period appropriation only for legitimate needs of its availability period. Expired accounts remain available for limited adjustments and liquidation, not new obligations."})]}),s.jsxs("article",{children:[s.jsx(to,{}),s.jsx("h3",{children:"Amount"}),s.jsx("strong",{children:"31 U.S.C. §§1341, 1342, 1517"}),s.jsx("p",{children:"Do not exceed an appropriation, fund, apportionment, or allotment; do not obligate in advance of appropriations; and do not accept unauthorized voluntary services."})]})]})]}),s.jsxs("section",{className:"statute-map",children:[s.jsx("p",{className:"section-kicker",children:"What each major law contributes"}),s.jsx("h2",{children:"Core statutory architecture"}),s.jsxs("div",{className:"statute-table",role:"table","aria-label":"Major federal budget laws and their effects",children:[s.jsxs("div",{role:"row",className:"statute-header",children:[s.jsx("span",{role:"columnheader",children:"Authority"}),s.jsx("span",{role:"columnheader",children:"Why it exists"}),s.jsx("span",{role:"columnheader",children:"Operational effect"})]}),[["Budget and Accounting Act of 1921","Replace fragmented agency requests with a coordinated executive budget.","Requires a consolidated presidential submission and anchors OMB and GAO’s institutional roles."],["Congressional Budget Act of 1974","Give Congress its own comprehensive process and analytic capacity.","Creates budget resolutions, committee allocations, reconciliation, points of order, Budget Committees, and CBO."],["Impoundment Control Act of 1974","Prevent unilateral executive nullification of enacted spending choices.","Requires special messages; rescissions need enactment and deferrals are limited. Funds may not be withheld simply until they expire."],["Antideficiency Act","Keep execution within congressional and administrative limits.","Prohibits excess or advance obligations and unauthorized voluntary service; requires apportionment, discipline, and violation reports."],["31 U.S.C. §§1301, 1501, 1502, 1551–1558","Make account availability and obligation records legally meaningful.","Governs purpose, documentary evidence, bona fide needs, expiration, and closing of accounts."],["BBEDCA, Budget Enforcement Act, and Statutory PAYGO","Enforce aggregate fiscal choices after legislation is scored.","Uses caps, scorecards, points of order, or sequestration depending on the current statutory regime and enacted exceptions."],["Federal Credit Reform Act of 1990","Expose the long-term cost of direct loans and guarantees when decisions are made.","Budgets the estimated subsidy cost on a net-present-value basis and separates financing accounts."],["CFO Act, GPRA, and related reforms","Connect legal authority to reliable financial information and results.","Establishes financial leadership, audited statements, strategic plans, performance goals, reviews, and public reporting."]].map(([m,w,c])=>s.jsxs("div",{role:"row",children:[s.jsx("strong",{role:"cell",children:m}),s.jsx("span",{role:"cell",children:w}),s.jsx("span",{role:"cell",children:c})]},m))]})]}),s.jsxs("section",{className:"law-history",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Law shaped by conflict"}),s.jsx("h2",{children:"Historical case studies"})]}),s.jsx("p",{children:"Budget controls are institutional memory. Each major reform responds to a recurring failure: fragmentation, overspending, executive withholding, weak information, or breakdown in enactment."})]}),s.jsxs("div",{className:"law-case-grid",children:[s.jsxs("article",{children:[s.jsx("span",{children:"1970s · Impoundment"}),s.jsx(ch,{}),s.jsx("h3",{children:"Nixon-era withholding and the 1974 settlement"}),s.jsx("p",{children:"President Nixon’s broad refusal to spend funds for programs he opposed intensified a constitutional dispute over whether the executive could defeat enacted appropriations. Congress answered with the Impoundment Control Act: the President may propose a rescission, but Congress must enact it; a deferral is temporary and cannot substitute executive policy for law."}),s.jsx("strong",{children:"Impact:"}),s.jsx("p",{children:"Modern execution analysis asks whether a delay is a legitimate programmatic incident or an unreported impoundment. Recent GAO decisions show this question remains live."})]}),s.jsxs("article",{children:[s.jsx("span",{children:"1985–1987 · Sequestration"}),s.jsx(Rl,{}),s.jsx("h3",{children:"Gramm–Rudman–Hollings and Bowsher v. Synar"}),s.jsx("p",{children:"Congress sought automatic deficit reduction through sequestration calculations led by the Comptroller General. In 1986, the Supreme Court held that Congress could not retain removal control over an officer exercising executive power. Congress revised the mechanism, illustrating that even fiscal enforcement must respect separation of powers."}),s.jsx("strong",{children:"Impact:"}),s.jsx("p",{children:"Today’s sequestration statutes assign execution calculations to OMB while CBO supplies independent estimates to Congress."})]}),s.jsxs("article",{children:[s.jsx("span",{children:"1995–2019 · Funding gaps"}),s.jsx(zl,{}),s.jsx("h3",{children:"Shutdowns turn the ADA into operating law"}),s.jsx("p",{children:"The FY1996 shutdowns disrupted parks, passports, research, contracting, and public services. FY2014 produced a 16-day shutdown. The FY2019 partial shutdown lasted 35 days—the longest full-day funding gap—and demonstrated that “excepted” work can continue while payment, grants, procurement, and oversight remain constrained."}),s.jsx("strong",{children:"Impact:"}),s.jsx("p",{children:"Agencies now maintain contingency plans under OMB Circular A‑11, but a plan cannot create authority that the Antideficiency Act withholds."})]}),s.jsxs("article",{children:[s.jsx("span",{children:"2011–2013 · Automatic cuts"}),s.jsx(to,{}),s.jsx("h3",{children:"The Budget Control Act and 2013 sequestration"}),s.jsx("p",{children:"When the Joint Select Committee process did not achieve the prescribed deficit reduction, statutory automatic reductions took effect. CBO reported lowered discretionary caps and mandatory sequestration, while agencies translated uniform legal reductions into program-level effects."}),s.jsx("strong",{children:"Impact:"}),s.jsx("p",{children:"Across-the-board enforcement can deliver a numerical target yet impose uneven operational costs, showing the difference between aggregate budget control and program management."})]}),s.jsxs("article",{children:[s.jsx("span",{children:"2019–2020 · Ukraine assistance"}),s.jsx(Za,{}),s.jsx("h3",{children:"Apportionment cannot become policy impoundment"}),s.jsx("p",{children:"GAO concluded that OMB violated the Impoundment Control Act when it withheld security assistance for a policy reason. The decision stated that faithful execution does not permit the President to replace Congress’s enacted priorities with the President’s own."}),s.jsx("strong",{children:"Impact:"}),s.jsx("p",{children:"Congress later strengthened apportionment-transparency requirements, recognizing that footnotes and timing controls can have the same practical force as statutory text."})]}),s.jsxs("article",{children:[s.jsx("span",{children:"2025–2026 · Current enforcement"}),s.jsx(zs,{}),s.jsx("h3",{children:"FEMA, NIH, and reported ADA violations"}),s.jsx("p",{children:"In 2025, GAO found Impoundment Control Act violations in several funding-pause matters, including certain FEMA assistance and NIH grant funds. On April 30, 2026, GAO published its FY2025 compilation of agency Antideficiency Act reports."}),s.jsx("strong",{children:"Impact:"}),s.jsx("p",{children:"Appropriations law is not an archival specialty: delayed grants, staffing actions, apportionments, and execution directives can create current legal and oversight exposure."})]})]})]}),s.jsxs("section",{className:"law-timeline-section",children:[s.jsx("p",{className:"section-kicker",children:"A century of institutional design"}),s.jsx("h2",{children:"How the framework evolved"}),s.jsx("ol",{className:"law-timeline",children:wb.map(m=>s.jsxs("li",{"data-testid":"law-timeline-entry",children:[s.jsx("time",{children:m.year}),s.jsxs("div",{children:[s.jsx("h3",{children:m.title}),s.jsx("p",{children:m.body})]})]},m.year))})]}),s.jsxs("section",{className:"use-case-section",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Apply the law before obligating"}),s.jsx("h2",{children:"Practical appropriation use cases"})]}),s.jsx("p",{children:"These examples show the questions a program manager, budget analyst, contracting officer, certifying official, counsel, or fund holder should surface early."})]}),s.jsx("div",{className:"use-case-grid",children:Ab.map((m,w)=>s.jsxs("article",{"data-testid":"appropriation-use-case",children:[s.jsxs("span",{children:[String(w+1).padStart(2,"0")," · ",m.rule]}),s.jsx("h3",{children:m.question}),s.jsx("p",{children:m.answer}),s.jsxs("aside",{children:[s.jsx("strong",{children:"Example"}),m.example]})]},m.rule))})]}),s.jsxs("section",{className:"current-framework",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Verified current · July 13, 2026"}),s.jsx("h2",{children:"Current operating framework"})]}),s.jsxs("div",{className:"current-grid",children:[s.jsxs("article",{children:[s.jsx("strong",{children:"2025 Circular A‑11"}),s.jsx("p",{children:"OMB’s August 29, 2025 edition is the current published operational instruction located in this review. It covers FY2027 formulation and execution controls including apportionment, continuing resolutions, lapses, SF 133 reporting, ADA reporting, and fund-control regulations."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"FY2025 ADA compilation"}),s.jsx("p",{children:"GAO’s April 30, 2026 compilation is the newest annual collection located in this review. Reported violations are practical evidence of where controls fail and should be used in training and risk reviews."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"Impoundment remains active"}),s.jsx("p",{children:"GAO’s 2025 decisions include findings involving FEMA and NIH funds. Officials must distinguish an ordinary programmatic delay from a withholding that requires an ICA special message or immediate release."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"Annual law still controls"}),s.jsx("p",{children:"Permanent statutes are only the foundation. Account text, provisos, general provisions, anomalies in a CR, emergency designations, transfer authorities, and later amendments can change the answer for a fiscal year."})]})]})]}),s.jsxs("section",{className:"law-practice-checklist",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"A defensible file"}),s.jsx("h2",{children:"Seven questions before approval"})]}),s.jsx("ol",{children:["What exact statute and account provide the authority?","Is the proposed object a permissible purpose, and is a more specific account available?","When did the bona fide need arise, and what is the appropriation’s availability period?","What unobligated balance is legally available after ceilings, floors, apportionments, and allotments?","Does the action create a valid obligation, and is the documentary evidence sufficient under 31 U.S.C. §1501?","Is any transfer, reprogramming, notification, competition, or approval requirement triggered?","How will the decision be recorded, reported, monitored, and explained to an independent reviewer?"].map((m,w)=>s.jsxs("li",{children:[s.jsx("span",{children:w+1}),m]},m))})]}),s.jsxs("section",{className:"law-sources",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Primary-source reading room"}),s.jsx("h2",{children:"Official sources"}),s.jsx("p",{children:"Use these sources—and the specific current appropriation—to validate an operational conclusion. Historical summaries in this paper are explanatory, not substitutes for enacted text or a formal legal decision."})]}),s.jsx("div",{children:jb.map(([m,w])=>s.jsxs("a",{href:w,target:"_blank",rel:"noreferrer",children:[m,s.jsx(et,{})]},w))})]}),s.jsxs("button",{className:"law-back-link",onClick:()=>d("/knowledge"),children:["Return to the Knowledge hub ",s.jsx(qe,{})]})]})]})}const Wp=[{number:"01",title:"The Constitution",detail:"Article I assigns Congress the taxing, borrowing, and spending powers. The Appropriations Clause requires an appropriation made by law before money may be drawn from the Treasury."},{number:"02",title:"Organic and authorizing law",detail:"Creates agencies, programs, duties, eligibility rules, and substantive authorities. An authorization of appropriations may recommend funding, but normally does not itself provide budget authority."},{number:"03",title:"Budget and appropriations law",detail:"Structures formulation and congressional decision-making, provides budget authority, and sets account-specific conditions, ceilings, floors, transfer authority, and periods of availability."},{number:"04",title:"Execution controls",detail:"OMB apportionments, agency allotments, fund-control regulations, and recording rules translate enacted authority into legally controlled operating limits."},{number:"05",title:"Oversight and accountability",detail:"Congress, GAO, inspectors general, financial auditors, performance reviews, and public reporting compare execution with the law and the results Congress intended."}],$p=[["Congress enacts","Budget authority and legal conditions"],["OMB apportions","Resources divided by time or activity"],["Agency allots","Internal legal and administrative limits"],["Official obligates","Government incurs a binding liability"],["Program performs","Goods, services, grants, or benefits delivered"],["Treasury outlays","Payment liquidates the obligation"],["Oversight tests","Law, records, results, and corrective action"]],Cb=[["Budget and Accounting Act of 1921","Created the consolidated presidential budget and the institutional foundation for OMB and GAO."],["Congressional Budget Act of 1974","Created the Budget Committees and CBO, and established the budget resolution, allocations, reconciliation, and enforcement procedures."],["Impoundment Control Act of 1974","Limits executive withholding of enacted budget authority and establishes procedures for rescissions and deferrals."],["Purpose, time, and recording statutes","31 U.S.C. §§1301, 1501, 1502, and 1551–1558 govern authorized objects, bona fide needs, documentary evidence, expiration, and account closing."],["Antideficiency Act","31 U.S.C. §§1341, 1342, and 1511–1519 prohibit excess or advance obligations, unauthorized voluntary services, and violations of apportionments or allotments."],["BBEDCA and Statutory PAYGO","Provide amended sequestration and scorecard mechanisms. Their application depends on the current statute, exemptions, designations, and later legislation."],["Federal Credit Reform Act of 1990","Measures the subsidy cost of direct loans and loan guarantees on a net-present-value basis when credit decisions are made."],["CFO Act, GPRA, and related reforms","Connect budget authority with financial leadership, audited reporting, strategic planning, performance measurement, evidence, and management review."]];function Mb({onNavigate:d}){return te.useEffect(()=>{document.title="Federal Budget Legal Framework | Budget Matter"},[]),s.jsxs("main",{className:"policy-native",children:[s.jsxs("section",{className:"policy-hero",children:[s.jsxs("div",{className:"policy-hero-copy",children:[s.jsx("p",{className:"eyebrow",children:"Power of the purse · execution · accountability"}),s.jsx("h1",{children:"Federal Budget Legal Framework"}),s.jsx("p",{children:"A current visual map of the constitutional, statutory, and administrative controls that determine who may commit public money, for what purpose, during what period, and within what amount."}),s.jsxs("div",{className:"policy-hero-actions",children:[s.jsxs("a",{href:"/knowledge/federal-budget-laws",onClick:m=>{m.preventDefault(),d("/knowledge/federal-budget-laws")},children:["Read the in-depth paper ",s.jsx(qe,{})]}),s.jsx("span",{children:"Verified July 13, 2026"})]})]}),s.jsxs("figure",{className:"policy-hero-visual",children:[s.jsx("img",{src:"/assets/img/budgetlaws.jpg",alt:"Illustration of federal budget laws connecting Congress, agencies, public resources, and accountability"}),s.jsx("figcaption",{children:"Law connects policy decisions to controlled public spending."})]})]}),s.jsxs("div",{className:"native-shell policy-body",children:[s.jsxs("section",{className:"policy-opening",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"What this page does"}),s.jsx("h2",{children:"Law is the control system—not simply a list of acts"})]}),s.jsxs("div",{children:[s.jsx("p",{children:"The federal budget framework allocates institutional power. Congress establishes programs and provides budget authority. The President proposes a budget and executes enacted law through OMB and executive agencies. Treasury manages cash and disbursement; GAO and Congress independently oversee whether funds were used consistently with law."}),s.jsx("p",{children:"The President’s budget is a recommendation, not an appropriation. An agency’s mission, program authorization, or policy priority also does not automatically provide spendable authority. Officials must identify an enacted funding source and comply with every applicable limitation before obligating the United States."})]})]}),s.jsxs("section",{className:"authority-diagram",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Visual 01 · legal hierarchy"}),s.jsx("h2",{children:"Where spending authority comes from"})]}),s.jsx("p",{children:"Each lower layer must remain consistent with the authority above it. Administrative guidance can implement a statute; it cannot enlarge or replace one."})]}),s.jsx("div",{className:"authority-stack","aria-label":"Hierarchy of federal budget authority",children:Wp.map((m,w)=>s.jsxs("div",{"data-testid":"authority-layer",style:{"--layer":w},children:[s.jsx("span",{children:m.number}),s.jsxs("div",{children:[s.jsx("h3",{children:m.title}),s.jsx("p",{children:m.detail})]}),w<Wp.length-1&&s.jsx(ig,{"aria-hidden":"true"})]},m.number))})]}),s.jsxs("section",{className:"execution-diagram",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Visual 02 · control flow"}),s.jsx("h2",{children:"How authority becomes accountable spending"})]}),s.jsx("p",{children:"An appropriation creates budget authority. An obligation creates a legal liability. An outlay pays it. Treating those events as interchangeable produces weak controls and misleading reporting."})]}),s.jsx("div",{className:"execution-wire","aria-label":"Flow of appropriated funds from enactment through oversight",children:$p.map(([m,w],c)=>s.jsxs("div",{"data-testid":"execution-node",className:"execution-node",children:[s.jsx("span",{children:String(c+1).padStart(2,"0")}),s.jsxs("div",{children:[s.jsx("strong",{children:m}),s.jsx("small",{children:w})]}),c<$p.length-1&&s.jsx(qe,{"aria-hidden":"true"})]},m))})]}),s.jsxs("section",{className:"pta-section",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Visual 03 · transaction screen"}),s.jsx("h2",{children:"Purpose, Time, and Amount"})]}),s.jsx("p",{children:"A transaction should clear all three availability tests and the obligation-recording rules before approval."})]}),s.jsxs("div",{className:"pta-visual",children:[s.jsxs("article",{children:[s.jsx(Za,{}),s.jsx("span",{children:"1"}),s.jsx("h3",{children:"Purpose"}),s.jsx("strong",{children:"31 U.S.C. §1301(a)"}),s.jsx("p",{children:"Does the expense logically advance the appropriation’s object, avoid a prohibition, and belong to no more specific appropriation?"})]}),s.jsx("div",{className:"pta-join","aria-hidden":"true",children:"+"}),s.jsxs("article",{children:[s.jsx(zl,{}),s.jsx("span",{children:"2"}),s.jsx("h3",{children:"Time"}),s.jsx("strong",{children:"31 U.S.C. §1502(a)"}),s.jsx("p",{children:"Is this a bona fide need of the appropriation’s period of availability, with the correct treatment for the type of supply or service?"})]}),s.jsx("div",{className:"pta-join","aria-hidden":"true",children:"+"}),s.jsxs("article",{children:[s.jsx(to,{}),s.jsx("span",{children:"3"}),s.jsx("h3",{children:"Amount"}),s.jsx("strong",{children:"31 U.S.C. §§1341, 1517"}),s.jsx("p",{children:"Is sufficient authority available after statutory limits, apportionments, allotments, commitments, and prior obligations?"})]}),s.jsx("div",{className:"pta-equals","aria-hidden":"true",children:"="}),s.jsxs("aside",{children:[s.jsx(Xa,{}),s.jsx("strong",{children:"Legally available"}),s.jsx("small",{children:"Then document and record the obligation under 31 U.S.C. §1501."})]})]})]}),s.jsxs("section",{className:"major-authorities",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"The core architecture"}),s.jsx("h2",{children:"Major authorities and their jobs"})]}),s.jsx("p",{children:"No single “Budget Act” controls the system. These authorities solve different constitutional, process, execution, enforcement, credit, and accountability problems."})]}),s.jsx("div",{className:"authority-card-grid",children:Cb.map(([m,w],c)=>s.jsxs("article",{children:[s.jsx("span",{children:String(c+1).padStart(2,"0")}),s.jsx("h3",{children:m}),s.jsx("p",{children:w})]},m))})]}),s.jsxs("section",{className:"current-law-status",children:[s.jsxs("div",{className:"status-heading",children:[s.jsx(zs,{}),s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Accuracy update"}),s.jsx("h2",{children:"What is current—and what is historical"})]})]}),s.jsxs("div",{className:"status-grid",children:[s.jsxs("article",{children:[s.jsx("strong",{children:"Current foundation"}),s.jsx("p",{children:"The Appropriations Clause, Title 31 fiscal statutes, the 1921 and 1974 budget-process laws, the Antideficiency Act, the Impoundment Control Act, and current appropriations remain central."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"Budget Control Act caps"}),s.jsx("p",{children:"The BCA discretionary caps applied from FY2012 through FY2021 and are historical. They should not be described as today’s general discretionary limits."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"Later spending caps"}),s.jsx("p",{children:"The Fiscal Responsibility Act of 2023 separately established enforceable discretionary limits for FY2024 and FY2025. Always verify the statute applicable to the fiscal year under review."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"PAYGO and sequestration"}),s.jsx("p",{children:"Statutory PAYGO and amended mandatory-sequestration provisions require current-law analysis, including exemptions, special rules, designations, and intervening legislation."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"Current execution guidance"}),s.jsx("p",{children:"OMB Circular A‑11 dated August 29, 2025 is the current published edition located in this review and governs FY2027 formulation and budget-execution procedures."})]}),s.jsxs("article",{children:[s.jsx("strong",{children:"Current enforcement evidence"}),s.jsx("p",{children:"GAO published its FY2025 Antideficiency Act reports compilation on April 30, 2026, while recent impoundment decisions demonstrate continuing oversight of delayed or withheld funds."})]})]})]}),s.jsxs("section",{className:"institution-map",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Visual 04 · institutional roles"}),s.jsx("h2",{children:"Who controls what"})]}),s.jsx("p",{children:"Budget authority moves through distinct institutions. Effective internal controls preserve those boundaries."})]}),s.jsxs("div",{className:"institution-wire",children:[s.jsxs("article",{children:[s.jsx(Za,{}),s.jsx("h3",{children:"Congress"}),s.jsx("p",{children:"Authorizes, appropriates, establishes conditions, oversees, and changes law."})]}),s.jsx(Dl,{className:"wire-icon","aria-hidden":"true"}),s.jsxs("article",{children:[s.jsx(ch,{}),s.jsx("h3",{children:"President & OMB"}),s.jsx("p",{children:"Propose the budget, coordinate policy, apportion resources, and supervise execution."})]}),s.jsx(Dl,{className:"wire-icon","aria-hidden":"true"}),s.jsxs("article",{children:[s.jsx(lh,{}),s.jsx("h3",{children:"Agencies"}),s.jsx("p",{children:"Allot, obligate, deliver programs, maintain controls, and report results."})]}),s.jsx(Dl,{className:"wire-icon","aria-hidden":"true"}),s.jsxs("article",{children:[s.jsx(Rl,{}),s.jsx("h3",{children:"GAO & oversight"}),s.jsx("p",{children:"Audit, decide appropriations questions, investigate, and support congressional accountability."})]})]})]}),s.jsxs("section",{className:"paper-promotion",children:[s.jsx(Nl,{}),s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Knowledge publication"}),s.jsx("h2",{children:"Federal Budget and Appropriations Law"}),s.jsx("p",{children:"Continue with the 25-minute professional paper for historical case studies, the complete legal timeline, practical appropriation scenarios, current enforcement developments, and a seven-question pre-obligation checklist."}),s.jsx("code",{children:"https://budgetmatter.ai.studio/knowledge/federal-budget-laws"})]}),s.jsxs("a",{href:"/knowledge/federal-budget-laws",onClick:m=>{m.preventDefault(),d("/knowledge/federal-budget-laws")},children:["Federal Budget and Appropriations Law ",s.jsx(qe,{})]})]}),s.jsxs("section",{className:"policy-sources",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Verified primary sources"}),s.jsx("h2",{children:"Source of truth"})]}),s.jsxs("div",{children:[s.jsxs("a",{href:"https://constitution.congress.gov/browse/article-1/section-9/clause-7/",target:"_blank",rel:"noreferrer",children:["Constitution Annotated ",s.jsx(et,{})]}),s.jsxs("a",{href:"https://www.gao.gov/legal/appropriations-law/red-book",target:"_blank",rel:"noreferrer",children:["GAO Red Book ",s.jsx(et,{})]}),s.jsxs("a",{href:"https://www.gao.gov/legal/appropriations-law/resources",target:"_blank",rel:"noreferrer",children:["Antideficiency Act ",s.jsx(et,{})]}),s.jsxs("a",{href:"https://www.gao.gov/legal/appropriations-law/impoundment-control-act",target:"_blank",rel:"noreferrer",children:["Impoundment Control Act ",s.jsx(et,{})]}),s.jsxs("a",{href:"https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf",target:"_blank",rel:"noreferrer",children:["OMB Circular A‑11 ",s.jsx(et,{})]}),s.jsxs("a",{href:"https://www.congress.gov/crs-product/R47019",target:"_blank",rel:"noreferrer",children:["CRS Executive Budget Process ",s.jsx(et,{})]})]})]})]})]})}const mh=`20.0-section20-overview.md\r
SECTION 20 — TERMS AND CONCEPTS\r
From OMB Circular No. A–11 (2016), Section 20\r
\r
Table of Contents\r
20.1 What is the purpose of this section?\r
20.2 How do I use this section?\r
20.3 What special terms must I know?\r
20.4 What do I need to know about budget authority?\r
(a) Definition of budget authority\r
(b) Forms of budget authority\r
(c) Period of availability of budget authority\r
(d) Determining the amount of budget authority\r
(e) Discretionary or mandatory and permanent or current budget authority\r
(f) Unobligated balance\r
(g) Obligated balance\r
(h) Reappropriation\r
(i) Rescissions and cancellations\r
(j) Transfer\r
(k) Transfer in the estimates\r
(l) Allocation\r
20.5 When should I record obligations and in what amounts?\r
20.6 What do I need to know about outlays?\r
20.7 What do I need to know about governmental receipts, offsetting collections, and offsetting receipts?\r
(a) Overview\r
(b) Governmental receipts\r
(c) General information about offsets to budget authority and outlays\r
(d) Offsetting collections\r
(e) Offsetting receipts\r
(f) Receipt accounts and expenditure accounts\r
(g) User charges\r
(h) Means of financing\r
20.8 What do I need to know about cash-equivalent transactions?\r
20.9 What do I need to know about refunds?\r
20.10 What do I need to know about advances?\r
20.11 What do I need to know about accounts and fund types?\r
20.12 What do I need to know about reimbursable work?\r
Ex–20 Transfers of Budgetary Resources among Federal Government Accounts\r
\r
Summary of Changes\r
Clarifies that when general fund payments are used to finance trust fund outlays to the public, the associated trust fund receipts are netted at the bureau level to prevent double counting in the bureau totals (section 20.6).\r
Moves the section on discretionary spending, mandatory spending and PAYGO to the new scoring section 21 (old section 20.9).\r
Clarifies the usage of management funds (section 20.11).`,eh=`20.3-terms.md\r
20.3 What special terms must I know?\r
Advance appropriation\r
Appropriations of new budget authority that become available one or more fiscal years beyond the fiscal year for which the appropriation act was passed. (See section 20.4(c).)\r
\r
Advance funding\r
Appropriations of budget authority provided in an appropriations act to be used, if necessary, to cover obligations incurred late in the fiscal year for benefit payments in excess of the amount specifically appropriated for that year, where the budget authority is charged to the appropriation for the program for the fiscal year following the fiscal year for which the appropriations act is passed. (See section 20.4(c).)\r
\r
Agency\r
A department or establishment of the Government for purposes of this Circular. (Compare to bureau.)\r
\r
Allowance\r
A lump-sum included in the budget to represent transactions expected to increase or decrease budget authority, outlays, or receipts but that are not reflected in program details. The President does not propose that Congress enact an allowance as such, but rather that Congress modify specific legislative measures as needed to produce the represented changes.\r
\r
Amendment\r
A proposed action that revises the President's budget request and is transmitted prior to completion of action on the budget request by the Appropriations Committees of both Houses of Congress. (See section 110.2.)\r
\r
Apportionment\r
A plan, approved by OMB, to spend resources provided by annual appropriations acts, supplemental appropriations acts, continuing resolutions, or permanent law (mandatory appropriations). Resources are apportioned by Treasury Appropriation Fund Symbol (TAFS). The apportionment identifies amounts available for obligation and expenditure and specifies and limits obligations and expenditures for specified time periods, programs, activities, projects, objects, or combinations thereof. Apportioned amounts may be further subdivided by an agency into allotments, suballotments, and allocations. (See Appendix H.)\r
\r
Appropriated entitlement\r
See entitlement.\r
\r
Appropriation\r
A provision of law (not necessarily in an appropriations act) authorizing the expenditure of funds for a given purpose. Usually, but not always, an appropriation provides budget authority. (See section 20.4.)\r
\r
Appropriation account\r
See Treasury Appropriation Fund Symbol.\r
\r
Balanced Budget and Emergency Deficit Control Act of 1985 (BBEDCA)\r
Legislation that shaped the budget process, initially by setting fixed deficit targets and later by replacing those with a Pay-As-You-Go requirement for new tax or mandatory spending legislation and caps on annual discretionary funding. Many requirements expired in 2002. The Statutory Pay-As-You-Go Act of 2010 reinstated a statutory pay-as-you-go rule for revenues and mandatory spending legislation. The Budget Control Act of 2011 (BCA), which amended BBEDCA, reinstated discretionary caps on budget authority. (See section 21.3.)\r
\r
Balances of budget authority\r
Amounts of budget authority provided in previous years that have not been outlayed.\r
\r
Baseline\r
A projection of estimated receipts, outlays, and deficit or surplus that would result from continuing current law or current policies through the budget period. (See section 80.)\r
\r
Borrowing authority\r
A type of budget authority that permits obligations and outlays to be financed by borrowing. (See section 20.4(b).)\r
\r
Budget\r
The Budget of the United States Government, setting forth the President's comprehensive financial plan and indicating the President's priorities for the Federal Government. (See section 10.1.)\r
\r
Budget authority (BA)\r
The authority provided by law to incur financial obligations that will result in outlays. Forms of budget authority are appropriations, borrowing authority, contract authority, and spending authority from offsetting collections. (See section 20.4.)\r
\r
Budget Control Act of 2011\r
Legislation that, among other things, amended BBEDCA to reinstate discretionary spending limits on budget authority through 2021 and restored enforcement; increased the statutory debt ceiling; and established a Joint Select Committee on Deficit Reduction. It also provided a process to implement alternative spending reductions if sufficient deficit-reduction legislation was not enacted. (See section 21.3.)\r
\r
Budget totals\r
Totals included in the budget for budget authority, outlays, receipts, and surplus or deficit. Presentations often distinguish on‑budget totals from off‑budget totals. On‑budget totals reflect transactions of all Federal Government entities except those excluded by law. Off‑budget totals reflect transactions of Government entities excluded by law (currently Social Security trust funds and the Postal Service). The budget combines on‑ and off‑budget totals to derive unified totals for Federal activity.\r
\r
Budget year (BY)\r
The fiscal year for which the budget is being considered, i.e., the fiscal year of the Government that starts on October 1 of the calendar year in which that session of Congress begins.\r
\r
Budgetary resources\r
Amounts available to incur obligations in a given year, consisting of new budget authority and unobligated balances of budget authority provided in previous years.\r
\r
Bureau\r
The principal subordinate organizational units of an agency.\r
\r
Cancellation\r
A proposal by the President to reduce budget resources (new budget authority or unobligated balances of budget authority) that is not subject to Title X of the Congressional Budget and Impoundment Control Act of 1974. Resources proposed for cancellation cannot be withheld from obligation pending Congressional action. The term is sometimes used more broadly to refer to any legislative action that reduces budgetary resources, including rescissions. Cancellations can be temporary or permanent. (See section 20.4(i).)\r
\r
Cancellations as a type of reduction should not be confused with the canceled phase of annual and multi‑year authority (see section 20.4(c)) or cancellations of budgetary resources in no‑year accounts under 31 U.S.C. 1555 (See Appendix F).\r
\r
Cap\r
Legal limits for each fiscal year under BBEDCA on budget authority and, when applicable, outlays provided by discretionary appropriations.\r
\r
Cap adjustment\r
An increase or decrease permitted to statutory cap limits under BBEDCA for discretionary budget authority and, when applicable, outlays, if certain conditions are met (such as base funding, designated funds, or conceptual changes).\r
\r
Cash equivalent transaction\r
A transaction in which the Government makes outlays or receives collections in a form other than cash or where the outlays or receipts recorded in the budget differ from the cash because cash does not accurately measure the value of the transaction. (See section 20.8.)\r
\r
CHIMP\r
"CHange In a Mandatory Program" proposed or enacted in an appropriations bill rather than authorizing legislation. Applies only to provisions in appropriations acts that change mandatory budget authority, outlays, offsetting collections, or offsetting receipts relative to the baseline. For scoring, these changes are treated as discretionary until enacted; thereafter they are part of the mandatory baseline. (See section 81.2.) Under the Statutory Pay-As-You-Go Act of 2010, outlay effects of CHIMPs that alter mandatory budget authority in an outyear are classified as PAYGO impacts except when net outlay effect is zero over six years beginning with the current year. Revenue changes are always classified as PAYGO.\r
\r
Collections\r
Money collected by the Government that the budget records as a governmental receipt, offsetting collection, or offsetting receipt. (See section 20.7.)\r
\r
Contract authority\r
A type of budget authority that permits obligations in advance of an appropriation, offsetting collections, or receipts, which will later be used to make outlays to liquidate the obligations. Typically provided in authorizing statutes. (See section 20.4(b).)\r
\r
Cost\r
Price or cash value of resources used to produce a program, project, or activity. In Federal credit programs, cost means the estimated long-term cost to the Government of a direct loan or loan guarantee, on a net present value basis, excluding administrative costs and incidental receipt/outlay effects. (See section 185 and related OMB circulars.)\r
\r
Credit program account\r
A budget account that receives and obligates appropriations to cover the subsidy cost of a direct loan or loan guarantee and disburses the subsidy amount to a financing account. (See section 185.)\r
\r
Current services estimates\r
See baseline.\r
\r
Deferral\r
Any executive branch action or inaction that temporarily withholds, delays, or effectively precludes the obligation or expenditure of budgetary resources. Reported by the President to Congress by special message; not identified separately in the budget. (See section 112.)\r
\r
Deficit\r
Amount by which outlays exceed receipts in a fiscal year. May refer to on‑budget, off‑budget, or unified budget deficit.\r
\r
Deposit fund\r
An account established to record amounts held temporarily by the Government until ownership is determined or held as agent for others. (See section 20.11.)\r
\r
Direct loan\r
A disbursement of funds by the Government to a non‑Federal borrower under a contract requiring repayment with or without interest, including certain equivalent credit transactions. (See section 185.)\r
\r
Direct spending\r
See mandatory spending.\r
\r
Disaster funding\r
A discretionary appropriation that Congress designates as being for disaster relief, resulting in a cap adjustment under BBEDCA subject to a specified ceiling formula.\r
\r
Discretionary spending\r
Budgetary resources, other than those provided to fund mandatory programs, that are provided in appropriations acts. (See section 21.3.)\r
\r
Emergency requirement\r
An amount that Congress has designated as an emergency requirement in statute and, for discretionary appropriations, designated on an account-by-account basis. Such amounts are excluded from estimated budgetary effects of PAYGO legislation if mandatory or receipts. A discretionary appropriation so designated and subsequently designated by the President results in a cap adjustment under BBEDCA.\r
\r
Entitlement\r
A program in which the Federal Government is legally obligated to make payments or provide aid to any person or government that meets legal eligibility criteria. Includes some programs funded by appropriations acts whose authorizing statutes unconditionally obligate payments (appropriated entitlements). (See mandatory spending, section 21.3.)\r
\r
Expenditure transfer\r
See transfers.\r
\r
Federal funds group\r
Monies collected and spent through accounts other than trust fund accounts (i.e., general, special, public enterprise, and intragovernmental funds). (See section 20.11.)\r
\r
Financing account\r
A non‑budgetary account that records all cash flows from post‑1991 direct loan obligations or loan guarantee commitments. At least one financing account per credit program; separate accounts for direct loans and guarantees when both are present. (See section 185.)\r
\r
Fiscal year\r
Government's accounting period: begins October 1 and ends September 30, designated by calendar year in which it ends.\r
\r
Forward funding\r
Appropriations of budget authority that become available for obligation in the last quarter of the fiscal year for financing ongoing grant programs during the next fiscal year. (See section 20.4(c).)\r
\r
Full-time equivalent (FTE) employment\r
Measure of employment used in the budget—total hours worked (or to be worked) divided by compensable hours in the fiscal year. (See section 85.)\r
\r
Functional classification\r
Array of budget authority, outlays, and other data by major purpose (e.g., agriculture, national defense, transportation). (See section 79.3.)\r
\r
General fund\r
Accounts for collections not earmarked by law for specific purposes, proceeds of general borrowing, and expenditure of these monies. Part of the Federal funds group.\r
\r
Government sponsored enterprises (GSEs)\r
Private enterprises established and chartered by the Federal Government for public policy purposes. Classified as non‑budgetary and excluded from the Federal budget because they are private companies and their securities are not backed by full faith and credit of the Government.\r
\r
Governmental receipts\r
Collections that result from the Government's exercise of sovereign power to tax or compel payment. Compared to outlays to calculate surplus or deficit. (See section 20.7.)\r
\r
GTAS\r
Governmentwide Treasury Account Symbol Adjusted Trial Balance System, used for electronic submission of accounting data supporting SF 133 and MAX past year data.\r
\r
Impoundment\r
Any executive action or inaction that temporarily or permanently withholds, delays, or precludes obligation or expenditure of budgetary resources.\r
\r
Intragovernmental fund\r
See revolving fund.\r
\r
Liquidating account\r
Budget account recording cash flows to and from the Government resulting from pre‑1992 direct loan obligations and loan guarantee commitments. Included in budget totals. (See section 185.)\r
\r
Loan guarantee\r
Guarantee, insurance, or other pledge with respect to payment of principal or interest on a non‑Federal borrower’s debt to a non‑Federal lender, excluding deposit insurance. (See section 185.)\r
\r
Mandatory appropriation\r
See entitlement authority.\r
\r
Mandatory spending\r
Spending controlled by laws other than appropriations acts (including entitlements) and food stamp program spending. Commonly known as mandatory rather than direct spending. (See section 21.3.)\r
\r
Means of financing\r
Borrowing, change in cash balances, and certain other transactions involved in financing deficits or using surpluses. By definition, not treated as receipts or outlays and are therefore non‑budgetary. (See section 20.7(h).)\r
\r
Nonbudgetary transactions\r
Government transactions that do not represent net budget authority or outlays but are means of financing (e.g., deposit funds, credit financing accounts, seigniorage).\r
\r
Non‑expenditure transfer\r
See transfer.\r
\r
Obligated balance\r
Cumulative amount of budget authority that has been obligated but not yet outlayed, defined as unpaid obligations minus amounts collectible as repayments from Federal sources. (See section 20.4(g).)\r
\r
Obligation\r
Binding agreement that will result in outlays, immediately or in the future. Budgetary resources must be available before obligations can be legally incurred. (See section 20.5.)\r
\r
Obligation limitation\r
Type of budgetary resource that limits the amount of contract authority already made available for obligation; effectively the amount of new budget authority available for obligation for that period.\r
\r
Off-budget\r
Transactions designated by statute as "off‑budget" that would otherwise be budgetary (currently Social Security trust funds and Postal Service).\r
\r
Offsetting collections\r
Payments to the Government credited directly to expenditure accounts and deducted from gross budget authority and outlays of those accounts rather than added to receipts; generally authorized to be spent without further Congressional action. Often from business-like or intragovernmental transactions. Authority to spend them is a form of budget authority. (See sections 20.4(b), 20.7.)\r
\r
Offsetting receipts\r
Payments to the Government credited to offsetting receipt accounts and deducted from gross budget authority and outlays rather than added to receipts. Typically not credited to expenditure accounts. May be earmarked for specific purposes. Often from business-like or intragovernmental transactions. (See section 20.7.)\r
\r
On-budget\r
All budgetary transactions other than those designated as off‑budget.\r
\r
Outlay\r
Payment to liquidate an obligation (other than repayment of debt principal or other means-of-financing disbursements). Generally equal to cash disbursements but also recorded for cash-equivalent transactions and, in some cases, on an accrual basis (e.g., interest). Outlays measure Government spending. (See section 20.6.)\r
\r
Outyear estimates\r
Budget estimates for years beyond the budget year of budget authority, outlays, receipts, and other items, such as debt.\r
\r
Overseas Contingency Operations/Global War on Terrorism (OCO/GWOT)\r
Discretionary appropriations designated by Congress and the President as OCO/GWOT on an account-by-account basis, resulting in cap adjustments under BBEDCA.\r
\r
Pay-as-you-go (PAYGO)\r
Requirements of the Statutory Pay-As-You-Go Act of 2010 that result in sequestration if new direct spending or revenue legislation increases the on‑budget deficit relative to the baseline at the end of a congressional session. (See section 21.3.)\r
\r
Public enterprise fund\r
See revolving fund.\r
\r
Reappropriation\r
Extension of the availability of unobligated balances of budget authority that have expired or would otherwise expire, resulting from later legislation. (See section 20.4(h), section 120.66.)\r
\r
Receipts\r
See governmental receipts or offsetting receipts.\r
\r
Reduction in budgetary resources\r
A rescission, cancellation, across-the-board reduction, or sequestration.\r
\r
Refund\r
Return of excess payments to or by the Government. (See section 20.9.)\r
\r
Reimbursable obligation\r
Obligation financed by offsetting collections credited to an expenditure account in payment for goods and services provided by that account. (See section 83.5.)\r
\r
Rescission\r
Presidential proposal to reduce budgetary resources under Title X of the Congressional Budget and Impoundment Control Act of 1974; resources may be withheld from obligation for limited periods pending Congressional action. Also used to describe any legislative resource reduction. Rescissions can be temporary or permanent. (See section 20.4(i).)\r
\r
Revolving fund\r
Fund conducting continuing cycles of business-like activity, charging for products or services and using proceeds to finance spending, usually without need for annual appropriations. Includes public enterprise, intragovernmental, and trust revolving funds. (See section 20.11.)\r
\r
Scorekeeping\r
Measuring budget effects of legislation in terms of budget authority, governmental receipts, and outlays, for purposes of budget targets or enforcement laws. (See section 21.)\r
\r
Sequestration\r
Cancellation of budgetary resources. Required under Statutory PAYGO when legislation increases projected deficits relative to baseline and under BBEDCA in certain circumstances. (See section 100.)\r
\r
Special fund\r
Federal fund account for receipts earmarked for specific purposes and associated expenditures. (See section 20.11.)\r
\r
Spending authority from offsetting collections\r
Type of budget authority permitting obligations and outlays financed by offsetting collections. (See section 20.4(b).)\r
\r
Statutory Pay-As-You-Go Act of 2010\r
Legislation reinstating a statutory PAYGO requirement for new tax or mandatory spending legislation.\r
\r
Subsidy\r
Estimated long-term cost to the Government of a direct loan or loan guarantee on a net present value basis, excluding administrative costs and incidental effects on governmental receipts or outlays. (See section 185.)\r
\r
Supplemental appropriation\r
Appropriation enacted after a regular annual appropriations act when urgent funding needs cannot be postponed until the next regular act. (See section 110.2.)\r
\r
Surplus\r
Amount by which receipts exceed outlays in a fiscal year; may be on‑budget, off‑budget, or unified.\r
\r
Third scorecard\r
Used to refer to effects of a mandatory or revenue proposal that are not subject to PAYGO. These non‑PAYGO effects can include PAYGO‑exempt portions, indirect effects not subject to PAYGO (e.g., interest), and mandatory or revenue savings/costs resulting from discretionary policies.\r
\r
Transfer\r
Movement of budgetary resources from one budget account to another. May be recorded as expenditure or non‑expenditure transfer. (See section 20.4(j).)\r
\r
Transfer in the estimates\r
Proposal to stop funding an activity through one budget account and begin funding through another, without moving existing resources between accounts. (See section 20.4(k).)\r
\r
Treasury Account Symbol (TAS)\r
Treasury account identification codes assigned to appropriation, receipt, or other fund accounts, used to classify all Government financial transactions.\r
\r
Treasury Appropriation Fund Symbol (TAFS)\r
Separate Treasury accounts for each appropriation title based on resource availability (annual, multi‑year, or no‑year). (See section 20.4(c).)\r
\r
Trust fund\r
Account designated by law as a trust fund for receipts or offsetting receipts dedicated to specific purposes and their expenditure. Some revolving funds are designated as trust revolving funds. (See section 20.11.)\r
\r
Trust funds group\r
Monies collected and spent through trust fund accounts. (See section 20.11.)\r
\r
Unexpended balance\r
Sum of unobligated and obligated balances.\r
\r
Unobligated balance\r
Cumulative amount of budget authority that remains available for obligation under law in unexpired accounts. (See section 20.4(f).)\r
\r
User charges\r
Charges assessed for provision of Government services or sale/use of Government goods or resources, limited in authorizing legislation to those receiving special benefits or subject to regulation. (See section 20.7(g).)\r
\r
Warrant\r
Official document issued by the Secretary of the Treasury that establishes amounts of appropriations approved by Congress that can be obligated and disbursed.`,th=`20.4-budget-authority.md\r
20.4 What do I need to know about budget authority?\r
(a) Definition of budget authority\r
Budget authority means the authority provided by law to incur financial obligations that will result in outlays. This matches section 3(2) of the Congressional Budget and Impoundment Control Act of 1974. Obligations (such as contracts, purchase orders, hiring employees) must not be incurred before a law has provided budget authority for that purpose. (See section 145.1.)\r
\r
(b) Forms of budget authority\r
Laws provide budget authority primarily as appropriations, but also as contract authority, borrowing authority, or spending authority from offsetting collections.\r
\r
Forms of Budget Authority – Summary\r
\r
Appropriation\r
\r
Authorizes obligations and outlays using general, special, or trust funds.\r
Provided in appropriations acts and other laws.\r
May authorize cash-equivalent payments.\r
Not all appropriations provide budget authority.\r
Contract authority\r
\r
Authorizes obligations but not outlays.\r
Typically provided in authorizing laws; obligations are later liquidated using appropriations, receipts, or offsetting collections.\r
Borrowing authority\r
\r
Authorizes obligations with outlays financed by borrowing, usually from Treasury.\r
Typically for business-like operations; borrowing is repaid with interest from business proceeds.\r
Spending authority from offsetting collections\r
\r
Authorizes obligations and outlays using offsetting collections.\r
Typically provided in authorizing laws.\r
Appropriations acts may limit obligations.\r
Budget authority and obligations may be recorded against Federal customer orders without advance when the paying account records the obligation; obligations against public orders generally require an advance.`,ql=d=>d.replace(/\r/g,"").split(`
`);function Tb(d){const m=ql(d),w=m.findIndex(B=>B.startsWith("20.3 "))+1,c=[];let x;for(let B=w;B<m.length;B+=1){const k=m[B].trim(),D=m[B+1]?.trim()||"";if(!k)continue;!!D&&k.length<105&&!/[.!?;:]$/.test(k)?(x={term:k,definition:"",letter:k[0].toUpperCase()},c.push(x)):x&&(x.definition+=`${x.definition?`

`:""}${k}`)}return c}function _b(d){const m=[];let w;for(const c of ql(d)){const x=c.trim(),B=/^\(([a-z])\)\s+(.+)$/.exec(x);B?(w={id:B[1],title:B[2],body:[]},m.push(w)):x&&w&&w.body.push(x)}return m}const no=ql(mh).map(d=>d.trim()),ah=no.indexOf("Summary of Changes"),Bb=no.indexOf("Table of Contents"),Tt={edition:"OMB Circular No. A–11 (2016)",contents:no.slice(Bb+1,ah).filter(Boolean),changes:no.slice(ah+1).filter(Boolean),terms:Tb(eh),authority:_b(th),sources:[{title:"Section 20 overview",file:"20.0-section20-overview.md",text:mh},{title:"20.3 Special terms",file:"20.3-terms.md",text:eh},{title:"20.4 Budget authority",file:"20.4-budget-authority.md",text:th}]},kb=[...new Set(Tt.terms.map(d=>d.letter))],Db=["APP","CON","BOR","OFF"];function Ob({onNavigate:d}){const[m,w]=te.useState(""),[c,x]=te.useState("All");te.useEffect(()=>{document.title="Section 20 — Terms and Concepts | Budget Matter"},[]);const B=te.useMemo(()=>Tt.terms.filter(k=>{const D=c==="All"||k.letter===c,_=`${k.term} ${k.definition}`.toLowerCase();return D&&_.includes(m.trim().toLowerCase())}),[c,m]);return s.jsxs("main",{className:"a11-page",children:[s.jsxs("header",{className:"a11-hero",children:[s.jsx("div",{className:"a11-hero-grid","aria-hidden":"true"}),s.jsxs("div",{className:"a11-hero-copy",children:[s.jsx("p",{className:"eyebrow",children:"OMB Circular A–11 · Knowledge Library"}),s.jsxs("h1",{children:["Section 20",s.jsx("br",{}),s.jsx("span",{children:"Terms & Concepts"})]}),s.jsx("p",{children:"A working reference for the language that connects legal authority, obligations, collections, and outlays across the Federal budget."}),s.jsxs("div",{className:"a11-hero-actions",children:[s.jsxs("a",{href:"#glossary",children:["Explore the glossary ",s.jsx(qe,{})]}),s.jsxs("a",{className:"secondary",href:"https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/a11_current_year/s20.pdf",target:"_blank",rel:"noreferrer",children:["Official Section 20 PDF ",s.jsx(et,{})]})]})]}),s.jsxs("aside",{className:"a11-hero-dashboard","aria-label":"Section 20 at a glance",children:[s.jsxs("div",{children:[s.jsx(Fg,{}),s.jsxs("span",{children:[s.jsx("strong",{children:Tt.terms.length}),s.jsx("small",{children:"defined terms"})]})]}),s.jsxs("div",{children:[s.jsx(pb,{}),s.jsxs("span",{children:[s.jsx("strong",{children:Tt.authority.length}),s.jsx("small",{children:"authority concepts"})]})]}),s.jsxs("div",{children:[s.jsx(lh,{}),s.jsxs("span",{children:[s.jsx("strong",{children:Tt.contents.length}),s.jsx("small",{children:"outline entries"})]})]}),s.jsxs("p",{children:["Source edition",s.jsx("br",{}),s.jsx("strong",{children:Tt.edition})]})]})]}),s.jsxs("div",{className:"native-shell a11-body",children:[s.jsxs("section",{className:"a11-orientation",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Why this vocabulary matters"}),s.jsx("h2",{children:"One dollar. Four distinct budget events."}),s.jsx("p",{children:"Federal budget language describes where spending power comes from, when the Government makes a legal commitment, and when cash finally leaves Treasury. These are connected—but they are not interchangeable."})]}),s.jsx("div",{className:"budget-event-flow","aria-label":"Budget authority to outlay flow",children:[["01","Budget authority","Law permits obligations"],["02","Obligation","Government makes a commitment"],["03","Outlay","Payment is made"],["04","Program result","Public purpose is delivered"]].map(([k,D,_],M)=>s.jsxs("div",{children:[s.jsx("span",{children:k}),s.jsx("strong",{children:D}),s.jsx("small",{children:_}),M<3&&s.jsx(qe,{"aria-hidden":"true"})]},D))})]}),s.jsxs("section",{className:"a11-outline",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Section map"}),s.jsx("h2",{children:"What Section 20 covers"})]}),s.jsx("p",{children:"The complete outline from the supplied overview, organized as a quick reading path."})]}),s.jsx("div",{className:"a11-outline-grid",children:Tt.contents.map(k=>{const D=/^(20\.\d+|Ex–20)\s*(.*)$/.exec(k);return s.jsxs("article",{children:[s.jsx("span",{children:D?.[1]||"•"}),s.jsx("p",{children:D?.[2]||k})]},k)})})]}),s.jsxs("section",{className:"authority-explainer",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"20.4 · Budget authority"}),s.jsx("h2",{children:"The legal power behind every obligation"})]}),s.jsx("p",{children:"Budget authority is provided by law and takes several forms. The supplied material is reproduced below in full."})]}),s.jsx("blockquote",{children:"“Budget authority means the authority provided by law to incur financial obligations that will result in outlays.”"}),s.jsx("div",{className:"authority-forms",children:Tt.authority.map((k,D)=>s.jsxs("article",{children:[s.jsx("span",{children:Db[D]||k.id.toUpperCase()}),s.jsxs("div",{children:[s.jsxs("small",{children:["20.4(",k.id,")"]}),s.jsx("h3",{children:k.title}),k.body.map(_=>s.jsx("p",{children:_},_))]})]},k.id))})]}),s.jsxs("section",{className:"a11-glossary",id:"glossary",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"20.3 · Complete reference"}),s.jsx("h2",{children:"Federal budget glossary"})]}),s.jsx("p",{children:"Search definitions or filter by first letter. Every term and definition in the supplied Section 20.3 file is included."})]}),s.jsxs("div",{className:"glossary-toolbar",children:[s.jsxs("label",{children:[s.jsx(Qa,{"aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:"Search glossary"}),s.jsx("input",{value:m,onChange:k=>w(k.target.value),placeholder:"Search budget authority, rescission, outlay…"})]}),s.jsx("div",{className:"letter-filter","aria-label":"Filter glossary by letter",children:["All",...kb].map(k=>s.jsx("button",{className:c===k?"active":"",onClick:()=>x(k),children:k},k))})]}),s.jsxs("p",{className:"glossary-count",children:[s.jsx("strong",{children:B.length})," of ",Tt.terms.length," terms"]}),s.jsx("div",{className:"glossary-grid",children:B.map(k=>s.jsxs("article",{id:`term-${k.term.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[s.jsx("span",{children:k.letter}),s.jsx("h3",{children:k.term}),k.definition.split(`

`).map(D=>s.jsx("p",{children:D},D))]},k.term))}),!B.length&&s.jsxs("div",{className:"glossary-empty",children:[s.jsx(Qa,{}),s.jsx("h3",{children:"No matching terms"}),s.jsx("p",{children:"Try a broader phrase or select “All”."})]})]}),s.jsxs("section",{className:"a11-changes",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Source notes"}),s.jsx("h2",{children:"Summary of changes"})]}),s.jsx("ol",{children:Tt.changes.map((k,D)=>s.jsxs("li",{children:[s.jsx("span",{children:String(D+1).padStart(2,"0")}),s.jsx("p",{children:k})]},k))})]}),s.jsxs("section",{className:"a11-source-record",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Completeness record"}),s.jsx("h2",{children:"Attached source files"})]}),s.jsx("p",{children:"Open any record to review the exact source text embedded in this page."})]}),Tt.sources.map(k=>s.jsxs("details",{children:[s.jsxs("summary",{children:[s.jsx(dg,{}),s.jsxs("span",{children:[s.jsx("strong",{children:k.title}),s.jsx("small",{children:k.file})]}),s.jsx("span",{children:"View full text"})]}),s.jsx("pre",{children:k.text})]},k.file))]}),s.jsxs("aside",{className:"a11-footer-cta",children:[s.jsx(Za,{}),s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Continue learning"}),s.jsx("h2",{children:"Put the terms in legal context."}),s.jsx("p",{children:"See how constitutional authority, appropriations statutes, and execution controls fit together."})]}),s.jsxs("button",{onClick:()=>d("/knowledge/federal-budget-laws"),children:["Open the appropriations law guide ",s.jsx(qe,{})]})]})]})]})}const zb="The following list defines general terms of significance or importance in financial management policies for the Federal Government or the Department of Defense (DoD) that are discussed in various chapters of this Regulation. This glossary is provided for general information. It is not an exhaustive list of all financial management terms, and it does not define terms when standard dictionary definitions apply. Authoritative guidance with more detailed explanations or nuances may be found in specific chapters.",Eb="“GLOSSARY” SUMMARY OF MAJOR CHANGES Changes are identified in this table and also denoted by blue font. Substantive revisions are denoted by an asterisk (*) symbol preceding the section, paragraph, table, or figure that includes the revision. Unless otherwise noted, chapters referenced are contained in this volume. Hyperlinks are denoted by bold, italic, blue, and underlined font . The previous version dated September 2021 is archived. PARAGRAPH EXPLANATION OF CHANGE/REVISION PURPOSE All Administrative updates in accordance with Department of Defense Financial Management Regulation (FMR) Revision Standard Operating Procedures. Revision",eo=[{term:"Accessorial Charges",definition:"Costs incurred for packing, crating, and handling related to sales or shipments of property.",page:2,revised:!1},{term:"Accountable Official (Departmental)",definition:"An individual—such as a receiving official, contracting officer, purchase card official or military, civilian, and travel pay officials—responsible for providing a certifying officer with information, data, or services that the certifying officer relies upon in the certification of vouchers for payment.",page:2,revised:!1},{term:"Accounting Entity",definition:"In DoD the accounting entity is the DoD Component; that is, the Department of the Army, the Department of the Navy, the Department of the Air Force, and the Office of the Secretary of Defense (OSD) and/or the Defense Agencies, regardless of appropriation or fund.",page:2,revised:!1},{term:"Accounting Objectives",definition:"Goals toward which accounting efforts are directed. The goals are derived directly from higher authority, audit requirements, legal, and regulatory requirements and the needs of intended users.",page:2,revised:!1},{term:"Accounting System Design Documentation",definition:"Documentation supporting the design of an accounting system that assures all relevant accounting principles, standards, and related requirements have been addressed. It consists of three distinct documentation packages: (1) the functional accounting system concept design, (2) the functional detailed design, and (3) various automated data processing documentation packages that track functional user requirements to specific computer programs. See Volume 1, Chapter 3 for specific documentation requirements.",page:2,revised:!1},{term:"Accounts Payable",definition:"Amounts owed to other entities for goods and services received (i.e., actual or constructive receipt), progress in contract performance, and rents due to other entities.",page:3,revised:!1},{term:"Accounts Receivable from the Public",definition:"All accounts receivable arising from the sale of goods and services and from operations involving other than Federal Government organizations. Examples are debts owed by military personnel, civilian employees, and contractors.",page:3,revised:!1},{term:"Accrued Variance (Foreign Currency Fluctuations)",definition:"The difference between un-liquidated obligations at the budget rate (approved execution rate) and the foreign exchange rate current at the time of payment.",page:3,revised:!1},{term:"Acquisition Cost",definition:"The amount, net of both trade and cash discounts, paid for property plus transportation costs and other ancillary costs to bring the item(s) to its current condition and location.",page:3,revised:!1},{term:"Adjustments to Expired or Closed/Canceled Accounts (Upward or Downward)",definition:"Increases or decreases to obligations or expenditures. Adjustments involve recording obligations or expenditures that were made or incurred, but not recorded, during the period prior to expiration or cancellation of the account.",page:3,revised:!1},{term:"Administrative Subdivision of Funds",definition:"Any sub-division or legal restriction of an appropriation or fund that makes funds available in a specified amount for incurring obligations. Frequently used subdivisions include apportionments, allocations, sub-allocations, allotments, and sub-allotments.",page:3,revised:!1},{term:"Advances",definition:"Advances are cash outlays made by a federal entity to its employees, contractors, grantees, or others to cover a part or all of the recipients’ anticipated expenses or as advance payments for the cost of goods and services the entity acquires. The outlay is made before an authorized DoD receiving official has certified performance. Common examples include travel advances disbursed to employees prior to business trips, and cash or other assets disbursed under a contract, grant, or cooperative agreement before services or goods are provided by the contractor or grantee.",page:3,revised:!1},{term:"Agency Financial Management System",definition:"The total of agency financial systems, both manual and automated, for planning, budget formulation and execution, program and administrative accounting; as well as all other systems for recording and classifying financial data and reporting financial management information, including purchasing, property, and inventory. A. Financial Management Information. All information that is expressed in dollar terms on federal spending, collections, assets, liabilities, equity, and related budgetary and accounting transactions and balances. B. Accounting System. The structure of methods and procedures used to record, classify, accumulate, analyze, summarize, and report information on the financial condition and operating position. It is comprised of the various functional operations involved in authorizing, recording, classifying, analyzing, and reporting financial information related to financing sources, gains, expenses, losses, transfers, assets, liabilities, equity, and internal controls. It encompasses the procedures and processes from the point a transaction is authorized through processing the data, either manually or automatically, to issuance of financial and management information statements and reports. 1. Primary Accounting Systems. The aggregation of like financial management information aligned by the major operational areas and summarized to support financial and management information needs. There are five Primary accounting systems made up of the single, standard integrated Departmental accounting systems, which controls all financial management information. The Primary accounting systems are General Fund, Working Capital Fund, Trust Fund, Civilian Pay, and Military Pay. 2. Administrative Accounting Systems. a. Accounting Support Systems. The manual or automated programs, procedures and processes that authorize, record, classify, analyze, and report on financial management information for one of the Primary accounting systems. Accounting Support systems provide general ledger control and financial information on operations for consolidation to the Primary accounting systems. b. Subsidiary Accounting Systems. The manual or automated programs, procedures, and processes for one of the various functional operations involved with revenues, expenses, assets, liabilities, and equity. The Subsidiary accounting systems form the foundation and audit trail for the Primary accounting systems and the Accounting Support systems. 3. Accounting System Modules. Modules are distinguished by the fact that their functions and systems of internal controls are embodied in the accounting system. As such, modules are fully integrated subsystems of an accounting system, and they are inventoried and evaluated in conjunction with the accounting system. 4. Feeder Systems. The manual or automated programs, procedures and processes which develop data required to initiate an accounting or financial transaction but do not perform an accounting operation (e.g., personnel, property, or logistics systems).",page:4,revised:!1},{term:"Allocations",definition:"A further subdivision of allotments. Within DoD, the term has been used to refer to departmental-level accounting entity distributions of apportionments, or funds that do not require apportionment, to an operating Agency or other intermediate level accounting entity.",page:5,revised:!1},{term:"Allotments",definition:"Subdivisions of apportionments that are made by the heads of agencies, or their designee, to incur obligations within a prescribed amount. Subdivision and distribution of an allotment (e.g., sub-allotments and allocations to operating agencies or installation-level accounting activities) must contain at least the same legal and other limitations applicable to the original allotment. Such subdivisions and distributions may establish additional legal and other limitations applicable to execution of budgetary resources.",page:5,revised:!1},{term:"Annual (1-Year) Authority",definition:"Budget authority that is available for obligation only during a specified fiscal year and expires at the end of that time.",page:5,revised:!1},{term:"Anticipated Reimbursements",definition:"The dollar value of orders expected to be received during the forthcoming fiscal year. Anticipated reimbursements do not create obligational authority until an actual order is received and accepted.",page:5,revised:!1},{term:"Antideficiency Act",definition:"Legislation enacted by Congress to prevent the incurring of obligations or the making of expenditures (outlays) in excess of amounts available in appropriations or funds; to fix responsibility within an agency for the creation of any obligation or the making of any expenditure in excess of apportionment or reapportionment or in excess of other subdivisions established pursuant to Title 31, United States Code, sections 1341, 1342 (31 U.S.C. §§ 1341-1342) , and 1517 (31 U.S.C. § 1517) ; and to assist in bringing about the most effective and economical use of appropriations and funds.",page:5,revised:!1},{term:"Apportionment",definition:"A distribution made by the Office of Management and Budget (OMB) of amounts available for obligation and expenditures in an appropriation or fund account into amounts available for specified time periods (usually fiscal quarters), programs, activities, projects, objects, or any combination of these. The apportioned amount limits the obligations that may be incurred. An apportionment may be further subdivided by an agency into allotments, sub-allotments, and allocations.",page:6,revised:!1},{term:"Appropriation Limitations",definition:"Statutory and other special restrictions, which impose a restriction on the availability of funds or the authority to obligate or expend appropriations for certain objects or purposes, such as, family housing.",page:6,revised:!1},{term:"Appropriation Warrant",definition:"An official U.S. Treasury document that provides the dollar amounts established in the general and detailed appropriation accounts of the U.S. Treasury pursuant to Appropriation Acts authorized by law. It serves as a convenient source document for entries into accounts that establish the amount of money authorized to be withdrawn from the U.S. Treasury.",page:6,revised:!1},{term:"Appropriation",definition:'A provision of law (not necessarily in an appropriations act) authorizing the expenditure of funds for a specified purpose. Usually, but not always, an appropriation provides budget authority, which is authority provided by law to incur financial obligations that will result in outlays. For purposes of the Antideficiency Act, the term "appropriations" may have a broader meaning. As defined by the Act, it means all new budget authority and balances of budget authority as described in OMB Circular No. A-11, OMB A-11, Section 20.4 .',page:6,revised:!1},{term:"Asset Use Charge",definition:"A charge for the use of DoD assets (facilities and/or equipment) to recoup depreciation and interest on investment.",page:6,revised:!1},{term:"Authorizing Official (or Officer)",definition:"An individual who approves a transaction, and verifies and validates the funds cited on a commitment or obligation document are accurate and available.",page:6,revised:!1},{term:"Balanced Budget and Emergency Deficit Control Act of 1985 (BBEDCA)",definition:"Legislation that shaped the budget process, first by setting fixed targets for annual deficits and then by replacing those with a Pay-As-You-Go requirement for new tax or mandatory spending legislation and with caps on annual discretionary funding. Most of these requirements expired in 2002. The Statutory Pay-As-You-Go Act of 2010, which did not amend the BBEDCA, reinstated a statutory pay-as-you-go rule for revenues and mandatory spending legislation. The Budget Control Act of 2011, which amended the BBEDCA, reinstated discretionary caps on budget authority.",page:7,revised:!1},{term:"Bench Stock (Also Shop Stock)",definition:"Inventory held by a cost center for use as indirect material and used in support of numerous small projects or activities carried out by the cost center. Inventory includes items such as screws, washers, and lubricants.",page:7,revised:!1},{term:"Book Value",definition:"The recorded cost of a general Property, Plant, and Equipment (PP&E) asset less accumulated depreciation.",page:7,revised:!1},{term:"Borrowing Authority",definition:"Statutory authority to incur obligations and to make payments for specified purposes out of borrowed money. Within DoD, borrowing authority is used for mortgage assumptions under the Homeowners Assistance Program and for loans from the Federal Financing Bank.",page:7,revised:!1},{term:"Budget Authority",definition:"Authority provided by law to incur financial obligations that will result in outlays. Specific forms of authority include appropriations, borrowing authority, contract authority, and spending authority from offsetting collections.",page:7,revised:!1},{term:"Budget Control Act (BCA) of 2011",definition:"Legislation that, among other things, amended the Balanced Budget and Emergency Deficit Control Act of 1985 to reinstate discretionary spending limits on budget authority through 2021 and restored the process for enforcing those spending limits; increased the statutory debt ceiling; and established a Joint Select Committee on Deficit Reduction that was instructed to develop a bill to reduce the Federal deficit by at least $1.5 trillion over a 10-year period. It also provided a process to implement alternative spending reductions in the event that legislation achieving more than $1.2 trillion of deficit reduction was not enacted by January 15, 2012.",page:7,revised:!1},{term:"Budget Rate",definition:"A foreign currency exchange rate provided to DoD Components for use in preparing budget submissions during budget formulation and for recording obligations during budget execution. Budget rates are provided by the DoD Comptroller and may be modified by the Congress. During execution, foreign currency obligations are recorded using the budget rate (rates approved for execution). Also, see “Foreign Currency Fluctuations.”",page:8,revised:!1},{term:"Budgetary Resources",definition:"For purposes of budget execution, budgetary resources include new budget authority, available unobligated balances at the beginning of the year, reimbursements, and other income (also known as offsetting collections credited to an appropriation or fund account), recoveries of prior year obligations from unexpired accounts, and restorations. In the case of reimbursable work, budgetary resources available for obligation are comprised of earned reimbursements and unfilled customer orders (limited by the amounts collected in advance for orders from the public). In the case of loan programs, budgetary resources available for obligation from loan repayments and interest on loans are comprised of actual collections when authorized to be used.",page:8,revised:!1},{term:"Business Concern",definition:"Any person or organization engaged in a profession, trade, or business, and nonprofit entities (including State and local governments, but excluding Federal entities) operating as contractors.",page:8,revised:!1},{term:"Cash-Flow Process",definition:"Each process of collecting or disbursing moneys for Agency programs or operations, and for balances held outside of the U.S. Treasury.",page:8,revised:!1},{term:"Cash-Flow Report",definition:"A document summarizing each unique cash-flow process and corresponding opportunities for new cash management improvements.",page:8,revised:!1},{term:"Cash Held at Personal Risk",definition:"Cash held by authorized disbursing officers, their cashiers, and their agent officers, including alternates, for making miscellaneous cash payments, meeting cash payrolls, or making change; funds established for making small purchases; imprest funds; cash held pending delivery to other disbursing officers; and for other purposes specifically authorized by law.",page:8,revised:!1},{term:"Cash Management",definition:"Practices and techniques designed to accelerate and control collections, ensure prompt deposit of receipts, improve control over disbursement methods, and minimize idle cash balances.",page:8,revised:!1},{term:"Cash Management Review",definition:"An ongoing study of an Agency's cash flows and corresponding cash management processes or mechanisms conducted to identify implementable improvement opportunities in an Agency's cash management practices.",page:9,revised:!1},{term:"Centrally Managed Account",definition:"Authority issued by the holder of an account (allotment/allocation) for incurring obligations for a specific purpose and in a specific amount. It is administered by publishing a centrally managed account number that permits authorized officials to charge the account for authorized purposes without further determination or certification of fund availability for individual transactions.",page:9,revised:!1},{term:"Certifying Officer",definition:"An individual designated to attest to the correctness of statements, facts, accounts, and amounts appearing on a voucher, or other documents. A certifying officer is pecuniary liable for payments in accordance with 31 U.S.C. § 3528 .",page:9,revised:!1},{term:"Clearing Accounts",definition:"Accounts established solely to temporarily hold general, special, or trust fund collections or disbursements pending clearance to the applicable receipt or expenditure budgetary account. Except for clearance to the applicable receipt or expenditure budgetary account, clearing accounts are not available for obligation or expenditure.",page:9,revised:!1},{term:"Closed/Canceled Accounts",definition:"An appropriation that has been closed in accordance with 31 U.S.C. §§ 1551-1557 . This term also includes an appropriation that otherwise would have been closed by 31 U.S.C. §§ 1551-1557, but has not been closed by the Department of the Treasury because the appropriation has a negative balance. When balances are canceled, the amounts are not available for obligation or expenditure for any purpose, unless exempt by a provision of an appropriation law.",page:9,revised:!1},{term:"Collections",definition:"Amounts received during the fiscal year. Collections are classified into two major categories: budget receipts and offsetting collections. Budget receipts are amounts received by the Federal Government from the public, e.g. tax revenues, premiums of compulsory social insurance programs, court fines, and license fees. Offsetting collections are classified into two major categories: offsetting receipts and collections credited to appropriation or fund accounts.",page:9,revised:!1},{term:"Commitment",definition:"An administrative reservation of funds based on firm procurement requests, unaccepted customer orders, Directives, and equivalent instruments.",page:10,revised:!1},{term:"Component Liaison Office",definition:"Military Department and Agency formed liaison offices to communicate with the Defense Finance and Accounting Service to ensure adequate dissemination of information and help coordinate DoD finance and accounting policy and other issues.",page:10,revised:!1},{term:"Conceptual Design of Accounting System",definition:"Documentation of the process that leads to a decision to develop a new accounting system or system segment, or to initiate a major upgrade effort. Documentation reveals the deficiencies in the current system, the accounting entities involved, the parameters of the accounting system, the accounting structure, security considerations, the alternatives considered, and the economic analysis developed to support a decision.",page:10,revised:!1},{term:"Consolidated Working Fund Accounts",definition:"Accounts established to hold funds transferred from other Agencies, DoD Components, or accounts until transferred to an appropriate account authorized by provisions of law. Applicable funds are not available for obligation or expenditure.",page:10,revised:!1},{term:"Construction in Progress (CIP)",definition:"A temporary classification of assets under construction equal to the amount of direct labor, direct material, and overhead incurred in the construction of General Property, Plant, and Equipment (PP&E) for which the acquiring DoD agency will be accountable for financial reporting purposes. General property includes real property such as land and buildings. Upon completion, these costs will be transferred to the proper capital asset account as the acquisition cost of the item. CIP is not to be used for information technology software. The Internal Use Software in Development account is used for information technology software.",page:10,revised:!1},{term:"Contingency",definition:"An existing condition, situation, or set of circumstances that involves an uncertainty as to possible gain or loss. The uncertainty will be resolved when one or more future events occur or fail to occur. Resolution of the uncertainty may confirm a gain (i.e., acquisition of an asset or reduction of a liability) or a loss (i.e., loss or impairment of an asset or the incurrence of a liability).",page:10,revised:!1},{term:"Contingent Liability",definition:'The term has two meanings. As a budgetary term, it represents variables that cannot be recorded as valid obligations. Such variables include (1) outstanding fixed price contracts containing escalation, price redetermination, or incentive clauses, or (2) contracts authorizing variations on quantities to be delivered, or (3) contracts where allowable interest may become payable by the Federal Government on contractor claims supported by written appeals pursuant to the "DISPUTES" clause contained in the contract. As a proprietary accounting term, it represents a contingency posing the possibility of a loss when one or more events occur or fail to occur. Examples of loss contingencies include the collectability of accounts receivable, pending or threatened litigation, and possible claims and assessments. DoD recognizes contingent liabilities when a future loss related to past events or exchange transactions is probable and the loss amount can be reasonable estimated.',page:11,revised:!1},{term:"Continuing Resolution",definition:"The Congressional resolution, in the absence of an appropriation act, providing authority for Agencies to continue current operations. Such continuing resolutions are subject to the Office of Budget and Management apportionment in the same manner as appropriations.",page:11,revised:!1},{term:"Contract",definition:"As defined by the Federal Acquisition Regulation (FAR) 2.101 , “Definitions,” a contract is a mutually binding legal relationship obligating the seller to furnish the supplies or services (including construction) and the buyer to pay for them.",page:11,revised:!1},{term:"Contract Authority",definition:"Statutory authority to incur obligations but with liquidation of obligations dependent upon future actions of the Congress or by the receipt of customer orders or other available resources. Within the Department, Contract Authority is apportioned budget authority that can be legally obligated. Contract Authority, however, is not funded and is apportioned and allocated without a supporting Treasury cash balance. Consequently, before an obligation incurred against Contract Authority can be liquidated, sufficient budgetary resources should be available for the outlay. For the Defense Working Capital Funds, obligations against Contract Authority are based on earned customer orders and cash balances in the fund corpus.",page:11,revised:!1},{term:"Contract Financing Payment",definition:"A Federal Government cash disbursement to a contractor under the contract prior to acceptance of goods or services by the Federal Government.",page:11,revised:!1},{term:"Contract Liquidating Authority",definition:"An appropriation, or re-appropriation, enacted to pay the obligations incurred under the contract authority.",page:11,revised:!1},{term:"Contractor-Acquired Property",definition:"General PP&E assets acquired by a contractor on behalf of a DoD Component for use in the performance of a contract. It does not include federal government furnished material or equipment. Also, see Government Furnished Equipment.",page:12,revised:!1},{term:"Cost",definition:'A monetary measure of the amount of resources applied to a cost objective. Within DoD, "costs" are identified following generally accepted accounting principles and standards. The fact that collections for some cost elements are deposited into Miscellaneous Receipts of the Treasury does not make those costs "extraneous." It simply means the Congress has not authorized such amounts to be retained by appropriation accounts. After costs have been identified, following Federal Accounting Standard Advisory Board standards, including the Statement of Federal Financial Accounting Standard 4 on cost accounting rules, a DoD Component may proceed to eliminate cost elements, or process waivers, in accordance with legal authorities.',page:12,revised:!1},{term:"Cost Center",definition:"An element of a cost accumulation structure—representing the lowest level organization or activity used to identify obligations or expend resources—to logically group costs of goods and services for management to assess efficiency, usage, examine trends, and make decisions. Cost centers enable organizations to apply process costing, one of two primary approaches to cost accumulation, the other approach being has job order costing. SFFAS 4 requires organizations to accumulate costs for the identified types of outputs produced for various programs or projects.",page:12,revised:!1},{term:"Cost Clearing Account",definition:"An account used when standard rates are employed. The actual expenses are debited to the cost clearing account and the amounts billed to customers are credited to the account. At the end of the fiscal year, the account is closed with analysis performed to determine if rates require adjustment.",page:12,revised:!1},{term:"Cost Finding",definition:"Techniques that produce cost data by analytical or sampling methods for certain kinds of costs, such as indirect costs, items with costs below set thresholds within programs, or for some programs in their entirety. These techniques support the overall managerial cost accounting process and can represent nonrecurring analysis of specific costs.",page:12,revised:!1},{term:"Cost Objective",definition:"An activity, operation, or item whose cost is to be measured for which management decides to identify, measure, and accumulate costs. The cost objective must be discrete enough and described in writing to such a level of detail to form a basis to establish cost centers and output products.",page:12,revised:!1},{term:"Current Accounts Receivable",definition:"All receivables that will be due within the 12 months following the reporting period.",page:13,revised:!1},{term:"Current Value of Funds Rate (CVFR)",definition:'The average investment rate for the U.S. Treasury Tax and Loan accounts expressed as an annual rate and published by the U.S. Treasury in the "Federal Register" each year. Uses of the CVFR include determining the effectiveness of taking cash discounts and calculating interest on overdue federal government accounts receivables.',page:13,revised:!1},{term:"Customer Order",definition:"An order received and accepted by the performing activity from a customer. It is written evidence that certain goods and services will be provided to the tenderer of the order for payment of a dollar amount. The order must contain an original signature or equivalent of both the ordering activity and the receiving activity and must specify a dollar amount. The specified dollar amount cannot be exceeded.",page:13,revised:!1},{term:"Cutoff Time",definition:"A time prescribed by a financial institution beyond which transactions presented or actions requested will be deferred to the next banking day's business.",page:13,revised:!1},{term:"Day",definition:"A calendar day, unless otherwise noted. If the day on which an action is required falls on a nonworking day, then day means the next working day.",page:13,revised:!1},{term:"Default",definition:"Failure to meet any obligation or term of a credit, grant, or other agreement.",page:13,revised:!1},{term:"Defense Working Capital Fund (DWCF)",definition:"A revolving fund using a business-like buyer and seller approach with a goal of breaking even over the long term. Stabilized rates or prices are generally established each fiscal year. DWCF stabilized rates or prices are adjusted for sales to customers to include an amount for unfunded civilian retirement and post-retirement health benefits costs. The DWCF was established on December 11, 1996, upon the reorganization of the former Defense Business Operations Fund.",page:13,revised:!1},{term:"Deferrals",definition:"Budgetary resources that have been deferred as reserves to provide for contingencies to achieve savings made possible by or through changes in requirements or greater efficiency of operations or as specifically provided by law.",page:13,revised:!1},{term:"Definite Authority",definition:"Authority that is stated as a specific sum at the time it is granted. This includes authority stated as not to exceed a specified amount. Most DoD appropriations are for definite amounts of authority.",page:14,revised:!1},{term:"Delivered Orders",definition:"The term used for the credits entered into the budgetary accounts to recognize liabilities incurred for (1) services performed by employees, contractors, other Government accounting entities, vendors, carriers, grantees, lessors (2) goods and other tangible property received; and (3) items such as annuities or insurance claims for which no current service is required. Accrued expenditures are categorized as either paid or unpaid.",page:14,revised:!1},{term:"Delivered Orders-Paid",definition:"The budgetary account that represents the dollar value of goods and services received for which payment has been made.",page:14,revised:!1},{term:"Delivered Orders-Unpaid",definition:'The budgetary account matching the proprietary account, "accounts payable." It represents the dollar value of goods and services received for which payment has not been made. (Also, see "Accounts Payable.")',page:14,revised:!1},{term:"Demand Cash Withdrawal",definition:"Commercial checks made payable to cash for withdrawal by the cashier.",page:14,revised:!1},{term:"Deposit (noun)",definition:"Money presented for credit to the U.S. Treasury. Such transfers may be made by Agencies or directly by the remitter. All such transfers are effected through a Federal Reserve Bank or other financial institution.",page:14,revised:!1},{term:"Deposit (verb)",definition:"The act of presenting moneys for credit to the U.S. Treasury by an Agency official.",page:14,revised:!1},{term:"Deposit Funds",definition:"Receipts held temporarily and later refunded or paid into some other Treasury fund or other entity, or held by DoD as banker or agent for others and paid out at the direction of the owner.",page:14,revised:!1},{term:"Deposit Fund Accounts",definition:"Expenditure accounts established to account for deposit fund receipts. Such funds are not available for paying salaries, grants, or other expenses of the Federal Government. Expenditures are often offset by receipts within this type of fund.",page:15,revised:!1},{term:"Depreciation",definition:"The systematic and rational allocation of the acquisition cost of an asset, less its estimated salvage or residual value, over its estimated useful life.",page:15,revised:!1},{term:"Direct Cite",definition:"A financing action by a DoD organization (customer) to procure products and services from another entity. When direct cite is used, the procuring entity sends the procurement source documents to the customer for the customer to perform all accounting functions. In the case of the Foreign Military Sales program, it specifically refers to documents that result in a disbursement to other than a DoD organization (a contractor, other Federal Agency, or employee).",page:15,revised:!1},{term:"Direct Delivery",definition:"Items shipped directly from a contractor to a customer, whether from a consolidated military services procurement or a contract solely for that customer.",page:15,revised:!1},{term:"Direct Loan",definition:"An obligation created when the Federal Government disburses the funds and contracts with the debtor for repayment, with or without interest, or when the Government acquires a guaranteed private loan in satisfaction of default or other claim.",page:15,revised:!1},{term:"Direct Program",definition:'The budget authority in an appropriation act. (See "Budget Authority.")',page:15,revised:!1},{term:"Disbursements",definition:"Amounts paid by Federal Agencies, by cash or cash equivalent, during the fiscal year to liquidate government obligations. “Disbursement” is often used interchangeably with the term “outlay.” In budgetary usage, gross disbursements represent the amount of checks issued and cash or other payments made, less refunds received. Net disbursements represent gross disbursements less income collected and credited to the appropriation or fund account, such as amounts received for goods and services provided. For purposes of matching a disbursement to its proper obligation, the term disbursement refers to the amount charged to a separate line of accounting.",page:15,revised:!1},{term:"Disbursing Officer",definition:"An officer or employee of a Federal Department, Agency or Corporation designated to disburse moneys and render accounts according to laws and regulations governing the disbursement of public moneys.",page:16,revised:!1},{term:"Discount (Cash)",definition:"A reduction in the amount due on an accounts payable offered by the vendor if paid within a stated period.",page:16,revised:!1},{term:"Discount (Trade)",definition:"A reduction in price, usually varying in percentage with volume of transactions, made by vendors to those engaged in certain businesses and allowable irrespective of the time when the account is paid.",page:16,revised:!1},{term:"DoD Component",definition:'For purposes of this Regulation, unless otherwise noted "DoD Component" includes the following: OSD; the Chairman, Joint Chiefs of Staff and the Joint Staff; the DoD Inspector General; the Military Departments including the Coast Guard when assigned to the Department of the Navy; the Defense Agencies; DoD Field Activities; the Combatant Commands; Washington Headquarters Services, the Uniformed Services University of the Health Sciences, and all non-appropriated fund instrumentalities.',page:16,revised:!1},{term:"DoD Education Benefits Trust Fund",definition:"A fund established for education assistance purposes for active and reserve force personnel. It derives its resources through transfers from military personnel accounts and from interest earned from investments in Federal Government securities.",page:16,revised:!1},{term:"Earned Reimbursement",definition:"The amount recognized when a performing organization renders actual or constructive performance on a reimbursable order.",page:16,revised:!1},{term:"Economy Act Order",definition:"An order for goods or services placed by a Federal Agency or Department to another government agency under provisions of 31 U.S.C. §§ 1535-1536. (See Volume 11A, Chapter 3.)",page:16,revised:!1},{term:"Electronic Data Interchange (EDI)",definition:"The exchange of standardized information between business partners typically communicated electronically between computers. It is DoD policy that DoD Component EDI applications must conform to the American National Standards Institute, Accredited Standards Committee X12 standard.",page:17,revised:!1},{term:"Electronic Funds Transfer (EFT)",definition:"The act of debiting or crediting accounts in financial institutions by wire rather than source documents, such as, paper checks. Processing typically occurs through the Federal Reserve Bank clearing houses.",page:17,revised:!1},{term:"Entitlements",definition:"Legally established benefits available to any person or unit of Federal Government meeting eligibility requirements established by law.",page:17,revised:!1},{term:"Executory Costs",definition:"Those costs associated with ownership of an asset such as insurance, taxes, and normal maintenance. In the case of a capital lease, the portion of the lease payment that represents executory costs is not capitalized, but is expensed.",page:17,revised:!1},{term:"Expenditure",definition:"An actual disbursement of funds in return for goods or services. Frequently used interchangeably with the term “outlay.”",page:17,revised:!1},{term:"Expense",definition:"The outflow or other depletion of assets or incurrence of liabilities (or a combination of both) during some period as a result of providing goods, rendering services, or carrying out other activities related to an entity’s programs and missions, the benefits from which do not extend beyond the present operating period. In financial accounting and reporting, the costs that apply to an entity’s operations for the current accounting period are recognized as expenses of that period.",page:17,revised:!1},{term:"Expired Account or Appropriation",definition:"Appropriation or fund account in which the balance is no longer available for incurring new obligations, but is still available to cover upward adjustments to prior year obligations and recording, adjusting, and liquidating valid obligations. The account remains available for such purposes during the five-year expiration period unless the expiration period has been lengthened by legislation.",page:17,revised:!1},{term:"Facilities",definition:"Industrial property (other than material, special tooling, special test equipment, and military property) for production, maintenance, research, development, or test including real property (other than land) and rights therein, buildings, structures, improvements, and plant equipment (including capital leases).",page:18,revised:!1},{term:"Fast Pay",definition:"Disbursement to a contractor (within 15 days after receipt of the invoice) based on the contractor's certification that delivery has been made at the time an invoice is presented for payment.",page:18,revised:!1},{term:"Federal Agency",definition:'Same meaning as the term "Agency" in 5 U.S.C. § 551(1), and includes any entity that is operated exclusively as an instrumentality of such an Agency for administering one or more programs of that Agency. Both DoD appropriated and non-appropriated fund activities are included under this definition, but non-appropriated fund activities are public/non-federal entities for purposes of processing receivables. See Volume 4, Chapter 3.',page:18,revised:!1},{term:"Financial Institution",definition:"Bank, Savings Association, or Credit Union eligible under 31 C.F.R. 202 to serve as a Federal Government depositary.",page:18,revised:!1},{term:"Financial Management System",definition:"A financial operation that includes the financial system and the financial portion of mixed systems necessary to support financial management; automated and manual processes, procedures, and controls; data; hardware; software; and support personnel dedicated to the operation and maintenance of system functions.",page:18,revised:!1},{term:"Financing Interest",definition:"Interest charged as a cost of extending credit as distinguished from interest charged because of delinquency.",page:18,revised:!1},{term:"Financing Payment",definition:"Disbursement of funds after performance has occurred but before physical delivery. The most common type of financing payment is the progress payment made to DoD contractors to reimburse incurred cost before ordered items or material are delivered. See “Contract Financing Payment.”",page:18,revised:!1},{term:"Fixed Accounts",definition:"Appropriation or fund accounts with balances that are available for a definite period of time. The fixed accounts are comprised of annual and multiyear accounts. The universe of appropriation or fund accounts is made up of fixed accounts and no-year accounts.",page:19,revised:!1},{term:"Foreign Currency Fluctuations",definition:"The difference between budget rates approved for execution and actual foreign currency exchange rates in effect at time of payment that cause changes in obligations or contractual liabilities. Obligations are recorded using the budget rate, and payments are made using the current foreign currency exchange rate.",page:19,revised:!1},{term:"Foreign Currency Unliquidated or Liquidated Obligations",definition:"Foreign currency un-liquidated obligations are derived by taking obligations at the budget rate less the disbursements at the budget rate. Foreign currency liquidated obligations is the actual disbursement at the budget rate.",page:19,revised:!1},{term:"Fund Groups",definition:"The range of numeric or alpha and/or numeric account symbols assigned by the Treasury to identify groups of accounts, such as, 0000 to 3799 = General Funds.",page:19,revised:!1},{term:"Fund Holder",definition:"An individual holding an administrative subdivision of funds or an operating target, who is responsible for incurring obligations against the administrative subdivision or target and for managing the use of such funds.",page:19,revised:!1},{term:"Funded Carryover",definition:"The incomplete portion of a job order for goods or services to be provided by a working capital fund activity. Usually, funded carryover is measured at the end of a fiscal period, that is, a fiscal year.",page:19,revised:!1},{term:"Funds Certifying Official",definition:"An individual responsible for the proper assignment of funding on a commitment or obligation document before the obligation has incurred.",page:19,revised:!1},{term:"General Fund Accounts",definition:"These consist of (1) receipt accounts used to account for collections not dedicated to specific purposes and (2) expenditure accounts used to record financial transactions arising under congressional appropriations or other authorizations to spend general revenues.",page:19,revised:!1},{term:"General Fund Receipt Accounts",definition:"Accounts established for receipts of the Federal Government that are not earmarked by law for specific purpose and that are not available for obligation and expenditure.",page:20,revised:!1},{term:"Government Furnished Equipment",definition:"Property provided to a contractor by DoD. It is used in producing an end product. It is not consumed, but is returned in the same form at the end of the contract.",page:20,revised:!1},{term:"Government Furnished Material",definition:"Property provided to a contractor by DoD. It may be incorporated into an end item (a change in form) or may be consumed in the performance of a contract.",page:20,revised:!1},{term:"Grants",definition:"Assistance awards for which no substantial involvement is anticipated between DoD and the recipient during performance of the contemplated activity.",page:20,revised:!1},{term:"Guaranteed Loan",definition:"A contingent liability created when the Federal Government ensures the private lender who disbursed the funds that the lender will be repaid to the extent of the amount or percentage guaranteed in the event of default by the debtor; a DoD Component pledge to pay part or all of the loan principal and interest to a lender, or holder, of a security in the event of default by a third-party borrower.",page:20,revised:!1},{term:"Holdback",definition:"The amount withheld from payments to contractors to assure compliance with contract terms. Usually the amount to be withheld is expressed as a percentage in the contract provisions.",page:20,revised:!1},{term:"Imputed Cost",definition:"Imputed cost is a reporting entity’s share of an expense not incurred directly, but borne by another reporting entity and not reimbursed.",page:20,revised:!1},{term:"Indefinite Appropriations",definition:"Appropriations of a current or permanent nature in which a definite amount is not stated but is to be determined on the basis of stipulated subsequent events.",page:20,revised:!1},{term:"Indefinite Authority",definition:"Authority for which a specific sum is not stated, but is determined by other factors such as the receipts from a certain source or obligations incurred.",page:20,revised:!1},{term:"Interagency Allocations",definition:'According to OMB Circular A-11, section 20.4(l), “Allocation means a delegation, authorized in law, by one agency of its authority to obligate budget authority and outlay funds to another agency. When an agency makes such a delegation, the Treasury Department establishes a subsidiary account called a "transfer appropriation account," and the receiving agency may obligate up to the amount included in the account. The budget does not show the transfer appropriation account separately. The budget schedules for the parent account include the obligations by the other agency against the subsidiary account. Allocations are appropriate where the receiving agency is acting as the agent for the allocating agency.”',page:21,revised:!1},{term:"Internal Control Documentation",definition:"Written policies, organization charts, procedural write-ups, Manuals, memoranda, flow charts, decision tables, completed questionnaires, software, and related written materials used to describe the internal control methods and measures, to communicate responsibilities and authorities for operating such methods and measures, and to serve as a reference for persons reviewing the internal controls.",page:21,revised:!1},{term:"Internal Controls",definition:"The manner in which financial, manpower, and property resources are to be controlled and safeguarded by the regular authorization, approval, documentation, recording, reconciling, reporting, and related accounting processes.",page:21,revised:!1},{term:"Internal Control Standards",definition:"The standards issued by the Comptroller General for use in establishing and maintaining systems of internal control. Those standards are applicable to all operations and administrative functions, but are not intended to limit or interfere with duly granted authority for the development of legislation, rulemaking, or other discretionary policymaking.",page:21,revised:!1},{term:"Internal Control Techniques",definition:"The application of prescribed processes and documents to accomplish an internal control objective efficiently and effectively and to help safeguard an activity from waste, loss, unauthorized use, or misappropriation.",page:21,revised:!1},{term:"In-transit Transactions",definition:"Disbursements or collections that have been reported by a disbursing office, through a paying center, to the Department of the Treasury and charged against the Department’s fund balances but have not yet been received by the accounting system.",page:21,revised:!1},{term:"Inventory Price",definition:'For non-stock fund items the inventory price is the acquisition cost. For stock fund items, the inventory price is acquisition cost plus prescribed surcharges. (See "Acquisition Cost.")',page:22,revised:!1},{term:"Investment",definition:"As a budget term, investment refers to equipment financed with procurement appropriation accounts. As an accounting term, investments represent the value of securities and other assets held for the production of revenues in the form of interest, dividends, rentals or lease payments, net of premiums or discounts.",page:22,revised:!1},{term:"Invoice",definition:"As defined by FAR 2.101, Definitions, an invoice is a contractor’s bill or written request for payment under the contract for supplies delivered or services performed.",page:22,revised:!1},{term:"Invoice Payment",definition:"A Federal Government disbursement of monies to a contractor under a contract or other authorization for supplies or services accepted by the Government.",page:22,revised:!1},{term:"Journal Voucher",definition:"Adjustments recorded in the system transaction registers and the General Ledger identifying summary-level adjustments.",page:22,revised:!1},{term:"Letter Contract",definition:"An offer and acceptance that is specific and definitive enough to show the purpose and scope of the final contract to be executed. When accepted in writing by the contractor, documentary evidence exists to support the recording of an obligation.",page:22,revised:!1},{term:"Loan Guarantees",definition:"Agreements by which a DoD Component pledges to pay part or all of the loan principal and interest to lenders or holders of securities in the event of default by third-party borrowers.",page:22,revised:!1},{term:"Management Fund Accounts",definition:"Working fund accounts authorized by law to facilitate accounting for collections from two or more appropriations or funds to finance an activity not involving a continuing cycle of business-type operations and that are available for obligation and expenditure. Those are combined receipt and expenditure accounts established by law, with receipts derived from such operations usually available in their entirety for use by the fund without further action by the Congress.",page:22,revised:!1},{term:"Military Interdepartmental Purchase Request (MIPR)",definition:"An order issued by one military service to another to procure services, supplies, or equipment for the requiring service. The MIPR (DD Form 448) may be accepted on a direct citation or reimbursable basis. It is an Economy Act (31 U.S.C . §§ 1535-1536) order subject to downward adjustment when the obligated appropriation is no longer valid for obligation.",page:23,revised:!1},{term:"Military Retired Pay (Includes Fleet Reserve/Fleet Marine Corps Reserve Retainer Pay)",definition:"(A reduced pay entitlement for reduced services.) The gross entitlement for a retired service member based on terms and conditions of law, pay grade, years of service, percentage of disability, if applicable, and date of retirement (transfer to the retired reserve).",page:23,revised:!1},{term:"Military Retirement Trust Fund",definition:"A trust fund established to finance the retirement cost of active and reserve military personnel. An accrual amount is transferred monthly from the military personnel accounts to the Fund based on a fixed percentage of basic pay for full-time and part-time personnel. The accrual amounts are determined by the DoD Board of Actuaries who are appointed by the President for 15-year terms. In addition, amounts are deposited into the Fund to liquidate the unfunded liability of retired pay earned prior to establishment of the Fund. Interest on investments of the Fund assets in Federal Government securities are also transferred into the Fund.",page:23,revised:!1},{term:"Minimum Lease Payments",definition:"The payments that the lessee is obligated to make or may be required to make in connection with leased property. Minimum lease payments exclude contingent rentals and any guarantee by the lessee of the lessor’s debt and the lessee’s obligation to pay (apart from rental payments) executory costs such as insurance, maintenance, and taxes in connection with the leased property.",page:23,revised:!1},{term:"Multiple-Year Authority",definition:"Budget authority that is available for original obligation for a specified period in excess of 1 fiscal year.",page:23,revised:!1},{term:"Negative In-transit Disbursements",definition:"The opposite of in-transit disbursement. The accounting office has processed disbursements for recordation against the applicable corresponding obligation but the disbursing office has not reported the disbursements, through a paying center, to the Department of the Treasury and charged against DoD’s fund balances. (See “In-transit Disbursements.”)",page:23,revised:!1},{term:"Negative Unobligated Balance",definition:"An appropriation or fund in which the amount of obligations exceeds the amount of obligational authority. In closed appropriations, the available obligational authority is equal to the unobligated balance.",page:24,revised:!1},{term:"Negative Unliquidated Obligation",definition:"A disbursement transaction that has been matched to the cited detail obligation, but the total disbursement(s) exceeds the amount of that obligation.",page:24,revised:!1},{term:"Noncurrent Accounts Receivable",definition:"A receivable that will not be due within 12 months following the reporting period.",page:24,revised:!1},{term:"Non-expenditure Transfers",definition:"A redistribution of either unobligated balances of budget authority provided in a previous year, or budget authority provided in the current year between appropriations or funds for the benefit of the gaining appropriation or fund. Transfers of obligated balances and sometimes re-appropriations also require non-expenditure transfers.",page:24,revised:!1},{term:"No-Year Authority",definition:"Budget authority that remains available for obligation for an indefinite period of time.",page:24,revised:!1},{term:"Obligation",definition:"Amount representing orders placed, contracts awarded, services received, and similar transactions during an accounting period that will require payment during the same, or a future, period. Includes payments for which obligations previously have not been recorded and adjustments for differences between obligations previously recorded and actual payments to liquidate those obligations. The amount of obligations incurred is segregated into undelivered orders and accrued expenditures - paid or unpaid. For purposes of matching a disbursement to its proper obligation, the term obligation refers to each separate obligation amount identified by a separate line of accounting.",page:24,revised:!1},{term:"Obligational Authority",definition:'The sum of (1) budget authority provided for a given fiscal year, (2) balances of amounts brought forward from prior years that remain available for obligation, and (3) amounts authorized to be credited to a specific fund or account during that year, including transfers between funds or accounts. See "Budget Authority."',page:24,revised:!1},{term:"Offsetting Collections",definition:"Collections from Federal Government accounts or from transactions with the public. The two major categories of offsetting collections are offsetting receipts (amounts deposited to receipt accounts) and offsetting collections credited to appropriation or fund accounts.",page:25,revised:!1},{term:"Offsetting Receipts",definition:"Collections that are deposited into proprietary Miscellaneous Receipt Accounts of the Department of the Treasury. Applicable deposits offset the collecting Agency's budget authority and outlays.",page:25,revised:!1},{term:"Operating Agency",definition:"A major organizational unit within a Military Department or Defense Agency that is responsible for (1) the active planning, direction, and control of a program or segment, thereof, and (2) the control of the funds allocated to it.",page:25,revised:!1},{term:"Outlays",definition:'The amount of checks issued or other payments made (including advances to others), net of refunds and reimbursements. Outlays are net of amounts that are adjustments to obligational authority. The terms "expenditure" and "net disbursement" are frequently used interchangeably with the term "outlay." Gross outlays are disbursements and net outlays are disbursements (net of refunds) minus reimbursements collected.',page:25,revised:!1},{term:"Overaged Disbursement",definition:"A disbursement that is not matched to a corresponding obligation within specified timeframes.",page:25,revised:!1},{term:"Overhead Rate",definition:"The rate determined by performing organizations to allocate operating costs not directly identifiable to the work order. The rate may include supervisory, general, and administrative expenses as well as miscellaneous material and supplies.",page:25,revised:!1},{term:"Participation Loan",definition:"A loan that consists of both direct and guaranteed portions.",page:25,revised:!1},{term:"Pass-throughs (Current Year)",definition:"Revolving fund revenues received during the current fiscal year which: (1) are in addition to amounts provided for in the customer stabilized rate structure and (2) represent reimbursement for current year costs or amounts in excess of amounts budgeted, or otherwise provided for, in the President's budget on which approved customer stabilized rates for the [current] year were based.",page:26,revised:!1},{term:"Pass-throughs (Prior Year)",definition:"Revolving fund revenues, which provide for the recoupment of amounts associated with prior year efforts or sales. These amounts represent the recoupment of amounts beyond those contained in the DoD stabilized rate structure for the applicable prior fiscal year for which the efforts were performed. These amounts are generally intended to offset prior year losses and/or amounts in excess of amounts previously budgeted.",page:26,revised:!1},{term:"Pay Account",definition:"The part of each individual civilian and Military Service member's master pay record that contains all transaction information on payments and deductions with an audit trail to the authorizing documents. The pay account includes information such as pay grade, record of payments, all earnings separately identified by type (basic pay, bonuses, danger pay); allowances; allotments; year-to-date gross earnings; taxable earnings, taxes withheld, and leave data (amount earned, taken, lost, forfeited, advanced, or used).",page:26,revised:!1},{term:"Pay and Allowances",definition:"Payment to active duty, Reserve, National Guard, and retired members and their surviving annuitants, other than travel and transportation reimbursements, and to all civilian employees and direct hire employees in foreign locations, other than travel and transportation expenses.",page:26,revised:!1},{term:"Paying Office",definition:"A disbursing office. In the case of contracts, the place named in the contract for forwarding invoices for payment.",page:26,revised:!1},{term:"Period of Availability",definition:"The period of time in which budget authority is available for original obligation.",page:26,revised:!1},{term:"Planning, Programing, Budgeting, and Execution (PPBE)",definition:"A cyclic process containing four distinct, but interrelated phases: planning, programing, budgeting, and execution. In addition to establishing the framework and process for decision making on future programs, the process permits prior decisions to be examined and analyzed from the viewpoint of the current environment (threat, political, economic, technological, and resources) and for the time period being addressed. The ultimate objective of PPBE is to provide operational commanders the best mix of forces, equipment, and support attainable within fiscal constraints.",page:27,revised:!1},{term:"Political Subdivision of Local Government",definition:"A local unit of government, including specifically a county, municipality, city, town, township, school district, or other special district created by State law, or combination of these units.",page:27,revised:!1},{term:"Port Loading and Unloading Costs",definition:"A subset of accessorial costs. The costs incurred for loading, unloading, and handling at the ports of embarkation and debarkation.",page:27,revised:!1},{term:"Prepositioning Costs",definition:"The accessorial costs incurred to store items at locations outside the United States in anticipation of support to other authorized customers.",page:27,revised:!1},{term:"Predetermined Rate",definition:"The rate established by appropriate authority for use in computing recoverable amounts.",page:27,revised:!1},{term:"Prevalidation",definition:"A procedure that requires a proposed payment be identified/matched to its applicable proper supporting obligation that has been recorded in the official accounting system and that the line(s) of accounting cited on the payment match the data recorded in the accounting system.",page:27,revised:!1},{term:"Private Parties",definition:"Consists of non-U.S. Government activities; foreign governments, firms, and organizations; and international organizations, other than Foreign Military Sales (FMS) customers and FMS/International Military Education and Training Program (IMET) recipients.",page:27,revised:!1},{term:"Project Order",definition:"An order for goods or services issued under the authority in 41 U.S.C. § 6307 to a separately managed and financed Federal Government owned and operated establishment. See Volume 11A, Chapter 2.",page:27,revised:!1},{term:"Property Book",definition:'A documentary record of every item on a "Table of Organization and Equipment List," or other type of allowance list, showing that a unit is prepared to accomplish its assigned mission. The property book lists both capitalized and expensed assets, shows quantities on hand, items due in, open requisitions, unit prices, hand receipts.',page:28,revised:!1},{term:"Realized Variance (Foreign Currency Fluctuations)",definition:"The difference between actual obligations at the budget rate (approved execution rate) and the foreign exchange rate in effect at the time of payment (liquidation of the obligation). The variance is equal to the amount disbursed from the applicable centrally managed allotments.",page:28,revised:!1},{term:"Real Property",definition:"Fixed assets that are comprised of land and the rights to land; buildings to include capitalized additions, alterations, improvements, and rehabilitations; and other structures and facilities. Real property does not include personal property (weapons systems and other military equipment).",page:28,revised:!1},{term:"Reapportionment",definition:"An Office of Management and Budget approved change to the previously approved apportionment for the current year. See “Apportionment.”",page:28,revised:!1},{term:"Reappropriation",definition:"Statutory authority to restore or extend the obligational availability, whether for the same or different purpose, of all or part of the unobligated balance of budget authority that has expired or otherwise would expire in an annual or multiple-year appropriation. Reappropriation transactions require non-expenditure transfer of the funds involved from the expired or otherwise expiring account to the designated current account when the unobligated balance has not been withdrawn to the surplus fund of the U.S. Treasury. If the unobligated balance has been withdrawn, then the transaction requires a warrant. Reappropriations that provide funds to a fiscal year for which they were not previously available constitute new budget authority in the receiving account.",page:28,revised:!1},{term:"Refunds",definition:'Recoveries of overpayments that result from errors in paying invoices or from items returned to vendors. Also see "Refunds and/or Transfers (Current Year)" and "Refunds and/or Transfers (Prior Year)."',page:28,revised:!1},{term:"Refunds and/or Transfers (Current Year)",definition:"Industrial fund amounts transferred on a non-expenditure basis which represent the transfer of revenue collected through stabilized rates which: (1) is in excess of current year costs or (2) otherwise exceeds the purpose for which initially intended in the current year. These transfers are generally made to appropriated funds and provided for in a general provision contained in the applicable annual appropriation act.",page:29,revised:!1},{term:"Refunds and/or Transfers (Prior Year)",definition:"Industrial fund amounts transferred on a non-expenditure basis, which represent the transfer of amounts associated with prior year efforts or sales. These amounts usually represent the transfer of revenue collected through stabilized rates which: (1) were in excess of [then] current year costs or (2) otherwise exceeded the purpose for which initially intended. These transfers are generally made to appropriated funds and provided for in a general provision contained in the applicable annual appropriation act.",page:29,revised:!1},{term:"Reimbursable Order",definition:"An order for services, supplies, material, or equipment placed by a requiring (or ordering) DoD Component (or Federal Agency) and furnished by another DoD Component (or Federal Agency) without separate identification of the items, or separate citation of the funds of the requiring DoD Component; and with subsequent delivery to and reimbursement by the requiring DoD Component. The requiring DoD Component records the reimbursable order as an obligation when the servicing (or performing) DoD Component accepts the reimbursable order in writing.",page:29,revised:!1},{term:"Reimbursements",definition:"Amounts earned and collected for property sold or services furnished either to the public or to another Federal accounting entity. To be an appropriation reimbursement, the collection must be authorized by law for credit to the specific appropriation or fund account.",page:29,revised:!1},{term:"Replacement Cost",definition:"Obligations to be incurred at a future time to procure equipment or material in place of items, which have been sold or transferred. There are two methods used to determine replacement cost: (1) Applying the OSD prescribed inflation factor to the most recent contract price of the item to be replaced. The inflation factor is applied to each fiscal year between the year the item sold or transferred was acquired and the fiscal year in which the replacement item will be delivered. (2) Obtaining a current contractor quote for the replacement item. Normally the second method is the most accurate method.",page:29,revised:!1},{term:"Reprogramming",definition:"Realignment of budget authority from the purpose for which appropriated to finance another (usually emergent, unfunded) requirement. A necessary, desirable, and timely device during execution of Defense programs for achieving flexibility in the use of DoD funds provided in appropriation acts.",page:30,revised:!1},{term:"Reschedule",definition:"(Restructure, refinance, forbear, re-amortize, or defer) to establish new terms or conditions in order to facilitate the repayment of debt. For example, stretching out or extending into the future such payments.",page:30,revised:!1},{term:"Rescission",definition:"Legislation that cancels budget authority previously provided by Congress before the time when the authority would otherwise lapse, that is, cease to be available for obligation.",page:30,revised:!1},{term:"Reserves",definition:"Portions of budgetary resources set aside by OMB to (1) provide for contingencies, or (2) effect savings made possible by or through changes in requirements or greater efficiency of operations.",page:30,revised:!1},{term:"Residual Value",definition:"Residual value is the estimated value remaining at the end of a capital asset's useful life to DoD or the amount that can be expected to be recovered from the asset's disposal when it is removed from service.",page:30,revised:!1},{term:"Resource Manager",definition:"An individual who ensures proper assignment of funds, validates the funds cited on a commitment or obligation document are accurate and available, and maintains funds control to include funding and spending limits.",page:30,revised:!1},{term:"Restoration",definition:"An unobligated amount previously withdrawn by administrative action to the merged surplus balances that is again made available to fund within scope increases to original obligations or to fund other Congressionally approved programs pursuant to law.",page:30,revised:!1},{term:"Revolving Fund Accounts",definition:"Accounts authorized by specific provisions of law to finance a continuing cycle of business-type operations, and which are authorized to incur obligations and expenditures that generate receipts.",page:31,revised:!1},{term:"Sequestration",definition:"Sequestration means the permanent cancellation of budgetary resources. The Statutory Pay-As-You-Go Act of 2010 requires such cancellations if revenue or direct spending legislation is enacted that, in total, increases projected deficits or reduces projected surpluses relative to the baseline. Under the law, selected mandatory programs would be subject to across-the-board cancellations. BBEDCA, as amended, requires such cancellations if discretionary appropriations exceed the statutory limits on discretionary spending.",page:31,revised:!1},{term:"Special Fund Accounts",definition:"Separate receipt and expenditure accounts established to account for receipts of the Government that are earmarked by law for a specific purpose but are not generated by a cycle of operations for which there is continuing authority to reuse such receipts.",page:31,revised:!1},{term:"Special Fund - Expenditure Accounts",definition:"Accounts established to record amounts appropriated, or otherwise made available by transfers from a special fund receipt account to be obligated and expended for special programs in accordance with specific provisions of law.",page:31,revised:!1},{term:"Special Funds - Receipt Accounts",definition:"Accounts credited with receipts from specific sources that are earmarked by law for a specific purpose, but which are not generated from a continuing cycle of operations.",page:31,revised:!1},{term:"Specialized or Technical Services",definition:"Statistical and other studies and compilations, developmental projects, technical tests and evaluations, technical information, training activities, surveys, reports, documents, and any other similar service functions that any Federal Agency is especially equipped and authorized by law to perform.",page:31,revised:!1},{term:"Standard Financial Information Structure (SFIS)",definition:"The SFIS is a comprehensive data structure that supports requirements for budgeting, financial accounting, cost/performance, interoperability, and external reporting needs across the DoD enterprise. It is a common business language that enables budgeting, performance-based management, and the generation of financial statements. SFIS standardizes financial reporting across DoD and allows revenues and expenses to be reported by programs that align with major goals, rather than basing reporting primarily on appropriation categories.",page:32,revised:!1},{term:"Standard Line of Accounting (SLOA)",definition:"The SLOA, a series of alpha and numeric characters appearing on accounting source documents, is a subset of the Standard Financial Information Structure (SFIS) data standard elements. Also referred to as the accounting classification code, the SLOA is comprised of the minimum SFIS data elements that must be exchanged for business events that have an accounting impact at any point from the initial commitment to the final posting in the appropriate general ledger. This includes commitments, obligations, expenditures, and disbursements. The characters provide the information necessary to enter transactions into DoD accounting systems.",page:32,revised:!1},{term:"Suballotments",definition:"Subdivisions of allotments. (See “Allotments” and “Apportionment.”)",page:32,revised:!1},{term:"Suspense Account",definition:"A clearing account established by the U.S. Treasury’s Financial Management Service to temporarily hold unidentifiable general, revolving, special, or trust fund collections that belong to the Federal Government. The funds remain in the suspense accounts until they can be reclassified to the proper receipt or expenditure accounts. Collections should be reclassified from suspense accounts within 60 days.",page:32,revised:!1},{term:"Tangible Assets",definition:"Depreciable property, plant, equipment, and software developed, manufactured, transferred, or acquired for a determinable cost meeting or exceeding the established capitalization threshold; are used over a period (useful life) estimated to be 2 years or greater; and generally become economically worthless (except for residual value) at the end of their estimated useful lives.",page:32,revised:!1},{term:"Transfer",definition:"Movement or shifting of budgetary resources from one budget account to another. Agencies may transfer budget authority only as specifically authorized by law. For budgetary accounting purposes, the nature of the transfer determines whether the transaction is recorded as an expenditure transfer, which means a transfer that involves an outlay, or as a nonexpenditure transfer, which means a transfer that does not involve an outlay.",page:32,revised:!1},{term:"Transportation Costs",definition:"The costs incurred for shipment of material.",page:33,revised:!1},{term:"Treasury Financial Communications System",definition:"The computer-to-computer link between the U.S. Treasury and the Federal Reserve Bank of New York.",page:33,revised:!1},{term:"Trust Fund",definition:"A type of account, designated by law as a “trust fund,” regardless of any other meaning of the term “trust fund.” A trust fund account is usually either a receipt, an expenditure, or a revolving fund account (trust revolving fund account). Trust revolving fund accounts have no receipt account and the collections are credited directly to the expenditure account.",page:33,revised:!1},{term:"Trust Fund Expenditure Accounts",definition:"Accounts that are established to record amounts appropriated, or otherwise made available by transfer from a trust fund receipt account to be obligated and expended in carrying out the specific purposes, or programs, in accordance with the terms of the trust agreement or statute.",page:33,revised:!1},{term:"Trust Fund Receipt Accounts",definition:"Receipt accounts that are credited with collections (governmental receipts or offsetting receipts) generated by the terms of a trust agreement or statute.",page:33,revised:!1},{term:"Trust Revolving Fund",definition:"The name given to a fund entity when a trust fund corpus is established to perform a continuing cycle of business-type operations in accordance with the trust agreement or statute, in which case a combined receipt and expenditure account is used.",page:33,revised:!1},{term:"Undelivered Orders",definition:"The value of goods and services ordered and obligated that have not been received. This amount includes any orders for which advance payment has been made but for which delivery or performance has not yet occurred.",page:33,revised:!1},{term:"Undistributed Transactions",definition:"Undistributed disbursements or collections represent transactions that have occurred and been reported to the Department of the Treasury but have not yet been recorded in the general ledger of the accounting system.",page:33,revised:!1},{term:"Unearned Revenue",definition:"Revenue from DoD customers collected in advance of earnings and prior to delivery of goods or services.",page:34,revised:!1},{term:"Unexpended Balance",definition:"The sum of the unobligated balance and the un-liquidated obligation balance of an appropriation.",page:34,revised:!1},{term:"Unexpired Accounts",definition:"Appropriation or fund accounts in which the balances are available for new obligations. Audit requirements, limitations on obligations, and reporting requirements applicable to unexpired accounts must continue to apply after the end of the period of availability for obligation or expenditure of that account.",page:34,revised:!1},{term:"Unfilled Customer Orders",definition:"The amount of orders accepted from ordering accounting entities within the U.S. Government for goods and services to be furnished on a reimbursable basis; or, in the case of transactions with the public, amounts collected in advance, for which the accounting entity has not yet performed as requested.",page:34,revised:!1},{term:"Unfunded Cost",definition:"Costs not financed by the performing activity's current appropriations or fund accounts. Applicable types of cost include interest on investment and accrued annual leave.",page:34,revised:!1},{term:"Unified Combatant Command",definition:"A unified combatant command is a military command which has broad, continuing missions and which is composed of forces from two or more Military Departments. Unified combatant commands are established by the President, through the Secretary of Defense, with the advice and assistance of the Chairman, Joint Chiefs of Staff.",page:34,revised:!1},{term:"Unliquidated Obligation Balance",definition:"The amount of obligations that have not been liquidated by payments (disbursements).",page:34,revised:!1},{term:"Unmatched Transactions",definition:"A disbursement and/or collection transaction that has been received and accepted by an accounting office, but has not been matched to the correct detail obligation. This includes transactions that have been rejected back to the paying office or central disbursement clearing organization by an accounting office. A. Unposted Unmatched: Transaction (disbursement or collection) that has been reported to the Treasury Central Accounting Reporting System (CARS) and has been received and processed by an accounting system, but was unable to post to Fund Balance with Treasury (FBWT) 101000 and point account in the accounting system general ledger because it failed to match a detailed document obligation or work order. B. Posted Unmatched: Transaction (disbursement or collection) that has been reported to the Treasury CARS, has been received and processed by an accounting system, and posted to FBWT 101000 and point account in the accounting system general ledger, but failed to match a detailed document obligation or work order.",page:35,revised:!1},{term:"Unobligated Balance",definition:"The cumulative amount of budget authority in an unexpired account that is not obligated and that remains available for obligation under law.",page:35,revised:!1},{term:"Unrecorded Obligations",definition:"Obligations that were incurred legitimately during the period of fund availability, but were not recorded in the Component’s records prior to expiration or cancellation of the appropriation or fund. For purposes of this guidance, “unrecorded” obligations are included in obligation adjustments. Current accounts may be used to pay previously unrecorded obligations chargeable to a closed account.",page:35,revised:!1},{term:"User",definition:"An individual, organization, or accounting entity that receives services. A user may be internal or external to the DoD Component.",page:35,revised:!1},{term:"Warehousing",definition:"Costs normally incurred for labor, materiel, or services in packing item(s) that are removed from DoD storage, preparing item(s) for shipment, and processing related materiel release documents.",page:35,revised:!1},{term:"Withdrawal",definition:"The transfer of the unobligated balance from an expired annual or multiple-year appropriation to the surplus account of the U.S. Treasury's general fund, or, if appropriate, to the special fund or trust fund from which derived.",page:35,revised:!1},{term:"Write off",definition:"As a budgetary term, write-off means the withdrawal from availability for obligation of an unobligated balance from a no-year appropriation. It excludes amounts withdrawn from expired accounts and amounts rescinded by the Congress. As an accounting term, write-off refers to the removal of a delinquent accounts receivable that is considered not collectible or not cost effective to pursue further collection efforts. A write-off is not a correction to the accounting records resulting from an accounting error.",page:36,revised:!1},{term:"Work in Process",definition:"Costs of the materials, labor, and indirect costs used in producing an end item (customized equipment or personal property), whether fabricated by a DoD working capital fund or by a non-DoD organization under contract.",page:36,revised:!1},{term:"Year-end Adjustments for Reimbursements",definition:"Accounting entries made to eliminate anticipated reimbursements for orders not accepted, eliminate those unobligated accepted orders that are no longer valid obligations of the ordering activity, and transfer valid unobligated reimbursable balances from expiring and non-expiring accounts to the most current ensuing fiscal year accounts. The exception is for unobligated balances resulting from earned reimbursements (that is, sales from inventory or performance of in-house services), which must be retained in non-expiring accounts until account expiration.",page:36,revised:!1}],Nb="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),nh="/assets/publications/dod-fmr-glossary-january-2024.pdf";function Rb({onNavigate:d}){const[m,w]=te.useState(""),[c,x]=te.useState("All");te.useEffect(()=>{document.title="DoD FMR Glossary | Budget Matter"},[]);const B=te.useMemo(()=>new Set(eo.map(_=>_.term[0].toUpperCase())),[]),k=te.useMemo(()=>{const _=m.trim().toLowerCase();return eo.filter(M=>{const N=c==="All"||M.term.toUpperCase().startsWith(c),R=!_||`${M.term} ${M.definition}`.toLowerCase().includes(_);return N&&R})},[c,m]),D=_=>{x(_),document.getElementById("dod-fmr-terms")?.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("main",{className:"dod-fmr-page",children:[s.jsxs("section",{className:"dod-fmr-hero",children:[s.jsxs("div",{className:"dod-fmr-hero-copy",children:[s.jsx("p",{className:"eyebrow",children:"DoD 7000.14-R · January 2024"}),s.jsx("h1",{children:"Financial Management Regulation Glossary"}),s.jsx("p",{children:"A complete, searchable reading experience for the Department of Defense financial-management terms in the official 36-page glossary."}),s.jsxs("div",{className:"dod-fmr-hero-actions",children:[s.jsxs("a",{href:"#dod-fmr-terms",children:["Search all terms ",s.jsx(qe,{})]}),s.jsxs("a",{className:"secondary",href:nh,target:"_blank",rel:"noreferrer",children:["Open source PDF ",s.jsx(et,{})]})]})]}),s.jsxs("div",{className:"dod-fmr-cover","aria-label":"Publication summary",children:[s.jsx("span",{children:s.jsx(zs,{})}),s.jsx("p",{children:"Department of Defense"}),s.jsx("strong",{children:"DoD FMR"}),s.jsx("small",{children:"Financial Management Regulation"}),s.jsxs("div",{children:[s.jsx("b",{children:eo.length}),s.jsx("span",{children:"defined terms"})]})]})]}),s.jsxs("div",{className:"dod-fmr-body",children:[s.jsxs("section",{className:"dod-fmr-orientation","aria-labelledby":"glossary-purpose",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"How to use this reference"}),s.jsx("h2",{id:"glossary-purpose",children:"Translate policy language into precise action"}),s.jsx("p",{children:zb})]}),s.jsxs("div",{className:"dod-fmr-use-grid",children:[s.jsxs("article",{children:[s.jsx(Og,{}),s.jsx("h3",{children:"Find the governing concept"}),s.jsx("p",{children:"Search both titles and full definitions when reviewing policy, transactions, reports, or audit support."})]}),s.jsxs("article",{children:[s.jsx(Xa,{}),s.jsx("h3",{children:"Confirm the context"}),s.jsx("p",{children:"Use the cited glossary page, then consult the applicable FMR volume and chapter for authoritative requirements."})]}),s.jsxs("article",{children:[s.jsx(Nl,{}),s.jsx("h3",{children:"Align the team"}),s.jsx("p",{children:"Use shared definitions in procedures, training, reconciliations, and issue papers to reduce ambiguity."})]})]})]}),s.jsxs("section",{className:"dod-fmr-change-note",children:[s.jsx("span",{children:s.jsx(ao,{})}),s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Source record"}),s.jsx("h2",{children:"January 2024 administrative update"}),s.jsx("p",{children:Eb})]})]}),s.jsxs("section",{className:"dod-fmr-explorer",id:"dod-fmr-terms","aria-labelledby":"glossary-heading",children:[s.jsxs("div",{className:"dod-fmr-explorer-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Complete A–Z reference"}),s.jsxs("h2",{id:"glossary-heading",children:["Explore all ",eo.length," definitions"]})]}),s.jsx("p",{children:"Nothing is summarized or omitted: every definition is transcribed from pages G-2 through G-36 of the attached publication."})]}),s.jsxs("div",{className:"dod-fmr-toolbar",children:[s.jsxs("label",{children:[s.jsx(Qa,{"aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:"Search glossary"}),s.jsx("input",{value:m,onChange:_=>w(_.target.value),placeholder:"Search terms and definitions…"})]}),s.jsxs("div",{className:"dod-fmr-letters","aria-label":"Filter glossary by first letter",children:[s.jsx("button",{className:c==="All"?"active":"",onClick:()=>D("All"),children:"All"}),Nb.map(_=>s.jsx("button",{disabled:!B.has(_),className:c===_?"active":"",onClick:()=>D(_),children:_},_))]}),s.jsxs("p",{"aria-live":"polite",children:[s.jsx("strong",{children:k.length})," ",k.length===1?"definition":"definitions"," shown"]})]}),k.length?s.jsx("div",{className:"dod-fmr-term-list",children:k.map((_,M)=>s.jsxs("article",{id:`term-${_.term.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[s.jsxs("div",{className:"dod-fmr-term-index",children:[s.jsx("span",{children:String(M+1).padStart(3,"0")}),s.jsx("b",{children:_.term[0]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"dod-fmr-term-title",children:[s.jsx("h3",{children:_.term}),_.revised&&s.jsx("span",{children:"Revised in source"})]}),s.jsx("p",{children:_.definition}),s.jsxs("small",{children:["Source page G-",_.page]})]})]},_.term))}):s.jsxs("div",{className:"dod-fmr-empty",children:[s.jsx(Qa,{}),s.jsx("h3",{children:"No definitions match"}),s.jsx("p",{children:"Try a broader phrase or reset the letter filter."}),s.jsx("button",{onClick:()=>{w(""),x("All")},children:"Show all definitions"})]})]}),s.jsxs("section",{className:"dod-fmr-source",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Verification and authority"}),s.jsx("h2",{children:"Read the original alongside the web reference"}),s.jsx("p",{children:"This page preserves the attached January 2024 glossary text. The FMR’s specific volumes and chapters remain the source for detailed, authoritative requirements."})]}),s.jsxs("div",{children:[s.jsxs("a",{href:nh,target:"_blank",rel:"noreferrer",children:[s.jsx(ao,{}),"Open the complete 36-page PDF ",s.jsx(et,{})]}),s.jsxs("button",{onClick:()=>d("/knowledge"),children:["Return to Knowledge ",s.jsx(qe,{})]})]})]})]})]})}const xe=(d,m,w,c,x)=>({number:d,phase:m,route:w,shortTitle:c,...x}),Es=[xe(1,"Formulation","/f1_planning","Strategic planning",{outcome:"A defensible set of outcomes, operating assumptions, and resource scenarios.",decision:"Which mission results deserve priority before numbers are built?",inputs:["Strategic and performance plans","Prior-year results, risk, demand, and cost evidence"],outputs:["Planning priorities and assumptions","Initial scenarios and evidence gaps"],actions:["Translate strategy into measurable outcomes.","Separate fixed commitments from scalable choices.","Document assumptions, owners, and evidence quality."],useCase:"A grant program forecasts application growth and models staffing, systems, and award-capacity needs under three demand scenarios.",insight:"Strong formulation starts with the result to be purchased—not last year’s organizational chart.",watchout:"Incrementing every line by the same percentage hides tradeoffs and weakens the later justification.",metric:"Share of requested resources tied to an explicit outcome and evidence source."}),xe(2,"Formulation","/f2_guidance","Budget guidance",{outcome:"One set of rules, calendars, formats, controls, and policy assumptions for all submitters.",decision:"What constraints and evidence standards must every component apply?",inputs:["OMB Circular A-11 and administration policy","Agency ceilings, calendars, and data standards"],outputs:["Agency budget call","Templates, milestones, and review criteria"],actions:["Resolve conflicts between central and bureau instructions.","Publish one source of truth with version control.","Define validation rules before submissions arrive."],useCase:"A department issues a budget call that links every resource change to an object class, performance measure, and legislative authority.",insight:"Guidance is a control design: ambiguity here becomes reconciliation work later.",watchout:"Using a prior-year call without checking the current A-11 can preserve obsolete dates, exhibits, and definitions.",metric:"Number of submission defects attributable to unclear or conflicting guidance."}),xe(3,"Formulation","/f3_internal","Component formulation",{outcome:"Complete component proposals with baselines, changes, evidence, and executable schedules.",decision:"What is the minimum viable funding level, and what changes at each alternative level?",inputs:["Budget call and planning assumptions","Workload, contracts, grants, staffing, and performance data"],outputs:["Base estimates and change packages","Risk, performance, and spend profiles"],actions:["Build from workload and cost drivers.","Reconcile budget, accounting, acquisition, and staffing data.","Show the consequence of both approval and denial."],useCase:"A bureau prices a new inspection initiative by hiring lead time, training throughput, equipment, travel, and expected compliance gains.",insight:"A good proposal makes the operating model visible enough that reviewers can test it.",watchout:"Double-counting shared services or ignoring acquisition lead time produces requests that cannot execute.",metric:"Percent of proposals passing data validation on first submission."}),xe(4,"Formulation","/f4_decision","Agency review",{outcome:"A ranked, balanced agency portfolio aligned to leadership priorities and fiscal constraints.",decision:"Which proposals advance, merge, scale, defer, or stop?",inputs:["Component proposals and alternatives","Enterprise ceilings, risk, legal, and performance reviews"],outputs:["Leadership decisions and funding levels","Decision log and unresolved issues"],actions:["Apply common scoring criteria across components.","Record tradeoffs and dissent, not only the final number.","Stress-test executable capacity and downstream outlays."],useCase:"Leadership compares cybersecurity, facility, and service-delivery investments using mission risk, time to impact, and execution readiness.",insight:"Portfolio review is where opportunity cost becomes explicit.",watchout:"Scoring creates false precision when criteria, evidence confidence, and decision rights are not transparent.",metric:"Resources reallocated from lower- to higher-priority outcomes during review."}),xe(5,"Formulation","/f5_submission","Submission to OMB",{outcome:"A coherent agency request submitted in required systems, formats, and policy channels.",decision:"Is the package accurate, internally consistent, and ready to defend?",inputs:["Approved agency portfolio","MAX data, schedules, exhibits, and justifications"],outputs:["Formal OMB submission","Certification and reconciliation record"],actions:["Reconcile narrative, tables, and system totals.","Run cross-year and account-level validations.","Prepare an indexed evidence room for examiner questions."],useCase:"The budget office traces every proposed program increase from the justification narrative to account totals and object-class schedules.",insight:"Submission quality is measured by consistency across artifacts, not by the polish of one document.",watchout:"Late narrative changes that are not reflected in MAX data create credibility and scoring problems.",metric:"Unreconciled differences between narrative, schedule, and system totals."}),xe(6,"Formulation","/f6_ombdecision","OMB review & passback",{outcome:"Settled resource and policy decisions for the President’s Budget.",decision:"Which agency requests best fit presidential priorities and government-wide totals?",inputs:["Agency submission and examiner analysis","Economic, policy, legislative, and cross-agency considerations"],outputs:["Passback and settlement decisions","Appeals, conditions, and revised materials"],actions:["Answer examiner questions with traceable evidence.","Model the operational consequence of passback changes.","Use appeals for material issues with clear decision asks."],useCase:"An agency responds to a reduction by showing the resulting service backlog, legal minimum, and a lower-cost alternative.",insight:"Passback is both a funding decision and a policy-integration checkpoint.",watchout:"Treating passback as a negotiation detached from administration policy weakens an appeal.",metric:"Material passback issues resolved with documented assumptions before lock."}),xe(7,"Formulation","/f7_omb2congress","President’s Budget",{outcome:"The President transmits a consolidated budget proposal and supporting materials to Congress.",decision:"How will the administration present its fiscal and program choices as one plan?",inputs:["Final OMB settlements","Budget Appendix, analytical, performance, and agency justification material"],outputs:["President’s Budget submission","Agency congressional justifications and rollout material"],actions:["Keep public documents consistent with transmitted totals.","Prepare leaders to explain changes from current law and prior years.","Publish accessible machine-readable support where required."],useCase:"An agency pairs a proposed investment with a baseline comparison, multi-year outlay profile, performance target, and legislative proposal.",insight:"The President’s Budget is a policy proposal—not an appropriation and not authority to obligate.",watchout:"The statutory first-Monday-in-February deadline is important, but actual submission timing can vary.",metric:"Time from transmission to publication of complete agency justification material."}),xe(8,"Enactment","/e8_resolution","Budget resolution",{outcome:"Congress establishes an internal fiscal framework and committee allocations.",decision:"What aggregate spending, revenue, deficit, and debt levels will guide congressional action?",inputs:["President’s Budget, CBO baseline, committee views","Economic outlook and congressional priorities"],outputs:["Concurrent budget resolution or alternative framework","302(a) allocations and possible reconciliation instructions"],actions:["Track assumptions as well as headline totals.","Map allocations to the committees that enforce them.","Distinguish target dates from actual congressional practice."],useCase:"An analyst traces how a 302(a) allocation constrains the amount available for the 12 appropriations subcommittees.",insight:"A budget resolution governs Congress internally; it is not presented to the President and does not itself fund agencies.",watchout:"No resolution does not mean no budget decisions—Congress can use alternative procedural devices.",metric:"Difference between framework assumptions and later enacted budgetary effects."}),xe(9,"Enactment","/e9_authorization","Authorization",{outcome:"Program authority, structure, policy, or recommended funding levels are established or revised.",decision:"What should the program do, for whom, under what authorities and controls?",inputs:["Authorizing statutes and oversight findings","Administration proposals and committee priorities"],outputs:["Authorization legislation and policy conditions","Program authorities, limits, or reporting requirements"],actions:["Separate program authority from funding availability.","Identify expiring authorities and mandatory components.","Trace proposed changes to implementation and cost."],useCase:"A committee revises eligibility and reporting rules while appropriators separately decide annual discretionary funding.",insight:"Authorization and appropriation are related but legally distinct decisions.",watchout:"An authorized amount does not provide budget authority unless the law itself supplies it.",metric:"Programs with current authority and a documented funding mechanism."}),xe(10,"Enactment","/e10_appropriation","Appropriations",{outcome:"Law provides budget authority and legally binding conditions for specified purposes.",decision:"How much authority is provided, for what purpose, period, and account?",inputs:["Committee allocations and agency justifications","Hearings, markups, scorekeeping, and bill language"],outputs:["Regular, supplemental, or continuing appropriations law","Account funding, limitations, transfers, and directives"],actions:["Read act text, explanatory material, and account structure together.","Build a purpose-time-amount control matrix.","Identify anomalies, rescissions, transfers, and advance appropriations."],useCase:"A budget office converts enacted account language into a funds-control table before any obligation is recorded.",insight:"Budget authority enables obligations; it is not the same as an obligation or an outlay.",watchout:"Totals in explanatory material cannot override enacted statutory restrictions.",metric:"Time from enactment to validated account-level funding controls."}),xe(11,"Enactment","/e11_hearing","Congressional hearings",{outcome:"Committees obtain testimony and evidence to test budget proposals and program performance.",decision:"Is the request justified, credible, executable, and aligned with congressional priorities?",inputs:["Budget justification and witness testimony","Performance, audit, cost, risk, and constituent evidence"],outputs:["Hearing record and follow-up commitments","Issues for markup, oversight, or legislation"],actions:["Prepare concise answers backed by reconciled data.","Maintain a commitment log during preparation and testimony.","Rehearse adverse scenarios and implementation constraints."],useCase:"A witness explains a funding increase by connecting workload, unit cost, service standard, and expected result.",insight:"A hearing tests management credibility as much as the requested number.",watchout:"Uncoordinated answers across witnesses can create conflicting commitments in the public record.",metric:"Hearing commitments delivered accurately by the agreed deadline."}),xe(12,"Enactment","/e12_q_a","Questions for the record",{outcome:"Complete, cleared, and responsive written answers become part of the congressional record.",decision:"What answer directly addresses the question while preserving accuracy and policy consistency?",inputs:["Official questions and hearing commitments","Program, financial, legal, and policy contributions"],outputs:["Cleared QFR responses","Supporting tables and commitment tracking"],actions:["Restate and answer every element of the question.","Use one accountable lead for cross-component data.","Reconcile the response with testimony and budget totals."],useCase:"Multiple bureaus contribute to one response while the lead office validates totals and maintains a single narrative.",insight:"QFRs are durable records; clarity and traceability matter more than volume.",watchout:"Routing many inconsistent drafts without a data owner invites contradictions and missed deadlines.",metric:"Responses returned on time without correction or supplemental clarification."}),xe(13,"Enactment","/e13_appeal","Committee appeals",{outcome:"A focused request asks the next decision-maker to restore or modify a committee action.",decision:"Is the issue material enough to appeal, and what exact remedy is requested?",inputs:["Committee action and administration position","Updated cost, impact, policy, and execution evidence"],outputs:["Cleared appeal package","Decision, compromise, or revised funding position"],actions:["State the precise funding and language change.","Update evidence for the current legislative stage.","Coordinate with OMB and authorized legislative channels."],useCase:"An agency seeks restoration of a reduction by showing a statutory workload, service effect, and executable alternative.",insight:"The strongest appeal is narrow, quantified, current, and tied to administration policy.",watchout:"Appealing every reduction dilutes leadership attention and congressional credibility.",metric:"Material appeals resolved versus total appeals submitted."}),xe(14,"Enactment","/e14_cr","Continuing resolutions",{outcome:"Temporary or full-year funding maintains covered activities when regular appropriations are incomplete.",decision:"What can operate at the CR rate, and which exceptions or anomalies are essential?",inputs:["CR statute and OMB guidance","Prior-year funding, duration, anomalies, and spend forecasts"],outputs:["CR operating plan and controls","Anomaly requests, rate calculations, and shutdown contingencies"],actions:["Calculate authority by account and applicable rate.","Defer avoidable commitments while protecting mission continuity.","Model expiration, extension, and full-year conversion scenarios."],useCase:"A program sequences contract options and hiring actions around a short-term CR while preserving critical operations.",insight:"A CR is enacted law, but it usually constrains pace, starts, and flexibility differently from regular appropriations.",watchout:"Treating an annualized CR rate as immediately available authority can cause over-obligation.",metric:"Obligations and commitments remaining within the CR authority and operating plan."}),xe(15,"Enactment","/e15_oversight","Congressional oversight",{outcome:"Congress evaluates implementation, stewardship, and results and may adjust future law or funding.",decision:"Did the agency use resources lawfully and achieve the represented results?",inputs:["Execution data, audits, evaluations, and reports","Hearings, directives, constituent issues, and inspector findings"],outputs:["Oversight findings and corrective actions","Future authorization, appropriation, or reporting changes"],actions:["Maintain traceability from promise to execution result.","Address root causes, owners, and deadlines.","Integrate oversight findings into the next formulation cycle."],useCase:"A program uses audit and performance findings to redesign controls and justify a targeted modernization request.",insight:"Oversight closes the loop—the next budget begins with evidence from the current one.",watchout:"Reporting activity without explaining outcomes, variance, and corrective action does not demonstrate stewardship.",metric:"High-priority findings closed on schedule with verified corrective evidence."}),xe(16,"Execution","/b16_apportionments","Apportionment",{outcome:"OMB-approved limits distribute budgetary resources by time, activity, project, or combination.",decision:"How should authority be paced to prevent deficiency and support effective execution?",inputs:["Enacted authority, balances, and collections","SF 132 request, spend plan, and OMB A-11 guidance"],outputs:["Approved apportionment or reapportionment","Agency allotments and funds-control limits"],actions:["Reconcile resources to enacted and Treasury records.","Align category limits to the operating plan.","Reapportion before needs exceed approved distributions."],useCase:"An agency phases hiring and contract obligations by quarter while reserving authority for uncertain demand.",insight:"An appropriation may exist while obligation is still prohibited until required apportionment controls are in place.",watchout:"The 2025 A-11 changed several automatic-apportionment rules; use the current section 120, not an old threshold.",metric:"Funds-control exceptions and late reapportionment requests."}),xe(17,"Execution","/b17_report","Budget execution reporting",{outcome:"Reliable SF 133/GTAS reporting explains resources, obligations, balances, and outlays by TAFS.",decision:"Do accounting records and budget controls agree on the status of funds?",inputs:["USSGL trial balances and attributes","Apportionments, warrants, transfers, obligations, and disbursements"],outputs:["Validated GTAS submission and SF 133","Variance analysis and corrective entries"],actions:["Reconcile USSGL, apportionment, and subsidiary records.","Clear GTAS edits before reporting deadlines.","Explain material changes in resources and execution pace."],useCase:"A budget and accounting team investigates why the SF 133 unobligated balance differs from the funds-control ledger.",insight:"GTAS-based execution data also supports public account-level transparency through USAspending.",watchout:"A technically accepted submission can still be analytically wrong if attributes or account mapping are poor.",metric:"Unresolved GTAS edits and material reconciliation differences at close."}),xe(18,"Execution","/b18_rescission","Rescissions & deferrals",{outcome:"Proposed or enacted changes to the availability of budgetary resources are lawfully controlled and reported.",decision:"Is the action an enacted rescission, proposed rescission, permissible deferral, or ordinary program delay?",inputs:["Impoundment Control Act and current A-11 section 112","Program schedules, apportionments, and resource status"],outputs:["Special/supplementary message or enacted cancellation","Updated apportionment and funds-control treatment"],actions:["Classify the action with counsel and budget officials.","Separate policy withholding from operational delay.","Track congressional action and release requirements."],useCase:"An agency determines whether a slowed obligation plan is a reportable withholding or a documented implementation delay.",insight:"Terminology controls legal treatment: a proposed rescission is not the same as an enacted rescission.",watchout:"Do not assume older A-11 subsection numbers or procedures remain current; section 112 changed in 2025.",metric:"Withholding actions reviewed and reported within applicable requirements."}),xe(19,"Execution","/b19_outlay","Outlay management",{outcome:"Credible cash forecasts align payment timing with obligations, delivery, and Treasury financing needs.",decision:"When will obligations liquidate into payments, and what explains forecast variance?",inputs:["Obligation schedules, award milestones, payroll, and benefits","Historical liquidation rates and current operating conditions"],outputs:["Monthly outlay plan and updates","Variance drivers and corrective forecast"],actions:["Forecast from payment drivers, not straight-line percentages.","Separate prior-year liquidation from current-year obligations.","Update estimates when delivery or award schedules change."],useCase:"A construction program forecasts outlays by milestone acceptance rather than by the date the contract was obligated.",insight:"Outlays in a fiscal year are not necessarily a subset of that year’s obligations.",watchout:"Conflating obligation pace with payment pace distorts cash and performance analysis.",metric:"Absolute outlay forecast error by month and by major driver."}),xe(20,"Execution","/b20_finplan","Financial plan",{outcome:"An executable operating plan connects authority, obligations, outlays, workload, and results.",decision:"How will available resources be distributed and monitored throughout the year?",inputs:["Approved apportionment and allotments","Operating, acquisition, staffing, grant, and performance plans"],outputs:["Time-phased spend and performance plan","Variance thresholds and management review cadence"],actions:["Plan by account, object class, organization, and result.","Identify commitments and obligation decision dates.","Assign variance owners and predefine corrective actions."],useCase:"A bureau combines hiring, contracts, grants, travel, and performance milestones in one monthly execution forecast.",insight:"A useful spend plan is a management model, not a static allocation spreadsheet.",watchout:"Focusing only on obligation rate can reward low-value spending and hide performance risk.",metric:"Forecast accuracy plus outcome delivery—not year-end obligation percentage alone."}),xe(21,"Execution","/b21_reprogram","Reprogramming & transfers",{outcome:"Resources are realigned within legal authority, notification rules, and congressional expectations.",decision:"Is the change a reprogramming within an account or a transfer between accounts requiring statutory authority?",inputs:["Appropriation law, transfer authority, and committee thresholds","Execution need, source availability, and program impact"],outputs:["Approved reprogramming or transfer package","Updated controls, apportionment, and congressional notification"],actions:["Confirm legal authority before moving resources.","Assess impact on both source and receiving purposes.","Complete notification and reapportionment steps in sequence."],useCase:"An agency shifts funding to an urgent program after documenting source impact and satisfying prior-notification requirements.",insight:"Transfers require statutory authority; reprogramming flexibility can still be restricted by law and committee practice.",watchout:"Moving funds first and documenting later risks an Antideficiency Act or purpose violation.",metric:"Realignments executed only after all legal and notification gates are complete."}),xe(22,"Execution","/b22_directive","Congressional directives",{outcome:"Statutory requirements and report-language expectations are inventoried, assigned, and answered transparently.",decision:"What is legally binding, what expresses congressional intent, and how will the agency respond?",inputs:["Enacted act, explanatory statement, and committee reports","Agency policy, legal analysis, milestones, and evidence"],outputs:["Directive inventory and response package","Owners, due dates, implementation status, and escalation record"],actions:["Classify each item by legal force and source.","Quote the controlling language accurately.","Track implementation barriers and communicate early."],useCase:"A department distinguishes a statutory spending restriction from a report request, then assigns the correct control and response path.",insight:"Report language is generally not law, but ignoring it can affect oversight and future appropriations.",watchout:"Do not describe all directives as legally binding—or dismiss all report language as optional.",metric:"Directives completed or transparently resolved by the committed date."})],Ns=Object.fromEntries(Es.map(d=>[d.route,d])),so={Formulation:"/formulation",Enactment:"/enactment",Execution:"/execution"},qb=new Set(["/process",...Object.values(so)]),Ol=d=>qb.has(d)||!!Ns[d],Gb=[{label:"OMB Circular A-11 (August 2025)",url:"https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf",detail:"Current executive budget preparation, submission, and execution guidance."},{label:"CRS: Budgetary Decisionmaking in Congress",url:"https://www.congress.gov/crs-product/IF11032",detail:"Explains why congressional budgeting is an array of decisions rather than one linear process."},{label:"CRS: Congressional Budget Process Timeline",url:"https://www.congress.gov/crs-product/R47235",detail:"Current statutory targets and recent operating practice."},{label:"GAO Principles of Federal Appropriations Law",url:"https://www.gao.gov/legal/appropriations-law/red-book",detail:"Purpose, time, amount, and other controlling appropriations-law principles."},{label:"Treasury GTAS",url:"https://fiscal.treasury.gov/gtas/",detail:"Government-wide budget execution and proprietary reporting information."},{label:"USAspending data sources",url:"https://www.usaspending.gov/data/data-sources-download.pdf",detail:"How agency account, award, GTAS, obligation, and outlay data connect."}],fh={Formulation:{purpose:"Convert policy, mission need, performance evidence, and cost drivers into one coherent presidential budget proposal.",reality:"Agencies work on several fiscal years at once. Planning, current-year execution, audit, and the next request overlap continuously.",questions:["What result are we buying?","What changes from current law or service?","Can the organization execute the request?"],roles:["Agency components","Agency budget office","Leadership","OMB resource management offices"]},Enactment:{purpose:"Translate proposals into congressional fiscal frameworks, program authority, appropriations, conditions, and oversight commitments.",reality:"Congressional budgeting is not a single assembly line. Resolution, authorization, appropriations, oversight, and reconciliation can overlap or proceed differently each year.",questions:["What is law versus an internal congressional control?","What funding and conditions were enacted?","What commitments enter the public record?"],roles:["Budget committees","Authorizing committees","Appropriations committees","CBO, GAO, and agency witnesses"]},Execution:{purpose:"Turn enacted authority into controlled obligations, payments, public results, reliable reporting, and evidence for the next cycle.",reality:"Execution is a feedback system. Apportionment, financial plans, accounting, acquisition, performance, and congressional communication must stay reconciled.",questions:["Is the resource legally available?","Are obligations and outlays on a credible path?","What variance requires management action?"],roles:["OMB","Agency budget and program offices","CFO/accounting and acquisition teams","Treasury and congressional committees"]}};function gh({route:d,onNavigate:m}){const w=Ns[d];return s.jsxs("section",{className:"journey-map","aria-label":"Federal budget process map",children:[s.jsxs("div",{className:"journey-map-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Interactive process map"}),s.jsx("h2",{children:"One cycle. Twenty-two connected decisions."})]}),s.jsx("p",{children:"Select any step. The active route is highlighted; arrows show the primary learning sequence, while feedback loops continue across fiscal years."})]}),s.jsx("div",{className:"journey-phase-rail",children:["Formulation","Enactment","Execution"].map((c,x)=>s.jsxs("div",{className:`journey-phase phase-${c.toLowerCase()}`,children:[s.jsxs("button",{className:d===so[c]?"phase-label active":"phase-label",onClick:()=>m(so[c]),children:[s.jsxs("span",{children:["0",x+1]}),s.jsx("strong",{children:c}),s.jsx("small",{children:fh[c].purpose})]}),s.jsx("div",{className:"journey-step-row",children:Es.filter(B=>B.phase===c).map(B=>s.jsxs("button",{"aria-current":w?.number===B.number?"step":void 0,className:w?.number===B.number?"journey-step active":"journey-step",onClick:()=>m(B.route),children:[s.jsx("span",{children:String(B.number).padStart(2,"0")}),s.jsx("strong",{children:B.shortTitle})]},B.route))})]},c))}),s.jsxs("div",{className:"journey-loop",children:[s.jsx("span",{children:"Evidence & oversight"}),s.jsx(qe,{}),s.jsx("span",{children:"Next formulation cycle"}),s.jsx(qe,{}),s.jsx("span",{children:"Revised policy and execution"})]})]})}function Hb({route:d,onNavigate:m}){const w=Object.entries(so).find(([,x])=>x===d)?.[0]||null,c=w?[w]:["Formulation","Enactment","Execution"];return s.jsxs(s.Fragment,{children:[s.jsx(gh,{route:d,onNavigate:m}),s.jsxs("section",{className:"process-reality-callout",children:[s.jsx(dh,{}),s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Current operating reality"}),s.jsx("h2",{children:"The process is structured, but rarely linear."}),s.jsx("p",{children:"Statutory milestones provide a shared frame. In practice, multiple fiscal years overlap, congressional actions vary, continuing resolutions are common, and execution evidence feeds the next request. Use the 22 steps as control points—not as a promise that every year follows one calendar."})]})]}),s.jsx("section",{className:"phase-blueprint-grid",children:c.map(x=>{const B=fh[x],k=Es.filter(D=>D.phase===x);return s.jsxs("article",{children:[s.jsxs("div",{className:"phase-blueprint-header",children:[s.jsx("span",{children:x==="Formulation"?"01":x==="Enactment"?"02":"03"}),s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Phase blueprint"}),s.jsx("h2",{children:x})]})]}),s.jsx("p",{className:"phase-purpose",children:B.purpose}),s.jsxs("div",{className:"phase-blueprint-body",children:[s.jsxs("div",{children:[s.jsx("h3",{children:"Reality check"}),s.jsx("p",{children:B.reality}),s.jsx("h3",{children:"Questions to manage"}),s.jsx("ul",{children:B.questions.map(D=>s.jsxs("li",{children:[s.jsx(Xa,{}),D]},D))})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Primary participants"}),s.jsx("ul",{children:B.roles.map(D=>s.jsxs("li",{children:[s.jsx(db,{}),D]},D))}),s.jsx("h3",{children:"Steps"}),s.jsx("div",{className:"phase-mini-steps",children:k.map(D=>s.jsxs("button",{onClick:()=>m(D.route),children:[s.jsx("span",{children:D.number}),D.shortTitle]},D.route))})]})]})]},x)})}),s.jsx(bh,{})]})}function bh(){return s.jsxs("section",{className:"process-source-panel",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Verified reference layer"}),s.jsx("h2",{children:"Authoritative sources"}),s.jsx("p",{children:"Content enhancements are grounded in current executive, congressional, legal, reporting, and public-data guidance. Always verify the current-year circular, enacted law, and agency-specific controls before acting."})]}),s.jsx("div",{children:Gb.map(d=>s.jsxs("a",{href:d.url,target:"_blank",rel:"noreferrer",children:[s.jsxs("span",{children:[s.jsx("strong",{children:d.label}),s.jsx("small",{children:d.detail})]}),s.jsx(et,{})]},d.url))})]})}function Ub({route:d,onNavigate:m}){const w=Ns[d];if(!w)return null;const c=Es[w.number-2],x=Es[w.number];return s.jsxs(s.Fragment,{children:[s.jsx(gh,{route:d,onNavigate:m}),s.jsxs("section",{className:`step-command-card phase-${w.phase.toLowerCase()}`,children:[s.jsxs("div",{className:"step-command-number",children:[s.jsx("small",{children:w.phase}),s.jsx("strong",{children:String(w.number).padStart(2,"0")}),s.jsx("span",{children:"of 22"})]}),s.jsxs("div",{className:"step-command-main",children:[s.jsx("p",{className:"section-kicker",children:"Decision brief"}),s.jsx("h2",{children:w.shortTitle}),s.jsx("p",{className:"step-outcome",children:w.outcome}),s.jsxs("div",{className:"decision-question",children:[s.jsx(uh,{}),s.jsxs("span",{children:[s.jsx("small",{children:"Decision to manage"}),s.jsx("strong",{children:w.decision})]})]})]}),s.jsxs("div",{className:"step-command-nav",children:[c&&s.jsxs("button",{onClick:()=>m(c.route),children:[s.jsxs("small",{children:["Previous · ",c.number]}),s.jsx("span",{children:c.shortTitle})]}),x&&s.jsxs("button",{onClick:()=>m(x.route),children:[s.jsxs("small",{children:["Next · ",x.number]}),s.jsx("span",{children:x.shortTitle})]})]})]}),s.jsxs("section",{className:"step-io-section",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Control flow"}),s.jsx("h2",{children:"Inputs become accountable outputs"})]}),s.jsx("p",{children:"Use this handoff map to define ownership, completeness, and the evidence needed for the next decision."})]}),s.jsxs("div",{className:"step-io-map",children:[s.jsxs("div",{className:"io-column",children:[s.jsx(_g,{}),s.jsx("small",{children:"Inputs"}),w.inputs.map(B=>s.jsx("span",{children:B},B))]}),s.jsxs("div",{className:"io-transform",children:[s.jsx("span",{children:String(w.number).padStart(2,"0")}),s.jsx("strong",{children:w.shortTitle}),s.jsx(qe,{})]}),s.jsxs("div",{className:"io-column",children:[s.jsx(kg,{}),s.jsx("small",{children:"Outputs"}),w.outputs.map(B=>s.jsx("span",{children:B},B))]})]})]}),s.jsxs("section",{className:"step-action-grid",children:[s.jsxs("article",{className:"action-playbook",children:[s.jsxs("div",{children:[s.jsx(pg,{}),s.jsx("p",{className:"section-kicker",children:"Action playbook"}),s.jsx("h2",{children:"What good looks like"})]}),s.jsx("ol",{children:w.actions.map((B,k)=>s.jsxs("li",{children:[s.jsx("span",{children:k+1}),s.jsx("p",{children:B})]},B))})]}),s.jsxs("div",{className:"step-insight-stack",children:[s.jsxs("article",{children:[s.jsx(to,{}),s.jsx("small",{children:"Practical use case"}),s.jsx("p",{children:w.useCase})]}),s.jsxs("article",{children:[s.jsx(dh,{}),s.jsx("small",{children:"Expert insight"}),s.jsx("p",{children:w.insight})]}),s.jsxs("article",{className:"watchout",children:[s.jsx(lb,{}),s.jsx("small",{children:"Watch for"}),s.jsx("p",{children:w.watchout})]}),s.jsxs("article",{children:[s.jsx(Ng,{}),s.jsx("small",{children:"Management signal"}),s.jsx("p",{children:w.metric})]})]})]}),s.jsxs("section",{className:"step-control-lens",children:[s.jsxs("div",{children:[s.jsx(Rl,{}),s.jsx("p",{className:"section-kicker",children:"Production check"}),s.jsx("h2",{children:"Before this step is considered complete"})]}),s.jsx("div",{children:["Authority and policy basis are identified","Amounts and narratives reconcile","Decision, owner, and assumptions are documented","Next-step handoff is accepted","Evidence is retained for oversight"].map(B=>s.jsxs("span",{children:[s.jsx(Xa,{}),B]},B))})]}),s.jsx(bh,{})]})}function Pb({route:d,onNavigate:m}){return s.jsx("div",{className:"native-shell process-intelligence",children:Ns[d]?s.jsx(Ub,{route:d,onNavigate:m}):s.jsx(Hb,{route:d,onNavigate:m})})}function Yb({route:d}){const m=Ns[d];return m?s.jsxs("section",{className:`process-reference-intro phase-${m.phase.toLowerCase()}`,children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Applied reference"}),s.jsxs("h2",{children:[m.shortTitle,": detailed guidance and visuals"]}),s.jsx("p",{children:m.outcome})]}),s.jsxs("div",{className:"reference-lens",children:[s.jsxs("span",{children:[s.jsx("small",{children:"Decision focus"}),s.jsx("strong",{children:m.decision})]}),s.jsxs("span",{children:[s.jsx("small",{children:"Evidence to retain"}),s.jsx("strong",{children:m.outputs[0]})]}),s.jsxs("span",{children:[s.jsx("small",{children:"Management signal"}),s.jsx("strong",{children:m.metric})]})]})]}):s.jsxs("section",{className:"process-reference-intro",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Applied reference"}),s.jsx("h2",{children:"Use the detailed guidance as a working map"}),s.jsx("p",{children:"Connect the diagrams and narrative to an actual budget decision, identify the responsible organization, and record the evidence that moves the work into the next phase."})]}),s.jsxs("div",{className:"reference-lens",children:[s.jsxs("span",{children:[s.jsx("small",{children:"Read for"}),s.jsx("strong",{children:"Sequence, ownership, and handoffs"})]}),s.jsxs("span",{children:[s.jsx("small",{children:"Apply to"}),s.jsx("strong",{children:"Current, upcoming, and future fiscal years"})]}),s.jsxs("span",{children:[s.jsx("small",{children:"Validate with"}),s.jsx("strong",{children:"Current law and agency controls"})]})]})]})}const qn=[{route:"/project7/project7",title:"Federal Budget Spend Plan Model",shortTitle:"Spend Plan Model",category:"Budget & finance",image:"/assets/project7/Spend%20Plan%20Demo.gif",summary:"A scenario-driven operating-plan model that translates enacted resources into an executable, balanced funding plan and supports in-year monitoring.",outcome:"Leaders can compare allocation, hiring, pay, non-pay, continuing-resolution, and obligation-rate scenarios before committing funds.",whyItMatters:"Budget authority only creates value when it becomes a realistic operating plan. This model connects resource decisions to execution capacity and makes tradeoffs visible early.",capabilities:["Scenario modeling and self-balancing controls","Pay and non-pay forecasting","Plan-versus-actual execution monitoring"],tools:["Excel","Financial modeling","Federal budget execution"]},{route:"/tableau-1-citibike",title:"Citi Bike Mobility Analysis",shortTitle:"Citi Bike Analysis",category:"Business intelligence",image:"/assets/img/tableau-1-citibike.JPG",summary:"An interactive Tableau analysis of New York City bike-share activity, station demand, trip patterns, rider behavior, and geographic movement.",outcome:"Users can identify high-volume stations, route concentrations, time patterns, and differences between rider segments.",whyItMatters:"Mobility data becomes actionable when planners can see where and when demand occurs. The same approach supports asset placement, service planning, and capacity decisions.",capabilities:["Geospatial demand analysis","Interactive filtering and drill-down","Operational trend visualization"],tools:["Tableau","Geospatial analysis","Data storytelling"]},{route:"/project10/project10",title:"Automated Excel Consolidation with Python",shortTitle:"Excel Consolidation",category:"Data automation",image:"/assets/project10/book.gif",summary:"A repeatable Python workflow for combining multiple Excel workbooks or worksheets into a standardized analytical dataset.",outcome:"Fragmented submissions can be parsed, normalized, combined, analyzed, and exported without repetitive copy-and-paste work.",whyItMatters:"Consolidation is a common control point in budget and operational reporting. Automation reduces cycle time, manual errors, and version-control risk.",capabilities:["Multi-file ingestion and schema alignment","Repeatable data transformation","Controlled analytical output"],tools:["Python","Pandas","Excel"]},{route:"/project11/project11",title:"Excel Change Detection with Python",shortTitle:"Excel Change Detection",category:"Data automation",image:"/assets/project11/compare.gif",summary:"An automated comparison workflow that detects additions, removals, and changed values across Excel workbooks and worksheets.",outcome:"Reviewers receive a focused record of what changed instead of manually comparing entire files cell by cell.",whyItMatters:"Reliable change detection strengthens reconciliation, review, and auditability—especially when successive budget versions contain thousands of data points.",capabilities:["Record-level comparison","Exception and variance identification","Review-ready change reporting"],tools:["Python","Pandas","Excel"]},{route:"/project9/project9",title:"Excel VBA Automation Toolkit",shortTitle:"VBA Automation",category:"Data automation",image:"/assets/project9/vba.jpg",summary:"A collection of practical VBA patterns for finding, replacing, comparing, combining, returning, and analyzing information inside Microsoft Excel.",outcome:"Recurring spreadsheet tasks become guided, repeatable operations that can be executed close to the user’s existing workflow.",whyItMatters:"Many organizations still operate critical processes in Excel. Well-designed automation can improve consistency and free analysts to focus on exceptions and decisions.",capabilities:["Workbook and worksheet automation","Cross-application data handling","Custom analytical and formatting routines"],tools:["VBA","Excel","Office automation"]},{route:"/project13/project13",title:"Federal Government Spending Dashboard",shortTitle:"Federal Spending",category:"Budget & finance",image:"/assets/project13/project13.PNG",summary:"A Tableau dashboard that organizes federal budget and spending information into an accessible, filterable management view.",outcome:"Users can explore spending patterns and compare funding activity without working directly through dense source tables.",whyItMatters:"Public finance data is most useful when leaders and stakeholders can quickly move from totals to patterns, exceptions, and questions requiring follow-up.",capabilities:["Budget and spending trend analysis","Interactive slicing and comparison","Executive-ready financial communication"],tools:["Tableau","Federal spending data","Dashboard design"]},{route:"/project14/project14",title:"Federal Budget Execution Dashboard",shortTitle:"Execution Dashboard",category:"Budget & finance",image:"/assets/project14/project14.PNG",summary:"A reusable execution dashboard for monitoring and comparing plans, obligations, outlays, and performance across time or organizational segments.",outcome:"Managers can identify execution variance, emerging year-end risk, and areas that require corrective action or updated forecasts.",whyItMatters:"Execution dashboards turn periodic reporting into an active management system by showing whether resources are moving at the pace and toward the results intended.",capabilities:["Plan-to-actual variance analysis","Execution-rate monitoring","Comparative performance views"],tools:["Tableau","Budget execution","Management reporting"]},{route:"/project15/project15",title:"SQL-to-Python Analytical Pipeline",shortTitle:"SQL + Python Analytics",category:"Analytics & AI",image:"/assets/project15/sqlalchemy.png",summary:"An end-to-end analytical workflow that retrieves structured data from SQL, analyzes it with Python, and communicates findings through visual outputs.",outcome:"Database records can move through a reproducible pipeline from query to transformation, analysis, and presentation.",whyItMatters:"Connecting governed data stores to analytical tools reduces one-off extracts and creates a stronger foundation for repeatable, scalable decision support.",capabilities:["Database retrieval and query integration","Dataframe-based analysis","Programmatic visualization"],tools:["SQLAlchemy","Python","Pandas","Matplotlib"]},{route:"/project12/project12",title:"Text Sentiment Analysis with Python",shortTitle:"Text Analytics",category:"Analytics & AI",image:"/assets/project12/text.gif",summary:"A natural-language analysis workflow that classifies text sentiment and visualizes polarity and intensity across selected social-media accounts.",outcome:"Large volumes of unstructured text become comparable signals that reveal tone, changes over time, and communication patterns.",whyItMatters:"Organizations need structured ways to interpret feedback and public conversation. Text analytics helps prioritize what requires human review while preserving scale.",capabilities:["Lexicon-based sentiment scoring","Automated text collection and preparation","Comparative sentiment visualization"],tools:["Python","VADER","Pandas","Matplotlib"]},{route:"/tableau-2-fed-avg-salary",title:"Federal Workforce and Salary Analysis",shortTitle:"Federal Workforce",category:"Business intelligence",image:"/assets/img/tableau-2-fed-avg-salary.JPG",summary:"An interactive view of federal employment and salary patterns by geography, agency, occupation, education, and grade-related dimensions using public FY 2018 data.",outcome:"Users can explore how workforce composition and compensation vary across organizations and locations.",whyItMatters:"Workforce cost is a major operating driver. Clear segmentation supports staffing analysis, affordability discussions, and evidence-based human-capital planning.",capabilities:["Workforce segmentation","Compensation distribution analysis","Geographic and organizational comparison"],tools:["Tableau","Public workforce data","Interactive analytics"]},{route:"/tableau-3-covid19",title:"COVID-19 Geographic Dashboard",shortTitle:"COVID-19 Dashboard",category:"Business intelligence",image:"/assets/img/tableau-3-covid19.JPG",summary:"A state- and county-level Tableau dashboard for exploring reported COVID-19 cases and deaths across geography and time.",outcome:"Users can move from a national view to local patterns and compare the scale and distribution of reported impacts.",whyItMatters:"During rapidly changing events, decision-makers need consistent geographic context. The project demonstrates how public data can be transformed into an accessible situational-awareness product.",capabilities:["Geographic drill-down","Time-series monitoring","Public-data dashboarding"],tools:["Tableau","Public-health data","Geospatial visualization"]},{route:"/project5/project5",title:"Clinical Trial Analysis: The Power of Plots",shortTitle:"Clinical Trial Plots",category:"Analytics & AI",image:"/assets/img/project5.PNG",summary:"A Python analysis of experimental treatment data covering tumor response, metastatic progression, survival rates, uncertainty, and comparative outcomes.",outcome:"Raw study observations are transformed into statistical summaries and decision-oriented charts that compare treatment performance over time.",whyItMatters:"Good analytical graphics expose both magnitude and uncertainty. The techniques transfer directly to program evaluation, performance measurement, and evidence-based decisions.",capabilities:["Grouped statistical analysis","Uncertainty and error-bar visualization","Comparative outcome assessment"],tools:["Python","Pandas","Matplotlib"]},{route:"/project4/project4",title:"Interactive Biodiversity Explorer",shortTitle:"Biodiversity Explorer",category:"Interactive visualization",image:"/assets/img/project4.PNG",summary:"A browser-based dashboard that lets users select a sample and explore demographic metadata, microbial composition, and biodiversity measures.",outcome:"Multiple linked charts update from one selection, creating a compact exploratory experience for complex scientific data.",whyItMatters:"Interactive visual systems help nontechnical users investigate multidimensional data without losing the relationship between context, composition, and scale.",capabilities:["Linked interactive charts","Dynamic selection and rendering","Multidimensional scientific storytelling"],tools:["JavaScript","D3","Plotly","CSS"]},{route:"/project6/project6",title:"Machine Learning for World Happiness Drivers",shortTitle:"Happiness Modeling",category:"Analytics & AI",image:"/assets/project6/project6.PNG",summary:"A Python machine-learning workflow that cleans World Happiness data, prepares training and test sets, and models relationships between reported well-being and explanatory factors.",outcome:"The analysis estimates which measured factors are associated with changes in happiness scores and demonstrates a complete supervised-learning workflow.",whyItMatters:"Predictive models are most valuable when their drivers, assumptions, and limitations are understandable. This project connects model construction to interpretable evidence.",capabilities:["Data preparation and feature selection","Train-test model development","Driver and relationship analysis"],tools:["Python","Pandas","Scikit-learn","Regression"]},{route:"/project8/project8",title:"Interactive Geospatial Data Platform",shortTitle:"Geospatial Platform",category:"Interactive visualization",image:"/assets/project8/project8.PNG",summary:"A full geospatial workflow that prepares data with Python and presents layered, interactive maps using JavaScript, D3, GeoJSON, and Leaflet.",outcome:"Users can explore locations, attributes, layers, legends, and pop-up detail through a responsive web map rather than a static image.",whyItMatters:"Location often explains operational patterns that tables conceal. Layered maps support resource placement, risk analysis, service coverage, and regional comparison.",capabilities:["Geospatial data preparation","Layered interactive mapping","Legends, pop-ups, and spatial context"],tools:["Python","JavaScript","D3","Leaflet","GeoJSON"]}],Fb=Object.fromEntries(qn.map(d=>[d.route,d])),sh=[...new Set(qn.map(d=>d.category))];function Lb({onNavigate:d}){const[m,w]=te.useState("All projects"),c=m==="All projects"?qn:qn.filter(x=>x.category===m);return s.jsxs("div",{className:"native-shell portfolio-experience",children:[s.jsxs("section",{className:"portfolio-opening",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Applied analytics portfolio"}),s.jsx("h2",{children:"Projects built to turn complex data into decisions."}),s.jsx("p",{children:"Explore practical work across federal budgeting, automation, business intelligence, machine learning, and interactive visualization. Each project demonstrates not only a tool, but a repeatable problem-solving capability."})]}),s.jsxs("div",{className:"portfolio-stat-grid",children:[s.jsxs("span",{children:[s.jsx("strong",{children:qn.length}),s.jsx("small",{children:"Projects"})]}),s.jsxs("span",{children:[s.jsx("strong",{children:sh.length}),s.jsx("small",{children:"Capability domains"})]}),s.jsxs("span",{children:[s.jsx("strong",{children:"5"}),s.jsx("small",{children:"Interactive dashboards"})]})]})]}),s.jsxs("section",{className:"portfolio-capability-strip","aria-label":"Portfolio capabilities",children:[s.jsxs("article",{children:[s.jsx(uh,{}),s.jsx("strong",{children:"Frame the decision"}),s.jsx("p",{children:"Start with the operational question, not the chart type."})]}),s.jsxs("article",{children:[s.jsx(Pg,{}),s.jsx("strong",{children:"Build the pipeline"}),s.jsx("p",{children:"Prepare, reconcile, model, and organize evidence."})]}),s.jsxs("article",{children:[s.jsx(gg,{}),s.jsx("strong",{children:"Communicate the signal"}),s.jsx("p",{children:"Make patterns, tradeoffs, and exceptions visible."})]})]}),s.jsxs("section",{className:"portfolio-library",children:[s.jsxs("div",{className:"portfolio-library-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Project library"}),s.jsx("h2",{children:"Capabilities in practice"})]}),s.jsxs("div",{className:"portfolio-filters","aria-label":"Filter projects by capability",children:[s.jsx("button",{className:m==="All projects"?"active":"",onClick:()=>w("All projects"),children:"All projects"}),sh.map(x=>s.jsx("button",{className:m===x?"active":"",onClick:()=>w(x),children:x},x))]})]}),s.jsx("div",{className:"portfolio-project-grid",children:c.map((x,B)=>s.jsxs("article",{className:B===0&&m==="All projects"?"portfolio-project-card featured":"portfolio-project-card",children:[s.jsx("button",{className:"portfolio-card-visual",onClick:()=>d(x.route),"aria-label":`Open ${x.title}`,children:s.jsx("img",{src:x.image,alt:`${x.title} project preview`,loading:"lazy"})}),s.jsxs("div",{className:"portfolio-card-copy",children:[s.jsxs("div",{className:"portfolio-card-meta",children:[s.jsx("span",{children:x.category}),s.jsx("small",{children:String(qn.indexOf(x)+1).padStart(2,"0")})]}),s.jsx("h3",{children:x.title}),s.jsx("p",{children:x.summary}),s.jsx("div",{className:"portfolio-card-capabilities",children:x.capabilities.map(k=>s.jsxs("span",{children:[s.jsx(Xa,{}),k]},k))}),s.jsxs("div",{className:"portfolio-card-impact",children:[s.jsx("small",{children:"Why it matters"}),s.jsx("p",{children:x.whyItMatters})]}),s.jsxs("div",{className:"portfolio-card-footer",children:[s.jsx("div",{children:x.tools.map(k=>s.jsx("span",{children:k},k))}),s.jsxs("button",{onClick:()=>d(x.route),children:["Explore project ",s.jsx(qe,{})]})]})]})]},x.route))})]})]})}function ih({project:d,onNavigate:m}){return s.jsxs("div",{className:"native-shell portfolio-project-brief",children:[s.jsxs("button",{className:"portfolio-back",onClick:()=>m("/portfolio-1-col"),children:[s.jsx(rg,{})," Portfolio overview"]}),s.jsxs("section",{className:"portfolio-brief-hero",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"portfolio-brief-meta",children:[s.jsx("span",{children:d.category}),s.jsx("small",{children:d.tools.join(" · ")})]}),s.jsx("h2",{children:d.title}),s.jsx("p",{children:d.summary})]}),s.jsxs("div",{className:"portfolio-brief-outcome",children:[s.jsx(tb,{}),s.jsx("small",{children:"Demonstrated outcome"}),s.jsx("p",{children:d.outcome})]})]}),s.jsxs("section",{className:"portfolio-brief-grid",children:[s.jsxs("article",{children:[s.jsx("p",{className:"section-kicker",children:"Capabilities demonstrated"}),d.capabilities.map(w=>s.jsxs("span",{children:[s.jsx(Xa,{}),w]},w))]}),s.jsxs("article",{children:[s.jsx("p",{className:"section-kicker",children:"Why this work matters"}),s.jsx("p",{children:d.whyItMatters})]})]})]})}function io(d){const c=decodeURIComponent(d.split(/[?#]/)[0]||"/").replace(/\.html?$/i,"").replace(/\/{2,}/g,"/").replace(/\/$/,"")||"/";return c.toLowerCase()==="/index"?"/":c}const Jb=[{label:"Budget Process",route:"/process",children:[["Overview","/process"],["Formulation","/formulation"],["Enactment","/enactment"],["Execution","/execution"]]},{label:"Legislative Framework",route:"/policy"},{label:"Portfolio",route:"/portfolio-1-col"},{label:"Knowledge",route:"/knowledge",children:[["Publications","/knowledge"],["A-11 · Section 20","/knowledge/a-11/section-20"],["DoD FMR Glossary","/knowledge/dod-fmr/glossary"],["Build & Publish","/build-and-publish"]]},{label:"About",route:"/about"}],Ib="Budget Matter is a knowledge-sharing website developed and maintained by Peter S., a federal budget professional with experience in budgeting, predictive analysis, program management, accounting, and computer programming.";function be(d){window.history.pushState({},"",d),window.dispatchEvent(new PopStateEvent("popstate")),window.scrollTo({top:0,behavior:"smooth"})}function Vb({onSearch:d,theme:m,onThemeChange:w}){const[c,x]=te.useState(!1),[B,k]=te.useState(null),D=te.useRef(null),_=()=>{x(!1),k(null)};te.useEffect(()=>{const N=_e=>{_e.key==="Escape"&&_()},R=_e=>{D.current&&!D.current.contains(_e.target)&&_()},V=()=>_();return window.addEventListener("keydown",N),window.addEventListener("pointerdown",R),window.addEventListener("popstate",V),()=>{window.removeEventListener("keydown",N),window.removeEventListener("pointerdown",R),window.removeEventListener("popstate",V)}},[]);const M=(N,R)=>{N.currentTarget.contains(N.relatedTarget)||k(V=>V===R?null:V)};return s.jsx("header",{className:"site-header",ref:D,children:s.jsxs("div",{className:"nav-shell",children:[s.jsxs("a",{className:"brand",href:"/",onClick:N=>{N.preventDefault(),_(),be("/")},children:[s.jsx("span",{className:"brand-mark",children:s.jsx(Za,{size:22})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Budget Matter"}),s.jsx("small",{children:"How the federal budget works"})]})]}),s.jsxs("nav",{className:c?"main-nav is-open":"main-nav","aria-label":"Primary navigation",children:[Jb.map(N=>s.jsxs("div",{className:`nav-group${B===N.route?" is-menu-open":""}`,onMouseEnter:()=>N.children&&k(N.route),onMouseLeave:()=>N.children&&k(null),onBlur:R=>M(R,N.route),children:[s.jsxs("a",{href:N.route,"aria-haspopup":N.children?"menu":void 0,"aria-expanded":N.children?c||B===N.route:void 0,onFocus:()=>N.children&&k(N.route),onClick:R=>{R.preventDefault(),_(),be(N.route)},children:[N.label,N.children&&s.jsx(vg,{size:14})]}),N.children&&s.jsx("div",{className:"nav-menu",role:"menu","aria-hidden":!c&&B!==N.route,children:N.children.map(([R,V])=>s.jsx("a",{role:"menuitem",href:V,onClick:_e=>{_e.preventDefault(),_(),be(V)},children:R},V))})]},N.route)),s.jsxs("button",{className:"search-button mobile-search",onClick:()=>{_(),d()},children:[s.jsx(Qa,{size:18})," Search"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsx("button",{className:"theme-button",onClick:w,"aria-label":`Switch to ${m==="dark"?"light":"dark"} mode`,"aria-pressed":m==="light",title:`Use ${m==="dark"?"light":"dark"} mode`,children:m==="dark"?s.jsx(nb,{size:19}):s.jsx(Zg,{size:19})}),s.jsx("button",{className:"search-button",onClick:()=>{_(),d()},"aria-label":"Search Budget Matter",children:s.jsx(Qa,{size:19})}),s.jsx("button",{className:"menu-button",onClick:()=>{k(null),x(!c)},"aria-label":"Toggle navigation","aria-expanded":c,children:c?s.jsx(ph,{}):s.jsx(Ig,{})})]})]})})}function Zb({close:d}){const[m,w]=te.useState(""),c=te.useMemo(()=>m.trim().length<2?[]:hh.filter(x=>`${x.title} ${x.description}`.toLowerCase().includes(m.toLowerCase())).slice(0,8),[m]);return te.useEffect(()=>{const x=B=>B.key==="Escape"&&d();return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[d]),s.jsx("div",{className:"search-overlay",role:"dialog","aria-modal":"true","aria-label":"Search site",onMouseDown:x=>x.target===x.currentTarget&&d(),children:s.jsxs("div",{className:"search-panel",children:[s.jsxs("div",{className:"search-field",children:[s.jsx(Qa,{}),s.jsx("input",{autoFocus:!0,value:m,onChange:x=>w(x.target.value),placeholder:"Search the budget process, laws, or projects…"}),s.jsx("button",{onClick:d,"aria-label":"Close search",children:s.jsx(ph,{})})]}),s.jsx("div",{className:"search-results",children:m.length<2?s.jsx("p",{children:"Try “appropriation”, “OMB”, or “spend plan”."}):c.length?c.map(x=>s.jsxs("button",{onClick:()=>{be(x.route),d()},children:[s.jsxs("span",{children:[s.jsx("strong",{children:x.title}),s.jsx("small",{children:x.description||x.legacyPath})]}),s.jsx(qe,{})]},x.route)):s.jsx("p",{children:"No matching pages found."})})]})})}function oh({route:d}){const m=[["01","Formulation","/formulation"],["02","Enactment","/enactment"],["03","Execution","/execution"]],w=d.startsWith("/f")||d==="/formulation"?0:d.startsWith("/e")||d==="/enactment"?1:d.startsWith("/b")||d==="/execution"?2:-1;return w<0?null:s.jsx("div",{className:"phase-trail","aria-label":"Budget phases",children:m.map(([c,x,B],k)=>s.jsxs("a",{className:k===w?"active":"",href:B,onClick:D=>{D.preventDefault(),be(B)},children:[s.jsx("span",{children:c}),x]},B))})}function Ta({title:d,route:m,description:w}){const c=m==="/";return s.jsxs("section",{className:c?"page-hero home-hero":"page-hero",children:[s.jsx("div",{className:"hero-grid","aria-hidden":"true"}),s.jsx("div",{className:"hero-orb","aria-hidden":"true"}),s.jsxs("div",{className:"hero-content",children:[s.jsx("p",{className:"eyebrow",children:c?"Federal budget intelligence":m.includes("project")||m.includes("portfolio")?"Applied analysis":"Budget Matter learning path"}),s.jsx("h1",{children:c?"Follow every dollar—from policy idea to public impact.":d}),s.jsx("p",{children:c?"A visual, step-by-step guide to the decisions, laws, institutions, and tools behind the United States federal budget.":w||"Explore the people, decisions, and controls behind this stage of the federal budget."}),c&&s.jsxs("div",{className:"hero-actions",children:[s.jsxs("a",{href:"/process",onClick:x=>{x.preventDefault(),be("/process")},children:["Explore the process ",s.jsx(qe,{size:18})]}),s.jsx("a",{className:"secondary",href:"/policy",onClick:x=>{x.preventDefault(),be("/policy")},children:"Browse budget laws"})]})]}),c&&s.jsxs("div",{className:"hero-stat",children:[s.jsx("span",{children:"End-to-end guide"}),s.jsx("strong",{children:"22"}),s.jsx("small",{children:"connected budget steps"})]})]})}function vh({route:d,className:m,children:w}){return s.jsx("a",{className:m,href:d,onClick:c=>{c.preventDefault(),be(d)},children:w})}function Qb(){return te.useEffect(()=>{document.title="Knowledge and Publications | Budget Matter"},[]),s.jsxs("main",{children:[s.jsx(Ta,{title:"Knowledge and Publications",route:"/knowledge",description:"A growing library of practical guides, references, models, and engineering notes for people who work with public finance."}),s.jsxs("div",{className:"native-shell knowledge-page",children:[s.jsxs("section",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Publishing library"}),s.jsx("h2",{children:"Latest publications"})]}),s.jsx("p",{children:"Each release is useful on its own and connected to the wider Budget Matter learning path."})]}),s.jsx("div",{className:"publication-grid",children:bb.map(d=>s.jsxs("article",{className:d.featured?"publication-card featured":"publication-card",children:[s.jsxs("div",{className:"publication-meta",children:[s.jsx("span",{children:d.category}),s.jsxs("small",{children:[d.readingTime," read"]})]}),s.jsx(ao,{"aria-hidden":"true"}),s.jsx("h3",{children:d.title}),s.jsx("p",{children:d.summary}),s.jsxs(vh,{route:d.route,children:[d.title,s.jsx(qe,{size:17})]})]},d.route))}),s.jsxs("section",{className:"publishing-workflow",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Editorial standard"}),s.jsx("h2",{children:"How new work gets published"}),s.jsx("p",{children:"Future publications are added through one structured content record, then reviewed through the same quality gates as the application."})]}),s.jsx("ol",{children:["Draft with a clear audience and outcome","Review facts, sources, accessibility, and links","Validate tests, responsive layout, and production build","Publish, monitor, and keep the content current"].map((d,m)=>s.jsxs("li",{children:[s.jsx("span",{children:String(m+1).padStart(2,"0")}),d]},d))})]})]})]})}const Xb=[{title:"Prepare the workstation",body:"Install a current Node.js LTS release and the Google Cloud CLI. Sign in, select the intended project, and confirm that billing is enabled.",command:"gcloud config set project YOUR_PROJECT_ID"},{title:"Install and validate locally",body:"Use the lockfile for repeatable dependencies. Run linting, coverage, and the optimized production build before any cloud change.",command:`npm ci
npm run lint
npm run test:coverage
npm run build`},{title:"Enable the cloud services",body:"Cloud Run serves the app, Cloud Build creates the container, and Artifact Registry stores the immutable image.",command:"gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com"},{title:"Deploy the production container",body:"Deploy from the repository root. The server listens on the Cloud Run PORT and serves the application for every route.",command:"gcloud run deploy budget-matter --source . --region us-east1 --allow-unauthenticated --port 8080 --memory 512Mi --max-instances 3"},{title:"Create or import the AI Studio app",body:"Open Google AI Studio Build, connect the same Google Cloud project, and verify the preview. Keep Gemini calls on the server if the app later uses an API key.",command:"Build → Import project or create app → Preview"},{title:"Publish the custom address",body:"Choose Publish in AI Studio, select a custom subdomain, and claim budgetmatter when it is available. AI Studio provisions and routes the published application.",command:"Publish → Custom URL → budgetmatter.ai.studio"},{title:"Verify the live release",body:"Test the root, deep links, theme control, navigation, mobile layout, and health endpoint. Confirm the custom URL serves the intended revision.",command:`https://budgetmatter.ai.studio/
https://budgetmatter.ai.studio/health`},{title:"Operate and roll back safely",body:"Keep secrets out of source control, review logs and error rates, cap scaling costs, and retain the prior revision so traffic can be restored quickly.",command:"gcloud run revisions list --service budget-matter --region us-west2"}];function Kb(){te.useEffect(()=>{document.title="Website Transformation and AI Studio Publishing | Budget Matter"},[]);const d=[{icon:ao,title:"Legacy source",detail:"Static HTML, CSS, JavaScript, images"},{icon:fb,title:"Content migration",detail:"Clean routes and reusable page content"},{icon:Kp,title:"Modern application",detail:"React, TypeScript, Vite, Tailwind CSS"},{icon:Xp,title:"Quality gates",detail:"Lint, tests, coverage, production build"},{icon:jg,title:"Cloud runtime",detail:"Buildpacks, Artifact Registry, Cloud Run"},{icon:Xg,title:"Published experience",detail:"budgetmatter.ai.studio"}];return s.jsxs("main",{children:[s.jsx(Ta,{title:"From Legacy Website to Production App",route:"/build-and-publish",description:"A visual, repeatable blueprint for transforming Budget Matter into a modern application and publishing it through Google AI Studio."}),s.jsxs("div",{className:"native-shell build-page",children:[s.jsxs("section",{className:"architecture-section",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"System blueprint"}),s.jsx("h2",{children:"Transformation architecture"})]}),s.jsx("p",{children:"The experience stays recognizable while the delivery system becomes maintainable, testable, responsive, and cloud ready."})]}),s.jsx("div",{className:"architecture-flow","aria-label":"Website transformation flow",children:d.map(({icon:m,title:w,detail:c},x)=>s.jsxs("div",{className:"architecture-node",children:[s.jsx("span",{children:s.jsx(m,{})}),s.jsxs("small",{children:["Stage ",x+1]}),s.jsx("h3",{children:w}),s.jsx("p",{children:c})]},w))})]}),s.jsxs("section",{className:"transformation-detail",children:[s.jsx("div",{className:"section-heading",children:s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"What changed"}),s.jsx("h2",{children:"Modernized without losing the original"})]})}),s.jsxs("div",{className:"change-grid",children:[s.jsxs("article",{children:[s.jsx(Kp,{}),s.jsx("h3",{children:"Application layer"}),s.jsx("p",{children:"Fifty legacy pages are normalized into clean client-side routes and rendered inside one accessible React shell."})]}),s.jsxs("article",{children:[s.jsx(Xp,{}),s.jsx("h3",{children:"Design system"}),s.jsx("p",{children:"Shared tokens, responsive grids, dark-first theming, and reusable components replace page-specific formatting."})]}),s.jsxs("article",{children:[s.jsx(zs,{}),s.jsx("h3",{children:"Production controls"}),s.jsx("p",{children:"Automated tests protect routing and layout; the build is versioned as an immutable container with no browser-exposed secrets."})]})]})]}),s.jsxs("section",{className:"deployment-section",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Release runbook"}),s.jsx("h2",{children:"Publish to Google AI Studio"})]}),s.jsx("p",{children:"Complete these eight gates in order. Commands are PowerShell friendly and match this repository’s production configuration."})]}),s.jsx("ol",{className:"deployment-timeline",children:Xb.map((m,w)=>s.jsxs("li",{"data-testid":"deployment-step",children:[s.jsx("span",{className:"step-number",children:String(w+1).padStart(2,"0")}),s.jsxs("div",{children:[s.jsx("h3",{children:m.title}),s.jsx("p",{children:m.body}),s.jsxs("pre",{children:[s.jsx(ob,{"aria-hidden":"true"}),s.jsx("code",{children:m.command})]})]})]},m.title))})]}),s.jsxs("section",{className:"production-checklist",children:[s.jsxs("div",{children:[s.jsx("p",{className:"section-kicker",children:"Ready for real traffic"}),s.jsx("h2",{children:"Production release checklist"}),s.jsx("p",{children:"Publishing is the start of operations, not the end of development."})]}),s.jsx("ul",{children:["No secrets or API keys in browser code","Deep-link fallback and /health endpoint verified","Keyboard navigation, contrast, and mobile layout checked","Logs, scaling limits, ownership, and rollback documented"].map(m=>s.jsxs("li",{children:[s.jsx(Xa,{}),m]},m))})]}),s.jsxs("aside",{className:"source-note",children:[s.jsxs("div",{children:[s.jsx("h2",{children:"Official references"}),s.jsx("p",{children:"Use Google’s current documentation as the source of truth when the product interface changes."})]}),s.jsxs("div",{children:[s.jsxs("a",{href:"https://ai.google.dev/gemini-api/docs/aistudio-build-mode",target:"_blank",rel:"noreferrer",children:["AI Studio Build mode ",s.jsx(et,{})]}),s.jsxs("a",{href:"https://ai.google.dev/gemini-api/docs/aistudio-deploying",target:"_blank",rel:"noreferrer",children:["Deploy an AI Studio app ",s.jsx(et,{})]})]})]}),s.jsxs(vh,{route:"/knowledge",className:"back-link",children:["Open the Knowledge hub ",s.jsx(qe,{})]})]})]})}function Wb({route:d}){const m=hh.find(B=>io(B.route)===d),w=vb[d],c=Fb[d];if(te.useEffect(()=>{d!=="/knowledge"&&d!=="/build-and-publish"&&d!=="/knowledge/federal-budget-laws"&&d!=="/knowledge/a-11/section-20"&&d!=="/knowledge/dod-fmr/glossary"&&d!=="/policy"&&(document.title=`${m?.title||"Page not found"} | Budget Matter`);const B=document.querySelector(".legacy-content");B&&Ol(d)&&B.querySelectorAll("img").forEach((D,_)=>{D.classList.add("process-visual"),D.setAttribute("loading","lazy"),D.setAttribute("decoding","async");const N=D.closest("a")||(D.parentElement?.textContent?.trim()===""?D.parentElement:null);N?.classList.add("process-visual-link");const R=N?.previousElementSibling,V=R?.textContent?.replace(/\s+/g," ").trim();V&&/^(?:chart|figure|exhibit|diagram|map)\b/i.test(V)?(R?.classList.add("process-visual-caption"),(!D.alt||D.alt==="Budget Matter visual")&&(D.alt=V)):(!D.alt||D.alt==="Budget Matter visual")&&(D.alt=`${m?.title||"Federal budget process"} visual ${_+1}`)}),B&&c&&B.querySelectorAll("img").forEach((D,_)=>{D.classList.add("portfolio-detail-visual"),D.setAttribute("loading","lazy"),D.setAttribute("decoding","async"),(!D.alt||D.alt==="Budget Matter visual")&&(D.alt=`${c.title} visual ${_+1}`)});const k=D=>{const _=D.target.closest("a");!_||_.target==="_blank"||_.origin!==window.location.origin||_.pathname.startsWith("/assets/")||(D.preventDefault(),be(io(_.pathname)))};return B?.addEventListener("click",k),()=>B?.removeEventListener("click",k)},[m,c,d]),d==="/knowledge")return s.jsx(Qb,{});if(d==="/build-and-publish")return s.jsx(Kb,{});if(d==="/knowledge/federal-budget-laws")return s.jsx(Sb,{onNavigate:be});if(d==="/knowledge/a-11/section-20")return s.jsx(Ob,{onNavigate:be});if(d==="/knowledge/dod-fmr/glossary")return s.jsx(Rb,{onNavigate:be});if(d==="/policy")return s.jsx(Mb,{onNavigate:be});if(d==="/portfolio-1-col")return s.jsxs("main",{children:[s.jsx(Ta,{title:"Project Portfolio",route:d,description:"Practical analytics, automation, budgeting, and visualization projects designed to turn complex information into useful decisions."}),s.jsx(Lb,{onNavigate:be})]});if(!m)return s.jsxs("main",{children:[s.jsx(Ta,{title:"Page not found",route:d,description:"The page you requested is not part of this guide."}),s.jsxs("div",{className:"not-found",children:[s.jsx(Nl,{}),s.jsx("h2",{children:"Let’s get you back on track."}),s.jsx("button",{onClick:()=>be("/"),children:"Return home"})]})]});const x=d==="/about"?"content-shell legacy-content about-page":`content-shell legacy-content${Ol(d)?" process-content":""}`;if(w){const k=/<div class="tableauPlaceholder"[^>]*>[\s\S]*?<\/object><\/div>/i.exec(m.html),D=k?m.html.slice(0,k.index):m.html,_=k?m.html.slice(k.index+k[0].length):"";return s.jsxs("main",{children:[s.jsx(Ta,{title:c?.title||m.title,route:d,description:c?.summary||m.description}),c&&s.jsx(ih,{project:c,onNavigate:be}),s.jsxs("article",{className:`${x} tableau-page portfolio-detail-content`,children:[s.jsx("div",{className:"legacy-fragment",dangerouslySetInnerHTML:{__html:D}}),s.jsx(xb,{project:w}),s.jsx("div",{className:"legacy-fragment",dangerouslySetInnerHTML:{__html:_}})]})]})}return Ol(d)?s.jsxs("main",{children:[s.jsx(Ta,{title:m.title,route:d,description:m.description}),s.jsx(oh,{route:d}),s.jsx(Pb,{route:d,onNavigate:be}),s.jsxs("article",{className:x,children:[s.jsx(Yb,{route:d}),s.jsx("div",{className:"process-source-material",dangerouslySetInnerHTML:{__html:m.html}})]})]}):c?s.jsxs("main",{children:[s.jsx(Ta,{title:c.title,route:d,description:c.summary}),s.jsx(ih,{project:c,onNavigate:be}),s.jsx("article",{className:`${x} portfolio-detail-content`,dangerouslySetInnerHTML:{__html:m.html}})]}):s.jsxs("main",{children:[s.jsx(Ta,{title:m.title,route:d,description:d==="/about"?Ib:m.description}),s.jsx(oh,{route:d}),s.jsx("article",{className:x,dangerouslySetInnerHTML:{__html:m.html}})]})}function $b(){return s.jsxs("footer",{className:"site-footer",children:[s.jsxs("div",{children:[s.jsxs("a",{className:"brand footer-brand",href:"/",onClick:d=>{d.preventDefault(),be("/")},children:[s.jsx("span",{className:"brand-mark",children:s.jsx(Za,{size:20})}),s.jsxs("span",{children:[s.jsx("strong",{children:"Budget Matter"}),s.jsx("small",{children:"Clear context for complex public finance"})]})]}),s.jsx("p",{children:"Educational content about the United States federal budget process."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"/process",onClick:d=>{d.preventDefault(),be("/process")},children:"Process"}),s.jsx("a",{href:"/policy",onClick:d=>{d.preventDefault(),be("/policy")},children:"Legislative Framework"}),s.jsx("a",{href:"/portfolio-1-col",onClick:d=>{d.preventDefault(),be("/portfolio-1-col")},children:"Portfolio"}),s.jsx("a",{href:"/knowledge",onClick:d=>{d.preventDefault(),be("/knowledge")},children:"Knowledge hub"}),s.jsxs("a",{href:"https://github.com/budgetmatter/budgetmatter.github.io",target:"_blank",rel:"noreferrer",children:[s.jsx(Gg,{size:18})," GitHub"]})]})]})}function ev(){const[d,m]=te.useState(()=>io(window.location.pathname)),[w,c]=te.useState(!1),[x,B]=te.useState(()=>window.localStorage.getItem("budget-matter-theme")==="light"?"light":"dark");return te.useEffect(()=>{const k=()=>m(io(window.location.pathname));return window.addEventListener("popstate",k),()=>window.removeEventListener("popstate",k)},[]),te.useEffect(()=>{document.documentElement.dataset.theme=x,document.documentElement.style.colorScheme=x,window.localStorage.setItem("budget-matter-theme",x)},[x]),s.jsxs(s.Fragment,{children:[s.jsx(Vb,{onSearch:()=>c(!0),theme:x,onThemeChange:()=>B(k=>k==="dark"?"light":"dark")}),s.jsx(Wb,{route:d}),s.jsx($b,{}),w&&s.jsx(Zb,{close:()=>c(!1)})]})}Wf.createRoot(document.getElementById("root")).render(s.jsx(te.StrictMode,{children:s.jsx(ev,{})}));
