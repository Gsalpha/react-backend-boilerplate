import Dynamic from '@/components/Dynamic'

export const Routes: IRoute[] = [
    {
        path: '/',
        redirect: '/dashboard/analysis',
        hide: true
    },
    {
        path: '/dashboard',
        name: '控制台',
        icon: 'dashboard',
        redirect: '/dashboard/analysis',
        routes: [
            {
                path: '/dashboard/analysis',
                name: '分析页',
                component: Dynamic(() =>
                    import(
                        /*webpackChunkName:"dashboard-analysis"*/ '@/pages/dashboard/analysis'
                    )
                ),
                routes: [
                    {
                        path: '/dashboard/analysis/x',
                        name: '呵呵',
                        component: Dynamic(() =>
                            import(
                                /*webpackChunkName:"dashboard-analysis"*/ '@/pages/dashboard/analysis'
                            )
                        )
                    }
                ]
            }
        ]
    },
    {
        path: '/exception/403',
        name: '403',
        hide: true,
        component: Dynamic(() =>
            import(/*webpackChunkName:"403"*/ '@/pages/exception/403')
        )
    },
    {
        path: '/exception/404',
        name: '404',
        hide: true,
        component: Dynamic(() =>
            import(/*webpackChunkName:"403"*/ '@/pages/exception/404')
        )
    },
    {
        path: '/exception/500',
        name: '500',
        hide: true,
        component: Dynamic(() =>
            import(/*webpackChunkName:"403"*/ '@/pages/exception/500')
        )
    }
]
