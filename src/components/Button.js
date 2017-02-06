import React from 'react'
import Radium from 'radium'

var styles = {
    base: {
        background: 'blue',
        border: 0,
        borderRadius: 4,
        color: 'white',
        padding: '1.5em',

        ':hover': {
            backgroundColor: 'red'
        },

        ':focus': {
            backgroundColor: 'green'
        },

        ':active': {
            backgroundColor: 'yellow'
        },
    },

    block: {
        display: 'block',

        ':hover': {

            'backgroundColor': 'black'
        }
    },
};


class Button extends React.Component {
    render() {
        return (
            <button
                style={[
                    styles.base,
                    this.props.block && styles.block
                ]}>
                {this.props.children}
            </button>
        );
    }
}

module.exports = Radium(Button);