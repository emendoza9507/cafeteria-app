import{j as e,a as f,d as j,r as n,W as g,b as T}from"./app-CcZTupP2.js";import{H as b}from"./HeaderModule-BbMSTuTz.js";import{A as w}from"./AuthenticatedLayout-BJAtVlcw.js";import{d as B,a as v,C as y}from"./KeyboardArrowUp-CdklditQ.js";import{d as C,D as N,a as _}from"./DeleteModal-CUUfvW1x.js";import{d as E}from"./Add-qOHPaM1c.js";import{T as h,a as p}from"./TableBody-DJLxTO1-.js";import{T as u}from"./TableHead-RdXAJWXO.js";import{T as l,a}from"./TableRow-DxpbGPI5.js";import{B as R}from"./Button-CMrp5SBm.js";import{I as x}from"./IconButton-Du3rFqIH.js";import{B as m}from"./Box-BI9hePAt.js";import{T as S}from"./Modal-DCmtYMGN.js";import"./createSvgIcon-BJU7Dqrr.js";import"./Menu-Chc26orf.js";import"./index-CvhhuN57.js";const A=({table:s})=>{const[r,o]=n.useState();return n.useEffect(()=>{T.get(route("table.qr_gen",{table:s})).then(({data:t})=>o(t))},[]),e.jsx("img",{src:r})},i=({children:s,...r})=>e.jsx(a,{sx:{fontWeight:700},...r,children:s}),D=({table:s})=>{const[r,o]=n.useState(!1);let t=g({}).delete;const d=()=>{t(route("table.destroy",{table:s}))};return e.jsxs(n.Fragment,{children:[e.jsxs(l,{sx:{"& > *":{borderBottom:"unset"}},children:[e.jsx(a,{className:"w-10",children:e.jsx(x,{"aria-label":"expand row",size:"small",onClick:()=>o(!r),children:r?e.jsx(B,{}):e.jsx(v,{})})}),e.jsx(a,{children:s.name}),e.jsx(a,{align:"center",className:"w-28",children:e.jsxs(m,{children:[e.jsx(j,{href:route("table.edit",s),children:e.jsx(x,{size:"small",children:e.jsx(C,{className:"text-orange-400"})})}),e.jsx(N,{body:"Seguro desea eliminar esta mesa?",icon:e.jsx(_,{className:"text-red-300"}),onAccept:d})]})})]}),e.jsx(l,{children:e.jsx(a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e.jsx(y,{in:r,timeout:"auto",unmountOnExit:!0,children:e.jsxs(m,{sx:{margin:1},children:[e.jsx(S,{variant:"h6",gutterBottom:!0,component:"div",children:"QR CODE"}),e.jsxs(h,{size:"small","aria-label":"purchases",children:[e.jsx(u,{children:e.jsxs(l,{children:[e.jsx(i,{children:"QR"}),e.jsx(i,{children:"QR_PATH"})]})}),e.jsx(p,{children:e.jsxs(l,{children:[e.jsx(a,{children:e.jsx(A,{table:s})}),e.jsx(a,{component:"th",scope:"row",children:s.qr_path})]})})]})]})})})})]})};function U({auth:s,pagination:r,...o}){const t="MESAS",d=Array.from(r.data||[]);return e.jsxs(w,{user:s.user,...o,children:[e.jsx(f,{title:t}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(b,{title:t}),e.jsx("div",{className:"bg-white overflow-hidden shadow-sm",children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(l,{children:[e.jsx(i,{}),e.jsx(i,{children:"NOMBRE"}),e.jsx(a,{align:"center",children:e.jsx(j,{href:route("table.create"),children:e.jsx(R,{variant:"outlined",startIcon:e.jsx(E,{}),children:"Nueva"})})})]})}),e.jsx(p,{children:d.map(c=>e.jsx(D,{table:c},c.id))})]})})]})]})}export{U as default};
