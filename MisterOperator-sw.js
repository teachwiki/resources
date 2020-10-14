/*! AMP_SW_v0.1.4 */!function(e){self.webpackChunk=function(t,s){for(var a in s)e[a]=s[a];for(;t.length;)n[t.pop()]=1};var t={},n={0:1};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[];return t.push(Promise.resolve().then(function(){n[e]||importScripts('https://cdn.ampproject.org/sw/' + ({1:"optional-modules",2:"service-worker-remover"}[e]||e)+".js")})),Promise.all(t)},s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.ampproject.org/sw/",s(s.s=17)}([function(e,t,n){n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return d});var s=n(9);n(4);const a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let r=(()=>s.a.warn)();const i=e=>r<=e,o=e=>r=e,c=()=>r,l=s.a.error,u=function(e,t,n){const r=0===e.indexOf("group")?l:s.a[e];if(!i(r))return;if(!n||"groupCollapsed"===e&&a)return void console[e](...t);const o=["%cworkbox",`background: ${n}; color: white; padding: 2px 0.5em; `+"border-radius: 0.5em;"];console[e](...o,...t)},h=()=>{i(l)&&console.groupEnd()},d={groupEnd:h,unprefixed:{groupEnd:h}},p={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db"};Object.keys(p).forEach(e=>((e,t)=>{d[e]=function(){for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return u(e,s,t)},d.unprefixed[e]=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return u(e,n)}})(e,p[e]))},function(e,t,n){n(4);var s=function(e){let t=e;for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return s.length>0&&(t+=` :: ${JSON.stringify(s)}`),t};n.d(t,"a",function(){return a});class a extends Error{constructor(e,t){super(s(e,t)),this.name=e,this.details=t}}},function(e,t,n){n.d(t,"a",function(){return r});n(4);const s={prefix:"workbox",suffix:self.registration.scope,googleAnalytics:"googleAnalytics",precache:"precache",runtime:"runtime"},a=e=>[s.prefix,e,s.suffix].filter(e=>e.length>0).join("-"),r={updateDetails:e=>{Object.keys(s).forEach(t=>{void 0!==e[t]&&(s[t]=e[t])})},getGoogleAnalyticsName:e=>e||a(s.googleAnalytics),getPrecacheName:e=>e||a(s.precache),getRuntimeName:e=>e||a(s.runtime)}},function(e,t,n){n(1),n(4)},function(e,t,n){try{self.workbox.v["workbox:core:3.6.2"]=1}catch(e){}},function(e,t,n){n.d(t,"a",function(){return u});var s=n(6),a=n(16),r=n(1),i=(n(3),n(15)),o=n(8);n(0),n(4);const c=async e=>{let t=e.cacheName,n=e.request,a=e.event,r=e.matchOptions,i=e.plugins,o=void 0===i?[]:i;const c=await caches.open(t);let l=await c.match(n,r);for(let e of o)s.a.CACHED_RESPONSE_WILL_BE_USED in e&&(l=await e[s.a.CACHED_RESPONSE_WILL_BE_USED].call(e,{cacheName:t,request:n,event:a,matchOptions:r,cachedResponse:l}));return l},l=async e=>{let t=e.request,n=e.response,a=e.event,r=e.plugins,i=n,o=!1;for(let e of r)if(s.a.CACHE_WILL_UPDATE in e&&(o=!0,!(i=await e[s.a.CACHE_WILL_UPDATE].call(e,{request:t,response:i,event:a}))))break;return o||(i=i.ok?i:null),i||null},u={put:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cacheName,n=e.request,u=e.response,h=e.event,d=e.plugins,p=void 0===d?[]:d;if(!u)throw new r.a("cache-put-with-no-response",{url:Object(o.a)(n.url)});let m=await l({request:n,response:u,event:h,plugins:p});if(!m)return;const f=await caches.open(t),g=a.a.filter(p,s.a.CACHE_DID_UPDATE);let w=g.length>0?await c({cacheName:t,request:n}):null;try{await f.put(n,m)}catch(e){throw"QuotaExceededError"===e.name&&await Object(i.a)(),e}for(let e of g)await e[s.a.CACHE_DID_UPDATE].call(e,{cacheName:t,request:n,event:h,oldResponse:w,newResponse:m})},match:c}},function(e,t,n){n(4);t.a={CACHE_DID_UPDATE:"cacheDidUpdate",CACHE_WILL_UPDATE:"cacheWillUpdate",CACHED_RESPONSE_WILL_BE_USED:"cachedResponseWillBeUsed",FETCH_DID_FAIL:"fetchDidFail",REQUEST_WILL_FETCH:"requestWillFetch"}},function(e,t,n){n.d(t,"a",function(){return i});var s=n(1),a=(n(0),n(3),n(8),n(6)),r=n(16);n(4);const i={fetch:async e=>{let t=e.request,n=e.fetchOptions,i=e.event,o=e.plugins,c=void 0===o?[]:o;if(i&&i.preloadResponse){const e=await i.preloadResponse;if(e)return e}"string"==typeof t&&(t=new Request(t));const l=r.a.filter(c,a.a.FETCH_DID_FAIL),u=l.length>0?t.clone():null;try{for(let e of c)a.a.REQUEST_WILL_FETCH in e&&(t=await e[a.a.REQUEST_WILL_FETCH].call(e,{request:t.clone(),event:i}))}catch(e){throw new s.a("plugin-error-request-will-fetch",{thrownError:e})}const h=t.clone();try{return await fetch(t,n)}catch(e){for(let t of l)await t[a.a.FETCH_DID_FAIL].call(t,{error:e,event:i,originalRequest:u.clone(),request:h.clone()});throw e}}}},function(e,t,n){n.d(t,"a",function(){return s});n(4);const s=e=>{const t=new URL(e,location);return t.origin===location.origin?t.pathname:t.href}},function(e,t,n){n(4);t.a={debug:0,log:1,warn:2,error:3,silent:4}},function(e,t,n){n(3),n(0);try{self.workbox.v["workbox:routing:3.6.2"]=1}catch(e){}const s="GET";var a=e=>e&&"object"==typeof e?e:{handle:e};class r{constructor(e,t,n){this.handler=a(t),this.match=e,this.method=n||s}}class i extends r{constructor(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.whitelist,a=void 0===s?[/./]:s,r=n.blacklist,i=void 0===r?[]:r;super(function(){return t._match(...arguments)},e),t=this,this._whitelist=a,this._blacklist=i}_match(e){let t=e.event,n=e.url;if("navigate"!==t.request.mode)return!1;const s=n.pathname+n.search;return!this._blacklist.some(e=>e.test(s))&&!!this._whitelist.some(e=>e.test(s))}}class o extends r{constructor(e,t,n){super(t=>{let n=t.url;const s=e.exec(n.href);return s?n.origin!==location.origin&&0!==s.index?null:s.slice(1):null},t,n)}}var c=n(1);n(8);class l{constructor(){this._routes=new Map}handleRequest(e){const t=new URL(e.request.url);if(!t.protocol.startsWith("http"))return void 0;let n=null,s=null,a=null;const r=this._findHandlerAndParams(e,t);if(s=r.handler,a=r.params,n=r.route,!s&&this._defaultHandler&&(s=this._defaultHandler),!s)return void 0;let i;try{i=s.handle({url:t,event:e,params:a})}catch(e){i=Promise.reject(e)}return i&&this._catchHandler&&(i=i.catch(n=>this._catchHandler.handle({url:t,event:e,err:n}))),i}_findHandlerAndParams(e,t){const n=this._routes.get(e.request.method)||[];for(const s of n){let n=s.match({url:t,event:e});if(n)return Array.isArray(n)&&0===n.length?n=void 0:(n.constructor===Object&&0===Object.keys(n).length||!0===n)&&(n=void 0),{route:s,params:n,handler:s.handler}}return{handler:void 0,params:void 0}}setDefaultHandler(e){this._defaultHandler=a(e)}setCatchHandler(e){this._catchHandler=a(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new c.a("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new c.a("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}var u=n(2);const h=new class extends l{registerRoute(e,t){let n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";if("string"==typeof e){const a=new URL(e,location);n=new r(e=>e.url.href===a.href,t,s)}else if(e instanceof RegExp)n=new o(e,t,s);else if("function"==typeof e)n=new r(e,t,s);else{if(!(e instanceof r))throw new c.a("unsupported-route-type",{moduleName:"workbox-routing",className:"DefaultRouter",funcName:"registerRoute",paramName:"capture"});n=e}return super.registerRoute(n),n}registerNavigationRoute(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=u.a.getPrecacheName(t.cacheName),s=new i(()=>caches.match(e,{cacheName:n}).then(t=>{if(t)return t;throw new Error(`The cache ${n} did not have an entry for `+`${e}.`)}).catch(t=>fetch(e)),{whitelist:t.whitelist,blacklist:t.blacklist});return super.registerRoute(s),s}};self.addEventListener("fetch",e=>{const t=h.handleRequest(e);t&&e.respondWith(t)});var d=h;n.d(t,"a",function(){return i});t.b=d},function(e,t,n){n(3);var s=n(2),a=n(5),r=n(7);n(8),n(0);try{self.workbox.v["workbox:strategies:3.6.2"]=1}catch(e){}class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._cacheName=s.a.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions||null,this._matchOptions=e.matchOptions||null}async handle(e){let t=e.event;return this.makeRequest({event:t,request:t.request})}async makeRequest(e){let t=e.event,n=e.request;"string"==typeof n&&(n=new Request(n));let s,r=await a.a.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins});if(r)0;else{0;try{r=await this._getFromNetwork(n,t)}catch(e){s=e}0}if(s)throw s;return r}async _getFromNetwork(e,t){const n=await r.a.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),s=n.clone(),i=a.a.put({cacheName:this._cacheName,request:e,response:s,event:t,plugins:this._plugins});if(t)try{t.waitUntil(i)}catch(e){0}return n}}var o={cacheWillUpdate:e=>{let t=e.response;return t.ok||0===t.status?t:null}};class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._cacheName=s.a.getRuntimeName(e.cacheName),e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[o,...e.plugins]}else this._plugins=[o];this._networkTimeoutSeconds=e.networkTimeoutSeconds,this._fetchOptions=e.fetchOptions||null,this._matchOptions=e.matchOptions||null}async handle(e){let t=e.event;return this.makeRequest({event:t,request:t.request})}async makeRequest(e){let t=e.event,n=e.request;const s=[];"string"==typeof n&&(n=new Request(n));const a=[];let r;if(this._networkTimeoutSeconds){const e=this._getTimeoutPromise({request:n,event:t,logs:s}),i=e.id,o=e.promise;r=i,a.push(o)}const i=this._getNetworkPromise({timeoutId:r,request:n,event:t,logs:s});a.push(i);let o=await Promise.race(a);return o||(o=await i),o}_getTimeoutPromise(e){let t,n=e.request,s=(e.logs,e.event);return{promise:new Promise(e=>{t=setTimeout(async()=>{e(await this._respondFromCache({request:n,event:s}))},1e3*this._networkTimeoutSeconds)}),id:t}}async _getNetworkPromise(e){let t,n,s=e.timeoutId,i=e.request,o=(e.logs,e.event);try{n=await r.a.fetch({request:i,event:o,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){t=e}if(s&&clearTimeout(s),t||!n)n=await this._respondFromCache({request:i,event:o});else{const e=n.clone(),t=a.a.put({cacheName:this._cacheName,request:i,response:e,event:o,plugins:this._plugins});if(o)try{o.waitUntil(t)}catch(e){0}}return n}_respondFromCache(e){let t=e.event,n=e.request;return a.a.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins})}}class l{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._cacheName=s.a.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[o,...e.plugins]}else this._plugins=[o];this._fetchOptions=e.fetchOptions||null,this._matchOptions=e.matchOptions||null}async handle(e){let t=e.event;return this.makeRequest({event:t,request:t.request})}async makeRequest(e){let t=e.event,n=e.request;"string"==typeof n&&(n=new Request(n));const s=this._getFromNetwork({request:n,event:t});let r=await a.a.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins});if(r){if(t)try{t.waitUntil(s)}catch(e){0}}else r=await s;return r}async _getFromNetwork(e){let t=e.request,n=e.event;const s=await r.a.fetch({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins}),i=a.a.put({cacheName:this._cacheName,request:t,response:s.clone(),event:n,plugins:this._plugins});if(n)try{n.waitUntil(i)}catch(e){0}return s}}const u={cacheFirst:i,cacheOnly:class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._cacheName=s.a.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._matchOptions=e.matchOptions||null}async handle(e){let t=e.event;return this.makeRequest({event:t,request:t.request})}async makeRequest(e){let t=e.event,n=e.request;return"string"==typeof n&&(n=new Request(n)),await a.a.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins})}},networkFirst:c,networkOnly:class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._cacheName=s.a.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions||null}async handle(e){let t=e.event;return this.makeRequest({event:t,request:t.request})}async makeRequest(e){let t,n,s=e.event,a=e.request;"string"==typeof a&&(a=new Request(a));try{n=await r.a.fetch({request:a,event:s,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){t=e}if(t)throw t;return n}},staleWhileRevalidate:l},h={};Object.keys(u).forEach(e=>{h[e]=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(0,u[e])(Object.assign(t))}});n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l})},function(e,t,n){try{self.workbox.v["workbox:cache-expiration:3.6.2"]=1}catch(e){}n(4);class s{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=n.onupgradeneeded,a=n.onversionchange,r=void 0===a?this._onversionchange:a;this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=r,this._db=null}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let n=!1;setTimeout(()=>{n=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const s=indexedDB.open(this._name,this._version);s.onerror=(e=>t(s.error)),s.onupgradeneeded=(e=>{n?(s.transaction.abort(),e.target.result.close()):this._onupgradeneeded&&this._onupgradeneeded(e)}),s.onsuccess=(t=>{const s=t.target.result;n?s.close():(s.onversionchange=this._onversionchange,e(s))})}),this}async get(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return await this._call("get",e,"readonly",...n)}async add(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return await this._call("add",e,"readwrite",...n)}async put(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return await this._call("put",e,"readwrite",...n)}async delete(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];await this._call("delete",e,"readwrite",...n)}async deleteDatabase(){this.close(),this._db=null,await new Promise((e,t)=>{const n=indexedDB.deleteDatabase(this._name);n.onerror=(e=>t(e.target.error)),n.onblocked=(()=>t(new Error("Deletion was blocked."))),n.onsuccess=(()=>e())})}async getAll(e,t,n){return"getAll"in IDBObjectStore.prototype?await this._call("getAll",e,"readonly",t,n):await this.getAllMatching(e,{query:t,count:n})}async getAllMatching(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.transaction([e],"readonly",(n,s)=>{const a=n[e],r=t.index?a.index(t.index):a,i=[],o=t.query||null,c=t.direction||"next";r.openCursor(o,c).onsuccess=(e=>{const n=e.target.result;if(n){const e=n.primaryKey,a=n.key,r=n.value;i.push(t.includeKeys?{primaryKey:e,key:a,value:r}:r),t.count&&i.length>=t.count?s(i):n.continue()}else s(i)})})}async transaction(e,t,n){return await this.open(),await new Promise((s,a)=>{const r=this._db.transaction(e,t);r.onerror=(e=>a(e.target.error)),r.onabort=(e=>a(e.target.error)),r.oncomplete=(()=>s());const i={};for(const t of e)i[t]=r.objectStore(t);n(i,e=>s(e),()=>{a(new Error("The transaction was manually aborted")),r.abort()})})}async _call(e,t,n){for(var s=arguments.length,a=new Array(s>3?s-3:0),r=3;r<s;r++)a[r-3]=arguments[r];await this.open();return await this.transaction([t],n,(n,s)=>{n[t][e](...a).onsuccess=(e=>{s(e.target.result)})})}_onversionchange(e){this.close()}close(){this._db&&this._db.close()}}s.prototype.OPEN_TIMEOUT=2e3;const a="url",r="timestamp";var i=class{constructor(e){this._cacheName=e,this._storeName=e,this._db=new s(this._cacheName,2,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result;e.oldVersion<2&&t.objectStoreNames.contains("workbox-cache-expiration")&&t.deleteObjectStore("workbox-cache-expiration"),t.createObjectStore(this._storeName,{keyPath:a}).createIndex(r,r,{unique:!1})}async setTimestamp(e,t){await this._db.put(this._storeName,{[a]:new URL(e,location).href,[r]:t})}async getAllTimestamps(){return await this._db.getAllMatching(this._storeName,{index:r})}async getTimestamp(e){return(await this._db.get(this._storeName,e)).timestamp}async deleteUrl(e){await this._db.delete(this._storeName,new URL(e,location).href)}async delete(){await this._db.deleteDatabase(),this._db=null}},o=n(1),c=(n(3),n(0));class l{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new i(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=Date.now(),t=await this._findOldEntries(e),n=await this._findExtraEntries(),s=[...new Set(t.concat(n))];await Promise.all([this._deleteFromCache(s),this._deleteFromIDB(s)]),this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,this.expireEntries())}async _findOldEntries(e){if(!this._maxAgeSeconds)return[];const t=e-1e3*this._maxAgeSeconds,n=await this._timestampModel.getAllTimestamps(),s=[];return n.forEach(e=>{e.timestamp<t&&s.push(e.url)}),s}async _findExtraEntries(){const e=[];if(!this._maxEntries)return[];const t=await this._timestampModel.getAllTimestamps();for(;t.length>this._maxEntries;){const n=t.shift();e.push(n.url)}return e}async _deleteFromCache(e){const t=await caches.open(this._cacheName);for(const n of e)await t.delete(n)}async _deleteFromIDB(e){for(const t of e)await this._timestampModel.deleteUrl(t)}async updateTimestamp(e){const t=new URL(e,location);t.hash="",await this._timestampModel.setTimestamp(t.href,Date.now())}async isURLExpired(e){if(!this._maxAgeSeconds)throw new o.a("expired-test-without-max-age",{methodName:"isURLExpired",paramName:"maxAgeSeconds"});const t=new URL(e,location);return t.hash="",await this._timestampModel.getTimestamp(t.href)<Date.now()-1e3*this._maxAgeSeconds}async delete(){this._rerunRequested=!1,await this._timestampModel.delete()}}var u=n(2),h=n(15),d=(n(5),n(7),n(8),n(9));new class{constructor(){try{self.workbox.v=self.workbox.v||{}}catch(e){}}get cacheNames(){return{googleAnalytics:u.a.getGoogleAnalyticsName(),precache:u.a.getPrecacheName(),runtime:u.a.getRuntimeName()}}setCacheNameDetails(e){u.a.updateDetails(e)}get logLevel(){return Object(c.a)()}setLogLevel(e){if(e>d.a.silent||e<d.a.debug)throw new o.a("invalid-value",{paramName:"logLevel",validValueDescription:"Please use a value from LOG_LEVELS, i.e 'logLevel = workbox.core.LOG_LEVELS.debug'.",value:e});Object(c.c)(e)}};function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],s=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(s=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==o.return||o.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}class m{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&Object(h.b)(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===u.a.getRuntimeName())throw new o.a("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new l(e,this._config),this._cacheExpirations.set(e,t)),t}cachedResponseWillBeUsed(e){let t=e.cacheName,n=e.cachedResponse;if(!n)return null;let s=this._isResponseDateFresh(n);return this._getCacheExpiration(t).expireEntries(),s?n:null}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async cacheDidUpdate(e){let t=e.cacheName,n=e.request;const s=this._getCacheExpiration(t);await s.updateTimestamp(n.url),await s.expireEntries()}async deleteCacheAndMetadata(){for(const t of this._cacheExpirations){var e=p(t,2);const n=e[0],s=e[1];await caches.delete(n),await s.delete()}this._cacheExpirations=new Map}}n.d(t,"a",function(){return m})},function(e,t,n){n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a});const s="AMP-UNVERSIONED-CACHE",a="AMP-VERSIONED-CACHE"},function(e,t,n){n.d(t,"a",function(){return s});const s="AMP-PUBLISHER-CACHE"},function(e,t,n){n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});n(0),n(3),n(4);const s=new Set;function a(e){s.add(e)}async function r(){for(const e of s)await e()}},function(e,t,n){n(4);t.a={filter:(e,t)=>e.filter(e=>t in e)}},function(e,t,n){n.r(t);var s=n(10),a=n(11),r=n(12),i=n(13);const o=/^https:\/\/cdn.ampproject.org\/rtv\/\d*\//,c=/^https:\/\/cdn.ampproject.org\/\w*(-\w*)?.js/,l=/^https:\/\/cdn.ampproject.org\/v0\//;try{self.workbox.v["workbox:navigation-preload:3.6.2"]=1}catch(e){}n(0);function u(){return Boolean(self.registration&&self.registration.navigationPreload)}var h=n(14);function d(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}class p extends r.a{constructor(e){const t=e.allowedNonAMPPages;if(super(d(e,["allowedNonAMPPages"])),t){if(!Array.isArray(t))throw new TypeError("allowedNonAMPPages should be an array of RegExp");this.allowedPages_=t}}async cacheWillUpdate(e){let t=e.response;const n=t.clone(),s=n.headers.get("content-type");if(s&&s.includes("text/html")){try{if(this.allowedPages_){if(this.allowedPages_.some(e=>e.test(n.url)))return t}const e=await n.text();if(/<html\s[^>]*(âš¡|amp)[^>]*>/.test(e))return t}catch(e){return null}return null}return null}}class m extends s.a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{whitelist:[/./],blacklist:[]};super(e,{whitelist:t.whitelist,blacklist:t.blacklist})}addDeniedUrls(e){this._blacklist.push(e)}removeDeniedUrls(e){this._blacklist=this._blacklist.filter(t=>t.toString()!==e.toString())}}class f extends a.b{constructor(e,t){super(e),this.offlineFallbackUrl=t}async makeRequest(e){let t=e.event,n=e.request;const s=await super.makeRequest({event:t,request:n});if(!s&&this.offlineFallbackUrl){const e=await caches.open(h.a),t=await e.match(this.offlineFallbackUrl);if(t)return t}return s}}const g=new class{init(){this.ampAssetsCaching(),this.listenForFetchedScripts()}ampAssetsCaching(){s.b.registerRoute(o,new a.a({cacheName:i.b,plugins:[new r.a({maxAgeSeconds:1209600})]})),s.b.registerRoute(c,new a.c({cacheName:i.a,plugins:[new r.a({maxAgeSeconds:604800})]})),s.b.registerRoute(l,new a.c({cacheName:i.a,plugins:[new r.a({maxAgeSeconds:86400})]}))}listenForFetchedScripts(){self.addEventListener("message",e=>{const t=JSON.parse(e.data);"AMP__FIRST-VISIT-CACHING"===t.type&&t.payload&&e.waitUntil(async function(e){const t=[],n=[];e.forEach(e=>{l.test(e)||c.test(e)?t.push(new Request(e)):o.test(e)&&n.push(new Request(e))});const s=await caches.open(i.a);await s.addAll(t);const a=await caches.open(i.b);await a.addAll(n)}(t.payload))})}},w=new class{init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{maxDocumentsInCache:10,maxAgeSecondsforDocumentsInCache:432e3,timeoutSeconds:3},t=arguments.length>1?arguments[1]:void 0;var n;u()&&self.addEventListener("activate",e=>{e.waitUntil(self.registration.navigationPreload.enable().then(()=>{n&&self.registration.navigationPreload.setHeaderValue(n)}))});const a={};e.allowList?a.whitelist=e.allowList:e.denyList&&(a.blacklist=e.denyList),e.timeoutSeconds&&e.timeoutSeconds>5&&(e.timeoutSeconds=5),e.maxDocumentsInCache&&e.maxDocumentsInCache>10&&(e.maxDocumentsInCache=10);const r=new m(new f({cacheName:h.a,plugins:[new p({maxEntries:e.maxDocumentsInCache||10,maxAgeSeconds:e.maxAgeSecondsforDocumentsInCache||432e3,allowedNonAMPPages:e.allowedNonAMPPages})],networkTimeoutSeconds:e.timeoutSeconds},t),a);return s.b.registerRoute(r),r}cacheAMPDocument(e){return e.map(async e=>{if(e&&e.url)try{const t=new Request(e.url,{mode:"same-origin"}),n=await fetch(t),s=new p({maxEntries:10}),a=await s.cacheWillUpdate({response:n}),r=await caches.open(h.a);a&&r.put(t,a)}catch(e){}})}};self.AMP_SW={init:function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g.init(),t.offlinePageOptions&&(e=t.offlinePageOptions.url);const s=w.init(t.documentCachingOptions,e);t.assetCachingOptions&&n.e(1).then(n.bind(null,20)).then(async e=>{const n=new(0,e.AssetCachingAmpModule);await n.init(t.assetCachingOptions)}),t.linkPrefetchOptions&&n.e(1).then(n.bind(null,23)).then(async e=>{const n=new(0,e.LinkPrefetchAmpModule);await n.init(t.linkPrefetchOptions,s)}),t.offlinePageOptions&&n.e(1).then(n.bind(null,21)).then(async e=>{const n=new(0,e.OfflinePageAmpSwModule),s=t.offlinePageOptions;await n.init(s.url,s.assets)}),self.addEventListener("install",function(e){const t=self.skipWaiting;e.waitUntil(t())}),self.addEventListener("activate",async e=>{const t=self.clients;e.waitUntil(t.claim().then(async()=>{const e=await t.matchAll({type:"window"});return Promise.all(w.cacheAMPDocument(e))}))})},forcedNullifcation:function(){n.e(2).then(n.bind(null,22)).then(async e=>(new(0,e.ServiceWorkerRemover)).installNoOpServiceWorker())}}}]);
