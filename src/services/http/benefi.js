import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";

let localStorage = LocalStorage.getItem("pisco-afilweb");
let localStorageTitular ;
let localStorageContrato ;

export const Benefi =  {
    list: async() => {
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
            .get(endpoint.apiBenefi+ "list/", { params, headers })
            .then((response) => {
                console.log("los beneficiarios son", response)
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    create: async(titular,contrato,parentesco,benefi) => {

        console.log("el beneficiario a crear es",JSON.stringify( benefi))
        console.log("el titukar a crear es",JSON.stringify( titular))
       

      const headers = {
        "Content-Type": "application/json"
      };

      let data = {
        identificacion: benefi.identificacion || "",
           identificaciontitular: titular.identificacion,
         
        
        nombre1: benefi.nombre1,
        nombre2: benefi.nombre2 || "",
        apellido1: benefi.apellido1,
        apellido2: benefi.apellido2 || "",
        telefono: benefi.telefono || "",
        celular: benefi.celular || "",
        fechaNacimiento:benefi.fechaNacimiento || "1999-01-01",
        genero: benefi.genero ,
        fechaCobertura: moment(benefi.fechaCobertura).format(),
        fechaAfiliacion: moment(benefi.fechaAfiliacion).format(),
        observaciones: benefi.observaciones  || "",
        edadAfiliacion : 0,
        idParentesco: benefi.idParentesco,
        parentesco:benefi.parentesco || "",
        adicional: benefi.adicional || 0,
        fallecido: benefi.fallecido || 0,
        retirado: benefi.retirado || 0,
        fechafallecido: benefi.fechafallecido || "1999-01-01",
        fecharetirado: benefi.fecharetirado || "1999-01-01",
        contrato: contrato.idContrato,
        valoradicional: benefi.valoradicional || 0,
        subdominio: localStorage.subdomain
      };
        
      console.log('el BENEFI a guardar es',JSON.stringify( data) )

    return await api
        .post(endpoint.apiBenefi + "create/", data, { headers })
        .then((response) => {
            return response
        })
        .catch ((err) => {
            return err.response
        })
    },
    edit: async(id,benefi) => {

        
      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        identificacion: benefi.identificacion || "",
        identificaciontitular: benefi.identificaciontitular,
        nombre1: benefi.nombre1,
        nombre2: benefi.nombre2 || "",
        apellido1: benefi.apellido1,
        apellido2: benefi.apellido2 || "",
        telefono: benefi.telefono || "",
        celular: benefi.celular || "",
        fechaNacimiento:benefi.fechaNacimiento || "1999-01-01",
        genero: benefi.genero,
        fechaCobertura: moment(benefi.fechaCobertura).format(),
        fechaAfiliacion: moment(benefi.fechaAfiliacion).format(),
        observaciones: benefi.observaciones  || "",
        edadAfiliacion : 0,
        idParentesco: benefi.idParentesco,
        parentesco:benefi.parentesco || "",
        adicional: benefi.adicional || 0,
        fallecido: benefi.fallecido || 0,
        retirado: benefi.retirado || 0,
        fechafallecido: benefi.fechafallecido || "1999-01-01",
        fecharetirado: benefi.fecharetirado || "1999-01-01",
        contrato: benefi.contrato,
        valoradicional: benefi.valoradicional || 0,
        subdominio: localStorage.subdomain
      };
      console.log("el beneficiario es",JSON.stringify( data))

      return await api
        .put(endpoint.apiBenefi + "update/", data, { headers })
        .then((response) => {
            console.log("la repsuesta del benefi es",response);
          return response
        })
        .catch ((err) => {
            console.log({err})
            return err.response
        })

    
    }
}