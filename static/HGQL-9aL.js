const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D8YxdmFc.js","./UTwMi2gE.js","./entry.C0fLXZK0.css","./DFsYGD68.js","./CGFR19X9.js","./C-v3KzvZ.js","./Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{Q as f,Y as p,q as v,g,Z as d,i as l,$ as h,R as _,v as r,e as y}from"./UTwMi2gE.js";import{u as C}from"./BC8QjIid.js";import{q as w,w as m,e as $,s as P,j as N,u as j}from"./DFsYGD68.js";import{u as T}from"./CGFR19X9.js";const D=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${$(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./D8YxdmFc.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await C(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(y,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),L=E;export{L as default};