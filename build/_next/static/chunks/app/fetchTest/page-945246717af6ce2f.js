(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{4366:function(e,t,n){Promise.resolve().then(n.bind(n,333))},333:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7437),o=n(2265);function a(){let[e,t]=(0,o.useState)([!0,!0,!0]),[n,a]=(0,o.useState)(!1),[s,i]=(0,o.useState)(null),l=async()=>{try{let e=await fetch("http://192.168.178.3/Media/Movies/index.php"),t=await e.json();i(JSON.stringify(t))}catch(e){console.error("Error fetching data:",e),i("Error fetching data")}};return(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900",children:[(0,r.jsx)("aside",{className:"fixed top-0 left-0 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 shadow-md h-full ".concat(n?"w-64":"w-16 "," transition-all duration-300 ease-in-out z-30"),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 ".concat(n?"text-transparent":"text-gray-500"," transition-colors duration-300"),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),(0,r.jsx)("div",{className:"flex-col items-center ".concat(n?"flex":"hidden"," transition-all duration-300"),children:(0,r.jsx)("ul",{className:"space-y-4 mt-4 w-full px-2 ",children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#about",className:"block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300",children:"ContentObjects"})})})})]})}),(0,r.jsxs)("div",{className:" ".concat(n?"pl-64":"pl-16"," flex-1 w-full transition-all duration-300"),children:[(0,r.jsx)("button",{onClick:l,className:"mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300",children:"Fetch Data"}),(0,r.jsx)("div",{className:"".concat(n?"pl-64":"pl-16"," flex-1 w-full transition-all duration-300"),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:s?(0,r.jsx)("pre",{children:s}):"No data fetched yet."}),(0,r.jsx)("video",{src:"http://stream.haaremy.de/Media/Movies/movie.php?movie=Ponyo - Das gro\xdfe Abenteuer am Meer+12429.avi",controls:!0,width:"640",height:"360",loop:!0,muted:!0,children:"Your browser does not support the video tag."})]})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=4366)}),_N_E=e.O()}]);