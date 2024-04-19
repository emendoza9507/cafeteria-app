import{r as c,W as w,b as O,j as e,a as W}from"./app.js";import{H as _}from"./HeaderModule.js";import{A as k,S as D}from"./AuthenticatedLayout.js";import{I as m}from"./InputError.js";import I from"./PhoneInput2.js";import{g as f}from"./IconButton.js";import{G as s}from"./Grid.js";import{A as R}from"./Autocomplete.js";import{T as u}from"./TextField.js";import{B}from"./Box.js";import{F as P}from"./FormControlLabel.js";import{S as T}from"./Switch.js";import{B as F}from"./Button.js";import"./Modal.js";import"./createSvgIcon.js";import"./Menu.js";import"./index5.js";import"./TableBody.js";import"./TableRow.js";import"./TableHead.js";import"./Delete.js";import"./useFormControl.js";function le({auth:j,supplier:a,flash:l,...v}){const g="EDITAR PROVEEDOR",[b,d]=c.useState(l?!!l.message:!1),C=l&&l.message?l.message:null,[S,y]=c.useState([]),[N,x]=c.useState(!1),[E,p]=c.useState(!1),{data:r,errors:i,put:A,reset:G,setData:n}=w({id:a.id,name:a.name,email:a.email,description:a.description,city:a.city,street:a.street,state:a.state,phone_numbers:a.phone_numbers?JSON.parse(a.phone_numbers):{},active:a.active});({...E&&{bgcolor:f[500],"&:hover":{bgcolor:f[700]}}});const L=t=>{t.preventDefault(),x(!0),A(route("supplier.update",{supplier:a}),{onError:()=>{p(!1),x(!1)},onSuccess:()=>{p(!0),d(!0),setTimeout(()=>{d(!1),p(!1),x(!1)},2e3)}})};return c.useEffect(()=>{O.get(route("supplier.resource.list")).then(({data:t})=>{y(t.data.map(o=>{const h=o.name[0].toUpperCase();return{firstLetter:/[0-9]/.test(h)?"0-9":h,...o}}))})},[]),e.jsxs(k,{user:j.user,...v,children:[C&&e.jsx(D,{anchorOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:()=>d(!1),message:l.message}),e.jsx(W,{title:g}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(_,{title:g}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(s,{component:"form",columns:12,onSubmit:L,container:!0,spacing:2,className:"px-4 py-6",children:[e.jsxs(s,{item:!0,xs:12,children:[e.jsx(R,{id:"grouped-demo",freeSolo:!0,options:S.sort((t,o)=>-o.firstLetter.localeCompare(t.firstLetter)),groupBy:t=>t.firstLetter,getOptionLabel:t=>t.name,getOptionKey:t=>t.name,onChange:(t,o)=>n("name",o.name),inputValue:r.name,renderInput:t=>e.jsx(u,{fullWidth:!0,id:"name",name:"name",margin:"normal",label:"Nombre de Producto",variant:"outlined",value:r.name,onChange:o=>n("name",o.target.value),...t})}),e.jsx(m,{message:i.name,className:"mt-2"})]}),e.jsxs(s,{item:!0,xs:12,children:[e.jsx(u,{fullWidth:!0,margin:"normal",label:"Correo Electronico",variant:"outlined",value:r.email,onChange:t=>n("email",t.target.value)}),e.jsx(m,{message:i.email,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:12,container:!0,display:"flex",justifyContent:"space-around",children:e.jsxs(s,{item:!0,xs:!0,container:!0,direction:"row",spacing:2,children:[e.jsxs(s,{item:!0,xs:12,md:4,children:[e.jsx(u,{fullWidth:!0,margin:"normal",label:"Estado",variant:"outlined",value:r.state,onChange:t=>n("state",t.target.value)}),e.jsx(m,{message:i.state,className:"mt-2"})]}),e.jsxs(s,{item:!0,xs:12,md:4,children:[e.jsx(u,{fullWidth:!0,margin:"normal",label:"Ciudad",variant:"outlined",value:r.city,onChange:t=>n("city",t.target.value)}),e.jsx(m,{message:i.city,className:"mt-2"})]}),e.jsxs(s,{item:!0,xs:12,md:4,children:[e.jsx(u,{fullWidth:!0,margin:"normal",label:"Calle",variant:"outlined",value:r.street,onChange:t=>n("street",t.target.value)}),e.jsx(m,{message:i.street,className:"mt-2"})]})]})}),e.jsx(s,{item:!0,xs:12,container:!0,display:"flex",justifyContent:"space-around",children:e.jsxs(s,{item:!0,xs:!0,container:!0,direction:"row",spacing:2,children:[e.jsxs(s,{item:!0,xs:6,children:[e.jsx(I,{value:r.phone_numbers,onChange:t=>n("phone_numbers",t)}),e.jsx(m,{message:i.stock,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:6,display:"flex",alignItems:"center",children:e.jsxs(B,{children:[e.jsx(P,{control:e.jsx(T,{defaultChecked:!0,onChange:t=>n("active",!r.active)}),label:"Activo"}),e.jsx(m,{message:i.min_stock,className:"mt-2"})]})})]})}),e.jsxs(s,{item:!0,xs:12,children:[e.jsx(u,{fullWidth:!0,multiline:!0,margin:"normal",label:"Descripcion del Producto",variant:"outlined",value:r.description,onChange:t=>n("description",t.target.value)}),e.jsx(m,{message:i.description,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:12,display:"flex",justifyContent:"end",children:e.jsx(F,{disabled:N,type:"submit",variant:"contained",children:"GUARDAR"})})]})})]})]})}export{le as default};
