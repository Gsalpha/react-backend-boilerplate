import React from 'react'
import { hot } from 'react-hot-loader/root'
import Dynamic from '@/components/Dynamic'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/stores/create'
const Login = Dynamic(() =>
    import(/* webpackChunkName:"login" */ '@/pages/login')
)

const Basic = Dynamic(() =>
    import(/*webpackChunkName:"basic"*/ '@/layouts/baisc')
)

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route component={Login} path="/login" exact />
                    <Route component={Basic} path="/" />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default hot(App)
