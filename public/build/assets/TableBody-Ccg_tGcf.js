import{d as m,c as T,s as f,b as l,u as x,f as g,j as C,k as v}from"./IconButton-D5b0Ojme.js";import{r as p,j as i}from"./app-CvfNB7ra.js";import{b as R,c as j}from"./TableRow-Bj6TCrCY.js";function w(o){return m("MuiTable",o)}T("MuiTable",["root","stickyHeader"]);const H=["className","component","padding","size","stickyHeader"],N=o=>{const{classes:e,stickyHeader:s}=o;return v({root:["root",s&&"stickyHeader"]},w,e)},U=f("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,s.stickyHeader&&e.stickyHeader]}})(({theme:o,ownerState:e})=>l({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":l({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},e.stickyHeader&&{borderCollapse:"separate"})),u="table",h=p.forwardRef(function(e,s){const t=x({props:e,name:"MuiTable"}),{className:d,component:a=u,padding:n="normal",size:r="medium",stickyHeader:c=!1}=t,k=g(t,H),b=l({},t,{component:a,padding:n,size:r,stickyHeader:c}),B=N(b),M=p.useMemo(()=>({padding:n,size:r,stickyHeader:c}),[n,r,c]);return i.jsx(R.Provider,{value:M,children:i.jsx(U,l({as:a,role:a===u?null:"table",ref:s,className:C(B.root,d),ownerState:b},k))})}),q=h;function S(o){return m("MuiTableBody",o)}T("MuiTableBody",["root"]);const $=["className","component"],P=o=>{const{classes:e}=o;return v({root:["root"]},S,e)},_=f("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),z={variant:"body"},y="tbody",E=p.forwardRef(function(e,s){const t=x({props:e,name:"MuiTableBody"}),{className:d,component:a=y}=t,n=g(t,$),r=l({},t,{component:a}),c=P(r);return i.jsx(j.Provider,{value:z,children:i.jsx(_,l({className:C(c.root,d),as:a,ref:s,role:a===y?null:"rowgroup",ownerState:r},n))})}),D=E;export{q as T,D as a};