(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"58f0":function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var i=t("11ce"),o=t("8039"),l=t("caca");let n=l["a"].getItem("pisco-afilweb");const s={list:async()=>{let e={"Content-Type":"application/json"},a={subdominio:n.subdomain};return await i["a"].get(o["a"].apiPlan+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},create:async e=>{let a={"Content-Type":"application/json"},t={nombrePlan:e.name,valorBase:e.valorBase,valorAdicional:e.valorAdicional,estado:e.estado?0:1,subdominio:n.subdomain};return await i["a"].post(o["a"].apiPlan+"create/",t,{headers:a}).then((e=>e)).catch((e=>e.response))},edit:async(e,a)=>{let t={"Content-Type":"application/json"},l={id:e,nombrePlan:a.name,valorBase:a.valorBase,valorAdicional:a.valorAdicional,estado:a.estado?0:1,subdominio:n.subdomain};return await i["a"].put(o["a"].apiPlan+"update/",l,{headers:t}).then((e=>e)).catch((e=>e.response))},get:async e=>{const a={"Content-Type":"application/json"};let t={id:e,subdominio:n.subdomain};return await i["a"].get(o["a"].apiPlan+"get/",{params:t,headers:a}).then((e=>e)).catch((e=>e.response))}}},"9fd9":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"q-pa-md full-width row justify-center content-center"},[t("div",{staticStyle:{"min-width":"400px","max-width":"700px",padding:"0 20px"}},[t("q-table",{attrs:{title:"Planes","rows-per-page-label":"Items",separator:"cell",data:e.dataTable,columns:e.columns,"visible-columns":e.viewColumns,"row-key":"dataTable.id","rows-per-page-options":e.pagination,loading:e.loadingTable},scopedSlots:e._u([e.isMobile?null:{key:"top-right",fn:function(){return[t("q-btn",{attrs:{icon:"add",label:"Agregar Nuevo",color:"primary"},on:{click:e.addItem}})]},proxy:!0},{key:"header-cell-actions",fn:function(a){return[t("q-th",{attrs:{props:a}},[t("q-icon",{attrs:{name:"view_headline",size:"1.5em"}}),e._v("\n          "+e._s(a.col.label)+"\n        ")],1)]}},{key:"body-cell-actions",fn:function(a){return[t("q-td",{staticStyle:{width:"50px"},attrs:{props:a}},[t("q-btn",{attrs:{dense:"",round:"",flat:"",color:"positive",icon:"edit"},on:{click:function(t){return e.editItem(a)}}})],1)]}},{key:"body-cell-estado",fn:function(a){return[t("q-td",{attrs:{props:a}},[e._v("\n          "+e._s(e._f("FilterState")(a.row.estado))+"\n        ")])]}},{key:"no-data",fn:function(){return[t("div",{staticClass:"full-width row flex-center q-gutter-sm"},[t("span",[e._v(" No hay datos . . . crea el primer registro! ")])])]},proxy:!0}],null,!0)})],1),e.isMobile?t("div",{staticClass:"column items-center",staticStyle:{"padding-bottom":"0px"}},[t("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,50]}},[t("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:e.addItem}})],1)],1):e._e()])},o=[],l=(t("11ce"),t("8039"),t("58f0")),n=t("5bc2"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[t("q-card",{staticClass:"q-dialog-plugin body-cards"},[t("q-card-section",[t("q-form",{ref:"form_modal"},[t("q-input",{attrs:{type:"text",filled:"",label:"Nombre del Plan","lazy-rules":"",rules:e.textRules,counter:""},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),t("q-input",{attrs:{type:"number",filled:"",label:"Valor Base","lazy-rules":"",rules:e.numberRules,counter:""},model:{value:e.valorBase,callback:function(a){e.valorBase=a},expression:"valorBase"}}),t("q-input",{attrs:{type:"number",filled:"",label:"Valor Adicional","lazy-rules":"",rules:e.numberRules,counter:""},model:{value:e.valorAdicional,callback:function(a){e.valorAdicional=a},expression:"valorAdicional"}}),t("q-toggle",{attrs:{"checked-icon":"check",color:"red","unchecked-icon":"clear",value:e.estado,label:"Estado del plan "+e.estadoText},model:{value:e.estado,callback:function(a){e.estado=a},expression:"estado"}})],1)],1),t("q-card-actions",{attrs:{align:"center"}},[t("q-btn",{attrs:{color:"primary",label:e.textAction},on:{click:e.onOKClick}}),t("q-btn",{attrs:{color:"primary",flat:"",label:"Cancelar"},on:{click:e.onCancelClick}})],1)],1)],1)},r=[],d={name:"ModalPlans",data(){return{name:"",valorBase:0,valorAdicional:0,estado:!0,estadoText:"Activo",textRules:[e=>e&&e.length>0||"Campo Obligatorio (*)",e=>e.length<=50||"Máximo 50 carácteres"],numberRules:[e=>!isNaN(parseFloat(e))&&e.length>=0||"Campo Obligatorio (*)"]}},props:{valueField1:{type:String,required:!0},valueField2:{type:Number,required:!0},valueField3:{type:Number,required:!0},valueField4:{type:Boolean,required:!0},textAction:{type:String,required:!0}},created(){this.name=this.valueField1,this.valorBase=this.valueField2,this.valorAdicional=this.valueField3},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$refs.form_modal.validate().then((e=>{e&&(this.$emit("ok",{name:this.name,valorBase:this.valorBase,valorAdicional:this.valorAdicional,estado:this.estado}),this.hide())}))},onCancelClick(){this.hide()}},watch:{estado(){this.estadoText=this.estado?"Activo":" Inactivo"}}},c=d,u=t("a6c2"),m=t("ec6d"),p=t("5ce7"),b=t("7006"),h=t("3548"),v=t("a3be"),f=t("a184"),g=t("84df"),y=t("ef9c"),q=t("63c1"),A=t.n(q),w=Object(u["a"])(c,s,r,!1,null,null,null),k=w.exports;A()(w,"components",{QDialog:m["a"],QCard:p["a"],QCardSection:b["a"],QForm:h["a"],QInput:v["a"],QToggle:f["a"],QCardActions:g["a"],QBtn:y["a"]});var x={name:"Zones",data(){return{loadingTable:!1,pagination:[5,10,0],viewColumns:["actions","nombrePlan","estado","valorBase","valorAdicional"],columns:[{name:"actions",label:"",field:"",align:"center",icon:"delete"},{name:"id",required:!1,label:"id",field:"id",sortable:!1},{name:"nombrePlan",required:!1,label:"Nombre Plan",field:"nombrePlan",sortable:!0,align:"left"},{name:"estado",required:!1,label:"Estado",field:"estado",sortable:!0,align:"left"},{name:"valorBase",required:!1,label:"Valor Base",field:"valorBase",sortable:!0,align:"left"},{name:"valorAdicional",required:!1,label:"Valor Adicional",field:"valorAdicional",sortable:!0,align:"left"}],dataTable:[],fabAction:!1}},beforeMount(){this.loadData()},methods:{editItem(e){this.fabAction=!1,this.saveOrEditItem(e.row)},addItem(){this.fabAction=!0,this.saveOrEditItem("")},saveOrEditItem(e){this.$q.dialog({component:k,valueField1:this.fabAction?"":e.nombrePlan,valueField2:this.fabAction?0:e.valorBase,valueField3:this.fabAction?0:e.valorAdicional,valueField4:!this.fabAction&&!Boolean(e.estado),parent:this,textAction:this.fabAction?"Guardar":"Modificar"}).onOk((a=>{this.fabAction?this.addRegister(a):this.editRegister(a,e.id)})).onCancel((()=>{})).onDismiss((()=>{}))},async addRegister(e){await l["a"].create(e).then((e=>{console.log(e),200===(null===e||void 0===e?void 0:e.status)?(n["a"].triggerPositive("Registro almacenado correctamente"),this.loadData()):n["a"].triggerNegative("El registro no pudo ser almacenado")}))},async editRegister(e,a){await l["a"].edit(a,e).then((e=>{console.log(e),200===(null===e||void 0===e?void 0:e.status)?(n["a"].triggerPositive("Registro modificado correctamente"),this.loadData()):n["a"].triggerNegative("El registro no pudo ser modificado")}))},async loadData(){this.loadingTable=!0,await l["a"].list().then((e=>{200===(null===e||void 0===e?void 0:e.status)&&(this.dataTable=e.data)})),this.loadingTable=!1}},computed:{isMobile:{get(){return this.$store.state.platform_mobile.isMobile}}}},C=x,B=t("3846"),T=t("8e7e"),P=t("19dc"),_=t("7b08"),F=t("6d58"),Q=Object(u["a"])(C,i,o,!1,null,null,null);a["default"]=Q.exports;A()(Q,"components",{QTable:B["a"],QBtn:y["a"],QTh:T["a"],QIcon:P["a"],QTd:_["a"],QPageSticky:F["a"]})}}]);