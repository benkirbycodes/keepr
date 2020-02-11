(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Keepr")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1):t._e(),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"vaults"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"vaults"}}},[t._v("Vaults")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l);c.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout(),this.$store.dispatch("resetBearer"),this.$router.push({name:"home"})}}},p=u,d=a("2877"),m=Object(d["a"])(p,o,i,!1,null,null,null),v=m.exports,h=a("335d"),b={name:"App",async beforeCreate(){await Object(h["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},f=b,g=Object(d["a"])(f,r,n,!1,null,null,null),_=g.exports,w=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[a("div",{staticClass:"row p-3"},[a("h1",[t._v("Keepr")]),a("keep")],1)])},C=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep card-columns mx-auto"},t._l(t.keeps,(function(e){return a("div",{key:e.id,staticClass:"card mx-auto"},[a("img",{staticClass:"card-img-top",attrs:{src:e.img,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("div",{staticClass:"d-flex justify-content-between"},[a("p",[t._v("K: "+t._s(e.keeps))]),a("p",[t._v("S: "+t._s(e.shares))]),a("p",[t._v("V: "+t._s(e.views))])]),a("div",{staticClass:"btn-group-sm d-flex justify-content-between",attrs:{role:"group"}},[a("button",{staticClass:"btn-lg btn-secondary",on:{click:function(a){return t.goToKeepDetail(e.id)}}},[t._v("View")])])])])})),0)},K=[],$={name:"keep",data(){return{}},mounted(){this.$store.dispatch("getPublicKeeps")},methods:{goToKeepDetail(t){this.$router.push({name:"keep-detail",params:{id:t}})}},computed:{keeps(){return this.$store.state.publicKeeps}}},V=$,x=(a("fa82"),Object(d["a"])(V,k,K,!1,null,null,null)),j=x.exports,P={name:"home",mounted(){},computed:{user(){return this.$store.state.user}},methods:{logout(){this.$store.dispatch("logout")}},components:{keep:j}},O=P,T=Object(d["a"])(O,y,C,!1,null,null,null),I=T.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 p-3"},[a("h1",[t._v("Create A Keep")]),a("form",{on:{submit:t.createKeep}},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],attrs:{name:"name",type:"text",placeholder:"Name..."},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}}),a("br"),a("label",{attrs:{for:"desc"}},[t._v("Description")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],attrs:{name:"desc",type:"text",placeholder:"Description..."},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}}),a("br"),a("label",{attrs:{for:"url"}},[t._v("Image Url")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],attrs:{name:"url",type:"text",placeholder:"Img Url..."},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}}),a("br"),a("button",[t._v("Create")])])]),a("div",{staticClass:"col-6 p-3"},[a("h1",[t._v("Create A Vault")]),a("form",{on:{submit:t.createVault}},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],attrs:{name:"name",type:"text",placeholder:"Name..."},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}}),a("br"),a("label",{attrs:{for:"desc"}},[t._v("Description")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],attrs:{name:"desc",type:"text",placeholder:"Description..."},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}}),a("br"),a("button",[t._v("Create")])])])])])},E=[],S={name:"dashboard",mounted(){},data(){return{newKeep:{name:"",img:"",description:"",isPrivate:!1,views:0,shares:0,keeps:0},newVault:{name:"",description:""}}},methods:{createKeep(){let t={...this.newKeep};this.$store.dispatch("createKeep",t),this.newKeep={name:"",img:"",description:"",isPrivate:!1,views:0,shares:0,keeps:0},this.$router.push("/")},createVault(){let t={...this.newVault};this.$store.dispatch("createVault",t),this.newVault={name:"",description:""},this.$router.push("/vaults")}},computed:{}},N=S,A=Object(d["a"])(N,B,E,!1,null,null,null),D=A.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vaults container-fluid"},[a("div",{staticClass:"row"},[t._m(0),t._l(t.vaults,(function(e){return a("div",{key:e.id,staticClass:"col-12"},[t._v(" "+t._s(e.name)+" "),a("a",{staticClass:"fa fa-arrow-circle-right",on:{click:function(a){return t.goToVault(e.id)}}}),a("a",{staticClass:"fa fa-times",on:{click:function(a){return t.deleteVault(e.id)}}})])}))],2)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("h1",[t._v("My Vaults")])])}],U={name:"vaults",mounted(){this.$store.dispatch("getVaults")},methods:{goToVault(t){this.$router.push({name:"vault",params:{id:t}})},deleteVault(t){confirm("Are You Sure You Want To Delete This Vault?")&&this.$store.dispatch("deleteVault",t)}},computed:{vaults(){return this.$store.state.vaults}}},Y=U,F=Object(d["a"])(Y,R,M,!1,null,null,null),L=F.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault"},[a("div",{staticClass:"card-columns mx-auto"},[a("h1",[t._v(t._s(t.vault.name))]),t._l(t.keeps,(function(e){return a("div",{key:e.id,staticClass:"card mx-auto"},[a("img",{staticClass:"card-img-top",attrs:{src:e.img,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("div",{staticClass:"d-flex justify-content-between"},[a("p",[t._v("K: "+t._s(e.keeps))]),a("p",[t._v("S: "+t._s(e.shares))]),a("p",[t._v("V: "+t._s(e.views))])]),a("div",{staticClass:"btn-group-sm d-flex justify-content-between",attrs:{role:"group"}},[a("button",{staticClass:"btn-sm btn-secondary",attrs:{type:"button"},on:{click:function(a){return t.removeKeepFromVault(e.id)}}},[t._v("Remove")]),a("button",{staticClass:"btn-sm btn-secondary",attrs:{type:"button"}},[t._v("Share")]),a("button",{staticClass:"btn-sm btn-secondary",attrs:{type:"button"}},[t._v("View")])])])])}))],2)])},z=[],J={name:"vault",mounted(){this.$store.dispatch("getKeepsByVaultId",this.$route.params.id),this.$store.dispatch("getVaultById",this.$route.params.id)},methods:{removeKeepFromVault(t){let e=this.$route.params.id;confirm("Are You Sure You Want To Remove This Keep?")&&this.$store.dispatch("deleteVaultKeep",{vaultId:e,keepId:t})}},computed:{keeps(){return this.$store.state.keepsPerVault},vault(){return this.$store.state.activeVault}}},q=J,G=Object(d["a"])(q,W,z,!1,null,null,null),H=G.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep-detail col-6 mx-auto"},[a("div",{staticClass:"card mx-auto"},[a("img",{staticClass:"card-img-top",attrs:{src:t.keep.img,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.keep.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.keep.description))]),a("div",{staticClass:"d-flex justify-content-between"},[a("p",[t._v("K: "+t._s(t.keep.keeps))]),a("p",[t._v("S: "+t._s(t.keep.shares))]),a("p",[t._v("V: "+t._s(t.keep.views))])]),a("div",{staticClass:"btn-group-sm d-flex justify-content-between",attrs:{role:"group"}},[a("button",{staticClass:"btn-lg btn-secondary",attrs:{type:"button"}},[t._v("Share")]),a("button",{staticClass:"btn-lg btn-secondary",attrs:{type:"button"},on:{click:t.deleteKeep}},[t._v("Delete")]),a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Keep")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.vaults,(function(e){return a("a",{key:e.id,staticClass:"dropdown-item",on:{click:function(a){return t.addToVault(e.id)}}},[t._v(t._s(e.name))])})),0)])])])])])},X=[],Z={name:"keep-detail",mounted(){this.$store.dispatch("getKeepById",this.$route.params.id),this.$store.dispatch("getVaults"),this.updateViewCounter()},data(){return{activeKeep:this.$store.state.activeKeep}},methods:{addToVault(t){let e={keepId:this.$route.params.id,vaultId:t};this.$store.dispatch("createVaultKeep",e)},deleteKeep(){confirm("Are You Sure You Want To Delete This Keep?")&&this.$store.dispatch("deleteKeep",this.$route.params.id)}},computed:{keep(){return this.$store.state.activeKeep},vaults(){return this.$store.state.vaults}}},tt=Z,et=Object(d["a"])(tt,Q,X,!1,null,null,null),at=et.exports;s["a"].use(w["a"]);var st=new w["a"]({routes:[{path:"/",name:"home",component:I},{path:"/dashboard",name:"dashboard",component:D,beforeEnter:h["b"]},{path:"/vaults",name:"vaults",component:L,beforeEnter:h["b"]},{path:"/vault/:id",name:"vault",component:H,beforeEnter:h["b"]},{path:"/keep/:id",name:"keep-detail",component:at,beforeEnter:h["b"]}]}),rt=a("2f62");let nt=location.host.includes("localhost")?"https://localhost:5001/":"/";const ot=c.a.create({baseURL:nt+"api/",timeout:3e3,withCredentials:!0});let it=ot;var lt={actions:{async getPublicKeeps({commit:t,dispatch:e}){try{let e=await it.get("keeps");t("setResource",{resource:"publicKeeps",data:e.data})}catch(a){console.error(a)}},async getKeepById({commit:t,dispatch:e},a){try{let e=await it.get("keeps/"+a);t("setResource",{resource:"activeKeep",data:e.data})}catch(s){console.error(s)}},async createKeep({commit:t,dispatch:e},a){try{await it.post("keeps",a);e("getPublicKeeps")}catch(s){console.error(s)}},async editKeep({commit:t,dispatch:e},a){try{await it.put("keeps/"+a.id,a);e("getKeepById",a.id)}catch(s){console.error(s)}},async deleteKeep({commit:t,dispatch:e},a){try{await it.delete("keeps/"+a);e("getPublicKeeps")}catch(s){console.error(s)}}}},ct={actions:{async getVaults({commit:t,dispatch:e}){try{let e=await it.get("vaults");t("setResource",{resource:"vaults",data:e.data})}catch(a){console.error(a)}},async getVaultById({commit:t,dispatch:e},a){try{let e=await it.get("vaults/"+a);t("setResource",{resource:"activeVault",data:e.data})}catch(s){console.error(s)}},async createVault({commit:t,dispatch:e},a){try{await it.post("vaults",a);e("getVaults")}catch(s){console.error(s)}},async deleteVault({commit:t,dispatch:e},a){try{await it.delete("vaults/"+a);e("getVaults")}catch(s){console.error(s)}}}},ut={actions:{async getKeepsByVaultId({commit:t,dispatch:e},a){try{let e=await it.get("vaultkeeps/"+a+"/keeps");t("setResource",{resource:"keepsPerVault",data:e.data})}catch(s){console.error(s)}},async createVaultKeep({commit:t,dispatch:e},a){try{let t=await it.post("vaultkeeps",a);e("getKeepsByVaultId",t.data.id)}catch(s){console.error(s)}},async deleteVaultKeep({commit:t,dispatch:e},{vaultId:a,keepId:s}){try{await it.delete("vaultkeeps/"+a+"/keeps/"+s);e("getKeepsByVaultId",a)}catch(r){console.error(r)}}}};s["a"].use(rt["a"]);var pt=new rt["a"].Store({modules:{keepsModule:lt,vaultsModule:ct,vaultKeepsModule:ut},state:{publicKeeps:[],keepsPerVault:[],activeKeep:{},vaults:[],activeVault:{}},mutations:{setResource(t,e){t[e.resource]=e.data}},actions:{setBearer({},t){it.defaults.headers.Authorization=t},resetBearer(){it.defaults.headers.Authorization=""}}});const dt="benkirbycodes.auth0.com",mt="https://benkirbycodes-api.com",vt="elVnw8LFkDqF0ciWNFusNULTaKszAEwO";s["a"].use(h["a"],{domain:dt,clientId:vt,audience:mt,onRedirectCallback:t=>{st.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:st,store:pt,render:function(t){return t(_)}}).$mount("#app")},b871:function(t,e,a){},fa82:function(t,e,a){"use strict";var s=a("b871"),r=a.n(s);r.a}});