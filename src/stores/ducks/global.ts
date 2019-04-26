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
    ILoginSucPayload,
    ILogoutSucAction
} from '@/stores/ducks/global.type'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { setLoadingAction } from '@/stores/ducks/loading'
import { auth, login } from '@/services/global'
import { notification } from 'antd'
import { AppState } from '@/stores/create'
import { Prefix } from '@/config/prefix'
import { replace } from 'connected-react-router'
import { isLogined } from '@/utils'

// Action Creators
const loginSucAction = (payload: ILoginSucPayload): ILoginSucAction => ({
    type: actionTypes.LOGIN_SUC,
    payload
})

const logoutSucAction = (): ILogoutSucAction => ({
    type: actionTypes.LOGOUT
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
        // window.location.replace('/')
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
    if (!isLogined()) {
        if (window.location.href.indexOf('login') === -1) {
            dispatch(replace('/login'))
        } else {
            dispatch(
                setLoadingAction({
                    scope: Prefix.auth,
                    loading: false
                })
            )
        }
    } else {
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
            if (window.location.href.indexOf('login') > -1) {
                dispatch(replace('/'))
            }
        } catch (e) {
            dispatch(
                setLoadingAction({
                    scope: Prefix.auth,
                    loading: false
                })
            )
            localStorage.setItem('token', '')
            if (window.location.href.indexOf('login') === -1) {
                dispatch(replace('/login'))
            }
            dispatch(authFailAction(e))
            notification.error({
                message: '获取基本信息',
                description: e.message
            })
        }
    }
}

export const logoutAction = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => dispatch => {
    dispatch(logoutSucAction())
    localStorage.setItem('token', '')
    dispatch(replace('/login'))
}
// reducers
const initialState: IGlobalState = {
    token: localStorage.getItem('token') || '',
    username: '',
    routes: []
}

export default (state = initialState, action: AllActions) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUC:
            return { ...state, token: action.payload.token }
        case actionTypes.LOGIN_FAIL:
        case actionTypes.LOGOUT:
        case actionTypes.AUTH_FAIL:
            return { ...state, token: '', username: '', routes: [] }
        case actionTypes.AUTH_SUC:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
