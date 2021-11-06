(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(9),r=n.n(a),s=n(5),l=n(4);var u=n(1),i=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!0),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!1),u=Object(l.a)(s,2),i=u[0],d=u[1],j=c.a.useState(t),b=Object(l.a)(j,2),O=b[0],m=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),r(!1)}catch(i){d(i)}}),2e3)})),{item:O,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(i){d(i)}},loading:a,error:i}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),b=j[0],O=j[1],m=c.a.useState(!1),x=Object(l.a)(m,2),f=x[0],h=x[1],p=n.filter((function(e){return!!e.completed})).length,v=n.length,T=[];T=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(u.jsx)(i.Provider,{value:{loading:a,error:r,totalTodos:v,completedTodos:p,searchValue:b,setSearchValue:O,searchedTodos:T,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:f,setOpenModal:h},children:e.children})}n(27);function j(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(28);function b(){var e=c.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(29);function O(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}n(30);var m=n(11),x=n.n(m),f=n(53);function h(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:Object(u.jsx)(x.a,{})}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:" Icon Icon-delete",onClick:e.onDelete,children:Object(u.jsx)(f.a,{})})]})}n(38);function p(e){return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(39);function v(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(40);function T(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(i),r=a.addTodo,s=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{value:n,placeholder:"Cortar la cebolla",onChange:function(e){o(e.target.value)}}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer ",children:[Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button--cancel",type:"button",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button--add",type:"submit",onClick:function(){},children:"A\xf1adir"})]})]})}function g(e){e.error;return Object(u.jsx)("p",{children:"Hubo un error..."})}n(41);function C(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check}",children:Object(u.jsx)(x.a,{})}),Object(u.jsx)("p",{className:"TodoItem-p"}),Object(u.jsx)("span",{className:" Icon Icon-delete",children:Object(u.jsx)(f.a,{})})]})}function I(){return Object(u.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}function N(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)(O,{children:[t&&Object(u.jsx)(g,{error:t}),n&&Object(u.jsx)(C,{}),!n&&!o.length&&Object(u.jsx)(I,{}),o.map((function(e){return Object(u.jsx)(h,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(u.jsx)(v,{children:Object(u.jsx)(T,{})}),Object(u.jsx)(p,{setOpenModal:l})]})}var S=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(N,{})})};n(42);r.a.render(Object(u.jsx)(S,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1680264b.chunk.js.map