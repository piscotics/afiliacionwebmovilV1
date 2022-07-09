<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div style="min-width: 400px; max-width: 700px; padding: 0 20px;">
      <q-table
        title="Pagos"
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
        <template v-slot:body-cell-anulado="props">
          <q-td :props="props">
            {{ props.row.anulado | FilterState }}
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
import { Payments } from "src/services/http/payments";
import NotifyDialog from "src/services/notify";
import ModalPayments from "./ModalPayments";
import { LocalStorage } from 'quasar'
import moment from "moment";
let localStorageTitular;
let localStorageContrato;
export default {
  name: "Payments",

  data() {
    return {
      loadingTable: false,
      pagination: [5, 10, 0],
      viewColumns: [
        "actions",
        "nrorecibo",
        "fecha",
        "cuotadesde",
        "cuotahasta",
        "valor",
        "anulado"
        
        
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
          name: "nrorecibo",
          required: false,
          label: "No. Recibo",
          field: "nrorecibo",
          sortable: true,
          align: "left"
        },
       {
          name: "fecha",
          required: false,
          label: "Fecha Pago",
          field: "fecha",
          sortable: true,
          align: "left"
        },
         {
          name: "cuotadesde",
          required: false,
          label: "Cuota Desde",
          field: "cuotadesde",
          sortable: true,
          align: "left"
        },
         {
          name: "cuotahasta",
          required: false,
          label: "Cuota Hasta",
          field: "cuotahasta",
          sortable: true,
          align: "left"
        },
        {
          name: "valor",
          required: false,
          label: "Valor",
          field: "valor",
          sortable: true,
          align: "right"
        },
        
         {
          name: "estadopago",
          required: false,
          label: "Anulado",
          field: "estadopago",
          sortable: true,
          align: "left"
        }
      ],
      dataTable: [],
      fabAction: false
    };
  },

  beforeMount() {
   console.log("sin pagos ")
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
      console.log("los datos delpago son ",valueItem.idtipopago)
      this.$q
        .dialog({
          component: ModalPayments,
          valueField1: this.fabAction ? "" : valueItem.nrorecibo,
          valueField2: this.fabAction ? "" : valueItem.fecha,
          valueField3: this.fabAction ? 0 : valueItem.valor,
          valueField4: this.fabAction ? 0 : valueItem.descuento,
          valueField5: this.fabAction ? false : Boolean(valueItem.anulado),
          valueField6: this.fabAction ? "" : valueItem.idcobrador,
          valueField7: this.fabAction ? "" : valueItem.observaciones,
          valueField8: this.fabAction ? "" : valueItem.cuotadesde,
          valueField9: this.fabAction ? "" : valueItem.cuotahasta,
          valueField10: this.fabAction ? "" : valueItem.nrofactura,
          valueField11: this.fabAction ? 0: valueItem.idcaja,
          valueField12: this.fabAction ? 0 : valueItem.idtipopago,
          valueField13: this.fabAction ? "" : valueItem.identificaciontitular,
          valueField14: this.fabAction ? "" : valueItem.contrato,

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
      console.log("los datos del pago son", dataValue)
      await Payments.create(dataValue).then((response) => {
        console.log(response)
        if (response?.status === 200) {
          NotifyDialog.triggerPositive("Registro almacenado correctamente");
            this.loadData();
        } else {
          NotifyDialog.triggerNegative("El registro no pudo ser almacenado");
        }
      })

    },
    async editRegister(payments, idValue) {
        console.log("los datos del a editar pago son", payments)
      await Payments.edit(idValue, payments).then((response) => {
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
       localStorageTitular = LocalStorage.getItem("identificacionTitular");
       localStorageContrato = LocalStorage.getItem("contratoTitular");
       
      console.log("sin pagos ",localStorageTitular,localStorageContrato)
      if (localStorageTitular == null && localStorageContrato == null){
          //se redirecciona a la busqueda del contrato
          localStorage.setItem("buscarPagos","Si")  
          this.$router.push({ path: "/search" });
      }else{
        this.loadingTable = true;
        localStorage.setItem("buscarPagos","No")  
        await Payments.list().then((response) => {
          if (response?.status === 200) {
            for (let index in response.data) {
                response.data[index].cuotadesde = moment(response.data[index].cuotadesde).format('YYYY-MMM-DD');
                response.data[index].cuotahasta = moment(response.data[index].cuotahasta).format('YYYY-MMM-DD');
                response.data[index].fecha = moment(response.data[index].fecha).format('YYYY-MMM-DD');
                console.log("pagos",response.data[index].cuotadesde)
            }
             // 
            this.dataTable = response.data;
            
          }
        })
      
        this.loadingTable = false;
      }
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
