"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[64],{7064:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(2791),a=n(9434),s=n(4270),u=n(3634),c="ContactsForm_form__1Y65-",i="ContactsForm_input__UjXFK",o="ContactsForm_button__zuUB3",l=function(e){return e.contacts.items},m=function(e){return e.filter},d=n(184),f=function(){var e=(0,a.I0)(),t=(0,a.v9)(l);return(0,d.jsxs)("form",{className:c,onSubmit:function(n){n.preventDefault();var r=n.currentTarget.name.value,a=n.currentTarget.number.value,s=t.some((function(e){return e.name.toLowerCase()===r.toLowerCase()}));if(s)alert("This contact already exists!");else{var c={name:r,number:a};if(""!==c)return e((0,u.uK)(c)),void n.currentTarget.reset();alert("Task cannot be empty. Enter some text!")}},children:[(0,d.jsxs)("label",{children:["Name",(0,d.jsx)("input",{className:i,type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{children:["Number",(0,d.jsx)("input",{className:i,type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{type:"submit",className:o,children:"Add contact"})]})},h="ContactsList_list__KDt-1",p=function(){var e=(0,a.I0)(),t=(0,a.v9)(l),n=(0,a.v9)(m),r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,d.jsx)("ul",{className:h,children:r.map((function(t){var n=t.name,r=t.number,a=t.id;return(0,d.jsxs)("li",{children:[n," ",r,(0,d.jsx)("button",{onClick:function(){return e((0,u.GK)(a))},children:"Delete"})]},a)}))})},_=n(4808),x="Filter_input__N7T3z",b=function(){var e=(0,a.I0)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("input",{className:x,onChange:function(t){e((0,_.W)(t.target.value))},type:"text",name:"filter"})})};function j(){var e=(0,a.I0)();return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.q,{children:(0,d.jsx)("title",{children:"Contacts"})}),(0,d.jsx)(f,{}),(0,d.jsx)(b,{}),(0,d.jsx)(p,{})]})}}}]);
//# sourceMappingURL=64.fa334ff8.chunk.js.map