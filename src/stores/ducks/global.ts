import {
    actionTypes,
    AllActions,
    IAuthFailAction,
    IAuthSucAction,
    IAuthSucPayload,
    IErrorPayload,
    IGlobalState,
    ILoginPayload,
    ILoginSucAction,
    ILoginSucPayload
} from '@/stores/ducks/global.type'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { setLoadingAction } from '@/stores/ducks/loading'
import { auth, login } from '@/services/global'
import { notification } from 'antd'
import { AppState } from '@/stores/create'
import { replace } from 'connected-react-router'
import { Prefix } from '@/config/prefix'

// Action Creators
const loginSucAction = (payload: ILoginSucPayload): ILoginSucAction => ({
    type: actionTypes.LOGIN_SUC,
    payload
})

const loginFailAction = (payload: IErrorPayload) => ({
    type: actionTypes.LOGIN_FAIL,
    payload
})

const authSucAction = (payload: IAuthSucPayload): IAuthSucAction => ({
    type: actionTypes.AUTH_SUC,
    payload
})

const authFailAction = (payload: IErrorPayload): IAuthFailAction => ({
    type: actionTypes.AUTH_FAIL,
    payload
})

// Side effects
export const loginAction = (
    payload: ILoginPayload
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(
        setLoadingAction({
            scope: Prefix.login,
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
                scope: Prefix.login,
                loading: false
            })
        )
        dispatch(replace('/'))
    } catch (e) {
        dispatch(
            setLoadingAction({
                scope: Prefix.login,
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

export const authAction = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => async dispatch => {
    dispatch(
        setLoadingAction({
            scope: Prefix.auth,
            loading: true
        })
    )
    try {
        const {
            data: { username, routes }
        } = await auth()
        dispatch(
            authSucAction({
                username,
                routes
            })
        )
        dispatch(
            setLoadingAction({
                scope: Prefix.auth,
                loading: false
            })
        )
    } catch (e) {
        dispatch(
            setLoadingAction({
                scope: Prefix.auth,
                loading: false
            })
        )
        dispatch(authFailAction(e))
        notification.error({
            message: '或其基本信息失败',
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
        case actionTypes.AUTH_FAIL:
            return { ...state, token: '', username: '', routes: [] }
        case actionTypes.AUTH_SUC:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
