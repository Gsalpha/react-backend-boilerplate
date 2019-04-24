import axios from '@/utils/axios'
import { ILoginPayload, ILoginSucPayload } from '@/stores/ducks/global.type'

export const login = (payload: ILoginPayload) =>
    axios.request<ILoginSucPayload>({
        url: '/login',
        method: 'post',
        data: payload
    })
