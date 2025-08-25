(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Dr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},fa=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[i++],h=n[i++],p=n[i++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const c=n[i++],h=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},ws={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],h=o+1<n.length,p=h?n[o+1]:0,_=o+2<n.length,E=_?n[o+2]:0,b=c>>2,k=(c&3)<<4|p>>4;let S=(p&15)<<2|E>>6,M=E&63;_||(M=64,h||(S=64)),r.push(i[b],i[k],i[S],i[M])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Is(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const E=o<n.length?i[n.charAt(o)]:64;++o;const k=o<n.length?i[n.charAt(o)]:64;if(++o,c==null||p==null||E==null||k==null)throw new pa;const S=c<<2|p>>4;if(r.push(S),E!==64){const M=p<<4&240|E>>2;if(r.push(M),k!==64){const R=E<<6&192|k;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ga=function(n){const e=Is(n);return ws.encodeByteArray(e,!0)},on=function(n){return ga(n).replace(/\./g,"")},Es=function(n){try{return ws.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=()=>ma().__FIREBASE_DEFAULTS__,_a=()=>{if(typeof process>"u"||typeof Dr>"u")return;const n=Dr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ya=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Es(n[1]);return e&&JSON.parse(e)},pi=()=>{try{return va()||_a()||ya()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ts=n=>{var e,i;return(i=(e=pi())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},bs=n=>{const e=Ts(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},As=()=>{var n;return(n=pi())===null||n===void 0?void 0:n.config},Ss=n=>{var e;return(e=pi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[on(JSON.stringify(i)),on(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())}function Ea(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ta(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ba(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aa(){const n=Y();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sa(){try{return typeof indexedDB=="object"}catch{return!1}}function ka(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="FirebaseError";class he extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=Ra,Object.setPrototypeOf(this,he.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rt.prototype.create)}}class Rt{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?Pa(c,r):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new he(o,p,r)}}function Pa(n,e){return n.replace(Ca,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Ca=/\{\$([^}]+)}/g;function Oa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function an(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=n[o],h=e[o];if(Nr(c)&&Nr(h)){if(!an(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function Nr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Da(n,e){const i=new Na(n,e);return i.subscribe.bind(i)}class Na{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");La(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Kn),o.error===void 0&&(o.error=Kn),o.complete===void 0&&(o.complete=Kn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function La(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Kn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){return n&&n._delegate?n._delegate:n}class Ne{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new Ia;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xa(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&h.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&e(h,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ua(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ua(n){return n===je?void 0:n}function xa(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Ma(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const ja={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Ba=D.INFO,Va={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},$a=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=Va[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gi{constructor(e){this.name=e,this._logLevel=Ba,this._logHandler=$a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ja[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Ha=(n,e)=>e.some(i=>n instanceof i);let Lr,Mr;function za(){return Lr||(Lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wa(){return Mr||(Mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rs=new WeakMap,ri=new WeakMap,Ps=new WeakMap,qn=new WeakMap,mi=new WeakMap;function Ga(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{i(Oe(n.result)),o()},h=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&Rs.set(i,n)}).catch(()=>{}),mi.set(e,n),e}function Ka(n){if(ri.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});ri.set(n,e)}let si={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return ri.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ps.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Oe(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qa(n){si=n(si)}function Ja(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(Jn(this),e,...i);return Ps.set(r,e.sort?e.sort():[e]),Oe(r)}:Wa().includes(n)?function(...e){return n.apply(Jn(this),e),Oe(Rs.get(this))}:function(...e){return Oe(n.apply(Jn(this),e))}}function Xa(n){return typeof n=="function"?Ja(n):(n instanceof IDBTransaction&&Ka(n),Ha(n,za())?new Proxy(n,si):n)}function Oe(n){if(n instanceof IDBRequest)return Ga(n);if(qn.has(n))return qn.get(n);const e=Xa(n);return e!==n&&(qn.set(n,e),mi.set(e,n)),e}const Jn=n=>mi.get(n);function Ya(n,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(n,e),p=Oe(h);return r&&h.addEventListener("upgradeneeded",_=>{r(Oe(h.result),_.oldVersion,_.newVersion,Oe(h.transaction),_)}),i&&h.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),p.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const Qa=["get","getKey","getAll","getAllKeys","count"],Za=["put","add","delete","clear"],Xn=new Map;function Ur(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=Za.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Qa.includes(i)))return;const c=async function(h,...p){const _=this.transaction(h,o?"readwrite":"readonly");let E=_.store;return r&&(E=E.index(p.shift())),(await Promise.all([E[i](...p),o&&_.done]))[0]};return Xn.set(e,c),c}qa(n=>({...n,get:(e,i,r)=>Ur(e,i)||n.get(e,i,r),has:(e,i)=>!!Ur(e,i)||n.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(tc(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function tc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",xr="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new gi("@firebase/app"),nc="@firebase/app-compat",ic="@firebase/analytics-compat",rc="@firebase/analytics",sc="@firebase/app-check-compat",oc="@firebase/app-check",ac="@firebase/auth",cc="@firebase/auth-compat",lc="@firebase/database",hc="@firebase/data-connect",uc="@firebase/database-compat",dc="@firebase/functions",fc="@firebase/functions-compat",pc="@firebase/installations",gc="@firebase/installations-compat",mc="@firebase/messaging",vc="@firebase/messaging-compat",_c="@firebase/performance",yc="@firebase/performance-compat",Ic="@firebase/remote-config",wc="@firebase/remote-config-compat",Ec="@firebase/storage",Tc="@firebase/storage-compat",bc="@firebase/firestore",Ac="@firebase/vertexai-preview",Sc="@firebase/firestore-compat",kc="firebase",Rc="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]",Pc={[oi]:"fire-core",[nc]:"fire-core-compat",[rc]:"fire-analytics",[ic]:"fire-analytics-compat",[oc]:"fire-app-check",[sc]:"fire-app-check-compat",[ac]:"fire-auth",[cc]:"fire-auth-compat",[lc]:"fire-rtdb",[hc]:"fire-data-connect",[uc]:"fire-rtdb-compat",[dc]:"fire-fn",[fc]:"fire-fn-compat",[pc]:"fire-iid",[gc]:"fire-iid-compat",[mc]:"fire-fcm",[vc]:"fire-fcm-compat",[_c]:"fire-perf",[yc]:"fire-perf-compat",[Ic]:"fire-rc",[wc]:"fire-rc-compat",[Ec]:"fire-gcs",[Tc]:"fire-gcs-compat",[bc]:"fire-fst",[Sc]:"fire-fst-compat",[Ac]:"fire-vertex","fire-js":"fire-js",[kc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Map,Cc=new Map,ci=new Map;function Fr(n,e){try{n.container.addComponent(e)}catch(i){_e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ve(n){const e=n.name;if(ci.has(e))return _e.debug(`There were multiple attempts to register component ${e}.`),!1;ci.set(e,n);for(const i of cn.values())Fr(i,n);for(const i of Cc.values())Fr(i,n);return!0}function _n(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function Ce(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new Rt("app","Firebase",Oc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=Rc;function Cs(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ai,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw De.create("bad-app-name",{appName:String(o)});if(i||(i=As()),!i)throw De.create("no-options");const c=cn.get(o);if(c){if(an(i,c.options)&&an(r,c.config))return c;throw De.create("duplicate-app",{appName:o})}const h=new Fa(o);for(const _ of ci.values())h.addComponent(_);const p=new Dc(i,r,h);return cn.set(o,p),p}function vi(n=ai){const e=cn.get(n);if(!e&&n===ai&&As())return Cs();if(!e)throw De.create("no-app",{appName:n});return e}function oe(n,e,i){var r;let o=(r=Pc[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const p=[`Unable to register library "${o}" with version "${e}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_e.warn(p.join(" "));return}Ve(new Ne(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="firebase-heartbeat-database",Lc=1,At="firebase-heartbeat-store";let Yn=null;function Os(){return Yn||(Yn=Ya(Nc,Lc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(At)}catch(i){console.warn(i)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),Yn}async function Mc(n){try{const i=(await Os()).transaction(At),r=await i.objectStore(At).get(Ds(n));return await i.done,r}catch(e){if(e instanceof he)_e.warn(e.message);else{const i=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_e.warn(i.message)}}}async function jr(n,e){try{const r=(await Os()).transaction(At,"readwrite");await r.objectStore(At).put(e,Ds(n)),await r.done}catch(i){if(i instanceof he)_e.warn(i.message);else{const r=De.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});_e.warn(r.message)}}}function Ds(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=1024,xc=30*24*60*60*1e3;class Fc{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Bc(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Br();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=xc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_e.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Br(),{heartbeatsToSend:r,unsentEntries:o}=jc(this._heartbeatsCache.heartbeats),c=on(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return _e.warn(i),""}}}function Br(){return new Date().toISOString().substring(0,10)}function jc(n,e=Uc){const i=[];let r=n.slice();for(const o of n){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Vr(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Vr(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Bc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sa()?ka().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Mc(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return jr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return jr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Vr(n){return on(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){Ve(new Ne("platform-logger",e=>new ec(e),"PRIVATE")),Ve(new Ne("heartbeat",e=>new Fc(e),"PRIVATE")),oe(oi,xr,n),oe(oi,xr,"esm2017"),oe("fire-js","")}Vc("");var $c="firebase",Hc="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe($c,Hc,"app");function _i(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(i[r[o]]=n[r[o]]);return i}function Ns(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zc=Ns,Ls=new Rt("auth","Firebase",Ns());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new gi("@firebase/auth");function Wc(n,...e){ln.logLevel<=D.WARN&&ln.warn(`Auth (${He}): ${n}`,...e)}function tn(n,...e){ln.logLevel<=D.ERROR&&ln.error(`Auth (${He}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,...e){throw yi(n,...e)}function ae(n,...e){return yi(n,...e)}function Ms(n,e,i){const r=Object.assign(Object.assign({},zc()),{[e]:i});return new Rt("auth","Firebase",r).create(e,{appName:n.name})}function Be(n){return Ms(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yi(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return Ls.create(n,...e)}function A(n,e,...i){if(!n)throw yi(e,...i)}function ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tn(e),new Error(e)}function Ie(n,e){n||ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gc(){return $r()==="http:"||$r()==="https:"}function $r(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gc()||Ta()||"connection"in navigator)?navigator.onLine:!0}function qc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,i){this.shortDelay=e,this.longDelay=i,Ie(i>e,"Short delay should be less than long delay!"),this.isMobile=wa()||ba()}get(){return Kc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e){Ie(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Ct(3e4,6e4);function wi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tt(n,e,i,r,o={}){return xs(n,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const p=Pt(Object.assign({key:n.config.apiKey},h)).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const E=Object.assign({method:e,headers:_},c);return Ea()||(E.referrerPolicy="no-referrer"),Us.fetch()(Fs(n,n.config.apiHost,i,p),E)})}async function xs(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jc),e);try{const o=new Qc(n),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Xt(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[_,E]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xt(n,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw Xt(n,"email-already-in-use",h);if(_==="USER_DISABLED")throw Xt(n,"user-disabled",h);const b=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Ms(n,b,E);ye(n,b)}}catch(o){if(o instanceof he)throw o;ye(n,"network-request-failed",{message:String(o)})}}async function Yc(n,e,i,r,o={}){const c=await tt(n,e,i,r,o);return"mfaPendingCredential"in c&&ye(n,"multi-factor-auth-required",{_serverResponse:c}),c}function Fs(n,e,i,r){const o=`${e}${i}?${r}`;return n.config.emulator?Ii(n.config,o):`${n.config.apiScheme}://${o}`}class Qc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(ae(this.auth,"network-request-failed")),Xc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xt(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=ae(n,e,r);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(n,e){return tt(n,"POST","/v1/accounts:delete",e)}async function js(n,e){return tt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function el(n,e=!1){const i=Le(n),r=await i.getIdToken(e),o=Ei(r);A(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:wt(Qn(o.auth_time)),issuedAtTime:wt(Qn(o.iat)),expirationTime:wt(Qn(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Qn(n){return Number(n)*1e3}function Ei(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return tn("JWT malformed, contained fewer than 3 sections"),null;try{const o=Es(i);return o?JSON.parse(o):(tn("Failed to decode base64 JWT payload"),null)}catch(o){return tn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Hr(n){const e=Ei(n);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof he&&tl(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=wt(this.lastLoginAt),this.creationTime=wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(n){var e;const i=n.auth,r=await n.getIdToken(),o=await St(n,js(i,{idToken:r}));A(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];n._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Bs(c.providerUserInfo):[],p=rl(n.providerData,h),_=n.isAnonymous,E=!(n.email&&c.passwordHash)&&!(p!=null&&p.length),b=_?E:!1,k={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new hi(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(n,k)}async function il(n){const e=Le(n);await hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rl(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Bs(n){return n.map(e=>{var{providerId:i}=e,r=_i(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n,e){const i=await xs(n,{},async()=>{const r=Pt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,h=Fs(n,o,"/v1/token",`key=${c}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Us.fetch()(h,{method:"POST",headers:p,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function ol(n,e){return tt(n,"POST","/v2/accounts:revokeToken",wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){A(e.length!==0,"internal-error");const i=Hr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await sl(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new Xe;return r&&(A(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(A(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(A(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xe,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){A(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class me{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,c=_i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new hi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await St(this,this.stsTokenManager.getToken(this.auth,e));return A(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return el(this,e)}reload(){return il(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await hn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(Be(this.auth));const e=await this.getIdToken();return await St(this,Zc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,c,h,p,_,E,b;const k=(r=i.displayName)!==null&&r!==void 0?r:void 0,S=(o=i.email)!==null&&o!==void 0?o:void 0,M=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,R=(h=i.photoURL)!==null&&h!==void 0?h:void 0,x=(p=i.tenantId)!==null&&p!==void 0?p:void 0,P=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,Q=(E=i.createdAt)!==null&&E!==void 0?E:void 0,K=(b=i.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:F,emailVerified:j,isAnonymous:te,providerData:V,stsTokenManager:v}=i;A(F&&v,e,"internal-error");const u=Xe.fromJSON(this.name,v);A(typeof F=="string",e,"internal-error"),Ae(k,e.name),Ae(S,e.name),A(typeof j=="boolean",e,"internal-error"),A(typeof te=="boolean",e,"internal-error"),Ae(M,e.name),Ae(R,e.name),Ae(x,e.name),Ae(P,e.name),Ae(Q,e.name),Ae(K,e.name);const f=new me({uid:F,auth:e,email:S,emailVerified:j,displayName:k,isAnonymous:te,photoURL:R,phoneNumber:M,tenantId:x,stsTokenManager:u,createdAt:Q,lastLoginAt:K});return V&&Array.isArray(V)&&(f.providerData=V.map(g=>Object.assign({},g))),P&&(f._redirectEventId=P),f}static async _fromIdTokenResponse(e,i,r=!1){const o=new Xe;o.updateFromServerResponse(i);const c=new me({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await hn(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];A(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Bs(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),p=new Xe;p.updateFromIdToken(r);const _=new me({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new hi(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,E),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map;function ve(n){Ie(n instanceof Function,"Expected a class definition");let e=zr.get(n);return e?(Ie(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Vs.type="NONE";const Wr=Vs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,e,i){return`firebase:${n}:${e}:${i}`}class Ye{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=nn(this.userKey,o.apiKey,c),this.fullPersistenceKey=nn("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new Ye(ve(Wr),e,r);const o=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||ve(Wr);const h=nn(r,e.config.apiKey,e.name);let p=null;for(const E of i)try{const b=await E._get(h);if(b){const k=me._fromJSON(e,b);E!==c&&(p=k),c=E;break}}catch{}const _=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Ye(c,e,r):(c=_[0],p&&await c._set(h,p.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new Ye(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ws(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($s(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ks(e))return"Blackberry";if(qs(e))return"Webos";if(Hs(e))return"Safari";if((e.includes("chrome/")||zs(e))&&!e.includes("edge/"))return"Chrome";if(Gs(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $s(n=Y()){return/firefox\//i.test(n)}function Hs(n=Y()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zs(n=Y()){return/crios\//i.test(n)}function Ws(n=Y()){return/iemobile/i.test(n)}function Gs(n=Y()){return/android/i.test(n)}function Ks(n=Y()){return/blackberry/i.test(n)}function qs(n=Y()){return/webos/i.test(n)}function Ti(n=Y()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function al(n=Y()){var e;return Ti(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cl(){return Aa()&&document.documentMode===10}function Js(n=Y()){return Ti(n)||Gs(n)||qs(n)||Ks(n)||/windows phone/i.test(n)||Ws(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n,e=[]){let i;switch(n){case"Browser":i=Gr(Y());break;case"Worker":i=`${Gr(Y())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${He}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((h,p)=>{try{const _=e(c);h(_)}catch(_){p(_)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(n,e={}){return tt(n,"GET","/v2/passwordPolicy",wi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=6;class dl{constructor(e){var i,r,o,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:ul,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,c,h,p;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(r=_.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(p=_.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),_}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kr(this),this.idTokenSubscription=new Kr(this),this.beforeStateQueue=new ll(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ls,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=ve(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Ye.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await js(this,{idToken:e}),r=await me._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ce(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(e);(!h||h===p)&&(_!=null&&_.user)&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await hn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ce(this.app))return Promise.reject(Be(this));const i=e?Le(e):null;return i&&A(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(Be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ce(this.app)?Promise.reject(Be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ve(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hl(this),i=new dl(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rt("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await ol(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&ve(e)||this._popupRedirectResolver;A(i,this,"argument-error"),this.redirectPersistenceManager=await Ye.create(this,[ve(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const _=e.addObserver(i,r,o);return()=>{h=!0,_()}}else{const _=e.addObserver(i);return()=>{h=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Wc(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function bi(n){return Le(n)}class Kr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Da(i=>this.observer=i)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pl(n){Ai=n}function gl(n){return Ai.loadJS(n)}function ml(){return Ai.gapiScript}function vl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,e){const i=_n(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(an(c,e??{}))return o;ye(o,"already-initialized")}return i.initialize({options:e})}function yl(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(ve);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ys(n,e,i){const r=bi(n);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(i!=null&&i.disableWarnings),c=Qs(e),{host:h,port:p}=Il(e),_=p===null?"":`:${p}`;r.config.emulator={url:`${c}//${h}${_}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||wl()}function Qs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Il(n){const e=Qs(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:qr(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:qr(h)}}}function qr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wl(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,i){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(n,e){return Yc(n,"POST","/v1/accounts:signInWithIdp",wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="http://localhost";class $e extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):ye("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,c=_i(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new $e(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return Qe(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,Qe(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Qe(e,i)}buildRequest(){const e={requestUri:El,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Pt(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends eo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Ot{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.FACEBOOK_SIGN_IN_METHOD="facebook.com";Se.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return $e._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return ke.credential(i,r)}catch{return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com";ke.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Ot{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Ot{constructor(){super("twitter.com")}static credential(e,i){return $e._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Pe.credential(i,r)}catch{return null}}}Pe.TWITTER_SIGN_IN_METHOD="twitter.com";Pe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await me._fromIdTokenResponse(e,r,o),h=Jr(r);return new Ze({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=Jr(r);return new Ze({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function Jr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends he{constructor(e,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,un.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new un(e,i,r,o)}}function to(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?un._fromErrorAndOperation(n,c,e,r):c})}async function Tl(n,e,i=!1){const r=await St(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return Ze._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(n,e,i=!1){const{auth:r}=n;if(Ce(r.app))return Promise.reject(Be(r));const o="reauthenticate";try{const c=await St(n,to(r,o,e,n),i);A(c.idToken,r,"internal-error");const h=Ei(c.idToken);A(h,r,"internal-error");const{sub:p}=h;return A(n.uid===p,r,"user-mismatch"),Ze._forOperation(n,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(n,e,i=!1){if(Ce(n.app))return Promise.reject(Be(n));const r="signIn",o=await to(n,r,e),c=await Ze._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(c.user),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n,e){return Le(n).setPersistence(e)}function kl(n,e,i,r){return Le(n).onIdTokenChanged(e,i,r)}function Rl(n,e,i){return Le(n).beforeAuthStateChanged(e,i)}const dn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(dn,"1"),this.storage.removeItem(dn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=1e3,Cl=10;class io extends no{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Js(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,p,_)=>{this.notifyListeners(h,_)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);cl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Cl):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},Pl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}io.type="LOCAL";const ro=io;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends no{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}so.type="SESSION";const oo=so;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new yn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(h).map(async E=>E(i.origin,c)),_=await Ol(p);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:_})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,_)=>{const E=Si("",20);o.port1.start();const b=setTimeout(()=>{_(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(k){const S=k;if(S.data.eventId===E)switch(S.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(S.data.response);break;default:clearTimeout(b),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return window}function Nl(n){ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Ll(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ml(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ul(){return ao()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="firebaseLocalStorageDb",xl=1,fn="firebaseLocalStorage",lo="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function In(n,e){return n.transaction([fn],e?"readwrite":"readonly").objectStore(fn)}function Fl(){const n=indexedDB.deleteDatabase(co);return new Dt(n).toPromise()}function ui(){const n=indexedDB.open(co,xl);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fn,{keyPath:lo})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fn)?e(r):(r.close(),await Fl(),e(await ui()))})})}async function Xr(n,e,i){const r=In(n,!0).put({[lo]:e,value:i});return new Dt(r).toPromise()}async function jl(n,e){const i=In(n,!1).get(e),r=await new Dt(i).toPromise();return r===void 0?null:r.value}function Yr(n,e){const i=In(n,!0).delete(e);return new Dt(i).toPromise()}const Bl=800,Vl=3;class ho{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Vl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ao()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yn._getInstance(Ul()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Ll(),!this.activeServiceWorker)return;this.sender=new Dl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ml()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ui();return await Xr(e,dn,"1"),await Yr(e,dn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xr(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>jl(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yr(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=In(o,!1).getAll();return new Dt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ho.type="LOCAL";const $l=ho;new Ct(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n,e){return e?ve(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Qe(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function zl(n){return Al(n.auth,new ki(n),n.bypassAuthState)}function Wl(n){const{auth:e,user:i}=n;return A(i,e,"internal-error"),bl(i,new ki(n),n.bypassAuthState)}async function Gl(n){const{auth:e,user:i}=n;return A(i,e,"internal-error"),Tl(i,new ki(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zl;case"linkViaPopup":case"linkViaRedirect":return Gl;case"reauthViaPopup":case"reauthViaRedirect":return Wl;default:ye(this.auth,"internal-error")}}resolve(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Ct(2e3,1e4);class Je extends uo{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Je.currentPopupAction&&Je.currentPopupAction.cancel(),Je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const e=Si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Je.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kl.get())};e()}}Je.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="pendingRedirect",rn=new Map;class Jl extends uo{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=rn.get(this.auth._key());if(!e){try{const r=await Xl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}rn.set(this.auth._key(),e)}return this.bypassAuthState||rn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xl(n,e){const i=Zl(e),r=Ql(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function Yl(n,e){rn.set(n._key(),e)}function Ql(n){return ve(n._redirectPersistence)}function Zl(n){return nn(ql,n.config.apiKey,n.name)}async function eh(n,e,i=!1){if(Ce(n.app))return Promise.reject(Be(n));const r=bi(n),o=Hl(r,e),h=await new Jl(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=10*60*1e3;class nh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ih(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!fo(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(ae(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=th&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qr(e))}saveEventToCache(e){this.cachedEventUids.add(Qr(e)),this.lastProcessedEventTime=Date.now()}}function Qr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fo({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ih(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fo(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(n,e={}){return tt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oh=/^https?/;async function ah(n){if(n.config.emulator)return;const{authorizedDomains:e}=await rh(n);for(const i of e)try{if(ch(i))return}catch{}ye(n,"unauthorized-domain")}function ch(n){const e=li(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!oh.test(i))return!1;if(sh.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Ct(3e4,6e4);function Zr(){const n=ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function hh(n){return new Promise((e,i)=>{var r,o,c;function h(){Zr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zr(),i(ae(n,"network-request-failed"))},timeout:lh.get()})}if(!((o=(r=ce().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=ce().gapi)===null||c===void 0)&&c.load)h();else{const p=vl("iframefcb");return ce()[p]=()=>{gapi.load?h():i(ae(n,"network-request-failed"))},gl(`${ml()}?onload=${p}`).catch(_=>i(_))}}).catch(e=>{throw sn=null,e})}let sn=null;function uh(n){return sn=sn||hh(n),sn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Ct(5e3,15e3),fh="__/auth/iframe",ph="emulator/auth/iframe",gh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vh(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?Ii(e,ph):`https://${n.config.authDomain}/${fh}`,r={apiKey:e.apiKey,appName:n.name,v:He},o=mh.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${Pt(r).slice(1)}`}async function _h(n){const e=await uh(n),i=ce().gapi;return A(i,n,"internal-error"),e.open({where:document.body,url:vh(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gh,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=ae(n,"network-request-failed"),p=ce().setTimeout(()=>{c(h)},dh.get());function _(){ce().clearTimeout(p),o(r)}r.ping(_).then(_,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ih=500,wh=600,Eh="_blank",Th="http://localhost";class es{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bh(n,e,i,r=Ih,o=wh){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _=Object.assign(Object.assign({},yh),{width:r.toString(),height:o.toString(),top:c,left:h}),E=Y().toLowerCase();i&&(p=zs(E)?Eh:i),$s(E)&&(e=e||Th,_.scrollbars="yes");const b=Object.entries(_).reduce((S,[M,R])=>`${S}${M}=${R},`,"");if(al(E)&&p!=="_self")return Ah(e||"",p),new es(null);const k=window.open(e||"",p,b);A(k,n,"popup-blocked");try{k.focus()}catch{}return new es(k)}function Ah(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="__/auth/handler",kh="emulator/auth/handler",Rh=encodeURIComponent("fac");async function ts(n,e,i,r,o,c){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:He,eventId:o};if(e instanceof eo){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",Oa(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,k]of Object.entries({}))h[b]=k}if(e instanceof Ot){const b=e.getScopes().filter(k=>k!=="");b.length>0&&(h.scopes=b.join(","))}n.tenantId&&(h.tid=n.tenantId);const p=h;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const _=await n._getAppCheckToken(),E=_?`#${Rh}=${encodeURIComponent(_)}`:"";return`${Ph(n)}?${Pt(p).slice(1)}${E}`}function Ph({config:n}){return n.emulator?Ii(n,kh):`https://${n.authDomain}/${Sh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class Ch{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oo,this._completeRedirectFn=eh,this._overrideRedirectResult=Yl}async _openPopup(e,i,r,o){var c;Ie((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await ts(e,i,r,li(),o);return bh(e,h,Si())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await ts(e,i,r,li(),o);return Nl(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Ie(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await _h(e),r=new nh(e);return i.register("authEvent",o=>(A(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Zn,{type:Zn},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[Zn];h!==void 0&&i(!!h),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=ah(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Js()||Hs()||Ti()}}const Oh=Ch;var ns="@firebase/auth",is="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lh(n){Ve(new Ne("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;A(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:h,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xs(n)},E=new fl(r,o,c,_);return yl(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),Ve(new Ne("auth-internal",e=>{const i=bi(e.getProvider("auth").getImmediate());return(r=>new Dh(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),oe(ns,is,Nh(n)),oe(ns,is,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=5*60,Uh=Ss("authIdTokenMaxAge")||Mh;let rs=null;const xh=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Uh)return;const o=i==null?void 0:i.token;rs!==o&&(rs=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Fh(n=vi()){const e=_n(n,"auth");if(e.isInitialized())return e.getImmediate();const i=_l(n,{popupRedirectResolver:Oh,persistence:[$l,ro,oo]}),r=Ss("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=xh(c.toString());Rl(i,h,()=>h(i.currentUser)),kl(i,p=>h(p))}}const o=Ts("auth");return o&&Ys(i,`http://${o}`),i}function jh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}pl({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const c=ae("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",jh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lh("Browser");var ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var po;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,u){function f(){}f.prototype=u.prototype,v.D=u.prototype,v.prototype=new f,v.prototype.constructor=v,v.C=function(g,m,I){for(var d=Array(arguments.length-2),de=2;de<arguments.length;de++)d[de-2]=arguments[de];return u.prototype[m].apply(g,d)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,u,f){f||(f=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)g[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=v.g[0],f=v.g[1],m=v.g[2];var I=v.g[3],d=u+(I^f&(m^I))+g[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[1]+3905402710&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[2]+606105819&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[5]+1200080426&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[6]+2821735955&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[9]+2336552879&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[10]+4294925233&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(I^f&(m^I))+g[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(m^u&(f^m))+g[13]+4254626195&4294967295,I=u+(d<<12&4294967295|d>>>20),d=m+(f^I&(u^f))+g[14]+2792965006&4294967295,m=I+(d<<17&4294967295|d>>>15),d=f+(u^m&(I^u))+g[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^I&(f^m))+g[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[6]+3225465664&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[11]+643717713&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[10]+38016083&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[15]+3634488961&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[14]+3275163606&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[3]+4107603335&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^I&(f^m))+g[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^m&(u^f))+g[2]+4243563512&4294967295,I=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(I^u))+g[7]+1735328473&4294967295,m=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(m^I))+g[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^I)+g[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[8]+2272392833&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[11]+1839030562&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[4]+1272893353&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[7]+4139469664&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[0]+3936430074&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[3]+3572445317&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^I)+g[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^m)+g[12]+3873151461&4294967295,I=u+(d<<11&4294967295|d>>>21),d=m+(I^u^f)+g[15]+530742520&4294967295,m=I+(d<<16&4294967295|d>>>16),d=f+(m^I^u)+g[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~I))+g[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[7]+1126891415&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[14]+2878612391&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[3]+2399980690&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[10]+4293915773&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[15]+4264355552&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[6]+2734768916&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~I))+g[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~m))+g[11]+3174756917&4294967295,I=u+(d<<10&4294967295|d>>>22),d=m+(u^(I|~f))+g[2]+718787259&4294967295,m=I+(d<<15&4294967295|d>>>17),d=f+(I^(m|~u))+g[9]+3951481745&4294967295,v.g[0]=v.g[0]+u&4294967295,v.g[1]=v.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,v.g[2]=v.g[2]+m&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,u){u===void 0&&(u=v.length);for(var f=u-this.blockSize,g=this.B,m=this.h,I=0;I<u;){if(m==0)for(;I<=f;)o(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<u;)if(g[m++]=v.charCodeAt(I++),m==this.blockSize){o(this,g),m=0;break}}else for(;I<u;)if(g[m++]=v[I++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var u=1;u<v.length-8;++u)v[u]=0;var f=8*this.o;for(u=v.length-8;u<v.length;++u)v[u]=f&255,f/=256;for(this.u(v),v=Array(16),u=f=0;4>u;++u)for(var g=0;32>g;g+=8)v[f++]=this.g[u]>>>g&255;return v};function c(v,u){var f=p;return Object.prototype.hasOwnProperty.call(f,v)?f[v]:f[v]=u(v)}function h(v,u){this.h=u;for(var f=[],g=!0,m=v.length-1;0<=m;m--){var I=v[m]|0;g&&I==u||(f[m]=I,g=!1)}this.g=f}var p={};function _(v){return-128<=v&&128>v?c(v,function(u){return new h([u|0],0>u?-1:0)}):new h([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return k;if(0>v)return P(E(-v));for(var u=[],f=1,g=0;v>=f;g++)u[g]=v/f|0,f*=4294967296;return new h(u,0)}function b(v,u){if(v.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(v.charAt(0)=="-")return P(b(v.substring(1),u));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),g=k,m=0;m<v.length;m+=8){var I=Math.min(8,v.length-m),d=parseInt(v.substring(m,m+I),u);8>I?(I=E(Math.pow(u,I)),g=g.j(I).add(E(d))):(g=g.j(f),g=g.add(E(d)))}return g}var k=_(0),S=_(1),M=_(16777216);n=h.prototype,n.m=function(){if(x(this))return-P(this).m();for(var v=0,u=1,f=0;f<this.g.length;f++){var g=this.i(f);v+=(0<=g?g:4294967296+g)*u,u*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(x(this))return"-"+P(this).toString(v);for(var u=E(Math.pow(v,6)),f=this,g="";;){var m=j(f,u).g;f=Q(f,m.j(u));var I=((0<f.g.length?f.g[0]:f.h)>>>0).toString(v);if(f=m,R(f))return I+g;for(;6>I.length;)I="0"+I;g=I+g}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var u=0;u<v.g.length;u++)if(v.g[u]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=Q(this,v),x(v)?-1:R(v)?0:1};function P(v){for(var u=v.g.length,f=[],g=0;g<u;g++)f[g]=~v.g[g];return new h(f,~v.h).add(S)}n.abs=function(){return x(this)?P(this):this},n.add=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0,m=0;m<=u;m++){var I=g+(this.i(m)&65535)+(v.i(m)&65535),d=(I>>>16)+(this.i(m)>>>16)+(v.i(m)>>>16);g=d>>>16,I&=65535,d&=65535,f[m]=d<<16|I}return new h(f,f[f.length-1]&-2147483648?-1:0)};function Q(v,u){return v.add(P(u))}n.j=function(v){if(R(this)||R(v))return k;if(x(this))return x(v)?P(this).j(P(v)):P(P(this).j(v));if(x(v))return P(this.j(P(v)));if(0>this.l(M)&&0>v.l(M))return E(this.m()*v.m());for(var u=this.g.length+v.g.length,f=[],g=0;g<2*u;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<v.g.length;m++){var I=this.i(g)>>>16,d=this.i(g)&65535,de=v.i(m)>>>16,nt=v.i(m)&65535;f[2*g+2*m]+=d*nt,K(f,2*g+2*m),f[2*g+2*m+1]+=I*nt,K(f,2*g+2*m+1),f[2*g+2*m+1]+=d*de,K(f,2*g+2*m+1),f[2*g+2*m+2]+=I*de,K(f,2*g+2*m+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function K(v,u){for(;(v[u]&65535)!=v[u];)v[u+1]+=v[u]>>>16,v[u]&=65535,u++}function F(v,u){this.g=v,this.h=u}function j(v,u){if(R(u))throw Error("division by zero");if(R(v))return new F(k,k);if(x(v))return u=j(P(v),u),new F(P(u.g),P(u.h));if(x(u))return u=j(v,P(u)),new F(P(u.g),u.h);if(30<v.g.length){if(x(v)||x(u))throw Error("slowDivide_ only works with positive integers.");for(var f=S,g=u;0>=g.l(v);)f=te(f),g=te(g);var m=V(f,1),I=V(g,1);for(g=V(g,2),f=V(f,2);!R(g);){var d=I.add(g);0>=d.l(v)&&(m=m.add(f),I=d),g=V(g,1),f=V(f,1)}return u=Q(v,m.j(u)),new F(m,u)}for(m=k;0<=v.l(u);){for(f=Math.max(1,Math.floor(v.m()/u.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),I=E(f),d=I.j(u);x(d)||0<d.l(v);)f-=g,I=E(f),d=I.j(u);R(I)&&(I=S),m=m.add(I),v=Q(v,d)}return new F(m,v)}n.A=function(v){return j(this,v).h},n.and=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)&v.i(g);return new h(f,this.h&v.h)},n.or=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)|v.i(g);return new h(f,this.h|v.h)},n.xor=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)^v.i(g);return new h(f,this.h^v.h)};function te(v){for(var u=v.g.length+1,f=[],g=0;g<u;g++)f[g]=v.i(g)<<1|v.i(g-1)>>>31;return new h(f,v.h)}function V(v,u){var f=u>>5;u%=32;for(var g=v.g.length-f,m=[],I=0;I<g;I++)m[I]=0<u?v.i(I+f)>>>u|v.i(I+f+1)<<32-u:v.i(I+f);return new h(m,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=b,po=h}).apply(typeof ss<"u"?ss:typeof self<"u"?self:typeof window<"u"?window:{});var Yt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yt=="object"&&Yt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var y=t[l];if(!(y in a))break e;a=a[y]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,y={next:function(){if(!l&&a<t.length){var w=a++;return{value:s(w,t[w]),done:!1}}return l=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function _(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function b(t,s,a){return t.call.apply(t.bind,arguments)}function k(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,l),t.apply(s,y)}}return function(){return t.apply(s,arguments)}}function S(t,s,a){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:k,S.apply(null,arguments)}function M(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function R(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,y,w){for(var T=Array(arguments.length-2),N=2;N<arguments.length;N++)T[N-2]=arguments[N];return s.prototype[y].apply(l,T)}}function x(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function P(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(_(l)){const y=t.length||0,w=l.length||0;t.length=y+w;for(let T=0;T<w;T++)t[y+T]=l[T]}else t.push(l)}}class Q{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function K(t){return/^[\s\xa0]*$/.test(t)}function F(){var t=p.navigator;return t&&(t=t.userAgent)?t:""}function j(t){return j[" "](t),t}j[" "]=function(){};var te=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function V(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function v(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,l;for(let y=1;y<arguments.length;y++){l=arguments[y];for(a in l)t[a]=l[a];for(let w=0;w<f.length;w++)a=f[w],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function I(t){p.setTimeout(()=>{throw t},0)}function d(){var t=wn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class de{constructor(){this.h=this.g=null}add(s,a){const l=nt.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var nt=new Q(()=>new Co,t=>t.reset());class Co{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let it,rt=!1,wn=new de,Li=()=>{const t=p.Promise.resolve(void 0);it=()=>{t.then(Oo)}};var Oo=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){I(a)}var s=nt;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}rt=!1};function we(){this.s=this.s,this.C=this.C}we.prototype.s=!1,we.prototype.ma=function(){this.s||(this.s=!0,this.N())},we.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var Do=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};p.addEventListener("test",a,s),p.removeEventListener("test",a,s)}catch{}return t}();function st(t,s){if(H.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(te){e:{try{j(s.nodeName);var y=!0;break e}catch{}y=!1}y||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:No[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.aa.h.call(this)}}R(st,H);var No={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),Lo=0;function Mo(t,s,a,l,y){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=y,this.key=++Lo,this.da=this.fa=!1}function Mt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ut(t){this.src=t,this.g={},this.h=0}Ut.prototype.add=function(t,s,a,l,y){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var T=Tn(t,s,l,y);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new Mo(s,this.src,w,!!l,y),s.fa=a,t.push(s)),s};function En(t,s){var a=s.type;if(a in t.g){var l=t.g[a],y=Array.prototype.indexOf.call(l,s,void 0),w;(w=0<=y)&&Array.prototype.splice.call(l,y,1),w&&(Mt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function Tn(t,s,a,l){for(var y=0;y<t.length;++y){var w=t[y];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==l)return y}return-1}var bn="closure_lm_"+(1e6*Math.random()|0),An={};function Mi(t,s,a,l,y){if(Array.isArray(s)){for(var w=0;w<s.length;w++)Mi(t,s[w],a,l,y);return null}return a=Fi(a),t&&t[Lt]?t.K(s,a,E(l)?!!l.capture:!1,y):Uo(t,s,a,!1,l,y)}function Uo(t,s,a,l,y,w){if(!s)throw Error("Invalid event type");var T=E(y)?!!y.capture:!!y,N=kn(t);if(N||(t[bn]=N=new Ut(t)),a=N.add(s,a,l,T,w),a.proxy)return a;if(l=xo(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)Do||(y=T),y===void 0&&(y=!1),t.addEventListener(s.toString(),l,y);else if(t.attachEvent)t.attachEvent(xi(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function xo(){function t(a){return s.call(t.src,t.listener,a)}const s=Fo;return t}function Ui(t,s,a,l,y){if(Array.isArray(s))for(var w=0;w<s.length;w++)Ui(t,s[w],a,l,y);else l=E(l)?!!l.capture:!!l,a=Fi(a),t&&t[Lt]?(t=t.i,s=String(s).toString(),s in t.g&&(w=t.g[s],a=Tn(w,a,l,y),-1<a&&(Mt(w[a]),Array.prototype.splice.call(w,a,1),w.length==0&&(delete t.g[s],t.h--)))):t&&(t=kn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=Tn(s,a,l,y)),(a=-1<t?s[t]:null)&&Sn(a))}function Sn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Lt])En(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(xi(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=kn(s))?(En(a,t),a.h==0&&(a.src=null,s[bn]=null)):Mt(t)}}}function xi(t){return t in An?An[t]:An[t]="on"+t}function Fo(t,s){if(t.da)t=!0;else{s=new st(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&Sn(t),t=a.call(l,s)}return t}function kn(t){return t=t[bn],t instanceof Ut?t:null}var Rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fi(t){return typeof t=="function"?t:(t[Rn]||(t[Rn]=function(s){return t.handleEvent(s)}),t[Rn])}function z(){we.call(this),this.i=new Ut(this),this.M=this,this.F=null}R(z,we),z.prototype[Lt]=!0,z.prototype.removeEventListener=function(t,s,a,l){Ui(this,t,s,a,l)};function q(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new H(s,t);else if(s instanceof H)s.target=s.target||t;else{var y=s;s=new H(l,t),g(s,y)}if(y=!0,a)for(var w=a.length-1;0<=w;w--){var T=s.g=a[w];y=xt(T,l,!0,s)&&y}if(T=s.g=t,y=xt(T,l,!0,s)&&y,y=xt(T,l,!1,s)&&y,a)for(w=0;w<a.length;w++)T=s.g=a[w],y=xt(T,l,!1,s)&&y}z.prototype.N=function(){if(z.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)Mt(a[l]);delete t.g[s],t.h--}}this.F=null},z.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},z.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function xt(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var y=!0,w=0;w<s.length;++w){var T=s[w];if(T&&!T.da&&T.capture==a){var N=T.listener,$=T.ha||T.src;T.fa&&En(t.i,T),y=N.call($,l)!==!1&&y}}return y&&!l.defaultPrevented}function ji(t,s,a){if(typeof t=="function")a&&(t=S(t,a));else if(t&&typeof t.handleEvent=="function")t=S(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:p.setTimeout(t,s||0)}function Bi(t){t.g=ji(()=>{t.g=null,t.i&&(t.i=!1,Bi(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class jo extends we{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Bi(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){we.call(this),this.h=t,this.g={}}R(ot,we);var Vi=[];function $i(t){V(t.g,function(s,a){this.g.hasOwnProperty(a)&&Sn(s)},t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),$i(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=p.JSON.stringify,Bo=p.JSON.parse,Vo=class{stringify(t){return p.JSON.stringify(t,void 0)}parse(t){return p.JSON.parse(t,void 0)}};function Cn(){}Cn.prototype.h=null;function Hi(t){return t.h||(t.h=t.i())}function $o(){}var at={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function On(){H.call(this,"d")}R(On,H);function Dn(){H.call(this,"c")}R(Dn,H);var ze={},zi=null;function Nn(){return zi=zi||new z}ze.La="serverreachability";function Wi(t){H.call(this,ze.La,t)}R(Wi,H);function ct(t){const s=Nn();q(s,new Wi(s))}ze.STAT_EVENT="statevent";function Gi(t,s){H.call(this,ze.STAT_EVENT,t),this.stat=s}R(Gi,H);function J(t){const s=Nn();q(s,new Gi(s,t))}ze.Ma="timingevent";function Ki(t,s){H.call(this,ze.Ma,t),this.size=s}R(Ki,H);function lt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){t()},s)}function ht(){this.g=!0}ht.prototype.xa=function(){this.g=!1};function Ho(t,s,a,l,y,w){t.info(function(){if(t.g)if(w)for(var T="",N=w.split("&"),$=0;$<N.length;$++){var O=N[$].split("=");if(1<O.length){var W=O[0];O=O[1];var G=W.split("_");T=2<=G.length&&G[1]=="type"?T+(W+"="+O+"&"):T+(W+"=redacted&")}}else T=null;else T=w;return"XMLHTTP REQ ("+l+") [attempt "+y+"]: "+s+`
`+a+`
`+T})}function zo(t,s,a,l,y,w,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+y+"]: "+s+`
`+a+`
`+w+" "+T})}function We(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Go(t,a)+(l?" "+l:"")})}function Wo(t,s){t.info(function(){return"TIMEOUT: "+s})}ht.prototype.info=function(){};function Go(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var y=l[1];if(Array.isArray(y)&&!(1>y.length)){var w=y[0];if(w!="noop"&&w!="stop"&&w!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return Pn(a)}catch{return s}}var Ln={NO_ERROR:0,TIMEOUT:8},Ko={},Mn;function Ft(){}R(Ft,Cn),Ft.prototype.g=function(){return new XMLHttpRequest},Ft.prototype.i=function(){return{}},Mn=new Ft;function Ee(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qi}function qi(){this.i=null,this.g="",this.h=!1}var Ji={},Un={};function xn(t,s,a){t.L=1,t.v=$t(fe(s)),t.m=a,t.P=!0,Xi(t,null)}function Xi(t,s){t.F=Date.now(),jt(t),t.A=fe(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),hr(a.i,"t",l),t.C=0,a=t.j.J,t.h=new qi,t.g=Rr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new jo(S(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Vi[0]=y.toString()),y=Vi);for(var w=0;w<y.length;w++){var T=Mi(a,y[w],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),ct(),Ho(t.i,t.u,t.A,t.l,t.R,t.m)}Ee.prototype.ca=function(t){t=t.target;const s=this.M;s&&pe(t)==3?s.j():this.Y(t)},Ee.prototype.Y=function(t){try{if(t==this.g)e:{const G=pe(this.g);var s=this.g.Ba();const qe=this.g.Z();if(!(3>G)&&(G!=3||this.g&&(this.h.h||this.g.oa()||vr(this.g)))){this.J||G!=4||s==7||(s==8||0>=qe?ct(3):ct(2)),Fn(this);var a=this.g.Z();this.X=a;t:if(Yi(this)){var l=vr(this.g);t="";var y=l.length,w=pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Me(this),ut(this);var T="";break t}this.h.i=new p.TextDecoder}for(s=0;s<y;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(w&&s==y-1)});l.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,zo(this.i,this.u,this.A,this.l,this.R,G,a),this.o){if(this.T&&!this.K){t:{if(this.g){var N,$=this.g;if((N=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(N)){var O=N;break t}}O=null}if(a=O)We(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jn(this,a);else{this.o=!1,this.s=3,J(12),Me(this),ut(this);break e}}if(this.P){a=!0;let ie;for(;!this.J&&this.C<T.length;)if(ie=qo(this,T),ie==Un){G==4&&(this.s=4,J(14),a=!1),We(this.i,this.l,null,"[Incomplete Response]");break}else if(ie==Ji){this.s=4,J(15),We(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else We(this.i,this.l,ie,null),jn(this,ie);if(Yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||T.length!=0||this.h.h||(this.s=1,J(16),a=!1),this.o=this.o&&a,!a)We(this.i,this.l,T,"[Invalid Chunked Response]"),Me(this),ut(this);else if(0<T.length&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.ba&&!W.M&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Wn(W),W.M=!0,J(11))}}else We(this.i,this.l,T,null),jn(this,T);G==4&&Me(this),this.o&&!this.J&&(G==4?br(this.j,this):(this.o=!1,jt(this)))}else ua(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,J(12)):(this.s=0,J(13)),Me(this),ut(this)}}}catch{}finally{}};function Yi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function qo(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?Un:(a=Number(s.substring(a,l)),isNaN(a)?Ji:(l+=1,l+a>s.length?Un:(s=s.slice(l,l+a),t.C=l+a,s)))}Ee.prototype.cancel=function(){this.J=!0,Me(this)};function jt(t){t.S=Date.now()+t.I,Qi(t,t.I)}function Qi(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=lt(S(t.ba,t),s)}function Fn(t){t.B&&(p.clearTimeout(t.B),t.B=null)}Ee.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Wo(this.i,this.A),this.L!=2&&(ct(),J(17)),Me(this),this.s=2,ut(this)):Qi(this,this.S-t)};function ut(t){t.j.G==0||t.J||br(t.j,t)}function Me(t){Fn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,$i(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function jn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Bn(a.h,t))){if(!t.K&&Bn(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var y=l;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)qt(a),Gt(a);else break e;zn(a),J(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=lt(S(a.Za,a),6e3));if(1>=tr(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else xe(a,11)}else if((t.K||a.g==t)&&qt(a),!K(s))for(y=a.Da.g.parse(s),s=0;s<y.length;s++){let O=y[s];if(a.T=O[0],O=O[1],a.G==2)if(O[0]=="c"){a.K=O[1],a.ia=O[2];const W=O[3];W!=null&&(a.la=W,a.j.info("VER="+a.la));const G=O[4];G!=null&&(a.Aa=G,a.j.info("SVER="+a.Aa));const qe=O[5];qe!=null&&typeof qe=="number"&&0<qe&&(l=1.5*qe,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ie=t.g;if(ie){const Jt=ie.g?ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jt){var w=l.h;w.g||Jt.indexOf("spdy")==-1&&Jt.indexOf("quic")==-1&&Jt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Vn(w,w.h),w.h=null))}if(l.D){const Gn=ie.g?ie.g.getResponseHeader("X-HTTP-Session-Id"):null;Gn&&(l.ya=Gn,U(l.I,l.D,Gn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var T=t;if(l.qa=kr(l,l.J?l.ia:null,l.W),T.K){nr(l.h,T);var N=T,$=l.L;$&&(N.I=$),N.B&&(Fn(N),jt(N)),l.g=T}else Er(l);0<a.i.length&&Kt(a)}else O[0]!="stop"&&O[0]!="close"||xe(a,7);else a.G==3&&(O[0]=="stop"||O[0]=="close"?O[0]=="stop"?xe(a,7):Hn(a):O[0]!="noop"&&a.l&&a.l.ta(O),a.v=0)}}ct(4)}catch{}}var Jo=class{constructor(t,s){this.g=t,this.map=s}};function Zi(t){this.l=t||10,p.PerformanceNavigationTiming?(t=p.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function er(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tr(t){return t.h?1:t.g?t.g.size:0}function Bn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Vn(t,s){t.g?t.g.add(s):t.h=s}function nr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Zi.prototype.cancel=function(){if(this.i=ir(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ir(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return x(t.i)}function Xo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function Yo(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function rr(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(_(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Yo(t),l=Xo(t),y=l.length,w=0;w<y;w++)s.call(void 0,l[w],a&&a[w],t)}var sr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qo(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),y=null;if(0<=l){var w=t[a].substring(0,l);y=t[a].substring(l+1)}else w=t[a];s(w,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,Bt(this,t.j),this.o=t.o,this.g=t.g,Vt(this,t.s),this.l=t.l;var s=t.i,a=new pt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),or(this,a),this.m=t.m}else t&&(s=String(t).match(sr))?(this.h=!1,Bt(this,s[1]||"",!0),this.o=dt(s[2]||""),this.g=dt(s[3]||"",!0),Vt(this,s[4]),this.l=dt(s[5]||"",!0),or(this,s[6]||"",!0),this.m=dt(s[7]||"")):(this.h=!1,this.i=new pt(null,this.h))}Ue.prototype.toString=function(){var t=[],s=this.j;s&&t.push(ft(s,ar,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(ft(s,ar,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(ft(a,a.charAt(0)=="/"?ta:ea,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",ft(a,ia)),t.join("")};function fe(t){return new Ue(t)}function Bt(t,s,a){t.j=a?dt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Vt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function or(t,s,a){s instanceof pt?(t.i=s,ra(t.i,t.h)):(a||(s=ft(s,na)),t.i=new pt(s,t.h))}function U(t,s,a){t.i.set(s,a)}function $t(t){return U(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function dt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ft(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Zo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ar=/[#\/\?@]/g,ea=/[#\?:]/g,ta=/[#\?]/g,na=/[#\?@]/g,ia=/#/g;function pt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Te(t){t.g||(t.g=new Map,t.h=0,t.i&&Qo(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}n=pt.prototype,n.add=function(t,s){Te(this),this.i=null,t=Ge(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function cr(t,s){Te(t),s=Ge(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function lr(t,s){return Te(t),s=Ge(t,s),t.g.has(s)}n.forEach=function(t,s){Te(this),this.g.forEach(function(a,l){a.forEach(function(y){t.call(s,y,l,this)},this)},this)},n.na=function(){Te(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const y=t[l];for(let w=0;w<y.length;w++)a.push(s[l])}return a},n.V=function(t){Te(this);let s=[];if(typeof t=="string")lr(this,t)&&(s=s.concat(this.g.get(Ge(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},n.set=function(t,s){return Te(this),this.i=null,t=Ge(this,t),lr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},n.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function hr(t,s,a){cr(t,s),0<a.length&&(t.i=null,t.g.set(Ge(t,s),x(a)),t.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const w=encodeURIComponent(String(l)),T=this.V(l);for(l=0;l<T.length;l++){var y=w;T[l]!==""&&(y+="="+encodeURIComponent(String(T[l]))),t.push(y)}}return this.i=t.join("&")};function Ge(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ra(t,s){s&&!t.j&&(Te(t),t.i=null,t.g.forEach(function(a,l){var y=l.toLowerCase();l!=y&&(cr(this,l),hr(this,y,a))},t)),t.j=s}function sa(t,s){const a=new ht;if(p.Image){const l=new Image;l.onload=M(be,a,"TestLoadImage: loaded",!0,s,l),l.onerror=M(be,a,"TestLoadImage: error",!1,s,l),l.onabort=M(be,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=M(be,a,"TestLoadImage: timeout",!1,s,l),p.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function oa(t,s){const a=new ht,l=new AbortController,y=setTimeout(()=>{l.abort(),be(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(w=>{clearTimeout(y),w.ok?be(a,"TestPingServer: ok",!0,s):be(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),be(a,"TestPingServer: error",!1,s)})}function be(t,s,a,l,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),l(a)}catch{}}function aa(){this.g=new Vo}function ca(t,s,a){const l=a||"";try{rr(t,function(y,w){let T=y;E(y)&&(T=Pn(y)),s.push(l+w+"="+encodeURIComponent(T))})}catch(y){throw s.push(l+"type="+encodeURIComponent("_badmap")),y}}function Ht(t){this.l=t.Ub||null,this.j=t.eb||!1}R(Ht,Cn),Ht.prototype.g=function(){return new zt(this.l,this.j)},Ht.prototype.i=function(t){return function(){return t}}({});function zt(t,s){z.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(zt,z),n=zt.prototype,n.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,mt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||p).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mt(this)),this.g&&(this.readyState=3,mt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ur(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ur(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?gt(this):mt(this),this.readyState==3&&ur(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,gt(this))},n.Qa=function(t){this.g&&(this.response=t,gt(this))},n.ga=function(){this.g&&gt(this)};function gt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,mt(t)}n.setRequestHeader=function(t,s){this.u.append(t,s)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function mt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function dr(t){let s="";return V(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function $n(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=dr(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):U(t,s,a))}function B(t){z.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(B,z);var la=/^https?$/i,ha=["POST","PUT"];n=B.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mn.g(),this.v=this.o?Hi(this.o):Hi(Mn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){fr(this,w);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var y in l)a.set(y,l[y]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())a.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),y=p.FormData&&t instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ha,s,void 0))||l||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,T]of a)this.g.setRequestHeader(w,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mr(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){fr(this,w)}};function fr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,pr(t),Wt(t)}function pr(t){t.A||(t.A=!0,q(t,"complete"),q(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,q(this,"complete"),q(this,"abort"),Wt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wt(this,!0)),B.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?gr(this):this.bb())},n.bb=function(){gr(this)};function gr(t){if(t.h&&typeof h<"u"&&(!t.v[1]||pe(t)!=4||t.Z()!=2)){if(t.u&&pe(t)==4)ji(t.Ea,0,t);else if(q(t,"readystatechange"),pe(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=T===0){var y=String(t.D).match(sr)[1]||null;!y&&p.self&&p.self.location&&(y=p.self.location.protocol.slice(0,-1)),l=!la.test(y?y.toLowerCase():"")}a=l}if(a)q(t,"complete"),q(t,"success");else{t.m=6;try{var w=2<pe(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",pr(t)}}finally{Wt(t)}}}}function Wt(t,s){if(t.g){mr(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||q(t,"ready");try{a.onreadystatechange=l}catch{}}}function mr(t){t.I&&(p.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function pe(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<pe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),Bo(s)}};function vr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ua(t){const s={};t=(t.g&&2<=pe(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(K(t[l]))continue;var a=m(t[l]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[y]||[];s[y]=w,w.push(a)}v(s,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function _r(t){this.Aa=0,this.i=[],this.j=new ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vt("baseRetryDelayMs",5e3,t),this.cb=vt("retryDelaySeedMs",1e4,t),this.Wa=vt("forwardChannelMaxRetries",2,t),this.wa=vt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(t&&t.concurrentRequestLimit),this.Da=new aa,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_r.prototype,n.la=8,n.G=1,n.connect=function(t,s,a,l){J(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=kr(this,null,this.W),Kt(this)};function Hn(t){if(yr(t),t.G==3){var s=t.U++,a=fe(t.I);if(U(a,"SID",t.K),U(a,"RID",s),U(a,"TYPE","terminate"),_t(t,a),s=new Ee(t,t.j,s),s.L=2,s.v=$t(fe(a)),a=!1,p.navigator&&p.navigator.sendBeacon)try{a=p.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&p.Image&&(new Image().src=s.v,a=!0),a||(s.g=Rr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),jt(s)}Sr(t)}function Gt(t){t.g&&(Wn(t),t.g.cancel(),t.g=null)}function yr(t){Gt(t),t.u&&(p.clearTimeout(t.u),t.u=null),qt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&p.clearTimeout(t.s),t.s=null)}function Kt(t){if(!er(t.h)&&!t.s){t.s=!0;var s=t.Ga;it||Li(),rt||(it(),rt=!0),wn.add(s,t),t.B=0}}function da(t,s){return tr(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=lt(S(t.Ga,t,s),Ar(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new Ee(this,this.j,t);let w=this.o;if(this.S&&(w?(w=u(w),g(w,this.S)):w=this.S),this.m!==null||this.O||(y.H=w,w=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=wr(this,y,s),a=fe(this.I),U(a,"RID",t),U(a,"CVER",22),this.D&&U(a,"X-HTTP-Session-Id",this.D),_t(this,a),w&&(this.O?s="headers="+encodeURIComponent(String(dr(w)))+"&"+s:this.m&&$n(a,this.m,w)),Vn(this.h,y),this.Ua&&U(a,"TYPE","init"),this.P?(U(a,"$req",s),U(a,"SID","null"),y.T=!0,xn(y,a,null)):xn(y,a,s),this.G=2}}else this.G==3&&(t?Ir(this,t):this.i.length==0||er(this.h)||Ir(this))};function Ir(t,s){var a;s?a=s.l:a=t.U++;const l=fe(t.I);U(l,"SID",t.K),U(l,"RID",a),U(l,"AID",t.T),_t(t,l),t.m&&t.o&&$n(l,t.m,t.o),a=new Ee(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=wr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Vn(t.h,a),xn(a,l,s)}function _t(t,s){t.H&&V(t.H,function(a,l){U(s,l,a)}),t.l&&rr({},function(a,l){U(s,l,a)})}function wr(t,s,a){a=Math.min(t.i.length,a);var l=t.l?S(t.l.Na,t.l,t):null;e:{var y=t.i;let w=-1;for(;;){const T=["count="+a];w==-1?0<a?(w=y[0].g,T.push("ofs="+w)):w=0:T.push("ofs="+w);let N=!0;for(let $=0;$<a;$++){let O=y[$].g;const W=y[$].map;if(O-=w,0>O)w=Math.max(0,y[$].g-100),N=!1;else try{ca(W,T,"req"+O+"_")}catch{l&&l(W)}}if(N){l=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function Er(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;it||Li(),rt||(it(),rt=!0),wn.add(s,t),t.v=0}}function zn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=lt(S(t.Fa,t),Ar(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,Tr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=lt(S(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,J(10),Gt(this),Tr(this))};function Wn(t){t.A!=null&&(p.clearTimeout(t.A),t.A=null)}function Tr(t){t.g=new Ee(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=fe(t.qa);U(s,"RID","rpc"),U(s,"SID",t.K),U(s,"AID",t.T),U(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&U(s,"TO",t.ja),U(s,"TYPE","xmlhttp"),_t(t,s),t.m&&t.o&&$n(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=$t(fe(s)),a.m=null,a.P=!0,Xi(a,t)}n.Za=function(){this.C!=null&&(this.C=null,Gt(this),zn(this),J(19))};function qt(t){t.C!=null&&(p.clearTimeout(t.C),t.C=null)}function br(t,s){var a=null;if(t.g==s){qt(t),Wn(t),t.g=null;var l=2}else if(Bn(t.h,s))a=s.D,nr(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var y=t.B;l=Nn(),q(l,new Ki(l,a)),Kt(t)}else Er(t);else if(y=s.s,y==3||y==0&&0<s.X||!(l==1&&da(t,s)||l==2&&zn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),y){case 1:xe(t,5);break;case 4:xe(t,10);break;case 3:xe(t,6);break;default:xe(t,2)}}}function Ar(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function xe(t,s){if(t.j.info("Error code "+s),s==2){var a=S(t.fb,t),l=t.Xa;const y=!l;l=new Ue(l||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Bt(l,"https"),$t(l),y?sa(l.toString(),a):oa(l.toString(),a)}else J(2);t.G=0,t.l&&t.l.sa(s),Sr(t),yr(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Sr(t){if(t.G=0,t.ka=[],t.l){const s=ir(t.h);(s.length!=0||t.i.length!=0)&&(P(t.ka,s),P(t.ka,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.ra()}}function kr(t,s,a){var l=a instanceof Ue?fe(a):new Ue(a);if(l.g!="")s&&(l.g=s+"."+l.g),Vt(l,l.s);else{var y=p.location;l=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;var w=new Ue(null);l&&Bt(w,l),s&&(w.g=s),y&&Vt(w,y),a&&(w.l=a),l=w}return a=t.D,s=t.ya,a&&s&&U(l,a,s),U(l,"VER",t.la),_t(t,l),l}function Rr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new B(new Ht({eb:a})):new B(t.pa),s.Ha(t.J),s}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pr(){}n=Pr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ne(t,s){z.call(this),this.g=new _r(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!K(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!K(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Ke(this)}R(ne,z),ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ne.prototype.close=function(){Hn(this.g)},ne.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=Pn(t),t=a);s.i.push(new Jo(s.Ya++,t)),s.G==3&&Kt(s)},ne.prototype.N=function(){this.g.l=null,delete this.j,Hn(this.g),delete this.g,ne.aa.N.call(this)};function Cr(t){On.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}R(Cr,On);function Or(){Dn.call(this),this.status=1}R(Or,Dn);function Ke(t){this.g=t}R(Ke,Pr),Ke.prototype.ua=function(){q(this.g,"a")},Ke.prototype.ta=function(t){q(this.g,new Cr(t))},Ke.prototype.sa=function(t){q(this.g,new Or)},Ke.prototype.ra=function(){q(this.g,"b")},ne.prototype.send=ne.prototype.o,ne.prototype.open=ne.prototype.m,ne.prototype.close=ne.prototype.close,Ln.NO_ERROR=0,Ln.TIMEOUT=8,Ln.HTTP_ERROR=6,Ko.COMPLETE="complete",$o.EventType=at,at.OPEN="a",at.CLOSE="b",at.ERROR="c",at.MESSAGE="d",z.prototype.listen=z.prototype.K,B.prototype.listenOnce=B.prototype.L,B.prototype.getLastError=B.prototype.Ka,B.prototype.getLastErrorCode=B.prototype.Ba,B.prototype.getStatus=B.prototype.Z,B.prototype.getResponseJson=B.prototype.Oa,B.prototype.getResponseText=B.prototype.oa,B.prototype.send=B.prototype.ea,B.prototype.setWithCredentials=B.prototype.Ha}).apply(typeof Yt<"u"?Yt:typeof self<"u"?self:typeof window<"u"?window:{});const os="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new gi("@firebase/firestore");function re(n,...e){if(et.logLevel<=D.DEBUG){const i=e.map(Ri);et.debug(`Firestore (${Nt}): ${n}`,...i)}}function go(n,...e){if(et.logLevel<=D.ERROR){const i=e.map(Ri);et.error(`Firestore (${Nt}): ${n}`,...i)}}function Bh(n,...e){if(et.logLevel<=D.WARN){const i=e.map(Ri);et.warn(`Firestore (${Nt}): ${n}`,...i)}}function Ri(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n="Unexpected state"){const e=`FIRESTORE (${Nt}) INTERNAL ASSERTION FAILED: `+n;throw go(e),new Error(e)}function Et(n,e){n||Pi()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ee extends he{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(X.UNAUTHENTICATED))}shutdown(){}}class $h{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Hh{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Et(this.o===void 0);let r=this.i;const o=_=>this.i!==r?(r=this.i,i(_)):Promise.resolve();let c=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Tt,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const _=c;e.enqueueRetryable(async()=>{await _.promise,await o(this.currentUser)})},p=_=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(_=>p(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Tt)}},0),h()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Et(typeof r.accessToken=="string"),new mo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Et(e===null||typeof e=="string"),new X(e)}}class zh{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wh{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new zh(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){Et(this.o===void 0);const r=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.R;return this.R=c.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(Et(typeof i.token=="string"),this.R=i.token,new Gh(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function qh(n){return n.name==="IndexedDbTransactionError"}class pn{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var as,C;(C=as||(as={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new po([4294967295,4294967295],0);function ei(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,i,r=1e3,o=1.5,c=6e4){this.ui=e,this.timerId=i,this.ko=r,this.qo=o,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const i=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,i-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const h=Date.now()+r,p=new Ci(e,i,h,o,c);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var cs,ls;(ls=cs||(cs={})).ea="default",ls.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Map;function Yh(n,e,i,r){if(e===!0&&r===!0)throw new ee(Z.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function Qh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Pi()}function Zh(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Qh(n);throw new ee(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vo{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new us({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new us(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vh;switch(r.type){case"firstParty":return new Wh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=hs.get(i);r&&(re("ComponentProvider","Removing Datastore"),hs.delete(i),r.terminate())}(this),Promise.resolve()}}function _o(n,e,i,r={}){var o;const c=(n=Zh(n,vo))._getSettings(),h=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==h&&Bh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},c),{host:h,ssl:!1})),r.mockUserToken){let p,_;if(typeof r.mockUserToken=="string")p=r.mockUserToken,_=X.MOCK_USER;else{p=ks(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new ee(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new X(E)}n._authCredentials=new $h(new mo(p,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Jh(this,"async_queue_retry"),this.Vu=()=>{const r=ei();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const i=ei();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const i=ei();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const i=new Tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qh(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const i=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(r);throw go("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.du=!1,r))));return this.mu=i,i}enqueueAfterDelay(e,i,r){this.fu(),this.Ru.indexOf(e)>-1&&(i=0);const o=Ci.createAndSchedule(this,e,i,r,c=>this.yu(c));return this.Tu.push(o),o}fu(){this.Eu&&Pi()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const i of this.Tu)if(i.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.Tu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const i=this.Tu.indexOf(e);this.Tu.splice(i,1)}}class eu extends vo{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=new ds,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ds(e),this._firestoreClient=void 0,await e}}}function tu(n,e){const i=typeof n=="object"?n:vi(),r=typeof n=="string"?n:"(default)",o=_n(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=bs("firestore");c&&_o(o,...c)}return o}(function(e,i=!0){(function(o){Nt=o})(He),Ve(new Ne("firestore",(r,{instanceIdentifier:o,options:c})=>{const h=r.getProvider("app").getImmediate(),p=new eu(new Hh(r.getProvider("auth-internal")),new Kh(r.getProvider("app-check-internal")),function(E,b){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new ee(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(E.options.projectId,b)}(h,o),h);return c=Object.assign({useFetchStreams:i},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),oe(os,"4.7.3",e),oe(os,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="firebasestorage.googleapis.com",nu="storageBucket",iu=2*60*1e3,ru=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends he{constructor(e,i,r=0){super(ti(e),`Firebase Storage: ${i} (${ti(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ti(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var le;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(le||(le={}));function ti(n){return"storage/"+n}function su(){const n="An unknown error occurred, please check the error payload for server response.";return new ue(le.UNKNOWN,n)}function ou(){return new ue(le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function au(){return new ue(le.CANCELED,"User canceled the upload/download.")}function cu(n){return new ue(le.INVALID_URL,"Invalid URL '"+n+"'.")}function lu(n){return new ue(le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function fs(n){return new ue(le.INVALID_ARGUMENT,n)}function Io(){return new ue(le.APP_DELETED,"The Firebase app was deleted.")}function hu(n){return new ue(le.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let r;try{r=se.makeFromUrl(e,i)}catch{return new se(e,"")}if(r.path==="")return r;throw lu(e)}static makeFromUrl(e,i){let r=null;const o="([A-Za-z0-9.\\-_]+)";function c(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const h="(/(.*))?$",p=new RegExp("^gs://"+o+h,"i"),_={bucket:1,path:3};function E(j){j.path_=decodeURIComponent(j.path)}const b="v[A-Za-z0-9_]+",k=i.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",M=new RegExp(`^https?://${k}/${b}/b/${o}/o${S}`,"i"),R={bucket:1,path:3},x=i===yo?"(?:storage.googleapis.com|storage.cloud.google.com)":i,P="([^?#]*)",Q=new RegExp(`^https?://${x}/${o}/${P}`,"i"),F=[{regex:p,indices:_,postModify:c},{regex:M,indices:R,postModify:E},{regex:Q,indices:{bucket:1,path:2},postModify:E}];for(let j=0;j<F.length;j++){const te=F[j],V=te.regex.exec(e);if(V){const v=V[te.indices.bucket];let u=V[te.indices.path];u||(u=""),r=new se(v,u),te.postModify(r);break}}if(r==null)throw cu(e);return r}}class uu{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n,e,i){let r=1,o=null,c=null,h=!1,p=0;function _(){return p===2}let E=!1;function b(...P){E||(E=!0,e.apply(null,P))}function k(P){o=setTimeout(()=>{o=null,n(M,_())},P)}function S(){c&&clearTimeout(c)}function M(P,...Q){if(E){S();return}if(P){S(),b.call(null,P,...Q);return}if(_()||h){S(),b.call(null,P,...Q);return}r<64&&(r*=2);let F;p===1?(p=2,F=0):F=(r+Math.random())*1e3,k(F)}let R=!1;function x(P){R||(R=!0,S(),!E&&(o!==null?(P||(p=2),clearTimeout(o),k(0)):P||(p=1)))}return k(0),c=setTimeout(()=>{h=!0,x(!0)},i),x}function fu(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){return n!==void 0}function ps(n,e,i,r){if(r<e)throw fs(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>i)throw fs(`Invalid value for '${n}'. Expected ${i} or less.`)}function gu(n){const e=encodeURIComponent;let i="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);i=i+o+"&"}return i=i.slice(0,-1),i}var gn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(gn||(gn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,e){const i=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,c=e.indexOf(n)!==-1;return i||o||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,i,r,o,c,h,p,_,E,b,k,S=!0){this.url_=e,this.method_=i,this.headers_=r,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=p,this.errorCallback_=_,this.timeout_=E,this.progressCallback_=b,this.connectionFactory_=k,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,R)=>{this.resolve_=M,this.reject_=R,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new Qt(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=p=>{const _=p.loaded,E=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(_,E)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const p=c.getErrorCode()===gn.NO_ERROR,_=c.getStatus();if(!p||mu(_,this.additionalRetryCodes_)&&this.retry){const b=c.getErrorCode()===gn.ABORT;r(!1,new Qt(!1,null,b));return}const E=this.successCodes_.indexOf(_)!==-1;r(!0,new Qt(E,c))})},i=(r,o)=>{const c=this.resolve_,h=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const _=this.callback_(p,p.getResponse());pu(_)?c(_):c()}catch(_){h(_)}else if(p!==null){const _=su();_.serverResponse=p.getErrorText(),this.errorCallback_?h(this.errorCallback_(p,_)):h(_)}else if(o.canceled){const _=this.appDelete_?Io():au();h(_)}else{const _=ou();h(_)}};this.canceled_?i(!1,new Qt(!1,null,!0)):this.backoffId_=du(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fu(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qt{constructor(e,i,r){this.wasSuccessCode=e,this.connection=i,this.canceled=!!r}}function _u(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function yu(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Iu(n,e){e&&(n["X-Firebase-GMPID"]=e)}function wu(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Eu(n,e,i,r,o,c,h=!0){const p=gu(n.urlParams),_=n.url+p,E=Object.assign({},n.headers);return Iu(E,e),_u(E,i),yu(E,c),wu(E,r),new vu(_,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bu(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,i){this._service=e,i instanceof se?this._location=i:this._location=se.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new mn(e,i)}get root(){const e=new se(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bu(this._location.path)}get storage(){return this._service}get parent(){const e=Tu(this._location.path);if(e===null)return null;const i=new se(this._location.bucket,e);return new mn(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw hu(e)}}function gs(n,e){const i=e==null?void 0:e[nu];return i==null?null:se.makeFromBucketSpec(i,n)}function Au(n,e,i,r={}){n.host=`${e}:${i}`,n._protocol="http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:ks(o,n.app.options.projectId))}class Su{constructor(e,i,r,o,c){this.app=e,this._authProvider=i,this._appCheckProvider=r,this._url=o,this._firebaseVersion=c,this._bucket=null,this._host=yo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iu,this._maxUploadRetryTime=ru,this._requests=new Set,o!=null?this._bucket=se.makeFromBucketSpec(o,this._host):this._bucket=gs(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=se.makeFromBucketSpec(this._url,e):this._bucket=gs(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ps("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ps("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mn(this,e)}_makeRequest(e,i,r,o,c=!0){if(this._deleted)return new uu(Io());{const h=Eu(e,this._appId,r,o,i,this._firebaseVersion,c);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,i){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,r,o).getPromise()}}const ms="@firebase/storage",vs="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="storage";function ku(n=vi(),e){n=Le(n);const r=_n(n,wo).getImmediate({identifier:e}),o=bs("storage");return o&&Eo(r,...o),r}function Eo(n,e,i,r={}){Au(n,e,i,r)}function Ru(n,{instanceIdentifier:e}){const i=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Su(i,r,o,e,He)}function Pu(){Ve(new Ne(wo,Ru,"PUBLIC").setMultipleInstances(!0)),oe(ms,vs,""),oe(ms,vs,"esm2017")}Pu();const di={apiKey:"FAKE-KEY",authDomain:"FAKE-DOMAIN.firebaseapp.com",projectId:"aktywni-dev",storageBucket:"aktywni-dev.appspot.com",messagingSenderId:"000000000000",appId:"1:000000000000:web:aaaaaaaaaaaaaaaaaaaaaa"},Cu=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId"],Ou=Cu.every(n=>typeof di[n]=="string"&&di[n]);let Fe,yt,Zt,en;function Du(){if(Fe)return{app:Fe,auth:yt,db:Zt,storage:en};if(!Ou)return console.warn("[Firebase] Pomijam inicjalizację – brak konfiguracji env (prod bez kluczy). UI działa, backend dojdzie później."),{app:null,auth:null,db:null,storage:null};if(Fe=Cs(di),yt=Fh(Fe),Zt=tu(Fe),en=ku(Fe),Sl(yt,ro),location.hostname==="localhost"||location.hostname==="127.0.0.1")try{Ys(yt,"http://127.0.0.1:9099",{disableWarnings:!0}),_o(Zt,"127.0.0.1",8080),Eo(en,"127.0.0.1",9199),console.log("[Firebase] Emulatory podłączone")}catch(n){console.warn("[Firebase] Nie udało się podłączyć emulatorów:",n)}return{app:Fe,auth:yt,db:Zt,storage:en}}Du();const _s={"/":()=>kt("home-tpl"),"/wydarzenia":ko,"/nowe":()=>Mu(()=>kt("create-tpl",ju)),"/login":Bu,"/profil":Vu};function kt(n,e){const i=document.getElementById(n);document.getElementById("app").innerHTML=i.innerHTML,e&&e()}function To(){const n=location.hash.replace("#","");document.querySelectorAll("header .btn").forEach(e=>e.classList.remove("active")),n.startsWith("/wydarzenia")&&document.getElementById("nav-events").classList.add("active"),n.startsWith("/nowe")&&document.getElementById("nav-create").classList.add("active"),n.startsWith("/login")&&document.getElementById("nav-login").classList.add("active"),n.startsWith("/profil")&&document.getElementById("nav-profile").classList.add("active")}window.addEventListener("hashchange",()=>{To(),bo()});function bo(){const n=location.hash.replace("#","")||"/";(_s[n]||_s["/"])(),Ni()}const Oi="aktywni:auth:user";function Di(){try{return JSON.parse(localStorage.getItem(Oi))}catch{return null}}function Nu(n){localStorage.setItem(Oi,JSON.stringify(n)),Ni()}function Lu(){localStorage.removeItem(Oi),Ni()}function Ni(){const n=Di(),e=document.getElementById("nav-login"),i=document.getElementById("nav-profile"),r=document.getElementById("nav-create");!e||!i||(n?(e.style.display="none",i.style.display="",i.textContent=n.name?`Profil (${n.name})`:"Profil",r.classList.remove("link")):(e.style.display="",i.style.display="none",i.textContent="Profil",r.classList.add("link")))}function Mu(n){if(!Di()){location.hash="#/login";return}n()}const fi="aktywni:events:v1",Ao="aktywni:signups:v1";function bt(){try{if(window.crypto&&window.crypto.randomUUID)return window.crypto.randomUUID()}catch{}return"id-"+Math.random().toString(36).slice(2)+Date.now()}const ys=[{id:bt(),title:"Bieg nad Wisłą",datetime:ni(3,"18:00"),place:"Bulwary Wiślane, Warszawa",lat:52.237,lng:21.022,capacity:20,taken:5,banner:"https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1200&auto=format&fit=crop",desc:"Lekki bieg ~6km, tempo konwersacyjne. Każdy mile widziany."},{id:bt(),title:"Siatkówka plażowa",datetime:ni(5,"17:30"),place:"Plaża Poniatówka",lat:52.234,lng:21.04,capacity:12,taken:9,banner:"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",desc:"Gramy 3×3, poziom rekreacyjny. Zabierz wodę i uśmiech :)"},{id:bt(),title:"Joga w parku",datetime:ni(2,"08:30"),place:"Park Skaryszewski",lat:52.244,lng:21.056,capacity:25,taken:12,banner:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop",desc:"Poranna sesja vinyasa, mata mile widziana."}];function ni(n,e="10:00"){const i=new Date(Date.now()+n*24*3600*1e3),r=i.getFullYear(),o=String(i.getMonth()+1).padStart(2,"0"),c=String(i.getDate()).padStart(2,"0");return`${r}-${o}-${c}T${e}`}function vn(){const n=localStorage.getItem(fi);if(n)try{return JSON.parse(n)}catch(e){console.warn(e)}return localStorage.setItem(fi,JSON.stringify(ys)),ys}function So(n){localStorage.setItem(fi,JSON.stringify(n))}function Uu(){return JSON.parse(localStorage.getItem(Ao)||"{}")}function xu(n){localStorage.setItem(Ao,JSON.stringify(n))}function ko(){kt("events-tpl");const n=document.getElementById("events-list"),e=vn().sort((i,r)=>new Date(i.datetime)-new Date(r.datetime));n.innerHTML="",e.forEach(i=>n.appendChild(Fu(i)))}function Fu(n){const e=document.createElement("div");return e.className="event",e.innerHTML=`
    <div class="banner">${n.banner?`<img src="${n.banner}" alt="${n.title}">`:""}</div>
    <div>
      <div class="title">${n.title}</div>
      <div class="meta">${Po(n.datetime)} · ${n.place}</div>
    </div>
    <div style="display:flex; gap:8px; align-items:center">
      ${Ro(n)}
      <button class="btn" aria-label="Otwórz szczegóły">Szczegóły</button>
    </div>`,e.querySelector("button").addEventListener("click",()=>$u(n.id)),e}function Ro(n){const e=Math.max(0,n.capacity-(n.taken||0));return`<span class="pill ${e===0?"none":e<5?"low":"ok"}">${e} wolnych</span>`}function ju(){const n=document.getElementById("create-form");n.addEventListener("submit",e=>{e.preventDefault();const i=new FormData(n),r=Object.fromEntries(i.entries());r.id=bt(),r.capacity=Number(r.capacity)||1,r.taken=0,r.lat=parseFloat(r.lat),r.lng=parseFloat(r.lng),So([...vn(),r]),location.hash="#/wydarzenia"})}function Bu(){kt("login-tpl",()=>{const n=document.getElementById("login-form");n.addEventListener("submit",e=>{e.preventDefault();const{email:i,name:r}=Object.fromEntries(new FormData(n).entries());Nu({uid:bt(),email:i,name:r}),location.hash="#/profil"})})}function Vu(){const n=Di();if(!n){location.hash="#/login";return}kt("profile-tpl",()=>{const e=document.getElementById("profile-box");e.innerHTML=`
      <div class="meta">Zalogowano jako:</div>
      <div style="font-weight:700">${n.name||"(bez imienia)"}</div>
      <div class="meta">${n.email}</div>
    `,document.getElementById("btn-logout").addEventListener("click",()=>{Lu(),location.hash="#/login"})})}let It,ii;function $u(n){const e=vn().find(c=>c.id===n);if(!e)return;document.getElementById("m-title").textContent=e.title,document.getElementById("m-title-sm").textContent=e.title,document.getElementById("m-when").textContent=Po(e.datetime),document.getElementById("m-place").textContent=e.place,document.getElementById("m-desc").textContent=e.desc||"",document.getElementById("m-cap-pill").outerHTML=Ro(e);const i=document.getElementById("m-banner");i.innerHTML=e.banner?`<img src="${e.banner}" alt="${e.title}" style="width:100%; height:100%; object-fit:cover">`:"",document.getElementById("event-modal").classList.add("open"),It||(It=L.map("map"),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(It)),It.setView([e.lat,e.lng],14),ii&&ii.remove(),ii=L.marker([e.lat,e.lng]).addTo(It).bindPopup(e.title);const o=document.getElementById("join-form");o.onsubmit=c=>{c.preventDefault();const{name:h,email:p}=Object.fromEntries(new FormData(o).entries()),_=vn(),E=_.findIndex(M=>M.id===n),b=_[E].capacity-(_[E].taken||0),k=document.getElementById("join-msg");if(b<=0){k.innerHTML='<span class="danger">Brak miejsc</span>';return}_[E].taken=(_[E].taken||0)+1,So(_);const S=Uu();(S[n]=S[n]||[]).push({name:h,email:p,at:new Date().toISOString()}),xu(S),k.innerHTML='<span class="success">Jesteś zapisany/a! Do zobaczenia 🔥</span>',ko()}}document.getElementById("m-close").addEventListener("click",()=>document.getElementById("event-modal").classList.remove("open"));document.getElementById("event-modal").addEventListener("click",n=>{n.target.id==="event-modal"&&n.currentTarget.classList.remove("open")});function Po(n){try{return new Date(n).toLocaleString("pl-PL",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return n}}document.getElementById("year").textContent=new Date().getFullYear();location.hash||(location.hash="#/");To();bo();
