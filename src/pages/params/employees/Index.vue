<template>
  <div class="q-pa-md full-width row justify-center content-center">
    <div class="full-width row justify-center">
      <q-radio
        v-model="employeeType"
        val="COBRADOR"
        label="Cobradores"
        :disable="loadingTable"
        @input="loadData"
      />
      <q-radio
        v-model="employeeType"
        val="VENDEDOR"
        label="Asesores"
        :disable="loadingTable"
        @input="loadData"
      />
    </div>

    <div style="min-width: 400px; max-width: 1200px; padding: 0 20px; ">
      <q-table
        title="Empleados"
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
import { Employees } from "src/services/http/employees";
import NotifyDialog from "src/services/notify";
import ModalEmployees from "./ModalEmployees";

export default {
  name: "Employees",

  data() {
    return {
      employeeType: "COBRADOR",
      loadingTable: false,
      pagination: [5, 10, 0],
      viewColumns: [
        "actions",
        "idPersona",
        "nombre1",
        "nombre2",
        "apellido1",
        "apellido2",
        "telefono1",
        "telefono2",
        "tipoEmpleado",
        "estado"
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
          name: "idPersona",
          required: false,
          label: "Identificacion",
          field: "idPersona",
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
          name: "telefono1",
          required: false,
          label: "Teléfono 1",
          field: "telefono1",
          sortable: true,
          align: "left"
        },
        {
          name: "telefono2",
          required: false,
          label: "Teléfono 2",
          field: "telefono2",
          sortable: true,
          align: "left"
        },
        {
          name: "tipoEmpleado",
          required: false,
          label: "Tipo Empleado",
          field: "tipoEmpleado",
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
        }
      ],
      dataTable: [],
      fabAction: false,
      employeeId: 0
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
      this.employeeId = valueItem.idPersona;

      this.$q
        .dialog({
          component: ModalEmployees,
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

      await Employees.create(dataValue).then((response) => {
        console.log(response)
        if (response?.status === 200) {
          NotifyDialog.triggerPositive("Registro almacenado correctamente");
            this.loadData();
        } else {
          NotifyDialog.triggerNegative("El registro no pudo ser almacenado");
        }
      })
    },
    async editRegister(dataValue) {
      
      await Employees.edit(this.employeeId, dataValue).then((response) => {
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
      
      await Employees.list(this.employeeType).then((response) => {
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
