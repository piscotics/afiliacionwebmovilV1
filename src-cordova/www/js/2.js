(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2f8c":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("7424"),n=a("7cf4"),s=a("18d6");let o=s["a"].getItem("pisco-afilweb");const c={login:async t=>{let e={"Content-Type":"application/json"},a={username:t.username,password:t.password,subdominio:o.subdomain};return await i["a"].post(n["a"].apiLogin,a,{headers:e}).then((t=>t)).catch((t=>(console.log({err:t}),t.response)))},business:async()=>{let t={"Content-Type":"application/json"},e={subdominio:o.subdomain};return await i["a"].get(n["a"].apiEmpresa+"get",{params:e,headers:t}).then((t=>t)).catch((t=>t.response))}}},3008:function(t,e,a){},"7d26":function(t,e,a){"use strict";a("3008")},"8b24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("q-card",{staticClass:"home-card"},[a("img",{attrs:{src:"https://piscotics.com/wp-content/uploads/2020/06/O7MF5N0-scaled.jpg"}}),a("q-list",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"business"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.infoEmpresa.empresa))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.infoEmpresa.nitEmpresa))])],1)],1),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"red",name:"phone"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.infoEmpresa.telefono1||"Sin número telefónico"))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.infoEmpresa.telefono2))])],1)],1),t.infoEmpresa.direccion?a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"cyan",name:"map"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.infoEmpresa.direccion))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(1==t.infoEmpresa.multiAfiliacion?"Multiafiliación Activa":"Sin Multiafiliación"))])],1)],1):t._e()],1)],1)],1)},n=[],s=a("2f8c"),o={name:"Home",data(){return{infoEmpresa:{}}},beforeMount(){this.loadData()},methods:{async loadData(){s["a"].business().then((t=>{200===(null===t||void 0===t?void 0:t.status)&&(this.infoEmpresa=t.data,this.$store.commit("data_company/setDataCompany",t.data))}))}}},c=o,r=(a("7d26"),a("2877")),m=a("9989"),l=a("f09f"),p=a("1c1c"),u=a("66e5"),d=a("4074"),f=a("0016"),b=a("0170"),q=a("eebe"),h=a.n(q),_=Object(r["a"])(c,i,n,!1,null,"ef1db71e",null);e["default"]=_.exports;h()(_,"components",{QPage:m["a"],QCard:l["a"],QList:p["a"],QItem:u["a"],QItemSection:d["a"],QIcon:f["a"],QItemLabel:b["a"]})}}]);