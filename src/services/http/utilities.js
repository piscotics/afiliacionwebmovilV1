import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Utilities =  {
    departments: async() => {

        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiDepartamento + "list/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    cities: async(depto) => {
        const headers = {
            "Content-Type": "application/json"
        };
    
        let params = {
            codDepartamento: depto,
            subdominio: localStorage.subdomain
        };
    
        return await api
            .get(endpoint.apiDepartamento + "cities/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    paymentMethods: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiFormaPago + "list/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    }
}