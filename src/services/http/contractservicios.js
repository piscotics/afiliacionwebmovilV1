import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";
let localStorage = LocalStorage.getItem("pisco-afilweb");
let localStorageContrato;
let localStorageUsuarioLogueado;
export const Contractservicios =  {
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
            .get(endpoint.apiContractServicios + "list/", { params, headers })
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

        localStorageContrato = LocalStorage.getItem("contratoTitular");
        localStorageUsuarioLogueado = LocalStorage.getItem("UsuarioLogueado");

        let data = {
            idNovedad: value.idNovedad || 0,
            idContrato: localStorageContrato,
            fechanovedad: moment(value.fechanovedad).format() ,
            postfechadodia: value.postfechadodia || 0,
            aplicada: value.aplicada || 0,
            fechan: value.fechan || "1999-01-01",
            usuario: localStorageUsuarioLogueado || "",
            idcobrador: value.idcobrador || "",
            modulo: value.modulo || "",
            transac: value.transac || 0,
            fechaprogramada: value.fechaprogramada || "1999-01-01",
            posicionx: value.posicionx || "",
            posiciony: value.posiciony || "",
            titular: value.titular || "",
            observaciones: value.observaciones || "",
            idalterna: value.idalterna || 0,
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
    edit: async(idNovedadContrato, newData) => {

      let headers = {
        "Content-Type": "application/json"
      };

      console.log("actualizar novedad", idNovedadContrato)

        localStorageContrato = LocalStorage.getItem("contratoTitular");
        localStorageUsuarioLogueado = LocalStorage.getItem("UsuarioLogueado");

      let data = {
        idNovedadContrato: newData.idNovedadContrato,
        idNovedad: newData.idNovedad || 0,
        idContrato: localStorageContrato,
        fechanovedad: moment(newData.fechanovedad).format() ,
        postfechadodia: newData.postfechadodia || 0,
        aplicada: newData.aplicada || 0,
        fechan: newData.fechan || "1999-01-01",
        usuario: localStorageUsuarioLogueado || "",
        idcobrador: newData.idcobrador || "",
        modulo: newData.modulo || "",
        transac: newData.transac || 0,
        fechaprogramada: newData.fechaprogramada || "1999-01-01",
        posicionx: newData.posicionx || "",
        posiciony: newData.posiciony || "",
        titular: newData.titular || "",
        observaciones: newData.observaciones || "",
        idalterna: newData.idalterna || 0,
        subdominio: localStorage.subdomain
      };

      return await api
        .put(endpoint.apiContractServicios + "update/", data, { headers }).then((response) => {
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
            .get(endpoint.apiContractServicios + "get/", {params, headers})
            .then((response) => {
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
}