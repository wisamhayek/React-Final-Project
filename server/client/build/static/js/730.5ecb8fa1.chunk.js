"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[730],{4707:function(n,i,t){t.r(i),t.d(i,{default:function(){return Zn}});var e,o,c,l,r,d,s,a,u,x,f,h,p,Z,v,j,g,m,y,P,b,C,w,k,N,O=t(885),E=t(168),q=t(2791),S=t(102),U=t(2419),D=t(5585),H=t(8789),z=t(1168),I=t(338),R=t(4569),T=t.n(R),$=t(3484),A=t(3400),M=t(8155),G=t(6871),Y=t(184),B=H.ZP.div(e||(e=(0,E.Z)([""]))),F=H.ZP.div(o||(o=(0,E.Z)(["\n  padding: 20px;\n  ","  \n"])),(0,I.a)({padding:"10px"})),K=H.ZP.h1(c||(c=(0,E.Z)(["\n  font-weight: 300;\n  text-align: center;\n"]))),V=H.ZP.div(l||(l=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n"]))),W=H.ZP.button(r||(r=(0,E.Z)(["\n  padding: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: ",";\n  background-color: ",";\n  color: ",";\n"])),(function(n){return"filled"===n.type&&"none"}),(function(n){return"filled"===n.type?"black":"transparent"}),(function(n){return"filled"===n.type&&"white"})),X=H.ZP.div(d||(d=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n  ","\n"])),(0,I.a)({flexDirection:"column"})),_=H.ZP.div(s||(s=(0,E.Z)(["\n  flex: 3;\n"]))),J=H.ZP.div(a||(a=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n  ","\n"])),(0,I.a)({flexDirection:"column"})),L=H.ZP.div(u||(u=(0,E.Z)(["\n  flex: 2;\n  display: flex;\n"]))),Q=H.ZP.img(x||(x=(0,E.Z)(["\n  width: 200px;\n"]))),nn=H.ZP.div(f||(f=(0,E.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),tn=H.ZP.span(h||(h=(0,E.Z)([""]))),en=H.ZP.span(p||(p=(0,E.Z)([""]))),on=H.ZP.span(Z||(Z=(0,E.Z)([""]))),cn=H.ZP.div(v||(v=(0,E.Z)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),ln=H.ZP.div(j||(j=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),rn=H.ZP.div(g||(g=(0,E.Z)(["\n  font-size: 24px;\n  margin: 5px;\n  ","\n"])),(0,I.a)({margin:"5px 15px"})),dn=H.ZP.div(m||(m=(0,E.Z)(["\n  font-size: 30px;\n  font-weight: 200;\n  ","\n"])),(0,I.a)({marginBottom:"20px"})),sn=H.ZP.hr(y||(y=(0,E.Z)(["\n  background-color: #eee;\n  border: none;\n  height: 1px;\n"]))),an=H.ZP.div(P||(P=(0,E.Z)(["\n  flex: 1;\n  border: 0.5px solid lightgray;\n  border-radius: 10px;\n  padding: 20px;\n  height: 50vh;\n"]))),un=H.ZP.h1(b||(b=(0,E.Z)(["\n  font-weight: 200;\n"]))),xn=H.ZP.div(C||(C=(0,E.Z)(["\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return"total"===n.type&&"500"}),(function(n){return"total"===n.type&&"24px"})),fn=H.ZP.span(w||(w=(0,E.Z)([""]))),hn=H.ZP.span(k||(k=(0,E.Z)([""]))),pn=H.ZP.button(N||(N=(0,E.Z)(["\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n  font-weight: 600;\n  cursor:pointer;\n"])));function Zn(){var n=(0,q.useContext)($.A9),i=n.cartContext,t=n.setCartContext,e=(0,q.useContext)($.St),o=e.userContext,c=(e.setUserContext,null===o||void 0===o?void 0:o.id),l=(0,q.useState)(Number(0)),r=(0,O.Z)(l,2),d=r[0],s=r[1],a=(0,G.s0)();function u(){T().get("/api/v1/profile/".concat(c)).then((function(n){var i,e,o;t(null===(i=n.data)||void 0===i||null===(e=i.data)||void 0===e||null===(o=e.profile)||void 0===o?void 0:o.cart)})).catch((function(n){console.log(n)}))}function x(n){n.preventDefault(),T().post("/create-checkout-session",{subtotal:d,cartContext:i}).then((function(n){n.data.url&&(window.location.href=n.data.url)})).catch((function(n){console.log(n)}))}return(0,q.useEffect)((function(){document.title="Cart"}),[]),(0,q.useEffect)((function(){null!==o&&void 0!==o&&o.id&&T().get("/api/v1/profile/".concat(c)).then((function(n){var i,e,o;t(null===(i=n.data)||void 0===i||null===(e=i.data)||void 0===e||null===(o=e.profile)||void 0===o?void 0:o.cart)})).catch((function(n){console.log(n)}))}),[o]),(0,q.useEffect)((function(){(null===i||void 0===i?void 0:i.length)>0&&function(){var n=0;i.map((function(i,t){return n+=i.quantity*i.itemid.price})),s(n)}()}),[i]),0===(null===i||void 0===i?void 0:i.length)||!1===i||null===i?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(S.Z,{}),(0,Y.jsxs)(F,{children:[(0,Y.jsx)(K,{children:"Your Cart is empty"}),(0,Y.jsx)(V,{children:(0,Y.jsx)(W,{style:{margin:"auto"},onClick:function(){a(M.Xq)},children:"CONTINUE SHOPPING"})})]})]}):(0,Y.jsx)(q.Fragment,{children:(0,Y.jsxs)(B,{children:[(0,Y.jsx)(S.Z,{}),(0,Y.jsxs)(F,{children:[(0,Y.jsx)(K,{children:"YOUR BAG"}),(0,Y.jsxs)(V,{children:[(0,Y.jsx)(W,{onClick:function(){a(M.Xq)},children:"CONTINUE SHOPPING"}),(0,Y.jsx)(W,{type:"filled",onClick:function(n){x(n)},children:"CHECKOUT NOW"})]}),(0,Y.jsxs)(X,{children:[(0,Y.jsxs)(_,{children:[null===i||void 0===i?void 0:i.map((function(n,i){return(0,Y.jsxs)(J,{children:[(0,Y.jsxs)(L,{children:[(0,Y.jsx)(Q,{src:n.itemid.imageurl.imageurl1}),(0,Y.jsxs)(nn,{children:[(0,Y.jsxs)(tn,{children:[(0,Y.jsx)("b",{children:"Product:"})," ",n.itemid.name]}),(0,Y.jsxs)(en,{children:[(0,Y.jsx)("b",{children:"ID:"})," ",n.itemid.itemid]}),n.itemid.isVariant&&(0,Y.jsxs)(on,{children:[(0,Y.jsxs)("b",{children:[n.itemid.variantName,":"]})," ",n.variant]})]})]}),(0,Y.jsxs)(cn,{children:[(0,Y.jsxs)(ln,{children:[(0,Y.jsx)(A.Z,{onClick:function(){!function(n,i){var t=i+1;T().put("/api/v1/profile/cart",{ownerid:c,itemid:n,quantity:t}).then((function(n){u()})).catch((function(n){console.log(n)}))}(n.itemid._id,n.quantity)},children:(0,Y.jsx)(U.Z,{})}),(0,Y.jsx)(rn,{children:n.quantity}),(0,Y.jsx)(A.Z,{onClick:function(){!function(n,i){var t=i-1;0===t?T().delete("/api/v1/profile/cart",{headers:{ownerid:c,itemid:n}}).then((function(n){u()})).catch((function(n){console.log(n)})):T().put("/api/v1/profile/cart",{ownerid:c,itemid:n,quantity:t}).then((function(n){u()})).catch((function(n){console.log(n)}))}(n.itemid._id,n.quantity)},children:(0,Y.jsx)(D.Z,{})})]}),(0,Y.jsxs)(dn,{children:[n.itemid.price,"$"]})]})]},i)})),(0,Y.jsx)(sn,{})]}),(0,Y.jsxs)(an,{children:[(0,Y.jsx)(un,{children:"ORDER SUMMARY"}),(0,Y.jsxs)(xn,{children:[(0,Y.jsx)(fn,{children:"Subtotal"}),(0,Y.jsxs)(hn,{children:["$ ",d]})]}),(0,Y.jsxs)(xn,{children:[(0,Y.jsx)(fn,{children:"Estimated Shipping"}),(0,Y.jsx)(hn,{children:"$ 5.90"})]}),(0,Y.jsxs)(xn,{children:[(0,Y.jsx)(fn,{children:"Shipping Discount"}),(0,Y.jsx)(hn,{children:"$ -5.90"})]}),(0,Y.jsxs)(xn,{type:"total",children:[(0,Y.jsx)(fn,{children:"Total"}),(0,Y.jsxs)(hn,{children:["$ ",d]})]}),(0,Y.jsx)(pn,{onClick:function(n){x(n)},children:"CHECKOUT NOW"})]})]})]}),(0,Y.jsx)(z.Z,{})]})})}},2419:function(n,i,t){var e=t(4836);i.Z=void 0;var o=e(t(5649)),c=t(184),l=(0,o.default)((0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");i.Z=l},5585:function(n,i,t){var e=t(4836);i.Z=void 0;var o=e(t(5649)),c=t(184),l=(0,o.default)((0,c.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");i.Z=l}}]);
//# sourceMappingURL=730.5ecb8fa1.chunk.js.map