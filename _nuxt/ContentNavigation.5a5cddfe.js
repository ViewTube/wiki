import{d,aw as l,H as v,m as f,U as p,ar as m,ay as g,ax as h,a1 as y,M as r,D as _}from"./entry.9fa0426b.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=l(u),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await m(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(u){const a=y(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),t=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),t(s.children,i+1)]):r("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),N=C;export{N as default};