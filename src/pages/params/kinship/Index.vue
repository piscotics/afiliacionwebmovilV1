<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div style="width: 700px; ">
      <q-table
        title="Parentescos"
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
import { Kinship } from "src/services/http/kinship";
import NotifyDialog from "src/services/notify";
import ModalKinship from "./ModalKinship";

export default {
  name: "Kinship",

  data() {
    return {
      loadingTable: false,
      pagination: [5, 10, 0],
      viewColumns: ["actions", "parentesco"],
      columns: [
        {
          name: "actions",
          label: "",
          field: "",
          align: "center",
          icon: "delete"
        },
        {
          name: "idParentesco",
          required: false,
          label: "idParentesco",
          field: "idParentesco",
          sortable: false
        },
        {
          name: "parentesco",
          required: false,
          label: "Parentesco",
          field: "parentesco",
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
          component: ModalKinship,
          valueField: this.fabAction ? "" : valueItem.parentesco,
          parent: this,
          textAction: this.fabAction ? "Guardar" : "Modificar"
        })
        .onOk(value => {
          if (this.fabAction) {
            this.addRegister(value);
            
          } else {
            console.log("dtos para editar son ",value, valueItem)
            this.editRegister(value, valueItem.idParentesco);
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
      await Kinship.create(dataValue).then((response) => {
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
      await Kinship.edit(idValue, dataValue).then((response) => {
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

      await Kinship.list().then((response) => {
        if (response?.status === 200) {
          this.dataTable = response.data;
        }
      })

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
