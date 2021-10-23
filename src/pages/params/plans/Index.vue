<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div style="min-width: 400px; max-width: 700px; padding: 0 20px;">
      <q-table
        title="Planes"
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
import { Plans } from "src/services/http/plans";
import NotifyDialog from "src/services/notify";
import ModalPlans from "./ModalPlans";

export default {
  name: "Zones",

  data() {
    return {
      loadingTable: false,
      pagination: [5, 10, 0],
      viewColumns: [
        "actions",
        "nombrePlan",
        "estado",
        "valorBase",
        "valorAdicional"
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
          name: "id",
          required: false,
          label: "id",
          field: "id",
          sortable: false
        },
        {
          name: "nombrePlan",
          required: false,
          label: "Nombre Plan",
          field: "nombrePlan",
          sortable: true,
          align: "left"
        },
        {
          name: "estado",
          required: false,
          label: "Estado",
          field: "estado",
          sortable: true,
          align: "left"
        },
        {
          name: "valorBase",
          required: false,
          label: "Valor Base",
          field: "valorBase",
          sortable: true,
          align: "left"
        },
        {
          name: "valorAdicional",
          required: false,
          label: "Valor Adicional",
          field: "valorAdicional",
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
          component: ModalPlans,
          valueField1: this.fabAction ? "" : valueItem.nombrePlan,
          valueField2: this.fabAction ? 0 : valueItem.valorBase,
          valueField3: this.fabAction ? 0 : valueItem.valorAdicional,
          valueField4: this.fabAction ? false : !Boolean(valueItem.estado),
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
      
      await Plans.create(dataValue).then((response) => {
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
      await Plans.edit(idValue, dataValue).then((response) => {
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

      await Plans.list().then((response) => {
        if (response?.status === 200) {
          this.dataTable = response.data;
        }
      })
      /* let value = this.$q.localStorage.getItem("pisco-afilweb");

      let headers = {
        "Content-Type": "application/json"
      };

      let params = {
        subdominio: value.subdomain
      };

      try {
        await api
          .get(endpoint.apiPlan + "list/", { params, headers })
          .then(response => {
            console.log(response.data);
            this.dataTable = response.data;
          });
      } catch (err) {
        console.log("%cIndex.vue line:65 err", "color: #007acc;", { err });
      } */
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
