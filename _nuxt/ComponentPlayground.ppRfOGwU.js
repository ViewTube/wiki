import{I as u,av as $,H as a,d as _,Z as v,b as I,c as b,n as w,p as P,i as C,e as x,k as f,a7 as D,r as E,M as c}from"./entry.ocuGJEzJ.js";import j from"./ComponentPlaygroundData.qXpSlQPG.js";import"./TabsHeader.__8-hkan.js";import"./ComponentPlaygroundProps.CZmu8Lz7.js";import"./ProseH4.lJ07M1hP.js";import"./ProseCodeInline.6RiUeTwO.js";import"./Badge.icRulXVv.js";import"./slot.X1VYkYBy.js";import"./node.V6KjywBy.js";import"./ProseP.0fecO0HV.js";import"./index.dG9sArC1.js";import"./ComponentPlaygroundSlots.vue.6iIvFLt7.js";import"./ComponentPlaygroundTokens.vue.eZYeehiJ.js";async function z(e){const o=u(e);{const{data:n}=await $(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(P("data-v-79874d40"),e=e(),C(),e),k=B(()=>x("div",{class:"ellipsis-item"},null,-1)),N=[k],V=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),h=a(()=>((t=s)=>`blur(${t.blur})`)()),y=a(()=>((t=s)=>{var p,d,m;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(m=t==null?void 0:t.colors)==null?void 0:m[2]} 98.48%)`})()),s=e,{$pinceau:S}=v(s,void 0,{_cCN_top:o,_eih_insetInlineStart:n,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:h,_yUj_background:y});return(t,p)=>(I(),b("div",{class:w(["ellipsis",[u(S)]])},N,2))}}),q=f(V,[["__scopeId","data-v-79874d40"]]),A=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>D(e.component)),n=E({...e.props}),r=await z(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=i}return n},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),c(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}}),T=f(A,[["__scopeId","data-v-623ad65c"]]);export{T as default};