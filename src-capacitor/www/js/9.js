(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"30f7":function(e,a,i){"use strict";i.d(a,"a",(function(){return d}));var t=i("7424"),o=i("7cf4"),n=i("18d6");let s,r,l=n["a"].getItem("pisco-afilweb");const d={departments:async()=>{let e={"Content-Type":"application/json"},a={subdominio:l.subdomain};return await t["a"].get(o["a"].apiDepartamento+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},cities:async e=>{const a={"Content-Type":"application/json"};let i={codDepartamento:e,subdominio:l.subdomain};return await t["a"].get(o["a"].apiDepartamento+"cities/",{params:i,headers:a}).then((e=>e)).catch((e=>e.response))},paymentMethods:async()=>{let e={"Content-Type":"application/json"},a={subdominio:l.subdomain};return await t["a"].get(o["a"].apiFormaPago+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},paymentTypes:async()=>{console.log("llego a cargar tipos pagos");let e={"Content-Type":"application/json"},a={subdominio:l.subdomain};return await t["a"].get(o["a"].apiTipoPago+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},cash:async()=>{let e={"Content-Type":"application/json"},a={subdominio:l.subdomain};return await t["a"].get(o["a"].apiCaja+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},novelty:async()=>{let e={"Content-Type":"application/json"},a={subdominio:l.subdomain};return await t["a"].get(o["a"].apiNovelty+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},serviceadicional:async()=>{let e={"Content-Type":"application/json"},a={subdominio:l.subdomain};return await t["a"].get(o["a"].apiServiceadicional+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},titularesBeneficiarios:async()=>{let e={"Content-Type":"application/json"};s=n["a"].getItem("identificacionTitular"),r=n["a"].getItem("contratoTitular");let a={subdominio:l.subdomain,identificaciontitular:s,idcontrato:r};return await t["a"].get(o["a"].apiTitularesBeneficiarios+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))}}},"82a3":function(e,a,i){"use strict";i.r(a);var t=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"q-pa-md full-width row justify-center content-center"},[i("div",{staticStyle:{"min-width":"400px","max-width":"700px",padding:"0 20px"}},[i("q-table",{attrs:{title:"Servicios Adicionales","rows-per-page-label":"Items",separator:"cell",data:e.dataTable,columns:e.columns,"visible-columns":e.viewColumns,"row-key":"dataTable.id","rows-per-page-options":e.pagination,loading:e.loadingTable},scopedSlots:e._u([e.isMobile?null:{key:"top-right",fn:function(){return[i("q-btn",{attrs:{icon:"add",label:"Agregar Nuevo",color:"primary"},on:{click:e.addItem}})]},proxy:!0},{key:"header-cell-actions",fn:function(a){return[i("q-th",{attrs:{props:a}},[i("q-icon",{attrs:{name:"view_headline",size:"1.5em"}}),e._v("\n          "+e._s(a.col.label)+"\n        ")],1)]}},{key:"body-cell-actions",fn:function(a){return[i("q-td",{staticStyle:{width:"50px"},attrs:{props:a}},[i("q-btn",{attrs:{dense:"",round:"",flat:"",color:"positive",icon:"edit"},on:{click:function(i){return e.editItem(a)}}})],1)]}},{key:"body-cell-estado",fn:function(a){return[i("q-td",{attrs:{props:a}},[e._v("\n          "+e._s(e._f("FilterState")(a.row.estado))+"\n        ")])]}},{key:"no-data",fn:function(){return[i("div",{staticClass:"full-width row flex-center q-gutter-sm"},[i("span",[e._v(" No hay datos . . . crea el primer registro! ")])])]},proxy:!0}],null,!0)})],1),e.isMobile?i("div",{staticClass:"column items-center",staticStyle:{"padding-bottom":"0px"}},[i("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,50]}},[i("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:e.addItem}})],1)],1):e._e()])},o=[],n=i("7424"),s=i("7cf4"),r=i("18d6"),l=i("c1df"),d=i.n(l);let c,p,u,h=r["a"].getItem("pisco-afilweb");const m={list:async()=>{let e={"Content-Type":"application/json"};console.log("llego alistar",c,p),c=r["a"].getItem("identificacionTitular"),p=r["a"].getItem("contratoTitular");let a={subdominio:h.subdomain,identificaciontitular:c,idcontrato:p};return await n["a"].get(s["a"].apiContractServicios+"list/",{params:a,headers:e}).then((e=>(console.log("los servicios son",e),e))).catch((e=>e.response))},create:async e=>{let a={"Content-Type":"application/json"};p=r["a"].getItem("contratoTitular"),u=r["a"].getItem("UsuarioLogueado");let i={idNovedad:e.idNovedad||0,idContrato:p,fechanovedad:d()(e.fechanovedad).format(),postfechadodia:e.postfechadodia||0,aplicada:e.aplicada||0,fechan:e.fechan||"1999-01-01",usuario:u||"",idcobrador:e.idcobrador||"",modulo:e.modulo||"",transac:e.transac||0,fechaprogramada:e.fechaprogramada||"1999-01-01",posicionx:e.posicionx||"",posiciony:e.posiciony||"",titular:e.titular||"",observaciones:e.observaciones||"",idalterna:e.idalterna||0,subdominio:h.subdomain};return await n["a"].post(s["a"].apiContractServicios+"create/",i,{headers:a}).then((e=>e)).catch((e=>e.response))},edit:async(e,a)=>{let i={"Content-Type":"application/json"};console.log("actualizar novedad",e),p=r["a"].getItem("contratoTitular"),u=r["a"].getItem("UsuarioLogueado");let t={idNovedadContrato:a.idNovedadContrato,idNovedad:a.idNovedad||0,idContrato:p,fechanovedad:d()(a.fechanovedad).format(),postfechadodia:a.postfechadodia||0,aplicada:a.aplicada||0,fechan:a.fechan||"1999-01-01",usuario:u||"",idcobrador:a.idcobrador||"",modulo:a.modulo||"",transac:a.transac||0,fechaprogramada:a.fechaprogramada||"1999-01-01",posicionx:a.posicionx||"",posiciony:a.posiciony||"",titular:a.titular||"",observaciones:a.observaciones||"",idalterna:a.idalterna||0,subdominio:h.subdomain};return await n["a"].put(s["a"].apiContractServicios+"update/",t,{headers:i}).then((e=>e)).catch((e=>e.response))},get:async e=>{const a={"Content-Type":"application/json"};let i={idServiciosAdicionales:e,subdominio:h.subdomain};return await n["a"].get(s["a"].apiContractServicios+"get/",{params:i,headers:a}).then((e=>e)).catch((e=>e.response))}};var f=i("4f24"),v=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[i("q-card",{staticClass:"q-dialog-plugin body-cards"},[i("q-card-section",[i("q-form",{ref:"form_modal"},[i("q-select",{attrs:{filled:"",options:e.serviciosadicionales,"option-value":"idsa","option-label":"descripcion",label:"* Servicio","emit-value":"","map-options":"",rules:e.selRules},on:{input:function(a){e.loadValorServicio(a)}},model:{value:e.idsa,callback:function(a){e.idsa=a},expression:"idsa"}}),i("q-input",{attrs:{type:"number",filled:"",label:"* Valor","lazy-rules":"",rules:e.selRules,counter:""},model:{value:e.valor,callback:function(a){e.valor=a},expression:"valor"}}),i("q-input",{attrs:{filled:"","option-value":"fecha",label:"Fecha ",clearable:"",disable:""},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[i("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[i("q-date",{attrs:{"option-value":"fecha",options:e.optionDatePicker,mask:"YYYY-MM-DD"},model:{value:e.fecha,callback:function(a){e.fecha=a},expression:"fecha"}},[i("div",{staticClass:"row items-center justify-end"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cerrar",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.fecha,callback:function(a){e.fecha=a},expression:"fecha"}}),i("br"),i("q-select",{attrs:{filled:"",options:e.vendedores,label:"* Vendedor","option-value":"idPersona","option-label":function(e){return e.nombre1+" "+e.apellido1},"emit-value":"","map-options":"",rules:e.selRules},model:{value:e.idasesor,callback:function(a){e.idasesor=a},expression:"idasesor"}}),i("q-select",{attrs:{filled:"",options:e.titularesBenefi,label:"* Beneficiario","option-value":"identificacion","option-label":function(e){return e.nombre1+" "+e.nombre2+" "+e.apellido1+" "+e.apellido2},"emit-value":"","map-options":"",rules:e.selRules},model:{value:e.idpersonaBenefi,callback:function(a){e.idpersonaBenefi=a},expression:"idpersonaBenefi"}})],1)],1),i("q-card-actions",{attrs:{align:"center"}},[i("q-btn",{attrs:{color:"primary",label:e.textAction},on:{click:e.onOKClick}}),i("q-btn",{attrs:{color:"primary",flat:"",label:"Cancelar"},on:{click:e.onCancelClick}})],1)],1)],1)},b=[],g=(i("ddb0"),i("30f7"));let y,w=r["a"].getItem("pisco-afilweb");const C={list:async()=>{let e={"Content-Type":"application/json"};y=r["a"].getItem("contratoTitular");let a={subdominio:w.subdomain,idcontrato:y};return await n["a"].get(s["a"].apiServiceadicional+"list/",{params:a,headers:e}).then((e=>e)).catch((e=>e.response))},get:async e=>{const a={"Content-Type":"application/json"};let i={idServiciosAdicionales:e,subdominio:w.subdomain};return await n["a"].get(s["a"].apiServiceadicional+"get/",{params:i,headers:a}).then((e=>e)).catch((e=>e.response))}};var q=i("df2a");let F;F=r["a"].getItem("identificacionTitular");var T={name:"ModalNoveltyContract",data(){return{idca:0,idcontrato:"",idsadicional:0,valor:0,usuario:"",fecha:d()().format("YYYY-MM-DD").toString(),servicioadicional:"",valoranterior:0,fecharetiro:d()().format("YYYY-MM-DD").toString(),idasesor:"01V",idpersonaBenefi:F,serviciosadicionales:[],vendedores:[],titularesBenefi:[],idsa:"",textRules:[e=>e&&e.length>0||"Campo Obligatorio (*)",e=>e.length<=50||"Máximo 50 carácteres"],selRules:[e=>!!e||"Campo Obligatorio"],numberRules:[e=>!isNaN(parseFloat(e))&&e.length>=0||"Campo Obligatorio (*)"],contrato:{vendedor:{}}}},props:{valueField1:{type:Number,required:!0},valueField2:{type:String,required:!0},valueField3:{type:Number,required:!0},valueField4:{type:Number,required:!0},valueField5:{type:String,required:!0},valueField6:{type:String,required:!0},valueField7:{type:String,required:!0},valueField8:{type:Number,required:!0},valueField9:{type:String,required:!0},valueField10:{type:String,required:!0},textAction:{type:String,required:!0}},created(){this.loadData(),0!=this.valueField1&&(this.idca=this.valueField1),this.idcontrato=this.valueField2,0!=this.valueField3&&(this.idsa=this.valueField3),0!=this.valueField4&&(this.valor=this.valueField4),this.idcousuariontrato=this.valueField5,0!=this.valueField6&&"1999-01-01T00:00:00"!=this.valueField6&&(this.fecha=d()(this.valueField6).format("YYYY-MM-DD")),""!=this.valueField7?this.idpersonaBenefi=this.valueField7:(console.log("idtitular",F),this.idpersonaBenefi=F),0!=this.valueField8&&(this.valoranterior=this.valueField8),0!=this.valueField9&&"1999-01-01T00:00:00"!=this.valueField9?this.fecharetiro=d()(this.valueField9).format("YYYY-MM-DD"):this.fecharetiro="",console.log("asesor",this.valueField10),""!=this.valueField10?this.idasesor=this.valueField10:this.idasesor="01V"},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},optionDatePicker(e){return e>=d()().format("YYYY/MM/DD").toString()},async loadData(){this.$q.loading.show({message:"<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"}),await Promise.all([g["a"].serviceadicional(),q["a"].list("VENDEDOR"),g["a"].titularesBeneficiarios()]).then((e=>{console.log(e),this.serviciosadicionales=e[0].data,this.vendedores=e[1].data,this.titularesBenefi=e[2].data})).catch((e=>{console.log({err:e}),this.serviciosadicionales=[],this.vendedores=[],this.titularesBenefi=[]})),this.$q.loading.hide()},async loadValorServicio(e){console.log("llego loadValorServicio"),await C.get(e).then((e=>{console.log(e),200===(null===e||void 0===e?void 0:e.status)&&(this.valor=e.data.valor,console.log("el listado del servicio es ",e.data))}))},onOKClick(){this.$refs.form_modal.validate().then((e=>{e&&(console.log("xxx#11"),this.$emit("ok",{idca:this.idca,idcontrato:this.idcontrato,idsadicional:this.idsadicional,valor:this.valor,usuario:this.usuario,fecha:this.fecha,idpersona:this.idpersonaBenefi,valoranterior:this.valoranterior,fecharetiro:this.fecharetiro,idasesor:this.idasesor}),this.hide())}))},onCancelClick(){this.hide()}}},S=T,x=i("2877"),D=i("24e8"),k=i("f09f"),I=i("a370"),Y=i("0378"),A=i("ddd8"),M=i("27f9"),j=i("0016"),N=i("7cbe"),B=i("52ee"),E=i("9c40"),P=i("4b7e"),Q=i("7f67"),_=i("eebe"),R=i.n(_),O=Object(x["a"])(S,v,b,!1,null,null,null),$=O.exports;let V;R()(O,"components",{QDialog:D["a"],QCard:k["a"],QCardSection:I["a"],QForm:Y["a"],QSelect:A["a"],QInput:M["a"],QIcon:j["a"],QPopupProxy:N["a"],QDate:B["a"],QBtn:E["a"],QCardActions:P["a"]}),R()(O,"directives",{ClosePopup:Q["a"]});var z={name:"ModalContractAdicional",data(){return{loadingTable:!1,pagination:[5,10,0],viewColumns:["actions","servicioadicional","valor","idpersona","usuario","fecha","valoranterior","fecharetiro","asesor"],columns:[{name:"actions",label:"",field:"",align:"center",icon:"delete"},{name:"servicioadicional",required:!1,label:"Servicio Adicional",field:"servicioadicional",sortable:!0,align:"left"},{name:"valor",required:!1,label:"Valor",field:"valor",sortable:!0,align:"left"},{name:"idpersona",required:!1,label:"Identifiacion",field:"idpersona",sortable:!0,align:"left"},{name:"usuario",required:!1,label:"Usuario",field:"usuario",sortable:!0,align:"left"},{name:"fecha",required:!1,label:"Fecha",field:"fecha",sortable:!0,align:"left"},{name:"valoranterior",required:!1,label:"Valor Anterior",field:"valoranterior",sortable:!0,align:"left"},{name:"fecharetiro",required:!1,label:"Fecha Retiro",field:"fecharetiro",sortable:!0,align:"left"},{name:"asesor",required:!1,label:"Asesor",field:"asesor",sortable:!0,align:"left"}],dataTable:[],fabAction:!1}},beforeMount(){this.loadData()},methods:{editItem(e){this.fabAction=!1,this.saveOrEditItem(e.row)},addItem(){this.fabAction=!0,this.saveOrEditItem("")},saveOrEditItem(e){this.$q.dialog({component:$,valueField1:this.fabAction?0:e.idca,valueField2:this.fabAction?"":e.idcontrato,valueField3:this.fabAction?0:e.idsadicional,valueField4:this.fabAction?0:e.valor,valueField5:this.fabAction?"":e.usuario,valueField6:this.fabAction?"":e.fecha,valueField7:this.fabAction?"":e.idpersona,valueField8:this.fabAction?0:e.valoranterior,valueField9:this.fabAction?"":e.fecharetiro,valueField10:this.fabAction?"":e.idasesor,parent:this,textAction:this.fabAction?"Guardar":"Modificar"}).onOk((a=>{this.fabAction?this.addRegister(a):this.editRegister(a,e.id)})).onCancel((()=>{})).onDismiss((()=>{}))},async addRegister(e){await m.create(e).then((e=>{console.log(e),200===(null===e||void 0===e?void 0:e.status)?(f["a"].triggerPositive("Registro almacenado correctamente"),this.loadData()):f["a"].triggerNegative("El registro no pudo ser almacenado")}))},async editRegister(e,a){console.log("actu servicio",e,a),await m.edit(a,e).then((e=>{console.log(e),200===(null===e||void 0===e?void 0:e.status)?(f["a"].triggerPositive("Registro modificado correctamente"),this.loadData()):f["a"].triggerNegative("El registro no pudo ser modificado")}))},async loadData(){this.loadingTable=!0,V=r["a"].getItem("contratoTitular"),console.log("sin servicio ",V),null==V?(localStorage.setItem("buscarServicio","Si"),this.$router.push({path:"/search"})):(this.loadingTable=!0,localStorage.setItem("buscarServicio","No"),await m.list().then((e=>{if(200===(null===e||void 0===e?void 0:e.status)){for(let a in e.data)e.data[a].fecha=d()(e.data[a].fecha).format("YYYY-MMM-DD");this.dataTable=e.data}}))),this.loadingTable=!1}},computed:{isMobile:{get(){return this.$store.state.platform_mobile.isMobile}}}},U=z,H=i("eaac"),J=i("357e"),K=i("db86"),L=i("de5e"),G=Object(x["a"])(U,t,o,!1,null,null,null);a["default"]=G.exports;R()(G,"components",{QTable:H["a"],QBtn:E["a"],QTh:J["a"],QIcon:j["a"],QTd:K["a"],QPageSticky:L["a"]})},df2a:function(e,a,i){"use strict";i.d(a,"a",(function(){return r}));var t=i("7424"),o=i("7cf4"),n=i("18d6");let s=n["a"].getItem("pisco-afilweb");const r={list:async e=>{let a={"Content-Type":"application/json"},i={tipoEmpleado:e,subdominio:s.subdomain};return await t["a"].get(o["a"].apiEmpleado+"list/",{params:i,headers:a}).then((e=>e)).catch((e=>e.response))},create:async e=>{let a={"Content-Type":"application/json"},i={idPersona:e.idPersona,nombre1:e.nombre1,nombre2:e.nombre2||"",apellido1:e.apellido1,apellido2:e.apellido2||"",telefono1:e.telefono1,telefono2:e.telefono02||"",tipoEmpleado:e.tipoEmpleado,subdominio:s.subdomain};return await t["a"].post(o["a"].apiEmpleado+"create/",i,{headers:a}).then((e=>e)).catch((e=>e.response))},edit:async(e,a)=>{let i={"Content-Type":"application/json"},n={id:e,idPersona:a.idPersona,nombre1:a.nombre1,nombre2:a.nombre2||"",apellido1:a.apellido1,apellido2:a.apellido2||"",telefono1:a.telefono1,telefono2:a.telefono2||"",tipoEmpleado:a.tipoEmpleado,estado:a.estado?0:1,subdominio:s.subdomain};return await t["a"].put(o["a"].apiEmpleado+"update/",n,{headers:i}).then((e=>e)).catch((e=>e.response))}}}}]);