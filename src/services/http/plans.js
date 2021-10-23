import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Plans =  {
    list: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiPlan + "list/", { params, headers })
            .then((response) => {
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
            nombrePlan: value.name,
            valorBase: value.valorBase,
            valorAdicional: value.valorAdicional,
            estado: value.estado ? 0 : 1,
            subdominio: localStorage.subdomain
        };

        return await api
            .post(endpoint.apiPlan + "create/", data, { headers })
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
        nombrePlan: newData.name,
        valorBase: newData.valorBase,
        valorAdicional: newData.valorAdicional,
        estado: newData.estado ? 0 : 1,
        subdominio: localStorage.subdomain
      };

      return await api
        .put(endpoint.apiPlan + "update/", data, { headers }).then((response) => {
          return response
        })
        .catch ((err) => {
            return err.response
        })

    
    }
}