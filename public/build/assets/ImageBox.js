import{j as e,r as l}from"./app.js";import{h as c,i as m,I as d}from"./IconButton.js";import{r as p}from"./createSvgIcon.js";import{B as x}from"./Button.js";import{m as u}from"./makeStyles.js";const g=c(e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image");var a={},h=m;Object.defineProperty(a,"__esModule",{value:!0});var n=a.default=void 0,f=h(p()),i=e;n=a.default=(0,f.default)([(0,i.jsx)("path",{d:"M21 19.1H3V5h18zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"},"0"),(0,i.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z"},"1")],"CancelPresentation");const j=u(r=>({root:{"& > *":{margin:2},textAlign:"center",display:"flex",flexDirection:"column !important"},input:{display:"none"},imgBox:{position:"relative",maxWidth:"360px",alignSelf:"center"},clearImg:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#000000a3",top:0,display:"none",justifyContent:"center",alignItems:"center"},img:{width:"100%"}}));function S({file:r,handleChangeImage:o,handleRemoveImage:s}){const t=j();return e.jsxs(l.Fragment,{children:[e.jsx("input",{className:t.input,id:"image",type:"file",onChange:o}),e.jsx("label",{htmlFor:"image",children:e.jsx(x,{variant:"outlined",color:"primary",component:"span",startIcon:e.jsx(g,{}),children:"Image"})}),e.jsxs("div",{id:"imgBox",className:t.imgBox,children:[e.jsx("img",{src:r,className:t.img}),e.jsx("div",{id:"clearImg",className:t.clearImg,children:e.jsx(d,{onClick:s,children:e.jsx(n,{className:"text-red-400",fontSize:"large"})})})]})]})}export{S as default};
