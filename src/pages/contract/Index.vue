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
                label="*Fecha Nacimiento"
                 :rules="textRules"
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
                :value="genero"
                v-model="genero"
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
                v-model="titular.municipio.idMunicipio"
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
                label="Barrio"
               
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
           
            <div class="col-12 col-md-3 col-sm-6">
              <q-input
                filled
                v-model="titular.email"
                type="email"
                label="* Email"
                :rules="[val => !!val || 'Email Obligatorio', isValidEmail]"
              />
            </div>
            <div class="col-12 col-md-2 col-sm-3">
              <q-input
                filled
                v-model="titular.telefono"
                type="text"
                label="Teléfono"
               
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
            <div class="col-12 col-md-2 col-sm-6" >
              <q-input
                filled
                v-model="titular.fechaCobertura"
                label="Fecha Cobertura"
                clearable
                 v-if="isEdit"
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
                :value="contrato.idContrato"
                v-model="contrato.idContrato"
                type="number"
                label="Nro Contrato"
               disable
              />
            </div>
            
            
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="fechaAfiliacion"
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
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.tipoAfiliacion"
                :options="optTipoAfiliacion"
                label="* Tipo Afiliación"
                :rules="selRules"
                @input="
                  val => {
                    loadEmpresas(val);
                  }
                "
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.empresas.nitEmpresa"
                :options="empresas"
                option-value="nitEmpresa"
                option-label="empresa"
                emit-value
                map-options
                label="* Empresa"
                v-if="estadoTipoAfiliacion"
              />
            </div>
             <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.zona.id"
                :options="zonas"
                option-value="id"
                option-label="nombreZona"
                emit-value
                map-options
                label="* Zona"
            
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                :value="vigenciaDesde"
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
                        v-model="vigenciaDesde"
                        :options="optionDatePickerDesde"
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
                 @input="
                  val => {
                    loadValorPlan(val);
                  }
                "
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                :value="diaCobro"
                v-model="diaCobro"
                type="number"
                label="* Dia de cobro"
                :rules="cobroRules"
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                :value="idFormaPago"
                v-model="formaPago"
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
              <q-input
                filled
                :value="valorCuota"
                v-model="valorCuota"
                type="number"
                label="* Valor de cuota"
                :rules="cuotaRules"
              />
            </div>
            
            <div class="col-12 col-md-4 col-sm-4">
              <q-select
                filled
                v-model="contrato.sucursal.id"
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
                label="Dirección de cobro"
              
              />
            </div>
            <div class="col-12 col-md-4 col-sm-4">
              <q-input
                filled
                v-model="contrato.observaciones"
                type="text"
                label="Observaciones"
               
              />
            </div>
          </div>
        </q-form>

        <q-stepper-navigation>

        

           <q-btn
            flat
            color="deep-orange"
            @click="$refs.stepper.previous()"
            label="Atrás"
            class="q-ml-sm"
          />
           <q-btn
           v-if="!isEdit"
            @click="saveContract"
            color="secondary"
            label="Guardar Contrato"
            :disable="disabled"
            :loading="loading"
          ></q-btn>

                

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
            label="Grupo"
          ></q-btn>

     
          
          <q-btn flat v-if="isEdit" color="secondary" label="Modificar" @click="editContract" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Beneficiarios" icon="people">
        
         <div
            class="column items-center"
            style="padding-bottom: 0px;"
            v-if="isMobile">
            <q-page-sticky position="bottom-left" :offset="[18, 50]">
              <q-btn fab icon="add" color="primary" @click="addItem" />
            </q-page-sticky>
        </div>

        <div style="min-width: 400px; max-width: 1200px; padding: 0 20px; ">
          <q-table
            title="Beneficiarios"
            rows-per-page-label="Items"
            separator="cell"
            :data="dataTable"
            :columns="columns"
            :visible-columns="viewColumns"
            row-key="dataTable.id"
            :rows-per-page-options="pagination"
            :loading="loadingTable"
          >
            <template v-slot:top-right v-if="!isMobile">
              <q-btn
                icon="add"
                label="Agregar Nuevo"
                color="primary"
                @click="addItem"
              />
            </template>
            <template v-slot:header-cell-actions="props">
              <q-th :props="props">
                <q-icon name="view_headline" size="1.5em" />
                {{ props.col.label }}
              </q-th>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props" style="width: 50px;">
                <q-btn
                  dense
                  round
                  flat
                  color="positive"
                  @click="editItem(props)"
                  icon="edit"
                ></q-btn>
              </q-td>
            </template>
            <template v-slot:body-cell-estado="props">
              <q-td :props="props">
                {{ props.row.estado | FilterState }}
              </q-td>
            </template>
            <template v-slot:no-data>
              <div class="full-width row flex-center q-gutter-sm">
                <span> No hay datos . . . crea el primer registro! </span>
              </div>
            </template>
          </q-table>
        </div>

    

        <q-stepper-navigation>
         <!-- <q-btn
            @click="saveContract"
            color="primary"
            label="Guardar Contrato 1"
            :disable="disabled"
            :loading="loading"
          ></q-btn>-->
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
import { Empresas } from "src/services/http/empresas";
import { Offices } from "src/services/http/offices";
import { Employees } from "src/services/http/employees";
import { Plans } from "src/services/http/plans";
import { Contract } from "src/services/http/contract";
import NotifyDialog from "src/services/notify";
import moment from "moment";
import ModalPeople from "./ModalPeople";
import { Benefi } from 'src/services/http/benefi';
import { LocalStorage } from 'quasar'
let localStoragebuscarPagos;
let localStoragebuscarNovedad;
let localStoragebuscarServicio;
export default {
  name: "contract",

 

  data() {
    return {
      step: 1,
      isEdit: false,
      prevContract: '',
      prevtipobusqued: '',
      optTipoAfiliacion: ["INDIVIDUAL", "EMPRESARIAL"],
      optGenero: ["MASCULINO", "FEMENINO","OTRO"],
      departamentos: [],
      municipios: [],
      planes: [],
      formasPago: [],
      valorCuota: 0,
      genero : "",
      idFormaPago: "6",
      formaPago: "Mensual",
      fechaAfiliacion : moment().format("YYYY/MM/DD").toString(),
      vigenciaDesde : moment().format("YYYY/MM/DD").toString(),
      diaCobro:  moment().format("DD").toString(),
      zonas: [],
      sucursales: [],
      cobradores: [],
      vendedores: [],
      empresas: [],
      estadoTipoAfiliacion: false,
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
        municipio: {}
      },
      contrato: {
        formapago: {},
        plan: {},
        zona: {},
        sucursal: {},
        cobrador: {},
        vendedor: {},
        empresas: {}
      },
      employeeType: "BENEFICIARIO",
      loadingTable: false,
      pagination: [5, 10, 0],
      viewColumns: [
        "actions",
        "identificacion",
        "nombre1",
        "nombre2",
        "apellido1",
        "apellido2",
        "telefono",
        "celular",
        "edadAfiliacion",
        "parentesco",
        "estadobeneficiario"
      ],
      columns: [
        {
          name: "actions",
          label: "",
          field: "",
          align: "center",
          icon: "delete"
        },
        {
          name: "identificacion",
          required: false,
          label: "Identificacion",
          field: "identificacion",
          sortable: false
        },
        {
          name: "nombre1",
          required: false,
          label: "Primer Nombre",
          field: "nombre1",
          sortable: true,
          align: "left"
        },
        {
          name: "nombre2",
          required: false,
          label: "Segundo Nombre",
          field: "nombre2",
          sortable: true,
          align: "left"
        },
        {
          name: "apellido1",
          required: false,
          label: "Primer Apellido",
          field: "apellido1",
          sortable: true,
          align: "left"
        },
        {
          name: "apellido2",
          required: false,
          label: "Segundo Apellido",
          field: "apellido2",
          sortable: true,
          align: "left"
        },
        {
          name: "telefono",
          required: false,
          label: "Teléfono",
          field: "telefono",
          sortable: true,
          align: "left"
        },
        {
          name: "celular",
          required: false,
          label: "Celular",
          field: "celular",
          sortable: true,
          align: "left"
        },
        {
          name: "edadAfiliacion",
          required: false,
          label: "Edad",
          field: "edadAfiliacion",
          sortable: true,
          align: "left"
        },
        {
          name: "parentesco",
          required: false,
          label: "Parentesco",
          field: "parentesco",
          sortable: true,
          align: "left"
        },
        {
          name: "estadobeneficiario",
          required: false,
          label: "Estado",
          field: "estadobeneficiario",
          sortable: true,
          align: "left"
        }
      ],
      dataTable: [],
      fabAction: false,
      employeeId: 0,
      employeeIdTitular: 0,
    };
  },

  mounted() {
    
    this.prevContract = this.$route.query.idcontract;
    this.prevtipobusqued = this.$route.query.tipobusqued;
      
    this.loadData();

  


    console.log(this.prevtipobusqued)
    console.log(this.prevContract)
    if (this.prevContract != '' && this.prevContract != undefined) {
       console.log("entro a consultar cto")
      this.loadContract()
    }else{
        
    }
     console.log("el editar es de tipo ",this.isEdit)
  },

  methods: {
    newContract() {
       
      this.$q.dialog({ title: 'Contrato', message: '¿Desea crear un nuevo contrato?', position: 'bottom',
        ok: { push: true, color: 'primary' },
        cancel: { push: true, color: 'secondary' },
        persistent: true
      }).onOk(() => {
        this.titular = { departamento: {}, municipio: {} };
        this.contrato = { formapago: {}, plan: {}, zona: {}, sucursal: {}, cobrador: {}, vendedor: {}, empresas: {}  }
        this.$q.localStorage.remove("contratoTitular");
        this.$q.localStorage.remove("identificacionTitular");
        this.$q.localStorage.remove("cuotaTitular");
        
        this.valorCuota = 0;
        this.diaCobro =   moment().format("DD").toString();
        this.fechaAfiliacion = moment().format("YYYY/MM/DD").toString();
        this.vigenciaDesde =  moment().format("YYYY/MM/DD").toString();
        this.idFormaPago = "6";
        this.formaPago = "Mensual";
        this.isEdit = false;
        this.genero = ""
        this.calcularVigenciaHasta(this.vigenciaDesde);
        this.estadoTipoAfiliacion = false;
       
       console.log('ref #x',this.$refs.form_contrato)
        if (this.$refs.form_contrato !== undefined) {
          console.log('ref #1')
          this.$refs.form_contrato.reset();
        }
        console.log('ref #xx',this.$refs.form_titular)
        if (this.$refs.form_titular !== undefined) {
          console.log('ref #2')
          this.$refs.form_titular.reset();
        }

        //contrato.fechaAfiliacion =  moment().format("YYYY-MM-DD").toString();
        //contrato.vigenciaDesde =  moment().format("YYYY-MM-DD").toString();
       
       // console.log('llego a poner fechas por defecto',this.contrato.fechaAfiliacion)

      console.log('ref #xxx',this.$route.query.idcontract,this.$route.path)
        if (this.$route.query.idcontract !== undefined) {
          console.log('ref #3')
          this.$router.push(this.$route.path);
        }
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

     calcularVigenciaDesde(value) {
      if (this.contrato.fechaAfiliacion !== "") {
        this.contrato.vigenciaDesde >=  moment(value)
            .format("YYYY/MM/DD")
            .toString();
      } else {
        this.contrato.vigenciaDesde = "";
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

     optionDatePickerDesde(date) {
      return (
        date >=  moment(this.fechaAfiliacion)
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


    async loadEmpresas(tipoAfiliacion) {
      if(tipoAfiliacion=="EMPRESARIAL"){
        this.estadoTipoAfiliacion = true;
      }else{
        this.estadoTipoAfiliacion = false;
      }
    },

    async loadValorPlan(idplan) {
      await Plans.get(idplan).then((response) => {
        console.log(response)
        if (response?.status === 200) {
          this.valorCuota = response.data.valorBase;
          console.log("el listado del plan es ", response.data)
        } else {
         // NotifyDialog.triggerNegative("No fue posible cargar los municipios");
        }
      })
    },

    
    async loadData() {
      this.$q.loading.show({
        message:
          "<span class='text-orange text-weight-bold'>Consultando parámetros, por favor espere...</span>"
      });

      this.calcularVigenciaHasta(this.vigenciaDesde);
      
      await Promise.all([
        Utilities.departments(),
        Utilities.paymentMethods(),
        Plans.list(),
        Zones.list(),
        Offices.list(),
        Employees.list('COBRADOR'),
        Employees.list('VENDEDOR'),
        Empresas.list(),
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
          this.empresas = result[7].data;
          console.log("las empresa son", this.empresas)
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
          this.empresas = [];

          NotifyDialog.triggerNegative(
            "No fue posible cargar los datos de parametrización"
          );
        });
        
      //-----cargar beneficiarios -----
      this.loadingTable = true;

      await Benefi.list().then((response) => {
        if (response?.status === 200) {
          this.dataTable = response.data;
          this.parentesco = response.data.idParentesco;
        }
      })

      this.loadingTable = false;
      //---- fin cargue beneficiarios ---

       this.$q.loading.hide();
      
    },
    async loadContract() {

      let resultCity = {}

      await Contract.get(this.prevContract,this.prevtipobusqued).then((response) => {
        
        if (response?.status === 200) {
           console.log("el editar es ", response.data)
            this.isEdit = true;
            this.contrato = response.data;
            this.contrato.formapago = response.data.formaPago;
            this.contrato.plan = response.data.plan;
            this.contrato.zona = response.data.zona;
            this.contrato.sucursal = response.data.sucursal;
            this.contrato.cobrador = response.data.cobrador;
            this.contrato.vendedor = response.data.vendedor;
            this.contrato.empresas = response.data.empresas;

            this.valorCuota = response.data.valorCuota;
            this.idFormaPago = response.data.formapago.idFormaPago;
            this.formaPago = response.data.formapago.formaPago;
            this.loadEmpresas(response.data.tipoAfiliacion);
            this.diaCobro =  response.data.diaCobro;
            this.fechaAfiliacion = this.format_date(response.data.fechaAfiliacion);
            this.vigenciaDesde = this.format_date(response.data.vigenciaDesde);
            this.titular = response.data.titular;
            resultCity = response.data.titular.municipio;
           // this.contrato.vigenciaDesde = this.format_date(this.contrato.vigenciaDesde)
           this.contrato.vigenciaHasta = this.format_date(this.contrato.vigenciaHasta)
           this.titular.fechaNacimiento = this.format_date(this.contrato.titular.fechaNacimiento)
           this.titular.fechaCobertura = this.format_date(this.contrato.titular.fechaCobertura)

            console.log("los datos del titular son", response.data.titular)
            this.genero = this.titular.genero;
          
         

            console.log("el genero traido es", this.titular.genero , "EL GENERO AGREGADO ES", this.genero )
            
            localStorage.setItem("contratoTitular",this.contrato.idContrato)   
            localStorage.setItem("identificacionTitular", this.titular.identificacion)   
            localStorage.setItem("cuotaTitular", this.contrato.valorCuota)   
            
            console.log("localStoragebuscarPagos-buscarnovedad",localStoragebuscarPagos, localStoragebuscarNovedad)
            localStoragebuscarPagos = LocalStorage.getItem("buscarPagos");
            localStoragebuscarNovedad = LocalStorage.getItem("buscarNovedad");
            localStoragebuscarServicio = LocalStorage.getItem("buscarServicio");
            if(localStoragebuscarPagos == "Si")
            {
              console.log("entro a redirecccionar buscarPago")
             this.$router.push({ path: "/payments" });
            }
            if(localStoragebuscarNovedad == "Si")
            {
              console.log("entro a redirecccionar buscarNovedad")
             this.$router.push({ path: "/noveltycontract" });
            }
            if(localStoragebuscarServicio == "Si")
            {
              console.log("entro a redirecccionar buscarServicio")
             this.$router.push({ path: "/contractadicional" });
            }
          console.log("el nuevo editar es ",this.isEdit)
             
        
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

      this.contrato.valorCuota = this.valorCuota;
      this.contrato.diaCobro =  this.diaCobro;
      this.contrato.fechaAfiliacion =this.format_date(this.fechaAfiliacion);
      this.contrato.vigenciaDesde = this.format_date(this.vigenciaDesde);
      this.contrato.formapago.idFormaPago = this.idFormaPago;
      this.contrato.formapago.formaPago = this.formaPago;
      this.titular.genero = this.genero; 
      
      await Contract.create(this.titular, this.contrato).then((response) => {
        if (response.data?.codRespuesta === "200") {
          NotifyDialog.triggerPositive(
            `Contrato ${response.data?.idContrato} creado satisfactoriamente`
          );
          
          //guarda el localstre con el contrato creado 
          localStorage.setItem("contratoGuardado",response.data?.idContrato)   

          this.$router.push({ path: "/search" });


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
    },
    //***************beneficiarios  */
      editItem(props) {
      this.fabAction = false;
      this.saveOrEditItem(props.row);
    },
    addItem() {
      this.fabAction = true;
      this.saveOrEditItem("");
    },
    saveOrEditItem(valueItem) {
      this.employeeId = valueItem.identificacion;
      
      this.$q
        .dialog({
          component: ModalPeople,
          data: this.fabAction ? {} : valueItem,
          parent: this,
          textAction: this.fabAction ? "Guardar" : "Modificar"
        })
        .onOk(value => {
          if (this.fabAction) {
            this.addRegister(value);
          } else {
            this.editRegister(value);
          }
        })
        .onCancel(() => {
          // console.log("Cancel");
        })
        .onDismiss(() => {
          // console.log("Called on OK or Cancel");
        });
    },
    async addRegister(dataValue) {

      await Benefi.create(this.titular, this.contrato,this.parentesco,dataValue).then((response) => {
        console.log(response)
        if (response?.status === 200) {
          NotifyDialog.triggerPositive("Beneficiario almacenado correctamente");
            this.loadData();
        } else {
          NotifyDialog.triggerNegative("El Beneficiario no pudo ser almacenado");
        }
      })
    },
    async editRegister(dataValue) {
      
      await Benefi.edit(this.employeeId, dataValue).then((response) => {
        console.log("el beneficiario respondio",response.data.msjRespuesta)
        if (response?.status === 200) {
          NotifyDialog.triggerPositive(response.data.msjRespuesta);
          this.loadData();
        } else {
          NotifyDialog.triggerNegative(response.data.msjRespuesta);
        }
      })

    }

    //************ fin beneficiarios */
  },
  computed: {
    isMobile: {
      get() {
        return this.$store.state.platform_mobile.isMobile;
      }
    }
  }
};
</script>

<style></style>
