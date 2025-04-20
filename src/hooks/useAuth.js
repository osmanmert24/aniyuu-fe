import { useCookies } from "react-cookie";
import api from "../api";

export const useAuth = () => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['accessToken', 'refreshToken']);

    const login = async (email, password) => {
        try {
            const { data } = await api.post('/auth/login', { email, password });
            const { accessToken, refreshToken } = data;
    
            console.log("Access Token:", accessToken);
            console.log("Refresh Token:", refreshToken);
    
            setCookie('accessToken', accessToken, { path: '/', maxAge: 60 * 30 });
            setCookie('refreshToken', refreshToken, { path: '/', maxAge: 60 * 60 * 7 });
        } catch (error) {
            console.error("Backend Hatası:", error.response?.data || error.message);
            throw error; // Hata fırlatmaya devam edin
        }
    };

    const register = async (fullName, username, email, password ) => {
        // Backend’in /register endpoint’inde name/email/password beklediğini varsayıyoruz
        const { data } = await api.post('/auth/register', { fullName, username, email, password });
    };

    const logout = () => {
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        window.location.href = '/login';
    };

    return { login, register, logout, cookies };
};