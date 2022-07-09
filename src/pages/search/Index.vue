<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div class="search">
    <!-- <q-dialog ref="dialog" persistent @hide="onDialogHide"> -->
      <q-card class="search-card">
        <q-card-section class="row items-center justify-center">
          <div class="col-12 col-md-2 col-sm-12 search-select">
            <q-select
              filled
              v-model="type"
              :options="optType"
              label="Filtro"
              :rules="selRules"
              :disable="loading"
            />
          </div>
          <div class="col-12 col-md-2 col-sm-12 search-select">
            <q-input filled v-model="valueSearch" label="Criterio" />
          </div>
        </q-card-section>

        <!-- Notice v-close-popup -->
        <q-card-actions align="center">
          <!-- <q-btn
            flat
            label="Cancelar"
            color="primary"
            outline
            v-close-popup
            :disable="loading"
          />-->
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
import moment from "moment";
let localStorageContratoGuardado;
export default {
  data() {
    return {
      optType: ["NRO CONTRATO","IDENTIFICACION","NOMBRES","APELLIDOS"],
      selRules: [v => !!v || "Debe seleccionar una opción"],
      type: "",
      tipoBuscado: false,
      valueSearch: "",
      dialog: false,
      loading: false,
      loadingTable: false,
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

     localStorageContratoGuardado = LocalStorage.getItem("contratoGuardado");

      console.log("el contrato guadado y consultado es ", localStorageContratoGuardado)
      if (localStorageContratoGuardado != "" && localStorageContratoGuardado != null){
        //invoca el metodo de consultar el contrato
        this.searchContract(localStorageContratoGuardado, "NRO CONTRATO");
        localStorage.setItem("contratoGuardado","")   
      }
     
  },

  methods: {
    editItem(props) {
      this.fabAction = false;
      console.log(props.row.idContrato)
     this.searchContract(props.row.idContrato, "NRO CONTRATO");
      //this.saveOrEditItem(props.row);
    },
    // show() {
    //   this.$refs.dialog.show();
    // },
    // hide() {
    //   this.$refs.dialog.hide();
    // },

    // onDialogHide() {
    //   this.$emit("hide");
    // },

    // onCancelClick() {
    //   this.hide();
    // },

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

     searchData() {
      if (this.type === "" || this.valueSearch === "") return;

      
      //invoca el metodo de consultar el contrato
       this.searchContract(this.valueSearch, this.type);

      // let value = this.$q.localStorage.getItem("pisco-afilweb");

      // const headers = {
      //   "Content-Type": "application/json"
      // };

      // let params = {
      //   idContrato: this.valueSearch,
      //   subdominio: value.subdomain
      // };

      // try {
      //   await api
      //     .get(endpoint.apiContrato + "get", { params, headers })
      //     .then(() => {
      //       NotifyDialog.triggerPositive("Registro encontrado!!!");
      //       this.$router.push({ path: "/contract_create", query: { idcontract: this.valueSearch.toString() } });
      //     });
      // } catch (err) {
      //   NotifyDialog.triggerNegative("El Contrato no existe");
      // }
      
      // this.hide();
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
}
</style>
