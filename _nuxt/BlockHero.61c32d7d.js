import _ from"./ButtonLink.f5521220.js";import m from"./Terminal.73d804ab.js";import f from"./VideoPlayer.bf08b220.js";import{r as n}from"./slot.6eca956a.js";import{d as y,b as o,c as r,e as s,f as a,F as h,W as c,w as k,C as i,t as d,$ as v,k as $}from"./entry.9fa0426b.js";import"./node.676c5e99.js";import"./index.0534d7f1.js";import"./NuxtImg.vue.b7f73a9c.js";const B={class:"block-hero"},w={class:"layout"},g={class:"content"},H={key:0,class:"announce"},S={class:"title"},q={class:"description"},C={key:1,class:"extra"},V={class:"actions"},b=["href"],x={class:"support"},A=y({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,N)=>{const l=_,u=m,p=f;return o(),r("section",B,[s("div",w,[s("div",g,[t.$slots.announce?(o(),r("p",H,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):a("",!0),s("h1",S,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",q,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),r("div",C,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):a("",!0),s("div",V,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),r(h,{key:1},[e.cta?(o(),c(l,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(d(e.cta[0]),1)]),_:1},8,["href"])):a("",!0),e.secondary?(o(),r("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,b)):a("",!0)],64))])]),s("div",x,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):a("",!0)],!0)])])])}}});const W=$(A,[["__scopeId","data-v-940595ca"]]);export{W as default};
