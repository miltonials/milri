if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-241c2a06"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d446901b79b9c814a24c70cd1208f79e"},{url:"actividad.html",revision:"09381b8f62f14be3d48672252c806634"},{url:"assets/icons/activity.svg",revision:"89ca795931cc54fb793bd7862ec9d3c9"},{url:"assets/icons/burgerButton.svg",revision:"bad9bdc45fc162c9557e7927e7bd6c41"},{url:"assets/icons/eye-blocked.svg",revision:"b2c062b7d4ca382aa3640af7541e38c1"},{url:"assets/icons/eye.svg",revision:"d951dc2af5afa4a07fbdfa7d169e5318"},{url:"assets/icons/signIn.svg",revision:"50f70e607bf1f3c5a2739ffc36ff53b2"},{url:"assets/imgs/imagotipo.png",revision:"be6bc073ad1ba299c4ec36f397f71930"},{url:"assets/imgs/imagotipo128.png",revision:"294e7c795e16aedb04400c7ab1da5bd0"},{url:"assets/imgs/imagotipo144.png",revision:"a8a5a2d66fd594767d4822f551c391d7"},{url:"assets/imgs/imagotipo152.png",revision:"90a8da0a5b6669edd4167d657f64bf35"},{url:"assets/imgs/imagotipo192.png",revision:"3f5e6024182102a4128e7e203ecfa025"},{url:"assets/imgs/imagotipo384.png",revision:"13b34167ffe358ca5a5052464e8672e4"},{url:"assets/imgs/imagotipo512.png",revision:"479b4809f08e8cbaea540f34f58505ae"},{url:"assets/imgs/imagotipo72.png",revision:"12f01ef73eec22deafae1916a177174c"},{url:"assets/imgs/imagotipo96.png",revision:"e298ad5ab0936969459e07382f562659"},{url:"assets/imgs/isotipo.png",revision:"2a6642f827566acd613e4cf144515bfe"},{url:"assets/imgs/update.gif",revision:"d6d968cc93bba3b8a7a498511496cc98"},{url:"game.html",revision:"e861079402122b8f47f1aeaa4d3517e5"},{url:"index.html",revision:"1bc993011696139e693acda1aa752b60"},{url:"js/actividad/index.js",revision:"17a74572311318f321d3307b61645cbf"},{url:"js/config/ConfigFirebase.js",revision:"b11611272842f07763e686ec27e57b05"},{url:"js/detectarBrowser.js",revision:"859e63437cf5b732cb01cc0dd30a81bc"},{url:"js/eventsRealTime.js",revision:"62c72696a7da0c519c9ffe8ed3aa34d3"},{url:"js/footer/index.js",revision:"36e06153c93bce4b49bf7f811caba69c"},{url:"js/header/index.js",revision:"5ce3a5ec33586fba2fea7f6883948461"},{url:"js/main.js",revision:"8c0a0763f318d303cea19bb23ed896db"},{url:"js/modalController.js",revision:"ebd89848ba83050a62dc77ae7597eb8f"},{url:"js/modals.js",revision:"991ac8e151b9511ea047fae95e31686a"},{url:"license.html",revision:"7d619425f24718cc755410fc20f0ecbc"},{url:"manifest.json",revision:"2a24e60689e42b898d25398cb46bbce5"},{url:"mes.html",revision:"deff9fed7ca827efd965a632a0eba68c"},{url:"styles/headerFooter.css",revision:"61cc894817ff8c42e97837c2bf42bb70"},{url:"styles/mobile.css",revision:"a676537d1bdfb58bab20d407c58f7b01"},{url:"styles/style.css",revision:"3d60dd219e817834b35e8724daa0d426"},{url:"styles/tablet.css",revision:"90f28fae662cb8191c50d2f0b18ef213"}],{})}));
//# sourceMappingURL=sw.js.map
