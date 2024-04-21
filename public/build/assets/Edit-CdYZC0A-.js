import{r as u,W as R,b as B,j as e,a as D}from"./app-CvfNB7ra.js";import{H as E}from"./HeaderModule-H64kzbVr.js";import{A as O,S as U,M}from"./AuthenticatedLayout--MGMuH8r.js";import{I as m}from"./InputError-D7uXVN-z.js";import T from"./ImageBox-BtyzQwH3.js";import{G as s}from"./Grid-CKhAo9Bo.js";import{A as G}from"./Autocomplete-CKr0nnNY.js";import{T as l}from"./TextField-CaXReFFn.js";import{B as h}from"./Box-Bwlq-kWd.js";import{I as d}from"./InputAdornment-Bg6imogO.js";import{B as $}from"./Button-HP1_PD-1.js";import"./Typography-BRzJn4xP.js";import"./IconButton-D5b0Ojme.js";import"./createSvgIcon-COTNUewJ.js";import"./Inventory-T9T7q22q.js";import"./index-BHBGyOd0.js";import"./ListContext-D5ol0eb0.js";import"./Menu-DaDftulN.js";import"./Modal-wYIQB4SX.js";import"./Divider-x_rfINIS.js";import"./Toolbar-BBsujruw.js";import"./useFormControl-CbGBBbC6.js";const F=()=>({root:{"& > *":{margin:2},textAlign:"center",display:"flex",flexDirection:"column !important"},input:{display:"none"},imgBox:{position:"relative",maxWidth:"360px",alignSelf:"center"},clearImg:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#000000a3",top:0,display:"none",justifyContent:"center",alignItems:"center"},img:{width:"100%"}});function xe({auth:y,product:r,categories:v,flash:c,...b}){const C=F(),j="EDITAR PRODUCTO",[k,p]=u.useState(c?!!c.message:!1),I=c&&c.message?c.message:null,[S,A]=u.useState(Array.from([])),[N,f]=u.useState(r.image?`/storage/${r.image.url}`:null),[H,x]=u.useState(!1),[V,g]=u.useState(!1),{data:a,errors:o,post:P,reset:W,setData:i}=R({_method:"put",id:r.id,name:r.name,product_category_id:r.product_category_id,stock:r.stock,min_stock:r.min_stock,description:r.description?r.description:"",sale_price:r.sale_price,purchase_price:r.purchase_price,um:r.um,image:""}),w=t=>{i("image",t.target.files[0]),f(URL.createObjectURL(t.target.files[0]))},L=t=>{t.preventDefault(),x(!0),P(route("product.update",{product:r}),{onError:()=>{g(!1),x(!1)},onSuccess:()=>{g(!0),p(!0),setTimeout(()=>{p(!1),g(!1),x(!1)},2e3)}})};return u.useEffect(()=>{B.get(route("product.resource.list")).then(({data:t})=>{A(t.data.map(n=>{const _=n.name[0].toUpperCase();return{firstLetter:/[0-9]/.test(_)?"0-9":_,...n}}))})},[]),e.jsxs(O,{user:y.user,...b,children:[I&&e.jsx(U,{anchorOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:()=>p(!1),message:c.message}),e.jsx(D,{title:j}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(E,{title:j}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(s,{component:"form",columns:12,onSubmit:L,container:!0,spacing:2,className:"px-4 py-6",children:[e.jsxs(s,{item:!0,xs:12,children:[e.jsx(G,{freeSolo:!0,options:S.sort((t,n)=>-n.firstLetter.localeCompare(t.firstLetter)),groupBy:t=>t.firstLetter,getOptionLabel:t=>t.name,getOptionKey:t=>t.name,inputValue:a.name,onChange:(t,n)=>i("name",n.name),renderInput:t=>e.jsx(l,{fullWidth:!0,id:"name",name:"name",margin:"normal",label:"Nombre de Producto",variant:"outlined",value:a.name,onChange:n=>i("name",n.target.value),...t})}),e.jsx(m,{message:o.name,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:12,container:!0,display:"flex",justifyContent:"space-around",children:e.jsxs(s,{item:!0,xs:!0,container:!0,direction:"row",spacing:2,children:[e.jsxs(s,{item:!0,xs:12,md:6,sx:C.root,children:[e.jsx(T,{file:N,handleChangeImage:w,handleRemoveImage:t=>{W("image"),f(null)}}),e.jsx(m,{message:o.image,className:"mt-2"})]}),e.jsxs(s,{item:!0,md:6,container:!0,direction:"row",spacing:2,children:[e.jsx(s,{item:!0,xs:6,md:6,display:"flex",alignItems:"center",children:e.jsxs(h,{children:[e.jsx(l,{fullWidth:!0,id:"purche_price",name:"sale_price",margin:"normal",label:"Precio de Venta",type:"number",step:"any",variant:"outlined",InputProps:{startAdornment:e.jsx(d,{position:"start",children:"$"})},value:a.sale_price,onChange:t=>i("sale_price",t.target.value)}),e.jsx(m,{message:o.sale_price,className:"mt-2"})]})}),e.jsx(s,{item:!0,xs:6,md:6,display:"flex",alignItems:"center",children:e.jsxs(h,{children:[e.jsx(l,{fullWidth:!0,id:"purche_price",name:"purchase_price",margin:"normal",label:"Precio de Compra",variant:"outlined",type:"number",InputProps:{startAdornment:e.jsx(d,{position:"start",children:"$"})},value:a.purchase_price,onChange:t=>i("purchase_price",t.target.value)}),e.jsx(m,{message:o.purchase_price,className:"mt-2"})]})}),e.jsxs(s,{item:!0,xs:6,md:6,display:"flex",direction:"column",justifyContent:"center",children:[e.jsx(l,{fullWidth:!0,id:"product_category_id",name:"product_category_id",margin:"normal",label:"Categoria",select:!0,variant:"outlined",value:a.product_category_id,onChange:t=>i("product_category_id",t.target.value),children:Array.from(v).map(({id:t,category_name:n})=>e.jsx(M,{value:t,children:n},t))}),e.jsx(m,{message:o.product_category_id,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:6,md:6,display:"flex",alignItems:"center",children:e.jsxs(h,{children:[e.jsx(l,{fullWidth:!0,id:"um",name:"um",margin:"normal",label:"Unidad de Medida",variant:"outlined",value:a.um,onChange:t=>i("um",t.target.value)}),e.jsx(m,{message:o.um,className:"mt-2"})]})})]})]})}),e.jsx(s,{item:!0,xs:12,container:!0,display:"flex",justifyContent:"space-around",children:e.jsxs(s,{item:!0,xs:!0,container:!0,direction:"row",spacing:2,children:[e.jsxs(s,{item:!0,xs:6,children:[e.jsx(l,{fullWidth:!0,id:"stock",name:"stock",margin:"normal",label:"Stock",type:"number",variant:"outlined",value:a.stock,InputProps:{endAdornment:e.jsx(d,{position:"end",children:a.um})},onChange:t=>i("stock",t.target.value)}),e.jsx(m,{message:o.stock,className:"mt-2"})]}),e.jsxs(s,{item:!0,xs:6,children:[e.jsx(l,{fullWidth:!0,id:"min_stock",name:"min_stock",margin:"normal",type:"number",label:"Min. Stock",variant:"outlined",InputProps:{endAdornment:e.jsx(d,{position:"end",children:a.um})},value:a.min_stock,onChange:t=>i("min_stock",t.target.value)}),e.jsx(m,{message:o.min_stock,className:"mt-2"})]})]})}),e.jsxs(s,{item:!0,xs:12,children:[e.jsx(l,{fullWidth:!0,multiline:!0,id:"description",name:"description",margin:"normal",label:"Descripcion del Producto",variant:"outlined",value:a.description,onChange:t=>i("description",t.target.value)}),e.jsx(m,{message:o.description,className:"mt-2"})]}),e.jsx(s,{item:!0,xs:12,display:"flex",justifyContent:"end",children:e.jsx($,{type:"submit",variant:"contained",children:"GUARDAR"})})]})})]})]})}export{xe as default};