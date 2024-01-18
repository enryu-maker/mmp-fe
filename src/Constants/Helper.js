import axios from 'axios';
export const baseURL = 'http://127.0.0.1:8080/api'
// export const baseURL = 'http://127.0.0.1:8080/api'
let headers = {};
const axiosIns = axios.create({
    baseURL: 'http://127.0.0.1:8080/api',
    // baseURL :'http://127.0.0.1:8080/api',

    headers,
});
axiosIns.interceptors.request.use(

    async (config) => {
        const token = await localStorage.getItem("access");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error.msg);
    },
);

axiosIns.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        if (error.response.status === 401) {
            console.log("401");
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosIns;