import axios from '@/utils/axios'
import {
    IAuthSucPayload,
    ILoginPayload,
    ILoginSucPayload
} from '@/stores/ducks/global.type'

export const login = (payload: ILoginPayload) =>
    axios.request<ILoginSucPayload>({
        url: '/login',
        method: 'post',
        data: payload
    })

export const auth = () =>
    axios.request<IAuthSucPayload>({
        url: '/auth'
    })
