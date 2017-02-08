import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import * as reducers from '../reducers'
// import { count, counterReducer } from '../reducers'

const middleware = [thunk]

// 增加log (REQUEST and RECEIVE)
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const logger = store => next => action => {
  // console.log('======')
  // console.log(store)
  // console.log(next)
  // console.log(action)
  // console.log('======')
  next(action);
}

// 將所有refucers做combine,包含routing的部分
const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

export default createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined,
    applyMiddleware(...middleware,logger)
);

