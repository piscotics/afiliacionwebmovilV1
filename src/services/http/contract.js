import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Contract =  {
    get: async(numContract) => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            idContrato: numContract,
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiContrato + "get", { params, headers })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    create: async(titular, contrato) => {

      const headers = {
        "Content-Type": "application/json"
      };

      let data = {
        titular: {
          identificacion: titular.identificacion,
          nombre1: titular.nombre1,
          nombre2: titular.nombre1 || "",
          apellido1: titular.apellido1,
          apellido2: titular.apellido2 || "",
          departamento: {
            codDepartamento: titular.departamento.codDepartamento
          },
          municipio: {
            idMunicipio: titular.municipio.idMunicipio
          },
          direccion: titular.direccion,
          barrio: titular.barrio,
          telefono: titular.telefono,
          celular1: titular.celular1,
          celular2: titular.celular2 || "",
          email: titular.email,
          fechanacimiento: titular.fechaNacimiento,
          genero: titular.genero.substring(0, 1),
          fechacobertura: titular.fechaCobertura,
          fechaafiliacion: contrato.fechaAfiliacion
        },
        tipoafiliacion: contrato.tipoAfiliacion,
        fechaafiliacion: contrato.fechaAfiliacion,
        vigenciadesde: moment(contrato.vigenciaDesde).format(),
        vigenciahasta: moment(contrato.vigenciaHasta).format(),
        valorcuota: contrato.valorCuota,
        diacobro: contrato.diaCobro,
        formaPago: {
          idFormaPago: contrato.formapago.idFormaPago
        },
        plan: {
          id: contrato.plan.id
        },
        zona: {
          id: contrato.zona.id
        },
        sucursal: {
          id: contrato.sucursal.id
        },
        cobrador: {
          idPersona: contrato.cobrador.idPersona
        },
        vendedor: {
          idPersona: contrato.vendedor.idPersona
        },
        direccionCobro: contrato.direccionCobro,
        observaciones: contrato.observaciones || "",
        subdominio: localStorage.subdomain
      };
        

    return await api
        .post(endpoint.apiContrato + "create/", data, { headers })
        .then((response) => {
            return response
        })
        .catch ((err) => {
            return err.response
        })
    },
    edit: async(titular, contrato) => {

      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        titular: {
          identificacion: titular.identificacion
        },
        idContrato : contrato.idContrato,
        estatus: contrato.estatus,
        tipoafiliacion: contrato.tipoAfiliacion,
        fechaafiliacion: contrato.fechaAfiliacion,
        vigenciadesde: moment(contrato.vigenciaDesde).format(),
        vigenciahasta: moment(contrato.vigenciaHasta).format(),
        valorcuota: contrato.valorCuota,
        diacobro: contrato.diaCobro,
        formaPago: {
          idFormaPago: contrato.formapago.idFormaPago
        },
        plan: {
          id: contrato.plan.id
        },
        zona: {
          id: contrato.zona.id
        },
        sucursal: {
          id: contrato.sucursal.id
        },
        cobrador: {
          idPersona: contrato.cobrador.idPersona
        },
        vendedor: {
          idPersona: contrato.vendedor.idPersona
        },
        direccionCobro: contrato.direccionCobro,
        observaciones: contrato.observaciones || "",
        subdominio: localStorage.subdomain
      };


      return await api
        .put(endpoint.apiContrato + "update/", data, { headers })
        .then((response) => {
          return response
        })
        .catch ((err) => {
            console.log({err})
            return err.response
        })

    
    }
}