export interface IGlobalState {
    token: string
    username: string
    routes: string[]
}

export interface ILoginPayload {
    username: string
    password: string
}

export interface ILoginSucPayload {
    token: string
}

export interface IErrorPayload {
    error: string
}

export interface IAuthSucPayload {
    username: string
    routes: string[]
}

export enum actionTypes {
    LOGIN_SUC = 'global/login-suc',
    LOGIN_FAIL = 'global/login-fail',
    AUTH_SUC = 'global/auth-suc',
    AUTH_FAIL = 'global/auth-fail',
    LOGOUT = 'globa/logout'
}

export interface ILoginSucAction {
    type: actionTypes.LOGIN_SUC
    payload: ILoginSucPayload
}

export interface ILoginFailAction {
    type: actionTypes.LOGIN_FAIL
    payload: IErrorPayload
}

export interface IAuthSucAction {
    type: actionTypes.AUTH_SUC
    payload: IAuthSucPayload
}

export interface IAuthFailAction {
    type: actionTypes.AUTH_FAIL
    payload: IErrorPayload
}

export interface ILogoutSucAction {
    type: actionTypes.LOGOUT
}

export type AllActions =
    | ILoginSucAction
    | ILoginFailAction
    | IAuthSucAction
    | IAuthFailAction
    | ILogoutSucAction
