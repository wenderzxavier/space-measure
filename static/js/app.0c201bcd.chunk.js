(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[0],{0:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var r="SHAPE",a="LINE",o="full",c="quarter",u="half",i="3074457358398558776",l=[o,u,c],s={RECTANGLE:3,CIRCLE:4,TRIANGLE:5,PARALLELOGRAM:10}},13:function(e,t,n){e.exports=n(21)},14:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),o=n(5),c=n.p+"static/media/logo.6ce24c58.svg",u=(n(14),n(8),n(10)),i=n.n(u),l=(n(19),n(0)),s=n(3),d=n(1);function h(){miro.onReady((function(){miro.addListener("SELECTION_UPDATED",(function(e){console.log("SELECTION_UPDATED"),console.log(e)}))})),console.log(s.c),console.log(s.b),console.log(s.a);var e=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,miro.board.widgets.get({type:l.h});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:c,className:"App-logo",alt:"logo"}),Object(d.jsx)("p",{children:"App version 1.15"}),Object(d.jsx)("button",{children:"Create Full Ellipse"}),Object(d.jsx)("button",{children:"Create Half Ellipse"}),Object(d.jsx)("button",{children:"Create Quarter Ellipse"}),Object(d.jsx)("button",{children:"Create Full Quadrilateral"}),Object(d.jsx)("button",{children:"Create Full Parallelogram"}),Object(d.jsx)("button",{children:"Create Half Parallelogram"}),Object(d.jsx)("button",{children:"Create Full Triangle"}),Object(d.jsx)("button",{children:"Create Half Triangle"}),Object(d.jsx)("button",{onClick:function(){return e()},children:"Click Here"}),Object(d.jsx)("button",{onClick:function(){return updateStyle()},children:"Change Style"})]})})}i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))},3:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return g}));var r=n(2),a=n(6),o=n(0),c=function(e,t){return e*t},u=function(e,t){return 2*e+2*t},i=function(e,t,n,r){switch(console.log(e),console.log(t),console.log(n),console.log(r),e){case o.c.RECTANGLE:return c(t,n);case o.c.TRIANGLE:return function(e,t,n){var r=e*t/2;return n.toLowerCase()===o.e?r/2:r}(t,n,r);case o.c.CIRCLE:return function(e,t,n){var r=t/2,a=e/2,c=Math.PI*r*a;return n.toLowerCase()===o.g?c/4:n.toLowerCase()===o.e?c/2:c}(t,n,r);case o.c.PARALLELOGRAM:return c(t,n);default:return}},l=function(e,t,n,r){switch(e){case o.c.RECTANGLE:return u(t,n);case o.c.TRIANGLE:return function(e,t,n){var r=e+Math.sqrt(Math.pow(e,2)+4*Math.pow(t,2));return n.toLowerCase()===o.e?r/2:r}(t,n,r);case o.c.CIRCLE:return function(e,t,n){var r=t/2,a=e/2,c=Math.PI*(3*(a+r)-Math.sqrt((3*a+r)*(a+3*r)));return n.toLowerCase()===o.g?c/4:n.toLowerCase()===o.e?c/2:c}(t,n,r);case o.c.PARALLELOGRAM:return u(t,n);default:return}},s=[],d=[],h=[],p=function(e,t){miro.board.widgets.update({id:e,metadata:Object(r.a)({},o.a,Object(a.a)({},t))})},f=function(e){s.splice(0,s.length),e.forEach((function(e){var t,n,r,a=(null===(t=e.metadata[o.a])||void 0===t?void 0:t.areaType)||o.d,c=(null===(n=e.metadata[o.a])||void 0===n?void 0:n.area)||0,u=(null===(r=e.metadata[o.a])||void 0===r?void 0:r.perimeter)||0;if(o.b.includes(a)||(a=o.d),Object.values(o.c).includes(e.style.shapeType)){var d=i(e.style.shapeType,e.width,e.height,a),f=l(e.style.shapeType,e.width,e.height,a);if(function(e,t,n,r){s.push({id:e.id,areaType:t,area:n,perimeter:r,width:e.width,height:e.height,groupId:e.groupId,shapeType:e.style.shapeType})}(e,a,d,f),e.groupId){var g=h[e.groupId]||0;h[e.groupId]=g+d}c===d&&u===f&&e.metadata[o.a].areaType===a||p(e.id,{calculatedArea:d,calculatedPerimeter:f,areaType:a})}}))},g=function(e){d.splice(0,d.length),e.forEach((function(e){var t,n,r,a,c,u=(null===(t=e.metadata[o.a])||void 0===t?void 0:t.length)||0,i=e.startPosition,l=e.endPosition,s=(n=i.x,r=i.y,a=l.x,c=l.y,Math.sqrt(Math.pow(a-n,2)+Math.pow(c-r,2)));s!==u&&p(e.id,{length:s})}))}}},[[13,2,4]]]);
//# sourceMappingURL=app.0c201bcd.chunk.js.map