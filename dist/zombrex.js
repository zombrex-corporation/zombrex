var zombrex=function(){"use strict";function n(){}function e(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if("function"!=typeof e)throw new Error("fn "+e+" should be a function")}function o(n,o){e(n,o),p[n]=o}function r(n,e){if("string"!=typeof n)throw new Error("Name "+n+" is not typeof string");if(void 0===e)throw new Error("obj "+e+" should not be undefined");Object.keys(w).forEach(function(e){if(e===n)throw new Error("Name "+n+" is already defined")})}function t(n,e){r(n,e),w[n]=e}function i(n){return v.before(w),Object.keys(p).forEach(function(n){w[n]=p[n](w)}),l.forEach(function(n){var e=document.querySelector(n.id),o=n.fn(w);if("string"!=typeof o)throw new Error("Render Id "+n.id+" does not produce any html");e.innerHTML=o}),h.forEach(function(n){var e=document.querySelector(n.id);return n.fn(e,w)}),v.after(w)}function f(n){v.before=n}function a(n){v.after=n}function u(n){var e=0;if(0===n.length||void 0===n)return i();n.forEach(function(o){w.zAjax(o).then(function(r){if(t(o.name,r.data),e++,n.length===e)return i()})})}function d(n){window.addEventListener("DOMContentLoaded",function(){return u(n)},!0)}function c(n,e){h.forEach(function(e){if(e.id===n)throw new Error("Id "+n+" already defined")}),h.push({id:n,fn:e})}function s(n,e){l.forEach(function(e){if(e.id===n)throw new Error("Id "+n+" already defined in renders")}),l.push({id:n,fn:e})}function g(n){var e=n.url,o=n.data;return(o?axios.post:axios.get)(e,o)}var w={zSHARE:{}},h=[],l=[],v={after:n,before:n},p={},E={languageLong:window.navigator.userLanguage||window.navigator.language,language:(window.navigator.userLanguage||window.navigator.language).substring(0,2),agent:navigator.userAgent,online:navigator.onLine,timeFormat:(new Date).getTimezoneOffset()},m=function(){for(var n={},e=window.location.search.substring(1),o=e.split("&"),r=0;r<o.length;r++){var t=o[r].split("=");if(void 0===n[t[0]])n[t[0]]=decodeURIComponent(t[1]);else if("string"==typeof n[t[0]]){var i=[n[t[0]],decodeURIComponent(t[1])];n[t[0]]=i}else n[t[0]].push(decodeURIComponent(t[1]))}return Object.freeze(n)}();return function(){t("zURLPARAM",m),t("zBROWSER",E),w.zAjax=g}(),{component:o,constant:t,preload:d,before:f,render:s,after:a,view:c}}();
