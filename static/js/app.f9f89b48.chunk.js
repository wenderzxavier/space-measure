(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[0],[function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return d}));var r="SHAPE",a="LINE",c="full",o="quarter",i="half",u="3074457358398558776",s=[c,i,o],l={RECTANGLE:3,ELLIPSE:4,TRIANGLE:5,PARALLELOGRAM:10},d={3:"Rectangle",4:"Ellipse",5:"Triangle",10:"Parallelogram"}},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(0),a=function(e,t){return e*t},c=function(e,t){return 2*e+2*t},o=function(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))},i=function(e,t,n,c){switch(e){case r.c.RECTANGLE:return a(t,n);case r.c.TRIANGLE:return function(e,t,n){var a=e*t/2;return n.toLowerCase()===r.e?a/2:a}(t,n,c);case r.c.ELLIPSE:return function(e,t,n){var a=t/2,c=e/2,o=Math.PI*a*c;return n.toLowerCase()===r.g?o/4:n.toLowerCase()===r.e?o/2:o}(t,n,c);case r.c.PARALLELOGRAM:return a(t,n);default:return}},u=function(e,t,n,a){switch(e){case r.c.RECTANGLE:return c(t,n);case r.c.TRIANGLE:return function(e,t,n){var a=e+Math.sqrt(Math.pow(e,2)+4*Math.pow(t,2));return n.toLowerCase()===r.e?a/2:a}(t,n,a);case r.c.ELLIPSE:return function(e,t,n){var a=t/2,c=e/2,o=Math.PI*(3*(c+a)-Math.sqrt((3*c+a)*(c+3*a)));return n.toLowerCase()===r.g?o/4:n.toLowerCase()===r.e?o/2:o}(t,n,a);case r.c.PARALLELOGRAM:return c(t,n);default:return}}},,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(2),a=n.n(r),c=n(4),o=n(6),i=n(1),u=n(0),s=200,l=200,d=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,r,o,d,p=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:u.d,n=p.length>1&&void 0!==p[1]?p[1]:u.c.RECTANGLE,e.next=4,miro.board.viewport.get();case 4:r=e.sent,o=r.x+r.width/2,d=r.y+r.height/2,miro.board.widgets.create({type:u.h,text:"".concat(t.charAt(0).toUpperCase()+t.slice(1)," ").concat(u.i[n]),height:l,width:s,metadata:Object(c.a)({},u.a,{area:Object(i.a)(n,s,l,t),perimeter:Object(i.c)(n,s,l,t),areaType:t}),style:{shapeType:n},x:o,y:d}),miro.board.viewport.get({viewport:{x:o,y:d}});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,miro.board.widgets.get({id:t});case 2:n=e.sent[0],Object.values(u.c).includes(n.style.shapeType)&&miro.board.widgets.update({id:n.id,metadata:Object(c.a)({},u.a,{area:Object(i.a)(n.style.shapeType,n.width,n.height,u.d),perimeter:Object(i.c)(n.style.shapeType,n.width,n.height,u.d),areaType:u.d})});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},,function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(4),a=n(8),c=n(0),o=n(1),i=[],u=[],s=[],l=function(e,t){console.log("Update Miro Shape"),console.log(e),console.log(t),miro.board.widgets.update({id:e,metadata:Object(r.a)({},c.a,Object(a.a)({},t))})},d=function(e){console.log("UpdateShapeAreaPerimeter"),i.splice(0,i.length),e.forEach((function(e){var t,n,r,a=(null===(t=e.metadata[c.a])||void 0===t?void 0:t.areaType)||c.d,u=(null===(n=e.metadata[c.a])||void 0===n?void 0:n.area)||0,d=(null===(r=e.metadata[c.a])||void 0===r?void 0:r.perimeter)||0;if(console.log("Widget Area / Perimeter"),console.log(u),console.log(d),console.log(a),c.b.includes(a)||(a=c.d),Object.values(c.c).includes(e.style.shapeType)){var p=Object(o.a)(e.style.shapeType,e.width,e.height,a),h=Object(o.c)(e.style.shapeType,e.width,e.height,a);if(console.log("Calculates area / Perimete"),console.log(p),console.log(h),function(e,t,n,r){i.push({id:e.id,areaType:t,area:n,perimeter:r,width:e.width,height:e.height,groupId:e.groupId,shapeType:e.style.shapeType})}(e,a,p,h),e.groupId){var f=s[e.groupId]||0;s[e.groupId]=f+p}u===p&&d===h&&e.metadata[c.a].areaType===a||l(e.id,{area:p,perimeter:h,areaType:a})}}))},p=function(e){u.splice(0,u.length),e.forEach((function(e){var t,n=(null===(t=e.metadata[c.a])||void 0===t?void 0:t.length)||0,r=e.startPosition,a=e.endPosition,i=Object(o.b)(r.x,r.y,a.x,a.y);i!==n&&l(e.id,{length:i})}))}},,,,,,,,function(e,t,n){e.exports=n(23)},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(6),o=n.p+"static/media/logo.6ce24c58.svg",i=(n(16),n(10),n(12)),u=n.n(i),s=(n(21),n(0)),l=n(7),d=n(5),p=n(3);function h(){miro.onReady((function(){miro.addListener("SELECTION_UPDATED",(function(e){console.log("SELECTION_UPDATED"),console.log(e)}))})),console.log(l.c),console.log(l.b),console.log(l.a);var e=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,miro.board.widgets.get({type:s.h});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(p.jsx)("p",{children:"App version 1.15"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.d,s.c.ELLIPSE)},children:"Create Full Ellipse"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.e,s.c.ELLIPSE)},children:"Create Half Ellipse"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.g,s.c.ELLIPSE)},children:"Create Quarter Ellipse"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.d,s.c.RECTANGLE)},children:"Create Full Quadrilateral"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.d,s.c.PARALLELOGRAM)},children:"Create Full Parallelogram"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.e,s.c.PARALLELOGRAM)},children:"Create Half Parallelogram"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.d,s.c.TRIANGLE)},children:"Create Full Triangle"}),Object(p.jsx)("button",{onClick:function(){return Object(d.b)(s.e,s.c.TRIANGLE)},children:"Create Half Triangle"}),Object(p.jsx)("button",{onClick:function(){return e()},children:"Click Here"}),Object(p.jsx)("button",{onClick:function(){return updateStyle()},children:"Change Style"})]})})}u.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}],[[15,2,4]]]);
//# sourceMappingURL=app.f9f89b48.chunk.js.map