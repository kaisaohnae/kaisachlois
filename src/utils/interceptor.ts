import axios, {AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios';
import { useLoadingStore } from '../store/store.loading';

let baseURL = 'https://api2.e-bab.com';

if(import.meta.env.DEV) {
  // console.log('개발모드');
}

const loading = useLoadingStore();

const service:AxiosInstance = axios.create({
    timeout: 5000,
    baseURL: baseURL,
});

service.interceptors.request.use(
    (request: AxiosRequestConfig) => {
        loading.start();
        console.log("request" , request);
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
        console.log("response", response);
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
