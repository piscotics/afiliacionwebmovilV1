<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin body-cards">
      <q-card-section>
        <q-form ref="form_modal">
          <q-input
            type="text"
            filled
            v-model="nrorecibo"
            label="N. Recibo"
            lazy-rules
            disable
            counter
          />
          <q-input
                filled
                v-model="fecha"
                 option-value="fecha"
                label="Fecha"
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
            type="number"
            filled
            v-model="valor"
            label="Valor"
            lazy-rules
            :rules="selRules"
            counter
          />
          <q-input
            type="number"
            filled
            v-model="descuento"
            label="Descuento"
            lazy-rules
           
            counter
          />

          <q-select
                filled
                v-model="idcobrador"
                :options="cobradores"
                option-value="idPersona"
                :option-label="item => `${item.nombre1} ${item.apellido1}`"
                label="* Cobrador"
                emit-value
                map-options
                :rules="selRules"
              />

          
          <q-input
                filled
                v-model="cuotadesde"
               disable
                label="Cuota Desde"
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
                        v-model="cuotadesde"
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
                v-model="cuotahasta"
                disable
                label="Cuota Hasta"
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
                        v-model="cuotahasta"
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
                v-model="nrofactura"
                label="N. Factura"
                lazy-rules
                
                counter
              />

             

              <q-select
                filled
                v-model="idcaja"
                :options="cajas"
                option-value="idCaja"
                option-label="caja"
                label="* Caja"
                emit-value
                map-options
                :rules="selRules"
              />
              <q-select
                filled
                v-model="idtipopago"
               
                :options="tipopagos"
                option-value="idTipoPago"
                option-label="tipoPago"
                label="* Tipo Pago"
                emit-value
                map-options
                :rules="selRules"
              />
           
              <q-input
              type="text"
              filled
              v-model="observaciones"
              label="Observaciones"
              lazy-rules
              counter
            />
          <q-toggle
            v-model="anulado"
            checked-icon="check"
            color="red"
            unchecked-icon="clear"
            :value="anulado"
            :label="`Anulado ${anuladoText}`"
          />
        </q-form>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn color="primary" :label="textAction" @click="onOKClick" />
        <q-btn color="primary" label="Imprimir" v-if="nrorecibo != ''" @click="imprimirRecibo" />
        <q-btn color="primary" flat label="Cancelar" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { Utilities } from "src/services/http/utilities";
import { Employees } from "src/services/http/employees";
import moment from "moment";
import { LocalStorage } from 'quasar'
let localStorageCuota;
export default {
  name: "ModalPayments",

  data() {
    return {
      nrorecibo: "",
      valor: 0,
      descuento: 0,
      fecha: moment().format("YYYY-MM-DD").toString(),
      cuotadesde: "",
      cuotahasta: "",
      anulado: false,
      anuladoText: "No",
      cobradores: [],
      cajas: [],
      nrofactura: "",
      observaciones: "",
      idcaja: "",
      idtipopago: "1",
      tipopagos: [],
      idcobrador: "01",
    
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
      type: String,
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
      required: false
    },
    valueField5: {
      type: Boolean,
      required: true
    },
    valueField6: {
      type: String,
      required: true
    },
    valueField7: {
      type: String,
      required: false
    },
    valueField8: {
      type: String,
      required: true
    },
    valueField9: {
      type: String,
      required: true
    },
    valueField10: {
      type: String,
      required: false
    },
    valueField11: {
      type: Number,
      required: true
    },
    valueField12: {
      type: Number,
      required: true
    },
    valueField13: {
      type: String,
      required: true
    },
    valueField14: {
      type: String,
      required: true
    },
   /* valueField15: {
      type: String,
      required: true
    },
    valueField16: {
      type: String,
      required: true
    },*/
    textAction: {
      type: String,
      required: true
    }
  },

  created() {
    this.loadData();
    localStorageCuota = LocalStorage.getItem("cuotaTitular");
    console.log("la cuota es",this.valueField6)
      this.nrorecibo = this.valueField1;
      if(this.valueField2 != 0){
        this.fecha = moment(this.valueField2).format('YYYY-MM-DD');
      }
      //localStorageCuota
      if(this.valueField3 != 0){
        this.valor = this.valueField3;
      }else{
        this.valor =localStorageCuota;
      }
      this.descuento = this.valueField4;
      this.anulado = this.valueField5;
      if(this.valueField6 != ""){
        console.log("xxx1")
        this.idcobrador = this.valueField6;
      }else{
        console.log("xxx2")
      }
      this.observaciones = this.valueField7;
      this.cuotadesde = moment(this.valueField8).format('YYYY-MM-DD');
      this.cuotahasta = moment(this.valueField9).format('YYYY-MM-DD');
      this.nrofactura = this.valueField10;
      if(this.valueField11 != 0){
        this.idcaja = this.valueField11;
      }
      console.log("el tipo pago es llego es", this.valueField12)
      if(this.valueField12 != 0){
        console.log("xxx3")
      this.idtipopago =  this.valueField12.toString();
      }
      this.identificaciontitular = this.valueField13;
      this.contrato = this.valueField14;
      //this.caja = this.valueField15;
      //this.tipoPago = this.valueField16;
  },

  methods: {
    show() {
      /* this.anulado = this.valueField4; */
      this.loadData();
      this.$refs.dialog.show();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    imprimirRecibo() {
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
    async loadData() {
      this.$q.loading.show({
        message:
          "<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"
      });
      
      await Promise.all([
        Utilities.paymentTypes(),
        Utilities.cash(),
        Employees.list('COBRADOR'),
      
      ])
        .then(result => {
           console.log(result);
          this.tipopagos = result[0].data;
          this.cajas = result[1].data;
          this.cobradores = result[2].data;
         
        })
        .catch((err) => {
          console.log({err})
          this.tipopagos = [];
          this.cajas = [];
          this.cobradores = [];
         

        //  NotifyDialog.triggerNegative(
          //  "No fue posible cargar los datos de parametrización"
          //);
        });
        
      

       this.$q.loading.hide();
      
    },

    onOKClick() {
      this.$refs.form_modal.validate().then(success => {
        if (success) {
          console.log("success",success)
          this.$emit("ok", {
            nrorecibo: this.nrorecibo,
            fecha:  moment(this.fecha).format('YYYY-MM-DD'),
            valor: this.valor,
            descuento: this.descuento,
            anulado: this.anulado,
            idcobrador: this.idcobrador ,
            cobrador: "",
            cuotadesde: moment(this.cuotadesde).format('YYYY-MM-DD'),
            cuotahasta: moment(this.cuotahasta).format('YYYY-MM-DD'),
            nrofactura: this.nrofactura,
            idcaja: this.idcaja ,
            caja: "",
            idtipopago: this.idtipopago,
            tipopago: "",
            identificaciontitular: this.identificaciontitular,
            contrato: this.contrato,
            observaciones : this.observaciones ,
            usuario:"",
            nota1: "",
            nota2: ""
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
    anulado() {
      this.anuladoText = this.anulado ? "Si" : "No";
    }
  }
};
</script>
