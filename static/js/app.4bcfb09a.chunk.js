(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[0],[function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"i",(function(){return d}));var r="SHAPE",c="LINE",a="full",o="quarter",i="half",u="3074457358398558776",l=[a,i,o],s={RECTANGLE:3,ELLIPSE:4,TRIANGLE:5,PARALLELOGRAM:10},d={3:"Rectangle",4:"Ellipse",5:"Triangle",10:"Parallelogram"}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(0),c=function(e,t){return e*t},a=function(e,t){return 2*e+2*t},o=function(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))},i=function(e,t,n,a){switch(e){case r.c.RECTANGLE:return c(t,n);case r.c.TRIANGLE:return function(e,t,n){var c=e*t/2;return n.toLowerCase()===r.e?c/2:c}(t,n,a);case r.c.ELLIPSE:return function(e,t,n){var c=t/2,a=e/2,o=Math.PI*c*a;return n.toLowerCase()===r.g?o/4:n.toLowerCase()===r.e?o/2:o}(t,n,a);case r.c.PARALLELOGRAM:return c(t,n);default:return}},u=function(e,t,n,c){switch(e){case r.c.RECTANGLE:return a(t,n);case r.c.TRIANGLE:return function(e,t,n){var c=e+Math.sqrt(Math.pow(e,2)+4*Math.pow(t,2));return n.toLowerCase()===r.e?c/2:c}(t,n,c);case r.c.ELLIPSE:return function(e,t,n){var c=t/2,a=e/2,o=Math.PI*(3*(a+c)-Math.sqrt((3*a+c)*(a+3*c)));return n.toLowerCase()===r.g?o/4:n.toLowerCase()===r.e?o/2:o}(t,n,c);case r.c.PARALLELOGRAM:return a(t,n);default:return}}},,,function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return f}));var r=n(3),c=n(7),a=n(0),o=n(2),i=[],u=[],l=[],s=function(e,t){miro.board.widgets.update({id:e,metadata:Object(r.a)({},a.a,Object(c.a)({},t))})},d=function(e){i.splice(0,i.length),e.forEach((function(e){var t,n,r,c=(null===(t=e.metadata[a.a])||void 0===t?void 0:t.areaType)||a.d,u=(null===(n=e.metadata[a.a])||void 0===n?void 0:n.area)||0,d=(null===(r=e.metadata[a.a])||void 0===r?void 0:r.perimeter)||0;if(a.b.includes(c)||(c=a.d),Object.values(a.c).includes(e.style.shapeType)){var f=Object(o.a)(e.style.shapeType,e.width,e.height,c),p=Object(o.c)(e.style.shapeType,e.width,e.height,c);if(function(e,t,n,r){i.push({id:e.id,areaType:t,area:n,perimeter:r,width:e.width,height:e.height,groupId:e.groupId,shapeType:e.style.shapeType})}(e,c,f,p),e.groupId){var h=l[e.groupId]||0;l[e.groupId]=h+f}u===f&&d===p&&e.metadata[a.a].areaType===c||s(e.id,{calculatedArea:f,calculatedPerimeter:p,areaType:c})}}))},f=function(e){u.splice(0,u.length),e.forEach((function(e){var t,n=(null===(t=e.metadata[a.a])||void 0===t?void 0:t.length)||0,r=e.startPosition,c=e.endPosition,i=Object(o.b)(r.x,r.y,c.x,c.y);i!==n&&s(e.id,{length:i})}))}},,,,,,,,,function(e,t,n){e.exports=n(22)},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),a=n(6),o=n.p+"static/media/logo.6ce24c58.svg",i=(n(15),n(9),n(11)),u=n.n(i),l=(n(20),n(0)),s=n(5),d=n(3),f=n(2),p=100,h=100,b=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r,a,o,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:l.d,n=i.length>1&&void 0!==i[1]?i[1]:l.c.RECTANGLE,e.next=4,miro.board.viewport.get();case 4:r=e.sent,a=r.x+r.width/2,o=r.y+r.height/2,miro.board.widgets.create({type:l.h,text:"".concat(t.charAt(0).toUpperCase()+t.slice(1)," ").concat(l.i[n]),height:h,width:p,metadata:Object(d.a)({},l.a,{area:Object(f.a)(n,p,h,t),perimeter:Object(f.c)(n,p,h,t),areaType:t}),style:{shapeType:n},x:a,y:o}),miro.board.viewport.get({viewport:{x:a,y:o}});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n(1);function E(){miro.onReady((function(){miro.addListener("SELECTION_UPDATED",(function(e){console.log("SELECTION_UPDATED"),console.log(e)}))})),console.log(s.c),console.log(s.b),console.log(s.a);var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,miro.board.widgets.get({type:l.h});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(g.jsx)("p",{children:"App version 1.15"}),Object(g.jsx)("button",{onClick:function(){return b(l.d,l.c.ELLIPSE)},children:"Create Full Ellipse"}),Object(g.jsx)("button",{onClick:function(){return b(l.e,l.c.ELLIPSE)},children:"Create Half Ellipse"}),Object(g.jsx)("button",{onClick:function(){return b(l.g,l.c.ELLIPSE)},children:"Create Quarter Ellipse"}),Object(g.jsx)("button",{onClick:function(){return b(l.d,l.c.RECTANGLE)},children:"Create Full Quadrilateral"}),Object(g.jsx)("button",{onClick:function(){return b(l.d,l.c.PARALLELOGRAM)},children:"Create Full Parallelogram"}),Object(g.jsx)("button",{onClick:function(){return b(l.e,l.c.PARALLELOGRAM)},children:"Create Half Parallelogram"}),Object(g.jsx)("button",{onClick:function(){return b(l.d,l.c.TRIANGLE)},children:"Create Full Triangle"}),Object(g.jsx)("button",{onClick:function(){return b(l.e,l.c.TRIANGLE)},children:"Create Half Triangle"}),Object(g.jsx)("button",{onClick:function(){return e()},children:"Click Here"}),Object(g.jsx)("button",{onClick:function(){return updateStyle()},children:"Change Style"})]})})}u.a.render(Object(g.jsx)(E,{}),document.getElementById("root"))}],[[14,2,4]]]);
//# sourceMappingURL=app.4bcfb09a.chunk.js.map