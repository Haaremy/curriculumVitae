(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{7492:function(e,t,a){Promise.resolve().then(a.bind(a,9331))},9331:function(e,t,a){"use strict";a.d(t,{default:function(){return n}});var s=a(7437),l=a(2265),r=function(e){let{movie:t,onClose:a}=e,r=(0,l.useRef)(null),[n,o]=(0,l.useState)(null);(0,l.useEffect)(()=>(t&&i(t),()=>{n&&URL.revokeObjectURL(n)}),[t]);let i=async e=>{try{let t=await fetch(e);if(t.ok){let e=URL.createObjectURL(await t.blob());o(e)}else console.error("Failed to fetch movie:",t.status)}catch(e){console.error("Error fetching movie:",e)}},c=()=>{r.current&&r.current.pause(),a()};return(0,s.jsxs)("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50",children:[n&&(0,s.jsx)("video",{ref:r,controls:!0,src:n,className:"w-full max-w-4xl max-h-[80vh] mx-auto",onEnded:c,autoPlay:!0}),(0,s.jsx)("button",{onClick:c,className:"absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]})};function n(e){let{filenames:t}=e,[a,n]=(0,l.useState)(""),[o,i]=(0,l.useState)([]),[c,d]=(0,l.useState)({}),[u,h]=(0,l.useState)(!1),[x,p]=(0,l.useState)(null),[m,g]=(0,l.useState)(!1),[f,b]=(0,l.useState)(null),[v,w]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{i(t.filter(e=>e.toLowerCase().includes(a.toLowerCase())))},[a,t]),(0,l.useEffect)(()=>{let e=async e=>{h(!0),p(null);try{let t=e.slice(0,-4).split("+").slice(1),a="/jsons/movie/".concat(t,".json");if((await fetch(a,{method:"HEAD"})).ok){let t=await fetch(a),s=await t.json();d(t=>({...t,[e]:s}))}else{let a=await fetch("https://api.themoviedb.org/3/movie/".concat(encodeURIComponent(t[0]),"?language=de-DE&api_key=2e42a5a77d2dc620a46cd7276da47403")),s=await a.json();if(s){let a=s.genres?s.genres.map(e=>e.name).join(" - "):"Unknown",l={title:s.original_title,overview:s.overview,poster:s.poster_path,release:s.release_date,genre:a};d(t=>({...t,[e]:l})),await fetch("/api/saveMovieData",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,movieData:l})})}}}catch(e){p("Error fetching or saving movie data."),console.error(e)}finally{h(!1)}};o.forEach(t=>{e(t)})},[o]),(0,s.jsxs)("main",{className:"flex min-h-screen flex-col p-8 pt-20 bg-pink-50 dark:bg-gray-900",children:[(0,s.jsx)("aside",{className:"fixed top-0 left-0 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 shadow-md h-full ".concat(m?"w-64":"w-16"," transition-all duration-300 ease-in-out z-30"),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 ".concat(m?"text-transparent":"text-gray-500"," transition-colors duration-300"),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),(0,s.jsx)("div",{className:"flex-col items-center ".concat(m?"flex":"hidden"," transition-all duration-300"),children:(0,s.jsx)("ul",{className:"space-y-4 mt-4 w-full px-2",children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#about",className:"block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300",children:"ContentObjects"})})})})]})}),(0,s.jsx)("div",{className:" ".concat(m?"pl-64":"pl-16"," flex-1 w-full transition-all duration-300"),children:(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("input",{type:"text",placeholder:"Suche nach Filmtitel...",value:a,onChange:e=>n(e.target.value),className:"mb-4 p-2 w-full border border-gray-300 rounded"}),0===o.length?(0,s.jsx)("p",{className:"text-gray-500",children:"Keine Filme gefunden."}):(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:[u&&(0,s.jsx)("p",{className:"text-blue-500 text-center col-span-full",children:"Loading..."}),x&&(0,s.jsx)("p",{className:"text-red-500 text-center col-span-full",children:x}),o.map(e=>c[e]&&(0,s.jsxs)("div",{className:"relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer",onClick:()=>{b("http://192.168.178.3/Media/Movies/".concat(e)),w(!0)},children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c[e].poster),alt:c[e].title,className:"w-full h-64 object-cover"}),(0,s.jsxs)("div",{className:"absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold",children:c[e].title}),(0,s.jsx)("p",{className:"text-sm",children:c[e].release}),(0,s.jsx)("p",{className:"text-sm",children:c[e].genre})]}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,s.jsx)("p",{className:"text-sm",children:c[e].overview})})]},e))]})]})}),f&&(0,s.jsx)(r,{movie:f,onClose:()=>{w(!1)}})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=7492)}),_N_E=e.O()}]);