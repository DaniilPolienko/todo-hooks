(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{137:function(e,t,n){},219:function(e,t,n){},225:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},249:function(e,t){},251:function(e,t){},265:function(e,t){},267:function(e,t){},295:function(e,t){},297:function(e,t){},298:function(e,t){},303:function(e,t){},305:function(e,t){},324:function(e,t){},336:function(e,t){},339:function(e,t){},360:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(13),c=n.n(r),s=(n(219),n(74)),o=n(25),i=n.n(o),u=n(42),l=n(12),d=n(398),j=n(409),b=n(3);function p(e){var t=e.handleSubmit,n=e.setInput,a=e.setError,r=e.setOpen,c=function(e){"Enter"===e.key?""===e.target.value.trim()?(a("\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e"),r(!0)):(e.preventDefault(),t(e),n(""),e.target.value=""):n(e.target.value)};return Object(b.jsx)(j.a,{onChange:c,onKeyPress:c,id:"outlined-basic",label:"Things to be done",variant:"outlined"})}var f=n(399),m=n(200),h=n.n(m),O=n(201),x=n.n(O);n(225);function v(e){var t=e.setFilter,n=e.setOrder,a=e.filter;return Object(b.jsxs)("div",{className:"filters",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)(f.a,{onClick:function(){return t(null)},variant:null===a?"outlined":"text",color:"primary",children:"All"}),Object(b.jsx)(f.a,{onClick:function(){return t(!1)},variant:!1===a?"outlined":"text",color:"primary",children:"Active"}),Object(b.jsx)(f.a,{onClick:function(){return t(!0)},variant:!0===a?"outlined":"text",color:"primary",children:"Done"})]}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)("p",{className:"datesort",children:"Sort by date"}),Object(b.jsx)(h.a,{onClick:function(){return n("desc")},className:"arrow"}),Object(b.jsx)(x.a,{onClick:function(){return n("asc")},className:"arrow"})]})]})}var g=n(402),k=n(412),y=n(403),C=n(202),S=n.n(C),w=n(400);n(227);function N(e){var t=e.todo,n=e.handleSubmitCard,r=e.handleDelete,c=e.handleCheckBoxChecked,s=Object(a.useState)(!1),o=Object(l.a)(s,2),i=o[0],u=o[1],d=function(e){if("Enter"===e.key)return""===e.target.value.trim()?alert("\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e"):(e.preventDefault(),u(!1),n({id:t.id,message:e.target.value}));"Escape"===e.key&&u(!1)};return Object(b.jsxs)(w.a,{className:"listitem",divider:!0,children:[Object(b.jsx)(k.a,{checked:t.checked,onChange:function(e){return c(e,{id:t.id,done:e.target.checked})}}),i?Object(b.jsx)(j.a,{autoFocus:!0,onBlur:function(){return u(!1)},label:t.message,onChange:d,onKeyDown:d,id:"standard-basic"}):Object(b.jsx)(g.a,{onDoubleClick:function(){return u(!0)},primary:t.message}),Object(b.jsx)("p",{children:t.date}),Object(b.jsx)(y.a,{children:Object(b.jsx)(S.a,{className:"delete",onClick:function(e){return r(t.id)}})})]})}var D=n(410);n(228);function I(e){var t=e.changePage,n=e.count;return Object(b.jsx)(D.a,{onChange:t,className:"pages",count:Math.ceil(n/5),color:"primary"})}var E=n(414),F=n(411),q=n(23),P=n.n(q),W=n(404),A=(n(137),n(14));function T(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),j=Object(l.a)(o,2),f=j[0],m=j[1],h=Object(a.useState)(null),O=Object(l.a)(h,2),x=O[0],g=O[1],k=Object(a.useState)(1),y=Object(l.a)(k,2),C=y[0],S=y[1],w=Object(a.useState)(!1),D=Object(l.a)(w,2),q=D[0],T=D[1],L=Object(a.useState)(""),z=Object(l.a)(L,2),B=z[0],U=z[1],H=Object(a.useState)("asc"),R=Object(l.a)(H,2),J=R[0],K=R[1],V=Object(a.useState)(1),M=Object(l.a)(V,2),G=M[0],Q=M[1],X=Object(a.useState)(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],_=Object(a.useState)(""),ee=Object(l.a)(_,2),te=ee[0],ne=ee[1],ae=n(138),re=localStorage.getItem("token"),ce="https://todowebapi-sequelize.herokuapp.com/items";P.a.defaults.baseURL="https://todowebapi-sequelize.herokuapp.com",P.a.defaults.headers.common.Authorization=re;var se=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()({method:"delete",url:"/item",params:{id:t}});case 2:ue(C);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e,t){var n=Object(s.a)(f);n.find((function(e){return e.id===t.id})).checked=e.target.checked,je(t),m(Object(s.a)(n))},ie=function(e){var t=Object(s.a)(f);t.find((function(t){return t.id===e.id})).message=e.message,je(e),m(Object(s.a)(t))};function ue(){return le.apply(this,arguments)}function le(){return(le=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(ce,{params:{page:C,filter:x,sort:J}});case 2:t=e.sent,n=t.data,m(n.rows.map((function(e,t){return{message:e.message,checked:e.done,date:e.createdAt,id:e.id,uuid:e.uuid}}))),Q(n.count);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()({method:"post",url:"/item",data:{message:r}});case 2:ue(C),T(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e){return be.apply(this,arguments)}function be(){return(be=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P()({method:"patch",url:"/item",data:{task:t}});case 3:ue(C),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),ue(C);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return P.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(U(e.response.data.error||e.response.data.errors),T(!0),"jwt expired"!==e.response.data.error&&"jwt must be provided"!==e.response.data.error&&"Access Denied"!==e.response.data.error&&"jwt malformed"!==e.response.data.error||$(!0)),Promise.reject(e)})),Object(a.useEffect)((function(){ue(C)}),[C,x,J]),Object(a.useEffect)((function(){try{var e=ae.verify(re,"secret");ne(e.firstName)}catch(B){$(!0)}}),[]),Z?Object(b.jsx)(A.a,{to:"/auth"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"logout",children:te}),Object(b.jsx)(W.a,{className:"logout",href:"/auth",variant:"body2",onClick:function(){return localStorage.removeItem("token")},children:"Log out"}),Object(b.jsx)(p,{handleSubmit:function(e){!function(){de.apply(this,arguments)}()},setInput:c,setError:U,setOpen:T}),Object(b.jsx)(v,{filter:x,setOrder:K,getTasks:ue,setFilter:g}),Object(b.jsx)(d.a,{children:f.map((function(e){return Object(b.jsx)(N,{todo:e,handleCheckBoxChecked:oe,handleSubmitCard:ie,handleDelete:se},e.id)}))}),1===C&G<6?Object(b.jsx)("div",{}):Object(b.jsx)(I,{changePage:function(e,t){S(t)},count:G}),Object(b.jsx)(E.a,{open:q,autoHideDuration:5e3,onClose:function(){return T(!1)},children:Object(b.jsx)(F.a,{onClose:function(){return T(!1)},severity:"error",children:B})})]})}var L=n(407),z=n(408),B=n(405),U=n(406),H=Object(B.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function R(){var e=H(),t=Object(a.useState)(!1),r=Object(l.a)(t,2),c=r[0],s=r[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),p=d[0],m=d[1],h=Object(a.useState)(""),O=Object(l.a)(h,2),x=O[0],v=O[1],g=Object(a.useState)(),k=Object(l.a)(g,2),y=k[0],C=k[1],S=Object(a.useState)(!1),w=Object(l.a)(S,2),N=w[0],D=w[1],I=Object(a.useState)(!1),q=Object(l.a)(I,2),W=q[0],T=q[1],B=n(138);P.a.defaults.baseURL="https://todowebapi-sequelize.herokuapp.com";var R=function(e,t){t(e.target.value)};function J(){return(J=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,P()({method:"post",url:"/login",data:{email:p,password:x}});case 4:n=e.sent,localStorage.setItem("token",n.data.token),s(!0),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=localStorage.getItem("token");try{B.verify(e,"secret")&&s(!0)}catch(y){return Object(b.jsx)(A.a,{to:"/auth"})}}),[]),c?Object(b.jsx)(A.a,{to:"/todo-hooks"}):(P.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(C(e.response.data.error||e.response.data.errors),D(!0)),Promise.reject(e)})),c?Object(b.jsx)(A.a,{to:"/todo-hooks"}):W?Object(b.jsx)(A.a,{to:"/signup"}):Object(b.jsxs)(U.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(L.a,{}),Object(b.jsx)("div",{className:e.paper,children:Object(b.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){return function(e){return J.apply(this,arguments)}(e)},children:[Object(b.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return R(e,m)}}),Object(b.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return R(e,v)}}),Object(b.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(b.jsx)(z.a,{container:!0,children:Object(b.jsx)(z.a,{item:!0,children:Object(b.jsx)("p",{onClink:function(){return T(!0)},variant:"body2",children:"Sign Up"})})})]})}),Object(b.jsx)(E.a,{open:N,autoHideDuration:5e3,onClose:function(){return D(!1)},children:Object(b.jsx)(F.a,{onClose:function(){return D(!1)},severity:"error",children:y})})]}))}n(357).config();var J=Object(B.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function K(){var e=J(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),o=Object(l.a)(s,2),d=o[0],p=o[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),O=h[0],x=h[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),k=g[0],y=g[1],C=Object(a.useState)(),S=Object(l.a)(C,2),w=S[0],N=S[1],D=Object(a.useState)(!1),I=Object(l.a)(D,2),q=I[0],T=I[1],B=Object(a.useState)(!1),H=Object(l.a)(B,2),R=H[0],K=H[1];P.a.defaults.baseURL="https://todowebapi-sequelize.herokuapp.com";var V=function(e,t){t(e.target.value)};function M(){return(M=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,P()({method:"post",url:"/signup",data:{firstName:r,lastName:d,email:O,password:k}});case 4:n=e.sent,localStorage.setItem("token",n.data.token),K(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),N(e.t0),T(!0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return R?Object(b.jsx)(A.a,{to:"/todo-hooks"}):(P.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(N(e.response.data.error||e.response.data.errors),T(!0)),Promise.reject(e)})),Object(b.jsxs)(U.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(L.a,{}),Object(b.jsx)("div",{className:e.paper,children:Object(b.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){return function(e){return M.apply(this,arguments)}(e)},children:[Object(b.jsxs)(z.a,{container:!0,spacing:2,children:[Object(b.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(j.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return V(e,c)}})}),Object(b.jsx)(z.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return V(e,p)}})}),Object(b.jsx)(z.a,{item:!0,xs:12,children:Object(b.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return V(e,x)}})}),Object(b.jsx)(z.a,{item:!0,xs:12,children:Object(b.jsx)(j.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return V(e,y)}})})]}),Object(b.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(b.jsx)(z.a,{container:!0,justify:"flex-end",children:Object(b.jsx)(z.a,{item:!0,children:Object(b.jsx)(W.a,{href:"/auth",variant:"body2",children:"Already have an account? Sign in"})})})]})}),Object(b.jsx)(E.a,{open:q,autoHideDuration:5e3,onClose:function(){return T(!1)},children:Object(b.jsx)(F.a,{onClose:function(){return T(!1)},severity:"error",children:w})})]}))}var V=n(48);n(360);var M=function(e){return Object(b.jsx)(V.b,{basename:"/todo-hooks",children:Object(b.jsx)(V.a,{children:Object(b.jsx)("section",{className:"section",children:Object(b.jsxs)(A.d,{children:[Object(b.jsx)(A.b,{exact:!0,path:"/todo-hooks",children:Object(b.jsx)(T,{})}),Object(b.jsx)(A.b,{path:"/auth",children:Object(b.jsx)(R,{})}),Object(b.jsx)(A.b,{path:"/signup",children:Object(b.jsx)(K,{})})]})})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,415)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};c.a.render(Object(b.jsx)(V.b,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),G()}},[[361,1,2]]]);
//# sourceMappingURL=main.d248a759.chunk.js.map