// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { App, Home, Foo, Bar } from './components'

const history = syncHistoryWithStore(browserHistory, configureStore)

const Routes = (props) => (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="foo" component={Foo} />
            <Route path="bar" component={Bar} />
        </Route>
    </Router>
);

export default Routes;