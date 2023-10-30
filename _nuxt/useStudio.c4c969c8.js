import{d as Y,u as V,r as $,o as j,_ as ee,a as te,b as q,c as L,n as ne,F as oe,e as w,f as K,g as O,w as J,T as B,t as ie,h as z,p as ae,i as se,j as W,k as re,l as de,m as D,q as ce,s as E,v as U,x as Z,y as H,z as le,A as pe,B as F}from"./entry.7665b05e.js";const A=i=>(ae("data-v-4efbaab3"),i=i(),se(),i),ue=A(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),fe=A(()=>w("span",null,"Preview mode enabled",-1)),ve={key:0},we=A(()=>w("div",{id:"__preview_background"},null,-1)),_e=A(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),he=A(()=>w("p",null,"Initializing the preview...",-1)),ye={key:0},me=A(()=>w("div",{id:"__preview_background"},null,-1)),ge={id:"__preview_loader"},ke=Y({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const a=i,c=["__nuxt_preview","__preview_enabled"],f=W(),y=V(),r=$(!0),g=$(!1),o=$(!1),l=$("");let s;const h=async()=>{z("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await y.replace({query:{preview:void 0}}),window.location.reload()},R=async T=>{const _=await a.syncPreview(T);if(o.value!==!0){if(!_){setTimeout(()=>R(T),1e3);return}z("previewToken").value&&(o.value=!0,await y.replace({query:{}}),f.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&s.disconnect())}};return j(async()=>{s=(await ee(()=>import("./index.17e44084.js"),[],import.meta.url)).connect(`${a.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:a.previewToken}});let _;s.on("connect",()=>{_=setTimeout(()=>{o.value||(_=setTimeout(()=>{l.value="Preview sync timed out",o.value=!1},3e4),s.emit("draft:requestSync"))},3e4)});const I=()=>{_&&(clearTimeout(_),_=null)};s.on("draft:sync",async P=>{if(I(),!P){try{s.once("draft:ready",()=>{s.emit("draft:requestSync")}),await a.requestPreviewSyncAPI()}catch(x){switch(I(),x.response.status){case 404:l.value="Preview draft not found",o.value=!1;break;default:l.value="An error occurred while syncing preview",o.value=!1}}return}R(P)}),s.on("draft:unauthorized",()=>{I(),l.value="Unauthorized preview token",o.value=!1}),s.on("disconnect",()=>{I()}),document.body.classList.add(...c),s.on("draft:update",P=>{g.value=!0,a.syncPreview(P),g.value=!1})}),te(()=>{document.body.classList.remove(...c)}),(T,_)=>(q(),L("div",null,[r.value?(q(),L("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:o.value,__preview_refreshing:g.value})},[o.value?(q(),L(oe,{key:0},[ue,fe,w("button",{onClick:h}," Close ")],64)):K("",!0)],2)):K("",!0),O(B,{name:"preview-loading"},{default:J(()=>[r.value&&!o.value&&!l.value?(q(),L("div",ve,[we,w("div",{id:"__preview_loader"},[_e,he,w("button",{onClick:h}," Cancel ")])])):K("",!0)]),_:1}),O(B,{name:"preview-loading"},{default:J(()=>[l.value?(q(),L("div",ye,[me,w("div",ge,[w("p",null,ie(l.value),1),w("button",{onClick:h}," Exit preview ")])])):K("",!0)]),_:1})]))}});const Ce=re(ke,[["__scopeId","data-v-4efbaab3"]]),Ie=(i=[],a,c)=>{const f=[...a||[]],y=[...c||[]],r=JSON.parse(JSON.stringify(i));for(const o of f)if(o.oldPath)if(y.splice(y.findIndex(s=>s.path===o.oldPath),1),f.find(s=>s.path===o.oldPath))r.push({path:o.path,parsed:o.parsed});else{const s=r.find(h=>h.path===o.oldPath);s&&(s.path=o.path,o.parsed?s.parsed=o.parsed:o.pathMeta&&["_file","_path","_id","_locale"].forEach(h=>{s.parsed[h]=o.pathMeta[h]}))}else if(o.new)r.push({path:o.path,parsed:o.parsed});else{const l=r.find(s=>s.path===o.path);l&&Object.assign(l,{path:o.path,parsed:o.parsed})}for(const o of y)r.splice(r.findIndex(l=>l.path===o.path),1);const g=new Intl.Collator(void 0,{numeric:!0});return r.sort((o,l)=>g.compare(o.path,l.path)),r},C={appConfig:"app.config.ts",tokensConfig:"tokens.config.ts"},Pe=i=>{let a;return(...c)=>(a||(a=i()),a)};function G(i,a){for(const c in i){const f=a[c];c in a||delete i[c],f!==null&&typeof f=="object"&&G(i[c],a[c])}}function Q(i,a){for(const c in a){const f=a[c];f!==null&&typeof f=="object"?(i[c]=i[c]||{},Q(i[c],f)):i[c]=f}}const Se=Pe(()=>JSON.parse(JSON.stringify(Z()))),Ae=()=>{const i=W(),{studio:a,content:c}=de().public,f=Se();let y;const r=D("studio-client-db",()=>null),g=D("studio-preview-db-files",()=>[]);r.value||(i.hook("content:storage",e=>{r.value=e}),ce("/non-existing-path").findOne());const o=async(e,n,d=!0)=>{const u=window.sessionStorage.getItem("previewToken"),v=await e.getKeys(`${u}:`);await Promise.all(v.map(p=>e.removeItem(p)));const t=new Set(n.map(p=>p.parsed._id.split(":").shift()));await e.setItem(`${u}$`,JSON.stringify({ignoreSources:Array.from(t)})),await Promise.all(n.map(p=>e.setItem(`${u}:${p.parsed._id}`,JSON.stringify(p.parsed))))},l=e=>{const n=U(i,Z);Q(n,H(e,f)),e||G(n,f)},s=e=>{var d,u,v,t;const n=(t=(v=(u=(d=i==null?void 0:i.vueApp)==null?void 0:d._context)==null?void 0:u.config)==null?void 0:v.globalProperties)==null?void 0:t.$pinceauTheme;!n||!(n!=null&&n.updateTheme)||(y||(y=JSON.parse(JSON.stringify((n==null?void 0:n.theme.value)||{}))),U(i,n.updateTheme,[H(e,y)]))},h=async e=>{if(g.value=e.files=e.files||g.value||[],!r.value)return!1;const n=Ie(e.files,e.additions,e.deletions),d=n.filter(t=>![C.appConfig,C.tokensConfig].includes(t.path));await o(r.value,d,(e.files||[]).length!==0);const u=n.find(t=>t.path===C.appConfig);l(u==null?void 0:u.parsed);const v=n.find(t=>t.path===C.tokensConfig);return s(v==null?void 0:v.parsed),x(),!0},R=async()=>{const e=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:a==null?void 0:a.apiURL,method:"POST",params:{token:e}})},T=()=>{const e=window.sessionStorage.getItem("previewToken"),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),le(Ce,{previewToken:e,apiURL:a==null?void 0:a.apiURL,syncPreview:h,requestPreviewSyncAPI:R}).mount(n)},_=async e=>{var u,v,t;const n=window.sessionStorage.getItem("previewToken");if(!e)return null;e=e.replace(/\/$/,"");let d=await((u=r.value)==null?void 0:u.getItem(`${n}:${e}`));return d||(d=await((v=r.value)==null?void 0:v.getItem(`cached:${e}`))),d||(d=d=await((t=r.value)==null?void 0:t.getItem(e))),d},I=e=>{var d;const n=window.sessionStorage.getItem("previewToken");r.value&&r.value.setItem(`${n}:${(d=e.parsed)==null?void 0:d._id}`,JSON.stringify(e.parsed))},P=async e=>{var d;const n=window.sessionStorage.getItem("previewToken");await((d=r.value)==null?void 0:d.removeItem(`${n}:${e}`))},x=async()=>{if(c!=null&&c.documentDriven){const{pages:e}=U(i,pe);for(const n in e.value)e.value[n]&&(e.value[n]=await _(e.value[n]._id))}await i.hooks.callHookParallel("app:data:refresh")};return{apiURL:a==null?void 0:a.apiURL,contentStorage:r,syncPreviewFiles:o,syncPreviewAppConfig:l,syncPreviewTokensConfig:s,requestPreviewSynchronization:R,findContentWithId:_,updateContent:I,removeContentWithId:P,requestRerender:x,mountPreviewUI:T,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const e=V(),n=E(),d=$(""),u=t=>({path:t.path,query:F(t.query),params:F(t.params),fullPath:t.fullPath,meta:F(t.meta)});window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:t.key,metaKey:t.metaKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey}},"*")}),window.addEventListener("message",async t=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(t.origin))return;const{type:p,payload:b={}}=t.data||{};switch(p){case"nuxt-studio:editor:file-selected":{const m=await _(b.path);m&&(m._partial||m._path!==E().path&&(d.value=m._path,e.push(m._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:m=[],deletions:M=[]}=b;for(const k of m)await I(k);for(const k of M)await P(k.path);x();break}case"nuxt-studio:preview:sync":{h(b);break}case"nuxt-studio:config:file-changed":{const{additions:m=[],deletions:M=[]}=b,k=m.find(S=>S.path===C.appConfig);k&&l(k==null?void 0:k.parsed),M.find(S=>S.path===C.appConfig)&&l(void 0);const N=m.find(S=>S.path===C.tokensConfig);N&&s(N==null?void 0:N.parsed),M.find(S=>S.path===C.tokensConfig)&&s(void 0);break}}}),i.hook("page:finish",()=>{v(),i.payload.prerenderedAt&&x()}),i.hook("content:document-driven:finish",({route:t,page:p})=>{t.meta.studio_page_contentId=p==null?void 0:p._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:u(E())},"*"),setTimeout(()=>{v()},100)});function v(){const t=Array.from(window.document.querySelectorAll("[data-content-id]")).map(b=>b.getAttribute("data-content-id")),p=Array.from(new Set([n.meta.studio_page_contentId,...t])).filter(Boolean);if(d.value===p[0]){d.value="";return}window.openContentInStudioEditor(p,{navigate:!0,pageContentId:n.meta.studio_page_contentId})}window.openContentInStudioEditor=(t,p={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...u(n),contentIds:t,...p}},"*")}}};export{Ae as useStudio};
