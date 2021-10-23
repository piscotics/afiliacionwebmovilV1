import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const Security =  {
    login: async(credentials) => {

        let headers = {
          "Content-Type": "application/json"
        };

        let data = {
          username: credentials.username,
          password: credentials.password,
          subdominio: localStorage.subdomain
        };

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