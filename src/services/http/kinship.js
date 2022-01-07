import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Kinship =  {
    list: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiKinship + "list/", { params, headers })
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
            parentesco: value,
            subdominio: localStorage.subdomain
        };
        console.log("datos a guardar", data)
        return await api
            .post(endpoint.apiKinship + "create/", data, { headers })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    edit: async(idParentesco, newData) => {

      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        idParentesco: idParentesco,
        parentesco: newData,
        subdominio: localStorage.subdomain
      };

      console.log("datos a guardar", data)
      return await api
        .put(endpoint.apiKinship + "update/", data, { headers }).then((response) => {
          return response
        })
        .catch ((err) => {
            return err.response
        })

    
    }
}