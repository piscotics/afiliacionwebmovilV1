<template>
  <div class="full-width row justify-center items-end content-center">
    <div class="q-pa-md" style="width: 500px;">
      <q-card>
        <q-card-section class="text-center">
          <!-- <div class="text-h6">Parámetros</div> -->
          <q-img src="@/assets/pisco_logo.png" style="width: 250px" />
        </q-card-section>
        <q-card-section>
          <q-input
            filled
            v-model="server"
            label="Servidor"
            lazy-rules
            :rules="configRules"
          />
          <q-input
            filled
            v-model="subdomain"
            label="Subdominio"
            lazy-rules
            :rules="configRules"
          />

          <div class="flex flex-center col-12 btn-estandar">
            <q-btn
              label="Guardar"
              type="button"
              @click.prevent="saveConfig()"
              class="col-6 btn-primary"
              rounded
            />
            <q-btn
              label="Cancelar"
              type="button"
              flat
              class="btn-optional col-6"
              to="/"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      server: "http://192.99.247.180:5100",
      subdomain: "prueba.afiliacionweb.com",
      configRules: [val => (val && val.length > 0) || "Campo Obligatorio (*)"]
    };
  },

  created() {
    this.loadDataConfig(); //Al crearse el componente, se invoca el método
  },

  methods: {
    saveConfig() {
      //Guardar la configuración de conexión
      let dataConfig = {
        server: this.server,
        subdomain: this.subdomain
      };

    //probar eliminando local store de pisco-afilweb
    
      this.$q.localStorage.set("pisco-afilweb", dataConfig);

      axios.defaults.baseUrl = this.server;

      this.$router.push({ path: "/" });
    },
    loadDataConfig() {
      //Cargar la configuración de conexión
      let value = this.$q.localStorage.getItem("pisco-afilweb");

      if (value !== null) {
        this.server = value.server;
        this.subdomain = value.subdomain;
      }
    }
  }
};
</script>

<style lang="scss">
// @import url('~@/assets/App.scss');
</style>
