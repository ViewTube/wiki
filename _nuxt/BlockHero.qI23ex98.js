import m from"./ButtonLink.BJi0DSVv.js";import f from"./Terminal.wM3-760a.js";import y from"./VideoPlayer.Bav1Calh.js";import{r as n}from"./slot.BE7m1JOq.js";import{d as _,b as o,c as a,e as s,f as r,F as h,W as c,w as k,C as i,t as d,$ as v,k as $}from"./entry.SdekXXGA.js";import"./node.2ETV-d1z.js";import"./index.D4MBvX2k.js";import"./NuxtImg.vue.BMdhHqG9.js";const w={class:"block-hero"},B={class:"layout"},S={class:"content"},b={key:0,class:"announce"},g={class:"title"},q={class:"description"},C={key:1,class:"extra"},H={class:"actions"},V=["href"],A={class:"support"},N=_({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,T)=>{const l=m,u=f,p=y;return o(),a("section",w,[s("div",B,[s("div",S,[t.$slots.announce?(o(),a("p",b,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):r("",!0),s("h1",g,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",q,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),a("div",C,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):r("",!0),s("div",H,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),a(h,{key:1},[e.cta?(o(),c(l,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(o(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,V)):r("",!0)],64))])]),s("div",A,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),W=$(N,[["__scopeId","data-v-ca6b2cca"]]);export{W as default};