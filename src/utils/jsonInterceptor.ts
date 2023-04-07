import axios, {AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios';
import { useLoadingStore } from '../store/store.loading';

let baseURL = 'http://localhost:9995';

if(import.meta.env.DEV) {
  // console.log('개발모드');
}

const loading = useLoadingStore();

const service:AxiosInstance = axios.create({
    timeout: 20000,
    baseURL: baseURL,
});

service.interceptors.request.use(
    (request: AxiosRequestConfig) => {
        loading.start();
        
        return request;
    },
    (error: AxiosError) => {
        loading.end();
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        loading.end();
        if (response.status === 200) {
            return response;
        } else {
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        loading.end();
        console.log(error);
        return Promise.reject();
    }
);

export default service;
