import{l as v,a4 as c,_ as f,d as g,aA as d,H as l,m as h,U as _,av as y,a6 as C,M as r,D as w}from"./entry.ocuGJEzJ.js";import{q as P,w as m,e as $,s as N,j}from"./query.iEPs14nA.js";import{u as T}from"./preview.UVUTOjbp.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=P(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${$(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(N())return(await f(()=>import("./client-db.GV9qaKE_.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:j(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=_();return{navigation:n}}const{data:s}=await y(`content-navigation-${c(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=C(),{navigation:a}=e,s=o=>r(w,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),O=E;export{O as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.GV9qaKE_.js","./entry.ocuGJEzJ.js","./entry.uYFrS92k.css","./slugify.OUAKKb-0.js","./query.iEPs14nA.js","./preview.UVUTOjbp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}