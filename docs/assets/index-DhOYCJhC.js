(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();const Ya="modulepreload",Za=function(t){return"/aktywni/"+t},Yr={},Qa=function(e,i,r){let s=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),f=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(i.map(m=>{if(m=Za(m),m in Yr)return;Yr[m]=!0;const E=m.endsWith(".css"),b=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${b}`))return;const A=document.createElement("link");if(A.rel=E?"stylesheet":Ya,E||(A.as="script"),A.crossOrigin="",A.href=m,f&&A.setAttribute("nonce",f),document.head.appendChild(A),E)return new Promise((k,O)=>{A.addEventListener("load",k),A.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(l){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=l,window.dispatchEvent(f),!f.defaultPrevented)throw l}return s.then(l=>{for(const f of l||[])f.status==="rejected"&&c(f.reason);return e().catch(c)})};var Zr={};/**
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
 */const Fs=function(t){const e=[];let i=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[i++]=s:s<2048?(e[i++]=s>>6|192,e[i++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[i++]=s>>18|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128,e[i++]=s&63|128):(e[i++]=s>>12|224,e[i++]=s>>6&63|128,e[i++]=s&63|128)}return e},ec=function(t){const e=[];let i=0,r=0;for(;i<t.length;){const s=t[i++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const c=t[i++];e[r++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=t[i++],l=t[i++],f=t[i++],m=((s&7)<<18|(c&63)<<12|(l&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const c=t[i++],l=t[i++];e[r++]=String.fromCharCode((s&15)<<12|(c&63)<<6|l&63)}}return e.join("")},$s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const c=t[s],l=s+1<t.length,f=l?t[s+1]:0,m=s+2<t.length,E=m?t[s+2]:0,b=c>>2,A=(c&3)<<4|f>>4;let k=(f&15)<<2|E>>6,O=E&63;m||(O=64,l||(k=64)),r.push(i[b],i[A],i[k],i[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ec(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const c=i[t.charAt(s++)],f=s<t.length?i[t.charAt(s)]:0;++s;const E=s<t.length?i[t.charAt(s)]:64;++s;const A=s<t.length?i[t.charAt(s)]:64;if(++s,c==null||f==null||E==null||A==null)throw new tc;const k=c<<2|f>>4;if(r.push(k),E!==64){const O=f<<4&240|E>>2;if(r.push(O),A!==64){const S=E<<6&192|A;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nc=function(t){const e=Fs(t);return $s.encodeByteArray(e,!0)},mn=function(t){return nc(t).replace(/\./g,"")},Hs=function(t){try{return $s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ic(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rc=()=>ic().__FIREBASE_DEFAULTS__,sc=()=>{if(typeof process>"u"||typeof Zr>"u")return;const t=Zr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hs(t[1]);return e&&JSON.parse(e)},Si=()=>{try{return rc()||sc()||oc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vs=t=>{var e,i;return(i=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[t]},zs=t=>{const e=Vs(t);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},Ws=()=>{var t;return(t=Si())===null||t===void 0?void 0:t.config},Ks=t=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ac{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function lc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dc(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fc(){try{return typeof indexedDB=="object"}catch{return!1}}function pc(){return new Promise((t,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var c;e(((c=s.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
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
 */const gc="FirebaseError";class me extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=gc,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},s=`${this.service}/${e}`,c=this.errors[e],l=c?mc(c,r):"Error",f=`${this.serviceName}: ${l} (${s}).`;return new me(s,f,r)}}function mc(t,e){return t.replace(yc,(i,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yc=/\{\$([^}]+)}/g;function _c(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yn(t,e){if(t===e)return!0;const i=Object.keys(t),r=Object.keys(e);for(const s of i){if(!r.includes(s))return!1;const c=t[s],l=e[s];if(Qr(c)&&Qr(l)){if(!yn(c,l))return!1}else if(c!==l)return!1}for(const s of r)if(!i.includes(s))return!1;return!0}function Qr(t){return t!==null&&typeof t=="object"}/**
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
 */function xt(t){const e=[];for(const[i,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vc(t,e){const i=new wc(t,e);return i.subscribe.bind(i)}class wc{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let s;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");Ic(e,["next","error","complete"])?s=e:s={next:e,error:i,complete:r},s.next===void 0&&(s.next=ri),s.error===void 0&&(s.error=ri),s.complete===void 0&&(s.complete=ri);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ic(t,e){if(typeof t!="object"||t===null)return!1;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}function ri(){}/**
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
 */function de(t){return t&&t._delegate?t._delegate:t}class je{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ke="[DEFAULT]";/**
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
 */class Ec{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new ac;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:i});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(s)return null;throw c}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bc(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:s});r.resolve(c)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,l]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);r===f&&l.resolve(s)}return s}onInit(e,i){var r;const s=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(s,c);const l=this.instances.get(s);return l&&e(l,s),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const s of r)try{s(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tc(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tc(t){return t===Ke?void 0:t}function bc(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ac{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Ec(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const Sc={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},kc=x.INFO,Rc={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Pc=(t,e,...i)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rc[e];if(s)console[s](`[${r}]  ${t.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=kc,this._logHandler=Pc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Cc=(t,e)=>e.some(i=>t instanceof i);let es,ts;function Oc(){return es||(es=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dc(){return ts||(ts=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qs=new WeakMap,gi=new WeakMap,Js=new WeakMap,si=new WeakMap,Ri=new WeakMap;function Nc(t){const e=new Promise((i,r)=>{const s=()=>{t.removeEventListener("success",c),t.removeEventListener("error",l)},c=()=>{i(xe(t.result)),s()},l=()=>{r(t.error),s()};t.addEventListener("success",c),t.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&qs.set(i,t)}).catch(()=>{}),Ri.set(e,t),e}function Lc(t){if(gi.has(t))return;const e=new Promise((i,r)=>{const s=()=>{t.removeEventListener("complete",c),t.removeEventListener("error",l),t.removeEventListener("abort",l)},c=()=>{i(),s()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",c),t.addEventListener("error",l),t.addEventListener("abort",l)});gi.set(t,e)}let mi={get(t,e,i){if(t instanceof IDBTransaction){if(e==="done")return gi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Js.get(t);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return xe(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uc(t){mi=t(mi)}function Mc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=t.call(oi(this),e,...i);return Js.set(r,e.sort?e.sort():[e]),xe(r)}:Dc().includes(t)?function(...e){return t.apply(oi(this),e),xe(qs.get(this))}:function(...e){return xe(t.apply(oi(this),e))}}function xc(t){return typeof t=="function"?Mc(t):(t instanceof IDBTransaction&&Lc(t),Cc(t,Oc())?new Proxy(t,mi):t)}function xe(t){if(t instanceof IDBRequest)return Nc(t);if(si.has(t))return si.get(t);const e=xc(t);return e!==t&&(si.set(t,e),Ri.set(e,t)),e}const oi=t=>Ri.get(t);function Bc(t,e,{blocked:i,upgrade:r,blocking:s,terminated:c}={}){const l=indexedDB.open(t,e),f=xe(l);return r&&l.addEventListener("upgradeneeded",m=>{r(xe(l.result),m.oldVersion,m.newVersion,xe(l.transaction),m)}),i&&l.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),f.then(m=>{c&&m.addEventListener("close",()=>c()),s&&m.addEventListener("versionchange",E=>s(E.oldVersion,E.newVersion,E))}).catch(()=>{}),f}const jc=["get","getKey","getAll","getAllKeys","count"],Fc=["put","add","delete","clear"],ai=new Map;function ns(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ai.get(e))return ai.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,s=Fc.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jc.includes(i)))return;const c=async function(l,...f){const m=this.transaction(l,s?"readwrite":"readonly");let E=m.store;return r&&(E=E.index(f.shift())),(await Promise.all([E[i](...f),s&&m.done]))[0]};return ai.set(e,c),c}Uc(t=>({...t,get:(e,i,r)=>ns(e,i)||t.get(e,i,r),has:(e,i)=>!!ns(e,i)||t.has(e,i)}));/**
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
 */class $c{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Hc(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function Hc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yi="@firebase/app",is="0.10.13";/**
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
 */const Te=new ki("@firebase/app"),Vc="@firebase/app-compat",zc="@firebase/analytics-compat",Wc="@firebase/analytics",Kc="@firebase/app-check-compat",Gc="@firebase/app-check",qc="@firebase/auth",Jc="@firebase/auth-compat",Xc="@firebase/database",Yc="@firebase/data-connect",Zc="@firebase/database-compat",Qc="@firebase/functions",el="@firebase/functions-compat",tl="@firebase/installations",nl="@firebase/installations-compat",il="@firebase/messaging",rl="@firebase/messaging-compat",sl="@firebase/performance",ol="@firebase/performance-compat",al="@firebase/remote-config",cl="@firebase/remote-config-compat",ll="@firebase/storage",ul="@firebase/storage-compat",hl="@firebase/firestore",dl="@firebase/vertexai-preview",fl="@firebase/firestore-compat",pl="firebase",gl="10.14.1";/**
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
 */const _i="[DEFAULT]",ml={[yi]:"fire-core",[Vc]:"fire-core-compat",[Wc]:"fire-analytics",[zc]:"fire-analytics-compat",[Gc]:"fire-app-check",[Kc]:"fire-app-check-compat",[qc]:"fire-auth",[Jc]:"fire-auth-compat",[Xc]:"fire-rtdb",[Yc]:"fire-data-connect",[Zc]:"fire-rtdb-compat",[Qc]:"fire-fn",[el]:"fire-fn-compat",[tl]:"fire-iid",[nl]:"fire-iid-compat",[il]:"fire-fcm",[rl]:"fire-fcm-compat",[sl]:"fire-perf",[ol]:"fire-perf-compat",[al]:"fire-rc",[cl]:"fire-rc-compat",[ll]:"fire-gcs",[ul]:"fire-gcs-compat",[hl]:"fire-fst",[fl]:"fire-fst-compat",[dl]:"fire-vertex","fire-js":"fire-js",[pl]:"fire-js-all"};/**
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
 */const _n=new Map,yl=new Map,vi=new Map;function rs(t,e){try{t.container.addComponent(e)}catch(i){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function Je(t){const e=t.name;if(vi.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;vi.set(e,t);for(const i of _n.values())rs(i,t);for(const i of yl.values())rs(i,t);return!0}function Rn(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t.settings!==void 0}/**
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
 */const _l={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Be=new Mt("app","Firebase",_l);/**
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
 */class vl{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}/**
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
 */const Ze=gl;function Xs(t,e={}){let i=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_i,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Be.create("bad-app-name",{appName:String(s)});if(i||(i=Ws()),!i)throw Be.create("no-options");const c=_n.get(s);if(c){if(yn(i,c.options)&&yn(r,c.config))return c;throw Be.create("duplicate-app",{appName:s})}const l=new Ac(s);for(const m of vi.values())l.addComponent(m);const f=new vl(i,r,l);return _n.set(s,f),f}function Pi(t=_i){const e=_n.get(t);if(!e&&t===_i&&Ws())return Xs();if(!e)throw Be.create("no-app",{appName:t});return e}function fe(t,e,i){var r;let s=(r=ml[t])!==null&&r!==void 0?r:t;i&&(s+=`-${i}`);const c=s.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const f=[`Unable to register library "${s}" with version "${e}":`];c&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),c&&l&&f.push("and"),l&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(f.join(" "));return}Je(new je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wl="firebase-heartbeat-database",Il=1,Nt="firebase-heartbeat-store";let ci=null;function Ys(){return ci||(ci=Bc(wl,Il,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Nt)}catch(i){console.warn(i)}}}}).catch(t=>{throw Be.create("idb-open",{originalErrorMessage:t.message})})),ci}async function El(t){try{const i=(await Ys()).transaction(Nt),r=await i.objectStore(Nt).get(Zs(t));return await i.done,r}catch(e){if(e instanceof me)Te.warn(e.message);else{const i=Be.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Te.warn(i.message)}}}async function ss(t,e){try{const r=(await Ys()).transaction(Nt,"readwrite");await r.objectStore(Nt).put(e,Zs(t)),await r.done}catch(i){if(i instanceof me)Te.warn(i.message);else{const r=Be.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Te.warn(r.message)}}}function Zs(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tl=1024,bl=30*24*60*60*1e3;class Al{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new kl(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=os();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const f=new Date(l.date).valueOf();return Date.now()-f<=bl}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Te.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=os(),{heartbeatsToSend:r,unsentEntries:s}=Sl(this._heartbeatsCache.heartbeats),c=mn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Te.warn(i),""}}}function os(){return new Date().toISOString().substring(0,10)}function Sl(t,e=Tl){const i=[];let r=t.slice();for(const s of t){const c=i.find(l=>l.agent===s.agent);if(c){if(c.dates.push(s.date),as(i)>e){c.dates.pop();break}}else if(i.push({agent:s.agent,dates:[s.date]}),as(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class kl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fc()?pc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await El(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return ss(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return ss(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function as(t){return mn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rl(t){Je(new je("platform-logger",e=>new $c(e),"PRIVATE")),Je(new je("heartbeat",e=>new Al(e),"PRIVATE")),fe(yi,is,t),fe(yi,is,"esm2017"),fe("fire-js","")}Rl("");var Pl="firebase",Cl="10.14.1";/**
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
 */fe(Pl,Cl,"app");function Ci(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(i[r[s]]=t[r[s]]);return i}function Qs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ol=Qs,eo=new Mt("auth","Firebase",Qs());/**
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
 */const vn=new ki("@firebase/auth");function Dl(t,...e){vn.logLevel<=x.WARN&&vn.warn(`Auth (${Ze}): ${t}`,...e)}function hn(t,...e){vn.logLevel<=x.ERROR&&vn.error(`Auth (${Ze}): ${t}`,...e)}/**
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
 */function be(t,...e){throw Oi(t,...e)}function pe(t,...e){return Oi(t,...e)}function to(t,e,i){const r=Object.assign(Object.assign({},Ol()),{[e]:i});return new Mt("auth","Firebase",r).create(e,{appName:t.name})}function Ge(t){return to(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oi(t,...e){if(typeof t!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(i,...r)}return eo.create(t,...e)}function C(t,e,...i){if(!t)throw Oi(e,...i)}function we(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hn(e),new Error(e)}function Ae(t,e){t||we(e)}/**
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
 */function wi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nl(){return cs()==="http:"||cs()==="https:"}function cs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ll(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nl()||uc()||"connection"in navigator)?navigator.onLine:!0}function Ul(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bt{constructor(e,i){this.shortDelay=e,this.longDelay=i,Ae(i>e,"Short delay should be less than long delay!"),this.isMobile=cc()||hc()}get(){return Ll()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Di(t,e){Ae(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class no{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ml={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xl=new Bt(3e4,6e4);function Ni(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,i,r,s={}){return io(t,s,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const f=xt(Object.assign({key:t.config.apiKey},l)).slice(1),m=await t._getAdditionalHeaders();m["Content-Type"]="application/json",t.languageCode&&(m["X-Firebase-Locale"]=t.languageCode);const E=Object.assign({method:e,headers:m},c);return lc()||(E.referrerPolicy="no-referrer"),no.fetch()(ro(t,t.config.apiHost,i,f),E)})}async function io(t,e,i){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ml),e);try{const s=new jl(t),c=await Promise.race([i(),s.promise]);s.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw sn(t,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const f=c.ok?l.errorMessage:l.error.message,[m,E]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw sn(t,"credential-already-in-use",l);if(m==="EMAIL_EXISTS")throw sn(t,"email-already-in-use",l);if(m==="USER_DISABLED")throw sn(t,"user-disabled",l);const b=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw to(t,b,E);be(t,b)}}catch(s){if(s instanceof me)throw s;be(t,"network-request-failed",{message:String(s)})}}async function Bl(t,e,i,r,s={}){const c=await ut(t,e,i,r,s);return"mfaPendingCredential"in c&&be(t,"multi-factor-auth-required",{_serverResponse:c}),c}function ro(t,e,i,r){const s=`${e}${i}?${r}`;return t.config.emulator?Di(t.config,s):`${t.config.apiScheme}://${s}`}class jl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(pe(this.auth,"network-request-failed")),xl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sn(t,e,i){const r={appName:t.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const s=pe(t,e,r);return s.customData._tokenResponse=i,s}/**
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
 */async function Fl(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function so(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function kt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $l(t,e=!1){const i=de(t),r=await i.getIdToken(e),s=Li(r);C(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:s,token:r,authTime:kt(li(s.auth_time)),issuedAtTime:kt(li(s.iat)),expirationTime:kt(li(s.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function li(t){return Number(t)*1e3}function Li(t){const[e,i,r]=t.split(".");if(e===void 0||i===void 0||r===void 0)return hn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hs(i);return s?JSON.parse(s):(hn("Failed to decode base64 JWT payload"),null)}catch(s){return hn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ls(t){const e=Li(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lt(t,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof me&&Hl(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ii{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wn(t){var e;const i=t.auth,r=await t.getIdToken(),s=await Lt(t,so(i,{idToken:r}));C(s==null?void 0:s.users.length,i,"internal-error");const c=s.users[0];t._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?oo(c.providerUserInfo):[],f=Wl(t.providerData,l),m=t.isAnonymous,E=!(t.email&&c.passwordHash)&&!(f!=null&&f.length),b=m?E:!1,A={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:f,metadata:new Ii(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(t,A)}async function zl(t){const e=de(t);await wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wl(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oo(t){return t.map(e=>{var{providerId:i}=e,r=Ci(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Kl(t,e){const i=await io(t,{},async()=>{const r=xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=t.config,l=ro(t,s,"/v1/token",`key=${c}`),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",no.fetch()(l,{method:"POST",headers:f,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Gl(t,e){return ut(t,"POST","/v2/accounts:revokeToken",Ni(t,e))}/**
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
 */class st{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ls(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){C(e.length!==0,"internal-error");const i=ls(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:s,expiresIn:c}=await Kl(e,i);this.updateTokensAndExpiration(r,s,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:s,expirationTime:c}=i,l=new st;return r&&(C(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(C(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),c&&(C(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new st,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
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
 */function Oe(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ie{constructor(e){var{uid:i,auth:r,stsTokenManager:s}=e,c=Ci(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ii(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await Lt(this,this.stsTokenManager.getToken(this.auth,e));return C(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return $l(this,e)}reload(){return zl(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await wn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(Ge(this.auth));const e=await this.getIdToken();return await Lt(this,Fl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,s,c,l,f,m,E,b;const A=(r=i.displayName)!==null&&r!==void 0?r:void 0,k=(s=i.email)!==null&&s!==void 0?s:void 0,O=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,S=(l=i.photoURL)!==null&&l!==void 0?l:void 0,D=(f=i.tenantId)!==null&&f!==void 0?f:void 0,P=(m=i._redirectEventId)!==null&&m!==void 0?m:void 0,W=(E=i.createdAt)!==null&&E!==void 0?E:void 0,j=(b=i.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:M,emailVerified:R,isAnonymous:B,providerData:$,stsTokenManager:y}=i;C(M&&y,e,"internal-error");const h=st.fromJSON(this.name,y);C(typeof M=="string",e,"internal-error"),Oe(A,e.name),Oe(k,e.name),C(typeof R=="boolean",e,"internal-error"),C(typeof B=="boolean",e,"internal-error"),Oe(O,e.name),Oe(S,e.name),Oe(D,e.name),Oe(P,e.name),Oe(W,e.name),Oe(j,e.name);const d=new Ie({uid:M,auth:e,email:k,emailVerified:R,displayName:A,isAnonymous:B,photoURL:S,phoneNumber:O,tenantId:D,stsTokenManager:h,createdAt:W,lastLoginAt:j});return $&&Array.isArray($)&&(d.providerData=$.map(g=>Object.assign({},g))),P&&(d._redirectEventId=P),d}static async _fromIdTokenResponse(e,i,r=!1){const s=new st;s.updateFromServerResponse(i);const c=new Ie({uid:i.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wn(c),c}static async _fromGetAccountInfoResponse(e,i,r){const s=i.users[0];C(s.localId!==void 0,"internal-error");const c=s.providerUserInfo!==void 0?oo(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(c!=null&&c.length),f=new st;f.updateFromIdToken(r);const m=new Ie({uid:s.localId,auth:e,stsTokenManager:f,isAnonymous:l}),E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ii(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(c!=null&&c.length)};return Object.assign(m,E),m}}/**
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
 */const us=new Map;function Ee(t){Ae(t instanceof Function,"Expected a class definition");let e=us.get(t);return e?(Ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,us.set(t,e),e)}/**
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
 */class ao{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}ao.type="NONE";const hs=ao;/**
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
 */function dn(t,e,i){return`firebase:${t}:${e}:${i}`}class ot{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:s,name:c}=this.auth;this.fullUserKey=dn(this.userKey,s.apiKey,c),this.fullPersistenceKey=dn("persistence",s.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new ot(Ee(hs),e,r);const s=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=s[0]||Ee(hs);const l=dn(r,e.config.apiKey,e.name);let f=null;for(const E of i)try{const b=await E._get(l);if(b){const A=Ie._fromJSON(e,b);E!==c&&(f=A),c=E;break}}catch{}const m=s.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new ot(c,e,r):(c=m[0],f&&await c._set(l,f.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new ot(c,e,r))}}/**
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
 */function ds(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ho(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(co(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(po(e))return"Blackberry";if(go(e))return"Webos";if(lo(e))return"Safari";if((e.includes("chrome/")||uo(e))&&!e.includes("edge/"))return"Chrome";if(fo(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function co(t=ne()){return/firefox\//i.test(t)}function lo(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uo(t=ne()){return/crios\//i.test(t)}function ho(t=ne()){return/iemobile/i.test(t)}function fo(t=ne()){return/android/i.test(t)}function po(t=ne()){return/blackberry/i.test(t)}function go(t=ne()){return/webos/i.test(t)}function Ui(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ql(t=ne()){var e;return Ui(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jl(){return dc()&&document.documentMode===10}function mo(t=ne()){return Ui(t)||fo(t)||go(t)||po(t)||/windows phone/i.test(t)||ho(t)}/**
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
 */function yo(t,e=[]){let i;switch(t){case"Browser":i=ds(ne());break;case"Worker":i=`${ds(ne())}-${t}`;break;default:i=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ze}/${r}`}/**
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
 */class Xl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((l,f)=>{try{const m=e(c);l(m)}catch(m){f(m)}});r.onAbort=i,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const s of i)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Yl(t,e={}){return ut(t,"GET","/v2/passwordPolicy",Ni(t,e))}/**
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
 */const Zl=6;class Ql{constructor(e){var i,r,s,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=l.minPasswordLength)!==null&&i!==void 0?i:Zl,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,s,c,l,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(i=m.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(l=m.containsNumericCharacter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),s&&(i.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class eu{constructor(e,i,r,s){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fs(this),this.idTokenSubscription=new fs(this),this.beforeStateQueue=new Xl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Ee(i)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ot.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await so(this,{idToken:e}),r=await Ie._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Me(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(f,f))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,f=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!l||l===f)&&(m!=null&&m.user)&&(s=m.user,c=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await wn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ul()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(Ge(this));const i=e?de(e):null;return i&&C(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(Ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(Ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yl(this),i=new Ql(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mt("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Ee(e)||this._popupRedirectResolver;C(i,this,"argument-error"),this.redirectPersistenceManager=await ot.create(this,[Ee(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,s){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let l=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(f,this,"internal-error"),f.then(()=>{l||c(this.currentUser)}),typeof i=="function"){const m=e.addObserver(i,r,s);return()=>{l=!0,m()}}else{const m=e.addObserver(i);return()=>{l=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(i["X-Firebase-AppCheck"]=s),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Dl(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Mi(t){return de(t)}class fs{constructor(e){this.auth=e,this.observer=null,this.addObserver=vc(i=>this.observer=i)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tu(t){xi=t}function nu(t){return xi.loadJS(t)}function iu(){return xi.gapiScript}function ru(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function su(t,e){const i=Rn(t,"auth");if(i.isInitialized()){const s=i.getImmediate(),c=i.getOptions();if(yn(c,e??{}))return s;be(s,"already-initialized")}return i.initialize({options:e})}function ou(t,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Ee);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _o(t,e,i){const r=Mi(t);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(i!=null&&i.disableWarnings),c=vo(e),{host:l,port:f}=au(e),m=f===null?"":`:${f}`;r.config.emulator={url:`${c}//${l}${m}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||cu()}function vo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function au(t){const e=vo(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const c=s[1];return{host:c,port:ps(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:ps(l)}}}function ps(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cu(){function t(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wo{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,i){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}/**
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
 */async function at(t,e){return Bl(t,"POST","/v1/accounts:signInWithIdp",Ni(t,e))}/**
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
 */const lu="http://localhost";class Xe extends wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):be("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=i,c=Ci(i,["providerId","signInMethod"]);if(!r||!s)return null;const l=new Xe(r,s);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const i=this.buildRequest();return at(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,at(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,at(e,i)}buildRequest(){const e={requestUri:lu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=xt(i)}return e}}/**
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
 */class Io{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jt extends Io{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class De extends jt{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
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
 */class Ne extends jt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Xe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Ne.credential(i,r)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";/**
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
 */class Le extends jt{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
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
 */class Ue extends jt{constructor(){super("twitter.com")}static credential(e,i){return Xe._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Ue.credential(i,r)}catch{return null}}}Ue.TWITTER_SIGN_IN_METHOD="twitter.com";Ue.PROVIDER_ID="twitter.com";/**
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
 */class ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,s=!1){const c=await Ie._fromIdTokenResponse(e,r,s),l=gs(r);return new ct({user:c,providerId:l,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const s=gs(r);return new ct({user:e,providerId:s,_tokenResponse:r,operationType:i})}}function gs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class In extends me{constructor(e,i,r,s){var c;super(i.code,i.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,In.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,s){return new In(e,i,r,s)}}function Eo(t,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?In._fromErrorAndOperation(t,c,e,r):c})}async function uu(t,e,i=!1){const r=await Lt(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return ct._forOperation(t,"link",r)}/**
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
 */async function hu(t,e,i=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(Ge(r));const s="reauthenticate";try{const c=await Lt(t,Eo(r,s,e,t),i);C(c.idToken,r,"internal-error");const l=Li(c.idToken);C(l,r,"internal-error");const{sub:f}=l;return C(t.uid===f,r,"user-mismatch"),ct._forOperation(t,s,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&be(r,"user-mismatch"),c}}/**
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
 */async function du(t,e,i=!1){if(Me(t.app))return Promise.reject(Ge(t));const r="signIn",s=await Eo(t,r,e),c=await ct._fromIdTokenResponse(t,r,s);return i||await t._updateCurrentUser(c.user),c}/**
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
 */function fu(t,e){return de(t).setPersistence(e)}function pu(t,e,i,r){return de(t).onIdTokenChanged(e,i,r)}function gu(t,e,i){return de(t).beforeAuthStateChanged(e,i)}const En="__sak";/**
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
 */class To{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mu=1e3,yu=10;class bo extends To{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),s=this.localCache[i];r!==s&&e(i,s,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((l,f,m)=>{this.notifyListeners(l,m)});return}const r=e.key;i?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!i&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);Jl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yu):s()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},mu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}bo.type="LOCAL";const Ao=bo;/**
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
 */class So extends To{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}So.type="SESSION";const ko=So;/**
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
 */function _u(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(s=>s.isListeningto(e));if(i)return i;const r=new Pn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:s,data:c}=i.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const f=Array.from(l).map(async E=>E(i.origin,c)),m=await _u(f);i.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:m})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pn.receivers=[];/**
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
 */function Bi(t="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return t+i}/**
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
 */class vu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,l;return new Promise((f,m)=>{const E=Bi("",20);s.port1.start();const b=setTimeout(()=>{m(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(A){const k=A;if(k.data.eventId===E)switch(k.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(k.data.response);break;default:clearTimeout(b),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function ge(){return window}function wu(t){ge().location.href=t}/**
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
 */function Ro(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function Iu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tu(){return Ro()?self:null}/**
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
 */const Po="firebaseLocalStorageDb",bu=1,Tn="firebaseLocalStorage",Co="fbase_key";class Ft{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Cn(t,e){return t.transaction([Tn],e?"readwrite":"readonly").objectStore(Tn)}function Au(){const t=indexedDB.deleteDatabase(Po);return new Ft(t).toPromise()}function Ei(){const t=indexedDB.open(Po,bu);return new Promise((e,i)=>{t.addEventListener("error",()=>{i(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tn,{keyPath:Co})}catch(s){i(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tn)?e(r):(r.close(),await Au(),e(await Ei()))})})}async function ms(t,e,i){const r=Cn(t,!0).put({[Co]:e,value:i});return new Ft(r).toPromise()}async function Su(t,e){const i=Cn(t,!1).get(e),r=await new Ft(i).toPromise();return r===void 0?null:r.value}function ys(t,e){const i=Cn(t,!0).delete(e);return new Ft(i).toPromise()}const ku=800,Ru=3;class Oo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ei(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Ru)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ro()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(Tu()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Iu(),!this.activeServiceWorker)return;this.sender=new vu(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ei();return await ms(e,En,"1"),await ys(e,En),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>ms(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>Su(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>ys(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=Cn(s,!1).getAll();return new Ft(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),i.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),i.push(s));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ku)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oo.type="LOCAL";const Pu=Oo;new Bt(3e4,6e4);/**
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
 */function Cu(t,e){return e?Ee(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ji extends wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return at(e,this._buildIdpRequest())}_linkToIdToken(e,i){return at(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return at(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Ou(t){return du(t.auth,new ji(t),t.bypassAuthState)}function Du(t){const{auth:e,user:i}=t;return C(i,e,"internal-error"),hu(i,new ji(t),t.bypassAuthState)}async function Nu(t){const{auth:e,user:i}=t;return C(i,e,"internal-error"),uu(i,new ji(t),t.bypassAuthState)}/**
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
 */class Do{constructor(e,i,r,s,c=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:s,tenantId:c,error:l,type:f}=e;if(l){this.reject(l);return}const m={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ou;case"linkViaPopup":case"linkViaRedirect":return Nu;case"reauthViaPopup":case"reauthViaRedirect":return Du;default:be(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lu=new Bt(2e3,1e4);class rt extends Do{constructor(e,i,r,s,c){super(e,i,s,c),this.provider=r,this.authWindow=null,this.pollId=null,rt.currentPopupAction&&rt.currentPopupAction.cancel(),rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=Bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lu.get())};e()}}rt.currentPopupAction=null;/**
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
 */const Uu="pendingRedirect",fn=new Map;class Mu extends Do{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=fn.get(this.auth._key());if(!e){try{const r=await xu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}fn.set(this.auth._key(),e)}return this.bypassAuthState||fn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xu(t,e){const i=Fu(e),r=ju(t);if(!await r._isAvailable())return!1;const s=await r._get(i)==="true";return await r._remove(i),s}function Bu(t,e){fn.set(t._key(),e)}function ju(t){return Ee(t._redirectPersistence)}function Fu(t){return dn(Uu,t.config.apiKey,t.name)}async function $u(t,e,i=!1){if(Me(t.app))return Promise.reject(Ge(t));const r=Mi(t),s=Cu(r,e),l=await new Mu(r,s,i).execute();return l&&!i&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const Hu=10*60*1e3;class Vu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zu(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!No(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(pe(this.auth,s))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hu&&this.cachedEventUids.clear(),this.cachedEventUids.has(_s(e))}saveEventToCache(e){this.cachedEventUids.add(_s(e)),this.lastProcessedEventTime=Date.now()}}function _s(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function No({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return No(t);default:return!1}}/**
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
 */async function Wu(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
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
 */const Ku=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gu=/^https?/;async function qu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wu(t);for(const i of e)try{if(Ju(i))return}catch{}be(t,"unauthorized-domain")}function Ju(t){const e=wi(),{protocol:i,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?i==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&l.hostname===r}if(!Gu.test(i))return!1;if(Ku.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Xu=new Bt(3e4,6e4);function vs(){const t=ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}}function Yu(t){return new Promise((e,i)=>{var r,s,c;function l(){vs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vs(),i(pe(t,"network-request-failed"))},timeout:Xu.get()})}if(!((s=(r=ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((c=ge().gapi)===null||c===void 0)&&c.load)l();else{const f=ru("iframefcb");return ge()[f]=()=>{gapi.load?l():i(pe(t,"network-request-failed"))},nu(`${iu()}?onload=${f}`).catch(m=>i(m))}}).catch(e=>{throw pn=null,e})}let pn=null;function Zu(t){return pn=pn||Yu(t),pn}/**
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
 */const Qu=new Bt(5e3,15e3),eh="__/auth/iframe",th="emulator/auth/iframe",nh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ih=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rh(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?Di(e,th):`https://${t.config.authDomain}/${eh}`,r={apiKey:e.apiKey,appName:t.name,v:Ze},s=ih.get(t.config.apiHost);s&&(r.eid=s);const c=t._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${xt(r).slice(1)}`}async function sh(t){const e=await Zu(t),i=ge().gapi;return C(i,t,"internal-error"),e.open({where:document.body,url:rh(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nh,dontclear:!0},r=>new Promise(async(s,c)=>{await r.restyle({setHideOnLeave:!1});const l=pe(t,"network-request-failed"),f=ge().setTimeout(()=>{c(l)},Qu.get());function m(){ge().clearTimeout(f),s(r)}r.ping(m).then(m,()=>{c(l)})}))}/**
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
 */const oh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ah=500,ch=600,lh="_blank",uh="http://localhost";class ws{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hh(t,e,i,r=ah,s=ch){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const m=Object.assign(Object.assign({},oh),{width:r.toString(),height:s.toString(),top:c,left:l}),E=ne().toLowerCase();i&&(f=uo(E)?lh:i),co(E)&&(e=e||uh,m.scrollbars="yes");const b=Object.entries(m).reduce((k,[O,S])=>`${k}${O}=${S},`,"");if(ql(E)&&f!=="_self")return dh(e||"",f),new ws(null);const A=window.open(e||"",f,b);C(A,t,"popup-blocked");try{A.focus()}catch{}return new ws(A)}function dh(t,e){const i=document.createElement("a");i.href=t,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const fh="__/auth/handler",ph="emulator/auth/handler",gh=encodeURIComponent("fac");async function Is(t,e,i,r,s,c){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:r,v:Ze,eventId:s};if(e instanceof Io){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",_c(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,A]of Object.entries({}))l[b]=A}if(e instanceof jt){const b=e.getScopes().filter(A=>A!=="");b.length>0&&(l.scopes=b.join(","))}t.tenantId&&(l.tid=t.tenantId);const f=l;for(const b of Object.keys(f))f[b]===void 0&&delete f[b];const m=await t._getAppCheckToken(),E=m?`#${gh}=${encodeURIComponent(m)}`:"";return`${mh(t)}?${xt(f).slice(1)}${E}`}function mh({config:t}){return t.emulator?Di(t,ph):`https://${t.authDomain}/${fh}`}/**
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
 */const ui="webStorageSupport";class yh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ko,this._completeRedirectFn=$u,this._overrideRedirectResult=Bu}async _openPopup(e,i,r,s){var c;Ae((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Is(e,i,r,wi(),s);return hh(e,l,Bi())}async _openRedirect(e,i,r,s){await this._originValidation(e);const c=await Is(e,i,r,wi(),s);return wu(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:s,promise:c}=this.eventManagers[i];return s?Promise.resolve(s):(Ae(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await sh(e),r=new Vu(e);return i.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(ui,{type:ui},s=>{var c;const l=(c=s==null?void 0:s[0])===null||c===void 0?void 0:c[ui];l!==void 0&&i(!!l),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=qu(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return mo()||lo()||Ui()}}const _h=yh;var Es="@firebase/auth",Ts="1.7.9";/**
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
 */class vh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ih(t){Je(new je("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:f}=r.options;C(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:l,authDomain:f,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yo(t)},E=new eu(r,s,c,m);return ou(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),Je(new je("auth-internal",e=>{const i=Mi(e.getProvider("auth").getImmediate());return(r=>new vh(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe(Es,Ts,wh(t)),fe(Es,Ts,"esm2017")}/**
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
 */const Eh=5*60,Th=Ks("authIdTokenMaxAge")||Eh;let bs=null;const bh=t=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Th)return;const s=i==null?void 0:i.token;bs!==s&&(bs=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ah(t=Pi()){const e=Rn(t,"auth");if(e.isInitialized())return e.getImmediate();const i=su(t,{popupRedirectResolver:_h,persistence:[Pu,Ao,ko]}),r=Ks("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=bh(c.toString());gu(i,l,()=>l(i.currentUser)),pu(i,f=>l(f))}}const s=Vs("auth");return s&&_o(i,`http://${s}`),i}function Sh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tu({loadJS(t){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const c=pe("internal-error");c.customData=s,i(c)},r.type="text/javascript",r.charset="UTF-8",Sh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ih("Browser");var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lo;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,h){function d(){}d.prototype=h.prototype,y.D=h.prototype,y.prototype=new d,y.prototype.constructor=y,y.C=function(g,_,w){for(var p=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)p[ae-2]=arguments[ae];return h.prototype[_].apply(g,p)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,h,d){d||(d=0);var g=Array(16);if(typeof h=="string")for(var _=0;16>_;++_)g[_]=h.charCodeAt(d++)|h.charCodeAt(d++)<<8|h.charCodeAt(d++)<<16|h.charCodeAt(d++)<<24;else for(_=0;16>_;++_)g[_]=h[d++]|h[d++]<<8|h[d++]<<16|h[d++]<<24;h=y.g[0],d=y.g[1],_=y.g[2];var w=y.g[3],p=h+(w^d&(_^w))+g[0]+3614090360&4294967295;h=d+(p<<7&4294967295|p>>>25),p=w+(_^h&(d^_))+g[1]+3905402710&4294967295,w=h+(p<<12&4294967295|p>>>20),p=_+(d^w&(h^d))+g[2]+606105819&4294967295,_=w+(p<<17&4294967295|p>>>15),p=d+(h^_&(w^h))+g[3]+3250441966&4294967295,d=_+(p<<22&4294967295|p>>>10),p=h+(w^d&(_^w))+g[4]+4118548399&4294967295,h=d+(p<<7&4294967295|p>>>25),p=w+(_^h&(d^_))+g[5]+1200080426&4294967295,w=h+(p<<12&4294967295|p>>>20),p=_+(d^w&(h^d))+g[6]+2821735955&4294967295,_=w+(p<<17&4294967295|p>>>15),p=d+(h^_&(w^h))+g[7]+4249261313&4294967295,d=_+(p<<22&4294967295|p>>>10),p=h+(w^d&(_^w))+g[8]+1770035416&4294967295,h=d+(p<<7&4294967295|p>>>25),p=w+(_^h&(d^_))+g[9]+2336552879&4294967295,w=h+(p<<12&4294967295|p>>>20),p=_+(d^w&(h^d))+g[10]+4294925233&4294967295,_=w+(p<<17&4294967295|p>>>15),p=d+(h^_&(w^h))+g[11]+2304563134&4294967295,d=_+(p<<22&4294967295|p>>>10),p=h+(w^d&(_^w))+g[12]+1804603682&4294967295,h=d+(p<<7&4294967295|p>>>25),p=w+(_^h&(d^_))+g[13]+4254626195&4294967295,w=h+(p<<12&4294967295|p>>>20),p=_+(d^w&(h^d))+g[14]+2792965006&4294967295,_=w+(p<<17&4294967295|p>>>15),p=d+(h^_&(w^h))+g[15]+1236535329&4294967295,d=_+(p<<22&4294967295|p>>>10),p=h+(_^w&(d^_))+g[1]+4129170786&4294967295,h=d+(p<<5&4294967295|p>>>27),p=w+(d^_&(h^d))+g[6]+3225465664&4294967295,w=h+(p<<9&4294967295|p>>>23),p=_+(h^d&(w^h))+g[11]+643717713&4294967295,_=w+(p<<14&4294967295|p>>>18),p=d+(w^h&(_^w))+g[0]+3921069994&4294967295,d=_+(p<<20&4294967295|p>>>12),p=h+(_^w&(d^_))+g[5]+3593408605&4294967295,h=d+(p<<5&4294967295|p>>>27),p=w+(d^_&(h^d))+g[10]+38016083&4294967295,w=h+(p<<9&4294967295|p>>>23),p=_+(h^d&(w^h))+g[15]+3634488961&4294967295,_=w+(p<<14&4294967295|p>>>18),p=d+(w^h&(_^w))+g[4]+3889429448&4294967295,d=_+(p<<20&4294967295|p>>>12),p=h+(_^w&(d^_))+g[9]+568446438&4294967295,h=d+(p<<5&4294967295|p>>>27),p=w+(d^_&(h^d))+g[14]+3275163606&4294967295,w=h+(p<<9&4294967295|p>>>23),p=_+(h^d&(w^h))+g[3]+4107603335&4294967295,_=w+(p<<14&4294967295|p>>>18),p=d+(w^h&(_^w))+g[8]+1163531501&4294967295,d=_+(p<<20&4294967295|p>>>12),p=h+(_^w&(d^_))+g[13]+2850285829&4294967295,h=d+(p<<5&4294967295|p>>>27),p=w+(d^_&(h^d))+g[2]+4243563512&4294967295,w=h+(p<<9&4294967295|p>>>23),p=_+(h^d&(w^h))+g[7]+1735328473&4294967295,_=w+(p<<14&4294967295|p>>>18),p=d+(w^h&(_^w))+g[12]+2368359562&4294967295,d=_+(p<<20&4294967295|p>>>12),p=h+(d^_^w)+g[5]+4294588738&4294967295,h=d+(p<<4&4294967295|p>>>28),p=w+(h^d^_)+g[8]+2272392833&4294967295,w=h+(p<<11&4294967295|p>>>21),p=_+(w^h^d)+g[11]+1839030562&4294967295,_=w+(p<<16&4294967295|p>>>16),p=d+(_^w^h)+g[14]+4259657740&4294967295,d=_+(p<<23&4294967295|p>>>9),p=h+(d^_^w)+g[1]+2763975236&4294967295,h=d+(p<<4&4294967295|p>>>28),p=w+(h^d^_)+g[4]+1272893353&4294967295,w=h+(p<<11&4294967295|p>>>21),p=_+(w^h^d)+g[7]+4139469664&4294967295,_=w+(p<<16&4294967295|p>>>16),p=d+(_^w^h)+g[10]+3200236656&4294967295,d=_+(p<<23&4294967295|p>>>9),p=h+(d^_^w)+g[13]+681279174&4294967295,h=d+(p<<4&4294967295|p>>>28),p=w+(h^d^_)+g[0]+3936430074&4294967295,w=h+(p<<11&4294967295|p>>>21),p=_+(w^h^d)+g[3]+3572445317&4294967295,_=w+(p<<16&4294967295|p>>>16),p=d+(_^w^h)+g[6]+76029189&4294967295,d=_+(p<<23&4294967295|p>>>9),p=h+(d^_^w)+g[9]+3654602809&4294967295,h=d+(p<<4&4294967295|p>>>28),p=w+(h^d^_)+g[12]+3873151461&4294967295,w=h+(p<<11&4294967295|p>>>21),p=_+(w^h^d)+g[15]+530742520&4294967295,_=w+(p<<16&4294967295|p>>>16),p=d+(_^w^h)+g[2]+3299628645&4294967295,d=_+(p<<23&4294967295|p>>>9),p=h+(_^(d|~w))+g[0]+4096336452&4294967295,h=d+(p<<6&4294967295|p>>>26),p=w+(d^(h|~_))+g[7]+1126891415&4294967295,w=h+(p<<10&4294967295|p>>>22),p=_+(h^(w|~d))+g[14]+2878612391&4294967295,_=w+(p<<15&4294967295|p>>>17),p=d+(w^(_|~h))+g[5]+4237533241&4294967295,d=_+(p<<21&4294967295|p>>>11),p=h+(_^(d|~w))+g[12]+1700485571&4294967295,h=d+(p<<6&4294967295|p>>>26),p=w+(d^(h|~_))+g[3]+2399980690&4294967295,w=h+(p<<10&4294967295|p>>>22),p=_+(h^(w|~d))+g[10]+4293915773&4294967295,_=w+(p<<15&4294967295|p>>>17),p=d+(w^(_|~h))+g[1]+2240044497&4294967295,d=_+(p<<21&4294967295|p>>>11),p=h+(_^(d|~w))+g[8]+1873313359&4294967295,h=d+(p<<6&4294967295|p>>>26),p=w+(d^(h|~_))+g[15]+4264355552&4294967295,w=h+(p<<10&4294967295|p>>>22),p=_+(h^(w|~d))+g[6]+2734768916&4294967295,_=w+(p<<15&4294967295|p>>>17),p=d+(w^(_|~h))+g[13]+1309151649&4294967295,d=_+(p<<21&4294967295|p>>>11),p=h+(_^(d|~w))+g[4]+4149444226&4294967295,h=d+(p<<6&4294967295|p>>>26),p=w+(d^(h|~_))+g[11]+3174756917&4294967295,w=h+(p<<10&4294967295|p>>>22),p=_+(h^(w|~d))+g[2]+718787259&4294967295,_=w+(p<<15&4294967295|p>>>17),p=d+(w^(_|~h))+g[9]+3951481745&4294967295,y.g[0]=y.g[0]+h&4294967295,y.g[1]=y.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+w&4294967295}r.prototype.u=function(y,h){h===void 0&&(h=y.length);for(var d=h-this.blockSize,g=this.B,_=this.h,w=0;w<h;){if(_==0)for(;w<=d;)s(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<h;)if(g[_++]=y.charCodeAt(w++),_==this.blockSize){s(this,g),_=0;break}}else for(;w<h;)if(g[_++]=y[w++],_==this.blockSize){s(this,g),_=0;break}}this.h=_,this.o+=h},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var h=1;h<y.length-8;++h)y[h]=0;var d=8*this.o;for(h=y.length-8;h<y.length;++h)y[h]=d&255,d/=256;for(this.u(y),y=Array(16),h=d=0;4>h;++h)for(var g=0;32>g;g+=8)y[d++]=this.g[h]>>>g&255;return y};function c(y,h){var d=f;return Object.prototype.hasOwnProperty.call(d,y)?d[y]:d[y]=h(y)}function l(y,h){this.h=h;for(var d=[],g=!0,_=y.length-1;0<=_;_--){var w=y[_]|0;g&&w==h||(d[_]=w,g=!1)}this.g=d}var f={};function m(y){return-128<=y&&128>y?c(y,function(h){return new l([h|0],0>h?-1:0)}):new l([y|0],0>y?-1:0)}function E(y){if(isNaN(y)||!isFinite(y))return A;if(0>y)return P(E(-y));for(var h=[],d=1,g=0;y>=d;g++)h[g]=y/d|0,d*=4294967296;return new l(h,0)}function b(y,h){if(y.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(y.charAt(0)=="-")return P(b(y.substring(1),h));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=E(Math.pow(h,8)),g=A,_=0;_<y.length;_+=8){var w=Math.min(8,y.length-_),p=parseInt(y.substring(_,_+w),h);8>w?(w=E(Math.pow(h,w)),g=g.j(w).add(E(p))):(g=g.j(d),g=g.add(E(p)))}return g}var A=m(0),k=m(1),O=m(16777216);t=l.prototype,t.m=function(){if(D(this))return-P(this).m();for(var y=0,h=1,d=0;d<this.g.length;d++){var g=this.i(d);y+=(0<=g?g:4294967296+g)*h,h*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S(this))return"0";if(D(this))return"-"+P(this).toString(y);for(var h=E(Math.pow(y,6)),d=this,g="";;){var _=R(d,h).g;d=W(d,_.j(h));var w=((0<d.g.length?d.g[0]:d.h)>>>0).toString(y);if(d=_,S(d))return w+g;for(;6>w.length;)w="0"+w;g=w+g}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function S(y){if(y.h!=0)return!1;for(var h=0;h<y.g.length;h++)if(y.g[h]!=0)return!1;return!0}function D(y){return y.h==-1}t.l=function(y){return y=W(this,y),D(y)?-1:S(y)?0:1};function P(y){for(var h=y.g.length,d=[],g=0;g<h;g++)d[g]=~y.g[g];return new l(d,~y.h).add(k)}t.abs=function(){return D(this)?P(this):this},t.add=function(y){for(var h=Math.max(this.g.length,y.g.length),d=[],g=0,_=0;_<=h;_++){var w=g+(this.i(_)&65535)+(y.i(_)&65535),p=(w>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);g=p>>>16,w&=65535,p&=65535,d[_]=p<<16|w}return new l(d,d[d.length-1]&-2147483648?-1:0)};function W(y,h){return y.add(P(h))}t.j=function(y){if(S(this)||S(y))return A;if(D(this))return D(y)?P(this).j(P(y)):P(P(this).j(y));if(D(y))return P(this.j(P(y)));if(0>this.l(O)&&0>y.l(O))return E(this.m()*y.m());for(var h=this.g.length+y.g.length,d=[],g=0;g<2*h;g++)d[g]=0;for(g=0;g<this.g.length;g++)for(var _=0;_<y.g.length;_++){var w=this.i(g)>>>16,p=this.i(g)&65535,ae=y.i(_)>>>16,Se=y.i(_)&65535;d[2*g+2*_]+=p*Se,j(d,2*g+2*_),d[2*g+2*_+1]+=w*Se,j(d,2*g+2*_+1),d[2*g+2*_+1]+=p*ae,j(d,2*g+2*_+1),d[2*g+2*_+2]+=w*ae,j(d,2*g+2*_+2)}for(g=0;g<h;g++)d[g]=d[2*g+1]<<16|d[2*g];for(g=h;g<2*h;g++)d[g]=0;return new l(d,0)};function j(y,h){for(;(y[h]&65535)!=y[h];)y[h+1]+=y[h]>>>16,y[h]&=65535,h++}function M(y,h){this.g=y,this.h=h}function R(y,h){if(S(h))throw Error("division by zero");if(S(y))return new M(A,A);if(D(y))return h=R(P(y),h),new M(P(h.g),P(h.h));if(D(h))return h=R(y,P(h)),new M(P(h.g),h.h);if(30<y.g.length){if(D(y)||D(h))throw Error("slowDivide_ only works with positive integers.");for(var d=k,g=h;0>=g.l(y);)d=B(d),g=B(g);var _=$(d,1),w=$(g,1);for(g=$(g,2),d=$(d,2);!S(g);){var p=w.add(g);0>=p.l(y)&&(_=_.add(d),w=p),g=$(g,1),d=$(d,1)}return h=W(y,_.j(h)),new M(_,h)}for(_=A;0<=y.l(h);){for(d=Math.max(1,Math.floor(y.m()/h.m())),g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),w=E(d),p=w.j(h);D(p)||0<p.l(y);)d-=g,w=E(d),p=w.j(h);S(w)&&(w=k),_=_.add(w),y=W(y,p)}return new M(_,y)}t.A=function(y){return R(this,y).h},t.and=function(y){for(var h=Math.max(this.g.length,y.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)&y.i(g);return new l(d,this.h&y.h)},t.or=function(y){for(var h=Math.max(this.g.length,y.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)|y.i(g);return new l(d,this.h|y.h)},t.xor=function(y){for(var h=Math.max(this.g.length,y.g.length),d=[],g=0;g<h;g++)d[g]=this.i(g)^y.i(g);return new l(d,this.h^y.h)};function B(y){for(var h=y.g.length+1,d=[],g=0;g<h;g++)d[g]=y.i(g)<<1|y.i(g-1)>>>31;return new l(d,y.h)}function $(y,h){var d=h>>5;h%=32;for(var g=y.g.length-d,_=[],w=0;w<g;w++)_[w]=0<h?y.i(w+d)>>>h|y.i(w+d+1)<<32-h:y.i(w+d);return new l(_,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=b,Lo=l}).apply(typeof As<"u"?As:typeof self<"u"?self:typeof window<"u"?window:{});var on=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,a){return n==Array.prototype||n==Object.prototype||(n[o]=a.value),n};function i(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof on=="object"&&on];for(var o=0;o<n.length;++o){var a=n[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function s(n,o){if(o)e:{var a=r;n=n.split(".");for(var u=0;u<n.length-1;u++){var v=n[u];if(!(v in a))break e;a=a[v]}n=n[n.length-1],u=a[n],o=o(u),o!=u&&o!=null&&e(a,n,{configurable:!0,writable:!0,value:o})}}function c(n,o){n instanceof String&&(n+="");var a=0,u=!1,v={next:function(){if(!u&&a<n.length){var I=a++;return{value:o(I,n[I]),done:!1}}return u=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(n){return n||function(){return c(this,function(o,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},f=this||self;function m(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function E(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function b(n,o,a){return n.call.apply(n.bind,arguments)}function A(n,o,a){if(!n)throw Error();if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,u),n.apply(o,v)}}return function(){return n.apply(o,arguments)}}function k(n,o,a){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:A,k.apply(null,arguments)}function O(n,o){var a=Array.prototype.slice.call(arguments,1);return function(){var u=a.slice();return u.push.apply(u,arguments),n.apply(this,u)}}function S(n,o){function a(){}a.prototype=o.prototype,n.aa=o.prototype,n.prototype=new a,n.prototype.constructor=n,n.Qb=function(u,v,I){for(var T=Array(arguments.length-2),F=2;F<arguments.length;F++)T[F-2]=arguments[F];return o.prototype[v].apply(u,T)}}function D(n){const o=n.length;if(0<o){const a=Array(o);for(let u=0;u<o;u++)a[u]=n[u];return a}return[]}function P(n,o){for(let a=1;a<arguments.length;a++){const u=arguments[a];if(m(u)){const v=n.length||0,I=u.length||0;n.length=v+I;for(let T=0;T<I;T++)n[v+T]=u[T]}else n.push(u)}}class W{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function j(n){return/^[\s\xa0]*$/.test(n)}function M(){var n=f.navigator;return n&&(n=n.userAgent)?n:""}function R(n){return R[" "](n),n}R[" "]=function(){};var B=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function $(n,o,a){for(const u in n)o.call(a,n[u],u,n)}function y(n,o){for(const a in n)o.call(void 0,n[a],a,n)}function h(n){const o={};for(const a in n)o[a]=n[a];return o}const d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(n,o){let a,u;for(let v=1;v<arguments.length;v++){u=arguments[v];for(a in u)n[a]=u[a];for(let I=0;I<d.length;I++)a=d[I],Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a])}}function _(n){var o=1;n=n.split(":");const a=[];for(;0<o&&n.length;)a.push(n.shift()),o--;return n.length&&a.push(n.join(":")),a}function w(n){f.setTimeout(()=>{throw n},0)}function p(){var n=Dn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class ae{constructor(){this.h=this.g=null}add(o,a){const u=Se.get();u.set(o,a),this.h?this.h.next=u:this.g=u,this.h=u}}var Se=new W(()=>new On,n=>n.reset());class On{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,$e=!1,Dn=new ae,Qi=()=>{const n=f.Promise.resolve(void 0);Fe=()=>{n.then(ga)}};var ga=()=>{for(var n;n=p();){try{n.h.call(n.g)}catch(a){w(a)}var o=Se;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}$e=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var ma=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};f.addEventListener("test",a,o),f.removeEventListener("test",a,o)}catch{}return n}();function ht(n,o){if(q.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var a=this.type=n.type,u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(B){e:{try{R(o.nodeName);var v=!0;break e}catch{}v=!1}v||(o=null)}}else a=="mouseover"?o=n.fromElement:a=="mouseout"&&(o=n.toElement);this.relatedTarget=o,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ya[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ht.aa.h.call(this)}}S(ht,q);var ya={2:"touch",3:"pen",4:"mouse"};ht.prototype.h=function(){ht.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),_a=0;function va(n,o,a,u,v){this.listener=n,this.proxy=null,this.src=o,this.type=a,this.capture=!!u,this.ha=v,this.key=++_a,this.da=this.fa=!1}function Vt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function zt(n){this.src=n,this.g={},this.h=0}zt.prototype.add=function(n,o,a,u,v){var I=n.toString();n=this.g[I],n||(n=this.g[I]=[],this.h++);var T=Ln(n,o,u,v);return-1<T?(o=n[T],a||(o.fa=!1)):(o=new va(o,this.src,I,!!u,v),o.fa=a,n.push(o)),o};function Nn(n,o){var a=o.type;if(a in n.g){var u=n.g[a],v=Array.prototype.indexOf.call(u,o,void 0),I;(I=0<=v)&&Array.prototype.splice.call(u,v,1),I&&(Vt(o),n.g[a].length==0&&(delete n.g[a],n.h--))}}function Ln(n,o,a,u){for(var v=0;v<n.length;++v){var I=n[v];if(!I.da&&I.listener==o&&I.capture==!!a&&I.ha==u)return v}return-1}var Un="closure_lm_"+(1e6*Math.random()|0),Mn={};function er(n,o,a,u,v){if(Array.isArray(o)){for(var I=0;I<o.length;I++)er(n,o[I],a,u,v);return null}return a=ir(a),n&&n[Ht]?n.K(o,a,E(u)?!!u.capture:!1,v):wa(n,o,a,!1,u,v)}function wa(n,o,a,u,v,I){if(!o)throw Error("Invalid event type");var T=E(v)?!!v.capture:!!v,F=Bn(n);if(F||(n[Un]=F=new zt(n)),a=F.add(o,a,u,T,I),a.proxy)return a;if(u=Ia(),a.proxy=u,u.src=n,u.listener=a,n.addEventListener)ma||(v=T),v===void 0&&(v=!1),n.addEventListener(o.toString(),u,v);else if(n.attachEvent)n.attachEvent(nr(o.toString()),u);else if(n.addListener&&n.removeListener)n.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Ia(){function n(a){return o.call(n.src,n.listener,a)}const o=Ea;return n}function tr(n,o,a,u,v){if(Array.isArray(o))for(var I=0;I<o.length;I++)tr(n,o[I],a,u,v);else u=E(u)?!!u.capture:!!u,a=ir(a),n&&n[Ht]?(n=n.i,o=String(o).toString(),o in n.g&&(I=n.g[o],a=Ln(I,a,u,v),-1<a&&(Vt(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete n.g[o],n.h--)))):n&&(n=Bn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=Ln(o,a,u,v)),(a=-1<n?o[n]:null)&&xn(a))}function xn(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ht])Nn(o.i,n);else{var a=n.type,u=n.proxy;o.removeEventListener?o.removeEventListener(a,u,n.capture):o.detachEvent?o.detachEvent(nr(a),u):o.addListener&&o.removeListener&&o.removeListener(u),(a=Bn(o))?(Nn(a,n),a.h==0&&(a.src=null,o[Un]=null)):Vt(n)}}}function nr(n){return n in Mn?Mn[n]:Mn[n]="on"+n}function Ea(n,o){if(n.da)n=!0;else{o=new ht(o,this);var a=n.listener,u=n.ha||n.src;n.fa&&xn(n),n=a.call(u,o)}return n}function Bn(n){return n=n[Un],n instanceof zt?n:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ir(n){return typeof n=="function"?n:(n[jn]||(n[jn]=function(o){return n.handleEvent(o)}),n[jn])}function J(){ke.call(this),this.i=new zt(this),this.M=this,this.F=null}S(J,ke),J.prototype[Ht]=!0,J.prototype.removeEventListener=function(n,o,a,u){tr(this,n,o,a,u)};function Z(n,o){var a,u=n.F;if(u)for(a=[];u;u=u.F)a.push(u);if(n=n.M,u=o.type||o,typeof o=="string")o=new q(o,n);else if(o instanceof q)o.target=o.target||n;else{var v=o;o=new q(u,n),g(o,v)}if(v=!0,a)for(var I=a.length-1;0<=I;I--){var T=o.g=a[I];v=Wt(T,u,!0,o)&&v}if(T=o.g=n,v=Wt(T,u,!0,o)&&v,v=Wt(T,u,!1,o)&&v,a)for(I=0;I<a.length;I++)T=o.g=a[I],v=Wt(T,u,!1,o)&&v}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var a=n.g[o],u=0;u<a.length;u++)Vt(a[u]);delete n.g[o],n.h--}}this.F=null},J.prototype.K=function(n,o,a,u){return this.i.add(String(n),o,!1,a,u)},J.prototype.L=function(n,o,a,u){return this.i.add(String(n),o,!0,a,u)};function Wt(n,o,a,u){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var v=!0,I=0;I<o.length;++I){var T=o[I];if(T&&!T.da&&T.capture==a){var F=T.listener,G=T.ha||T.src;T.fa&&Nn(n.i,T),v=F.call(G,u)!==!1&&v}}return v&&!u.defaultPrevented}function rr(n,o,a){if(typeof n=="function")a&&(n=k(n,a));else if(n&&typeof n.handleEvent=="function")n=k(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:f.setTimeout(n,o||0)}function sr(n){n.g=rr(()=>{n.g=null,n.i&&(n.i=!1,sr(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Ta extends ke{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:sr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(n){ke.call(this),this.h=n,this.g={}}S(dt,ke);var or=[];function ar(n){$(n.g,function(o,a){this.g.hasOwnProperty(a)&&xn(o)},n),n.g={}}dt.prototype.N=function(){dt.aa.N.call(this),ar(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fn=f.JSON.stringify,ba=f.JSON.parse,Aa=class{stringify(n){return f.JSON.stringify(n,void 0)}parse(n){return f.JSON.parse(n,void 0)}};function $n(){}$n.prototype.h=null;function cr(n){return n.h||(n.h=n.i())}function Sa(){}var ft={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){q.call(this,"d")}S(Hn,q);function Vn(){q.call(this,"c")}S(Vn,q);var Qe={},lr=null;function zn(){return lr=lr||new J}Qe.La="serverreachability";function ur(n){q.call(this,Qe.La,n)}S(ur,q);function pt(n){const o=zn();Z(o,new ur(o))}Qe.STAT_EVENT="statevent";function hr(n,o){q.call(this,Qe.STAT_EVENT,n),this.stat=o}S(hr,q);function Q(n){const o=zn();Z(o,new hr(o,n))}Qe.Ma="timingevent";function dr(n,o){q.call(this,Qe.Ma,n),this.size=o}S(dr,q);function gt(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){n()},o)}function mt(){this.g=!0}mt.prototype.xa=function(){this.g=!1};function ka(n,o,a,u,v,I){n.info(function(){if(n.g)if(I)for(var T="",F=I.split("&"),G=0;G<F.length;G++){var U=F[G].split("=");if(1<U.length){var X=U[0];U=U[1];var Y=X.split("_");T=2<=Y.length&&Y[1]=="type"?T+(X+"="+U+"&"):T+(X+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+u+") [attempt "+v+"]: "+o+`
`+a+`
`+T})}function Ra(n,o,a,u,v,I,T){n.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+v+"]: "+o+`
`+a+`
`+I+" "+T})}function et(n,o,a,u){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Ca(n,a)+(u?" "+u:"")})}function Pa(n,o){n.info(function(){return"TIMEOUT: "+o})}mt.prototype.info=function(){};function Ca(n,o){if(!n.g)return o;if(!o)return null;try{var a=JSON.parse(o);if(a){for(n=0;n<a.length;n++)if(Array.isArray(a[n])){var u=a[n];if(!(2>u.length)){var v=u[1];if(Array.isArray(v)&&!(1>v.length)){var I=v[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return Fn(a)}catch{return o}}var Wn={NO_ERROR:0,TIMEOUT:8},Oa={},Kn;function Kt(){}S(Kt,$n),Kt.prototype.g=function(){return new XMLHttpRequest},Kt.prototype.i=function(){return{}},Kn=new Kt;function Re(n,o,a,u){this.j=n,this.i=o,this.l=a,this.R=u||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fr}function fr(){this.i=null,this.g="",this.h=!1}var pr={},Gn={};function qn(n,o,a){n.L=1,n.v=Xt(ye(o)),n.m=a,n.P=!0,gr(n,null)}function gr(n,o){n.F=Date.now(),Gt(n),n.A=ye(n.v);var a=n.A,u=n.R;Array.isArray(u)||(u=[String(u)]),Pr(a.i,"t",u),n.C=0,a=n.j.J,n.h=new fr,n.g=Gr(n.j,a?o:null,!n.m),0<n.O&&(n.M=new Ta(k(n.Y,n,n.g),n.O)),o=n.U,a=n.g,u=n.ca;var v="readystatechange";Array.isArray(v)||(v&&(or[0]=v.toString()),v=or);for(var I=0;I<v.length;I++){var T=er(a,v[I],u||o.handleEvent,!1,o.h||o);if(!T)break;o.g[T.key]=T}o=n.H?h(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),pt(),ka(n.i,n.u,n.A,n.l,n.R,n.m)}Re.prototype.ca=function(n){n=n.target;const o=this.M;o&&_e(n)==3?o.j():this.Y(n)},Re.prototype.Y=function(n){try{if(n==this.g)e:{const Y=_e(this.g);var o=this.g.Ba();const it=this.g.Z();if(!(3>Y)&&(Y!=3||this.g&&(this.h.h||this.g.oa()||Mr(this.g)))){this.J||Y!=4||o==7||(o==8||0>=it?pt(3):pt(2)),Jn(this);var a=this.g.Z();this.X=a;t:if(mr(this)){var u=Mr(this.g);n="";var v=u.length,I=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){He(this),yt(this);var T="";break t}this.h.i=new f.TextDecoder}for(o=0;o<v;o++)this.h.h=!0,n+=this.h.i.decode(u[o],{stream:!(I&&o==v-1)});u.length=0,this.h.g+=n,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Ra(this.i,this.u,this.A,this.l,this.R,Y,a),this.o){if(this.T&&!this.K){t:{if(this.g){var F,G=this.g;if((F=G.g?G.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(F)){var U=F;break t}}U=null}if(a=U)et(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xn(this,a);else{this.o=!1,this.s=3,Q(12),He(this),yt(this);break e}}if(this.P){a=!0;let ce;for(;!this.J&&this.C<T.length;)if(ce=Da(this,T),ce==Gn){Y==4&&(this.s=4,Q(14),a=!1),et(this.i,this.l,null,"[Incomplete Response]");break}else if(ce==pr){this.s=4,Q(15),et(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else et(this.i,this.l,ce,null),Xn(this,ce);if(mr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||T.length!=0||this.h.h||(this.s=1,Q(16),a=!1),this.o=this.o&&a,!a)et(this.i,this.l,T,"[Invalid Chunked Response]"),He(this),yt(this);else if(0<T.length&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.ba&&!X.M&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),ni(X),X.M=!0,Q(11))}}else et(this.i,this.l,T,null),Xn(this,T);Y==4&&He(this),this.o&&!this.J&&(Y==4?Vr(this.j,this):(this.o=!1,Gt(this)))}else Ja(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,Q(12)):(this.s=0,Q(13)),He(this),yt(this)}}}catch{}finally{}};function mr(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Da(n,o){var a=n.C,u=o.indexOf(`
`,a);return u==-1?Gn:(a=Number(o.substring(a,u)),isNaN(a)?pr:(u+=1,u+a>o.length?Gn:(o=o.slice(u,u+a),n.C=u+a,o)))}Re.prototype.cancel=function(){this.J=!0,He(this)};function Gt(n){n.S=Date.now()+n.I,yr(n,n.I)}function yr(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=gt(k(n.ba,n),o)}function Jn(n){n.B&&(f.clearTimeout(n.B),n.B=null)}Re.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(Pa(this.i,this.A),this.L!=2&&(pt(),Q(17)),He(this),this.s=2,yt(this)):yr(this,this.S-n)};function yt(n){n.j.G==0||n.J||Vr(n.j,n)}function He(n){Jn(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,ar(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function Xn(n,o){try{var a=n.j;if(a.G!=0&&(a.g==n||Yn(a.h,n))){if(!n.K&&Yn(a.h,n)&&a.G==3){try{var u=a.Da.g.parse(o)}catch{u=null}if(Array.isArray(u)&&u.length==3){var v=u;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<n.F)nn(a),en(a);else break e;ti(a),Q(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=gt(k(a.Za,a),6e3));if(1>=wr(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else ze(a,11)}else if((n.K||a.g==n)&&nn(a),!j(o))for(v=a.Da.g.parse(o),o=0;o<v.length;o++){let U=v[o];if(a.T=U[0],U=U[1],a.G==2)if(U[0]=="c"){a.K=U[1],a.ia=U[2];const X=U[3];X!=null&&(a.la=X,a.j.info("VER="+a.la));const Y=U[4];Y!=null&&(a.Aa=Y,a.j.info("SVER="+a.Aa));const it=U[5];it!=null&&typeof it=="number"&&0<it&&(u=1.5*it,a.L=u,a.j.info("backChannelRequestTimeoutMs_="+u)),u=a;const ce=n.g;if(ce){const rn=ce.g?ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rn){var I=u.h;I.g||rn.indexOf("spdy")==-1&&rn.indexOf("quic")==-1&&rn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Zn(I,I.h),I.h=null))}if(u.D){const ii=ce.g?ce.g.getResponseHeader("X-HTTP-Session-Id"):null;ii&&(u.ya=ii,H(u.I,u.D,ii))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-n.F,a.j.info("Handshake RTT: "+a.R+"ms")),u=a;var T=n;if(u.qa=Kr(u,u.J?u.ia:null,u.W),T.K){Ir(u.h,T);var F=T,G=u.L;G&&(F.I=G),F.B&&(Jn(F),Gt(F)),u.g=T}else $r(u);0<a.i.length&&tn(a)}else U[0]!="stop"&&U[0]!="close"||ze(a,7);else a.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?ze(a,7):ei(a):U[0]!="noop"&&a.l&&a.l.ta(U),a.v=0)}}pt(4)}catch{}}var Na=class{constructor(n,o){this.g=n,this.map=o}};function _r(n){this.l=n||10,f.PerformanceNavigationTiming?(n=f.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vr(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function wr(n){return n.h?1:n.g?n.g.size:0}function Yn(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function Zn(n,o){n.g?n.g.add(o):n.h=o}function Ir(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}_r.prototype.cancel=function(){if(this.i=Er(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Er(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const a of n.g.values())o=o.concat(a.D);return o}return D(n.i)}function La(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(m(n)){for(var o=[],a=n.length,u=0;u<a;u++)o.push(n[u]);return o}o=[],a=0;for(u in n)o[a++]=n[u];return o}function Ua(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(m(n)||typeof n=="string"){var o=[];n=n.length;for(var a=0;a<n;a++)o.push(a);return o}o=[],a=0;for(const u in n)o[a++]=u;return o}}}function Tr(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(m(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var a=Ua(n),u=La(n),v=u.length,I=0;I<v;I++)o.call(void 0,u[I],a&&a[I],n)}var br=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ma(n,o){if(n){n=n.split("&");for(var a=0;a<n.length;a++){var u=n[a].indexOf("="),v=null;if(0<=u){var I=n[a].substring(0,u);v=n[a].substring(u+1)}else I=n[a];o(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ve(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof Ve){this.h=n.h,qt(this,n.j),this.o=n.o,this.g=n.g,Jt(this,n.s),this.l=n.l;var o=n.i,a=new wt;a.i=o.i,o.g&&(a.g=new Map(o.g),a.h=o.h),Ar(this,a),this.m=n.m}else n&&(o=String(n).match(br))?(this.h=!1,qt(this,o[1]||"",!0),this.o=_t(o[2]||""),this.g=_t(o[3]||"",!0),Jt(this,o[4]),this.l=_t(o[5]||"",!0),Ar(this,o[6]||"",!0),this.m=_t(o[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}Ve.prototype.toString=function(){var n=[],o=this.j;o&&n.push(vt(o,Sr,!0),":");var a=this.g;return(a||o=="file")&&(n.push("//"),(o=this.o)&&n.push(vt(o,Sr,!0),"@"),n.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&n.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(vt(a,a.charAt(0)=="/"?ja:Ba,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",vt(a,$a)),n.join("")};function ye(n){return new Ve(n)}function qt(n,o,a){n.j=a?_t(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function Jt(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function Ar(n,o,a){o instanceof wt?(n.i=o,Ha(n.i,n.h)):(a||(o=vt(o,Fa)),n.i=new wt(o,n.h))}function H(n,o,a){n.i.set(o,a)}function Xt(n){return H(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function _t(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function vt(n,o,a){return typeof n=="string"?(n=encodeURI(n).replace(o,xa),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function xa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Sr=/[#\/\?@]/g,Ba=/[#\?:]/g,ja=/[#\?]/g,Fa=/[#\?@]/g,$a=/#/g;function wt(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Pe(n){n.g||(n.g=new Map,n.h=0,n.i&&Ma(n.i,function(o,a){n.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}t=wt.prototype,t.add=function(n,o){Pe(this),this.i=null,n=tt(this,n);var a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(o),this.h+=1,this};function kr(n,o){Pe(n),o=tt(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Rr(n,o){return Pe(n),o=tt(n,o),n.g.has(o)}t.forEach=function(n,o){Pe(this),this.g.forEach(function(a,u){a.forEach(function(v){n.call(o,v,u,this)},this)},this)},t.na=function(){Pe(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),a=[];for(let u=0;u<o.length;u++){const v=n[u];for(let I=0;I<v.length;I++)a.push(o[u])}return a},t.V=function(n){Pe(this);let o=[];if(typeof n=="string")Rr(this,n)&&(o=o.concat(this.g.get(tt(this,n))));else{n=Array.from(this.g.values());for(let a=0;a<n.length;a++)o=o.concat(n[a])}return o},t.set=function(n,o){return Pe(this),this.i=null,n=tt(this,n),Rr(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},t.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function Pr(n,o,a){kr(n,o),0<a.length&&(n.i=null,n.g.set(tt(n,o),D(a)),n.h+=a.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var a=0;a<o.length;a++){var u=o[a];const I=encodeURIComponent(String(u)),T=this.V(u);for(u=0;u<T.length;u++){var v=I;T[u]!==""&&(v+="="+encodeURIComponent(String(T[u]))),n.push(v)}}return this.i=n.join("&")};function tt(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function Ha(n,o){o&&!n.j&&(Pe(n),n.i=null,n.g.forEach(function(a,u){var v=u.toLowerCase();u!=v&&(kr(this,u),Pr(this,v,a))},n)),n.j=o}function Va(n,o){const a=new mt;if(f.Image){const u=new Image;u.onload=O(Ce,a,"TestLoadImage: loaded",!0,o,u),u.onerror=O(Ce,a,"TestLoadImage: error",!1,o,u),u.onabort=O(Ce,a,"TestLoadImage: abort",!1,o,u),u.ontimeout=O(Ce,a,"TestLoadImage: timeout",!1,o,u),f.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=n}else o(!1)}function za(n,o){const a=new mt,u=new AbortController,v=setTimeout(()=>{u.abort(),Ce(a,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:u.signal}).then(I=>{clearTimeout(v),I.ok?Ce(a,"TestPingServer: ok",!0,o):Ce(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(v),Ce(a,"TestPingServer: error",!1,o)})}function Ce(n,o,a,u,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),u(a)}catch{}}function Wa(){this.g=new Aa}function Ka(n,o,a){const u=a||"";try{Tr(n,function(v,I){let T=v;E(v)&&(T=Fn(v)),o.push(u+I+"="+encodeURIComponent(T))})}catch(v){throw o.push(u+"type="+encodeURIComponent("_badmap")),v}}function Yt(n){this.l=n.Ub||null,this.j=n.eb||!1}S(Yt,$n),Yt.prototype.g=function(){return new Zt(this.l,this.j)},Yt.prototype.i=function(n){return function(){return n}}({});function Zt(n,o){J.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Zt,J),t=Zt.prototype,t.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,Et(this)},t.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||f).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,It(this)),this.readyState=0},t.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Et(this)),this.g&&(this.readyState=3,Et(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cr(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cr(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}t.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?It(this):Et(this),this.readyState==3&&Cr(this)}},t.Ra=function(n){this.g&&(this.response=this.responseText=n,It(this))},t.Qa=function(n){this.g&&(this.response=n,It(this))},t.ga=function(){this.g&&It(this)};function It(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Et(n)}t.setRequestHeader=function(n,o){this.u.append(n,o)},t.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=o.next();return n.join(`\r
`)};function Et(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Or(n){let o="";return $(n,function(a,u){o+=u,o+=":",o+=a,o+=`\r
`}),o}function Qn(n,o,a){e:{for(u in a){var u=!1;break e}u=!0}u||(a=Or(a),typeof n=="string"?a!=null&&encodeURIComponent(String(a)):H(n,o,a))}function K(n){J.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(K,J);var Ga=/^https?$/i,qa=["POST","PUT"];t=K.prototype,t.Ha=function(n){this.J=n},t.ea=function(n,o,a,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kn.g(),this.v=this.o?cr(this.o):cr(Kn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(I){Dr(this,I);return}if(n=a||"",a=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var v in u)a.set(v,u[v]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const I of u.keys())a.set(I,u.get(I));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),v=f.FormData&&n instanceof f.FormData,!(0<=Array.prototype.indexOf.call(qa,o,void 0))||u||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ur(this),this.u=!0,this.g.send(n),this.u=!1}catch(I){Dr(this,I)}};function Dr(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,Nr(n),Qt(n)}function Nr(n){n.A||(n.A=!0,Z(n,"complete"),Z(n,"error"))}t.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,Z(this,"complete"),Z(this,"abort"),Qt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qt(this,!0)),K.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lr(this):this.bb())},t.bb=function(){Lr(this)};function Lr(n){if(n.h&&typeof l<"u"&&(!n.v[1]||_e(n)!=4||n.Z()!=2)){if(n.u&&_e(n)==4)rr(n.Ea,0,n);else if(Z(n,"readystatechange"),_e(n)==4){n.h=!1;try{const T=n.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var u;if(u=T===0){var v=String(n.D).match(br)[1]||null;!v&&f.self&&f.self.location&&(v=f.self.location.protocol.slice(0,-1)),u=!Ga.test(v?v.toLowerCase():"")}a=u}if(a)Z(n,"complete"),Z(n,"success");else{n.m=6;try{var I=2<_e(n)?n.g.statusText:""}catch{I=""}n.l=I+" ["+n.Z()+"]",Nr(n)}}finally{Qt(n)}}}}function Qt(n,o){if(n.g){Ur(n);const a=n.g,u=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||Z(n,"ready");try{a.onreadystatechange=u}catch{}}}function Ur(n){n.I&&(f.clearTimeout(n.I),n.I=null)}t.isActive=function(){return!!this.g};function _e(n){return n.g?n.g.readyState:0}t.Z=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),ba(o)}};function Mr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ja(n){const o={};n=(n.g&&2<=_e(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<n.length;u++){if(j(n[u]))continue;var a=_(n[u]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=o[v]||[];o[v]=I,I.push(a)}y(o,function(u){return u.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tt(n,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||o}function xr(n){this.Aa=0,this.i=[],this.j=new mt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tt("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tt("baseRetryDelayMs",5e3,n),this.cb=Tt("retryDelaySeedMs",1e4,n),this.Wa=Tt("forwardChannelMaxRetries",2,n),this.wa=Tt("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new _r(n&&n.concurrentRequestLimit),this.Da=new Wa,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xr.prototype,t.la=8,t.G=1,t.connect=function(n,o,a,u){Q(0),this.W=n,this.H=o||{},a&&u!==void 0&&(this.H.OSID=a,this.H.OAID=u),this.F=this.X,this.I=Kr(this,null,this.W),tn(this)};function ei(n){if(Br(n),n.G==3){var o=n.U++,a=ye(n.I);if(H(a,"SID",n.K),H(a,"RID",o),H(a,"TYPE","terminate"),bt(n,a),o=new Re(n,n.j,o),o.L=2,o.v=Xt(ye(a)),a=!1,f.navigator&&f.navigator.sendBeacon)try{a=f.navigator.sendBeacon(o.v.toString(),"")}catch{}!a&&f.Image&&(new Image().src=o.v,a=!0),a||(o.g=Gr(o.j,null),o.g.ea(o.v)),o.F=Date.now(),Gt(o)}Wr(n)}function en(n){n.g&&(ni(n),n.g.cancel(),n.g=null)}function Br(n){en(n),n.u&&(f.clearTimeout(n.u),n.u=null),nn(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&f.clearTimeout(n.s),n.s=null)}function tn(n){if(!vr(n.h)&&!n.s){n.s=!0;var o=n.Ga;Fe||Qi(),$e||(Fe(),$e=!0),Dn.add(o,n),n.B=0}}function Xa(n,o){return wr(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=gt(k(n.Ga,n,o),zr(n,n.B)),n.B++,!0)}t.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const v=new Re(this,this.j,n);let I=this.o;if(this.S&&(I?(I=h(I),g(I,this.S)):I=this.S),this.m!==null||this.O||(v.H=I,I=null),this.P)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var u=this.i[a];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(o+=u,4096<o){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=Fr(this,v,o),a=ye(this.I),H(a,"RID",n),H(a,"CVER",22),this.D&&H(a,"X-HTTP-Session-Id",this.D),bt(this,a),I&&(this.O?o="headers="+encodeURIComponent(String(Or(I)))+"&"+o:this.m&&Qn(a,this.m,I)),Zn(this.h,v),this.Ua&&H(a,"TYPE","init"),this.P?(H(a,"$req",o),H(a,"SID","null"),v.T=!0,qn(v,a,null)):qn(v,a,o),this.G=2}}else this.G==3&&(n?jr(this,n):this.i.length==0||vr(this.h)||jr(this))};function jr(n,o){var a;o?a=o.l:a=n.U++;const u=ye(n.I);H(u,"SID",n.K),H(u,"RID",a),H(u,"AID",n.T),bt(n,u),n.m&&n.o&&Qn(u,n.m,n.o),a=new Re(n,n.j,a,n.B+1),n.m===null&&(a.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Fr(n,a,1e3),a.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),Zn(n.h,a),qn(a,u,o)}function bt(n,o){n.H&&$(n.H,function(a,u){H(o,u,a)}),n.l&&Tr({},function(a,u){H(o,u,a)})}function Fr(n,o,a){a=Math.min(n.i.length,a);var u=n.l?k(n.l.Na,n.l,n):null;e:{var v=n.i;let I=-1;for(;;){const T=["count="+a];I==-1?0<a?(I=v[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let F=!0;for(let G=0;G<a;G++){let U=v[G].g;const X=v[G].map;if(U-=I,0>U)I=Math.max(0,v[G].g-100),F=!1;else try{Ka(X,T,"req"+U+"_")}catch{u&&u(X)}}if(F){u=T.join("&");break e}}}return n=n.i.splice(0,a),o.D=n,u}function $r(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;Fe||Qi(),$e||(Fe(),$e=!0),Dn.add(o,n),n.v=0}}function ti(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=gt(k(n.Fa,n),zr(n,n.v)),n.v++,!0)}t.Fa=function(){if(this.u=null,Hr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=gt(k(this.ab,this),n)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Q(10),en(this),Hr(this))};function ni(n){n.A!=null&&(f.clearTimeout(n.A),n.A=null)}function Hr(n){n.g=new Re(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=ye(n.qa);H(o,"RID","rpc"),H(o,"SID",n.K),H(o,"AID",n.T),H(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&H(o,"TO",n.ja),H(o,"TYPE","xmlhttp"),bt(n,o),n.m&&n.o&&Qn(o,n.m,n.o),n.L&&(n.g.I=n.L);var a=n.g;n=n.ia,a.L=1,a.v=Xt(ye(o)),a.m=null,a.P=!0,gr(a,n)}t.Za=function(){this.C!=null&&(this.C=null,en(this),ti(this),Q(19))};function nn(n){n.C!=null&&(f.clearTimeout(n.C),n.C=null)}function Vr(n,o){var a=null;if(n.g==o){nn(n),ni(n),n.g=null;var u=2}else if(Yn(n.h,o))a=o.D,Ir(n.h,o),u=1;else return;if(n.G!=0){if(o.o)if(u==1){a=o.m?o.m.length:0,o=Date.now()-o.F;var v=n.B;u=zn(),Z(u,new dr(u,a)),tn(n)}else $r(n);else if(v=o.s,v==3||v==0&&0<o.X||!(u==1&&Xa(n,o)||u==2&&ti(n)))switch(a&&0<a.length&&(o=n.h,o.i=o.i.concat(a)),v){case 1:ze(n,5);break;case 4:ze(n,10);break;case 3:ze(n,6);break;default:ze(n,2)}}}function zr(n,o){let a=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(a*=2),a*o}function ze(n,o){if(n.j.info("Error code "+o),o==2){var a=k(n.fb,n),u=n.Xa;const v=!u;u=new Ve(u||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||qt(u,"https"),Xt(u),v?Va(u.toString(),a):za(u.toString(),a)}else Q(2);n.G=0,n.l&&n.l.sa(o),Wr(n),Br(n)}t.fb=function(n){n?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function Wr(n){if(n.G=0,n.ka=[],n.l){const o=Er(n.h);(o.length!=0||n.i.length!=0)&&(P(n.ka,o),P(n.ka,n.i),n.h.i.length=0,D(n.i),n.i.length=0),n.l.ra()}}function Kr(n,o,a){var u=a instanceof Ve?ye(a):new Ve(a);if(u.g!="")o&&(u.g=o+"."+u.g),Jt(u,u.s);else{var v=f.location;u=v.protocol,o=o?o+"."+v.hostname:v.hostname,v=+v.port;var I=new Ve(null);u&&qt(I,u),o&&(I.g=o),v&&Jt(I,v),a&&(I.l=a),u=I}return a=n.D,o=n.ya,a&&o&&H(u,a,o),H(u,"VER",n.la),bt(n,u),u}function Gr(n,o,a){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new K(new Yt({eb:a})):new K(n.pa),o.Ha(n.J),o}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qr(){}t=qr.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oe(n,o){J.call(this),this.g=new xr(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!j(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!j(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new nt(this)}S(oe,J),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){ei(this.g)},oe.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.u&&(a={},a.__data__=Fn(n),n=a);o.i.push(new Na(o.Ya++,n)),o.G==3&&tn(o)},oe.prototype.N=function(){this.g.l=null,delete this.j,ei(this.g),delete this.g,oe.aa.N.call(this)};function Jr(n){Hn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){e:{for(const a in o){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}S(Jr,Hn);function Xr(){Vn.call(this),this.status=1}S(Xr,Vn);function nt(n){this.g=n}S(nt,qr),nt.prototype.ua=function(){Z(this.g,"a")},nt.prototype.ta=function(n){Z(this.g,new Jr(n))},nt.prototype.sa=function(n){Z(this.g,new Xr)},nt.prototype.ra=function(){Z(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,Wn.NO_ERROR=0,Wn.TIMEOUT=8,Wn.HTTP_ERROR=6,Oa.COMPLETE="complete",Sa.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",J.prototype.listen=J.prototype.K,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha}).apply(typeof on<"u"?on:typeof self<"u"?self:typeof window<"u"?window:{});const Ss="@firebase/firestore";/**
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
 */class te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
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
 */const lt=new ki("@firebase/firestore");function ue(t,...e){if(lt.logLevel<=x.DEBUG){const i=e.map(Fi);lt.debug(`Firestore (${$t}): ${t}`,...i)}}function Uo(t,...e){if(lt.logLevel<=x.ERROR){const i=e.map(Fi);lt.error(`Firestore (${$t}): ${t}`,...i)}}function kh(t,...e){if(lt.logLevel<=x.WARN){const i=e.map(Fi);lt.warn(`Firestore (${$t}): ${t}`,...i)}}function Fi(t){if(typeof t=="string")return t;try{/**
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
 */function $i(t="Unexpected state"){const e=`FIRESTORE (${$t}) INTERNAL ASSERTION FAILED: `+t;throw Uo(e),new Error(e)}function Rt(t,e){t||$i()}/**
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
 */const ie={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class re extends me{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mo{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(te.UNAUTHENTICATED))}shutdown(){}}class Ph{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Ch{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Rt(this.o===void 0);let r=this.i;const s=m=>this.i!==r?(r=this.i,i(m)):Promise.resolve();let c=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const m=c;e.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},f=m=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Pt)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string"),new Mo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Rt(e===null||typeof e=="string"),new te(e)}}class Oh{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Dh{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new Oh(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){Rt(this.o===void 0);const r=c=>{c.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,ue("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const s=c=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>s(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?s(c):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(Rt(typeof i.token=="string"),this.R=i.token,new Nh(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Uh(t){return t.name==="IndexedDbTransactionError"}class bn{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var ks,N;(N=ks||(ks={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Lo([4294967295,4294967295],0);function hi(){return typeof document<"u"?document:null}/**
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
 */class Mh{constructor(e,i,r=1e3,s=1.5,c=6e4){this.ui=e,this.timerId=i,this.ko=r,this.qo=s,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const i=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,i-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Hi{constructor(e,i,r,s,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=s,this.removalCallback=c,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,s,c){const l=Date.now()+r,f=new Hi(e,i,l,s,c);return f.start(r),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Rs,Ps;(Ps=Rs||(Rs={})).ea="default",Ps.Cache="cache";/**
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
 */function xh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Cs=new Map;function Bh(t,e,i,r){if(e===!0&&r===!0)throw new re(ie.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}function jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$i()}function Fh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=jh(t);throw new re(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}/**
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
 */class Os{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new re(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xo{constructor(e,i,r,s){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Os({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Os(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rh;switch(r.type){case"firstParty":return new Dh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=Cs.get(i);r&&(ue("ComponentProvider","Removing Datastore"),Cs.delete(i),r.terminate())}(this),Promise.resolve()}}function Bo(t,e,i,r={}){var s;const c=(t=Fh(t,xo))._getSettings(),l=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==l&&kh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},c),{host:l,ssl:!1})),r.mockUserToken){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=te.MOCK_USER;else{f=Gs(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new re(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new te(E)}t._authCredentials=new Ph(new Mo(f,m))}}/**
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
 */class Ds{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mh(this,"async_queue_retry"),this.Vu=()=>{const r=hi();r&&ue("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const i=hi();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const i=hi();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const i=new Pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Uh(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const i=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let f=l.message||"";return l.stack&&(f=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),f}(r);throw Uo("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=i,i}enqueueAfterDelay(e,i,r){this.fu(),this.Ru.indexOf(e)>-1&&(i=0);const s=Hi.createAndSchedule(this,e,i,r,c=>this.yu(c));return this.Tu.push(s),s}fu(){this.Eu&&$i()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const i of this.Tu)if(i.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.Tu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const i=this.Tu.indexOf(e);this.Tu.splice(i,1)}}class $h extends xo{constructor(e,i,r,s){super(e,i,r,s),this.type="firestore",this._queue=new Ds,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ds(e),this._firestoreClient=void 0,await e}}}function Hh(t,e){const i=typeof t=="object"?t:Pi(),r=typeof t=="string"?t:"(default)",s=Rn(i,"firestore").getImmediate({identifier:r});if(!s._initialized){const c=zs("firestore");c&&Bo(s,...c)}return s}(function(e,i=!0){(function(s){$t=s})(Ze),Je(new je("firestore",(r,{instanceIdentifier:s,options:c})=>{const l=r.getProvider("app").getImmediate(),f=new $h(new Ch(r.getProvider("auth-internal")),new Lh(r.getProvider("app-check-internal")),function(E,b){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new re(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(E.options.projectId,b)}(l,s),l);return c=Object.assign({useFetchStreams:i},c),f._setSettings(c),f},"PUBLIC").setMultipleInstances(!0)),fe(Ss,"4.7.3",e),fe(Ss,"4.7.3","esm2017")})();/**
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
 */const jo="firebasestorage.googleapis.com",Fo="storageBucket",Vh=2*60*1e3,zh=10*60*1e3;/**
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
 */class z extends me{constructor(e,i,r=0){super(di(e),`Firebase Storage: ${i} (${di(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,z.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return di(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var V;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(V||(V={}));function di(t){return"storage/"+t}function Vi(){const t="An unknown error occurred, please check the error payload for server response.";return new z(V.UNKNOWN,t)}function Wh(t){return new z(V.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Kh(t){return new z(V.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Gh(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new z(V.UNAUTHENTICATED,t)}function qh(){return new z(V.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Jh(t){return new z(V.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Xh(){return new z(V.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yh(){return new z(V.CANCELED,"User canceled the upload/download.")}function Zh(t){return new z(V.INVALID_URL,"Invalid URL '"+t+"'.")}function Qh(t){return new z(V.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ed(){return new z(V.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Fo+"' property when initializing the app?")}function td(){return new z(V.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nd(){return new z(V.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function id(t){return new z(V.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function An(t){return new z(V.INVALID_ARGUMENT,t)}function $o(){return new z(V.APP_DELETED,"The Firebase app was deleted.")}function Ho(t){return new z(V.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ct(t,e){return new z(V.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function At(t){throw new z(V.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class se{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let r;try{r=se.makeFromUrl(e,i)}catch{return new se(e,"")}if(r.path==="")return r;throw Qh(e)}static makeFromUrl(e,i){let r=null;const s="([A-Za-z0-9.\\-_]+)";function c(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const l="(/(.*))?$",f=new RegExp("^gs://"+s+l,"i"),m={bucket:1,path:3};function E(R){R.path_=decodeURIComponent(R.path)}const b="v[A-Za-z0-9_]+",A=i.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",O=new RegExp(`^https?://${A}/${b}/b/${s}/o${k}`,"i"),S={bucket:1,path:3},D=i===jo?"(?:storage.googleapis.com|storage.cloud.google.com)":i,P="([^?#]*)",W=new RegExp(`^https?://${D}/${s}/${P}`,"i"),M=[{regex:f,indices:m,postModify:c},{regex:O,indices:S,postModify:E},{regex:W,indices:{bucket:1,path:2},postModify:E}];for(let R=0;R<M.length;R++){const B=M[R],$=B.regex.exec(e);if($){const y=$[B.indices.bucket];let h=$[B.indices.path];h||(h=""),r=new se(y,h),B.postModify(r);break}}if(r==null)throw Zh(e);return r}}class rd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function sd(t,e,i){let r=1,s=null,c=null,l=!1,f=0;function m(){return f===2}let E=!1;function b(...P){E||(E=!0,e.apply(null,P))}function A(P){s=setTimeout(()=>{s=null,t(O,m())},P)}function k(){c&&clearTimeout(c)}function O(P,...W){if(E){k();return}if(P){k(),b.call(null,P,...W);return}if(m()||l){k(),b.call(null,P,...W);return}r<64&&(r*=2);let M;f===1?(f=2,M=0):M=(r+Math.random())*1e3,A(M)}let S=!1;function D(P){S||(S=!0,k(),!E&&(s!==null?(P||(f=2),clearTimeout(s),A(0)):P||(f=1)))}return A(0),c=setTimeout(()=>{l=!0,D(!0)},i),D}function od(t){t(!1)}/**
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
 */function ad(t){return t!==void 0}function cd(t){return typeof t=="object"&&!Array.isArray(t)}function zi(t){return typeof t=="string"||t instanceof String}function Ns(t){return Wi()&&t instanceof Blob}function Wi(){return typeof Blob<"u"}function Ls(t,e,i,r){if(r<e)throw An(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>i)throw An(`Invalid value for '${t}'. Expected ${i} or less.`)}/**
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
 */function Ki(t,e,i){let r=e;return i==null&&(r=`https://${e}`),`${i}://${r}/v0${t}`}function Vo(t){const e=encodeURIComponent;let i="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);i=i+s+"&"}return i=i.slice(0,-1),i}var qe;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qe||(qe={}));/**
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
 */function ld(t,e){const i=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,c=e.indexOf(t)!==-1;return i||s||c}/**
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
 */class ud{constructor(e,i,r,s,c,l,f,m,E,b,A,k=!0){this.url_=e,this.method_=i,this.headers_=r,this.body_=s,this.successCodes_=c,this.additionalRetryCodes_=l,this.callback_=f,this.errorCallback_=m,this.timeout_=E,this.progressCallback_=b,this.connectionFactory_=A,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,S)=>{this.resolve_=O,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new an(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const l=f=>{const m=f.loaded,E=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,E)};this.progressCallback_!==null&&c.addUploadProgressListener(l),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(l),this.pendingConnection_=null;const f=c.getErrorCode()===qe.NO_ERROR,m=c.getStatus();if(!f||ld(m,this.additionalRetryCodes_)&&this.retry){const b=c.getErrorCode()===qe.ABORT;r(!1,new an(!1,null,b));return}const E=this.successCodes_.indexOf(m)!==-1;r(!0,new an(E,c))})},i=(r,s)=>{const c=this.resolve_,l=this.reject_,f=s.connection;if(s.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());ad(m)?c(m):c()}catch(m){l(m)}else if(f!==null){const m=Vi();m.serverResponse=f.getErrorText(),this.errorCallback_?l(this.errorCallback_(f,m)):l(m)}else if(s.canceled){const m=this.appDelete_?$o():Yh();l(m)}else{const m=Xh();l(m)}};this.canceled_?i(!1,new an(!1,null,!0)):this.backoffId_=sd(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&od(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class an{constructor(e,i,r){this.wasSuccessCode=e,this.connection=i,this.canceled=!!r}}function hd(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dd(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fd(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pd(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gd(t,e,i,r,s,c,l=!0){const f=Vo(t.urlParams),m=t.url+f,E=Object.assign({},t.headers);return fd(E,e),hd(E,i),dd(E,c),pd(E,r),new ud(m,t.method,E,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,l)}/**
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
 */function md(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yd(...t){const e=md();if(e!==void 0){const i=new e;for(let r=0;r<t.length;r++)i.append(t[r]);return i.getBlob()}else{if(Wi())return new Blob(t);throw new z(V.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _d(t,e,i){return t.webkitSlice?t.webkitSlice(e,i):t.mozSlice?t.mozSlice(e,i):t.slice?t.slice(e,i):null}/**
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
 */function vd(t){if(typeof atob>"u")throw id("base-64");return atob(t)}/**
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
 */const he={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fi{constructor(e,i){this.data=e,this.contentType=i||null}}function zo(t,e){switch(t){case he.RAW:return new fi(Wo(e));case he.BASE64:case he.BASE64URL:return new fi(Ko(t,e));case he.DATA_URL:return new fi(Id(e),Ed(e))}throw Vi()}function Wo(t){const e=[];for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(i<t.length-1&&(t.charCodeAt(i+1)&64512)===56320))e.push(239,191,189);else{const c=r,l=t.charCodeAt(++i);r=65536|(c&1023)<<10|l&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wd(t){let e;try{e=decodeURIComponent(t)}catch{throw Ct(he.DATA_URL,"Malformed data URL.")}return Wo(e)}function Ko(t,e){switch(t){case he.BASE64:{const s=e.indexOf("-")!==-1,c=e.indexOf("_")!==-1;if(s||c)throw Ct(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case he.BASE64URL:{const s=e.indexOf("+")!==-1,c=e.indexOf("/")!==-1;if(s||c)throw Ct(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let i;try{i=vd(e)}catch(s){throw s.message.includes("polyfill")?s:Ct(t,"Invalid character found")}const r=new Uint8Array(i.length);for(let s=0;s<i.length;s++)r[s]=i.charCodeAt(s);return r}class Go{constructor(e){this.base64=!1,this.contentType=null;const i=e.match(/^data:([^,]+)?,/);if(i===null)throw Ct(he.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=i[1]||null;r!=null&&(this.base64=Td(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Id(t){const e=new Go(t);return e.base64?Ko(he.BASE64,e.rest):wd(e.rest)}function Ed(t){return new Go(t).contentType}function Td(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ve{constructor(e,i){let r=0,s="";Ns(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(i?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(i?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,i){if(Ns(this.data_)){const r=this.data_,s=_d(r,e,i);return s===null?null:new ve(s)}else{const r=new Uint8Array(this.data_.buffer,e,i-e);return new ve(r,!0)}}static getBlob(...e){if(Wi()){const i=e.map(r=>r instanceof ve?r.data_:r);return new ve(yd.apply(null,i))}else{const i=e.map(l=>zi(l)?zo(he.RAW,l).data:l.data_);let r=0;i.forEach(l=>{r+=l.byteLength});const s=new Uint8Array(r);let c=0;return i.forEach(l=>{for(let f=0;f<l.length;f++)s[c++]=l[f]}),new ve(s,!0)}}uploadData(){return this.data_}}/**
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
 */function qo(t){let e;try{e=JSON.parse(t)}catch{return null}return cd(e)?e:null}/**
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
 */function bd(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ad(t,e){const i=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?i:t+"/"+i}function Jo(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Sd(t,e){return e}class ee{constructor(e,i,r,s){this.server=e,this.local=i||e,this.writable=!!r,this.xform=s||Sd}}let cn=null;function kd(t){return!zi(t)||t.length<2?t:Jo(t)}function Xo(){if(cn)return cn;const t=[];t.push(new ee("bucket")),t.push(new ee("generation")),t.push(new ee("metageneration")),t.push(new ee("name","fullPath",!0));function e(c,l){return kd(l)}const i=new ee("name");i.xform=e,t.push(i);function r(c,l){return l!==void 0?Number(l):l}const s=new ee("size");return s.xform=r,t.push(s),t.push(new ee("timeCreated")),t.push(new ee("updated")),t.push(new ee("md5Hash",null,!0)),t.push(new ee("cacheControl",null,!0)),t.push(new ee("contentDisposition",null,!0)),t.push(new ee("contentEncoding",null,!0)),t.push(new ee("contentLanguage",null,!0)),t.push(new ee("contentType",null,!0)),t.push(new ee("metadata","customMetadata",!0)),cn=t,cn}function Rd(t,e){function i(){const r=t.bucket,s=t.fullPath,c=new se(r,s);return e._makeStorageReference(c)}Object.defineProperty(t,"ref",{get:i})}function Pd(t,e,i){const r={};r.type="file";const s=i.length;for(let c=0;c<s;c++){const l=i[c];r[l.local]=l.xform(r,e[l.server])}return Rd(r,t),r}function Yo(t,e,i){const r=qo(e);return r===null?null:Pd(t,r,i)}function Cd(t,e,i,r){const s=qo(e);if(s===null||!zi(s.downloadTokens))return null;const c=s.downloadTokens;if(c.length===0)return null;const l=encodeURIComponent;return c.split(",").map(E=>{const b=t.bucket,A=t.fullPath,k="/b/"+l(b)+"/o/"+l(A),O=Ki(k,i,r),S=Vo({alt:"media",token:E});return O+S})[0]}function Od(t,e){const i={},r=e.length;for(let s=0;s<r;s++){const c=e[s];c.writable&&(i[c.server]=t[c.local])}return JSON.stringify(i)}class Zo{constructor(e,i,r,s){this.url=e,this.method=i,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Qo(t){if(!t)throw Vi()}function Dd(t,e){function i(r,s){const c=Yo(t,s,e);return Qo(c!==null),c}return i}function Nd(t,e){function i(r,s){const c=Yo(t,s,e);return Qo(c!==null),Cd(c,s,t.host,t._protocol)}return i}function ea(t){function e(i,r){let s;return i.getStatus()===401?i.getErrorText().includes("Firebase App Check token is invalid")?s=qh():s=Gh():i.getStatus()===402?s=Kh(t.bucket):i.getStatus()===403?s=Jh(t.path):s=r,s.status=i.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ld(t){const e=ea(t);function i(r,s){let c=e(r,s);return r.getStatus()===404&&(c=Wh(t.path)),c.serverResponse=s.serverResponse,c}return i}function Ud(t,e,i){const r=e.fullServerUrl(),s=Ki(r,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,f=new Zo(s,c,Nd(t,i),l);return f.errorHandler=Ld(e),f}function Md(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xd(t,e,i){const r=Object.assign({},i);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Md(null,e)),r}function Bd(t,e,i,r,s){const c=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function f(){let M="";for(let R=0;R<2;R++)M=M+Math.random().toString().slice(2);return M}const m=f();l["Content-Type"]="multipart/related; boundary="+m;const E=xd(e,r,s),b=Od(E,i),A="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+m+`\r
Content-Type: `+E.contentType+`\r
\r
`,k=`\r
--`+m+"--",O=ve.getBlob(A,r,k);if(O===null)throw td();const S={name:E.fullPath},D=Ki(c,t.host,t._protocol),P="POST",W=t.maxUploadRetryTime,j=new Zo(D,P,Dd(t,i),W);return j.urlParams=S,j.headers=l,j.body=O.uploadData(),j.errorHandler=ea(e),j}class jd{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qe.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qe.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qe.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,i,r,s){if(this.sent_)throw At("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(i,e,!0),s!==void 0)for(const c in s)s.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,s[c].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw At("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw At("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw At("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw At("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Fd extends jd{initXhr(){this.xhr_.responseType="text"}}function ta(){return new Fd}/**
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
 */class Ye{constructor(e,i){this._service=e,i instanceof se?this._location=i:this._location=se.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new Ye(e,i)}get root(){const e=new se(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jo(this._location.path)}get storage(){return this._service}get parent(){const e=bd(this._location.path);if(e===null)return null;const i=new se(this._location.bucket,e);return new Ye(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw Ho(e)}}function $d(t,e,i){t._throwIfRoot("uploadBytes");const r=Bd(t.storage,t._location,Xo(),new ve(e,!0),i);return t.storage.makeRequestWithTokens(r,ta).then(s=>({metadata:s,ref:t}))}function Hd(t){t._throwIfRoot("getDownloadURL");const e=Ud(t.storage,t._location,Xo());return t.storage.makeRequestWithTokens(e,ta).then(i=>{if(i===null)throw nd();return i})}function Vd(t,e){const i=Ad(t._location.path,e),r=new se(t._location.bucket,i);return new Ye(t.storage,r)}/**
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
 */function zd(t){return/^[A-Za-z]+:\/\//.test(t)}function Wd(t,e){return new Ye(t,e)}function na(t,e){if(t instanceof Gi){const i=t;if(i._bucket==null)throw ed();const r=new Ye(i,i._bucket);return e!=null?na(r,e):r}else return e!==void 0?Vd(t,e):t}function Kd(t,e){if(e&&zd(e)){if(t instanceof Gi)return Wd(t,e);throw An("To use ref(service, url), the first argument must be a Storage instance.")}else return na(t,e)}function Us(t,e){const i=e==null?void 0:e[Fo];return i==null?null:se.makeFromBucketSpec(i,t)}function Gd(t,e,i,r={}){t.host=`${e}:${i}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Gs(s,t.app.options.projectId))}class Gi{constructor(e,i,r,s,c){this.app=e,this._authProvider=i,this._appCheckProvider=r,this._url=s,this._firebaseVersion=c,this._bucket=null,this._host=jo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vh,this._maxUploadRetryTime=zh,this._requests=new Set,s!=null?this._bucket=se.makeFromBucketSpec(s,this._host):this._bucket=Us(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=se.makeFromBucketSpec(this._url,e):this._bucket=Us(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ls("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ls("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ye(this,e)}_makeRequest(e,i,r,s,c=!0){if(this._deleted)return new rd($o());{const l=gd(e,this._appId,r,s,i,this._firebaseVersion,c);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,i){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,r,s).getPromise()}}const Ms="@firebase/storage",xs="0.13.2";/**
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
 */const ia="storage";function qd(t,e,i){return t=de(t),$d(t,e,i)}function Jd(t){return t=de(t),Hd(t)}function Xd(t,e){return t=de(t),Kd(t,e)}function ra(t=Pi(),e){t=de(t);const r=Rn(t,ia).getImmediate({identifier:e}),s=zs("storage");return s&&qi(r,...s),r}function qi(t,e,i,r={}){Gd(t,e,i,r)}function Yd(t,{instanceIdentifier:e}){const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Gi(i,r,s,e,Ze)}function Zd(){Je(new je(ia,Yd,"PUBLIC").setMultipleInstances(!0)),fe(Ms,xs,""),fe(Ms,xs,"esm2017")}Zd();const Qd=Object.freeze(Object.defineProperty({__proto__:null,StorageError:z,get StorageErrorCode(){return V},StringFormat:he,_FbsBlob:ve,_Location:se,_dataFromString:zo,_invalidArgument:An,_invalidRootOperation:Ho,connectStorageEmulator:qi,getDownloadURL:Jd,getStorage:ra,ref:Xd,uploadBytes:qd},Symbol.toStringTag,{value:"Module"})),Ti={apiKey:"FAKE-KEY",authDomain:"FAKE-DOMAIN.firebaseapp.com",projectId:"aktywni-dev",storageBucket:"aktywni-dev.appspot.com",messagingSenderId:"000000000000",appId:"1:000000000000:web:aaaaaaaaaaaaaaaaaaaaaa"},ef=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId"],tf=ef.every(t=>typeof Ti[t]=="string"&&Ti[t]);let We,St,ln,un;function nf(){if(We)return{app:We,auth:St,db:ln,storage:un};if(!tf)return console.warn("[Firebase] Pomijam inicjalizację – brak konfiguracji env (prod bez kluczy). UI działa, backend dojdzie później."),{app:null,auth:null,db:null,storage:null};if(We=Xs(Ti),St=Ah(We),ln=Hh(We),un=ra(We),fu(St,Ao),location.hostname==="localhost"||location.hostname==="127.0.0.1")try{_o(St,"http://127.0.0.1:9099",{disableWarnings:!0}),Bo(ln,"127.0.0.1",8080),qi(un,"127.0.0.1",9199),console.log("[Firebase] Emulatory podłączone")}catch(t){console.warn("[Firebase] Nie udało się podłączyć emulatorów:",t)}return{app:We,auth:St,db:ln,storage:un}}const{storage:Bs}=nf(),js={"/":()=>Ut("home-tpl"),"/wydarzenia":da,"/nowe":()=>of(()=>Ut("create-tpl",gf)),"/login":mf,"/profil":yf};function Ut(t,e){const i=document.getElementById(t);document.getElementById("app").innerHTML=i.innerHTML,e&&e()}function sa(){const t=location.hash.replace("#","");document.querySelectorAll("header .btn").forEach(e=>e.classList.remove("active")),t.startsWith("/wydarzenia")&&document.getElementById("nav-events").classList.add("active"),t.startsWith("/nowe")&&document.getElementById("nav-create").classList.add("active"),t.startsWith("/login")&&document.getElementById("nav-login").classList.add("active"),t.startsWith("/profil")&&document.getElementById("nav-profile").classList.add("active")}window.addEventListener("hashchange",()=>{sa(),oa()});function oa(){const t=location.hash.replace("#","")||"/";(js[t]||js["/"])(),Yi()}const Ji="aktywni:auth:user";function Xi(){try{return JSON.parse(localStorage.getItem(Ji))}catch{return null}}function rf(t){localStorage.setItem(Ji,JSON.stringify(t)),Yi()}function sf(){localStorage.removeItem(Ji),Yi()}function Yi(){const t=Xi(),e=document.getElementById("nav-login"),i=document.getElementById("nav-profile"),r=document.getElementById("nav-create");!e||!i||(t?(e.style.display="none",i.style.display="",i.textContent=t.name?`Profil (${t.name})`:"Profil",r.classList.remove("link")):(e.style.display="",i.style.display="none",i.textContent="Profil",r.classList.add("link")))}function of(t){if(!Xi()){location.hash="#/login";return}t()}const Sn={Siatkówka:["A1 – Początkujący","A2 – Odbijający","A3 – Grający","B1 – Średniozaawansowany","B2 – Zaawansowany","C1 – Półzawodowy","C2 – Zawodowy – PRO"],Tenis:["NTRP 1.0","NTRP 1.5","NTRP 2.0","NTRP 2.5","NTRP 3.0","NTRP 3.5","NTRP 4.0","NTRP 4.5","NTRP 5.0","NTRP 5.5","NTRP 6.0","NTRP 7.0"],Padel:["Początkujący","Rekreacyjny","Średniozaawansowany","Zaawansowany","Turniejowy/Pro"],Squash:["Początkujący","Klubowy","Średniozaawansowany","Zaawansowany","Turniejowy/Pro"],"Piłka Nożna":["Rekreacyjny","Amatorski","Półprofesjonalny","Zaawansowany"],Kolarstwo:["Rekreacyjne","Treningowe","Amatorskie wyścigi","Zaawansowane wyścigi"],"Koszykówka 3x3":["Rekreacyjny","Ligowy amator","Średniozaawansowany","Zaawansowany","Turniejowy/Pro"],Koszykówka:["Rekreacyjny","Ligowy amator","Średniozaawansowany","Zaawansowany","Turniejowy/Pro"],Badminton:["Początkujący","Rekreacyjny","Średniozaawansowany","Zaawansowany","Turniejowy/Pro"],"Siatkówka plażowa":["A1 – Początkujący","A2 – Odbijający","A3 – Grający","B1 – Średniozaawansowany","B2 – Zaawansowany","C1 – Półzawodowy","C2 – Zawodowy – PRO"]},aa=af(25,25,300," km"),ca=cf(15,5,45," km/h");function af(t,e,i,r){const s=[];for(let c=t;c<=i;c+=e)s.push(`${c}${r}`);return s}function cf(t,e,i,r){const s=[];for(let c=t;c<i;c+=e)s.push(`${c}–${c+e}${r}`);return s}const bi="aktywni:events:v1",la="aktywni:signups:v1",ua="aktywni:user:skills";function Ot(){try{if(window.crypto&&window.crypto.randomUUID)return window.crypto.randomUUID()}catch{}return"id-"+Math.random().toString(36).slice(2)+Date.now()}const Ai=[{id:Ot(),title:"Bieg nad Wisłą",date:pi(3),time:"18:00",datetime:"",place:"Bulwary Wiślane, Warszawa",lat:52.237,lng:21.022,capacity:20,taken:5,banner:"https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1200&auto=format&fit=crop",desc:"Lekki bieg ~6km, tempo konwersacyjne. Każdy mile widziany.",sport:"Piłka Nożna",level:"Rekreacyjny",sex:"mix"},{id:Ot(),title:"Siatkówka plażowa — sparing",date:pi(5),time:"17:30",datetime:"",place:"Plaża Poniatówka",lat:52.234,lng:21.04,capacity:12,taken:9,banner:"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",desc:"Gramy 3×3, poziom rekreacyjny. Zabierz wodę i uśmiech :)",sport:"Siatkówka plażowa",level:"A2 – Odbijający",sex:"mix"},{id:Ot(),title:"Koszykówka 3x3 — gierki",date:pi(2),time:"08:30",datetime:"",place:"Park Skaryszewski",lat:52.244,lng:21.056,capacity:25,taken:12,banner:"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",desc:"Szybkie granie 3x3, wpadaj.",sport:"Koszykówka 3x3",level:"Ligowy amator",sex:"women"}];Ai.forEach(t=>t.datetime=`${t.date}T${t.time}`);function pi(t){const e=new Date(Date.now()+t*24*3600*1e3),i=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${i}-${r}-${s}`}function kn(){const t=localStorage.getItem(bi);if(t)try{return JSON.parse(t)}catch(e){console.warn(e)}return localStorage.setItem(bi,JSON.stringify(Ai)),Ai}function ha(t){localStorage.setItem(bi,JSON.stringify(t))}function lf(){return JSON.parse(localStorage.getItem(la)||"{}")}function uf(t){localStorage.setItem(la,JSON.stringify(t))}function hf(){return JSON.parse(localStorage.getItem(ua)||"{}")}function df(t){localStorage.setItem(ua,JSON.stringify(t))}function da(){Ut("events-tpl");const t=document.getElementById("events-list"),e=kn().sort((i,r)=>new Date(i.datetime)-new Date(r.datetime));t.innerHTML="",e.forEach(i=>t.appendChild(ff(i)))}function ff(t){const e=document.createElement("div");e.className="event";const i=t.sport==="Kolarstwo"?` · 🚴 ${t.cyclingDistance||""}${t.cyclingDistance&&t.cyclingPace?" · ":""}${t.cyclingPace||""}`:"";return e.innerHTML=`
    <div class="banner">${t.banner?`<img src="${t.banner}" alt="${t.title}">`:""}</div>
    <div>
      <div class="title">${t.title}</div>
      <div class="meta">${pa(t.datetime)} · ${t.place}</div>
      <div class="meta">🏷️ ${t.sport} — <strong>${t.level}</strong> · ${fa(t.sex)}${i}</div>
    </div>
    <div style="display:flex; gap:8px; align-items:center">
      ${pf(t)}
      <button class="btn" aria-label="Otwórz szczegóły">Szczegóły</button>
    </div>`,e.querySelector("button").addEventListener("click",r=>{gn=r.currentTarget,_f(t.id)}),e}function pf(t){const e=Math.max(0,t.capacity-(t.taken||0));return`<span id="m-cap-pill" class="pill ${e===0?"none":e<5?"low":"ok"}">${e} wolnych</span>`}function fa(t){return t==="women"?"Kobiety":t==="men"?"Mężczyźni":"Mix"}function gf(){const t=document.getElementById("date");document.getElementById("time");const e=new Date,i=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");t.min=`${i}-${r}-${s}`;const c=document.getElementById("sport-select"),l=document.getElementById("level-select");c.innerHTML=Object.keys(Sn).map(R=>`<option value="${R}">${R}</option>`).join("");const f=()=>{const R=Sn[c.value]||[];l.innerHTML=R.map(B=>`<option value="${B}">${B}</option>`).join(""),document.getElementById("cycling-extra").style.display=c.value==="Kolarstwo"?"grid":"none"};c.addEventListener("change",f),f();const m=document.getElementById("cycling-distance"),E=document.getElementById("cycling-pace");m.innerHTML=aa.map(R=>`<option value="${R}">${R}</option>`).join(""),E.innerHTML=ca.map(R=>`<option value="${R}">${R}</option>`).join("");const b=document.getElementById("create-map"),A=document.getElementById("place"),k=document.getElementById("lat"),O=document.getElementById("lng"),S=L.map(b,{attributionControl:!1,zoomControl:!0});L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(S);const D=[52.231,21.007];S.setView(D,12);let P=L.marker(D,{draggable:!0}).addTo(S);k.value=D[0],O.value=D[1],L.Control.geocoder({defaultMarkGeocode:!1,placeholder:"Szukaj miejsca…",geocoder:L.Control.Geocoder.photon()}).on("markgeocode",function(R){const B=R.geocode.center;S.setView(B,15),P.setLatLng(B),k.value=B.lat.toFixed(6),O.value=B.lng.toFixed(6),A.value=R.geocode.name||A.value}).addTo(S);async function W(R,B){try{const $=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${R}&lon=${B}`;return(await(await fetch($,{headers:{"Accept-Language":"pl"}})).json()).display_name||`${R.toFixed(5)}, ${B.toFixed(5)}`}catch{return`${R.toFixed(5)}, ${B.toFixed(5)}`}}async function j(R){S.setView(R,15),P.setLatLng(R),k.value=R.lat.toFixed(6),O.value=R.lng.toFixed(6),A.value=await W(R.lat,R.lng)}S.on("click",R=>j(R.latlng)),P.on("dragend",()=>j(P.getLatLng())),A.addEventListener("change",()=>{var $;const R=($=A.value)==null?void 0:$.trim();if(!R)return;L.Control.Geocoder.photon().geocode(R,y=>{if(y&&y[0]){const h=y[0].center;j(h)}})});const M=document.getElementById("create-form");M.addEventListener("submit",async R=>{R.preventDefault();const B=document.getElementById("date").value,$=document.getElementById("time").value,y=`${B}T${$}`,h=new FormData(M),d=Object.fromEntries(h.entries());d.id=Ot(),d.capacity=Number(d.capacity)||1,d.taken=0,d.lat=parseFloat(d.lat),d.lng=parseFloat(d.lng),d.datetime=y,d.date=B,d.time=$;const g=document.getElementById("bannerFile").files[0];if(g&&Bs)try{const{ref:_,uploadBytes:w,getDownloadURL:p}=await Qa(async()=>{const{ref:On,uploadBytes:Fe,getDownloadURL:$e}=await Promise.resolve().then(()=>Qd);return{ref:On,uploadBytes:Fe,getDownloadURL:$e}},void 0),ae=`banners/${d.id}-${g.name}`,Se=_(Bs,ae);await w(Se,g),d.banner=await p(Se)}catch{d.banner=document.getElementById("bannerUrl").value||""}else d.banner=document.getElementById("bannerUrl").value||"";d.sport!=="Kolarstwo"&&(delete d.cyclingDistance,delete d.cyclingPace),ha([...kn(),d]),location.hash="#/wydarzenia"})}function mf(){Ut("login-tpl",()=>{const t=document.getElementById("login-form");t.addEventListener("submit",e=>{e.preventDefault();const{email:i,name:r}=Object.fromEntries(new FormData(t).entries());rf({uid:Ot(),email:i,name:r}),location.hash="#/profil"})})}function yf(){const t=Xi();if(!t){location.hash="#/login";return}Ut("profile-tpl",()=>{const e=document.getElementById("profile-box");e.innerHTML=`
      <div class="meta">Zalogowano jako:</div>
      <div style="font-weight:700">${t.name||"(bez imienia)"}</div>
      <div class="meta">${t.email}</div>
    `;const i=document.getElementById("skills-form"),r=hf();i.innerHTML=Object.keys(Sn).map(f=>{const m=Sn[f].map(E=>`<option ${r[f]===E?"selected":""}>${E}</option>`).join("");return`
        <div class="field" style="display:grid; grid-template-columns:200px 1fr; gap:12px; align-items:center">
          <label style="margin:0">${f}</label>
          <select name="${f}">${m}</select>
        </div>`}).join("");const s=document.getElementById("skills-cycling"),c=document.getElementById("skill-cyc-dist"),l=document.getElementById("skill-cyc-pace");c.innerHTML=aa.map(f=>`<option ${r._cyclingDistance===f?"selected":""}>${f}</option>`).join(""),l.innerHTML=ca.map(f=>`<option ${r._cyclingPace===f?"selected":""}>${f}</option>`).join(""),s.style.display="block",document.getElementById("btn-save-skills").addEventListener("click",f=>{f.preventDefault();const m={};i.querySelectorAll("select").forEach(E=>{m[E.name]=E.value}),m._cyclingDistance=c.value,m._cyclingPace=l.value,df(m),alert("Zapisano poziomy.")}),document.getElementById("btn-logout").addEventListener("click",()=>{sf(),location.hash="#/login"})})}let le=null,Dt=null,gn=null;function _f(t){const e=kn().find(b=>b.id===t);if(!e)return;const i=document.getElementById("event-modal");i.classList.add("open"),i.setAttribute("aria-hidden","false"),document.getElementById("m-title").textContent=e.title,document.getElementById("m-title-sm").textContent=e.title,document.getElementById("m-when").textContent=pa(e.datetime),document.getElementById("m-place").textContent=e.place,document.getElementById("m-desc").textContent=e.desc||"",document.getElementById("m-sport").innerHTML=`🏷️ ${e.sport} — <strong>${e.level}</strong> · ${fa(e.sex)}`;const r=document.getElementById("m-cycling");e.sport==="Kolarstwo"&&(e.cyclingDistance||e.cyclingPace)?(r.style.display="",r.textContent=`🚴 ${e.cyclingDistance||""}${e.cyclingDistance&&e.cyclingPace?" · ":""}${e.cyclingPace||""}`):(r.style.display="none",r.textContent="");const s=Math.max(0,e.capacity-(e.taken||0)),c=document.getElementById("m-cap-pill");c.textContent=`${s} wolnych`,c.classList.remove("none","low","ok"),c.classList.add(s===0?"none":s<5?"low":"ok");const l=document.getElementById("m-banner");if(l.innerHTML=e.banner?`<img src="${e.banner}" alt="${e.title}" style="width:100%; height:100%; object-fit:cover">`:"",le){try{le.remove()}catch{}le=null}const f=document.getElementById("map");f.innerHTML="",le=L.map(f,{attributionControl:!1,zoomControl:!0}),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(le),L.marker([e.lat,e.lng]).addTo(le).bindPopup(e.title),le.setView([e.lat,e.lng],14),setTimeout(()=>le.invalidateSize(),150),document.getElementById("m-close").focus(),Dt=b=>{if(b.key==="Escape"&&Zi(),b.key==="Tab"){const A=i.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'),k=Array.from(A).filter(D=>!D.disabled&&D.offsetParent!==null);if(!k.length)return;const O=k[0],S=k[k.length-1];b.shiftKey&&document.activeElement===O?(b.preventDefault(),S.focus()):!b.shiftKey&&document.activeElement===S&&(b.preventDefault(),O.focus())}},document.addEventListener("keydown",Dt);const E=document.getElementById("join-form");E.onsubmit=b=>{b.preventDefault();const{name:A,email:k}=Object.fromEntries(new FormData(E).entries()),O=kn(),S=O.findIndex(j=>j.id===t),D=O[S].capacity-(O[S].taken||0),P=document.getElementById("join-msg");if(D<=0){P.innerHTML='<span class="danger">Brak miejsc</span>';return}O[S].taken=(O[S].taken||0)+1,ha(O);const W=lf();(W[t]=W[t]||[]).push({name:A,email:k,at:new Date().toISOString()}),uf(W),P.innerHTML='<span class="success">Jesteś zapisany/a! Do zobaczenia 🔥</span>',da()}}function Zi(){const t=document.getElementById("event-modal");if(t.classList.remove("open"),t.setAttribute("aria-hidden","true"),Dt&&(document.removeEventListener("keydown",Dt),Dt=null),le){try{le.remove()}catch{}le=null}const e=document.getElementById("map");e&&(e.innerHTML=""),gn&&typeof gn.focus=="function"&&gn.focus()}document.getElementById("m-close").addEventListener("click",Zi);document.getElementById("event-modal").addEventListener("click",t=>{t.target.id==="event-modal"&&Zi()});function pa(t){try{return new Date(t).toLocaleString("pl-PL",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}document.getElementById("year").textContent=new Date().getFullYear();location.hash||(location.hash="#/");sa();oa();
