<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">
              

              <q-select
                filled
                :value="tipo"
                v-model="tipo"
                :options="optTipo"
                label="* Tipo"
                :rules="selRules"
                 @input="
                  val => {
                    loadServicio(val);
                  }
                "
              />
          


              <q-select
                filled
                v-model="idsa"
                :options="serviciosadicionales"
                option-value="idsa"
                option-label="descripcion"
                label="* Servicio"
                emit-value
                map-options
                :rules="selRules"
                @input="
                  val => {
                    loadValorServicio(val);
                  }
                "
              />

              <q-input
                type="number"
                filled
                v-model="valor"
                label="* Valor"
                lazy-rules
                :rules="selRules"
                counter
                 
              />

              <q-input
                filled
                v-model="fecha"
                 option-value="fecha"
                label="Fecha "
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
                        v-model="fecha"
                         option-value="fecha"
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
                v-model="fecharetiro"
                 option-value="fecharetiro"
                label="Fecha Retiro"
                clearable
                v-if="textAction=='Modificar'"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="fecharetiro"
                         option-value="fecharetiro"
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
                v-model="idasesor"
                :options="vendedores"
                label="* Vendedor"
                option-value="idPersona"
                :option-label="item => `${item.nombre1} ${item.apellido1}`"
                emit-value
                map-options
                :rules="selRules"
              />

              <q-select
                filled
                v-model="idpersonaBenefi"
                :options="titularesBenefi"
                label="Beneficiario"
                option-value="identificacion"
                :option-label="item => `${item.nombre1} ${item.nombre2} ${item.apellido1} ${item.apellido2}`"
                emit-value
                map-options
                v-if="isBenefi"
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
import { ServiceAdicional } from "src/services/http/serviceadicional";
import { Employees } from "src/services/http/employees";
import { LocalStorage } from 'quasar'
let localStorageTitular ;
localStorageTitular = LocalStorage.getItem("identificacionTitular");
export default {
  name: "ModalNoveltyContract",

  data() {
    return {
      isBenefi: false,
      tipo: "",
      idca: 0,
      idcontrato: "",
      idsadicional: 0,
      valor: 0,
      usuario: "",
      fecha: moment().format("YYYY-MM-DD").toString(),
      
      servicioadicional: "",
      valoranterior: 0,
      fecharetiro:  moment().format("YYYY-MM-DD").toString(),
      idasesor: "01V",
      idpersonaBenefi: localStorageTitular,
      serviciosadicionales: [],
      vendedores: [],
      titularesBenefi: [],
      idsa: "",

      optTipo: [ "Paga Valor Por el Grupo","Paga valor por Cada Una de las Personas","Paga valor Por una Persona en Especial"],
      textRules: [
        val => (val && val.length > 0) || "Campo Obligatorio (*)",
        val => val.length <= 50 || "Máximo 50 carácteres"
      ],
        selRules: [val => !!val || "Campo Obligatorio"],
      numberRules: [
        val =>
          (!isNaN(parseFloat(val)) && val.length >= 0) ||
          "Campo Obligatorio (*)"
      ],
       contrato: {
        
        vendedor: {},
        
      },
    };
  },

  props: {
    valueField1: {
      type: Number,
      required: true
    },
    valueField2: {
      type: String,
      required: true
    },
    valueField3: {
      type: Number,
      required: true
    },
     valueField4: {
      type: Number,
      required: true
    },
     valueField5: {
      type: String,
      required: true
    },
     valueField6: {
      type: String,
      required: true
    },
     valueField7: {
      type: String,
      required: true
    },
     valueField8: {
      type: Number,
      required: true
    },
    valueField9: {
      type: String,
      required: true
    },
    valueField10: {
      type: String,
      required: true
    },
    valueField11: {
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
    
    if(this.valueField1 != 0){
      this.idca = this.valueField1
    }

    this.idcontrato = this.valueField2

    if(this.valueField3 != 0){
      this.idsa = this.valueField3
    }

    if(this.valueField4 != 0){
      this.valor = this.valueField4
    }

    this.idcousuariontrato = this.valueField5
    
    if(this.valueField6 != 0 && this.valueField6 != "1999-01-01T00:00:00"){
        this.fecha = moment(this.valueField6).format('YYYY-MM-DD');
    }

    if(this.valueField7 != ""){
         this.idpersonaBenefi = this.valueField7;
    }else{
      console.log("idtitular", localStorageTitular)
      this.idpersonaBenefi = localStorageTitular;
    }

   

    if(this.valueField8 != 0){
      this.valoranterior = this.valueField8
    }
     
    if(this.valueField9 != 0 && this.valueField9 != "1999-01-01T00:00:00"){
        this.fecharetiro = moment(this.valueField9).format('YYYY-MM-DD');
    }else{
        this.fecharetiro =""
    }
    
console.log("tipo cobro llego", this.valueField11)
    if(this.valueField10 != ""){
        this.idasesor = this.valueField10;
    }else{
      this.idasesor = "01V";
    }

     if(this.valueField11 != ""){
        this.tipo = this.valueField11;
        this.loadServicio(this.valueField11);
    }
    
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
      // Utilities.serviceadicional('TIPO'),
        Employees.list('VENDEDOR'),      
        Utilities.titularesBeneficiarios(),      
      ])
        .then(result => {
           console.log(result);
          //this.serviciosadicionales = result[0].data;
          this.vendedores = result[0].data;
          this.titularesBenefi = result[1].data;
         
        })
        .catch((err) => {
          console.log({err})
        //  this.serviciosadicionales = [];
          this.vendedores = [];
          this.titularesBenefi = [];
        });
        
      

       this.$q.loading.hide();
      
    },

    async loadValorServicio(idsa) {
       console.log("llego loadValorServicio")
        await ServiceAdicional.get(idsa).then((response) => {
          console.log(response)
          if (response?.status === 200) {
            this.valor = response.data.valor;

            
           
          } else {
          // NotifyDialog.triggerNegative("No fue posible cargar los municipios");
          }
        })
      },

      async loadServicio(tipoServicio) {
       console.log("llego loadServicio")
        await Utilities.serviceadicional(tipoServicio).then((response) => {
          if (response?.status === 200) {
             console.log("el listado del servicio es ", response.data)
             if(response.data.length > 0){
                this.serviciosadicionales = response.data;
                
             }else{
                this.idsa = "";
                this.valor = "0";
                this.serviciosadicionales = [];
             }

              if(tipoServicio == "Paga Valor Por el Grupo"){
                this.isBenefi = false;
              }
              else if(tipoServicio == "Paga valor por Cada Una de las Personas"){
                this.isBenefi = false;
              }
              else if(tipoServicio == "Paga valor Por una Persona en Especial"){
                this.isBenefi = true;
              }
            
           
          } else {
           this.serviciosadicionales = [];
          }
        })
      },

    onOKClick() {
      this.$refs.form_modal.validate().then(success => {
        if (success) {

         
         console.log("xxx#11")

          this.$emit("ok", {
            idca: this.idca,
            idcontrato: this.idcontrato,
            idsadicional: this.idsa,
            valor: this.valor,
            usuario: this.usuario,
            fecha: this.fecha,
            idpersona: this.idpersonaBenefi,
            valoranterior: this.valoranterior,
            fecharetiro: this.fecharetiro,
            idasesor: this.idasesor,
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
