// import { createStore, applyMiddleware } from "redux";

// const reducer = (initialState = 0, action) => {
//   if (action.type === "INC") {
//     return initialState + 1;
//   } else if (action.type === "DEC") {
//     return initialState - 1;
//   }
//   return initialState;
// }

// const logger = store => next => action => {
//   action.type = "DEC"
//   console.log(action)
//   next(action);
// }

// const middleware = applyMiddleware(logger);

// const store = createStore(reducer, 1, middleware)

// store.subscribe(() => {
//   console.log("store changed", store.getState());
// })

// store.dispatch({ type: "INC" })
// store.dispatch({ type: "INC" })
// store.dispatch({ type: "INC" })
// store.dispatch({ type: "DEC" })
// store.dispatch({ type: "DEC" })
// store.dispatch({ type: "DEC" })



import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Routes from './routing'


ReactDOM.render(
  <Provider store={configureStore}>
    <div>
      <Routes />
    </div>
  </Provider>,
  document.getElementById('root')
)
