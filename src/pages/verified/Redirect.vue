<template>

 <div class="q-pa-md full-width row justify-center content-center">
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
    };
  },

  mounted() {
      

        this.$router.push({ path: "/verified" });
  
     
  },

  methods: {
  },
    
};
</script>



<style lang="scss" scoped>


</style>
