import{r as u,W as B,b as O,j as e,a as D}from"./app.js";import{H as M}from"./HeaderModule.js";import{A as T,S as U,M as $}from"./AuthenticatedLayout.js";import{I as m}from"./InputError.js";import F from"./ImageBox.js";import{g as v}from"./IconButton.js";import{G as s}from"./Grid.js";import{A as G}from"./Autocomplete.js";import{T as l}from"./TextField.js";import{B as h}from"./Box.js";import{I as d}from"./InputAdornment.js";import{B as H}from"./Button.js";import{m as z}from"./makeStyles.js";import"./Modal.js";import"./createSvgIcon.js";import"./Menu.js";import"./index5.js";import"./useFormControl.js";const K=z(f=>({root:{"& > *":{margin:2},textAlign:"center",display:"flex",flexDirection:"column !important"},input:{display:"none"},imgBox:{position:"relative",maxWidth:"360px",alignSelf:"center"},clearImg:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#000000a3",top:0,display:"none",justifyContent:"center",alignItems:"center"},img:{width:"100%"}}));function de({auth:f,product:r,categories:b,flash:c,...C}){const k=K(),j="EDITAR PRODUCTO",[I,p]=u.useState(c?!!c.message:!1),S=c&&c.message?c.message:null,[A,N]=u.useState(Array.from([])),[P,_]=u.useState(r.image?`/storage/${r.image.url}`:null),[V,g]=u.useState(!1),[W,x]=u.useState(!1),{data:a,errors:o,post:w,reset:L,setData:n}=B({_method:"put",id:r.id,name:r.name,product_category_id:r.product_category_id,stock:r.stock,min_stock:r.min_stock,description:r.description?r.description:"",sale_price:r.sale_price,purchase_price:r.purchase_price,um:r.um,image:""}),E=t=>{n("image",t.target.files[0]),_(URL.createObjectURL(t.target.files[0]))};({...W&&{bgcolor:v[500],"&:hover":{bgcolor:v[700]}}});const R=t=>{t.preventDefault(),g(!0),w(route("product.update",{product:r}),{onError:()=>{x(!1),g(!1)},onSuccess:()=>{x(!0),p(!0),setTimeout(()=>{p(!1),x(!1),g(!1)},2e3)}})};return u.useEffect(()=>{O.get(route("product.resource.list")).then(({data:t})=>{N(t.data.map(i=>{const y=i.name[0].toUpperCase();return{firstLetter:/[0-9]/.test(y)?"0-9":y,...i}}))})},[]),e.jsxs(T,{user:f.user,...C,children:[S&&e.jsx(U,{anchorOrigin:{vertical:"top",horizontal:"right"},open:I,onClose:()=>p(!1),message:c.message}),e.jsx(D,{title:j}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(M,{title:j}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(s,{component:"form",columns:12,onSubmit:R,container:!0,spacing:2,className:"px-4 py-6",children:[e.jsxs(s,{item:!0,xs:12,children:[e.jsx(G,{freeSolo:!0,options:A.sort((t,i)=>-i.firstLetter.localeCompare(t.firstLetter)),groupBy:t=>t.firstLetter,getOptionLabel:t=>t.name,getOptionKey:t=>t.name,onChange:(t,i)=>n("name",i.name),renderInput:t=>e.jsx(l,{fullWidth:!0,id:"name",name:"name",margin:"normal",label:"Nombre de Producto",variant:"outlined",value:a.name,onChange:i=>n("name",i.target.value),...t})}),e.jsx(m,{message:o.name,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:12,container:!0,display:"flex",justifyContent:"space-around",children:e.jsxs(s,{item:!0,xs:!0,container:!0,direction:"row",spacing:2,children:[e.jsxs(s,{item:!0,xs:12,md:6,className:k.root,children:[e.jsx(F,{file:P,handleChangeImage:E,handleRemoveImage:t=>{L("image"),_(null)}}),e.jsx(m,{message:o.image,className:"mt-2"})]}),e.jsxs(s,{item:!0,md:6,container:!0,direction:"row",spacing:2,children:[e.jsx(s,{item:!0,xs:6,md:6,display:"flex",alignItems:"center",children:e.jsxs(h,{children:[e.jsx(l,{fullWidth:!0,id:"purche_price",name:"sale_price",margin:"normal",label:"Precio de Venta",type:"number",step:"any",variant:"outlined",InputProps:{startAdornment:e.jsx(d,{position:"start",children:"$"})},value:a.sale_price,onChange:t=>n("sale_price",t.target.value)}),e.jsx(m,{message:o.sale_price,className:"mt-2"})]})}),e.jsx(s,{item:!0,xs:6,md:6,display:"flex",alignItems:"center",children:e.jsxs(h,{children:[e.jsx(l,{fullWidth:!0,id:"purche_price",name:"purchase_price",margin:"normal",label:"Precio de Compra",variant:"outlined",type:"number",InputProps:{startAdornment:e.jsx(d,{position:"start",children:"$"})},value:a.purchase_price,onChange:t=>n("purchase_price",t.target.value)}),e.jsx(m,{message:o.purchase_price,className:"mt-2"})]})}),e.jsxs(s,{item:!0,xs:6,md:6,display:"flex",direction:"column",justifyContent:"center",children:[e.jsx(l,{fullWidth:!0,id:"product_category_id",name:"product_category_id",margin:"normal",label:"Categoria",select:!0,variant:"outlined",value:a.product_category_id,onChange:t=>n("product_category_id",t.target.value),children:Array.from(b).map(({id:t,category_name:i})=>e.jsx($,{value:t,children:i},t))}),e.jsx(m,{message:o.product_category_id,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:6,md:6,display:"flex",alignItems:"center",children:e.jsxs(h,{children:[e.jsx(l,{fullWidth:!0,id:"um",name:"um",margin:"normal",label:"Unidad de Medida",variant:"outlined",value:a.um,onChange:t=>n("um",t.target.value)}),e.jsx(m,{message:o.um,className:"mt-2"})]})})]})]})}),e.jsx(s,{item:!0,xs:12,container:!0,display:"flex",justifyContent:"space-around",children:e.jsxs(s,{item:!0,xs:!0,container:!0,direction:"row",spacing:2,children:[e.jsxs(s,{item:!0,xs:6,children:[e.jsx(l,{fullWidth:!0,id:"stock",name:"stock",margin:"normal",label:"Stock",type:"number",variant:"outlined",value:a.stock,InputProps:{endAdornment:e.jsx(d,{position:"end",children:a.um})},onChange:t=>n("stock",t.target.value)}),e.jsx(m,{message:o.stock,className:"mt-2"})]}),e.jsxs(s,{item:!0,xs:6,children:[e.jsx(l,{fullWidth:!0,id:"min_stock",name:"min_stock",margin:"normal",type:"number",label:"Min. Stock",variant:"outlined",InputProps:{endAdornment:e.jsx(d,{position:"end",children:a.um})},value:a.min_stock,onChange:t=>n("min_stock",t.target.value)}),e.jsx(m,{message:o.min_stock,className:"mt-2"})]})]})}),e.jsxs(s,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,multiline:!0,id:"description",name:"description",margin:"normal",label:"Descripcion del Producto",variant:"outlined",value:a.description,onChange:t=>n("description",t.target.value)}),e.jsx(m,{message:o.description,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:12,display:"flex",justifyContent:"end",children:e.jsx(H,{type:"submit",variant:"contained",children:"CREAR"})})]})})]})]})}export{de as default};
