(this["webpackJsonpbook-phone-app"]=this["webpackJsonpbook-phone-app"]||[]).push([[0],{10:function(e,t,s){"use strict";s.r(t);var n=s(9),r=s(4),a=s(6),c=s(7),j=s(1),b=s(8),u=s.n(b),i=s(0);function l(e){var t={id:null,userFirstname:"",userLastname:"",userPhone:""},s=Object(j.useState)(t),n=Object(c.a)(s,2),b=n[0],u=n[1],l=function(e){u(Object(a.a)(Object(a.a)({},b),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("form",{onSubmit:function(s){s.preventDefault(),b.userFirstname&&b.userLastname&&b.userPhone&&(e.addUser(b),u(t))},children:[Object(i.jsx)("label",{children:"First name:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"userFirstname",name:"userFirstname",type:"text",value:b.userFirstname,onChange:l}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Last name:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"userLastname",name:"userLastname",type:"text",value:b.userLastname,onChange:l}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Phone:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"userPhone",name:"userPhone",type:"text",value:b.userPhone,onChange:l}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"submitButton",type:"submit",value:"Add User"})]})}function o(e){var t=e.users.sort((function(e,t){return e.userLastname.localeCompare(t.userLastname)})),s=t.length>0?t.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.userFirstname}),Object(i.jsx)("td",{children:e.userLastname}),Object(i.jsx)("td",{children:e.userPhone})]},t)})):Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:3,children:"\xa0"})});return Object(i.jsxs)("table",{className:"informationTable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"First name"}),Object(i.jsx)("th",{children:"Last name"}),Object(i.jsx)("th",{children:"Phone"})]})}),Object(i.jsx)("tbody",{children:s})]})}function h(e){var t=Object(j.useState)([]),s=Object(c.a)(t,2),r=s[0],a=s[1];return Object(i.jsxs)("section",{children:[Object(i.jsx)(l,{addUser:function(e){e.id=r.length+1,a([].concat(Object(n.a)(r),[e]))}}),Object(i.jsx)(o,{users:r})]})}u.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.264f3ca7.chunk.js.map