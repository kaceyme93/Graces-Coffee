(this.webpackJsonpstarting_code=this.webpackJsonpstarting_code||[]).push([[0],{35:function(e,t,a){e.exports=a(72)},41:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=a(1),o=a.n(s),m=a(4),i=a(2),u=a(6),p=a(3),d=(a(41),a(12)),f=a.n(d);function b(){return v.apply(this,arguments)}function v(){return(v=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/health");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{healthy:!1});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function E(e){return h.apply(this,arguments)}function h(){return(h=Object(m.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/products/".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function N(){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/products");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function x(){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/cart");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return(w=Object(m.a)(o.a.mark((function e(t,a,n,r,c,l){var s,m,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/cart");case 3:return s=e.sent,m=s.data,e.abrupt("return",m);case 8:i=e.sent,u=i.data,l(u.token),localStorage.setItem("jwt",u.token),alert(u.message),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function j(){return(j=Object(m.a)(o.a.mark((function e(t,a,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("/api/users/login",{username:t,password:a});case 3:r=e.sent,c=r.data,n(c.token),localStorage.setItem("jwt",c.token),alert(c.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function k(){return(k=Object(m.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/users/me",{headers:O(a)});case 3:n=e.sent,r=n.data,t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var O=function(e){return e?{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}:{"Content-Type":"application/json"}};function S(e){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/orders/".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var A=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),d=s[0],f=s[1],v=Object(n.useState)({}),E=Object(i.a)(v,2),h=E[0],N=E[1],g=Object(n.useState)([]),x=Object(i.a)(g,2),y=x[0],w=x[1],j=localStorage.getItem("jwt"),O=localStorage.getItem("localStorageCart");return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,a=t.healthy,c(a?"api is up! :D":"api is down :/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e,t){k.apply(this,arguments)}(N,d),j&&f(j),e()}),[d,j]),Object(n.useEffect)((function(){O&&w(O)}),[O]),console.log(a),r.a.createElement("div",{className:"app-container"},r.a.createElement(u.a,null,r.a.createElement(M,{token:d,setToken:f,setUserInfo:N,userInfo:h}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/products/:productId"},r.a.createElement(R,{cart:y,setCart:w})),r.a.createElement(p.a,{exact:!0,path:"/products"},r.a.createElement(z,null)),r.a.createElement(p.a,{exact:!0,path:"/register"},r.a.createElement(H,{setToken:f})),r.a.createElement(p.a,{exact:!0,path:"/login"},r.a.createElement(F,{setToken:f})),r.a.createElement(p.a,{exact:!0,path:"/profile"},r.a.createElement(Z,{userInfo:h})),r.a.createElement(p.a,{exact:!0,path:"/cart"},r.a.createElement(B,null)),r.a.createElement(p.a,{exact:!0,path:"/orders/:orderId"},r.a.createElement(q,null)),r.a.createElement(p.a,{exact:!0,path:"/cart"},r.a.createElement(q,null)),r.a.createElement(p.a,{path:"/"},r.a.createElement(D,null)))))},L=a(21),I=a(11);a(64);var R=function(e){var t=e.cart,a=e.setCart,c=Object(n.useState)([]),l=Object(i.a)(c,2),s=l[0],u=l[1],d=Object(n.useState)(0),f=Object(i.a)(d,2),b=f[0],v=f[1],h=Object(p.g)().productId;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(h);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),r.a.createElement("div",{className:"single-product"},r.a.createElement("img",{src:s.imageURL,alt:s.name}),r.a.createElement("div",{className:"product-details"},r.a.createElement("h2",{className:"single-product-header"},s.name),r.a.createElement("p",null,"$",s.price," ","n/a"!==s.size&&" - "+s.size),r.a.createElement("p",{className:"product-inStock"},!0===s.inStock?"In Stock":"Out of Stock"),r.a.createElement("p",null,s.description),"n/a"!==s.origin&&r.a.createElement("p",null,"Origin: ",s.origin),"n/a"!==s.roast&&r.a.createElement("p",null,"Roast: ",s.roast),r.a.createElement("p",null,"Category: ",s.category),r.a.createElement("div",{className:"single-product-quantity-group"},r.a.createElement("p",{className:"single-product-quantity-button"},r.a.createElement(I.a,{variant:"outline-dark",size:"sm",onClick:function(){b>0&&v(b-1)}},"-"),r.a.createElement("span",{className:"product-quantiity"},"Total: ",b),r.a.createElement(I.a,{variant:"outline-dark",size:"sm",onClick:function(){v(b+1)}},"+"))),!0===s.inStock?r.a.createElement(I.a,{variant:"success",type:"submit",className:"single-product-add-to-cart",onClick:function(){!function(){var e=Object(L.a)(t),n=e.find((function(e){return e.id===h}));n?n.quantity+=s.quantity:e.push(s),a(e);var r=JSON.stringify([].concat(Object(L.a)(t),[s]));localStorage.setItem("cart",r);var c=JSON.parse(localStorage.getItem("cart"));console.log(c)}()}},"Add to Cart"):r.a.createElement(I.a,{variant:"secondary",type:"submit",className:"single-product-out-of-stock"},"Out of Stock")))};a(66);var z=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(p.f)();return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"all-products"},a.map((function(e){return r.a.createElement("div",{key:e.id,className:"products-list"},e.imageURL&&r.a.createElement("img",{src:e.imageURL,alt:e.name,className:"product-image",onClick:function(){l.push("/products/".concat(e.id))}}),r.a.createElement("p",{className:"product-name",onClick:function(){l.push("/products/".concat(e.id))}},e.name),r.a.createElement("p",null,"Price: $",e.price),r.a.createElement("p",null,!0===e.inStock?"In Stock":"Out of Stock")," ")})))};var q=function(e){var t=e.id,a=Object(n.useState)([]),c=Object(i.a)(a,2),l=(c[0],c[1]),s=Object(p.g)().orderId;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(s||t);case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s,t]),r.a.createElement("h1",null,"Hello!")};a(67),a(68);var M=function(e){var t=e.token,a=e.setToken,n=e.userInfo,c=e.setUserInfo,l=Object(p.f)();return r.a.createElement("nav",{className:"nav-bar nav0-bar light p-3 text-white sticky-top",style:{backgroundColor:"#4f2b1f"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start"},r.a.createElement("span",{className:"navbar-text text-white",style:{marginRight:"16px",fontSize:"30px"}},r.a.createElement("div",{className:"site-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-cup-hot",style:{marginRight:"5px"},viewBox:"0 0 16 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"}),r.a.createElement("path",{d:"m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"})),r.a.createElement(u.b,{className:"nav-link px-2 text-white",to:"/"},"Grace's Coffee")," ")),r.a.createElement("ul",{className:"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0",style:{fontSize:"24px"}},r.a.createElement("li",null,r.a.createElement(u.b,{className:"nav-link px-2 text-white",to:"/products"},"Shop"))),t&&r.a.createElement("span",{className:"navbar-text text-white",style:{marginRight:"32px",fontSize:"24px"}},"Welcome ",null===n||void 0===n?void 0:n.firstName),t&&r.a.createElement(u.b,{className:"nav-link px-2 text-white",to:"/profile",style:{marginRight:"32px",fontSize:"24px"}},"My Account"),!t&&r.a.createElement("div",{className:"text-end"},r.a.createElement(u.b,{to:"/login",className:"navbar-links"},"Login"),r.a.createElement(u.b,{to:"/register",className:"navbar-links"},"Register")),r.a.createElement(u.b,{to:"/cart",className:"navbar-links"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",className:"bi bi-cart",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}))),t&&r.a.createElement("div",{className:"text-end"},r.a.createElement(I.a,{type:"button",variant:"danger",className:"logout-button",onClick:function(e){localStorage.removeItem("jwt"),a(null),c(null),l.push("/")}},"Logout")))))};function H(e){var t=e.setToken,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),d=m[0],f=m[1],b=Object(n.useState)(""),v=Object(i.a)(b,2),E=v[0],h=v[1],N=Object(n.useState)(""),g=Object(i.a)(N,2),x=g[0],y=g[1],j=Object(n.useState)(""),k=Object(i.a)(j,2),O=k[0],S=k[1],C=Object(n.useState)(""),A=Object(i.a)(C,2),L=A[0],I=A[1],R=Object(p.f)();return r.a.createElement("section",{className:"vh-50",style:{backgroundColor:""}},r.a.createElement("div",{className:"container py-5 h-50"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-50"},r.a.createElement("div",{className:"col col-xl-10"},r.a.createElement("div",{className:"card",style:{borderRadius:"1rem"}},r.a.createElement("div",{className:"row g-0"},r.a.createElement("div",{className:"col-md-6 col-lg-5 d-none d-md-block"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80",alt:"login form",className:"img-fluid",style:{borderRadius:"1rem 0 0 1rem"}})),r.a.createElement("div",{className:"col-md-6 col-lg-7 d-flex align-items-center"},r.a.createElement("div",{className:"card-body p-4 p-lg-3 text-black"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),d===E)return function(e,t,a,n,r,c){w.apply(this,arguments)}(l,d,x,O,L,t),f(""),s(""),h(""),y(""),S(""),I(""),void R.push("/products");alert("Passwords must match one another"),f(""),s(""),h(""),y(""),S(""),I("")}},r.a.createElement("div",{className:"d-flex align-items-center mb-3 pb-1"},r.a.createElement("i",{className:"fas fa-cubes fa-2x me-3",style:{color:"#ff6219"}})),r.a.createElement("h5",{className:"fw-normal mb-3 pb-3",style:{letterSpacing:"1px"}},"Register a new account"),r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{type:"text",id:"username",className:"form-control form-control-md",value:l,onChange:function(e){s(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),r.a.createElement("div",{className:"form-outline mb-4 row d-flex justify-content-between"},r.a.createElement("div",{className:"col-5"},r.a.createElement("input",{type:"text",id:"firstName",className:"form-control form-control-md col-5",value:O,onChange:function(e){S(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"firstName"},"First Name")),r.a.createElement("div",{className:"col-5"},r.a.createElement("input",{type:"text",id:"lastName",className:"form-control form-control-md col-5",value:L,onChange:function(e){I(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"lastName"},"Last Name"))),r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{type:"email",id:"email",className:"form-control form-control-md",value:x,onChange:function(e){y(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"email"},"Email Address")),r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{type:"password",id:"password",className:"form-control form-control-md",minLength:"7",value:d,onChange:function(e){f(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password")),r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{type:"password",id:"confirmPassword",className:"form-control form-control-md",minLength:"7",value:E,onChange:function(e){h(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"confirmPassword"},"Confirm password")),r.a.createElement("div",{className:"row d-flex align-items-center"},r.a.createElement("div",{className:"pt-1 mb-4 col-4"},r.a.createElement("button",{className:"btn btn-dark btn-md btn-block",type:"submit"},"Register")),r.a.createElement("p",{className:"col col-8"},"Already have an account?"," ",r.a.createElement("a",{href:"#!",className:"link-info"},r.a.createElement(u.b,{to:"/login"},"Login here")))))))))))))}function F(e){var t=e.setToken,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),d=m[0],f=m[1],b=Object(p.f)();return r.a.createElement("section",{className:"vh-50",style:{backgroundColor:""}},r.a.createElement("div",{className:"container py-5 h-50"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-50"},r.a.createElement("div",{className:"col col-xl-10"},r.a.createElement("div",{className:"card",style:{borderRadius:"1rem"}},r.a.createElement("div",{className:"row g-0"},r.a.createElement("div",{className:"col-md-6 col-lg-5 d-none d-md-block"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80",alt:"login form",className:"img-fluid",style:{borderRadius:"1rem 0 0 1rem"}})),r.a.createElement("div",{className:"col-md-6 col-lg-7 d-flex align-items-center"},r.a.createElement("div",{className:"card-body p-4 p-lg-5 text-black"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){j.apply(this,arguments)}(l,d,t),f(""),s(""),b.push("/products")}},r.a.createElement("div",{className:"d-flex align-items-center mb-3 pb-1"},r.a.createElement("i",{className:"fas fa-cubes fa-2x me-3",style:{color:"#ff6219"}})),r.a.createElement("h5",{className:"fw-normal mb-3 pb-3",style:{letterSpacing:"1px"}},"Sign into your account"),r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{type:"text",id:"username",className:"form-control form-control-lg",value:l,onChange:function(e){s(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),r.a.createElement("div",{className:"form-outline mb-4"},r.a.createElement("input",{type:"password",id:"password",className:"form-control form-control-lg",minLength:"7",value:d,onChange:function(e){f(e.target.value)},required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password")),r.a.createElement("div",{className:"pt-1 mb-4"},r.a.createElement("button",{className:"btn btn-dark btn-lg btn-block",type:"submit"},"Login")),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement("a",{href:"#!",className:"link-info"},r.a.createElement(u.b,{to:"/register"},"Register here"))))))))))))}function Z(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],s=e.userInfo;return r.a.createElement("div",{className:"container rounded bg-white mt-5 mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3",style:{borderRight:"1px solid black"}},r.a.createElement("div",{className:"d-flex flex-column align-items-center text-center p-3 py-5"},r.a.createElement("img",{className:"rounded-circle mt-5",width:"150px",height:"150px",src:s.imageURL,alt:"coffee"}),r.a.createElement("span",{className:"font-weight-bold"},s.username),r.a.createElement("span",{className:"text-black-50"},s.email),r.a.createElement("span",null," "))),c?r.a.createElement("div",{className:"col-md-7",style:{borderRight:"1px solid black"}},r.a.createElement("div",{className:"p-3 py-5"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},r.a.createElement("h4",{className:"text-right"},"Update Profile Settings")),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{className:"labels"},"First name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"first name",value:""})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{className:"labels"},"Last name"),r.a.createElement("input",{type:"text",className:"form-control",value:"",placeholder:"Last name"}))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Mobile Number"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter phone number",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Address Line 1"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter address line 1",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Address Line 2"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter address line 2",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"State"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter state",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Zip code"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter zip code",value:""}))),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("button",{className:"btn btn-primary profile-button",type:"button",onClick:function(e){e.preventDefault(),l(!1)}},"Save Profile")))):r.a.createElement("div",{className:"col-md-7",style:{borderRight:"1px solid black"}},r.a.createElement("div",{className:"p-3 py-5"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},r.a.createElement("h4",{className:"text-right"},"Current Profile Information")),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{className:"labels"},"First name"),r.a.createElement("div",{className:"form-control"},s.firstName)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{className:"labels"},"Last name"),r.a.createElement("div",{className:"form-control"},s.lastName))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Mobile Number"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter phone number",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Address Line 1"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter address line 1",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Address Line 2"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter address line 2",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"State"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter state",value:""})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{className:"labels"},"Zip code"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"enter zip code",value:""}))),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement("button",{className:"btn btn-primary profile-button",type:"button",onClick:function(e){e.preventDefault(),l(!0)}},"Update Profile"))))))}var B=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],l=a.orderId;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(q,{id:l})};a(69);var D=function(){var e=Object(p.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero"},r.a.createElement("h1",null,"Coffee for everyone!"),r.a.createElement("p",null,"Try some of the best coffee from the Chicago area and beyond"),r.a.createElement(I.a,{variant:"primary",type:"submit",size:"lg",className:"front-page-button",onClick:function(){e.push("./products")}},"Start Shopping")))};a(70),a(71);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7d859e89.chunk.js.map