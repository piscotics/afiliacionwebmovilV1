<template>
  <q-drawer
    v-model="drawer"
    v-show="isAuthenticated"
    bordered
    content-class="bg-grey-1"
  >
    <q-list class="q-mb-xl">
      <q-item-label header class="bg-primary text-white text-center">
        MENÚ
      </q-item-label>

      <BaseMenu
        v-for="item in linksData"
        :key="item.title"
        :title="item.title"
        :caption="item.caption"
        :link="item.link"
        :icon="item.icon"
      />
    </q-list>
    <q-footer bordered class="text-primary text-center">
      <q-btn
        flat
        icon="logout"
        color="white"
        label="Cerrar Sesión"
        @click="logout"
      />
    </q-footer>
  </q-drawer>
</template>

<script>
import linksMenu from "src/services/menu";

export default {
  name: "BaseDrawer",
  data() {
    return {
      drawer: false,
      linksData: []
    };
  },

  methods: {
    logout() {
      this.$store.commit("user_authenticated/setAuthenticated", false);
      this.$router.push({ path: "/" });
    }
  },

  mounted() {
    this.linksData = linksMenu;
  },

  computed: {
    isAuthenticated: {
      get() {
        return this.$store.state.user_authenticated.isAuthenticated;
      },
      set(val) {
        this.$store.commit("user_authenticated/setAuthenticated", val);
      }
    }
  }
};
</script>

<style></style>
