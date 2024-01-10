import { create } from 'zustand';
import Cookies from "js-cookie";

const loginStore = create((set) => ({
    isLogin: false,
    login: () => {
        const at = Cookies.get('Authorization');
        const rt = Cookies.get('refresh_token');
        if (at && rt) {
            set({ isLogin: true });
            localStorage.setItem('authenticated', true);
        }
    },
    logout: () => {
        set({ isLogin: false });
        Cookies.remove('Authorization');
        Cookies.remove('refresh_token');
    },
}))

export default loginStore;
