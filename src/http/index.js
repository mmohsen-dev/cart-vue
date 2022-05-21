import axios from 'axios'
import {ElMessage} from 'element-plus'
import router from '@/router/index'
import {localGet} from '@/utils'
import {useCookies} from "vue3-cookies";

const {cookies} = useCookies()

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept'] = 'application/json'
axios.defaults.headers['locale'] = localGet('locale') || 'ar'
// axios.defaults.headers['Authorization'] = localGet('token') ? `Bearer ${localGet('token')}` : ''
axios.defaults.headers['Authorization'] = cookies.get('token') ? `Bearer ${cookies.get('token')}` : ''

axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 401) {
            // cookies.remove('token')
            router.push('/login')
        } else {
            if (error.response.data.message) ElMessage.error(res.data.message)
            return Promise.reject(res.data)
        }
    }
);

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}