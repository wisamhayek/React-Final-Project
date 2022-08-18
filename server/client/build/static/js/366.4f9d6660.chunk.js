"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[366],{3997:function(e,n,t){t.d(n,{Z:function(){return w}});var i=t(4942),a=t(1413),s=t(885),o=t(2791),r=t(4569),l=t.n(r),d=t(3484),c=t(8870),u=t(6151),x=t(890),h=t(8019),p=t(7391),g=t(8096),f=t(4925),Z=t(8029),m=t(3466),v=t(3400),j=t(3746),C=t(165),b=t(5872),y=t(184),S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"85%",md:"50%"},bgcolor:"background.paper",border:"1px solid #000",boxShadow:24,p:"1rem",borderRadius:"1rem"};function w(e){var n=e.text,t=(0,o.useContext)(d.St),r=(t.userContext,t.setUserContext),w=(0,o.useState)(!1),A=(0,s.Z)(w,2),k=A[0],P=A[1],N=function(){P(!0),F(!0)},T=function(){P(!1),Y(""),U(""),M("")},z=(0,o.useState)(!0),D=(0,s.Z)(z,2),B=D[0],F=D[1],O=(0,o.useState)(""),I=(0,s.Z)(O,2),E=I[0],U=I[1],G=(0,o.useState)(""),L=(0,s.Z)(G,2),J=L[0],M=L[1],X=(0,o.useState)(""),W=(0,s.Z)(X,2),q=W[0],R=W[1],$=(0,o.useState)(null),H=(0,s.Z)($,2),K=H[0],Y=H[1],Q=function(e){var n=e.credential;l().post("http://localhost:2000/api/google/login",{userToken:n}).then((function(e){r(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),T()})).catch((function(e){Y(e.response.data.message),console.log(e)}))},V=(0,o.useState)({password:"",showPassword:!1}),_=(0,s.Z)(V,2),ee=_[0],ne=_[1],te=function(e){return function(n){ne((0,a.Z)((0,a.Z)({},ee),{},(0,i.Z)({},e,n.target.value))),M(n.target.value)}},ie=function(){ne((0,a.Z)((0,a.Z)({},ee),{},{showPassword:!ee.showPassword}))},ae=function(e){e.preventDefault()},se=""===J||""===E,oe=""===J||""===E||""===q;return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{color:"inherit",onClick:N,sx:{display:{xs:"none",md:"flex"}},children:n||"Login/Signup"}),(0,y.jsx)(u.Z,{color:"inherit",onClick:N,sx:{display:{xs:"flex",md:"none"}},children:n||"Login"}),(0,y.jsx)(h.Z,{open:k,onClose:T,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsx)(c.Z,{sx:S,children:(0,y.jsx)("div",{className:"loginPage",children:(0,y.jsxs)("div",{className:"loginForm",children:[(0,y.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2022/02/Dunder-Mifflin-Logo.png",alt:"logo"}),K&&(0,y.jsx)("p",{style:{color:"red"},children:K}),B&&(0,y.jsxs)(o.Fragment,{children:[(0,y.jsx)(p.Z,{required:!0,id:"outlined-required",className:"emailInput",label:"Enter your email address",value:E,onChange:function(e){var n=e.target;return U(n.value)}}),(0,y.jsxs)(g.Z,{sx:{},variant:"outlined",children:[(0,y.jsx)(f.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,y.jsx)(Z.Z,{id:"outlined-adornment-password",type:ee.showPassword?"text":"password",value:J,className:"passwordInput",onChange:te("password"),endAdornment:(0,y.jsx)(m.Z,{position:"end",children:(0,y.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:ie,onMouseDown:ae,edge:"end",children:ee.showPassword?(0,y.jsx)(C.Z,{}):(0,y.jsx)(j.Z,{})})}),label:"Password"})]}),(0,y.jsx)(u.Z,{color:"primary",disabled:se,className:"loginButton",variant:"contained",onClick:function(e){e.preventDefault(),l().post("http://localhost:2000/api/v1/users/login",{email:E,password:J}).then((function(e){r(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),T()})).catch((function(e){Y(e.response.data.message)}))},children:"Log in"}),(0,y.jsx)(b.kZ,{onSuccess:function(e){Q(e)},onError:function(){console.log("Login Failed")}}),(0,y.jsxs)("p",{children:["Already have an account?",(0,y.jsx)(u.Z,{onClick:function(){F(!1)},children:"Signup"})]})]}),!B&&(0,y.jsxs)(o.Fragment,{children:[(0,y.jsx)(p.Z,{required:!0,id:"outlined-required1",className:"namelInput",label:"Enter your full name",value:q,onChange:function(e){var n=e.target;return R(n.value)}}),(0,y.jsx)(p.Z,{required:!0,id:"outlined-required2",className:"emailInput",label:"Enter your email address",value:E,onChange:function(e){var n=e.target;return U(n.value)}}),(0,y.jsxs)(g.Z,{sx:{},variant:"outlined",children:[(0,y.jsx)(f.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,y.jsx)(Z.Z,{id:"outlined-adornment-password",type:ee.showPassword?"text":"password",value:J,className:"passwordInput",onChange:te("password"),endAdornment:(0,y.jsx)(m.Z,{position:"end",children:(0,y.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:ie,onMouseDown:ae,edge:"end",children:ee.showPassword?(0,y.jsx)(C.Z,{}):(0,y.jsx)(j.Z,{})})}),label:"Password"})]}),(0,y.jsx)(u.Z,{disabled:oe,className:"loginButton",variant:"contained",onClick:function(e){e.preventDefault(),l().post("http://localhost:2000/api/v1/users/signup",{name:q,email:E,password:J}).then((function(e){r(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),T()})).catch((function(e){Y(e.message)}))},children:"Sign Up"}),(0,y.jsx)(b.kZ,{onSuccess:function(e){Q(e)},onError:function(){console.log("Login Failed")},text:"signup_with",context:"signup"}),(0,y.jsxs)(x.Z,{children:["Already have an account?",(0,y.jsx)(u.Z,{onClick:function(){F(!0)},children:" Sign In"})]})]})]})})})})]})}},102:function(e,n,t){t.d(n,{Z:function(){return L}});var i=t(4942),a=t(1413),s=t(885),o=t(2791),r=t(6871),l=t(4395),d=t(8870),c=t(4663),u=t(3400),x=t(890),h=t(5422),p=t(8008),g=t(1614),f=t(3044),Z=t(6151),m=t(6520),v=t(4387),j=t(8249),C=t(9953),b=t(4721),y=t(4697),S=t(2588),w=t(8155),A=t(6934),k=t(2065),P=t(1572),N=t(5403),T=t(184),z=(0,A.ZP)("div")((function(e){var n=e.theme;return(0,i.Z)({position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:(0,k.Fq)(n.palette.common.white,.15),"&:hover":{backgroundColor:(0,k.Fq)(n.palette.common.white,.25)},marginLeft:0,width:"100%",display:"flex"},n.breakpoints.up("sm"),{marginLeft:n.spacing(1),width:"auto"})})),D=(0,A.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),B=(0,A.ZP)(P.ZP)((function(e){var n=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,i.Z)({padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},n.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function F(){return(0,T.jsxs)(z,{children:[(0,T.jsx)(D,{children:(0,T.jsx)(N.Z,{})}),(0,T.jsx)(B,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}var O=t(3484),I=t(3997),E=t(5872),U=["Home","Browse"],G=["Profile","Logout"],L=function(){var e=(0,r.s0)(),n=(0,o.useContext)(O.St),t=n.userContext,A=n.setUserContext,k=(0,o.useContext)(O.JT),P=(k.profileContext,k.setProfileContext),N=(0,o.useContext)(O.A9),z=N.cartContext,D=N.setCartContext,B=(0,o.useState)(""),L=(0,s.Z)(B,2),J=L[0],M=L[1];(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("activeUser"));A(e||null)}),[]),(0,o.useEffect)((function(){M(null===z||void 0===z?void 0:z.length)}),[z]);var X=(0,o.useState)(null),W=(0,s.Z)(X,2),q=W[0],R=W[1],$=function(n){"Profile"===n&&e(w.ih),"Logout"===n&&(A(null),P(null),D(null),localStorage.clear(),(0,E.Kz)()),R(null)};function H(n){"HOME"!==n&&"Home"!==n||e(w.Sd),"BROWSE"!==n&&"Browse"!==n||e(w.Xq)}var K,Y=(0,o.useState)({left:!1}),Q=(0,s.Z)(Y,2),V=Q[0],_=Q[1],ee=function(e,n){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&_((0,a.Z)((0,a.Z)({},V),{},(0,i.Z)({},e,n)))}};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l.Z,{position:"static",sx:{bgcolor:"black"},children:(0,T.jsx)(g.Z,{maxWidth:"xl",children:(0,T.jsxs)(c.Z,{disableGutters:!0,children:[(0,T.jsx)(j.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,T.jsx)(x.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none",cursor:"pointer"},children:"LOGO"}),(0,T.jsx)(d.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:(0,T.jsx)(u.Z,{size:"large","aria-label":"open navigation bar","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:ee("left",!0),color:"inherit",children:(0,T.jsx)(p.Z,{})})}),(0,T.jsx)(j.Z,{sx:{display:{xs:"none",md:"none"},mr:1}}),(0,T.jsx)(x.Z,{variant:"h5",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),(0,T.jsx)(d.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:U.map((function(e){return(0,T.jsx)(Z.Z,{onClick:function(e){H(e.target.innerText)},sx:{my:2,color:"white",display:"block"},children:e},e)}))}),(0,T.jsx)(d.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"flex"}},children:(0,T.jsx)(F,{})}),(0,T.jsx)(d.Z,{sx:{flexGrow:0},children:(0,T.jsx)(u.Z,{size:"large","aria-label":"go to cart page","aria-controls":"go-to-cart","aria-haspopup":"true",onClick:function(){e(w.$L)},color:"inherit",children:(0,T.jsx)(y.Z,{badgeContent:J,color:"primary",children:(0,T.jsx)(S.Z,{})})})}),(null===t||void 0===t?void 0:t.name)&&(0,T.jsxs)(d.Z,{sx:{flexGrow:0},children:[(0,T.jsx)(m.Z,{title:"Open settings",children:(0,T.jsx)(u.Z,{onClick:function(e){R(e.currentTarget)},sx:{p:0},children:(0,T.jsx)(f.Z,{alt:t.name,src:"#"})})}),(0,T.jsx)(h.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:q,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(q),onClose:$,children:G.map((function(e){return(0,T.jsx)(v.Z,{onClick:function(e){$(e.target.innerText)},children:(0,T.jsx)(x.Z,{textAlign:"center",children:e})},e)}))})]}),!(null!==t&&void 0!==t&&t.name)&&(0,T.jsx)(I.Z,{})]})})}),(0,T.jsx)(C.ZP,{anchor:"left",open:V.left,onClose:ee("left",!1),children:(K="left",(0,T.jsxs)(d.Z,{sx:{width:"top"===K||"bottom"===K?"auto":250,overflow:"scroll",padding:"1rem",backgroundColor:"#ff6600",height:"100vh",textAlign:"center"},role:"presentation",onClick:ee(K,!1),onKeyDown:ee(K,!1),children:[(0,T.jsx)(x.Z,{variant:"h6",noWrap:!0,sx:{textAlign:"center",padding:"1rem",mr:2,display:{xs:"block",md:"none"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"White",textDecoration:"none",margin:"auto"},children:"LOGO"}),(0,T.jsx)(b.Z,{}),U.map((function(e){return(0,T.jsx)(v.Z,{onClick:function(e){H(e.target.innerText)},children:(0,T.jsx)(x.Z,{textAlign:"center",color:"white",sx:{margin:"auto"},children:e})},e)})),(0,T.jsx)(b.Z,{sx:{marginTop:"1rem"}})]}))})]})}},4366:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var i=t(2791),a=t(3484),s=t(102),o=t(885),r=t(1413),l=t(5987),d=t(9124),c=t(3896),u=t(8870),x=t(890),h=t(184);function p(){var e=(0,i.useContext)(a.St),n=e.userContext;e.setUserContext;return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(x.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginBottom:"2rem"},children:"Account Details"}),(0,h.jsx)(u.Z,{sx:{marginLeft:"2rem",textAlign:"start",width:"fit-content"},children:(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[(0,h.jsxs)("div",{className:"textFields",children:[(0,h.jsx)(x.Z,{variant:"h6",children:"Name : "}),(0,h.jsx)(x.Z,{variant:"h6",children:"Email :"}),(0,h.jsx)(x.Z,{variant:"h6",children:"Password :"})]}),(0,h.jsxs)("div",{className:"rightFields",children:[(0,h.jsx)(x.Z,{variant:"h6",children:n.name}),(0,h.jsx)(x.Z,{variant:"h6",children:n.email}),(0,h.jsx)(x.Z,{variant:"h6",children:"********"})]})]})})]})}var g=t(6151),f=t(7391),Z=t(5289),m=t(7123),v=t(9157),j=t(5661),C=t(967),b=t(9618),y=t(4569),S=t.n(y),w=t(4925),A=t(4387),k=t(9321),P=t(4454);function N(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),s=(t.profileContext,t.setProfileContext),r=(0,i.useState)(n.id),l=(0,o.Z)(r,2),d=l[0],c=(l[1],(0,i.useState)("")),u=(0,o.Z)(c,2),p=u[0],C=u[1],b=(0,i.useState)(""),y=(0,o.Z)(b,2),N=y[0],T=y[1],z=(0,i.useState)(""),D=(0,o.Z)(z,2),B=D[0],F=D[1],O=(0,i.useState)(""),I=(0,o.Z)(O,2),E=I[0],U=I[1],G=(0,i.useState)(""),L=(0,o.Z)(G,2),J=L[0],M=L[1],X=(0,i.useState)(""),W=(0,o.Z)(X,2),q=W[0],R=W[1],$=(0,i.useState)(!1),H=(0,o.Z)($,2),K=H[0],Y=H[1],Q=(0,i.useState)(!1),V=(0,o.Z)(Q,2),_=V[0],ee=V[1],ne=function(){return ee(!1)};function te(){S().post("http://localhost:2000/api/v1/profile/shipping",{ownerid:d,name:p,address1:N,address2:B,city:E,zipcode:J,province:q,checked:K}).then((function(e){console.log(e),C(""),T(""),F(""),U(""),Y(!1),M(""),R(""),S().get("http://localhost:2000/api/v1/profile/".concat(d)).then((function(e){s(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{variant:"contained",size:"large",sx:{marginTop:"2rem"},onClick:function(){ee(!0)},children:"Add Shipping Address"}),(0,h.jsxs)(Z.Z,{open:_,onClose:ne,children:[(0,h.jsx)(j.Z,{children:"Shipping Address"}),(0,h.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:[(0,h.jsx)(f.Z,{value:p,size:"small",id:"full-name",label:"Full Name",variant:"outlined",sx:{marginTop:"8px"},onChange:function(e){C(e.target.value)}}),(0,h.jsx)(f.Z,{value:N,size:"small",id:"address-1",label:"Address 1",variant:"outlined",onChange:function(e){T(e.target.value)}}),(0,h.jsx)(f.Z,{value:B,size:"small",id:"address-2",label:"Address 2",variant:"outlined",onChange:function(e){F(e.target.value)}}),(0,h.jsx)(f.Z,{value:E,size:"small",id:"city",label:"City",variant:"outlined",onChange:function(e){U(e.target.value)}}),(0,h.jsx)(f.Z,{value:J,size:"small",id:"zipcode",label:"Zipcode",variant:"outlined",onChange:function(e){M(e.target.value)}}),(0,h.jsx)(w.Z,{id:"demo-simple-select-label",children:"Province"}),(0,h.jsx)(k.Z,{labelId:"shipping-province",id:"province",value:q,label:"Province",onChange:function(e){R(e.target.value)},sx:{height:"40px"},children:["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"].map((function(e,n){return(0,h.jsx)(A.Z,{value:e,children:e},n)}))})]}),(0,h.jsxs)(m.Z,{children:[(0,h.jsxs)(x.Z,{children:["Same for Billing",(0,h.jsx)(P.Z,{checked:K,onChange:function(e){Y(e.target.checked)},inputProps:{"aria-label":"controlled"}})]}),(0,h.jsx)(g.Z,{onClick:ne,children:"Cancel"}),(0,h.jsx)(g.Z,{onClick:function(){ne(),te()},variant:"contained",children:"ADD"})]})]})]})}function T(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),s=(t.profileContext,t.setProfileContext),r=(0,i.useState)(n.id),l=(0,o.Z)(r,2),d=l[0],c=(l[1],(0,i.useState)("")),u=(0,o.Z)(c,2),x=u[0],p=u[1],C=(0,i.useState)(""),b=(0,o.Z)(C,2),y=b[0],P=b[1],N=(0,i.useState)(""),T=(0,o.Z)(N,2),z=T[0],D=T[1],B=(0,i.useState)(""),F=(0,o.Z)(B,2),O=F[0],I=F[1],E=(0,i.useState)(""),U=(0,o.Z)(E,2),G=U[0],L=U[1],J=(0,i.useState)(""),M=(0,o.Z)(J,2),X=M[0],W=M[1],q=(0,i.useState)(!1),R=(0,o.Z)(q,2),$=R[0],H=R[1],K=function(){return H(!1)};function Y(){S().post("http://localhost:2000/api/v1/profile/billing",{ownerid:d,name:x,address1:y,address2:z,city:O,zipcode:G,province:X}).then((function(e){console.log(e),p(""),P(""),D(""),I(""),L(""),W(""),S().get("http://localhost:2000/api/v1/profile/".concat(d)).then((function(e){s(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{variant:"contained",size:"large",sx:{marginTop:"2rem"},onClick:function(){H(!0)},children:"Add Billing Address"}),(0,h.jsxs)(Z.Z,{open:$,onClose:K,children:[(0,h.jsx)(j.Z,{children:"Billing Address"}),(0,h.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px",width:"270px"},children:[(0,h.jsx)(f.Z,{value:x,size:"small",id:"full-name",label:"Full Name",variant:"outlined",sx:{marginTop:"8px"},onChange:function(e){p(e.target.value)}}),(0,h.jsx)(f.Z,{value:y,size:"small",id:"address-1",label:"Address 1",variant:"outlined",onChange:function(e){P(e.target.value)}}),(0,h.jsx)(f.Z,{value:z,size:"small",id:"address-2",label:"Address 2",variant:"outlined",onChange:function(e){D(e.target.value)}}),(0,h.jsx)(f.Z,{value:O,size:"small",id:"city",label:"City",variant:"outlined",onChange:function(e){I(e.target.value)}}),(0,h.jsx)(f.Z,{value:G,size:"small",id:"zipcode",label:"Zipcode",variant:"outlined",onChange:function(e){L(e.target.value)}}),(0,h.jsx)(w.Z,{id:"demo-simple-select-label",children:"Province"}),(0,h.jsx)(k.Z,{labelId:"shipping-province",id:"province",value:X,label:"Province",onChange:function(e){W(e.target.value)},sx:{height:"40px"},children:["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"].map((function(e,n){return(0,h.jsx)(A.Z,{value:e,children:e},n)}))})]}),(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(g.Z,{onClick:K,children:"Cancel"}),(0,h.jsx)(g.Z,{onClick:function(){K(),Y()},variant:"contained",children:"ADD"})]})]})]})}function z(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),s=t.profileContext,r=t.setProfileContext,l=s.profile.shippingAddress,d=(0,i.useState)(n.id),c=(0,o.Z)(d,2),u=c[0],p=(c[1],(0,i.useState)(l.name)),C=(0,o.Z)(p,2),b=C[0],y=C[1],N=(0,i.useState)(l.address1),T=(0,o.Z)(N,2),z=T[0],D=T[1],B=(0,i.useState)(l.address2),F=(0,o.Z)(B,2),O=F[0],I=F[1],E=(0,i.useState)(l.city),U=(0,o.Z)(E,2),G=U[0],L=U[1],J=(0,i.useState)(l.zipcode),M=(0,o.Z)(J,2),X=M[0],W=M[1],q=(0,i.useState)(l.province),R=(0,o.Z)(q,2),$=R[0],H=R[1],K=(0,i.useState)(!1),Y=(0,o.Z)(K,2),Q=Y[0],V=Y[1],_=(0,i.useState)(!1),ee=(0,o.Z)(_,2),ne=ee[0],te=ee[1],ie=function(){return te(!1)};function ae(){S().post("http://localhost:2000/api/v1/profile/shipping",{ownerid:u,name:b,address1:z,address2:O,city:G,zipcode:X,province:$,checked:Q}).then((function(e){console.log(e),y(""),D(""),I(""),L(""),V(!1),W(""),H(""),S().get("http://localhost:2000/api/v1/profile/".concat(u)).then((function(e){r(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{size:"small",sx:{height:"fit-content",width:"fit-content"},onClick:function(){te(!0)},children:"Edit"}),(0,h.jsxs)(Z.Z,{open:ne,onClose:ie,children:[(0,h.jsx)(j.Z,{children:"Edit Shipping Address"}),(0,h.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:[(0,h.jsx)(f.Z,{value:b,size:"small",id:"full-name",label:"Full Name",variant:"outlined",sx:{marginTop:"8px"},onChange:function(e){y(e.target.value)}}),(0,h.jsx)(f.Z,{value:z,size:"small",id:"address-1",label:"Address 1",variant:"outlined",onChange:function(e){D(e.target.value)}}),(0,h.jsx)(f.Z,{value:O,size:"small",id:"address-2",label:"Address 2",variant:"outlined",onChange:function(e){I(e.target.value)}}),(0,h.jsx)(f.Z,{value:G,size:"small",id:"city",label:"City",variant:"outlined",onChange:function(e){L(e.target.value)}}),(0,h.jsx)(f.Z,{value:X,size:"small",id:"zipcode",label:"Zipcode",variant:"outlined",onChange:function(e){W(e.target.value)}}),(0,h.jsx)(w.Z,{id:"demo-simple-select-label",children:"Province"}),(0,h.jsx)(k.Z,{labelId:"shipping-province",id:"province",value:$,label:"Province",onChange:function(e){H(e.target.value)},sx:{height:"40px"},children:["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"].map((function(e,n){return(0,h.jsx)(A.Z,{value:e,children:e},n)}))})]}),(0,h.jsxs)(m.Z,{children:[(0,h.jsxs)(x.Z,{children:["Same for Billing",(0,h.jsx)(P.Z,{checked:Q,onChange:function(e){V(e.target.checked)},inputProps:{"aria-label":"controlled"}})]}),(0,h.jsx)(g.Z,{onClick:ie,children:"Cancel"}),(0,h.jsx)(g.Z,{onClick:function(){ie(),ae()},variant:"contained",children:"Save"})]})]})]})}function D(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),s=(t.profileContext,t.setProfileContext),r=(0,i.useState)(n.id),l=(0,o.Z)(r,2),d=l[0],c=(l[1],(0,i.useState)(!1)),u=(0,o.Z)(c,2),p=u[0],f=u[1],C=function(){return f(!1)};function b(){S().delete("http://localhost:2000/api/v1/profile/shipping",{data:{ownerid:d}}).then((function(e){console.log(e),S().get("http://localhost:2000/api/v1/profile/".concat(d)).then((function(e){s(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{size:"small",sx:{height:"fit-content",width:"fit-content"},onClick:function(){f(!0)},children:"Delete"}),(0,h.jsxs)(Z.Z,{open:p,onClose:C,children:[(0,h.jsx)(j.Z,{children:"Confirm Delete"}),(0,h.jsx)(v.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:(0,h.jsx)(x.Z,{children:"Are you sure you want to delete the shipping address? this action can't be reverted"})}),(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(g.Z,{onClick:C,children:"Cancel"}),(0,h.jsx)(g.Z,{onClick:function(){C(),b()},variant:"contained",children:"Delete"})]})]})]})}function B(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),s=t.profileContext,r=t.setProfileContext,l=s.profile.billingAddress,d=(0,i.useState)(n.id),c=(0,o.Z)(d,2),u=c[0],x=(c[1],(0,i.useState)(l.name)),p=(0,o.Z)(x,2),C=p[0],b=p[1],y=(0,i.useState)(l.address1),P=(0,o.Z)(y,2),N=P[0],T=P[1],z=(0,i.useState)(l.address2),D=(0,o.Z)(z,2),B=D[0],F=D[1],O=(0,i.useState)(l.city),I=(0,o.Z)(O,2),E=I[0],U=I[1],G=(0,i.useState)(l.zipcode),L=(0,o.Z)(G,2),J=L[0],M=L[1],X=(0,i.useState)(l.province),W=(0,o.Z)(X,2),q=W[0],R=W[1],$=(0,i.useState)(!1),H=(0,o.Z)($,2),K=H[0],Y=H[1],Q=function(){return Y(!1)};function V(){S().post("http://localhost:2000/api/v1/profile/billing",{ownerid:u,name:C,address1:N,address2:B,city:E,zipcode:J,province:q}).then((function(e){console.log(e),b(""),T(""),F(""),U(""),M(""),R(""),S().get("http://localhost:2000/api/v1/profile/".concat(u)).then((function(e){r(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{size:"small",sx:{height:"fit-content",width:"fit-content"},onClick:function(){Y(!0)},children:"Edit"}),(0,h.jsxs)(Z.Z,{open:K,onClose:Q,children:[(0,h.jsx)(j.Z,{children:"Edit Billing Address"}),(0,h.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px",width:"270px"},children:[(0,h.jsx)(f.Z,{value:C,size:"small",id:"full-name",label:"Full Name",variant:"outlined",sx:{marginTop:"8px"},onChange:function(e){b(e.target.value)}}),(0,h.jsx)(f.Z,{value:N,size:"small",id:"address-1",label:"Address 1",variant:"outlined",onChange:function(e){T(e.target.value)}}),(0,h.jsx)(f.Z,{value:B,size:"small",id:"address-2",label:"Address 2",variant:"outlined",onChange:function(e){F(e.target.value)}}),(0,h.jsx)(f.Z,{value:E,size:"small",id:"city",label:"City",variant:"outlined",onChange:function(e){U(e.target.value)}}),(0,h.jsx)(f.Z,{value:J,size:"small",id:"zipcode",label:"Zipcode",variant:"outlined",onChange:function(e){M(e.target.value)}}),(0,h.jsx)(w.Z,{id:"demo-simple-select-label",children:"Province"}),(0,h.jsx)(k.Z,{labelId:"shipping-province",id:"province",value:q,label:"Province",onChange:function(e){R(e.target.value)},sx:{height:"40px"},children:["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"].map((function(e,n){return(0,h.jsx)(A.Z,{value:e,children:e},n)}))})]}),(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(g.Z,{onClick:Q,children:"Cancel"}),(0,h.jsx)(g.Z,{onClick:function(){Q(),V()},variant:"contained",children:"Save"})]})]})]})}function F(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),s=(t.profileContext,t.setProfileContext),r=(0,i.useState)(n.id),l=(0,o.Z)(r,2),d=l[0],c=(l[1],(0,i.useState)(!1)),u=(0,o.Z)(c,2),p=u[0],f=u[1],C=function(){return f(!1)};function b(){S().delete("http://localhost:2000/api/v1/profile/billing",{data:{ownerid:d}}).then((function(e){console.log(e),S().get("http://localhost:2000/api/v1/profile/".concat(d)).then((function(e){s(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{size:"small",sx:{height:"fit-content",width:"fit-content"},onClick:function(){f(!0)},children:"Delete"}),(0,h.jsxs)(Z.Z,{open:p,onClose:C,children:[(0,h.jsx)(j.Z,{children:"Confirm Delete"}),(0,h.jsx)(v.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:(0,h.jsx)(x.Z,{children:"Are you sure you want to delete the billing address? this action can't be reverted"})}),(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(g.Z,{onClick:C,children:"Cancel"}),(0,h.jsx)(g.Z,{onClick:function(){C(),b()},variant:"contained",children:"Delete"})]})]})]})}function O(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),s=(t.profileContext,t.setProfileContext),r=(0,i.useState)(n.id),l=(0,o.Z)(r,2),d=l[0],c=(l[1],(0,i.useState)(!1)),u=(0,o.Z)(c,2),p=u[0],f=u[1],C=function(){return f(!1)};function b(){S().delete("http://localhost:2000/api/v1/profile/payment",{data:{ownerid:d}}).then((function(e){console.log(e),S().get("http://localhost:2000/api/v1/profile/".concat(d)).then((function(e){s(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{size:"small",onClick:function(){f(!0)},children:"Delete"}),(0,h.jsxs)(Z.Z,{open:p,onClose:C,children:[(0,h.jsx)(j.Z,{children:"Confirm Delete"}),(0,h.jsx)(v.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:(0,h.jsx)(x.Z,{children:"Are you sure you want to delete the saved card? this action can't be reverted"})}),(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(g.Z,{onClick:C,children:"Cancel"}),(0,h.jsx)(g.Z,{onClick:function(){C(),b()},variant:"contained",children:"Delete"})]})]})]})}function I(){var e=(0,i.useState)(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1],l=(0,i.useContext)(a.St),d=l.userContext,c=(l.setUserContext,(0,i.useContext)(a.JT)),p=c.profileContext,y=c.setProfileContext,w=(0,i.useState)(d.id),A=(0,o.Z)(w,1)[0],k=(0,i.useState)(""),P=(0,o.Z)(k,2),N=P[0],T=P[1],z=(0,i.useState)(""),D=(0,o.Z)(z,2),B=D[0],F=D[1],I=(0,i.useState)(""),E=(0,o.Z)(I,2),U=E[0],G=E[1],L=(0,i.useState)(""),J=(0,o.Z)(L,2),M=J[0],X=J[1],W=function(){s(!0)},q=function(){s(!1)},R=(0,C.un)(),$=R.meta,H=R.wrapperProps,K=R.getCardImageProps,Y=R.getCardNumberProps,Q=R.getExpiryDateProps,V=R.getCVCProps,_=$.erroredInputs,ee=_.cardNumber||_.expiryDate||_.cvc||""===B||""===U||""===M;function ne(){S().post("http://localhost:2000/api/v1/profile/payment",{ownerid:A,name:N,cardNumber:B,expiry:U,cvc:M}).then((function(e){console.log(e),T(""),F(""),G(""),X(""),S().get("http://localhost:2000/api/v1/profile/".concat(A)).then((function(e){y(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(x.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginBottom:"2rem"},children:"Payments"}),(null===p||void 0===p?void 0:p.profile.paymentMethod)&&(0,h.jsxs)(u.Z,{sx:{width:"80%",margin:"auto"},children:[(0,h.jsx)(x.Z,{variant:"h6",sx:{margin:"auto",textAlign:"start",marginBottom:"1rem"},children:"Saved Cards :"}),(0,h.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,h.jsxs)(x.Z,{sx:{backgroundColor:"#dedede",width:"fit-content",padding:"1rem",borderRadius:"1rem"},children:["XXX-",p.profile.paymentMethod.last4]}),(0,h.jsx)(O,{})]}),(0,h.jsx)(g.Z,{variant:"contained",size:"large",sx:{marginTop:"2rem"},onClick:W,children:"Add Card"})]}),!(null!==p&&void 0!==p&&p.profile.paymentMethod)&&(0,h.jsxs)(u.Z,{sx:{width:"80%",margin:"auto"},children:[(0,h.jsx)(x.Z,{variant:"h6",sx:{margin:"auto",textAlign:"start",width:"80%"},children:"You don't have any cards on file"}),(0,h.jsx)(g.Z,{variant:"contained",size:"large",sx:{marginTop:"2rem"},onClick:W,children:"Add Card"})]}),(0,h.jsxs)(Z.Z,{open:t,onClose:q,children:[(0,h.jsx)(j.Z,{children:"Add New Card"}),(0,h.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,h.jsx)(f.Z,{value:N,size:"small",id:"name-on-card",label:"Name On Card",variant:"outlined",sx:{marginTop:"8px"},onChange:function(e){T(e.target.value)}}),(0,h.jsxs)(C.Vn,(0,r.Z)((0,r.Z)({},H),{},{styles:{fieldWrapper:{margin:"0px"}},children:[(0,h.jsx)("svg",(0,r.Z)({},K({images:b.Z}))),(0,h.jsx)("input",(0,r.Z)((0,r.Z)({},Y({onChange:function(e){F(e.target.value)}})),{},{value:B})),(0,h.jsx)("input",(0,r.Z)((0,r.Z)({},Q({onChange:function(e){G(e.target.value)}})),{},{value:U})),(0,h.jsx)("input",(0,r.Z)((0,r.Z)({},V({onChange:function(e){X(e.target.value)}})),{},{value:M}))]}))]}),(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(g.Z,{onClick:q,children:"Cancel"}),(0,h.jsx)(g.Z,{disabled:ee,onClick:function(){q(),ne()},variant:"contained",children:"ADD"})]})]})]})}function E(){var e=(0,i.useContext)(a.JT),n=e.profileContext;e.setProfileContext;return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(x.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginBottom:"2rem"},children:"Order History"}),(null===n||void 0===n?void 0:n.profile.orders)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u.Z,{sx:{margin:"auto",textAlign:"center",display:{xs:"none",md:"grid"},gridTemplateColumns:" 40% 60%",borderTop:"1px solid gray",borderBottom:"1px solid gray"},children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{style:{padding:"1rem"},src:"#",alt:"product"})}),(0,h.jsxs)("div",{style:{display:"grid",textAlign:"start",padding:"1rem"},children:[(0,h.jsxs)("div",{className:"textFields",children:[(0,h.jsx)(x.Z,{variant:"h6",children:"Order Number : XXXX"}),(0,h.jsx)(x.Z,{variant:"h6",children:"Total Price : $$$"}),(0,h.jsx)(x.Z,{variant:"h6",children:"Date : 11/11/2021"}),(0,h.jsx)(x.Z,{variant:"h6",children:"Status : Pending"})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row",columnGap:"1rem"},children:[(0,h.jsx)(g.Z,{variant:"contained",children:"Track"}),(0,h.jsx)(g.Z,{variant:"contained",children:"Cancel"}),(0,h.jsx)(g.Z,{variant:"contained",children:"Invoice"})]})]})]}),(0,h.jsxs)(u.Z,{sx:{margin:"auto",textAlign:"start",display:{xs:"grid",md:"none"},borderTop:"1px solid gray",borderBottom:"1px solid gray"},children:[(0,h.jsxs)("div",{style:{display:"grid",marginBottom:"1rem"},children:[(0,h.jsx)(x.Z,{variant:"h6",children:"Order Number : XXXX"}),(0,h.jsx)(x.Z,{variant:"h6",children:"Total Price : $$$"}),(0,h.jsx)(x.Z,{variant:"h6",children:"Date : 11/11/2021"}),(0,h.jsx)(x.Z,{variant:"h6",children:"Status : Pending"})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"#",alt:"product",style:{width:"200px",height:"200px"}})}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"4px"},children:[(0,h.jsx)(g.Z,{variant:"contained",children:"Track"}),(0,h.jsx)(g.Z,{variant:"contained",children:"Cancel"}),(0,h.jsx)(g.Z,{variant:"contained",children:"Invoice"})]})]})]})]}),!(null!==n&&void 0!==n&&n.profile.orders)&&(0,h.jsx)(x.Z,{variant:"h5",sx:{margin:"auto",textAlign:"start",marginTop:"2rem"},children:"No orders found on file"})]})}var U=t(4721);function G(){var e,n,t,s,o=(0,i.useContext)(a.JT),r=o.profileContext;o.setProfileContext;return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(x.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginBottom:"2rem"},children:"Addresses"}),(0,h.jsxs)(u.Z,{sx:{width:"80%",margin:"auto",marginBottom:"2rem"},children:[(0,h.jsx)(x.Z,{variant:"h6",sx:{margin:"auto",textAlign:"start",marginBottom:"1rem"},children:"Shipping Address :"}),(null===r||void 0===r||null===(e=r.profile)||void 0===e?void 0:e.shippingAddress)&&(0,h.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"row",width:"max-content",textAlign:"start"},children:[(0,h.jsxs)(u.Z,{sx:{backgroundColor:"#dedede",width:"fit-content",padding:"2rem",borderRadius:"1rem"},children:[(0,h.jsx)(x.Z,{children:r.profile.shippingAddress.name}),(0,h.jsx)(x.Z,{children:r.profile.shippingAddress.address1}),(0,h.jsx)(x.Z,{children:r.profile.shippingAddress.address2}),(0,h.jsxs)(x.Z,{children:[r.profile.shippingAddress.city,", ",r.profile.shippingAddress.zipcode]}),(0,h.jsx)(x.Z,{children:r.profile.shippingAddress.province})]}),(0,h.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",margin:"auto"},children:[(0,h.jsx)(z,{}),(0,h.jsx)(D,{})]})]}),!(null!==r&&void 0!==r&&null!==(n=r.profile)&&void 0!==n&&n.shippingAddress)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,{variant:"h6",sx:{margin:"auto",textAlign:"start",marginTop:"2rem"},children:"No shipping address found on file"}),(0,h.jsx)(N,{})]})]}),(0,h.jsx)(U.Z,{}),(0,h.jsxs)(u.Z,{sx:{width:"80%",margin:"auto",marginTop:"2rem"},children:[(0,h.jsx)(x.Z,{variant:"h6",sx:{margin:"auto",textAlign:"start",marginBottom:"1rem"},children:"Billing Address :"}),(null===r||void 0===r||null===(t=r.profile)||void 0===t?void 0:t.billingAddress)&&(0,h.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"row",width:"max-content",textAlign:"start"},children:[(0,h.jsxs)(u.Z,{sx:{backgroundColor:"#dedede",width:"fit-content",padding:"2rem",borderRadius:"1rem"},children:[(0,h.jsx)(x.Z,{children:r.profile.billingAddress.name}),(0,h.jsx)(x.Z,{children:r.profile.billingAddress.address1}),(0,h.jsx)(x.Z,{children:r.profile.billingAddress.address2}),(0,h.jsxs)(x.Z,{children:[r.profile.billingAddress.city,", ",r.profile.billingAddress.zipcode]}),(0,h.jsx)(x.Z,{children:r.profile.billingAddress.province})]}),(0,h.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",margin:"auto"},children:[(0,h.jsx)(B,{}),(0,h.jsx)(F,{})]})]}),!(null!==r&&void 0!==r&&null!==(s=r.profile)&&void 0!==s&&s.billingAddress)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,{variant:"h6",sx:{margin:"auto",textAlign:"start",marginTop:"2rem"},children:"No billing address found on file"}),(0,h.jsx)(T,{})]})]})]})}var L=["children","value","index"];function J(e){var n=e.children,t=e.value,i=e.index,a=(0,l.Z)(e,L);return(0,h.jsx)("div",(0,r.Z)((0,r.Z)({role:"tabpanel",hidden:t!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},a),{},{children:t===i&&(0,h.jsx)(u.Z,{sx:{p:1},children:(0,h.jsx)("div",{children:n})})}))}function M(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function X(){var e=i.useState(0),n=(0,o.Z)(e,2),t=n[0],a=n[1];return(0,h.jsxs)(u.Z,{sx:{width:"100%",display:{xs:"block",md:"none"}},children:[(0,h.jsx)(u.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,h.jsxs)(d.Z,{value:t,onChange:function(e,n){a(n)},"aria-label":"basic tabs example",variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[(0,h.jsx)(c.Z,(0,r.Z)({label:"Account Details"},M(0))),(0,h.jsx)(c.Z,(0,r.Z)({label:"Payments"},M(1))),(0,h.jsx)(c.Z,(0,r.Z)({label:"Order History"},M(2))),(0,h.jsx)(c.Z,(0,r.Z)({label:"Addresses"},M(3)))]})}),(0,h.jsx)(J,{value:t,index:0,children:(0,h.jsx)(p,{})}),(0,h.jsx)(J,{value:t,index:1,children:(0,h.jsx)(I,{})}),(0,h.jsx)(J,{value:t,index:2,children:(0,h.jsx)(E,{})}),(0,h.jsx)(J,{value:t,index:3,children:(0,h.jsx)(G,{})})]})}var W=["children","value","index"];function q(e){var n=e.children,t=e.value,i=e.index,a=(0,l.Z)(e,W);return(0,h.jsx)("div",(0,r.Z)((0,r.Z)({style:{width:"100%"},role:"tabpanel",hidden:t!==i,id:"vertical-tabpanel-".concat(i),"aria-labelledby":"vertical-tab-".concat(i)},a),{},{children:t===i&&(0,h.jsx)(u.Z,{sx:{p:2},children:(0,h.jsx)("div",{children:n})})}))}function R(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function $(){var e=i.useState(0),n=(0,o.Z)(e,2),t=n[0],a=n[1];return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsxs)(u.Z,{sx:{flexGrow:1,bgcolor:"background.paper",display:{xs:"none",md:"flex"},height:"fit-content",width:"100%"},children:[(0,h.jsxs)(d.Z,{orientation:"vertical",variant:"scrollable",value:t,onChange:function(e,n){a(n)},"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:[(0,h.jsx)(c.Z,(0,r.Z)({label:"Account Details"},R(0))),(0,h.jsx)(c.Z,(0,r.Z)({label:"Payments"},R(1))),(0,h.jsx)(c.Z,(0,r.Z)({label:"Order History"},R(2))),(0,h.jsx)(c.Z,(0,r.Z)({label:"Addresses"},R(3)))]}),(0,h.jsx)(q,{value:t,index:0,children:(0,h.jsx)(p,{})}),(0,h.jsx)(q,{value:t,index:1,children:(0,h.jsx)(I,{})}),(0,h.jsx)(q,{value:t,index:2,children:(0,h.jsx)(E,{})}),(0,h.jsx)(q,{value:t,index:3,children:(0,h.jsx)(G,{})})]}),(0,h.jsx)(X,{})]})}var H=t(3997),K=t(9276);function Y(){var e=(0,i.useContext)(a.St),n=e.userContext,t=(e.setUserContext,(0,i.useContext)(a.JT)),o=(t.profileContext,t.setProfileContext),r=null===n||void 0===n?void 0:n.id;return(0,i.useEffect)((function(){null!==n&&void 0!==n&&n.id&&S().get("http://localhost:2000/api/v1/profile/".concat(r)).then((function(e){o(e.data.data)})).catch((function(e){console.log(e)}))}),[n]),(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(s.Z,{}),(null===n||void 0===n?void 0:n.id)&&(0,h.jsx)($,{}),!(null!==n&&void 0!==n&&n.id)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginTop:"2rem"},children:"You are not logged in"}),(0,h.jsx)(K.Z,{sx:{width:"fit-content",margin:"auto",bgcolor:"#1976d2",borderRadius:"8px",marginTop:"1rem"},children:(0,h.jsx)(H.Z,{})})]})]})}}}]);
//# sourceMappingURL=366.4f9d6660.chunk.js.map