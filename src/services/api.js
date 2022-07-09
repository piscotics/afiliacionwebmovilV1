import axios from 'axios';
import { LocalStorage } from 'quasar'

let value = LocalStorage.getItem("pisco-afilweb");

//http://138.128.244.126:9051
const api = axios.create({
    
    baseURL: value !== null ? value.server : 'http://138.128.244.126:9051',
    timeout: 8000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
   
});

export default api;
