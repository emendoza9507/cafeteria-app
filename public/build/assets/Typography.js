import{r as b,j as B}from"./app.js";import{R as W,W as C,V as M,b as R,a as P,s as _,e as y,_ as i,u as j,H as E,c as U,d as $,f as N}from"./Button.js";function k(){const t=W(M);return t[C]||t}function D(t){return R("MuiTypography",t)}P("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const H=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=t=>{const{align:a,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=t,s={root:["root",o,t.align!=="inherit"&&`align${y(a)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return N(s,D,p)},V=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${y(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>i({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=t=>z[t]||t,I=b.forwardRef(function(a,r){const n=j({props:a,name:"MuiTypography"}),e=A(n.color),o=E(i({},n,{color:e})),{align:p="inherit",className:s,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=u}=o,x=U(o,H),m=i({},o,{align:p,color:e,className:s,component:g,gutterBottom:d,noWrap:f,paragraph:l,variant:h,variantMapping:c}),T=g||(l?"p":c[h]||u[h])||"span",v=L(m);return B.jsx(V,i({as:T,ref:r,ownerState:m,className:$(v.root,s)},x))}),q=I;export{q as T,k as u};
