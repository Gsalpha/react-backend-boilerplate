import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logMiddleware from 'redux-logger'
import globalReducer from './ducks/global'
import loadingReducer from './ducks/loading'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    global: globalReducer,
    loading: loadingReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunkMiddleware, logMiddleware))
)
