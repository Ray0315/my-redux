// src/components/About/index.js
import React, { Component } from 'react';
import Panel from '../containers/Panel';
import Button from './Button'

export default class Menu extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        // const { classNameName} = this.props;
        return (
            <div>
                <h1>Test</h1>
                <Panel />
                <div style={{ background: 'antiquewhite' }}>
                    <img src={require("../assets/images/lOL8wD5.png")} alt="qq"
                        style={{ "height": "120px" }}></img>
                </div>
                <Button
                    size="large"
                    block={false}>
                    Cool Button!
                </Button>
            </div>
        );
    }
}

