import React, { FunctionComponent, memo } from 'react'
import {
    Redirect,
    Route,
    RouteComponentProps,
    RouteProps
} from 'react-router-dom'
import { isLogined } from '@/utils'

export interface IPrivateRouteProps extends RouteProps {
    isAuthorized: boolean
    loading: boolean
}

const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({
    isAuthorized,
    component,
    loading,
    ...rest
}) => {
    const Component = component as
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>
    return (
        <Route
            {...rest}
            render={(props: RouteComponentProps) => {
                if (loading) {
                    return null
                }
                if (!isLogined()) {
                    return <Redirect to="/login" />
                }
                if (props.location.pathname.indexOf('exception') > -1) {
                    return <Component {...props} />
                }
                return isAuthorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/exception/403" />
                )
            }}
        />
    )
}
export default memo(PrivateRoute)
