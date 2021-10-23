import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Offices =  {
    list: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiSucursal + "list/", { params, headers })
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
            nombreSucursal: value,
            subdominio: localStorage.subdomain
        };

        return await api
            .post(endpoint.apiSucursal + "create/", data, { headers })
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
        nombreSucursal: newData,
        estado: 0,
        subdominio: localStorage.subdomain
      };

      return await api
        .put(endpoint.apiSucursal + "update/", data, { headers }).then((response) => {
          return response
        })
        .catch ((err) => {
            return err.response
        })

    
    }
}