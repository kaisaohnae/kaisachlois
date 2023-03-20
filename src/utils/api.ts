import interceptor from './interceptor';

const formHeaders = {
    method: 'post',
    headers: { 
        'Content-Type': 'multipart/form-data' 
    },
    withCredentials: false,
}

export const getUserLogin = (formData:FormData) => {
    return interceptor({
        url: '/auth/getCrsLogin',
        data: formData,
        ...formHeaders
    });
};
