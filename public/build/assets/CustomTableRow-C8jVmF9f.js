import{W as a,j as e,r as l,d as n}from"./app-CcZTupP2.js";import{d as m,D as i,a as d}from"./DeleteModal-CUUfvW1x.js";import{T as c,a as o}from"./TableRow-DxpbGPI5.js";import{B as x}from"./Box-BI9hePAt.js";import{I as p}from"./IconButton-Du3rFqIH.js";import"./createSvgIcon-BJU7Dqrr.js";import"./Modal-DCmtYMGN.js";import"./Button-CMrp5SBm.js";function R({category:r}){let t=a({}).delete;const s=()=>{t(route("category.destroy",{category:r}))};return r.category_name,e.jsx(l.Fragment,{children:e.jsxs(c,{sx:{"& > *":{borderBottom:"unset"}},children:[e.jsx(o,{children:r.category_name}),e.jsx(o,{align:"center",className:"w-28",children:e.jsxs(x,{children:[e.jsx(n,{href:route("category.edit",r),children:e.jsx(p,{size:"small",children:e.jsx(m,{className:"text-orange-400",color:"action"})})}),e.jsx(i,{body:"Seguro desea eliminar este proveedor?",icon:e.jsx(d,{className:"text-red-300"}),onAccept:s})]})})]})})}export{R as default};
