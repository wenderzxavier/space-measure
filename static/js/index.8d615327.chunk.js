(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[1],[function(t,e,r){"use strict";r.d(e,"i",(function(){return n})),r.d(e,"f",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"h",(function(){return a})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return f})),r.d(e,"j",(function(){return l})),r.d(e,"g",(function(){return h}));var n="SHAPE",o="LINE",i="full",a="quarter",c="half",u="3074457358398558776",s=[i,c,a],f={RECTANGLE:3,ELLIPSE:4,TRIANGLE:5,PARALLELOGRAM:10},l={3:"Rectangle",4:"Ellipse",5:"Triangle",10:"Parallelogram"},h=[]},function(t,e,r){t.exports=r(8)},function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return u}));var n=r(0),o=function(t,e){return t*e},i=function(t,e){return 2*t+2*e},a=function(t,e,r,n){return Math.sqrt(Math.pow(r-t,2)+Math.pow(n-e,2))},c=function(t,e,r,i){switch(t){case n.c.RECTANGLE:return o(e,r);case n.c.TRIANGLE:return function(t,e,r){var o=t*e/2;return r.toLowerCase()===n.e?o/2:o}(e,r,i);case n.c.ELLIPSE:return function(t,e,r){var o=e/2,i=t/2,a=Math.PI*o*i;return r.toLowerCase()===n.h?a/4:r.toLowerCase()===n.e?a/2:a}(e,r,i);case n.c.PARALLELOGRAM:return o(e,r);default:return}},u=function(t,e,r,o){switch(t){case n.c.RECTANGLE:return i(e,r);case n.c.TRIANGLE:return function(t,e,r){var o=t+Math.sqrt(Math.pow(t,2)+4*Math.pow(e,2));return r.toLowerCase()===n.e?o/2:o}(e,r,o);case n.c.ELLIPSE:return function(t,e,r){var o=e/2,i=t/2,a=Math.PI*(3*(i+o)-Math.sqrt((3*i+o)*(i+3*o)));return r.toLowerCase()===n.h?a/4:r.toLowerCase()===n.e?a/2:a}(e,r,o);case n.c.PARALLELOGRAM:return i(e,r);default:return}}},,function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return y}));var n=r(1),o=r.n(n),i=r(5),a=r(4),c=r(2),u=r(0),s=r(7),f=200,l=200,h=function(){var t=Object(a.a)(o.a.mark((function t(e){var r,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({id:e});case 2:r=t.sent[0],Object(s.a)(r.style.shapeType)?(n=Object(c.a)(r.style.shapeType,r.width,r.height,u.d),a=Object(c.c)(r.style.shapeType,r.width,r.height,u.d),miro.board.widgets.update({id:r.id,metadata:Object(i.a)({},u.a,{area:n,perimeter:a,areaType:u.d,shapeType:r.style.shapeType})})):miro.showErrorNotification("Shape not supported for SpaceMeasure");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({id:e});case 2:r=t.sent[0],miro.board.widgets.update({id:r.id,metadata:Object(i.a)({},u.a,{length:Object(c.b)(r.startPosition.x,r.startPosition.y,r.endPosition.x,r.endPosition.y)})});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(o.a.mark((function t(){var e,r,n,a,s,h=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.length>0&&void 0!==h[0]?h[0]:u.d,r=h.length>1&&void 0!==h[1]?h[1]:u.c.RECTANGLE,t.next=4,miro.board.viewport.get();case 4:n=t.sent,a=n.x+n.width/2,s=n.y+n.height/2,miro.board.widgets.create({type:u.i,text:"".concat(e.charAt(0).toUpperCase()+e.slice(1)," ").concat(u.j[r]),height:l,width:f,metadata:Object(i.a)({},u.a,{area:Object(c.a)(r,f,l,e),perimeter:Object(c.c)(r,f,l,e),areaType:e,shapeType:r}),style:{shapeType:r,borderStyle:1},x:a,y:s}),miro.board.viewport.get({viewport:{x:a,y:s}});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(t,e){if(e===u.i)return h(t);if(e===u.f)return p(t);throw new Error("Widget not supported on SpaceMeasure.")}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(0),o=function(t){return Object.values(n.c).includes(t)}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function y(){}function v(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==r&&n.call(b,i)&&(m=b);var L=g.prototype=y.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=L.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),L[c]="Generator",L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},,,,function(t,e,r){t.exports=r(21)},,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),i=r(4),a=r(0),c=r(6);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=r(5);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(f.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r(2),d=r(7),y=function(t,e){miro.board.widgets.update({id:t,metadata:Object(f.a)({},a.a,h({},e))})},v=function(t){t.forEach((function(t){var e,r,n,o=(null===(e=t.metadata[a.a])||void 0===e?void 0:e.areaType)||a.d,i=(null===(r=t.metadata[a.a])||void 0===r?void 0:r.area)||0,c=(null===(n=t.metadata[a.a])||void 0===n?void 0:n.perimeter)||0,u=t.style.shapeType||void 0;if(a.b.includes(o)||(o=a.d),Object(d.a)(u)){var s=Object(p.a)(u,t.width,t.height,o),f=Object(p.c)(u,t.width,t.height,o);i===s&&c===f&&t.metadata[a.a].areaType===o||y(t.id,{area:s,perimeter:f,areaType:o,shapeType:u})}}))},g=function(t){t.forEach((function(t){var e,r=(null===(e=t.metadata[a.a])||void 0===e?void 0:e.length)||0,n=t.startPosition,o=t.endPosition,i=Object(p.b)(n.x,n.y,o.x,o.y);i!==r&&y(t.id,{length:i})}))},m=function(){var t=Object(i.a)(o.a.mark((function t(e){var r,n,i,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=e.reduce((function(t,e){return e.type===a.i?h(h({},t),{},{shapes:[].concat(s(t.shapes),[e.id])}):e.type===a.f?h(h({},t),{},{lines:[].concat(s(t.lines),[e.id])}):t}),{lines:[],shapes:[]})).shapes.length>0)){t.next=10;break}return t.next=4,miro.board.widgets.get({type:a.i});case 4:n=t.sent,i=n.filter((function(t){return r.shapes.includes(t.id)})),console.log("GET SHAPES"),console.log(n),console.log(i),v(i);case 10:if(!(r.lines.length>0)){t.next=19;break}return t.next=13,miro.board.widgets.get({type:a.f});case 13:c=t.sent,u=c.filter((function(t){return r.lines.includes(t.id)})),console.log("GET LINES"),console.log(c),console.log(u),g(u);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();miro.onReady(Object(i.a)(o.a.mark((function t(){var e,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e='<g id="Layer_1"><path d="M2.796,2.468 L2.749,22.468" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M3.5,21.5 L23.564,21.5" fill-opacity="0" stroke="#000000" stroke-width="2"/><path d="M2.796,14.783 C3.209,13.972 3.594,13.171 4.059,12.371 C4.623,11.401 5.385,10.556 5.953,9.606 C6.402,8.857 7.01,8.19 7.426,7.395 C7.433,7.382 7.577,7.143 7.584,7.143 C7.752,7.143 8.14,9.507 8.163,9.606 C8.417,10.699 9.623,17.334 10.268,17.95 C10.54,18.21 10.69,17.331 10.846,16.995 C11.092,16.467 11.363,15.957 11.636,15.437 C12.745,13.317 13.466,11.153 14.687,9.053 C15.97,6.848 15.997,5.125 18.107,8.148 C18.173,8.244 19.421,9.809 19.475,9.757 C20.284,8.984 20.992,7.211 21.527,6.188" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>',miro.initialize({extensionPoints:{bottomBar:{title:"widget counter",svgIcon:e,onClick:function(){miro.board.ui.openLeftSidebar("app.html")}},getWidgetMenuItems:function(t){return console.log(t),Promise.resolve([{tooltip:"Space Measure",svgIcon:e,onClick:function(){var t=Object(i.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}])}}}),t.next=4,miro.board.widgets.get({type:a.i});case 4:return r=t.sent,t.next=7,miro.board.widgets.get({type:a.f});case 7:n=t.sent,v(r),g(n),setInterval((function(){console.log("LOCAL SHAPES INDEX"),console.log(a.g)}),5e3),miro.addListener("WIDGETS_CREATED",(function(t){try{var e=t.data[0];e.metadata[a.a]||Object(c.a)(e.id,e.type)}catch(r){console.warn(r)}})),miro.addListener("WIDGETS_TRANSFORMATION_UPDATED",(function(t){console.log(t);try{m(t.data)}catch(e){console.warn(e)}}));case 13:case"end":return t.stop()}}),t)}))))}],[[12,3]]]);
//# sourceMappingURL=index.8d615327.chunk.js.map