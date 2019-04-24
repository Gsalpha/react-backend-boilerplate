import {
    actionTypes,
    AllActions,
    IErrorPayload,
    IGlobalState,
    ILoginPayload,
    ILoginSucAction,
    ILoginSucPayload
} from '@/stores/ducks/global.type'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { Loading, setLoadingAction } from '@/stores/ducks/loading'
import { login } from '@/services/global'
import { notification } from 'antd'
import { AppState } from '@/stores/create'
import { replace } from 'connected-react-router'

// Action Creators
const loginSucAction = (payload: ILoginSucPayload): ILoginSucAction => ({
    type: actionTypes.LOGIN_SUC,
    payload
})

const loginFailAction = (payload: IErrorPayload) => ({
    type: actionTypes.LOGIN_FAIL,
    payload
})

// Side effects
export const loginAction = (
    payload: ILoginPayload
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(
        setLoadingAction({
            scope: Loading.login,
            loading: true
        })
    )
    try {
        const {
            data: { token }
        } = await login(payload)
        localStorage.setItem('token', token)
        dispatch(loginSucAction({ token }))
        dispatch(
            setLoadingAction({
                scope: Loading.login,
                loading: false
            })
        )
        dispatch(replace('/'))
    } catch (e) {
        dispatch(
            setLoadingAction({
                scope: Loading.login,
                loading: false
            })
        )
        dispatch(loginFailAction(e))
        notification.error({
            message: '登录失败',
            description: e.message
        })
    }
}

// reducers
const initialState: IGlobalState = {
    token: '',
    username: '',
    routes: []
}

export default (state = initialState, action: AllActions) => {
    switch (action.type) {
        case actionTypes.LOGIN_FAIL:
            return { ...state, token: '', username: '', routes: [] }
        case actionTypes.LOGIN_SUC:
            return { ...state, token: action.payload.token }
        default:
            return state
    }
}
