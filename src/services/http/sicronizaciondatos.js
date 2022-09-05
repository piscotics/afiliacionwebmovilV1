import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";
let localStorage = LocalStorage.getItem("pisco-afilweb");
let localStorageContrato;
let localStorageTitular ;


export const SicronizacionDatos =  {
    
    
    getContratos: async() => {
        const headers = {
            "Content-Type": "application/json"
        };

        //localStorageTitular = LocalStorage.getItem("identificacionTitular");
        //localStorageContrato = LocalStorage.getItem("contratoTitular");
    
        let params = {
            subdominio: localStorage.subdomain,
          //  identificaciontitular: localStorageTitular,
          //  idcontrato: localStorageContrato
        };
    
        return await api
            .get(endpoint.apiSincronizarContratos + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    getParametros: async() => {
        const headers = {
            "Content-Type": "application/json"
        };

      //  localStorageTitular = LocalStorage.getItem("identificacionTitular");
       // localStorageContrato = LocalStorage.getItem("contratoTitular");

        let params = {
            subdominio: localStorage.subdomain,
           // identificaciontitular: localStorageTitular,
            //idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiSincronizarParametros + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    getBenefi: async() => {
        const headers = {
            "Content-Type": "application/json"
        };

      //  localStorageTitular = LocalStorage.getItem("identificacionTitular");
       // localStorageContrato = LocalStorage.getItem("contratoTitular");

        let params = {
            subdominio: localStorage.subdomain,
           // identificaciontitular: localStorageTitular,
            //idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiSincronizarBeneficiarios + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    getPay: async() => {
        const headers = {
            "Content-Type": "application/json"
        };

      //  localStorageTitular = LocalStorage.getItem("identificacionTitular");
       // localStorageContrato = LocalStorage.getItem("contratoTitular");

        let params = {
            subdominio: localStorage.subdomain,
           // identificaciontitular: localStorageTitular,
            //idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiSincronizarPagos + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    getUser: async() => {
        const headers = {
            "Content-Type": "application/json"
        };

      //  localStorageTitular = LocalStorage.getItem("identificacionTitular");
       // localStorageContrato = LocalStorage.getItem("contratoTitular");

        let params = {
            subdominio: localStorage.subdomain,
           // identificaciontitular: localStorageTitular,
            //idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiSincronizarUsuarios + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    getRegister: async() => {
        const headers = {
            "Content-Type": "application/json"
        };

      //  localStorageTitular = LocalStorage.getItem("identificacionTitular");
       // localStorageContrato = LocalStorage.getItem("contratoTitular");

        let params = {
            subdominio: localStorage.subdomain,
           // identificaciontitular: localStorageTitular,
            //idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiSincronizarRegistros + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
}