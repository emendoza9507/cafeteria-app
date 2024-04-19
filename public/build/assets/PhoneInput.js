import{r as i,W as j,j as e}from"./app.js";import{T as g,a as T}from"./TableBody.js";import{T as C}from"./TableHead.js";import{T as d,a as s}from"./TableRow.js";import{T as E}from"./Modal.js";import{T as u}from"./TextField.js";import{B as v}from"./Button.js";import{A as P,D as A}from"./Delete.js";import{I as B}from"./IconButton.js";import"./useFormControl.js";import"./Menu.js";function q({value:c,onChange:m}){const[l,o]=i.useState([]),{data:a,setData:p,reset:h}=j({label:"",number:""});i.useEffect(()=>{if(c){const n=[];Object.entries(c).forEach(([r,t])=>{n.push({label:r,number:t})}),o(n)}},[]),i.useEffect(()=>{b()},[l]);const b=()=>{if(!m)return;const n={};l.forEach(r=>{n[r.label]=r.number}),m(n)},f=()=>{if(a.label==""||a.number=="")return;const n={label:a.label,number:a.number};l.find(t=>t.label.toUpperCase()==a.label.toUpperCase()||t.number.toUpperCase()==a.number.toUpperCase())||(o(t=>[...t,n]),h())},x=n=>()=>{o(r=>[...r.filter(t=>t!=n)])};return e.jsxs(g,{size:"small",children:[e.jsxs(C,{children:[e.jsx(d,{children:e.jsx(s,{padding:"none",colSpan:3,children:e.jsx(E,{variant:"subtitle1",children:"Telefonos"})})}),e.jsxs(d,{children:[e.jsx(s,{padding:"none",children:e.jsx(u,{fullWidth:!0,label:"Etiqueta",variant:"standard",size:"small",value:a.label,onChange:n=>p("label",n.target.value)})}),e.jsx(s,{padding:"none",children:e.jsx(u,{fullWidth:!0,label:"Telefono",variant:"standard",size:"small",value:a.number,onChange:n=>p("number",n.target.value)})}),e.jsx(s,{padding:"none",children:e.jsx(v,{startIcon:e.jsx(P,{}),onClick:f,children:"Agregar"})})]})]}),e.jsx(T,{children:l.map((n,r)=>e.jsxs(d,{children:[e.jsx(s,{padding:"none",children:n.label}),e.jsx(s,{padding:"none",children:n.number}),e.jsx(s,{padding:"none",children:e.jsx(B,{onClick:x(n),children:e.jsx(A,{})})})]},r))})]})}export{q as default};
