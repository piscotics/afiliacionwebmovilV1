<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",

  created() {
    this.$q.dark.set(false);
    this.$store.commit("platform_mobile/setMobile", this.$q.platform.is.mobile);
  }
};
</script>
