import{W as p,r as c,j as e,a as d}from"./app-B7Vofn4y.js";import{H as u}from"./HeaderModule-C7kc5AaE.js";import{A as x}from"./AuthenticatedLayout-DAdzipUE.js";import{I as f}from"./InputError-CZEKk5sr.js";import{G as r}from"./Grid-Dn4wLejJ.js";import{T as h}from"./TextField-CA7jhAep.js";import{B as j}from"./Button-CwUUUq-b.js";import"./Modal-1gU17TLV.js";import"./IconButton-CoJ6F0Cq.js";import"./createSvgIcon-Wy3Cilp7.js";import"./Box-LhSwj0jd.js";import"./Menu-DIira9zT.js";import"./index-CQePutwu.js";import"./useFormControl-DPgTVC8w.js";function H({auth:s}){const a="NUEVA MESA",{data:n,errors:o,post:m,setData:i}=p({name:""}),l=t=>{t.preventDefault(),m(route("table.store"))};return c.useEffect(()=>{console.log(o)},[]),e.jsxs(x,{user:s.user,children:[e.jsx(d,{title:a}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(u,{title:a}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(r,{component:"form",onSubmit:l,container:!0,direction:"column",alignContent:"center",spacing:2,className:"px-4 py-6",children:[e.jsxs(r,{item:!0,children:[e.jsx(h,{id:"name",name:"name",margin:"normal",label:"Nombre",variant:"outlined",value:n.name,onChange:t=>i("name",t.target.value)}),e.jsx(f,{message:o.name,className:"mt-2"})]}),e.jsx(r,{item:!0,alignSelf:"end",children:e.jsx(j,{type:"submit",variant:"contained",children:"CREAR"})})]})})]})]})}export{H as default};