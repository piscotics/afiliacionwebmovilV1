import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Zones =  {
    list: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiZona + "list/", { params, headers })
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
            nombreZona: value,
            subdominio: localStorage.subdomain
        };

        return await api
            .post(endpoint.apiZona + "create/", data, { headers })
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
        nombreZona: newData,
        subdominio: localStorage.subdomain
      };

      return await api.put(endpoint.apiZona + "update", data, { headers }).then((response) => {
          return response
        })
        .catch ((err) => {
            return err.response
        })

    
    }
}