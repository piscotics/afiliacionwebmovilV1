<template>
  <div>
    <q-btn color="primary" label="Tomar Foto..." @click="captureImage"></q-btn>

    <img :src="imageSrc" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: ""
    };
  },
  methods: {
    captureImage() {
      navigator.camera.getPicture(
        data => {
          this.imageSrc = `data:image/jpeg;base64,${data}`;
        },
        () => {
          this.$q.notify("No es posible acceder a la camára");
        }
      );
    }
  }
};
</script>

<style></style>
