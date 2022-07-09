<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div style="min-width: 400px; max-width: 700px; padding: 0 20px;">
      <q-table
        title="Novedades"
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
import { Noveltycontract } from "src/services/http/noveltycontract";
import { Plans } from "src/services/http/plans";
import { LocalStorage } from 'quasar'
import NotifyDialog from "src/services/notify";
import ModalNoveltyContract from './ModalNoveltyContract';
import moment from "moment";
let localStorageContrato;

export default {
  name: "NoveltyContract",

  data() {
    return {
      loadingTable: false,
      pagination: [5, 10, 0],
      viewColumns: [
        "actions",
        "idNovedadContrato",
        "fechanovedad",
        "usuario",
        "observaciones"
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
          name: "idNovedadContrato",
          required: false,
          label: "Nro Novedad",
          field: "idNovedadContrato",
          sortable: true,
          align: "left"
        },
        {
          name: "fechanovedad",
          required: false,
          label: "Fecha",
          field: "fechanovedad",
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
          name: "observaciones",
          required: false,
          label: "Novedad",
          field: "observaciones",
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
          component: ModalNoveltyContract,
          valueField1: this.fabAction ? 0 : valueItem.idNovedadContrato,
          valueField2: this.fabAction ? 0 : valueItem.idNovedad,
          valueField3: this.fabAction ? "" : valueItem.idContrato,
          valueField4: this.fabAction ? "" : valueItem.fechanovedad,
          valueField5: this.fabAction ? 0 : valueItem.postfechadodia,
          valueField6: this.fabAction ? 0 : valueItem.aplicada,
          valueField7: this.fabAction ? "" : valueItem.fechan,
          valueField8: this.fabAction ? "" : valueItem.usuario,
          valueField9: this.fabAction ? "" : valueItem.idcobrador,
          valueField10: this.fabAction ? "" : valueItem.modulo,
          valueField11: this.fabAction ? 0 : valueItem.transac,
          valueField12: this.fabAction ? "" : valueItem.fechaprogramada,
          valueField13: this.fabAction ? "" : valueItem.posicionx,
          valueField14: this.fabAction ? "" : valueItem.posiciony,
          valueField15: this.fabAction ? "" : valueItem.titular,
          valueField16: this.fabAction ? "" : valueItem.observaciones,
          valueField17: this.fabAction ? 0 : valueItem.idalterna,
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
      
      await Noveltycontract.create(dataValue).then((response) => {
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

      console.log("actu novedad", dataValue, idValue)
      await Noveltycontract.edit(idValue, dataValue).then((response) => {
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
       
      console.log("sin novedad ",localStorageContrato)
        if (localStorageContrato == null){
            //se redirecciona a la busqueda del contrato
            localStorage.setItem("buscarNovedad","Si")  
            this.$router.push({ path: "/search" });
        }else{
            this.loadingTable = true;
            localStorage.setItem("buscarNovedad","No")  
            await Noveltycontract.list().then((response) => {
                if (response?.status === 200) {
                  for (let index in response.data) {
                      response.data[index].fechanovedad = moment(response.data[index].fechanovedad).format('YYYY-MMM-DD');
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
