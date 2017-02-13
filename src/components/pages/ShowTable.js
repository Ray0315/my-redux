import React, { Component } from 'react';
import Paginate from '../utils/Paginate/paginate'
import Table from '../utils/Table/table'
import MyAwesomeReactComponent from '../utils/Button/button'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();



class ShowTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <MyAwesomeReactComponent />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default ShowTable;