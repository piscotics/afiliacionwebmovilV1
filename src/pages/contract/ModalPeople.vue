
<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">
          <q-input
            type="text"
            filled
            v-model="dataEmployee.identificacion"
            label="Identificacion"
            lazy-rules
            counter
          />
          <q-input
            type="text"
            filled
            v-model="dataEmployee.nombre1"
            label="* Primer Nombre "
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
            label="* Primer Apellido "
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
            label="Celular "
            lazy-rules
            
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
               <q-input
                filled
                v-model="fechaAfiliacion"
                mask="date"
                label="Fecha Afiliación"
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
                        v-model="fechaAfiliacion"
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
            v-model="dataEmployee.idParentesco"
            :options="parentescos"
            option-value="idParentesco"
            option-label="parentesco"
            label="* Parentesco"
              emit-value
                map-options
            :rules="selRules"
          />

          <q-select
            filled
            v-model="dataEmployee.genero"
            :options="optGenero"
            label="* Genero"
            :rules="selRules"
          />
          <q-input
                filled
                v-model="dataEmployee.fechaCobertura"
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
                v-if="isEditBenefi && estadoFallecido==='Si'"
                filled
                v-model="dataEmployee.fechafallecido"
               
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
              v-if="isEditBenefi && estadoText==='Retirado'"
                filled
                v-model="dataEmployee.fecharetirado"
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
            
            filled
            v-model="dataEmployee.valoradicional"
            label="Valor Adicional"
            counter
            type="number"
            v-if="estadoAdicional==='Si'"
          />
<br>
          <q-input
            type="text"
            filled
            v-model="dataEmployee.observaciones"
            label="Observaciones"
            counter
          />

         
          <q-toggle
           v-if="isEditBenefi"
            v-model="retirado"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="retirado"
            :label="`Estado  ${estadoText}`"
          />
          <q-toggle
            v-model="adicional"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="adicional"
            :label="`Adicional ${estadoAdicional}`"
          />
         
          <q-toggle
            v-if="isEditBenefi"
            v-model="fallecido"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="fallecido"
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
      isEditBenefi: false,
      retirado: false,
      adicional: false,
      fallecido: false,
      estadoText: "Activo",
      estadoFallecido: "No",
      estadoAdicional: "No",
      fechaAfiliacion : moment().format("YYYY/MM/DD").toString(),
      textRules: [
        val => (val && val.length > 0) || "Campo Obligatorio (*)",
        val => val.length <= 20 || "Máximo 20 carácteres"
      ],
      selRules: [val => !!val || "Campo Obligatorio"],
      optGenero: ["MASCULINO", "FEMENINO","OTRO"],
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
  mounted() {
     if (this.data.identificacion  !== undefined){
      this.isEditBenefi = true;
      console.log("lleno",this.isEditBenefi)
    }else{
      this.isEditBenefi = false;
      console.log("vacio",this.isEditBenefi)

    }
  },

  created() {
    this.loadData();
    this.dataEmployee = this.data;
    this.fechaAfiliacion = moment().format("YYYY/MM/DD").toString();
    console.log("retirado",this.dataEmployee.retirado );
    console.log("fallecido",this.dataEmployee.fallecido );
    console.log("adicional",this.dataEmployee.adicional );
   

    console.log("la identificacion ",this.dataEmployee.identificacion );

    this.fechaAfiliacion = this.format_date(this.dataEmployee.fechaAfiliacion);

    if (this.dataEmployee.fechaNacimiento != null && this.dataEmployee.fechaNacimiento != "1999-01-01") {
      this.dataEmployee.fechaNacimiento = this.format_date(this.dataEmployee.fechaNacimiento);
    } else {
      this.dataEmployee.fechaNacimiento = "";
    }
 
    if (this.dataEmployee.fechafallecido != null) {
      this.dataEmployee.fechafallecido = this.format_date(this.dataEmployee.fechafallecido);
    } else {
      this.dataEmployee.fechafallecido = "";
    }

    if (this.dataEmployee.fecharetirado  != null) {
       this.dataEmployee.fecharetirado = this.format_date(this.dataEmployee.fecharetirado);
    } else {
       this.dataEmployee.fecharetirado  = "";
    }
    
   
    this.dataEmployee.fechaCobertura = this.format_date(this.dataEmployee.fechaCobertura);
    if(this.dataEmployee.retirado == 1){
       this.retirado = false;
    }else{
     this.retirado = true;
    }
    
    if(this.dataEmployee.fallecido == 1 ){
      this.fallecido = true;
    }else{
      this.fallecido = false;
    }
      
    if(this.dataEmployee.adicional == 1){
      this.adicional = true;
    }else{
      this.adicional = false;
    }
    console.log("el estado  es",this.retirado);
    console.log("el estado adicional es",this.adicional);

     console.log("el data es ", this.dataEmployee );
  },

  methods: {
    show() {
      this.loadData();
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    format_date(value) {
      return moment(value).format("YYYY-MM-DD");
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
          this.dataEmployee.fechaAfiliacion=  this.format_date(this.fechaAfiliacion );

        if (this.dataEmployee.fechaNacimiento != "") {
          this.dataEmployee.fechaNacimiento = this.format_date(this.dataEmployee.fechaNacimiento);
        } else {
          this.dataEmployee.fechaNacimiento = "1999-01-01";
        }

        if (this.dataEmployee.fechafallecido != "") {
          this.dataEmployee.fechafallecido = this.format_date(this.dataEmployee.fechafallecido);
        } else {
          this.dataEmployee.fechafallecido = "1999-01-01";
        }

        if (this.dataEmployee.fecharetirado  != "") {
          this.dataEmployee.fecharetirado = this.format_date(this.dataEmployee.fecharetirado);
        } else {
          this.dataEmployee.fecharetirado  = "1999-01-01";
        }
    

          if (this.retirado == 1){
            this.dataEmployee.retirado =  0 ;
          }else{
              this.dataEmployee.retirado =  1 ;
          }
           
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
    retirado() {
      this.estadoText = this.retirado ? "Activo" : "Retirado";
    },
    fallecido() {
      this.estadoFallecido = this.fallecido ? "Si" : "No";
    },
    adicional() {
      this.estadoAdicional = this.adicional ? "Si" : "No";
    }
  }
};
</script>
