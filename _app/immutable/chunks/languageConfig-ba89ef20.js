const a="modulepreload",o={},u="/hello-sveltekit/_app/",f=function(s,n){return!n||n.length===0?s():Promise.all(n.map(e=>{if(e=`${u}${e}`,e in o)return;o[e]=!0;const r=e.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":a,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((i,c)=>{t.addEventListener("load",i),t.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},m="en",E=["en","es"];export{m as D,E as S,f as _};
