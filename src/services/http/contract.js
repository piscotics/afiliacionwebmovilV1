import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";

let localStorage ;

export const Contract =  {

      list: async(criterio,tipoBusqueda) => {
        localStorage = LocalStorage.getItem("pisco-afilweb");

        let headers = {
            "Content-Type": "application/json"
        };
       

        let params = {
          criterio: criterio,
          tipoBusqueda: tipoBusqueda,
          subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiContrato+ "list", { params, headers })
            .then((response) => {
                console.log("los contrtos son", response)
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    get: async(numContract,tipoBusqueda) => {

      localStorage = LocalStorage.getItem("pisco-afilweb");

        let headers = {
            "Content-Type": "application/json"
        };

        console.log("el dominio es", localStorage.subdomain)
        let params = {
            idContrato: numContract,
            tipoBusqueda: tipoBusqueda,
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

      localStorage = LocalStorage.getItem("pisco-afilweb");

      const headers = {
        "Content-Type": "application/json"
      };

      let data = {
        titular: {
          identificacion: titular.identificacion,
          nombre1: titular.nombre1,
          nombre2: titular.nombre2 || "",
          apellido1: titular.apellido1,
          apellido2: titular.apellido2 || "",
          departamento: {
            codDepartamento: titular.departamento.codDepartamento
          },
          municipio: {
            idMunicipio: titular.municipio.idMunicipio
          },
          direccion: titular.direccion || "",
          barrio: titular.barrio || "",
          telefono: titular.telefono || "",
          celular1: titular.celular1,
          celular2: titular.celular2 || "",
          email: titular.email,
          fechanacimiento: moment(titular.fechaNacimiento,"YYYY-MM-DD") ,
          genero: titular.genero,
          fechacobertura:  moment("1999-01-01","YYYY-MM-DD"),
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
        direccionCobro: contrato.direccionCobro || "",
        observaciones: contrato.observaciones || "",
        empresas: {
          nitEmpresa: contrato.empresas.nitEmpresa || "",
        },
        subdominio: localStorage.subdomain
      };
        
      console.log('el contrato a guardar es',JSON.stringify( data) )

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

      localStorage = LocalStorage.getItem("pisco-afilweb");

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
        direccionCobro: contrato.direccionCobro  ,
        observaciones: contrato.observaciones || "",
        empresas: {
          nitEmpresa: contrato.empresas.nitEmpresa || "",
        },
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