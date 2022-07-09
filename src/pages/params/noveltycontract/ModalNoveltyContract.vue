<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">
          <q-input
            type="text"
            filled
            v-model="idNovedadContrato"
            label="Nro Novedad"
            lazy-rules
            disable
            counter
          />
          <q-input
                filled
                v-model="fechanovedad"
                 option-value="fechanovedad"
                label="Fecha Novedad"
                clearable
                disable
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="fechanovedad"
                         option-value="fechanovedad"
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
                v-model="fechaprogramada"
                 option-value="fechaprogramada"
                label="Próxima visita"
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
                        v-model="fechaprogramada"
                         option-value="fechaprogramada"
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
                v-model="idNovedad"
                :options="novedades"
                option-value="idNovedad"
                option-label="novedad"
                label="* Tipo Novedad"
                emit-value
                map-options
                :rules="selRules"
              />

          <q-input
             type="textarea"
            filled
            v-model="observaciones"
            label="Novedad"
            lazy-rules
            counter
            :rules="textRules"
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
import { Utilities } from "src/services/http/utilities";
export default {
  name: "ModalNoveltyContract",

  data() {
    return {
      idNovedadContrato: "",
      fechanovedad: moment().format("YYYY-MM-DD").toString(),
      fechaprogramada: "",
      observaciones: "",
      novedades: [],
      idNovedad: "",
      textRules: [
        val => (val && val.length > 0) || "Campo Obligatorio (*)",
        val => val.length <= 50 || "Máximo 50 carácteres"
      ],
        selRules: [val => !!val || "Campo Obligatorio"],
      numberRules: [
        val =>
          (!isNaN(parseFloat(val)) && val.length >= 0) ||
          "Campo Obligatorio (*)"
      ]
    };
  },

  props: {
    valueField1: {
      type: Number,
      required: true
    },
    valueField2: {
      type: Number,
      required: true
    },
    valueField4: {
      type: String,
      required: true
    },
    valueField12: {
      type: String,
      required: true
    },
    valueField16: {
      type: String,
      required: true
    },
    textAction: {
      type: String,
      required: true
    }
  },

  created() {
    this.loadData();
    
    this.idNovedadContrato = this.valueField1
    if(this.valueField2 != 0){
      this.idNovedad = this.valueField2
    }
    if(this.valueField4 != 0 && this.valueField4 != "1999-01-01T00:00:00"){
        this.fechanovedad = moment(this.valueField4).format('YYYY-MM-DD');
      }
      console.log("la fecha", this.valueField12)
    if(this.valueField12 != 0 && this.valueField12 != "1999-01-01T00:00:00"){
        this.fechaprogramada = moment(this.valueField12).format('YYYY-MM-DD');
      }else{
        this.fechaprogramada =""
      }
    this.observaciones = this.valueField16;

    
    
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
    optionDatePicker(date) {
      return (
        date >= moment()
            .format("YYYY/MM/DD")
            .toString()
       
          
      );
    },

    async loadData() {
      this.$q.loading.show({
        message:
          "<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"
      });
      
      await Promise.all([
        Utilities.novelty(),
              
      ])
        .then(result => {
           console.log(result);
          this.novedades = result[0].data;
         
         
        })
        .catch((err) => {
          console.log({err})
          this.novedades = [];
         
        });
        
      

       this.$q.loading.hide();
      
    },

    onOKClick() {
      this.$refs.form_modal.validate().then(success => {
        if (success) {

         
         console.log("xxx#11")

          this.$emit("ok", {
            idNovedadContrato: this.idNovedadContrato,
            idNovedad: this.idNovedad,
            fechanovedad: this.fechanovedad,
            fechaprogramada: this.fechaprogramada,
            observaciones: this.observaciones
          });
          this.hide();
        }
      });
    },

    onCancelClick() {
      this.hide();
    }
  },

 
};
</script>
