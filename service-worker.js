if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>n(e,r),u={module:{uri:r},exports:t,require:c};i[r]=Promise.all(o.map((e=>u[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"6586fce9576b77fa83dc8c36cb7df7d2"},{url:"css/index.css",revision:"a294cb6586890d4a64e8e17d04cb4f34"},{url:"/",revision:"index-20240523062353703"},{url:"music/",revision:"music-20240523062353703"},{url:"about/",revision:"about-20240523062353703"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
