import{W as p,j as e,a as u}from"./app-DLHhFt2j.js";import{H as c}from"./HeaderModule-DABnf2HO.js";import{A as x}from"./AuthenticatedLayout-rMNQbvkk.js";import{I as f}from"./InputError-Cg2i_FhV.js";import{G as r}from"./Grid-CleszngE.js";import{T as h}from"./TextField-uAVAVOeU.js";import{B as j}from"./Button-CqSjhgwJ.js";import"./Modal-BSE03VYd.js";import"./IconButton-DzVpBQ9u.js";import"./createSvgIcon-DN2_RHHq.js";import"./Box-5BqpItbZ.js";import"./Menu-CBISrW-7.js";import"./index-BGmzOLiF.js";import"./useFormControl-BKKWusIi.js";function D({auth:n,table:a}){const m="ACTUALIZAR MESA",{data:i,errors:o,put:s,setData:l}=p({name:a.name}),d=t=>{t.preventDefault(),s(route("table.update",a))};return e.jsxs(x,{user:n.user,children:[e.jsx(u,{title:m}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(c,{title:m}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(r,{component:"form",onSubmit:d,container:!0,direction:"column",alignContent:"center",spacing:2,className:"px-4 py-6",children:[e.jsxs(r,{item:!0,children:[e.jsx(h,{id:"name",name:"name",margin:"normal",label:"Nombre",variant:"outlined",value:i.name,onChange:t=>l("name",t.target.value)}),e.jsx(f,{message:o.name,className:"mt-2"})]}),e.jsx(r,{item:!0,alignSelf:"end",children:e.jsx(j,{type:"submit",variant:"contained",children:"ACTUALIZAR"})})]})})]})]})}export{D as default};
