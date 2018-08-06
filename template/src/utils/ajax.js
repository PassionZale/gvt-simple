import axios from 'axios'
import { getToken } from './auth'
import { baseURL } from './base'

const ajax = axios.create({
    baseURL: baseURL,
    timeout: 5000
});

ajax.interceptors.request.use(config => {
    if (getToken()) {
        config.headers['Authorization'] = getToken();
    }
    return config;
}, error => {
    Promise.reject(error);
});

ajax.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});

export default ajax;
