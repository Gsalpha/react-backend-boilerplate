import React from 'react'
import { hot } from 'react-hot-loader/root'
import Dynamic from '@/components/Dynamic'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux'
import store from '@/stores/create'
import history from '@/utils/history'

const Login = Dynamic(() =>
    import(/* webpackChunkName:"login" */ '@/pages/login')
)

const Basic = Dynamic(() =>
    import(/*webpackChunkName:"basic"*/ '@/layouts/baisc')
)

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route component={Login} path="/login" exact />
                    <Route component={Basic} path="/" />
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}

export default hot(App)
