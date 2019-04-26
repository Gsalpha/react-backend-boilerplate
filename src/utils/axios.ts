import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.REACT_APP_FETCH_URL,
    timeout: 10000,
    withCredentials: true
})
axios.interceptors.response.use(
    res => res,
    error => {
        const { response } = error
        if (!response || !response.data || !response.data.message) {
            return Promise.reject({ message: '未知错误' })
        }
        return Promise.reject({ message: response.data.message })
    }
)
export default axios
