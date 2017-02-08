// src/components/About/index.js
import React, { Component } from 'react';
import CallApiContainer from '../containers/callApiContainer'

export default class Ajax extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        // const { classNameName} = this.props;
        return (
            <div>
                <h1>Ajax</h1>
                <CallApiContainer />
            </div>
        );
    }
}