import{r as d,a5 as _,ak as g,ag as k,d as y,u as b,b as u,c as m,F as x,Y as B,n as f,e as C,t as H,I as S,al as A,W as q,f as I,k as M}from"./entry.ocuGJEzJ.js";const T=()=>{const a=d(),s=d([]),c=d([]),l=e=>e.forEach(t=>{const r=t.target.id;t.isIntersecting?s.value.push(r):s.value=s.value.filter(n=>n!==r)}),i=e=>e.forEach(t=>{a.value.observe(t)});return _(s,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),g(()=>a.value=new IntersectionObserver(l)),k(()=>{var e;return(e=a.value)==null?void 0:e.disconnect()}),{visibleHeadings:s,activeHeadings:c,updateHeadings:i}},$={class:"docs-toc-links"},w=["href","onClick"],D=y({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(a,{emit:s}){const c=s,l=b(),{activeHeadings:i,updateHeadings:e}=T();setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function t(n){l.push(`#${n}`),c("move",n)}function r(n){c("move",n)}return(n,v)=>{const h=E;return u(),m("ul",$,[(u(!0),m(x,null,B(a.links,o=>(u(),m("li",{key:o.text,class:f([`depth-${o.depth}`])},[C("a",{href:`#${o.id}`,class:f([S(i).includes(o.id)&&"active"]),onClick:A(p=>t(o.id),["prevent"])},H(o.text),11,w),o.children?(u(),q(h,{key:0,links:o.children,onMove:v[0]||(v[0]=p=>r(p))},null,8,["links"])):I("",!0)],2))),128))])}}}),E=M(D,[["__scopeId","data-v-1fa20f25"]]);export{E as default};