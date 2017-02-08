import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/counter/Show';
import Btn from '../components/counter/Btn';

import * as counterAction from '../actions/counterAction';

class Panel extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        const { number, actions } = this.props;

        return (
            <div>
                <Show num={number} />
                <Btn
                    increment={actions.incrementAction}
                    decrement={actions.decrementAction}
                    />
            </div>
        )
    }
}

// props
const mapStateToProps = (state) => {
    return {
        number: state.counterReducer.number
    }
}

// actions
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);