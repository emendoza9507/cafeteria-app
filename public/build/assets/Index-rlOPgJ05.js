import{j as e,a as h,d as p,r as d,W as f,y as g}from"./app-CvfNB7ra.js";import{H as y}from"./HeaderModule-H64kzbVr.js";import{A as b}from"./AuthenticatedLayout--MGMuH8r.js";import{d as N,a as w,C as T}from"./KeyboardArrowUp-Bud-bDji.js";import{d as C,D as v,a as B}from"./DeleteModal-DrvoIg6X.js";import{d as _,P as S}from"./Add-BgdxCTkX.js";import E from"./CustomDetail-Cj2SEUWk.js";import{B as n}from"./Box-Bwlq-kWd.js";import{T as A,a as D}from"./TableBody-Ccg_tGcf.js";import{T as H}from"./TableHead-CIU_toZT.js";import{T as m,a as t}from"./TableRow-Bj6TCrCY.js";import{B as M}from"./Button-HP1_PD-1.js";import{I as c}from"./IconButton-D5b0Ojme.js";import"./Typography-BRzJn4xP.js";import"./createSvgIcon-COTNUewJ.js";import"./Inventory-T9T7q22q.js";import"./index-BHBGyOd0.js";import"./ListContext-D5ol0eb0.js";import"./Menu-DaDftulN.js";import"./Modal-wYIQB4SX.js";import"./Divider-x_rfINIS.js";import"./Toolbar-BBsujruw.js";import"./Visibility-DeN603Lc.js";import"./index.esm-D6QcNMvp.js";import"./Grid-CKhAo9Bo.js";import"./ListItemAvatar-DW9Ws2uE.js";const x=({children:r,...s})=>e.jsx(t,{sx:{fontWeight:700},...s,children:r}),$=({menu:r})=>{const[s,o]=d.useState(!1);let a=f({}).delete;const l=()=>{a(route("menu.destroy",{menu:r}))};return e.jsxs(d.Fragment,{children:[e.jsxs(m,{sx:{"& > *":{borderBottom:"unset"}},children:[e.jsx(t,{className:"w-10",children:e.jsx(c,{"aria-label":"expand row",size:"small",onClick:()=>o(!s),children:s?e.jsx(N,{}):e.jsx(w,{})})}),e.jsx(t,{children:r.name}),e.jsx(t,{align:"center",className:"w-28",children:e.jsxs(n,{children:[e.jsx(p,{href:route("menu.edit",r),children:e.jsx(c,{size:"small",children:e.jsx(C,{className:"text-orange-400"})})}),e.jsx(v,{body:"Seguro desea eliminar este menu?",icon:e.jsx(B,{className:"text-red-300"}),onAccept:l})]})})]}),e.jsx(m,{children:e.jsx(t,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e.jsx(T,{in:s,timeout:"auto",unmountOnExit:!0,children:e.jsx(E,{menu:r,marginY:2})})})})]})};function ie({auth:r,pagination:s,...o}){const a="MENUS",l=Array.from(s.data||[]),j=(i,u)=>{g.get(s.links[u].url)};return e.jsxs(b,{user:r.user,...o,children:[e.jsx(h,{title:a}),e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(y,{title:a}),e.jsx(n,{className:"bg-white overflow-hidden overflow-y-auto shadow-sm hideScroll",sx:{maxHeight:600,overflow:"scroll"},children:e.jsxs(A,{children:[e.jsx(H,{className:"sticky top-0 bg-gray-300 z-10",children:e.jsxs(m,{children:[e.jsx(x,{}),e.jsx(x,{children:"MENU"}),e.jsx(t,{align:"center",children:e.jsx(p,{href:route("menu.create"),children:e.jsx(M,{variant:"outlined",startIcon:e.jsx(_,{}),children:"Nuevo"})})})]})}),e.jsx(D,{children:l.map(i=>e.jsx($,{menu:i},i.id))})]})}),e.jsx(n,{className:"flex justify-center",children:s.last_page>1&&e.jsx(S,{page:s.current_page,onChange:j,className:"mt-2",count:s.last_page,variant:"outlined",color:"primary"})})]})]})}export{ie as default};
