import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Employees =  {
    list: async(type) => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            tipoEmpleado: type,
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiEmpleado + "list/", { params, headers })
            .then((response) => {
                // console.log(response)
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    create: async(value) => {

        let headers = {
            "Content-Type": "application/json"
        };

        let data = {
            idPersona: value.idPersona,
            nombre1: value.nombre1,
            nombre2: value.nombre2 || "",
            apellido1: value.apellido1,
            apellido2: value.apellido2 || "",
            telefono1: value.telefono1,
            telefono2: value.telefono02 || "",
            tipoEmpleado: value.tipoEmpleado,
            subdominio: localStorage.subdomain
        };

        return await api
            .post(endpoint.apiEmpleado + "create/", data, { headers })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    edit: async(id, newData) => {

      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        id: id,
        idPersona: newData.idPersona,
        nombre1: newData.nombre1,
        nombre2: newData.nombre2 || "",
        apellido1: newData.apellido1,
        apellido2: newData.apellido2 || "",
        telefono1: newData.telefono1,
        telefono2: newData.telefono2 || "",
        tipoEmpleado: newData.tipoEmpleado,
        estado: newData.estado ? 0 : 1,
        subdominio: localStorage.subdomain
      };


      return await api
        .put(endpoint.apiEmpleado + "update/", data, { headers }).then((response) => {
          return response
        })
        .catch ((err) => {
            return err.response
        })

    
    }
}