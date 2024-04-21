import{d as ue,c as de,s as Mt,e as Et,b as D,u as Lt,f as it,j as ve,k as Wt,S as We,o as te,m as $t,t as ee,U as Se,D as me,E as Ne}from"./IconButton-D5b0Ojme.js";import{r as k,j as Z}from"./app-CvfNB7ra.js";import{P as He}from"./Menu-DaDftulN.js";import{P as Ie,u as Ve,T as Ue,r as ze,g as re}from"./Modal-wYIQB4SX.js";import{u as Fe}from"./Typography-BRzJn4xP.js";const Xe={disableDefaultClasses:!1},qe=k.createContext(Xe);function Ye(t){const{disableDefaultClasses:e}=k.useContext(qe);return r=>e?"":t(r)}function _e(t){return ue("MuiAppBar",t)}de("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Ge=["className","color","enableColorOnDark","position"],Je=t=>{const{color:e,position:r,classes:o}=t,n={root:["root",`color${Et(e)}`,`position${Et(r)}`]};return Wt(n,_e,o)},bt=(t,e)=>t?`${t==null?void 0:t.replace(")","")}, ${e})`:e,Ke=Mt(He,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${Et(r.position)}`],e[`color${Et(r.color)}`]]}})(({theme:t,ownerState:e})=>{const r=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return D({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!t.vars&&D({},e.color==="default"&&{backgroundColor:r,color:t.palette.getContrastText(r)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&D({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&D({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette.AppBar.defaultBg:bt(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?t.vars.palette.text.primary:bt(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette[e.color].main:bt(t.vars.palette.AppBar.darkBg,t.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?t.vars.palette[e.color].contrastText:bt(t.vars.palette.AppBar.darkColor,t.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Qe=k.forwardRef(function(e,r){const o=Lt({props:e,name:"MuiAppBar"}),{className:n,color:a="primary",enableColorOnDark:p=!1,position:s="fixed"}=o,i=it(o,Ge),c=D({},o,{color:a,position:s,enableColorOnDark:p}),l=Je(c);return Z.jsx(Ke,D({square:!0,component:"header",ownerState:c,elevation:4,className:ve(l.root,n,s==="fixed"&&"mui-fixed"),ref:r},i))}),Io=Qe,ge="base";function Ze(t){return`${ge}--${t}`}function tr(t,e){return`${ge}-${t}-${e}`}function he(t,e){const r=We[e];return r?Ze(r):tr(t,e)}function er(t,e){const r={};return e.forEach(o=>{r[o]=he(t,o)}),r}var W="top",I="bottom",V="right",S="left",St="auto",vt=[W,I,V,S],rt="start",ut="end",rr="clippingParents",ye="viewport",pt="popper",or="reference",oe=vt.reduce(function(t,e){return t.concat([e+"-"+rt,e+"-"+ut])},[]),be=[].concat(vt,[St]).reduce(function(t,e){return t.concat([e,e+"-"+rt,e+"-"+ut])},[]),nr="beforeRead",ar="read",ir="afterRead",sr="beforeMain",lr="main",pr="afterMain",cr="beforeWrite",fr="write",ur="afterWrite",dr=[nr,ar,ir,sr,lr,pr,cr,fr,ur];function X(t){return t?(t.nodeName||"").toLowerCase():null}function N(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function tt(t){var e=N(t).Element;return t instanceof e||t instanceof Element}function H(t){var e=N(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Nt(t){if(typeof ShadowRoot>"u")return!1;var e=N(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function vr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},a=e.elements[r];!H(a)||!X(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(p){var s=n[p];s===!1?a.removeAttribute(p):a.setAttribute(p,s===!0?"":s)}))})}function mr(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],a=e.attributes[o]||{},p=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),s=p.reduce(function(i,c){return i[c]="",i},{});!H(n)||!X(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const gr={name:"applyStyles",enabled:!0,phase:"write",fn:vr,effect:mr,requires:["computeStyles"]};function F(t){return t.split("-")[0]}var Q=Math.max,Pt=Math.min,ot=Math.round;function Bt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function xe(){return!/^((?!chrome|android).)*safari/i.test(Bt())}function nt(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),n=1,a=1;e&&H(t)&&(n=t.offsetWidth>0&&ot(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&ot(o.height)/t.offsetHeight||1);var p=tt(t)?N(t):window,s=p.visualViewport,i=!xe()&&r,c=(o.left+(i&&s?s.offsetLeft:0))/n,l=(o.top+(i&&s?s.offsetTop:0))/a,v=o.width/n,h=o.height/a;return{width:v,height:h,top:l,right:c+v,bottom:l+h,left:c,x:c,y:l}}function Ht(t){var e=nt(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function we(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Nt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function q(t){return N(t).getComputedStyle(t)}function hr(t){return["table","td","th"].indexOf(X(t))>=0}function _(t){return((tt(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ct(t){return X(t)==="html"?t:t.assignedSlot||t.parentNode||(Nt(t)?t.host:null)||_(t)}function ne(t){return!H(t)||q(t).position==="fixed"?null:t.offsetParent}function yr(t){var e=/firefox/i.test(Bt()),r=/Trident/i.test(Bt());if(r&&H(t)){var o=q(t);if(o.position==="fixed")return null}var n=Ct(t);for(Nt(n)&&(n=n.host);H(n)&&["html","body"].indexOf(X(n))<0;){var a=q(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function mt(t){for(var e=N(t),r=ne(t);r&&hr(r)&&q(r).position==="static";)r=ne(r);return r&&(X(r)==="html"||X(r)==="body"&&q(r).position==="static")?e:r||yr(t)||e}function It(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ct(t,e,r){return Q(t,Pt(e,r))}function br(t,e,r){var o=ct(t,e,r);return o>r?r:o}function Oe(){return{top:0,right:0,bottom:0,left:0}}function Ee(t){return Object.assign({},Oe(),t)}function Pe(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var xr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Ee(typeof e!="number"?e:Pe(e,vt))};function wr(t){var e,r=t.state,o=t.name,n=t.options,a=r.elements.arrow,p=r.modifiersData.popperOffsets,s=F(r.placement),i=It(s),c=[S,V].indexOf(s)>=0,l=c?"height":"width";if(!(!a||!p)){var v=xr(n.padding,r),h=Ht(a),u=i==="y"?W:S,E=i==="y"?I:V,d=r.rects.reference[l]+r.rects.reference[i]-p[i]-r.rects.popper[l],m=p[i]-r.rects.reference[i],O=mt(a),C=O?i==="y"?O.clientHeight||0:O.clientWidth||0:0,w=d/2-m/2,f=v[u],b=C-h[l]-v[E],x=C/2-h[l]/2+w,g=ct(f,x,b),A=i;r.modifiersData[o]=(e={},e[A]=g,e.centerOffset=g-x,e)}}function Or(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||we(e.elements.popper,n)&&(e.elements.arrow=n))}const Er={name:"arrow",enabled:!0,phase:"main",fn:wr,effect:Or,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function at(t){return t.split("-")[1]}var Pr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Cr(t,e){var r=t.x,o=t.y,n=e.devicePixelRatio||1;return{x:ot(r*n)/n||0,y:ot(o*n)/n||0}}function ae(t){var e,r=t.popper,o=t.popperRect,n=t.placement,a=t.variation,p=t.offsets,s=t.position,i=t.gpuAcceleration,c=t.adaptive,l=t.roundOffsets,v=t.isFixed,h=p.x,u=h===void 0?0:h,E=p.y,d=E===void 0?0:E,m=typeof l=="function"?l({x:u,y:d}):{x:u,y:d};u=m.x,d=m.y;var O=p.hasOwnProperty("x"),C=p.hasOwnProperty("y"),w=S,f=W,b=window;if(c){var x=mt(r),g="clientHeight",A="clientWidth";if(x===N(r)&&(x=_(r),q(x).position!=="static"&&s==="absolute"&&(g="scrollHeight",A="scrollWidth")),x=x,n===W||(n===S||n===V)&&a===ut){f=I;var P=v&&x===b&&b.visualViewport?b.visualViewport.height:x[g];d-=P-o.height,d*=i?1:-1}if(n===S||(n===W||n===I)&&a===ut){w=V;var R=v&&x===b&&b.visualViewport?b.visualViewport.width:x[A];u-=R-o.width,u*=i?1:-1}}var $=Object.assign({position:s},c&&Pr),L=l===!0?Cr({x:u,y:d},N(r)):{x:u,y:d};if(u=L.x,d=L.y,i){var j;return Object.assign({},$,(j={},j[f]=C?"0":"",j[w]=O?"0":"",j.transform=(b.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",j))}return Object.assign({},$,(e={},e[f]=C?d+"px":"",e[w]=O?u+"px":"",e.transform="",e))}function Rr(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,p=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:F(e.placement),variation:at(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ae(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:p,roundOffsets:i})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ae(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Rr,data:{}};var xt={passive:!0};function kr(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,a=n===void 0?!0:n,p=o.resize,s=p===void 0?!0:p,i=N(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&c.forEach(function(l){l.addEventListener("scroll",r.update,xt)}),s&&i.addEventListener("resize",r.update,xt),function(){a&&c.forEach(function(l){l.removeEventListener("scroll",r.update,xt)}),s&&i.removeEventListener("resize",r.update,xt)}}const Tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:kr,data:{}};var $r={left:"right",right:"left",bottom:"top",top:"bottom"};function Ot(t){return t.replace(/left|right|bottom|top/g,function(e){return $r[e]})}var Br={start:"end",end:"start"};function ie(t){return t.replace(/start|end/g,function(e){return Br[e]})}function Vt(t){var e=N(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Ut(t){return nt(_(t)).left+Vt(t).scrollLeft}function jr(t,e){var r=N(t),o=_(t),n=r.visualViewport,a=o.clientWidth,p=o.clientHeight,s=0,i=0;if(n){a=n.width,p=n.height;var c=xe();(c||!c&&e==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:p,x:s+Ut(t),y:i}}function Dr(t){var e,r=_(t),o=Vt(t),n=(e=t.ownerDocument)==null?void 0:e.body,a=Q(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=Q(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Ut(t),i=-o.scrollTop;return q(n||r).direction==="rtl"&&(s+=Q(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:p,x:s,y:i}}function zt(t){var e=q(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function Ce(t){return["html","body","#document"].indexOf(X(t))>=0?t.ownerDocument.body:H(t)&&zt(t)?t:Ce(Ct(t))}function ft(t,e){var r;e===void 0&&(e=[]);var o=Ce(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),a=N(o),p=n?[a].concat(a.visualViewport||[],zt(o)?o:[]):o,s=e.concat(p);return n?s:s.concat(ft(Ct(p)))}function jt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Mr(t,e){var r=nt(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function se(t,e,r){return e===ye?jt(jr(t,r)):tt(e)?Mr(e,r):jt(Dr(_(t)))}function Lr(t){var e=ft(Ct(t)),r=["absolute","fixed"].indexOf(q(t).position)>=0,o=r&&H(t)?mt(t):t;return tt(o)?e.filter(function(n){return tt(n)&&we(n,o)&&X(n)!=="body"}):[]}function Wr(t,e,r,o){var n=e==="clippingParents"?Lr(t):[].concat(e),a=[].concat(n,[r]),p=a[0],s=a.reduce(function(i,c){var l=se(t,c,o);return i.top=Q(l.top,i.top),i.right=Pt(l.right,i.right),i.bottom=Pt(l.bottom,i.bottom),i.left=Q(l.left,i.left),i},se(t,p,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Re(t){var e=t.reference,r=t.element,o=t.placement,n=o?F(o):null,a=o?at(o):null,p=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,i;switch(n){case W:i={x:p,y:e.y-r.height};break;case I:i={x:p,y:e.y+e.height};break;case V:i={x:e.x+e.width,y:s};break;case S:i={x:e.x-r.width,y:s};break;default:i={x:e.x,y:e.y}}var c=n?It(n):null;if(c!=null){var l=c==="y"?"height":"width";switch(a){case rt:i[c]=i[c]-(e[l]/2-r[l]/2);break;case ut:i[c]=i[c]+(e[l]/2-r[l]/2);break}}return i}function dt(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,a=r.strategy,p=a===void 0?t.strategy:a,s=r.boundary,i=s===void 0?rr:s,c=r.rootBoundary,l=c===void 0?ye:c,v=r.elementContext,h=v===void 0?pt:v,u=r.altBoundary,E=u===void 0?!1:u,d=r.padding,m=d===void 0?0:d,O=Ee(typeof m!="number"?m:Pe(m,vt)),C=h===pt?or:pt,w=t.rects.popper,f=t.elements[E?C:h],b=Wr(tt(f)?f:f.contextElement||_(t.elements.popper),i,l,p),x=nt(t.elements.reference),g=Re({reference:x,element:w,strategy:"absolute",placement:n}),A=jt(Object.assign({},w,g)),P=h===pt?A:x,R={top:b.top-P.top+O.top,bottom:P.bottom-b.bottom+O.bottom,left:b.left-P.left+O.left,right:P.right-b.right+O.right},$=t.modifiersData.offset;if(h===pt&&$){var L=$[n];Object.keys(R).forEach(function(j){var U=[V,I].indexOf(j)>=0?1:-1,z=[W,I].indexOf(j)>=0?"y":"x";R[j]+=L[z]*U})}return R}function Sr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,a=r.rootBoundary,p=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?be:i,l=at(o),v=l?s?oe:oe.filter(function(E){return at(E)===l}):vt,h=v.filter(function(E){return c.indexOf(E)>=0});h.length===0&&(h=v);var u=h.reduce(function(E,d){return E[d]=dt(t,{placement:d,boundary:n,rootBoundary:a,padding:p})[F(d)],E},{});return Object.keys(u).sort(function(E,d){return u[E]-u[d]})}function Nr(t){if(F(t)===St)return[];var e=Ot(t);return[ie(t),e,ie(e)]}function Hr(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!0:p,i=r.fallbackPlacements,c=r.padding,l=r.boundary,v=r.rootBoundary,h=r.altBoundary,u=r.flipVariations,E=u===void 0?!0:u,d=r.allowedAutoPlacements,m=e.options.placement,O=F(m),C=O===m,w=i||(C||!E?[Ot(m)]:Nr(m)),f=[m].concat(w).reduce(function(et,Y){return et.concat(F(Y)===St?Sr(e,{placement:Y,boundary:l,rootBoundary:v,padding:c,flipVariations:E,allowedAutoPlacements:d}):Y)},[]),b=e.rects.reference,x=e.rects.popper,g=new Map,A=!0,P=f[0],R=0;R<f.length;R++){var $=f[R],L=F($),j=at($)===rt,U=[W,I].indexOf(L)>=0,z=U?"width":"height",B=dt(e,{placement:$,boundary:l,rootBoundary:v,altBoundary:h,padding:c}),M=U?j?V:S:j?I:W;b[z]>x[z]&&(M=Ot(M));var y=Ot(M),T=[];if(a&&T.push(B[L]<=0),s&&T.push(B[M]<=0,B[y]<=0),T.every(function(et){return et})){P=$,A=!1;break}g.set($,T)}if(A)for(var G=E?3:1,Rt=function(Y){var lt=f.find(function(ht){var J=g.get(ht);if(J)return J.slice(0,Y).every(function(At){return At})});if(lt)return P=lt,"break"},st=G;st>0;st--){var gt=Rt(st);if(gt==="break")break}e.placement!==P&&(e.modifiersData[o]._skip=!0,e.placement=P,e.reset=!0)}}const Ir={name:"flip",enabled:!0,phase:"main",fn:Hr,requiresIfExists:["offset"],data:{_skip:!1}};function le(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function pe(t){return[W,V,I,S].some(function(e){return t[e]>=0})}function Vr(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,a=e.modifiersData.preventOverflow,p=dt(e,{elementContext:"reference"}),s=dt(e,{altBoundary:!0}),i=le(p,o),c=le(s,n,a),l=pe(i),v=pe(c);e.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}const Ur={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Vr};function zr(t,e,r){var o=F(t),n=[S,W].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,p=a[0],s=a[1];return p=p||0,s=(s||0)*n,[S,V].indexOf(o)>=0?{x:s,y:p}:{x:p,y:s}}function Fr(t){var e=t.state,r=t.options,o=t.name,n=r.offset,a=n===void 0?[0,0]:n,p=be.reduce(function(l,v){return l[v]=zr(v,e.rects,a),l},{}),s=p[e.placement],i=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=c),e.modifiersData[o]=p}const Xr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Fr};function qr(t){var e=t.state,r=t.name;e.modifiersData[r]=Re({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Yr={name:"popperOffsets",enabled:!0,phase:"read",fn:qr,data:{}};function _r(t){return t==="x"?"y":"x"}function Gr(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!1:p,i=r.boundary,c=r.rootBoundary,l=r.altBoundary,v=r.padding,h=r.tether,u=h===void 0?!0:h,E=r.tetherOffset,d=E===void 0?0:E,m=dt(e,{boundary:i,rootBoundary:c,padding:v,altBoundary:l}),O=F(e.placement),C=at(e.placement),w=!C,f=It(O),b=_r(f),x=e.modifiersData.popperOffsets,g=e.rects.reference,A=e.rects.popper,P=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,R=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),$=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(x){if(a){var j,U=f==="y"?W:S,z=f==="y"?I:V,B=f==="y"?"height":"width",M=x[f],y=M+m[U],T=M-m[z],G=u?-A[B]/2:0,Rt=C===rt?g[B]:A[B],st=C===rt?-A[B]:-g[B],gt=e.elements.arrow,et=u&&gt?Ht(gt):{width:0,height:0},Y=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Oe(),lt=Y[U],ht=Y[z],J=ct(0,g[B],et[B]),At=w?g[B]/2-G-J-lt-R.mainAxis:Rt-J-lt-R.mainAxis,$e=w?-g[B]/2+G+J+ht+R.mainAxis:st+J+ht+R.mainAxis,kt=e.elements.arrow&&mt(e.elements.arrow),Be=kt?f==="y"?kt.clientTop||0:kt.clientLeft||0:0,Xt=(j=$==null?void 0:$[f])!=null?j:0,je=M+At-Xt-Be,De=M+$e-Xt,qt=ct(u?Pt(y,je):y,M,u?Q(T,De):T);x[f]=qt,L[f]=qt-M}if(s){var Yt,Me=f==="x"?W:S,Le=f==="x"?I:V,K=x[b],yt=b==="y"?"height":"width",_t=K+m[Me],Gt=K-m[Le],Tt=[W,S].indexOf(O)!==-1,Jt=(Yt=$==null?void 0:$[b])!=null?Yt:0,Kt=Tt?_t:K-g[yt]-A[yt]-Jt+R.altAxis,Qt=Tt?K+g[yt]+A[yt]-Jt-R.altAxis:Gt,Zt=u&&Tt?br(Kt,K,Qt):ct(u?Kt:_t,K,u?Qt:Gt);x[b]=Zt,L[b]=Zt-K}e.modifiersData[o]=L}}const Jr={name:"preventOverflow",enabled:!0,phase:"main",fn:Gr,requiresIfExists:["offset"]};function Kr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Qr(t){return t===N(t)||!H(t)?Vt(t):Kr(t)}function Zr(t){var e=t.getBoundingClientRect(),r=ot(e.width)/t.offsetWidth||1,o=ot(e.height)/t.offsetHeight||1;return r!==1||o!==1}function to(t,e,r){r===void 0&&(r=!1);var o=H(e),n=H(e)&&Zr(e),a=_(e),p=nt(t,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((X(e)!=="body"||zt(a))&&(s=Qr(e)),H(e)?(i=nt(e,!0),i.x+=e.clientLeft,i.y+=e.clientTop):a&&(i.x=Ut(a))),{x:p.left+s.scrollLeft-i.x,y:p.top+s.scrollTop-i.y,width:p.width,height:p.height}}function eo(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function n(a){r.add(a.name);var p=[].concat(a.requires||[],a.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var i=e.get(s);i&&n(i)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||n(a)}),o}function ro(t){var e=eo(t);return dr.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function oo(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function no(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var ce={placement:"bottom",modifiers:[],strategy:"absolute"};function fe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function ao(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,a=n===void 0?ce:n;return function(s,i,c){c===void 0&&(c=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ce,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},v=[],h=!1,u={state:l,setOptions:function(O){var C=typeof O=="function"?O(l.options):O;d(),l.options=Object.assign({},a,l.options,C),l.scrollParents={reference:tt(s)?ft(s):s.contextElement?ft(s.contextElement):[],popper:ft(i)};var w=ro(no([].concat(o,l.options.modifiers)));return l.orderedModifiers=w.filter(function(f){return f.enabled}),E(),u.update()},forceUpdate:function(){if(!h){var O=l.elements,C=O.reference,w=O.popper;if(fe(C,w)){l.rects={reference:to(C,mt(w),l.options.strategy==="fixed"),popper:Ht(w)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var f=0;f<l.orderedModifiers.length;f++){if(l.reset===!0){l.reset=!1,f=-1;continue}var b=l.orderedModifiers[f],x=b.fn,g=b.options,A=g===void 0?{}:g,P=b.name;typeof x=="function"&&(l=x({state:l,options:A,name:P,instance:u})||l)}}}},update:oo(function(){return new Promise(function(m){u.forceUpdate(),m(l)})}),destroy:function(){d(),h=!0}};if(!fe(s,i))return u;u.setOptions(c).then(function(m){!h&&c.onFirstUpdate&&c.onFirstUpdate(m)});function E(){l.orderedModifiers.forEach(function(m){var O=m.name,C=m.options,w=C===void 0?{}:C,f=m.effect;if(typeof f=="function"){var b=f({state:l,name:O,instance:u,options:w}),x=function(){};v.push(b||x)}})}function d(){v.forEach(function(m){return m()}),v=[]}return u}}var io=[Tr,Yr,Ar,gr,Xr,Ir,Jr,Er,Ur],so=ao({defaultModifiers:io});const Ae="Popper";function lo(t){return he(Ae,t)}er(Ae,["root"]);const po=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],co=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function fo(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function Dt(t){return typeof t=="function"?t():t}function uo(t){return t.nodeType!==void 0}const vo=()=>Wt({root:["root"]},Ye(lo)),mo={},go=k.forwardRef(function(e,r){var o;const{anchorEl:n,children:a,direction:p,disablePortal:s,modifiers:i,open:c,placement:l,popperOptions:v,popperRef:h,slotProps:u={},slots:E={},TransitionProps:d}=e,m=it(e,po),O=k.useRef(null),C=$t(O,r),w=k.useRef(null),f=$t(w,h),b=k.useRef(f);ee(()=>{b.current=f},[f]),k.useImperativeHandle(h,()=>w.current,[]);const x=fo(l,p),[g,A]=k.useState(x),[P,R]=k.useState(Dt(n));k.useEffect(()=>{w.current&&w.current.forceUpdate()}),k.useEffect(()=>{n&&R(Dt(n))},[n]),ee(()=>{if(!P||!c)return;const z=y=>{A(y.placement)};let B=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:y})=>{z(y)}}];i!=null&&(B=B.concat(i)),v&&v.modifiers!=null&&(B=B.concat(v.modifiers));const M=so(P,O.current,D({placement:x},v,{modifiers:B}));return b.current(M),()=>{M.destroy(),b.current(null)}},[P,s,i,c,v,x]);const $={placement:g};d!==null&&($.TransitionProps=d);const L=vo(),j=(o=E.root)!=null?o:"div",U=Ve({elementType:j,externalSlotProps:u.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:C},ownerState:e,className:L.root});return Z.jsx(j,D({},U,{children:typeof a=="function"?a($):a}))}),ho=k.forwardRef(function(e,r){const{anchorEl:o,children:n,container:a,direction:p="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:c,open:l,placement:v="bottom",popperOptions:h=mo,popperRef:u,style:E,transition:d=!1,slotProps:m={},slots:O={}}=e,C=it(e,co),[w,f]=k.useState(!0),b=()=>{f(!1)},x=()=>{f(!0)};if(!i&&!l&&(!d||w))return null;let g;if(a)g=a;else if(o){const R=Dt(o);g=R&&uo(R)?te(R).body:te(null).body}const A=!l&&i&&(!d||w)?"none":void 0,P=d?{in:l,onEnter:b,onExited:x}:void 0;return Z.jsx(Ie,{disablePortal:s,container:g,children:Z.jsx(go,D({anchorEl:o,direction:p,disablePortal:s,modifiers:c,ref:r,open:d?!w:l,placement:v,popperOptions:h,popperRef:u,slotProps:m,slots:O},C,{style:D({position:"fixed",top:0,left:0,display:A},E),TransitionProps:P,children:n}))})});var Ft={};Object.defineProperty(Ft,"__esModule",{value:!0});var ke=Ft.default=void 0,yo=xo(k),bo=Se;function Te(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(Te=function(o){return o?r:e})(t)}function xo(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=Te(e);if(r&&r.has(t))return r.get(t);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)){var p=n?Object.getOwnPropertyDescriptor(t,a):null;p&&(p.get||p.set)?Object.defineProperty(o,a,p):o[a]=t[a]}return o.default=t,r&&r.set(t,o),o}function wo(t){return Object.keys(t).length===0}function Oo(t=null){const e=yo.useContext(bo.ThemeContext);return!e||wo(e)?t:e}ke=Ft.default=Oo;const Eo=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Po=Mt(ho,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Co=k.forwardRef(function(e,r){var o;const n=ke(),a=Lt({props:e,name:"MuiPopper"}),{anchorEl:p,component:s,components:i,componentsProps:c,container:l,disablePortal:v,keepMounted:h,modifiers:u,open:E,placement:d,popperOptions:m,popperRef:O,transition:C,slots:w,slotProps:f}=a,b=it(a,Eo),x=(o=w==null?void 0:w.root)!=null?o:i==null?void 0:i.Root,g=D({anchorEl:p,container:l,disablePortal:v,keepMounted:h,modifiers:u,open:E,placement:d,popperOptions:m,popperRef:O,transition:C},b);return Z.jsx(Po,D({as:s,direction:n==null?void 0:n.direction,slots:{root:x},slotProps:f??c},g,{ref:r}))}),Vo=Co,Ro=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ao(t,e,r){const o=e.getBoundingClientRect(),n=r&&r.getBoundingClientRect(),a=me(e);let p;if(e.fakeTransform)p=e.fakeTransform;else{const c=a.getComputedStyle(e);p=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}let s=0,i=0;if(p&&p!=="none"&&typeof p=="string"){const c=p.split("(")[1].split(")")[0].split(",");s=parseInt(c[4],10),i=parseInt(c[5],10)}return t==="left"?n?`translateX(${n.right+s-o.left}px)`:`translateX(${a.innerWidth+s-o.left}px)`:t==="right"?n?`translateX(-${o.right-n.left-s}px)`:`translateX(-${o.left+o.width-s}px)`:t==="up"?n?`translateY(${n.bottom+i-o.top}px)`:`translateY(${a.innerHeight+i-o.top}px)`:n?`translateY(-${o.top-n.top+o.height-i}px)`:`translateY(-${o.top+o.height-i}px)`}function ko(t){return typeof t=="function"?t():t}function wt(t,e,r){const o=ko(r),n=Ao(t,e,o);n&&(e.style.webkitTransform=n,e.style.transform=n)}const To=k.forwardRef(function(e,r){const o=Fe(),n={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:p,appear:s=!0,children:i,container:c,direction:l="down",easing:v=n,in:h,onEnter:u,onEntered:E,onEntering:d,onExit:m,onExited:O,onExiting:C,style:w,timeout:f=a,TransitionComponent:b=Ue}=e,x=it(e,Ro),g=k.useRef(null),A=$t(i.ref,g,r),P=y=>T=>{y&&(T===void 0?y(g.current):y(g.current,T))},R=P((y,T)=>{wt(l,y,c),ze(y),u&&u(y,T)}),$=P((y,T)=>{const G=re({timeout:f,style:w,easing:v},{mode:"enter"});y.style.webkitTransition=o.transitions.create("-webkit-transform",D({},G)),y.style.transition=o.transitions.create("transform",D({},G)),y.style.webkitTransform="none",y.style.transform="none",d&&d(y,T)}),L=P(E),j=P(C),U=P(y=>{const T=re({timeout:f,style:w,easing:v},{mode:"exit"});y.style.webkitTransition=o.transitions.create("-webkit-transform",T),y.style.transition=o.transitions.create("transform",T),wt(l,y,c),m&&m(y)}),z=P(y=>{y.style.webkitTransition="",y.style.transition="",O&&O(y)}),B=y=>{p&&p(g.current,y)},M=k.useCallback(()=>{g.current&&wt(l,g.current,c)},[l,c]);return k.useEffect(()=>{if(h||l==="down"||l==="right")return;const y=Ne(()=>{g.current&&wt(l,g.current,c)}),T=me(g.current);return T.addEventListener("resize",y),()=>{y.clear(),T.removeEventListener("resize",y)}},[l,h,c]),k.useEffect(()=>{h||M()},[h,M]),Z.jsx(b,D({nodeRef:g,onEnter:R,onEntered:L,onEntering:$,onExit:U,onExited:z,onExiting:j,addEndListener:B,appear:s,in:h,timeout:f},x,{children:(y,T)=>k.cloneElement(i,D({ref:A,style:D({visibility:y==="exited"&&!h?"hidden":void 0},w,i.props.style)},T))}))}),Uo=To;function $o(t){return ue("MuiToolbar",t)}de("MuiToolbar",["root","gutters","regular","dense"]);const Bo=["className","component","disableGutters","variant"],jo=t=>{const{classes:e,disableGutters:r,variant:o}=t;return Wt({root:["root",!r&&"gutters",o]},$o,e)},Do=Mt("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})(({theme:t,ownerState:e})=>D({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},e.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:e})=>e.variant==="regular"&&t.mixins.toolbar),Mo=k.forwardRef(function(e,r){const o=Lt({props:e,name:"MuiToolbar"}),{className:n,component:a="div",disableGutters:p=!1,variant:s="regular"}=o,i=it(o,Bo),c=D({},o,{component:a,disableGutters:p,variant:s}),l=jo(c);return Z.jsx(Do,D({as:a,className:ve(l.root,n),ref:r,ownerState:c},i))}),zo=Mo;export{Io as A,Vo as P,Uo as S,zo as T};
