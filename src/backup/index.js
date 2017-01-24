import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/mainReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
