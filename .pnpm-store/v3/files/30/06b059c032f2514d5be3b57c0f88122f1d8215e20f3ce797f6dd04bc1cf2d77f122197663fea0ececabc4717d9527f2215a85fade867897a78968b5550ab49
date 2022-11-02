!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@xstate/fsm")):"function"==typeof define&&define.amd?define(["exports","react","@xstate/fsm"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).XStateReactFSM={},e.React,e.XStateFSM)}(this,(function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=n(t);
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function o(e){var t={exports:{}};return e(t,t.exports),t.exports
/*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */}var i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function f(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var s=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,u=f(e),o=1;o<arguments.length;o++){for(var s in r=Object(arguments[o]))c.call(r,s)&&(u[s]=r[s]);if(i){n=i(r);for(var l=0;l<n.length;l++)a.call(r,n[l])&&(u[n[l]]=r[n[l]])}}return u},l={useSubscription:function(e){var t=e.getCurrentValue,r=e.subscribe,n=u.default.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=n[0];var o=n[1];return n=e.value,e.getCurrentValue===t&&e.subscribe===r||(n=t(),o({getCurrentValue:t,subscribe:r,value:n})),u.default.useDebugValue(n),u.default.useEffect((function(){function e(){if(!n){var e=t();o((function(n){return n.getCurrentValue!==t||n.subscribe!==r||n.value===e?n:s({},n,{value:e})}))}}var n=!1,u=r(e);return e(),function(){n=!0,u()}}),[t,r]),n}},b=(o((function(e,t){})),o((function(e){e.exports=l})));
/** @license React vundefined
     * use-subscription.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var p=function(e){var t;return e.subscribe((function(e){t=e})).unsubscribe(),t};e.useMachine=function(e,n){var u,o,i=(u=function(){return r.interpret(r.createMachine(e.config,n||e._options)).start()},(o=t.useRef()).current||(o.current={v:u()}),o.current.v),c=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,u,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){u={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(u)throw u.error}}return i}(t.useState((function(){return p(i)})),2),a=c[0],f=c[1];return t.useEffect((function(){n&&(i._machine._options=n)})),t.useEffect((function(){return i.subscribe(f),function(){i.stop()}}),[]),[a,i.send,i]},e.useService=function(e){var r=t.useMemo((function(){var t=p(e);return{getCurrentValue:function(){return t},subscribe:function(r){return e.subscribe((function(e){!1!==e.changed&&(t=e,r())})).unsubscribe}}}),[e]);return[b.useSubscription(r),e.send,e]},Object.defineProperty(e,"__esModule",{value:!0})}));
