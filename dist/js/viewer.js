webpackJsonp([0],{1:function(t,e){t.exports=function(t,e,n,o,r){var i,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),o&&(u._scopeId=o);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var f=u.functional,h=f?u.render:u.beforeCreate;f?u.render=function(t,e){return c.call(e),h(t,e)}:u.beforeCreate=h?[].concat(h,c):[c]}return{esModule:i,exports:s,options:u}}},36:function(t,e,n){"use strict";function o(t){this.state=G,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}function r(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}function i(t){}function s(t){}function a(t,e){return Q(t,e)}function u(t){return t?t.replace(/^\s*|\s*$/g,""):""}function c(t,e){return t&&void 0===e?t.replace(/\s+$/,""):t&&e?t.replace(new RegExp("["+e+"]+$"),""):t}function f(t){return t?t.toLowerCase():""}function h(t){return t?t.toUpperCase():""}function p(t){return"string"==typeof t}function d(t){return"function"==typeof t}function l(t){return null!==t&&"object"==typeof t}function m(t){return l(t)&&Object.getPrototypeOf(t)==Object.prototype}function v(t){return"undefined"!=typeof Blob&&t instanceof Blob}function y(t){return"undefined"!=typeof FormData&&t instanceof FormData}function b(t,e,n){var o=r.resolve(t);return arguments.length<2?o:o.then(e,n)}function w(t,e,n){return n=n||{},d(n)&&(n=n.call(e)),T(t.bind({$vm:e,$options:n}),t,{$options:n})}function g(t,e){var n,o;if(it(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(l(t))for(o in t)Z.call(t,o)&&e.call(t[o],t[o],o);return t}function T(t){return et.call(arguments,1).forEach(function(e){E(t,e,!0)}),t}function x(t){return et.call(arguments,1).forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t}function j(t){return et.call(arguments,1).forEach(function(e){E(t,e)}),t}function E(t,e,n){for(var o in e)n&&(m(e[o])||it(e[o]))?(m(e[o])&&!m(t[o])&&(t[o]={}),it(e[o])&&!it(t[o])&&(t[o]=[]),E(t[o],e[o],n)):void 0!==e[o]&&(t[o]=e[o])}function _(t,e,n){var o=O(t),r=o.expand(e);return n&&n.push.apply(n,o.vars),r}function O(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(o){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,r,i){if(r){var s=null,a=[];if(-1!==e.indexOf(r.charAt(0))&&(s=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var e=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);a.push.apply(a,C(o,s,e[1],e[2]||e[3])),n.push(e[1])}),s&&"+"!==s){var u=",";return"?"===s?u="&":"#"!==s&&(u=s),(0!==a.length?s:"")+a.join(u)}return a.join(",")}return I(i)})}}}function C(t,e,n,o){var r=t[n],i=[];if(P(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(A(e,r,$(e)?n:null));else if("*"===o)Array.isArray(r)?r.filter(P).forEach(function(t){i.push(A(e,t,$(e)?n:null))}):Object.keys(r).forEach(function(t){P(r[t])&&i.push(A(e,r[t],t))});else{var s=[];Array.isArray(r)?r.filter(P).forEach(function(t){s.push(A(e,t))}):Object.keys(r).forEach(function(t){P(r[t])&&(s.push(encodeURIComponent(t)),s.push(A(e,r[t].toString())))}),$(e)?i.push(encodeURIComponent(n)+"="+s.join(",")):0!==s.length&&i.push(s.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==r||"&"!==e&&"?"!==e?""===r&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}function P(t){return void 0!==t&&null!==t}function $(t){return";"===t||"&"===t||"?"===t}function A(t,e,n){return e="+"===t||"#"===t?I(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function I(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function R(t,e){var n,o=this||{},r=t;return p(t)&&(r={url:t,params:e}),r=T({},R.options,o.$options,r),R.transforms.forEach(function(t){p(t)&&(t=R.transform[t]),d(t)&&(n=U(t,n,o.$vm))}),n(r)}function U(t,e,n){return function(o){return t.call(n,o,e)}}function k(t,e,n){var o,r=it(e),i=m(e);g(e,function(e,s){o=l(e)||it(e),n&&(s=n+"["+(i||o?s:"")+"]"),!n&&r?t.add(e.name,e.value):o?k(t,e,s):t.add(s,e)})}function S(t){var e=t.match(/^\[|^\{(?!\{)/),n={"[":/]$/,"{":/}$/};return e&&n[e[0]].test(t)}function H(t,e){e((t.client||(ot?gt:Tt))(t))}function M(t,e){return Object.keys(t).reduce(function(t,n){return f(e)===f(n)?n:t},null)}function B(t){if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return u(t)}function L(t){return new r(function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}})}function N(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}function q(t){var e=this||{},n=xt(e.$vm);return x(t||{},e.$options,q.options),q.interceptors.forEach(function(t){p(t)&&(t=q.interceptor[t]),d(t)&&n.use(t)}),n(new _t(t)).then(function(t){return t.ok?t:r.reject(t)},function(t){return t instanceof Error&&s(t),r.reject(t)})}function F(t,e,n,o){var r=this||{},i={};return n=st({},F.actions,n),g(n,function(n,s){n=T({url:t,params:st({},e)},o,n),i[s]=function(){return(r.$http||q)(J(n,arguments))}}),i}function J(t,e){var n,o=st({},t),r={};switch(e.length){case 2:r=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?n=e[0]:r=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return o.body=n,o.params=st({},o.params,r),o}function X(t){X.installed||(rt(t),t.url=R,t.http=q,t.resource=F,t.Promise=r,Object.defineProperties(t.prototype,{$url:{get:function(){return w(t.url,this,this.$options.url)}},$http:{get:function(){return w(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}Object.defineProperty(e,"__esModule",{value:!0});var D=n(2),W=n(37),z=n.n(W),G=2;o.reject=function(t){return new o(function(e,n){n(t)})},o.resolve=function(t){return new o(function(e,n){e(t)})},o.all=function(t){return new o(function(e,n){var r=0,i=[];0===t.length&&e(i);for(var s=0;s<t.length;s+=1)o.resolve(t[s]).then(function(n){return function(o){i[n]=o,(r+=1)===t.length&&e(i)}}(s),n)})},o.race=function(t){return new o(function(e,n){for(var r=0;r<t.length;r+=1)o.resolve(t[r]).then(e,n)})};var V=o.prototype;V.resolve=function(t){var e=this;if(e.state===G){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},V.reject=function(t){var e=this;if(e.state===G){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},V.notify=function(){var t=this;a(function(){if(t.state!==G)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],o=e[1],r=e[2],i=e[3];try{0===t.state?r("function"==typeof n?n.call(void 0,t.value):t.value):1===t.state&&("function"==typeof o?r(o.call(void 0,t.value)):i(t.value))}catch(t){i(t)}}})},V.then=function(t,e){var n=this;return new o(function(o,r){n.deferred.push([t,e,o,r]),n.notify()})},V.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=o),r.all=function(t,e){return new r(Promise.all(t),e)},r.resolve=function(t,e){return new r(Promise.resolve(t),e)},r.reject=function(t,e){return new r(Promise.reject(t),e)},r.race=function(t,e){return new r(Promise.race(t),e)};var K=r.prototype;K.bind=function(t){return this.context=t,this},K.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new r(this.promise.then(t,e),this.context)},K.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new r(this.promise.catch(t),this.context)},K.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var Q,Y={},Z=Y.hasOwnProperty,tt=[],et=tt.slice,nt=!1,ot="undefined"!=typeof window,rt=function(t){var e=t.config,n=t.nextTick;Q=n,nt=e.debug||!e.silent},it=Array.isArray,st=Object.assign||j,at=function(t,e){var n=e(t);return p(t.root)&&!/^(https?:)?\//.test(n)&&(n=c(t.root,"/")+"/"+n),n},ut=function(t,e){var n=Object.keys(R.options.params),o={},r=e(t);return g(t.params,function(t,e){-1===n.indexOf(e)&&(o[e]=t)}),o=R.params(o),o&&(r+=(-1==r.indexOf("?")?"?":"&")+o),r},ct=function(t){var e=[],n=_(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n};R.options={url:"",root:null,params:{}},R.transform={template:ct,query:ut,root:at},R.transforms=["template","query","root"],R.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){d(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},k(e,t),e.join("&").replace(/%20/g,"+")},R.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var ft=function(t){return new r(function(e){var n=new XDomainRequest,o=function(o){var r=o.type,i=0;"load"===r?i=200:"error"===r&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){},n.send(t.getBody())})},ht=ot&&"withCredentials"in new XMLHttpRequest,pt=function(t,e){if(ot){var n=R.parse(location.href),o=R.parse(t.getUrl());o.protocol===n.protocol&&o.host===n.host||(t.crossOrigin=!0,t.emulateHTTP=!1,ht||(t.client=ft))}e()},dt=function(t,e){y(t.body)?t.headers.delete("Content-Type"):l(t.body)&&t.emulateJSON&&(t.body=R.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded")),e()},lt=function(t,e){var n=t.headers.get("Content-Type")||"";l(t.body)&&0===n.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),e(function(t){return t.bodyText?b(t.text(),function(e){if(n=t.headers.get("Content-Type")||"",0===n.indexOf("application/json")||S(e))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t})},mt=function(t){return new r(function(e){var n,o,r=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),s=null;n=function(n){var r=n.type,a=0;"load"===r&&null!==s?a=200:"error"===r&&(a=500),a&&window[i]&&(delete window[i],document.body.removeChild(o)),e(t.respondWith(s,{status:a}))},window[i]=function(t){s=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[r]=i,t.timeout&&setTimeout(t.abort,t.timeout),o=document.createElement("script"),o.src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=n,o.onerror=n,document.body.appendChild(o)})},vt=function(t,e){"JSONP"==t.method&&(t.client=mt),e()},yt=function(t,e){d(t.before)&&t.before.call(this,t),e()},bt=function(t,e){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST"),e()},wt=function(t,e){g(st({},q.headers.common,t.crossOrigin?{}:q.headers.custom,q.headers[f(t.method)]),function(e,n){t.headers.has(n)||t.headers.set(n,e)}),e()},gt=function(t){return new r(function(e){var n=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":u(n.statusText)});g(u(n.getAllResponseHeaders()).split("\n"),function(t){r.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(r)};t.abort=function(){return n.abort()},t.progress&&("GET"===t.method?n.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress)),n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.responseType&&"responseType"in n&&(n.responseType=t.responseType),(t.withCredentials||t.credentials)&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.send(t.getBody())})},Tt=function(t){var e=n(40);return new r(function(n){var o,r=t.getUrl(),i=t.getBody(),s=t.method,a={};t.headers.forEach(function(t,e){a[e]=t}),e(r,{body:i,method:s,headers:a}).then(o=function(e){var o=t.respondWith(e.body,{status:e.statusCode,statusText:u(e.statusMessage)});g(e.headers,function(t,e){o.headers.set(e,t)}),n(o)},function(t){return o(t.response)})})},xt=function(t){function e(e){return new r(function(r,a){function u(){n=o.pop(),d(n)?n.call(t,e,c):(i("Invalid interceptor of type "+typeof n+", must be a function"),c())}function c(e){if(d(e))s.unshift(e);else if(l(e))return s.forEach(function(n){e=b(e,function(e){return n.call(t,e)||e},a)}),void b(e,r,a);u()}u()},t)}var n,o=[H],s=[];return l(t)||(t=null),e.use=function(t){o.push(t)},e},jt=function(t){var e=this;this.map={},g(t,function(t,n){return e.append(n,t)})};jt.prototype.has=function(t){return null!==M(this.map,t)},jt.prototype.get=function(t){var e=this.map[M(this.map,t)];return e?e.join():null},jt.prototype.getAll=function(t){return this.map[M(this.map,t)]||[]},jt.prototype.set=function(t,e){this.map[B(M(this.map,t)||t)]=[u(e)]},jt.prototype.append=function(t,e){var n=this.map[M(this.map,t)];n?n.push(u(e)):this.set(t,e)},jt.prototype.delete=function(t){delete this.map[M(this.map,t)]},jt.prototype.deleteAll=function(){this.map={}},jt.prototype.forEach=function(t,e){var n=this;g(this.map,function(o,r){g(o,function(o){return t.call(e,o,r,n)})})};var Et=function(t,e){var n=e.url,o=e.headers,r=e.status,i=e.statusText;this.url=n,this.ok=r>=200&&r<300,this.status=r||0,this.statusText=i||"",this.headers=new jt(o),this.body=t,p(t)?this.bodyText=t:v(t)&&(this.bodyBlob=t,N(t)&&(this.bodyText=L(t)))};Et.prototype.blob=function(){return b(this.bodyBlob)},Et.prototype.text=function(){return b(this.bodyText)},Et.prototype.json=function(){return b(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(Et.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var _t=function(t){this.body=null,this.params={},st(this,t,{method:h(t.method||"GET")}),this.headers instanceof jt||(this.headers=new jt(this.headers))};_t.prototype.getUrl=function(){return R(this)},_t.prototype.getBody=function(){return this.body},_t.prototype.respondWith=function(t,e){return new Et(t,st(e||{},{url:this.getUrl()}))};var Ot={Accept:"application/json, text/plain, */*"},Ct={"Content-Type":"application/json;charset=utf-8"};q.options={},q.headers={put:Ct,post:Ct,patch:Ct,delete:Ct,common:Ot,custom:{}},q.interceptor={before:yt,method:bt,jsonp:vt,json:lt,form:dt,header:wt,cors:pt},q.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){q[t]=function(e,n){return this(st(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){q[t]=function(e,n,o){return this(st(o||{},{url:e,method:t,body:n}))}}),F.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(X);var Pt=X;D.default.use(Pt),n(5),new D.default({el:"#app",render:function(t){return t(z.a)}})},37:function(t,e,n){var o=n(1)(n(38),n(39),null,null,null);t.exports=o.exports},38:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"streampets",data:function(){return{pet:{},channelId:null,clientId:null,token:null,userId:null,twitchHeaders:{},streamLabsHeaders:{},stats:{happiness:100,boredom:100,hunger:100}}},mounted:function(){this.load()},methods:{load:function(){var t=this;if(window.Twitch&&window.Twitch.ext){var e=this;window.Twitch.ext.onAuthorized(function(n){var o=n.channelId,r=n.clientId,i=n.token,s=n.userId;t.channelId=o,t.clientId=r,t.token=i,t.userId=s,t.twitchHeaders={headers:{"Client-ID":t.clientId,Accept:"application/vnd.twitchtv.v5+json"}},t.streamLabsHeaders={headers:{Authorization:"Bearer "+i}},t.$http.get("https://streamlabs.dev/api/v5/twitch-extensions/streampet/pet",{headers:{Authorization:"Bearer "+i}}).then(function(t){var t=t.body;e.stats.happiness=t.happiness,e.stats.hunger=t.hunger,e.stats.boredom=t.boredom},function(t){})}),window.Twitch.ext.listen("broadcast",function(t,n,o){var r=JSON.parse(o);e.stats.happiness=Math.round(r.payload.happiness),e.stats.hunger=Math.round(r.payload.hunger),e.stats.boredem=Math.round(r.payload.boredom)})}},heal:function(t){var e=this;$(".heal").attr("disabled",!0),setTimeout(function(){$(".heal").removeAttr("disabled")},5e3),this.$http.post("https://streamlabs.dev/api/v5/twitch-extensions/streampet/pet/heal",{stat:t},{headers:{Authorization:"Bearer "+e.token}}).then(function(t){})}}}},39:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pet-cont"},[n("h2",[t._v("Stats")]),t._v("\n  Hunger\n  "),n("div",{attrs:{id:"hunger"}},[t._v(t._s(t.stats.hunger))]),t._v("\n  Happiness\n  "),n("div",{attrs:{id:"happiness"}},[t._v(t._s(t.stats.happiness))]),t._v("\n  Boredom\n  "),n("div",{attrs:{id:"boredom"}},[t._v(t._s(t.stats.boredom))]),t._v(" "),n("div",{attrs:{id:"pet-img"}},[t._v("I am a pet")]),t._v(" "),n("button",{staticClass:"heal",on:{click:function(e){t.heal("boredom")}}},[t._v("Play")]),t._v(" "),n("button",{staticClass:"heal",on:{click:function(e){t.heal("hunger")}}},[t._v("Feed")]),t._v(" "),n("button",{staticClass:"heal",on:{click:function(e){t.heal("happiness")}}},[t._v("Hug")])])},staticRenderFns:[]}},40:function(t,e){},5:function(t,e){}},[36]);