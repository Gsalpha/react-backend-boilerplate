declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

declare interface IErrorPaylod {
    error: string
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

declare interface IPagination {
    total?: number
    pageSize?: number
    current?: number
}

declare interface ITableListItem {
    key: number
    disabled: boolean
    href: string
    avatar: string
    name: string
    title: string
    owner: string
    desc: string
    callNo: number
    status: number
    updatedAt: string
    createdAt: string
    progress: number
}
