(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8537:(e,t,r)=>{Promise.resolve().then(r.bind(r,1692)),Promise.resolve().then(r.t.bind(r,2065,23)),Promise.resolve().then(r.t.bind(r,9324,23))},1692:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(5155);r(2115);var a=r(7113);function s(e){let{children:t,...r}=e;return(0,n.jsx)(a.N,{...r,children:t})}},9324:()=>{},2065:e=>{e.exports={style:{fontFamily:"'Roboto Mono'",fontStyle:"normal"},className:"__className_4a1915",variable:"__variable_4a1915"}},7113:(e,t,r)=>{"use strict";r.d(t,{D:()=>m,N:()=>d});var n=r(2115),a=(e,t,r,n,a,s,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&s?a.map(e=>s[e]||e):a;r?(i.classList.remove(...n),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(n)m(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(n)}catch(e){}},s=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=n.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=n.useContext(i))?e:c},d=e=>n.useContext(i)?n.createElement(n.Fragment,null,e.children):n.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:a=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=u,defaultTheme:d=a?"system":"light",attribute:h="data-theme",value:v,children:g,nonce:w,scriptProps:E}=e,[S,k]=n.useState(()=>y(c,d)),[C,T]=n.useState(()=>y(c)),_=v?Object.values(v):m,L=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=p());let n=v?v[t]:t,o=r?b(w):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(..._),n&&i.classList.add(n)):e.startsWith("data-")&&(n?i.setAttribute(e,n):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=s.includes(d)?d:null,r=s.includes(t)?t:e;i.style.colorScheme=r}null==o||o()},[w]),N=n.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),A=n.useCallback(e=>{T(p(e)),"system"===S&&a&&!t&&L("system")},[S,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?k(e.newValue):N(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),n.useEffect(()=>{L(null!=t?t:S)},[t,S]);let P=n.useMemo(()=>({theme:S,setTheme:N,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:a?[...m,"system"]:m,systemTheme:a?C:void 0}),[S,N,t,C,a,m]);return n.createElement(i.Provider,{value:P},n.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:a,enableColorScheme:l,defaultTheme:d,value:v,themes:m,nonce:w,scriptProps:E}),g)},f=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([s,r,i,t,m,c,o,l]).slice(1,-1);return n.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},b=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[944,441,517,358],()=>t(8537)),_N_E=e.O()}]);