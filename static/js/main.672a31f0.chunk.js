(this.webpackJsonpmisha=this.webpackJsonpmisha||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(2),n=c.n(i),s=c(29),r=c.n(s),l=(c(36),c(8)),o=c(5),d=c(3),j=c(25),m=n.a.createContext(),b=function(e){var t=e.children,c=Object(i.useState)([]),n=Object(d.a)(c,2),s=n[0],r=n[1],l=Object(i.useState)(0),o=Object(d.a)(l,2),b=o[0],u=o[1],h=Object(i.useState)(0),O=Object(d.a)(h,2),x=O[0],f=O[1],v=function(){var e=0,t=0;s.forEach((function(c){e+=c.cantidad,t+=c.cantidad*c.item.precio})),u(e),f(t)};return Object(a.jsx)(m.Provider,{value:{pedido:s,cantidadItemsPedido:b,montoTotalPedido:x,eliminarItem:function(e){var t=s,c=t.findIndex((function(t){return t.item.id===e}));t.splice(c,1),r(Object(j.a)(t)),v()},agregarItem:function(e,t){var c={item:e,cantidad:t},a=s.findIndex((function(e){return e.item.id===c.item.id}));-1===a?s.push(c):s[a].cantidad+=c.cantidad,r(Object(j.a)(s)),v()},limpiarPedido:function(){r([]),u(0),f(0)}},children:t})},u=(c(37),function(){var e=Object(i.useContext)(m);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("svg",{className:"bi bi-cart4 cart-icon",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})}),0!==e.cantidadItemsPedido&&Object(a.jsx)("span",{className:"cart-icon-count",children:e.cantidadItemsPedido})]})}),h=c(22),O=(c(38),h.a.initializeApp({apiKey:"AIzaSyBK1-uG72VMpPbaWFLjxENjHuGq0_EDR-g",authDomain:"coderhouse-react-pfinal.firebaseapp.com",projectId:"coderhouse-react-pfinal",storageBucket:"coderhouse-react-pfinal.appspot.com",messagingSenderId:"117881363786",appId:"1:117881363786:web:79b442d278de362c0ff5b3"})),x=function(){return h.a.firestore(O)},f=x().collection("Categorias"),v=function(){return f.get()},p=function(e){return f.where("key","==",e).get()},g=c(26),N=function(e){return e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}))},w=function(e){return Object(g.a)({id:e.id},e.data())},z=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){v().then((function(e){var t=N(e);n(t)}))}),[]),Object(a.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("img",{src:"/misha/images/logo.png",width:"100",height:"60",className:"d-inline-block align-top",alt:"",loading:"lazy"})}),Object(a.jsx)(l.b,{to:"/carrito",children:Object(a.jsx)(u,{})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsx)("ul",{className:"navbar-nav",children:c.map((function(e){return Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.c,{to:"/categoria/".concat(e.key),activeClassName:"active",className:"nav-link","data-toggle":"collapse","data-target":"#navbarNav",children:e.nombre})},e.id)}))})})]})},C=x().collection("Productos"),H=function(){return C.get()},S=function(e){return C.doc(e).get()},k=function(e){return C.where("categoria_id","==",e).get()},A=(c(45),function(e){var t=e.item;return Object(a.jsx)(l.b,{to:"/producto/".concat(t.id),className:"router-link",children:Object(a.jsxs)("div",{className:"card item-card",children:[Object(a.jsx)("img",{src:"/misha"+t.imagen,className:"card-img-top",alt:t.nombre}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:t.nombre}),Object(a.jsx)("p",{className:"card-text",children:t.descripcion}),Object(a.jsxs)("p",{className:"card-text precio",children:["$",t.precio]})]})]})})}),y=(c(46),function(){return Object(a.jsx)("div",{className:"loading-container",children:Object(a.jsxs)("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-arrow-repeat",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),Object(a.jsx)("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]})})}),M=(c(47),function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){H().then((function(e){var t=N(e);n(t)}))}),[]),c.length?Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 ",children:c.map((function(e,t){return Object(a.jsx)(A,{item:e},t)}))})}):Object(a.jsx)(y,{})}),I=(c(48),function(e){e.children,e.greeting;return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"/misha/images/main.jpg",className:"home-main-image",alt:"main image"})}),Object(a.jsx)(M,{})]})}),P=(c(49),function(e){var t=Object(i.useState)(e.initial),c=Object(d.a)(t,2),n=c[0],s=c[1];return Object(a.jsx)("div",{className:"item-count",children:Object(a.jsx)("div",{className:"item-count-window",children:Object(a.jsxs)("div",{className:"item-count-counter-container",children:[Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart-dash-fill item-count-button-small",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",onClick:function(){n>e.min&&(s(n-1),e.onAdd(n-1))},children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"})}),Object(a.jsx)("span",{className:"item-count-counter",children:n}),Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-cart-plus-fill item-count-button-small",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",onClick:function(){n<e.max&&(s(n+1),e.onAdd(n+1))},children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"})})]})})})}),E=(c(50),function(e){var t=e.item,c=Object(i.useState)(1),n=Object(d.a)(c,2),s=n[0],r=n[1],l=Object(i.useContext)(m),j=Object(o.f)();return Object(a.jsx)("div",{className:"card mb-3 item-detail-card",children:Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("img",{src:"/misha"+t.imagen,className:"card-img",alt:t.nombre})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("div",{className:"card-body item-detail-card-description",children:[Object(a.jsxs)("div",{className:"item-detail-card-description-body",children:[Object(a.jsx)("h5",{className:"card-title item-detail-name",children:t.nombre}),Object(a.jsx)("p",{className:"card-text item-detail-info",children:t.descripcion}),Object(a.jsxs)("p",{className:"card-text item-detail-precio",children:["$",t.precio]})]}),Object(a.jsxs)("div",{className:"item-detail-card-description-footer",children:[Object(a.jsx)(P,{initial:1,min:1,max:t.stock,onAdd:function(e){r(e)}}),Object(a.jsxs)("button",{className:"item-detail-button-comprar",onClick:function(){l.agregarItem(t,s),j.push("/carrito")},children:["Agregar ",s]})]})]})})]})})}),V=(c(51),function(){var e=Object(o.g)().id,t=Object(i.useState)({}),c=Object(d.a)(t,2),n=c[0],s=c[1],r=Object(i.useState)(!1),l=Object(d.a)(r,2),j=l[0],m=l[1];return Object(i.useEffect)((function(){S(e).then((function(e){if(e.exists){var t=w(e);s(t)}else m(!0)}))}),[]),n&&n.id?Object(a.jsx)(E,{item:n}):j?Object(a.jsx)("div",{className:"item-detail-not-found",children:"Producto no encontrado"}):Object(a.jsx)(y,{})}),F=(c(52),function(e){var t=e.item,c=t.item,n=t.cantidad,s=Object(i.useContext)(m);return Object(a.jsxs)("div",{className:"cart-item-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"/misha"+c.imagen,className:"cart-item-img",alt:c.nombre})}),Object(a.jsxs)("div",{className:"cart-item-description",children:[Object(a.jsx)("div",{className:"cart-item-name",children:c.nombre}),Object(a.jsx)("div",{children:c.descripcion}),Object(a.jsxs)("div",{children:["Precio unitario:"," ",Object(a.jsxs)("span",{className:"cart-item-precio",children:["$",c.precio]})," - cantidad:"," ",Object(a.jsx)("span",{className:"cart-item-precio",children:n})," - total:"," ",Object(a.jsxs)("span",{className:"cart-item-precio",children:["$",n*c.precio]})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("svg",{onClick:function(){s.eliminarItem(c.id)},width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trash-fill cart-item-eliminar",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"})})})]})}),B=(c(53),function(){var e=Object(i.useContext)(m),t=Object(o.f)();return 0===e.pedido.length?Object(a.jsx)("div",{className:"cart-empty",children:"El carrito esta vac\xedo"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"cart-list",children:e.pedido.map((function(e,t){return Object(a.jsx)(F,{item:e},t)}))}),Object(a.jsxs)("div",{className:"cart-finalize-container",children:[Object(a.jsxs)("div",{className:"cart-total",children:["TOTAL: $",e.montoTotalPedido]}),Object(a.jsx)("div",{className:"cart-finalize",children:Object(a.jsx)("button",{className:"cart-finalize-button",onClick:function(){t.push("/checkout")},children:"Comprar"})})]})]})}),D=(c(54),function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!1),r=Object(d.a)(s,2),l=r[0],j=r[1],m=Object(i.useState)({}),b=Object(d.a)(m,2),u=b[0],h=b[1],O=Object(i.useState)(!1),x=Object(d.a)(O,2),f=x[0],v=x[1],g=Object(o.g)().key;Object(i.useEffect)((function(){v(!1),n([]),w()}),[g]),Object(i.useEffect)((function(){w()}),[]);var w=function(){j(!0),p(g).then((function(e){if(0!==e.size){var t=N(e);z(t[0].id),h(t[0])}else j(!1),v(!0)}))},z=function(e){k(parseInt(e)).then((function(e){var t=N(e);n(t),j(!1)}))};return c.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"/misha"+u.imagen,className:"category-list-image",alt:"main image"})}),Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 ",children:c.map((function(e,t){return Object(a.jsx)(A,{item:e},t)}))})})]}):l?Object(a.jsx)(y,{}):f?Object(a.jsx)("div",{className:"category-list-not-found",children:"Categor\xeda no encontrada"}):Object(a.jsx)(a.Fragment,{children:" "})}),L=(c(55),function(e){var t=Object(i.useState)(""),c=Object(d.a)(t,2),n=c[0],s=c[1],r=Object(i.useState)(""),l=Object(d.a)(r,2),o=l[0],j=l[1],m=Object(i.useState)(""),b=Object(d.a)(m,2),u=b[0],h=b[1],O=Object(i.useState)(""),x=Object(d.a)(O,2),f=x[0],v=x[1],p=Object(i.useState)(""),g=Object(d.a)(p,2),N=g[0],w=g[1],z=function(){var t={name:n,phone:o,email:u};e.onSuccess(t)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"customer-form-title",children:"Ingrese sus datos para finalizar el pedido"}),Object(a.jsxs)("div",{className:"container-fluid customer-form",children:[Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("label",{htmlFor:"name",className:"form-label",children:"Nombre y Apellido"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"name",value:n,onChange:function(e){s(e.target.value)}})]}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("label",{htmlFor:"phone",className:"form-label",children:"Tel\xe9fono"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"phone",value:o,onChange:function(e){j(e.target.value)}})]}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("label",{htmlFor:"email",className:"form-label",children:"E-mail"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"email",value:u,onChange:function(e){h(e.target.value)}})]}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("label",{htmlFor:"email2",className:"form-label",children:"Repetir e-mail"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"email2",value:f,onChange:function(e){v(e.target.value)}})]}),Object(a.jsxs)("div",{className:"col-12 text-right",children:[Object(a.jsx)("div",{className:"customer-form-error",children:N}),Object(a.jsx)("button",{className:"customer-form-button",onClick:function(){""!==n.trim()?""!==o.trim()?""!==u.trim()?/^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(u)?u.trim()===f.trim()?(w(""),z()):w("  Los email son diferentes"):w("Debe ingresar un e-mail v\xe1lido"):w("Debe ingresar un e-mail"):w("Debe ingresar un tel\xe9fono"):w("Debe ingresar un nombre y apellido")},children:"Finalizar Compra"})]})]})]})}),T=x().collection("Pedidos"),R=function(e){return T.add(e)},$=(c(56),function(){var e=Object(i.useContext)(m),t=Object(o.f)(),c=Object(i.useState)(1),n=Object(d.a)(c,2),s=n[0],r=n[1],l=Object(i.useState)(!1),j=Object(d.a)(l,2),b=j[0],u=j[1],h=Object(i.useState)(""),O=Object(d.a)(h,2),x=O[0],f=O[1],v=Object(i.useState)(""),p=Object(d.a)(v,2),g=p[0],N=p[1];Object(i.useEffect)((function(){0===e.cantidadItemsPedido&&t.push("/")}),[]);return b?Object(a.jsx)(y,{}):1===s?Object(a.jsx)("div",{children:Object(a.jsx)(L,{onSuccess:function(t){var c={cliente:t,total:e.montoTotalPedido,pedido:e.pedido,estado:"Generado",fecha:new Date};u(!0),R(c).then((function(t){N("Compra realizada exitosamente!"),f(t.id),r(2),e.limpiarPedido()})).catch((function(e){N("Ocurri\xf3 un error procesando su pedido, intente nuevamente mas tarde")})).finally((function(){u(!1)}))}})}):Object(a.jsxs)("div",{className:"checkout-container",children:[Object(a.jsx)("h1",{className:"checkout-title",children:g}),""===x?"":Object(a.jsxs)("div",{className:"checkout-pedido",children:["Codigo de Pedido:"," ",Object(a.jsx)("span",{className:"checkout-codigo",children:x})]})]})}),Z=function(){return Object(a.jsx)(b,{children:Object(a.jsxs)(l.a,{basename:"/misha/",children:[Object(a.jsx)(z,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",children:Object(a.jsx)(I,{})}),Object(a.jsx)(o.a,{path:"/producto/:id",children:Object(a.jsx)(V,{})}),Object(a.jsx)(o.a,{path:"/categoria/:key",children:Object(a.jsx)(D,{})}),Object(a.jsx)(o.a,{path:"/carrito",children:Object(a.jsx)(B,{})}),Object(a.jsx)(o.a,{path:"/checkout",children:Object(a.jsx)($,{})})]})]})})};c(57),c(28),c(58);r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.672a31f0.chunk.js.map