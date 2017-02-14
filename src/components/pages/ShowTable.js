import React, { Component } from 'react';
import Paginate from '../utils/Paginate/paginate'
import Table from '../utils/Table/table'

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
                    <Paginate url={'https://jsonbin.org/ray0315/test'}
                        author={'adele'}
                        perPage={3} />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default ShowTable;