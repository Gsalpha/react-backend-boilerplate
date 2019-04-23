import React, { FunctionComponent, memo } from 'react'
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom'

export interface IPrivateRouteProps extends RouteProps {
    isAuthorized: boolean
}

const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({
    isAuthorized,
    component,
    ...rest
}) => {
    const Component = component as
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>
    return (
        <Route
            {...rest}
            render={(props: RouteComponentProps) => {
                return isAuthorized ? <Component {...props} /> : ''
            }}
        />
    )
}
export default memo(PrivateRoute)
