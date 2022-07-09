import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'


let localStorage ;

export const Security =  {
    login: async(credentials) => {

        let headers = {
          "Content-Type": "application/json"
        };

        localStorage = LocalStorage.getItem("pisco-afilweb");
        console.log("el inice  es", LocalStorage.getItem("pisco-afilweb"))
        console.log("el dominio es", localStorage.subdomain)

        let data = {
          username: credentials.username,
          password: credentials.password,
          subdominio: localStorage.subdomain
        };
        console.log("api",api.baseURL)
        return await api
            .post(endpoint.apiLogin, data, { headers })
            .then((response) => {
                return response
            })
            .catch ((err) =>{
                console.log({ err });
                return err.response;
            })
    },
    business: async() => {
        localStorage = LocalStorage.getItem("pisco-afilweb");
        let headers = {
            "Content-Type": "application/json"
        };

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiEmpresa + "get", { params, headers })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
}