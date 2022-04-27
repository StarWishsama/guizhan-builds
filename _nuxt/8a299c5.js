(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,6,8,9,11,12,15,16],{324:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("173259b0",content,!0,{sourceMap:!1})},325:function(t,e,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("be9d419e",content,!0,{sourceMap:!1})},326:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("0d387d86",content,!0,{sourceMap:!1})},327:function(t,e,r){"use strict";r.r(e);var n=r(323),o=r.n(n),c={name:"BreadcrumbItem",props:{to:{type:[String,Object],default:function(){}}},computed:{classes:function(){return{active:o.a.has(this.$attrs,"active")}},isLink:function(){return o.a.isString(this.to)&&""!==this.to||o.a.isObject(this.to)&&!o.a.isEmpty(this.to)}}},l=(r(329),r(43)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"breadcrumb-item",class:t.classes},[t.isLink?r("nuxt-link",t._b({attrs:{to:t.to}},"nuxt-link",t.$attrs,!1),[t._t("default")],2):t._t("default",null,null,t.$attrs)],2)}),[],!1,null,"f1bc17fe",null);e.default=component.exports},328:function(t,e,r){"use strict";var n=r(82),o=r.n(n);e.a={getAnnouncement:function(){return o.a.get("/announcement.md")},getRepos:function(){return o.a.get("/repos.json")},getBuilds:function(t){return o.a.get("/f/".concat(t,"/builds.json"))}}},329:function(t,e,r){"use strict";r(324)},330:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,'.breadcrumb-item[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity))}.breadcrumb-item[data-v-f1bc17fe]:not(:first-child){padding-left:0.5rem}.breadcrumb-item.active[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}@media (prefers-color-scheme: dark){.breadcrumb-item.active[data-v-f1bc17fe]{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}}.breadcrumb-item[data-v-f1bc17fe]:not(:first-child):before{content:"/";padding-right:0.25rem}',""]),n.locals={},t.exports=n},331:function(t,e,r){"use strict";r(325)},332:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".card[data-v-7cb9daae]{margin-left:0.5rem;margin-right:0.5rem;border-radius:1rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.25rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.card[data-v-7cb9daae]{margin-left:0px;margin-right:0px}}@media (prefers-color-scheme: dark){.card[data-v-7cb9daae]{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.card .card-title[data-v-7cb9daae]{margin-bottom:1rem;font-size:1.125rem;line-height:1.75rem;font-weight:700}",""]),n.locals={},t.exports=n},333:function(t,e,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("64db52dc",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r.r(e);r(127);var n=r(323),o=r.n(n),c={name:"FaIcon",props:{type:{type:String,default:"regular"},icon:{type:String,default:""}},computed:{iconClass:function(){var t=["fa-"+this.icon];switch(this.type){case"solid":t.push("fas");break;case"regular":t.push("far");break;case"light":t.push("fal");break;case"duotone":t.push("fad");break;case"brands":t.push("fab")}return o.a.join(t," ")}}},l=r(43),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"fa-icon",class:t.iconClass})}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,r){"use strict";r.r(e);var n={name:"Card",props:{title:{type:String,default:""}},computed:{hasTitle:function(){return""!==this.title||!!this.$slots.title}}},o=(r(331),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t.hasTitle?r("h2",{staticClass:"card-title"},[t._t("title",(function(){return[t._v("\n                "+t._s(t.title)+"\n            ")]}))],2):t._e()]),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,"7cb9daae",null);e.default=component.exports},338:function(t,e,r){"use strict";r(12),r(17),r(66),r(35),r(44);var n=r(323),o=r.n(n),c=r(328);e.a={loadRepos:function(t){return new Promise((function(e,r){o.a.isNil(t.$store.getters["repos/getRepos"])?c.a.getRepos().then((function(r){var n=[],o=[],c={};for(var l in r.data){var d;n.push(l),c[l]=r.data[l];var f=l.split("/")[0];null!==(d=c[l].options)&&void 0!==d&&d.hidden||"redirect"===c[l].type||(f in o?o[f]++:o[f]=1)}t.$store.commit("repos/setRepos",n),t.$store.commit("repos/setReposInfo",c),t.$store.commit("repos/setUsers",o),e()})):e()}))},getRepos:function(t){return t.$store.getters["repos/getRepos"]},getUsers:function(t){return t.$store.getters["repos/getUsers"]},getInfoByRepoStr:function(t){var e=t.split(":"),r=e[0].split("/");return{user:r[0],repo:r[1],branch:e[1]}},exists:function(t,e){var r=this,n=!1;return o.a.forEach(t,(function(t){var c=r.getInfoByRepoStr(t),l=c.user,d=c.repo,f=c.branch;return!o.a.isNil(e.user)&&e.user!==l||(!o.a.isNil(e.repo)&&e.repo!==d||(!o.a.isNil(e.branch)&&e.branch!==f||(n=!0,!1)))})),n},getRepoInfo:function(t,e){return t.$store.getters["repos/getReposInfo"][e]},getDir:function(t,e){var r,n=null===(r=this.getRepoInfo(t,e).options)||void 0===r?void 0:r.customDir;if(o.a.isNil(n)){var c=this.getInfoByRepoStr(e),l=c.user,d=c.repo,f=c.branch;return"".concat(l,"/").concat(d,"/").concat(f)}return n}}},339:function(t,e,r){"use strict";r(326)},340:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".breadcrumb-wrapper[data-v-6c55211c]{width:100%;padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem}.breadcrumb[data-v-6c55211c]{display:flex;list-style-type:none}",""]),n.locals={},t.exports=n},341:function(t,e,r){"use strict";r.r(e);var n={name:"Breadcrumb",props:{breadcrumbs:{type:Array,default:function(){return[]}}},computed:{}},o=(r(339),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"breadcrumb-wrapper"},[r("ol",{staticClass:"breadcrumb"},[t._t("default",(function(){return t._l(t.breadcrumbs,(function(e,n){return r("breadcrumb-item",{key:n},[t._v("\n                "+t._s(e.text)+"\n            ")])}))}))],2)])}),[],!1,null,"6c55211c",null);e.default=component.exports;installComponents(component,{BreadcrumbItem:r(327).default})},342:function(t,e,r){"use strict";r.r(e);var n={name:"BuildStatus",props:{dir:{type:String,default:""}},data:function(){return{imgSource:""}},computed:{source:function(){return"/f/"+this.dir+"/badge.svg"}},mounted:function(){this.imgSource=this.source},methods:{imageLoaded:function(){this.$el.classList.contains("isLoading")&&(this.$el.classList.contains("isLoaded")||this.$el.width<=1&&(this.imgSource="/images/default_badge.svg"))}}},o=r(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.imgSource,alt:"Build status"},on:{load:t.imageLoaded}})}),[],!1,null,null,null);e.default=component.exports},343:function(t,e,r){"use strict";r(333)},344:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".datatable[data-v-1dbc89b2]{overflow-x:auto;overflow-y:hidden;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.datatable[data-v-1dbc89b2]{border-radius:0.75rem}}.datatable table[data-v-1dbc89b2]{min-width:100%}.datatable table[data-v-1dbc89b2] > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity:1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}@media (prefers-color-scheme: dark){.datatable table[data-v-1dbc89b2] > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}}.datatable table thead[data-v-1dbc89b2]{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}@media (prefers-color-scheme: dark){.datatable table thead[data-v-1dbc89b2]{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}}.datatable table thead th[data-v-1dbc89b2]{white-space:nowrap;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:left;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media (min-width: 768px){.datatable table thead th[data-v-1dbc89b2]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.datatable table thead th[data-v-1dbc89b2]{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}}.datatable table tbody tr[data-v-1dbc89b2]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}@media (prefers-color-scheme: dark){.datatable table tbody tr[data-v-1dbc89b2]{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}}.datatable table tbody td[data-v-1dbc89b2]{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem}@media (min-width: 768px){.datatable table tbody td[data-v-1dbc89b2]{padding-left:1.5rem;padding-right:1.5rem}}",""]),n.locals={},t.exports=n},349:function(t,e,r){"use strict";r.r(e);var n={name:"DataTable",props:{fields:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{tableContent:function(){return this.data}}},o=(r(343),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"datatable"},[r("table",[r("thead",[r("tr",t._l(t.fields,(function(e){return r("th",{key:e.key,class:e.class,attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t(e.label))+"\n                ")])})),0)]),t._v(" "),r("tbody",t._l(t.tableContent,(function(e,n){return r("tr",{key:"row#"+n},t._l(t.fields,(function(n){return r("td",{key:n.key},[t._t("cell("+n.key+")",(function(){return[t._v("\n                        "+t._s(e[n.key])+"\n                    ")]}),{row:e,value:e[n.key]})],2)})),0)})),0)])])}),[],!1,null,"1dbc89b2",null);e.default=component.exports},352:function(t,e,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("e2d66bfc",content,!0,{sourceMap:!1})},354:function(t,e,r){"use strict";r(44);var n=r(360);n.marked.use({renderer:{link:function(t,title,text){return null===title?'<a href="'.concat(t,'" target="_blank">').concat(text,"</a>"):'<a href="'.concat(t,'" title="').concat(title,'" target="_blank">').concat(text,"</a>")}}}),e.a={render:function(source){return n.marked.parse(source)}}},355:function(t,e,r){"use strict";r(352)},356:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".tab-header[data-v-d344d2b4]{margin-bottom:1rem;display:flex;align-items:center}.tab-title[data-v-d344d2b4]{cursor:pointer;border-bottom-width:4px;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity));padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}.tab-title[data-v-d344d2b4]:hover{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}@media (prefers-color-scheme: dark){.tab-title[data-v-d344d2b4]{--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}}.tab-title.tab-title--active[data-v-d344d2b4]{--tw-border-opacity:1;border-bottom-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))}",""]),n.locals={},t.exports=n},361:function(t,e,r){var content=r(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("bc5e0130",content,!0,{sourceMap:!1})},364:function(t,e,r){"use strict";r.r(e);var n=r(323),o=r.n(n),c={name:"Tab",props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!1}},created:function(){o.a.has(this.$attrs,"active")&&this.$attrs.active&&(this.isActive=!0,delete this.$attrs.active)}},l=r(43),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("keep-alive",[t.isActive?r("div",{staticClass:"tab-panel"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,r){"use strict";r.r(e);r(12),r(35);var n=r(323),o=r.n(n),c={name:"Tabs",data:function(){return{tabs:[],activeTabIndex:0}},created:function(){this.tabs=this.$children},mounted:function(){var t=this,e=!1;o.a.forEach(this.tabs,(function(r,n){if(r.isActive)return t.selectTab(n),e=!0,!1})),e||this.selectTab(0)},methods:{selectTab:function(i){var t=this.activeTabIndex!==i;return this.activeTabIndex=i,this.tabs.forEach((function(t,e){t.isActive=e===i})),t},clickTab:function(i){this.selectTab(i)&&this.$emit("tabSelect",this.tabs[i])}}},l=(r(355),r(43)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tabs"},[r("ul",{staticClass:"tab-header"},t._l(t.tabs,(function(e,n){return r("li",{key:e.title,staticClass:"tab-title",class:{"tab-title--active":t.activeTabIndex===n},on:{click:function(e){return t.clickTab(n)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"d344d2b4",null);e.default=component.exports},369:function(t,e,r){"use strict";r(361)},370:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".announcement[data-v-8eb755c2]{font-weight:300}@media (prefers-color-scheme: dark){.announcement[data-v-8eb755c2]{--tw-text-opacity:1;color:rgb(243 244 246 / var(--tw-text-opacity))}}.announcement[data-v-8eb755c2] p{margin-bottom:1rem}",""]),n.locals={},t.exports=n},378:function(t,e,r){"use strict";r.r(e);var n=r(354),o=r(328),c=r(338),l={layout:"main",data:function(){return{announcement:"",selectedTab:"users",repos:null,users:null,usersFields:[{key:"name",label:"labels.user",sortable:!0},{key:"amount",label:"labels.repos",sortable:!0}],reposFields:[{key:"repo",label:"labels.repo",sortable:!0},{key:"user",label:"labels.user"},{key:"branch",label:"labels.branch",headerClass:"",contentClass:""},{key:"status",label:"labels.status"}]}},head:function(){return{title:this.$t("title")}},computed:{listRepos:function(){var t=[];for(var e in this.repos){var r,n=this.repos[e],o=c.a.getInfoByRepoStr(n),l=c.a.getRepoInfo(this,n);o.dir=c.a.getDir(this,n),null!==(r=l.options)&&void 0!==r&&r.hidden||t.push(o)}return t},listUsers:function(){var t=[];for(var e in this.users)t.push({name:e,amount:this.users[e]});return t}},created:function(){"repos"===this.$route.query.tab&&(this.selectedTab="repos")},mounted:function(){var t=this;o.a.getAnnouncement(this).then((function(e){t.announcement=n.a.render(e.data)})).catch((function(){t.announcement="公告加载失败"})),c.a.loadRepos(this).then((function(){t.repos=c.a.getRepos(t),t.users=c.a.getUsers(t)}))},methods:{}},d=(r(369),r(43)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumb",{staticClass:"mt-2"},[r("breadcrumb-item",{attrs:{active:""}},[r("fa-icon",{attrs:{icon:"home","aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("nav.home"))+"\n        ")],1)],1),t._v(" "),r("div",{staticClass:"grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-12"},[r("div",{staticClass:"col-span-3 xl:col-span-3 m-4"},[r("card",{scopedSlots:t._u([{key:"title",fn:function(){return[r("fa-icon",{attrs:{icon:"bell"}}),t._v("\n                    "+t._s(t.$t("pages.home.announcement"))+"\n                ")]},proxy:!0}])},[t._v(" "),""===t.announcement?r("div",{staticClass:"flex justify-center items-center"},[r("div",{staticClass:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})]):r("div",{directives:[{name:"lazy-load",rawName:"v-lazy-load",value:t.announcement,expression:"announcement"}],staticClass:"announcement"})])],1),t._v(" "),r("div",{staticClass:"col-span-7 xl:col-span-9 m-4 lg:ml-0"},[r("card",[null===t.repos?r("div",{staticClass:"flex justify-center items-center"},[r("div",{staticClass:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})]):r("tabs",[r("tab",{key:"repos",attrs:{active:"repos"===t.selectedTab,title:t.$t("pages.home.tabs.repos.title")}},[r("data-table",{attrs:{fields:t.reposFields,data:t.listRepos},scopedSlots:t._u([{key:"cell(repo)",fn:function(data){return[r("nuxt-link",{attrs:{to:"/"+data.row.user+"/"+data.row.repo+"/"+data.row.branch}},[t._v("\n                                    "+t._s(data.value)+"\n                                ")])]}},{key:"cell(user)",fn:function(data){return[r("nuxt-link",{attrs:{to:"/"+data.row.user}},[t._v("\n                                    "+t._s(data.value)+"\n                                ")])]}},{key:"cell(status)",fn:function(data){return[r("build-status",{attrs:{dir:data.row.dir}})]}}])})],1),t._v(" "),r("tab",{key:"users",attrs:{active:"users"===t.selectedTab,title:t.$t("pages.home.tabs.users.title")}},[r("data-table",{attrs:{fields:t.usersFields,data:t.listUsers},scopedSlots:t._u([{key:"cell(name)",fn:function(data){return[r("nuxt-link",{attrs:{to:"/"+data.value}},[t._v("\n                                    "+t._s(data.value)+"\n                                ")])]}}])})],1)],1)],1)],1)])],1)}),[],!1,null,"8eb755c2",null);e.default=component.exports;installComponents(component,{FaIcon:r(336).default,BreadcrumbItem:r(327).default,Breadcrumb:r(341).default,Card:r(337).default,BuildStatus:r(342).default,DataTable:r(349).default,Tab:r(364).default,Tabs:r(365).default})}}]);