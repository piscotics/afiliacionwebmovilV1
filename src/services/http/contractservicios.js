import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";
let localStorage = LocalStorage.getItem("pisco-afilweb");
let localStorageTitular ;
let localStorageContrato ;
let localStorageUsuarioLogueado;
export const Contractservicios =  {
    list: async() => {
        let headers = {
            "Content-Type": "application/json"
        };

        console.log("llego alistar",localStorageTitular, localStorageContrato)

        localStorageTitular = LocalStorage.getItem("identificacionTitular");
       localStorageContrato = LocalStorage.getItem("contratoTitular");

        let params = {
            subdominio: localStorage.subdomain,
          //  identificaciontitular: localStorageTitular,
            idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiContractServicios + "list/", { params, headers })
            .then((response) => {
                console.log("los servicios son", response)
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

        localStorageContrato = LocalStorage.getItem("contratoTitular");
        localStorageUsuarioLogueado = LocalStorage.getItem("UsuarioLogueado");

        let data = {

            idca: 0,
            idcontrato: localStorageContrato,
            idsadicional: value.idsadicional,
            servicioadicional: "",
            valor: value.valor|| 0,
            usuario: localStorageUsuarioLogueado,
            fecha: moment(value.fecha).format(),
            idpersona: value.idpersonaBenefi || "0",
            valoranterior: value.valoranterior || 0,
            fecharetiro:  "1999-01-01",
            idasesor: value.idasesor || "01V",
            asesor: "",
            subdominio: localStorage.subdomain
        };

        return await api
            .post(endpoint.apiContractServicios + "create/", data, { headers })
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    edit: async(idca, newData) => {

      let headers = {
        "Content-Type": "application/json"
      };

      console.log("actualizar fecha", newData.fecharetiro)


      
        localStorageContrato = LocalStorage.getItem("contratoTitular");
        localStorageUsuarioLogueado = LocalStorage.getItem("UsuarioLogueado");
        let data;
            if(newData.fecharetiro != ""){
                 data = {
                    idca: newData.idca,
                    idcontrato: localStorageContrato,
                    idsadicional: newData.idsadicional,
                    servicioadicional: "",
                    valor: newData.valor|| 0,
                    usuario: localStorageUsuarioLogueado,
                    fecha: moment(newData.fecha).format(),
                    idpersona: newData.idpersonaBenefi || "0",
                    valoranterior: newData.valoranterior || 0,
                    fecharetiro: moment(newData.fecharetiro).format() || "1999-01-01",
                    idasesor: newData.idasesor || "01V",
                    asesor: "",
                    subdominio: localStorage.subdomain
                  };
            }else{
                 data = {
                    idca: newData.idca,
                    idcontrato: localStorageContrato,
                    idsadicional: newData.idsadicional,
                    servicioadicional: "",
                    valor: newData.valor|| 0,
                    usuario: localStorageUsuarioLogueado,
                    fecha: moment(newData.fecha).format(),
                    idpersona: newData.idpersonaBenefi || "0",
                    valoranterior: newData.valoranterior || 0,
                    fecharetiro: "1999-01-01",
                    idasesor: newData.idasesor || "01V",
                    asesor: "",
                    subdominio: localStorage.subdomain
                  };
            }
     

      return await api
        .put(endpoint.apiContractServicios + "update/", data, { headers }).then((response) => {
          return response
        })
        .catch ((err) => {
            return err.response
        })

    
    },
    get: async(idServiciosAdicionales) => {
console.log("entro aqui al get")

        const headers = {
            "Content-Type": "application/json"
        };
    
        let params = {
            idServiciosAdicionales: idServiciosAdicionales,
            subdominio: localStorage.subdomain
        };
    
        return await api
            .get(endpoint.apiContractServicios + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
}