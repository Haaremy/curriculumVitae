(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{6946:function(e,t,a){Promise.resolve().then(a.bind(a,1774))},1774:function(e,t,a){"use strict";a.d(t,{default:function(){return r}});var s=a(7437),l=a(2265);function r(e){let{filenames:t}=e,[a,r]=(0,l.useState)(""),[c,n]=(0,l.useState)([]),[i,o]=(0,l.useState)({}),[u,d]=(0,l.useState)(!1),[h,f]=(0,l.useState)(null),[x,p]=(0,l.useState)(!1),[g,m]=(0,l.useState)(!1),[b,v]=(0,l.useState)(null),[j,w]=(0,l.useState)([]),[N,S]=(0,l.useState)(null),[y,k]=(0,l.useState)(!1),[E,_]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{n(t.filter(e=>e.toLowerCase().includes(a.toLowerCase())))},[a,t]),(0,l.useEffect)(()=>{if(0===c.length)return;let e=async e=>{d(!0),f(null);try{let t="/christmas/games/".concat(e);if((await fetch(t,{method:"HEAD"})).ok){let a=await fetch(t),s=await a.json();o(t=>({...t,[e]:s}))}}catch(e){f("Error fetching or saving series data."),console.error(e)}finally{d(!1)}};c.forEach(t=>{e(t)})},[c]),(0,s.jsxs)("main",{className:"flex min-h-screen flex-col p-8 pt-20 bg-pink-50 dark:bg-gray-900",children:[(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:"./Scoreboard",children:"Scoreboard"})}),(0,s.jsx)("div",{className:" ".concat(x?"pl-64":"pl-16"," flex-1 w-full transition-all duration-300"),children:(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("input",{type:"text",placeholder:"Suche nach Spiel...",value:a,onChange:e=>r(e.target.value),className:"mb-4 p-2 w-full border border-gray-300 rounded"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:[u&&(0,s.jsx)("p",{className:"text-blue-500 text-center col-span-full",children:"Loading..."}),h&&(0,s.jsx)("p",{className:"text-red-500 text-center col-span-full",children:h}),t.map(e=>i[e]&&(0,s.jsxs)("div",{className:"relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer",children:[(0,s.jsx)("img",{src:"",alt:i[e].name,className:"w-full h-64 object-cover"}),(0,s.jsx)("div",{className:"absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white",children:(0,s.jsx)("h2",{className:"text-xl font-semibold",children:i[e].name})}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,s.jsx)("p",{className:"text-sm",children:i[e].overview})})]},e))]})]})})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=6946)}),_N_E=e.O()}]);