(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();const Ja="modulepreload",Xa=function(t){return"/aktywni/"+t},Jr={},Ya=function(e,i,r){let s=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),p=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(i.map(m=>{if(m=Xa(m),m in Jr)return;Jr[m]=!0;const E=m.endsWith(".css"),A=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${A}`))return;const b=document.createElement("link");if(b.rel=E?"stylesheet":Ja,E||(b.as="script"),b.crossOrigin="",b.href=m,p&&b.setAttribute("nonce",p),document.head.appendChild(b),E)return new Promise((S,O)=>{b.addEventListener("load",S),b.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(l){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=l,window.dispatchEvent(p),!p.defaultPrevented)throw l}return s.then(l=>{for(const p of l||[])p.status==="rejected"&&c(p.reason);return e().catch(c)})};var Xr={};/**
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
 */const Fs=function(t){const e=[];let i=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[i++]=s:s<2048?(e[i++]=s>>6|192,e[i++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[i++]=s>>18|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128,e[i++]=s&63|128):(e[i++]=s>>12|224,e[i++]=s>>6&63|128,e[i++]=s&63|128)}return e},Za=function(t){const e=[];let i=0,r=0;for(;i<t.length;){const s=t[i++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const c=t[i++];e[r++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=t[i++],l=t[i++],p=t[i++],m=((s&7)<<18|(c&63)<<12|(l&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const c=t[i++],l=t[i++];e[r++]=String.fromCharCode((s&15)<<12|(c&63)<<6|l&63)}}return e.join("")},js={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const c=t[s],l=s+1<t.length,p=l?t[s+1]:0,m=s+2<t.length,E=m?t[s+2]:0,A=c>>2,b=(c&3)<<4|p>>4;let S=(p&15)<<2|E>>6,O=E&63;m||(O=64,l||(S=64)),r.push(i[A],i[b],i[S],i[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Za(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const c=i[t.charAt(s++)],p=s<t.length?i[t.charAt(s)]:0;++s;const E=s<t.length?i[t.charAt(s)]:64;++s;const b=s<t.length?i[t.charAt(s)]:64;if(++s,c==null||p==null||E==null||b==null)throw new Qa;const S=c<<2|p>>4;if(r.push(S),E!==64){const O=p<<4&240|E>>2;if(r.push(O),b!==64){const P=E<<6&192|b;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ec=function(t){const e=Fs(t);return js.encodeByteArray(e,!0)},mn=function(t){return ec(t).replace(/\./g,"")},$s=function(t){try{return js.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nc=()=>tc().__FIREBASE_DEFAULTS__,ic=()=>{if(typeof process>"u"||typeof Xr>"u")return;const t=Xr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$s(t[1]);return e&&JSON.parse(e)},bi=()=>{try{return nc()||ic()||rc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hs=t=>{var e,i;return(i=(e=bi())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[t]},Vs=t=>{const e=Hs(t);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},zs=()=>{var t;return(t=bi())===null||t===void 0?void 0:t.config},Ws=t=>{var e;return(e=bi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function Gs(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,c=t.sub||t.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mn(JSON.stringify(i)),mn(JSON.stringify(l)),""].join(".")}/**
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
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function ac(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uc(){const t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hc(){try{return typeof indexedDB=="object"}catch{return!1}}function dc(){return new Promise((t,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var c;e(((c=s.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
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
 */const fc="FirebaseError";class ge extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=fc,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},s=`${this.service}/${e}`,c=this.errors[e],l=c?pc(c,r):"Error",p=`${this.serviceName}: ${l} (${s}).`;return new ge(s,p,r)}}function pc(t,e){return t.replace(gc,(i,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gc=/\{\$([^}]+)}/g;function mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yn(t,e){if(t===e)return!0;const i=Object.keys(t),r=Object.keys(e);for(const s of i){if(!r.includes(s))return!1;const c=t[s],l=e[s];if(Yr(c)&&Yr(l)){if(!yn(c,l))return!1}else if(c!==l)return!1}for(const s of r)if(!i.includes(s))return!1;return!0}function Yr(t){return t!==null&&typeof t=="object"}/**
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
 */function xt(t){const e=[];for(const[i,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yc(t,e){const i=new _c(t,e);return i.subscribe.bind(i)}class _c{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let s;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");vc(e,["next","error","complete"])?s=e:s={next:e,error:i,complete:r},s.next===void 0&&(s.next=ii),s.error===void 0&&(s.error=ii),s.complete===void 0&&(s.complete=ii);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vc(t,e){if(typeof t!="object"||t===null)return!1;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}function ii(){}/**
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
 */function he(t){return t&&t._delegate?t._delegate:t}class Be{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ve="[DEFAULT]";/**
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
 */class wc{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new sc;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:i});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(s)return null;throw c}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ec(e))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:s});r.resolve(c)}catch{}}}}clearInstance(e=Ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ve){return this.instances.has(e)}getOptions(e=Ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,l]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&l.resolve(s)}return s}onInit(e,i){var r;const s=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(s,c);const l=this.instances.get(s);return l&&e(l,s),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const s of r)try{s(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ic(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ve){return this.component?this.component.multipleInstances?e:Ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ic(t){return t===Ve?void 0:t}function Ec(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new wc(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const bc={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Ac=B.INFO,Sc={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},kc=(t,e,...i)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sc[e];if(s)console[s](`[${r}]  ${t.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ai{constructor(e){this.name=e,this._logLevel=Ac,this._logHandler=kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Rc=(t,e)=>e.some(i=>t instanceof i);let Zr,Qr;function Pc(){return Zr||(Zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cc(){return Qr||(Qr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ks=new WeakMap,pi=new WeakMap,qs=new WeakMap,ri=new WeakMap,Si=new WeakMap;function Oc(t){const e=new Promise((i,r)=>{const s=()=>{t.removeEventListener("success",c),t.removeEventListener("error",l)},c=()=>{i(Me(t.result)),s()},l=()=>{r(t.error),s()};t.addEventListener("success",c),t.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&Ks.set(i,t)}).catch(()=>{}),Si.set(e,t),e}function Dc(t){if(pi.has(t))return;const e=new Promise((i,r)=>{const s=()=>{t.removeEventListener("complete",c),t.removeEventListener("error",l),t.removeEventListener("abort",l)},c=()=>{i(),s()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",c),t.addEventListener("error",l),t.addEventListener("abort",l)});pi.set(t,e)}let gi={get(t,e,i){if(t instanceof IDBTransaction){if(e==="done")return pi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qs.get(t);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Me(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nc(t){gi=t(gi)}function Lc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=t.call(si(this),e,...i);return qs.set(r,e.sort?e.sort():[e]),Me(r)}:Cc().includes(t)?function(...e){return t.apply(si(this),e),Me(Ks.get(this))}:function(...e){return Me(t.apply(si(this),e))}}function Uc(t){return typeof t=="function"?Lc(t):(t instanceof IDBTransaction&&Dc(t),Rc(t,Pc())?new Proxy(t,gi):t)}function Me(t){if(t instanceof IDBRequest)return Oc(t);if(ri.has(t))return ri.get(t);const e=Uc(t);return e!==t&&(ri.set(t,e),Si.set(e,t)),e}const si=t=>Si.get(t);function Mc(t,e,{blocked:i,upgrade:r,blocking:s,terminated:c}={}){const l=indexedDB.open(t,e),p=Me(l);return r&&l.addEventListener("upgradeneeded",m=>{r(Me(l.result),m.oldVersion,m.newVersion,Me(l.transaction),m)}),i&&l.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),s&&m.addEventListener("versionchange",E=>s(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const xc=["get","getKey","getAll","getAllKeys","count"],Bc=["put","add","delete","clear"],oi=new Map;function es(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oi.get(e))return oi.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,s=Bc.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xc.includes(i)))return;const c=async function(l,...p){const m=this.transaction(l,s?"readwrite":"readonly");let E=m.store;return r&&(E=E.index(p.shift())),(await Promise.all([E[i](...p),s&&m.done]))[0]};return oi.set(e,c),c}Nc(t=>({...t,get:(e,i,r)=>es(e,i)||t.get(e,i,r),has:(e,i)=>!!es(e,i)||t.has(e,i)}));/**
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
 */class Fc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(jc(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function jc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mi="@firebase/app",ts="0.10.13";/**
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
 */const Te=new Ai("@firebase/app"),$c="@firebase/app-compat",Hc="@firebase/analytics-compat",Vc="@firebase/analytics",zc="@firebase/app-check-compat",Wc="@firebase/app-check",Gc="@firebase/auth",Kc="@firebase/auth-compat",qc="@firebase/database",Jc="@firebase/data-connect",Xc="@firebase/database-compat",Yc="@firebase/functions",Zc="@firebase/functions-compat",Qc="@firebase/installations",el="@firebase/installations-compat",tl="@firebase/messaging",nl="@firebase/messaging-compat",il="@firebase/performance",rl="@firebase/performance-compat",sl="@firebase/remote-config",ol="@firebase/remote-config-compat",al="@firebase/storage",cl="@firebase/storage-compat",ll="@firebase/firestore",ul="@firebase/vertexai-preview",hl="@firebase/firestore-compat",dl="firebase",fl="10.14.1";/**
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
 */const yi="[DEFAULT]",pl={[mi]:"fire-core",[$c]:"fire-core-compat",[Vc]:"fire-analytics",[Hc]:"fire-analytics-compat",[Wc]:"fire-app-check",[zc]:"fire-app-check-compat",[Gc]:"fire-auth",[Kc]:"fire-auth-compat",[qc]:"fire-rtdb",[Jc]:"fire-data-connect",[Xc]:"fire-rtdb-compat",[Yc]:"fire-fn",[Zc]:"fire-fn-compat",[Qc]:"fire-iid",[el]:"fire-iid-compat",[tl]:"fire-fcm",[nl]:"fire-fcm-compat",[il]:"fire-perf",[rl]:"fire-perf-compat",[sl]:"fire-rc",[ol]:"fire-rc-compat",[al]:"fire-gcs",[cl]:"fire-gcs-compat",[ll]:"fire-fst",[hl]:"fire-fst-compat",[ul]:"fire-vertex","fire-js":"fire-js",[dl]:"fire-js-all"};/**
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
 */const _n=new Map,gl=new Map,_i=new Map;function ns(t,e){try{t.container.addComponent(e)}catch(i){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function Ge(t){const e=t.name;if(_i.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const i of _n.values())ns(i,t);for(const i of gl.values())ns(i,t);return!0}function Rn(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}function Ue(t){return t.settings!==void 0}/**
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
 */const ml={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xe=new Mt("app","Firebase",ml);/**
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
 */class yl{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
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
 */const Je=fl;function Js(t,e={}){let i=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw xe.create("bad-app-name",{appName:String(s)});if(i||(i=zs()),!i)throw xe.create("no-options");const c=_n.get(s);if(c){if(yn(i,c.options)&&yn(r,c.config))return c;throw xe.create("duplicate-app",{appName:s})}const l=new Tc(s);for(const m of _i.values())l.addComponent(m);const p=new yl(i,r,l);return _n.set(s,p),p}function ki(t=yi){const e=_n.get(t);if(!e&&t===yi&&zs())return Js();if(!e)throw xe.create("no-app",{appName:t});return e}function de(t,e,i){var r;let s=(r=pl[t])!==null&&r!==void 0?r:t;i&&(s+=`-${i}`);const c=s.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const p=[`Unable to register library "${s}" with version "${e}":`];c&&p.push(`library name "${s}" contains illegal characters (whitespace or "/")`),c&&l&&p.push("and"),l&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(p.join(" "));return}Ge(new Be(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _l="firebase-heartbeat-database",vl=1,Nt="firebase-heartbeat-store";let ai=null;function Xs(){return ai||(ai=Mc(_l,vl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Nt)}catch(i){console.warn(i)}}}}).catch(t=>{throw xe.create("idb-open",{originalErrorMessage:t.message})})),ai}async function wl(t){try{const i=(await Xs()).transaction(Nt),r=await i.objectStore(Nt).get(Ys(t));return await i.done,r}catch(e){if(e instanceof ge)Te.warn(e.message);else{const i=xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Te.warn(i.message)}}}async function is(t,e){try{const r=(await Xs()).transaction(Nt,"readwrite");await r.objectStore(Nt).put(e,Ys(t)),await r.done}catch(i){if(i instanceof ge)Te.warn(i.message);else{const r=xe.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Te.warn(r.message)}}}function Ys(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Il=1024,El=30*24*60*60*1e3;class Tl{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Al(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=rs();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const p=new Date(l.date).valueOf();return Date.now()-p<=El}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Te.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=rs(),{heartbeatsToSend:r,unsentEntries:s}=bl(this._heartbeatsCache.heartbeats),c=mn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Te.warn(i),""}}}function rs(){return new Date().toISOString().substring(0,10)}function bl(t,e=Il){const i=[];let r=t.slice();for(const s of t){const c=i.find(l=>l.agent===s.agent);if(c){if(c.dates.push(s.date),ss(i)>e){c.dates.pop();break}}else if(i.push({agent:s.agent,dates:[s.date]}),ss(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Al{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hc()?dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await wl(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return is(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return is(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ss(t){return mn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sl(t){Ge(new Be("platform-logger",e=>new Fc(e),"PRIVATE")),Ge(new Be("heartbeat",e=>new Tl(e),"PRIVATE")),de(mi,ts,t),de(mi,ts,"esm2017"),de("fire-js","")}Sl("");var kl="firebase",Rl="10.14.1";/**
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
 */de(kl,Rl,"app");function Ri(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(i[r[s]]=t[r[s]]);return i}function Zs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pl=Zs,Qs=new Mt("auth","Firebase",Zs());/**
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
 */const vn=new Ai("@firebase/auth");function Cl(t,...e){vn.logLevel<=B.WARN&&vn.warn(`Auth (${Je}): ${t}`,...e)}function hn(t,...e){vn.logLevel<=B.ERROR&&vn.error(`Auth (${Je}): ${t}`,...e)}/**
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
 */function be(t,...e){throw Pi(t,...e)}function fe(t,...e){return Pi(t,...e)}function eo(t,e,i){const r=Object.assign(Object.assign({},Pl()),{[e]:i});return new Mt("auth","Firebase",r).create(e,{appName:t.name})}function ze(t){return eo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pi(t,...e){if(typeof t!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(i,...r)}return Qs.create(t,...e)}function C(t,e,...i){if(!t)throw Pi(e,...i)}function we(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hn(e),new Error(e)}function Ae(t,e){t||we(e)}/**
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
 */function vi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ol(){return os()==="http:"||os()==="https:"}function os(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ol()||cc()||"connection"in navigator)?navigator.onLine:!0}function Nl(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bt{constructor(e,i){this.shortDelay=e,this.longDelay=i,Ae(i>e,"Short delay should be less than long delay!"),this.isMobile=oc()||lc()}get(){return Dl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ci(t,e){Ae(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class to{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ll={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ul=new Bt(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function at(t,e,i,r,s={}){return no(t,s,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const p=xt(Object.assign({key:t.config.apiKey},l)).slice(1),m=await t._getAdditionalHeaders();m["Content-Type"]="application/json",t.languageCode&&(m["X-Firebase-Locale"]=t.languageCode);const E=Object.assign({method:e,headers:m},c);return ac()||(E.referrerPolicy="no-referrer"),to.fetch()(io(t,t.config.apiHost,i,p),E)})}async function no(t,e,i){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ll),e);try{const s=new xl(t),c=await Promise.race([i(),s.promise]);s.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw sn(t,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const p=c.ok?l.errorMessage:l.error.message,[m,E]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw sn(t,"credential-already-in-use",l);if(m==="EMAIL_EXISTS")throw sn(t,"email-already-in-use",l);if(m==="USER_DISABLED")throw sn(t,"user-disabled",l);const A=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw eo(t,A,E);be(t,A)}}catch(s){if(s instanceof ge)throw s;be(t,"network-request-failed",{message:String(s)})}}async function Ml(t,e,i,r,s={}){const c=await at(t,e,i,r,s);return"mfaPendingCredential"in c&&be(t,"multi-factor-auth-required",{_serverResponse:c}),c}function io(t,e,i,r){const s=`${e}${i}?${r}`;return t.config.emulator?Ci(t.config,s):`${t.config.apiScheme}://${s}`}class xl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(fe(this.auth,"network-request-failed")),Ul.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sn(t,e,i){const r={appName:t.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const s=fe(t,e,r);return s.customData._tokenResponse=i,s}/**
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
 */async function Bl(t,e){return at(t,"POST","/v1/accounts:delete",e)}async function ro(t,e){return at(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function kt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fl(t,e=!1){const i=he(t),r=await i.getIdToken(e),s=Di(r);C(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:s,token:r,authTime:kt(ci(s.auth_time)),issuedAtTime:kt(ci(s.iat)),expirationTime:kt(ci(s.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function ci(t){return Number(t)*1e3}function Di(t){const[e,i,r]=t.split(".");if(e===void 0||i===void 0||r===void 0)return hn("JWT malformed, contained fewer than 3 sections"),null;try{const s=$s(i);return s?JSON.parse(s):(hn("Failed to decode base64 JWT payload"),null)}catch(s){return hn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function as(t){const e=Di(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lt(t,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof ge&&jl(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $l{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wi{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wn(t){var e;const i=t.auth,r=await t.getIdToken(),s=await Lt(t,ro(i,{idToken:r}));C(s==null?void 0:s.users.length,i,"internal-error");const c=s.users[0];t._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?so(c.providerUserInfo):[],p=Vl(t.providerData,l),m=t.isAnonymous,E=!(t.email&&c.passwordHash)&&!(p!=null&&p.length),A=m?E:!1,b={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new wi(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(t,b)}async function Hl(t){const e=he(t);await wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vl(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function so(t){return t.map(e=>{var{providerId:i}=e,r=Ri(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zl(t,e){const i=await no(t,{},async()=>{const r=xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=t.config,l=io(t,s,"/v1/token",`key=${c}`),p=await t._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",to.fetch()(l,{method:"POST",headers:p,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Wl(t,e){return at(t,"POST","/v2/accounts:revokeToken",Oi(t,e))}/**
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
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):as(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){C(e.length!==0,"internal-error");const i=as(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:s,expiresIn:c}=await zl(e,i);this.updateTokensAndExpiration(r,s,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:s,expirationTime:c}=i,l=new nt;return r&&(C(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(C(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),c&&(C(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
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
 */function Ce(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ie{constructor(e){var{uid:i,auth:r,stsTokenManager:s}=e,c=Ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $l(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new wi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await Lt(this,this.stsTokenManager.getToken(this.auth,e));return C(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Fl(this,e)}reload(){return Hl(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await wn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ze(this.auth));const e=await this.getIdToken();return await Lt(this,Bl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,s,c,l,p,m,E,A;const b=(r=i.displayName)!==null&&r!==void 0?r:void 0,S=(s=i.email)!==null&&s!==void 0?s:void 0,O=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,P=(l=i.photoURL)!==null&&l!==void 0?l:void 0,R=(p=i.tenantId)!==null&&p!==void 0?p:void 0,k=(m=i._redirectEventId)!==null&&m!==void 0?m:void 0,D=(E=i.createdAt)!==null&&E!==void 0?E:void 0,x=(A=i.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:U,emailVerified:F,isAnonymous:ne,providerData:W,stsTokenManager:y}=i;C(U&&y,e,"internal-error");const h=nt.fromJSON(this.name,y);C(typeof U=="string",e,"internal-error"),Ce(b,e.name),Ce(S,e.name),C(typeof F=="boolean",e,"internal-error"),C(typeof ne=="boolean",e,"internal-error"),Ce(O,e.name),Ce(P,e.name),Ce(R,e.name),Ce(k,e.name),Ce(D,e.name),Ce(x,e.name);const f=new Ie({uid:U,auth:e,email:S,emailVerified:F,displayName:b,isAnonymous:ne,photoURL:P,phoneNumber:O,tenantId:R,stsTokenManager:h,createdAt:D,lastLoginAt:x});return W&&Array.isArray(W)&&(f.providerData=W.map(g=>Object.assign({},g))),k&&(f._redirectEventId=k),f}static async _fromIdTokenResponse(e,i,r=!1){const s=new nt;s.updateFromServerResponse(i);const c=new Ie({uid:i.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wn(c),c}static async _fromGetAccountInfoResponse(e,i,r){const s=i.users[0];C(s.localId!==void 0,"internal-error");const c=s.providerUserInfo!==void 0?so(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(c!=null&&c.length),p=new nt;p.updateFromIdToken(r);const m=new Ie({uid:s.localId,auth:e,stsTokenManager:p,isAnonymous:l}),E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new wi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(c!=null&&c.length)};return Object.assign(m,E),m}}/**
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
 */const cs=new Map;function Ee(t){Ae(t instanceof Function,"Expected a class definition");let e=cs.get(t);return e?(Ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cs.set(t,e),e)}/**
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
 */class oo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}oo.type="NONE";const ls=oo;/**
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
 */function dn(t,e,i){return`firebase:${t}:${e}:${i}`}class it{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:s,name:c}=this.auth;this.fullUserKey=dn(this.userKey,s.apiKey,c),this.fullPersistenceKey=dn("persistence",s.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new it(Ee(ls),e,r);const s=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=s[0]||Ee(ls);const l=dn(r,e.config.apiKey,e.name);let p=null;for(const E of i)try{const A=await E._get(l);if(A){const b=Ie._fromJSON(e,A);E!==c&&(p=b),c=E;break}}catch{}const m=s.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new it(c,e,r):(c=m[0],p&&await c._set(l,p.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new it(c,e,r))}}/**
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
 */function us(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ao(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fo(e))return"Blackberry";if(po(e))return"Webos";if(co(e))return"Safari";if((e.includes("chrome/")||lo(e))&&!e.includes("edge/"))return"Chrome";if(ho(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ao(t=te()){return/firefox\//i.test(t)}function co(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lo(t=te()){return/crios\//i.test(t)}function uo(t=te()){return/iemobile/i.test(t)}function ho(t=te()){return/android/i.test(t)}function fo(t=te()){return/blackberry/i.test(t)}function po(t=te()){return/webos/i.test(t)}function Ni(t=te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gl(t=te()){var e;return Ni(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kl(){return uc()&&document.documentMode===10}function go(t=te()){return Ni(t)||ho(t)||po(t)||fo(t)||/windows phone/i.test(t)||uo(t)}/**
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
 */function mo(t,e=[]){let i;switch(t){case"Browser":i=us(te());break;case"Worker":i=`${us(te())}-${t}`;break;default:i=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Je}/${r}`}/**
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
 */class ql{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((l,p)=>{try{const m=e(c);l(m)}catch(m){p(m)}});r.onAbort=i,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const s of i)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Jl(t,e={}){return at(t,"GET","/v2/passwordPolicy",Oi(t,e))}/**
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
 */const Xl=6;class Yl{constructor(e){var i,r,s,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=l.minPasswordLength)!==null&&i!==void 0?i:Xl,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,s,c,l,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(i=m.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(l=m.containsNumericCharacter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),s&&(i.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Zl{constructor(e,i,r,s){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hs(this),this.idTokenSubscription=new hs(this),this.beforeStateQueue=new ql(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Ee(i)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await it.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await ro(this,{idToken:e}),r=await Ie._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ue(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!l||l===p)&&(m!=null&&m.user)&&(s=m.user,c=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await wn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ze(this));const i=e?he(e):null;return i&&C(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ze(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ze(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jl(this),i=new Yl(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mt("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Ee(e)||this._popupRedirectResolver;C(i,this,"argument-error"),this.redirectPersistenceManager=await it.create(this,[Ee(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,s){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let l=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(p,this,"internal-error"),p.then(()=>{l||c(this.currentUser)}),typeof i=="function"){const m=e.addObserver(i,r,s);return()=>{l=!0,m()}}else{const m=e.addObserver(i);return()=>{l=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(i["X-Firebase-AppCheck"]=s),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Cl(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Li(t){return he(t)}class hs{constructor(e){this.auth=e,this.observer=null,this.addObserver=yc(i=>this.observer=i)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ql(t){Ui=t}function eu(t){return Ui.loadJS(t)}function tu(){return Ui.gapiScript}function nu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function iu(t,e){const i=Rn(t,"auth");if(i.isInitialized()){const s=i.getImmediate(),c=i.getOptions();if(yn(c,e??{}))return s;be(s,"already-initialized")}return i.initialize({options:e})}function ru(t,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Ee);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yo(t,e,i){const r=Li(t);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(i!=null&&i.disableWarnings),c=_o(e),{host:l,port:p}=su(e),m=p===null?"":`:${p}`;r.config.emulator={url:`${c}//${l}${m}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ou()}function _o(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function su(t){const e=_o(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const c=s[1];return{host:c,port:ds(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:ds(l)}}}function ds(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ou(){function t(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vo{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,i){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}/**
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
 */async function rt(t,e){return Ml(t,"POST","/v1/accounts:signInWithIdp",Oi(t,e))}/**
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
 */const au="http://localhost";class Ke extends vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):be("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=i,c=Ri(i,["providerId","signInMethod"]);if(!r||!s)return null;const l=new Ke(r,s);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const i=this.buildRequest();return rt(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,rt(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,rt(e,i)}buildRequest(){const e={requestUri:au,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=xt(i)}return e}}/**
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
 */class wo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ft extends wo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Oe extends Ft{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
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
 */class De extends Ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return De.credential(i,r)}catch{return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
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
 */class Ne extends Ft{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.GITHUB_SIGN_IN_METHOD="github.com";Ne.PROVIDER_ID="github.com";/**
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
 */class Le extends Ft{constructor(){super("twitter.com")}static credential(e,i){return Ke._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Le.credential(i,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
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
 */class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,s=!1){const c=await Ie._fromIdTokenResponse(e,r,s),l=fs(r);return new st({user:c,providerId:l,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const s=fs(r);return new st({user:e,providerId:s,_tokenResponse:r,operationType:i})}}function fs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class In extends ge{constructor(e,i,r,s){var c;super(i.code,i.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,In.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,s){return new In(e,i,r,s)}}function Io(t,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?In._fromErrorAndOperation(t,c,e,r):c})}async function cu(t,e,i=!1){const r=await Lt(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return st._forOperation(t,"link",r)}/**
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
 */async function lu(t,e,i=!1){const{auth:r}=t;if(Ue(r.app))return Promise.reject(ze(r));const s="reauthenticate";try{const c=await Lt(t,Io(r,s,e,t),i);C(c.idToken,r,"internal-error");const l=Di(c.idToken);C(l,r,"internal-error");const{sub:p}=l;return C(t.uid===p,r,"user-mismatch"),st._forOperation(t,s,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&be(r,"user-mismatch"),c}}/**
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
 */async function uu(t,e,i=!1){if(Ue(t.app))return Promise.reject(ze(t));const r="signIn",s=await Io(t,r,e),c=await st._fromIdTokenResponse(t,r,s);return i||await t._updateCurrentUser(c.user),c}/**
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
 */function hu(t,e){return he(t).setPersistence(e)}function du(t,e,i,r){return he(t).onIdTokenChanged(e,i,r)}function fu(t,e,i){return he(t).beforeAuthStateChanged(e,i)}const En="__sak";/**
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
 */class Eo{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pu=1e3,gu=10;class To extends Eo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=go(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),s=this.localCache[i];r!==s&&e(i,s,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((l,p,m)=>{this.notifyListeners(l,m)});return}const r=e.key;i?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!i&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);Kl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gu):s()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},pu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}To.type="LOCAL";const bo=To;/**
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
 */class Ao extends Eo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Ao.type="SESSION";const So=Ao;/**
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
 */function mu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(s=>s.isListeningto(e));if(i)return i;const r=new Pn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:s,data:c}=i.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const p=Array.from(l).map(async E=>E(i.origin,c)),m=await mu(p);i.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:m})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pn.receivers=[];/**
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
 */function Mi(t="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return t+i}/**
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
 */class yu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,l;return new Promise((p,m)=>{const E=Mi("",20);s.port1.start();const A=setTimeout(()=>{m(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(b){const S=b;if(S.data.eventId===E)switch(S.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(S.data.response);break;default:clearTimeout(A),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function pe(){return window}function _u(t){pe().location.href=t}/**
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
 */function ko(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function vu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Iu(){return ko()?self:null}/**
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
 */const Ro="firebaseLocalStorageDb",Eu=1,Tn="firebaseLocalStorage",Po="fbase_key";class jt{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Cn(t,e){return t.transaction([Tn],e?"readwrite":"readonly").objectStore(Tn)}function Tu(){const t=indexedDB.deleteDatabase(Ro);return new jt(t).toPromise()}function Ii(){const t=indexedDB.open(Ro,Eu);return new Promise((e,i)=>{t.addEventListener("error",()=>{i(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tn,{keyPath:Po})}catch(s){i(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tn)?e(r):(r.close(),await Tu(),e(await Ii()))})})}async function ps(t,e,i){const r=Cn(t,!0).put({[Po]:e,value:i});return new jt(r).toPromise()}async function bu(t,e){const i=Cn(t,!1).get(e),r=await new jt(i).toPromise();return r===void 0?null:r.value}function gs(t,e){const i=Cn(t,!0).delete(e);return new jt(i).toPromise()}const Au=800,Su=3;class Co{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Su)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ko()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(Iu()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await vu(),!this.activeServiceWorker)return;this.sender=new yu(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await ps(e,En,"1"),await gs(e,En),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>ps(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>bu(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>gs(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=Cn(s,!1).getAll();return new jt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),i.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),i.push(s));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Au)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Co.type="LOCAL";const ku=Co;new Bt(3e4,6e4);/**
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
 */function Ru(t,e){return e?Ee(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xi extends vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rt(e,this._buildIdpRequest())}_linkToIdToken(e,i){return rt(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Pu(t){return uu(t.auth,new xi(t),t.bypassAuthState)}function Cu(t){const{auth:e,user:i}=t;return C(i,e,"internal-error"),lu(i,new xi(t),t.bypassAuthState)}async function Ou(t){const{auth:e,user:i}=t;return C(i,e,"internal-error"),cu(i,new xi(t),t.bypassAuthState)}/**
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
 */class Oo{constructor(e,i,r,s,c=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:s,tenantId:c,error:l,type:p}=e;if(l){this.reject(l);return}const m={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pu;case"linkViaPopup":case"linkViaRedirect":return Ou;case"reauthViaPopup":case"reauthViaRedirect":return Cu;default:be(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Du=new Bt(2e3,1e4);class tt extends Oo{constructor(e,i,r,s,c){super(e,i,s,c),this.provider=r,this.authWindow=null,this.pollId=null,tt.currentPopupAction&&tt.currentPopupAction.cancel(),tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=Mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Du.get())};e()}}tt.currentPopupAction=null;/**
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
 */const Nu="pendingRedirect",fn=new Map;class Lu extends Oo{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=fn.get(this.auth._key());if(!e){try{const r=await Uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}fn.set(this.auth._key(),e)}return this.bypassAuthState||fn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uu(t,e){const i=Bu(e),r=xu(t);if(!await r._isAvailable())return!1;const s=await r._get(i)==="true";return await r._remove(i),s}function Mu(t,e){fn.set(t._key(),e)}function xu(t){return Ee(t._redirectPersistence)}function Bu(t){return dn(Nu,t.config.apiKey,t.name)}async function Fu(t,e,i=!1){if(Ue(t.app))return Promise.reject(ze(t));const r=Li(t),s=Ru(r,e),l=await new Lu(r,s,i).execute();return l&&!i&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const ju=10*60*1e3;class $u{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hu(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!Do(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(fe(this.auth,s))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ju&&this.cachedEventUids.clear(),this.cachedEventUids.has(ms(e))}saveEventToCache(e){this.cachedEventUids.add(ms(e)),this.lastProcessedEventTime=Date.now()}}function ms(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Do({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Do(t);default:return!1}}/**
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
 */async function Vu(t,e={}){return at(t,"GET","/v1/projects",e)}/**
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
 */const zu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wu=/^https?/;async function Gu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vu(t);for(const i of e)try{if(Ku(i))return}catch{}be(t,"unauthorized-domain")}function Ku(t){const e=vi(),{protocol:i,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?i==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&l.hostname===r}if(!Wu.test(i))return!1;if(zu.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qu=new Bt(3e4,6e4);function ys(){const t=pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}}function Ju(t){return new Promise((e,i)=>{var r,s,c;function l(){ys(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ys(),i(fe(t,"network-request-failed"))},timeout:qu.get()})}if(!((s=(r=pe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((c=pe().gapi)===null||c===void 0)&&c.load)l();else{const p=nu("iframefcb");return pe()[p]=()=>{gapi.load?l():i(fe(t,"network-request-failed"))},eu(`${tu()}?onload=${p}`).catch(m=>i(m))}}).catch(e=>{throw pn=null,e})}let pn=null;function Xu(t){return pn=pn||Ju(t),pn}/**
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
 */const Yu=new Bt(5e3,15e3),Zu="__/auth/iframe",Qu="emulator/auth/iframe",eh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},th=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nh(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?Ci(e,Qu):`https://${t.config.authDomain}/${Zu}`,r={apiKey:e.apiKey,appName:t.name,v:Je},s=th.get(t.config.apiHost);s&&(r.eid=s);const c=t._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${xt(r).slice(1)}`}async function ih(t){const e=await Xu(t),i=pe().gapi;return C(i,t,"internal-error"),e.open({where:document.body,url:nh(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eh,dontclear:!0},r=>new Promise(async(s,c)=>{await r.restyle({setHideOnLeave:!1});const l=fe(t,"network-request-failed"),p=pe().setTimeout(()=>{c(l)},Yu.get());function m(){pe().clearTimeout(p),s(r)}r.ping(m).then(m,()=>{c(l)})}))}/**
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
 */const rh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sh=500,oh=600,ah="_blank",ch="http://localhost";class _s{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lh(t,e,i,r=sh,s=oh){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const m=Object.assign(Object.assign({},rh),{width:r.toString(),height:s.toString(),top:c,left:l}),E=te().toLowerCase();i&&(p=lo(E)?ah:i),ao(E)&&(e=e||ch,m.scrollbars="yes");const A=Object.entries(m).reduce((S,[O,P])=>`${S}${O}=${P},`,"");if(Gl(E)&&p!=="_self")return uh(e||"",p),new _s(null);const b=window.open(e||"",p,A);C(b,t,"popup-blocked");try{b.focus()}catch{}return new _s(b)}function uh(t,e){const i=document.createElement("a");i.href=t,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const hh="__/auth/handler",dh="emulator/auth/handler",fh=encodeURIComponent("fac");async function vs(t,e,i,r,s,c){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:r,v:Je,eventId:s};if(e instanceof wo){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",mc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,b]of Object.entries({}))l[A]=b}if(e instanceof Ft){const A=e.getScopes().filter(b=>b!=="");A.length>0&&(l.scopes=A.join(","))}t.tenantId&&(l.tid=t.tenantId);const p=l;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const m=await t._getAppCheckToken(),E=m?`#${fh}=${encodeURIComponent(m)}`:"";return`${ph(t)}?${xt(p).slice(1)}${E}`}function ph({config:t}){return t.emulator?Ci(t,dh):`https://${t.authDomain}/${hh}`}/**
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
 */const li="webStorageSupport";class gh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=So,this._completeRedirectFn=Fu,this._overrideRedirectResult=Mu}async _openPopup(e,i,r,s){var c;Ae((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await vs(e,i,r,vi(),s);return lh(e,l,Mi())}async _openRedirect(e,i,r,s){await this._originValidation(e);const c=await vs(e,i,r,vi(),s);return _u(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:s,promise:c}=this.eventManagers[i];return s?Promise.resolve(s):(Ae(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await ih(e),r=new $u(e);return i.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(li,{type:li},s=>{var c;const l=(c=s==null?void 0:s[0])===null||c===void 0?void 0:c[li];l!==void 0&&i(!!l),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Gu(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return go()||co()||Ni()}}const mh=gh;var ws="@firebase/auth",Is="1.7.9";/**
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
 */class yh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _h(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vh(t){Ge(new Be("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:p}=r.options;C(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:l,authDomain:p,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mo(t)},E=new Zl(r,s,c,m);return ru(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),Ge(new Be("auth-internal",e=>{const i=Li(e.getProvider("auth").getImmediate());return(r=>new yh(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),de(ws,Is,_h(t)),de(ws,Is,"esm2017")}/**
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
 */const wh=5*60,Ih=Ws("authIdTokenMaxAge")||wh;let Es=null;const Eh=t=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Ih)return;const s=i==null?void 0:i.token;Es!==s&&(Es=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Th(t=ki()){const e=Rn(t,"auth");if(e.isInitialized())return e.getImmediate();const i=iu(t,{popupRedirectResolver:mh,persistence:[ku,bo,So]}),r=Ws("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=Eh(c.toString());fu(i,l,()=>l(i.currentUser)),du(i,p=>l(p))}}const s=Hs("auth");return s&&yo(i,`http://${s}`),i}function bh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ql({loadJS(t){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const c=fe("internal-error");c.customData=s,i(c)},r.type="text/javascript",r.charset="UTF-8",bh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vh("Browser");var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var No;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,h){function f(){}f.prototype=h.prototype,y.D=h.prototype,y.prototype=new f,y.prototype.constructor=y,y.C=function(g,_,w){for(var d=Array(arguments.length-2),me=2;me<arguments.length;me++)d[me-2]=arguments[me];return h.prototype[_].apply(g,d)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,h,f){f||(f=0);var g=Array(16);if(typeof h=="string")for(var _=0;16>_;++_)g[_]=h.charCodeAt(f++)|h.charCodeAt(f++)<<8|h.charCodeAt(f++)<<16|h.charCodeAt(f++)<<24;else for(_=0;16>_;++_)g[_]=h[f++]|h[f++]<<8|h[f++]<<16|h[f++]<<24;h=y.g[0],f=y.g[1],_=y.g[2];var w=y.g[3],d=h+(w^f&(_^w))+g[0]+3614090360&4294967295;h=f+(d<<7&4294967295|d>>>25),d=w+(_^h&(f^_))+g[1]+3905402710&4294967295,w=h+(d<<12&4294967295|d>>>20),d=_+(f^w&(h^f))+g[2]+606105819&4294967295,_=w+(d<<17&4294967295|d>>>15),d=f+(h^_&(w^h))+g[3]+3250441966&4294967295,f=_+(d<<22&4294967295|d>>>10),d=h+(w^f&(_^w))+g[4]+4118548399&4294967295,h=f+(d<<7&4294967295|d>>>25),d=w+(_^h&(f^_))+g[5]+1200080426&4294967295,w=h+(d<<12&4294967295|d>>>20),d=_+(f^w&(h^f))+g[6]+2821735955&4294967295,_=w+(d<<17&4294967295|d>>>15),d=f+(h^_&(w^h))+g[7]+4249261313&4294967295,f=_+(d<<22&4294967295|d>>>10),d=h+(w^f&(_^w))+g[8]+1770035416&4294967295,h=f+(d<<7&4294967295|d>>>25),d=w+(_^h&(f^_))+g[9]+2336552879&4294967295,w=h+(d<<12&4294967295|d>>>20),d=_+(f^w&(h^f))+g[10]+4294925233&4294967295,_=w+(d<<17&4294967295|d>>>15),d=f+(h^_&(w^h))+g[11]+2304563134&4294967295,f=_+(d<<22&4294967295|d>>>10),d=h+(w^f&(_^w))+g[12]+1804603682&4294967295,h=f+(d<<7&4294967295|d>>>25),d=w+(_^h&(f^_))+g[13]+4254626195&4294967295,w=h+(d<<12&4294967295|d>>>20),d=_+(f^w&(h^f))+g[14]+2792965006&4294967295,_=w+(d<<17&4294967295|d>>>15),d=f+(h^_&(w^h))+g[15]+1236535329&4294967295,f=_+(d<<22&4294967295|d>>>10),d=h+(_^w&(f^_))+g[1]+4129170786&4294967295,h=f+(d<<5&4294967295|d>>>27),d=w+(f^_&(h^f))+g[6]+3225465664&4294967295,w=h+(d<<9&4294967295|d>>>23),d=_+(h^f&(w^h))+g[11]+643717713&4294967295,_=w+(d<<14&4294967295|d>>>18),d=f+(w^h&(_^w))+g[0]+3921069994&4294967295,f=_+(d<<20&4294967295|d>>>12),d=h+(_^w&(f^_))+g[5]+3593408605&4294967295,h=f+(d<<5&4294967295|d>>>27),d=w+(f^_&(h^f))+g[10]+38016083&4294967295,w=h+(d<<9&4294967295|d>>>23),d=_+(h^f&(w^h))+g[15]+3634488961&4294967295,_=w+(d<<14&4294967295|d>>>18),d=f+(w^h&(_^w))+g[4]+3889429448&4294967295,f=_+(d<<20&4294967295|d>>>12),d=h+(_^w&(f^_))+g[9]+568446438&4294967295,h=f+(d<<5&4294967295|d>>>27),d=w+(f^_&(h^f))+g[14]+3275163606&4294967295,w=h+(d<<9&4294967295|d>>>23),d=_+(h^f&(w^h))+g[3]+4107603335&4294967295,_=w+(d<<14&4294967295|d>>>18),d=f+(w^h&(_^w))+g[8]+1163531501&4294967295,f=_+(d<<20&4294967295|d>>>12),d=h+(_^w&(f^_))+g[13]+2850285829&4294967295,h=f+(d<<5&4294967295|d>>>27),d=w+(f^_&(h^f))+g[2]+4243563512&4294967295,w=h+(d<<9&4294967295|d>>>23),d=_+(h^f&(w^h))+g[7]+1735328473&4294967295,_=w+(d<<14&4294967295|d>>>18),d=f+(w^h&(_^w))+g[12]+2368359562&4294967295,f=_+(d<<20&4294967295|d>>>12),d=h+(f^_^w)+g[5]+4294588738&4294967295,h=f+(d<<4&4294967295|d>>>28),d=w+(h^f^_)+g[8]+2272392833&4294967295,w=h+(d<<11&4294967295|d>>>21),d=_+(w^h^f)+g[11]+1839030562&4294967295,_=w+(d<<16&4294967295|d>>>16),d=f+(_^w^h)+g[14]+4259657740&4294967295,f=_+(d<<23&4294967295|d>>>9),d=h+(f^_^w)+g[1]+2763975236&4294967295,h=f+(d<<4&4294967295|d>>>28),d=w+(h^f^_)+g[4]+1272893353&4294967295,w=h+(d<<11&4294967295|d>>>21),d=_+(w^h^f)+g[7]+4139469664&4294967295,_=w+(d<<16&4294967295|d>>>16),d=f+(_^w^h)+g[10]+3200236656&4294967295,f=_+(d<<23&4294967295|d>>>9),d=h+(f^_^w)+g[13]+681279174&4294967295,h=f+(d<<4&4294967295|d>>>28),d=w+(h^f^_)+g[0]+3936430074&4294967295,w=h+(d<<11&4294967295|d>>>21),d=_+(w^h^f)+g[3]+3572445317&4294967295,_=w+(d<<16&4294967295|d>>>16),d=f+(_^w^h)+g[6]+76029189&4294967295,f=_+(d<<23&4294967295|d>>>9),d=h+(f^_^w)+g[9]+3654602809&4294967295,h=f+(d<<4&4294967295|d>>>28),d=w+(h^f^_)+g[12]+3873151461&4294967295,w=h+(d<<11&4294967295|d>>>21),d=_+(w^h^f)+g[15]+530742520&4294967295,_=w+(d<<16&4294967295|d>>>16),d=f+(_^w^h)+g[2]+3299628645&4294967295,f=_+(d<<23&4294967295|d>>>9),d=h+(_^(f|~w))+g[0]+4096336452&4294967295,h=f+(d<<6&4294967295|d>>>26),d=w+(f^(h|~_))+g[7]+1126891415&4294967295,w=h+(d<<10&4294967295|d>>>22),d=_+(h^(w|~f))+g[14]+2878612391&4294967295,_=w+(d<<15&4294967295|d>>>17),d=f+(w^(_|~h))+g[5]+4237533241&4294967295,f=_+(d<<21&4294967295|d>>>11),d=h+(_^(f|~w))+g[12]+1700485571&4294967295,h=f+(d<<6&4294967295|d>>>26),d=w+(f^(h|~_))+g[3]+2399980690&4294967295,w=h+(d<<10&4294967295|d>>>22),d=_+(h^(w|~f))+g[10]+4293915773&4294967295,_=w+(d<<15&4294967295|d>>>17),d=f+(w^(_|~h))+g[1]+2240044497&4294967295,f=_+(d<<21&4294967295|d>>>11),d=h+(_^(f|~w))+g[8]+1873313359&4294967295,h=f+(d<<6&4294967295|d>>>26),d=w+(f^(h|~_))+g[15]+4264355552&4294967295,w=h+(d<<10&4294967295|d>>>22),d=_+(h^(w|~f))+g[6]+2734768916&4294967295,_=w+(d<<15&4294967295|d>>>17),d=f+(w^(_|~h))+g[13]+1309151649&4294967295,f=_+(d<<21&4294967295|d>>>11),d=h+(_^(f|~w))+g[4]+4149444226&4294967295,h=f+(d<<6&4294967295|d>>>26),d=w+(f^(h|~_))+g[11]+3174756917&4294967295,w=h+(d<<10&4294967295|d>>>22),d=_+(h^(w|~f))+g[2]+718787259&4294967295,_=w+(d<<15&4294967295|d>>>17),d=f+(w^(_|~h))+g[9]+3951481745&4294967295,y.g[0]=y.g[0]+h&4294967295,y.g[1]=y.g[1]+(_+(d<<21&4294967295|d>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+w&4294967295}r.prototype.u=function(y,h){h===void 0&&(h=y.length);for(var f=h-this.blockSize,g=this.B,_=this.h,w=0;w<h;){if(_==0)for(;w<=f;)s(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<h;)if(g[_++]=y.charCodeAt(w++),_==this.blockSize){s(this,g),_=0;break}}else for(;w<h;)if(g[_++]=y[w++],_==this.blockSize){s(this,g),_=0;break}}this.h=_,this.o+=h},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var h=1;h<y.length-8;++h)y[h]=0;var f=8*this.o;for(h=y.length-8;h<y.length;++h)y[h]=f&255,f/=256;for(this.u(y),y=Array(16),h=f=0;4>h;++h)for(var g=0;32>g;g+=8)y[f++]=this.g[h]>>>g&255;return y};function c(y,h){var f=p;return Object.prototype.hasOwnProperty.call(f,y)?f[y]:f[y]=h(y)}function l(y,h){this.h=h;for(var f=[],g=!0,_=y.length-1;0<=_;_--){var w=y[_]|0;g&&w==h||(f[_]=w,g=!1)}this.g=f}var p={};function m(y){return-128<=y&&128>y?c(y,function(h){return new l([h|0],0>h?-1:0)}):new l([y|0],0>y?-1:0)}function E(y){if(isNaN(y)||!isFinite(y))return b;if(0>y)return k(E(-y));for(var h=[],f=1,g=0;y>=f;g++)h[g]=y/f|0,f*=4294967296;return new l(h,0)}function A(y,h){if(y.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(y.charAt(0)=="-")return k(A(y.substring(1),h));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(h,8)),g=b,_=0;_<y.length;_+=8){var w=Math.min(8,y.length-_),d=parseInt(y.substring(_,_+w),h);8>w?(w=E(Math.pow(h,w)),g=g.j(w).add(E(d))):(g=g.j(f),g=g.add(E(d)))}return g}var b=m(0),S=m(1),O=m(16777216);t=l.prototype,t.m=function(){if(R(this))return-k(this).m();for(var y=0,h=1,f=0;f<this.g.length;f++){var g=this.i(f);y+=(0<=g?g:4294967296+g)*h,h*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(R(this))return"-"+k(this).toString(y);for(var h=E(Math.pow(y,6)),f=this,g="";;){var _=F(f,h).g;f=D(f,_.j(h));var w=((0<f.g.length?f.g[0]:f.h)>>>0).toString(y);if(f=_,P(f))return w+g;for(;6>w.length;)w="0"+w;g=w+g}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var h=0;h<y.g.length;h++)if(y.g[h]!=0)return!1;return!0}function R(y){return y.h==-1}t.l=function(y){return y=D(this,y),R(y)?-1:P(y)?0:1};function k(y){for(var h=y.g.length,f=[],g=0;g<h;g++)f[g]=~y.g[g];return new l(f,~y.h).add(S)}t.abs=function(){return R(this)?k(this):this},t.add=function(y){for(var h=Math.max(this.g.length,y.g.length),f=[],g=0,_=0;_<=h;_++){var w=g+(this.i(_)&65535)+(y.i(_)&65535),d=(w>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);g=d>>>16,w&=65535,d&=65535,f[_]=d<<16|w}return new l(f,f[f.length-1]&-2147483648?-1:0)};function D(y,h){return y.add(k(h))}t.j=function(y){if(P(this)||P(y))return b;if(R(this))return R(y)?k(this).j(k(y)):k(k(this).j(y));if(R(y))return k(this.j(k(y)));if(0>this.l(O)&&0>y.l(O))return E(this.m()*y.m());for(var h=this.g.length+y.g.length,f=[],g=0;g<2*h;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var _=0;_<y.g.length;_++){var w=this.i(g)>>>16,d=this.i(g)&65535,me=y.i(_)>>>16,ct=y.i(_)&65535;f[2*g+2*_]+=d*ct,x(f,2*g+2*_),f[2*g+2*_+1]+=w*ct,x(f,2*g+2*_+1),f[2*g+2*_+1]+=d*me,x(f,2*g+2*_+1),f[2*g+2*_+2]+=w*me,x(f,2*g+2*_+2)}for(g=0;g<h;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=h;g<2*h;g++)f[g]=0;return new l(f,0)};function x(y,h){for(;(y[h]&65535)!=y[h];)y[h+1]+=y[h]>>>16,y[h]&=65535,h++}function U(y,h){this.g=y,this.h=h}function F(y,h){if(P(h))throw Error("division by zero");if(P(y))return new U(b,b);if(R(y))return h=F(k(y),h),new U(k(h.g),k(h.h));if(R(h))return h=F(y,k(h)),new U(k(h.g),h.h);if(30<y.g.length){if(R(y)||R(h))throw Error("slowDivide_ only works with positive integers.");for(var f=S,g=h;0>=g.l(y);)f=ne(f),g=ne(g);var _=W(f,1),w=W(g,1);for(g=W(g,2),f=W(f,2);!P(g);){var d=w.add(g);0>=d.l(y)&&(_=_.add(f),w=d),g=W(g,1),f=W(f,1)}return h=D(y,_.j(h)),new U(_,h)}for(_=b;0<=y.l(h);){for(f=Math.max(1,Math.floor(y.m()/h.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),w=E(f),d=w.j(h);R(d)||0<d.l(y);)f-=g,w=E(f),d=w.j(h);P(w)&&(w=S),_=_.add(w),y=D(y,d)}return new U(_,y)}t.A=function(y){return F(this,y).h},t.and=function(y){for(var h=Math.max(this.g.length,y.g.length),f=[],g=0;g<h;g++)f[g]=this.i(g)&y.i(g);return new l(f,this.h&y.h)},t.or=function(y){for(var h=Math.max(this.g.length,y.g.length),f=[],g=0;g<h;g++)f[g]=this.i(g)|y.i(g);return new l(f,this.h|y.h)},t.xor=function(y){for(var h=Math.max(this.g.length,y.g.length),f=[],g=0;g<h;g++)f[g]=this.i(g)^y.i(g);return new l(f,this.h^y.h)};function ne(y){for(var h=y.g.length+1,f=[],g=0;g<h;g++)f[g]=y.i(g)<<1|y.i(g-1)>>>31;return new l(f,y.h)}function W(y,h){var f=h>>5;h%=32;for(var g=y.g.length-f,_=[],w=0;w<g;w++)_[w]=0<h?y.i(w+f)>>>h|y.i(w+f+1)<<32-h:y.i(w+f);return new l(_,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,No=l}).apply(typeof Ts<"u"?Ts:typeof self<"u"?self:typeof window<"u"?window:{});var on=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,a){return n==Array.prototype||n==Object.prototype||(n[o]=a.value),n};function i(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof on=="object"&&on];for(var o=0;o<n.length;++o){var a=n[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function s(n,o){if(o)e:{var a=r;n=n.split(".");for(var u=0;u<n.length-1;u++){var v=n[u];if(!(v in a))break e;a=a[v]}n=n[n.length-1],u=a[n],o=o(u),o!=u&&o!=null&&e(a,n,{configurable:!0,writable:!0,value:o})}}function c(n,o){n instanceof String&&(n+="");var a=0,u=!1,v={next:function(){if(!u&&a<n.length){var I=a++;return{value:o(I,n[I]),done:!1}}return u=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(n){return n||function(){return c(this,function(o,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},p=this||self;function m(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function E(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function A(n,o,a){return n.call.apply(n.bind,arguments)}function b(n,o,a){if(!n)throw Error();if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,u),n.apply(o,v)}}return function(){return n.apply(o,arguments)}}function S(n,o,a){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:b,S.apply(null,arguments)}function O(n,o){var a=Array.prototype.slice.call(arguments,1);return function(){var u=a.slice();return u.push.apply(u,arguments),n.apply(this,u)}}function P(n,o){function a(){}a.prototype=o.prototype,n.aa=o.prototype,n.prototype=new a,n.prototype.constructor=n,n.Qb=function(u,v,I){for(var T=Array(arguments.length-2),j=2;j<arguments.length;j++)T[j-2]=arguments[j];return o.prototype[v].apply(u,T)}}function R(n){const o=n.length;if(0<o){const a=Array(o);for(let u=0;u<o;u++)a[u]=n[u];return a}return[]}function k(n,o){for(let a=1;a<arguments.length;a++){const u=arguments[a];if(m(u)){const v=n.length||0,I=u.length||0;n.length=v+I;for(let T=0;T<I;T++)n[v+T]=u[T]}else n.push(u)}}class D{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function x(n){return/^[\s\xa0]*$/.test(n)}function U(){var n=p.navigator;return n&&(n=n.userAgent)?n:""}function F(n){return F[" "](n),n}F[" "]=function(){};var ne=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function W(n,o,a){for(const u in n)o.call(a,n[u],u,n)}function y(n,o){for(const a in n)o.call(void 0,n[a],a,n)}function h(n){const o={};for(const a in n)o[a]=n[a];return o}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(n,o){let a,u;for(let v=1;v<arguments.length;v++){u=arguments[v];for(a in u)n[a]=u[a];for(let I=0;I<f.length;I++)a=f[I],Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a])}}function _(n){var o=1;n=n.split(":");const a=[];for(;0<o&&n.length;)a.push(n.shift()),o--;return n.length&&a.push(n.join(":")),a}function w(n){p.setTimeout(()=>{throw n},0)}function d(){var n=On;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class me{constructor(){this.h=this.g=null}add(o,a){const u=ct.get();u.set(o,a),this.h?this.h.next=u:this.g=u,this.h=u}}var ct=new D(()=>new da,n=>n.reset());class da{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,ut=!1,On=new me,Yi=()=>{const n=p.Promise.resolve(void 0);lt=()=>{n.then(fa)}};var fa=()=>{for(var n;n=d();){try{n.h.call(n.g)}catch(a){w(a)}var o=ct;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}ut=!1};function Se(){this.s=this.s,this.C=this.C}Se.prototype.s=!1,Se.prototype.ma=function(){this.s||(this.s=!0,this.N())},Se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var pa=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};p.addEventListener("test",a,o),p.removeEventListener("test",a,o)}catch{}return n}();function ht(n,o){if(K.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var a=this.type=n.type,u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(ne){e:{try{F(o.nodeName);var v=!0;break e}catch{}v=!1}v||(o=null)}}else a=="mouseover"?o=n.fromElement:a=="mouseout"&&(o=n.toElement);this.relatedTarget=o,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ga[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ht.aa.h.call(this)}}P(ht,K);var ga={2:"touch",3:"pen",4:"mouse"};ht.prototype.h=function(){ht.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),ma=0;function ya(n,o,a,u,v){this.listener=n,this.proxy=null,this.src=o,this.type=a,this.capture=!!u,this.ha=v,this.key=++ma,this.da=this.fa=!1}function Vt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function zt(n){this.src=n,this.g={},this.h=0}zt.prototype.add=function(n,o,a,u,v){var I=n.toString();n=this.g[I],n||(n=this.g[I]=[],this.h++);var T=Nn(n,o,u,v);return-1<T?(o=n[T],a||(o.fa=!1)):(o=new ya(o,this.src,I,!!u,v),o.fa=a,n.push(o)),o};function Dn(n,o){var a=o.type;if(a in n.g){var u=n.g[a],v=Array.prototype.indexOf.call(u,o,void 0),I;(I=0<=v)&&Array.prototype.splice.call(u,v,1),I&&(Vt(o),n.g[a].length==0&&(delete n.g[a],n.h--))}}function Nn(n,o,a,u){for(var v=0;v<n.length;++v){var I=n[v];if(!I.da&&I.listener==o&&I.capture==!!a&&I.ha==u)return v}return-1}var Ln="closure_lm_"+(1e6*Math.random()|0),Un={};function Zi(n,o,a,u,v){if(Array.isArray(o)){for(var I=0;I<o.length;I++)Zi(n,o[I],a,u,v);return null}return a=tr(a),n&&n[Ht]?n.K(o,a,E(u)?!!u.capture:!1,v):_a(n,o,a,!1,u,v)}function _a(n,o,a,u,v,I){if(!o)throw Error("Invalid event type");var T=E(v)?!!v.capture:!!v,j=xn(n);if(j||(n[Ln]=j=new zt(n)),a=j.add(o,a,u,T,I),a.proxy)return a;if(u=va(),a.proxy=u,u.src=n,u.listener=a,n.addEventListener)pa||(v=T),v===void 0&&(v=!1),n.addEventListener(o.toString(),u,v);else if(n.attachEvent)n.attachEvent(er(o.toString()),u);else if(n.addListener&&n.removeListener)n.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return a}function va(){function n(a){return o.call(n.src,n.listener,a)}const o=wa;return n}function Qi(n,o,a,u,v){if(Array.isArray(o))for(var I=0;I<o.length;I++)Qi(n,o[I],a,u,v);else u=E(u)?!!u.capture:!!u,a=tr(a),n&&n[Ht]?(n=n.i,o=String(o).toString(),o in n.g&&(I=n.g[o],a=Nn(I,a,u,v),-1<a&&(Vt(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete n.g[o],n.h--)))):n&&(n=xn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=Nn(o,a,u,v)),(a=-1<n?o[n]:null)&&Mn(a))}function Mn(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ht])Dn(o.i,n);else{var a=n.type,u=n.proxy;o.removeEventListener?o.removeEventListener(a,u,n.capture):o.detachEvent?o.detachEvent(er(a),u):o.addListener&&o.removeListener&&o.removeListener(u),(a=xn(o))?(Dn(a,n),a.h==0&&(a.src=null,o[Ln]=null)):Vt(n)}}}function er(n){return n in Un?Un[n]:Un[n]="on"+n}function wa(n,o){if(n.da)n=!0;else{o=new ht(o,this);var a=n.listener,u=n.ha||n.src;n.fa&&Mn(n),n=a.call(u,o)}return n}function xn(n){return n=n[Ln],n instanceof zt?n:null}var Bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function tr(n){return typeof n=="function"?n:(n[Bn]||(n[Bn]=function(o){return n.handleEvent(o)}),n[Bn])}function q(){Se.call(this),this.i=new zt(this),this.M=this,this.F=null}P(q,Se),q.prototype[Ht]=!0,q.prototype.removeEventListener=function(n,o,a,u){Qi(this,n,o,a,u)};function Y(n,o){var a,u=n.F;if(u)for(a=[];u;u=u.F)a.push(u);if(n=n.M,u=o.type||o,typeof o=="string")o=new K(o,n);else if(o instanceof K)o.target=o.target||n;else{var v=o;o=new K(u,n),g(o,v)}if(v=!0,a)for(var I=a.length-1;0<=I;I--){var T=o.g=a[I];v=Wt(T,u,!0,o)&&v}if(T=o.g=n,v=Wt(T,u,!0,o)&&v,v=Wt(T,u,!1,o)&&v,a)for(I=0;I<a.length;I++)T=o.g=a[I],v=Wt(T,u,!1,o)&&v}q.prototype.N=function(){if(q.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var a=n.g[o],u=0;u<a.length;u++)Vt(a[u]);delete n.g[o],n.h--}}this.F=null},q.prototype.K=function(n,o,a,u){return this.i.add(String(n),o,!1,a,u)},q.prototype.L=function(n,o,a,u){return this.i.add(String(n),o,!0,a,u)};function Wt(n,o,a,u){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var v=!0,I=0;I<o.length;++I){var T=o[I];if(T&&!T.da&&T.capture==a){var j=T.listener,G=T.ha||T.src;T.fa&&Dn(n.i,T),v=j.call(G,u)!==!1&&v}}return v&&!u.defaultPrevented}function nr(n,o,a){if(typeof n=="function")a&&(n=S(n,a));else if(n&&typeof n.handleEvent=="function")n=S(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:p.setTimeout(n,o||0)}function ir(n){n.g=nr(()=>{n.g=null,n.i&&(n.i=!1,ir(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Ia extends Se{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:ir(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(n){Se.call(this),this.h=n,this.g={}}P(dt,Se);var rr=[];function sr(n){W(n.g,function(o,a){this.g.hasOwnProperty(a)&&Mn(o)},n),n.g={}}dt.prototype.N=function(){dt.aa.N.call(this),sr(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fn=p.JSON.stringify,Ea=p.JSON.parse,Ta=class{stringify(n){return p.JSON.stringify(n,void 0)}parse(n){return p.JSON.parse(n,void 0)}};function jn(){}jn.prototype.h=null;function or(n){return n.h||(n.h=n.i())}function ba(){}var ft={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $n(){K.call(this,"d")}P($n,K);function Hn(){K.call(this,"c")}P(Hn,K);var Xe={},ar=null;function Vn(){return ar=ar||new q}Xe.La="serverreachability";function cr(n){K.call(this,Xe.La,n)}P(cr,K);function pt(n){const o=Vn();Y(o,new cr(o))}Xe.STAT_EVENT="statevent";function lr(n,o){K.call(this,Xe.STAT_EVENT,n),this.stat=o}P(lr,K);function Z(n){const o=Vn();Y(o,new lr(o,n))}Xe.Ma="timingevent";function ur(n,o){K.call(this,Xe.Ma,n),this.size=o}P(ur,K);function gt(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){n()},o)}function mt(){this.g=!0}mt.prototype.xa=function(){this.g=!1};function Aa(n,o,a,u,v,I){n.info(function(){if(n.g)if(I)for(var T="",j=I.split("&"),G=0;G<j.length;G++){var M=j[G].split("=");if(1<M.length){var J=M[0];M=M[1];var X=J.split("_");T=2<=X.length&&X[1]=="type"?T+(J+"="+M+"&"):T+(J+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+u+") [attempt "+v+"]: "+o+`
`+a+`
`+T})}function Sa(n,o,a,u,v,I,T){n.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+v+"]: "+o+`
`+a+`
`+I+" "+T})}function Ye(n,o,a,u){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Ra(n,a)+(u?" "+u:"")})}function ka(n,o){n.info(function(){return"TIMEOUT: "+o})}mt.prototype.info=function(){};function Ra(n,o){if(!n.g)return o;if(!o)return null;try{var a=JSON.parse(o);if(a){for(n=0;n<a.length;n++)if(Array.isArray(a[n])){var u=a[n];if(!(2>u.length)){var v=u[1];if(Array.isArray(v)&&!(1>v.length)){var I=v[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return Fn(a)}catch{return o}}var zn={NO_ERROR:0,TIMEOUT:8},Pa={},Wn;function Gt(){}P(Gt,jn),Gt.prototype.g=function(){return new XMLHttpRequest},Gt.prototype.i=function(){return{}},Wn=new Gt;function ke(n,o,a,u){this.j=n,this.i=o,this.l=a,this.R=u||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hr}function hr(){this.i=null,this.g="",this.h=!1}var dr={},Gn={};function Kn(n,o,a){n.L=1,n.v=Xt(ye(o)),n.m=a,n.P=!0,fr(n,null)}function fr(n,o){n.F=Date.now(),Kt(n),n.A=ye(n.v);var a=n.A,u=n.R;Array.isArray(u)||(u=[String(u)]),kr(a.i,"t",u),n.C=0,a=n.j.J,n.h=new hr,n.g=Wr(n.j,a?o:null,!n.m),0<n.O&&(n.M=new Ia(S(n.Y,n,n.g),n.O)),o=n.U,a=n.g,u=n.ca;var v="readystatechange";Array.isArray(v)||(v&&(rr[0]=v.toString()),v=rr);for(var I=0;I<v.length;I++){var T=Zi(a,v[I],u||o.handleEvent,!1,o.h||o);if(!T)break;o.g[T.key]=T}o=n.H?h(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),pt(),Aa(n.i,n.u,n.A,n.l,n.R,n.m)}ke.prototype.ca=function(n){n=n.target;const o=this.M;o&&_e(n)==3?o.j():this.Y(n)},ke.prototype.Y=function(n){try{if(n==this.g)e:{const X=_e(this.g);var o=this.g.Ba();const et=this.g.Z();if(!(3>X)&&(X!=3||this.g&&(this.h.h||this.g.oa()||Lr(this.g)))){this.J||X!=4||o==7||(o==8||0>=et?pt(3):pt(2)),qn(this);var a=this.g.Z();this.X=a;t:if(pr(this)){var u=Lr(this.g);n="";var v=u.length,I=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fe(this),yt(this);var T="";break t}this.h.i=new p.TextDecoder}for(o=0;o<v;o++)this.h.h=!0,n+=this.h.i.decode(u[o],{stream:!(I&&o==v-1)});u.length=0,this.h.g+=n,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Sa(this.i,this.u,this.A,this.l,this.R,X,a),this.o){if(this.T&&!this.K){t:{if(this.g){var j,G=this.g;if((j=G.g?G.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(j)){var M=j;break t}}M=null}if(a=M)Ye(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jn(this,a);else{this.o=!1,this.s=3,Z(12),Fe(this),yt(this);break e}}if(this.P){a=!0;let ae;for(;!this.J&&this.C<T.length;)if(ae=Ca(this,T),ae==Gn){X==4&&(this.s=4,Z(14),a=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==dr){this.s=4,Z(15),Ye(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Ye(this.i,this.l,ae,null),Jn(this,ae);if(pr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||T.length!=0||this.h.h||(this.s=1,Z(16),a=!1),this.o=this.o&&a,!a)Ye(this.i,this.l,T,"[Invalid Chunked Response]"),Fe(this),yt(this);else if(0<T.length&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.ba&&!J.M&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),ti(J),J.M=!0,Z(11))}}else Ye(this.i,this.l,T,null),Jn(this,T);X==4&&Fe(this),this.o&&!this.J&&(X==4?$r(this.j,this):(this.o=!1,Kt(this)))}else Ka(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,Z(12)):(this.s=0,Z(13)),Fe(this),yt(this)}}}catch{}finally{}};function pr(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Ca(n,o){var a=n.C,u=o.indexOf(`
`,a);return u==-1?Gn:(a=Number(o.substring(a,u)),isNaN(a)?dr:(u+=1,u+a>o.length?Gn:(o=o.slice(u,u+a),n.C=u+a,o)))}ke.prototype.cancel=function(){this.J=!0,Fe(this)};function Kt(n){n.S=Date.now()+n.I,gr(n,n.I)}function gr(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=gt(S(n.ba,n),o)}function qn(n){n.B&&(p.clearTimeout(n.B),n.B=null)}ke.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(ka(this.i,this.A),this.L!=2&&(pt(),Z(17)),Fe(this),this.s=2,yt(this)):gr(this,this.S-n)};function yt(n){n.j.G==0||n.J||$r(n.j,n)}function Fe(n){qn(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,sr(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function Jn(n,o){try{var a=n.j;if(a.G!=0&&(a.g==n||Xn(a.h,n))){if(!n.K&&Xn(a.h,n)&&a.G==3){try{var u=a.Da.g.parse(o)}catch{u=null}if(Array.isArray(u)&&u.length==3){var v=u;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<n.F)nn(a),en(a);else break e;ei(a),Z(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=gt(S(a.Za,a),6e3));if(1>=_r(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else $e(a,11)}else if((n.K||a.g==n)&&nn(a),!x(o))for(v=a.Da.g.parse(o),o=0;o<v.length;o++){let M=v[o];if(a.T=M[0],M=M[1],a.G==2)if(M[0]=="c"){a.K=M[1],a.ia=M[2];const J=M[3];J!=null&&(a.la=J,a.j.info("VER="+a.la));const X=M[4];X!=null&&(a.Aa=X,a.j.info("SVER="+a.Aa));const et=M[5];et!=null&&typeof et=="number"&&0<et&&(u=1.5*et,a.L=u,a.j.info("backChannelRequestTimeoutMs_="+u)),u=a;const ae=n.g;if(ae){const rn=ae.g?ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rn){var I=u.h;I.g||rn.indexOf("spdy")==-1&&rn.indexOf("quic")==-1&&rn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Yn(I,I.h),I.h=null))}if(u.D){const ni=ae.g?ae.g.getResponseHeader("X-HTTP-Session-Id"):null;ni&&(u.ya=ni,$(u.I,u.D,ni))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-n.F,a.j.info("Handshake RTT: "+a.R+"ms")),u=a;var T=n;if(u.qa=zr(u,u.J?u.ia:null,u.W),T.K){vr(u.h,T);var j=T,G=u.L;G&&(j.I=G),j.B&&(qn(j),Kt(j)),u.g=T}else Fr(u);0<a.i.length&&tn(a)}else M[0]!="stop"&&M[0]!="close"||$e(a,7);else a.G==3&&(M[0]=="stop"||M[0]=="close"?M[0]=="stop"?$e(a,7):Qn(a):M[0]!="noop"&&a.l&&a.l.ta(M),a.v=0)}}pt(4)}catch{}}var Oa=class{constructor(n,o){this.g=n,this.map=o}};function mr(n){this.l=n||10,p.PerformanceNavigationTiming?(n=p.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yr(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function _r(n){return n.h?1:n.g?n.g.size:0}function Xn(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function Yn(n,o){n.g?n.g.add(o):n.h=o}function vr(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}mr.prototype.cancel=function(){if(this.i=wr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function wr(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const a of n.g.values())o=o.concat(a.D);return o}return R(n.i)}function Da(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(m(n)){for(var o=[],a=n.length,u=0;u<a;u++)o.push(n[u]);return o}o=[],a=0;for(u in n)o[a++]=n[u];return o}function Na(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(m(n)||typeof n=="string"){var o=[];n=n.length;for(var a=0;a<n;a++)o.push(a);return o}o=[],a=0;for(const u in n)o[a++]=u;return o}}}function Ir(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(m(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var a=Na(n),u=Da(n),v=u.length,I=0;I<v;I++)o.call(void 0,u[I],a&&a[I],n)}var Er=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function La(n,o){if(n){n=n.split("&");for(var a=0;a<n.length;a++){var u=n[a].indexOf("="),v=null;if(0<=u){var I=n[a].substring(0,u);v=n[a].substring(u+1)}else I=n[a];o(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function je(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof je){this.h=n.h,qt(this,n.j),this.o=n.o,this.g=n.g,Jt(this,n.s),this.l=n.l;var o=n.i,a=new wt;a.i=o.i,o.g&&(a.g=new Map(o.g),a.h=o.h),Tr(this,a),this.m=n.m}else n&&(o=String(n).match(Er))?(this.h=!1,qt(this,o[1]||"",!0),this.o=_t(o[2]||""),this.g=_t(o[3]||"",!0),Jt(this,o[4]),this.l=_t(o[5]||"",!0),Tr(this,o[6]||"",!0),this.m=_t(o[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}je.prototype.toString=function(){var n=[],o=this.j;o&&n.push(vt(o,br,!0),":");var a=this.g;return(a||o=="file")&&(n.push("//"),(o=this.o)&&n.push(vt(o,br,!0),"@"),n.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&n.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(vt(a,a.charAt(0)=="/"?xa:Ma,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",vt(a,Fa)),n.join("")};function ye(n){return new je(n)}function qt(n,o,a){n.j=a?_t(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function Jt(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function Tr(n,o,a){o instanceof wt?(n.i=o,ja(n.i,n.h)):(a||(o=vt(o,Ba)),n.i=new wt(o,n.h))}function $(n,o,a){n.i.set(o,a)}function Xt(n){return $(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function _t(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function vt(n,o,a){return typeof n=="string"?(n=encodeURI(n).replace(o,Ua),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Ua(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var br=/[#\/\?@]/g,Ma=/[#\?:]/g,xa=/[#\?]/g,Ba=/[#\?@]/g,Fa=/#/g;function wt(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Re(n){n.g||(n.g=new Map,n.h=0,n.i&&La(n.i,function(o,a){n.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}t=wt.prototype,t.add=function(n,o){Re(this),this.i=null,n=Ze(this,n);var a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(o),this.h+=1,this};function Ar(n,o){Re(n),o=Ze(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Sr(n,o){return Re(n),o=Ze(n,o),n.g.has(o)}t.forEach=function(n,o){Re(this),this.g.forEach(function(a,u){a.forEach(function(v){n.call(o,v,u,this)},this)},this)},t.na=function(){Re(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),a=[];for(let u=0;u<o.length;u++){const v=n[u];for(let I=0;I<v.length;I++)a.push(o[u])}return a},t.V=function(n){Re(this);let o=[];if(typeof n=="string")Sr(this,n)&&(o=o.concat(this.g.get(Ze(this,n))));else{n=Array.from(this.g.values());for(let a=0;a<n.length;a++)o=o.concat(n[a])}return o},t.set=function(n,o){return Re(this),this.i=null,n=Ze(this,n),Sr(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},t.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function kr(n,o,a){Ar(n,o),0<a.length&&(n.i=null,n.g.set(Ze(n,o),R(a)),n.h+=a.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var a=0;a<o.length;a++){var u=o[a];const I=encodeURIComponent(String(u)),T=this.V(u);for(u=0;u<T.length;u++){var v=I;T[u]!==""&&(v+="="+encodeURIComponent(String(T[u]))),n.push(v)}}return this.i=n.join("&")};function Ze(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function ja(n,o){o&&!n.j&&(Re(n),n.i=null,n.g.forEach(function(a,u){var v=u.toLowerCase();u!=v&&(Ar(this,u),kr(this,v,a))},n)),n.j=o}function $a(n,o){const a=new mt;if(p.Image){const u=new Image;u.onload=O(Pe,a,"TestLoadImage: loaded",!0,o,u),u.onerror=O(Pe,a,"TestLoadImage: error",!1,o,u),u.onabort=O(Pe,a,"TestLoadImage: abort",!1,o,u),u.ontimeout=O(Pe,a,"TestLoadImage: timeout",!1,o,u),p.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=n}else o(!1)}function Ha(n,o){const a=new mt,u=new AbortController,v=setTimeout(()=>{u.abort(),Pe(a,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:u.signal}).then(I=>{clearTimeout(v),I.ok?Pe(a,"TestPingServer: ok",!0,o):Pe(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(v),Pe(a,"TestPingServer: error",!1,o)})}function Pe(n,o,a,u,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),u(a)}catch{}}function Va(){this.g=new Ta}function za(n,o,a){const u=a||"";try{Ir(n,function(v,I){let T=v;E(v)&&(T=Fn(v)),o.push(u+I+"="+encodeURIComponent(T))})}catch(v){throw o.push(u+"type="+encodeURIComponent("_badmap")),v}}function Yt(n){this.l=n.Ub||null,this.j=n.eb||!1}P(Yt,jn),Yt.prototype.g=function(){return new Zt(this.l,this.j)},Yt.prototype.i=function(n){return function(){return n}}({});function Zt(n,o){q.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Zt,q),t=Zt.prototype,t.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,Et(this)},t.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||p).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,It(this)),this.readyState=0},t.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Et(this)),this.g&&(this.readyState=3,Et(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rr(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rr(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}t.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?It(this):Et(this),this.readyState==3&&Rr(this)}},t.Ra=function(n){this.g&&(this.response=this.responseText=n,It(this))},t.Qa=function(n){this.g&&(this.response=n,It(this))},t.ga=function(){this.g&&It(this)};function It(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Et(n)}t.setRequestHeader=function(n,o){this.u.append(n,o)},t.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=o.next();return n.join(`\r
`)};function Et(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Pr(n){let o="";return W(n,function(a,u){o+=u,o+=":",o+=a,o+=`\r
`}),o}function Zn(n,o,a){e:{for(u in a){var u=!1;break e}u=!0}u||(a=Pr(a),typeof n=="string"?a!=null&&encodeURIComponent(String(a)):$(n,o,a))}function z(n){q.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(z,q);var Wa=/^https?$/i,Ga=["POST","PUT"];t=z.prototype,t.Ha=function(n){this.J=n},t.ea=function(n,o,a,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?or(this.o):or(Wn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(I){Cr(this,I);return}if(n=a||"",a=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var v in u)a.set(v,u[v]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const I of u.keys())a.set(I,u.get(I));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),v=p.FormData&&n instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ga,o,void 0))||u||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nr(this),this.u=!0,this.g.send(n),this.u=!1}catch(I){Cr(this,I)}};function Cr(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,Or(n),Qt(n)}function Or(n){n.A||(n.A=!0,Y(n,"complete"),Y(n,"error"))}t.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,Y(this,"complete"),Y(this,"abort"),Qt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qt(this,!0)),z.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dr(this):this.bb())},t.bb=function(){Dr(this)};function Dr(n){if(n.h&&typeof l<"u"&&(!n.v[1]||_e(n)!=4||n.Z()!=2)){if(n.u&&_e(n)==4)nr(n.Ea,0,n);else if(Y(n,"readystatechange"),_e(n)==4){n.h=!1;try{const T=n.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var u;if(u=T===0){var v=String(n.D).match(Er)[1]||null;!v&&p.self&&p.self.location&&(v=p.self.location.protocol.slice(0,-1)),u=!Wa.test(v?v.toLowerCase():"")}a=u}if(a)Y(n,"complete"),Y(n,"success");else{n.m=6;try{var I=2<_e(n)?n.g.statusText:""}catch{I=""}n.l=I+" ["+n.Z()+"]",Or(n)}}finally{Qt(n)}}}}function Qt(n,o){if(n.g){Nr(n);const a=n.g,u=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||Y(n,"ready");try{a.onreadystatechange=u}catch{}}}function Nr(n){n.I&&(p.clearTimeout(n.I),n.I=null)}t.isActive=function(){return!!this.g};function _e(n){return n.g?n.g.readyState:0}t.Z=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),Ea(o)}};function Lr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ka(n){const o={};n=(n.g&&2<=_e(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<n.length;u++){if(x(n[u]))continue;var a=_(n[u]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=o[v]||[];o[v]=I,I.push(a)}y(o,function(u){return u.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tt(n,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||o}function Ur(n){this.Aa=0,this.i=[],this.j=new mt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tt("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tt("baseRetryDelayMs",5e3,n),this.cb=Tt("retryDelaySeedMs",1e4,n),this.Wa=Tt("forwardChannelMaxRetries",2,n),this.wa=Tt("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new mr(n&&n.concurrentRequestLimit),this.Da=new Va,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ur.prototype,t.la=8,t.G=1,t.connect=function(n,o,a,u){Z(0),this.W=n,this.H=o||{},a&&u!==void 0&&(this.H.OSID=a,this.H.OAID=u),this.F=this.X,this.I=zr(this,null,this.W),tn(this)};function Qn(n){if(Mr(n),n.G==3){var o=n.U++,a=ye(n.I);if($(a,"SID",n.K),$(a,"RID",o),$(a,"TYPE","terminate"),bt(n,a),o=new ke(n,n.j,o),o.L=2,o.v=Xt(ye(a)),a=!1,p.navigator&&p.navigator.sendBeacon)try{a=p.navigator.sendBeacon(o.v.toString(),"")}catch{}!a&&p.Image&&(new Image().src=o.v,a=!0),a||(o.g=Wr(o.j,null),o.g.ea(o.v)),o.F=Date.now(),Kt(o)}Vr(n)}function en(n){n.g&&(ti(n),n.g.cancel(),n.g=null)}function Mr(n){en(n),n.u&&(p.clearTimeout(n.u),n.u=null),nn(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&p.clearTimeout(n.s),n.s=null)}function tn(n){if(!yr(n.h)&&!n.s){n.s=!0;var o=n.Ga;lt||Yi(),ut||(lt(),ut=!0),On.add(o,n),n.B=0}}function qa(n,o){return _r(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=gt(S(n.Ga,n,o),Hr(n,n.B)),n.B++,!0)}t.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const v=new ke(this,this.j,n);let I=this.o;if(this.S&&(I?(I=h(I),g(I,this.S)):I=this.S),this.m!==null||this.O||(v.H=I,I=null),this.P)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var u=this.i[a];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(o+=u,4096<o){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=Br(this,v,o),a=ye(this.I),$(a,"RID",n),$(a,"CVER",22),this.D&&$(a,"X-HTTP-Session-Id",this.D),bt(this,a),I&&(this.O?o="headers="+encodeURIComponent(String(Pr(I)))+"&"+o:this.m&&Zn(a,this.m,I)),Yn(this.h,v),this.Ua&&$(a,"TYPE","init"),this.P?($(a,"$req",o),$(a,"SID","null"),v.T=!0,Kn(v,a,null)):Kn(v,a,o),this.G=2}}else this.G==3&&(n?xr(this,n):this.i.length==0||yr(this.h)||xr(this))};function xr(n,o){var a;o?a=o.l:a=n.U++;const u=ye(n.I);$(u,"SID",n.K),$(u,"RID",a),$(u,"AID",n.T),bt(n,u),n.m&&n.o&&Zn(u,n.m,n.o),a=new ke(n,n.j,a,n.B+1),n.m===null&&(a.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Br(n,a,1e3),a.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),Yn(n.h,a),Kn(a,u,o)}function bt(n,o){n.H&&W(n.H,function(a,u){$(o,u,a)}),n.l&&Ir({},function(a,u){$(o,u,a)})}function Br(n,o,a){a=Math.min(n.i.length,a);var u=n.l?S(n.l.Na,n.l,n):null;e:{var v=n.i;let I=-1;for(;;){const T=["count="+a];I==-1?0<a?(I=v[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let j=!0;for(let G=0;G<a;G++){let M=v[G].g;const J=v[G].map;if(M-=I,0>M)I=Math.max(0,v[G].g-100),j=!1;else try{za(J,T,"req"+M+"_")}catch{u&&u(J)}}if(j){u=T.join("&");break e}}}return n=n.i.splice(0,a),o.D=n,u}function Fr(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;lt||Yi(),ut||(lt(),ut=!0),On.add(o,n),n.v=0}}function ei(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=gt(S(n.Fa,n),Hr(n,n.v)),n.v++,!0)}t.Fa=function(){if(this.u=null,jr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=gt(S(this.ab,this),n)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Z(10),en(this),jr(this))};function ti(n){n.A!=null&&(p.clearTimeout(n.A),n.A=null)}function jr(n){n.g=new ke(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=ye(n.qa);$(o,"RID","rpc"),$(o,"SID",n.K),$(o,"AID",n.T),$(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&$(o,"TO",n.ja),$(o,"TYPE","xmlhttp"),bt(n,o),n.m&&n.o&&Zn(o,n.m,n.o),n.L&&(n.g.I=n.L);var a=n.g;n=n.ia,a.L=1,a.v=Xt(ye(o)),a.m=null,a.P=!0,fr(a,n)}t.Za=function(){this.C!=null&&(this.C=null,en(this),ei(this),Z(19))};function nn(n){n.C!=null&&(p.clearTimeout(n.C),n.C=null)}function $r(n,o){var a=null;if(n.g==o){nn(n),ti(n),n.g=null;var u=2}else if(Xn(n.h,o))a=o.D,vr(n.h,o),u=1;else return;if(n.G!=0){if(o.o)if(u==1){a=o.m?o.m.length:0,o=Date.now()-o.F;var v=n.B;u=Vn(),Y(u,new ur(u,a)),tn(n)}else Fr(n);else if(v=o.s,v==3||v==0&&0<o.X||!(u==1&&qa(n,o)||u==2&&ei(n)))switch(a&&0<a.length&&(o=n.h,o.i=o.i.concat(a)),v){case 1:$e(n,5);break;case 4:$e(n,10);break;case 3:$e(n,6);break;default:$e(n,2)}}}function Hr(n,o){let a=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(a*=2),a*o}function $e(n,o){if(n.j.info("Error code "+o),o==2){var a=S(n.fb,n),u=n.Xa;const v=!u;u=new je(u||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||qt(u,"https"),Xt(u),v?$a(u.toString(),a):Ha(u.toString(),a)}else Z(2);n.G=0,n.l&&n.l.sa(o),Vr(n),Mr(n)}t.fb=function(n){n?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function Vr(n){if(n.G=0,n.ka=[],n.l){const o=wr(n.h);(o.length!=0||n.i.length!=0)&&(k(n.ka,o),k(n.ka,n.i),n.h.i.length=0,R(n.i),n.i.length=0),n.l.ra()}}function zr(n,o,a){var u=a instanceof je?ye(a):new je(a);if(u.g!="")o&&(u.g=o+"."+u.g),Jt(u,u.s);else{var v=p.location;u=v.protocol,o=o?o+"."+v.hostname:v.hostname,v=+v.port;var I=new je(null);u&&qt(I,u),o&&(I.g=o),v&&Jt(I,v),a&&(I.l=a),u=I}return a=n.D,o=n.ya,a&&o&&$(u,a,o),$(u,"VER",n.la),bt(n,u),u}function Wr(n,o,a){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new z(new Yt({eb:a})):new z(n.pa),o.Ha(n.J),o}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gr(){}t=Gr.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oe(n,o){q.call(this),this.g=new Ur(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!x(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!x(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new Qe(this)}P(oe,q),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){Qn(this.g)},oe.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.u&&(a={},a.__data__=Fn(n),n=a);o.i.push(new Oa(o.Ya++,n)),o.G==3&&tn(o)},oe.prototype.N=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,oe.aa.N.call(this)};function Kr(n){$n.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){e:{for(const a in o){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}P(Kr,$n);function qr(){Hn.call(this),this.status=1}P(qr,Hn);function Qe(n){this.g=n}P(Qe,Gr),Qe.prototype.ua=function(){Y(this.g,"a")},Qe.prototype.ta=function(n){Y(this.g,new Kr(n))},Qe.prototype.sa=function(n){Y(this.g,new qr)},Qe.prototype.ra=function(){Y(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,zn.NO_ERROR=0,zn.TIMEOUT=8,zn.HTTP_ERROR=6,Pa.COMPLETE="complete",ba.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",q.prototype.listen=q.prototype.K,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha}).apply(typeof on<"u"?on:typeof self<"u"?self:typeof window<"u"?window:{});const bs="@firebase/firestore";/**
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
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
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
 */let $t="10.14.0";/**
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
 */const ot=new Ai("@firebase/firestore");function le(t,...e){if(ot.logLevel<=B.DEBUG){const i=e.map(Bi);ot.debug(`Firestore (${$t}): ${t}`,...i)}}function Lo(t,...e){if(ot.logLevel<=B.ERROR){const i=e.map(Bi);ot.error(`Firestore (${$t}): ${t}`,...i)}}function Ah(t,...e){if(ot.logLevel<=B.WARN){const i=e.map(Bi);ot.warn(`Firestore (${$t}): ${t}`,...i)}}function Bi(t){if(typeof t=="string")return t;try{/**
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
*/return function(i){return JSON.stringify(i)}(t)}catch{return t}}/**
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
 */function Fi(t="Unexpected state"){const e=`FIRESTORE (${$t}) INTERNAL ASSERTION FAILED: `+t;throw Lo(e),new Error(e)}function Rt(t,e){t||Fi()}/**
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
 */const ie={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class re extends ge{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class Uo{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(ee.UNAUTHENTICATED))}shutdown(){}}class kh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Rh{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Rt(this.o===void 0);let r=this.i;const s=m=>this.i!==r?(r=this.i,i(m)):Promise.resolve();let c=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const m=c;e.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},p=m=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Pt)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string"),new Uo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Rt(e===null||typeof e=="string"),new ee(e)}}class Ph{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ch{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new Ph(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){Rt(this.o===void 0);const r=c=>{c.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,le("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const s=c=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>s(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?s(c):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(Rt(typeof i.token=="string"),this.R=i.token,new Oh(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Nh(t){return t.name==="IndexedDbTransactionError"}class bn{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var As,N;(N=As||(As={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new No([4294967295,4294967295],0);function ui(){return typeof document<"u"?document:null}/**
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
 */class Lh{constructor(e,i,r=1e3,s=1.5,c=6e4){this.ui=e,this.timerId=i,this.ko=r,this.qo=s,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const i=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,i-r);s>0&&le("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ji{constructor(e,i,r,s,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=s,this.removalCallback=c,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,s,c){const l=Date.now()+r,p=new ji(e,i,l,s,c);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ss,ks;(ks=Ss||(Ss={})).ea="default",ks.Cache="cache";/**
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
 */function Uh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Rs=new Map;function Mh(t,e,i,r){if(e===!0&&r===!0)throw new re(ie.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}function xh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Fi()}function Bh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=xh(t);throw new re(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}/**
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
 */class Ps{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mo{constructor(e,i,r,s){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ps({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ps(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sh;switch(r.type){case"firstParty":return new Ch(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=Rs.get(i);r&&(le("ComponentProvider","Removing Datastore"),Rs.delete(i),r.terminate())}(this),Promise.resolve()}}function xo(t,e,i,r={}){var s;const c=(t=Bh(t,Mo))._getSettings(),l=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==l&&Ah("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},c),{host:l,ssl:!1})),r.mockUserToken){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=ee.MOCK_USER;else{p=Gs(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new re(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ee(E)}t._authCredentials=new kh(new Uo(p,m))}}/**
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
 */class Cs{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Lh(this,"async_queue_retry"),this.Vu=()=>{const r=ui();r&&le("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const i=ui();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const i=ui();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const i=new Pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Nh(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const i=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let p=l.message||"";return l.stack&&(p=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),p}(r);throw Lo("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=i,i}enqueueAfterDelay(e,i,r){this.fu(),this.Ru.indexOf(e)>-1&&(i=0);const s=ji.createAndSchedule(this,e,i,r,c=>this.yu(c));return this.Tu.push(s),s}fu(){this.Eu&&Fi()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const i of this.Tu)if(i.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.Tu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const i=this.Tu.indexOf(e);this.Tu.splice(i,1)}}class Fh extends Mo{constructor(e,i,r,s){super(e,i,r,s),this.type="firestore",this._queue=new Cs,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cs(e),this._firestoreClient=void 0,await e}}}function jh(t,e){const i=typeof t=="object"?t:ki(),r=typeof t=="string"?t:"(default)",s=Rn(i,"firestore").getImmediate({identifier:r});if(!s._initialized){const c=Vs("firestore");c&&xo(s,...c)}return s}(function(e,i=!0){(function(s){$t=s})(Je),Ge(new Be("firestore",(r,{instanceIdentifier:s,options:c})=>{const l=r.getProvider("app").getImmediate(),p=new Fh(new Rh(r.getProvider("auth-internal")),new Dh(r.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new re(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(E.options.projectId,A)}(l,s),l);return c=Object.assign({useFetchStreams:i},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),de(bs,"4.7.3",e),de(bs,"4.7.3","esm2017")})();/**
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
 */const Bo="firebasestorage.googleapis.com",Fo="storageBucket",$h=2*60*1e3,Hh=10*60*1e3;/**
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
 */class V extends ge{constructor(e,i,r=0){super(hi(e),`Firebase Storage: ${i} (${hi(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,V.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var H;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(H||(H={}));function hi(t){return"storage/"+t}function $i(){const t="An unknown error occurred, please check the error payload for server response.";return new V(H.UNKNOWN,t)}function Vh(t){return new V(H.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function zh(t){return new V(H.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Wh(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new V(H.UNAUTHENTICATED,t)}function Gh(){return new V(H.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Kh(t){return new V(H.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qh(){return new V(H.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jh(){return new V(H.CANCELED,"User canceled the upload/download.")}function Xh(t){return new V(H.INVALID_URL,"Invalid URL '"+t+"'.")}function Yh(t){return new V(H.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zh(){return new V(H.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Fo+"' property when initializing the app?")}function Qh(){return new V(H.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ed(){return new V(H.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function td(t){return new V(H.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function An(t){return new V(H.INVALID_ARGUMENT,t)}function jo(){return new V(H.APP_DELETED,"The Firebase app was deleted.")}function $o(t){return new V(H.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ct(t,e){return new V(H.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function At(t){throw new V(H.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class se{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let r;try{r=se.makeFromUrl(e,i)}catch{return new se(e,"")}if(r.path==="")return r;throw Yh(e)}static makeFromUrl(e,i){let r=null;const s="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const l="(/(.*))?$",p=new RegExp("^gs://"+s+l,"i"),m={bucket:1,path:3};function E(F){F.path_=decodeURIComponent(F.path)}const A="v[A-Za-z0-9_]+",b=i.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${b}/${A}/b/${s}/o${S}`,"i"),P={bucket:1,path:3},R=i===Bo?"(?:storage.googleapis.com|storage.cloud.google.com)":i,k="([^?#]*)",D=new RegExp(`^https?://${R}/${s}/${k}`,"i"),U=[{regex:p,indices:m,postModify:c},{regex:O,indices:P,postModify:E},{regex:D,indices:{bucket:1,path:2},postModify:E}];for(let F=0;F<U.length;F++){const ne=U[F],W=ne.regex.exec(e);if(W){const y=W[ne.indices.bucket];let h=W[ne.indices.path];h||(h=""),r=new se(y,h),ne.postModify(r);break}}if(r==null)throw Xh(e);return r}}class nd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function id(t,e,i){let r=1,s=null,c=null,l=!1,p=0;function m(){return p===2}let E=!1;function A(...k){E||(E=!0,e.apply(null,k))}function b(k){s=setTimeout(()=>{s=null,t(O,m())},k)}function S(){c&&clearTimeout(c)}function O(k,...D){if(E){S();return}if(k){S(),A.call(null,k,...D);return}if(m()||l){S(),A.call(null,k,...D);return}r<64&&(r*=2);let U;p===1?(p=2,U=0):U=(r+Math.random())*1e3,b(U)}let P=!1;function R(k){P||(P=!0,S(),!E&&(s!==null?(k||(p=2),clearTimeout(s),b(0)):k||(p=1)))}return b(0),c=setTimeout(()=>{l=!0,R(!0)},i),R}function rd(t){t(!1)}/**
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
 */function sd(t){return t!==void 0}function od(t){return typeof t=="object"&&!Array.isArray(t)}function Hi(t){return typeof t=="string"||t instanceof String}function Os(t){return Vi()&&t instanceof Blob}function Vi(){return typeof Blob<"u"}function Ds(t,e,i,r){if(r<e)throw An(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>i)throw An(`Invalid value for '${t}'. Expected ${i} or less.`)}/**
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
 */function zi(t,e,i){let r=e;return i==null&&(r=`https://${e}`),`${i}://${r}/v0${t}`}function Ho(t){const e=encodeURIComponent;let i="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);i=i+s+"&"}return i=i.slice(0,-1),i}var We;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(We||(We={}));/**
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
 */function ad(t,e){const i=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,c=e.indexOf(t)!==-1;return i||s||c}/**
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
 */class cd{constructor(e,i,r,s,c,l,p,m,E,A,b,S=!0){this.url_=e,this.method_=i,this.headers_=r,this.body_=s,this.successCodes_=c,this.additionalRetryCodes_=l,this.callback_=p,this.errorCallback_=m,this.timeout_=E,this.progressCallback_=A,this.connectionFactory_=b,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,P)=>{this.resolve_=O,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new an(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const l=p=>{const m=p.loaded,E=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,E)};this.progressCallback_!==null&&c.addUploadProgressListener(l),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(l),this.pendingConnection_=null;const p=c.getErrorCode()===We.NO_ERROR,m=c.getStatus();if(!p||ad(m,this.additionalRetryCodes_)&&this.retry){const A=c.getErrorCode()===We.ABORT;r(!1,new an(!1,null,A));return}const E=this.successCodes_.indexOf(m)!==-1;r(!0,new an(E,c))})},i=(r,s)=>{const c=this.resolve_,l=this.reject_,p=s.connection;if(s.wasSuccessCode)try{const m=this.callback_(p,p.getResponse());sd(m)?c(m):c()}catch(m){l(m)}else if(p!==null){const m=$i();m.serverResponse=p.getErrorText(),this.errorCallback_?l(this.errorCallback_(p,m)):l(m)}else if(s.canceled){const m=this.appDelete_?jo():Jh();l(m)}else{const m=qh();l(m)}};this.canceled_?i(!1,new an(!1,null,!0)):this.backoffId_=id(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class an{constructor(e,i,r){this.wasSuccessCode=e,this.connection=i,this.canceled=!!r}}function ld(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ud(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hd(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dd(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fd(t,e,i,r,s,c,l=!0){const p=Ho(t.urlParams),m=t.url+p,E=Object.assign({},t.headers);return hd(E,e),ld(E,i),ud(E,c),dd(E,r),new cd(m,t.method,E,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,l)}/**
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
 */function pd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gd(...t){const e=pd();if(e!==void 0){const i=new e;for(let r=0;r<t.length;r++)i.append(t[r]);return i.getBlob()}else{if(Vi())return new Blob(t);throw new V(H.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function md(t,e,i){return t.webkitSlice?t.webkitSlice(e,i):t.mozSlice?t.mozSlice(e,i):t.slice?t.slice(e,i):null}/**
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
 */function yd(t){if(typeof atob>"u")throw td("base-64");return atob(t)}/**
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
 */const ue={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class di{constructor(e,i){this.data=e,this.contentType=i||null}}function Vo(t,e){switch(t){case ue.RAW:return new di(zo(e));case ue.BASE64:case ue.BASE64URL:return new di(Wo(t,e));case ue.DATA_URL:return new di(vd(e),wd(e))}throw $i()}function zo(t){const e=[];for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(i<t.length-1&&(t.charCodeAt(i+1)&64512)===56320))e.push(239,191,189);else{const c=r,l=t.charCodeAt(++i);r=65536|(c&1023)<<10|l&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _d(t){let e;try{e=decodeURIComponent(t)}catch{throw Ct(ue.DATA_URL,"Malformed data URL.")}return zo(e)}function Wo(t,e){switch(t){case ue.BASE64:{const s=e.indexOf("-")!==-1,c=e.indexOf("_")!==-1;if(s||c)throw Ct(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ue.BASE64URL:{const s=e.indexOf("+")!==-1,c=e.indexOf("/")!==-1;if(s||c)throw Ct(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let i;try{i=yd(e)}catch(s){throw s.message.includes("polyfill")?s:Ct(t,"Invalid character found")}const r=new Uint8Array(i.length);for(let s=0;s<i.length;s++)r[s]=i.charCodeAt(s);return r}class Go{constructor(e){this.base64=!1,this.contentType=null;const i=e.match(/^data:([^,]+)?,/);if(i===null)throw Ct(ue.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=i[1]||null;r!=null&&(this.base64=Id(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vd(t){const e=new Go(t);return e.base64?Wo(ue.BASE64,e.rest):_d(e.rest)}function wd(t){return new Go(t).contentType}function Id(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ve{constructor(e,i){let r=0,s="";Os(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(i?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(i?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,i){if(Os(this.data_)){const r=this.data_,s=md(r,e,i);return s===null?null:new ve(s)}else{const r=new Uint8Array(this.data_.buffer,e,i-e);return new ve(r,!0)}}static getBlob(...e){if(Vi()){const i=e.map(r=>r instanceof ve?r.data_:r);return new ve(gd.apply(null,i))}else{const i=e.map(l=>Hi(l)?Vo(ue.RAW,l).data:l.data_);let r=0;i.forEach(l=>{r+=l.byteLength});const s=new Uint8Array(r);let c=0;return i.forEach(l=>{for(let p=0;p<l.length;p++)s[c++]=l[p]}),new ve(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Ko(t){let e;try{e=JSON.parse(t)}catch{return null}return od(e)?e:null}/**
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
 */function Ed(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Td(t,e){const i=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?i:t+"/"+i}function qo(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function bd(t,e){return e}class Q{constructor(e,i,r,s){this.server=e,this.local=i||e,this.writable=!!r,this.xform=s||bd}}let cn=null;function Ad(t){return!Hi(t)||t.length<2?t:qo(t)}function Jo(){if(cn)return cn;const t=[];t.push(new Q("bucket")),t.push(new Q("generation")),t.push(new Q("metageneration")),t.push(new Q("name","fullPath",!0));function e(c,l){return Ad(l)}const i=new Q("name");i.xform=e,t.push(i);function r(c,l){return l!==void 0?Number(l):l}const s=new Q("size");return s.xform=r,t.push(s),t.push(new Q("timeCreated")),t.push(new Q("updated")),t.push(new Q("md5Hash",null,!0)),t.push(new Q("cacheControl",null,!0)),t.push(new Q("contentDisposition",null,!0)),t.push(new Q("contentEncoding",null,!0)),t.push(new Q("contentLanguage",null,!0)),t.push(new Q("contentType",null,!0)),t.push(new Q("metadata","customMetadata",!0)),cn=t,cn}function Sd(t,e){function i(){const r=t.bucket,s=t.fullPath,c=new se(r,s);return e._makeStorageReference(c)}Object.defineProperty(t,"ref",{get:i})}function kd(t,e,i){const r={};r.type="file";const s=i.length;for(let c=0;c<s;c++){const l=i[c];r[l.local]=l.xform(r,e[l.server])}return Sd(r,t),r}function Xo(t,e,i){const r=Ko(e);return r===null?null:kd(t,r,i)}function Rd(t,e,i,r){const s=Ko(e);if(s===null||!Hi(s.downloadTokens))return null;const c=s.downloadTokens;if(c.length===0)return null;const l=encodeURIComponent;return c.split(",").map(E=>{const A=t.bucket,b=t.fullPath,S="/b/"+l(A)+"/o/"+l(b),O=zi(S,i,r),P=Ho({alt:"media",token:E});return O+P})[0]}function Pd(t,e){const i={},r=e.length;for(let s=0;s<r;s++){const c=e[s];c.writable&&(i[c.server]=t[c.local])}return JSON.stringify(i)}class Yo{constructor(e,i,r,s){this.url=e,this.method=i,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zo(t){if(!t)throw $i()}function Cd(t,e){function i(r,s){const c=Xo(t,s,e);return Zo(c!==null),c}return i}function Od(t,e){function i(r,s){const c=Xo(t,s,e);return Zo(c!==null),Rd(c,s,t.host,t._protocol)}return i}function Qo(t){function e(i,r){let s;return i.getStatus()===401?i.getErrorText().includes("Firebase App Check token is invalid")?s=Gh():s=Wh():i.getStatus()===402?s=zh(t.bucket):i.getStatus()===403?s=Kh(t.path):s=r,s.status=i.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Dd(t){const e=Qo(t);function i(r,s){let c=e(r,s);return r.getStatus()===404&&(c=Vh(t.path)),c.serverResponse=s.serverResponse,c}return i}function Nd(t,e,i){const r=e.fullServerUrl(),s=zi(r,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,p=new Yo(s,c,Od(t,i),l);return p.errorHandler=Dd(e),p}function Ld(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ud(t,e,i){const r=Object.assign({},i);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Ld(null,e)),r}function Md(t,e,i,r,s){const c=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function p(){let U="";for(let F=0;F<2;F++)U=U+Math.random().toString().slice(2);return U}const m=p();l["Content-Type"]="multipart/related; boundary="+m;const E=Ud(e,r,s),A=Pd(E,i),b="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+A+`\r
--`+m+`\r
Content-Type: `+E.contentType+`\r
\r
`,S=`\r
--`+m+"--",O=ve.getBlob(b,r,S);if(O===null)throw Qh();const P={name:E.fullPath},R=zi(c,t.host,t._protocol),k="POST",D=t.maxUploadRetryTime,x=new Yo(R,k,Cd(t,i),D);return x.urlParams=P,x.headers=l,x.body=O.uploadData(),x.errorHandler=Qo(e),x}class xd{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=We.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=We.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=We.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,i,r,s){if(this.sent_)throw At("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(i,e,!0),s!==void 0)for(const c in s)s.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,s[c].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw At("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw At("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw At("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw At("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Bd extends xd{initXhr(){this.xhr_.responseType="text"}}function ea(){return new Bd}/**
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
 */class qe{constructor(e,i){this._service=e,i instanceof se?this._location=i:this._location=se.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new qe(e,i)}get root(){const e=new se(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qo(this._location.path)}get storage(){return this._service}get parent(){const e=Ed(this._location.path);if(e===null)return null;const i=new se(this._location.bucket,e);return new qe(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw $o(e)}}function Fd(t,e,i){t._throwIfRoot("uploadBytes");const r=Md(t.storage,t._location,Jo(),new ve(e,!0),i);return t.storage.makeRequestWithTokens(r,ea).then(s=>({metadata:s,ref:t}))}function jd(t){t._throwIfRoot("getDownloadURL");const e=Nd(t.storage,t._location,Jo());return t.storage.makeRequestWithTokens(e,ea).then(i=>{if(i===null)throw ed();return i})}function $d(t,e){const i=Td(t._location.path,e),r=new se(t._location.bucket,i);return new qe(t.storage,r)}/**
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
 */function Hd(t){return/^[A-Za-z]+:\/\//.test(t)}function Vd(t,e){return new qe(t,e)}function ta(t,e){if(t instanceof Wi){const i=t;if(i._bucket==null)throw Zh();const r=new qe(i,i._bucket);return e!=null?ta(r,e):r}else return e!==void 0?$d(t,e):t}function zd(t,e){if(e&&Hd(e)){if(t instanceof Wi)return Vd(t,e);throw An("To use ref(service, url), the first argument must be a Storage instance.")}else return ta(t,e)}function Ns(t,e){const i=e==null?void 0:e[Fo];return i==null?null:se.makeFromBucketSpec(i,t)}function Wd(t,e,i,r={}){t.host=`${e}:${i}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Gs(s,t.app.options.projectId))}class Wi{constructor(e,i,r,s,c){this.app=e,this._authProvider=i,this._appCheckProvider=r,this._url=s,this._firebaseVersion=c,this._bucket=null,this._host=Bo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$h,this._maxUploadRetryTime=Hh,this._requests=new Set,s!=null?this._bucket=se.makeFromBucketSpec(s,this._host):this._bucket=Ns(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=se.makeFromBucketSpec(this._url,e):this._bucket=Ns(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ds("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ds("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qe(this,e)}_makeRequest(e,i,r,s,c=!0){if(this._deleted)return new nd(jo());{const l=fd(e,this._appId,r,s,i,this._firebaseVersion,c);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,i){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,r,s).getPromise()}}const Ls="@firebase/storage",Us="0.13.2";/**
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
 */const na="storage";function Gd(t,e,i){return t=he(t),Fd(t,e,i)}function Kd(t){return t=he(t),jd(t)}function qd(t,e){return t=he(t),zd(t,e)}function ia(t=ki(),e){t=he(t);const r=Rn(t,na).getImmediate({identifier:e}),s=Vs("storage");return s&&Gi(r,...s),r}function Gi(t,e,i,r={}){Wd(t,e,i,r)}function Jd(t,{instanceIdentifier:e}){const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Wi(i,r,s,e,Je)}function Xd(){Ge(new Be(na,Jd,"PUBLIC").setMultipleInstances(!0)),de(Ls,Us,""),de(Ls,Us,"esm2017")}Xd();const Yd=Object.freeze(Object.defineProperty({__proto__:null,StorageError:V,get StorageErrorCode(){return H},StringFormat:ue,_FbsBlob:ve,_Location:se,_dataFromString:Vo,_invalidArgument:An,_invalidRootOperation:$o,connectStorageEmulator:Gi,getDownloadURL:Kd,getStorage:ia,ref:qd,uploadBytes:Gd},Symbol.toStringTag,{value:"Module"})),Ei={apiKey:"FAKE-KEY",authDomain:"FAKE-DOMAIN.firebaseapp.com",projectId:"aktywni-dev",storageBucket:"aktywni-dev.appspot.com",messagingSenderId:"000000000000",appId:"1:000000000000:web:aaaaaaaaaaaaaaaaaaaaaa"},Zd=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId"],Qd=Zd.every(t=>typeof Ei[t]=="string"&&Ei[t]);let He,St,ln,un;function ef(){if(He)return{app:He,auth:St,db:ln,storage:un};if(!Qd)return console.warn("[Firebase] Pomijam inicjalizację – brak konfiguracji env (prod bez kluczy). UI działa, backend dojdzie później."),{app:null,auth:null,db:null,storage:null};if(He=Js(Ei),St=Th(He),ln=jh(He),un=ia(He),hu(St,bo),location.hostname==="localhost"||location.hostname==="127.0.0.1")try{yo(St,"http://127.0.0.1:9099",{disableWarnings:!0}),xo(ln,"127.0.0.1",8080),Gi(un,"127.0.0.1",9199),console.log("[Firebase] Emulatory podłączone")}catch(t){console.warn("[Firebase] Nie udało się podłączyć emulatorów:",t)}return{app:He,auth:St,db:ln,storage:un}}const{storage:Ms}=ef(),xs={"/":()=>Ut("home-tpl"),"/wydarzenia":la,"/nowe":()=>rf(()=>Ut("create-tpl",hf)),"/login":df,"/profil":ff};function Ut(t,e){const i=document.getElementById(t);document.getElementById("app").innerHTML=i.innerHTML,e&&e()}function ra(){const t=location.hash.replace("#","");document.querySelectorAll("header .btn").forEach(e=>e.classList.remove("active")),t.startsWith("/wydarzenia")&&document.getElementById("nav-events").classList.add("active"),t.startsWith("/nowe")&&document.getElementById("nav-create").classList.add("active"),t.startsWith("/login")&&document.getElementById("nav-login").classList.add("active"),t.startsWith("/profil")&&document.getElementById("nav-profile").classList.add("active")}window.addEventListener("hashchange",()=>{ra(),sa()});function sa(){const t=location.hash.replace("#","")||"/";(xs[t]||xs["/"])(),Ji()}const Ki="aktywni:auth:user";function qi(){try{return JSON.parse(localStorage.getItem(Ki))}catch{return null}}function tf(t){localStorage.setItem(Ki,JSON.stringify(t)),Ji()}function nf(){localStorage.removeItem(Ki),Ji()}function Ji(){const t=qi(),e=document.getElementById("nav-login"),i=document.getElementById("nav-profile"),r=document.getElementById("nav-create");!e||!i||(t?(e.style.display="none",i.style.display="",i.textContent=t.name?`Profil (${t.name})`:"Profil",r.classList.remove("link")):(e.style.display="",i.style.display="none",i.textContent="Profil",r.classList.add("link")))}function rf(t){if(!qi()){location.hash="#/login";return}t()}const Sn={"Siatkówka plażowa":["A1 – Początkujący","A2 – Odbijający","A3 – Grający","B1 – Średniozaawansowany","B2 – Zaawansowany","C1 – Półzawodowy","C2 – Zawodowy – PRO"],"Tenis (NTRP)":["1.0","1.5","2.0","2.5","3.0","3.5","4.0","4.5","5.0","5.5","6.0","7.0"],Bieganie:["Początkujący","Rekreacyjny","Średniozaawansowany","Zaawansowany"],Kolarstwo:["Rekreacyjne","Treningowe","Amatorskie wyścigi","Zaawansowane wyścigi"]},Ti="aktywni:events:v1",oa="aktywni:signups:v1",aa="aktywni:user:skills";function Ot(){try{if(window.crypto&&window.crypto.randomUUID)return window.crypto.randomUUID()}catch{}return"id-"+Math.random().toString(36).slice(2)+Date.now()}const Bs=[{id:Ot(),title:"Bieg nad Wisłą",datetime:fi(3,"18:00"),place:"Bulwary Wiślane, Warszawa",lat:52.237,lng:21.022,capacity:20,taken:5,banner:"https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1200&auto=format&fit=crop",desc:"Lekki bieg ~6km, tempo konwersacyjne. Każdy mile widziany.",sport:"Bieganie",level:"Rekreacyjny",category:"mix"},{id:Ot(),title:"Siatkówka plażowa — sparing",datetime:fi(5,"17:30"),place:"Plaża Poniatówka",lat:52.234,lng:21.04,capacity:12,taken:9,banner:"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",desc:"Gramy 3×3, poziom rekreacyjny. Zabierz wodę i uśmiech :)",sport:"Siatkówka plażowa",level:"A2 – Odbijający",category:"mix"},{id:Ot(),title:"Joga w parku",datetime:fi(2,"08:30"),place:"Park Skaryszewski",lat:52.244,lng:21.056,capacity:25,taken:12,banner:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop",desc:"Poranna sesja vinyasa, mata mile widziana.",sport:"Bieganie",level:"Początkujący",category:"women"}];function fi(t,e="10:00"){const i=new Date(Date.now()+t*24*3600*1e3),r=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),c=String(i.getDate()).padStart(2,"0");return`${r}-${s}-${c}T${e}`}function kn(){const t=localStorage.getItem(Ti);if(t)try{return JSON.parse(t)}catch(e){console.warn(e)}return localStorage.setItem(Ti,JSON.stringify(Bs)),Bs}function ca(t){localStorage.setItem(Ti,JSON.stringify(t))}function sf(){return JSON.parse(localStorage.getItem(oa)||"{}")}function of(t){localStorage.setItem(oa,JSON.stringify(t))}function af(){return JSON.parse(localStorage.getItem(aa)||"{}")}function cf(t){localStorage.setItem(aa,JSON.stringify(t))}function la(){Ut("events-tpl");const t=document.getElementById("events-list"),e=kn().sort((i,r)=>new Date(i.datetime)-new Date(r.datetime));t.innerHTML="",e.forEach(i=>t.appendChild(lf(i)))}function lf(t){const e=document.createElement("div");return e.className="event",e.innerHTML=`
    <div class="banner">${t.banner?`<img src="${t.banner}" alt="${t.title}">`:""}</div>
    <div>
      <div class="title">${t.title}</div>
      <div class="meta">${ha(t.datetime)} · ${t.place}</div>
      <div class="meta">🏷️ ${t.sport} — <strong>${t.level}</strong> · ${ua(t.category)}</div>
    </div>
    <div style="display:flex; gap:8px; align-items:center">
      ${uf(t)}
      <button class="btn" aria-label="Otwórz szczegóły">Szczegóły</button>
    </div>`,e.querySelector("button").addEventListener("click",i=>{gn=i.currentTarget,pf(t.id)}),e}function uf(t){const e=Math.max(0,t.capacity-(t.taken||0));return`<span id="m-cap-pill" class="pill ${e===0?"none":e<5?"low":"ok"}">${e} wolnych</span>`}function ua(t){return t==="women"?"Kobiety":t==="men"?"Mężczyźni":"Mix"}function hf(){const t=document.getElementById("dt"),e=new Date;e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),t.removeAttribute("step"),t.min=e.toISOString().slice(0,16);const i=document.getElementById("sport-select"),r=document.getElementById("level-select");i.innerHTML=Object.keys(Sn).map(R=>`<option value="${R}">${R}</option>`).join("");const s=()=>{const R=Sn[i.value]||[];r.innerHTML=R.map(k=>`<option value="${k}">${k}</option>`).join("")};i.addEventListener("change",s),s();const c=document.getElementById("create-map"),l=document.getElementById("place"),p=document.getElementById("lat"),m=document.getElementById("lng"),E=L.map(c,{attributionControl:!1,zoomControl:!0});L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(E);const A=[52.231,21.007];E.setView(A,12);let b=L.marker(A,{draggable:!0}).addTo(E);p.value=A[0],m.value=A[1],L.Control.geocoder({defaultMarkGeocode:!1,placeholder:"Szukaj miejsca…",geocoder:L.Control.Geocoder.photon()}).on("markgeocode",function(R){const k=R.geocode.center;E.setView(k,15),b.setLatLng(k),p.value=k.lat.toFixed(6),m.value=k.lng.toFixed(6),l.value=R.geocode.name||l.value}).addTo(E);async function S(R,k){try{const D=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${R}&lon=${k}`;return(await(await fetch(D,{headers:{"Accept-Language":"pl"}})).json()).display_name||`${R.toFixed(5)}, ${k.toFixed(5)}`}catch{return`${R.toFixed(5)}, ${k.toFixed(5)}`}}async function O(R){E.setView(R,15),b.setLatLng(R),p.value=R.lat.toFixed(6),m.value=R.lng.toFixed(6),l.value=await S(R.lat,R.lng)}E.on("click",R=>O(R.latlng)),b.on("dragend",()=>O(b.getLatLng())),l.addEventListener("change",()=>{var D;const R=(D=l.value)==null?void 0:D.trim();if(!R)return;L.Control.Geocoder.photon().geocode(R,x=>{if(x&&x[0]){const U=x[0].center;O(U)}})});const P=document.getElementById("create-form");P.addEventListener("submit",async R=>{R.preventDefault();const k=new FormData(P),D=Object.fromEntries(k.entries());D.id=Ot(),D.capacity=Number(D.capacity)||1,D.taken=0,D.lat=parseFloat(D.lat),D.lng=parseFloat(D.lng),D.datetime=k.get("datetime");const x=document.getElementById("bannerFile").files[0];if(x&&Ms)try{const{ref:U,uploadBytes:F,getDownloadURL:ne}=await Ya(async()=>{const{ref:h,uploadBytes:f,getDownloadURL:g}=await Promise.resolve().then(()=>Yd);return{ref:h,uploadBytes:f,getDownloadURL:g}},void 0),W=`banners/${D.id}-${x.name}`,y=U(Ms,W);await F(y,x),D.banner=await ne(y)}catch{D.banner=document.getElementById("bannerUrl").value||""}else D.banner=document.getElementById("bannerUrl").value||"";ca([...kn(),D]),location.hash="#/wydarzenia"})}function df(){Ut("login-tpl",()=>{const t=document.getElementById("login-form");t.addEventListener("submit",e=>{e.preventDefault();const{email:i,name:r}=Object.fromEntries(new FormData(t).entries());tf({uid:Ot(),email:i,name:r}),location.hash="#/profil"})})}function ff(){const t=qi();if(!t){location.hash="#/login";return}Ut("profile-tpl",()=>{const e=document.getElementById("profile-box");e.innerHTML=`
      <div class="meta">Zalogowano jako:</div>
      <div style="font-weight:700">${t.name||"(bez imienia)"}</div>
      <div class="meta">${t.email}</div>
    `;const i=af(),r=document.getElementById("skills-form");r.innerHTML=Object.keys(Sn).map(s=>{const c=Sn[s].map(l=>`<option ${i[s]===l?"selected":""}>${l}</option>`).join("");return`
        <div class="field" style="display:grid; grid-template-columns:200px 1fr; gap:12px; align-items:center">
          <label style="margin:0">${s}</label>
          <select name="${s}">${c}</select>
        </div>`}).join(""),document.getElementById("btn-save-skills").addEventListener("click",s=>{s.preventDefault();const c={};r.querySelectorAll("select").forEach(l=>{c[l.name]=l.value}),cf(c),alert("Zapisano poziomy.")}),document.getElementById("btn-logout").addEventListener("click",()=>{nf(),location.hash="#/login"})})}let ce=null,Dt=null,gn=null;function pf(t){const e=kn().find(E=>E.id===t);if(!e)return;const i=document.getElementById("event-modal");i.classList.add("open"),i.setAttribute("aria-hidden","false"),document.getElementById("m-title").textContent=e.title,document.getElementById("m-title-sm").textContent=e.title,document.getElementById("m-when").textContent=ha(e.datetime),document.getElementById("m-place").textContent=e.place,document.getElementById("m-desc").textContent=e.desc||"",document.getElementById("m-sport").innerHTML=`🏷️ ${e.sport} — <strong>${e.level}</strong> · ${ua(e.category)}`;const r=Math.max(0,e.capacity-(e.taken||0)),s=document.getElementById("m-cap-pill");s.textContent=`${r} wolnych`,s.classList.remove("none","low","ok"),s.classList.add(r===0?"none":r<5?"low":"ok");const c=document.getElementById("m-banner");if(c.innerHTML=e.banner?`<img src="${e.banner}" alt="${e.title}" style="width:100%; height:100%; object-fit:cover">`:"",ce){try{ce.remove()}catch{}ce=null}const l=document.getElementById("map");l.innerHTML="",ce=L.map(l,{attributionControl:!1,zoomControl:!0}),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(ce),L.marker([e.lat,e.lng]).addTo(ce).bindPopup(e.title),ce.setView([e.lat,e.lng],14),setTimeout(()=>ce.invalidateSize(),150),document.getElementById("m-close").focus(),Dt=E=>{if(E.key==="Escape"&&Xi(),E.key==="Tab"){const A=i.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'),b=Array.from(A).filter(P=>!P.disabled&&P.offsetParent!==null);if(!b.length)return;const S=b[0],O=b[b.length-1];E.shiftKey&&document.activeElement===S?(E.preventDefault(),O.focus()):!E.shiftKey&&document.activeElement===O&&(E.preventDefault(),S.focus())}},document.addEventListener("keydown",Dt);const m=document.getElementById("join-form");m.onsubmit=E=>{E.preventDefault();const{name:A,email:b}=Object.fromEntries(new FormData(m).entries()),S=kn(),O=S.findIndex(D=>D.id===t),P=S[O].capacity-(S[O].taken||0),R=document.getElementById("join-msg");if(P<=0){R.innerHTML='<span class="danger">Brak miejsc</span>';return}S[O].taken=(S[O].taken||0)+1,ca(S);const k=sf();(k[t]=k[t]||[]).push({name:A,email:b,at:new Date().toISOString()}),of(k),R.innerHTML='<span class="success">Jesteś zapisany/a! Do zobaczenia 🔥</span>',la()}}function Xi(){const t=document.getElementById("event-modal");if(t.classList.remove("open"),t.setAttribute("aria-hidden","true"),Dt&&(document.removeEventListener("keydown",Dt),Dt=null),ce){try{ce.remove()}catch{}ce=null}const e=document.getElementById("map");e&&(e.innerHTML=""),gn&&typeof gn.focus=="function"&&gn.focus()}document.getElementById("m-close").addEventListener("click",Xi);document.getElementById("event-modal").addEventListener("click",t=>{t.target.id==="event-modal"&&Xi()});function ha(t){try{return new Date(t).toLocaleString("pl-PL",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}document.getElementById("year").textContent=new Date().getFullYear();location.hash||(location.hash="#/");ra();sa();
