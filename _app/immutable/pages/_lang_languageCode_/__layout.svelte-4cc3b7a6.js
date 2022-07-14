import{_ as W}from"../../chunks/preload-helper-52fa6613.js";import{S as B,i as J,s as K,e as d,w as A,c as h,a as w,x as j,d as c,b as p,g as E,y as C,q as D,o as V,B as G,N as H,k as R,m as q,O as N,M as v,P as X,E as Y,t as T,h as S,j as U,I as ae,J as ne,K as le,L as re}from"../../chunks/index-251158ee.js";import{$ as oe,g as Z,f as fe,a as ie,C as $e,p as y,l as x,b as ee,L as P,r as te}from"../../chunks/Container-9f4af138.js";import"../../chunks/languageConfig-3b74f4f3.js";const ue=!0,ce=!1;function _e(n){const{formats:e,...s}=n,t=n.initialLocale||n.fallbackLocale,a=Z();return Object.assign(a,s,{initialLocale:t}),e&&("number"in e&&Object.assign(a.formats.number,e.number),"date"in e&&Object.assign(a.formats.date,e.date),"time"in e&&Object.assign(a.formats.time,e.time)),oe.set(t)}function me(n){return fe(n||ie()||Z().initialLocale)}var se="/hello-sveltekit/_app/immutable/assets/godot_logo-c55d6a9b.svg";function pe(n){let e,s;return{c(){e=d("img"),this.h()},l(t){e=h(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){p(e,"alt","Godot Logo"),X(e.src,s=se)||p(e,"src",s),p(e,"class","svelte-179e6pk")},m(t,a){E(t,e,a)},p:Y,d(t){t&&c(e)}}}function ge(n){let e=n[2]("nav.features")+"",s;return{c(){s=T(e)},l(t){s=S(t,e)},m(t,a){E(t,s,a)},p(t,a){a&4&&e!==(e=t[2]("nav.features")+"")&&U(s,e)},d(t){t&&c(s)}}}function ve(n){let e=n[2]("nav.news")+"",s;return{c(){s=T(e)},l(t){s=S(t,e)},m(t,a){E(t,s,a)},p(t,a){a&4&&e!==(e=t[2]("nav.news")+"")&&U(s,e)},d(t){t&&c(s)}}}function de(n){let e=n[2]("global.download")+"",s;return{c(){s=T(e)},l(t){s=S(t,e)},m(t,a){E(t,s,a)},p(t,a){a&4&&e!==(e=t[2]("global.download")+"")&&U(s,e)},d(t){t&&c(s)}}}function he(n){let e,s,t,a,f,r,m,i,o,$,g,F,k,L;return a=new P({props:{href:"/",$$slots:{default:[pe]},$$scope:{ctx:n}}}),i=new P({props:{href:"/features",$$slots:{default:[ge]},$$scope:{ctx:n}}}),g=new P({props:{href:"/news",$$slots:{default:[ve]},$$scope:{ctx:n}}}),k=new P({props:{type:"button",href:"/download",$$slots:{default:[de]},$$scope:{ctx:n}}}),{c(){e=d("div"),s=d("nav"),t=d("div"),A(a.$$.fragment),f=R(),r=d("ul"),m=d("li"),A(i.$$.fragment),o=R(),$=d("li"),A(g.$$.fragment),F=R(),A(k.$$.fragment),this.h()},l(u){e=h(u,"DIV",{class:!0});var l=w(e);s=h(l,"NAV",{class:!0});var _=w(s);t=h(_,"DIV",{class:!0});var b=w(t);j(a.$$.fragment,b),b.forEach(c),f=q(_),r=h(_,"UL",{class:!0});var I=w(r);m=h(I,"LI",{class:!0});var O=w(m);j(i.$$.fragment,O),O.forEach(c),o=q(I),$=h(I,"LI",{class:!0});var M=w($);j(g.$$.fragment,M),M.forEach(c),I.forEach(c),_.forEach(c),F=q(l),j(k.$$.fragment,l),l.forEach(c),this.h()},h(){p(t,"class","logo svelte-179e6pk"),p(m,"class","svelte-179e6pk"),N(m,"active",n[0].url.pathname===`/${n[1]}/features/`),p($,"class","svelte-179e6pk"),N($,"active",n[0].url.pathname===`/${n[1]}/news/`),p(r,"class","svelte-179e6pk"),p(s,"class","svelte-179e6pk"),p(e,"class","outer svelte-179e6pk")},m(u,l){E(u,e,l),v(e,s),v(s,t),C(a,t,null),v(s,f),v(s,r),v(r,m),C(i,m,null),v(r,o),v(r,$),C(g,$,null),v(e,F),C(k,e,null),L=!0},p(u,l){const _={};l&8&&(_.$$scope={dirty:l,ctx:u}),a.$set(_);const b={};l&12&&(b.$$scope={dirty:l,ctx:u}),i.$set(b),l&3&&N(m,"active",u[0].url.pathname===`/${u[1]}/features/`);const I={};l&12&&(I.$$scope={dirty:l,ctx:u}),g.$set(I),l&3&&N($,"active",u[0].url.pathname===`/${u[1]}/news/`);const O={};l&12&&(O.$$scope={dirty:l,ctx:u}),k.$set(O)},i(u){L||(D(a.$$.fragment,u),D(i.$$.fragment,u),D(g.$$.fragment,u),D(k.$$.fragment,u),L=!0)},o(u){V(a.$$.fragment,u),V(i.$$.fragment,u),V(g.$$.fragment,u),V(k.$$.fragment,u),L=!1},d(u){u&&c(e),G(a),G(i),G(g),G(k)}}}function we(n){let e,s,t;return s=new $e({props:{$$slots:{default:[he]},$$scope:{ctx:n}}}),{c(){e=d("header"),A(s.$$.fragment),this.h()},l(a){e=h(a,"HEADER",{class:!0});var f=w(e);j(s.$$.fragment,f),f.forEach(c),this.h()},h(){p(e,"class","svelte-179e6pk")},m(a,f){E(a,e,f),C(s,e,null),t=!0},p(a,[f]){const r={};f&15&&(r.$$scope={dirty:f,ctx:a}),s.$set(r)},i(a){t||(D(s.$$.fragment,a),t=!0)},o(a){V(s.$$.fragment,a),t=!1},d(a){a&&c(e),G(s)}}}function ke(n,e,s){let t,a,f;return H(n,y,r=>s(0,t=r)),H(n,x,r=>s(1,a=r)),H(n,ee,r=>s(2,f=r)),[t,a,f]}class Ee extends B{constructor(e){super(),J(this,e,ke,we,K,{})}}function Le(n){let e,s;return{c(){e=d("img"),this.h()},l(t){e=h(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){p(e,"alt","Godot Logo"),X(e.src,s=se)||p(e,"src",s),p(e,"class","svelte-1pmwnkn")},m(t,a){E(t,e,a)},p:Y,d(t){t&&c(e)}}}function be(n){let e=n[2]("nav.features")+"",s;return{c(){s=T(e)},l(t){s=S(t,e)},m(t,a){E(t,s,a)},p(t,a){a&4&&e!==(e=t[2]("nav.features")+"")&&U(s,e)},d(t){t&&c(s)}}}function Ie(n){let e=n[2]("nav.news")+"",s;return{c(){s=T(e)},l(t){s=S(t,e)},m(t,a){E(t,s,a)},p(t,a){a&4&&e!==(e=t[2]("nav.news")+"")&&U(s,e)},d(t){t&&c(s)}}}function Oe(n){let e;return{c(){e=T("Download")},l(s){e=S(s,"Download")},m(s,t){E(s,e,t)},d(s){s&&c(e)}}}function De(n){let e,s,t,a,f,r,m,i,o,$,g,F,k,L,u;return a=new P({props:{href:"/",$$slots:{default:[Le]},$$scope:{ctx:n}}}),i=new P({props:{href:"/features",$$slots:{default:[be]},$$scope:{ctx:n}}}),g=new P({props:{href:"/news",$$slots:{default:[Ie]},$$scope:{ctx:n}}}),L=new P({props:{type:"button",href:"/download",$$slots:{default:[Oe]},$$scope:{ctx:n}}}),{c(){e=d("footer"),s=d("nav"),t=d("div"),A(a.$$.fragment),f=R(),r=d("ul"),m=d("li"),A(i.$$.fragment),o=R(),$=d("li"),A(g.$$.fragment),F=R(),k=d("div"),A(L.$$.fragment),this.h()},l(l){e=h(l,"FOOTER",{class:!0});var _=w(e);s=h(_,"NAV",{class:!0});var b=w(s);t=h(b,"DIV",{class:!0});var I=w(t);j(a.$$.fragment,I),I.forEach(c),f=q(b),r=h(b,"UL",{class:!0});var O=w(r);m=h(O,"LI",{class:!0});var M=w(m);j(i.$$.fragment,M),M.forEach(c),o=q(O),$=h(O,"LI",{class:!0});var z=w($);j(g.$$.fragment,z),z.forEach(c),O.forEach(c),b.forEach(c),F=q(_),k=h(_,"DIV",{});var Q=w(k);j(L.$$.fragment,Q),Q.forEach(c),_.forEach(c),this.h()},h(){p(t,"class","logo svelte-1pmwnkn"),p(m,"class","svelte-1pmwnkn"),N(m,"active",n[0].url.pathname===`/${n[1]}/features/`),p($,"class","svelte-1pmwnkn"),N($,"active",n[0].url.pathname===`/${n[1]}/news/`),p(r,"class","svelte-1pmwnkn"),p(s,"class","svelte-1pmwnkn"),p(e,"class","svelte-1pmwnkn")},m(l,_){E(l,e,_),v(e,s),v(s,t),C(a,t,null),v(s,f),v(s,r),v(r,m),C(i,m,null),v(r,o),v(r,$),C(g,$,null),v(e,F),v(e,k),C(L,k,null),u=!0},p(l,[_]){const b={};_&8&&(b.$$scope={dirty:_,ctx:l}),a.$set(b);const I={};_&12&&(I.$$scope={dirty:_,ctx:l}),i.$set(I),_&3&&N(m,"active",l[0].url.pathname===`/${l[1]}/features/`);const O={};_&12&&(O.$$scope={dirty:_,ctx:l}),g.$set(O),_&3&&N($,"active",l[0].url.pathname===`/${l[1]}/news/`);const M={};_&8&&(M.$$scope={dirty:_,ctx:l}),L.$set(M)},i(l){u||(D(a.$$.fragment,l),D(i.$$.fragment,l),D(g.$$.fragment,l),D(L.$$.fragment,l),u=!0)},o(l){V(a.$$.fragment,l),V(i.$$.fragment,l),V(g.$$.fragment,l),V(L.$$.fragment,l),u=!1},d(l){l&&c(e),G(a),G(i),G(g),G(L)}}}function Ve(n,e,s){let t,a,f;return H(n,y,r=>s(0,t=r)),H(n,x,r=>s(1,a=r)),H(n,ee,r=>s(2,f=r)),[t,a,f]}class Ae extends B{constructor(e){super(),J(this,e,Ve,De,K,{})}}function je(n){let e,s,t,a,f,r;e=new Ee({});const m=n[1].default,i=ae(m,n,n[0],null);return f=new Ae({}),{c(){A(e.$$.fragment),s=R(),t=d("main"),i&&i.c(),a=R(),A(f.$$.fragment)},l(o){j(e.$$.fragment,o),s=q(o),t=h(o,"MAIN",{});var $=w(t);i&&i.l($),$.forEach(c),a=q(o),j(f.$$.fragment,o)},m(o,$){C(e,o,$),E(o,s,$),E(o,t,$),i&&i.m(t,null),E(o,a,$),C(f,o,$),r=!0},p(o,[$]){i&&i.p&&(!r||$&1)&&ne(i,m,o,o[0],r?re(m,o[0],$,null):le(o[0]),null)},i(o){r||(D(e.$$.fragment,o),D(i,o),D(f.$$.fragment,o),r=!0)},o(o){V(e.$$.fragment,o),V(i,o),V(f.$$.fragment,o),r=!1},d(o){G(e,o),o&&c(s),o&&c(t),i&&i.d(o),o&&c(a),G(f,o)}}}const Re=ce,qe=ue;te("en",()=>W(()=>import("../../chunks/en-7ced43dd.js"),[]));te("es",()=>W(()=>import("../../chunks/es-76ae4dca.js"),[]));async function Fe({params:n}){return _e({fallbackLocale:"en",initialLocale:n.lang}),await me(),{props:{lang:n.lang}}}function Ce(n,e,s){let{$$slots:t={},$$scope:a}=e;return n.$$set=f=>{"$$scope"in f&&s(0,a=f.$$scope)},[a,t]}class He extends B{constructor(e){super(),J(this,e,Ce,je,K,{})}}export{He as default,Re as hydrate,Fe as load,qe as router};