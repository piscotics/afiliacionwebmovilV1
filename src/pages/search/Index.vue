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
            <q-input filled v-model="valueSearch" label="Valor" />
          </div>
        </q-card-section>

        <!-- Notice v-close-popup -->
        <q-card-actions align="center">
          <q-btn
            flat
            label="Cancelar"
            color="primary"
            outline
            v-close-popup
            :disable="loading"
          />
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
  </div>
</template>

<script>
import api from "src/services/api";
import endpoint from "src/services/endpoints";
import { Contract } from "src/services/http/contract"
import NotifyDialog from "src/services/notify";

export default {
  data() {
    return {
      optType: ["NRO CONTRATO"],
      selRules: [v => !!v || "Debe seleccionar una opción"],
      type: "",
      valueSearch: "",
      dialog: false,
      loading: false
    };
  },

  methods: {
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

    async searchData() {
      if (this.type === "" || this.valueSearch === "") return;

      this.loading = true;

      await Contract.get(this.valueSearch).then((response) => {
        if (response?.status === 200) {
          NotifyDialog.triggerPositive("Registro encontrado!!!");
          this.$router.push({ path: "contract", query: { idcontract: this.valueSearch.toString() } });
        } else {
          NotifyDialog.triggerNegative("El Contrato no existe");
        }
      })

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
      this.loading = false;
      // this.hide();
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
