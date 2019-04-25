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
    }
]
