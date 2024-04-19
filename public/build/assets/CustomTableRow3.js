import{j as e,r as s,W as j,d as o}from"./app.js";import{d as b,D as f,a as v}from"./DeleteModal.js";import{i as p,I as i}from"./IconButton.js";import{r as N}from"./createSvgIcon.js";import{T as g,a as E}from"./TableBody.js";import{T as n,a as t}from"./TableRow.js";import{S as c}from"./Switch.js";import{B as S}from"./Box.js";import"./Modal.js";import"./Button.js";import"./useFormControl.js";import"./index5.js";var l={},T=p;Object.defineProperty(l,"__esModule",{value:!0});var d=l.default=void 0,_=T(N()),B=e;d=l.default=(0,_.default)((0,B.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility");function P({supplier:a}){s.useState(!1);let m=j({}).delete;const x=JSON.parse(a.phone_numbers),h=()=>{m(route("supplier.destroy",{supplier:a}))};return a.name,a.email,`${a.state}${a.city}${a.street}`,g,E,Object.entries(x||{}).map(([r,u])=>e.jsxs(n,{children:[e.jsx(t,{className:"font-bold",component:"th",align:"right",children:r}),e.jsx(t,{align:"center",children:u})]},r)),c,a.active,e.jsx(s.Fragment,{children:e.jsxs(n,{sx:{"& > *":{borderBottom:"unset"}},children:[e.jsx(t,{children:a.name}),e.jsx(t,{className:"hidden sm:table-cell",children:a.email}),e.jsx(t,{className:"hidden sm:table-cell",children:e.jsx(c,{disabled:!0,checked:!!a.active,inputProps:{"aria-label":"controlled"}})}),e.jsx(t,{align:"center",className:"w-28",children:e.jsxs(S,{children:[e.jsx(o,{href:route("supplier.show",a),children:e.jsx(i,{size:"small",children:e.jsx(d,{})})}),e.jsx(o,{href:route("supplier.edit",a),children:e.jsx(i,{size:"small",children:e.jsx(b,{className:"text-orange-400",color:"action"})})}),e.jsx(f,{body:"Seguro desea eliminar este proveedor?",icon:e.jsx(v,{className:"text-red-300"}),onAccept:h})]})})]})})}export{P as default};
