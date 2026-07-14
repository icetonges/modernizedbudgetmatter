(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))d(C);new MutationObserver(C=>{for(const B of C)if(B.type==="childList")for(const T of B.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&d(T)}).observe(document,{childList:!0,subtree:!0});function M(C){const B={};return C.integrity&&(B.integrity=C.integrity),C.referrerPolicy&&(B.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?B.credentials="include":C.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function d(C){if(C.ep)return;C.ep=!0;const B=M(C);fetch(C.href,B)}})();var gr={exports:{}},Cs={};var Tp;function Mf(){if(Tp)return Cs;Tp=1;var m=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function M(d,C,B){var T=null;if(B!==void 0&&(T=""+B),C.key!==void 0&&(T=""+C.key),"key"in C){B={};for(var G in C)G!=="key"&&(B[G]=C[G])}else B=C;return C=B.ref,{$$typeof:m,type:d,key:T,ref:C!==void 0?C:null,props:B}}return Cs.Fragment=v,Cs.jsx=M,Cs.jsxs=M,Cs}var Bp;function Tf(){return Bp||(Bp=1,gr.exports=Mf()),gr.exports}var l=Tf(),br={exports:{}},Y={};var Op;function Bf(){if(Op)return Y;Op=1;var m=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),T=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),fe=Symbol.iterator;function Ke(p){return p===null||typeof p!="object"?null:(p=fe&&p[fe]||p["@@iterator"],typeof p=="function"?p:null)}var Ue={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,Et={};function We(p,j,k){this.props=p,this.context=j,this.refs=Et,this.updater=k||Ue}We.prototype.isReactComponent={},We.prototype.setState=function(p,j){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,j,"setState")},We.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function ea(){}ea.prototype=We.prototype;function Ne(p,j,k){this.props=p,this.context=j,this.refs=Et,this.updater=k||Ue}var ct=Ne.prototype=new ea;ct.constructor=Ne,He(ct,We.prototype),ct.isPureReactComponent=!0;var Mt=Array.isArray;function Ye(){}var I={H:null,A:null,T:null,S:null},Pe=Object.prototype.hasOwnProperty;function Tt(p,j,k){var E=k.ref;return{$$typeof:m,type:p,key:j,ref:E!==void 0?E:null,props:k}}function Va(p,j){return Tt(p.type,j,p.props)}function Bt(p){return typeof p=="object"&&p!==null&&p.$$typeof===m}function Je(p){var j={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(k){return j[k]})}var Ca=/\/+/g;function Nt(p,j){return typeof p=="object"&&p!==null&&p.key!=null?Je(""+p.key):j.toString(36)}function xt(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Ye,Ye):(p.status="pending",p.then(function(j){p.status==="pending"&&(p.status="fulfilled",p.value=j)},function(j){p.status==="pending"&&(p.status="rejected",p.reason=j)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function w(p,j,k,E,P){var F=typeof p;(F==="undefined"||F==="boolean")&&(p=null);var ae=!1;if(p===null)ae=!0;else switch(F){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(p.$$typeof){case m:case v:ae=!0;break;case W:return ae=p._init,w(ae(p._payload),j,k,E,P)}}if(ae)return P=P(p),ae=E===""?"."+Nt(p,0):E,Mt(P)?(k="",ae!=null&&(k=ae.replace(Ca,"$&/")+"/"),w(P,j,k,"",function(zn){return zn})):P!=null&&(Bt(P)&&(P=Va(P,k+(P.key==null||p&&p.key===P.key?"":(""+P.key).replace(Ca,"$&/")+"/")+ae)),j.push(P)),1;ae=0;var Ge=E===""?".":E+":";if(Mt(p))for(var ye=0;ye<p.length;ye++)E=p[ye],F=Ge+Nt(E,ye),ae+=w(E,j,k,F,P);else if(ye=Ke(p),typeof ye=="function")for(p=ye.call(p),ye=0;!(E=p.next()).done;)E=E.value,F=Ge+Nt(E,ye++),ae+=w(E,j,k,F,P);else if(F==="object"){if(typeof p.then=="function")return w(xt(p),j,k,E,P);throw j=String(p),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ae}function O(p,j,k){if(p==null)return p;var E=[],P=0;return w(p,E,"","",function(F){return j.call(k,F,P++)}),E}function U(p){if(p._status===-1){var j=p._result;j=j(),j.then(function(k){(p._status===0||p._status===-1)&&(p._status=1,p._result=k)},function(k){(p._status===0||p._status===-1)&&(p._status=2,p._result=k)}),p._status===-1&&(p._status=0,p._result=j)}if(p._status===1)return p._result.default;throw p._result}var le=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},de={map:O,forEach:function(p,j,k){O(p,function(){j.apply(this,arguments)},k)},count:function(p){var j=0;return O(p,function(){j++}),j},toArray:function(p){return O(p,function(j){return j})||[]},only:function(p){if(!Bt(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return Y.Activity=q,Y.Children=de,Y.Component=We,Y.Fragment=M,Y.Profiler=C,Y.PureComponent=Ne,Y.StrictMode=d,Y.Suspense=D,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,Y.__COMPILER_RUNTIME={__proto__:null,c:function(p){return I.H.useMemoCache(p)}},Y.cache=function(p){return function(){return p.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(p,j,k){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var E=He({},p.props),P=p.key;if(j!=null)for(F in j.key!==void 0&&(P=""+j.key),j)!Pe.call(j,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&j.ref===void 0||(E[F]=j[F]);var F=arguments.length-2;if(F===1)E.children=k;else if(1<F){for(var ae=Array(F),Ge=0;Ge<F;Ge++)ae[Ge]=arguments[Ge+2];E.children=ae}return Tt(p.type,P,E)},Y.createContext=function(p){return p={$$typeof:T,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:B,_context:p},p},Y.createElement=function(p,j,k){var E,P={},F=null;if(j!=null)for(E in j.key!==void 0&&(F=""+j.key),j)Pe.call(j,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(P[E]=j[E]);var ae=arguments.length-2;if(ae===1)P.children=k;else if(1<ae){for(var Ge=Array(ae),ye=0;ye<ae;ye++)Ge[ye]=arguments[ye+2];P.children=Ge}if(p&&p.defaultProps)for(E in ae=p.defaultProps,ae)P[E]===void 0&&(P[E]=ae[E]);return Tt(p,F,P)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(p){return{$$typeof:G,render:p}},Y.isValidElement=Bt,Y.lazy=function(p){return{$$typeof:W,_payload:{_status:-1,_result:p},_init:U}},Y.memo=function(p,j){return{$$typeof:_,type:p,compare:j===void 0?null:j}},Y.startTransition=function(p){var j=I.T,k={};I.T=k;try{var E=p(),P=I.S;P!==null&&P(k,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(Ye,le)}catch(F){le(F)}finally{j!==null&&k.types!==null&&(j.types=k.types),I.T=j}},Y.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},Y.use=function(p){return I.H.use(p)},Y.useActionState=function(p,j,k){return I.H.useActionState(p,j,k)},Y.useCallback=function(p,j){return I.H.useCallback(p,j)},Y.useContext=function(p){return I.H.useContext(p)},Y.useDebugValue=function(){},Y.useDeferredValue=function(p,j){return I.H.useDeferredValue(p,j)},Y.useEffect=function(p,j){return I.H.useEffect(p,j)},Y.useEffectEvent=function(p){return I.H.useEffectEvent(p)},Y.useId=function(){return I.H.useId()},Y.useImperativeHandle=function(p,j,k){return I.H.useImperativeHandle(p,j,k)},Y.useInsertionEffect=function(p,j){return I.H.useInsertionEffect(p,j)},Y.useLayoutEffect=function(p,j){return I.H.useLayoutEffect(p,j)},Y.useMemo=function(p,j){return I.H.useMemo(p,j)},Y.useOptimistic=function(p,j){return I.H.useOptimistic(p,j)},Y.useReducer=function(p,j,k){return I.H.useReducer(p,j,k)},Y.useRef=function(p){return I.H.useRef(p)},Y.useState=function(p){return I.H.useState(p)},Y.useSyncExternalStore=function(p,j,k){return I.H.useSyncExternalStore(p,j,k)},Y.useTransition=function(){return I.H.useTransition()},Y.version="19.2.7",Y}var kp;function _r(){return kp||(kp=1,br.exports=Bf()),br.exports}var pe=_r(),vr={exports:{}},Ms={},yr={exports:{}},xr={};var Dp;function Of(){return Dp||(Dp=1,(function(m){function v(w,O){var U=w.length;w.push(O);e:for(;0<U;){var le=U-1>>>1,de=w[le];if(0<C(de,O))w[le]=O,w[U]=de,U=le;else break e}}function M(w){return w.length===0?null:w[0]}function d(w){if(w.length===0)return null;var O=w[0],U=w.pop();if(U!==O){w[0]=U;e:for(var le=0,de=w.length,p=de>>>1;le<p;){var j=2*(le+1)-1,k=w[j],E=j+1,P=w[E];if(0>C(k,U))E<de&&0>C(P,k)?(w[le]=P,w[E]=U,le=E):(w[le]=k,w[j]=U,le=j);else if(E<de&&0>C(P,U))w[le]=P,w[E]=U,le=E;else break e}}return O}function C(w,O){var U=w.sortIndex-O.sortIndex;return U!==0?U:w.id-O.id}if(m.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var B=performance;m.unstable_now=function(){return B.now()}}else{var T=Date,G=T.now();m.unstable_now=function(){return T.now()-G}}var D=[],_=[],W=1,q=null,fe=3,Ke=!1,Ue=!1,He=!1,Et=!1,We=typeof setTimeout=="function"?setTimeout:null,ea=typeof clearTimeout=="function"?clearTimeout:null,Ne=typeof setImmediate<"u"?setImmediate:null;function ct(w){for(var O=M(_);O!==null;){if(O.callback===null)d(_);else if(O.startTime<=w)d(_),O.sortIndex=O.expirationTime,v(D,O);else break;O=M(_)}}function Mt(w){if(He=!1,ct(w),!Ue)if(M(D)!==null)Ue=!0,Ye||(Ye=!0,Je());else{var O=M(_);O!==null&&xt(Mt,O.startTime-w)}}var Ye=!1,I=-1,Pe=5,Tt=-1;function Va(){return Et?!0:!(m.unstable_now()-Tt<Pe)}function Bt(){if(Et=!1,Ye){var w=m.unstable_now();Tt=w;var O=!0;try{e:{Ue=!1,He&&(He=!1,ea(I),I=-1),Ke=!0;var U=fe;try{t:{for(ct(w),q=M(D);q!==null&&!(q.expirationTime>w&&Va());){var le=q.callback;if(typeof le=="function"){q.callback=null,fe=q.priorityLevel;var de=le(q.expirationTime<=w);if(w=m.unstable_now(),typeof de=="function"){q.callback=de,ct(w),O=!0;break t}q===M(D)&&d(D),ct(w)}else d(D);q=M(D)}if(q!==null)O=!0;else{var p=M(_);p!==null&&xt(Mt,p.startTime-w),O=!1}}break e}finally{q=null,fe=U,Ke=!1}O=void 0}}finally{O?Je():Ye=!1}}}var Je;if(typeof Ne=="function")Je=function(){Ne(Bt)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,Nt=Ca.port2;Ca.port1.onmessage=Bt,Je=function(){Nt.postMessage(null)}}else Je=function(){We(Bt,0)};function xt(w,O){I=We(function(){w(m.unstable_now())},O)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(w){w.callback=null},m.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pe=0<w?Math.floor(1e3/w):5},m.unstable_getCurrentPriorityLevel=function(){return fe},m.unstable_next=function(w){switch(fe){case 1:case 2:case 3:var O=3;break;default:O=fe}var U=fe;fe=O;try{return w()}finally{fe=U}},m.unstable_requestPaint=function(){Et=!0},m.unstable_runWithPriority=function(w,O){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var U=fe;fe=w;try{return O()}finally{fe=U}},m.unstable_scheduleCallback=function(w,O,U){var le=m.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?le+U:le):U=le,w){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=U+de,w={id:W++,callback:O,priorityLevel:w,startTime:U,expirationTime:de,sortIndex:-1},U>le?(w.sortIndex=U,v(_,w),M(D)===null&&w===M(_)&&(He?(ea(I),I=-1):He=!0,xt(Mt,U-le))):(w.sortIndex=de,v(D,w),Ue||Ke||(Ue=!0,Ye||(Ye=!0,Je()))),w},m.unstable_shouldYield=Va,m.unstable_wrapCallback=function(w){var O=fe;return function(){var U=fe;fe=O;try{return w.apply(this,arguments)}finally{fe=U}}}})(xr)),xr}var zp;function kf(){return zp||(zp=1,yr.exports=Of()),yr.exports}var wr={exports:{}},Re={};var Ep;function Df(){if(Ep)return Re;Ep=1;var m=_r();function v(D){var _="https://react.dev/errors/"+D;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)_+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+D+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var d={d:{f:M,r:function(){throw Error(v(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},C=Symbol.for("react.portal");function B(D,_,W){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:q==null?null:""+q,children:D,containerInfo:_,implementation:W}}var T=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(D,_){if(D==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Re.createPortal=function(D,_){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(v(299));return B(D,_,null,W)},Re.flushSync=function(D){var _=T.T,W=d.p;try{if(T.T=null,d.p=2,D)return D()}finally{T.T=_,d.p=W,d.d.f()}},Re.preconnect=function(D,_){typeof D=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,d.d.C(D,_))},Re.prefetchDNS=function(D){typeof D=="string"&&d.d.D(D)},Re.preinit=function(D,_){if(typeof D=="string"&&_&&typeof _.as=="string"){var W=_.as,q=G(W,_.crossOrigin),fe=typeof _.integrity=="string"?_.integrity:void 0,Ke=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;W==="style"?d.d.S(D,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:q,integrity:fe,fetchPriority:Ke}):W==="script"&&d.d.X(D,{crossOrigin:q,integrity:fe,fetchPriority:Ke,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Re.preinitModule=function(D,_){if(typeof D=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var W=G(_.as,_.crossOrigin);d.d.M(D,{crossOrigin:W,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&d.d.M(D)},Re.preload=function(D,_){if(typeof D=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var W=_.as,q=G(W,_.crossOrigin);d.d.L(D,W,{crossOrigin:q,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Re.preloadModule=function(D,_){if(typeof D=="string")if(_){var W=G(_.as,_.crossOrigin);d.d.m(D,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:W,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else d.d.m(D)},Re.requestFormReset=function(D){d.d.r(D)},Re.unstable_batchedUpdates=function(D,_){return D(_)},Re.useFormState=function(D,_,W){return T.H.useFormState(D,_,W)},Re.useFormStatus=function(){return T.H.useHostTransitionStatus()},Re.version="19.2.7",Re}var Np;function zf(){if(Np)return wr.exports;Np=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(v){console.error(v)}}return m(),wr.exports=Df(),wr.exports}var Rp;function Ef(){if(Rp)return Ms;Rp=1;var m=kf(),v=_r(),M=zf();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function B(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function T(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(B(e)!==e)throw Error(d(188))}function _(e){var t=e.alternate;if(!t){if(t=B(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var s=a.return;if(s===null)break;var i=s.alternate;if(i===null){if(n=s.return,n!==null){a=n;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===a)return D(s),e;if(i===n)return D(s),t;i=i.sibling}throw Error(d(188))}if(a.return!==n.return)a=s,n=i;else{for(var o=!1,r=s.child;r;){if(r===a){o=!0,a=s,n=i;break}if(r===n){o=!0,n=s,a=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===a){o=!0,a=i,n=s;break}if(r===n){o=!0,n=i,a=s;break}r=r.sibling}if(!o)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var q=Object.assign,fe=Symbol.for("react.element"),Ke=Symbol.for("react.transitional.element"),Ue=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),Et=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),ea=Symbol.for("react.consumer"),Ne=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Mt=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Va=Symbol.for("react.memo_cache_sentinel"),Bt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=Bt&&e[Bt]||e["@@iterator"],typeof e=="function"?e:null)}var Ca=Symbol.for("react.client.reference");function Nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ca?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case We:return"Profiler";case Et:return"StrictMode";case Mt:return"Suspense";case Ye:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ue:return"Portal";case Ne:return e.displayName||"Context";case ea:return(e._context.displayName||"Context")+".Consumer";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Nt(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return Nt(e(t))}catch{}}return null}var xt=Array.isArray,w=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},le=[],de=-1;function p(e){return{current:e}}function j(e){0>de||(e.current=le[de],le[de]=null,de--)}function k(e,t){de++,le[de]=e.current,e.current=t}var E=p(null),P=p(null),F=p(null),ae=p(null);function Ge(e,t){switch(k(F,t),k(P,e),k(E,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ku(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ku(t),e=Wu(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(E),k(E,e)}function ye(){j(E),j(P),j(F)}function zn(e){e.memoizedState!==null&&k(ae,e);var t=E.current,a=Wu(t,e.type);t!==a&&(k(P,e),k(E,a))}function Os(e){P.current===e&&(j(E),j(P)),ae.current===e&&(j(ae),As._currentValue=U)}var Ki,Mr;function Ma(e){if(Ki===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ki=t&&t[1]||"",Mr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ki+e+Mr}var Wi=!1;function $i(e,t){if(!e||Wi)return"";Wi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(y){var b=y}Reflect.construct(e,[],S)}else{try{S.call()}catch(y){b=y}e.call(S.prototype)}}else{try{throw Error()}catch(y){b=y}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(y){if(y&&b&&typeof y.stack=="string")return[y.stack,b.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var c=o.split(`
`),g=r.split(`
`);for(s=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;s<g.length&&!g[s].includes("DetermineComponentFrameRoot");)s++;if(n===c.length||s===g.length)for(n=c.length-1,s=g.length-1;1<=n&&0<=s&&c[n]!==g[s];)s--;for(;1<=n&&0<=s;n--,s--)if(c[n]!==g[s]){if(n!==1||s!==1)do if(n--,s--,0>s||c[n]!==g[s]){var x=`
`+c[n].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=n&&0<=s);break}}}finally{Wi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ma(a):""}function nh(e,t){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return e.child!==t&&t!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return $i(e.type,!1);case 11:return $i(e.type.render,!1);case 1:return $i(e.type,!0);case 31:return Ma("Activity");default:return""}}function Tr(e){try{var t="",a=null;do t+=nh(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var el=Object.prototype.hasOwnProperty,tl=m.unstable_scheduleCallback,al=m.unstable_cancelCallback,sh=m.unstable_shouldYield,ih=m.unstable_requestPaint,$e=m.unstable_now,lh=m.unstable_getCurrentPriorityLevel,Br=m.unstable_ImmediatePriority,Or=m.unstable_UserBlockingPriority,ks=m.unstable_NormalPriority,oh=m.unstable_LowPriority,kr=m.unstable_IdlePriority,rh=m.log,ch=m.unstable_setDisableYieldValue,En=null,et=null;function ta(e){if(typeof rh=="function"&&ch(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(En,e)}catch{}}var tt=Math.clz32?Math.clz32:ph,dh=Math.log,uh=Math.LN2;function ph(e){return e>>>=0,e===0?32:31-(dh(e)/uh|0)|0}var Ds=256,zs=262144,Es=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ns(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var s=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~i,n!==0?s=Ta(n):(o&=r,o!==0?s=Ta(o):a||(a=r&~e,a!==0&&(s=Ta(a))))):(r=n&~i,r!==0?s=Ta(r):o!==0?s=Ta(o):a||(a=n&~e,a!==0&&(s=Ta(a)))),s===0?0:t!==0&&t!==s&&(t&i)===0&&(i=s&-s,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:s}function Nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dr(){var e=Es;return Es<<=1,(Es&62914560)===0&&(Es=4194304),e}function nl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mh(e,t,a,n,s,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,c=e.expirationTimes,g=e.hiddenUpdates;for(a=o&~a;0<a;){var x=31-tt(a),S=1<<x;r[x]=0,c[x]=-1;var b=g[x];if(b!==null)for(g[x]=null,x=0;x<b.length;x++){var y=b[x];y!==null&&(y.lane&=-536870913)}a&=~S}n!==0&&zr(e,n,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function zr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-tt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Er(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-tt(a),s=1<<n;s&t|e[n]&t&&(e[n]|=t),a&=~s}}function Nr(e,t){var a=t&-t;return a=(a&42)!==0?1:sl(a),(a&(e.suspendedLanes|t))!==0?0:a}function sl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function il(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rr(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:wp(e.type))}function Hr(e,t){var a=O.p;try{return O.p=e,t()}finally{O.p=a}}var aa=Math.random().toString(36).slice(2),Oe="__reactFiber$"+aa,Le="__reactProps$"+aa,Qa="__reactContainer$"+aa,ll="__reactEvents$"+aa,fh="__reactListeners$"+aa,gh="__reactHandles$"+aa,Gr="__reactResources$"+aa,Hn="__reactMarker$"+aa;function ol(e){delete e[Oe],delete e[Le],delete e[ll],delete e[fh],delete e[gh]}function Xa(e){var t=e[Oe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[Oe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ip(e);e!==null;){if(a=e[Oe])return a;e=ip(e)}return t}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[Oe]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ka(e){var t=e[Gr];return t||(t=e[Gr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Me(e){e[Hn]=!0}var qr=new Set,Ur={};function Ba(e,t){Wa(e,t),Wa(e+"Capture",t)}function Wa(e,t){for(Ur[e]=t,e=0;e<t.length;e++)qr.add(t[e])}var bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yr={},Pr={};function vh(e){return el.call(Pr,e)?!0:el.call(Yr,e)?!1:bh.test(e)?Pr[e]=!0:(Yr[e]=!0,!1)}function Rs(e,t,a){if(vh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Hs(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Rt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yh(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rl(e){if(!e._valueTracker){var t=Jr(e)?"checked":"value";e._valueTracker=yh(e,t,""+e[t])}}function Lr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Jr(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xh=/[\n"\\]/g;function ut(e){return e.replace(xh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cl(e,t,a,n,s,i,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?dl(e,o,dt(t)):a!=null?dl(e,o,dt(a)):n!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+dt(r):e.removeAttribute("name")}function Fr(e,t,a,n,s,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){rl(e);return}a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}n=n??s,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),rl(e)}function dl(e,t,a){t==="number"&&Gs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,n){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&n&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Zr(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Vr(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(xt(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),rl(e)}function en(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var wh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qr(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||wh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Xr(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var s in t)n=t[s],t.hasOwnProperty(s)&&a[s]!==n&&Qr(e,s,n)}else for(var i in t)t.hasOwnProperty(i)&&Qr(e,i,t[i])}function ul(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qs(e){return Sh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var pl=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tn=null,an=null;function Ir(e){var t=Ia(e);if(t&&(e=t.stateNode)){var a=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(cl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var s=n[Le]||null;if(!s)throw Error(d(90));cl(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Lr(n)}break e;case"textarea":Zr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var ml=!1;function Kr(e,t,a){if(ml)return e(t,a);ml=!0;try{var n=e(t);return n}finally{if(ml=!1,(tn!==null||an!==null)&&(Ci(),tn&&(t=tn,e=an,an=tn=null,Ir(t),e)))for(t=0;t<e.length;t++)Ir(e[t])}}function qn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Le]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=!1;if(Gt)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){fl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{fl=!1}var na=null,gl=null,Us=null;function Wr(){if(Us)return Us;var e,t=gl,a=t.length,n,s="value"in na?na.value:na.textContent,i=s.length;for(e=0;e<a&&t[e]===s[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===s[i-n];n++);return Us=s.slice(e,1<n?1-n:void 0)}function Ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ps(){return!0}function $r(){return!1}function Fe(e){function t(a,n,s,i,o){this._reactName=a,this._targetInst=s,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ps:$r,this.isPropagationStopped=$r,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ps)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ps)},persist:function(){},isPersistent:Ps}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=Fe(Oa),Yn=q({},Oa,{view:0,detail:0}),jh=Fe(Yn),bl,vl,Pn,Ls=q({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(bl=e.screenX-Pn.screenX,vl=e.screenY-Pn.screenY):vl=bl=0,Pn=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:vl}}),ec=Fe(Ls),_h=q({},Ls,{dataTransfer:0}),Ch=Fe(_h),Mh=q({},Yn,{relatedTarget:0}),yl=Fe(Mh),Th=q({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=Fe(Th),Oh=q({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kh=Fe(Oh),Dh=q({},Oa,{data:0}),tc=Fe(Dh),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nh[e])?!!t[e]:!1}function xl(){return Rh}var Hh=q({},Yn,{key:function(e){if(e.key){var t=zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=Fe(Hh),qh=q({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=Fe(qh),Uh=q({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),Yh=Fe(Uh),Ph=q({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jh=Fe(Ph),Lh=q({},Ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fh=Fe(Lh),Zh=q({},Oa,{newState:0,oldState:0}),Vh=Fe(Zh),Qh=[9,13,27,32],wl=Gt&&"CompositionEvent"in window,Jn=null;Gt&&"documentMode"in document&&(Jn=document.documentMode);var Xh=Gt&&"TextEvent"in window&&!Jn,nc=Gt&&(!wl||Jn&&8<Jn&&11>=Jn),sc=" ",ic=!1;function lc(e,t){switch(e){case"keyup":return Qh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function Ih(e,t){switch(e){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(ic=!0,sc);case"textInput":return e=t.data,e===sc&&ic?null:e;default:return null}}function Kh(e,t){if(nn)return e==="compositionend"||!wl&&lc(e,t)?(e=Wr(),Us=gl=na=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nc&&t.locale!=="ko"?null:t.data;default:return null}}var Wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wh[e.type]:t==="textarea"}function cc(e,t,a,n){tn?an?an.push(n):an=[n]:tn=n,t=zi(t,"onChange"),0<t.length&&(a=new Js("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ln=null,Fn=null;function $h(e){Fu(e,0)}function Fs(e){var t=Gn(e);if(Lr(t))return e}function dc(e,t){if(e==="change")return t}var uc=!1;if(Gt){var Al;if(Gt){var Sl="oninput"in document;if(!Sl){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),Sl=typeof pc.oninput=="function"}Al=Sl}else Al=!1;uc=Al&&(!document.documentMode||9<document.documentMode)}function hc(){Ln&&(Ln.detachEvent("onpropertychange",mc),Fn=Ln=null)}function mc(e){if(e.propertyName==="value"&&Fs(Fn)){var t=[];cc(t,Fn,e,hl(e)),Kr($h,t)}}function em(e,t,a){e==="focusin"?(hc(),Ln=t,Fn=a,Ln.attachEvent("onpropertychange",mc)):e==="focusout"&&hc()}function tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fs(Fn)}function am(e,t){if(e==="click")return Fs(t)}function nm(e,t){if(e==="input"||e==="change")return Fs(t)}function sm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:sm;function Zn(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var s=a[n];if(!el.call(t,s)||!at(e[s],t[s]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gc(e,t){var a=fc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fc(a)}}function bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gs(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Gs(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var im=Gt&&"documentMode"in document&&11>=document.documentMode,sn=null,_l=null,Vn=null,Cl=!1;function yc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cl||sn==null||sn!==Gs(n)||(n=sn,"selectionStart"in n&&jl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Zn(Vn,n)||(Vn=n,n=zi(_l,"onSelect"),0<n.length&&(t=new Js("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=sn)))}function ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ln={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Ml={},xc={};Gt&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Da(e){if(Ml[e])return Ml[e];if(!ln[e])return e;var t=ln[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in xc)return Ml[e]=t[a];return e}var wc=Da("animationend"),Ac=Da("animationiteration"),Sc=Da("animationstart"),lm=Da("transitionrun"),om=Da("transitionstart"),rm=Da("transitioncancel"),jc=Da("transitionend"),_c=new Map,Tl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tl.push("scrollEnd");function wt(e,t){_c.set(e,t),Ba(t,[e])}var Zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pt=[],on=0,Bl=0;function Vs(){for(var e=on,t=Bl=on=0;t<e;){var a=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var s=pt[t];pt[t++]=null;var i=pt[t];if(pt[t++]=null,n!==null&&s!==null){var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}i!==0&&Cc(a,s,i)}}function Qs(e,t,a,n){pt[on++]=e,pt[on++]=t,pt[on++]=a,pt[on++]=n,Bl|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ol(e,t,a,n){return Qs(e,t,a,n),Xs(e)}function za(e,t){return Qs(e,null,null,t),Xs(e)}function Cc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var s=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&t!==null&&(s=31-tt(a),e=i.hiddenUpdates,n=e[s],n===null?e[s]=[t]:n.push(t),t.lane=a|536870912),i):null}function Xs(e){if(50<fs)throw fs=0,Uo=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rn={};function cm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,a,n){return new cm(e,t,a,n)}function kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,t){var a=e.alternate;return a===null?(a=nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Is(e,t,a,n,s,i){var o=0;if(n=e,typeof e=="function")kl(e)&&(o=1);else if(typeof e=="string")o=ff(e,a,E.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=nt(31,a,t,s),e.elementType=Tt,e.lanes=i,e;case He:return Ea(a.children,s,i,t);case Et:o=8,s|=24;break;case We:return e=nt(12,a,t,s|2),e.elementType=We,e.lanes=i,e;case Mt:return e=nt(13,a,t,s),e.elementType=Mt,e.lanes=i,e;case Ye:return e=nt(19,a,t,s),e.elementType=Ye,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ne:o=10;break e;case ea:o=9;break e;case ct:o=11;break e;case I:o=14;break e;case Pe:o=16,n=null;break e}o=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=nt(o,a,t,s),t.elementType=e,t.type=n,t.lanes=i,t}function Ea(e,t,a,n){return e=nt(7,e,n,t),e.lanes=a,e}function Dl(e,t,a){return e=nt(6,e,null,t),e.lanes=a,e}function Tc(e){var t=nt(18,null,null,0);return t.stateNode=e,t}function zl(e,t,a){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bc=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var a=Bc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Tr(t)},Bc.set(e,t),t)}return{value:e,source:t,stack:Tr(t)}}var cn=[],dn=0,Ks=null,Qn=0,mt=[],ft=0,sa=null,Ot=1,kt="";function Ut(e,t){cn[dn++]=Qn,cn[dn++]=Ks,Ks=e,Qn=t}function Oc(e,t,a){mt[ft++]=Ot,mt[ft++]=kt,mt[ft++]=sa,sa=e;var n=Ot;e=kt;var s=32-tt(n)-1;n&=~(1<<s),a+=1;var i=32-tt(t)+s;if(30<i){var o=s-s%5;i=(n&(1<<o)-1).toString(32),n>>=o,s-=o,Ot=1<<32-tt(t)+s|a<<s|n,kt=i+e}else Ot=1<<i|a<<s|n,kt=e}function El(e){e.return!==null&&(Ut(e,1),Oc(e,1,0))}function Nl(e){for(;e===Ks;)Ks=cn[--dn],cn[dn]=null,Qn=cn[--dn],cn[dn]=null;for(;e===sa;)sa=mt[--ft],mt[ft]=null,kt=mt[--ft],mt[ft]=null,Ot=mt[--ft],mt[ft]=null}function kc(e,t){mt[ft++]=Ot,mt[ft++]=kt,mt[ft++]=sa,Ot=t.id,kt=t.overflow,sa=e}var ke=null,he=null,K=!1,ia=null,gt=!1,Rl=Error(d(519));function la(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xn(ht(t,e)),Rl}function Dc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Oe]=e,t[Le]=n,a){case"dialog":V("cancel",t),V("close",t);break;case"iframe":case"object":case"embed":V("load",t);break;case"video":case"audio":for(a=0;a<bs.length;a++)V(bs[a],t);break;case"source":V("error",t);break;case"img":case"image":case"link":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"input":V("invalid",t),Fr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":V("invalid",t);break;case"textarea":V("invalid",t),Vr(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Xu(t.textContent,a)?(n.popover!=null&&(V("beforetoggle",t),V("toggle",t)),n.onScroll!=null&&V("scroll",t),n.onScrollEnd!=null&&V("scrollend",t),n.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||la(e,!0)}function zc(e){for(ke=e.return;ke;)switch(ke.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:ke=ke.return}}function un(e){if(e!==ke)return!1;if(!K)return zc(e),K=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||tr(e.type,e.memoizedProps)),a=!a),a&&he&&la(e),zc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));he=sp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));he=sp(e)}else t===27?(t=he,xa(e.type)?(e=lr,lr=null,he=e):he=t):he=ke?vt(e.stateNode.nextSibling):null;return!0}function Na(){he=ke=null,K=!1}function Hl(){var e=ia;return e!==null&&(Xe===null?Xe=e:Xe.push.apply(Xe,e),ia=null),e}function Xn(e){ia===null?ia=[e]:ia.push(e)}var Gl=p(null),Ra=null,Yt=null;function oa(e,t,a){k(Gl,t._currentValue),t._currentValue=a}function Pt(e){e._currentValue=Gl.current,j(Gl)}function ql(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ul(e,t,a,n){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var o=s.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=s;for(var c=0;c<t.length;c++)if(r.context===t[c]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),ql(i.return,a,e),n||(o=null);break e}i=r.next}}else if(s.tag===18){if(o=s.return,o===null)throw Error(d(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),ql(o,a,e),o=null}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}}function pn(e,t,a,n){e=null;for(var s=t,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var o=s.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var r=s.type;at(s.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(s===ae.current){if(o=s.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(As):e=[As])}s=s.return}e!==null&&Ul(t,e,a,n),t.flags|=262144}function Ws(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ra=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return Ec(Ra,e)}function $s(e,t){return Ra===null&&Ha(e),Ec(e,t)}function Ec(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Yt===null){if(e===null)throw Error(d(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return a}var dm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},um=m.unstable_scheduleCallback,pm=m.unstable_NormalPriority,Ae={$$typeof:Ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yl(){return{controller:new dm,data:new Map,refCount:0}}function In(e){e.refCount--,e.refCount===0&&um(pm,function(){e.controller.abort()})}var Kn=null,Pl=0,hn=0,mn=null;function hm(e,t){if(Kn===null){var a=Kn=[];Pl=0,hn=Zo(),mn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Pl++,t.then(Nc,Nc),t}function Nc(){if(--Pl===0&&Kn!==null){mn!==null&&(mn.status="fulfilled");var e=Kn;Kn=null,hn=0,mn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function mm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(n.status="rejected",n.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),n}var Rc=w.S;w.S=function(e,t){yu=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hm(e,t),Rc!==null&&Rc(e,t)};var Ga=p(null);function Jl(){var e=Ga.current;return e!==null?e:ue.pooledCache}function ei(e,t){t===null?k(Ga,Ga.current):k(Ga,t.pool)}function Hc(){var e=Jl();return e===null?null:{parent:Ae._currentValue,pool:e}}var fn=Error(d(460)),Ll=Error(d(474)),ti=Error(d(542)),ai={then:function(){}};function Gc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ht,Ht),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yc(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=n}},function(n){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yc(e),e}throw Ua=t,fn}}function qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,fn):a}}var Ua=null;function Uc(){if(Ua===null)throw Error(d(459));var e=Ua;return Ua=null,e}function Yc(e){if(e===fn||e===ti)throw Error(d(483))}var gn=null,Wn=0;function ni(e){var t=Wn;return Wn+=1,gn===null&&(gn=[]),qc(gn,e,t)}function $n(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function si(e,t){throw t.$$typeof===fe?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pc(e){function t(h,u){if(e){var f=h.deletions;f===null?(h.deletions=[u],h.flags|=16):f.push(u)}}function a(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function n(h){for(var u=new Map;h!==null;)h.key!==null?u.set(h.key,h):u.set(h.index,h),h=h.sibling;return u}function s(h,u){return h=qt(h,u),h.index=0,h.sibling=null,h}function i(h,u,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<u?(h.flags|=67108866,u):f):(h.flags|=67108866,u)):(h.flags|=1048576,u)}function o(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function r(h,u,f,A){return u===null||u.tag!==6?(u=Dl(f,h.mode,A),u.return=h,u):(u=s(u,f),u.return=h,u)}function c(h,u,f,A){var R=f.type;return R===He?x(h,u,f.props.children,A,f.key):u!==null&&(u.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pe&&qa(R)===u.type)?(u=s(u,f.props),$n(u,f),u.return=h,u):(u=Is(f.type,f.key,f.props,null,h.mode,A),$n(u,f),u.return=h,u)}function g(h,u,f,A){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=zl(f,h.mode,A),u.return=h,u):(u=s(u,f.children||[]),u.return=h,u)}function x(h,u,f,A,R){return u===null||u.tag!==7?(u=Ea(f,h.mode,A,R),u.return=h,u):(u=s(u,f),u.return=h,u)}function S(h,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Dl(""+u,h.mode,f),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ke:return f=Is(u.type,u.key,u.props,null,h.mode,f),$n(f,u),f.return=h,f;case Ue:return u=zl(u,h.mode,f),u.return=h,u;case Pe:return u=qa(u),S(h,u,f)}if(xt(u)||Je(u))return u=Ea(u,h.mode,f,null),u.return=h,u;if(typeof u.then=="function")return S(h,ni(u),f);if(u.$$typeof===Ne)return S(h,$s(h,u),f);si(h,u)}return null}function b(h,u,f,A){var R=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return R!==null?null:r(h,u,""+f,A);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ke:return f.key===R?c(h,u,f,A):null;case Ue:return f.key===R?g(h,u,f,A):null;case Pe:return f=qa(f),b(h,u,f,A)}if(xt(f)||Je(f))return R!==null?null:x(h,u,f,A,null);if(typeof f.then=="function")return b(h,u,ni(f),A);if(f.$$typeof===Ne)return b(h,u,$s(h,f),A);si(h,f)}return null}function y(h,u,f,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return h=h.get(f)||null,r(u,h,""+A,R);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ke:return h=h.get(A.key===null?f:A.key)||null,c(u,h,A,R);case Ue:return h=h.get(A.key===null?f:A.key)||null,g(u,h,A,R);case Pe:return A=qa(A),y(h,u,f,A,R)}if(xt(A)||Je(A))return h=h.get(f)||null,x(u,h,A,R,null);if(typeof A.then=="function")return y(h,u,f,ni(A),R);if(A.$$typeof===Ne)return y(h,u,f,$s(u,A),R);si(u,A)}return null}function z(h,u,f,A){for(var R=null,$=null,N=u,L=u=0,X=null;N!==null&&L<f.length;L++){N.index>L?(X=N,N=null):X=N.sibling;var ee=b(h,N,f[L],A);if(ee===null){N===null&&(N=X);break}e&&N&&ee.alternate===null&&t(h,N),u=i(ee,u,L),$===null?R=ee:$.sibling=ee,$=ee,N=X}if(L===f.length)return a(h,N),K&&Ut(h,L),R;if(N===null){for(;L<f.length;L++)N=S(h,f[L],A),N!==null&&(u=i(N,u,L),$===null?R=N:$.sibling=N,$=N);return K&&Ut(h,L),R}for(N=n(N);L<f.length;L++)X=y(N,h,L,f[L],A),X!==null&&(e&&X.alternate!==null&&N.delete(X.key===null?L:X.key),u=i(X,u,L),$===null?R=X:$.sibling=X,$=X);return e&&N.forEach(function(_a){return t(h,_a)}),K&&Ut(h,L),R}function H(h,u,f,A){if(f==null)throw Error(d(151));for(var R=null,$=null,N=u,L=u=0,X=null,ee=f.next();N!==null&&!ee.done;L++,ee=f.next()){N.index>L?(X=N,N=null):X=N.sibling;var _a=b(h,N,ee.value,A);if(_a===null){N===null&&(N=X);break}e&&N&&_a.alternate===null&&t(h,N),u=i(_a,u,L),$===null?R=_a:$.sibling=_a,$=_a,N=X}if(ee.done)return a(h,N),K&&Ut(h,L),R;if(N===null){for(;!ee.done;L++,ee=f.next())ee=S(h,ee.value,A),ee!==null&&(u=i(ee,u,L),$===null?R=ee:$.sibling=ee,$=ee);return K&&Ut(h,L),R}for(N=n(N);!ee.done;L++,ee=f.next())ee=y(N,h,L,ee.value,A),ee!==null&&(e&&ee.alternate!==null&&N.delete(ee.key===null?L:ee.key),u=i(ee,u,L),$===null?R=ee:$.sibling=ee,$=ee);return e&&N.forEach(function(Cf){return t(h,Cf)}),K&&Ut(h,L),R}function ce(h,u,f,A){if(typeof f=="object"&&f!==null&&f.type===He&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ke:e:{for(var R=f.key;u!==null;){if(u.key===R){if(R=f.type,R===He){if(u.tag===7){a(h,u.sibling),A=s(u,f.props.children),A.return=h,h=A;break e}}else if(u.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pe&&qa(R)===u.type){a(h,u.sibling),A=s(u,f.props),$n(A,f),A.return=h,h=A;break e}a(h,u);break}else t(h,u);u=u.sibling}f.type===He?(A=Ea(f.props.children,h.mode,A,f.key),A.return=h,h=A):(A=Is(f.type,f.key,f.props,null,h.mode,A),$n(A,f),A.return=h,h=A)}return o(h);case Ue:e:{for(R=f.key;u!==null;){if(u.key===R)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){a(h,u.sibling),A=s(u,f.children||[]),A.return=h,h=A;break e}else{a(h,u);break}else t(h,u);u=u.sibling}A=zl(f,h.mode,A),A.return=h,h=A}return o(h);case Pe:return f=qa(f),ce(h,u,f,A)}if(xt(f))return z(h,u,f,A);if(Je(f)){if(R=Je(f),typeof R!="function")throw Error(d(150));return f=R.call(f),H(h,u,f,A)}if(typeof f.then=="function")return ce(h,u,ni(f),A);if(f.$$typeof===Ne)return ce(h,u,$s(h,f),A);si(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(a(h,u.sibling),A=s(u,f),A.return=h,h=A):(a(h,u),A=Dl(f,h.mode,A),A.return=h,h=A),o(h)):a(h,u)}return function(h,u,f,A){try{Wn=0;var R=ce(h,u,f,A);return gn=null,R}catch(N){if(N===fn||N===ti)throw N;var $=nt(29,N,null,h.mode);return $.lanes=A,$.return=h,$}}}var Ya=Pc(!0),Jc=Pc(!1),ra=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(te&2)!==0){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,t=Xs(e),Cc(e,null,a),t}return Qs(e,n,t,a),Xs(e)}function es(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Er(e,a)}}function Vl(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var s=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?s=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?s=i=t:i=i.next=t}else s=i=t;a={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ql=!1;function ts(){if(Ql){var e=mn;if(e!==null)throw e}}function as(e,t,a,n){Ql=!1;var s=e.updateQueue;ra=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,r=s.shared.pending;if(r!==null){s.shared.pending=null;var c=r,g=c.next;c.next=null,o===null?i=g:o.next=g,o=c;var x=e.alternate;x!==null&&(x=x.updateQueue,r=x.lastBaseUpdate,r!==o&&(r===null?x.firstBaseUpdate=g:r.next=g,x.lastBaseUpdate=c))}if(i!==null){var S=s.baseState;o=0,x=g=c=null,r=i;do{var b=r.lane&-536870913,y=b!==r.lane;if(y?(Q&b)===b:(n&b)===b){b!==0&&b===hn&&(Ql=!0),x!==null&&(x=x.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var z=e,H=r;b=t;var ce=a;switch(H.tag){case 1:if(z=H.payload,typeof z=="function"){S=z.call(ce,S,b);break e}S=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=H.payload,b=typeof z=="function"?z.call(ce,S,b):z,b==null)break e;S=q({},S,b);break e;case 2:ra=!0}}b=r.callback,b!==null&&(e.flags|=64,y&&(e.flags|=8192),y=s.callbacks,y===null?s.callbacks=[b]:y.push(b))}else y={lane:b,tag:r.tag,payload:r.payload,callback:r.callback,next:null},x===null?(g=x=y,c=S):x=x.next=y,o|=b;if(r=r.next,r===null){if(r=s.shared.pending,r===null)break;y=r,r=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);x===null&&(c=S),s.baseState=c,s.firstBaseUpdate=g,s.lastBaseUpdate=x,i===null&&(s.shared.lanes=0),fa|=o,e.lanes=o,e.memoizedState=S}}function Lc(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Fc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Lc(a[e],t)}var bn=p(null),ii=p(0);function Zc(e,t){e=Kt,k(ii,e),k(bn,t),Kt=e|t.baseLanes}function Xl(){k(ii,Kt),k(bn,bn.current)}function Il(){Kt=ii.current,j(bn),j(ii)}var st=p(null),bt=null;function ua(e){var t=e.alternate;k(xe,xe.current&1),k(st,e),bt===null&&(t===null||bn.current!==null||t.memoizedState!==null)&&(bt=e)}function Kl(e){k(xe,xe.current),k(st,e),bt===null&&(bt=e)}function Vc(e){e.tag===22?(k(xe,xe.current),k(st,e),bt===null&&(bt=e)):pa()}function pa(){k(xe,xe.current),k(st,st.current)}function it(e){j(st),bt===e&&(bt=null),j(xe)}var xe=p(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sr(a)||ir(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,J=null,oe=null,Se=null,oi=!1,vn=!1,Pa=!1,ri=0,ns=0,yn=null,fm=0;function be(){throw Error(d(321))}function Wl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!at(e[a],t[a]))return!1;return!0}function $l(e,t,a,n,s,i){return Jt=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Od:fo,Pa=!1,i=a(n,s),Pa=!1,vn&&(i=Xc(t,a,n,s)),Qc(e),i}function Qc(e){w.H=ls;var t=oe!==null&&oe.next!==null;if(Jt=0,Se=oe=J=null,oi=!1,ns=0,yn=null,t)throw Error(d(300));e===null||je||(e=e.dependencies,e!==null&&Ws(e)&&(je=!0))}function Xc(e,t,a,n){J=e;var s=0;do{if(vn&&(yn=null),ns=0,vn=!1,25<=s)throw Error(d(301));if(s+=1,Se=oe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=kd,i=t(a,n)}while(vn);return i}function gm(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?ss(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(J.flags|=1024),t}function eo(){var e=ri!==0;return ri=0,e}function to(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ao(e){if(oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oi=!1}Jt=0,Se=oe=J=null,vn=!1,ns=ri=0,yn=null}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?J.memoizedState=Se=e:Se=Se.next=e,Se}function we(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=Se===null?J.memoizedState:Se.next;if(t!==null)Se=t,oe=e;else{if(e===null)throw J.alternate===null?Error(d(467)):Error(d(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},Se===null?J.memoizedState=Se=e:Se=Se.next=e}return Se}function ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ss(e){var t=ns;return ns+=1,yn===null&&(yn=[]),e=qc(yn,e,t),t=J,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Od:fo),e}function di(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ss(e);if(e.$$typeof===Ne)return De(e)}throw Error(d(438,String(e)))}function no(e){var t=null,a=J.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=J.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ci(),J.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Va;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=we();return so(t,oe,e)}function so(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var s=e.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}t.baseQueue=s=i,n.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{t=s.next;var r=o=null,c=null,g=t,x=!1;do{var S=g.lane&-536870913;if(S!==g.lane?(Q&S)===S:(Jt&S)===S){var b=g.revertLane;if(b===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),S===hn&&(x=!0);else if((Jt&b)===b){g=g.next,b===hn&&(x=!0);continue}else S={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=S,o=i):c=c.next=S,J.lanes|=b,fa|=b;S=g.action,Pa&&a(i,S),i=g.hasEagerState?g.eagerState:a(i,S)}else b={lane:S,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=b,o=i):c=c.next=b,J.lanes|=S,fa|=S;g=g.next}while(g!==null&&g!==t);if(c===null?o=i:c.next=r,!at(i,e.memoizedState)&&(je=!0,x&&(a=mn,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}return s===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function io(e){var t=we(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,s=a.pending,i=t.memoizedState;if(s!==null){a.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);at(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Ic(e,t,a){var n=J,s=we(),i=K;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=t();var o=!at((oe||s).memoizedState,a);if(o&&(s.memoizedState=a,je=!0),s=s.queue,ro($c.bind(null,n,s,e),[e]),s.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,xn(9,{destroy:void 0},Wc.bind(null,n,s,a,t),null),ue===null)throw Error(d(349));i||(Jt&127)!==0||Kc(n,t,a)}return a}function Kc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=J.updateQueue,t===null?(t=ci(),J.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Wc(e,t,a,n){t.value=a,t.getSnapshot=n,ed(t)&&td(e)}function $c(e,t,a){return a(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!at(e,a)}catch{return!0}}function td(e){var t=za(e,2);t!==null&&Ie(t,e,2)}function lo(e){var t=qe();if(typeof e=="function"){var a=e;if(e=a(),Pa){ta(!0);try{a()}finally{ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function ad(e,t,a,n){return e.baseState=a,so(e,oe,typeof n=="function"?n:Lt)}function bm(e,t,a,n,s){if(mi(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};w.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,nd(t,i)):(i.next=a.next,t.pending=a.next=i)}}function nd(e,t){var a=t.action,n=t.payload,s=e.state;if(t.isTransition){var i=w.T,o={};w.T=o;try{var r=a(s,n),c=w.S;c!==null&&c(o,r),sd(e,t,r)}catch(g){oo(e,t,g)}finally{i!==null&&o.types!==null&&(i.types=o.types),w.T=i}}else try{i=a(s,n),sd(e,t,i)}catch(g){oo(e,t,g)}}function sd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){id(e,t,n)},function(n){return oo(e,t,n)}):id(e,t,a)}function id(e,t,a){t.status="fulfilled",t.value=a,ld(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,nd(e,a)))}function oo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,ld(t),t=t.next;while(t!==n)}e.action=null}function ld(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function od(e,t){return t}function rd(e,t){if(K){var a=ue.formState;if(a!==null){e:{var n=J;if(K){if(he){t:{for(var s=he,i=gt;s.nodeType!==8;){if(!i){s=null;break t}if(s=vt(s.nextSibling),s===null){s=null;break t}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){he=vt(s.nextSibling),n=s.data==="F!";break e}}la(n)}n=!1}n&&(t=a[0])}}return a=qe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:od,lastRenderedState:t},a.queue=n,a=Md.bind(null,J,n),n.dispatch=a,n=lo(!1),i=mo.bind(null,J,!1,n.queue),n=qe(),s={state:t,dispatch:null,action:e,pending:null},n.queue=s,a=bm.bind(null,J,s,i,a),s.dispatch=a,n.memoizedState=e,[t,a,!1]}function cd(e){var t=we();return dd(t,oe,e)}function dd(e,t,a){if(t=so(e,t,od)[0],e=ui(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ss(t)}catch(o){throw o===fn?ti:o}else n=t;t=we();var s=t.queue,i=s.dispatch;return a!==t.memoizedState&&(J.flags|=2048,xn(9,{destroy:void 0},vm.bind(null,s,a),null)),[n,i,e]}function vm(e,t){e.action=t}function ud(e){var t=we(),a=oe;if(a!==null)return dd(t,a,e);we(),t=t.memoizedState,a=we();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function xn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=J.updateQueue,t===null&&(t=ci(),J.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function pd(){return we().memoizedState}function pi(e,t,a,n){var s=qe();J.flags|=e,s.memoizedState=xn(1|t,{destroy:void 0},a,n===void 0?null:n)}function hi(e,t,a,n){var s=we();n=n===void 0?null:n;var i=s.memoizedState.inst;oe!==null&&n!==null&&Wl(n,oe.memoizedState.deps)?s.memoizedState=xn(t,i,a,n):(J.flags|=e,s.memoizedState=xn(1|t,i,a,n))}function hd(e,t){pi(8390656,8,e,t)}function ro(e,t){hi(2048,8,e,t)}function ym(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=ci(),J.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function md(e){var t=we().memoizedState;return ym({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function fd(e,t){return hi(4,2,e,t)}function gd(e,t){return hi(4,4,e,t)}function bd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vd(e,t,a){a=a!=null?a.concat([e]):null,hi(4,4,bd.bind(null,t,e),a)}function co(){}function yd(e,t){var a=we();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Wl(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function xd(e,t){var a=we();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Wl(t,n[1]))return n[0];if(n=e(),Pa){ta(!0);try{e()}finally{ta(!1)}}return a.memoizedState=[n,t],n}function uo(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(Q&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=wu(),J.lanes|=e,fa|=e,a)}function wd(e,t,a,n){return at(a,t)?a:bn.current!==null?(e=uo(e,a,n),at(e,t)||(je=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(Q&261930)===0?(je=!0,e.memoizedState=a):(e=wu(),J.lanes|=e,fa|=e,t)}function Ad(e,t,a,n,s){var i=O.p;O.p=i!==0&&8>i?i:8;var o=w.T,r={};w.T=r,mo(e,!1,t,a);try{var c=s(),g=w.S;if(g!==null&&g(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var x=mm(c,n);is(e,t,x,rt(e))}else is(e,t,n,rt(e))}catch(S){is(e,t,{then:function(){},status:"rejected",reason:S},rt())}finally{O.p=i,o!==null&&r.types!==null&&(o.types=r.types),w.T=o}}function xm(){}function po(e,t,a,n){if(e.tag!==5)throw Error(d(476));var s=Sd(e).queue;Ad(e,s,t,U,a===null?xm:function(){return jd(e),a(n)})}function Sd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:U},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jd(e){var t=Sd(e);t.next===null&&(t=e.alternate.memoizedState),is(e,t.next.queue,{},rt())}function ho(){return De(As)}function _d(){return we().memoizedState}function Cd(){return we().memoizedState}function wm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=rt();e=ca(a);var n=da(t,e,a);n!==null&&(Ie(n,t,a),es(n,t,a)),t={cache:Yl()},e.payload=t;return}t=t.return}}function Am(e,t,a){var n=rt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},mi(e)?Td(t,a):(a=Ol(e,t,a,n),a!==null&&(Ie(a,e,n),Bd(a,t,n)))}function Md(e,t,a){var n=rt();is(e,t,a,n)}function is(e,t,a,n){var s={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(mi(e))Td(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,r=i(o,a);if(s.hasEagerState=!0,s.eagerState=r,at(r,o))return Qs(e,t,s,0),ue===null&&Vs(),!1}catch{}if(a=Ol(e,t,s,n),a!==null)return Ie(a,e,n),Bd(a,t,n),!0}return!1}function mo(e,t,a,n){if(n={lane:2,revertLane:Zo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mi(e)){if(t)throw Error(d(479))}else t=Ol(e,a,n,2),t!==null&&Ie(t,e,2)}function mi(e){var t=e.alternate;return e===J||t!==null&&t===J}function Td(e,t){vn=oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Bd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Er(e,a)}}var ls={readContext:De,use:di,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};ls.useEffectEvent=be;var Od={readContext:De,use:di,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:hd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pi(4194308,4,bd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){pi(4,2,e,t)},useMemo:function(e,t){var a=qe();t=t===void 0?null:t;var n=e();if(Pa){ta(!0);try{e()}finally{ta(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=qe();if(a!==void 0){var s=a(t);if(Pa){ta(!0);try{a(t)}finally{ta(!1)}}}else s=t;return n.memoizedState=n.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=Am.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:function(e){e=lo(e);var t=e.queue,a=Md.bind(null,J,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:co,useDeferredValue:function(e,t){var a=qe();return uo(a,e,t)},useTransition:function(){var e=lo(!1);return e=Ad.bind(null,J,e.queue,!0,!1),qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=J,s=qe();if(K){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),ue===null)throw Error(d(349));(Q&127)!==0||Kc(n,t,a)}s.memoizedState=a;var i={value:a,getSnapshot:t};return s.queue=i,hd($c.bind(null,n,i,e),[e]),n.flags|=2048,xn(9,{destroy:void 0},Wc.bind(null,n,i,a,t),null),a},useId:function(){var e=qe(),t=ue.identifierPrefix;if(K){var a=kt,n=Ot;a=(n&~(1<<32-tt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ri++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=fm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ho,useFormState:rd,useActionState:rd,useOptimistic:function(e){var t=qe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=mo.bind(null,J,!0,a),a.dispatch=t,[e,t]},useMemoCache:no,useCacheRefresh:function(){return qe().memoizedState=wm.bind(null,J)},useEffectEvent:function(e){var t=qe(),a={impl:e};return t.memoizedState=a,function(){if((te&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},fo={readContext:De,use:di,useCallback:yd,useContext:De,useEffect:ro,useImperativeHandle:vd,useInsertionEffect:fd,useLayoutEffect:gd,useMemo:xd,useReducer:ui,useRef:pd,useState:function(){return ui(Lt)},useDebugValue:co,useDeferredValue:function(e,t){var a=we();return wd(a,oe.memoizedState,e,t)},useTransition:function(){var e=ui(Lt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:Ic,useId:_d,useHostTransitionStatus:ho,useFormState:cd,useActionState:cd,useOptimistic:function(e,t){var a=we();return ad(a,oe,e,t)},useMemoCache:no,useCacheRefresh:Cd};fo.useEffectEvent=md;var kd={readContext:De,use:di,useCallback:yd,useContext:De,useEffect:ro,useImperativeHandle:vd,useInsertionEffect:fd,useLayoutEffect:gd,useMemo:xd,useReducer:io,useRef:pd,useState:function(){return io(Lt)},useDebugValue:co,useDeferredValue:function(e,t){var a=we();return oe===null?uo(a,e,t):wd(a,oe.memoizedState,e,t)},useTransition:function(){var e=io(Lt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:Ic,useId:_d,useHostTransitionStatus:ho,useFormState:ud,useActionState:ud,useOptimistic:function(e,t){var a=we();return oe!==null?ad(a,oe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:no,useCacheRefresh:Cd};kd.useEffectEvent=md;function go(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=rt(),s=ca(n);s.payload=t,a!=null&&(s.callback=a),t=da(e,s,n),t!==null&&(Ie(t,e,n),es(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=rt(),s=ca(n);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=da(e,s,n),t!==null&&(Ie(t,e,n),es(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=rt(),n=ca(a);n.tag=2,t!=null&&(n.callback=t),t=da(e,n,a),t!==null&&(Ie(t,e,a),es(t,e,a))}};function Dd(e,t,a,n,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(a,n)||!Zn(s,i):!0}function zd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&bo.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=q({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function Ed(e){Zs(e)}function Nd(e){console.error(e)}function Rd(e){Zs(e)}function fi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Hd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function vo(e,t,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){fi(e,t)},a}function Gd(e){return e=ca(e),e.tag=3,e}function qd(e,t,a,n){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var i=n.value;e.payload=function(){return s(i)},e.callback=function(){Hd(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Hd(t,a,n),typeof s!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Sm(e,t,a,n,s){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&pn(t,a,s,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return bt===null?Mi():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=s,n===ai?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Jo(e,n,s)),!1;case 22:return a.flags|=65536,n===ai?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Jo(e,n,s)),!1}throw Error(d(435,a.tag))}return Jo(e,n,s),Mi(),!1}if(K)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,n!==Rl&&(e=Error(d(422),{cause:n}),Xn(ht(e,a)))):(n!==Rl&&(t=Error(d(423),{cause:n}),Xn(ht(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,n=ht(n,a),s=vo(e.stateNode,n,s),Vl(e,s),ve!==4&&(ve=2)),!1;var i=Error(d(520),{cause:n});if(i=ht(i,a),ms===null?ms=[i]:ms.push(i),ve!==4&&(ve=2),t===null)return!0;n=ht(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=vo(a.stateNode,n,e),Vl(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ga===null||!ga.has(i))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Gd(s),qd(s,e,a,n),Vl(a,s),!1}a=a.return}while(a!==null);return!1}var yo=Error(d(461)),je=!1;function ze(e,t,a,n){t.child=e===null?Jc(t,null,a,n):Ya(t,e.child,a,n)}function Ud(e,t,a,n,s){a=a.render;var i=t.ref;if("ref"in n){var o={};for(var r in n)r!=="ref"&&(o[r]=n[r])}else o=n;return Ha(t),n=$l(e,t,a,o,i,s),r=eo(),e!==null&&!je?(to(e,t,s),Ft(e,t,s)):(K&&r&&El(t),t.flags|=1,ze(e,t,n,s),t.child)}function Yd(e,t,a,n,s){if(e===null){var i=a.type;return typeof i=="function"&&!kl(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Pd(e,t,i,n,s)):(e=Is(a.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Mo(e,s)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Zn,a(o,n)&&e.ref===t.ref)return Ft(e,t,s)}return t.flags|=1,e=qt(i,n),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,a,n,s){if(e!==null){var i=e.memoizedProps;if(Zn(i,n)&&e.ref===t.ref)if(je=!1,t.pendingProps=n=i,Mo(e,s))(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Ft(e,t,s)}return xo(e,t,a,n,s)}function Jd(e,t,a,n){var s=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,s=0;n!==null;)s=s|n.lanes|n.childLanes,n=n.sibling;n=s&~i}else n=0,t.child=null;return Ld(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ei(t,i!==null?i.cachePool:null),i!==null?Zc(t,i):Xl(),Vc(t);else return n=t.lanes=536870912,Ld(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(ei(t,i.cachePool),Zc(t,i),pa(),t.memoizedState=null):(e!==null&&ei(t,null),Xl(),pa());return ze(e,t,s,a),t.child}function os(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ld(e,t,a,n,s){var i=Jl();return i=i===null?null:{parent:Ae._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ei(t,null),Xl(),Vc(t),e!==null&&pn(e,t,n,!0),t.childLanes=s,null}function gi(e,t){return t=vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fd(e,t,a){return Ya(t,e.child,null,a),e=gi(t,t.pendingProps),e.flags|=2,it(t),t.memoizedState=null,e}function jm(e,t,a){var n=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(K){if(n.mode==="hidden")return e=gi(t,n),t.lanes=536870912,os(null,e);if(Kl(t),(e=he)?(e=np(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ot,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Tc(e),a.return=t,t.child=a,ke=t,he=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return gi(t,n)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Kl(t),s)if(t.flags&256)t.flags&=-257,t=Fd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(je||pn(e,t,a,!1),s=(a&e.childLanes)!==0,je||s){if(n=ue,n!==null&&(o=Nr(n,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,za(e,o),Ie(n,e,o),yo;Mi(),t=Fd(e,t,a)}else e=i.treeContext,he=vt(o.nextSibling),ke=t,K=!0,ia=null,gt=!1,e!==null&&kc(t,e),t=gi(t,n),t.flags|=4096;return t}return e=qt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function bi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function xo(e,t,a,n,s){return Ha(t),a=$l(e,t,a,n,void 0,s),n=eo(),e!==null&&!je?(to(e,t,s),Ft(e,t,s)):(K&&n&&El(t),t.flags|=1,ze(e,t,a,s),t.child)}function Zd(e,t,a,n,s,i){return Ha(t),t.updateQueue=null,a=Xc(t,n,a,s),Qc(e),n=eo(),e!==null&&!je?(to(e,t,i),Ft(e,t,i)):(K&&n&&El(t),t.flags|=1,ze(e,t,a,i),t.child)}function Vd(e,t,a,n,s){if(Ha(t),t.stateNode===null){var i=rn,o=a.contextType;typeof o=="object"&&o!==null&&(i=De(o)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Fl(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?De(o):rn,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(go(t,a,o,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&bo.enqueueReplaceState(i,i.state,null),as(t,n,i,s),ts(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,c=Ja(a,r);i.props=c;var g=i.context,x=a.contextType;o=rn,typeof x=="object"&&x!==null&&(o=De(x));var S=a.getDerivedStateFromProps;x=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||g!==o)&&zd(t,i,n,o),ra=!1;var b=t.memoizedState;i.state=b,as(t,n,i,s),ts(),g=t.memoizedState,r||b!==g||ra?(typeof S=="function"&&(go(t,a,S,n),g=t.memoizedState),(c=ra||Dd(t,a,c,n,b,g,o))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),i.props=n,i.state=g,i.context=o,n=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Zl(e,t),o=t.memoizedProps,x=Ja(a,o),i.props=x,S=t.pendingProps,b=i.context,g=a.contextType,c=rn,typeof g=="object"&&g!==null&&(c=De(g)),r=a.getDerivedStateFromProps,(g=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==S||b!==c)&&zd(t,i,n,c),ra=!1,b=t.memoizedState,i.state=b,as(t,n,i,s),ts();var y=t.memoizedState;o!==S||b!==y||ra||e!==null&&e.dependencies!==null&&Ws(e.dependencies)?(typeof r=="function"&&(go(t,a,r,n),y=t.memoizedState),(x=ra||Dd(t,a,x,n,b,y,c)||e!==null&&e.dependencies!==null&&Ws(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,y,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,y,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=c,n=x):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,bi(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=Ya(t,e.child,null,s),t.child=Ya(t,null,a,s)):ze(e,t,a,s),t.memoizedState=i.state,e=t.child):e=Ft(e,t,s),e}function Qd(e,t,a,n){return Na(),t.flags|=256,ze(e,t,a,n),t.child}var wo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ao(e){return{baseLanes:e,cachePool:Hc()}}function So(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ot),e}function Xd(e,t,a){var n=t.pendingProps,s=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),o&&(s=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(K){if(s?ua(t):pa(),(e=he)?(e=np(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:Ot,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Tc(e),a.return=t,t.child=a,ke=t,he=null)):e=null,e===null)throw la(t);return ir(e)?t.lanes=32:t.lanes=536870912,null}var r=n.children;return n=n.fallback,s?(pa(),s=t.mode,r=vi({mode:"hidden",children:r},s),n=Ea(n,s,a,null),r.return=t,n.return=t,r.sibling=n,t.child=r,n=t.child,n.memoizedState=Ao(a),n.childLanes=So(e,o,a),t.memoizedState=wo,os(null,n)):(ua(t),jo(t,r))}var c=e.memoizedState;if(c!==null&&(r=c.dehydrated,r!==null)){if(i)t.flags&256?(ua(t),t.flags&=-257,t=_o(e,t,a)):t.memoizedState!==null?(pa(),t.child=e.child,t.flags|=128,t=null):(pa(),r=n.fallback,s=t.mode,n=vi({mode:"visible",children:n.children},s),r=Ea(r,s,a,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,Ya(t,e.child,null,a),n=t.child,n.memoizedState=Ao(a),n.childLanes=So(e,o,a),t.memoizedState=wo,t=os(null,n));else if(ua(t),ir(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var g=o.dgst;o=g,n=Error(d(419)),n.stack="",n.digest=o,Xn({value:n,source:null,stack:null}),t=_o(e,t,a)}else if(je||pn(e,t,a,!1),o=(a&e.childLanes)!==0,je||o){if(o=ue,o!==null&&(n=Nr(o,a),n!==0&&n!==c.retryLane))throw c.retryLane=n,za(e,n),Ie(o,e,n),yo;sr(r)||Mi(),t=_o(e,t,a)}else sr(r)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,he=vt(r.nextSibling),ke=t,K=!0,ia=null,gt=!1,e!==null&&kc(t,e),t=jo(t,n.children),t.flags|=4096);return t}return s?(pa(),r=n.fallback,s=t.mode,c=e.child,g=c.sibling,n=qt(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,g!==null?r=qt(g,r):(r=Ea(r,s,a,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,os(null,n),n=t.child,r=e.child.memoizedState,r===null?r=Ao(a):(s=r.cachePool,s!==null?(c=Ae._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=Hc(),r={baseLanes:r.baseLanes|a,cachePool:s}),n.memoizedState=r,n.childLanes=So(e,o,a),t.memoizedState=wo,os(e.child,n)):(ua(t),a=e.child,e=a.sibling,a=qt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function jo(e,t){return t=vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vi(e,t){return e=nt(22,e,null,t),e.lanes=0,e}function _o(e,t,a){return Ya(t,e.child,null,a),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Id(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ql(e.return,t,a)}function Co(e,t,a,n,s,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:s,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=s,o.treeForkCount=i)}function Kd(e,t,a){var n=t.pendingProps,s=n.revealOrder,i=n.tail;n=n.children;var o=xe.current,r=(o&2)!==0;if(r?(o=o&1|2,t.flags|=128):o&=1,k(xe,o),ze(e,t,n,a),n=K?Qn:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,a,t);else if(e.tag===19)Id(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&li(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Co(t,!1,s,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&li(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Co(t,!0,a,null,i,n);break;case"together":Co(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Ft(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Mo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ws(e)))}function _m(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),oa(t,Ae,e.memoizedState.cache),Na();break;case 27:case 5:zn(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kl(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Xd(e,t,a):(ua(t),e=Ft(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var s=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(pn(e,t,a,!1),n=(a&t.childLanes)!==0),s){if(n)return Kd(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),k(xe,xe.current),n)break;return null;case 22:return t.lanes=0,Jd(e,t,a,t.pendingProps);case 24:oa(t,Ae,e.memoizedState.cache)}return Ft(e,t,a)}function Wd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)je=!0;else{if(!Mo(e,a)&&(t.flags&128)===0)return je=!1,_m(e,t,a);je=(e.flags&131072)!==0}else je=!1,K&&(t.flags&1048576)!==0&&Oc(t,Qn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e=="function")kl(e)?(n=Ja(e,n),t.tag=1,t=Vd(null,t,e,n,a)):(t.tag=0,t=xo(null,t,e,n,a));else{if(e!=null){var s=e.$$typeof;if(s===ct){t.tag=11,t=Ud(null,t,e,n,a);break e}else if(s===I){t.tag=14,t=Yd(null,t,e,n,a);break e}}throw t=Nt(e)||e,Error(d(306,t,""))}}return t;case 0:return xo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,s=Ja(n,t.pendingProps),Vd(e,t,n,s,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var i=t.memoizedState;s=i.element,Zl(e,t),as(t,n,null,a);var o=t.memoizedState;if(n=o.cache,oa(t,Ae,n),n!==i.cache&&Ul(t,[Ae],a,!0),ts(),n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Qd(e,t,n,a);break e}else if(n!==s){s=ht(Error(d(424)),t),Xn(s),t=Qd(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,he=vt(e.firstChild),ke=t,K=!0,ia=null,gt=!0,a=Jc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Na(),n===s){t=Ft(e,t,a);break e}ze(e,t,n,a)}t=t.child}return t;case 26:return bi(e,t),e===null?(a=cp(t.type,null,t.pendingProps,null))?t.memoizedState=a:K||(a=t.type,e=t.pendingProps,n=Ei(F.current).createElement(a),n[Oe]=t,n[Le]=e,Ee(n,a,e),Me(n),t.stateNode=n):t.memoizedState=cp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zn(t),e===null&&K&&(n=t.stateNode=lp(t.type,t.pendingProps,F.current),ke=t,gt=!0,s=he,xa(t.type)?(lr=s,he=vt(n.firstChild)):he=s),ze(e,t,t.pendingProps.children,a),bi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((s=n=he)&&(n=tf(n,t.type,t.pendingProps,gt),n!==null?(t.stateNode=n,ke=t,he=vt(n.firstChild),gt=!1,s=!0):s=!1),s||la(t)),zn(t),s=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,tr(s,i)?n=null:o!==null&&tr(s,o)&&(t.flags|=32),t.memoizedState!==null&&(s=$l(e,t,gm,null,null,a),As._currentValue=s),bi(e,t),ze(e,t,n,a),t.child;case 6:return e===null&&K&&((e=a=he)&&(a=af(a,t.pendingProps,gt),a!==null?(t.stateNode=a,ke=t,he=null,e=!0):e=!1),e||la(t)),null;case 13:return Xd(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ya(t,null,n,a):ze(e,t,n,a),t.child;case 11:return Ud(e,t,t.type,t.pendingProps,a);case 7:return ze(e,t,t.pendingProps,a),t.child;case 8:return ze(e,t,t.pendingProps.children,a),t.child;case 12:return ze(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,oa(t,t.type,n.value),ze(e,t,n.children,a),t.child;case 9:return s=t.type._context,n=t.pendingProps.children,Ha(t),s=De(s),n=n(s),t.flags|=1,ze(e,t,n,a),t.child;case 14:return Yd(e,t,t.type,t.pendingProps,a);case 15:return Pd(e,t,t.type,t.pendingProps,a);case 19:return Kd(e,t,a);case 31:return jm(e,t,a);case 22:return Jd(e,t,a,t.pendingProps);case 24:return Ha(t),n=De(Ae),e===null?(s=Jl(),s===null&&(s=ue,i=Yl(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=a),s=i),t.memoizedState={parent:n,cache:s},Fl(t),oa(t,Ae,s)):((e.lanes&a)!==0&&(Zl(e,t),as(t,null,null,a),ts()),s=e.memoizedState,i=t.memoizedState,s.parent!==n?(s={parent:n,cache:n},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),oa(t,Ae,n)):(n=i.cache,oa(t,Ae,n),n!==s.cache&&Ul(t,[Ae],a,!0))),ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Zt(e){e.flags|=4}function To(e,t,a,n,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_u())e.flags|=8192;else throw Ua=ai,Ll}else e.flags&=-16777217}function $d(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mp(t))if(_u())e.flags|=8192;else throw Ua=ai,Ll}function yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Dr():536870912,e.lanes|=t,jn|=t)}function rs(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,n|=s.subtreeFlags&65011712,n|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Cm(e,t,a){var n=t.pendingProps;switch(Nl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pt(Ae),ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(un(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hl())),me(t),null;case 26:var s=t.type,i=t.memoizedState;return e===null?(Zt(t),i!==null?(me(t),$d(t,i)):(me(t),To(t,s,null,n,a))):i?i!==e.memoizedState?(Zt(t),me(t),$d(t,i)):(me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Zt(t),me(t),To(t,s,e,n,a)),null;case 27:if(Os(t),a=F.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Zt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return me(t),null}e=E.current,un(t)?Dc(t):(e=lp(s,n,a),t.stateNode=e,Zt(t))}return me(t),null;case 5:if(Os(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Zt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return me(t),null}if(i=E.current,un(t))Dc(t);else{var o=Ei(F.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?o.createElement(s,{is:n.is}):o.createElement(s)}}i[Oe]=t,i[Le]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Ee(i,s,n),s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Zt(t)}}return me(t),To(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Zt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=F.current,un(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,s=ke,s!==null)switch(s.tag){case 27:case 5:n=s.memoizedProps}e[Oe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Xu(e.nodeValue,a)),e||la(t,!0)}else e=Ei(e).createTextNode(n),e[Oe]=t,t.stateNode=e}return me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=un(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Oe]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),e=!1}else a=Hl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(it(t),t):(it(t),null);if((t.flags&128)!==0)throw Error(d(558))}return me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=un(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(d(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(d(317));s[Oe]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else s=Hl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(it(t),t):(it(t),null)}return it(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,s=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(s=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==s&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),yi(t,t.updateQueue),me(t),null);case 4:return ye(),e===null&&Io(t.stateNode.containerInfo),me(t),null;case 10:return Pt(t.type),me(t),null;case 19:if(j(xe),n=t.memoizedState,n===null)return me(t),null;if(s=(t.flags&128)!==0,i=n.rendering,i===null)if(s)rs(n,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=li(e),i!==null){for(t.flags|=128,rs(n,!1),e=i.updateQueue,t.updateQueue=e,yi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Mc(a,e),a=a.sibling;return k(xe,xe.current&1|2),K&&Ut(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&$e()>ji&&(t.flags|=128,s=!0,rs(n,!1),t.lanes=4194304)}else{if(!s)if(e=li(i),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,yi(t,e),rs(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!K)return me(t),null}else 2*$e()-n.renderingStartTime>ji&&a!==536870912&&(t.flags|=128,s=!0,rs(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=$e(),e.sibling=null,a=xe.current,k(xe,s?a&1|2:a&1),K&&Ut(t,n.treeForkCount),e):(me(t),null);case 22:case 23:return it(t),Il(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),a=t.updateQueue,a!==null&&yi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&j(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pt(Ae),me(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Mm(e,t){switch(Nl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(Ae),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Os(t),null;case 31:if(t.memoizedState!==null){if(it(t),t.alternate===null)throw Error(d(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(it(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(xe),null;case 4:return ye(),null;case 10:return Pt(t.type),null;case 22:case 23:return it(t),Il(),e!==null&&j(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(Ae),null;case 25:return null;default:return null}}function eu(e,t){switch(Nl(t),t.tag){case 3:Pt(Ae),ye();break;case 26:case 27:case 5:Os(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&it(t);break;case 13:it(t);break;case 19:j(xe);break;case 10:Pt(t.type);break;case 22:case 23:it(t),Il(),e!==null&&j(Ga);break;case 24:Pt(Ae)}}function cs(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var s=n.next;a=s;do{if((a.tag&e)===e){n=void 0;var i=a.create,o=a.inst;n=i(),o.destroy=n}a=a.next}while(a!==s)}}catch(r){ie(t,t.return,r)}}function ha(e,t,a){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var i=s.next;n=i;do{if((n.tag&e)===e){var o=n.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,s=t;var c=a,g=r;try{g()}catch(x){ie(s,c,x)}}}n=n.next}while(n!==i)}}catch(x){ie(t,t.return,x)}}function tu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Fc(t,a)}catch(n){ie(e,e.return,n)}}}function au(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ie(e,t,n)}}function ds(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(s){ie(e,t,s)}}function Dt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(s){ie(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){ie(e,t,s)}else a.current=null}function nu(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(s){ie(e,e.return,s)}}function Bo(e,t,a){try{var n=e.stateNode;Xm(n,e.type,a,t),n[Le]=t}catch(s){ie(e,e.return,s)}}function su(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ht));else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ko(e,t,a),e=e.sibling;e!==null;)ko(e,t,a),e=e.sibling}function xi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(xi(e,t,a),e=e.sibling;e!==null;)xi(e,t,a),e=e.sibling}function iu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ee(t,n,a),t[Oe]=e,t[Le]=a}catch(i){ie(e,e.return,i)}}var Vt=!1,_e=!1,Do=!1,lu=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Tm(e,t){if(e=e.containerInfo,$o=Yi,e=vc(e),jl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var s=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,r=-1,c=-1,g=0,x=0,S=e,b=null;t:for(;;){for(var y;S!==a||s!==0&&S.nodeType!==3||(r=o+s),S!==i||n!==0&&S.nodeType!==3||(c=o+n),S.nodeType===3&&(o+=S.nodeValue.length),(y=S.firstChild)!==null;)b=S,S=y;for(;;){if(S===e)break t;if(b===a&&++g===s&&(r=o),b===i&&++x===n&&(c=o),(y=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=y}a=r===-1||c===-1?null:{start:r,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(er={focusedElem:e,selectionRange:a},Yi=!1,Te=t;Te!==null;)if(t=Te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Te=e;else for(;Te!==null;){switch(t=Te,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,s=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var z=Ja(a.type,s);e=n.getSnapshotBeforeUpdate(z,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(H){ie(a,a.return,H)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)nr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Te=e;break}Te=t.return}}function ou(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),n&4&&cs(5,a);break;case 1:if(Xt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ie(a,a.return,o)}else{var s=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ie(a,a.return,o)}}n&64&&tu(a),n&512&&ds(a,a.return);break;case 3:if(Xt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fc(e,t)}catch(o){ie(a,a.return,o)}}break;case 27:t===null&&n&4&&iu(a);case 26:case 5:Xt(e,a),t===null&&n&4&&nu(a),n&512&&ds(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),n&4&&du(e,a);break;case 13:Xt(e,a),n&4&&uu(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hm.bind(null,a),nf(e,a))));break;case 22:if(n=a.memoizedState!==null||Vt,!n){t=t!==null&&t.memoizedState!==null||_e,s=Vt;var i=_e;Vt=n,(_e=t)&&!i?It(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Vt=s,_e=i}break;case 30:break;default:Xt(e,a)}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ol(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Ze=!1;function Qt(e,t,a){for(a=a.child;a!==null;)cu(e,t,a),a=a.sibling}function cu(e,t,a){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(En,a)}catch{}switch(a.tag){case 26:_e||Dt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||Dt(a,t);var n=ge,s=Ze;xa(a.type)&&(ge=a.stateNode,Ze=!1),Qt(e,t,a),ys(a.stateNode),ge=n,Ze=s;break;case 5:_e||Dt(a,t);case 6:if(n=ge,s=Ze,ge=null,Qt(e,t,a),ge=n,Ze=s,ge!==null)if(Ze)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(a.stateNode)}catch(i){ie(a,t,i)}else try{ge.removeChild(a.stateNode)}catch(i){ie(a,t,i)}break;case 18:ge!==null&&(Ze?(e=ge,tp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dn(e)):tp(ge,a.stateNode));break;case 4:n=ge,s=Ze,ge=a.stateNode.containerInfo,Ze=!0,Qt(e,t,a),ge=n,Ze=s;break;case 0:case 11:case 14:case 15:ha(2,a,t),_e||ha(4,a,t),Qt(e,t,a);break;case 1:_e||(Dt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&au(a,t,n)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:_e=(n=_e)||a.memoizedState!==null,Qt(e,t,a),_e=n;break;default:Qt(e,t,a)}}function du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dn(e)}catch(a){ie(t,t.return,a)}}}function uu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dn(e)}catch(a){ie(t,t.return,a)}}function Bm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new lu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new lu),t;default:throw Error(d(435,e.tag))}}function wi(e,t){var a=Bm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var s=Gm.bind(null,e,n);n.then(s,s)}})}function Ve(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var s=a[n],i=e,o=t,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(xa(r.type)){ge=r.stateNode,Ze=!1;break e}break;case 5:ge=r.stateNode,Ze=!1;break e;case 3:case 4:ge=r.stateNode.containerInfo,Ze=!0;break e}r=r.return}if(ge===null)throw Error(d(160));cu(i,o,s),ge=null,Ze=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pu(t,e),t=t.sibling}var At=null;function pu(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ve(t,e),Qe(e),n&4&&(ha(3,e,e.return),cs(3,e),ha(5,e,e.return));break;case 1:Ve(t,e),Qe(e),n&512&&(_e||a===null||Dt(a,a.return)),n&64&&Vt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var s=At;if(Ve(t,e),Qe(e),n&512&&(_e||a===null||Dt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(n){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Hn]||i[Oe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(n),s.head.insertBefore(i,s.querySelector("head > title"))),Ee(i,n,a),i[Oe]=e,Me(i),n=i;break e;case"link":var o=pp("link","href",s).get(n+(a.href||""));if(o){for(var r=0;r<o.length;r++)if(i=o[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(r,1);break t}}i=s.createElement(n),Ee(i,n,a),s.head.appendChild(i);break;case"meta":if(o=pp("meta","content",s).get(n+(a.content||""))){for(r=0;r<o.length;r++)if(i=o[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(r,1);break t}}i=s.createElement(n),Ee(i,n,a),s.head.appendChild(i);break;default:throw Error(d(468,n))}i[Oe]=e,Me(i),n=i}e.stateNode=n}else hp(s,e.type,e.stateNode);else e.stateNode=up(s,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?hp(s,e.type,e.stateNode):up(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Bo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ve(t,e),Qe(e),n&512&&(_e||a===null||Dt(a,a.return)),a!==null&&n&4&&Bo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ve(t,e),Qe(e),n&512&&(_e||a===null||Dt(a,a.return)),e.flags&32){s=e.stateNode;try{en(s,"")}catch(z){ie(e,e.return,z)}}n&4&&e.stateNode!=null&&(s=e.memoizedProps,Bo(e,s,a!==null?a.memoizedProps:s)),n&1024&&(Do=!0);break;case 6:if(Ve(t,e),Qe(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(z){ie(e,e.return,z)}}break;case 3:if(Hi=null,s=At,At=Ni(t.containerInfo),Ve(t,e),At=s,Qe(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(z){ie(e,e.return,z)}Do&&(Do=!1,hu(e));break;case 4:n=At,At=Ni(e.stateNode.containerInfo),Ve(t,e),Qe(e),At=n;break;case 12:Ve(t,e),Qe(e);break;case 31:Ve(t,e),Qe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wi(e,n)));break;case 13:Ve(t,e),Qe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Si=$e()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wi(e,n)));break;case 22:s=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,g=Vt,x=_e;if(Vt=g||s,_e=x||c,Ve(t,e),_e=x,Vt=g,Qe(e),n&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||c||Vt||_e||La(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(i=c.stateNode,s)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=c.stateNode;var S=c.memoizedProps.style,b=S!=null&&S.hasOwnProperty("display")?S.display:null;r.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(z){ie(c,c.return,z)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(z){ie(c,c.return,z)}}}else if(t.tag===18){if(a===null){c=t;try{var y=c.stateNode;s?ap(y,!0):ap(c.stateNode,!1)}catch(z){ie(c,c.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wi(e,a))));break;case 19:Ve(t,e),Qe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wi(e,n)));break;case 30:break;case 21:break;default:Ve(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(su(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var s=a.stateNode,i=Oo(e);xi(e,i,s);break;case 5:var o=a.stateNode;a.flags&32&&(en(o,""),a.flags&=-33);var r=Oo(e);xi(e,r,o);break;case 3:case 4:var c=a.stateNode.containerInfo,g=Oo(e);ko(e,g,c);break;default:throw Error(d(161))}}catch(x){ie(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ou(e,t.alternate,t),t=t.sibling}function La(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ha(4,t,t.return),La(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&au(t,t.return,a),La(t);break;case 27:ys(t.stateNode);case 26:case 5:Dt(t,t.return),La(t);break;case 22:t.memoizedState===null&&La(t);break;case 30:La(t);break;default:La(t)}e=e.sibling}}function It(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,s=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:It(s,i,a),cs(4,i);break;case 1:if(It(s,i,a),n=i,s=n.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(g){ie(n,n.return,g)}if(n=i,s=n.updateQueue,s!==null){var r=n.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Lc(c[s],r)}catch(g){ie(n,n.return,g)}}a&&o&64&&tu(i),ds(i,i.return);break;case 27:iu(i);case 26:case 5:It(s,i,a),a&&n===null&&o&4&&nu(i),ds(i,i.return);break;case 12:It(s,i,a);break;case 31:It(s,i,a),a&&o&4&&du(s,i);break;case 13:It(s,i,a),a&&o&4&&uu(s,i);break;case 22:i.memoizedState===null&&It(s,i,a),ds(i,i.return);break;case 30:break;default:It(s,i,a)}t=t.sibling}}function zo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&In(a))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&In(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mu(e,t,a,n),t=t.sibling}function mu(e,t,a,n){var s=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),s&2048&&cs(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&In(e)));break;case 12:if(s&2048){St(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,r=i.onPostCommit;typeof r=="function"&&r(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){ie(t,t.return,c)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,n):us(e,t):i._visibility&2?St(e,t,a,n):(i._visibility|=2,wn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),s&2048&&zo(o,t);break;case 24:St(e,t,a,n),s&2048&&Eo(t.alternate,t);break;default:St(e,t,a,n)}}function wn(e,t,a,n,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,r=a,c=n,g=o.flags;switch(o.tag){case 0:case 11:case 15:wn(i,o,r,c,s),cs(8,o);break;case 23:break;case 22:var x=o.stateNode;o.memoizedState!==null?x._visibility&2?wn(i,o,r,c,s):us(i,o):(x._visibility|=2,wn(i,o,r,c,s)),s&&g&2048&&zo(o.alternate,o);break;case 24:wn(i,o,r,c,s),s&&g&2048&&Eo(o.alternate,o);break;default:wn(i,o,r,c,s)}t=t.sibling}}function us(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,s=n.flags;switch(n.tag){case 22:us(a,n),s&2048&&zo(n.alternate,n);break;case 24:us(a,n),s&2048&&Eo(n.alternate,n);break;default:us(a,n)}t=t.sibling}}var ps=8192;function An(e,t,a){if(e.subtreeFlags&ps)for(e=e.child;e!==null;)fu(e,t,a),e=e.sibling}function fu(e,t,a){switch(e.tag){case 26:An(e,t,a),e.flags&ps&&e.memoizedState!==null&&gf(a,At,e.memoizedState,e.memoizedProps);break;case 5:An(e,t,a);break;case 3:case 4:var n=At;At=Ni(e.stateNode.containerInfo),An(e,t,a),At=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ps,ps=16777216,An(e,t,a),ps=n):An(e,t,a));break;default:An(e,t,a)}}function gu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Te=n,vu(n,e)}gu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bu(e),e=e.sibling}function bu(e){switch(e.tag){case 0:case 11:case 15:hs(e),e.flags&2048&&ha(9,e,e.return);break;case 3:hs(e);break;case 12:hs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ai(e)):hs(e);break;default:hs(e)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Te=n,vu(n,e)}gu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ha(8,t,t.return),Ai(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ai(t));break;default:Ai(t)}e=e.sibling}}function vu(e,t){for(;Te!==null;){var a=Te;switch(a.tag){case 0:case 11:case 15:ha(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:In(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Te=n;else e:for(a=e;Te!==null;){n=Te;var s=n.sibling,i=n.return;if(ru(n),n===a){Te=null;break e}if(s!==null){s.return=i,Te=s;break e}Te=i}}}var Om={getCacheForType:function(e){var t=De(Ae),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return De(Ae).controller.signal}},km=typeof WeakMap=="function"?WeakMap:Map,te=0,ue=null,Z=null,Q=0,se=0,lt=null,ma=!1,Sn=!1,No=!1,Kt=0,ve=0,fa=0,Fa=0,Ro=0,ot=0,jn=0,ms=null,Xe=null,Ho=!1,Si=0,yu=0,ji=1/0,_i=null,ga=null,Ce=0,ba=null,_n=null,Wt=0,Go=0,qo=null,xu=null,fs=0,Uo=null;function rt(){return(te&2)!==0&&Q!==0?Q&-Q:w.T!==null?Zo():Rr()}function wu(){if(ot===0)if((Q&536870912)===0||K){var e=zs;zs<<=1,(zs&3932160)===0&&(zs=262144),ot=e}else ot=536870912;return e=st.current,e!==null&&(e.flags|=32),ot}function Ie(e,t,a){(e===ue&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(Cn(e,0),va(e,Q,ot,!1)),Rn(e,a),((te&2)===0||e!==ue)&&(e===ue&&((te&2)===0&&(Fa|=a),ve===4&&va(e,Q,ot,!1)),zt(e))}function Au(e,t,a){if((te&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Nn(e,t),s=n?Em(e,t):Po(e,t,!0),i=n;do{if(s===0){Sn&&!n&&va(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Dm(a)){s=Po(e,t,!1),i=!1;continue}if(s===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var r=e;s=ms;var c=r.current.memoizedState.isDehydrated;if(c&&(Cn(r,o).flags|=256),o=Po(r,o,!1),o!==2){if(No&&!c){r.errorRecoveryDisabledLanes|=i,Fa|=i,s=4;break e}i=Xe,Xe=s,i!==null&&(Xe===null?Xe=i:Xe.push.apply(Xe,i))}s=o}if(i=!1,s!==2)continue}}if(s===1){Cn(e,0),va(e,t,0,!0);break}e:{switch(n=e,i=s,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:va(n,t,ot,!ma);break e;case 2:Xe=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(s=Si+300-$e(),10<s)){if(va(n,t,ot,!ma),Ns(n,0,!0)!==0)break e;Wt=t,n.timeoutHandle=$u(Su.bind(null,n,a,Xe,_i,Ho,t,ot,Fa,jn,ma,i,"Throttled",-0,0),s);break e}Su(n,a,Xe,_i,Ho,t,ot,Fa,jn,ma,i,null,-0,0)}}break}while(!0);zt(e)}function Su(e,t,a,n,s,i,o,r,c,g,x,S,b,y){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},fu(t,i,S);var z=(i&62914560)===i?Si-$e():(i&4194048)===i?yu-$e():0;if(z=bf(S,z),z!==null){Wt=i,e.cancelPendingCommit=z(ku.bind(null,e,t,i,a,n,s,o,r,c,x,S,null,b,y)),va(e,i,o,!g);return}}ku(e,t,i,a,n,s,o,r,c)}function Dm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var s=a[n],i=s.getSnapshot;s=s.value;try{if(!at(i(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,a,n){t&=~Ro,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var s=t;0<s;){var i=31-tt(s),o=1<<i;n[i]=-1,s&=~o}a!==0&&zr(e,a,t)}function Ci(){return(te&6)===0?(gs(0),!1):!0}function Yo(){if(Z!==null){if(se===0)var e=Z.return;else e=Z,Yt=Ra=null,ao(e),gn=null,Wn=0,e=Z;for(;e!==null;)eu(e.alternate,e),e=e.return;Z=null}}function Cn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Wm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wt=0,Yo(),ue=e,Z=a=qt(e.current,null),Q=t,se=0,lt=null,ma=!1,Sn=Nn(e,t),No=!1,jn=ot=Ro=Fa=fa=ve=0,Xe=ms=null,Ho=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var s=31-tt(n),i=1<<s;t|=e[s],n&=~i}return Kt=t,Vs(),a}function ju(e,t){J=null,w.H=ls,t===fn||t===ti?(t=Uc(),se=3):t===Ll?(t=Uc(),se=4):se=t===yo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,Z===null&&(ve=1,fi(e,ht(t,e.current)))}function _u(){var e=st.current;return e===null?!0:(Q&4194048)===Q?bt===null:(Q&62914560)===Q||(Q&536870912)!==0?e===bt:!1}function Cu(){var e=w.H;return w.H=ls,e===null?ls:e}function Mu(){var e=w.A;return w.A=Om,e}function Mi(){ve=4,ma||(Q&4194048)!==Q&&st.current!==null||(Sn=!0),(fa&134217727)===0&&(Fa&134217727)===0||ue===null||va(ue,Q,ot,!1)}function Po(e,t,a){var n=te;te|=2;var s=Cu(),i=Mu();(ue!==e||Q!==t)&&(_i=null,Cn(e,t)),t=!1;var o=ve;e:do try{if(se!==0&&Z!==null){var r=Z,c=lt;switch(se){case 8:Yo(),o=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var g=se;if(se=0,lt=null,Mn(e,r,c,g),a&&Sn){o=0;break e}break;default:g=se,se=0,lt=null,Mn(e,r,c,g)}}zm(),o=ve;break}catch(x){ju(e,x)}while(!0);return t&&e.shellSuspendCounter++,Yt=Ra=null,te=n,w.H=s,w.A=i,Z===null&&(ue=null,Q=0,Vs()),o}function zm(){for(;Z!==null;)Tu(Z)}function Em(e,t){var a=te;te|=2;var n=Cu(),s=Mu();ue!==e||Q!==t?(_i=null,ji=$e()+500,Cn(e,t)):Sn=Nn(e,t);e:do try{if(se!==0&&Z!==null){t=Z;var i=lt;t:switch(se){case 1:se=0,lt=null,Mn(e,t,i,1);break;case 2:case 9:if(Gc(i)){se=0,lt=null,Bu(t);break}t=function(){se!==2&&se!==9||ue!==e||(se=7),zt(e)},i.then(t,t);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:Gc(i)?(se=0,lt=null,Bu(t)):(se=0,lt=null,Mn(e,t,i,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var r=Z;if(o?mp(o):r.stateNode.complete){se=0,lt=null;var c=r.sibling;if(c!==null)Z=c;else{var g=r.return;g!==null?(Z=g,Ti(g)):Z=null}break t}}se=0,lt=null,Mn(e,t,i,5);break;case 6:se=0,lt=null,Mn(e,t,i,6);break;case 8:Yo(),ve=6;break e;default:throw Error(d(462))}}Nm();break}catch(x){ju(e,x)}while(!0);return Yt=Ra=null,w.H=n,w.A=s,te=a,Z!==null?0:(ue=null,Q=0,Vs(),ve)}function Nm(){for(;Z!==null&&!sh();)Tu(Z)}function Tu(e){var t=Wd(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Ti(e):Z=t}function Bu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Zd(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Zd(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:ao(t);default:eu(a,t),t=Z=Mc(t,Kt),t=Wd(a,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Ti(e):Z=t}function Mn(e,t,a,n){Yt=Ra=null,ao(t),gn=null,Wn=0;var s=t.return;try{if(Sm(e,s,t,a,Q)){ve=1,fi(e,ht(a,e.current)),Z=null;return}}catch(i){if(s!==null)throw Z=s,i;ve=1,fi(e,ht(a,e.current)),Z=null;return}t.flags&32768?(K||n===1?e=!0:Sn||(Q&536870912)!==0?e=!1:(ma=e=!0,(n===2||n===9||n===3||n===6)&&(n=st.current,n!==null&&n.tag===13&&(n.flags|=16384))),Ou(t,e)):Ti(t)}function Ti(e){var t=e;do{if((t.flags&32768)!==0){Ou(t,ma);return}e=t.return;var a=Cm(t.alternate,t,Kt);if(a!==null){Z=a;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ve===0&&(ve=5)}function Ou(e,t){do{var a=Mm(e.alternate,e);if(a!==null){a.flags&=32767,Z=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=a}while(e!==null);ve=6,Z=null}function ku(e,t,a,n,s,i,o,r,c){e.cancelPendingCommit=null;do Bi();while(Ce!==0);if((te&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=Bl,mh(e,a,i,o,r,c),e===ue&&(Z=ue=null,Q=0),_n=t,ba=e,Wt=a,Go=i,qo=s,xu=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qm(ks,function(){return Ru(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=w.T,w.T=null,s=O.p,O.p=2,o=te,te|=4;try{Tm(e,t,a)}finally{te=o,O.p=s,w.T=n}}Ce=1,Du(),zu(),Eu()}}function Du(){if(Ce===1){Ce=0;var e=ba,t=_n,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var n=O.p;O.p=2;var s=te;te|=4;try{pu(t,e);var i=er,o=vc(e.containerInfo),r=i.focusedElem,c=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&bc(r.ownerDocument.documentElement,r)){if(c!==null&&jl(r)){var g=c.start,x=c.end;if(x===void 0&&(x=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(x,r.value.length);else{var S=r.ownerDocument||document,b=S&&S.defaultView||window;if(b.getSelection){var y=b.getSelection(),z=r.textContent.length,H=Math.min(c.start,z),ce=c.end===void 0?H:Math.min(c.end,z);!y.extend&&H>ce&&(o=ce,ce=H,H=o);var h=gc(r,H),u=gc(r,ce);if(h&&u&&(y.rangeCount!==1||y.anchorNode!==h.node||y.anchorOffset!==h.offset||y.focusNode!==u.node||y.focusOffset!==u.offset)){var f=S.createRange();f.setStart(h.node,h.offset),y.removeAllRanges(),H>ce?(y.addRange(f),y.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),y.addRange(f))}}}}for(S=[],y=r;y=y.parentNode;)y.nodeType===1&&S.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<S.length;r++){var A=S[r];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Yi=!!$o,er=$o=null}finally{te=s,O.p=n,w.T=a}}e.current=t,Ce=2}}function zu(){if(Ce===2){Ce=0;var e=ba,t=_n,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var n=O.p;O.p=2;var s=te;te|=4;try{ou(e,t.alternate,t)}finally{te=s,O.p=n,w.T=a}}Ce=3}}function Eu(){if(Ce===4||Ce===3){Ce=0,ih();var e=ba,t=_n,a=Wt,n=xu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ce=5:(Ce=0,_n=ba=null,Nu(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ga=null),il(a),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(En,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=w.T,s=O.p,O.p=2,w.T=null;try{for(var i=e.onRecoverableError,o=0;o<n.length;o++){var r=n[o];i(r.value,{componentStack:r.stack})}}finally{w.T=t,O.p=s}}(Wt&3)!==0&&Bi(),zt(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===Uo?fs++:(fs=0,Uo=e):fs=0,gs(0)}}function Nu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,In(t)))}function Bi(){return Du(),zu(),Eu(),Ru()}function Ru(){if(Ce!==5)return!1;var e=ba,t=Go;Go=0;var a=il(Wt),n=w.T,s=O.p;try{O.p=32>a?32:a,w.T=null,a=qo,qo=null;var i=ba,o=Wt;if(Ce=0,_n=ba=null,Wt=0,(te&6)!==0)throw Error(d(331));var r=te;if(te|=4,bu(i.current),mu(i,i.current,o,a),te=r,gs(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(En,i)}catch{}return!0}finally{O.p=s,w.T=n,Nu(e,t)}}function Hu(e,t,a){t=ht(a,t),t=vo(e.stateNode,t,2),e=da(e,t,2),e!==null&&(Rn(e,2),zt(e))}function ie(e,t,a){if(e.tag===3)Hu(e,e,a);else for(;t!==null;){if(t.tag===3){Hu(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ga===null||!ga.has(n))){e=ht(a,e),a=Gd(2),n=da(t,a,2),n!==null&&(qd(a,n,t,e),Rn(n,2),zt(n));break}}t=t.return}}function Jo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new km;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(a)||(No=!0,s.add(a),e=Rm.bind(null,e,t,a),t.then(e,e))}function Rm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(Q&a)===a&&(ve===4||ve===3&&(Q&62914560)===Q&&300>$e()-Si?(te&2)===0&&Cn(e,0):Ro|=a,jn===Q&&(jn=0)),zt(e)}function Gu(e,t){t===0&&(t=Dr()),e=za(e,t),e!==null&&(Rn(e,t),zt(e))}function Hm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Gu(e,a)}function Gm(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),Gu(e,a)}function qm(e,t){return tl(e,t)}var Oi=null,Tn=null,Lo=!1,ki=!1,Fo=!1,ya=0;function zt(e){e!==Tn&&e.next===null&&(Tn===null?Oi=Tn=e:Tn=Tn.next=e),ki=!0,Lo||(Lo=!0,Ym())}function gs(e,t){if(!Fo&&ki){Fo=!0;do for(var a=!1,n=Oi;n!==null;){if(e!==0){var s=n.pendingLanes;if(s===0)var i=0;else{var o=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-tt(42|e)+1)-1,i&=s&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Pu(n,i))}else i=Q,i=Ns(n,n===ue?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Nn(n,i)||(a=!0,Pu(n,i));n=n.next}while(a);Fo=!1}}function Um(){qu()}function qu(){ki=Lo=!1;var e=0;ya!==0&&Km()&&(e=ya);for(var t=$e(),a=null,n=Oi;n!==null;){var s=n.next,i=Uu(n,t);i===0?(n.next=null,a===null?Oi=s:a.next=s,s===null&&(Tn=a)):(a=n,(e!==0||(i&3)!==0)&&(ki=!0)),n=s}Ce!==0&&Ce!==5||gs(e),ya!==0&&(ya=0)}function Uu(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-tt(i),r=1<<o,c=s[o];c===-1?((r&a)===0||(r&n)!==0)&&(s[o]=hh(r,t)):c<=t&&(e.expiredLanes|=r),i&=~r}if(t=ue,a=Q,a=Ns(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&al(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&al(n),il(a)){case 2:case 8:a=Or;break;case 32:a=ks;break;case 268435456:a=kr;break;default:a=ks}return n=Yu.bind(null,e),a=tl(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&al(n),e.callbackPriority=2,e.callbackNode=null,2}function Yu(e,t){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bi()&&e.callbackNode!==a)return null;var n=Q;return n=Ns(e,e===ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Au(e,n,t),Uu(e,$e()),e.callbackNode!=null&&e.callbackNode===a?Yu.bind(null,e):null)}function Pu(e,t){if(Bi())return null;Au(e,t,!0)}function Ym(){$m(function(){(te&6)!==0?tl(Br,Um):qu()})}function Zo(){if(ya===0){var e=hn;e===0&&(e=Ds,Ds<<=1,(Ds&261888)===0&&(Ds=256)),ya=e}return ya}function Ju(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qs(""+e)}function Lu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Pm(e,t,a,n,s){if(t==="submit"&&a&&a.stateNode===s){var i=Ju((s[Le]||null).action),o=n.submitter;o&&(t=(t=o[Le]||null)?Ju(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var r=new Js("action","action",null,n,s);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ya!==0){var c=o?Lu(s,o):new FormData(s);po(a,{pending:!0,data:c,method:s.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=o?Lu(s,o):new FormData(s),po(a,{pending:!0,data:c,method:s.method,action:i},i,c))},currentTarget:s}]})}}for(var Vo=0;Vo<Tl.length;Vo++){var Qo=Tl[Vo],Jm=Qo.toLowerCase(),Lm=Qo[0].toUpperCase()+Qo.slice(1);wt(Jm,"on"+Lm)}wt(wc,"onAnimationEnd"),wt(Ac,"onAnimationIteration"),wt(Sc,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(lm,"onTransitionRun"),wt(om,"onTransitionStart"),wt(rm,"onTransitionCancel"),wt(jc,"onTransitionEnd"),Wa("onMouseEnter",["mouseout","mouseover"]),Wa("onMouseLeave",["mouseout","mouseover"]),Wa("onPointerEnter",["pointerout","pointerover"]),Wa("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs));function Fu(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],s=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var r=n[o],c=r.instance,g=r.currentTarget;if(r=r.listener,c!==i&&s.isPropagationStopped())break e;i=r,s.currentTarget=g;try{i(s)}catch(x){Zs(x)}s.currentTarget=null,i=c}else for(o=0;o<n.length;o++){if(r=n[o],c=r.instance,g=r.currentTarget,r=r.listener,c!==i&&s.isPropagationStopped())break e;i=r,s.currentTarget=g;try{i(s)}catch(x){Zs(x)}s.currentTarget=null,i=c}}}}function V(e,t){var a=t[ll];a===void 0&&(a=t[ll]=new Set);var n=e+"__bubble";a.has(n)||(Zu(t,e,2,!1),a.add(n))}function Xo(e,t,a){var n=0;t&&(n|=4),Zu(a,e,n,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[Di]){e[Di]=!0,qr.forEach(function(a){a!=="selectionchange"&&(Fm.has(a)||Xo(a,!1,e),Xo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,Xo("selectionchange",!1,t))}}function Zu(e,t,a,n){switch(wp(t)){case 2:var s=xf;break;case 8:s=wf;break;default:s=ur}a=s.bind(null,t,a,e),s=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Ko(e,t,a,n,s){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var r=n.stateNode.containerInfo;if(r===s)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===s)return;o=o.return}for(;r!==null;){if(o=Xa(r),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){n=i=o;continue e}r=r.parentNode}}n=n.return}Kr(function(){var g=i,x=hl(a),S=[];e:{var b=_c.get(e);if(b!==void 0){var y=Js,z=e;switch(e){case"keypress":if(Ys(a)===0)break e;case"keydown":case"keyup":y=Gh;break;case"focusin":z="focus",y=yl;break;case"focusout":z="blur",y=yl;break;case"beforeblur":case"afterblur":y=yl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Yh;break;case wc:case Ac:case Sc:y=Bh;break;case jc:y=Jh;break;case"scroll":case"scrollend":y=jh;break;case"wheel":y=Fh;break;case"copy":case"cut":case"paste":y=kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ac;break;case"toggle":case"beforetoggle":y=Vh}var H=(t&4)!==0,ce=!H&&(e==="scroll"||e==="scrollend"),h=H?b!==null?b+"Capture":null:b;H=[];for(var u=g,f;u!==null;){var A=u;if(f=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||f===null||h===null||(A=qn(u,h),A!=null&&H.push(vs(u,A,f))),ce)break;u=u.return}0<H.length&&(b=new y(b,z,null,a,x),S.push({event:b,listeners:H}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",b&&a!==pl&&(z=a.relatedTarget||a.fromElement)&&(Xa(z)||z[Qa]))break e;if((y||b)&&(b=x.window===x?x:(b=x.ownerDocument)?b.defaultView||b.parentWindow:window,y?(z=a.relatedTarget||a.toElement,y=g,z=z?Xa(z):null,z!==null&&(ce=B(z),H=z.tag,z!==ce||H!==5&&H!==27&&H!==6)&&(z=null)):(y=null,z=g),y!==z)){if(H=ec,A="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(H=ac,A="onPointerLeave",h="onPointerEnter",u="pointer"),ce=y==null?b:Gn(y),f=z==null?b:Gn(z),b=new H(A,u+"leave",y,a,x),b.target=ce,b.relatedTarget=f,A=null,Xa(x)===g&&(H=new H(h,u+"enter",z,a,x),H.target=f,H.relatedTarget=ce,A=H),ce=A,y&&z)t:{for(H=Zm,h=y,u=z,f=0,A=h;A;A=H(A))f++;A=0;for(var R=u;R;R=H(R))A++;for(;0<f-A;)h=H(h),f--;for(;0<A-f;)u=H(u),A--;for(;f--;){if(h===u||u!==null&&h===u.alternate){H=h;break t}h=H(h),u=H(u)}H=null}else H=null;y!==null&&Vu(S,b,y,H,!1),z!==null&&ce!==null&&Vu(S,ce,z,H,!0)}}e:{if(b=g?Gn(g):window,y=b.nodeName&&b.nodeName.toLowerCase(),y==="select"||y==="input"&&b.type==="file")var $=dc;else if(rc(b))if(uc)$=nm;else{$=tm;var N=em}else y=b.nodeName,!y||y.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?g&&ul(g.elementType)&&($=dc):$=am;if($&&($=$(e,g))){cc(S,$,a,x);break e}N&&N(e,b,g),e==="focusout"&&g&&b.type==="number"&&g.memoizedProps.value!=null&&dl(b,"number",b.value)}switch(N=g?Gn(g):window,e){case"focusin":(rc(N)||N.contentEditable==="true")&&(sn=N,_l=g,Vn=null);break;case"focusout":Vn=_l=sn=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,yc(S,a,x);break;case"selectionchange":if(im)break;case"keydown":case"keyup":yc(S,a,x)}var L;if(wl)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else nn?lc(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(nc&&a.locale!=="ko"&&(nn||X!=="onCompositionStart"?X==="onCompositionEnd"&&nn&&(L=Wr()):(na=x,gl="value"in na?na.value:na.textContent,nn=!0)),N=zi(g,X),0<N.length&&(X=new tc(X,e,null,a,x),S.push({event:X,listeners:N}),L?X.data=L:(L=oc(a),L!==null&&(X.data=L)))),(L=Xh?Ih(e,a):Kh(e,a))&&(X=zi(g,"onBeforeInput"),0<X.length&&(N=new tc("onBeforeInput","beforeinput",null,a,x),S.push({event:N,listeners:X}),N.data=L)),Pm(S,e,g,a,x)}Fu(S,t)})}function vs(e,t,a){return{instance:e,listener:t,currentTarget:a}}function zi(e,t){for(var a=t+"Capture",n=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=qn(e,a),s!=null&&n.unshift(vs(e,s,i)),s=qn(e,t),s!=null&&n.push(vs(e,s,i))),e.tag===3)return n;e=e.return}return[]}function Zm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vu(e,t,a,n,s){for(var i=t._reactName,o=[];a!==null&&a!==n;){var r=a,c=r.alternate,g=r.stateNode;if(r=r.tag,c!==null&&c===n)break;r!==5&&r!==26&&r!==27||g===null||(c=g,s?(g=qn(a,i),g!=null&&o.unshift(vs(a,g,c))):s||(g=qn(a,i),g!=null&&o.push(vs(a,g,c)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Vm=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(Vm,`
`).replace(Qm,"")}function Xu(e,t){return t=Qu(t),Qu(e)===t}function re(e,t,a,n,s,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||en(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&en(e,""+n);break;case"className":Hs(e,"class",n);break;case"tabIndex":Hs(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Hs(e,a,n);break;case"style":Xr(e,n,i);break;case"data":if(t!=="object"){Hs(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=qs(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&re(e,t,"name",s.name,s,null),re(e,t,"formEncType",s.formEncType,s,null),re(e,t,"formMethod",s.formMethod,s,null),re(e,t,"formTarget",s.formTarget,s,null)):(re(e,t,"encType",s.encType,s,null),re(e,t,"method",s.method,s,null),re(e,t,"target",s.target,s,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=qs(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ht);break;case"onScroll":n!=null&&V("scroll",e);break;case"onScrollEnd":n!=null&&V("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(s.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=qs(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":V("beforetoggle",e),V("toggle",e),Rs(e,"popover",n);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Rs(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ah.get(a)||a,Rs(e,a,n))}}function Wo(e,t,a,n,s,i){switch(a){case"style":Xr(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(s.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?en(e,n):(typeof n=="number"||typeof n=="bigint")&&en(e,""+n);break;case"onScroll":n!=null&&V("scroll",e);break;case"onScrollEnd":n!=null&&V("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ur.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),i=e[Le]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,s),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,s);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Rs(e,a,n)}}}function Ee(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",e),V("load",e);var n=!1,s=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":n=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:re(e,t,i,o,a,null)}}s&&re(e,t,"srcSet",a.srcSet,a,null),n&&re(e,t,"src",a.src,a,null);return;case"input":V("invalid",e);var r=i=o=s=null,c=null,g=null;for(n in a)if(a.hasOwnProperty(n)){var x=a[n];if(x!=null)switch(n){case"name":s=x;break;case"type":o=x;break;case"checked":c=x;break;case"defaultChecked":g=x;break;case"value":i=x;break;case"defaultValue":r=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,t));break;default:re(e,t,n,x,a,null)}}Fr(e,i,r,c,g,o,s,!1);return;case"select":V("invalid",e),n=o=i=null;for(s in a)if(a.hasOwnProperty(s)&&(r=a[s],r!=null))switch(s){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":n=r;default:re(e,t,s,r,a,null)}t=i,a=o,e.multiple=!!n,t!=null?$a(e,!!n,t,!1):a!=null&&$a(e,!!n,a,!0);return;case"textarea":V("invalid",e),i=s=n=null;for(o in a)if(a.hasOwnProperty(o)&&(r=a[o],r!=null))switch(o){case"value":n=r;break;case"defaultValue":s=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:re(e,t,o,r,a,null)}Vr(e,n,s,i);return;case"option":for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null)&&(c==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":re(e,t,c,n,a,null));return;case"dialog":V("beforetoggle",e),V("toggle",e),V("cancel",e),V("close",e);break;case"iframe":case"object":V("load",e);break;case"video":case"audio":for(n=0;n<bs.length;n++)V(bs[n],e);break;case"image":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"embed":case"source":case"link":V("error",e),V("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:re(e,t,g,n,a,null)}return;default:if(ul(t)){for(x in a)a.hasOwnProperty(x)&&(n=a[x],n!==void 0&&Wo(e,t,x,n,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null&&re(e,t,r,n,a,null))}function Xm(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,o=null,r=null,c=null,g=null,x=null;for(y in a){var S=a[y];if(a.hasOwnProperty(y)&&S!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":c=S;default:n.hasOwnProperty(y)||re(e,t,y,null,n,S)}}for(var b in n){var y=n[b];if(S=a[b],n.hasOwnProperty(b)&&(y!=null||S!=null))switch(b){case"type":i=y;break;case"name":s=y;break;case"checked":g=y;break;case"defaultChecked":x=y;break;case"value":o=y;break;case"defaultValue":r=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:y!==S&&re(e,t,b,y,n,S)}}cl(e,o,r,c,g,x,i,s);return;case"select":y=o=r=b=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":y=c;default:n.hasOwnProperty(i)||re(e,t,i,null,n,c)}for(s in n)if(i=n[s],c=a[s],n.hasOwnProperty(s)&&(i!=null||c!=null))switch(s){case"value":b=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:i!==c&&re(e,t,s,i,n,c)}t=r,a=o,n=y,b!=null?$a(e,!!a,b,!1):!!n!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":y=b=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:re(e,t,r,null,n,s)}for(o in n)if(s=n[o],i=a[o],n.hasOwnProperty(o)&&(s!=null||i!=null))switch(o){case"value":b=s;break;case"defaultValue":y=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:s!==i&&re(e,t,o,s,n,i)}Zr(e,b,y);return;case"option":for(var z in a)b=a[z],a.hasOwnProperty(z)&&b!=null&&!n.hasOwnProperty(z)&&(z==="selected"?e.selected=!1:re(e,t,z,null,n,b));for(c in n)b=n[c],y=a[c],n.hasOwnProperty(c)&&b!==y&&(b!=null||y!=null)&&(c==="selected"?e.selected=b&&typeof b!="function"&&typeof b!="symbol":re(e,t,c,b,n,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in a)b=a[H],a.hasOwnProperty(H)&&b!=null&&!n.hasOwnProperty(H)&&re(e,t,H,null,n,b);for(g in n)if(b=n[g],y=a[g],n.hasOwnProperty(g)&&b!==y&&(b!=null||y!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,t));break;default:re(e,t,g,b,n,y)}return;default:if(ul(t)){for(var ce in a)b=a[ce],a.hasOwnProperty(ce)&&b!==void 0&&!n.hasOwnProperty(ce)&&Wo(e,t,ce,void 0,n,b);for(x in n)b=n[x],y=a[x],!n.hasOwnProperty(x)||b===y||b===void 0&&y===void 0||Wo(e,t,x,b,n,y);return}}for(var h in a)b=a[h],a.hasOwnProperty(h)&&b!=null&&!n.hasOwnProperty(h)&&re(e,t,h,null,n,b);for(S in n)b=n[S],y=a[S],!n.hasOwnProperty(S)||b===y||b==null&&y==null||re(e,t,S,b,n,y)}function Iu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Im(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var s=a[n],i=s.transferSize,o=s.initiatorType,r=s.duration;if(i&&r&&Iu(o)){for(o=0,r=s.responseEnd,n+=1;n<a.length;n++){var c=a[n],g=c.startTime;if(g>r)break;var x=c.transferSize,S=c.initiatorType;x&&Iu(S)&&(c=c.responseEnd,o+=x*(c<r?1:(r-g)/(c-g)))}if(--n,t+=8*(i+o)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $o=null,er=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function Ku(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wu(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ar=null;function Km(){var e=window.event;return e&&e.type==="popstate"?e===ar?!1:(ar=e,!0):(ar=null,!1)}var $u=typeof setTimeout=="function"?setTimeout:void 0,Wm=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,$m=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(e){return ep.resolve(null).then(e).catch(ef)}:$u;function ef(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function tp(e,t){var a=t,n=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(s),Dn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")ys(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ys(a);for(var i=a.firstChild;i;){var o=i.nextSibling,r=i.nodeName;i[Hn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&ys(e.ownerDocument.body);a=s}while(a);Dn(t)}function ap(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function nr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nr(a),ol(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tf(e,t,a,n){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Hn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function af(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vt(e.nextSibling),e===null))return null;return e}function np(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function sr(e){return e.data==="$?"||e.data==="$~"}function ir(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nf(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var lr=null;function sp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ip(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function lp(e,t,a){switch(t=Ei(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function ys(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ol(e)}var yt=new Map,op=new Set;function Ni(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $t=O.d;O.d={f:sf,r:lf,D:of,C:rf,L:cf,m:df,X:pf,S:uf,M:hf};function sf(){var e=$t.f(),t=Ci();return e||t}function lf(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?jd(t):$t.r(e)}var Bn=typeof document>"u"?null:document;function rp(e,t,a){var n=Bn;if(n&&typeof t=="string"&&t){var s=ut(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),op.has(s)||(op.add(s),e={rel:e,crossOrigin:a,href:t},n.querySelector(s)===null&&(t=n.createElement("link"),Ee(t,"link",e),Me(t),n.head.appendChild(t)))}}function of(e){$t.D(e),rp("dns-prefetch",e,null)}function rf(e,t){$t.C(e,t),rp("preconnect",e,t)}function cf(e,t,a){$t.L(e,t,a);var n=Bn;if(n&&e&&t){var s='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+ut(a.imageSizes)+'"]')):s+='[href="'+ut(e)+'"]';var i=s;switch(t){case"style":i=On(e);break;case"script":i=kn(e)}yt.has(i)||(e=q({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(i,e),n.querySelector(s)!==null||t==="style"&&n.querySelector(xs(i))||t==="script"&&n.querySelector(ws(i))||(t=n.createElement("link"),Ee(t,"link",e),Me(t),n.head.appendChild(t)))}}function df(e,t){$t.m(e,t);var a=Bn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(e)+'"]',i=s;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kn(e)}if(!yt.has(i)&&(e=q({rel:"modulepreload",href:e},t),yt.set(i,e),a.querySelector(s)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ws(i)))return}n=a.createElement("link"),Ee(n,"link",e),Me(n),a.head.appendChild(n)}}}function uf(e,t,a){$t.S(e,t,a);var n=Bn;if(n&&e){var s=Ka(n).hoistableStyles,i=On(e);t=t||"default";var o=s.get(i);if(!o){var r={loading:0,preload:null};if(o=n.querySelector(xs(i)))r.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(i))&&or(e,a);var c=o=n.createElement("link");Me(c),Ee(c,"link",e),c._p=new Promise(function(g,x){c.onload=g,c.onerror=x}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ri(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:r},s.set(i,o)}}}function pf(e,t){$t.X(e,t);var a=Bn;if(a&&e){var n=Ka(a).hoistableScripts,s=kn(e),i=n.get(s);i||(i=a.querySelector(ws(s)),i||(e=q({src:e,async:!0},t),(t=yt.get(s))&&rr(e,t),i=a.createElement("script"),Me(i),Ee(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(s,i))}}function hf(e,t){$t.M(e,t);var a=Bn;if(a&&e){var n=Ka(a).hoistableScripts,s=kn(e),i=n.get(s);i||(i=a.querySelector(ws(s)),i||(e=q({src:e,async:!0,type:"module"},t),(t=yt.get(s))&&rr(e,t),i=a.createElement("script"),Me(i),Ee(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(s,i))}}function cp(e,t,a,n){var s=(s=F.current)?Ni(s):null;if(!s)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=On(a.href),a=Ka(s).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=On(a.href);var i=Ka(s).hoistableStyles,o=i.get(e);if(o||(s=s.ownerDocument||s,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=s.querySelector(xs(e)))&&!i._p&&(o.instance=i,o.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),i||mf(s,e,a,o.state))),t&&n===null)throw Error(d(528,""));return o}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kn(a),a=Ka(s).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function On(e){return'href="'+ut(e)+'"'}function xs(e){return'link[rel="stylesheet"]['+e+"]"}function dp(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function mf(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ee(t,"link",a),Me(t),e.head.appendChild(t))}function kn(e){return'[src="'+ut(e)+'"]'}function ws(e){return"script[async]"+e}function up(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(n)return t.instance=n,Me(n),n;var s=q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Me(n),Ee(n,"style",s),Ri(n,a.precedence,e),t.instance=n;case"stylesheet":s=On(a.href);var i=e.querySelector(xs(s));if(i)return t.state.loading|=4,t.instance=i,Me(i),i;n=dp(a),(s=yt.get(s))&&or(n,s),i=(e.ownerDocument||e).createElement("link"),Me(i);var o=i;return o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),Ee(i,"link",n),t.state.loading|=4,Ri(i,a.precedence,e),t.instance=i;case"script":return i=kn(a.src),(s=e.querySelector(ws(i)))?(t.instance=s,Me(s),s):(n=a,(s=yt.get(i))&&(n=q({},a),rr(n,s)),e=e.ownerDocument||e,s=e.createElement("script"),Me(s),Ee(s,"link",n),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Ri(n,a.precedence,e));return t.instance}function Ri(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,i=s,o=0;o<n.length;o++){var r=n[o];if(r.dataset.precedence===t)i=r;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function rr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hi=null;function pp(e,t,a){if(Hi===null){var n=new Map,s=Hi=new Map;s.set(a,n)}else s=Hi,n=s.get(a),n||(n=new Map,s.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var i=a[s];if(!(i[Hn]||i[Oe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var r=n.get(o);r?r.push(i):n.set(o,[i])}}return n}function hp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ff(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function mp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gf(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=On(n.href),i=t.querySelector(xs(s));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Me(i);return}i=t.ownerDocument||t,n=dp(n),(s=yt.get(s))&&or(n,s),i=i.createElement("link"),Me(i);var o=i;o._p=new Promise(function(r,c){o.onload=r,o.onerror=c}),Ee(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Gi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var cr=0;function bf(e,t){return e.stylesheets&&e.count===0&&Ui(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&cr===0&&(cr=62500*Im());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>cr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(s)}}:null}function Gi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function Ui(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach(vf,e),qi=null,Gi.call(e))}function vf(e,t){if(!(t.state.loading&4)){var a=qi.get(e);if(a)var n=a.get(null);else{a=new Map,qi.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var o=s[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}s=t.instance,o=s.getAttribute("data-precedence"),i=a.get(o)||n,i===n&&a.set(null,s),a.set(o,s),this.count++,n=Gi.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var As={$$typeof:Ne,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function yf(e,t,a,n,s,i,o,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.hiddenUpdates=nl(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function fp(e,t,a,n,s,i,o,r,c,g,x,S){return e=new yf(e,t,a,o,c,g,x,S,r),t=1,i===!0&&(t|=24),i=nt(3,null,null,t),e.current=i,i.stateNode=e,t=Yl(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Fl(i),e}function gp(e){return e?(e=rn,e):rn}function bp(e,t,a,n,s,i){s=gp(s),n.context===null?n.context=s:n.pendingContext=s,n=ca(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=da(e,n,t),a!==null&&(Ie(a,e,t),es(a,e,t))}function vp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function dr(e,t){vp(e,t),(e=e.alternate)&&vp(e,t)}function yp(e){if(e.tag===13||e.tag===31){var t=za(e,67108864);t!==null&&Ie(t,e,67108864),dr(e,67108864)}}function xp(e){if(e.tag===13||e.tag===31){var t=rt();t=sl(t);var a=za(e,t);a!==null&&Ie(a,e,t),dr(e,t)}}var Yi=!0;function xf(e,t,a,n){var s=w.T;w.T=null;var i=O.p;try{O.p=2,ur(e,t,a,n)}finally{O.p=i,w.T=s}}function wf(e,t,a,n){var s=w.T;w.T=null;var i=O.p;try{O.p=8,ur(e,t,a,n)}finally{O.p=i,w.T=s}}function ur(e,t,a,n){if(Yi){var s=pr(n);if(s===null)Ko(e,t,n,Pi,a),Ap(e,n);else if(Sf(s,e,t,a,n))n.stopPropagation();else if(Ap(e,n),t&4&&-1<Af.indexOf(e)){for(;s!==null;){var i=Ia(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ta(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var c=1<<31-tt(o);r.entanglements[1]|=c,o&=~c}zt(i),(te&6)===0&&(ji=$e()+500,gs(0))}}break;case 31:case 13:r=za(i,2),r!==null&&Ie(r,i,2),Ci(),dr(i,2)}if(i=pr(n),i===null&&Ko(e,t,n,Pi,a),i===s)break;s=i}s!==null&&n.stopPropagation()}else Ko(e,t,n,null,a)}}function pr(e){return e=hl(e),hr(e)}var Pi=null;function hr(e){if(Pi=null,e=Xa(e),e!==null){var t=B(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=T(t),e!==null)return e;e=null}else if(a===31){if(e=G(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pi=e,null}function wp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lh()){case Br:return 2;case Or:return 8;case ks:case oh:return 32;case kr:return 268435456;default:return 32}default:return 32}}var mr=!1,wa=null,Aa=null,Sa=null,Ss=new Map,js=new Map,ja=[],Af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,t){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Ss.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(t.pointerId)}}function _s(e,t,a,n,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Ia(t),t!==null&&yp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Sf(e,t,a,n,s){switch(t){case"focusin":return wa=_s(wa,e,t,a,n,s),!0;case"dragenter":return Aa=_s(Aa,e,t,a,n,s),!0;case"mouseover":return Sa=_s(Sa,e,t,a,n,s),!0;case"pointerover":var i=s.pointerId;return Ss.set(i,_s(Ss.get(i)||null,e,t,a,n,s)),!0;case"gotpointercapture":return i=s.pointerId,js.set(i,_s(js.get(i)||null,e,t,a,n,s)),!0}return!1}function Sp(e){var t=Xa(e.target);if(t!==null){var a=B(t);if(a!==null){if(t=a.tag,t===13){if(t=T(a),t!==null){e.blockedOn=t,Hr(e.priority,function(){xp(a)});return}}else if(t===31){if(t=G(a),t!==null){e.blockedOn=t,Hr(e.priority,function(){xp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);pl=n,a.target.dispatchEvent(n),pl=null}else return t=Ia(a),t!==null&&yp(t),e.blockedOn=a,!1;t.shift()}return!0}function jp(e,t,a){Ji(e)&&a.delete(t)}function jf(){mr=!1,wa!==null&&Ji(wa)&&(wa=null),Aa!==null&&Ji(Aa)&&(Aa=null),Sa!==null&&Ji(Sa)&&(Sa=null),Ss.forEach(jp),js.forEach(jp)}function Li(e,t){e.blockedOn===t&&(e.blockedOn=null,mr||(mr=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,jf)))}var Fi=null;function _p(e){Fi!==e&&(Fi=e,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){Fi===e&&(Fi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],s=e[t+2];if(typeof n!="function"){if(hr(n||a)===null)continue;break}var i=Ia(a);i!==null&&(e.splice(t,3),t-=3,po(i,{pending:!0,data:s,method:a.method,action:n},n,s))}}))}function Dn(e){function t(c){return Li(c,e)}wa!==null&&Li(wa,e),Aa!==null&&Li(Aa,e),Sa!==null&&Li(Sa,e),Ss.forEach(t),js.forEach(t);for(var a=0;a<ja.length;a++){var n=ja[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)Sp(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var s=a[n],i=a[n+1],o=s[Le]||null;if(typeof i=="function")o||_p(a);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(s=i,o=i[Le]||null)r=o.formAction;else if(hr(s)!==null)continue}else r=o.action;typeof r=="function"?a[n+1]=r:(a.splice(n,3),n-=3),_p(a)}}}function Cp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return s=o})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function fr(e){this._internalRoot=e}Zi.prototype.render=fr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=rt();bp(a,n,e,t,null,null)},Zi.prototype.unmount=fr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bp(e.current,2,null,e,null,null),Ci(),t[Qa]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ja.length&&t!==0&&t<ja[a].priority;a++);ja.splice(a,0,e),a===0&&Sp(e)}};var Mp=v.version;if(Mp!=="19.2.7")throw Error(d(527,Mp,"19.2.7"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=_(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var _f={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{En=Vi.inject(_f),et=Vi}catch{}}return Ms.createRoot=function(e,t){if(!C(e))throw Error(d(299));var a=!1,n="",s=Ed,i=Nd,o=Rd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fp(e,1,!1,null,null,a,n,null,s,i,o,Cp),e[Qa]=t.current,Io(e),new fr(t)},Ms.hydrateRoot=function(e,t,a){if(!C(e))throw Error(d(299));var n=!1,s="",i=Ed,o=Nd,r=Rd,c=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=fp(e,1,!0,t,a??null,n,s,c,i,o,r,Cp),t.context=gp(null),a=t.current,n=rt(),n=sl(n),s=ca(n),s.callback=null,da(a,s,n),a=n,t.current.lanes=a,Rn(t,a),zt(t),e[Qa]=t.current,Io(e),new Zi(t)},Ms.version="19.2.7",Ms}var Hp;function Nf(){if(Hp)return vr.exports;Hp=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(v){console.error(v)}}return m(),vr.exports=Ef(),vr.exports}var Rf=Nf();const Hf=m=>m.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gf=m=>m.replace(/^([A-Z])|[\s-_]+(\w)/g,(v,M,d)=>d?d.toUpperCase():M.toLowerCase()),Gp=m=>{const v=Gf(m);return v.charAt(0).toUpperCase()+v.slice(1)},Zp=(...m)=>m.filter((v,M,d)=>!!v&&v.trim()!==""&&d.indexOf(v)===M).join(" ").trim(),qf=m=>{for(const v in m)if(v.startsWith("aria-")||v==="role"||v==="title")return!0};var Uf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Yf=pe.forwardRef(({color:m="currentColor",size:v=24,strokeWidth:M=2,absoluteStrokeWidth:d,className:C="",children:B,iconNode:T,...G},D)=>pe.createElement("svg",{ref:D,...Uf,width:v,height:v,stroke:m,strokeWidth:d?Number(M)*24/Number(v):M,className:Zp("lucide",C),...!B&&!qf(G)&&{"aria-hidden":"true"},...G},[...T.map(([_,W])=>pe.createElement(_,W)),...Array.isArray(B)?B:[B]]));const ne=(m,v)=>{const M=pe.forwardRef(({className:d,...C},B)=>pe.createElement(Yf,{ref:B,iconNode:v,className:Zp(`lucide-${Hf(Gp(m))}`,`lucide-${m}`,d),...C}));return M.displayName=Gp(m),M};const Pf=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Jf=ne("arrow-down",Pf);const Lf=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ct=ne("arrow-right",Lf);const Ff=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Zf=ne("book-marked",Ff);const Vf=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Vp=ne("book-open",Vf);const Qf=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],qp=ne("boxes",Qf);const Xf=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],If=ne("chevron-down",Xf);const Kf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qp=ne("circle-check",Kf);const Wf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],Sr=ne("circle-dollar-sign",Wf);const $f=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],jr=ne("clock-3",$f);const eg=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],tg=ne("cloud",eg);const ag=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Up=ne("code-xml",ag);const ng=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],_t=ne("external-link",ng);const sg=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],Xp=ne("file-check-2",sg);const ig=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ip=ne("file-text",ig);const lg=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",key:"pgg06f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m21.5 10.5-8-8",key:"a17d9x"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m8.5 7.5 8 8",key:"1oyaui"}]],Kp=ne("gavel",lg);const og=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],rg=ne("github",og);const cg=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],Za=ne("landmark",cg);const dg=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]],ug=ne("library-big",dg);const pg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],hg=ne("menu",pg);const mg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],fg=ne("moon",mg);const gg=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],bg=ne("rocket",gg);const vg=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Wp=ne("scale",vg);const yg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Bs=ne("search",yg);const xg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qi=ne("shield-check",xg);const wg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Ag=ne("sun",wg);const Sg=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],jg=ne("terminal",Sg);const _g=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]],Cg=ne("wallet-cards",_g);const Mg=[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]],Ar=ne("waypoints",Mg);const Tg=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],Bg=ne("workflow",Tg);const Og=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$p=ne("x",Og),eh=[{route:"/",legacyPath:"index.html",title:"Welcome to Budget Matter",description:"How Federal budget is planned, formulated, executed, and reported.",html:`<h1 class="my-4">Welcome to Budget Matter</h1>

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
            <a href="/e8_resolution" "="">8. Budget Resolution</a>
            <br><a href="/e9_authorization" "="">9. Budget Authorization</a>
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
        <param name="display_count" value="yes"></object></div>`}],kg=[{title:"A-11 · Section 20 — Terms and Concepts",summary:"A visual, searchable reference to the Federal budget vocabulary and budget-authority concepts defined in OMB Circular A-11 Section 20.",route:"/knowledge/a-11/section-20",category:"Reference",readingTime:"20 min",featured:!0},{title:"Federal Budget and Appropriations Law",summary:"An in-depth professional introduction to the constitutional framework, core statutes, execution controls, historical cases, and real-world appropriation decisions.",route:"/knowledge/federal-budget-laws",category:"Reference",readingTime:"25 min",featured:!0},{title:"Website Transformation and AI Studio Publishing",summary:"The production blueprint used to modernize Budget Matter and publish it at a custom ai.studio address.",route:"/build-and-publish",category:"Engineering",readingTime:"12 min",featured:!0},{title:"The Federal Budget Process",summary:"A visual tour of formulation, congressional enactment, and agency execution from beginning to end.",route:"/process",category:"Guide",readingTime:"10 min"},{title:"Federal Budget Legal Framework",summary:"A current visual map of the constitutional, statutory, and administrative controls that shape federal budgeting.",route:"/policy",category:"Reference",readingTime:"10 min"},{title:"Budget Spend Plan Model",summary:"An applied portfolio example for turning appropriated resources into an executable financial plan.",route:"/project7/project7",category:"Model",readingTime:"6 min"}],Dg={"/tableau-1-citibike":{label:"Citi Bike (Jan 2020)",view:"Citi_15824261544430/CitiBikeJan2020",preview:"https://public.tableau.com/static/images/Ci/Citi_15824261544430/CitiBikeJan2020/1_rss.png",desktopHeight:840,mobileHeight:2477},"/tableau-2-fed-avg-salary":{label:"Federal Employee Salary",view:"Labor-Fed-092018/DB",preview:"https://public.tableau.com/static/images/La/Labor-Fed-092018/DB/1_rss.png",desktopHeight:870,mobileHeight:1450},"/tableau-3-covid19":{label:"COVID-19 Dashboard",view:"PsTableau-03/Dashboard1",preview:"https://public.tableau.com/static/images/Ps/PsTableau-03/Dashboard1/1_rss.png",desktopHeight:840,mobileHeight:1177},"/project13/project13":{label:"Federal Government Spending Dashboard",view:"FederalGovernmentSpendingDashboard/Dashboard1",preview:"https://public.tableau.com/static/images/Fe/FederalGovernmentSpendingDashboard/Dashboard1/1_rss.png",desktopHeight:840,mobileHeight:1277},"/project14/project14":{label:"Budget and Execution Historical Table",view:"Budget_15927103644200/Dashboard1",preview:"https://public.tableau.com/static/images/Bu/Budget_15927103644200/Dashboard1/1_rss.png",desktopHeight:840,mobileHeight:1177}},zg="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";function Eg({project:m}){pe.useEffect(()=>{if(document.getElementById("tableau-embedding-api"))return;const C=document.createElement("script");C.id="tableau-embedding-api",C.type="module",C.src=zg,document.head.appendChild(C)},[]);const v=`https://public.tableau.com/views/${m.view}`,M=window.innerWidth<=600?m.mobileHeight:m.desktopHeight,d=pe.createElement("tableau-viz",{src:v,width:"100%",height:String(M),toolbar:"bottom","hide-tabs":"",device:window.innerWidth<=600?"phone":"desktop","aria-label":m.label});return l.jsxs("section",{className:"tableau-embed","aria-label":`${m.label} interactive visualization`,children:[l.jsxs("div",{className:"tableau-embed-frame",style:{minHeight:`${M}px`,backgroundImage:`linear-gradient(rgba(7,28,42,.1),rgba(7,28,42,.1)),url("${m.preview}")`},children:[l.jsxs("div",{className:"tableau-loading","aria-hidden":"true",children:[l.jsx("span",{}),"Loading interactive dashboard…"]}),d]}),l.jsxs("div",{className:"tableau-embed-footer",children:[l.jsx("span",{children:"Interactive visualization hosted by Tableau Public"}),l.jsxs("a",{href:v,target:"_blank",rel:"noreferrer","aria-label":`Open ${m.label} on Tableau Public`,children:["Open in Tableau Public ",l.jsx(_t,{size:16})]})]})]})}const Ng=[{year:"1787–1789",title:"Constitutional power of the purse",body:"Article I gives Congress the taxing, borrowing, and spending powers. The Appropriations Clause makes an enacted appropriation a legal condition for drawing money from the Treasury and requires public accounts."},{year:"1870–1906",title:"Antideficiency controls take shape",body:"Congress first prohibited departments from exceeding appropriations, then strengthened the rule, restricted voluntary services, added penalties, and developed the apportionment system."},{year:"1921",title:"Budget and Accounting Act",body:"The Act required a consolidated presidential budget, created the Bureau of the Budget—later OMB—and established the General Accounting Office, now GAO."},{year:"1974",title:"Congressional Budget and Impoundment Control Act",body:"Congress created its Budget Committees and CBO, established the budget-resolution and reconciliation framework, and prescribed the exclusive statutory process for rescissions and deferrals."},{year:"1985–1987",title:"Deficit control and separation of powers",body:"Gramm–Rudman–Hollings introduced sequestration. After Bowsher v. Synar invalidated the Comptroller General’s executive role, Congress revised the enforcement mechanism."},{year:"1990",title:"Budget Enforcement and credit reform",body:"The Budget Enforcement Act shifted attention to discretionary caps and PAYGO; the Federal Credit Reform Act moved loans and guarantees to subsidy-cost budgeting."},{year:"1990–2010",title:"Management, performance, and accountability",body:"The CFO Act, GPRA, and GPRA Modernization Act linked resources to financial control, auditable reporting, strategic goals, and measurable performance."},{year:"2010–2013",title:"PAYGO and sequestration return",body:"Statutory PAYGO created rolling scorecards for direct spending and revenue laws. The Budget Control Act of 2011 triggered the 2013 sequestration and capped discretionary funding through FY2021."},{year:"2021–2026",title:"Transparency and renewed impoundment scrutiny",body:"Congress required online budget justifications and apportionment transparency. GAO’s recent decisions and FY2025 Antideficiency Act compilation show that execution law remains an active oversight field."}],Rg=[{rule:"Purpose",question:"May this account buy it?",answer:"Start with the appropriation and authorizing law. Apply the necessary-expense test: the item must bear a logical relationship to the appropriation, not be prohibited, and not belong to another more specific appropriation.",example:"An agency wants to pay a public-awareness campaign from an IT modernization account. Mission relevance alone is insufficient if the expense is outside the account’s statutory object."},{rule:"Time",question:"Is this a bona fide need of the fund’s period?",answer:"Identify whether the money is annual, multiple-year, or no-year. An annual appropriation generally serves needs arising during that fiscal year; severable services and nonseverable undertakings require different analyses.",example:"A year-end order cannot merely stockpile next year’s routine needs. A properly documented, nonseverable project may be charged when the need arises even if performance continues later."},{rule:"Amount",question:"Is enough legally available?",answer:"Check the account balance, statutory ceilings and floors, OMB apportionment, agency allotments, commitments, and prior obligations before creating a binding obligation.",example:"A valid contract that exceeds an allotment can trigger 31 U.S.C. §1517 even when the parent appropriation still has an unobligated balance."},{rule:"Movement",question:"Transfer or reprogramming?",answer:"A transfer moves budget authority between appropriation accounts and requires statutory authority. A reprogramming shifts funds within an account; it may be constrained by law, report language, and committee-notification procedures.",example:"Moving funds from Operations to Procurement is not an internal management adjustment—it needs transfer authority and compliance with any transfer ceiling."},{rule:"Continuing resolution",question:"What may continue before full-year funding?",answer:"Read the CR itself and OMB guidance. Agencies normally operate at a prescribed rate and under restrictions on new starts, accelerated obligations, or actions that would preempt final congressional decisions.",example:"A program authorized in permanent law may still lack usable annual budget authority. Under a CR, a new production line may be barred even when the account receives a temporary rate."},{rule:"Lapse or withholding",question:"Must activity stop, or may funds be delayed?",answer:"During a lapse, continue only activities with available funding or a recognized legal exception. With enacted funds, an executive delay must be programmatic or comply with the Impoundment Control Act; policy disagreement is not independent authority.",example:"Personnel protecting life or property may incur limited obligations during a shutdown, but payment generally awaits an appropriation. A policy pause cannot be held through expiration to defeat Congress’s decision."}],Hg=[["Constitution Annotated: Appropriations Clause","https://constitution.congress.gov/browse/article-1/section-9/clause-7/"],["GAO Red Book","https://www.gao.gov/legal/appropriations-law/red-book"],["GAO Antideficiency Act resources","https://www.gao.gov/legal/appropriations-law/resources"],["GAO Impoundment Control Act decisions","https://www.gao.gov/legal/appropriations-law/impoundment-control-act"],["OMB Circular A-11","https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf"],["CRS: Executive Budget Process","https://www.congress.gov/crs-product/R47019"],["CRS: Federal Funding Gaps","https://www.congress.gov/crs-products/product/pdf/RS/RS20348"],["Title 31, Chapter 13","https://uscode.house.gov/view.xhtml?edition=prelim&req=granuleid%3AUSC-prelim-title31-chapter13"]];function Gg({onNavigate:m}){return pe.useEffect(()=>{document.title="Federal Budget and Appropriations Law | Budget Matter"},[]),l.jsxs("main",{className:"law-paper",children:[l.jsx("section",{className:"law-paper-hero",children:l.jsxs("div",{className:"law-paper-hero-content",children:[l.jsx("p",{className:"eyebrow",children:"Budget Matter professional reference · updated July 13, 2026"}),l.jsx("h1",{children:"Federal Budget and Appropriations Law"}),l.jsx("p",{className:"law-deck",children:"A practical introduction to what the law requires, why the controls exist, how money moves from legislation to execution, and what history teaches when constitutional boundaries are tested."}),l.jsxs("div",{className:"law-paper-meta",children:[l.jsx("span",{children:"Professional introduction"}),l.jsx("span",{children:"25 minute read"}),l.jsx("span",{children:"Primary government sources"})]})]})}),l.jsxs("article",{className:"native-shell law-paper-body",children:[l.jsxs("aside",{className:"law-scope",children:[l.jsx(Qi,{}),l.jsxs("div",{children:[l.jsx("strong",{children:"Scope and method"}),l.jsx("p",{children:"This paper explains the generally applicable federal framework. An agency must still read the current appropriation, authorizing law, general provisions, account language, OMB apportionment, and its own fund-control regulations. It is educational analysis, not a legal opinion for a particular transaction."})]})]}),l.jsxs("section",{className:"law-introduction",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"The governing idea"}),l.jsx("h2",{children:"Constitutional foundation"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"Federal budget law is the operating system of representative government. Article I, section 9, clause 7 provides that money may be drawn from the Treasury only as a consequence of appropriations made by law. That short command does three jobs: Congress decides whether public money is available; executive officers may execute but not rewrite that decision; and the public is entitled to an account of receipts and expenditures."}),l.jsxs("p",{children:["An appropriation is therefore more than financing. It is legislation that defines authority through ",l.jsx("strong",{children:"purpose, time, and amount"}),". These dimensions convert policy into administrable boundaries. They also make accountability possible: an auditor, inspector general, appropriations committee, court, or taxpayer can compare what Congress enacted with what the executive branch obligated and spent."]}),l.jsx("p",{children:"The President’s budget remains a recommendation. Congress may accept, reject, restructure, or ignore it. Once legislation is enacted, however, the President must faithfully execute the resulting law, subject to the limited flexibility Congress has granted."})]})]}),l.jsxs("section",{className:"law-control-stack","aria-label":"Federal budget legal control stack",children:[l.jsx("p",{className:"section-kicker",children:"From highest authority to transaction"}),l.jsx("h2",{children:"The legal control stack"}),l.jsx("div",{className:"control-stack",children:[["01","Constitution","Congress holds the purse; the President executes enacted law."],["02","Organic and authorizing statutes","Create agencies, programs, duties, benefits, and substantive limits."],["03","Budget and appropriations statutes","Provide and condition budget authority; establish process and enforcement."],["04","Apportionment and fund controls","OMB and agencies subdivide authority to prevent deficiency or premature exhaustion."],["05","Obligation and outlay","Officials create legal liabilities, record them, receive performance, and make payment."],["06","Reporting and oversight","SF 133, financial statements, USASpending, inspectors general, GAO, and Congress test compliance."]].map(([v,M,d])=>l.jsxs("div",{children:[l.jsx("span",{children:v}),l.jsx("h3",{children:M}),l.jsx("p",{children:d})]},v))})]}),l.jsxs("section",{className:"law-workflow",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Authority becomes action"}),l.jsx("h2",{children:"How the appropriations system works"})]}),l.jsx("p",{children:"The process is not one statute or one annual vote. It is a chain of legal decisions, with a different institution responsible at each control point."})]}),l.jsx("ol",{className:"law-flow",children:[["Authorize","Congress creates or continues a program and may set eligibility, duties, or an authorization of appropriations. Authorization alone usually does not supply spendable budget authority."],["Set the fiscal plan","The congressional budget resolution coordinates totals and may provide reconciliation instructions. It is not presented to the President and does not itself fund agencies."],["Allocate and appropriate","A 302(a) allocation reaches the Appropriations Committees; 302(b) suballocations guide the 12 subcommittees. Enacted appropriations supply budget authority and legal conditions."],["Apportion and allot","OMB apportions most executive resources under the Antideficiency Act. Agencies then allot or suballot funds under approved administrative-control systems."],["Commit and obligate","A commitment reserves funds administratively; an obligation creates a definite legal liability. Obligations must satisfy purpose, time, amount, and 31 U.S.C. §1501 recording requirements."],["Perform and outlay","Goods, services, grants, or benefits are delivered and the government liquidates obligations through payments. An outlay is not the same event as an obligation."],["Report and oversee","Agencies reconcile execution data, report budgetary resources and financial results, evaluate performance, and respond to congressional, GAO, inspector-general, and public oversight."]].map(([v,M],d)=>l.jsxs("li",{children:[l.jsx("span",{children:String(d+1).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("h3",{children:v}),l.jsx("p",{children:M})]})]},v))})]}),l.jsxs("section",{className:"availability-section",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"The transaction test"}),l.jsx("h2",{children:"Purpose · Time · Amount"})]}),l.jsx("p",{children:"Appropriations law review should occur before an official commits the government—not after an invoice arrives."})]}),l.jsxs("div",{className:"availability-grid",children:[l.jsxs("article",{children:[l.jsx(Za,{}),l.jsx("h3",{children:"Purpose"}),l.jsx("strong",{children:"31 U.S.C. §1301(a)"}),l.jsx("p",{children:"Use appropriations only for the objects Congress made available. The necessary-expense doctrine fills reasonable operational gaps but cannot defeat an express prohibition or a more specific appropriation."})]}),l.jsxs("article",{children:[l.jsx(jr,{}),l.jsx("h3",{children:"Time"}),l.jsx("strong",{children:"31 U.S.C. §1502(a)"}),l.jsx("p",{children:"Charge a fixed-period appropriation only for legitimate needs of its availability period. Expired accounts remain available for limited adjustments and liquidation, not new obligations."})]}),l.jsxs("article",{children:[l.jsx(Sr,{}),l.jsx("h3",{children:"Amount"}),l.jsx("strong",{children:"31 U.S.C. §§1341, 1342, 1517"}),l.jsx("p",{children:"Do not exceed an appropriation, fund, apportionment, or allotment; do not obligate in advance of appropriations; and do not accept unauthorized voluntary services."})]})]})]}),l.jsxs("section",{className:"statute-map",children:[l.jsx("p",{className:"section-kicker",children:"What each major law contributes"}),l.jsx("h2",{children:"Core statutory architecture"}),l.jsxs("div",{className:"statute-table",role:"table","aria-label":"Major federal budget laws and their effects",children:[l.jsxs("div",{role:"row",className:"statute-header",children:[l.jsx("span",{role:"columnheader",children:"Authority"}),l.jsx("span",{role:"columnheader",children:"Why it exists"}),l.jsx("span",{role:"columnheader",children:"Operational effect"})]}),[["Budget and Accounting Act of 1921","Replace fragmented agency requests with a coordinated executive budget.","Requires a consolidated presidential submission and anchors OMB and GAO’s institutional roles."],["Congressional Budget Act of 1974","Give Congress its own comprehensive process and analytic capacity.","Creates budget resolutions, committee allocations, reconciliation, points of order, Budget Committees, and CBO."],["Impoundment Control Act of 1974","Prevent unilateral executive nullification of enacted spending choices.","Requires special messages; rescissions need enactment and deferrals are limited. Funds may not be withheld simply until they expire."],["Antideficiency Act","Keep execution within congressional and administrative limits.","Prohibits excess or advance obligations and unauthorized voluntary service; requires apportionment, discipline, and violation reports."],["31 U.S.C. §§1301, 1501, 1502, 1551–1558","Make account availability and obligation records legally meaningful.","Governs purpose, documentary evidence, bona fide needs, expiration, and closing of accounts."],["BBEDCA, Budget Enforcement Act, and Statutory PAYGO","Enforce aggregate fiscal choices after legislation is scored.","Uses caps, scorecards, points of order, or sequestration depending on the current statutory regime and enacted exceptions."],["Federal Credit Reform Act of 1990","Expose the long-term cost of direct loans and guarantees when decisions are made.","Budgets the estimated subsidy cost on a net-present-value basis and separates financing accounts."],["CFO Act, GPRA, and related reforms","Connect legal authority to reliable financial information and results.","Establishes financial leadership, audited statements, strategic plans, performance goals, reviews, and public reporting."]].map(([v,M,d])=>l.jsxs("div",{role:"row",children:[l.jsx("strong",{role:"cell",children:v}),l.jsx("span",{role:"cell",children:M}),l.jsx("span",{role:"cell",children:d})]},v))]})]}),l.jsxs("section",{className:"law-history",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Law shaped by conflict"}),l.jsx("h2",{children:"Historical case studies"})]}),l.jsx("p",{children:"Budget controls are institutional memory. Each major reform responds to a recurring failure: fragmentation, overspending, executive withholding, weak information, or breakdown in enactment."})]}),l.jsxs("div",{className:"law-case-grid",children:[l.jsxs("article",{children:[l.jsx("span",{children:"1970s · Impoundment"}),l.jsx(Kp,{}),l.jsx("h3",{children:"Nixon-era withholding and the 1974 settlement"}),l.jsx("p",{children:"President Nixon’s broad refusal to spend funds for programs he opposed intensified a constitutional dispute over whether the executive could defeat enacted appropriations. Congress answered with the Impoundment Control Act: the President may propose a rescission, but Congress must enact it; a deferral is temporary and cannot substitute executive policy for law."}),l.jsx("strong",{children:"Impact:"}),l.jsx("p",{children:"Modern execution analysis asks whether a delay is a legitimate programmatic incident or an unreported impoundment. Recent GAO decisions show this question remains live."})]}),l.jsxs("article",{children:[l.jsx("span",{children:"1985–1987 · Sequestration"}),l.jsx(Wp,{}),l.jsx("h3",{children:"Gramm–Rudman–Hollings and Bowsher v. Synar"}),l.jsx("p",{children:"Congress sought automatic deficit reduction through sequestration calculations led by the Comptroller General. In 1986, the Supreme Court held that Congress could not retain removal control over an officer exercising executive power. Congress revised the mechanism, illustrating that even fiscal enforcement must respect separation of powers."}),l.jsx("strong",{children:"Impact:"}),l.jsx("p",{children:"Today’s sequestration statutes assign execution calculations to OMB while CBO supplies independent estimates to Congress."})]}),l.jsxs("article",{children:[l.jsx("span",{children:"1995–2019 · Funding gaps"}),l.jsx(jr,{}),l.jsx("h3",{children:"Shutdowns turn the ADA into operating law"}),l.jsx("p",{children:"The FY1996 shutdowns disrupted parks, passports, research, contracting, and public services. FY2014 produced a 16-day shutdown. The FY2019 partial shutdown lasted 35 days—the longest full-day funding gap—and demonstrated that “excepted” work can continue while payment, grants, procurement, and oversight remain constrained."}),l.jsx("strong",{children:"Impact:"}),l.jsx("p",{children:"Agencies now maintain contingency plans under OMB Circular A‑11, but a plan cannot create authority that the Antideficiency Act withholds."})]}),l.jsxs("article",{children:[l.jsx("span",{children:"2011–2013 · Automatic cuts"}),l.jsx(Sr,{}),l.jsx("h3",{children:"The Budget Control Act and 2013 sequestration"}),l.jsx("p",{children:"When the Joint Select Committee process did not achieve the prescribed deficit reduction, statutory automatic reductions took effect. CBO reported lowered discretionary caps and mandatory sequestration, while agencies translated uniform legal reductions into program-level effects."}),l.jsx("strong",{children:"Impact:"}),l.jsx("p",{children:"Across-the-board enforcement can deliver a numerical target yet impose uneven operational costs, showing the difference between aggregate budget control and program management."})]}),l.jsxs("article",{children:[l.jsx("span",{children:"2019–2020 · Ukraine assistance"}),l.jsx(Za,{}),l.jsx("h3",{children:"Apportionment cannot become policy impoundment"}),l.jsx("p",{children:"GAO concluded that OMB violated the Impoundment Control Act when it withheld security assistance for a policy reason. The decision stated that faithful execution does not permit the President to replace Congress’s enacted priorities with the President’s own."}),l.jsx("strong",{children:"Impact:"}),l.jsx("p",{children:"Congress later strengthened apportionment-transparency requirements, recognizing that footnotes and timing controls can have the same practical force as statutory text."})]}),l.jsxs("article",{children:[l.jsx("span",{children:"2025–2026 · Current enforcement"}),l.jsx(Qi,{}),l.jsx("h3",{children:"FEMA, NIH, and reported ADA violations"}),l.jsx("p",{children:"In 2025, GAO found Impoundment Control Act violations in several funding-pause matters, including certain FEMA assistance and NIH grant funds. On April 30, 2026, GAO published its FY2025 compilation of agency Antideficiency Act reports."}),l.jsx("strong",{children:"Impact:"}),l.jsx("p",{children:"Appropriations law is not an archival specialty: delayed grants, staffing actions, apportionments, and execution directives can create current legal and oversight exposure."})]})]})]}),l.jsxs("section",{className:"law-timeline-section",children:[l.jsx("p",{className:"section-kicker",children:"A century of institutional design"}),l.jsx("h2",{children:"How the framework evolved"}),l.jsx("ol",{className:"law-timeline",children:Ng.map(v=>l.jsxs("li",{"data-testid":"law-timeline-entry",children:[l.jsx("time",{children:v.year}),l.jsxs("div",{children:[l.jsx("h3",{children:v.title}),l.jsx("p",{children:v.body})]})]},v.year))})]}),l.jsxs("section",{className:"use-case-section",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Apply the law before obligating"}),l.jsx("h2",{children:"Practical appropriation use cases"})]}),l.jsx("p",{children:"These examples show the questions a program manager, budget analyst, contracting officer, certifying official, counsel, or fund holder should surface early."})]}),l.jsx("div",{className:"use-case-grid",children:Rg.map((v,M)=>l.jsxs("article",{"data-testid":"appropriation-use-case",children:[l.jsxs("span",{children:[String(M+1).padStart(2,"0")," · ",v.rule]}),l.jsx("h3",{children:v.question}),l.jsx("p",{children:v.answer}),l.jsxs("aside",{children:[l.jsx("strong",{children:"Example"}),v.example]})]},v.rule))})]}),l.jsxs("section",{className:"current-framework",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Verified current · July 13, 2026"}),l.jsx("h2",{children:"Current operating framework"})]}),l.jsxs("div",{className:"current-grid",children:[l.jsxs("article",{children:[l.jsx("strong",{children:"2025 Circular A‑11"}),l.jsx("p",{children:"OMB’s August 29, 2025 edition is the current published operational instruction located in this review. It covers FY2027 formulation and execution controls including apportionment, continuing resolutions, lapses, SF 133 reporting, ADA reporting, and fund-control regulations."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"FY2025 ADA compilation"}),l.jsx("p",{children:"GAO’s April 30, 2026 compilation is the newest annual collection located in this review. Reported violations are practical evidence of where controls fail and should be used in training and risk reviews."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"Impoundment remains active"}),l.jsx("p",{children:"GAO’s 2025 decisions include findings involving FEMA and NIH funds. Officials must distinguish an ordinary programmatic delay from a withholding that requires an ICA special message or immediate release."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"Annual law still controls"}),l.jsx("p",{children:"Permanent statutes are only the foundation. Account text, provisos, general provisions, anomalies in a CR, emergency designations, transfer authorities, and later amendments can change the answer for a fiscal year."})]})]})]}),l.jsxs("section",{className:"law-practice-checklist",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"A defensible file"}),l.jsx("h2",{children:"Seven questions before approval"})]}),l.jsx("ol",{children:["What exact statute and account provide the authority?","Is the proposed object a permissible purpose, and is a more specific account available?","When did the bona fide need arise, and what is the appropriation’s availability period?","What unobligated balance is legally available after ceilings, floors, apportionments, and allotments?","Does the action create a valid obligation, and is the documentary evidence sufficient under 31 U.S.C. §1501?","Is any transfer, reprogramming, notification, competition, or approval requirement triggered?","How will the decision be recorded, reported, monitored, and explained to an independent reviewer?"].map((v,M)=>l.jsxs("li",{children:[l.jsx("span",{children:M+1}),v]},v))})]}),l.jsxs("section",{className:"law-sources",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Primary-source reading room"}),l.jsx("h2",{children:"Official sources"}),l.jsx("p",{children:"Use these sources—and the specific current appropriation—to validate an operational conclusion. Historical summaries in this paper are explanatory, not substitutes for enacted text or a formal legal decision."})]}),l.jsx("div",{children:Hg.map(([v,M])=>l.jsxs("a",{href:M,target:"_blank",rel:"noreferrer",children:[v,l.jsx(_t,{})]},M))})]}),l.jsxs("button",{className:"law-back-link",onClick:()=>m("/knowledge"),children:["Return to the Knowledge hub ",l.jsx(Ct,{})]})]})]})}const Yp=[{number:"01",title:"The Constitution",detail:"Article I assigns Congress the taxing, borrowing, and spending powers. The Appropriations Clause requires an appropriation made by law before money may be drawn from the Treasury."},{number:"02",title:"Organic and authorizing law",detail:"Creates agencies, programs, duties, eligibility rules, and substantive authorities. An authorization of appropriations may recommend funding, but normally does not itself provide budget authority."},{number:"03",title:"Budget and appropriations law",detail:"Structures formulation and congressional decision-making, provides budget authority, and sets account-specific conditions, ceilings, floors, transfer authority, and periods of availability."},{number:"04",title:"Execution controls",detail:"OMB apportionments, agency allotments, fund-control regulations, and recording rules translate enacted authority into legally controlled operating limits."},{number:"05",title:"Oversight and accountability",detail:"Congress, GAO, inspectors general, financial auditors, performance reviews, and public reporting compare execution with the law and the results Congress intended."}],Pp=[["Congress enacts","Budget authority and legal conditions"],["OMB apportions","Resources divided by time or activity"],["Agency allots","Internal legal and administrative limits"],["Official obligates","Government incurs a binding liability"],["Program performs","Goods, services, grants, or benefits delivered"],["Treasury outlays","Payment liquidates the obligation"],["Oversight tests","Law, records, results, and corrective action"]],qg=[["Budget and Accounting Act of 1921","Created the consolidated presidential budget and the institutional foundation for OMB and GAO."],["Congressional Budget Act of 1974","Created the Budget Committees and CBO, and established the budget resolution, allocations, reconciliation, and enforcement procedures."],["Impoundment Control Act of 1974","Limits executive withholding of enacted budget authority and establishes procedures for rescissions and deferrals."],["Purpose, time, and recording statutes","31 U.S.C. §§1301, 1501, 1502, and 1551–1558 govern authorized objects, bona fide needs, documentary evidence, expiration, and account closing."],["Antideficiency Act","31 U.S.C. §§1341, 1342, and 1511–1519 prohibit excess or advance obligations, unauthorized voluntary services, and violations of apportionments or allotments."],["BBEDCA and Statutory PAYGO","Provide amended sequestration and scorecard mechanisms. Their application depends on the current statute, exemptions, designations, and later legislation."],["Federal Credit Reform Act of 1990","Measures the subsidy cost of direct loans and loan guarantees on a net-present-value basis when credit decisions are made."],["CFO Act, GPRA, and related reforms","Connect budget authority with financial leadership, audited reporting, strategic planning, performance measurement, evidence, and management review."]];function Ug({onNavigate:m}){return pe.useEffect(()=>{document.title="Federal Budget Legal Framework | Budget Matter"},[]),l.jsxs("main",{className:"policy-native",children:[l.jsxs("section",{className:"policy-hero",children:[l.jsxs("div",{className:"policy-hero-copy",children:[l.jsx("p",{className:"eyebrow",children:"Power of the purse · execution · accountability"}),l.jsx("h1",{children:"Federal Budget Legal Framework"}),l.jsx("p",{children:"A current visual map of the constitutional, statutory, and administrative controls that determine who may commit public money, for what purpose, during what period, and within what amount."}),l.jsxs("div",{className:"policy-hero-actions",children:[l.jsxs("a",{href:"/knowledge/federal-budget-laws",onClick:v=>{v.preventDefault(),m("/knowledge/federal-budget-laws")},children:["Read the in-depth paper ",l.jsx(Ct,{})]}),l.jsx("span",{children:"Verified July 13, 2026"})]})]}),l.jsxs("figure",{className:"policy-hero-visual",children:[l.jsx("img",{src:"/assets/img/budgetlaws.jpg",alt:"Illustration of federal budget laws connecting Congress, agencies, public resources, and accountability"}),l.jsx("figcaption",{children:"Law connects policy decisions to controlled public spending."})]})]}),l.jsxs("div",{className:"native-shell policy-body",children:[l.jsxs("section",{className:"policy-opening",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"What this page does"}),l.jsx("h2",{children:"Law is the control system—not simply a list of acts"})]}),l.jsxs("div",{children:[l.jsx("p",{children:"The federal budget framework allocates institutional power. Congress establishes programs and provides budget authority. The President proposes a budget and executes enacted law through OMB and executive agencies. Treasury manages cash and disbursement; GAO and Congress independently oversee whether funds were used consistently with law."}),l.jsx("p",{children:"The President’s budget is a recommendation, not an appropriation. An agency’s mission, program authorization, or policy priority also does not automatically provide spendable authority. Officials must identify an enacted funding source and comply with every applicable limitation before obligating the United States."})]})]}),l.jsxs("section",{className:"authority-diagram",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Visual 01 · legal hierarchy"}),l.jsx("h2",{children:"Where spending authority comes from"})]}),l.jsx("p",{children:"Each lower layer must remain consistent with the authority above it. Administrative guidance can implement a statute; it cannot enlarge or replace one."})]}),l.jsx("div",{className:"authority-stack","aria-label":"Hierarchy of federal budget authority",children:Yp.map((v,M)=>l.jsxs("div",{"data-testid":"authority-layer",style:{"--layer":M},children:[l.jsx("span",{children:v.number}),l.jsxs("div",{children:[l.jsx("h3",{children:v.title}),l.jsx("p",{children:v.detail})]}),M<Yp.length-1&&l.jsx(Jf,{"aria-hidden":"true"})]},v.number))})]}),l.jsxs("section",{className:"execution-diagram",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Visual 02 · control flow"}),l.jsx("h2",{children:"How authority becomes accountable spending"})]}),l.jsx("p",{children:"An appropriation creates budget authority. An obligation creates a legal liability. An outlay pays it. Treating those events as interchangeable produces weak controls and misleading reporting."})]}),l.jsx("div",{className:"execution-wire","aria-label":"Flow of appropriated funds from enactment through oversight",children:Pp.map(([v,M],d)=>l.jsxs("div",{"data-testid":"execution-node",className:"execution-node",children:[l.jsx("span",{children:String(d+1).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("strong",{children:v}),l.jsx("small",{children:M})]}),d<Pp.length-1&&l.jsx(Ct,{"aria-hidden":"true"})]},v))})]}),l.jsxs("section",{className:"pta-section",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Visual 03 · transaction screen"}),l.jsx("h2",{children:"Purpose, Time, and Amount"})]}),l.jsx("p",{children:"A transaction should clear all three availability tests and the obligation-recording rules before approval."})]}),l.jsxs("div",{className:"pta-visual",children:[l.jsxs("article",{children:[l.jsx(Za,{}),l.jsx("span",{children:"1"}),l.jsx("h3",{children:"Purpose"}),l.jsx("strong",{children:"31 U.S.C. §1301(a)"}),l.jsx("p",{children:"Does the expense logically advance the appropriation’s object, avoid a prohibition, and belong to no more specific appropriation?"})]}),l.jsx("div",{className:"pta-join","aria-hidden":"true",children:"+"}),l.jsxs("article",{children:[l.jsx(jr,{}),l.jsx("span",{children:"2"}),l.jsx("h3",{children:"Time"}),l.jsx("strong",{children:"31 U.S.C. §1502(a)"}),l.jsx("p",{children:"Is this a bona fide need of the appropriation’s period of availability, with the correct treatment for the type of supply or service?"})]}),l.jsx("div",{className:"pta-join","aria-hidden":"true",children:"+"}),l.jsxs("article",{children:[l.jsx(Sr,{}),l.jsx("span",{children:"3"}),l.jsx("h3",{children:"Amount"}),l.jsx("strong",{children:"31 U.S.C. §§1341, 1517"}),l.jsx("p",{children:"Is sufficient authority available after statutory limits, apportionments, allotments, commitments, and prior obligations?"})]}),l.jsx("div",{className:"pta-equals","aria-hidden":"true",children:"="}),l.jsxs("aside",{children:[l.jsx(Qp,{}),l.jsx("strong",{children:"Legally available"}),l.jsx("small",{children:"Then document and record the obligation under 31 U.S.C. §1501."})]})]})]}),l.jsxs("section",{className:"major-authorities",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"The core architecture"}),l.jsx("h2",{children:"Major authorities and their jobs"})]}),l.jsx("p",{children:"No single “Budget Act” controls the system. These authorities solve different constitutional, process, execution, enforcement, credit, and accountability problems."})]}),l.jsx("div",{className:"authority-card-grid",children:qg.map(([v,M],d)=>l.jsxs("article",{children:[l.jsx("span",{children:String(d+1).padStart(2,"0")}),l.jsx("h3",{children:v}),l.jsx("p",{children:M})]},v))})]}),l.jsxs("section",{className:"current-law-status",children:[l.jsxs("div",{className:"status-heading",children:[l.jsx(Qi,{}),l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Accuracy update"}),l.jsx("h2",{children:"What is current—and what is historical"})]})]}),l.jsxs("div",{className:"status-grid",children:[l.jsxs("article",{children:[l.jsx("strong",{children:"Current foundation"}),l.jsx("p",{children:"The Appropriations Clause, Title 31 fiscal statutes, the 1921 and 1974 budget-process laws, the Antideficiency Act, the Impoundment Control Act, and current appropriations remain central."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"Budget Control Act caps"}),l.jsx("p",{children:"The BCA discretionary caps applied from FY2012 through FY2021 and are historical. They should not be described as today’s general discretionary limits."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"Later spending caps"}),l.jsx("p",{children:"The Fiscal Responsibility Act of 2023 separately established enforceable discretionary limits for FY2024 and FY2025. Always verify the statute applicable to the fiscal year under review."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"PAYGO and sequestration"}),l.jsx("p",{children:"Statutory PAYGO and amended mandatory-sequestration provisions require current-law analysis, including exemptions, special rules, designations, and intervening legislation."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"Current execution guidance"}),l.jsx("p",{children:"OMB Circular A‑11 dated August 29, 2025 is the current published edition located in this review and governs FY2027 formulation and budget-execution procedures."})]}),l.jsxs("article",{children:[l.jsx("strong",{children:"Current enforcement evidence"}),l.jsx("p",{children:"GAO published its FY2025 Antideficiency Act reports compilation on April 30, 2026, while recent impoundment decisions demonstrate continuing oversight of delayed or withheld funds."})]})]})]}),l.jsxs("section",{className:"institution-map",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Visual 04 · institutional roles"}),l.jsx("h2",{children:"Who controls what"})]}),l.jsx("p",{children:"Budget authority moves through distinct institutions. Effective internal controls preserve those boundaries."})]}),l.jsxs("div",{className:"institution-wire",children:[l.jsxs("article",{children:[l.jsx(Za,{}),l.jsx("h3",{children:"Congress"}),l.jsx("p",{children:"Authorizes, appropriates, establishes conditions, oversees, and changes law."})]}),l.jsx(Ar,{className:"wire-icon","aria-hidden":"true"}),l.jsxs("article",{children:[l.jsx(Kp,{}),l.jsx("h3",{children:"President & OMB"}),l.jsx("p",{children:"Propose the budget, coordinate policy, apportion resources, and supervise execution."})]}),l.jsx(Ar,{className:"wire-icon","aria-hidden":"true"}),l.jsxs("article",{children:[l.jsx(Xp,{}),l.jsx("h3",{children:"Agencies"}),l.jsx("p",{children:"Allot, obligate, deliver programs, maintain controls, and report results."})]}),l.jsx(Ar,{className:"wire-icon","aria-hidden":"true"}),l.jsxs("article",{children:[l.jsx(Wp,{}),l.jsx("h3",{children:"GAO & oversight"}),l.jsx("p",{children:"Audit, decide appropriations questions, investigate, and support congressional accountability."})]})]})]}),l.jsxs("section",{className:"paper-promotion",children:[l.jsx(Vp,{}),l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Knowledge publication"}),l.jsx("h2",{children:"Federal Budget and Appropriations Law"}),l.jsx("p",{children:"Continue with the 25-minute professional paper for historical case studies, the complete legal timeline, practical appropriation scenarios, current enforcement developments, and a seven-question pre-obligation checklist."}),l.jsx("code",{children:"https://budgetmatter.ai.studio/knowledge/federal-budget-laws"})]}),l.jsxs("a",{href:"/knowledge/federal-budget-laws",onClick:v=>{v.preventDefault(),m("/knowledge/federal-budget-laws")},children:["Federal Budget and Appropriations Law ",l.jsx(Ct,{})]})]}),l.jsxs("section",{className:"policy-sources",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Verified primary sources"}),l.jsx("h2",{children:"Source of truth"})]}),l.jsxs("div",{children:[l.jsxs("a",{href:"https://constitution.congress.gov/browse/article-1/section-9/clause-7/",target:"_blank",rel:"noreferrer",children:["Constitution Annotated ",l.jsx(_t,{})]}),l.jsxs("a",{href:"https://www.gao.gov/legal/appropriations-law/red-book",target:"_blank",rel:"noreferrer",children:["GAO Red Book ",l.jsx(_t,{})]}),l.jsxs("a",{href:"https://www.gao.gov/legal/appropriations-law/resources",target:"_blank",rel:"noreferrer",children:["Antideficiency Act ",l.jsx(_t,{})]}),l.jsxs("a",{href:"https://www.gao.gov/legal/appropriations-law/impoundment-control-act",target:"_blank",rel:"noreferrer",children:["Impoundment Control Act ",l.jsx(_t,{})]}),l.jsxs("a",{href:"https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf",target:"_blank",rel:"noreferrer",children:["OMB Circular A‑11 ",l.jsx(_t,{})]}),l.jsxs("a",{href:"https://www.congress.gov/crs-product/R47019",target:"_blank",rel:"noreferrer",children:["CRS Executive Budget Process ",l.jsx(_t,{})]})]})]})]})]})}const th=`20.0-section20-overview.md\r
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
Clarifies the usage of management funds (section 20.11).`,Jp=`20.3-terms.md\r
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
Official document issued by the Secretary of the Treasury that establishes amounts of appropriations approved by Congress that can be obligated and disbursed.`,Lp=`20.4-budget-authority.md\r
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
Budget authority and obligations may be recorded against Federal customer orders without advance when the paying account records the obligation; obligations against public orders generally require an advance.`,Cr=m=>m.replace(/\r/g,"").split(`
`);function Yg(m){const v=Cr(m),M=v.findIndex(B=>B.startsWith("20.3 "))+1,d=[];let C;for(let B=M;B<v.length;B+=1){const T=v[B].trim(),G=v[B+1]?.trim()||"";if(!T)continue;!!G&&T.length<105&&!/[.!?;:]$/.test(T)?(C={term:T,definition:"",letter:T[0].toUpperCase()},d.push(C)):C&&(C.definition+=`${C.definition?`

`:""}${T}`)}return d}function Pg(m){const v=[];let M;for(const d of Cr(m)){const C=d.trim(),B=/^\(([a-z])\)\s+(.+)$/.exec(C);B?(M={id:B[1],title:B[2],body:[]},v.push(M)):C&&M&&M.body.push(C)}return v}const Xi=Cr(th).map(m=>m.trim()),Fp=Xi.indexOf("Summary of Changes"),Jg=Xi.indexOf("Table of Contents"),jt={edition:"OMB Circular No. A–11 (2016)",contents:Xi.slice(Jg+1,Fp).filter(Boolean),changes:Xi.slice(Fp+1).filter(Boolean),terms:Yg(Jp),authority:Pg(Lp),sources:[{title:"Section 20 overview",file:"20.0-section20-overview.md",text:th},{title:"20.3 Special terms",file:"20.3-terms.md",text:Jp},{title:"20.4 Budget authority",file:"20.4-budget-authority.md",text:Lp}]},Lg=[...new Set(jt.terms.map(m=>m.letter))],Fg=["APP","CON","BOR","OFF"];function Zg({onNavigate:m}){const[v,M]=pe.useState(""),[d,C]=pe.useState("All");pe.useEffect(()=>{document.title="Section 20 — Terms and Concepts | Budget Matter"},[]);const B=pe.useMemo(()=>jt.terms.filter(T=>{const G=d==="All"||T.letter===d,D=`${T.term} ${T.definition}`.toLowerCase();return G&&D.includes(v.trim().toLowerCase())}),[d,v]);return l.jsxs("main",{className:"a11-page",children:[l.jsxs("header",{className:"a11-hero",children:[l.jsx("div",{className:"a11-hero-grid","aria-hidden":"true"}),l.jsxs("div",{className:"a11-hero-copy",children:[l.jsx("p",{className:"eyebrow",children:"OMB Circular A–11 · Knowledge Library"}),l.jsxs("h1",{children:["Section 20",l.jsx("br",{}),l.jsx("span",{children:"Terms & Concepts"})]}),l.jsx("p",{children:"A working reference for the language that connects legal authority, obligations, collections, and outlays across the Federal budget."}),l.jsxs("div",{className:"a11-hero-actions",children:[l.jsxs("a",{href:"#glossary",children:["Explore the glossary ",l.jsx(Ct,{})]}),l.jsxs("a",{className:"secondary",href:"https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/a11_current_year/s20.pdf",target:"_blank",rel:"noreferrer",children:["Official Section 20 PDF ",l.jsx(_t,{})]})]})]}),l.jsxs("aside",{className:"a11-hero-dashboard","aria-label":"Section 20 at a glance",children:[l.jsxs("div",{children:[l.jsx(ug,{}),l.jsxs("span",{children:[l.jsx("strong",{children:jt.terms.length}),l.jsx("small",{children:"defined terms"})]})]}),l.jsxs("div",{children:[l.jsx(Cg,{}),l.jsxs("span",{children:[l.jsx("strong",{children:jt.authority.length}),l.jsx("small",{children:"authority concepts"})]})]}),l.jsxs("div",{children:[l.jsx(Xp,{}),l.jsxs("span",{children:[l.jsx("strong",{children:jt.contents.length}),l.jsx("small",{children:"outline entries"})]})]}),l.jsxs("p",{children:["Source edition",l.jsx("br",{}),l.jsx("strong",{children:jt.edition})]})]})]}),l.jsxs("div",{className:"native-shell a11-body",children:[l.jsxs("section",{className:"a11-orientation",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Why this vocabulary matters"}),l.jsx("h2",{children:"One dollar. Four distinct budget events."}),l.jsx("p",{children:"Federal budget language describes where spending power comes from, when the Government makes a legal commitment, and when cash finally leaves Treasury. These are connected—but they are not interchangeable."})]}),l.jsx("div",{className:"budget-event-flow","aria-label":"Budget authority to outlay flow",children:[["01","Budget authority","Law permits obligations"],["02","Obligation","Government makes a commitment"],["03","Outlay","Payment is made"],["04","Program result","Public purpose is delivered"]].map(([T,G,D],_)=>l.jsxs("div",{children:[l.jsx("span",{children:T}),l.jsx("strong",{children:G}),l.jsx("small",{children:D}),_<3&&l.jsx(Ct,{"aria-hidden":"true"})]},G))})]}),l.jsxs("section",{className:"a11-outline",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Section map"}),l.jsx("h2",{children:"What Section 20 covers"})]}),l.jsx("p",{children:"The complete outline from the supplied overview, organized as a quick reading path."})]}),l.jsx("div",{className:"a11-outline-grid",children:jt.contents.map(T=>{const G=/^(20\.\d+|Ex–20)\s*(.*)$/.exec(T);return l.jsxs("article",{children:[l.jsx("span",{children:G?.[1]||"•"}),l.jsx("p",{children:G?.[2]||T})]},T)})})]}),l.jsxs("section",{className:"authority-explainer",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"20.4 · Budget authority"}),l.jsx("h2",{children:"The legal power behind every obligation"})]}),l.jsx("p",{children:"Budget authority is provided by law and takes several forms. The supplied material is reproduced below in full."})]}),l.jsx("blockquote",{children:"“Budget authority means the authority provided by law to incur financial obligations that will result in outlays.”"}),l.jsx("div",{className:"authority-forms",children:jt.authority.map((T,G)=>l.jsxs("article",{children:[l.jsx("span",{children:Fg[G]||T.id.toUpperCase()}),l.jsxs("div",{children:[l.jsxs("small",{children:["20.4(",T.id,")"]}),l.jsx("h3",{children:T.title}),T.body.map(D=>l.jsx("p",{children:D},D))]})]},T.id))})]}),l.jsxs("section",{className:"a11-glossary",id:"glossary",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"20.3 · Complete reference"}),l.jsx("h2",{children:"Federal budget glossary"})]}),l.jsx("p",{children:"Search definitions or filter by first letter. Every term and definition in the supplied Section 20.3 file is included."})]}),l.jsxs("div",{className:"glossary-toolbar",children:[l.jsxs("label",{children:[l.jsx(Bs,{"aria-hidden":"true"}),l.jsx("span",{className:"sr-only",children:"Search glossary"}),l.jsx("input",{value:v,onChange:T=>M(T.target.value),placeholder:"Search budget authority, rescission, outlay…"})]}),l.jsx("div",{className:"letter-filter","aria-label":"Filter glossary by letter",children:["All",...Lg].map(T=>l.jsx("button",{className:d===T?"active":"",onClick:()=>C(T),children:T},T))})]}),l.jsxs("p",{className:"glossary-count",children:[l.jsx("strong",{children:B.length})," of ",jt.terms.length," terms"]}),l.jsx("div",{className:"glossary-grid",children:B.map(T=>l.jsxs("article",{id:`term-${T.term.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[l.jsx("span",{children:T.letter}),l.jsx("h3",{children:T.term}),T.definition.split(`

`).map(G=>l.jsx("p",{children:G},G))]},T.term))}),!B.length&&l.jsxs("div",{className:"glossary-empty",children:[l.jsx(Bs,{}),l.jsx("h3",{children:"No matching terms"}),l.jsx("p",{children:"Try a broader phrase or select “All”."})]})]}),l.jsxs("section",{className:"a11-changes",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Source notes"}),l.jsx("h2",{children:"Summary of changes"})]}),l.jsx("ol",{children:jt.changes.map((T,G)=>l.jsxs("li",{children:[l.jsx("span",{children:String(G+1).padStart(2,"0")}),l.jsx("p",{children:T})]},T))})]}),l.jsxs("section",{className:"a11-source-record",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Completeness record"}),l.jsx("h2",{children:"Attached source files"})]}),l.jsx("p",{children:"Open any record to review the exact source text embedded in this page."})]}),jt.sources.map(T=>l.jsxs("details",{children:[l.jsxs("summary",{children:[l.jsx(Zf,{}),l.jsxs("span",{children:[l.jsx("strong",{children:T.title}),l.jsx("small",{children:T.file})]}),l.jsx("span",{children:"View full text"})]}),l.jsx("pre",{children:T.text})]},T.file))]}),l.jsxs("aside",{className:"a11-footer-cta",children:[l.jsx(Za,{}),l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Continue learning"}),l.jsx("h2",{children:"Put the terms in legal context."}),l.jsx("p",{children:"See how constitutional authority, appropriations statutes, and execution controls fit together."})]}),l.jsxs("button",{onClick:()=>m("/knowledge/federal-budget-laws"),children:["Open the appropriations law guide ",l.jsx(Ct,{})]})]})]})]})}function Ii(m){const d=decodeURIComponent(m.split(/[?#]/)[0]||"/").replace(/\.html?$/i,"").replace(/\/{2,}/g,"/").replace(/\/$/,"")||"/";return d.toLowerCase()==="/index"?"/":d}const Vg=[{label:"Budget Process",route:"/process",children:[["Overview","/process"],["Formulation","/formulation"],["Enactment","/enactment"],["Execution","/execution"]]},{label:"Legislative Framework",route:"/policy"},{label:"Portfolio",route:"/portfolio-1-col"},{label:"Knowledge",route:"/knowledge",children:[["Publications","/knowledge"],["A-11 · Section 20","/knowledge/a-11/section-20"],["Build & Publish","/build-and-publish"]]},{label:"About",route:"/about"}],Qg="Budget Matter is a knowledge-sharing website developed and maintained by Peter S., a federal budget professional with experience in budgeting, predictive analysis, program management, accounting, and computer programming.";function Be(m){window.history.pushState({},"",m),window.dispatchEvent(new PopStateEvent("popstate")),window.scrollTo({top:0,behavior:"smooth"})}function Xg({onSearch:m,theme:v,onThemeChange:M}){const[d,C]=pe.useState(!1);return l.jsx("header",{className:"site-header",children:l.jsxs("div",{className:"nav-shell",children:[l.jsxs("a",{className:"brand",href:"/",onClick:B=>{B.preventDefault(),Be("/"),C(!1)},children:[l.jsx("span",{className:"brand-mark",children:l.jsx(Za,{size:22})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Budget Matter"}),l.jsx("small",{children:"How the federal budget works"})]})]}),l.jsxs("nav",{className:d?"main-nav is-open":"main-nav","aria-label":"Primary navigation",children:[Vg.map(B=>l.jsxs("div",{className:"nav-group",children:[l.jsxs("a",{href:B.route,onClick:T=>{T.preventDefault(),Be(B.route),C(!1)},children:[B.label,B.children&&l.jsx(If,{size:14})]}),B.children&&l.jsx("div",{className:"nav-menu",children:B.children.map(([T,G])=>l.jsx("a",{href:G,onClick:D=>{D.preventDefault(),Be(G),C(!1)},children:T},G))})]},B.route)),l.jsxs("button",{className:"search-button mobile-search",onClick:m,children:[l.jsx(Bs,{size:18})," Search"]})]}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"theme-button",onClick:M,"aria-label":`Switch to ${v==="dark"?"light":"dark"} mode`,"aria-pressed":v==="light",title:`Use ${v==="dark"?"light":"dark"} mode`,children:v==="dark"?l.jsx(Ag,{size:19}):l.jsx(fg,{size:19})}),l.jsx("button",{className:"search-button",onClick:m,"aria-label":"Search Budget Matter",children:l.jsx(Bs,{size:19})}),l.jsx("button",{className:"menu-button",onClick:()=>C(!d),"aria-label":"Toggle navigation",children:d?l.jsx($p,{}):l.jsx(hg,{})})]})]})})}function Ig({close:m}){const[v,M]=pe.useState(""),d=pe.useMemo(()=>v.trim().length<2?[]:eh.filter(C=>`${C.title} ${C.description}`.toLowerCase().includes(v.toLowerCase())).slice(0,8),[v]);return pe.useEffect(()=>{const C=B=>B.key==="Escape"&&m();return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[m]),l.jsx("div",{className:"search-overlay",role:"dialog","aria-modal":"true","aria-label":"Search site",onMouseDown:C=>C.target===C.currentTarget&&m(),children:l.jsxs("div",{className:"search-panel",children:[l.jsxs("div",{className:"search-field",children:[l.jsx(Bs,{}),l.jsx("input",{autoFocus:!0,value:v,onChange:C=>M(C.target.value),placeholder:"Search the budget process, laws, or projects…"}),l.jsx("button",{onClick:m,"aria-label":"Close search",children:l.jsx($p,{})})]}),l.jsx("div",{className:"search-results",children:v.length<2?l.jsx("p",{children:"Try “appropriation”, “OMB”, or “spend plan”."}):d.length?d.map(C=>l.jsxs("button",{onClick:()=>{Be(C.route),m()},children:[l.jsxs("span",{children:[l.jsx("strong",{children:C.title}),l.jsx("small",{children:C.description||C.legacyPath})]}),l.jsx(Ct,{})]},C.route)):l.jsx("p",{children:"No matching pages found."})})]})})}function Kg({route:m}){const v=[["01","Formulation","/formulation"],["02","Enactment","/enactment"],["03","Execution","/execution"]],M=m.startsWith("/f")||m==="/formulation"?0:m.startsWith("/e")||m==="/enactment"?1:m.startsWith("/b")||m==="/execution"?2:-1;return M<0?null:l.jsx("div",{className:"phase-trail","aria-label":"Budget phases",children:v.map(([d,C,B],T)=>l.jsxs("a",{className:T===M?"active":"",href:B,onClick:G=>{G.preventDefault(),Be(B)},children:[l.jsx("span",{children:d}),C]},B))})}function Ts({title:m,route:v,description:M}){const d=v==="/";return l.jsxs("section",{className:d?"page-hero home-hero":"page-hero",children:[l.jsx("div",{className:"hero-grid","aria-hidden":"true"}),l.jsx("div",{className:"hero-orb","aria-hidden":"true"}),l.jsxs("div",{className:"hero-content",children:[l.jsx("p",{className:"eyebrow",children:d?"Federal budget intelligence":v.includes("project")||v.includes("portfolio")?"Applied analysis":"Budget Matter learning path"}),l.jsx("h1",{children:d?"Follow every dollar—from policy idea to public impact.":m}),l.jsx("p",{children:d?"A visual, step-by-step guide to the decisions, laws, institutions, and tools behind the United States federal budget.":M||"Explore the people, decisions, and controls behind this stage of the federal budget."}),d&&l.jsxs("div",{className:"hero-actions",children:[l.jsxs("a",{href:"/process",onClick:C=>{C.preventDefault(),Be("/process")},children:["Explore the process ",l.jsx(Ct,{size:18})]}),l.jsx("a",{className:"secondary",href:"/policy",onClick:C=>{C.preventDefault(),Be("/policy")},children:"Browse budget laws"})]})]}),d&&l.jsxs("div",{className:"hero-stat",children:[l.jsx("span",{children:"End-to-end guide"}),l.jsx("strong",{children:"22"}),l.jsx("small",{children:"connected budget steps"})]})]})}function ah({route:m,className:v,children:M}){return l.jsx("a",{className:v,href:m,onClick:d=>{d.preventDefault(),Be(m)},children:M})}function Wg(){return pe.useEffect(()=>{document.title="Knowledge and Publications | Budget Matter"},[]),l.jsxs("main",{children:[l.jsx(Ts,{title:"Knowledge and Publications",route:"/knowledge",description:"A growing library of practical guides, references, models, and engineering notes for people who work with public finance."}),l.jsxs("div",{className:"native-shell knowledge-page",children:[l.jsxs("section",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Publishing library"}),l.jsx("h2",{children:"Latest publications"})]}),l.jsx("p",{children:"Each release is useful on its own and connected to the wider Budget Matter learning path."})]}),l.jsx("div",{className:"publication-grid",children:kg.map(m=>l.jsxs("article",{className:m.featured?"publication-card featured":"publication-card",children:[l.jsxs("div",{className:"publication-meta",children:[l.jsx("span",{children:m.category}),l.jsxs("small",{children:[m.readingTime," read"]})]}),l.jsx(Ip,{"aria-hidden":"true"}),l.jsx("h3",{children:m.title}),l.jsx("p",{children:m.summary}),l.jsxs(ah,{route:m.route,children:[m.title,l.jsx(Ct,{size:17})]})]},m.route))}),l.jsxs("section",{className:"publishing-workflow",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Editorial standard"}),l.jsx("h2",{children:"How new work gets published"}),l.jsx("p",{children:"Future publications are added through one structured content record, then reviewed through the same quality gates as the application."})]}),l.jsx("ol",{children:["Draft with a clear audience and outcome","Review facts, sources, accessibility, and links","Validate tests, responsive layout, and production build","Publish, monitor, and keep the content current"].map((m,v)=>l.jsxs("li",{children:[l.jsx("span",{children:String(v+1).padStart(2,"0")}),m]},m))})]})]})]})}const $g=[{title:"Prepare the workstation",body:"Install a current Node.js LTS release and the Google Cloud CLI. Sign in, select the intended project, and confirm that billing is enabled.",command:"gcloud config set project YOUR_PROJECT_ID"},{title:"Install and validate locally",body:"Use the lockfile for repeatable dependencies. Run linting, coverage, and the optimized production build before any cloud change.",command:`npm ci
npm run lint
npm run test:coverage
npm run build`},{title:"Enable the cloud services",body:"Cloud Run serves the app, Cloud Build creates the container, and Artifact Registry stores the immutable image.",command:"gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com"},{title:"Deploy the production container",body:"Deploy from the repository root. The server listens on the Cloud Run PORT and serves the application for every route.",command:"gcloud run deploy budget-matter --source . --region us-east1 --allow-unauthenticated --port 8080 --memory 512Mi --max-instances 3"},{title:"Create or import the AI Studio app",body:"Open Google AI Studio Build, connect the same Google Cloud project, and verify the preview. Keep Gemini calls on the server if the app later uses an API key.",command:"Build → Import project or create app → Preview"},{title:"Publish the custom address",body:"Choose Publish in AI Studio, select a custom subdomain, and claim budgetmatter when it is available. AI Studio provisions and routes the published application.",command:"Publish → Custom URL → budgetmatter.ai.studio"},{title:"Verify the live release",body:"Test the root, deep links, theme control, navigation, mobile layout, and health endpoint. Confirm the custom URL serves the intended revision.",command:`https://budgetmatter.ai.studio/
https://budgetmatter.ai.studio/health`},{title:"Operate and roll back safely",body:"Keep secrets out of source control, review logs and error rates, cap scaling costs, and retain the prior revision so traffic can be restored quickly.",command:"gcloud run revisions list --service budget-matter --region us-west2"}];function eb(){pe.useEffect(()=>{document.title="Website Transformation and AI Studio Publishing | Budget Matter"},[]);const m=[{icon:Ip,title:"Legacy source",detail:"Static HTML, CSS, JavaScript, images"},{icon:Bg,title:"Content migration",detail:"Clean routes and reusable page content"},{icon:Up,title:"Modern application",detail:"React, TypeScript, Vite, Tailwind CSS"},{icon:qp,title:"Quality gates",detail:"Lint, tests, coverage, production build"},{icon:tg,title:"Cloud runtime",detail:"Buildpacks, Artifact Registry, Cloud Run"},{icon:bg,title:"Published experience",detail:"budgetmatter.ai.studio"}];return l.jsxs("main",{children:[l.jsx(Ts,{title:"From Legacy Website to Production App",route:"/build-and-publish",description:"A visual, repeatable blueprint for transforming Budget Matter into a modern application and publishing it through Google AI Studio."}),l.jsxs("div",{className:"native-shell build-page",children:[l.jsxs("section",{className:"architecture-section",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"System blueprint"}),l.jsx("h2",{children:"Transformation architecture"})]}),l.jsx("p",{children:"The experience stays recognizable while the delivery system becomes maintainable, testable, responsive, and cloud ready."})]}),l.jsx("div",{className:"architecture-flow","aria-label":"Website transformation flow",children:m.map(({icon:v,title:M,detail:d},C)=>l.jsxs("div",{className:"architecture-node",children:[l.jsx("span",{children:l.jsx(v,{})}),l.jsxs("small",{children:["Stage ",C+1]}),l.jsx("h3",{children:M}),l.jsx("p",{children:d})]},M))})]}),l.jsxs("section",{className:"transformation-detail",children:[l.jsx("div",{className:"section-heading",children:l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"What changed"}),l.jsx("h2",{children:"Modernized without losing the original"})]})}),l.jsxs("div",{className:"change-grid",children:[l.jsxs("article",{children:[l.jsx(Up,{}),l.jsx("h3",{children:"Application layer"}),l.jsx("p",{children:"Fifty legacy pages are normalized into clean client-side routes and rendered inside one accessible React shell."})]}),l.jsxs("article",{children:[l.jsx(qp,{}),l.jsx("h3",{children:"Design system"}),l.jsx("p",{children:"Shared tokens, responsive grids, dark-first theming, and reusable components replace page-specific formatting."})]}),l.jsxs("article",{children:[l.jsx(Qi,{}),l.jsx("h3",{children:"Production controls"}),l.jsx("p",{children:"Automated tests protect routing and layout; the build is versioned as an immutable container with no browser-exposed secrets."})]})]})]}),l.jsxs("section",{className:"deployment-section",children:[l.jsxs("div",{className:"section-heading",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Release runbook"}),l.jsx("h2",{children:"Publish to Google AI Studio"})]}),l.jsx("p",{children:"Complete these eight gates in order. Commands are PowerShell friendly and match this repository’s production configuration."})]}),l.jsx("ol",{className:"deployment-timeline",children:$g.map((v,M)=>l.jsxs("li",{"data-testid":"deployment-step",children:[l.jsx("span",{className:"step-number",children:String(M+1).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("h3",{children:v.title}),l.jsx("p",{children:v.body}),l.jsxs("pre",{children:[l.jsx(jg,{"aria-hidden":"true"}),l.jsx("code",{children:v.command})]})]})]},v.title))})]}),l.jsxs("section",{className:"production-checklist",children:[l.jsxs("div",{children:[l.jsx("p",{className:"section-kicker",children:"Ready for real traffic"}),l.jsx("h2",{children:"Production release checklist"}),l.jsx("p",{children:"Publishing is the start of operations, not the end of development."})]}),l.jsx("ul",{children:["No secrets or API keys in browser code","Deep-link fallback and /health endpoint verified","Keyboard navigation, contrast, and mobile layout checked","Logs, scaling limits, ownership, and rollback documented"].map(v=>l.jsxs("li",{children:[l.jsx(Qp,{}),v]},v))})]}),l.jsxs("aside",{className:"source-note",children:[l.jsxs("div",{children:[l.jsx("h2",{children:"Official references"}),l.jsx("p",{children:"Use Google’s current documentation as the source of truth when the product interface changes."})]}),l.jsxs("div",{children:[l.jsxs("a",{href:"https://ai.google.dev/gemini-api/docs/aistudio-build-mode",target:"_blank",rel:"noreferrer",children:["AI Studio Build mode ",l.jsx(_t,{})]}),l.jsxs("a",{href:"https://ai.google.dev/gemini-api/docs/aistudio-deploying",target:"_blank",rel:"noreferrer",children:["Deploy an AI Studio app ",l.jsx(_t,{})]})]})]}),l.jsxs(ah,{route:"/knowledge",className:"back-link",children:["Open the Knowledge hub ",l.jsx(Ct,{})]})]})]})}function tb({route:m}){const v=eh.find(C=>Ii(C.route)===m),M=Dg[m];if(pe.useEffect(()=>{m!=="/knowledge"&&m!=="/build-and-publish"&&m!=="/knowledge/federal-budget-laws"&&m!=="/knowledge/a-11/section-20"&&m!=="/policy"&&(document.title=`${v?.title||"Page not found"} | Budget Matter`);const C=document.querySelector(".legacy-content"),B=T=>{const G=T.target.closest("a");!G||G.target==="_blank"||G.origin!==window.location.origin||G.pathname.startsWith("/assets/")||(T.preventDefault(),Be(Ii(G.pathname)))};return C?.addEventListener("click",B),()=>C?.removeEventListener("click",B)},[v,m]),m==="/knowledge")return l.jsx(Wg,{});if(m==="/build-and-publish")return l.jsx(eb,{});if(m==="/knowledge/federal-budget-laws")return l.jsx(Gg,{onNavigate:Be});if(m==="/knowledge/a-11/section-20")return l.jsx(Zg,{onNavigate:Be});if(m==="/policy")return l.jsx(Ug,{onNavigate:Be});if(!v)return l.jsxs("main",{children:[l.jsx(Ts,{title:"Page not found",route:m,description:"The page you requested is not part of this guide."}),l.jsxs("div",{className:"not-found",children:[l.jsx(Vp,{}),l.jsx("h2",{children:"Let’s get you back on track."}),l.jsx("button",{onClick:()=>Be("/"),children:"Return home"})]})]});const d=m==="/about"?"content-shell legacy-content about-page":"content-shell legacy-content";if(M){const B=/<div class="tableauPlaceholder"[^>]*>[\s\S]*?<\/object><\/div>/i.exec(v.html),T=B?v.html.slice(0,B.index):v.html,G=B?v.html.slice(B.index+B[0].length):"";return l.jsxs("main",{children:[l.jsx(Ts,{title:v.title,route:m,description:v.description}),l.jsxs("article",{className:`${d} tableau-page`,children:[l.jsx("div",{className:"legacy-fragment",dangerouslySetInnerHTML:{__html:T}}),l.jsx(Eg,{project:M}),l.jsx("div",{className:"legacy-fragment",dangerouslySetInnerHTML:{__html:G}})]})]})}return l.jsxs("main",{children:[l.jsx(Ts,{title:v.title,route:m,description:m==="/about"?Qg:v.description}),l.jsx(Kg,{route:m}),l.jsx("article",{className:d,dangerouslySetInnerHTML:{__html:v.html}})]})}function ab(){return l.jsxs("footer",{className:"site-footer",children:[l.jsxs("div",{children:[l.jsxs("a",{className:"brand footer-brand",href:"/",onClick:m=>{m.preventDefault(),Be("/")},children:[l.jsx("span",{className:"brand-mark",children:l.jsx(Za,{size:20})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Budget Matter"}),l.jsx("small",{children:"Clear context for complex public finance"})]})]}),l.jsx("p",{children:"Educational content about the United States federal budget process."})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:"/process",onClick:m=>{m.preventDefault(),Be("/process")},children:"Process"}),l.jsx("a",{href:"/policy",onClick:m=>{m.preventDefault(),Be("/policy")},children:"Legislative Framework"}),l.jsx("a",{href:"/portfolio-1-col",onClick:m=>{m.preventDefault(),Be("/portfolio-1-col")},children:"Portfolio"}),l.jsx("a",{href:"/knowledge",onClick:m=>{m.preventDefault(),Be("/knowledge")},children:"Knowledge hub"}),l.jsxs("a",{href:"https://github.com/budgetmatter/budgetmatter.github.io",target:"_blank",rel:"noreferrer",children:[l.jsx(rg,{size:18})," GitHub"]})]})]})}function nb(){const[m,v]=pe.useState(()=>Ii(window.location.pathname)),[M,d]=pe.useState(!1),[C,B]=pe.useState(()=>window.localStorage.getItem("budget-matter-theme")==="light"?"light":"dark");return pe.useEffect(()=>{const T=()=>v(Ii(window.location.pathname));return window.addEventListener("popstate",T),()=>window.removeEventListener("popstate",T)},[]),pe.useEffect(()=>{document.documentElement.dataset.theme=C,document.documentElement.style.colorScheme=C,window.localStorage.setItem("budget-matter-theme",C)},[C]),l.jsxs(l.Fragment,{children:[l.jsx(Xg,{onSearch:()=>d(!0),theme:C,onThemeChange:()=>B(T=>T==="dark"?"light":"dark")}),l.jsx(tb,{route:m}),l.jsx(ab,{}),M&&l.jsx(Ig,{close:()=>d(!1)})]})}Rf.createRoot(document.getElementById("root")).render(l.jsx(pe.StrictMode,{children:l.jsx(nb,{})}));
