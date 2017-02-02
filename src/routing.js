// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { App, Home, Foo, Bar,Menu, Test, Ajax } from './components'

const history = syncHistoryWithStore(browserHistory, configureStore)

const Routes = (props) => (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="foo" component={Foo} />
            <Route path="bar" component={Bar} />
            <Route path="menu" component={Menu} />
            <Route path="test" component={Test} />
            <Route path="ajax" component={Ajax} />
        </Route>
    </Router>
);

export default Routes;