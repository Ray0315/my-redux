// src/components/About/index.js
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

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
                <div>
                    <Panel />
                </div>
                <div style={{ background: 'antiquewhite' }}>
                    <img src={require("../assets/images/lOL8wD5.png")} alt="qq"
                        style={{ "height": "120px" }}></img>
                </div>
                <Button
                    size="large"
                    block={false}>
                    Cool Button!
                </Button>
                <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
                <Link to={{ pathname: '/bar', query: { name: 'Ray0315', id: 80121 } }}>1111</Link>
            </div>
        );
    }
}

