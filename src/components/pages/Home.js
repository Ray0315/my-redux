// src/components/About/index.js
import React, { Component } from 'react';

import Count from '../../containers/count/count';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        // const { classNameName} = this.props;
        return (
            <div>
                <input type="text" ref={(input) => this.input = input} />
                <input type="button" name="" value="test" onClick={this.handleSubmit}/>
                <Count />
            </div>
        );
    }
}

