<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div class="search">
    <!-- <q-dialog ref="dialog" persistent @hide="onDialogHide"> -->
      
      <q-card class="search-card">
        <q-card-section class="row items-center justify-center">
          <div class="col-12 col-md-2 col-sm-12 search-select">
             <q-input
                filled
                v-model="fechaAfiliaciondesde"
                label="Fecha Desde"
                
                readonly
              >
                <!-- mask="date" -->
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="fechaAfiliaciondesde"
                        :options="optionDatePicker"
                        mask="YYYY-MM-DD"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Cerrar"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
          </div>

          <div class="col-12 col-md-2 col-sm-12 search-select">
             <q-input
                filled
                v-model="fechaAfiliacionhasta"
                label="Fecha Hasta"
                
                readonly
              >
                <!-- mask="date" -->
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="fechaAfiliacionhasta"
                        :options="optionDatePicker"
                        mask="YYYY-MM-DD"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Cerrar"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
          </div>

          <div class="col-12 col-md-2 col-sm-12 search-select">
            <q-select
                filled
                v-model="typesucursales"
                :options="sucursales"
                label="Sucursal"
                option-value="nombreSucursal"
                option-label="nombreSucursal"
            />
          </div>

         <div class="col-12 col-md-2 col-sm-12 search-select">
            <q-select
                filled
                v-model="typezonas"
                :options="zonas"
                label="Zona"
                option-value="nombreZona"
                option-label="nombreZona"
            />
          </div>

          <div class="col-12 col-md-2 col-sm-12 search-select">
            <q-select
                filled
                v-model="contrato.cobrador.idPersona"
                :options="cobradores"
                option-value="idPersona"
                :option-label="item => `${item.nombre1} ${item.apellido1}`"
                label="Cobrador"
                emit-value
                map-options
              
            />
          </div>
          <div class="col-12 col-md-2 col-sm-12 search-select">
            <q-select
                 filled
                v-model="contrato.vendedor.idPersona"
                :options="vendedores"
                label="Vendedor"
                option-value="idPersona"
                :option-label="item => `${item.nombre1} ${item.apellido1}`"
                emit-value
                map-options
            />
          </div>


 
           <div class="col-12 col-md-2 col-sm-12 search-select">
           <q-select
                filled
                v-model="typeplanes"
                :options="planes"
                option-value="nombrePlan"
                option-label="nombrePlan"
                label="Plan"
         
                
              />
          </div>
         <div class="col-12 col-md-2 col-sm-12 search-select">
              <q-select
                filled
                v-model="typeempresas"
                :options="empresas"
                option-value="empresa"
                option-label="empresa"
                label="Empresa"
               
              />
            </div>

             <div class="col-12 col-md-2 col-sm-12 search-select">
              <q-select
                filled
                v-model="typetipoAfiliacion"
                :options="optTipoAfiliacion"
                label="Tipo Afiliación"
                
              />
            </div>

             <div class="col-12 col-md-2 col-sm-12 search-select">
              <q-select
                filled
                v-model="typeestado"
                :options="optEstado"
                label="Estado"
                
              />
            </div>

        </q-card-section>

        <!-- Notice v-close-popup -->
        <q-card-actions align="center">
         
          <q-btn
            label="Buscar"
            color="primary"
            @click="searchData"
            :loading="loading"
            :disable="loading"
          />
        </q-card-actions>
      </q-card>
    <!-- </q-dialog> -->
    </div>
    
    <!-- inicia la tabla de contratos -->

     <div v-if="tipoBuscado" style="min-width: 400px; max-width: 700px; padding: 10px 20px;">
      <q-table
        title="Resultado de busqueda"
        rows-per-page-label="Items"
        separator="cell"
        :data="dataTable"
        :columns="columns"
        :visible-columns="viewColumns"
        row-key="dataTable.id"
        :rows-per-page-options="pagination"
        :loading="loadingTable"
      >
        
        <template v-slot:header-cell-actions="props">
          <q-th :props="props">
            <q-icon name="view_headline" size="1.5em" />
            {{ props.col.label }}
          </q-th>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" style="width: 50px;">
            <q-btn
              dense
              round
              flat
              color="positive"
              @click="editItem(props)"
              icon="edit"
            ></q-btn>
          </q-td>
        </template>
        <template v-slot:body-cell-anulado="props">
          <q-td :props="props">
            {{ props.row.anulado | FilterState }}
          </q-td>
        </template>
        <template v-slot:no-data>
          <div class="full-width row flex-center q-gutter-sm">
            <span> Contratos Encontrados! </span>
          </div>
        </template>
      </q-table>
    </div>

   

  </div>

   

  
