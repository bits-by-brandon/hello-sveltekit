import{w,d as A,b as B}from"./paths-e9d6e34a.js";import{S as E,i as N,s as O,I as Z,e as J,c as K,a as V,d as j,b as _,P as c,g as W,J as z,K as G,L as H,q as R,o as U,O as X}from"./index-8c8fd9bd.js";const Y={number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},I={fallbackLocale:"",initialLocale:"",loadingDelay:200,formats:Y,warnOnMissingMessages:!0},$=I;let T;function k(){return T}function x(e){return T=e}function D(){return $}function q(e){return e.split("-").map((t,n,r)=>r.slice(0,n+1).join("-")).reverse()}function y(e,t=D().fallbackLocale){const n=q(e);return t?[...new Set([...n,...q(t)])]:n}let C;const b=w({});function ee(e){return C[e]||null}function M(e){return e in C}function te(e,t){if(M(e)){const n=ee(e);if(t in n)return n[t];const r=t.split(".");let s=n;for(let i=0;i<r.length;i++){if(typeof s[r[i]]!="object")return s[r[i]]||null;s=s[r[i]]}}return null}function ne(e){if(e==null)return null;const t=y(e);for(let n=0;n<t.length;n++){const r=t[n];if(M(r))return r}return null}function ie(e,...t){b.update(n=>(n[e]=Object.assign(n[e]||{},...t),n))}b.subscribe(e=>C=e);const F=w(!1),S={};function re(e){S[e]=new Set}function se(e){delete S[e]}function d(e){return S[e]}function oe(e){return y(e).reverse().map(t=>{const n=d(t);return[t,n?[...n]:[]]}).filter(([,t])=>t.length>0)}function P(e){return y(e).reverse().some(d)}const g={};function ue(e){if(!P(e))return Promise.resolve();if(e in g)return g[e];const t=oe(e);if(t.length===0)return Promise.resolve();const n=setTimeout(()=>F.set(!0),D().loadingDelay);return g[e]=Promise.all(t.map(([r,s])=>Promise.all(s.map(i=>i())).then(i=>{se(r),i=i.map(o=>o.default||o),ie(r,...i)}))).then(()=>{clearTimeout(n),F.set(!1),delete g[e]}),g[e]}function de(e,t){d(e)||re(e);const n=d(e);d(e).has(t)||(M(e)||b.update(r=>(r[e]={},r)),n.add(t))}const f=w("");f.subscribe(e=>{x(e),typeof window!="undefined"&&document.documentElement.setAttribute("lang",e)});const v=f.set;f.set=e=>ne(e)&&P(e)?ue(e).then(()=>v(e)):v(e);f.update=e=>{let t=k();e(t),v(t)};const l={},ae=(e,t,n)=>n&&(t in l||(l[t]={}),e in l[t]||(l[t][e]=n),n),le=(e,t)=>{if(t==null)return;if(t in l&&e in l[t])return l[t][e];const n=y(t);for(let r=0;r<n.length;r++){const s=n[r],i=te(s,e);if(i)return ae(e,t,i)}},ce=(e,t,n={})=>{const r=typeof t=="string"?t:t.id,s=typeof t=="string"?n:t,{values:i,locale:o=e||k(),default:p}=s;if(o==null)throw new Error("[svelte-intl-precompile] Cannot format a message without first setting the initial locale.");let u=le(r,o);return typeof u=="string"?u:typeof u=="function"?u(...Object.keys(s.values||{}).sort().map(L=>(s.values||{})[L])):(D().warnOnMissingMessages&&console.warn(`[svelte-intl-precompile] The message "${r}" was not found in "${y(o).join('", "')}".${P(k())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`),p||r)},ye=A([f,b],([e])=>ce.bind(null,e));function fe(e){let t,n;const r=e[9].default,s=Z(r,e,e[8],null);return{c(){t=J("a"),s&&s.c(),this.h()},l(i){t=K(i,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var o=V(t);s&&s.l(o),o.forEach(j),this.h()},h(){_(t,"sveltekit:prefetch",""),_(t,"href",e[0]),_(t,"class","svelte-ym4o3t"),c(t,"isButton",e[3]),c(t,"isLink",e[2]),c(t,"isInline",e[1])},m(i,o){W(i,t,o),s&&s.m(t,null),n=!0},p(i,[o]){s&&s.p&&(!n||o&256)&&z(s,r,i,i[8],n?H(r,i[8],o,null):G(i[8]),null),(!n||o&1)&&_(t,"href",i[0]),o&8&&c(t,"isButton",i[3]),o&4&&c(t,"isLink",i[2]),o&2&&c(t,"isInline",i[1])},i(i){n||(R(s,i),n=!0)},o(i){U(s,i),n=!1},d(i){i&&j(t),s&&s.d(i)}}}function me(e,t,n){let r,s,i,o,p,u;X(e,f,a=>n(7,u=a));let{$$slots:L={},$$scope:Q}=t,{href:m=""}=t,{type:h="link"}=t;return e.$$set=a=>{"href"in a&&n(4,m=a.href),"type"in a&&n(5,h=a.type),"$$scope"in a&&n(8,Q=a.$$scope)},e.$$.update=()=>{e.$$.dirty&32&&n(3,r=h==="button"),e.$$.dirty&32&&n(2,s=h==="link"),e.$$.dirty&32&&n(1,i=h==="inline"),e.$$.dirty&16&&n(6,o=m.startsWith("/")?m.slice(1):m),e.$$.dirty&192&&n(0,p=`${B}/${u}/${o}`)},[p,i,s,r,m,h,o,u,Q,L]}class pe extends E{constructor(t){super(),N(this,t,me,fe,O,{href:4,type:5})}}export{f as $,pe as L,k as a,ye as b,ue as f,D as g,de as r};