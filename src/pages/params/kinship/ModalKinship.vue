<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">
          <q-input
            type="text"
            filled
            v-model="name"
            label="Parentesco"
            lazy-rules
            :rules="textRules"
            counter
          />
        </q-form>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn color="primary" :label="textAction" @click="onOKClick" />
        <q-btn color="primary" flat label="Cancelar" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "ModalKinship",

  data() {
    return {
      name: "",
      textRules: [
        val => (val && val.length > 0) || "Campo Obligatorio (*)",
        val => val.length <= 20 || "Máximo 80 carácteres"
      ]
    };
  },

  props: {
    valueField: {
      type: String,
      required: true
    },
    textAction: {
      type: String,
      required: true
    }
  },

  created() {
    this.name = this.valueField;
  },

  methods: {
    show() {
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      this.$emit("hide");
    },

    onOKClick() {
      this.$refs.form_modal.validate().then(success => {
        if (success) {
          this.$emit("ok", this.name);
          this.hide();
        }
      });
    },

    onCancelClick() {
      this.hide();
    }
  }
};
</script>
