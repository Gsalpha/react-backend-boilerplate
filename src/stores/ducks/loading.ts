import { Prefix } from '@/config/prefix'

export interface ISetLoadingPayload {
    scope: Prefix
    loading: boolean
}

type TLoadingState = { [O in Prefix]?: boolean }

const initialState: TLoadingState = {
    login: false,
    auth: true,
    tableList: true
}

export const setLoadingAction = ({ scope, loading }: ISetLoadingPayload) => ({
    type: 'SET_LOADING',
    payload: { scope, loading }
})

export default (
    state = initialState,
    action: ReturnType<typeof setLoadingAction>
) => {
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            [action.payload.scope]: action.payload.loading
        }
    }
    return state
}