</template>

<script>
import api from "src/services/api";
import endpoint from "src/services/endpoints";
import { Contract } from "src/services/http/contract"
import NotifyDialog from "src/services/notify";
import { LocalStorage } from 'quasar'
import { Utilities } from "src/services/http/utilities";
import { Zones } from "src/services/http/zones";
import { Empresas } from "src/services/http/empresas";
import { Offices } from "src/services/http/offices";
import { Employees } from "src/services/http/employees";
import { Plans } from "src/services/http/plans";
import moment from "moment";
import { Multifiltro } from 'src/services/http/multifiltro';
let localStorageContratoGuardado;
export default {
  data() {
    return {
      optType: ["NRO CONTRATO","IDENTIFICACION","NOMBRES","APELLIDOS"],
      selRules: [v => !!v || "Debe seleccionar una opción"],
      type: "",
      fechaAfiliaciondesde : "",
      fechaAfiliacionhasta : "",
      typesucursales: "",
      typezonas: "",
      typecobradores: "",
      typevendedores: "",
      typeplanes: "",
      typeempresas: "",
      typetipoAfiliacion : "",
      typeestado :"",
      zonas: [],
      planes: [],
      optTipoAfiliacion: ["INDIVIDUAL", "EMPRESARIAL"],
      optEstado: ["PREAFILIACION","APROBADO","ANULADO"],
      empresas: [],
      sucursales: [],
      cobradores: [],
      vendedores: [],
      tipoBuscado: false,
      valueSearch: "",
      dialog: false,
      loading: false,
      loadingTable: false,
       contrato: {
        formapago: {},
        plan: {},
        zona: {},
        sucursal: {},
        cobrador: {},
        vendedor: {},
        empresas: {}
      },
      pagination: [5, 10, 0],
      viewColumns: [
        "actions",
        "idContrato",
        "identificacion",
        "nombre1",
        "nombre2",
        "apellido1",
        "apellido2",
        "valorCuota",
        "fechaAfiliacion",
        "vigenciaDesde",
        "vigenciaHasta",
        "pagoHasta",
        "estatus"
      ],
      columns: [
        {
          name: "actions",
          label: "",
          field: "",
          align: "center",
          icon: "delete"
        },
        
        {
          name: "idContrato",
          required: false,
          label: "NROCONTRATO",
          field: "idContrato",
          sortable: true,
          align: "left"
        },
       {
          name: "identificacion",
          required: false,
          label: "DOCUMENTO",
          field: "identificacion",
          sortable: true,
          align: "left"
        },
         {
          name: "nombre1",
          required: false,
          label: "1ER NOMBRE",
          field: "nombre1",
          sortable: true,
          align: "left"
        },
         {
          name: "nombre2",
          required: false,
          label: "2DO NOMBRE",
          field: "nombre2",
          sortable: true,
          align: "left"
        },
        {
          name: "apellido1",
          required: false,
          label: "1ER APELLIDO",
          field: "apellido1",
          sortable: true,
          align: "left"
        },
        
         {
          name: "apellido2",
          required: false,
          label: "2DO APELLIDO",
          field: "apellido2",
          sortable: true,
          align: "left"
        },
         {
          name: "valorCuota",
          required: false,
          label: "CUOTA",
          field: "valorCuota",
          sortable: true,
          align: "right"
        },
        {
          name: "fechaAfiliacion",
          required: false,
          label: "FECHA AFILIACION",
          field: "fechaAfiliacion",
          sortable: true,
          align: "left"
        },
        {
          name: "vigenciaDesde",
          required: false,
          label: "VIGENCIA DESDE",
          field: "vigenciaDesde",
          sortable: true,
          align: "left"
        },
        {
          name: "vigenciaHasta",
          required: false,
          label: "VIGENCIA HASTA",
          field: "vigenciaHasta",
          sortable: true,
          align: "left"
        }, 
        {
          name: "pagoHasta",
          required: false,
          label: "PAGO HASTA",
          field: "pagoHasta",
          sortable: true,
          align: "left"
        },
        {
          name: "estatus",
          required: false,
          label: "ESTADO",
          field: "estatus",
          sortable: true,
          align: "left"
        }
      ],
      dataTable: [],
      fabAction: false
    };
  },

  mounted() {

    this.loadData();

    // localStorageContratoGuardado = LocalStorage.getItem("contratoGuardado");

      //console.log("el contrato guadado y consultado es ", localStorageContratoGuardado)
    //  if (localStorageContratoGuardado != "" && localStorageContratoGuardado != null){
        //invoca el metodo de consultar el contrato
      //  this.searchContract(localStorageContratoGuardado, "NRO CONTRATO");
       // localStorage.setItem("contratoGuardado","")   
      //}
     
  },

  methods: {
    optionDatePicker(date) {
      return (
        date >= "1900/01/01" &&
        date <=
          moment()
            .format("YYYY/MM/DD")
            .toString()
      );
    },
    editItem(props) {
      this.fabAction = false;
      console.log(props.row.idContrato)
     this.searchContract(props.row.idContrato, "NRO CONTRATO");
      //this.saveOrEditItem(props.row);
    },
    
    async loadData() {
      this.$q.loading.show({
        message:
          "<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"
      });

     
      
      await Promise.all([
       // Utilities.departments(),
       // Utilities.paymentMethods(),
       // 
        Zones.list(),
        Offices.list(),
        Employees.list('COBRADOR'),
        Employees.list('VENDEDOR'),
        Plans.list(),
        Empresas.list(),
      ])
        .then(result => {
           console.log(result);
          //this.departamentos = result[0].data;
          //this.formasPago = result[1].data;
          //
          this.zonas = result[0].data;
          this.sucursales = result[1].data;
          this.cobradores = result[2].data;
          this.vendedores = result[3].data;
          this.planes = result[4].data;
          this.empresas = result[5].data;
          console.log("las empresa son", this.empresas)
        })
        .catch((err) => {
          console.log({err})
         // this.departamentos = [];
         // this.formasPago = [];
          this.vendedores = [];
          this.cobradores = [];
          this.sucursales = [];
          this.zonas = [];
          this.planes = [];
          this.empresas = [];

          NotifyDialog.triggerNegative(
            "No fue posible cargar los datos de parametrización"
          );
        });
        
     

       this.$q.loading.hide();
      
    },

   async searchContract(valueSearch, type) {
      this.loading = true;

      console.log("el tipo es", type.toString())
      if (type.toString() == "NRO CONTRATO" || type.toString() == "IDENTIFICACION") {
        console.log("entro por cto")
         this.tipoBuscado =false;
         await Contract.get(valueSearch, type).then((response) => {
          if (response?.status === 200) {
              
            NotifyDialog.triggerPositive("Registro encontrado!!!",);
        
            
            this.$router.push({ path: "contract", query: { idcontract: valueSearch.toString(), tipobusqued: type.toString() } });
            
          } else {
            NotifyDialog.triggerNegative("El Contrato no existe");
          }
        })
      } else {
       console.log("entro por nombre")
        this.loadingTable = true;
        await Contract.list(valueSearch, type).then((response) => {
          if (response?.status === 200) {
            console.log("encontro datos", response.data.length)
            if (response.data.length >= 1) {
              this.tipoBuscado =true;
               for (let index in response.data) {
                  response.data[index].vigenciaDesde = moment(response.data[index].vigenciaDesde).format('YYYY-MMM-DD');
                  response.data[index].vigenciaHasta = moment(response.data[index].vigenciaHasta).format('YYYY-MMM-DD');
                  response.data[index].fechaAfiliacion = moment(response.data[index].fechaAfiliacion).format('YYYY-MMM-DD');
                  response.data[index].pagoHasta = moment(response.data[index].pagoHasta).format('YYYY-MMM-DD');
                  
                }
              this.dataTable = response.data;
              this.loadingTable = false;
            } else {
               NotifyDialog.triggerNegative("No Se Encontraron Datos");
            }
            
          }else {
            NotifyDialog.triggerNegative("No Se Encontraron Datos");
          }
        })
      
        this.loadingTable = false;
      }
      

      this.loading = false;

    },

    async searchMultifiltro(fechaafiliaciondesde ,fechaafiliacionhasta,  bsucursal,  bcobrador,  bvendedor,  bzona, bplan, bempresa, btipoafiliacion, bestado) {
      this.loading = true;

      
        console.log("entro por filtro ", bsucursal)
        this.loadingTable = true;
        await Multifiltro.list(fechaafiliaciondesde,fechaafiliacionhasta,  bsucursal,  bcobrador,  bvendedor,  bzona, bplan, bempresa,btipoafiliacion, bestado).then((response) => {
          if (response?.status === 200) {
            console.log("encontro datos", response.data.length)
            if (response.data.length >= 1) {
              this.tipoBuscado =true;
               for (let index in response.data) {
                  response.data[index].vigenciaDesde = moment(response.data[index].vigenciaDesde).format('YYYY-MMM-DD');
                  response.data[index].vigenciaHasta = moment(response.data[index].vigenciaHasta).format('YYYY-MMM-DD');
                  response.data[index].fechaAfiliacion = moment(response.data[index].fechaAfiliacion).format('YYYY-MMM-DD');
                  response.data[index].pagoHasta = moment(response.data[index].pagoHasta).format('YYYY-MMM-DD');
                  
                }
              this.dataTable = response.data;
              this.loadingTable = false;
            } else {
               NotifyDialog.triggerNegative("No Se Encontraron Datos");
            }
            
          }else {
            NotifyDialog.triggerNegative("No Se Encontraron Datos");
          }
        })
      
        this.loadingTable = false;
      

      this.loading = false;

    },

     searchData() {
         
        console.log("los datos" ,this.fechaAfiliaciondesde,this.fechaAfiliacionhasta, this.typesucursales.nombreSucursal ,this.contrato.cobrador.idPersona,this.contrato.vendedor.idPersona, this.typezonas.nombreZona, this.typeplanes.nombrePlan,this.typeempresas.empresa, this.typetipoAfiliacion, this.typeestado)
        //bfechaafiliacion,  bsucursal,  bcobrador,  bvendedor,  bzona
       
       this.searchMultifiltro(this.fechaAfiliaciondesde,this.fechaAfiliacionhasta, this.typesucursales.nombreSucursal ,this.contrato.cobrador.idPersona,this.contrato.vendedor.idPersona, this.typezonas.nombreZona, this.typeplanes.nombrePlan,this.typeempresas.empresa, this.typetipoAfiliacion, this.typeestado);
       
       /**if (this.typezonas.nombreZona != undefined ) {
            console.log("##x1")
             this.searchMultifiltro("","", "","", "", this.typezonas.nombreZona, "","");
        }else if (this.typesucursales.nombreSucursal != undefined ) {
              console.log("##x2")
             this.searchMultifiltro("","",this.typesucursales.nombreSucursal ,"", "", "","","");
        }else if (this.fechaAfiliaciondesde != undefined && this.fechaAfiliacionhasta != undefined) {
              console.log("##x3")
             this.searchMultifiltro(this.fechaAfiliaciondesde,this.fechaAfiliacionhasta,"" ,"", "", "","","");
        }*/

    }
  },
    computed: {
    isMobile: {
      get() {
        return this.$store.state.platform_mobile.isMobile;
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.search {
  width: 400px;
}
.search-card {
  width: 100%;
  // max-width: 400px;
  padding: 10px 0px;
}

.search-select {
  width: 100%;
  max-width: 250px;
  text-align: center;
  padding-top: 20px;
}
</style>
