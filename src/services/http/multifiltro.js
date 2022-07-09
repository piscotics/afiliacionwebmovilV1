import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";

let localStorage ;

export const Multifiltro =  {

      list: async(fechaafiliaciondesde,fechaafiliacionhasta,  bsucursal,  bcobrador,  bvendedor,  bzona, bplan, bempresa, btipoafiliacion, bestado) => {
        localStorage = LocalStorage.getItem("pisco-afilweb");
      
        console.log("los datos que tengo",fechaafiliaciondesde,fechaafiliacionhasta,  bsucursal,  bcobrador,  bvendedor,  bzona, bplan, bempresa, btipoafiliacion, bestado)

        let headers = {
            "Content-Type": "application/json"
        };
       
        let params; 

        if (fechaafiliaciondesde != undefined && fechaafiliaciondesde != ""){
          console.log("entro en bfechaafiliaciondesde")
           params = {
            bfechaafiliaciondesde: fechaafiliaciondesde,
            bfechaafiliacionhasta: fechaafiliacionhasta,
            bsucursal: bsucursal,
            bcobrador: bcobrador,
            bvendedor: bvendedor,
            bzona: bzona,
            bplan: bplan, 
            bempresa: bempresa, 
            btipoafiliacion: btipoafiliacion, 
            bestado: bestado,
            subdominio: localStorage.subdomain
          };
        }else {
          console.log("entro en bsucursal")
             params = {
              bfechaafiliaciondesde: null,
              bfechaafiliacionhasta: null,
              bsucursal: bsucursal,
              bcobrador: bcobrador,
              bvendedor: bvendedor,
              bzona: bzona,
              bplan: bplan, 
              bempresa: bempresa, 
              btipoafiliacion: btipoafiliacion, 
              bestado: bestado,
              subdominio: localStorage.subdomain
            };
          
        }

        console.log("los parametros son",params )
        return await api
            .get(endpoint.apiMultifiltro + "list", { params, headers })
            .then((response) => {
                console.log("los registros son", response)
                return response
            })
            .catch ((err) => {
                return err.response
            })
    }

    
}