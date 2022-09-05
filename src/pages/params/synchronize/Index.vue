<template>

  <div class="q-pa-md full-width row justify-center content-center">
   
    <div class="search">
    <!-- <q-dialog ref="dialog" persistent @hide="onDialogHide"> -->
      <q-card class="search-card">
        
        <!-- Notice v-close-popup -->
       


        <q-card-actions align="center">
          <q-btn
            label="Sincronizar Parametros"
            color="primary"
            @click="synchronizeParamData"
            :loading="loading"
            :disable="loading"
            
          />
        </q-card-actions>


        

      
        <q-card-actions align="center">
          <q-btn
          
            label="Sincronizar Usuarios"
            color="primary"
            @click="synchronizeUserData"
            :loading="loading"
            :disable="loading"
          />
        </q-card-actions>

        <q-card-actions align="center">
          <q-btn
            label="Sincronizar Registros"
            color="primary"
            @click="synchronizeRegisterData"
            :loading="loading"
            :disable="loading"
          />
        </q-card-actions>

      </q-card>

      
    <!-- </q-dialog> -->
    </div>
    
   
   

  </div>

  

   

  
</template>

<script>
import api from "src/services/api";
import endpoint from "src/services/endpoints";
import { SicronizacionDatos } from "src/services/http/sicronizaciondatos"
import NotifyDialog from "src/services/notify";
import { LocalStorage } from 'quasar'

import moment from "moment";

