(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[0],[function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"i",(function(){return d}));var r="SHAPE",c="LINE",a="full",o="quarter",i="half",u="3074457358398558776",s=[a,i,o],l={RECTANGLE:3,ELLIPSE:4,TRIANGLE:5,PARALLELOGRAM:10},d={3:"Rectangle",4:"Ellipse",5:"Triangle",10:"Parallelogram"}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return u}));var r=n(0),c=function(t,e){return t*e},a=function(t,e){return 2*t+2*e},o=function(t,e,n,r){return Math.sqrt(Math.pow(n-t,2)+Math.pow(r-e,2))},i=function(t,e,n,a){switch(t){case r.c.RECTANGLE:return c(e,n);case r.c.TRIANGLE:return function(t,e,n){var c=t*e/2;return n.toLowerCase()===r.e?c/2:c}(e,n,a);case r.c.ELLIPSE:return function(t,e,n){var c=e/2,a=t/2,o=Math.PI*c*a;return n.toLowerCase()===r.g?o/4:n.toLowerCase()===r.e?o/2:o}(e,n,a);case r.c.PARALLELOGRAM:return c(e,n);default:return}},u=function(t,e,n,c){switch(t){case r.c.RECTANGLE:return a(e,n);case r.c.TRIANGLE:return function(t,e,n){var c=t+Math.sqrt(Math.pow(t,2)+4*Math.pow(e,2));return n.toLowerCase()===r.e?c/2:c}(e,n,c);case r.c.ELLIPSE:return function(t,e,n){var c=e/2,a=t/2,o=Math.PI*(3*(a+c)-Math.sqrt((3*a+c)*(a+3*c)));return n.toLowerCase()===r.g?o/4:n.toLowerCase()===r.e?o/2:o}(e,n,c);case r.c.PARALLELOGRAM:return a(e,n);default:return}}},,,,function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return h}));var r=n(1),c=n.n(r),a=n(5),o=n(4),i=n(2),u=n(0),s=n(7),l=200,d=200,f=function(){var t=Object(o.a)(c.a.mark((function t(e){var n,r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({id:e});case 2:n=t.sent[0],Object(s.a)(n.style.shapeType)?(r=Object(i.a)(n.style.shapeType,n.width,n.height,u.d),o=Object(i.c)(n.style.shapeType,n.width,n.height,u.d),miro.board.widgets.update({id:n.id,metadata:Object(a.a)({},u.a,{area:r,perimeter:o,areaType:u.d})})):miro.showErrorNotification("Shape not supported for SpaceMeasure");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({id:e});case 2:n=t.sent[0],miro.board.widgets.update({id:n.id,metadata:Object(a.a)({},u.a,{length:Object(i.b)(n.startPosition.x,n.startPosition.y,n.endPosition.x,n.endPosition.y)})});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(c.a.mark((function t(){var e,n,r,o,s,f=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.length>0&&void 0!==f[0]?f[0]:u.d,n=f.length>1&&void 0!==f[1]?f[1]:u.c.RECTANGLE,t.next=4,miro.board.viewport.get();case 4:r=t.sent,o=r.x+r.width/2,s=r.y+r.height/2,miro.board.widgets.create({type:u.h,text:"".concat(e.charAt(0).toUpperCase()+e.slice(1)," ").concat(u.i[n]),height:d,width:l,metadata:Object(a.a)({},u.a,{area:Object(i.a)(n,l,d,e),perimeter:Object(i.c)(n,l,d,e),areaType:e}),style:{shapeType:n,borderStyle:1},x:o,y:s}),miro.board.viewport.get({viewport:{x:o,y:s}});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(t,e){if(e===u.h)return f(t);if(e===u.f)return p(t);throw new Error("Widget not supported on SpaceMeasure.")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),c=function(t){return Object.values(r.c).includes(t)}},,,,,,function(t,e,n){t.exports=n(22)},function(t,e,n){},,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(4),o=n.p+"static/media/logo.6ce24c58.svg",i=(n(14),n(9),n(11)),u=n.n(i),s=(n(19),n(0)),l=n(6),d=n(3);function f(){miro.onReady((function(){miro.addListener("SELECTION_UPDATED",(function(t){console.log("SELECTION_UPDATED"),console.log(t)}))}));var t=function(){var t=Object(a.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({type:s.h});case 2:return e=t.sent,console.log(e),t.next=6,miro.board.widgets.get({type:constants.LINE});case 6:n=t.sent,console.log(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(d.jsx)("p",{children:"App version 1.15"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.d,s.c.ELLIPSE)},children:"Create Full Ellipse"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.e,s.c.ELLIPSE)},children:"Create Half Ellipse"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.g,s.c.ELLIPSE)},children:"Create Quarter Ellipse"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.d,s.c.RECTANGLE)},children:"Create Full Quadrilateral"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.d,s.c.PARALLELOGRAM)},children:"Create Full Parallelogram"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.e,s.c.PARALLELOGRAM)},children:"Create Half Parallelogram"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.d,s.c.TRIANGLE)},children:"Create Full Triangle"}),Object(d.jsx)("button",{onClick:function(){return Object(l.b)(s.e,s.c.TRIANGLE)},children:"Create Half Triangle"}),Object(d.jsx)("button",{onClick:function(){return t()},children:"Click Here"}),Object(d.jsx)("button",{onClick:function(){return updateStyle()},children:"Change Style"})]})})}u.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}],[[13,2,4]]]);
//# sourceMappingURL=app.18c2ad07.chunk.js.map