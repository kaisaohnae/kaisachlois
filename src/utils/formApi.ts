import interceptor from './formInterceptor';

const formHeaders = {
    method: 'post',
    headers: { 
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    },
    withCredentials: false,
}

export const formApi = (apiUrl:any, apiData?:any) => {
    return interceptor({
        url: apiUrl,
        data: apiData,
        ...formHeaders
    });
};
