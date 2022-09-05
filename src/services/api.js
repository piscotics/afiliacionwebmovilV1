import axios from 'axios';
import { LocalStorage } from 'quasar'

let value = LocalStorage.getItem("pisco-afilweb");

//http://138.128.244.126:9061
const api = axios.create({
    
    baseURL: value !== null ? value.server : '',
    timeout: 8000,
   
   
});

export default api;
