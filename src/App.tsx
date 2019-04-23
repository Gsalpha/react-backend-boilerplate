import React from 'react'
import { hot } from 'react-hot-loader/root'
import Dynamic from '@/components/Dynamic'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Login = Dynamic(() =>
    import(/* webpackChunkName:"login" */ '@/pages/login')
)

const Basic = Dynamic(() =>
    import(/*webpackChunkName:"basic"*/ '@/layouts/baisc')
)

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route component={Login} path="/login" exact />
                    <Route component={Basic} path="/" />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default hot(App)
