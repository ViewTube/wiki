import{d as p,r as t,b as _,c as f,e as a,g as v,n,I as l,ao as h,ap as g,ad as y,k as V}from"./entry.SdekXXGA.js";import{r}from"./slot.BE7m1JOq.js";import"./node.2ETV-d1z.js";const C={class:"summary"},k={class:"content"},w=p({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>t(!1)}},emits:["update:modelValue"],setup(s,{emit:c}){const i=s,u=c,e=t(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(o,B)=>{const m=y;return _(),f("div",{class:n(["callout",[s.type]])},[a("span",{class:"preview",onClick:d},[a("span",C,[r(o.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),h(a("div",k,[r(o.$slots,"content",{},void 0,!0)],512),[[g,l(e)]])],2)}}}),N=V(w,[["__scopeId","data-v-23e8682f"]]);export{N as default};
