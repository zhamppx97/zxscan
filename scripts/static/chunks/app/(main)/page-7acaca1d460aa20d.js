(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8949:function(e,s,l){Promise.resolve().then(l.bind(l,7954))},7954:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return d}});var c=l(7437),i=l(8787),t=l(2193),a=l(2265);let n=()=>fetch("https://zxopenapi-f3cwdhcce4e7c0bm.southeastasia-01.azurewebsites.net/v1/blocks",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e),r=()=>fetch("https://zxopenapi-f3cwdhcce4e7c0bm.southeastasia-01.azurewebsites.net/v1/transfers",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e);var o=l(5213),d=()=>{let[e,s]=(0,a.useState)([]),[l,d]=(0,a.useState)([]),[h,x]=(0,a.useState)({}),{layoutConfig:u}=(0,a.useContext)(o.V),m=()=>{x({plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}})},f=()=>{x({plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}})};return(0,a.useEffect)(()=>{n().then(e=>s(e)),r().then(e=>d(e))},[]),(0,a.useEffect)(()=>{"light"===u.colorScheme?m():f()},[u.colorScheme]),(0,c.jsxs)("div",{className:"grid",children:[(0,c.jsx)("div",{className:"col-12 lg:col-6 xl:col-3",children:(0,c.jsx)("div",{className:"card mb-0",children:(0,c.jsx)("div",{className:"flex justify-content-between mb-3",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"block text-500 font-medium mb-3",children:"Finalized Blocks"}),(0,c.jsx)("div",{className:"text-900 font-medium text-xl",children:"24,392,707"})]})})})}),(0,c.jsx)("div",{className:"col-12 lg:col-6 xl:col-3",children:(0,c.jsx)("div",{className:"card mb-0",children:(0,c.jsx)("div",{className:"flex justify-content-between mb-3",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"block text-500 font-medium mb-3",children:"Staked / Bonded"}),(0,c.jsx)("div",{className:"text-900 font-medium text-xl",children:"8,160,446.996 / 8,245,753.548"})]})})})}),(0,c.jsx)("div",{className:"col-12 lg:col-6 xl:col-3",children:(0,c.jsx)("div",{className:"card mb-0",children:(0,c.jsx)("div",{className:"flex justify-content-between mb-3",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"block text-500 font-medium mb-3",children:"Transfers"}),(0,c.jsx)("div",{className:"text-900 font-medium text-xl",children:"7,650,339"})]})})})}),(0,c.jsx)("div",{className:"col-12 lg:col-6 xl:col-3",children:(0,c.jsx)("div",{className:"card mb-0",children:(0,c.jsx)("div",{className:"flex justify-content-between mb-3",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"block text-500 font-medium mb-3",children:"Inflation Rate"}),(0,c.jsx)("div",{className:"text-900 font-medium text-xl",children:"7.83%"})]})})})}),(0,c.jsx)("div",{className:"col-12 xl:col-12",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("h5",{children:"Latest Blocks"}),(0,c.jsxs)(t.w,{value:e,rows:5,paginator:!0,responsiveLayout:"scroll",children:[(0,c.jsx)(i.s,{field:"blockNumber",header:"Block#"}),(0,c.jsx)(i.s,{field:"status",header:"Status"}),(0,c.jsx)(i.s,{field:"validator",header:"Validator"})]})]})}),(0,c.jsx)("div",{className:"col-12 xl:col-12",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("h5",{children:"Transfers"}),(0,c.jsxs)(t.w,{value:l,rows:5,paginator:!0,responsiveLayout:"scroll",children:[(0,c.jsx)(i.s,{field:"extrinsic",header:"Extrinsic#"}),(0,c.jsx)(i.s,{field:"from",header:"From"}),(0,c.jsx)(i.s,{field:"to",header:"To"}),(0,c.jsx)(i.s,{field:"for",header:"ZXC"})]})]})})]})}},5213:function(e,s,l){"use strict";l.d(s,{V:function(){return t},a:function(){return a}});var c=l(7437),i=l(2265);let t=(0,i.createContext)({}),a=e=>{let{children:s}=e,[l,a]=(0,i.useState)({ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14}),[n,r]=(0,i.useState)({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1}),o=()=>"overlay"===l.menuMode,d=()=>window.innerWidth>991;return(0,c.jsx)(t.Provider,{value:{layoutConfig:l,setLayoutConfig:a,layoutState:n,setLayoutState:r,onMenuToggle:()=>{o()&&r(e=>({...e,overlayMenuActive:!e.overlayMenuActive})),d()?r(e=>({...e,staticMenuDesktopInactive:!e.staticMenuDesktopInactive})):r(e=>({...e,staticMenuMobileActive:!e.staticMenuMobileActive}))},showProfileSidebar:()=>{r(e=>({...e,profileSidebarVisible:!e.profileSidebarVisible}))}},children:s})}}},function(e){e.O(0,[651,155,360,517,971,23,744],function(){return e(e.s=8949)}),_N_E=e.O()}]);