import React, { memo } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { flatRoutes } from '@/utils/route'
import { Routes } from '@/config/routes'
import PrivateRoute from '@/components/PrivateRoute'
const routes = flatRoutes(Routes)
const Basic = () => {
    return (
        <Switch>
            {routes.map(route => {
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
                        <Route
                            component={route.component}
                            path={route.path}
                            key={route.path}
                            exact
                        />
                    )
                }
                return null
            })}
        </Switch>
    )
}

export default memo(Basic)
