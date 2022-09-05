import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");
let localStorageTitular ;
let localStorageContrato ;
let localStorageUsuarioLogueado;

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
    },

    paymentTypes: async() => {
        console.log("llego a cargar tipos pagos")
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiTipoPago + "list/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    cash: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiCaja + "list/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    novelty: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiNovelty + "list/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    serviceadicional: async(tipoServicio) => {
        let headers = {
            "Content-Type": "application/json"
        };
        let params ;

  

        if(tipoServicio == "Paga Valor Por el Grupo"){
            params = {
                TIPOSERVICIO: 1,
                subdominio: localStorage.subdomain
            };
        }else if(tipoServicio == "Paga valor por Cada Una de las Personas"){
            params = {
                TIPOSERVICIO: 2,
                subdominio: localStorage.subdomain
            };
        }
        else if(tipoServicio == "Paga valor Por una Persona en Especial"){
            params = {
                TIPOSERVICIO: 3,
                subdominio: localStorage.subdomain
            };
        }
      

        return await api
            .get(endpoint.apiServiceadicional + "list/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

    titularesBeneficiarios : async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        localStorageTitular = LocalStorage.getItem("identificacionTitular");
        localStorageContrato = LocalStorage.getItem("contratoTitular");

        let params = {
            subdominio: localStorage.subdomain,
            identificaciontitular: localStorageTitular,
            idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiTitularesBeneficiarios + "list/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },

}