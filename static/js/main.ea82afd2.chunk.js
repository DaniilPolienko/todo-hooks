(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{135:function(e,t,n){},216:function(e,t,n){},222:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},246:function(e,t){},248:function(e,t){},262:function(e,t){},264:function(e,t){},292:function(e,t){},294:function(e,t){},295:function(e,t){},300:function(e,t){},302:function(e,t){},321:function(e,t){},333:function(e,t){},336:function(e,t){},357:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(13),c=n.n(r),s=(n(216),n(73)),i=n(25),o=n.n(i),u=n(42),l=n(12),j=n(396),d=n(405),b=n(3);function p(e){var t=e.handleSubmit,n=e.setInput,a=e.setError,r=e.setOpen,c=function(e){"Enter"===e.key?""===e.target.value.trim()?(a("\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e"),r(!0)):(e.preventDefault(),t(e),n(""),e.target.value=""):n(e.target.value)};return Object(b.jsx)(d.a,{onChange:c,onKeyPress:c,id:"outlined-basic",label:"Things to be done",variant:"outlined"})}var f=n(397),m=n(198),O=n.n(m),h=n(199),x=n.n(h);n(222);function v(e){var t=e.setFilter,n=e.setOrder,a=e.filter;return Object(b.jsxs)("div",{className:"filters",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)(f.a,{onClick:function(){return t(null)},variant:null===a?"outlined":"text",color:"primary",children:"All"}),Object(b.jsx)(f.a,{onClick:function(){return t(!1)},variant:!1===a?"outlined":"text",color:"primary",children:"Active"}),Object(b.jsx)(f.a,{onClick:function(){return t(!0)},variant:!0===a?"outlined":"text",color:"primary",children:"Done"})]}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)("p",{className:"datesort",children:"Sort by date"}),Object(b.jsx)(O.a,{onClick:function(){return n("desc")},className:"arrow"}),Object(b.jsx)(x.a,{onClick:function(){return n("asc")},className:"arrow"})]})]})}var g=n(411),k=n(408),y=n(400),C=n(200),S=n.n(C),w=n(398);n(224);function N(e){var t=e.todo,n=e.handleSubmitCard,r=e.handleDelete,c=e.handleCheckBoxChecked,s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],u=i[1],j=function(e){if("Enter"===e.key)return""===e.target.value.trim()?alert("\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e"):(e.preventDefault(),u(!1),n({id:t.id,message:e.target.value}));"Escape"===e.key&&u(!1)};return Object(b.jsxs)(w.a,{className:"listitem",divider:!0,children:[Object(b.jsx)(k.a,{checked:t.checked,onChange:function(e){return c(e,{id:t.id,done:e.target.checked})}}),o?Object(b.jsx)(d.a,{autoFocus:!0,onBlur:function(){return u(!1)},label:t.message,onChange:j,onKeyDown:j,id:"standard-basic"}):Object(b.jsx)(g.a,{onDoubleClick:function(){return u(!0)},primary:t.message}),Object(b.jsx)("p",{children:t.date}),Object(b.jsx)(y.a,{children:Object(b.jsx)(S.a,{className:"delete",onClick:function(e){return r(t.id)}})})]})}var D=n(406);n(225);function I(e){var t=e.changePage,n=e.count;return Object(b.jsx)(D.a,{onChange:t,className:"pages",count:Math.ceil(n/5),color:"primary"})}var E=n(410),F=n(407),q=n(23),P=n.n(q),W=(n(135),n(14));function A(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)([]),d=Object(l.a)(i,2),m=d[0],O=d[1],h=Object(a.useState)(null),x=Object(l.a)(h,2),g=x[0],k=x[1],y=Object(a.useState)(1),C=Object(l.a)(y,2),S=C[0],w=C[1],D=Object(a.useState)(!1),q=Object(l.a)(D,2),A=q[0],T=q[1],L=Object(a.useState)(""),z=Object(l.a)(L,2),B=z[0],U=z[1],H=Object(a.useState)("asc"),R=Object(l.a)(H,2),J=R[0],K=R[1],V=Object(a.useState)(1),M=Object(l.a)(V,2),G=M[0],Q=M[1],X=Object(a.useState)(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],_=Object(a.useState)(""),ee=Object(l.a)(_,2),te=ee[0],ne=ee[1],ae=n(136),re=localStorage.getItem("token"),ce="https://todowebapi-sequelize.herokuapp.com/items";P.a.defaults.baseURL="https://todowebapi-sequelize.herokuapp.com",P.a.defaults.headers.common.Authorization=re;var se=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()({method:"delete",url:"/item",params:{id:t}});case 2:ue(S);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(e,t){var n=Object(s.a)(m);n.find((function(e){return e.id===t.id})).checked=e.target.checked,de(t),O(Object(s.a)(n))},oe=function(e){var t=Object(s.a)(m);t.find((function(t){return t.id===e.id})).message=e.message,de(e),O(Object(s.a)(t))};function ue(){return le.apply(this,arguments)}function le(){return(le=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(ce,{params:{page:S,filter:g,sort:J}});case 2:t=e.sent,n=t.data,O(n.rows.map((function(e,t){return{message:e.message,checked:e.done,date:e.createdAt,id:e.id,uuid:e.uuid}}))),Q(n.count);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return(je=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()({method:"post",url:"/item",data:{message:r}});case 2:ue(S),T(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return be.apply(this,arguments)}function be(){return(be=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P()({method:"patch",url:"/item",data:{task:t}});case 3:ue(S),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),ue(S);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return P.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(U(e.response.data.error||e.response.data.errors),T(!0),"jwt expired"!==e.response.data.error&&"jwt must be provided"!==e.response.data.error&&"Access Denied"!==e.response.data.error&&"jwt malformed"!==e.response.data.error||$(!0)),Promise.reject(e)})),Object(a.useEffect)((function(){ue(S)}),[S,g,J]),Object(a.useEffect)((function(){try{var e=ae.verify(re,"secret");ne(e.firstName)}catch(B){$(!0)}}),[]),Z?(localStorage.removeItem("token"),Object(b.jsx)(W.a,{to:"/auth"})):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"logout",children:[Object(b.jsx)("p",{children:te}),Object(b.jsx)(f.a,{onClick:function(){return $(!0)},variant:"body2",children:"Log out"})]}),Object(b.jsx)(p,{handleSubmit:function(e){!function(){je.apply(this,arguments)}()},setInput:c,setError:U,setOpen:T}),Object(b.jsx)(v,{filter:g,setOrder:K,getTasks:ue,setFilter:k}),Object(b.jsx)(j.a,{children:m.map((function(e){return Object(b.jsx)(N,{todo:e,handleCheckBoxChecked:ie,handleSubmitCard:oe,handleDelete:se},e.id)}))}),1===S&G<6?Object(b.jsx)("div",{}):Object(b.jsx)(I,{changePage:function(e,t){w(t)},count:G}),Object(b.jsx)(E.a,{open:A,autoHideDuration:5e3,onClose:function(){return T(!1)},children:Object(b.jsx)(F.a,{onClose:function(){return T(!1)},severity:"error",children:B})})]})}var T=n(403),L=n(404),z=n(401),B=n(402),U=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function H(){var e=U(),t=Object(a.useState)(!1),r=Object(l.a)(t,2),c=r[0],s=r[1],i=Object(a.useState)(""),j=Object(l.a)(i,2),p=j[0],m=j[1],O=Object(a.useState)(""),h=Object(l.a)(O,2),x=h[0],v=h[1],g=Object(a.useState)(),k=Object(l.a)(g,2),y=k[0],C=k[1],S=Object(a.useState)(!1),w=Object(l.a)(S,2),N=w[0],D=w[1],I=Object(a.useState)(!1),q=Object(l.a)(I,2),A=q[0],z=q[1],H=n(136);P.a.defaults.baseURL="https://todowebapi-sequelize.herokuapp.com";var R=function(e,t){t(e.target.value)};function J(){return(J=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,P()({method:"post",url:"/login",data:{email:p,password:x}});case 4:n=e.sent,localStorage.setItem("token",n.data.token),s(!0),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=localStorage.getItem("token");try{H.verify(e,"secret")&&s(!0)}catch(y){return Object(b.jsx)(W.a,{to:"/auth"})}}),[]),c?Object(b.jsx)(W.a,{to:"/todo-hooks"}):(P.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(C(e.response.data.error||e.response.data.errors),D(!0)),Promise.reject(e)})),c?Object(b.jsx)(W.a,{to:"/todo-hooks"}):A?Object(b.jsx)(W.a,{to:"/signup"}):Object(b.jsxs)(B.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(T.a,{}),Object(b.jsx)("div",{className:e.paper,children:Object(b.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){return function(e){return J.apply(this,arguments)}(e)},children:[Object(b.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return R(e,m)}}),Object(b.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return R(e,v)}}),Object(b.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(b.jsx)(L.a,{container:!0,children:Object(b.jsx)(L.a,{item:!0,children:Object(b.jsx)(f.a,{onClick:function(){return z(!0)},children:"Sign Up"})})})]})}),Object(b.jsx)(E.a,{open:N,autoHideDuration:5e3,onClose:function(){return D(!1)},children:Object(b.jsx)(F.a,{onClose:function(){return D(!1)},severity:"error",children:y})})]}))}n(354).config();var R=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function J(){var e=R(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),j=i[0],p=i[1],m=Object(a.useState)(""),O=Object(l.a)(m,2),h=O[0],x=O[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),k=g[0],y=g[1],C=Object(a.useState)(),S=Object(l.a)(C,2),w=S[0],N=S[1],D=Object(a.useState)(!1),I=Object(l.a)(D,2),q=I[0],A=I[1],z=Object(a.useState)(!1),U=Object(l.a)(z,2),H=U[0],J=U[1],K=Object(a.useState)(!1),V=Object(l.a)(K,2),M=V[0],G=V[1];P.a.defaults.baseURL="https://todowebapi-sequelize.herokuapp.com";var Q=function(e,t){t(e.target.value)};function X(){return(X=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,P()({method:"post",url:"/signup",data:{firstName:r,lastName:j,email:h,password:k}});case 4:n=e.sent,localStorage.setItem("token",n.data.token),J(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),N(e.t0),A(!0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return H?Object(b.jsx)(W.a,{to:"/todo-hooks"}):M?Object(b.jsx)(W.a,{to:"/auth"}):(P.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(N(e.response.data.error||e.response.data.errors),A(!0)),Promise.reject(e)})),Object(b.jsxs)(B.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(T.a,{}),Object(b.jsx)("div",{className:e.paper,children:Object(b.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){return function(e){return X.apply(this,arguments)}(e)},children:[Object(b.jsxs)(L.a,{container:!0,spacing:2,children:[Object(b.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(d.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return Q(e,c)}})}),Object(b.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(d.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return Q(e,p)}})}),Object(b.jsx)(L.a,{item:!0,xs:12,children:Object(b.jsx)(d.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return Q(e,x)}})}),Object(b.jsx)(L.a,{item:!0,xs:12,children:Object(b.jsx)(d.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return Q(e,y)}})})]}),Object(b.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(b.jsx)(L.a,{container:!0,justify:"flex-end",children:Object(b.jsx)(L.a,{item:!0,children:Object(b.jsx)(f.a,{onClick:function(){return G(!0)},children:"Already have an account? Sign in"})})})]})}),Object(b.jsx)(E.a,{open:q,autoHideDuration:5e3,onClose:function(){return A(!1)},children:Object(b.jsx)(F.a,{onClose:function(){return A(!1)},severity:"error",children:w})})]}))}var K=n(48);n(357);var V=function(e){return Object(b.jsx)(K.b,{basename:"/todo-hooks",children:Object(b.jsx)(K.a,{children:Object(b.jsx)("section",{className:"section",children:Object(b.jsxs)(W.d,{children:[Object(b.jsx)(W.b,{exact:!0,path:"/todo-hooks",children:Object(b.jsx)(A,{})}),Object(b.jsx)(W.b,{path:"/auth",children:Object(b.jsx)(H,{})}),Object(b.jsx)(W.b,{path:"/signup",children:Object(b.jsx)(J,{})})]})})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,412)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};c.a.render(Object(b.jsx)(K.b,{children:Object(b.jsx)(V,{})}),document.getElementById("root")),M()}},[[358,1,2]]]);
//# sourceMappingURL=main.ea82afd2.chunk.js.map