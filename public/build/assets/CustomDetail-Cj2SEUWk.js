import{j as r,d}from"./app-CvfNB7ra.js";import{L as i,a as p,A as u,d as x}from"./Inventory-T9T7q22q.js";import{d as l}from"./Visibility-DeN603Lc.js";import{F as j}from"./index.esm-D6QcNMvp.js";import{B as h}from"./Box-Bwlq-kWd.js";import{T as n}from"./Typography-BRzJn4xP.js";import{D as c}from"./Divider-x_rfINIS.js";import{G as s}from"./Grid-CKhAo9Bo.js";import{I as g}from"./IconButton-D5b0Ojme.js";import{L as y}from"./ListItemAvatar-DW9Ws2uE.js";import"./index-BHBGyOd0.js";import"./ListContext-D5ol0eb0.js";import"./createSvgIcon-COTNUewJ.js";const T=t=>{const{index:o,data:a,style:m}=t,e=a[o];return r.jsxs(p,{style:m,disablePadding:!0,secondaryAction:r.jsx(d,{href:route("product.show",e),children:r.jsx(g,{edge:"end","aria-label":"delete",children:r.jsx(l,{})})}),children:[r.jsx(y,{children:r.jsx(u,{children:e.image?r.jsx("img",{src:`/storage/${e.image.url}`}):r.jsx(x,{})})}),r.jsx(i,{primary:e.name,secondary:String(e.pivot.product_count)+e.um})]},e.id)};function $({offer:t,...o}){const a=t.product_cost>t.sale_price;return r.jsxs(h,{...o,className:"bg-gray-100 p-2",children:[r.jsx(n,{textTransform:"uppercase",variant:"h6",gutterBottom:!0,component:"div",children:t.name}),r.jsx(c,{}),r.jsxs(s,{container:!0,columns:12,rowSpacing:2,marginTop:1,children:[r.jsxs(s,{item:!0,xs:12,md:6,container:!0,columns:12,direction:"column",spacing:1,children:[r.jsx(s,{item:!0,children:r.jsx(i,{sx:{"& > span":{textTransform:"uppercase"}},secondary:t.description,primary:"descripcion"})}),r.jsxs(s,{item:!0,children:[r.jsx(i,{sx:{"& > span":{textTransform:"uppercase"}},secondary:t.product_cost+"$",primary:"Precio por productos"}),r.jsx(i,{sx:{"& > span":{textTransform:"uppercase"},"& > p":{color:a?"red":"green"}},secondary:t.sale_price+"$",primary:"Precio"})]})]}),r.jsxs(s,{item:!0,xs:12,md:6,children:[r.jsx(n,{textTransform:"uppercase",variant:"subtitle1",gutterBottom:!0,component:"div",children:"PRODUCTOS"}),r.jsx(c,{className:"mb-2"}),r.jsx(j,{height:300,width:"100%",itemSize:46,itemCount:t.products.length,itemData:t.products,overscanCount:5,style:{marginBottom:"5px"},className:"hideScroll",children:T})]})]})]})}export{$ as default};