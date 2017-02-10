// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { AppComponent, Home, Foo, Bar, Test, Ajax, TestPaginate, ShowTable } from './components'
import Main from './components/layouts/main'
import UserInfo from './containers/UserInfo';

const history = syncHistoryWithStore(browserHistory, configureStore)

const Routes = (props) => (
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="foo/:name/:id" component={Foo} />
            <Route path="bar" component={Bar} />
            <Route path="test" component={Test} />
            <Route path="ajax" component={Ajax} />
            <Route path="userInfo" component={UserInfo} />
            <Route path="showTable" component={ShowTable} />
            <Route path="paginate" component={TestPaginate} />
        </Route>
    </Router>
);

export default Routes;