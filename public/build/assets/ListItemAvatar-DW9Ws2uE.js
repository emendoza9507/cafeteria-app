import{d as x,c as u,s as I,b as o,u as p,f as L,j as f,k as g}from"./IconButton-D5b0Ojme.js";import{r as i,j as v}from"./app-CvfNB7ra.js";import{L as d}from"./ListContext-D5ol0eb0.js";function A(t){return x("MuiListItemAvatar",t)}u("MuiListItemAvatar",["root","alignItemsFlexStart"]);const C=["className"],S=t=>{const{alignItems:s,classes:e}=t;return g({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},A,e)},h=I("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>o({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),j=i.forwardRef(function(s,e){const a=p({props:s,name:"MuiListItemAvatar"}),{className:n}=a,l=L(a,C),m=i.useContext(d),r=o({},a,{alignItems:m.alignItems}),c=S(r);return v.jsx(h,o({className:f(c.root,n),ownerState:r,ref:e},l))}),U=j;export{U as L};
