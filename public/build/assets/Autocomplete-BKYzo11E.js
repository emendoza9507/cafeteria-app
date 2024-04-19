import{h as Po,y as Do,z as so,A as Ye,B as zo,_ as g,b as po,a as uo,s as V,e as f,u as ko,c as eo,d as _,f as fo,C as j,D as Lo,E as xo,I as Ro}from"./IconButton-CoJ6F0Cq.js";import{r as m,j as y}from"./app-B7Vofn4y.js";import{i as co,a as be,o as vo,b as Re,A as No}from"./TextField-CA7jhAep.js";import{c as Mo}from"./index-CQePutwu.js";import{P as So}from"./AuthenticatedLayout-DAdzipUE.js";import{P as Ao}from"./Menu-DIira9zT.js";const Eo=e=>{const o=m.useRef({});return m.useEffect(()=>{o.current=e}),o.current},Fo=Po(y.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function Co(e){return typeof e.normalize<"u"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function Vo(e={}){const{ignoreAccents:o=!0,ignoreCase:s=!0,limit:c,matchFrom:h="any",stringify:I,trim:C=!1}=e;return(u,{inputValue:P,getOptionLabel:A})=>{let L=C?P.trim():P;s&&(L=L.toLowerCase()),o&&(L=Co(L));const T=L?u.filter(ae=>{let N=(I||A)(ae);return s&&(N=N.toLowerCase()),o&&(N=Co(N)),h==="start"?N.indexOf(L)===0:N.indexOf(L)>-1}):u;return typeof c=="number"?T.slice(0,c):T}}function Ze(e,o){for(let s=0;s<e.length;s+=1)if(o(e[s]))return s;return-1}const wo=Vo(),$o=5,Ho=e=>{var o;return e.current!==null&&((o=e.current.parentElement)==null?void 0:o.contains(document.activeElement))};function jo(e){const{unstable_isActiveElementInListbox:o=Ho,unstable_classNamePrefix:s="Mui",autoComplete:c=!1,autoHighlight:h=!1,autoSelect:I=!1,blurOnSelect:C=!1,clearOnBlur:u=!e.freeSolo,clearOnEscape:P=!1,componentName:A="useAutocomplete",defaultValue:L=e.multiple?[]:null,disableClearable:T=!1,disableCloseOnSelect:ae=!1,disabled:N,disabledItemsFocusable:W=!1,disableListWrap:me=!1,filterOptions:Se=wo,filterSelectedOptions:ce=!1,freeSolo:X=!1,getOptionDisabled:G,getOptionKey:Ae,getOptionLabel:he=a=>{var t;return(t=a.label)!=null?t:a},groupBy:re,handleHomeEndKeys:Y=!e.freeSolo,id:Te,includeInputInList:De=!1,inputValue:xe,isOptionEqualToValue:Z=(a,t)=>a===t,multiple:b=!1,onChange:le,onClose:B,onHighlightChange:ve,onInputChange:U,onOpen:pe,open:ze,openOnFocus:R=!1,options:Ne,readOnly:ue=!1,selectOnFocus:Me=!e.freeSolo,value:je}=e,w=Do(Te);let M=he;M=a=>{const t=he(a);return typeof t!="string"?String(t):t};const Ee=m.useRef(!1),We=m.useRef(!0),k=m.useRef(null),H=m.useRef(null),[Ce,oo]=m.useState(null),[E,Fe]=m.useState(-1),Be=h?0:-1,D=m.useRef(Be),[n,go]=so({controlled:je,default:L,name:A}),[x,ne]=so({controlled:xe,default:"",name:A,state:"inputValue"}),[$e,Ue]=m.useState(!1),de=m.useCallback((a,t)=>{if(!(b?n.length<t.length:t!==null)&&!u)return;let r;if(b)r="";else if(t==null)r="";else{const i=M(t);r=typeof i=="string"?i:""}x!==r&&(ne(r),U&&U(a,r,"reset"))},[M,x,b,U,ne,u,n]),[se,Ke]=so({controlled:ze,default:!1,name:A,state:"open"}),[to,_e]=m.useState(!0),Ge=!b&&n!=null&&x===M(n),F=se&&!ue,$=F?Se(Ne.filter(a=>!(ce&&(b?n:[n]).some(t=>t!==null&&Z(a,t)))),{inputValue:Ge&&to?"":x,getOptionLabel:M}):[],q=Eo({filteredOptions:$,value:n,inputValue:x});m.useEffect(()=>{const a=n!==q.value;$e&&!a||X&&!a||de(null,n)},[n,de,$e,q.value,X]);const Ve=se&&$.length>0&&!ue,ye=Ye(a=>{a===-1?k.current.focus():Ce.querySelector(`[data-tag-index="${a}"]`).focus()});m.useEffect(()=>{b&&E>n.length-1&&(Fe(-1),ye(-1))},[n,b,E,ye]);function Ie(a,t){if(!H.current||a<0||a>=$.length)return-1;let l=a;for(;;){const r=H.current.querySelector(`[data-option-index="${l}"]`),i=W?!1:!r||r.disabled||r.getAttribute("aria-disabled")==="true";if(r&&r.hasAttribute("tabindex")&&!i)return l;if(t==="next"?l=(l+1)%$.length:l=(l-1+$.length)%$.length,l===a)return-1}}const ee=Ye(({event:a,index:t,reason:l="auto"})=>{if(D.current=t,t===-1?k.current.removeAttribute("aria-activedescendant"):k.current.setAttribute("aria-activedescendant",`${w}-option-${t}`),ve&&ve(a,t===-1?null:$[t],l),!H.current)return;const r=H.current.querySelector(`[role="option"].${s}-focused`);r&&(r.classList.remove(`${s}-focused`),r.classList.remove(`${s}-focusVisible`));let i=H.current;if(H.current.getAttribute("role")!=="listbox"&&(i=H.current.parentElement.querySelector('[role="listbox"]')),!i)return;if(t===-1){i.scrollTop=0;return}const v=H.current.querySelector(`[data-option-index="${t}"]`);if(v&&(v.classList.add(`${s}-focused`),l==="keyboard"&&v.classList.add(`${s}-focusVisible`),i.scrollHeight>i.clientHeight&&l!=="mouse"&&l!=="touch")){const O=v,te=i.clientHeight+i.scrollTop,ho=O.offsetTop+O.offsetHeight;ho>te?i.scrollTop=ho-i.clientHeight:O.offsetTop-O.offsetHeight*(re?1.3:0)<i.scrollTop&&(i.scrollTop=O.offsetTop-O.offsetHeight*(re?1.3:0))}}),J=Ye(({event:a,diff:t,direction:l="next",reason:r="auto"})=>{if(!F)return;const v=Ie((()=>{const O=$.length-1;if(t==="reset")return Be;if(t==="start")return 0;if(t==="end")return O;const te=D.current+t;return te<0?te===-1&&De?-1:me&&D.current!==-1||Math.abs(t)>1?0:O:te>O?te===O+1&&De?-1:me||Math.abs(t)>1?O:0:te})(),l);if(ee({index:v,reason:r,event:a}),c&&t!=="reset")if(v===-1)k.current.value=x;else{const O=M($[v]);k.current.value=O,O.toLowerCase().indexOf(x.toLowerCase())===0&&x.length>0&&k.current.setSelectionRange(x.length,O.length)}}),Oe=()=>{const a=(t,l)=>{const r=t?M(t):"",i=l?M(l):"";return r===i};if(D.current!==-1&&q.filteredOptions&&q.filteredOptions.length!==$.length&&q.inputValue===x&&(b?n.length===q.value.length&&q.value.every((t,l)=>M(n[l])===M(t)):a(q.value,n))){const t=q.filteredOptions[D.current];if(t)return Ze($,l=>M(l)===M(t))}return-1},we=m.useCallback(()=>{if(!F)return;const a=Oe();if(a!==-1){D.current=a;return}const t=b?n[0]:n;if($.length===0||t==null){J({diff:"reset"});return}if(H.current){if(t!=null){const l=$[D.current];if(b&&l&&Ze(n,i=>Z(l,i))!==-1)return;const r=Ze($,i=>Z(i,t));r===-1?J({diff:"reset"}):ee({index:r});return}if(D.current>=$.length-1){ee({index:$.length-1});return}ee({index:D.current})}},[$.length,b?!1:n,ce,J,ee,F,x,b]),ao=Ye(a=>{zo(H,a),a&&we()});m.useEffect(()=>{we()},[we]);const K=a=>{se||(Ke(!0),_e(!0),pe&&pe(a))},ie=(a,t)=>{se&&(Ke(!1),B&&B(a,t))},oe=(a,t,l,r)=>{if(b){if(n.length===t.length&&n.every((i,v)=>i===t[v]))return}else if(n===t)return;le&&le(a,t,l,r),go(t)},Pe=m.useRef(!1),fe=(a,t,l="selectOption",r="options")=>{let i=l,v=t;if(b){v=Array.isArray(n)?n.slice():[];const O=Ze(v,te=>Z(t,te));O===-1?v.push(t):r!=="freeSolo"&&(v.splice(O,1),i="removeOption")}de(a,v),oe(a,v,i,{option:t}),!ae&&(!a||!a.ctrlKey&&!a.metaKey)&&ie(a,i),(C===!0||C==="touch"&&Pe.current||C==="mouse"&&!Pe.current)&&k.current.blur()};function qe(a,t){if(a===-1)return-1;let l=a;for(;;){if(t==="next"&&l===n.length||t==="previous"&&l===-1)return-1;const r=Ce.querySelector(`[data-tag-index="${l}"]`);if(!r||!r.hasAttribute("tabindex")||r.disabled||r.getAttribute("aria-disabled")==="true")l+=t==="next"?1:-1;else return l}}const Je=(a,t)=>{if(!b)return;x===""&&ie(a,"toggleInput");let l=E;E===-1?x===""&&t==="previous"&&(l=n.length-1):(l+=t==="next"?1:-1,l<0&&(l=0),l===n.length&&(l=-1)),l=qe(l,t),Fe(l),ye(l)},Qe=a=>{Ee.current=!0,ne(""),U&&U(a,"","clear"),oe(a,b?[]:null,"clear")},ro=a=>t=>{if(a.onKeyDown&&a.onKeyDown(t),!t.defaultMuiPrevented&&(E!==-1&&["ArrowLeft","ArrowRight"].indexOf(t.key)===-1&&(Fe(-1),ye(-1)),t.which!==229))switch(t.key){case"Home":F&&Y&&(t.preventDefault(),J({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":F&&Y&&(t.preventDefault(),J({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),J({diff:-$o,direction:"previous",reason:"keyboard",event:t}),K(t);break;case"PageDown":t.preventDefault(),J({diff:$o,direction:"next",reason:"keyboard",event:t}),K(t);break;case"ArrowDown":t.preventDefault(),J({diff:1,direction:"next",reason:"keyboard",event:t}),K(t);break;case"ArrowUp":t.preventDefault(),J({diff:-1,direction:"previous",reason:"keyboard",event:t}),K(t);break;case"ArrowLeft":Je(t,"previous");break;case"ArrowRight":Je(t,"next");break;case"Enter":if(D.current!==-1&&F){const l=$[D.current],r=G?G(l):!1;if(t.preventDefault(),r)return;fe(t,l,"selectOption"),c&&k.current.setSelectionRange(k.current.value.length,k.current.value.length)}else X&&x!==""&&Ge===!1&&(b&&t.preventDefault(),fe(t,x,"createOption","freeSolo"));break;case"Escape":F?(t.preventDefault(),t.stopPropagation(),ie(t,"escape")):P&&(x!==""||b&&n.length>0)&&(t.preventDefault(),t.stopPropagation(),Qe(t));break;case"Backspace":if(b&&!ue&&x===""&&n.length>0){const l=E===-1?n.length-1:E,r=n.slice();r.splice(l,1),oe(t,r,"removeOption",{option:n[l]})}break;case"Delete":if(b&&!ue&&x===""&&n.length>0&&E!==-1){const l=E,r=n.slice();r.splice(l,1),oe(t,r,"removeOption",{option:n[l]})}break}},bo=a=>{Ue(!0),R&&!Ee.current&&K(a)},ke=a=>{if(o(H)){k.current.focus();return}Ue(!1),We.current=!0,Ee.current=!1,I&&D.current!==-1&&F?fe(a,$[D.current],"blur"):I&&X&&x!==""?fe(a,x,"blur","freeSolo"):u&&de(a,n),ie(a,"blur")},z=a=>{const t=a.target.value;x!==t&&(ne(t),_e(!1),U&&U(a,t,"input")),t===""?!T&&!b&&oe(a,null,"clear"):K(a)},S=a=>{const t=Number(a.currentTarget.getAttribute("data-option-index"));D.current!==t&&ee({event:a,index:t,reason:"mouse"})},Q=a=>{ee({event:a,index:Number(a.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Pe.current=!0},mo=a=>{const t=Number(a.currentTarget.getAttribute("data-option-index"));fe(a,$[t],"selectOption"),Pe.current=!1},lo=a=>t=>{const l=n.slice();l.splice(a,1),oe(t,l,"removeOption",{option:n[a]})},no=a=>{se?ie(a,"toggleInput"):K(a)},io=a=>{a.currentTarget.contains(a.target)&&a.target.getAttribute("id")!==w&&a.preventDefault()},Xe=a=>{a.currentTarget.contains(a.target)&&(k.current.focus(),Me&&We.current&&k.current.selectionEnd-k.current.selectionStart===0&&k.current.select(),We.current=!1)},He=a=>{!N&&(x===""||!se)&&no(a)};let ge=X&&x.length>0;ge=ge||(b?n.length>0:n!==null);let Le=$;return re&&(Le=$.reduce((a,t,l)=>{const r=re(t);return a.length>0&&a[a.length-1].group===r?a[a.length-1].options.push(t):a.push({key:l,index:l,group:r,options:[t]}),a},[])),N&&$e&&ke(),{getRootProps:(a={})=>g({"aria-owns":Ve?`${w}-listbox`:null},a,{onKeyDown:ro(a),onMouseDown:io,onClick:Xe}),getInputLabelProps:()=>({id:`${w}-label`,htmlFor:w}),getInputProps:()=>({id:w,value:x,onBlur:ke,onFocus:bo,onChange:z,onMouseDown:He,"aria-activedescendant":F?"":null,"aria-autocomplete":c?"both":"list","aria-controls":Ve?`${w}-listbox`:void 0,"aria-expanded":Ve,autoComplete:"off",ref:k,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:N}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:Qe}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:no}),getTagProps:({index:a})=>g({key:a,"data-tag-index":a,tabIndex:-1},!ue&&{onDelete:lo(a)}),getListboxProps:()=>({role:"listbox",id:`${w}-listbox`,"aria-labelledby":`${w}-label`,ref:ao,onMouseDown:a=>{a.preventDefault()}}),getOptionProps:({index:a,option:t})=>{var l;const r=(b?n:[n]).some(v=>v!=null&&Z(t,v)),i=G?G(t):!1;return{key:(l=Ae==null?void 0:Ae(t))!=null?l:M(t),tabIndex:-1,role:"option",id:`${w}-option-${a}`,onMouseMove:S,onClick:mo,onTouchStart:Q,"data-option-index":a,"aria-disabled":i,"aria-selected":r}},id:w,inputValue:x,value:n,dirty:ge,expanded:F&&Ce,popupOpen:F,focused:$e||E!==-1,anchorEl:Ce,setAnchorEl:oo,focusedTag:E,groupedOptions:Le}}function Wo(e){return po("MuiListSubheader",e)}uo("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Bo=["className","color","component","disableGutters","disableSticky","inset"],Uo=e=>{const{classes:o,color:s,disableGutters:c,inset:h,disableSticky:I}=e,C={root:["root",s!=="default"&&`color${f(s)}`,!c&&"gutters",h&&"inset",!I&&"sticky"]};return fo(C,Wo,o)},Ko=V("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.color!=="default"&&o[`color${f(s.color)}`],!s.disableGutters&&o.gutters,s.inset&&o.inset,!s.disableSticky&&o.sticky]}})(({theme:e,ownerState:o})=>g({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},o.color==="primary"&&{color:(e.vars||e).palette.primary.main},o.color==="inherit"&&{color:"inherit"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.inset&&{paddingLeft:72},!o.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),To=m.forwardRef(function(o,s){const c=ko({props:o,name:"MuiListSubheader"}),{className:h,color:I="default",component:C="li",disableGutters:u=!1,disableSticky:P=!1,inset:A=!1}=c,L=eo(c,Bo),T=g({},c,{color:I,component:C,disableGutters:u,disableSticky:P,inset:A}),ae=Uo(T);return y.jsx(Ko,g({as:C,className:_(ae.root,h),ref:s,ownerState:T},L))});To.muiSkipListHighlight=!0;const _o=To,Go=Po(y.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function qo(e){return po("MuiChip",e)}const Jo=uo("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),d=Jo,Qo=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Xo=e=>{const{classes:o,disabled:s,size:c,color:h,iconColor:I,onDelete:C,clickable:u,variant:P}=e,A={root:["root",P,s&&"disabled",`size${f(c)}`,`color${f(h)}`,u&&"clickable",u&&`clickableColor${f(h)}`,C&&"deletable",C&&`deletableColor${f(h)}`,`${P}${f(h)}`],label:["label",`label${f(c)}`],avatar:["avatar",`avatar${f(c)}`,`avatarColor${f(h)}`],icon:["icon",`icon${f(c)}`,`iconColor${f(I)}`],deleteIcon:["deleteIcon",`deleteIcon${f(c)}`,`deleteIconColor${f(h)}`,`deleteIcon${f(P)}Color${f(h)}`]};return fo(A,qo,o)},Yo=V("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e,{color:c,iconColor:h,clickable:I,onDelete:C,size:u,variant:P}=s;return[{[`& .${d.avatar}`]:o.avatar},{[`& .${d.avatar}`]:o[`avatar${f(u)}`]},{[`& .${d.avatar}`]:o[`avatarColor${f(c)}`]},{[`& .${d.icon}`]:o.icon},{[`& .${d.icon}`]:o[`icon${f(u)}`]},{[`& .${d.icon}`]:o[`iconColor${f(h)}`]},{[`& .${d.deleteIcon}`]:o.deleteIcon},{[`& .${d.deleteIcon}`]:o[`deleteIcon${f(u)}`]},{[`& .${d.deleteIcon}`]:o[`deleteIconColor${f(c)}`]},{[`& .${d.deleteIcon}`]:o[`deleteIcon${f(P)}Color${f(c)}`]},o.root,o[`size${f(u)}`],o[`color${f(c)}`],I&&o.clickable,I&&c!=="default"&&o[`clickableColor${f(c)})`],C&&o.deletable,C&&c!=="default"&&o[`deletableColor${f(c)}`],o[P],o[`${P}${f(c)}`]]}})(({theme:e,ownerState:o})=>{const s=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return g({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${d.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${d.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:s,fontSize:e.typography.pxToRem(12)},[`& .${d.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${d.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${d.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${d.icon}`]:g({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&g({color:e.vars?e.vars.palette.Chip.defaultIconColor:s},o.color!=="default"&&{color:"inherit"})),[`& .${d.deleteIcon}`]:g({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:j(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:j(e.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[o.color].contrastTextChannel} / 0.7)`:j(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(e.vars||e).palette[o.color].main,color:(e.vars||e).palette[o.color].contrastText},o.onDelete&&{[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})},({theme:e,ownerState:o})=>g({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}}),({theme:e,ownerState:o})=>g({},o.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${d.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${d.avatar}`]:{marginLeft:4},[`& .${d.avatarSmall}`]:{marginLeft:2},[`& .${d.icon}`]:{marginLeft:4},[`& .${d.iconSmall}`]:{marginLeft:2},[`& .${d.deleteIcon}`]:{marginRight:5},[`& .${d.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(e.vars||e).palette[o.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:j(e.palette[o.color].main,.7)}`,[`&.${d.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:j(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:j(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${d.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:j(e.palette[o.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].main}}})),Zo=V("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:s}=e,{size:c}=s;return[o.label,o[`label${f(c)}`]]}})(({ownerState:e})=>g({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function yo(e){return e.key==="Backspace"||e.key==="Delete"}const et=m.forwardRef(function(o,s){const c=ko({props:o,name:"MuiChip"}),{avatar:h,className:I,clickable:C,color:u="default",component:P,deleteIcon:A,disabled:L=!1,icon:T,label:ae,onClick:N,onDelete:W,onKeyDown:me,onKeyUp:Se,size:ce="medium",variant:X="filled",tabIndex:G,skipFocusWhenDisabled:Ae=!1}=c,he=eo(c,Qo),re=m.useRef(null),Y=Lo(re,s),Te=R=>{R.stopPropagation(),W&&W(R)},De=R=>{R.currentTarget===R.target&&yo(R)&&R.preventDefault(),me&&me(R)},xe=R=>{R.currentTarget===R.target&&(W&&yo(R)?W(R):R.key==="Escape"&&re.current&&re.current.blur()),Se&&Se(R)},Z=C!==!1&&N?!0:C,b=Z||W?xo:P||"div",le=g({},c,{component:b,disabled:L,size:ce,color:u,iconColor:m.isValidElement(T)&&T.props.color||u,onDelete:!!W,clickable:Z,variant:X}),B=Xo(le),ve=b===xo?g({component:P||"div",focusVisibleClassName:B.focusVisible},W&&{disableRipple:!0}):{};let U=null;W&&(U=A&&m.isValidElement(A)?m.cloneElement(A,{className:_(A.props.className,B.deleteIcon),onClick:Te}):y.jsx(Go,{className:_(B.deleteIcon),onClick:Te}));let pe=null;h&&m.isValidElement(h)&&(pe=m.cloneElement(h,{className:_(B.avatar,h.props.className)}));let ze=null;return T&&m.isValidElement(T)&&(ze=m.cloneElement(T,{className:_(B.icon,T.props.className)})),y.jsxs(Yo,g({as:b,className:_(B.root,I),disabled:Z&&L?!0:void 0,onClick:N,onKeyDown:De,onKeyUp:xe,ref:Y,tabIndex:Ae&&L?-1:G,ownerState:le},ve,he,{children:[pe||ze,y.jsx(Zo,{className:_(B.label),ownerState:le,children:ae}),U]}))}),ot=et;function tt(e){return po("MuiAutocomplete",e)}const p=uo("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Io,Oo;const at=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],rt=["ref"],lt=Mo(),nt=e=>{const{classes:o,disablePortal:s,expanded:c,focused:h,fullWidth:I,hasClearIcon:C,hasPopupIcon:u,inputFocused:P,popupOpen:A,size:L}=e,T={root:["root",c&&"expanded",h&&"focused",I&&"fullWidth",C&&"hasClearIcon",u&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",P&&"inputFocused"],tag:["tag",`tagSize${f(L)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",A&&"popupIndicatorOpen"],popper:["popper",s&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return fo(T,tt,o)},it=V("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e,{fullWidth:c,hasClearIcon:h,hasPopupIcon:I,inputFocused:C,size:u}=s;return[{[`& .${p.tag}`]:o.tag},{[`& .${p.tag}`]:o[`tagSize${f(u)}`]},{[`& .${p.inputRoot}`]:o.inputRoot},{[`& .${p.input}`]:o.input},{[`& .${p.input}`]:C&&o.inputFocused},o.root,c&&o.fullWidth,I&&o.hasPopupIcon,h&&o.hasClearIcon]}})({[`&.${p.focused} .${p.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${p.clearIndicator}`]:{visibility:"visible"}},[`& .${p.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${p.inputRoot}`]:{flexWrap:"wrap",[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:30},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:56},[`& .${p.input}`]:{width:0,minWidth:30}},[`& .${co.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${co.root}.${be.sizeSmall}`]:{[`& .${co.input}`]:{padding:"2px 4px 3px 0"}},[`& .${vo.root}`]:{padding:9,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${p.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${vo.root}.${be.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${p.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Re.root}`]:{paddingTop:19,paddingLeft:8,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${Re.input}`]:{padding:"7px 4px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${Re.root}.${be.sizeSmall}`]:{paddingBottom:1,[`& .${Re.input}`]:{padding:"2.5px 4px"}},[`& .${be.hiddenLabel}`]:{paddingTop:8},[`& .${Re.root}.${be.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${p.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Re.root}.${be.hiddenLabel}.${be.sizeSmall}`]:{[`& .${p.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${p.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${p.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${p.input}`]:{opacity:1}}}]}),st=V("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,o)=>o.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),ct=V(Ro,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,o)=>o.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),pt=V(Ro,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},o)=>g({},o.popupIndicator,e.popupOpen&&o.popupIndicatorOpen)})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),ut=V(So,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${p.option}`]:o.option},o.popper,s.disablePortal&&o.popperDisablePortal]}})(({theme:e})=>({zIndex:(e.vars||e).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]})),dt=V(Ao,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,o)=>o.paper})(({theme:e})=>g({},e.typography.body1,{overflow:"auto"})),ft=V("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,o)=>o.loading})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),gt=V("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,o)=>o.noOptions})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),bt=V("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,o)=>o.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${p.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${p.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${p.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:j(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${p.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${p.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),mt=V(_o,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,o)=>o.groupLabel})(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8})),ht=V("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,o)=>o.groupUl})({padding:0,[`& .${p.option}`]:{paddingLeft:24}}),xt=m.forwardRef(function(o,s){var c,h,I,C;const u=lt({props:o,name:"MuiAutocomplete"}),{autoComplete:P=!1,autoHighlight:A=!1,autoSelect:L=!1,blurOnSelect:T=!1,ChipProps:ae,className:N,clearIcon:W=Io||(Io=y.jsx(Fo,{fontSize:"small"})),clearOnBlur:me=!u.freeSolo,clearOnEscape:Se=!1,clearText:ce="Clear",closeText:X="Close",componentsProps:G={},defaultValue:Ae=u.multiple?[]:null,disableClearable:he=!1,disableCloseOnSelect:re=!1,disabled:Y=!1,disabledItemsFocusable:Te=!1,disableListWrap:De=!1,disablePortal:xe=!1,filterSelectedOptions:Z=!1,forcePopupIcon:b="auto",freeSolo:le=!1,fullWidth:B=!1,getLimitTagsText:ve=r=>`+${r}`,getOptionLabel:U,groupBy:pe,handleHomeEndKeys:ze=!u.freeSolo,includeInputInList:R=!1,limitTags:Ne=-1,ListboxComponent:ue="ul",ListboxProps:Me,loading:je=!1,loadingText:w="Loading…",multiple:M=!1,noOptionsText:Ee="No options",openOnFocus:We=!1,openText:k="Open",PaperComponent:H=Ao,PopperComponent:Ce=So,popupIcon:oo=Oo||(Oo=y.jsx(No,{})),readOnly:E=!1,renderGroup:Fe,renderInput:Be,renderOption:D,renderTags:n,selectOnFocus:go=!u.freeSolo,size:x="medium",slotProps:ne={}}=u,$e=eo(u,at),{getRootProps:Ue,getInputProps:de,getInputLabelProps:se,getPopupIndicatorProps:Ke,getClearProps:to,getTagProps:_e,getListboxProps:Ge,getOptionProps:F,value:$,dirty:q,expanded:Ve,id:ye,popupOpen:Ie,focused:ee,focusedTag:J,anchorEl:Oe,setAnchorEl:we,inputValue:ao,groupedOptions:K}=jo(g({},u,{componentName:"Autocomplete"})),ie=!he&&!Y&&q&&!E,oe=(!le||b===!0)&&b!==!1,{onMouseDown:Pe}=de(),{ref:fe}=Me??{},qe=Ge(),{ref:Je}=qe,Qe=eo(qe,rt),ro=Lo(Je,fe),ke=U||(r=>{var i;return(i=r.label)!=null?i:r}),z=g({},u,{disablePortal:xe,expanded:Ve,focused:ee,fullWidth:B,getOptionLabel:ke,hasClearIcon:ie,hasPopupIcon:oe,inputFocused:J===-1,popupOpen:Ie,size:x}),S=nt(z);let Q;if(M&&$.length>0){const r=i=>g({className:S.tag,disabled:Y},_e(i));n?Q=n($,r,z):Q=$.map((i,v)=>y.jsx(ot,g({label:ke(i),size:x},r({index:v}),ae)))}if(Ne>-1&&Array.isArray(Q)){const r=Q.length-Ne;!ee&&r>0&&(Q=Q.splice(0,Ne),Q.push(y.jsx("span",{className:S.tag,children:ve(r)},Q.length)))}const lo=Fe||(r=>y.jsxs("li",{children:[y.jsx(mt,{className:S.groupLabel,ownerState:z,component:"div",children:r.group}),y.jsx(ht,{className:S.groupUl,ownerState:z,children:r.children})]},r.key)),io=D||((r,i)=>m.createElement("li",g({},r,{key:r.key}),ke(i))),Xe=(r,i)=>{const v=F({option:r,index:i});return io(g({},v,{className:S.option}),r,{selected:v["aria-selected"],index:i,inputValue:ao},z)},He=(c=ne.clearIndicator)!=null?c:G.clearIndicator,ge=(h=ne.paper)!=null?h:G.paper,Le=(I=ne.popper)!=null?I:G.popper,a=(C=ne.popupIndicator)!=null?C:G.popupIndicator,t=r=>y.jsx(ut,g({as:Ce,disablePortal:xe,style:{width:Oe?Oe.clientWidth:null},ownerState:z,role:"presentation",anchorEl:Oe,open:Ie},Le,{className:_(S.popper,Le==null?void 0:Le.className),children:y.jsx(dt,g({ownerState:z,as:H},ge,{className:_(S.paper,ge==null?void 0:ge.className),children:r}))}));let l=null;return K.length>0?l=t(y.jsx(bt,g({as:ue,className:S.listbox,ownerState:z},Qe,Me,{ref:ro,children:K.map((r,i)=>pe?lo({key:r.key,group:r.group,children:r.options.map((v,O)=>Xe(v,r.index+O))}):Xe(r,i))}))):je&&K.length===0?l=t(y.jsx(ft,{className:S.loading,ownerState:z,children:w})):K.length===0&&!le&&!je&&(l=t(y.jsx(gt,{className:S.noOptions,ownerState:z,role:"presentation",onMouseDown:r=>{r.preventDefault()},children:Ee}))),y.jsxs(m.Fragment,{children:[y.jsx(it,g({ref:s,className:_(S.root,N),ownerState:z},Ue($e),{children:Be({id:ye,disabled:Y,fullWidth:!0,size:x==="small"?"small":void 0,InputLabelProps:se(),InputProps:g({ref:we,className:S.inputRoot,startAdornment:Q,onClick:r=>{r.target===r.currentTarget&&Pe(r)}},(ie||oe)&&{endAdornment:y.jsxs(st,{className:S.endAdornment,ownerState:z,children:[ie?y.jsx(ct,g({},to(),{"aria-label":ce,title:ce,ownerState:z},He,{className:_(S.clearIndicator,He==null?void 0:He.className),children:W})):null,oe?y.jsx(pt,g({},Ke(),{disabled:Y,"aria-label":Ie?X:k,title:Ie?X:k,ownerState:z},a,{className:_(S.popupIndicator,a==null?void 0:a.className),children:oo})):null]})}),inputProps:g({className:S.input,disabled:Y,readOnly:E},de())})})),Oe?l:null]})}),Pt=xt;export{Pt as A};