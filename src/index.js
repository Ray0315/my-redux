
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Routing from './routing'


ReactDOM.render(
  <Provider store={configureStore}>
    <div>
      <Routing />
    </div>
  </Provider>,
  document.getElementById('root')
)