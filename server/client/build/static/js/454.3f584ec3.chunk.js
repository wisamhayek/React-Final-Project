"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[454],{3997:function(e,n,t){t.d(n,{Z:function(){return S}});var o=t(4942),r=t(1413),s=t(885),a=t(2791),i=t(4569),l=t.n(i),c=t(3484),d=t(8870),u=t(6151),x=t(890),h=t(8019),p=t(7391),g=t(8096),m=t(4925),f=t(8029),Z=t(3466),j=t(3400),w=t(3746),v=t(165),C=t(5872),y=t(184),b={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"85%",md:"50%"},bgcolor:"background.paper",border:"1px solid #000",boxShadow:24,p:"1rem",borderRadius:"1rem"};function S(){var e=(0,a.useContext)(c.St),n=(e.userContext,e.setUserContext),t=(0,a.useState)(!1),i=(0,s.Z)(t,2),S=i[0],k=i[1],P=function(){k(!0),F(!0)},O=function(){k(!1),X(""),D(""),J("")},N=(0,a.useState)(!0),L=(0,s.Z)(N,2),I=L[0],F=L[1],T=(0,a.useState)(""),E=(0,s.Z)(T,2),A=E[0],D=E[1],G=(0,a.useState)(""),q=(0,s.Z)(G,2),W=q[0],J=q[1],U=(0,a.useState)(""),B=(0,s.Z)(U,2),M=B[0],z=B[1],R=(0,a.useState)(null),H=(0,s.Z)(R,2),K=H[0],X=H[1],Y=function(e){console.log(e);var t=e.credential;console.log(t),l().post("http://localhost:2000/api/google/login",{userToken:t}).then((function(e){console.log(e.data.message),n(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),O()})).catch((function(e){X(e.response.data.message),console.log(e)}))},$=(0,a.useState)({password:"",showPassword:!1}),_=(0,s.Z)($,2),Q=_[0],V=_[1],ee=function(e){return function(n){V((0,r.Z)((0,r.Z)({},Q),{},(0,o.Z)({},e,n.target.value))),J(n.target.value)}},ne=function(){V((0,r.Z)((0,r.Z)({},Q),{},{showPassword:!Q.showPassword}))},te=function(e){e.preventDefault()},oe=""===W||""===A,re=""===W||""===A||""===M;return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{color:"inherit",onClick:P,sx:{display:{xs:"none",md:"flex"}},children:"Login/Signup"}),(0,y.jsx)(u.Z,{color:"inherit",onClick:P,sx:{display:{xs:"flex",md:"none"}},children:"Login"}),(0,y.jsx)(h.Z,{open:S,onClose:O,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsx)(d.Z,{sx:b,children:(0,y.jsx)("div",{className:"loginPage",children:(0,y.jsxs)("div",{className:"loginForm",children:[(0,y.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2022/02/Dunder-Mifflin-Logo.png",alt:"logo"}),K&&(0,y.jsx)("p",{style:{color:"red"},children:K}),I&&(0,y.jsxs)(a.Fragment,{children:[(0,y.jsx)(p.Z,{required:!0,id:"outlined-required",className:"emailInput",label:"Enter your email address",value:A,onChange:function(e){var n=e.target;return D(n.value)}}),(0,y.jsxs)(g.Z,{sx:{},variant:"outlined",children:[(0,y.jsx)(m.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,y.jsx)(f.Z,{id:"outlined-adornment-password",type:Q.showPassword?"text":"password",value:W,className:"passwordInput",onChange:ee("password"),endAdornment:(0,y.jsx)(Z.Z,{position:"end",children:(0,y.jsx)(j.Z,{"aria-label":"toggle password visibility",onClick:ne,onMouseDown:te,edge:"end",children:Q.showPassword?(0,y.jsx)(v.Z,{}):(0,y.jsx)(w.Z,{})})}),label:"Password"})]}),(0,y.jsx)(u.Z,{color:"primary",disabled:oe,className:"loginButton",variant:"contained",onClick:function(e){e.preventDefault(),l().post("http://localhost:2000/api/v1/users/login",{email:A,password:W}).then((function(e){console.log(e.data.message),n(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),O()})).catch((function(e){X(e.response.data.message),console.log(e)}))},children:"Log in"}),(0,y.jsx)(C.kZ,{onSuccess:function(e){Y(e)},onError:function(){console.log("Login Failed")}}),(0,y.jsxs)("p",{children:["Already have an account?",(0,y.jsx)(u.Z,{onClick:function(){F(!1)},children:"Signup"})]})]}),!I&&(0,y.jsxs)(a.Fragment,{children:[(0,y.jsx)(p.Z,{required:!0,id:"outlined-required1",className:"namelInput",label:"Enter your full name",value:M,onChange:function(e){var n=e.target;return z(n.value)}}),(0,y.jsx)(p.Z,{required:!0,id:"outlined-required2",className:"emailInput",label:"Enter your email address",value:A,onChange:function(e){var n=e.target;return D(n.value)}}),(0,y.jsxs)(g.Z,{sx:{},variant:"outlined",children:[(0,y.jsx)(m.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,y.jsx)(f.Z,{id:"outlined-adornment-password",type:Q.showPassword?"text":"password",value:W,className:"passwordInput",onChange:ee("password"),endAdornment:(0,y.jsx)(Z.Z,{position:"end",children:(0,y.jsx)(j.Z,{"aria-label":"toggle password visibility",onClick:ne,onMouseDown:te,edge:"end",children:Q.showPassword?(0,y.jsx)(v.Z,{}):(0,y.jsx)(w.Z,{})})}),label:"Password"})]}),(0,y.jsx)(u.Z,{disabled:re,className:"loginButton",variant:"contained",onClick:function(e){e.preventDefault(),l().post("http://localhost:2000/api/v1/users/signup",{name:M,email:A,password:W}).then((function(e){console.log(e.data.message),n(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),O()})).catch((function(e){X(e.message)}))},children:"Sign Up"}),(0,y.jsx)(C.kZ,{onSuccess:function(e){Y(e)},onError:function(){console.log("Login Failed")},text:"signup_with",context:"signup"}),(0,y.jsxs)(x.Z,{children:["Already have an account?",(0,y.jsx)(u.Z,{onClick:function(){F(!0)},children:" Sign In"})]})]})]})})})})]})}},102:function(e,n,t){t.d(n,{Z:function(){return J}});var o=t(4942),r=t(1413),s=t(885),a=t(2791),i=t(6871),l=t(4395),c=t(8870),d=t(4663),u=t(3400),x=t(890),h=t(5422),p=t(8008),g=t(1614),m=t(3044),f=t(6151),Z=t(6520),j=t(4387),w=t(8249),v=t(9953),C=t(4721),y=t(4697),b=t(2588),S=t(8155),k=t(6934),P=t(2065),O=t(1572),N=t(5403),L=t(184),I=(0,k.ZP)("div")((function(e){var n=e.theme;return(0,o.Z)({position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:(0,P.Fq)(n.palette.common.white,.15),"&:hover":{backgroundColor:(0,P.Fq)(n.palette.common.white,.25)},marginLeft:0,width:"100%",display:"flex"},n.breakpoints.up("sm"),{marginLeft:n.spacing(1),width:"auto"})})),F=(0,k.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),T=(0,k.ZP)(O.ZP)((function(e){var n=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,o.Z)({padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},n.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function E(){return(0,L.jsxs)(I,{children:[(0,L.jsx)(F,{children:(0,L.jsx)(N.Z,{})}),(0,L.jsx)(T,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}var A=t(3484),D=t(3997),G=t(5872),q=["Home","Browse","Contact"],W=["Profile","Logout"],J=function(){var e=(0,i.s0)(),n=(0,a.useContext)(A.St),t=n.userContext,k=n.setUserContext,P=(0,a.useContext)(A.JT),O=(P.profileContext,P.setProfileContext),N=(0,a.useContext)(A.A9),I=N.cartContext,F=N.setCartContext,T=(0,a.useState)(""),J=(0,s.Z)(T,2),U=J[0],B=J[1];(0,a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("activeUser"));k(e||null)}),[]),(0,a.useEffect)((function(){B(null===I||void 0===I?void 0:I.length)}),[I]);var M=(0,a.useState)(null),z=(0,s.Z)(M,2),R=z[0],H=z[1],K=function(n){"Profile"===n&&e(S.ih),"Logout"===n&&(k(null),O(null),F(null),localStorage.clear(),(0,G.Kz)()),H(null)};function X(n){"HOME"!==n&&"Home"!==n||e(S.Sd),"BROWSE"!==n&&"Browse"!==n||e(S.Xq),"CONTACT"!==n&&"Contact"!==n||e(S.Sd)}var Y,$=(0,a.useState)({left:!1}),_=(0,s.Z)($,2),Q=_[0],V=_[1],ee=function(e,n){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&V((0,r.Z)((0,r.Z)({},Q),{},(0,o.Z)({},e,n)))}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l.Z,{position:"static",sx:{bgcolor:"black"},children:(0,L.jsx)(g.Z,{maxWidth:"xl",children:(0,L.jsxs)(d.Z,{disableGutters:!0,children:[(0,L.jsx)(w.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,L.jsx)(x.Z,{variant:"h6",noWrap:!0,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),(0,L.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:(0,L.jsx)(u.Z,{size:"large","aria-label":"open navigation bar","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:ee("left",!0),color:"inherit",children:(0,L.jsx)(p.Z,{})})}),(0,L.jsx)(w.Z,{sx:{display:{xs:"none",md:"none"},mr:1}}),(0,L.jsx)(x.Z,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"none",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),(0,L.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:q.map((function(e){return(0,L.jsx)(f.Z,{onClick:function(e){X(e.target.innerText)},sx:{my:2,color:"white",display:"block"},children:e},e)}))}),(0,L.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"flex"}},children:(0,L.jsx)(E,{})}),(0,L.jsx)(c.Z,{sx:{flexGrow:0},children:(0,L.jsx)(u.Z,{size:"large","aria-label":"go to cart page","aria-controls":"go-to-cart","aria-haspopup":"true",onClick:function(){e(S.$L)},color:"inherit",children:(0,L.jsx)(y.Z,{badgeContent:U,color:"primary",children:(0,L.jsx)(b.Z,{})})})}),(null===t||void 0===t?void 0:t.name)&&(0,L.jsxs)(c.Z,{sx:{flexGrow:0},children:[(0,L.jsx)(Z.Z,{title:"Open settings",children:(0,L.jsx)(u.Z,{onClick:function(e){H(e.currentTarget)},sx:{p:0},children:(0,L.jsx)(m.Z,{alt:t.name,src:"#"})})}),(0,L.jsx)(h.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:R,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(R),onClose:K,children:W.map((function(e){return(0,L.jsx)(j.Z,{onClick:function(e){K(e.target.innerText)},children:(0,L.jsx)(x.Z,{textAlign:"center",children:e})},e)}))})]}),!(null!==t&&void 0!==t&&t.name)&&(0,L.jsx)(D.Z,{})]})})}),(0,L.jsx)(v.ZP,{anchor:"left",open:Q.left,onClose:ee("left",!1),children:(Y="left",(0,L.jsxs)(c.Z,{sx:{width:"top"===Y||"bottom"===Y?"auto":250,overflow:"scroll",padding:"1rem",backgroundColor:"#ff6600",height:"100vh",textAlign:"center"},role:"presentation",onClick:ee(Y,!1),onKeyDown:ee(Y,!1),children:[(0,L.jsx)(x.Z,{variant:"h6",noWrap:!0,sx:{textAlign:"center",padding:"1rem",mr:2,display:{xs:"block",md:"none"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"White",textDecoration:"none",margin:"auto"},children:"LOGO"}),(0,L.jsx)(C.Z,{}),q.map((function(e){return(0,L.jsx)(j.Z,{onClick:function(e){X(e.target.innerText)},children:(0,L.jsx)(x.Z,{textAlign:"center",color:"white",sx:{margin:"auto"},children:e})},e)})),(0,L.jsx)(C.Z,{sx:{marginTop:"1rem"}})]}))})]})}},6454:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var o=t(885),r=t(890),s=t(2791),a=t(102),i=t(184);function l(){var e=(0,s.useState)(""),n=(0,o.Z)(e,2),t=n[0],l=n[1];return(0,s.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&l("Order placed! You will receive a confirmation email shortly."),e.get("canceled")&&l("Order canceled -- continue to shop around and checkout when you're ready.")}),[]),(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(r.Z,{variant:"h3",sx:{textAlign:"center",margin:"auto",marginTop:"2rem"},children:t})]})}}}]);
//# sourceMappingURL=454.3f584ec3.chunk.js.map