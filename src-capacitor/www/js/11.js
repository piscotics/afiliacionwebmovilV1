(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"30f7":function(a,e,t){"use strict";t.d(e,"a",(function(){return c}));var o=t("7424"),i=t("7cf4"),s=t("18d6");let l,n,r=s["a"].getItem("pisco-afilweb");const c={departments:async()=>{let a={"Content-Type":"application/json"},e={subdominio:r.subdomain};return await o["a"].get(i["a"].apiDepartamento+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},cities:async a=>{const e={"Content-Type":"application/json"};let t={codDepartamento:a,subdominio:r.subdomain};return await o["a"].get(i["a"].apiDepartamento+"cities/",{params:t,headers:e}).then((a=>a)).catch((a=>a.response))},paymentMethods:async()=>{let a={"Content-Type":"application/json"},e={subdominio:r.subdomain};return await o["a"].get(i["a"].apiFormaPago+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},paymentTypes:async()=>{console.log("llego a cargar tipos pagos");let a={"Content-Type":"application/json"},e={subdominio:r.subdomain};return await o["a"].get(i["a"].apiTipoPago+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},cash:async()=>{let a={"Content-Type":"application/json"},e={subdominio:r.subdomain};return await o["a"].get(i["a"].apiCaja+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},novelty:async()=>{let a={"Content-Type":"application/json"},e={subdominio:r.subdomain};return await o["a"].get(i["a"].apiNovelty+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},serviceadicional:async()=>{let a={"Content-Type":"application/json"},e={subdominio:r.subdomain};return await o["a"].get(i["a"].apiServiceadicional+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},titularesBeneficiarios:async()=>{let a={"Content-Type":"application/json"};l=s["a"].getItem("identificacionTitular"),n=s["a"].getItem("contratoTitular");let e={subdominio:r.subdomain,identificaciontitular:l,idcontrato:n};return await o["a"].get(i["a"].apiTitularesBeneficiarios+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))}}},b0ae:function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"q-pa-md full-width row justify-center content-center"},[t("div",{staticStyle:{"min-width":"400px","max-width":"700px",padding:"0 20px"}},[t("q-table",{attrs:{title:"Pagos","rows-per-page-label":"Items",separator:"cell",data:a.dataTable,columns:a.columns,"visible-columns":a.viewColumns,"row-key":"dataTable.id","rows-per-page-options":a.pagination,loading:a.loadingTable},scopedSlots:a._u([a.isMobile?null:{key:"top-right",fn:function(){return[t("q-btn",{attrs:{icon:"add",label:"Agregar Nuevo",color:"primary"},on:{click:a.addItem}})]},proxy:!0},{key:"header-cell-actions",fn:function(e){return[t("q-th",{attrs:{props:e}},[t("q-icon",{attrs:{name:"view_headline",size:"1.5em"}}),a._v("\n          "+a._s(e.col.label)+"\n        ")],1)]}},{key:"body-cell-actions",fn:function(e){return[t("q-td",{staticStyle:{width:"50px"},attrs:{props:e}},[t("q-btn",{attrs:{dense:"",round:"",flat:"",color:"positive",icon:"edit"},on:{click:function(t){return a.editItem(e)}}})],1)]}},{key:"body-cell-anulado",fn:function(e){return[t("q-td",{attrs:{props:e}},[a._v("\n          "+a._s(a._f("FilterState")(e.row.anulado))+"\n        ")])]}},{key:"no-data",fn:function(){return[t("div",{staticClass:"full-width row flex-center q-gutter-sm"},[t("span",[a._v(" No hay datos . . . crea el primer registro! ")])])]},proxy:!0}],null,!0)})],1),a.isMobile?t("div",{staticClass:"column items-center",staticStyle:{"padding-bottom":"0px"}},[t("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,50]}},[t("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:a.addItem}})],1)],1):a._e()])},i=[],s=t("7424"),l=t("7cf4"),n=t("18d6"),r=t("c1df"),c=t.n(r);let d,u,p=n["a"].getItem("pisco-afilweb");const h={list:async()=>{let a={"Content-Type":"application/json"};d=n["a"].getItem("identificacionTitular"),u=n["a"].getItem("contratoTitular"),console.log("los pagos son",d,u);let e={subdominio:p.subdomain,identificacion:d,idcontrato:u};return await s["a"].get(l["a"].apiPagos+"list/",{params:e,headers:a}).then((a=>(console.log("los pagos son",a),a))).catch((a=>a.response))},create:async a=>{console.log("el pago a crear es",JSON.stringify(a));const e={"Content-Type":"application/json"};let t={nrorecibo:a.nrorecibo||"",fecha:c()(a.fecha).format(),valor:a.valor,descuento:a.descuento,anulado:!!a.anulado,idcobrador:a.idcobrador,cobrador:a.cobrador,observaciones:a.observaciones,cuotadesde:c()().format(),cuotahasta:c()().format(),nrofactura:a.nrofactura,idcaja:a.idcaja,caja:a.caja,idtipopago:a.idtipopago,tipopago:a.tipopago,identificaciontitular:d,contrato:u,usuario:a.usuario,nota1:a.nota1,nota2:a.nota2,pagohasta:c()().format(),subdominio:p.subdomain};return console.log("el pago a guardar es",JSON.stringify(t)),await s["a"].post(l["a"].apiPagos+"create/",t,{headers:e}).then((a=>a)).catch((a=>a.response))},edit:async(a,e)=>{console.log("el pago a editar es",JSON.stringify(e));let t={"Content-Type":"application/json"},o={nrorecibo:e.nrorecibo,fecha:c()(e.fecha).format("YYYY-MM-DD"),valor:e.valor,descuento:e.descuento,anulado:!!e.anulado,idcobrador:e.idcobrador,cobrador:e.cobrador,observaciones:e.observaciones,cuotadesde:c()().format(),cuotahasta:c()().format(),nrofactura:e.nrofactura,idcaja:e.idcaja,caja:e.caja,idtipopago:e.idtipopago,tipopago:e.tipopago,identificaciontitular:d,contrato:u,usuario:e.usuario,nota1:e.nota1,nota2:e.nota2,pagohasta:c()().format(),subdominio:p.subdomain};return console.log("el pago es",JSON.stringify(o)),await s["a"].put(l["a"].apiPagos+"update/",o,{headers:t}).then((a=>(console.log("la respuesta del pago es",a),a))).catch((a=>(console.log({err:a}),a.response)))}};var b=t("4f24"),m=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-dialog",{ref:"dialog",on:{hide:a.onDialogHide}},[t("q-card",{staticClass:"q-dialog-plugin body-cards"},[t("q-card-section",[t("q-form",{ref:"form_modal"},[t("q-input",{attrs:{type:"text",filled:"",label:"N. Recibo","lazy-rules":"",disable:"",counter:""},model:{value:a.nrorecibo,callback:function(e){a.nrorecibo=e},expression:"nrorecibo"}}),t("q-input",{attrs:{filled:"","option-value":"fecha",label:"Fecha",clearable:""},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{"option-value":"fecha",options:a.optionDatePicker,mask:"YYYY-MM-DD"},model:{value:a.fecha,callback:function(e){a.fecha=e},expression:"fecha"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cerrar",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:a.fecha,callback:function(e){a.fecha=e},expression:"fecha"}}),t("br"),t("q-input",{attrs:{type:"number",filled:"",label:"Valor","lazy-rules":"",rules:a.selRules,counter:""},model:{value:a.valor,callback:function(e){a.valor=e},expression:"valor"}}),t("q-input",{attrs:{type:"number",filled:"",label:"Descuento","lazy-rules":"",counter:""},model:{value:a.descuento,callback:function(e){a.descuento=e},expression:"descuento"}}),t("q-select",{attrs:{filled:"",options:a.cobradores,"option-value":"idPersona","option-label":function(a){return a.nombre1+" "+a.apellido1},label:"* Cobrador","emit-value":"","map-options":"",rules:a.selRules},model:{value:a.idcobrador,callback:function(e){a.idcobrador=e},expression:"idcobrador"}}),t("q-input",{attrs:{filled:"",disable:"",label:"Cuota Desde",clearable:""},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{options:a.optionDatePicker,mask:"YYYY-MM-DD"},model:{value:a.cuotadesde,callback:function(e){a.cuotadesde=e},expression:"cuotadesde"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cerrar",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:a.cuotadesde,callback:function(e){a.cuotadesde=e},expression:"cuotadesde"}}),t("br"),t("q-input",{attrs:{filled:"",disable:"",label:"Cuota Hasta",clearable:""},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{options:a.optionDatePicker,mask:"YYYY-MM-DD"},model:{value:a.cuotahasta,callback:function(e){a.cuotahasta=e},expression:"cuotahasta"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cerrar",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:a.cuotahasta,callback:function(e){a.cuotahasta=e},expression:"cuotahasta"}}),t("br"),t("q-input",{attrs:{type:"text",filled:"",label:"N. Factura","lazy-rules":"",counter:""},model:{value:a.nrofactura,callback:function(e){a.nrofactura=e},expression:"nrofactura"}}),t("q-select",{attrs:{filled:"",options:a.cajas,"option-value":"idCaja","option-label":"caja",label:"* Caja","emit-value":"","map-options":"",rules:a.selRules},model:{value:a.idcaja,callback:function(e){a.idcaja=e},expression:"idcaja"}}),t("q-select",{attrs:{filled:"",options:a.tipopagos,"option-value":"idTipoPago","option-label":"tipoPago",label:"* Tipo Pago","emit-value":"","map-options":"",rules:a.selRules},model:{value:a.idtipopago,callback:function(e){a.idtipopago=e},expression:"idtipopago"}}),t("q-input",{attrs:{type:"text",filled:"",label:"Observaciones","lazy-rules":"",counter:""},model:{value:a.observaciones,callback:function(e){a.observaciones=e},expression:"observaciones"}}),t("q-toggle",{attrs:{"checked-icon":"check",color:"red","unchecked-icon":"clear",value:a.anulado,label:"Anulado "+a.anuladoText},model:{value:a.anulado,callback:function(e){a.anulado=e},expression:"anulado"}})],1)],1),t("q-card-actions",{attrs:{align:"center"}},[t("q-btn",{attrs:{color:"primary",label:a.textAction},on:{click:a.onOKClick}}),""!=a.nrorecibo?t("q-btn",{attrs:{color:"primary",label:"Imprimir"},on:{click:a.imprimirRecibo}}):a._e(),t("q-btn",{attrs:{color:"primary",flat:"",label:"Cancelar"},on:{click:a.onCancelClick}})],1)],1)],1)},f=[],g=(t("ddb0"),t("30f7")),v=t("df2a");let y;var q={name:"ModalPayments",data(){return{nrorecibo:"",valor:0,descuento:0,fecha:c()().format("YYYY-MM-DD").toString(),cuotadesde:"",cuotahasta:"",anulado:!1,anuladoText:"No",cobradores:[],cajas:[],nrofactura:"",observaciones:"",idcaja:"",idtipopago:"1",tipopagos:[],idcobrador:"01C",textRules:[a=>a&&a.length>0||"Campo Obligatorio (*)",a=>a.length<=50||"Máximo 50 carácteres"],selRules:[a=>!!a||"Campo Obligatorio"],numberRules:[a=>!isNaN(parseFloat(a))&&a.length>=0||"Campo Obligatorio (*)"]}},props:{valueField1:{type:String,required:!0},valueField2:{type:String,required:!0},valueField3:{type:Number,required:!0},valueField4:{type:Number,required:!1},valueField5:{type:Boolean,required:!0},valueField6:{type:String,required:!0},valueField7:{type:String,required:!1},valueField8:{type:String,required:!0},valueField9:{type:String,required:!0},valueField10:{type:String,required:!1},valueField11:{type:Number,required:!0},valueField12:{type:Number,required:!0},valueField13:{type:String,required:!0},valueField14:{type:String,required:!0},textAction:{type:String,required:!0}},created(){this.loadData(),y=n["a"].getItem("cuotaTitular"),console.log("la cuota es",this.valueField6),this.nrorecibo=this.valueField1,0!=this.valueField2&&(this.fecha=c()(this.valueField2).format("YYYY-MM-DD")),0!=this.valueField3?this.valor=this.valueField3:this.valor=y,this.descuento=this.valueField4,this.anulado=this.valueField5,""!=this.valueField6?(console.log("xxx1"),this.idcobrador=this.valueField6):console.log("xxx2"),this.observaciones=this.valueField7,this.cuotadesde=c()(this.valueField8).format("YYYY-MM-DD"),this.cuotahasta=c()(this.valueField9).format("YYYY-MM-DD"),this.nrofactura=this.valueField10,0!=this.valueField11&&(this.idcaja=this.valueField11),console.log("el tipo pago es llego es",this.valueField12),0!=this.valueField12&&(console.log("xxx3"),this.idtipopago=this.valueField12.toString()),this.identificaciontitular=this.valueField13,this.contrato=this.valueField14},methods:{show(){this.loadData(),this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},imprimirRecibo(){},optionDatePicker(a){return a>="1900/01/01"&&a<=c()().format("YYYY/MM/DD").toString()},onDialogHide(){this.$emit("hide")},async loadData(){this.$q.loading.show({message:"<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"}),await Promise.all([g["a"].paymentTypes(),g["a"].cash(),v["a"].list("COBRADOR")]).then((a=>{console.log(a),this.tipopagos=a[0].data,this.cajas=a[1].data,this.cobradores=a[2].data})).catch((a=>{console.log({err:a}),this.tipopagos=[],this.cajas=[],this.cobradores=[]})),this.$q.loading.hide()},onOKClick(){this.$refs.form_modal.validate().then((a=>{a&&(console.log("success",a),this.$emit("ok",{nrorecibo:this.nrorecibo,fecha:c()(this.fecha).format("YYYY-MM-DD"),valor:this.valor,descuento:this.descuento,anulado:this.anulado,idcobrador:this.idcobrador,cobrador:"",cuotadesde:c()(this.cuotadesde).format("YYYY-MM-DD"),cuotahasta:c()(this.cuotahasta).format("YYYY-MM-DD"),nrofactura:this.nrofactura,idcaja:this.idcaja,caja:"",idtipopago:this.idtipopago,tipopago:"",identificaciontitular:this.identificaciontitular,contrato:this.contrato,observaciones:this.observaciones,usuario:"",nota1:"",nota2:""}),this.hide())}))},onCancelClick(){this.hide()}},watch:{anulado(){this.anuladoText=this.anulado?"Si":"No"}}},Y=q,x=t("2877"),w=t("24e8"),D=t("f09f"),F=t("a370"),C=t("0378"),k=t("27f9"),j=t("0016"),M=t("7cbe"),T=t("52ee"),P=t("9c40"),S=t("ddd8"),A=t("9564"),I=t("4b7e"),N=t("7f67"),_=t("eebe"),R=t.n(_),O=Object(x["a"])(Y,m,f,!1,null,null,null),Q=O.exports;let E,$;R()(O,"components",{QDialog:w["a"],QCard:D["a"],QCardSection:F["a"],QForm:C["a"],QInput:k["a"],QIcon:j["a"],QPopupProxy:M["a"],QDate:T["a"],QBtn:P["a"],QSelect:S["a"],QToggle:A["a"],QCardActions:I["a"]}),R()(O,"directives",{ClosePopup:N["a"]});var B={name:"Payments",data(){return{loadingTable:!1,pagination:[5,10,0],viewColumns:["actions","nrorecibo","fecha","cuotadesde","cuotahasta","valor","anulado"],columns:[{name:"actions",label:"",field:"",align:"center",icon:"delete"},{name:"nrorecibo",required:!1,label:"No. Recibo",field:"nrorecibo",sortable:!0,align:"left"},{name:"fecha",required:!1,label:"Fecha Pago",field:"fecha",sortable:!0,align:"left"},{name:"cuotadesde",required:!1,label:"Cuota Desde",field:"cuotadesde",sortable:!0,align:"left"},{name:"cuotahasta",required:!1,label:"Cuota Hasta",field:"cuotahasta",sortable:!0,align:"left"},{name:"valor",required:!1,label:"Valor",field:"valor",sortable:!0,align:"right"},{name:"estadopago",required:!1,label:"Anulado",field:"estadopago",sortable:!0,align:"left"}],dataTable:[],fabAction:!1}},beforeMount(){console.log("sin pagos "),this.loadData()},methods:{editItem(a){this.fabAction=!1,this.saveOrEditItem(a.row)},addItem(){this.fabAction=!0,this.saveOrEditItem("")},saveOrEditItem(a){console.log("los datos delpago son ",a.idtipopago),this.$q.dialog({component:Q,valueField1:this.fabAction?"":a.nrorecibo,valueField2:this.fabAction?"":a.fecha,valueField3:this.fabAction?0:a.valor,valueField4:this.fabAction?0:a.descuento,valueField5:!this.fabAction&&Boolean(a.anulado),valueField6:this.fabAction?"":a.idcobrador,valueField7:this.fabAction?"":a.observaciones,valueField8:this.fabAction?"":a.cuotadesde,valueField9:this.fabAction?"":a.cuotahasta,valueField10:this.fabAction?"":a.nrofactura,valueField11:this.fabAction?0:a.idcaja,valueField12:this.fabAction?0:a.idtipopago,valueField13:this.fabAction?"":a.identificaciontitular,valueField14:this.fabAction?"":a.contrato,parent:this,textAction:this.fabAction?"Guardar":"Modificar"}).onOk((e=>{this.fabAction?this.addRegister(e):this.editRegister(e,a.id)})).onCancel((()=>{})).onDismiss((()=>{}))},async addRegister(a){console.log("los datos del pago son",a),await h.create(a).then((a=>{console.log(a),200===(null===a||void 0===a?void 0:a.status)?(b["a"].triggerPositive("Registro almacenado correctamente"),this.loadData()):b["a"].triggerNegative("El registro no pudo ser almacenado")}))},async editRegister(a,e){console.log("los datos del a editar pago son",a),await h.edit(e,a).then((a=>{console.log(a),200===(null===a||void 0===a?void 0:a.status)?(b["a"].triggerPositive("Registro modificado correctamente"),this.loadData()):b["a"].triggerNegative("El registro no pudo ser modificado")}))},async loadData(){E=n["a"].getItem("identificacionTitular"),$=n["a"].getItem("contratoTitular"),console.log("sin pagos ",E,$),null==E&&null==$?(localStorage.setItem("buscarPagos","Si"),this.$router.push({path:"/search"})):(this.loadingTable=!0,localStorage.setItem("buscarPagos","No"),await h.list().then((a=>{if(200===(null===a||void 0===a?void 0:a.status)){for(let e in a.data)a.data[e].cuotadesde=c()(a.data[e].cuotadesde).format("YYYY-MMM-DD"),a.data[e].cuotahasta=c()(a.data[e].cuotahasta).format("YYYY-MMM-DD"),a.data[e].fecha=c()(a.data[e].fecha).format("YYYY-MMM-DD"),console.log("pagos",a.data[e].cuotadesde);this.dataTable=a.data}})),this.loadingTable=!1)}},computed:{isMobile:{get(){return this.$store.state.platform_mobile.isMobile}}}},z=B,J=t("eaac"),H=t("357e"),K=t("db86"),V=t("de5e"),G=Object(x["a"])(z,o,i,!1,null,null,null);e["default"]=G.exports;R()(G,"components",{QTable:J["a"],QBtn:P["a"],QTh:H["a"],QIcon:j["a"],QTd:K["a"],QPageSticky:V["a"]})},df2a:function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));var o=t("7424"),i=t("7cf4"),s=t("18d6");let l=s["a"].getItem("pisco-afilweb");const n={list:async a=>{let e={"Content-Type":"application/json"},t={tipoEmpleado:a,subdominio:l.subdomain};return await o["a"].get(i["a"].apiEmpleado+"list/",{params:t,headers:e}).then((a=>a)).catch((a=>a.response))},create:async a=>{let e={"Content-Type":"application/json"},t={idPersona:a.idPersona,nombre1:a.nombre1,nombre2:a.nombre2||"",apellido1:a.apellido1,apellido2:a.apellido2||"",telefono1:a.telefono1,telefono2:a.telefono02||"",tipoEmpleado:a.tipoEmpleado,subdominio:l.subdomain};return await o["a"].post(i["a"].apiEmpleado+"create/",t,{headers:e}).then((a=>a)).catch((a=>a.response))},edit:async(a,e)=>{let t={"Content-Type":"application/json"},s={id:a,idPersona:e.idPersona,nombre1:e.nombre1,nombre2:e.nombre2||"",apellido1:e.apellido1,apellido2:e.apellido2||"",telefono1:e.telefono1,telefono2:e.telefono2||"",tipoEmpleado:e.tipoEmpleado,estado:e.estado?0:1,subdominio:l.subdomain};return await o["a"].put(i["a"].apiEmpleado+"update/",s,{headers:t}).then((a=>a)).catch((a=>a.response))}}}}]);