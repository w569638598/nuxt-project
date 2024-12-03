import{mergeProps as e,useSSRContext as t}from"vue";import{ssrRenderAttrs as r,ssrInterpolate as n}from"vue/server-renderer";import{_ as o}from"./_plugin-vue_export-helper-1tPrXgE0.mjs";import{a as i}from"./index-DwVXQbOt.mjs";import"@unhead/shared";import"./server.mjs";import"../runtime.mjs";import"node:http";import"node:https";import"node:fs";import"node:path";import"node:url";import"../routes/renderer.mjs";import"vue-bundle-renderer/runtime";import"devalue";import"@unhead/ssr";import"unhead";import"vue-router";const s={__name:"error-500",__ssrInlineRender:!0,props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:500},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(t){const o=t;return i({title:`${o.statusCode} - ${o.statusMessage} | ${o.appName}`,script:[{children:'!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();'}],style:[{children:'*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(o,i,s,a)=>{i(`<div${r(e({class:"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"},a))} data-v-f7ad9679><div class="-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight" data-v-f7ad9679></div><div class="max-w-520px text-center" data-v-f7ad9679><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-f7ad9679>${n(t.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-f7ad9679>${n(t.description)}</p></div></div>`)}}},a=s.setup;s.setup=(e,r)=>{const n=t();return(n.modules||(n.modules=new Set)).add("node_modules/nuxt/dist/app/components/error-500.vue"),a?a(e,r):void 0};const u=o(s,[["__scopeId","data-v-f7ad9679"]]);export{u as default};
