import{W as g,r as f,j as e,a as v}from"./app-CvfNB7ra.js";import{H as b}from"./HeaderModule-H64kzbVr.js";import{A}from"./AuthenticatedLayout--MGMuH8r.js";import{I as m}from"./InputError-D7uXVN-z.js";import E from"./SelectProduct-Ca6nlgBs.js";import{G as r}from"./Grid-CKhAo9Bo.js";import{T as l}from"./TextField-CaXReFFn.js";import{I as N}from"./InputAdornment-Bg6imogO.js";import{B as y}from"./Button-HP1_PD-1.js";import"./Typography-BRzJn4xP.js";import"./IconButton-D5b0Ojme.js";import"./createSvgIcon-COTNUewJ.js";import"./Inventory-T9T7q22q.js";import"./index-BHBGyOd0.js";import"./ListContext-D5ol0eb0.js";import"./Box-Bwlq-kWd.js";import"./Menu-DaDftulN.js";import"./Modal-wYIQB4SX.js";import"./Divider-x_rfINIS.js";import"./Toolbar-BBsujruw.js";import"./Autocomplete-CKr0nnNY.js";import"./Delete-C3QQXyP7.js";import"./ListItemAvatar-DW9Ws2uE.js";import"./useFormControl-CbGBBbC6.js";function L({auth:u,offer:s,products:c}){const p="EDITAR OFERTA",{data:o,errors:n,put:d,setData:a}=g({id:s.id,name:s.name,sale_price:s.sale_price,products:[]}),x=t=>{t.preventDefault(),d(route("offer.update",s),{onSuccess(i){console.log(i)},onError(i){console.log(i)}})},h=t=>{a("products",t.map(({product:i,product_count:j})=>({id:i.id,product_count:j})))};return f.useEffect(()=>{},[]),e.jsxs(A,{user:u.user,children:[e.jsx(v,{title:p}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(b,{title:p}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(r,{component:"form",columns:12,onSubmit:x,container:!0,spacing:2,className:"px-4 py-6",children:[e.jsxs(r,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,margin:"normal",label:"Nombre",variant:"outlined",value:o.name,onChange:t=>a("name",t.target.value)}),e.jsx(m,{message:n.name,className:"mt-2"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,margin:"normal",label:"Precio de Venta",type:"number",step:"any",variant:"outlined",InputProps:{startAdornment:e.jsx(N,{position:"start",children:"$"})},value:o.sale_price,onChange:t=>a("sale_price",t.target.value)}),e.jsx(m,{message:n.sale_price,className:"mt-2"})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,multiline:!0,margin:"normal",label:"Descripcion",variant:"outlined",value:o.description,onChange:t=>a("description",t.target.value)}),e.jsx(m,{message:n.description,className:"mt-2"})]}),e.jsx(r,{item:!0,xs:12,children:e.jsx(E,{products:c||[],offer:s,onChange:h})}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"end",children:e.jsx(y,{type:"submit",variant:"contained",children:"GUARDAR"})})]})})]})]})}export{L as default};