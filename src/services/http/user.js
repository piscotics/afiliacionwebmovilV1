import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'

let localStorage = LocalStorage.getItem("pisco-afilweb");

export const User =  {
    list: async() => {
        

        let params = {
            subdominio: localStorage.subdomain
        };

        return await api
            .get(endpoint.apiUsuario + "list/", { params })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    create: async(value) => {

       

        let data = {
            username: value.username,
            password: value.password,
            idPersona: value.idPersona,
            nombre: value.nombre,
            apellido: value.apellido,
            renovarPass: 1,
            estado: 1,
            cargo: value.cargo,
            usuarioModif: value.usuarioModif,
            subdominio: localStorage.subdomain
        };

        return await api
            .post(endpoint.apiUsuario + "create/", data, {  })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    edit: async(id, value) => {

      let headers = {
        'Content-Type': 'application/json'
      };


      
      let data = {
        username: value.username,
            password: value.password,
            idPersona: value.idPersona,
            nombre: value.nombre,
            apellido: value.apellido,
            renovarPass: 1,
            estado: value.estado ? 0 : 1,
            cargo: value.cargo,
            usuarioModif: value.usuarioModif,
            subdominio: localStorage.subdomain
        
      };

      return await api.put(endpoint.apiUsuario + "update", data, { headers }).then((response) => {
          return response
        })
        .catch ((err) => {
            return err.response
        })

    
    },
    get: async(id) => {
        const headers = {
            "Content-Type": "application/json"
        };
    
        let params = {
            username: id,
            subdominio: localStorage.subdomain
        };
    
        return await api
            .get(endpoint.apiUsuario + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
}