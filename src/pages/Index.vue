<template>
  <q-page class="flex flex-center">
    <q-card class="home-card">
      <img
        src="https://piscotics.com/wp-content/uploads/2020/06/O7MF5N0-scaled.jpg"
      />

      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="business" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ infoEmpresa.empresa }}</q-item-label>
            <q-item-label caption>{{ infoEmpresa.nitEmpresa }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="red" name="phone" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{
              infoEmpresa.telefono1 || "Sin número telefónico"
            }}</q-item-label>
            <q-item-label caption>{{ infoEmpresa.telefono2 }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-if="infoEmpresa.direccion">
          <q-item-section avatar>
            <q-icon color="cyan" name="map" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ infoEmpresa.direccion }}</q-item-label>
            <q-item-label caption>{{
              infoEmpresa.multiAfiliacion == 1
                ? "Multiafiliación Activa"
                : "Sin Multiafiliación"
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { Security } from "src/services/http/security";
//import api from "src/services/api";
//import endpoint from "src/services/endpoints";

export default {
  name: "Home",

  data() {
    return {
      infoEmpresa: {}
    };
  },

  beforeMount() {
    this.loadData();
  },

  methods: {
    async loadData() {

      Security.business().then((response) => {
          if (response?.status === 200) {
            this.infoEmpresa = response.data;
            this.$store.commit("data_company/setDataCompany", response.data);
          }
      })

      /* let value = this.$q.localStorage.getItem("pisco-afilweb");

      let headers = {
        "Content-Type": "application/json"
      };

      let params = {
        subdominio: value.subdomain
      };

      try {
        await api
          .get(endpoint.apiEmpresa + "get", { params, headers })
          .then(response => {
            console.log(response.data);
            this.infoEmpresa = response.data;

            this.$store.commit("data_company/setDataCompany", response.data);
          });
      } catch (err) {
        console.log("%cIndex.vue line:65 err", "color: #007acc;", { err });
      } */
    }
  }
};
</script>

<style lang="scss" scoped>
.home-card {
  width: 100%;
  max-width: 450px;
}
</style>
