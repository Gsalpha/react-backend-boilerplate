export enum Loading {
    login = 'login'
}

export interface ISetLoadingPayload {
    scope: Loading
    loading: boolean
}

type TLoadingState = { [O in Loading]: boolean }

const initialState: TLoadingState = {
    login: false
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
