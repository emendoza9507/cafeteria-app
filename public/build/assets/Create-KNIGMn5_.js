import{W as p,r as c,j as e,a as d}from"./app-CvfNB7ra.js";import{H as u}from"./HeaderModule-H64kzbVr.js";import{A as x}from"./AuthenticatedLayout--MGMuH8r.js";import{I as f}from"./InputError-D7uXVN-z.js";import{G as r}from"./Grid-CKhAo9Bo.js";import{T as h}from"./TextField-CaXReFFn.js";import{B as j}from"./Button-HP1_PD-1.js";import"./Typography-BRzJn4xP.js";import"./IconButton-D5b0Ojme.js";import"./createSvgIcon-COTNUewJ.js";import"./Inventory-T9T7q22q.js";import"./index-BHBGyOd0.js";import"./ListContext-D5ol0eb0.js";import"./Box-Bwlq-kWd.js";import"./Menu-DaDftulN.js";import"./Modal-wYIQB4SX.js";import"./Divider-x_rfINIS.js";import"./Toolbar-BBsujruw.js";import"./useFormControl-CbGBBbC6.js";function U({auth:m}){const o="NUEVA MESA",{data:s,errors:a,post:i,setData:n}=p({name:""}),l=t=>{t.preventDefault(),i(route("table.store"))};return c.useEffect(()=>{console.log(a)},[]),e.jsxs(x,{user:m.user,children:[e.jsx(d,{title:o}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(u,{title:o}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(r,{component:"form",onSubmit:l,container:!0,direction:"column",alignContent:"center",spacing:2,className:"px-4 py-6",children:[e.jsxs(r,{item:!0,children:[e.jsx(h,{id:"name",name:"name",margin:"normal",label:"Nombre",variant:"outlined",value:s.name,onChange:t=>n("name",t.target.value)}),e.jsx(f,{message:a.name,className:"mt-2"})]}),e.jsx(r,{item:!0,alignSelf:"end",children:e.jsx(j,{type:"submit",variant:"contained",children:"CREAR"})})]})})]})]})}export{U as default};
