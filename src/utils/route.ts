export const formateMenu = (routes: IRoute[]) =>
    routes
        .filter(route => route.name && !route.hide)
        .map(route => formateSubMenu(route))
        .filter(route => route)

const formateSubMenu = (route: IRoute): IRoute => {
    if (route.routes && route.routes.length && !route.hide) {
        return {
            ...route,
            routes: formateMenu(route.routes)
        }
    }
    return route
}

export const flatRoutes = (routes: IRoute[]): IRoute[] => {
    let result: IRoute[] = []
    const flat = (child: IRoute) => {
        result.push(child)
        if (child.routes) {
            child.routes.forEach(item => {
                flat(item)
            })
        }
    }
    routes.forEach(item => {
        if (item.routes && item.routes.length) {
            flat(item)
        }
    })
    return result
}

export const formateBreadcrumb = (routers: IRoute[]) => {
    const map = {} as any
    const flattenMenuData = (data: IRoute[]) => {
        data.forEach(menuItem => {
            if (menuItem.routes) {
                flattenMenuData(menuItem.routes)
            }
            map[menuItem.path] = menuItem
        })
    }
    flattenMenuData(routers)
    return map
}

export const urlToList = (url: string) => {
    const urllist = url.split('/').filter(i => i)
    return urllist.map(
        (urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`
    )
}
