import{composableNames as e,unpackMeta as t}from"@unhead/shared";import{ref as a,watchEffect as s,watch as r,getCurrentInstance as u}from"vue";import{i as o,e as n}from"./server.mjs";function useHead(e,t={}){const l=t.head||o();if(l)return l.ssr?l.push(e,t):function(e,t,o={}){const l=a(!1),i=a({});s((()=>{i.value=l.value?{}:n(t)}));const f=e.push(i.value,o);return r(i,(e=>{f.patch(e)})),u(),f}(l,e,t)}function useSeoMeta(e,a){const{title:s,titleTemplate:r,...u}=e;return useHead({title:s,titleTemplate:r,_flatMeta:u},{...a,transform(e){const a=t({...e._flatMeta});return delete e._flatMeta,{...e,meta:a}}})}export{useHead as a,useSeoMeta as u};
