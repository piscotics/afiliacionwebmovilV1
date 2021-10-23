import axios from 'axios';
import { LocalStorage } from 'quasar'

let value = LocalStorage.getItem("pisco-afilweb");

//http://192.99.247.180:5100
const api = axios.create({
    baseURL: value !== null ? value.server : '',
    timeout: 8000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;
