"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[187],{3997:function(e,n,i){i.d(n,{Z:function(){return S}});var t=i(4942),r=i(1413),a=i(885),s=i(2791),l=i(4569),o=i.n(l),c=i(3484),d=i(8870),u=i(6151),x=i(890),h=i(8019),m=i(7391),g=i(8096),Z=i(4925),p=i(8029),j=i(3466),f=i(3400),v=i(3746),b=i(165),C=i(5872),y=i(184),w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"85%",md:"50%"},bgcolor:"background.paper",border:"1px solid #000",boxShadow:24,p:"1rem",borderRadius:"1rem"};function S(e){var n=e.text,i=(0,s.useContext)(c.St),l=(i.userContext,i.setUserContext),S=(0,s.useState)(!1),k=(0,a.Z)(S,2),P=k[0],T=k[1],D=function(){T(!0),N(!0)},z=function(){T(!1),_(""),q(""),R("")},F=(0,s.useState)(!0),I=(0,a.Z)(F,2),B=I[0],N=I[1],O=(0,s.useState)(""),A=(0,a.Z)(O,2),L=A[0],q=A[1],G=(0,s.useState)(""),U=(0,a.Z)(G,2),E=U[0],R=U[1],X=(0,s.useState)(""),$=(0,a.Z)(X,2),V=$[0],W=$[1],M=(0,s.useState)(null),J=(0,a.Z)(M,2),Q=J[0],_=J[1],H=function(e){var n=e.credential;o().post("/api/google/login",{userToken:n}).then((function(e){l(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),z()})).catch((function(e){_(e.response.data.message),console.log(e)}))},K=(0,s.useState)({password:"",showPassword:!1}),Y=(0,a.Z)(K,2),ee=Y[0],ne=Y[1],ie=function(e){return function(n){ne((0,r.Z)((0,r.Z)({},ee),{},(0,t.Z)({},e,n.target.value))),R(n.target.value)}},te=function(){ne((0,r.Z)((0,r.Z)({},ee),{},{showPassword:!ee.showPassword}))},re=function(e){e.preventDefault()},ae=""===E||""===L,se=""===E||""===L||""===V;return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{color:"inherit",onClick:D,sx:{display:{xs:"none",md:"flex"}},children:n||"Login/Signup"}),(0,y.jsx)(u.Z,{color:"inherit",onClick:D,sx:{display:{xs:"flex",md:"none"}},children:n||"Login"}),(0,y.jsx)(h.Z,{open:P,onClose:z,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsx)(d.Z,{sx:w,children:(0,y.jsx)("div",{className:"loginPage",children:(0,y.jsxs)("div",{className:"loginForm",children:[(0,y.jsx)("img",{src:"https://logos-world.net/wp-content/uploads/2022/02/Dunder-Mifflin-Logo.png",alt:"logo"}),Q&&(0,y.jsx)("p",{style:{color:"red"},children:Q}),B&&(0,y.jsxs)(s.Fragment,{children:[(0,y.jsx)(m.Z,{required:!0,id:"outlined-required",className:"emailInput",label:"Enter your email address",value:L,onChange:function(e){var n=e.target;return q(n.value)}}),(0,y.jsxs)(g.Z,{sx:{},variant:"outlined",children:[(0,y.jsx)(Z.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,y.jsx)(p.Z,{id:"outlined-adornment-password",type:ee.showPassword?"text":"password",value:E,className:"passwordInput",onChange:ie("password"),endAdornment:(0,y.jsx)(j.Z,{position:"end",children:(0,y.jsx)(f.Z,{"aria-label":"toggle password visibility",onClick:te,onMouseDown:re,edge:"end",children:ee.showPassword?(0,y.jsx)(b.Z,{}):(0,y.jsx)(v.Z,{})})}),label:"Password"})]}),(0,y.jsx)(u.Z,{color:"primary",disabled:ae,className:"loginButton",variant:"contained",onClick:function(e){e.preventDefault(),o().post("/api/v1/users/login",{email:L,password:E}).then((function(e){l(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),z()})).catch((function(e){_(e.response.data.message)}))},children:"Log in"}),(0,y.jsx)(C.kZ,{onSuccess:function(e){H(e)},onError:function(){console.log("Login Failed")}}),(0,y.jsxs)("p",{children:["Already have an account?",(0,y.jsx)(u.Z,{onClick:function(){N(!1)},children:"Signup"})]})]}),!B&&(0,y.jsxs)(s.Fragment,{children:[(0,y.jsx)(m.Z,{required:!0,id:"outlined-required1",className:"namelInput",label:"Enter your full name",value:V,onChange:function(e){var n=e.target;return W(n.value)}}),(0,y.jsx)(m.Z,{required:!0,id:"outlined-required2",className:"emailInput",label:"Enter your email address",value:L,onChange:function(e){var n=e.target;return q(n.value)}}),(0,y.jsxs)(g.Z,{sx:{},variant:"outlined",children:[(0,y.jsx)(Z.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,y.jsx)(p.Z,{id:"outlined-adornment-password",type:ee.showPassword?"text":"password",value:E,className:"passwordInput",onChange:ie("password"),endAdornment:(0,y.jsx)(j.Z,{position:"end",children:(0,y.jsx)(f.Z,{"aria-label":"toggle password visibility",onClick:te,onMouseDown:re,edge:"end",children:ee.showPassword?(0,y.jsx)(b.Z,{}):(0,y.jsx)(v.Z,{})})}),label:"Password"})]}),(0,y.jsx)(u.Z,{disabled:se,className:"loginButton",variant:"contained",onClick:function(e){e.preventDefault(),o().post("/api/v1/users/signup",{name:V,email:L,password:E}).then((function(e){l(e.data.user),localStorage.setItem("activeUser",JSON.stringify(e.data.user)),localStorage.setItem("userToken",JSON.stringify(e.data.token)),z()})).catch((function(e){_(e.message)}))},children:"Sign Up"}),(0,y.jsx)(C.kZ,{onSuccess:function(e){H(e)},onError:function(){console.log("Login Failed")},text:"signup_with",context:"signup"}),(0,y.jsxs)(x.Z,{children:["Already have an account?",(0,y.jsx)(u.Z,{onClick:function(){N(!0)},children:" Sign In"})]})]})]})})})})]})}},102:function(e,n,i){i.d(n,{Z:function(){return U}});var t=i(4942),r=i(1413),a=i(885),s=i(2791),l=i(6871),o=i(4395),c=i(8870),d=i(4663),u=i(3400),x=i(890),h=i(5422),m=i(8008),g=i(1614),Z=i(3044),p=i(6151),j=i(6520),f=i(4387),v=i(8249),b=i(9953),C=i(4721),y=i(4697),w=i(2588),S=i(8155),k=i(6934),P=i(2065),T=i(1572),D=i(5403),z=i(184),F=(0,k.ZP)("div")((function(e){var n=e.theme;return(0,t.Z)({position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:(0,P.Fq)(n.palette.common.white,.15),"&:hover":{backgroundColor:(0,P.Fq)(n.palette.common.white,.25)},marginLeft:0,width:"100%",display:"flex"},n.breakpoints.up("sm"),{marginLeft:n.spacing(1),width:"auto"})})),I=(0,k.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),B=(0,k.ZP)(T.ZP)((function(e){var n=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,t.Z)({padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},n.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function N(){return(0,z.jsxs)(F,{children:[(0,z.jsx)(I,{children:(0,z.jsx)(D.Z,{})}),(0,z.jsx)(B,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}var O=i(3484),A=i(3997),L=i(5872),q=["Home","Browse"],G=["Profile","Logout"],U=function(){var e=(0,l.s0)(),n=(0,s.useContext)(O.St),i=n.userContext,k=n.setUserContext,P=(0,s.useContext)(O.JT),T=(P.profileContext,P.setProfileContext),D=(0,s.useContext)(O.A9),F=D.cartContext,I=D.setCartContext,B=(0,s.useState)(""),U=(0,a.Z)(B,2),E=U[0],R=U[1];(0,s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("activeUser"));k(e||null)}),[]),(0,s.useEffect)((function(){R(null===F||void 0===F?void 0:F.length)}),[F]);var X=(0,s.useState)(null),$=(0,a.Z)(X,2),V=$[0],W=$[1],M=function(n){"Profile"===n&&e(S.ih),"Logout"===n&&(k(null),T(null),I(null),localStorage.clear(),(0,L.Kz)()),W(null)};function J(n){"HOME"!==n&&"Home"!==n||e(S.Sd),"BROWSE"!==n&&"Browse"!==n||e(S.Xq)}var Q,_=(0,s.useState)({left:!1}),H=(0,a.Z)(_,2),K=H[0],Y=H[1],ee=function(e,n){return function(i){("keydown"!==i.type||"Tab"!==i.key&&"Shift"!==i.key)&&Y((0,r.Z)((0,r.Z)({},K),{},(0,t.Z)({},e,n)))}};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.Z,{position:"static",sx:{bgcolor:"black"},children:(0,z.jsx)(g.Z,{maxWidth:"xl",children:(0,z.jsxs)(d.Z,{disableGutters:!0,children:[(0,z.jsx)(v.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,z.jsx)(x.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none",cursor:"pointer"},children:"LOGO"}),(0,z.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:(0,z.jsx)(u.Z,{size:"large","aria-label":"open navigation bar","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:ee("left",!0),color:"inherit",children:(0,z.jsx)(m.Z,{})})}),(0,z.jsx)(v.Z,{sx:{display:{xs:"none",md:"none"},mr:1}}),(0,z.jsx)(x.Z,{variant:"h5",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),(0,z.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:q.map((function(e){return(0,z.jsx)(p.Z,{onClick:function(e){J(e.target.innerText)},sx:{my:2,color:"white",display:"block"},children:e},e)}))}),(0,z.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"flex"}},children:(0,z.jsx)(N,{})}),(0,z.jsx)(c.Z,{sx:{flexGrow:0},children:(0,z.jsx)(u.Z,{size:"large","aria-label":"go to cart page","aria-controls":"go-to-cart","aria-haspopup":"true",onClick:function(){e(S.$L)},color:"inherit",children:(0,z.jsx)(y.Z,{badgeContent:E,color:"primary",children:(0,z.jsx)(w.Z,{})})})}),(null===i||void 0===i?void 0:i.name)&&(0,z.jsxs)(c.Z,{sx:{flexGrow:0},children:[(0,z.jsx)(j.Z,{title:"Open settings",children:(0,z.jsx)(u.Z,{onClick:function(e){W(e.currentTarget)},sx:{p:0},children:(0,z.jsx)(Z.Z,{alt:i.name,src:"#"})})}),(0,z.jsx)(h.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:V,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(V),onClose:M,children:G.map((function(e){return(0,z.jsx)(f.Z,{onClick:function(e){M(e.target.innerText)},children:(0,z.jsx)(x.Z,{textAlign:"center",children:e})},e)}))})]}),!(null!==i&&void 0!==i&&i.name)&&(0,z.jsx)(A.Z,{})]})})}),(0,z.jsx)(b.ZP,{anchor:"left",open:K.left,onClose:ee("left",!1),children:(Q="left",(0,z.jsxs)(c.Z,{sx:{width:"top"===Q||"bottom"===Q?"auto":250,overflow:"scroll",padding:"1rem",backgroundColor:"#ff6600",height:"100vh",textAlign:"center"},role:"presentation",onClick:ee(Q,!1),onKeyDown:ee(Q,!1),children:[(0,z.jsx)(x.Z,{variant:"h6",noWrap:!0,sx:{textAlign:"center",padding:"1rem",mr:2,display:{xs:"block",md:"none"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"White",textDecoration:"none",margin:"auto"},children:"LOGO"}),(0,z.jsx)(C.Z,{}),q.map((function(e){return(0,z.jsx)(f.Z,{onClick:function(e){J(e.target.innerText)},children:(0,z.jsx)(x.Z,{textAlign:"center",color:"white",sx:{margin:"auto"},children:e})},e)})),(0,z.jsx)(C.Z,{sx:{marginTop:"1rem"}})]}))})]})}},6187:function(e,n,i){i.r(n),i.d(n,{default:function(){return ye}});var t=i(885),r=i(2791),a=i(102),s=i(1413),l=i(5987),o=i(9124),c=i(3896),d=i(8870),u=i(890),x=i(4721),h=i(6151),m=i(184);function g(){return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(u.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginBottom:"2rem"},children:"Orders"}),(0,m.jsx)(d.Z,{sx:{marginLeft:{xs:"0px",md:"2rem"},textAlign:"start",width:"fit-content"},children:(0,m.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"2rem"},children:[(0,m.jsxs)("div",{className:"textFields",children:[(0,m.jsx)(u.Z,{variant:"h6",children:"Open orders : "}),(0,m.jsx)(u.Z,{variant:"h6",children:"Shipped orders :"}),(0,m.jsx)(x.Z,{sx:{width:"200%"}}),(0,m.jsx)(u.Z,{variant:"h6",children:"Total order :"})]}),(0,m.jsxs)("div",{className:"rightFields",children:[(0,m.jsx)(u.Z,{variant:"h6",children:"XX"}),(0,m.jsx)(u.Z,{variant:"h6",children:"XX"}),(0,m.jsx)(u.Z,{variant:"h6",children:"XX"})]})]})}),(0,m.jsxs)(d.Z,{sx:{width:"fit-content",display:"flex",flexDirection:"row",columnGap:"1rem",margin:"auto",marginTop:"2rem"},children:[(0,m.jsx)(h.Z,{variant:"contained",children:"Open Orders"}),(0,m.jsx)(h.Z,{variant:"contained",children:"All Orders"})]}),(0,m.jsxs)(d.Z,{sx:{margin:"auto",textAlign:"center",display:{xs:"none",md:"grid"},gridTemplateColumns:" 40% 60%",borderTop:"1px solid gray",borderBottom:"1px solid gray",marginTop:"2rem"},children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{style:{padding:"1rem"},src:"#",alt:"product"})}),(0,m.jsxs)("div",{style:{display:"grid",textAlign:"start",padding:"1rem"},children:[(0,m.jsxs)("div",{className:"textFields",children:[(0,m.jsx)(u.Z,{variant:"h6",children:"Order Number : XXXX"}),(0,m.jsx)(u.Z,{variant:"h6",children:"Total Price : $$$"}),(0,m.jsx)(u.Z,{variant:"h6",children:"Date : 11/11/2021"}),(0,m.jsx)(u.Z,{variant:"h6",children:"Status : Pending"}),(0,m.jsx)(u.Z,{variant:"h6",children:"User : Username"})]}),(0,m.jsxs)("div",{style:{display:"flex",flexDirection:"row",columnGap:"1rem"},children:[(0,m.jsx)(h.Z,{variant:"contained",children:"Mark as Shipped"}),(0,m.jsx)(h.Z,{variant:"contained",children:"Cancel"}),(0,m.jsx)(h.Z,{variant:"contained",children:"Shipping Details"})]})]})]}),(0,m.jsxs)(d.Z,{sx:{margin:"auto",textAlign:"start",display:{xs:"grid",md:"none"},borderTop:"1px solid gray",borderBottom:"1px solid gray",marginTop:"2rem"},children:[(0,m.jsxs)("div",{style:{display:"grid",marginBottom:"1rem"},children:[(0,m.jsx)(u.Z,{variant:"h6",children:"Order Number : XXXX"}),(0,m.jsx)(u.Z,{variant:"h6",children:"Total Price : $$$"}),(0,m.jsx)(u.Z,{variant:"h6",children:"Date : 11/11/2021"}),(0,m.jsx)(u.Z,{variant:"h6",children:"Status : Pending"}),(0,m.jsx)(u.Z,{variant:"h6",children:"User : Username"})]}),(0,m.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"#",alt:"product",style:{width:"200px",height:"200px"}})}),(0,m.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"4px"},children:[(0,m.jsx)(h.Z,{variant:"contained",children:"Track"}),(0,m.jsx)(h.Z,{variant:"contained",children:"Cancel"}),(0,m.jsx)(h.Z,{variant:"contained",children:"Invoice"})]})]})]})]})}function Z(){return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(u.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginBottom:"2rem"},children:"Sales"}),(0,m.jsx)(d.Z,{sx:{marginLeft:"2rem",textAlign:"start",width:"fit-content"},children:(0,m.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"2rem"},children:[(0,m.jsxs)("div",{className:"textFields",children:[(0,m.jsx)(u.Z,{variant:"h6",children:"Orders : "}),(0,m.jsx)(u.Z,{variant:"h6",children:"Revenue :"}),(0,m.jsx)(u.Z,{variant:"h6",children:"Shipping Cost :"}),(0,m.jsx)(x.Z,{sx:{width:"200%"}}),(0,m.jsx)(u.Z,{variant:"h6",children:"Profit"})]}),(0,m.jsxs)("div",{className:"rightFields",children:[(0,m.jsx)(u.Z,{variant:"h6",children:"XX"}),(0,m.jsx)(u.Z,{variant:"h6",children:"$$$"}),(0,m.jsx)(u.Z,{variant:"h6",children:"$$$"}),(0,m.jsx)(u.Z,{variant:"h6",children:"$$$$"})]})]})})]})}var p=i(9836),j=i(3382),f=i(3994),v=i(9281),b=i(6890),C=i(3033),y=i(5855),w=i(720),S=i(4663),k=i(703),P=i(5573),T=i(4942),D=i(7391),z=i(4454),F=i(4387),I=i(5289),B=i(7123),N=i(9157),O=i(5661),A=i(3400),L=i(2419),q=i(6520),G=i(4569),U=i.n(G);function E(){var e=(0,r.useState)(!1),n=(0,t.Z)(e,2),i=n[0],a=n[1],l=function(){return a(!1)},o=(0,r.useState)({title:"",desc:"",img:"",bg:"",linkto:"",id:""}),c=(0,t.Z)(o,2),d=c[0],u=c[1],x=function(e){u((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,T.Z)({},e.target.name,e.target.value))}))};var g=""===d.title||""===d.desc||""===d.img||""===d.bg||""===d.linkto||""===d.id;return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(q.Z,{title:"Create Promotion",children:(0,m.jsxs)(A.Z,{color:"primary",size:"small",onClick:function(){a(!0)},children:["Create Promotion",(0,m.jsx)(L.Z,{})]})}),(0,m.jsxs)(I.Z,{open:i,onClose:l,children:[(0,m.jsx)(O.Z,{children:"Create Promotion"}),(0,m.jsxs)(N.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:[(0,m.jsx)(D.Z,{size:"small",name:"title",id:"promotion-title",label:"Promotion Title",variant:"outlined",sx:{marginTop:"4px"},onChange:x}),(0,m.jsx)(D.Z,{id:"promotion-description",name:"desc",label:"Description",multiline:!0,rows:4,variant:"outlined",onChange:x}),(0,m.jsx)(D.Z,{size:"small",name:"img",id:"image-links",label:"Image Link",variant:"outlined",onChange:x}),(0,m.jsx)(D.Z,{size:"small",name:"bg",id:"bgcolor",label:"Background Color",variant:"outlined",onChange:x}),(0,m.jsx)(D.Z,{size:"small",name:"linkto",id:"linkto",label:"Link To",variant:"outlined",onChange:x}),(0,m.jsx)(D.Z,{size:"small",name:"id",id:"Promotion-id",label:"Promotion ID",variant:"outlined",onChange:x})]}),(0,m.jsxs)(B.Z,{children:[(0,m.jsx)(h.Z,{onClick:l,children:"Cancel"}),(0,m.jsx)(h.Z,{disabled:g,onClick:function(){U().post("/api/v1/promotions/",{promotion:d}).then((function(e){})).catch((function(e){console.log(e)})),l()},variant:"contained",children:"Add Promotion"})]})]})]})}function R(){var e=(0,r.useState)(!1),n=(0,t.Z)(e,2),i=n[0],a=n[1],l=(0,r.useState)(Number(1)),o=(0,t.Z)(l,2),c=o[0],d=o[1],g=(0,r.useState)(Number(1)),Z=(0,t.Z)(g,2),p=Z[0],j=Z[1],f=(0,r.useState)(""),v=(0,t.Z)(f,2),b=v[0],C=v[1],y=(0,r.useState)(""),w=(0,t.Z)(y,2),S=w[0],k=w[1],P=(0,r.useState)({imageurl1:"",imageurl2:"",imageurl3:"",imageurl4:"",imageurl5:""}),G=(0,t.Z)(P,2),E=G[0],R=G[1],X=(0,r.useState)({name:"",description:"",price:"",quantity:"",category:"",isVariant:!1,itemid:""}),$=(0,t.Z)(X,2),V=$[0],W=$[1],M=function(e){W((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,T.Z)({},e.target.name,e.target.value))}))},J=function(e){R((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,T.Z)({},e.target.name,e.target.value))}))},Q=function(e){var n=e.target.id;k((function(i){return(0,s.Z)((0,s.Z)({},i),{},(0,T.Z)({},n,(0,s.Z)((0,s.Z)({},i[n]),{},(0,T.Z)({},e.target.name,e.target.value))))})),console.log(S)},_=function(){a(!1)};var H=(0,r.useState)(!1),K=(0,t.Z)(H,2),Y=K[0],ee=K[1];var ne=(0,r.useState)(""),ie=(0,t.Z)(ne,2),te=ie[0],re=ie[1];return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(q.Z,{title:"Create Product",children:(0,m.jsxs)(A.Z,{color:"primary",size:"small",onClick:function(){a(!0)},children:["Create Product",(0,m.jsx)(L.Z,{})]})}),(0,m.jsxs)(I.Z,{open:i,onClose:_,children:[(0,m.jsx)(O.Z,{children:"Create Product"}),(0,m.jsxs)(N.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:[(0,m.jsx)(u.Z,{variant:"h6",children:"Does the product have variants?"}),(0,m.jsxs)(u.Z,{children:["Yes",(0,m.jsx)(z.Z,{name:"isVariant",checked:Y,onChange:function(e){ee(e.target.checked),W((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,T.Z)({},e.target.name,e.target.checked))}))},inputProps:{"aria-label":"controlled"},sx:{padding:"0px",width:"fit-content",margin:"auto"}})]}),(0,m.jsx)(D.Z,{size:"small",name:"name",id:"product-name",label:"Product Name",variant:"outlined",sx:{marginTop:"4px"},onChange:M}),(0,m.jsx)(D.Z,{id:"product-description",name:"description",label:"Description",multiline:!0,rows:4,variant:"outlined",onChange:M}),(0,m.jsx)(D.Z,{type:"number",name:"price",size:"small",id:"price",label:"Price",variant:"outlined",onChange:M}),!Y&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(D.Z,{type:"number",name:"quantity",size:"small",id:"quantity",label:"Quantity",variant:"outlined",onChange:M})}),(0,m.jsx)(D.Z,{id:"category",select:!0,size:"small",name:"category",label:"Select Category",value:te,onChange:function(e){re(e.target.value),M(e)},helperText:"select product category",children:[{value:"Computers",label:"Computers"},{value:"Electronics",label:"Electronics"},{value:"Home & Kitchen",label:"Home & Kitchen"},{value:"Smartphones",label:"Smartphones"}].map((function(e){return(0,m.jsx)(F.Z,{value:e.value,children:e.label},e.value)}))}),Y&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{}),(0,m.jsx)(u.Z,{variant:"h5",children:"Variant Name :"}),(0,m.jsx)(D.Z,{size:"small",id:"variant-name",label:"Size / Color / Storage...",variant:"outlined",value:b,onChange:function(e){C(e.target.value)}}),function(){var e=[];if(c<=10){for(var n=1;n<=c;n++)e.push((0,m.jsxs)(r.Fragment,{children:[(0,m.jsxs)(u.Z,{variant:"h6",children:["Variant options ",n]}),(0,m.jsx)(D.Z,{size:"small",name:"variantTitle",id:""+n,label:"Small / Blue / 128GB...",variant:"outlined",onChange:Q}),(0,m.jsx)(D.Z,{type:"number",name:"variantQuantity",size:"small",id:""+n,label:"Quantity",variant:"outlined",onChange:Q}),(0,m.jsx)(x.Z,{sx:{marginBottom:"1rem"}})]},n));return e}for(var i=1;i<=10;i++)e.push((0,m.jsxs)(r.Fragment,{children:[(0,m.jsxs)(u.Z,{variant:"h6",children:["Variant options ",i]}),(0,m.jsx)(D.Z,{size:"small",name:"variantTitle"+i,id:""+i,label:"Small / Blue / 128GB...",variant:"outlined",onChange:Q}),(0,m.jsx)(D.Z,{type:"number",name:"variantQuantity"+i,size:"small",id:""+i,label:"Quantity",variant:"outlined",onChange:Q}),(0,m.jsx)(x.Z,{sx:{marginBottom:"1rem"}})]},i));return e}(),(0,m.jsx)(h.Z,{onClick:function(){d(c+1)},children:"Add more options"})]}),function(){var e=[];if(p<=5){for(var n=1;n<=p;n++)e.push((0,m.jsx)(D.Z,{size:"small",name:"imageurl"+n,id:"image-links",label:"Image Link "+n,variant:"outlined",onChange:J},n));return e}for(var i=1;i<=5;i++)e.push((0,m.jsx)(D.Z,{size:"small",name:"imageurl",id:"image-links",label:"Image Link "+i,variant:"outlined",onChange:J},i));return e}(),(0,m.jsx)(h.Z,{onClick:function(){j(p+1)},children:"Add more Images"}),(0,m.jsx)(D.Z,{size:"small",name:"itemid",id:"product-id",label:"Product ID",variant:"outlined",onChange:M})]}),(0,m.jsxs)(B.Z,{children:[(0,m.jsx)(h.Z,{onClick:function(){_(),ee(!1),j(1),d(1),W(""),C(""),k(""),k("")},children:"Cancel"}),(0,m.jsx)(h.Z,{onClick:function(){U().post("/api/v1/products/",{product:V,imageLinks:E,variantName:b,variants:S,checked:Y}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),_()},variant:"contained",children:"Add Product"})]})]})]})}function X(e){var n=e.item,i=(0,r.useState)(!1),a=(0,t.Z)(i,2),s=a[0],l=a[1],o=(0,r.useState)(""),c=(0,t.Z)(o,2),d=c[0],x=c[1],g=(0,r.useState)(""),Z=(0,t.Z)(g,2),p=Z[0],j=Z[1],f=function(){return l(!1)},v=""===d&&""===p;return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(h.Z,{onClick:function(){l(!0)},children:"Edit"}),(0,m.jsxs)(I.Z,{open:s,onClose:f,children:[(0,m.jsx)(O.Z,{children:"Update Product"}),(0,m.jsxs)(N.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:[(0,m.jsxs)(u.Z,{children:["Price : ",n.price]}),(0,m.jsx)(D.Z,{size:"small",id:"price",label:"New Price",variant:"outlined",onChange:function(e){x(e.target.value)}}),(0,m.jsxs)(u.Z,{children:["Quantity : ",n.quantity]}),(0,m.jsx)(D.Z,{size:"small",id:"quantity",label:"New Quantity",variant:"outlined",onChange:function(e){j(e.target.value)}})]}),(0,m.jsxs)(B.Z,{children:[(0,m.jsx)(h.Z,{onClick:f,children:"Cancel"}),(0,m.jsx)(h.Z,{disabled:v,onClick:function(){console.log(n._id),U().put("/api/v1/product/".concat(n._id),{price:d,quantity:p}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),f()},variant:"contained",children:"Update"})]})]})]})}function $(e){var n=e.id,i=(0,r.useState)(!1),a=(0,t.Z)(i,2),s=a[0],l=a[1],o=function(){return l(!1)};return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(h.Z,{onClick:function(){l(!0)},children:"Delete"}),(0,m.jsxs)(I.Z,{open:s,onClose:o,children:[(0,m.jsx)(O.Z,{children:"Delete Product"}),(0,m.jsx)(N.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:(0,m.jsx)(u.Z,{children:"Are you sure you want to delete this product? This action can't be reverted."})}),(0,m.jsxs)(B.Z,{children:[(0,m.jsx)(h.Z,{onClick:o,children:"Cancel"}),(0,m.jsx)(h.Z,{onClick:function(){console.log(n),U().delete("/api/v1/product/".concat(n)).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),o()},variant:"contained",children:"Delete"})]})]})]})}function V(e){var n=e.id,i=(0,r.useState)(!1),a=(0,t.Z)(i,2),s=a[0],l=a[1],o=function(){return l(!1)};return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(h.Z,{onClick:function(){l(!0)},children:"Delete"}),(0,m.jsxs)(I.Z,{open:s,onClose:o,children:[(0,m.jsx)(O.Z,{children:"Delete Promotion"}),(0,m.jsx)(N.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:(0,m.jsx)(u.Z,{children:"Are you sure you want to delete this promotion? This action can't be reverted."})}),(0,m.jsxs)(B.Z,{children:[(0,m.jsx)(h.Z,{onClick:o,children:"Cancel"}),(0,m.jsx)(h.Z,{onClick:function(){console.log(n),U().delete("/api/v1/promotions/",{headers:{promotionid:n}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),o()},variant:"contained",children:"Delete"})]})]})]})}function W(e){var n=e.item,i=(0,r.useState)(!1),a=(0,t.Z)(i,2),l=a[0],o=a[1],c=(0,r.useState)(n._id),d=(0,t.Z)(c,2),x=d[0],g=(d[1],(0,r.useState)({title:n.title,desc:n.desc,img:n.img,bg:n.bg,linkto:n.linkto,id:n.id})),Z=(0,t.Z)(g,2),p=Z[0],j=Z[1],f=function(){return o(!1)},v=function(e){j((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,T.Z)({},e.target.name,e.target.value))}))},b=""===p.title||""===p.desc||""===p.img||""===p.bg||""===p.linkto||""===p.id;return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(h.Z,{onClick:function(){o(!0)},children:"Edit"}),(0,m.jsxs)(I.Z,{open:l,onClose:f,children:[(0,m.jsx)(O.Z,{children:"Update Promotion"}),(0,m.jsxs)(N.Z,{sx:{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"},children:[(0,m.jsx)(u.Z,{children:"Title :"}),(0,m.jsx)(D.Z,{defaultValue:n.title,size:"small",name:"title",id:"promotion-title",label:"Promotion Title",variant:"outlined",sx:{marginTop:"4px"},onChange:v}),(0,m.jsx)(u.Z,{children:"Description :"}),(0,m.jsx)(D.Z,{defaultValue:n.desc,id:"promotion-description",name:"desc",label:"Description",multiline:!0,rows:4,variant:"outlined",onChange:v}),(0,m.jsx)(u.Z,{children:"Image URL :"}),(0,m.jsx)(D.Z,{defaultValue:n.img,size:"small",name:"img",id:"image-links",label:"Image Link",variant:"outlined",onChange:v}),(0,m.jsx)(u.Z,{children:"Background Color :"}),(0,m.jsx)(D.Z,{defaultValue:n.bg,size:"small",name:"bg",id:"bgcolor",label:"Background Color",variant:"outlined",onChange:v}),(0,m.jsx)(u.Z,{children:"Link To :"}),(0,m.jsx)(D.Z,{defaultValue:n.linkto,size:"small",name:"linkto",id:"linkto",label:"Link To",variant:"outlined",onChange:v}),(0,m.jsx)(u.Z,{children:"ID :"}),(0,m.jsx)(D.Z,{defaultValue:n.id,size:"small",name:"id",id:"Promotion-id",label:"Promotion ID",variant:"outlined",onChange:v})]}),(0,m.jsxs)(B.Z,{children:[(0,m.jsx)(h.Z,{onClick:f,children:"Cancel"}),(0,m.jsx)(h.Z,{disabled:b,onClick:function(){U().put("/api/v1/promotions/",{promotion:p,promoid:x}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),f()},variant:"contained",children:"Update"})]})]})]})}function M(e,n,i){return n[i]<e[i]?-1:n[i]>e[i]?1:0}function J(e,n){return"desc"===e?function(e,i){return M(e,i,n)}:function(e,i){return-M(e,i,n)}}function Q(e,n){var i=e.map((function(e,n){return[e,n]}));return i.sort((function(e,i){var t=n(e[0],i[0]);return 0!==t?t:e[1]-i[1]})),i.map((function(e){return e[0]}))}var _=[{id:"name",numeric:!1,disablePadding:!1,label:"Product"},{id:"price",numeric:!0,disablePadding:!1,label:"Price"},{id:"quantity",numeric:!0,disablePadding:!1,label:"Quantity"},{id:"actions",numeric:!1,disablePadding:!1,label:"Actions"}];function H(e){var n=e.order,i=e.orderBy,t=e.onRequestSort;return(0,m.jsx)(b.Z,{children:(0,m.jsx)(y.Z,{children:_.map((function(e){return(0,m.jsx)(f.Z,{align:(e.numeric,"center"),padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&n,children:(0,m.jsxs)(w.Z,{active:i===e.id,direction:i===e.id?n:"asc",onClick:(r=e.id,function(e){t(e,r)}),children:[e.label,i===e.id?(0,m.jsx)(d.Z,{component:"span",sx:P.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}var K=function(){return(0,m.jsxs)(S.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:[(0,m.jsx)(u.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Products"}),(0,m.jsx)(R,{})]})};function Y(){var e=(0,r.useState)("asc"),n=(0,t.Z)(e,2),i=n[0],a=n[1],s=(0,r.useState)("name"),l=(0,t.Z)(s,2),o=l[0],c=l[1],u=(0,r.useState)(0),x=(0,t.Z)(u,2),h=x[0],g=x[1],Z=(0,r.useState)(!1),b=(0,t.Z)(Z,2),w=b[0],S=(b[1],(0,r.useState)(5)),P=(0,t.Z)(S,2),T=P[0],D=P[1],z=(0,r.useState)([]),F=(0,t.Z)(z,2),I=F[0],B=F[1];r.useEffect((function(){U().get("/api/v1/products").then((function(e){B(e.data)})).catch((function(e){console.log(e)}))}),[]);var N=h>0?Math.max(0,(1+h)*T-I.length):0;return(0,m.jsx)(d.Z,{sx:{width:"100%"},children:(0,m.jsxs)(k.Z,{sx:{width:"100%",mb:2},children:[(0,m.jsx)(K,{}),(0,m.jsx)(v.Z,{children:(0,m.jsxs)(p.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:w?"small":"medium",children:[(0,m.jsx)(H,{order:i,orderBy:o,onRequestSort:function(e,n){a(o===n&&"asc"===i?"desc":"asc"),c(n)}}),(0,m.jsxs)(j.Z,{children:[Q(I,J(i,o)).slice(h*T,h*T+T).map((function(e,n){var i="enhanced-table-checkbox-".concat(n);return(0,m.jsxs)(y.Z,{hover:!0,tabIndex:-1,children:[(0,m.jsx)(f.Z,{component:"th",id:i,scope:"row",padding:"normal",children:e.name}),(0,m.jsx)(f.Z,{align:"center",children:e.price}),(0,m.jsx)(f.Z,{align:"center",children:e.quantity?e.quantity:"Variants"}),(0,m.jsxs)(f.Z,{align:"center",children:[(0,m.jsx)(X,{item:e}),(0,m.jsx)($,{id:e._id})]})]},e.name)})),N>0&&(0,m.jsx)(y.Z,{style:{height:(w?33:53)*N},children:(0,m.jsx)(f.Z,{colSpan:6})})]})]})}),(0,m.jsx)(C.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:I.length,rowsPerPage:T,page:h,onPageChange:function(e,n){g(n)},onRowsPerPageChange:function(e){D(parseInt(e.target.value,10)),g(0)}})]})})}function ee(e,n,i){return n[i]<e[i]?-1:n[i]>e[i]?1:0}function ne(e,n){return"desc"===e?function(e,i){return ee(e,i,n)}:function(e,i){return-ee(e,i,n)}}function ie(e,n){var i=e.map((function(e,n){return[e,n]}));return i.sort((function(e,i){var t=n(e[0],i[0]);return 0!==t?t:e[1]-i[1]})),i.map((function(e){return e[0]}))}var te=[{id:"title",numeric:!1,disablePadding:!1,label:"Title"},{id:"imglink",numeric:!0,disablePadding:!1,label:"img URL"},{id:"bgcolor",numeric:!0,disablePadding:!1,label:"Background Color"},{id:"linkto",numeric:!0,disablePadding:!1,label:"Link To"},{id:"actions",numeric:!1,disablePadding:!1,label:"Actions"}];function re(e){var n=e.order,i=e.orderBy,t=e.onRequestSort;return(0,m.jsx)(b.Z,{children:(0,m.jsx)(y.Z,{children:te.map((function(e){return(0,m.jsx)(f.Z,{align:"center",padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&n,children:(0,m.jsxs)(w.Z,{active:i===e.id,direction:i===e.id?n:"asc",onClick:(r=e.id,function(e){t(e,r)}),children:[e.label,i===e.id?(0,m.jsx)(d.Z,{component:"span",sx:P.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}var ae=function(){return(0,m.jsxs)(S.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:[(0,m.jsx)(u.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Promotions"}),(0,m.jsx)(E,{})]})};function se(){var e=(0,r.useState)("asc"),n=(0,t.Z)(e,2),i=n[0],a=n[1],s=(0,r.useState)("name"),l=(0,t.Z)(s,2),o=l[0],c=l[1],u=(0,r.useState)(0),x=(0,t.Z)(u,2),h=x[0],g=x[1],Z=(0,r.useState)(!1),b=(0,t.Z)(Z,2),w=b[0],S=(b[1],(0,r.useState)(5)),P=(0,t.Z)(S,2),T=P[0],D=P[1],z=(0,r.useState)([]),F=(0,t.Z)(z,2),I=F[0],B=F[1];r.useEffect((function(){U().get("/api/v1/promotions").then((function(e){console.log(e.data.data),B(e.data.data)})).catch((function(e){console.log(e)}))}),[]);var N=h>0?Math.max(0,(1+h)*T-I.length):0;return(0,m.jsx)(d.Z,{sx:{width:"100%"},children:(0,m.jsxs)(k.Z,{sx:{width:"100%",mb:2},children:[(0,m.jsx)(ae,{}),(0,m.jsx)(v.Z,{children:(0,m.jsxs)(p.Z,{sx:{minWidth:750,tableLayout:"fixed"},"aria-labelledby":"tableTitle",size:w?"small":"medium",children:[(0,m.jsx)(re,{order:i,orderBy:o,onRequestSort:function(e,n){a(o===n&&"asc"===i?"desc":"asc"),c(n)}}),(0,m.jsxs)(j.Z,{children:[ie(I,ne(i,o)).slice(h*T,h*T+T).map((function(e,n){var i="enhanced-table-checkbox-".concat(n);return(0,m.jsxs)(y.Z,{hover:!0,tabIndex:-1,children:[(0,m.jsx)(f.Z,{component:"th",id:i,scope:"row",padding:"normal",children:e.title}),(0,m.jsx)(f.Z,{sx:{wordWrap:"break-word"},align:"center",children:e.img}),(0,m.jsx)(f.Z,{align:"center",children:e.bg}),(0,m.jsx)(f.Z,{align:"center",children:e.linkto}),(0,m.jsxs)(f.Z,{align:"center",children:[(0,m.jsx)(W,{item:e}),(0,m.jsx)(V,{id:e._id})]})]},n)})),N>0&&(0,m.jsx)(y.Z,{style:{height:(w?33:53)*N},children:(0,m.jsx)(f.Z,{colSpan:6})})]})]})}),(0,m.jsx)(C.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:I.length,rowsPerPage:T,page:h,onPageChange:function(e,n){g(n)},onRowsPerPageChange:function(e){D(parseInt(e.target.value,10)),g(0)}})]})})}var le=i(3484);function oe(e,n,i){return n[i]<e[i]?-1:n[i]>e[i]?1:0}function ce(e,n){return"desc"===e?function(e,i){return oe(e,i,n)}:function(e,i){return-oe(e,i,n)}}function de(e,n){var i=e.map((function(e,n){return[e,n]}));return i.sort((function(e,i){var t=n(e[0],i[0]);return 0!==t?t:e[1]-i[1]})),i.map((function(e){return e[0]}))}var ue=[{id:"name",numeric:!1,disablePadding:!1,label:"Name"},{id:"email",numeric:!0,disablePadding:!1,label:"Email"},{id:"date-created",numeric:!1,disablePadding:!1,label:"Date Created"},{id:"actions",numeric:!1,disablePadding:!1,label:"Actions"}];function xe(e){var n=e.order,i=e.orderBy,t=e.onRequestSort;return(0,m.jsx)(b.Z,{children:(0,m.jsx)(y.Z,{children:ue.map((function(e){return(0,m.jsx)(f.Z,{align:"center",padding:e.disablePadding?"none":"normal",sortDirection:i===e.id&&n,children:(0,m.jsxs)(w.Z,{active:i===e.id,direction:i===e.id?n:"asc",onClick:(r=e.id,function(e){t(e,r)}),children:[e.label,i===e.id?(0,m.jsx)(d.Z,{component:"span",sx:P.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}var he=function(){return(0,m.jsx)(S.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,m.jsx)(u.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Users"})})};function me(){var e=r.useContext(le.St),n=e.userContext,i=(e.setUserContext,null===n||void 0===n?void 0:n.id),a=(0,r.useState)("asc"),s=(0,t.Z)(a,2),l=s[0],o=s[1],c=(0,r.useState)("name"),u=(0,t.Z)(c,2),x=u[0],g=u[1],Z=(0,r.useState)(0),b=(0,t.Z)(Z,2),w=b[0],S=b[1],P=(0,r.useState)(!1),T=(0,t.Z)(P,2),D=T[0],z=(T[1],(0,r.useState)(5)),F=(0,t.Z)(z,2),I=F[0],B=F[1],N=(0,r.useState)([]),O=(0,t.Z)(N,2),A=O[0],L=O[1];r.useEffect((function(){U().get("/api/v1/users",{headers:{id:i}}).then((function(e){L(e.data)})).catch((function(e){console.log(e)}))}),[]);var q=w>0?Math.max(0,(1+w)*I-A.length):0;return(0,m.jsx)(d.Z,{sx:{width:"100%"},children:(0,m.jsxs)(k.Z,{sx:{width:"100%",mb:2},children:[(0,m.jsx)(he,{}),(0,m.jsx)(v.Z,{children:(0,m.jsxs)(p.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:D?"small":"medium",children:[(0,m.jsx)(xe,{order:l,orderBy:x,onRequestSort:function(e,n){o(x===n&&"asc"===l?"desc":"asc"),g(n)}}),(0,m.jsxs)(j.Z,{children:[de(A,ce(l,x)).slice(w*I,w*I+I).map((function(e,n){var i="enhanced-table-checkbox-".concat(n);return(0,m.jsxs)(y.Z,{hover:!0,tabIndex:-1,children:[(0,m.jsx)(f.Z,{component:"th",id:i,scope:"row",padding:"normal",children:e.name}),(0,m.jsx)(f.Z,{align:"center",children:e.email}),(0,m.jsx)(f.Z,{align:"center",children:e.createdAt}),(0,m.jsxs)(f.Z,{align:"center",children:[(0,m.jsx)(h.Z,{children:"Edit"}),(0,m.jsx)(h.Z,{children:"Delete"})]})]},n)})),q>0&&(0,m.jsx)(y.Z,{style:{height:(D?33:53)*q},children:(0,m.jsx)(f.Z,{colSpan:6})})]})]})}),(0,m.jsx)(C.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:A.length,rowsPerPage:I,page:w,onPageChange:function(e,n){S(n)},onRowsPerPageChange:function(e){B(parseInt(e.target.value,10)),S(0)}})]})})}var ge=["children","value","index"];function Ze(e){var n=e.children,i=e.value,t=e.index,r=(0,l.Z)(e,ge);return(0,m.jsx)("div",(0,s.Z)((0,s.Z)({role:"tabpanel",hidden:i!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},r),{},{children:i===t&&(0,m.jsx)(d.Z,{sx:{p:3},children:(0,m.jsx)("div",{children:n})})}))}function pe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function je(){var e=r.useState(0),n=(0,t.Z)(e,2),i=n[0],a=n[1];return(0,m.jsxs)(d.Z,{sx:{width:"100%",display:{xs:"block",md:"none"}},children:[(0,m.jsx)(d.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,m.jsxs)(o.Z,{value:i,onChange:function(e,n){a(n)},"aria-label":"basic tabs example",variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[(0,m.jsx)(c.Z,(0,s.Z)({label:"Orders"},pe(0))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Sales"},pe(1))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Products"},pe(2))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Promotions"},pe(3))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Users"},pe(4)))]})}),(0,m.jsx)(Ze,{value:i,index:0,children:(0,m.jsx)(g,{})}),(0,m.jsx)(Ze,{value:i,index:1,children:(0,m.jsx)(Z,{})}),(0,m.jsx)(Ze,{value:i,index:2,children:(0,m.jsx)(Y,{})}),(0,m.jsx)(Ze,{value:i,index:3,children:(0,m.jsx)(se,{})}),(0,m.jsx)(Ze,{value:i,index:4,children:(0,m.jsx)(me,{})})]})}var fe=["children","value","index"];function ve(e){var n=e.children,i=e.value,t=e.index,r=(0,l.Z)(e,fe);return(0,m.jsx)("div",(0,s.Z)((0,s.Z)({style:{width:"100%"},role:"tabpanel",hidden:i!==t,id:"vertical-tabpanel-".concat(t),"aria-labelledby":"vertical-tab-".concat(t)},r),{},{children:i===t&&(0,m.jsx)(d.Z,{sx:{p:2},children:(0,m.jsx)("div",{children:n})})}))}function be(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function Ce(){var e=r.useState(0),n=(0,t.Z)(e,2),i=n[0],a=n[1];return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsxs)(d.Z,{sx:{flexGrow:1,bgcolor:"background.paper",display:{xs:"none",md:"flex"},height:"fit-content",width:"100%"},children:[(0,m.jsxs)(o.Z,{orientation:"vertical",variant:"scrollable",value:i,onChange:function(e,n){a(n)},"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:[(0,m.jsx)(c.Z,(0,s.Z)({label:"Orders"},be(0))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Sales"},be(1))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Products"},be(2))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Promotions"},be(3))),(0,m.jsx)(c.Z,(0,s.Z)({label:"Users"},be(4)))]}),(0,m.jsx)(ve,{value:i,index:0,children:(0,m.jsx)(g,{})}),(0,m.jsx)(ve,{value:i,index:1,children:(0,m.jsx)(Z,{})}),(0,m.jsx)(ve,{value:i,index:2,children:(0,m.jsx)(Y,{})}),(0,m.jsx)(ve,{value:i,index:3,children:(0,m.jsx)(se,{})}),(0,m.jsx)(ve,{value:i,index:4,children:(0,m.jsx)(me,{})})]}),(0,m.jsx)(je,{})]})}function ye(){var e=(0,r.useContext)(le.St),n=e.userContext,i=(e.setUserContext,(0,r.useState)(!1)),s=(0,t.Z)(i,2),l=s[0],o=s[1],c=null===n||void 0===n?void 0:n.id;return(0,r.useEffect)((function(){var e;null!==n&&void 0!==n&&n.id?(e=c,U().get("/api/v1/users/".concat(e)).then((function(e){!0===e.data.data.isAdmin?o(!0):o(!1)})).catch((function(e){console.log(e)}))):o(!1)}),[n]),(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(a.Z,{}),l&&(0,m.jsx)(Ce,{}),!l&&(0,m.jsx)(u.Z,{variant:"h5",sx:{margin:"auto",textAlign:"center",marginTop:"2rem"},children:"You don't have admin privilages"})]})}}}]);
//# sourceMappingURL=187.1202a15c.chunk.js.map