(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1b69":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md full-width row justify-center content-center"},[a("div",{staticStyle:{width:"700px"}},[a("q-table",{attrs:{title:"Sucursales","rows-per-page-label":"Items",separator:"cell",data:e.dataTable,columns:e.columns,"visible-columns":e.viewColumns,"row-key":"dataTable.id","rows-per-page-options":e.pagination,loading:e.loadingTable},scopedSlots:e._u([e.isMobile?null:{key:"top-right",fn:function(){return[a("q-btn",{attrs:{icon:"add",label:"Agregar Nuevo",color:"primary"},on:{click:e.addItem}})]},proxy:!0},{key:"header-cell-actions",fn:function(t){return[a("q-th",{attrs:{props:t}},[a("q-icon",{attrs:{name:"view_headline",size:"1.5em"}}),e._v("\n          "+e._s(t.col.label)+"\n        ")],1)]}},{key:"body-cell-actions",fn:function(t){return[a("q-td",{staticStyle:{width:"50px"},attrs:{props:t}},[a("q-btn",{attrs:{dense:"",round:"",flat:"",color:"positive",icon:"edit"},on:{click:function(a){return e.editItem(t)}}})],1)]}},{key:"no-data",fn:function(){return[a("div",{staticClass:"full-width row flex-center q-gutter-sm"},[a("span",[e._v(" No hay datos . . . crea el primer registro! ")])])]},proxy:!0}],null,!0)})],1),e.isMobile?a("div",{staticClass:"column items-center",staticStyle:{"padding-bottom":"0px"}},[a("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,50]}},[a("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:e.addItem}})],1)],1):e._e()])},o=[],n=(a("7424"),a("7cf4"),a("d79e")),s=a("4f24"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[a("q-card",{staticClass:"q-dialog-plugin body-cards"},[a("q-card-section",[a("q-form",{ref:"form_modal"},[a("q-input",{attrs:{type:"text",filled:"",label:"Nombre de la sucursal","lazy-rules":"",rules:e.textRules,counter:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{color:"primary",label:e.textAction},on:{click:e.onOKClick}}),a("q-btn",{attrs:{color:"primary",flat:"",label:"Cancelar"},on:{click:e.onCancelClick}})],1)],1)],1)},r=[],c={name:"ModalOffices",data(){return{name:"",textRules:[e=>e&&e.length>0||"Campo Obligatorio (*)",e=>e.length<=20||"Máximo 20 carácteres"]}},props:{valueField:{type:String,required:!0},textAction:{type:String,required:!0}},created(){this.name=this.valueField},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$refs.form_modal.validate().then((e=>{e&&(this.$emit("ok",this.name),this.hide())}))},onCancelClick(){this.hide()}}},d=c,u=a("2877"),m=a("24e8"),p=a("f09f"),b=a("a370"),h=a("0378"),f=a("27f9"),g=a("4b7e"),v=a("9c40"),y=a("eebe"),w=a.n(y),q=Object(u["a"])(d,l,r,!1,null,null,null),k=q.exports;w()(q,"components",{QDialog:m["a"],QCard:p["a"],QCardSection:b["a"],QForm:h["a"],QInput:f["a"],QCardActions:g["a"],QBtn:v["a"]});var C={name:"Offices",data(){return{loadingTable:!1,pagination:[5,10,0],viewColumns:["actions","nombreSucursal"],columns:[{name:"actions",label:"",field:"",align:"center",icon:"delete"},{name:"id",required:!1,label:"id",field:"id",sortable:!1},{name:"nombreSucursal",required:!1,label:"Nombre Sucursal",field:"nombreSucursal",sortable:!0,align:"left"}],dataTable:[],fabAction:!1}},beforeMount(){this.loadData()},methods:{editItem(e){this.fabAction=!1,this.saveOrEditItem(e.row)},addItem(){this.fabAction=!0,this.saveOrEditItem("")},saveOrEditItem(e){this.$q.dialog({component:k,valueField:this.fabAction?"":e.nombreSucursal,parent:this,textAction:this.fabAction?"Guardar":"Modificar"}).onOk((t=>{this.fabAction?this.addRegister(t):this.editRegister(t,e.id)})).onCancel((()=>{})).onDismiss((()=>{}))},async addRegister(e){await n["a"].create(e).then((e=>{console.log(e),200===(null===e||void 0===e?void 0:e.status)?(s["a"].triggerPositive("Registro almacenado correctamente"),this.loadData()):s["a"].triggerNegative("El registro no pudo ser almacenado")}))},async editRegister(e,t){await n["a"].edit(t,e).then((e=>{console.log(e),200===(null===e||void 0===e?void 0:e.status)?(s["a"].triggerPositive("Registro modificado correctamente"),this.loadData()):s["a"].triggerNegative("El registro no pudo ser modificado")}))},async loadData(){this.loadingTable=!0,await n["a"].list().then((e=>{200===(null===e||void 0===e?void 0:e.status)&&(this.dataTable=e.data)})),this.loadingTable=!1}},computed:{isMobile:{get(){return this.$store.state.platform_mobile.isMobile}}}},S=C,x=a("eaac"),T=a("357e"),Q=a("0016"),_=a("db86"),I=a("de5e"),A=Object(u["a"])(S,i,o,!1,null,null,null);t["default"]=A.exports;w()(A,"components",{QTable:x["a"],QBtn:v["a"],QTh:T["a"],QIcon:Q["a"],QTd:_["a"],QPageSticky:I["a"]})},d79e:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("7424"),o=a("7cf4"),n=a("18d6");let s=n["a"].getItem("pisco-afilweb");const l={list:async()=>{let e={"Content-Type":"application/json"},t={subdominio:s.subdomain};return await i["a"].get(o["a"].apiSucursal+"list/",{params:t,headers:e}).then((e=>e)).catch((e=>e.response))},create:async e=>{let t={"Content-Type":"application/json"},a={nombreSucursal:e,subdominio:s.subdomain};return await i["a"].post(o["a"].apiSucursal+"create/",a,{headers:t}).then((e=>e)).catch((e=>e.response))},edit:async(e,t)=>{let a={"Content-Type":"application/json"},n={id:e,nombreSucursal:t,estado:0,subdominio:s.subdomain};return await i["a"].put(o["a"].apiSucursal+"update/",n,{headers:a}).then((e=>e)).catch((e=>e.response))}}}}]);