(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{278:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("6b3af5eb",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";r(278)},289:function(t,e,r){var d=r(62)((function(i){return i[1]}));d.push([t.i,".datatable[data-v-7057c1f1]{overflow-x:auto;overflow-y:hidden;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.datatable[data-v-7057c1f1]{border-radius:0.75rem}}.datatable table[data-v-7057c1f1]{min-width:100%}.datatable table[data-v-7057c1f1] > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity:1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}@media (prefers-color-scheme: dark){.datatable table[data-v-7057c1f1] > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}}.datatable table thead[data-v-7057c1f1]{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}@media (prefers-color-scheme: dark){.datatable table thead[data-v-7057c1f1]{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}}.datatable table thead th[data-v-7057c1f1]{white-space:nowrap;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:left;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media (min-width: 768px){.datatable table thead th[data-v-7057c1f1]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.datatable table thead th[data-v-7057c1f1]{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.datatable table tbody tr[data-v-7057c1f1]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}@media (prefers-color-scheme: dark){.datatable table tbody tr[data-v-7057c1f1]{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}}.datatable table tbody td[data-v-7057c1f1]{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem}@media (min-width: 768px){.datatable table tbody td[data-v-7057c1f1]{padding-left:1.5rem;padding-right:1.5rem}}",""]),d.locals={},t.exports=d},294:function(t,e,r){"use strict";r.r(e);var d={name:"DataTable",props:{fields:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{tableContent:function(){return this.data}}},o=(r(288),r(26)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"datatable"},[r("table",[r("thead",[r("tr",t._l(t.fields,(function(e){return r("th",{key:e.key,class:e.class,attrs:{scope:"col"}},[t._v("\n                    "+t._s(e.label)+"\n                ")])})),0)]),t._v(" "),r("tbody",t._l(t.tableContent,(function(e,d){return r("tr",{key:"row#"+d},t._l(t.fields,(function(d){return r("td",{key:d.key},[t._t("cell("+d.key+")",(function(){return[t._v("\n                        "+t._s(e[d.key])+"\n                    ")]}),{row:e,value:e[d.key]})],2)})),0)})),0)])])}),[],!1,null,"7057c1f1",null);e.default=component.exports}}]);