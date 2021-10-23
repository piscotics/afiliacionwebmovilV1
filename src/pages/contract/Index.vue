<template>
  <div class="q-pa-md">
    <q-inner-loading :showing="loading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      done-color="deep-orange"
      active-color="purple"
      inactive-color="secondary"
    >
      <q-step :name="1" title="Contratante" icon="settings" :done="step > 1">
        <q-form ref="form_contrato">
          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md-2 col-sm-4">
              <q-input
                filled
                v-model="titular.identificacion"
                type="number"
                label="* Identificacion"
                :rules="numberRules"
              />
            </div>
            <div class="col-12 col-md-3 col-sm-4">
              <q-input
                filled
                v-model="titular.nombre1"
                type="text"
                label="* Nombre 1"
                :rules="textRules"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-4">
              <q-input
                filled
                v-model="titular.nombre2"
                type="text"
                label="Nombre 2"
                maxlength="20"
              />
            </div>
            <div class="col-12 col-md-3 col-sm-4">
              <q-input
                filled
                v-model="titular.apellido1"
                type="text"
                label="* Apellido 1"
                :rules="textRules"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-4">
              <q-input
                filled
                v-model="titular.apellido2"
                type="text"
                label="Apellido 2"
                maxlength="20"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-4">
              <q-input
                filled
                v-model="titular.fechaNacimiento"
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
                        v-model="titular.fechaNacimiento"
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
            </div>
            <div class="col-12 col-md-2 col-sm-3">
              <q-select
                filled
                v-model="titular.genero"
                :options="optGenero"
                label="* Genero"
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-5">
              <q-select
                filled
                v-model="titular.departamento.codDepartamento"
                :options="departamentos"
                option-value="codDepartamento"
                option-label="departamento"
                label="* Departamento"
                emit-value
                map-options
                :disable="departamentos.length == 0"
                :rules="selRules"
                @input="
                  val => {
                    loadCities(val);
                  }
                "
              />
            </div>
            <div class="col-12 col-md-3 col-sm-4">
              <q-select
                filled
                v-model="titular.municipio"
                :options="municipios"
                option-value="idMunicipio"
                option-label="municipio"
                label="* Municipio"
                emit-value
                map-options
                :rules="selRules"
                :disable="disabled"
              />
            </div>
            <div class="col-12 col-md-3 col-sm-5">
              <q-input
                filled
                v-model="titular.direccion"
                type="text"
                label="* Direccion"
                :rules="direccionRules"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-4">
              <q-input
                filled
                v-model="titular.barrio"
                type="text"
                label="* Barrio"
                :rules="barrioRules"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-3">
              <q-input
                filled
                v-model="titular.telefono"
                type="text"
                label="* Teléfono"
                :rules="numberRules"
              />
            </div>
            <div class="col-12 col-md-3 col-sm-6">
              <q-input
                filled
                v-model="titular.email"
                type="email"
                label="* Email"
                :rules="[val => !!val || 'Email Obligatorio', isValidEmail]"
              />
            </div>
            <div class="col-12 col-md-3 col-sm-3">
              <q-input
                filled
                v-model="titular.celular1"
                type="number"
                label="* Celular 1"
                :rules="telRules"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-3">
              <q-input
                filled
                v-model="titular.celular2"
                type="number"
                label="Celular 2"
                maxlength="20"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-6">
              <q-input
                filled
                v-model="titular.fechaCobertura"
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
                        v-model="titular.fechaCobertura"
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
            </div>
          </div>
        </q-form>

        <q-stepper-navigation>
          <q-btn @click.prevent="newContract" type="reset" label="Nuevo" class="q-mr-sm" color="amber-5"></q-btn>
          <q-btn
            @click="
              () => {
                this.$refs.form_contrato.validate().then(valid => {
                  if (valid) {
                    step = 2;
                  }
                });
              }
            "
            color="primary"
            label="Continuar"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Contrato" icon="person" :done="step > 2">
        <q-form ref="form_titular">
          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="contrato.fechaAfiliacion"
                label="Fecha Afiliación"
                :rules="textRules"
                readonly
              >
                <!-- mask="date" -->
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="contrato.fechaAfiliacion"
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
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.tipoAfiliacion"
                :options="optTipoAfiliacion"
                label="* Tipo Afiliación"
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                :value="contrato.vigenciaDesde"
                label="* Inicio de Vigencia"
                :rules="textRules"
                readonly
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="contrato.vigenciaDesde"
                        :options="optionDatePicker"
                        @input="calcularVigenciaHasta"
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
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="contrato.vigenciaHasta"
                label="* Final de Vigencia"
                :rules="textRules"
                disable
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="contrato.valorCuota"
                type="number"
                label="* Valor de cuota"
                :rules="cuotaRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="contrato.diaCobro"
                type="number"
                label="* Dia de cobro"
                :rules="cobroRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.formapago.idFormaPago"
                :options="formasPago"
                option-value="idFormaPago"
                option-label="formaPago"
                label="* Forma de pago"
                emit-value
                map-options
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.plan.id"
                :options="planes"
                option-value="id"
                option-label="nombrePlan"
                label="* Plan"
                emit-value
                map-options
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.zona"
                :options="zonas"
                option-value="id"
                option-label="nombreZona"
                emit-value
                map-options
                label="* Zona"
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.sucursal"
                :options="sucursales"
                label="* Sucursal"
                option-value="id"
                option-label="nombreSucursal"
                emit-value
                map-options
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.cobrador.idPersona"
                :options="cobradores"
                option-value="idPersona"
                :option-label="item => `${item.nombre1} ${item.apellido1}`"
                label="* Cobrador"
                emit-value
                map-options
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.vendedor.idPersona"
                :options="vendedores"
                label="* Vendedor"
                option-value="idPersona"
                :option-label="item => `${item.nombre1} ${item.apellido1}`"
                emit-value
                map-options
                :rules="selRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="contrato.direccionCobro"
                type="text"
                label="* Dirección de cobro"
                :rules="textRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="contrato.observaciones"
                type="text"
                label="Observaciones"
                :rules="freeRules"
              />
            </div>
          </div>
        </q-form>

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                this.$refs.form_titular.validate().then(valid => {
                  if (valid) {
                    step = 3;
                  }
                });
              }
            "
            color="primary"
            label="Continuar"
          ></q-btn>
          <q-btn
            flat
            color="deep-orange"
            @click="$refs.stepper.previous()"
            label="Atrás"
            class="q-ml-sm"
          />
          <q-btn v-if="isEdit" color="secondary" label="Modificar" @click="editContract" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Beneficiarios" icon="people">
        Por el momento no es posible asignar beneficiarios, sintonizanos
        próximamente para más avances

        <q-stepper-navigation>
          <q-btn
            @click="saveContract"
            color="primary"
            label="Guardar Contrato"
            :disable="disabled"
            :loading="loading"
          ></q-btn>
          <q-btn
            flat
            color="deep-orange"
            @click="$refs.stepper.previous()"
            label="Atrás"
            class="q-ml-sm"
            :disable="disabled"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import api from "src/services/api";
