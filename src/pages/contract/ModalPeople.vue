
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
            v-model="dataEmployee.telefono"
            label="Teléfono"
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.celular"
            label="Celular *"
            lazy-rules
            :rules="textRules"
            counter
          />
          
              <q-input
                filled
                v-model="dataEmployee.fechaNacimiento"
                mask="date"
                label="Fecha Nacimiento"
                clearable
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="dataEmployee.fechaNacimiento"
                        :options="optionDatePicker"
                        mask="YYYY-MM-DD"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Cerrar"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
<br>
          <q-select
            filled
            v-model="dataEmployee.parentesco"
            :options="parentescos"
            option-value="idParentesco"
            option-label="parentesco"
            label="*Parentesco"
              emit-value
                map-options
            :rules="selRules"
          />

          <q-select
            filled
            v-model="dataEmployee.genero"
            :options="optGenero"
            label="Genero"
            :rules="selRules"
          />
          <q-input
                filled
                v-model="dataEmployee.fechaCobertura"
                mask="date"
                label="Fecha Cobertura"
                clearable
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="dataEmployee.fechaCobertura"
                        :options="optionDatePicker"
                        mask="YYYY-MM-DD"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Cerrar"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <br>
<q-input
                filled
                v-model="dataEmployee.fechafallecido"
                mask="date"
                label="Fecha Fallecido"
                clearable
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="dataEmployee.fechafallecido"
                        :options="optionDatePicker"
                        mask="YYYY-MM-DD"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Cerrar"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
<br>
<q-input
                filled
                v-model="dataEmployee.fecharetirado"
                mask="date"
                label="Fecha Retirado"
                clearable
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="dataEmployee.fecharetirado"
                        :options="optionDatePicker"
                        mask="YYYY-MM-DD"
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Cerrar"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
<br>
          <q-input
            type="text"
            filled
            v-model="dataEmployee.telefono"
            label="Observaciones"
            counter
          />

         
          <q-toggle
           
            v-model="estado"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="estado"
            :label="`Estado del beneficiario ${estadoText}`"
          />
          <q-toggle
            v-model="estadoA"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="estadoA"
            :label="`Adicional ${estadoAdicional}`"
          />
          <q-toggle
            v-model="estadoF"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="estadoF"
            :label="`Fallecido ${estadoFallecido}`"
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
import moment from "moment";
import { Kinship } from 'src/services/http/kinship';
export default {
  name: "ModalEmployees",

  data() {
    return {
      name: "",
      estado: true,
      estadoA: false,
      estadoF: false,
      estadoText: "Activo",
      estadoFallecido: "No",
      estadoAdicional: "No",
      textRules: [
        val => (val && val.length > 0) || "Campo Obligatorio (*)",
        val => val.length <= 20 || "Máximo 20 carácteres"
      ],
      selRules: [val => !!val || "Campo Obligatorio"],
      optGenero: ["Masculino", "Femenino"],
      dataEmployee: {
        parentesco: {},

      },
      parentescos: []
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
    this.loadData();
    this.dataEmployee = this.data;
    this.estado =
      this.dataEmployee.estado !== undefined
        ? this.dataEmployee.estado == 0
          ? true
          : false
        : true;

        this.estadoF =
      this.dataEmployee.estadoF !== undefined
        ? this.dataEmployee.estadoF == 0
          ? true
          : false
        : false;
    console.log("el estado Fallecido es",this.estadoF);

    this.estadoA =
      this.dataEmployee.estadoA !== undefined
        ? this.dataEmployee.estadoA == 0
          ? true
          : false
        : false;
    console.log("el estado adicional es",this.estadoA);
  },

  methods: {
    show() {
      this.loadData();
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    optionDatePicker(date) {
      return (
        date >= "1900/01/01" &&
        date <=
          moment()
            .format("YYYY/MM/DD")
            .toString()
      );
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
    },
    async loadData() {
      this.$q.loading.show({
        message:
          "<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"
      });
      
      await Promise.all([
        Kinship.list(),
       
       
      ])
        .then(result => {
           console.log("los parentescos son",result[0].data);
          this.parentescos = result[0].data;
          
        })
        .catch((err) => {
          console.log({err})
         
          this.parentescos = [];

          NotifyDialog.triggerNegative(
            "No fue posible cargar los datos de parametrización"
          );
        });
        
       this.$q.loading.hide();
      
    },
  },
  

  watch: {
    estado() {
      this.estadoText = this.estado ? "Activo" : "Retirado";
    },
    estadoF() {
      this.estadoFallecido = this.estadoF ? "Si" : "No";
    },
    estadoA() {
      this.estadoAdicional = this.estadoA ? "Si" : "No";
    }
  }
};
</script>
