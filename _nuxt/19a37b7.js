(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4,5,6,7,8,9,12,13,14],{338:function(t,e,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("173259b0",content,!0,{sourceMap:!1})},339:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("be9d419e",content,!0,{sourceMap:!1})},340:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("0d387d86",content,!0,{sourceMap:!1})},341:function(t,e,r){"use strict";r.r(e);var o=r(337),n=r.n(o),c={name:"BreadcrumbItem",props:{to:{type:[String,Object],default:function(){}}},computed:{classes:function(){return{active:n.a.has(this.$attrs,"active")}},isLink:function(){return n.a.isString(this.to)&&""!==this.to||n.a.isObject(this.to)&&!n.a.isEmpty(this.to)}}},l=(r(343),r(44)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"breadcrumb-item",class:t.classes},[t.isLink?r("nuxt-link",t._b({attrs:{to:t.to}},"nuxt-link",t.$attrs,!1),[t._t("default")],2):t._t("default",null,null,t.$attrs)],2)}),[],!1,null,"f1bc17fe",null);e.default=component.exports},342:function(t,e,r){"use strict";var o=r(85),n=r.n(o);e.a={getAnnouncement:function(t){return n.a.get("/announcement/"+t+".md")},getRepos:function(){return n.a.get("/repos.json")},getBuilds:function(t){return n.a.get("/f/".concat(t,"/builds.json"))}}},343:function(t,e,r){"use strict";r(338)},344:function(t,e,r){var o=r(83)((function(i){return i[1]}));o.push([t.i,'.breadcrumb-item[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.breadcrumb-item[data-v-f1bc17fe]:not(:first-child){padding-left:0.5rem}.breadcrumb-item.active[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (prefers-color-scheme: dark){.breadcrumb-item.active[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}}.breadcrumb-item[data-v-f1bc17fe]:not(:first-child):before{content:"/";padding-right:0.25rem}',""]),o.locals={},t.exports=o},345:function(t,e,r){"use strict";r(339)},346:function(t,e,r){var o=r(83)((function(i){return i[1]}));o.push([t.i,".card[data-v-7cb9daae]{margin-left:0.5rem;margin-right:0.5rem;border-radius:1rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.25rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.card[data-v-7cb9daae]{margin-left:0px;margin-right:0px}}@media (prefers-color-scheme: dark){.card[data-v-7cb9daae]{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.card .card-title[data-v-7cb9daae]{margin-bottom:1rem;font-size:1.125rem;line-height:1.75rem;font-weight:700}",""]),o.locals={},t.exports=o},348:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("eb113c5e",content,!0,{sourceMap:!1})},349:function(t,e,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("134c10e1",content,!0,{sourceMap:!1})},350:function(t,e,r){"use strict";r.r(e);r(129);var o=r(337),n=r.n(o),c={name:"FaIcon",props:{type:{type:String,default:"regular"},icon:{type:String,default:""}},computed:{iconClass:function(){var t=["fa-"+this.icon];switch(this.type){case"solid":t.push("fas");break;case"regular":t.push("far");break;case"light":t.push("fal");break;case"duotone":t.push("fad");break;case"brands":t.push("fab")}return n.a.join(t," ")}}},l=r(44),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"fa-icon",class:t.iconClass})}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,r){"use strict";r.r(e);var o={name:"Card",props:{title:{type:String,default:""}},computed:{hasTitle:function(){return""!==this.title||!!this.$slots.title}}},n=(r(345),r(44)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t.hasTitle?r("h2",{staticClass:"card-title"},[t._t("title",(function(){return[t._v("\n                "+t._s(t.title)+"\n            ")]}))],2):t._e()]),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,"7cb9daae",null);e.default=component.exports},352:function(t,e,r){"use strict";r(12),r(19),r(67),r(32),r(45);var o=r(337),n=r.n(o),c=r(342);e.a={loadRepos:function(t){return new Promise((function(e,r){n.a.isNil(t.$store.getters["repos/getRepos"])?c.a.getRepos().then((function(r){var o=[],n=[],c={};for(var l in r.data){var d;o.push(l),c[l]=r.data[l];var f=l.split("/")[0];null!==(d=c[l].options)&&void 0!==d&&d.hidden||"redirect"===c[l].type||(f in n?n[f]++:n[f]=1)}t.$store.commit("repos/setRepos",o),t.$store.commit("repos/setReposInfo",c),t.$store.commit("repos/setUsers",n),e()})):e()}))},getRepos:function(t){return t.$store.getters["repos/getRepos"]},getUsers:function(t){return t.$store.getters["repos/getUsers"]},getInfoByRepoStr:function(t){var e=t.split(":"),r=e[0].split("/");return{user:r[0],repo:r[1],branch:e[1]}},exists:function(t,e){var r=this,o=!1;return n.a.forEach(t,(function(t){var c=r.getInfoByRepoStr(t),l=c.user,d=c.repo,f=c.branch;return!n.a.isNil(e.user)&&e.user!==l||(!n.a.isNil(e.repo)&&e.repo!==d||(!n.a.isNil(e.branch)&&e.branch!==f||(o=!0,!1)))})),o},getRepoInfo:function(t,e){return t.$store.getters["repos/getReposInfo"][e]},getDir:function(t,e){var r,o=null===(r=this.getRepoInfo(t,e).options)||void 0===r?void 0:r.customDir;if(n.a.isNil(o)){var c=this.getInfoByRepoStr(e),l=c.user,d=c.repo,f=c.branch;return"".concat(l,"/").concat(d,"/").concat(f)}return o}}},353:function(t,e,r){"use strict";r(340)},354:function(t,e,r){var o=r(83)((function(i){return i[1]}));o.push([t.i,".breadcrumb-wrapper[data-v-6c55211c]{width:100%;padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem}.breadcrumb[data-v-6c55211c]{display:flex;list-style-type:none}",""]),o.locals={},t.exports=o},355:function(t,e,r){"use strict";r.r(e);var o={name:"Breadcrumb",props:{breadcrumbs:{type:Array,default:function(){return[]}}},computed:{}},n=(r(353),r(44)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"breadcrumb-wrapper"},[r("ol",{staticClass:"breadcrumb"},[t._t("default",(function(){return t._l(t.breadcrumbs,(function(e,o){return r("breadcrumb-item",{key:o},[t._v("\n                "+t._s(e.text)+"\n            ")])}))}))],2)])}),[],!1,null,"6c55211c",null);e.default=component.exports;installComponents(component,{BreadcrumbItem:r(341).default})},356:function(t,e,r){"use strict";r.r(e);var o={name:"BuildStatus",props:{dir:{type:String,default:""}},data:function(){return{imgSource:""}},computed:{source:function(){return"/f/"+this.dir+"/badge.svg"}},mounted:function(){this.imgSource=this.source},methods:{imageLoaded:function(){this.$el.classList.contains("isLoading")&&(this.$el.classList.contains("isLoaded")||this.$el.width<=1&&(this.imgSource="/images/default_badge.svg"))}}},n=r(44),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.imgSource,alt:"Build status"},on:{load:t.imageLoaded}})}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,r){"use strict";r(348)},360:function(t,e,r){var o=r(83)((function(i){return i[1]}));o.push([t.i,".list-group-item[data-v-4669ccc8]{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}@media (prefers-color-scheme: dark){.list-group-item[data-v-4669ccc8]{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.list-group-item[data-v-4669ccc8]{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.list-group-item[data-v-4669ccc8]:not(:last-child){border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}@media (prefers-color-scheme: dark){.list-group-item[data-v-4669ccc8]:not(:last-child){--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}}.list-group-item[data-v-4669ccc8]:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}@media (prefers-color-scheme: dark){.list-group-item[data-v-4669ccc8]:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}}.list-group-item[data-v-4669ccc8] .fa-icon{margin-right:0.5rem}",""]),o.locals={},t.exports=o},361:function(t,e,r){"use strict";r(349)},362:function(t,e,r){var o=r(83)((function(i){return i[1]}));o.push([t.i,".list-group[data-v-297fec12]{display:flex;flex-direction:column}",""]),o.locals={},t.exports=o},364:function(t,e,r){"use strict";r.r(e);var o=r(337),n=r.n(o),c={name:"ListGroupItem",props:{to:{type:[String,Object],default:function(){}},href:{type:String,default:""}},data:function(){return{itemClass:""}},computed:{isNuxtLink:function(){return n.a.isString(this.to)&&""!==this.to||n.a.isObject(this.to)&&!n.a.isEmpty(this.to)}},created:function(){this.itemClass=this.$parent.itemClass}},l=(r(359),r(44)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isNuxtLink?r("nuxt-link",{staticClass:"list-group-item",class:t.itemClass,attrs:{to:t.to}},[t._t("default")],2):r("a",{staticClass:"list-group-item",class:t.itemClass,attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,"4669ccc8",null);e.default=component.exports},365:function(t,e,r){"use strict";r.r(e);var o={name:"ListGroup",props:{itemClass:{type:[String,Object],default:""}}},n=(r(361),r(44)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"list-group"},[t._t("default")],2)}),[],!1,null,"297fec12",null);e.default=component.exports},367:function(t,e,r){var content=r(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("6f8253eb",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";r(45);var o=r(374);o.marked.use({renderer:{link:function(t,title,text){return null===title?'<a href="'.concat(t,'" target="_blank">').concat(text,"</a>"):'<a href="'.concat(t,'" title="').concat(title,'" target="_blank">').concat(text,"</a>")}}}),e.a={render:function(source){return o.marked.parse(source)}}},371:function(t,e,r){"use strict";r(12),r(32),r(68);var o=r(337),n=r.n(o),c=r(342);e.a={loadBuilds:function(t,e,r){return new Promise((function(o,l){n.a.isNil(t.$store.getters["builds/getBuilds"](e))?c.a.getBuilds(r).then((function(r){t.$store.commit("builds/setLatest",{repoStr:e,latest:r.data.latest});var c=n.a.reverse(n.a.cloneDeep(r.data.builds));t.$store.commit("builds/setBuilds",{repoStr:e,builds:c}),o()})).catch(l):o()}))},getLatest:function(t,e){return t.$store.getters["builds/getLatest"](e)},getBuilds:function(t,e){return t.$store.getters["builds/getBuilds"](e)},exists:function(t,e){var r=!1;return n.a.forEach(t,(function(t){return!n.a.isNil(e.id)&&e.id.toString()!==t.id.toString()||(!n.a.isNil(e.commit)&&e.commit!==t.commit||(!n.a.isNil(e.timestamp)&&e.timestamp!==t.timestamp||(r=!0,!1)))})),r}}},372:function(t,e,r){"use strict";r(367)},373:function(t,e,r){var o=r(83)((function(i){return i[1]}));o.push([t.i,".button[data-v-deec26a2]{margin:0.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:0.25rem;padding-left:1.5rem;padding-right:1.5rem;padding-top:0.625rem;padding-bottom:0.625rem;font-size:0.75rem;line-height:1rem;font-weight:500;line-height:1.25;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.button[data-v-deec26a2]:not(.disabled):hover{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.button[data-v-deec26a2]:not(.disabled):focus{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.button[data-v-deec26a2]:not(.disabled):active{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.button.disabled[data-v-deec26a2]{cursor:not-allowed;opacity:0.6}.button-primary[data-v-deec26a2]{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.button-primary[data-v-deec26a2]:not(.disabled):hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.button-primary[data-v-deec26a2]:not(.disabled):focus{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.button-primary[data-v-deec26a2]:not(.disabled):active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}",""]),o.locals={},t.exports=o},376:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("a1819360",content,!0,{sourceMap:!1})},380:function(t,e,r){"use strict";r.r(e);var o={name:"BuildIcon",props:{success:{type:Boolean,default:!0}}},n=r(44),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.success?r("fa-icon",{staticClass:"text-green-500",attrs:{icon:"check-circle",type:"solid"}}):r("fa-icon",{staticClass:"text-red-500",attrs:{icon:"times-circle",type:"solid"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FaIcon:r(350).default})},381:function(t,e,r){"use strict";r.r(e);var o={name:"AButton",props:{disabled:{type:Boolean,default:!1},href:{type:String,default:"javascript:void(0)"},variant:{type:String,default:"primary"}},computed:{classes:function(){return{disabled:this.disabled,"button-primary":"primary"===this.variant}}},methods:{onClick:function(t){this.disabled&&t.preventDefault()}}},n=(r(372),r(44)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",t._b({staticClass:"button",class:t.classes,attrs:{href:t.href,role:"button"},on:{click:function(e){return t.onClick(e)}}},"a",t.$attrs,!1),[t._t("default")],2)}),[],!1,null,"deec26a2",null);e.default=component.exports},385:function(t,e,r){"use strict";r(376)},386:function(t,e,r){var o=r(83)((function(i){return i[1]}));o.push([t.i,".repo-name[data-v-0790e325]{font-size:1.875rem;line-height:2.25rem;font-weight:500}.repo-branch[data-v-0790e325]{font-size:0.875rem;line-height:1.25rem;font-weight:100}.builds-list[data-v-0790e325]{overflow-y:auto;max-height:45vh}.dependency-info[data-v-0790e325]{margin-top:0.5rem;border-collapse:collapse}.dependency-info td[data-v-0790e325]{border-width:1px;--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}@media (prefers-color-scheme: dark){.dependency-info td[data-v-0790e325]{--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))}}",""]),o.locals={},t.exports=o},396:function(t,e,r){"use strict";r.r(e);r(45),r(12),r(68),r(19),r(62),r(130);var o=r(337),n=r.n(o),c=r(368),l=r(352),d=r(371),f={layout:"main",data:function(){return{user:this.$route.params.user,repo:this.$route.params.repo,branch:this.$route.params.branch,repoDir:"",repoInfo:null,build:this.$route.params.build,builds:null,buildInfo:null,buildTime:"",commitTime:"",dependencyInfo:null}},head:function(){return{title:"".concat(this.repo," (").concat(this.branch,") - ").concat(this.$t("title"))}},computed:{repoStr:function(){return"".concat(this.user,"/").concat(this.repo,":").concat(this.branch)}},mounted:function(){var t=this;try{var e=parseInt(this.build);if(e.toString()!==this.build.toString())throw new Error("Invald build number");this.build=e}catch(t){this.$router.push({name:"user-repo-branch"})}l.a.loadRepos(this).then((function(){var e={user:t.user,repo:t.repo,branch:t.branch};if(l.a.exists(l.a.getRepos(t),e))if(t.repoInfo=l.a.getRepoInfo(t,t.repoStr),"redirect"!==t.repoInfo.type)t.repoDir=l.a.getDir(t,t.repoStr),d.a.loadBuilds(t,t.repoStr,t.repoDir).then((function(){if(t.builds=d.a.getBuilds(t,t.repoStr),d.a.exists(t.builds,{id:t.build})){if(t.buildInfo=n.a.find(t.builds,(function(e){return e.id===t.build})),t.buildTime=new Date(t.buildInfo.build_timestamp).toLocaleString(),t.commitTime=new Date(t.buildInfo.timestamp).toLocaleString(),t.repoInfo.dependencies){var e={};for(var r in t.repoInfo.dependencies){var o=t.repoInfo.dependencies[r];for(var l in o)t.buildInfo.id>=l&&(e[r]=c.a.render(o[l]))}t.dependencyInfo=e}}else t.$router.replace({name:"user-repo-branch"})})).catch((function(){t.$nuxt.error({statusCode:404,message:"Not found"})}));else{var r=l.a.getInfoByRepoStr(t.repoInfo.options.repo);t.$router.replace({name:"user-repo-branch",params:r})}else t.$nuxt.error({statusCode:404,message:"Not found"})}))}},m=(r(385),r(44)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumb",{staticClass:"mt-2"},[r("breadcrumb-item",{attrs:{to:"/"}},[r("fa-icon",{attrs:{icon:"home","aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("nav.home"))+"\n        ")],1),t._v(" "),r("breadcrumb-item",{attrs:{to:"/"+t.user}},[t._v("\n            "+t._s(t.user)+"\n        ")]),t._v(" "),r("breadcrumb-item",{attrs:{to:"/"+t.user+"/"+t.repo}},[t._v("\n            "+t._s(t.repo)+"\n        ")]),t._v(" "),r("breadcrumb-item",{attrs:{active:""}},[t._v("\n            "+t._s(t.branch)+"\n        ")])],1),t._v(" "),r("div",{staticClass:"grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-12"},[r("div",{staticClass:"col-span-3 xl:col-span-3 m-4"},[r("card",{staticClass:"mb-6"},[r("list-group",{attrs:{"item-class":"flex items-center"}},[r("list-group-item",{attrs:{to:"/?tab=repos"}},[r("fa-icon",{attrs:{icon:"arrow-left"}}),t._v("\n                        "+t._s(t.$t("pages.branch.back"))+"\n                    ")],1),t._v(" "),r("list-group-item",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo,target:"_blank"}},[r("fa-icon",{attrs:{icon:"github",type:"brands"}}),t._v("\n                        "+t._s(t.$t("pages.branch.github"))+"\n                    ")],1),t._v(" "),r("list-group-item",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo+"/issues",target:"_blank"}},[r("fa-icon",{attrs:{icon:"bug"}}),t._v("\n                        "+t._s(t.$t("pages.branch.issues"))+"\n                    ")],1),t._v(" "),""!==t.repoDir?r("list-group-item",{attrs:{href:"/f/"+t.repoDir+"/badge.svg",target:"_blank"}},[r("fa-icon",{attrs:{icon:"cloud"}}),t._v(" "),r("build-status",{attrs:{dir:t.repoDir}})],1):t._e()],1)],1),t._v(" "),r("card",{attrs:{title:t.$t("pages.branch.builds")}},[r("list-group",{staticClass:"builds-list",attrs:{"item-class":"flex flex-col items-center"}},t._l(t.builds,(function(e){return r("list-group-item",{key:e.id,staticClass:"flex-col",attrs:{to:{params:{build:e.id}}}},[r("span",[t._v(t._s(t.$t("pages.branch.build",{build:e.id}))+" "),r("build-icon",{attrs:{success:e.success}})],1),t._v(" "),r("span",{staticClass:"text-sm text-gray-400"},[t._v(t._s(new Date(e.build_timestamp).toLocaleString()))])])})),1)],1)],1),t._v(" "),r("div",{staticClass:"col-span-7 xl:col-span-9 m-4 lg:ml-0"},[r("card",{staticClass:"mb-4",scopedSlots:t._u([{key:"title",fn:function(){return[r("span",{staticClass:"repo-name"},[t._v(t._s(t.repo))]),t._v(" "),r("small",{staticClass:"repo-branch"},[t._v(t._s(t.branch))])]},proxy:!0}])},[t._v(" "),null!==t.buildInfo?r("div",{staticClass:"flex flex-col"},[r("p",{staticClass:"text-xl font-bold mb-2"},[t._v("\n                        "+t._s(t.$t("pages.branch.build",{build:t.buildInfo.id}))+"\n                        "),r("build-icon",{attrs:{success:t.buildInfo.success}})],1),t._v(" "),r("p",[t._v("\n                        "+t._s(t.$t("pages.branch.build_time",{time:t.buildTime}))+"\n                        "),r("a",{attrs:{href:"/f/"+t.repoDir+"/"+t.repo+"-"+t.branch+"-"+t.buildInfo.id+".log",target:"_blank"}},[t._v("\n                            "+t._s(t.$t("pages.branch.log"))+"\n                        ")])]),t._v(" "),r("div",{staticClass:"my-4"},[r("a-button",{attrs:{href:"/f/"+t.repoDir+"/"+t.buildInfo.target,disabled:!t.buildInfo.success,variant:"primary",target:"_blank",title:t.$t("pages.branch.download_direct_tip")}},[t._v("\n                            "+t._s(t.$t("pages.branch.download_direct"))+"\n                        ")])],1),t._v(" "),r("hr",{staticClass:"my-4"}),t._v(" "),r("div",{staticClass:"text-center"},[r("p",{staticClass:"text-gray-500"},[t._v("\n                            "+t._s(t.$t("pages.branch.commit_info",{author:t.buildInfo.author,time:t.buildTime}))+"\n                            ("),r("a",{attrs:{href:"https://github.com/"+t.user+"/"+t.repo+"/commit/"+t.buildInfo.commit,target:"_blank"}},[t._v(t._s(t.buildInfo.commit.substr(0,7)))]),t._v("):\n                        ")]),t._v(" "),r("p",[t._v("\n                            "+t._s(t.buildInfo.message)+"\n                        ")])]),t._v(" "),r("hr",{staticClass:"my-4"}),t._v(" "),null!=t.dependencyInfo?r("div",{},[r("p",{staticClass:"font-bold text-lg"},[t._v("\n                            "+t._s(t.$t("pages.branch.requirement"))+"\n                        ")]),t._v(" "),r("table",{staticClass:"dependency-info"},t._l(t.dependencyInfo,(function(e,o){return r("tr",{key:o},[r("td",[t._v(t._s(o))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(e)}})])})),0)]):t._e()]):t._e()])],1)])],1)}),[],!1,null,"0790e325",null);e.default=component.exports;installComponents(component,{FaIcon:r(350).default,BreadcrumbItem:r(341).default,Breadcrumb:r(355).default,ListGroupItem:r(364).default,BuildStatus:r(356).default,ListGroup:r(365).default,Card:r(351).default,BuildIcon:r(380).default,AButton:r(381).default})}}]);