import endpoint from "src/services/endpoints";
import { Utilities } from "src/services/http/utilities";
import { Zones } from "src/services/http/zones";
import { Offices } from "src/services/http/offices";
import { Employees } from "src/services/http/employees";
import { Plans } from "src/services/http/plans";
import { Contract } from "src/services/http/contract";
import NotifyDialog from "src/services/notify";
import moment from "moment";

export default {
  name: "contract",

  data() {
    return {
      step: 1,
      isEdit: false,
      prevContract: '',
      optTipoAfiliacion: ["INDIVIDUAL", "EMPRESARIAL"],
      optGenero: ["MASCULINO", "FEMENINO"],
      departamentos: [],
      municipios: [],
      planes: [],
      formasPago: [],
      zonas: [],
      sucursales: [],
      cobradores: [],
      vendedores: [],
      disabled: false,
      loading: false,
      freeRules: [
        val =>
          (val && val.length >= -1 && val.length < 200) || "Campo Obligatorio (*)"
      ],
      textRules: [
        val =>
          (val && val.length > 0 && val.length < 20) || "Campo Obligatorio (*)"
      ],
      direccionRules: [
        val =>
          (val && val.length > 0 && val.length <= 200) ||
          "Campo Obligatorio (*)"
      ],
      barrioRules: [
        val =>
          (val && val.length > 0 && val.length <= 40) || "Campo Obligatorio (*)"
      ],
      numberRules: [
        val =>
          (!isNaN(parseFloat(val)) && val >= 0 && val.length <= 10) ||
          "Campo Obligatorio (*)"
      ],
      telRules: [
        val =>
          (!isNaN(parseFloat(val)) && val >= 0 && val <= 9999999999) ||
          "Campo Obligatorio (*)"
      ],
      cuotaRules: [
        val =>
          (!isNaN(parseFloat(val)) && val >= 0 && val <= 99999999) ||
          "Campo Obligatorio (*)"
      ],
      cobroRules: [
        val =>
          (!isNaN(parseFloat(val)) && val >= 0 && val <= 31) ||
          "Campo Obligatorio (*)"
      ],
      emailRules: [
        v =>
          !!v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/.test(v) ||
          "Debe ser un email válido"
      ],
      selRules: [v => !!v || "Debe seleccionar una opción"],
      titular: {
        departamento: {},
        municipio: null
      },
      contrato: {
        formapago: {},
        plan: {},
        zona: null,
        sucursal: null,
        cobrador: {},
        vendedor: {}
      }
    };
  },

  mounted() {
    
    this.prevContract = this.$route.query.idcontract;
    this.loadData();

    console.log(this.prevContract)
    if (this.prevContract != '' && this.prevContract != undefined) {
      this.loadContract()
    }
  },

  methods: {
    newContract() {

      this.$q.dialog({ title: 'Contrato', message: '¿Desea crear un nuevo contrato?', position: 'bottom',
        ok: { push: true, color: 'primary' },
        cancel: { push: true, color: 'secondary' },
        persistent: true
      }).onOk(() => {
        this.titular = { departamento: {}, municipio: null };
        this.contrato = { formapago: {}, plan: {}, zona: null, sucursal: null, cobrador: {}, vendedor: {} }

        if (this.$refs.form_contrato !== undefined) {
          console.log('ref #1')
          this.$refs.form_contrato.reset();
        }
        if (this.$refs.form_titular !== undefined) {
          console.log('ref #2')
          this.$refs.form_titular.reset();
        }

        if (this.$route.query.idcontract !== undefined) this.$router.push(this.$route.path);
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    isValidEmail(val) {
      //:rules="emailRules"
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Debe ser un email válido';
    },
    format_date(value) {
      return moment(value).format("YYYY-MM-DD");
    },
    calcularVigenciaHasta(value) {
      if (this.contrato.vigenciaDesde !== "") {
        this.contrato.vigenciaHasta = moment(value)
          .add(365, "days")
          .format("YYYY-MM-DD");
      } else {
        this.contrato.vigenciaHasta = "";
      }
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
    async loadCities(depto) {
      this.disabled = true;
      this.municipios = [];
      
      await Utilities.cities(depto).then((response) => {
        console.log(response)
        if (response?.status === 200) {
          this.municipios = response.data;
        } else {
          NotifyDialog.triggerNegative("No fue posible cargar los municipios");
        }
      })

      this.disabled = false;
    },
    async loadData() {
      this.$q.loading.show({
        message:
          "<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"
      });
      
      await Promise.all([
        Utilities.departments(),
        Utilities.paymentMethods(),
        Plans.list(),
        Zones.list(),
        Offices.list(),
        Employees.list('COBRADOR'),
        Employees.list('VENDEDOR'),
      ])
        .then(result => {
          // console.log(result);
          this.departamentos = result[0].data;
          this.formasPago = result[1].data;
          this.planes = result[2].data;
          this.zonas = result[3].data;
          this.sucursales = result[4].data;
          this.cobradores = result[5].data;
          this.vendedores = result[6].data;
        })
        .catch((err) => {
          console.log({err})
          this.departamentos = [];
          this.planes = [];
          this.formasPago = [];
          this.vendedores = [];
          this.cobradores = [];
          this.sucursales = [];
          this.zonas = [];

          NotifyDialog.triggerNegative(
            "No fue posible cargar los datos de parametrización"
          );
        });
        
       this.$q.loading.hide();
      
    },
    async loadContract() {

      let resultCity = {}

      await Contract.get(this.prevContract).then((response) => {
        
        if (response?.status === 200) {
            this.isEdit = true;
            this.contrato = response.data;
            this.contrato.formapago = response.data.formaPago;
            this.contrato.plan = response.data.plan;
            this.contrato.zona = response.data.zona;
            this.contrato.sucursal = response.data.sucursal;
            this.contrato.cobrador = response.data.cobrador;
            this.contrato.vendedor = response.data.vendedor;
            this.titular = response.data.titular;
            resultCity = response.data.titular.municipio;
            this.contrato.vigenciaDesde = this.format_date(this.contrato.vigenciaDesde)
            this.contrato.vigenciaHasta = this.format_date(this.contrato.vigenciaHasta)
            if (response.data.titular.genero = 'M') this.contrato.titular.genero = 'MASCULINO'
            if (response.data.titular.genero = 'F') this.contrato.titular.genero = 'FEMENINO'
        } else {
          this.isEdit = false;
          NotifyDialog.triggerNegative("El Contrato no pudo ser cargado");
          this.$router.push({ path: "/home" });
        }
      })

      // Asignación de resultado para municipios
      if (this.titular.departamento !== undefined) {
        await this.loadCities(this.titular.departamento.codDepartamento);
        this.titular.municipio = resultCity;
      }
    },
    async saveContract() {
      this.disabled = true;
      this.loading = true;

      this.municipios = [];

      await Contract.create(this.titular, this.contrato).then((response) => {
        if (response.data?.codRespuesta === "200") {
          NotifyDialog.triggerPositive(
            `Contrato ${response.data?.idContrato} creado satisfactoriamente`
          );
          this.$router.push({ path: "/home" });
        } else {
          NotifyDialog.triggerNegative(response.data?.msjRespuesta);
        }
      })

      this.loading = false;
      this.disabled = false;
    },
    async editContract() {
      this.disabled = true;
      this.loading = true;
      this.municipios = [];

      await Contract.edit(this.titular, this.contrato).then((response) => {
        if (response.data?.codRespuesta === "200") {
          NotifyDialog.triggerPositive(
            `Contrato ${this.contrato.idContrato} modificado satisfactoriamente`
          );
        } else {
          NotifyDialog.triggerNegative(response.data?.msjRespuesta);
        }
      })

      this.loading = false;
      this.disabled = false;
    }
  },
};
</script>

<style></style>
