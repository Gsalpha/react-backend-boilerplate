import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logMiddleware from 'redux-logger'
import globalReducer from './ducks/global'
import loadingReducer from './ducks/loading'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import history from '@/utils/history'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    loading: loadingReducer
})

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(
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

export default store
