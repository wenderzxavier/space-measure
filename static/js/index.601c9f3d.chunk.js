(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[1],[function(t,e,r){"use strict";r.d(e,"h",(function(){return n})),r.d(e,"f",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"g",(function(){return a})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return f})),r.d(e,"i",(function(){return h}));var n="SHAPE",o="LINE",i="full",a="quarter",c="half",u="3074457358398558776",s=[i,c,a],f={RECTANGLE:3,ELLIPSE:4,TRIANGLE:5,PARALLELOGRAM:10},h={3:"Rectangle",4:"Ellipse",5:"Triangle",10:"Parallelogram"}},,function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return u}));var n=r(0),o=function(t,e){return t*e},i=function(t,e){return 2*t+2*e},a=function(t,e,r,n){return Math.sqrt(Math.pow(r-t,2)+Math.pow(n-e,2))},c=function(t,e,r,i){switch(t){case n.c.RECTANGLE:return o(e,r);case n.c.TRIANGLE:return function(t,e,r){var o=t*e/2;return r.toLowerCase()===n.e?o/2:o}(e,r,i);case n.c.ELLIPSE:return function(t,e,r){var o=e/2,i=t/2,a=Math.PI*o*i;return r.toLowerCase()===n.g?a/4:r.toLowerCase()===n.e?a/2:a}(e,r,i);case n.c.PARALLELOGRAM:return o(e,r);default:return}},u=function(t,e,r,o){switch(t){case n.c.RECTANGLE:return i(e,r);case n.c.TRIANGLE:return function(t,e,r){var o=t+Math.sqrt(Math.pow(t,2)+4*Math.pow(e,2));return r.toLowerCase()===n.e?o/2:o}(e,r,o);case n.c.ELLIPSE:return function(t,e,r){var o=e/2,i=t/2,a=Math.PI*(3*(i+o)-Math.sqrt((3*i+o)*(i+3*o)));return r.toLowerCase()===n.g?a/4:r.toLowerCase()===n.e?a/2:a}(e,r,o);case n.c.PARALLELOGRAM:return i(e,r);default:return}}},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},function(t,e,r){t.exports=r(8)},function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return s})),r.d(e,"e",(function(){return h})),r.d(e,"d",(function(){return l}));var n=r(3),o=r(7),i=r(0),a=r(2),c=[],u=[],s=[],f=function(t,e){miro.board.widgets.update({id:t,metadata:Object(n.a)({},i.a,Object(o.a)({},e))})},h=function(t){c.splice(0,c.length),t.forEach((function(t){var e,r,n,o=(null===(e=t.metadata[i.a])||void 0===e?void 0:e.areaType)||i.d,u=(null===(r=t.metadata[i.a])||void 0===r?void 0:r.area)||0,h=(null===(n=t.metadata[i.a])||void 0===n?void 0:n.perimeter)||0;if(i.b.includes(o)||(o=i.d),Object.values(i.c).includes(t.style.shapeType)){var l=Object(a.a)(t.style.shapeType,t.width,t.height,o),p=Object(a.c)(t.style.shapeType,t.width,t.height,o);if(function(t,e,r,n){c.push({id:t.id,areaType:e,area:r,perimeter:n,width:t.width,height:t.height,groupId:t.groupId,shapeType:t.style.shapeType})}(t,o,l,p),t.groupId){var d=s[t.groupId]||0;s[t.groupId]=d+l}u===l&&h===p&&t.metadata[i.a].areaType===o||f(t.id,{area:l,perimeter:p,areaType:o})}}))},l=function(t){u.splice(0,u.length),t.forEach((function(t){var e,r=(null===(e=t.metadata[i.a])||void 0===e?void 0:e.length)||0,n=t.startPosition,o=t.endPosition,c=Object(a.b)(n.x,n.y,o.x,o.y);c!==r&&f(t.id,{length:c})}))}},function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(3);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",d={};function y(){}function v(){}function g(){}var w={};w[i]=function(){return this};var m=Object.getPrototypeOf,L=m&&m(m(k([])));L&&L!==r&&n.call(L,i)&&(w=L);var b=g.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=b.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},,,,function(t,e,r){t.exports=r(13)},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),i=r(6),a=r(0),c=r(5);miro.onReady(Object(i.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return'<g id="Layer_1"><path d="M2.796,2.468 L2.749,22.468" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M3.5,21.5 L23.564,21.5" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M2.796,14.783 C3.209,13.972 3.594,13.171 4.059,12.371 C4.623,11.401 5.385,10.556 5.953,9.606 C6.402,8.857 7.01,8.19 7.426,7.395 C7.433,7.382 7.577,7.143 7.584,7.143 C7.752,7.143 8.14,9.507 8.163,9.606 C8.417,10.699 9.623,17.334 10.268,17.95 C10.54,18.21 10.69,17.331 10.846,16.995 C11.092,16.467 11.363,15.957 11.636,15.437 C12.745,13.317 13.466,11.153 14.687,9.053 C15.97,6.848 15.997,5.125 18.107,8.148 C18.173,8.244 19.421,9.809 19.475,9.757 C20.284,8.984 20.992,7.211 21.527,6.188" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>',miro.initialize({extensionPoints:{bottomBar:{title:"widget counter",svgIcon:'<g id="Layer_1"><path d="M2.796,2.468 L2.749,22.468" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M3.5,21.5 L23.564,21.5" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M2.796,14.783 C3.209,13.972 3.594,13.171 4.059,12.371 C4.623,11.401 5.385,10.556 5.953,9.606 C6.402,8.857 7.01,8.19 7.426,7.395 C7.433,7.382 7.577,7.143 7.584,7.143 C7.752,7.143 8.14,9.507 8.163,9.606 C8.417,10.699 9.623,17.334 10.268,17.95 C10.54,18.21 10.69,17.331 10.846,16.995 C11.092,16.467 11.363,15.957 11.636,15.437 C12.745,13.317 13.466,11.153 14.687,9.053 C15.97,6.848 15.997,5.125 18.107,8.148 C18.173,8.244 19.421,9.809 19.475,9.757 C20.284,8.984 20.992,7.211 21.527,6.188" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>',onClick:function(){miro.board.ui.openLeftSidebar("app.html")}}}}),t.next=4,miro.board.widgets.get({type:a.h});case 4:return e=t.sent,console.log(e),t.next=8,miro.board.widgets.get({type:a.f});case 8:r=t.sent,console.log(r),Object(c.e)(e),Object(c.d)(r),console.log(c.a),miro.addListener("WIDGETS_CREATED",(function(t){var e=t.data[0];e.metadata[APP_ID]||addMetadataToWidget(e.id)}));case 14:case"end":return t.stop()}}),t)}))))}],[[12,3]]]);
//# sourceMappingURL=index.601c9f3d.chunk.js.map