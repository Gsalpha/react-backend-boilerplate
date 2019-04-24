export interface IGlobalState {
    token: string
    username: string
    routes: IRoute[]
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

export enum actionTypes {
    LOGIN = 'global/login',
    LOGIN_SUC = 'global/login-suc',
    LOGIN_FAIL = 'global/login-fail'
}

export interface ILoginSucAction {
    type: actionTypes.LOGIN_SUC
    payload: ILoginSucPayload
}

export interface ILoginFailAction {
    type: actionTypes.LOGIN_FAIL
    payload: IErrorPayload
}

export type AllActions = ILoginSucAction | ILoginFailAction
