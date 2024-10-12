import{r as u,j as c,i as S,C as _}from"./index-JPne9CEF.js";import{C as F}from"./index-CGO0cPyz.js";let Z={data:""},B=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Z,R=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,D=/\n+/g,b=(e,t)=>{let r="",a="",o="";for(let s in e){let n=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+n+";":a+=s[1]=="f"?b(n,s):s+"{"+b(n,s[1]=="k"?"":t)+"}":typeof n=="object"?a+=b(n,t?t.replace(/([^,])+/g,i=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):s):n!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(s,n):s+":"+n+";")}return r+(t&&o?t+"{"+o+"}":o)+a},x={},W=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+W(e[r]);return t}return e},V=(e,t,r,a,o)=>{let s=W(e),n=x[s]||(x[s]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(s));if(!x[n]){let l=s!==e?e:(d=>{let p,h,f=[{}];for(;p=R.exec(d.replace(U,""));)p[4]?f.shift():p[3]?(h=p[3].replace(D," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][p[1]]=p[2].replace(D," ").trim();return f[0]})(e);x[n]=b(o?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&x.g?x.g:null;return r&&(x.g=x[n]),((l,d,p,h)=>{h?d.data=d.data.replace(h,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(x[n],t,a,i),n},X=(e,t,r)=>e.reduce((a,o,s)=>{let n=t[s];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return a+o+(n??"")},"");function I(e){let t=this||{},r=e.call?e(t.p):e;return V(r.unshift?r.raw?X(r,[].slice.call(arguments,1),t.p):r.reduce((a,o)=>Object.assign(a,o&&o.call?o(t.p):o),{}):r,B(t.target),t.g,t.o,t.k)}let P,O,A;I.bind({g:1});let y=I.bind({k:1});function Y(e,t,r,a){b.p=t,P=e,O=r,A=a}function v(e,t){let r=this||{};return function(){let a=arguments;function o(s,n){let i=Object.assign({},s),l=i.className||o.className;r.p=Object.assign({theme:O&&O()},i),r.o=/ *go\d+/.test(l),i.className=I.apply(r,a)+(l?" "+l:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),A&&d[0]&&A(i),P(d,i)}return o}}var q=e=>typeof e=="function",$=(e,t)=>q(e)?e(t):e,G=(()=>{let e=0;return()=>(++e).toString()})(),H=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),J=20,E=new Map,Q=1e3,T=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),w({type:4,toastId:e})},Q);E.set(e,t)},K=e=>{let t=E.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,J)};case 1:return t.toast.id&&K(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?T(a):e.toasts.forEach(s=>{T(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+o}))}}},N=[],L={toasts:[],pausedAt:void 0},w=e=>{L=z(L,e),N.forEach(t=>{t(L)})},ee={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},te=(e={})=>{let[t,r]=u.useState(L);u.useEffect(()=>(N.push(r),()=>{let o=N.indexOf(r);o>-1&&N.splice(o,1)}),[t]);let a=t.toasts.map(o=>{var s,n;return{...e,...e[o.type],...o,duration:o.duration||((s=e[o.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||ee[o.type],style:{...e.style,...(n=e[o.type])==null?void 0:n.style,...o.style}}});return{...t,toasts:a}},re=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||G()}),j=e=>(t,r)=>{let a=re(t,e,r);return w({type:2,toast:a}),a.id},m=(e,t)=>j("blank")(e,t);m.error=j("error");m.success=j("success");m.loading=j("loading");m.custom=j("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,r)=>{let a=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(m.success($(t.success,o),{id:a,...r,...r==null?void 0:r.success}),o)).catch(o=>{m.error($(t.error,o),{id:a,...r,...r==null?void 0:r.error})}),e};var se=(e,t)=>{w({type:1,toast:{id:e,height:t}})},ae=()=>{w({type:5,time:Date.now()})},oe=e=>{let{toasts:t,pausedAt:r}=te(e);u.useEffect(()=>{if(r)return;let s=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(s-i.createdAt);if(l<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,r]);let a=u.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),o=u.useCallback((s,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},p=t.filter(g=>(g.position||d)===(s.position||d)&&g.height),h=p.findIndex(g=>g.id===s.id),f=p.filter((g,M)=>M<h&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,M)=>g+(M.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:se,startPause:ae,endPause:a,calculateOffset:o}}},ie=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ne=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,de=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ie} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ne} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ce=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ce} 1s linear infinite;
`,pe=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,fe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,he=v("div")`
  position: absolute;
`,ge=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xe=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ye=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,be=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?u.createElement(ye,null,t):t:r==="blank"?null:u.createElement(ge,null,u.createElement(ue,{...a}),r!=="loading"&&u.createElement(he,null,r==="error"?u.createElement(de,{...a}):u.createElement(fe,{...a})))},ve=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,we=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",je="0%{opacity:1;} 100%{opacity:0;}",Ce=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ee=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ne=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=H()?[ke,je]:[ve(r),we(r)];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Le=u.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?Ne(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement(be,{toast:e}),n=u.createElement(Ee,{...e.ariaProps},$(e.message,e));return u.createElement(Ce,{className:e.className,style:{...o,...r,...e.style}},typeof a=="function"?a({icon:s,message:n}):u.createElement(u.Fragment,null,s,n))});Y(u.createElement);var $e=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let s=u.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;a(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return u.createElement("div",{ref:s,className:t,style:r},o)},Ie=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:H()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...o}},Me=I`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,C=16,Se=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:s,containerClassName:n})=>{let{toasts:i,handlers:l}=oe(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:C,left:C,right:C,bottom:C,pointerEvents:"none",...s},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||t,h=l.calculateOffset(d,{reverseOrder:e,gutter:a,defaultPosition:t}),f=Ie(p,h);return u.createElement($e,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Me:"",style:f},d.type==="custom"?$(d.message,d):o?o(d):u.createElement(Le,{toast:d,position:p}))}))},_e=m;const Oe=({size:e="20",color:t="currentColor",...r})=>c.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[c.jsx("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M10 6.66669V10",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M10 13.3333H10.0088",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ae=({size:e="16",color:t="currentColor",...r})=>c.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[c.jsx("path",{d:"M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M8 10.6667V8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M8 5.33331H8.0075",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ze=({size:e="24px",color:t="currentColor",...r})=>c.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[c.jsx("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12.5 7.5L7.5 12.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M7.5 7.5L12.5 12.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),De=({children:e,visible:t,className:r,...a})=>c.jsx("div",{className:S("flex items-start bg-grey-90 p-base border rounded-rounded shadow-toaster mb-xsmall last:mb-0",{"animate-enter":t},{"animate-leave":!t},r),...a,children:e}),Te=({toast:e,type:t,title:r,message:a})=>{const o=()=>{m.dismiss(e.id)};return c.jsxs(De,{visible:e.visible,className:"w-[380px]",children:[c.jsx("div",{children:We(t)}),c.jsxs("div",{className:"flex flex-col ml-small mr-base gap-y-2xsmall flex-grow text-white",children:[c.jsx("span",{className:"inter-small-semibold",children:r}),c.jsx("span",{className:"inter-small-regular text-grey-20",children:a})]}),c.jsxs("div",{children:[c.jsx("button",{onClick:o,children:c.jsx(_,{size:k,className:"text-grey-40"})}),c.jsx("span",{className:"sr-only",children:"Close"})]})]})},k=20;function We(e){switch(e){case"success":return c.jsx(F,{size:k,className:"text-emerald-40"});case"warning":return c.jsx(Oe,{size:k,className:"text-orange-40"});case"error":return c.jsx(ze,{size:k,className:"text-rose-40"});default:return c.jsx(Ae,{size:k,className:"text-grey-40"})}}const Fe=()=>(e,t,r)=>{m.custom(a=>c.jsx(Te,{toast:a,type:r,title:e,message:t}),{position:"top-right",duration:3e3})};export{Oe as A,Ae as I,De as T,ze as X,_e as _,Se as a,m as n,Fe as u};
