import{W as p,j as e,a as u}from"./app-B7Vofn4y.js";import{H as x}from"./HeaderModule-C7kc5AaE.js";import{A as f}from"./AuthenticatedLayout-DAdzipUE.js";import{I as h}from"./InputError-CZEKk5sr.js";import{G as r}from"./Grid-Dn4wLejJ.js";import{T as j}from"./TextField-CA7jhAep.js";import{B as g}from"./Button-CwUUUq-b.js";import"./Modal-1gU17TLV.js";import"./IconButton-CoJ6F0Cq.js";import"./createSvgIcon-Wy3Cilp7.js";import"./Box-LhSwj0jd.js";import"./Menu-DIira9zT.js";import"./index-CQePutwu.js";import"./useFormControl-DPgTVC8w.js";function B({auth:s,...o}){const a="NUEVA CATEGORIA",{data:m,errors:i,post:n,reset:l,setData:c}=p({category_name:""}),d=t=>{t.preventDefault(),n(route("category.store"),{onSuccess:()=>l()})};return e.jsxs(f,{user:s.user,...o,children:[e.jsx(u,{title:a}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(x,{title:a}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(r,{component:"form",columns:12,onSubmit:d,container:!0,spacing:2,className:"px-4 py-6",children:[e.jsxs(r,{item:!0,xs:12,children:[e.jsx(j,{fullWidth:!0,id:"name",name:"name",margin:"normal",label:"Nombre de la Categoria",variant:"outlined",value:m.category_name,onChange:t=>c("category_name",t.target.value)}),e.jsx(h,{message:i.category_name,className:"mt-2"})]}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"end",children:e.jsx(g,{type:"submit",variant:"contained",children:"CREAR"})})]})})]})]})}export{B as default};