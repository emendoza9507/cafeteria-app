import{b as I,a as j,s as b,G as W,_ as n,H as Q,c as N,B as V,d as M,e as u,f as T,E as P,J as Y,K as Z}from"./IconButton.js";import{r as _,j as g}from"./app.js";import{u as ee}from"./useFormControl.js";import{c as te}from"./index5.js";function ae(e){return I("PrivateSwitchBase",e)}j("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const oe=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],se=e=>{const{classes:t,checked:a,disabled:s,edge:i}=e,d={root:["root",a&&"checked",s&&"disabled",i&&`edge${u(i)}`],input:["input"]};return T(d,ae,t)},ie=b(W)(({ownerState:e})=>n({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),re=b("input",{shouldForwardProp:Q})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ce=_.forwardRef(function(t,a){const{autoFocus:s,checked:i,checkedIcon:d,className:w,defaultChecked:h,disabled:k,disableFocusRipple:v=!1,edge:l=!1,icon:p,id:m,inputProps:O,inputRef:U,name:E,onBlur:x,onChange:C,onFocus:y,readOnly:L,required:D=!1,tabIndex:q,type:S,value:B}=t,A=N(t,oe),[R,X]=V({controlled:i,default:!!h,name:"SwitchBase",state:"checked"}),c=ee(),G=r=>{y&&y(r),c&&c.onFocus&&c.onFocus(r)},H=r=>{x&&x(r),c&&c.onBlur&&c.onBlur(r)},J=r=>{if(r.nativeEvent.defaultPrevented)return;const F=r.target.checked;X(F),C&&C(r,F)};let f=k;c&&typeof f>"u"&&(f=c.disabled);const K=S==="checkbox"||S==="radio",$=n({},t,{checked:R,disabled:f,disableFocusRipple:v,edge:l}),z=se($);return g.jsxs(ie,n({component:"span",className:M(z.root,w),centerRipple:!0,focusRipple:!v,disabled:f,tabIndex:null,role:void 0,onFocus:G,onBlur:H,ownerState:$,ref:a},A,{children:[g.jsx(re,n({autoFocus:s,checked:i,defaultChecked:h,className:z.input,disabled:f,id:K?m:void 0,name:E,onChange:J,readOnly:L,ref:U,required:D,ownerState:$,tabIndex:q,type:S},S==="checkbox"&&B===void 0?{}:{value:B},O)),R?d:p]}))}),ne=ce;function de(e){return I("MuiSwitch",e)}const o=j("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),le=["className","color","edge","size","sx"],pe=te(),ue=e=>{const{classes:t,edge:a,size:s,color:i,checked:d,disabled:w}=e,h={root:["root",a&&`edge${u(a)}`,`size${u(s)}`],switchBase:["switchBase",`color${u(i)}`,d&&"checked",w&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},k=T(h,de,t);return n({},t,k)},he=b("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t[`edge${u(a.edge)}`],t[`size${u(a.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),ge=b(ne,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{[`& .${o.input}`]:t.input},a.color!=="default"&&t[`color${u(a.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:P(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{color:t},style:{[`&.${o.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:P(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${e.palette.mode==="light"?Y(e.palette[t].main,.62):Z(e.palette[t].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]})),be=b("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),we=b("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),ke=_.forwardRef(function(t,a){const s=pe({props:t,name:"MuiSwitch"}),{className:i,color:d="primary",edge:w=!1,size:h="medium",sx:k}=s,v=N(s,le),l=n({},s,{color:d,edge:w,size:h}),p=ue(l),m=g.jsx(we,{className:p.thumb,ownerState:l});return g.jsxs(he,{className:M(p.root,i),sx:k,ownerState:l,children:[g.jsx(ge,n({type:"checkbox",icon:m,checkedIcon:m,ref:a,ownerState:l},v,{classes:n({},p,{root:p.switchBase})})),g.jsx(be,{className:p.track,ownerState:l})]})}),$e=ke;export{$e as S};
