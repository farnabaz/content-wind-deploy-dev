import{d as o,_ as c,o as g,c as E,n as k,g as P,u as s}from"./entry.e3b9a106.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(u){var n;const{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,i=(n=t.statusMessage)!=null?n:a?"Page Not Found":"Internal Server Error",p=t.message||t.toString(),_=void 0,d=o(()=>c(()=>import("./error-404.ebba4d85.js"),["error-404.ebba4d85.js","error-404.18ced855.css","entry.e3b9a106.js","entry.b2ee6094.css"],import.meta.url).then(e=>e.default||e)),l=o(()=>c(()=>import("./error-500.c258ed74.js"),["error-500.c258ed74.js","error-500.e60962de.css","entry.e3b9a106.js","entry.b2ee6094.css"],import.meta.url).then(e=>e.default||e)),m=a?d:l;return(e,f)=>(g(),E(s(m),k(P({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=v;export{h as default};
