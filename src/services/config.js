import axios from 'axios'
import { store } from '@/redux/store.js'

const BASE_URL = 'http://localhost:8080/'

const publicApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

publicApi.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

publicApi.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
);

const privateApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});



privateApi.interceptors.request.use(
    config => {
        try {
            const state = store.getState();
            const accessToken = state?.auth?.authState?.accessToken;
            if (accessToken) {
                config.headers.Authorization = 'Bearer ' + accessToken;
            }
            return config;
        } catch (error) {
            console.error('Error in request interceptor:', error);
            return Promise.reject(error);
        }
    },
    error => Promise.reject(error)
);

privateApi.interceptors.response.use(
    response => response.data,
    error => {
        const { response, config } = error;
        const status = response?.status;

        if (status === 401 || status === 403) {
            console.log('🚀 ~ status === 403:')
            // Chúng ta sẽ Thực hiện kịch bản refresh token tại đây
        }

        return Promise.reject(error);
    }
);

export { publicApi, privateApi }


