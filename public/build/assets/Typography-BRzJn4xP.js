import{r as W,j as b}from"./app-CvfNB7ra.js";import{C as B,H as E,F as P,b as r,j as y,d as H,c as M,s as R,e as T,u as O,y as S,f as j,k}from"./IconButton-D5b0Ojme.js";function J(){const t=B(P);return t[E]||t}function U(t){return typeof t=="string"}function V(t,e,n){return t===void 0||U(t)?e:r({},e,{ownerState:r({},e.ownerState,n)})}function _(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(a=>a.match(/^on[A-Z]/)&&typeof t[a]=="function"&&!e.includes(a)).forEach(a=>{n[a]=t[a]}),n}function q(t,e,n){return typeof t=="function"?t(e,n):t}function v(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function G(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:a,externalForwardedProps:o,className:s}=t;if(!e){const g=y(n==null?void 0:n.className,s,o==null?void 0:o.className,a==null?void 0:a.className),f=r({},n==null?void 0:n.style,o==null?void 0:o.style,a==null?void 0:a.style),u=r({},n,o,a);return g.length>0&&(u.className=g),Object.keys(f).length>0&&(u.style=f),{props:u,internalRef:void 0}}const c=_(r({},o,a)),p=v(a),m=v(o),i=e(c),d=y(i==null?void 0:i.className,n==null?void 0:n.className,s,o==null?void 0:o.className,a==null?void 0:a.className),h=r({},i==null?void 0:i.style,n==null?void 0:n.style,o==null?void 0:o.style,a==null?void 0:a.style),l=r({},i,n,m,p);return d.length>0&&(l.className=d),Object.keys(h).length>0&&(l.style=h),{props:l,internalRef:i.ref}}function $(t){return H("MuiTypography",t)}M("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const w=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],A=t=>{const{align:e,gutterBottom:n,noWrap:a,paragraph:o,variant:s,classes:c}=t,p={root:["root",s,t.align!=="inherit"&&`align${T(e)}`,n&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return k(p,$,c)},D=R("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${T(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>r({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},F={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=t=>F[t]||t,Z=W.forwardRef(function(e,n){const a=O({props:e,name:"MuiTypography"}),o=L(a.color),s=S(r({},a,{color:o})),{align:c="inherit",className:p,component:m,gutterBottom:i=!1,noWrap:d=!1,paragraph:h=!1,variant:l="body1",variantMapping:g=x}=s,f=j(s,w),u=r({},s,{align:c,color:o,className:p,component:m,gutterBottom:i,noWrap:d,paragraph:h,variant:l,variantMapping:g}),C=m||(h?"p":g[l]||x[l])||"span",N=A(u);return b.jsx(D,r({as:C,ref:n,ownerState:u,className:y(N.root,p)},f))}),K=Z;export{K as T,V as a,_ as e,U as i,G as m,q as r,J as u};
