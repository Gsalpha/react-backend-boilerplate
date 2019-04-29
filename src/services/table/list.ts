import axios from '@/utils/axios'
import { IFetchTableListSucPayload } from '@/stores/ducks/table-list.type'

export const axiosTableList = () =>
    axios.request<IFetchTableListSucPayload>({
        url: '/list'
    })
