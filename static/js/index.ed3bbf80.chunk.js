(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[1],[function(t,e,r){"use strict";r.d(e,"h",(function(){return n})),r.d(e,"f",(function(){return o})),r.d(e,"d",(function(){return a})),r.d(e,"g",(function(){return i})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return f})),r.d(e,"i",(function(){return h}));var n="SHAPE",o="LINE",a="full",i="quarter",c="half",u="3074457358398558776",s=[a,c,i],f={RECTANGLE:3,ELLIPSE:4,TRIANGLE:5,PARALLELOGRAM:10},h={3:"Rectangle",4:"Ellipse",5:"Triangle",10:"Parallelogram"}},,function(t,e,r){t.exports=r(10)},,function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return u}));var n=r(0),o=function(t,e){return t*e},a=function(t,e){return 2*t+2*e},i=function(t,e,r,n){return Math.sqrt(Math.pow(r-t,2)+Math.pow(n-e,2))},c=function(t,e,r,a){switch(t){case n.c.RECTANGLE:return o(e,r);case n.c.TRIANGLE:return function(t,e,r){var o=t*e/2;return r.toLowerCase()===n.e?o/2:o}(e,r,a);case n.c.ELLIPSE:return function(t,e,r){var o=e/2,a=t/2,i=Math.PI*o*a;return r.toLowerCase()===n.g?i/4:r.toLowerCase()===n.e?i/2:i}(e,r,a);case n.c.PARALLELOGRAM:return o(e,r);default:return}},u=function(t,e,r,o){switch(t){case n.c.RECTANGLE:return a(e,r);case n.c.TRIANGLE:return function(t,e,r){var o=t+Math.sqrt(Math.pow(t,2)+4*Math.pow(e,2));return r.toLowerCase()===n.e?o/2:o}(e,r,o);case n.c.ELLIPSE:return function(t,e,r){var o=e/2,a=t/2,i=Math.PI*(3*(a+o)-Math.sqrt((3*a+o)*(a+3*o)));return r.toLowerCase()===n.g?i/4:r.toLowerCase()===n.e?i/2:i}(e,r,o);case n.c.PARALLELOGRAM:return a(e,r);default:return}}},function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return y}));var n=r(2),o=r.n(n),a=r(6),i=r(5),c=r(4),u=r(0),s=r(8),f=200,h=200,l=function(){var t=Object(i.a)(o.a.mark((function t(e){var r,n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({id:e});case 2:r=t.sent[0],Object(s.b)(r.style.shapeType)?(n=Object(c.a)(r.style.shapeType,r.width,r.height,u.d),i=Object(c.c)(r.style.shapeType,r.width,r.height,u.d),miro.board.widgets.update({id:r.id,metadata:Object(a.a)({},u.a,{area:n,perimeter:i,areaType:u.d,shapeType:r.style.shapeType})})):miro.showErrorNotification("Shape not supported for SpaceMeasure");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({id:e});case 2:r=t.sent[0],miro.board.widgets.update({id:r.id,metadata:Object(a.a)({},u.a,{length:Object(c.b)(r.startPosition.x,r.startPosition.y,r.endPosition.x,r.endPosition.y)})});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(i.a)(o.a.mark((function t(){var e,r,n,i,s,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:u.d,r=l.length>1&&void 0!==l[1]?l[1]:u.c.RECTANGLE,t.next=4,miro.board.viewport.get();case 4:n=t.sent,i=n.x+n.width/2,s=n.y+n.height/2,miro.board.widgets.create({type:u.h,text:"".concat(e.charAt(0).toUpperCase()+e.slice(1)," ").concat(u.i[r]),height:h,width:f,metadata:Object(a.a)({},u.a,{area:Object(c.a)(r,f,h,e),perimeter:Object(c.c)(r,f,h,e),areaType:e,shapeType:r}),style:{shapeType:r,borderStyle:e===u.d?2:1},x:i,y:s}),miro.board.viewport.get({viewport:{x:i,y:s}});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){return miro.addListener("WIDGETS_CREATED",(function(t){try{var e=t.data[0];e.metadata[u.a]||function(t,e){if(e===u.h)return l(t);if(e===u.f)return p(t);throw new Error("Widget not supported on SpaceMeasure.")}(e.id,e.type)}catch(r){console.warn(r)}}))}},function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return i}));var n=r(9),o=r(0),a=function(t){return Object.values(o.c).includes(t)},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(t,e){return e.metadata.hasOwnProperty(o.a)?[].concat(Object(n.a)(t),[e.id]):t}),[])}},function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:l,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,O=b&&b(b(k([])));O&&O!==r&&n.call(O,a)&&(w=O);var L=m.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=L.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[i]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),u(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},,,function(t,e,r){t.exports=r(22)},,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n),a=r(5),i=r(6);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=r(0),f=function(t){var e=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(t){return t.metadata.hasOwnProperty(s.a)}));return 0===t.length?null:t}(t);return e?e.reduce((function(t,e){if(e.type===s.h){var r=e.metadata[s.a],n=r.area,o=r.perimeter;return u(u({},t),{},{area:t.area+n,perimeter:t.perimeter+o})}if(e.type===s.f){var a=e.metadata[s.a].length;return u(u({},t),{},{length:t.length+a})}return t}),{area:0,perimeter:0,length:0}):null},h='<g id="Layer_1"><path d="M2.796,2.468 L2.749,22.468" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M3.5,21.5 L23.564,21.5" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M2.796,14.783 C3.209,13.972 3.594,13.171 4.059,12.371 C4.623,11.401 5.385,10.556 5.953,9.606 C6.402,8.857 7.01,8.19 7.426,7.395 C7.433,7.382 7.577,7.143 7.584,7.143 C7.752,7.143 8.14,9.507 8.163,9.606 C8.417,10.699 9.623,17.334 10.268,17.95 C10.54,18.21 10.69,17.331 10.846,16.995 C11.092,16.467 11.363,15.957 11.636,15.437 C12.745,13.317 13.466,11.153 14.687,9.053 C15.97,6.848 15.997,5.125 18.107,8.148 C18.173,8.244 19.421,9.809 19.475,9.757 C20.284,8.984 20.992,7.211 21.527,6.188" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>',l=r(7),p=r(9),d=r(4),y=r(8),v=function(t,e){miro.board.widgets.update({id:t,metadata:Object(i.a)({},s.a,u({},e))})},g=function(t){t.forEach((function(t){var e,r,n,o=(null===(e=t.metadata[s.a])||void 0===e?void 0:e.areaType)||s.d,a=(null===(r=t.metadata[s.a])||void 0===r?void 0:r.area)||0,i=(null===(n=t.metadata[s.a])||void 0===n?void 0:n.perimeter)||0,c=t.style.shapeType||void 0;if(s.b.includes(o)||(o=s.d),Object(y.b)(c)){var u=Object(d.a)(c,t.width,t.height,o),f=Object(d.c)(c,t.width,t.height,o);a===u&&i===f&&t.metadata[s.a].areaType===o||v(t.id,{area:u,perimeter:f,areaType:o,shapeType:c})}}))},m=function(t){t.forEach((function(t){var e,r=(null===(e=t.metadata[s.a])||void 0===e?void 0:e.length)||0,n=t.startPosition,o=t.endPosition,a=Object(d.b)(n.x,n.y,o.x,o.y);a!==r&&v(t.id,{length:a})}))},w=function(){var t=Object(a.a)(o.a.mark((function t(e){var r,n,a,i,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=e.reduce((function(t,e){return e.type===s.h?u(u({},t),{},{shapes:[].concat(Object(p.a)(t.shapes),[e.id])}):e.type===s.f?u(u({},t),{},{lines:[].concat(Object(p.a)(t.lines),[e.id])}):t}),{lines:[],shapes:[]})).shapes.length>0)){t.next=7;break}return t.next=4,miro.board.widgets.get({type:s.h});case 4:n=t.sent,a=n.filter((function(t){return r.shapes.includes(t.id)})),g(a);case 7:if(!(r.lines.length>0)){t.next=13;break}return t.next=10,miro.board.widgets.get({type:s.f});case 10:i=t.sent,c=i.filter((function(t){return r.lines.includes(t.id)})),m(c);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();miro.onReady(Object(a.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return miro.initialize({extensionPoints:{bottomBar:{title:"widget counter",svgIcon:h,onClick:function(){miro.board.ui.openLeftSidebar("app.html")}},getWidgetMenuItems:function(t){var e=f(t);return e?Promise.resolve([{tooltip:"Space Measure",svgIcon:h,onClick:function(){var t=0!==e.area?"Area :".concat(e.area," | "):"",r=0!==e.perimeter?"Perimeter :".concat(e.perimeter," | "):"",n=0!==e.length?"Length :".concat(e.length):"";miro.showErrorNotification("".concat(t).concat(r).concat(n))}}]):Promise.resolve([])}}}),t.next=3,miro.board.widgets.get({type:s.h});case 3:return e=t.sent,t.next=6,miro.board.widgets.get({type:s.f});case 6:r=t.sent,g(e),m(r),Object(l.b)(),miro.addListener("WIDGETS_TRANSFORMATION_UPDATED",(function(t){try{w(t.data)}catch(e){console.warn(e)}}));case 11:case"end":return t.stop()}}),t)}))))}],[[13,3]]]);
//# sourceMappingURL=index.ed3bbf80.chunk.js.map