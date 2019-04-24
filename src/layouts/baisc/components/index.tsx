import React, { FunctionComponent, memo, useEffect, useMemo } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { flatRoutes } from '@/utils/route'
import { Routes } from '@/config/routes'
import PrivateRoute from '@/components/PrivateRoute'
import { Spin, Icon } from 'antd'
import style from './index.module.scss'
import { IProps } from '@/layouts/baisc'
import Header from './Header'
const antIcon = <Icon type="loading" style={{ fontSize: 80 }} spin />

const routes = flatRoutes(Routes)
const Basic: FunctionComponent<IProps> = ({
    loading,
    username,
    routes: authRoutes,
    auth
}) => {
    useEffect(() => {
        auth()
    }, [])
    const renderRoutes = useMemo(
        () =>
            routes.map(route => {
                if (route.redirect) {
                    return (
                        <Redirect
                            exact={true}
                            from={route.path}
                            to={route.redirect}
                            key={route.redirect}
                        />
                    )
                }
                if (route.component) {
                    return (
                        <PrivateRoute
                            isAuthorized={authRoutes.includes(route.path)}
                            component={route.component}
                            path={route.path}
                            key={route.path}
                            exact
                        />
                    )
                }
                return null
            }),
        [authRoutes]
    )
    return (
        <Spin
            indicator={antIcon}
            spinning={loading}
            wrapperClassName={style.spin}
        >
            <section className={style.layout}>
                <Header username={username} />
                <Switch>{renderRoutes}</Switch>
            </section>
        </Spin>
    )
}

export default memo(Basic)
