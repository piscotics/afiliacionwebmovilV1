<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">
          <q-input
            type="text"
            filled
            v-model="dataEmployee.idPersona"
            label="Identificacion *"
            lazy-rules
            :rules="textRules"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.nombre1"
            label="Primer Nombre *"
            lazy-rules
            :rules="textRules"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.nombre2"
            label="Segundo Nombre"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.apellido1"
            label="Primer Apellido *"
            lazy-rules
            :rules="textRules"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.apellido2"
            label="Segundo Apellido"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.telefono1"
            label="Teléfono Uno *"
            lazy-rules
            :rules="textRules"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.telefono2"
            label="Teléfono Dos"
            counter
          />
          <q-select
            filled
            v-model="dataEmployee.tipoEmpleado"
            :options="optEmpleado"
            label="Tipo Empleado"
            :rules="selRules"
          />
          <q-toggle
            v-model="estado"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="estado"
            :label="`Estado del empleado ${estadoText}`"
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
  name: "ModalEmployees",

  data() {
    return {
      name: "",
      estado: true,
      estadoText: "Activo",
      textRules: [
        val => (val && val.length > 0) || "Campo Obligatorio (*)",
        val => val.length <= 20 || "Máximo 20 carácteres"
      ],
      selRules: [val => !!val || "Campo Obligatorio"],
      optEmpleado: ["COBRADOR", "VENDEDOR"],
      dataEmployee: {}
    };
  },

  props: {
    data: {
      type: Object,
      required: true
    },
    textAction: {
      type: String,
      required: true
    }
  },

  created() {
    this.dataEmployee = this.data;
    this.estado =
      this.dataEmployee.estado !== undefined
        ? this.dataEmployee.estado == 0
          ? true
          : false
        : false;
    console.log(this.estado);
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
          this.$emit("ok", this.dataEmployee);
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
