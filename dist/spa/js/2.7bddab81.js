(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"27ff":function(a,e,t){"use strict";t("fb72")},"30f7":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var o=t("7424"),s=t("7cf4"),i=t("18d6");let n=i["a"].getItem("pisco-afilweb");const l={departments:async()=>{let a={"Content-Type":"application/json"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiDepartamento+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},cities:async a=>{const e={"Content-Type":"application/json"};let t={codDepartamento:a,subdominio:n.subdomain};return await o["a"].get(s["a"].apiDepartamento+"cities/",{params:t,headers:e}).then((a=>a)).catch((a=>a.response))},paymentMethods:async()=>{let a={"Content-Type":"application/json"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiFormaPago+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},paymentTypes:async()=>{console.log("llego a cargar tipos pagos");let a={"Content-Type":"application/json"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiTipoPago+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},cash:async()=>{let a={"Content-Type":"application/json"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiCaja+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},novelty:async()=>{let a={"Content-Type":"application/json"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiNovelty+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))}}},"4e84":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var o=t("7424"),s=t("7cf4"),i=t("18d6");let n=i["a"].getItem("pisco-afilweb");const l={list:async()=>{let a={"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH, OPTIONS","Access-Control-Allow-Headers":"X-Requested-With, content-type, Authorization"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiZona+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},create:async a=>{let e={"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH, OPTIONS","Access-Control-Allow-Headers":"X-Requested-With, content-type, Authorization"},t={nombreZona:a,subdominio:n.subdomain};return await o["a"].post(s["a"].apiZona+"create/",t,{headers:e}).then((a=>a)).catch((a=>a.response))},edit:async(a,e)=>{let t={"Content-Type":"application/json"},i={id:a,nombreZona:e,subdominio:n.subdomain};return await o["a"].put(s["a"].apiZona+"update",i,{headers:t}).then((a=>a)).catch((a=>a.response))}}},6074:function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var o=t("7424"),s=t("7cf4"),i=t("18d6");let n=i["a"].getItem("pisco-afilweb");const l={list:async()=>{let a={"Content-Type":"application/json"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiPlan+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},create:async a=>{let e={"Content-Type":"application/json"},t={nombrePlan:a.name,valorBase:a.valorBase,valorAdicional:a.valorAdicional,estado:a.estado?0:1,subdominio:n.subdomain};return await o["a"].post(s["a"].apiPlan+"create/",t,{headers:e}).then((a=>a)).catch((a=>a.response))},edit:async(a,e)=>{let t={"Content-Type":"application/json"},i={id:a,nombrePlan:e.name,valorBase:e.valorBase,valorAdicional:e.valorAdicional,estado:e.estado?0:1,subdominio:n.subdomain};return await o["a"].put(s["a"].apiPlan+"update/",i,{headers:t}).then((a=>a)).catch((a=>a.response))},get:async a=>{const e={"Content-Type":"application/json"};let t={id:a,subdominio:n.subdomain};return await o["a"].get(s["a"].apiPlan+"get/",{params:t,headers:e}).then((a=>a)).catch((a=>a.response))}}},9757:function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"q-pa-md full-width row justify-center content-center"},[t("div",{staticClass:"search"},[t("q-card",{staticClass:"search-card"},[t("q-card-section",{staticClass:"row items-center justify-center"},[t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-input",{attrs:{filled:"",label:"Fecha Desde",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{options:a.optionDatePicker,mask:"YYYY-MM-DD"},model:{value:a.fechaAfiliaciondesde,callback:function(e){a.fechaAfiliaciondesde=e},expression:"fechaAfiliaciondesde"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cerrar",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:a.fechaAfiliaciondesde,callback:function(e){a.fechaAfiliaciondesde=e},expression:"fechaAfiliaciondesde"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-input",{attrs:{filled:"",label:"Fecha Hasta",readonly:""},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{options:a.optionDatePicker,mask:"YYYY-MM-DD"},model:{value:a.fechaAfiliacionhasta,callback:function(e){a.fechaAfiliacionhasta=e},expression:"fechaAfiliacionhasta"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cerrar",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:a.fechaAfiliacionhasta,callback:function(e){a.fechaAfiliacionhasta=e},expression:"fechaAfiliacionhasta"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.sucursales,label:"Sucursal","option-value":"nombreSucursal","option-label":"nombreSucursal"},model:{value:a.typesucursales,callback:function(e){a.typesucursales=e},expression:"typesucursales"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.zonas,label:"Zona","option-value":"nombreZona","option-label":"nombreZona"},model:{value:a.typezonas,callback:function(e){a.typezonas=e},expression:"typezonas"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.cobradores,"option-value":"idPersona","option-label":function(a){return a.nombre1+" "+a.apellido1},label:"Cobrador","emit-value":"","map-options":""},model:{value:a.contrato.cobrador.idPersona,callback:function(e){a.$set(a.contrato.cobrador,"idPersona",e)},expression:"contrato.cobrador.idPersona"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.vendedores,label:"Vendedor","option-value":"idPersona","option-label":function(a){return a.nombre1+" "+a.apellido1},"emit-value":"","map-options":""},model:{value:a.contrato.vendedor.idPersona,callback:function(e){a.$set(a.contrato.vendedor,"idPersona",e)},expression:"contrato.vendedor.idPersona"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.planes,"option-value":"nombrePlan","option-label":"nombrePlan",label:"Plan"},model:{value:a.typeplanes,callback:function(e){a.typeplanes=e},expression:"typeplanes"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.empresas,"option-value":"empresa","option-label":"empresa",label:"Empresa"},model:{value:a.typeempresas,callback:function(e){a.typeempresas=e},expression:"typeempresas"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.optTipoAfiliacion,label:"Tipo Afiliación"},model:{value:a.typetipoAfiliacion,callback:function(e){a.typetipoAfiliacion=e},expression:"typetipoAfiliacion"}})],1),t("div",{staticClass:"col-12 col-md-2 col-sm-12 search-select"},[t("q-select",{attrs:{filled:"",options:a.optEstado,label:"Estado"},model:{value:a.typeestado,callback:function(e){a.typeestado=e},expression:"typeestado"}})],1)]),t("q-card-actions",{attrs:{align:"center"}},[t("q-btn",{attrs:{label:"Buscar",color:"primary",loading:a.loading,disable:a.loading},on:{click:a.searchData}})],1)],1)],1),a.tipoBuscado?t("div",{staticStyle:{"min-width":"400px","max-width":"700px",padding:"10px 20px"}},[t("q-table",{attrs:{title:"Resultado de busqueda","rows-per-page-label":"Items",separator:"cell",data:a.dataTable,columns:a.columns,"visible-columns":a.viewColumns,"row-key":"dataTable.id","rows-per-page-options":a.pagination,loading:a.loadingTable},scopedSlots:a._u([{key:"header-cell-actions",fn:function(e){return[t("q-th",{attrs:{props:e}},[t("q-icon",{attrs:{name:"view_headline",size:"1.5em"}}),a._v("\n          "+a._s(e.col.label)+"\n        ")],1)]}},{key:"body-cell-actions",fn:function(e){return[t("q-td",{staticStyle:{width:"50px"},attrs:{props:e}},[t("q-btn",{attrs:{dense:"",round:"",flat:"",color:"positive",icon:"edit"},on:{click:function(t){return a.editItem(e)}}})],1)]}},{key:"body-cell-anulado",fn:function(e){return[t("q-td",{attrs:{props:e}},[a._v("\n          "+a._s(a._f("FilterState")(e.row.anulado))+"\n        ")])]}},{key:"no-data",fn:function(){return[t("div",{staticClass:"full-width row flex-center q-gutter-sm"},[t("span",[a._v(" Contratos Encontrados! ")])])]},proxy:!0}],null,!1,176998863)})],1):a._e()])},s=[],i=(t("ddb0"),t("7424")),n=t("7cf4"),l=t("46a2"),r=t("4f24"),c=t("18d6"),d=(t("30f7"),t("4e84")),p=t("c7a0"),u=t("d79e"),m=t("df2a"),f=t("6074"),b=t("c1df"),h=t.n(b);let g;const y={list:async(a,e,t,o,s,l,r,d,p,u)=>{g=c["a"].getItem("pisco-afilweb"),console.log("los datos que tengo",a,e,t,o,s,l,r,d,p,u);let m,f={"Content-Type":"application/json"};return void 0!=a&&""!=a?(console.log("entro en bfechaafiliaciondesde"),m={bfechaafiliaciondesde:a,bfechaafiliacionhasta:e,bsucursal:t,bcobrador:o,bvendedor:s,bzona:l,bplan:r,bempresa:d,btipoafiliacion:p,bestado:u,subdominio:g.subdomain}):(console.log("entro en bsucursal"),m={bfechaafiliaciondesde:null,bfechaafiliacionhasta:null,bsucursal:t,bcobrador:o,bvendedor:s,bzona:l,bplan:r,bempresa:d,btipoafiliacion:p,bestado:u,subdominio:g.subdomain}),console.log("los parametros son",m),await i["a"].get(n["a"].apiMultifiltro+"list",{params:m,headers:f}).then((a=>(console.log("los registros son",a),a))).catch((a=>a.response))}};var v={data(){return{optType:["NRO CONTRATO","IDENTIFICACION","NOMBRES","APELLIDOS"],selRules:[a=>!!a||"Debe seleccionar una opción"],type:"",fechaAfiliaciondesde:"",fechaAfiliacionhasta:"",typesucursales:"",typezonas:"",typecobradores:"",typevendedores:"",typeplanes:"",typeempresas:"",typetipoAfiliacion:"",typeestado:"",zonas:[],planes:[],optTipoAfiliacion:["INDIVIDUAL","EMPRESARIAL"],optEstado:["PREAFILIACION","APROBADO","ANULADO"],empresas:[],sucursales:[],cobradores:[],vendedores:[],tipoBuscado:!1,valueSearch:"",dialog:!1,loading:!1,loadingTable:!1,contrato:{formapago:{},plan:{},zona:{},sucursal:{},cobrador:{},vendedor:{},empresas:{}},pagination:[5,10,0],viewColumns:["actions","idContrato","identificacion","nombre1","nombre2","apellido1","apellido2","valorCuota","fechaAfiliacion","vigenciaDesde","vigenciaHasta","pagoHasta","estatus"],columns:[{name:"actions",label:"",field:"",align:"center",icon:"delete"},{name:"idContrato",required:!1,label:"NROCONTRATO",field:"idContrato",sortable:!0,align:"left"},{name:"identificacion",required:!1,label:"DOCUMENTO",field:"identificacion",sortable:!0,align:"left"},{name:"nombre1",required:!1,label:"1ER NOMBRE",field:"nombre1",sortable:!0,align:"left"},{name:"nombre2",required:!1,label:"2DO NOMBRE",field:"nombre2",sortable:!0,align:"left"},{name:"apellido1",required:!1,label:"1ER APELLIDO",field:"apellido1",sortable:!0,align:"left"},{name:"apellido2",required:!1,label:"2DO APELLIDO",field:"apellido2",sortable:!0,align:"left"},{name:"valorCuota",required:!1,label:"CUOTA",field:"valorCuota",sortable:!0,align:"right"},{name:"fechaAfiliacion",required:!1,label:"FECHA AFILIACION",field:"fechaAfiliacion",sortable:!0,align:"left"},{name:"vigenciaDesde",required:!1,label:"VIGENCIA DESDE",field:"vigenciaDesde",sortable:!0,align:"left"},{name:"vigenciaHasta",required:!1,label:"VIGENCIA HASTA",field:"vigenciaHasta",sortable:!0,align:"left"},{name:"pagoHasta",required:!1,label:"PAGO HASTA",field:"pagoHasta",sortable:!0,align:"left"},{name:"estatus",required:!1,label:"ESTADO",field:"estatus",sortable:!0,align:"left"}],dataTable:[],fabAction:!1}},mounted(){this.loadData()},methods:{optionDatePicker(a){return a>="1900/01/01"&&a<=h()().format("YYYY/MM/DD").toString()},editItem(a){this.fabAction=!1,console.log(a.row.idContrato),this.searchContract(a.row.idContrato,"NRO CONTRATO")},async loadData(){this.$q.loading.show({message:"<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"}),await Promise.all([d["a"].list(),u["a"].list(),m["a"].list("COBRADOR"),m["a"].list("VENDEDOR"),f["a"].list(),p["a"].list()]).then((a=>{console.log(a),this.zonas=a[0].data,this.sucursales=a[1].data,this.cobradores=a[2].data,this.vendedores=a[3].data,this.planes=a[4].data,this.empresas=a[5].data,console.log("las empresa son",this.empresas)})).catch((a=>{console.log({err:a}),this.vendedores=[],this.cobradores=[],this.sucursales=[],this.zonas=[],this.planes=[],this.empresas=[],r["a"].triggerNegative("No fue posible cargar los datos de parametrización")})),this.$q.loading.hide()},async searchContract(a,e){this.loading=!0,console.log("el tipo es",e.toString()),"NRO CONTRATO"==e.toString()||"IDENTIFICACION"==e.toString()?(console.log("entro por cto"),this.tipoBuscado=!1,await l["a"].get(a,e).then((t=>{200===(null===t||void 0===t?void 0:t.status)?(r["a"].triggerPositive("Registro encontrado!!!"),this.$router.push({path:"contract",query:{idcontract:a.toString(),tipobusqued:e.toString()}})):r["a"].triggerNegative("El Contrato no existe")}))):(console.log("entro por nombre"),this.loadingTable=!0,await l["a"].list(a,e).then((a=>{if(200===(null===a||void 0===a?void 0:a.status))if(console.log("encontro datos",a.data.length),a.data.length>=1){this.tipoBuscado=!0;for(let e in a.data)a.data[e].vigenciaDesde=h()(a.data[e].vigenciaDesde).format("YYYY-MMM-DD"),a.data[e].vigenciaHasta=h()(a.data[e].vigenciaHasta).format("YYYY-MMM-DD"),a.data[e].fechaAfiliacion=h()(a.data[e].fechaAfiliacion).format("YYYY-MMM-DD"),a.data[e].pagoHasta=h()(a.data[e].pagoHasta).format("YYYY-MMM-DD");this.dataTable=a.data,this.loadingTable=!1}else r["a"].triggerNegative("No Se Encontraron Datos");else r["a"].triggerNegative("No Se Encontraron Datos")})),this.loadingTable=!1),this.loading=!1},async searchMultifiltro(a,e,t,o,s,i,n,l,c,d){this.loading=!0,console.log("entro por filtro ",t),this.loadingTable=!0,await y.list(a,e,t,o,s,i,n,l,c,d).then((a=>{if(200===(null===a||void 0===a?void 0:a.status))if(console.log("encontro datos",a.data.length),a.data.length>=1){this.tipoBuscado=!0;for(let e in a.data)a.data[e].vigenciaDesde=h()(a.data[e].vigenciaDesde).format("YYYY-MMM-DD"),a.data[e].vigenciaHasta=h()(a.data[e].vigenciaHasta).format("YYYY-MMM-DD"),a.data[e].fechaAfiliacion=h()(a.data[e].fechaAfiliacion).format("YYYY-MMM-DD"),a.data[e].pagoHasta=h()(a.data[e].pagoHasta).format("YYYY-MMM-DD");this.dataTable=a.data,this.loadingTable=!1}else r["a"].triggerNegative("No Se Encontraron Datos");else r["a"].triggerNegative("No Se Encontraron Datos")})),this.loadingTable=!1,this.loading=!1},searchData(){console.log("los datos",this.fechaAfiliaciondesde,this.fechaAfiliacionhasta,this.typesucursales.nombreSucursal,this.contrato.cobrador.idPersona,this.contrato.vendedor.idPersona,this.typezonas.nombreZona,this.typeplanes.nombrePlan,this.typeempresas.empresa,this.typetipoAfiliacion,this.typeestado),this.searchMultifiltro(this.fechaAfiliaciondesde,this.fechaAfiliacionhasta,this.typesucursales.nombreSucursal,this.contrato.cobrador.idPersona,this.contrato.vendedor.idPersona,this.typezonas.nombreZona,this.typeplanes.nombrePlan,this.typeempresas.empresa,this.typetipoAfiliacion,this.typeestado)}},computed:{isMobile:{get(){return this.$store.state.platform_mobile.isMobile}}}},A=v,C=(t("27ff"),t("2877")),T=t("24e8"),w=t("f09f"),D=t("a370"),P=t("27f9"),E=t("0016"),q=t("7cbe"),O=t("52ee"),M=t("9c40"),Y=t("ddd8"),S=t("4b7e"),I=t("eaac"),N=t("357e"),x=t("db86"),k=t("7f67"),j=t("eebe"),R=t.n(j),H=Object(C["a"])(A,o,s,!1,null,"6de8630b",null);e["default"]=H.exports;R()(H,"components",{QDialog:T["a"],QCard:w["a"],QCardSection:D["a"],QInput:P["a"],QIcon:E["a"],QPopupProxy:q["a"],QDate:O["a"],QBtn:M["a"],QSelect:Y["a"],QCardActions:S["a"],QTable:I["a"],QTh:N["a"],QTd:x["a"]}),R()(H,"directives",{ClosePopup:k["a"]})},c7a0:function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var o=t("7424"),s=t("7cf4"),i=t("18d6");let n=i["a"].getItem("pisco-afilweb");const l={list:async()=>{let a={"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH, OPTIONS","Access-Control-Allow-Headers":"X-Requested-With, content-type, Authorization"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiEmpresas+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))}}},d79e:function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var o=t("7424"),s=t("7cf4"),i=t("18d6");let n=i["a"].getItem("pisco-afilweb");const l={list:async()=>{let a={"Content-Type":"application/json"},e={subdominio:n.subdomain};return await o["a"].get(s["a"].apiSucursal+"list/",{params:e,headers:a}).then((a=>a)).catch((a=>a.response))},create:async a=>{let e={"Content-Type":"application/json"},t={nombreSucursal:a,subdominio:n.subdomain};return await o["a"].post(s["a"].apiSucursal+"create/",t,{headers:e}).then((a=>a)).catch((a=>a.response))},edit:async(a,e)=>{let t={"Content-Type":"application/json"},i={id:a,nombreSucursal:e,estado:0,subdominio:n.subdomain};return await o["a"].put(s["a"].apiSucursal+"update/",i,{headers:t}).then((a=>a)).catch((a=>a.response))}}},df2a:function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var o=t("7424"),s=t("7cf4"),i=t("18d6");let n=i["a"].getItem("pisco-afilweb");const l={list:async a=>{let e={"Content-Type":"application/json"},t={tipoEmpleado:a,subdominio:n.subdomain};return await o["a"].get(s["a"].apiEmpleado+"list/",{params:t,headers:e}).then((a=>a)).catch((a=>a.response))},create:async a=>{let e={"Content-Type":"application/json"},t={idPersona:a.idPersona,nombre1:a.nombre1,nombre2:a.nombre2||"",apellido1:a.apellido1,apellido2:a.apellido2||"",telefono1:a.telefono1,telefono2:a.telefono02||"",tipoEmpleado:a.tipoEmpleado,subdominio:n.subdomain};return await o["a"].post(s["a"].apiEmpleado+"create/",t,{headers:e}).then((a=>a)).catch((a=>a.response))},edit:async(a,e)=>{let t={"Content-Type":"application/json"},i={id:a,idPersona:e.idPersona,nombre1:e.nombre1,nombre2:e.nombre2||"",apellido1:e.apellido1,apellido2:e.apellido2||"",telefono1:e.telefono1,telefono2:e.telefono2||"",tipoEmpleado:e.tipoEmpleado,estado:e.estado?0:1,subdominio:n.subdomain};return await o["a"].put(s["a"].apiEmpleado+"update/",i,{headers:t}).then((a=>a)).catch((a=>a.response))}}},fb72:function(a,e,t){}}]);