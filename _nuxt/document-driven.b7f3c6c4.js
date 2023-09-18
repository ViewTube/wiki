import h from"./DocumentDrivenEmpty.e81f9cff.js";import L from"./ContentRenderer.e3039ee2.js";import R from"./DocumentDrivenNotFound.e02fd0af.js";import{j as g,d as c,H as x,P as C,s as b,I as k,J as B,K as u,r as N,L as y,M as S,N as T,O as l,T as j,Q as A,R as w,S as D,U as E,V as H,l as O,W as $,X as q,b as d,c as I,g as f,w as _,Y as v}from"./entry.560945ff.js";import"./ContentRendererMarkdown.vue.c7f048b6.js";import"./ButtonLink.50ba62e5.js";import"./slot.aa4b4d42.js";import"./node.906a83f4.js";const M=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(o,n){const e=await y[o.name]().then(t=>t.default||t);return()=>l(e,o.layoutProps,n.slots)}}),V=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(o,n){const e=g(),t=x(C),a=t===b()?k():t,s=B(()=>u(o.name)??a.meta.layout??"default"),r=N();n.expose({layoutRef:r});const m=e.deferHydration();return()=>{const p=s.value&&s.value in y,i=a.meta.layoutTransition??S;return T(j,p&&i,{default:()=>l(D,{suspensible:!0,onResolve:()=>{w(m)}},{default:()=>l(F,{layoutProps:A(n.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!o.name,hasTransition:!!i},n.slots)})}).default()}}}),F=c({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(o,n){const e=o.name;return o.shouldProvide&&E(H,{isCurrent:t=>e===(t.meta.layout??"default")}),()=>{var t,a;return!e||typeof e=="string"&&!(e in y)?(a=(t=n.slots).default)==null?void 0:a.call(t):l(M,{key:e,layoutProps:o.layoutProps,name:e},n.slots)}}}),J={class:"document-driven-page"},Z=c({__name:"document-driven",setup(o){const{contentHead:n}=O().public.content,{page:e,layout:t}=$();return e.value,n&&q(e),(a,s)=>{const r=h,m=L,p=R,i=V;return d(),I("div",J,[f(i,{name:u(t)||"default"},{default:_(()=>[u(e)?(d(),v(m,{key:u(e)._id,value:u(e)},{empty:_(({value:P})=>[f(r,{value:P},null,8,["value"])]),_:1},8,["value"])):(d(),v(p,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};
