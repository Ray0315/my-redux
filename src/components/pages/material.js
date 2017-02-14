import React, { Component } from 'react';
import Paginate from '../utils/Paginate/paginate'
import Nullable from '../utils/select/Nullable'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ShowTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChildCallback = this.handleChildCallback.bind(this);

    }

    handleChildCallback(childValueObj) {
        this.setState({ data: childValueObj.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Data: {this.state.data}</h2>
                <MuiThemeProvider>
                    <Nullable
                        ParentsFunction={this.handleChildCallback}
                        ref={(input) => this.input = input}
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default ShowTable;