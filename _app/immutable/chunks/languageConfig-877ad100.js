const u="modulepreload",f=function(s){return"/hello-sveltekit/_app/"+s},i={},m=function(o,n,h){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=f(e),e in i)return;i[e]=!0;const r=e.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":u,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((c,a)=>{t.addEventListener("load",c),t.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},E="en",d=["en","es"];export{E as D,d as S,m as _};