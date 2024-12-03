import{_ as e}from"./nuxt-link-CswYUj8a.mjs";import{mergeProps as t,withCtx as r,createTextVNode as n,toDisplayString as o,useSSRContext as i}from"vue";import{ssrRenderAttrs as s,ssrInterpolate as a,ssrRenderComponent as u}from"vue/server-renderer";import{_ as d}from"./_plugin-vue_export-helper-1tPrXgE0.mjs";import{a as l}from"./index-DwVXQbOt.mjs";import"../runtime.mjs";import"node:http";import"node:https";import"node:fs";import"node:path";import"node:url";import"./server.mjs";import"../routes/renderer.mjs";import"vue-bundle-renderer/runtime";import"devalue";import"@unhead/ssr";import"unhead";import"@unhead/shared";import"vue-router";const p={__name:"error-404",__ssrInlineRender:!0,props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(i){const d=i;return l({title:`${d.statusCode} - ${d.statusMessage} | ${d.appName}`,script:[{children:'!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();'}],style:[{children:'*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(d,l,p,c)=>{const m=e;l(`<div${s(t({class:"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"},c))} data-v-00b6b518><div class="fixed left-0 right-0 spotlight z-10" data-v-00b6b518></div><div class="max-w-520px text-center z-20" data-v-00b6b518><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-00b6b518>${a(i.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-00b6b518>${a(i.description)}</p><div class="flex items-center justify-center w-full" data-v-00b6b518>`),l(u(m,{to:"/",class:"cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md"},{default:r(((e,t,r,s)=>{if(!t)return[n(o(i.backHome),1)];t(`${a(i.backHome)}`)})),_:1},p)),l("</div></div></div>")}}},c=p.setup;p.setup=(e,t)=>{const r=i();return(r.modules||(r.modules=new Set)).add("node_modules/nuxt/dist/app/components/error-404.vue"),c?c(e,t):void 0};const m=d(p,[["__scopeId","data-v-00b6b518"]]);export{m as default};