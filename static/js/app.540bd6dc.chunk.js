(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[0],[function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var r="SHAPE",a="LINE",c="quarter",o="half",u="3074457358398558776",i={RECTANGLE:3,CIRCLE:4,TRIANGLE:5,PARALLELOGRAM:10}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(4),a=n(0),c=function(e,t){return e*t},o=function(e,t){return 2*e+2*t},u=function(e,t,n,r){switch(e){case a.b.RECTANGLE:return c(t,n);case a.b.TRIANGLE:return function(e,t,n){var r=e*t/2;return n.toLowerCase()===a.c?r/2:r}(t,n,r);case a.b.CIRCLE:return function(e,t,n){var r=t/2,c=e/2,o=Math.PI*r*c;return n.toLowerCase()===a.e?o/4:n.toLowerCase()===a.c?o/2:o}(t,n,r);case a.b.PARALLELOGRAM:return c(t,n);default:return}},i=function(e,t,n,r){switch(e){case a.b.RECTANGLE:return o(t,n);case a.b.TRIANGLE:return function(e,t,n){var r=e+Math.sqrt(Math.pow(e,2)+4*Math.pow(t,2));return n.toLowerCase()===a.c?r/2:r}(t,n,r);case a.b.CIRCLE:return function(e,t,n){var r=t/2,c=e/2,o=Math.PI*(3*(c+r)-Math.sqrt((3*c+r)*(c+3*r)));return n.toLowerCase()===a.e?o/4:n.toLowerCase()===a.c?o/2:o}(t,n,r);case a.b.PARALLELOGRAM:return o(t,n);default:return}},s=[],d=function(e){s=[],e.forEach((function(e){var t,n=e.metadata[a.a],c=n.area,o=n.perimeter,s="full";if((null===(t=e.metadata[a.a])||void 0===t?void 0:t.areaType)&&(s=e.metadata[a.a].areaType),Object.values(a.b).includes(e.style.shapeType)){var d=u(e.style.shapeType,e.width,e.height,s),p=i(e.style.shapeType,e.width,e.height,s);!function(e,t,n,r){SHAPES.push({id:e.id,areaType:t,area:n,perimeter:r,width:e.width,height:e.height,groupId:e.groupId,shapeType:e.style.shapeType})}(e,s,d,p),c===d&&o===p||function(e,t,n,c){micromatch.board.widgets.update({id:e,metadata:Object(r.a)({},a.a,{area:t,perimeter:n,areaType:c})})}(e.id,d,p,e.style.shapeType)}}))}},,,,,,,function(e,t,n){e.exports=n(20)},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(3),o=n.p+"static/media/logo.6ce24c58.svg",u=(n(13),n(7),n(9)),i=n.n(u),s=(n(18),n(5)),d=n(0),p=n(1);function f(){miro.onReady((function(){miro.addListener("SELECTION_UPDATED",(function(e){console.log("SELECTION_UPDATED"),console.log(e)}))}));var e=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,miro.board.widgets.get({type:d.f});case 2:t=e.sent,console.log(t),console.log("LOCAL SHAPES"),console.log(s.a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(p.jsx)("p",{children:"App version 1.15"}),Object(p.jsx)("button",{onClick:function(){return e()},children:"Click Here"}),Object(p.jsx)("button",{onClick:function(){return updateStyle()},children:"Change Style"})]})})}i.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}],[[12,2,4]]]);
//# sourceMappingURL=app.540bd6dc.chunk.js.map