import{r as j,j as e,a as f,d as g,y}from"./app-DLHhFt2j.js";import{H as C}from"./HeaderModule-DABnf2HO.js";import{A as T}from"./AuthenticatedLayout-rMNQbvkk.js";import{d as b}from"./Add-DAU15DGa.js";import w from"./CustomTableRow-CRtvwYzM.js";import{S as N,P as L}from"./SearchBox-Bmc7j6_A.js";import{B as m}from"./Box-5BqpItbZ.js";import{T as v,a as B}from"./TableBody-DJn6ymTz.js";import{T as P}from"./TableHead-59TlIzTJ.js";import{T as S,a as d}from"./TableRow-DJpPNU1K.js";import{B as A}from"./Button-CqSjhgwJ.js";import"./Modal-BSE03VYd.js";import"./IconButton-DzVpBQ9u.js";import"./createSvgIcon-DN2_RHHq.js";import"./Menu-CBISrW-7.js";import"./index-BGmzOLiF.js";import"./KeyboardArrowUp-DP5Mqx37.js";import"./DeleteModal-D2Za3Puq.js";import"./Switch-BUIH1pSO.js";import"./useFormControl-BKKWusIi.js";import"./Grid-CleszngE.js";import"./TextField-uAVAVOeU.js";const a=({children:t,...s})=>e.jsx(d,{sx:{fontWeight:700},...s,children:t});function ee({auth:t,pagination:s,...n}){const l="PRODUCTOS",i=Array.from(s.data||[]),[x,h]=j.useState(i),u=(r,o)=>{y.get(s.links[o].url)},p=r=>{const o=i.filter(c=>c.name.toLowerCase().includes(r.toLocaleLowerCase())||c.category.category_name.toLocaleLowerCase().includes(r.toLocaleLowerCase()));h(o)};return e.jsxs(T,{user:t.user,...n,children:[e.jsx(f,{title:l}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(C,{title:l}),e.jsx(N,{className:"mb-2",onChange:p}),e.jsx(m,{className:"bg-white overflow-hidden overflow-y-auto shadow-sm hideScroll",sx:{maxHeight:600,overflow:"scroll"},children:e.jsxs(v,{children:[e.jsx(P,{className:"sticky top-0 bg-gray-300 z-10",children:e.jsxs(S,{children:[e.jsx(a,{}),e.jsx(a,{children:"NOMBRE"}),e.jsx(a,{className:"hidden sm:table-cell",children:"CATEGORIA"}),e.jsx(a,{className:"hidden sm:table-cell",children:"STOCK"}),e.jsx(a,{className:"hidden sm:table-cell",children:"ACTIVE"}),e.jsx(d,{align:"center",children:e.jsx(g,{href:route("product.create"),children:e.jsx(A,{variant:"outlined",startIcon:e.jsx(b,{}),children:"Nuevo"})})})]})}),e.jsx(B,{children:x.map(r=>e.jsx(w,{product:r},r.id))})]})}),e.jsx(m,{className:"flex justify-center",children:s.last_page>1&&e.jsx(L,{page:s.current_page,onChange:u,className:"mt-2",count:s.last_page,variant:"outlined",color:"primary"})})]})]})}export{ee as default};