let localStorageContratoGuardado;
export default {
  data() {
    return {
      
      dialog: false,
      loading: false,
      loadingTable: false,
      fabAction: false
    };
  },

  
  methods: {
     

  async synchronizeContract() {
      let state = true;
     

      if (state) {

        this.$q.loading.show({
          message:
            "<span class='text-orange text-weight-bold'>Consultando, por favor espere...</span>"
        });

      
       await SicronizacionDatos.getContratos().then((response) => {
          if (response?.status === 200) {
            console.log("el estado es", response.data.codigo)
             console.log("el resultado sincronizar", response.data.resultado)
              if(response.data.codigo == "200"){
                console.log("#xx1")
                  NotifyDialog.triggerPositive(response.data.resultado);
              }else if(response.data.codigo == "400"){
                console.log("#xx2")
                  NotifyDialog.triggerNegative(response.data.resultado);
              }else{
                console.log("#xx3")
                NotifyDialog.triggerNegative(response.data.resultado);
              }
           
          } else {
            console.log("#xx4")
             console.log("estado sincronizar", response)
            NotifyDialog.triggerNegative(response?.status);
          }
        })

        this.$q.loading.hide();
      }
    },

    async synchronizeParam() {
      let state = true;
      

      if (state) {

        this.$q.loading.show({
          message:
            "<span class='text-orange text-weight-bold'>Consultando, por favor espere...</span>"
        });

      
       await SicronizacionDatos.getParametros().then((response) => {
          if (response?.status === 200) {
            console.log("el estado es", response.data.codigo)
             console.log("el resultado sincronizar", response.data.resultado)
              if(response.data.codigo == "200"){
                console.log("#xx1")
                  NotifyDialog.triggerPositive(response.data.resultado);
              }else if(response.data.codigo == "400"){
                console.log("#xx2")
                  NotifyDialog.triggerNegative(response.data.resultado);
              }else{
                console.log("#xx3")
                NotifyDialog.triggerNegative(response.data.resultado);
              }
           
          } else {
            console.log("#xx4")
             console.log("estado sincronizar", response)
            NotifyDialog.triggerNegative(response?.status);
          }
        })

        this.$q.loading.hide();
      }
    },

    async synchronizeBenefi() {
      let state = true;
      

      if (state) {

        this.$q.loading.show({
          message:
            "<span class='text-orange text-weight-bold'>Consultando, por favor espere...</span>"
        });

      
       await SicronizacionDatos.getBenefi().then((response) => {
          if (response?.status === 200) {
            console.log("el estado es", response.data.codigo)
             console.log("el resultado sincronizar", response.data.resultado)
              if(response.data.codigo == "200"){
                console.log("#xx1")
                  NotifyDialog.triggerPositive(response.data.resultado);
              }else if(response.data.codigo == "400"){
                console.log("#xx2")
                  NotifyDialog.triggerNegative(response.data.resultado);
              }else{
                console.log("#xx3")
                NotifyDialog.triggerNegative(response.data.resultado);
              }
           
          } else {
            console.log("#xx4")
             console.log("estado sincronizar", response)
            NotifyDialog.triggerNegative(response?.status);
          }
        })

        this.$q.loading.hide();
      }
    },

    async synchronizePay() {
      let state = true;
      

      if (state) {

        this.$q.loading.show({
          message:
            "<span class='text-orange text-weight-bold'>Consultando, por favor espere...</span>"
        });

      
       await SicronizacionDatos.getPay().then((response) => {
          if (response?.status === 200) {
            console.log("el estado es", response.data.codigo)
             console.log("el resultado sincronizar", response.data.resultado)
              if(response.data.codigo == "200"){
                console.log("#xx1")
                  NotifyDialog.triggerPositive(response.data.resultado);
              }else if(response.data.codigo == "400"){
                console.log("#xx2")
                  NotifyDialog.triggerNegative(response.data.resultado);
              }else{
                console.log("#xx3")
                NotifyDialog.triggerNegative(response.data.resultado);
              }
           
          } else {
            console.log("#xx4")
             console.log("estado sincronizar", response)
            NotifyDialog.triggerNegative(response?.status);
          }
        })

        this.$q.loading.hide();
      }
    },

    async synchronizeUser() {
      let state = true;
      

      if (state) {

        this.$q.loading.show({
          message:
            "<span class='text-orange text-weight-bold'>Consultando, por favor espere...</span>"
        });

      
       await SicronizacionDatos.getUser().then((response) => {
          if (response?.status === 200) {
            console.log("el estado es", response.data.codigo)
             console.log("el resultado sincronizar", response.data.resultado)
              if(response.data.codigo == "200"){
                console.log("#xx1")
                  NotifyDialog.triggerPositive(response.data.resultado);
              }else if(response.data.codigo == "400"){
                console.log("#xx2")
                  NotifyDialog.triggerNegative(response.data.resultado);
              }else{
                console.log("#xx3")
                NotifyDialog.triggerNegative(response.data.resultado);
              }
           
          } else {
            console.log("#xx4")
             console.log("estado sincronizar", response)
            NotifyDialog.triggerNegative(response?.status);
          }
        })

        this.$q.loading.hide();
      }
    },

    async synchronizeRegister() {
      let state = true;
      

      if (state) {

        this.$q.loading.show({
          message:
            "<span class='text-orange text-weight-bold'>Consultando, por favor espere...</span>"
        });

      
       await SicronizacionDatos.getRegister().then((response) => {
          if (response?.status === 200) {
            console.log("el estado es", response.data.codigo)
             console.log("el resultado sincronizar", response.data.resultado)
              if(response.data.codigo == "200"){
                console.log("#xx1")
                  NotifyDialog.triggerPositive(response.data.resultado);
              }else if(response.data.codigo == "400"){
                console.log("#xx2")
                  NotifyDialog.triggerNegative(response.data.resultado);
              }else{
                console.log("#xx3")
                NotifyDialog.triggerNegative(response.data.resultado);
              }
           
          } else {
            console.log("#xx4")
             console.log("estado sincronizar", response)
            NotifyDialog.triggerNegative(response?.status);
          }
        })

        this.$q.loading.hide();
      }
    },

    
    synchronizeContractData() {
      //sincroniza los contratos
       this.synchronizeContract();
    },

    synchronizeParamData() {
      //sincroniza los parametros 
       this.synchronizeParam();
    },

    synchronizeBenefiData() {
      //sincroniza los beneficiarios 
       this.synchronizeBenfi();
    },

    synchronizePayData() {
      //sincroniza los pagos 
       this.synchronizePay();
    },

    synchronizeUserData() {
      //sincroniza los usurios 
       this.synchronizeUser();
    },

    synchronizeRegisterData() {
      //sincroniza los usurios 
       this.synchronizeRegister();
    },

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
