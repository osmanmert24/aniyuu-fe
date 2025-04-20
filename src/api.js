import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { Cookies } from "react-cookie";
import { configs } from "eslint-plugin-react-refresh";

const cookies = new Cookies();
const baseURL = 'https://api.aniyuu.com';

const api = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' }
});

const refreshAccessToken = async () => {
    const refreshToken = cookies.get('refreshToken');
    if (!refreshToken) throw new Error('Refresh token yok');
    const {data} = await axios.post(`${baseURL}/auth/refresh-token`, { refreshToken });
    const { accessToken: newAccessToken } = data;
    
    cookies.get('accessToken', newAccessToken, { path: '/', maxAge: 60 * 30 });
    return newAccessToken;
};

api.interceptors.request.use(async config => {
    let accessToken = cookies.get('accessToken');
    if (accessToken) {
        const { exp } = jwtDecode(accessToken);
        const isExpired = dayjs.unix(exp).diff(dayjs() < 1);
        if (isExpired) {
            try {
                accessToken = await refreshAccessToken();
            } catch(err) {
                //yenileme başarısızsa yani refresh token expired ise
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
                window.location.href = '/login';
                return Promise.reject(err);
            }
        }
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, error => Promise.reject(error));

export default api;