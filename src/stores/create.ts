import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logMiddleware from 'redux-logger'
import globalReducer from './ducks/global'
import loadingReducer from './ducks/loading'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createBrowserHistory()
const rootReducer = combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    loading: loadingReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
    rootReducer,
    {},
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware,
            logMiddleware
        )
    )
)
