(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"823a":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a("11ce"),o=a("8039"),i=a("caca");let l;const n={login:async e=>{let t={"Content-Type":"application/json"};l=i["a"].getItem("pisco-afilweb"),console.log("el inice  es",i["a"].getItem("pisco-afilweb")),console.log("el dominio es",l.subdomain,e.username,e.password);let a={username:e.username,password:e.password,subdominio:l.subdomain};return console.log("api",a,l.server),await s["a"].post(o["a"].apiLogin,a,{headers:t}).then((e=>e)).catch((e=>(console.log({err:e}),e.response)))},business:async()=>{l=i["a"].getItem("pisco-afilweb");let e={"Content-Type":"application/json"},t={subdominio:l.subdomain};return await s["a"].get(o["a"].apiEmpresa+"get",{params:t,headers:e}).then((e=>e)).catch((e=>e.response))}}},b61b:function(e,t,a){e.exports=a.p+"img/pisco_afiliacion.png"},d106:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"full-width row justify-center items-end content-center"},[s("div",{staticClass:" q-pa-md",staticStyle:{width:"500px"}},[s("q-card",[s("q-card-section",{staticClass:"text-center"},[s("q-img",{staticStyle:{width:"250px"},attrs:{src:a("b61b")}})],1),s("q-card-section",[s("q-form",{ref:"form_login"},[s("q-input",{attrs:{filled:"",label:"Usuario","lazy-rules":"",rules:e.loginRules},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("q-input",{attrs:{type:"password",filled:"",label:"Contraseña","lazy-rules":"",rules:e.loginRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("div",{staticClass:"flex flex-center col-12 btn-estandar"},[s("q-btn",{staticClass:"col-6 btn-primary",attrs:{label:"Login",type:"button",rounded:"",disable:!e.btnLogin},on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}}),e.isMobile?s("q-btn",{staticClass:"btn-optional col-6",attrs:{label:"Configuración",type:"button",flat:"",to:"/config"}}):e._e(),s("div",{staticClass:"ion-text-center"},[s("a",{staticStyle:{color:"#fa4343","text-decoration":"underline","font-size":"small"},attrs:{href:"https://www.piscotics.com/privacy-policy/"}},[e._v("\n                  Política de Datos Personales\n              ")])])],1)],1)],1)],1)],1)])},o=[],i=a("11ce"),l=a("823a"),n=a("5bc2"),r=a("7338"),c=a.n(r),u={name:"login",data(){return{URLactual:"",url:"@/assets/img/pisco_afiliacion.png",btnLogin:!0,username:"",password:"",loginRules:[e=>e&&e.length>0||"Campo Obligatorio (*)"]}},beforeMount(){this.loadDataConfig(),console.log("paso aqui 5");var e=window.location;let t;if(this.isMobile)console.log("paso aqui 6"),t=this.$q.localStorage.getItem("pisco-afilweb"),console.log("paso aqui",t.server,t.server),null!=t&&(i["a"].baseURL=t.server,c.a.defaults.baseUrl=t.server);else{console.log("paso aqui 7");let a={server:"https://"+e.hostname+":9061",subdomain:e.hostname};(this.$q.localStorage.isEmpty=!1)?(this.$q.localStorage.remove("pisco-afilweb"),this.$q.localStorage.set("pisco-afilweb",a)):this.$q.localStorage.set("pisco-afilweb",a),c.a.defaults.baseUrl=this.server,t=this.$q.localStorage.getItem("pisco-afilweb")}console.log("axios",c.a.defaults.baseUrl),console.log("api",i["a"].baseURL),console.log("value",t)},methods:{loadDataConfig(){console.log("paso aqui 1"),localStorage.setItem("identificacionTitular",""),localStorage.setItem("contratoTitular","");var e=window.location;let t;if(this.isMobile)console.log("paso aqui 2"),t=this.$q.localStorage.getItem("pisco-afilweb"),console.log("paso aqui",t.server,t.server),null!=t&&(i["a"].baseURL=t.server,c.a.defaults.baseUrl=t.server);else{console.log("paso aqui 3");let a={server:"https://"+e.hostname+":9061",subdomain:e.hostname};(this.$q.localStorage.isEmpty=!1)?(this.$q.localStorage.remove("pisco-afilweb"),this.$q.localStorage.set("pisco-afilweb",a)):this.$q.localStorage.set("pisco-afilweb",a),c.a.defaults.baseUrl=this.server,t=this.$q.localStorage.getItem("pisco-afilweb")}null==t&&(this.btnLogin=!1),console.log("axios",c.a.defaults.baseUrl),console.log("api",i["a"].baseURL),console.log("value",t)},async login(){let e=!0;if(await this.$refs.form_login.validate().then((t=>{t||(e=!1)})),e){this.$q.loading.show({message:"<span class='text-orange text-weight-bold'>Consultando, por favor espere...</span>"});let e={username:this.username,password:this.password};await l["a"].login(e).then((e=>{200===(null===e||void 0===e?void 0:e.status)?(this.isAuthenticated=!0,this.user_logged=e.data,this.$router.push({path:"/home"}),localStorage.setItem("UsuarioLogueado",this.username),n["a"].triggerPositive(`Bienvenido, ${e.data.nombre} ${e.data.apellido}`)):n["a"].triggerNegative("Usuario incorrecto, no existe o no está configurado correctamente")})),this.$q.loading.hide()}}},computed:{isMobile:{get(){return this.$store.state.platform_mobile.isMobile},set(e){this.$store.commit("platform_mobile/setMobile",e)}},isAuthenticated:{get(){return this.$store.state.user_authenticated.isAuthenticated},set(e){this.$store.commit("user_authenticated/setAuthenticated",e)}},user_logged:{get(){return this.$store.state.user_authenticated.user_logged},set(e){this.$store.commit("user_authenticated/setUserLogged",e)}}}},p=u,g=a("a6c2"),d=a("5ce7"),m=a("7006"),h=a("0798"),b=a("3548"),f=a("a3be"),w=a("ef9c"),v=a("63c1"),q=a.n(v),$=Object(g["a"])(p,s,o,!1,null,null,null);t["default"]=$.exports;q()($,"components",{QCard:d["a"],QCardSection:m["a"],QImg:h["a"],QForm:b["a"],QInput:f["a"],QBtn:w["a"]})}}]);