(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),i=(n(90),n(16)),s=n(20),u=n.n(s),l=n(38),d=n(28),f=n(160),j=n(165),p=n(6);function h(e){var t=function(t){"Enter"===t.key?""===t.target.value.trim()?alert("\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e"):(t.preventDefault(),e.handleSubmit(t),e.setInput(""),t.target.value=""):e.setInput(t.target.value)};return Object(p.jsx)(j.a,{onChange:t,onKeyPress:t,id:"outlined-basic",label:"Things to be done",variant:"outlined"})}var b=n(161),O=n(74),v=n.n(O),g=n(75),k=n.n(g);n(96);function x(e){return Object(p.jsxs)("div",{className:"filters",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(b.a,{onClick:function(){return e.filterTodos("all")},variant:"all"===e.filter?"outlined":"text",color:"primary",children:"All"}),Object(p.jsx)(b.a,{onClick:function(){return e.filterTodos("active")},variant:"active"===e.filter?"outlined":"text",color:"primary",children:"Active"}),Object(p.jsx)(b.a,{onClick:function(){return e.filterTodos("done")},variant:"done"===e.filter?"outlined":"text",color:"primary",children:"Done"})]}),Object(p.jsxs)("div",{className:"arrows",children:[Object(p.jsx)("p",{className:"datesort",children:"Sort by date"}),Object(p.jsx)(v.a,{onClick:function(){return e.setOrder("desc")},className:"arrow"}),Object(p.jsx)(k.a,{onClick:function(){return e.setOrder("asc")},className:"arrow"})]})]})}var m=n(171),C=n(168),y=n(164),S=n(76),w=n.n(S),E=n(162);n(98);function I(e){return Object(p.jsxs)(E.a,{className:"listitem",divider:!0,children:[Object(p.jsx)(C.a,{checked:e.todoChecked,onChange:function(t){return e.handleCheckBoxChecked(t,e.todoId)}}),e.idToBeEdited===e.todoId?Object(p.jsx)(j.a,{label:e.todoMessage,onChange:e.handleEditInputChange,onKeyDown:e.handleEditInputChange,id:"standard-basic"}):Object(p.jsx)(m.a,{onDoubleClick:function(){return e.setIdToBeEdited(e.todoId)},primary:e.todoMessage}),Object(p.jsx)("p",{children:e.todoDate}),Object(p.jsx)(y.a,{children:Object(p.jsx)(w.a,{className:"delete",onClick:function(t){return e.handleDeleteOne(t,e.todoId)}})})]})}var T=n(166);n(99);function D(e){return Object(p.jsx)(T.a,{onChange:e.changePage,className:"pages",count:e.countPages,color:"primary"})}var N=n(170),B=n(167),M=n(39),P=n.n(M);function F(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),s=Object(i.a)(o,2),j=s[0],b=s[1],O=Object(c.useState)([]),v=Object(i.a)(O,2),g=v[0],k=v[1],m=Object(c.useState)(0),C=Object(i.a)(m,2),y=(C[0],C[1],Object(c.useState)("all")),S=Object(i.a)(y,2),w=S[0],E=S[1],T=Object(c.useState)(-1),M=Object(i.a)(T,2),F=M[0],A=M[1],J=Object(c.useState)(""),K=Object(i.a)(J,2),L=K[0],H=K[1],q=Object(c.useState)(1),z=Object(i.a)(q,2),G=z[0],Q=z[1],R=Object(c.useState)(!1),U=Object(i.a)(R,2),V=U[0],W=U[1],X=Object(c.useState)(""),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],_=Object(c.useState)("asc"),ee=Object(i.a)(_,2),te=ee[0],ne=ee[1],ce=function e(t){var n=Object(d.a)(j);switch(t){case"all":k(Object(d.a)(j.slice(5*(G-1),5*(G-1)+5))),E("all");break;case"active":k(n.filter((function(e){return!1===e.checked})).slice(5*(G-1),5*(G-1)+5)),E("active"),e();break;case"done":k(n.filter((function(e){return!0===e.checked})).slice(5*(G-1),5*(G-1)+5)),E("done"),e()}},ae=function(e,t){!function(e){fe.apply(this,arguments)}(j.find((function(e){return e.id===t})))},re=function(e,t){var n=Object(d.a)(j),c=n.find((function(e){return e.id===t}));c.checked=e.target.checked,function(e,t){je.apply(this,arguments)}(c,e.target.checked),b(Object(d.a)(n))},oe=function(e){"Enter"===e.key?""===e.target.value.trim()?alert("\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e"):(e.preventDefault(),ie()):"Escape"===e.key?A(-1):H(e.target.value)},ie=function(){var e=Object(d.a)(j).find((function(e){return e.id===F}));e.message=L,function(e,t){pe.apply(this,arguments)}(e,L,"name"),A(-1)},se=function(e){switch(e){case"all":return Math.ceil(j.length/5);case"active":return Math.ceil(j.filter((function(e){return!1===e.checked})).length/5);case"done":return Math.ceil(j.filter((function(e){return!0===e.checked})).length/5)}};function ue(e){return le.apply(this,arguments)}function le(){return(le=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/5?order="+t);case 3:n=e.sent,c=n.data,b(c.map((function(e,t){return{id:t,message:e.name,checked:e.done,date:e.createdAt,uuid:e.uuid}}))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),W(!0),$(e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function de(){return(de=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={name:a,done:!1},e.next=4,P.a.post("https://todo-api-learning.herokuapp.com/v1/task/5",t);case 4:ue(te),W(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),W(!0),$(e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function fe(){return(fe=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.delete("https://todo-api-learning.herokuapp.com/v1/task/5/"+t.uuid);case 3:n=e.sent,console.log(n),ue(te),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),W(!0),$(e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function je(){return(je=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.patch("https://todo-api-learning.herokuapp.com/v1/task/5/"+t.uuid,{done:n});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),W(!0),$(e.t0.toString());case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function pe(){return(pe=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.patch("https://todo-api-learning.herokuapp.com/v1/task/5/"+t.uuid,{name:n});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),W(!0),$(e.t0.toString());case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){ce(w)}),[j]),Object(c.useEffect)((function(){ce(w)}),[G]),Object(c.useEffect)((function(){ce(w)}),[w]),Object(c.useEffect)((function(){se(w),console.log(j)}),[w]),Object(c.useEffect)((function(){ue(te)}),[te]),Object(c.useEffect)((function(){ue(te)}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{handleSubmit:function(e){!function(){de.apply(this,arguments)}()},setInput:r}),Object(p.jsx)(x,{filter:w,setFilteredTodos:k,filteredTodos:g,filterTodos:ce,setOrder:ne}),Object(p.jsx)(f.a,{children:g.map((function(e){return Object(p.jsx)(I,{todoId:e.id,handleCheckBoxChecked:re,todoChecked:e.checked,idToBeEdited:F,todoMessage:e.message,handleEditInputChange:oe,setIdToBeEdited:A,todoDate:e.date,handleDeleteOne:ae},e.id)}))}),Object(p.jsx)("p",{className:"clear",onClick:function(){var e=Object(d.a)(j).filter((function(e){return!1===e.checked}));b(Object(d.a)(e))},children:"clear completed"}),Object(p.jsx)(D,{changePage:function(e,t){Q(t)},countPages:se(w)}),Object(p.jsx)(N.a,{open:V,autoHideDuration:5e3,onClose:function(){return W(!1)},children:Object(p.jsx)(B.a,{onClose:function(){return W(!1)},severity:"error",children:Z})})]})}n(118),n(119);var A=function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),a=n[0];return n[1],console.log(a),Object(p.jsx)("section",{className:"section",children:Object(p.jsx)(F,{})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),J()},90:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.4f61216b.chunk.js.map