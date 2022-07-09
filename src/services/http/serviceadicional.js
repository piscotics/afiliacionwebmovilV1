import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";
let localStorage = LocalStorage.getItem("pisco-afilweb");
let localStorageContrato;
let localStorageUsuarioLogueado;
export const ServiceAdicional =  {
    list: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        localStorageContrato = LocalStorage.getItem("contratoTitular");
        let params = {
            subdominio: localStorage.subdomain,
            idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiServiceadicional + "list/", { params, headers })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    
    get: async(idServiciosAdicionales) => {
        const headers = {
            "Content-Type": "application/json"
        };
    
        let params = {
            idServiciosAdicionales: idServiciosAdicionales,
            subdominio: localStorage.subdomain
        };
    
        return await api
            .get(endpoint.apiServiceadicional + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
}