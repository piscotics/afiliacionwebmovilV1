<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div style="min-width: 400px; max-width: 700px; padding: 0 20px;">
      <q-table
        title="Servicios Adicionales"
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

    <div
      class="column items-center"
      style="padding-bottom: 0px;"
      v-if="isMobile"
    >
      <q-page-sticky position="bottom-left" :offset="[18, 50]">
        <q-btn fab icon="add" color="primary" @click="addItem" />
      </q-page-sticky>
    </div>
  </div>
</template>

<script>
import api from "src/services/api";
import endpoint from "src/services/endpoints";
import { Contractservicios } from "src/services/http/contractservicios";
import { LocalStorage } from 'quasar'
import NotifyDialog from "src/services/notify";
import ModalContractAdicional from './ModalContractAdicional';
import moment from "moment";
let localStorageContrato;

export default {
  name: "ModalContractAdicional",

  data() {
    return {

      
      loadingTable: false,
      pagination: [5, 10, 0],
      viewColumns: [
        "actions",
        "servicioadicional",
        "valor",
        "idpersona",
        "usuario",
        "fecha"
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
          name: "servicioadicional",
          required: false,
          label: "Servicio Adicional",
          field: "servicioadicional",
          sortable: true,
          align: "left"
        },
        {
          name: "valor",
          required: false,
          label: "Valor",
          field: "valor",
          sortable: true,
          align: "left"
        },
        {
          name: "idpersona",
          required: false,
          label: "Identifiacion",
          field: "idpersona",
          sortable: true,
          align: "left"
        },
        
        {
          name: "usuario",
          required: false,
          label: "Usuario",
          field: "usuario",
          sortable: true,
          align: "left"
        },
        {
          name: "fecha",
          required: false,
          label: "Fecha",
          field: "fecha",
          sortable: true,
          align: "left"
        }
      ],
      dataTable: [],
      fabAction: false
    };
  },

  beforeMount() {
    this.loadData();
  },

  methods: {
    editItem(props) {
      this.fabAction = false;
      this.saveOrEditItem(props.row);
    },
    addItem() {
      this.fabAction = true;
      this.saveOrEditItem("");
    },
    saveOrEditItem(valueItem) {
      this.$q
        .dialog({
          component: ModalContractAdicional,

          valueField1: this.fabAction ? 0 : valueItem.idca,
          valueField2: this.fabAction ? "" : valueItem.idcontrato,
          valueField3: this.fabAction ? 0 : valueItem.idsadicional,
          valueField4: this.fabAction ? 0 : valueItem.valor,
          valueField5: this.fabAction ? "" : valueItem.usuario,
          valueField6: this.fabAction ? "" : valueItem.fecha,
          valueField7: this.fabAction ? "" : valueItem.idpersona,
          valueField8: this.fabAction ? 0 : valueItem.valoranterior,
          valueField9: this.fabAction ? "" : valueItem.fecharetiro,
          valueField10: this.fabAction ? "" : valueItem.idasesor,
          parent: this,
          textAction: this.fabAction ? "Guardar" : "Modificar"
        })
        .onOk(value => {
          if (this.fabAction) {
            this.addRegister(value);
          } else {
            this.editRegister(value, valueItem.id);
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
      
      await Contractservicios.create(dataValue).then((response) => {
        console.log(response)
        if (response?.status === 200) {
          NotifyDialog.triggerPositive("Registro almacenado correctamente");
            this.loadData();
        } else {
          NotifyDialog.triggerNegative("El registro no pudo ser almacenado");
        }
      })

    },
    async editRegister(dataValue, idValue) {

      console.log("actu servicio", dataValue, idValue)
      await Contractservicios.edit(idValue, dataValue).then((response) => {
        console.log(response)
        if (response?.status === 200) {
          NotifyDialog.triggerPositive("Registro modificado correctamente");
          this.loadData();
        } else {
          NotifyDialog.triggerNegative("El registro no pudo ser modificado");
        }
      })
    },
    async loadData() {
      this.loadingTable = true;
     
       localStorageContrato = LocalStorage.getItem("contratoTitular");
       
      console.log("sin servicio ",localStorageContrato)
        if (localStorageContrato == null){
            //se redirecciona a la busqueda del contrato
            localStorage.setItem("buscarServicio","Si")  
            this.$router.push({ path: "/search" });
        }else{
            this.loadingTable = true;
            localStorage.setItem("buscarServicio","No")  
            await Contractservicios.list().then((response) => {
                if (response?.status === 200) {
                  for (let index in response.data) {
                      response.data[index].fecha = moment(response.data[index].fecha).format('YYYY-MMM-DD');
                  }
                  this.dataTable = response.data;
                }
            })
        }
        
      this.loadingTable = false;
    }
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
