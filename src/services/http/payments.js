import api from '../api';
import endpoint from "../endpoints";
import { LocalStorage } from 'quasar'
import moment from "moment";
let localStorage = LocalStorage.getItem("pisco-afilweb");
let localStorageTitular;
let localStorageContrato;
export const Payments =  {
    list: async() => {
        let headers = {
            "Content-Type": "application/json"
        };
         localStorageTitular = LocalStorage.getItem("identificacionTitular");
       localStorageContrato = LocalStorage.getItem("contratoTitular");
        console.log("los pagos son", localStorageTitular,localStorageContrato)
        let params = {
            subdominio: localStorage.subdomain,
            identificacion: localStorageTitular,
            idcontrato: localStorageContrato
        };

        return await api
            .get(endpoint.apiPagos+ "list/", { params, headers })
            .then((response) => {
                console.log("los pagos son", response)
                return response
            })
            .catch ((err) => {
                return err.response
            })
    },
    create: async(payments) => {

        console.log("el pago a crear es",JSON.stringify( payments))
      //  console.log("el titular a crear es",JSON.stringify( localStorageTitular))
        

      const headers = {
        "Content-Type": "application/json"
      };

      let data = {

        nrorecibo: payments.nrorecibo  || "",
        fecha:  moment(payments.fecha).format(),
        valor: payments.valor,
        descuento: payments.descuento,
        anulado: payments.anulado ? true : false,
        idcobrador: payments.idcobrador,
        cobrador: payments.cobrador,
        observaciones: payments.observaciones,
        cuotadesde:  moment().format() ,
        cuotahasta:  moment().format() ,
        nrofactura: payments.nrofactura,
        idcaja: payments.idcaja,
        caja: payments.caja,
        idtipopago: payments.idtipopago,
        tipopago: payments.tipopago,
        identificaciontitular: localStorageTitular,
        contrato: localStorageContrato,
        usuario: payments.usuario,
        nota1: payments.nota1,
        nota2: payments.nota2,
        pagohasta:  moment().format(),
        subdominio: localStorage.subdomain
      };
        
      console.log('el pago a guardar es',JSON.stringify( data) )

    return await api
        .post(endpoint.apiPagos + "create/", data, { headers })
        .then((response) => {
            return response
        })
        .catch ((err) => {
            return err.response
        })
    },
    edit: async(id,payments) => {

      console.log("el pago a editar es",JSON.stringify( payments))
      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        nrorecibo: payments.nrorecibo,
        fecha:  moment(payments.fecha).format('YYYY-MM-DD'),
        valor: payments.valor,
        descuento: payments.descuento,
        anulado: payments.anulado ? true : false,
        idcobrador: payments.idcobrador,
        cobrador: payments.cobrador,
        observaciones: payments.observaciones,
        cuotadesde:  moment().format() ,
        cuotahasta:  moment().format() ,
        nrofactura: payments.nrofactura,
        idcaja: payments.idcaja,
        caja: payments.caja,
        idtipopago: payments.idtipopago,
        tipopago: payments.tipopago,
        identificaciontitular: localStorageTitular,
        contrato: localStorageContrato,
        usuario: payments.usuario,
        nota1: payments.nota1,
        nota2: payments.nota2,
        pagohasta:  moment().format(),
        subdominio: localStorage.subdomain
      };
      console.log("el pago es",JSON.stringify( data))

      return await api
        .put(endpoint.apiPagos + "update/", data, { headers })
        .then((response) => {
            console.log("la respuesta del pago es",response);
          return response
        })
        .catch ((err) => {
            console.log({err})
            return err.response
        })

    
    }
}