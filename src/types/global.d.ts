declare interface IRoute {
    path: string
    name?: string
    redirect?: string
    icon?: string
    hide?: boolean
    component?: any
    routes?: IRoute[]
}
