(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{4188:function(e,t,i){Promise.resolve().then(i.bind(i,756))},5213:function(e,t,i){"use strict";i.d(t,{V:function(){return n},a:function(){return o}});var l=i(7437),a=i(2265);let n=(0,a.createContext)({}),o=e=>{let{children:t}=e,[i,o]=(0,a.useState)({ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14}),[s,r]=(0,a.useState)({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1}),u=()=>"overlay"===i.menuMode,c=()=>window.innerWidth>991;return(0,l.jsx)(n.Provider,{value:{layoutConfig:i,setLayoutConfig:o,layoutState:s,setLayoutState:r,onMenuToggle:()=>{u()&&r(e=>({...e,overlayMenuActive:!e.overlayMenuActive})),c()?r(e=>({...e,staticMenuDesktopInactive:!e.staticMenuDesktopInactive})):r(e=>({...e,staticMenuMobileActive:!e.staticMenuMobileActive}))},showProfileSidebar:()=>{r(e=>({...e,profileSidebarVisible:!e.profileSidebarVisible}))}},children:t})}},756:function(e,t,i){"use strict";i.d(t,{default:function(){return h}});var l=i(7437),a=i(1857),n=i(2265),o=i(4687),s=i(5213),r=()=>{let{layoutConfig:e}=(0,n.useContext)(s.V);return(0,l.jsx)("div",{className:"layout-footer"})},u=i(7138),c=i(6693),d=i(3681);let m=(0,n.createContext)({}),v=e=>{let{children:t}=e,[i,a]=(0,n.useState)("");return(0,l.jsx)(m.Provider,{value:{activeMenu:i,setActiveMenu:a},children:t})};var b=i(6463);let p=e=>{let t=(0,b.usePathname)(),{activeMenu:i,setActiveMenu:a}=(0,n.useContext)(m),s=e.item,r=e.parentKey?e.parentKey+"-"+e.index:String(e.index),v=s.to&&t===s.to,x=i===r||i.startsWith(r+"-"),y=e=>{s.to&&s.to===e&&a(r)};(0,n.useEffect)(()=>{y(t)},[t]);let f=t=>{if(s.disabled){t.preventDefault();return}s.command&&s.command({originalEvent:t,item:s}),s.items?a(x?e.parentKey:r):a(r)},j=s.items&&!1!==s.visible&&(0,l.jsx)(d.Z,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:!!e.root||x,children:(0,l.jsx)("ul",{children:s.items.map((e,t)=>(0,l.jsx)(p,{item:e,index:t,className:e.badgeClass,parentKey:r},e.label))})},s.label);return(0,l.jsxs)("li",{className:(0,o.AK)({"layout-root-menuitem":e.root,"active-menuitem":x}),children:[e.root&&!1!==s.visible&&(0,l.jsx)("div",{className:"layout-menuitem-root-text",children:s.label}),(!s.to||s.items)&&!1!==s.visible?(0,l.jsxs)("a",{href:s.url,onClick:e=>f(e),className:(0,o.AK)(s.class,"p-ripple"),target:s.target,tabIndex:0,children:[(0,l.jsx)("i",{className:(0,o.AK)("layout-menuitem-icon",s.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:s.label}),s.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(c.H,{})]}):null,s.to&&!s.items&&!1!==s.visible?(0,l.jsxs)(u.default,{href:s.to,replace:s.replaceUrl,target:s.target,onClick:e=>f(e),className:(0,o.AK)(s.class,"p-ripple",{"active-route":v}),tabIndex:0,children:[(0,l.jsx)("i",{className:(0,o.AK)("layout-menuitem-icon",s.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:s.label}),s.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(c.H,{})]}):null,j]})};var x=()=>{let{layoutConfig:e}=(0,n.useContext)(s.V);return(0,l.jsx)(v,{children:(0,l.jsx)("ul",{className:"layout-menu",children:[{label:"",items:[{label:"Dashboard",icon:"",to:"/"},{label:"Mainnet",icon:"",to:"/"},{label:"Tokens",icon:"",to:"/"},{label:"API",icon:"",to:"/"}]}].map((e,t)=>(null==e?void 0:e.seperator)?(0,l.jsx)("li",{className:"menu-separator"}):(0,l.jsx)(p,{item:e,root:!0,index:t},e.label))})})},y=()=>(0,l.jsx)(x,{});let f=(0,n.forwardRef)((e,t)=>{let{layoutConfig:i,layoutState:a,onMenuToggle:o,showProfileSidebar:r}=(0,n.useContext)(s.V),c=(0,n.useRef)(null),d=(0,n.useRef)(null),m=(0,n.useRef)(null);return(0,n.useImperativeHandle)(t,()=>({menubutton:c.current,topbarmenu:d.current,topbarmenubutton:m.current})),(0,l.jsxs)("div",{className:"layout-topbar",children:[(0,l.jsx)(u.default,{href:"/",className:"layout-topbar-logo",children:(0,l.jsx)("span",{children:"ZXSCAN"})}),(0,l.jsx)("button",{ref:c,type:"button",className:"p-link layout-menu-button layout-topbar-button",onClick:o,children:(0,l.jsx)("i",{className:"pi pi-bars"})}),(0,l.jsx)("button",{ref:m,type:"button",className:"p-link layout-topbar-menu-button layout-topbar-button",onClick:r,children:(0,l.jsx)("i",{className:"pi pi-ellipsis-v"})})]})});f.displayName="AppTopbar";var j=i(3155),h=e=>{let{children:t}=e,{layoutConfig:i,layoutState:u,setLayoutState:c}=(0,n.useContext)(s.V),{setRipple:d}=(0,n.useContext)(j.Ou),m=(0,n.useRef)(null),v=(0,n.useRef)(null),[p,x]=(0,a.OR)({type:"click",listener:e=>{var t,i,l,a,n,o;(null===(t=v.current)||void 0===t?void 0:t.isSameNode(e.target))||(null===(i=v.current)||void 0===i?void 0:i.contains(e.target))||(null===(a=m.current)||void 0===a?void 0:null===(l=a.menubutton)||void 0===l?void 0:l.isSameNode(e.target))||(null===(o=m.current)||void 0===o?void 0:null===(n=o.menubutton)||void 0===n?void 0:n.contains(e.target))||g()}}),h=(0,b.usePathname)();(0,n.useEffect)(()=>{g(),A()},[h]);let[N,M]=(0,a.OR)({type:"click",listener:e=>{var t,i,l,a,n,o,s,r;(null===(i=m.current)||void 0===i?void 0:null===(t=i.topbarmenu)||void 0===t?void 0:t.isSameNode(e.target))||(null===(a=m.current)||void 0===a?void 0:null===(l=a.topbarmenu)||void 0===l?void 0:l.contains(e.target))||(null===(o=m.current)||void 0===o?void 0:null===(n=o.topbarmenubutton)||void 0===n?void 0:n.isSameNode(e.target))||(null===(r=m.current)||void 0===r?void 0:null===(s=r.topbarmenubutton)||void 0===s?void 0:s.contains(e.target))||A()}}),g=()=>{c(e=>({...e,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),x(),S()},A=()=>{c(e=>({...e,profileSidebarVisible:!1})),M()},k=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},S=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};(0,n.useEffect)(()=>{(u.overlayMenuActive||u.staticMenuMobileActive)&&p(),u.staticMenuMobileActive&&k()},[u.overlayMenuActive,u.staticMenuMobileActive]),(0,n.useEffect)(()=>{u.profileSidebarVisible&&N()},[u.profileSidebarVisible]),(0,a.zq)(()=>{x(),M()});let C=(0,o.AK)("layout-wrapper",{"layout-overlay":"overlay"===i.menuMode,"layout-static":"static"===i.menuMode,"layout-static-inactive":u.staticMenuDesktopInactive&&"static"===i.menuMode,"layout-overlay-active":u.overlayMenuActive,"layout-mobile-active":u.staticMenuMobileActive,"p-input-filled":"filled"===i.inputStyle,"p-ripple-disabled":!i.ripple});return(0,l.jsx)(n.Fragment,{children:(0,l.jsxs)("div",{className:C,children:[(0,l.jsx)(f,{ref:m}),(0,l.jsx)("div",{ref:v,className:"layout-sidebar",children:(0,l.jsx)(y,{})}),(0,l.jsxs)("div",{className:"layout-main-container",children:[(0,l.jsx)("div",{className:"layout-main",children:t}),(0,l.jsx)(r,{})]}),(0,l.jsx)("div",{className:"layout-mask"})]})})}}},function(e){e.O(0,[155,360,291,971,23,744],function(){return e(e.s=4188)}),_N_E=e.O()}]);