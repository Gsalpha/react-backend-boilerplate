import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logMiddleware from 'redux-logger'
import globalReducer from './ducks/global'
import loadingReducer from './ducks/loading'
import paginationReducer from './ducks/pagination'
import tableListReducer from './ducks/table-list'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import history from '@/utils/history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    tableList: tableListReducer,
    pagination: paginationReducer,
    loading: loadingReducer
})

export type AppState = ReturnType<typeof rootReducer>
const middlewares = [routerMiddleware(history), thunkMiddleware]
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logMiddleware)
}
const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
)

export default store
