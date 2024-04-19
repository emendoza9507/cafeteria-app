import{j as e,a as l,d as c}from"./app.js";import{H as m}from"./HeaderModule.js";import{A as x}from"./AuthenticatedLayout.js";import{C as h,d as j,a as f,b as u}from"./Place.js";import{B as y}from"./Box.js";import{G as o}from"./Grid.js";import{T as s}from"./Typography.js";import{B as b}from"./Button.js";import"./ApplicationLogo.js";import"./transition.js";import"./createSvgIcon.js";function E({auth:a,supplier:t,...n}){const r="PROVEEDOR";return e.jsxs(x,{user:a.user,...n,children:[e.jsx(l,{title:r}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(m,{title:r}),e.jsx(y,{className:"bg-white overflow-hidden overflow-y-auto shadow-sm hideScroll",sx:{maxHeight:600,overflow:"scroll"},children:e.jsx(o,{container:!0,display:"flex",justifyContent:"center",children:e.jsxs(o,{className:t.active?"bg-green-100":"bg-gray-100",item:!0,xs:12,md:6,children:[e.jsxs(h,{children:[e.jsx(s,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Detalle"}),e.jsx(s,{variant:"h6",component:"div",children:t.name}),e.jsx(s,{sx:{mb:1.5},color:"text.secondary",children:t.email}),e.jsxs(s,{variant:"body2",children:['"',t.description,'"']}),e.jsxs(s,{className:"mt-2",sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[e.jsx(j,{fontSize:"small"})," Dirección"]}),e.jsxs(s,{variant:"subtitle1",children:[t.city," ",t.street,",",t.state]}),e.jsxs(s,{className:"mt-2",sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[e.jsx(f,{fontSize:"small"})," Telefonos"]}),e.jsx("table",{children:e.jsx("tbody",{children:t.phone_numbers&&Object.entries(JSON.parse(t.phone_numbers)).map(([i,d])=>e.jsxs("tr",{children:[e.jsxs("th",{children:[i,":"]}),e.jsx("td",{children:d})]}))})})]}),e.jsx(u,{children:e.jsx(c,{href:route("supplier.edit",t),children:e.jsx(b,{size:"small",children:"EDITAR"})})})]})})})]})]})}export{E as default};
