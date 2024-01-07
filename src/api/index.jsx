import axios from 'axios';
import cookie from 'react-cookies';

const api = axios.create({
    headers: {
        'Content-Type':'application/json'
    },
})

api.interceptors.request.use(
    async (config) => {
        // let token = getCustomCookie('Authorization');
        let token = cookie.load('Authorization');
        if (token !== '') {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use((response) => {
        return response;
    },
    async (error) => {
        console.log(error);
        if (error.response && error.response.status == 401) {
            const reissueUrl = `${process.env.REACT_APP_API_URL}/auth/reissue`;
            const param = {
                accessTk: cookie.load('Authorization'),
                refreshTk: cookie.load('refresh_token'),
            };
            try {
                const response = await api.post(reissueUrl, param);
                if (response.data && response.data.accessTk) {
                    cookie.save('Authorization', response.data.accessTk);
                    error.config.headers['Authorization'] = `Bearer ${response.data.accessTk}`;
                    return api.request(error.config);
                }
            } catch (refreshError) {
                console.log(refreshError)
            }
        }
        return Promise.reject(error);
    }
);

export default api;