// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { AppComponent, Home, Foo, Bar, Test, Ajax, TestPaginate, ShowTable, Material } from './components'
import Main from './components/layouts/main'
import UserInfo from './containers/UserInfo';

import TestLayout from './components/layouts/test/test-layout'
import Button from './components/utils/Button/button'

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
            <Route path="material" component={Material} />
            <Route path="paginate" component={TestPaginate} />
        </Route>
        <Route path="/testlayout" component={TestLayout}>
            <IndexRoute component={Button} />
            <Route path="home" component={Home} />
        </Route>
    </Router>
);

export default Routes;