<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">
          <q-input
            type="text"
            filled
            v-model="name"
            label="Nombre del Plan"
            lazy-rules
            :rules="textRules"
            counter
          />
          <q-input
            type="number"
            filled
            v-model="valorBase"
            label="Valor Base"
            lazy-rules
            :rules="numberRules"
            counter
          />
          <q-input
            type="number"
            filled
            v-model="valorAdicional"
            label="Valor Adicional"
            lazy-rules
            :rules="numberRules"
            counter
          />

          <q-toggle
            v-model="estado"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="estado"
            :label="`Estado del plan ${estadoText}`"
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
  name: "ModalPlans",

  data() {
    return {
      name: "",
      valorBase: 0,
      valorAdicional: 0,
      estado: true,
      estadoText: "Activo",
      textRules: [
        val => (val && val.length > 0) || "Campo Obligatorio (*)",
        val => val.length <= 50 || "Máximo 50 carácteres"
      ],
      numberRules: [
        val =>
          (!isNaN(parseFloat(val)) && val.length >= 0) ||
          "Campo Obligatorio (*)"
      ]
    };
  },

  props: {
    valueField1: {
      type: String,
      required: true
    },
    valueField2: {
      type: Number,
      required: true
    },
    valueField3: {
      type: Number,
      required: true
    },
    valueField4: {
      type: Boolean,
      required: true
    },
    textAction: {
      type: String,
      required: true
    }
  },

  created() {
    this.name = this.valueField1;
    this.valorBase = this.valueField2;
    this.valorAdicional = this.valueField3;
  },

  methods: {
    show() {
      /* this.estado = this.valueField4; */
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
          this.$emit("ok", {
            name: this.name,
            valorBase: this.valorBase,
            valorAdicional: this.valorAdicional,
            estado: this.estado
          });
          this.hide();
        }
      });
    },

    onCancelClick() {
      this.hide();
    }
  },

  watch: {
    estado() {
      this.estadoText = this.estado ? "Activo" : " Inactivo";
    }
  }
};
</script>
