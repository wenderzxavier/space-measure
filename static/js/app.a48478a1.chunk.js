(this["webpackJsonpspace-measure"]=this["webpackJsonpspace-measure"]||[]).push([[0],{10:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(6),a=n(2),s=n.p+"static/media/logo.6ce24c58.svg",i=(n(10),n(4),n(7)),u=n.n(i),d=(n(15),n(1));function l(){function e(){var e=Math.round(16777215*Math.random());return"rgb("+(e>>16)+", "+(e>>8&255)+", "+(255&e)+")"}miro.onReady((function(){miro.addListener("SELECTION_UPDATED",(function(e){console.log("SELECTION_UPDATED"),console.log(e)}))}));var t=function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,miro.board.widgets.get({id:"3074457358467686032"});case 2:n=t.sent,console.log("Chegou aqui 2"),miro.board.widgets.update({id:n[0].id,style:Object(c.a)(Object(c.a)({},n[0].style),{},{background:"linear-gradient(90deg, ".concat(e()," 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)")})}),console.log("Chegou aqui 3");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,miro.board.widgets.get({type:"shape"});case 2:return t=e.sent,console.log(t),e.next=6,miro.board.widgets.get({type:"frame"});case 6:return n=e.sent,console.log(n),e.next=10,miro.board.widgets.get({type:"curve"});case 10:return o=e.sent,console.log(o),e.next=14,miro.board.widgets.get({type:"line"});case 14:c=e.sent,console.log(c);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(d.jsx)("p",{children:"App version 1.14"}),Object(d.jsx)("button",{onClick:function(){return n()},children:"Click Here"}),Object(d.jsx)("button",{onClick:function(){miro.board.widgets.get({type:constants.SHAPE}).then((function(e){console.log("Chegou aqui 1"),e.forEach((function(e){t(e.id)}))}))},children:"Change Style"})]})})}u.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,2,4]]]);
//# sourceMappingURL=app.a48478a1.chunk.js.map