<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div
        class="full-width row justify-center items-end content-center"
        style="background-color: white !important; "
      >
        <q-banner dense>
          <img
            src="@/assets/banner_superior.png"
            style="width: 100%; height: 72px;"
          />
        </q-banner>
      </div>
      <div class="row full-width">
        <BaseToolbar @close="$refs.drawer.drawer = !$refs.drawer.drawer" />
      </div>
    </q-header>

    <BaseDrawer ref="drawer" v-if="isMobile" />

    <q-page-container class="q-mb-xl">
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-banner dense style="margin: 0; padding: 0;">
        <img
          src="@/assets/banner_inferior.png"
          style="width: 100%; height: 72px"
        />
      </q-banner>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {};
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
