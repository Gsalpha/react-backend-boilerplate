declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

declare interface IRoute {
    path: string
    name?: string
    redirect?: string
    icon?: string
    hide?: boolean
    component?: any
    routes?: IRoute[]
}
