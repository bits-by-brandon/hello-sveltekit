import{R as K,T as ee,S as X,i as Y,s as Z,e as E,G as O,k as S,t as I,c as k,a as g,H as C,d as h,m as $,h as N,b as i,f as Q,g as L,K as f,U as F,j as J,E as R,V as te,L as se,w as oe,Q as ne,x as re,y as ae,q as le,o as ie,B as ce}from"../chunks/index-a6b0a6eb.js";import{w as de}from"../chunks/index-6491635c.js";function W(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,s,t,o){if(typeof t=="number"||W(t)){const a=o-t,l=(t-s)/(e.dt||1/60),c=e.opts.stiffness*a,n=e.opts.damping*l,d=(c-n)*e.inv_mass,r=(l+d)*e.dt;return Math.abs(r)<e.opts.precision&&Math.abs(a)<e.opts.precision?o:(e.settled=!1,W(t)?new Date(t.getTime()+r):t+r)}else{if(Array.isArray(t))return t.map((a,l)=>V(e,s[l],t[l],o[l]));if(typeof t=="object"){const a={};for(const l in t)a[l]=V(e,s[l],t[l],o[l]);return a}else throw new Error(`Cannot spring ${typeof t} values`)}}function fe(e,s={}){const t=de(e),{stiffness:o=.15,damping:a=.8,precision:l=.01}=s;let c,n,d,r=e,u=e,v=1,_=0,y=!1;function j(m,p={}){u=m;const T=d={};if(e==null||p.hard||M.stiffness>=1&&M.damping>=1)return y=!0,c=K(),r=m,t.set(e=u),Promise.resolve();if(p.soft){const w=p.soft===!0?.5:+p.soft;_=1/(w*60),v=0}return n||(c=K(),y=!1,n=ee(w=>{if(y)return y=!1,n=null,!1;v=Math.min(v+_,1);const B={inv_mass:v,opts:M,settled:!0,dt:(w-c)*60/1e3},x=V(B,r,e,u);return c=w,r=e,t.set(e=x),B.settled&&(n=null),!B.settled})),new Promise(w=>{n.promise.then(()=>{T===d&&w()})})}const M={set:j,update:(m,p)=>j(m(u,e),p),subscribe:t.subscribe,stiffness:o,damping:a,precision:l};return M}function he(e){let s,t,o,a,l,c,n,d,r=Math.floor(e[1]+1)+"",u,v,_,y=Math.floor(e[1])+"",j,M,m,p,T,w,B;return{c(){s=E("div"),t=E("button"),o=O("svg"),a=O("path"),l=S(),c=E("div"),n=E("div"),d=E("strong"),u=I(r),v=S(),_=E("strong"),j=I(y),M=S(),m=E("button"),p=O("svg"),T=O("path"),this.h()},l(x){s=k(x,"DIV",{class:!0});var b=g(s);t=k(b,"BUTTON",{"aria-label":!0,class:!0});var q=g(t);o=C(q,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var A=g(o);a=C(A,"path",{d:!0,class:!0}),g(a).forEach(h),A.forEach(h),q.forEach(h),l=$(b),c=k(b,"DIV",{class:!0});var G=g(c);n=k(G,"DIV",{class:!0,style:!0});var D=g(n);d=k(D,"STRONG",{class:!0,"aria-hidden":!0});var H=g(d);u=N(H,r),H.forEach(h),v=$(D),_=k(D,"STRONG",{class:!0});var U=g(_);j=N(U,y),U.forEach(h),D.forEach(h),G.forEach(h),M=$(b),m=k(b,"BUTTON",{"aria-label":!0,class:!0});var z=g(m);p=C(z,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var P=g(p);T=C(P,"path",{d:!0,class:!0}),g(T).forEach(h),P.forEach(h),z.forEach(h),b.forEach(h),this.h()},h(){i(a,"d","M0,0.5 L1,0.5"),i(a,"class","svelte-sx9eo4"),i(o,"aria-hidden","true"),i(o,"viewBox","0 0 1 1"),i(o,"class","svelte-sx9eo4"),i(t,"aria-label","Decrease the counter by one"),i(t,"class","svelte-sx9eo4"),i(d,"class","hidden svelte-sx9eo4"),i(d,"aria-hidden","true"),i(_,"class","svelte-sx9eo4"),i(n,"class","counter-digits svelte-sx9eo4"),Q(n,"transform","translate(0, "+100*e[2]+"%)"),i(c,"class","counter-viewport svelte-sx9eo4"),i(T,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),i(T,"class","svelte-sx9eo4"),i(p,"aria-hidden","true"),i(p,"viewBox","0 0 1 1"),i(p,"class","svelte-sx9eo4"),i(m,"aria-label","Increase the counter by one"),i(m,"class","svelte-sx9eo4"),i(s,"class","counter svelte-sx9eo4")},m(x,b){L(x,s,b),f(s,t),f(t,o),f(o,a),f(s,l),f(s,c),f(c,n),f(n,d),f(d,u),f(n,v),f(n,_),f(_,j),f(s,M),f(s,m),f(m,p),f(p,T),w||(B=[F(t,"click",e[4]),F(m,"click",e[5])],w=!0)},p(x,[b]){b&2&&r!==(r=Math.floor(x[1]+1)+"")&&J(u,r),b&2&&y!==(y=Math.floor(x[1])+"")&&J(j,y),b&4&&Q(n,"transform","translate(0, "+100*x[2]+"%)")},i:R,o:R,d(x){x&&h(s),w=!1,te(B)}}}function ue(e,s){return(e%s+s)%s}function pe(e,s,t){let o,a,l=0;const c=fe();se(e,c,r=>t(1,a=r));const n=()=>t(0,l-=1),d=()=>t(0,l+=1);return e.$$.update=()=>{e.$$.dirty&1&&c.set(l),e.$$.dirty&2&&t(2,o=ue(a,1))},[l,a,o,c,n,d]}class ve extends X{constructor(s){super(),Y(this,s,pe,he,Z,{})}}function me(e){let s,t,o,a,l,c,n,d;return n=new ve({}),{c(){s=E("meta"),t=S(),o=E("section"),a=E("h1"),l=I("homepage"),c=S(),oe(n.$$.fragment),this.h()},l(r){const u=ne('[data-svelte="svelte-t32ptj"]',document.head);s=k(u,"META",{name:!0,content:!0}),u.forEach(h),t=$(r),o=k(r,"SECTION",{class:!0});var v=g(o);a=k(v,"H1",{class:!0});var _=g(a);l=N(_,"homepage"),_.forEach(h),c=$(v),re(n.$$.fragment,v),v.forEach(h),this.h()},h(){document.title="Home",i(s,"name","description"),i(s,"content","Svelte demo app"),i(a,"class","svelte-1bgohwt"),i(o,"class","svelte-1bgohwt")},m(r,u){f(document.head,s),L(r,t,u),L(r,o,u),f(o,a),f(a,l),f(o,c),ae(n,o,null),d=!0},p:R,i(r){d||(le(n.$$.fragment,r),d=!0)},o(r){ie(n.$$.fragment,r),d=!1},d(r){h(s),r&&h(t),r&&h(o),ce(n)}}}const be=!0;class xe extends X{constructor(s){super(),Y(this,s,null,me,Z,{})}}export{xe as default,be as prerender};
