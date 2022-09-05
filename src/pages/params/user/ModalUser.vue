<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">

         
          <q-input
            type="text"
            filled
            v-model="username"
            label="Usuario"
            lazy-rules
            :rules="textRules"
            counter
          />
          <q-input
            type="password"
            filled
            v-model="password"
            label="Contraseña"
            lazy-rules
            :rules="textRules"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="idPersona"
            label="Identificacion"
            lazy-rules
            :rules="textRules"
            counter
          />

           <q-input
            type="text"
            filled
            v-model="nombre"
            label="Nombres"
            lazy-rules
            :rules="textRules"
            counter
          />

           <q-input
            type="text"
            filled
            v-model="apellido"
            label="Apellidos"
            lazy-rules
            :rules="textRules"
            counter
          />

         

           <q-input
            type="text"
            filled
            v-model="cargo"
            label="Cargo"
            lazy-rules
            :rules="textRules"
            counter
          />

           <q-toggle
            v-model="estado"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="estado"
            :label="`Estado Usuario ${estadoText}`"
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
  name: "ModalUser",

  data() {
    return {

      username: "",
      password: "",
      idPersona: "",
      nombre: "",
      apellido: "",
      estado: true,
      estadoText: "Activo",
      cargo: "",
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
      type: String,
      required: true
    },
    valueField3: {
      type: String,
      required: true
    },
    valueField4: {
      type: String,
      required: true
    },
    valueField5: {
      type: String,
      required: true
    },
    valueField6: {
      type: Boolean,
      required: true
    },
    valueField7: {
      type: String,
      required: true
    },
    textAction: {
      type: String,
      required: true
    }
  },

  created() {
    this.username= this.valueField1;
    this.password= this.valueField2;
    this.idPersona= this.valueField3;
    this.nombre= this.valueField4;
    this.apellido= this.valueField5;
    //this.estado= this.valueField6;
    this.cargo= this.valueField7;
 
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

            username: this.username,
            password: this.password,
            idPersona: this.idPersona,
            nombre: this.nombre,
            apellido: this.apellido,
            estado: this.estado,
            cargo: this.cargo

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
