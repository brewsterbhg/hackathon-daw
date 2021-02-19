import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './state/enhancers/monitorReducers'
import loggerMiddleware from './state/middleware/logger'
import rootReducer from './state/reducers'

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}
