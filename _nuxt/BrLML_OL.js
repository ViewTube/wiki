import{d as b,r as l,a1 as v,c as a,e as s,F as g,Z as x,f as u,g as y,a0 as I,n as k,t as T,p as S,j as C,Q as $,l as w}from"./BuxVkPpf.js";const B=t=>(S("data-v-864b6df3"),t=t(),C(),t),N={class:"tabs-header"},U=["onClick"],q=B(()=>u("span",{class:"tab"},null,-1)),F=[q],H=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,f=p,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},m=(e,c)=>{f("update:activeTabIndex",c),$(()=>o(e.target))};return v(n,e=>{e&&setTimeout(()=>{o(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",N,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(g,null,x(t.tabs,({label:d},i)=>(a(),s("button",{key:`${i}${d}`,class:k([t.activeTabIndex===i?"active":"not-active"]),onClick:_=>m(_,i)},T(d),11,U))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},F,512)],512)):y("",!0),I(e.$slots,"footer",{},void 0,!0)]))}}),R=w(H,[["__scopeId","data-v-864b6df3"]]);export{R as default};
