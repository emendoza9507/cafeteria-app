import{W as x,r as j,j as e,a as h}from"./app-CvfNB7ra.js";import{H as g}from"./HeaderModule-H64kzbVr.js";import{A as f}from"./AuthenticatedLayout--MGMuH8r.js";import{I as m}from"./InputError-D7uXVN-z.js";import{G as r}from"./Grid-CKhAo9Bo.js";import{T as l}from"./TextField-CaXReFFn.js";import{I as v}from"./InputAdornment-Bg6imogO.js";import{B as b}from"./Button-HP1_PD-1.js";import"./Typography-BRzJn4xP.js";import"./IconButton-D5b0Ojme.js";import"./createSvgIcon-COTNUewJ.js";import"./Inventory-T9T7q22q.js";import"./index-BHBGyOd0.js";import"./ListContext-D5ol0eb0.js";import"./Box-Bwlq-kWd.js";import"./Menu-DaDftulN.js";import"./Modal-wYIQB4SX.js";import"./Divider-x_rfINIS.js";import"./Toolbar-BBsujruw.js";import"./useFormControl-CbGBBbC6.js";function V({auth:u,offer:s,products:A}){const p="EDITAR OFERTA",{data:a,errors:i,put:c,setData:o}=x({id:s.id,name:s.name,sale_price:s.sale_price,products:[]}),d=t=>{t.preventDefault(),c(route("offer.update",s),{onSuccess(n){console.log(n)},onError(n){console.log(n)}})};return j.useEffect(()=>{},[]),e.jsxs(f,{user:u.user,children:[e.jsx(h,{title:p}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(g,{title:p}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(r,{component:"form",columns:12,onSubmit:d,container:!0,spacing:2,className:"px-4 py-6",children:[e.jsxs(r,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,margin:"normal",label:"Nombre",variant:"outlined",value:a.name,onChange:t=>o("name",t.target.value)}),e.jsx(m,{message:i.name,className:"mt-2"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,margin:"normal",label:"Precio de Venta",type:"number",step:"any",variant:"outlined",InputProps:{startAdornment:e.jsx(v,{position:"start",children:"$"})},value:a.sale_price,onChange:t=>o("sale_price",t.target.value)}),e.jsx(m,{message:i.sale_price,className:"mt-2"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,multiline:!0,margin:"normal",label:"Descripcion",variant:"outlined",value:a.description,onChange:t=>o("description",t.target.value)}),e.jsx(m,{message:i.description,className:"mt-2"})]}),e.jsx(r,{item:!0,xs:12}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"end",children:e.jsx(b,{type:"submit",variant:"contained",children:"GUARDAR"})})]})})]})]})}export{V as default};
