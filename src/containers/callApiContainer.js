import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/counter/Show';
import Btn from '../components/counter/Btn';

import * as callApiAction from '../actions/callApiAction';

class callApiContainer extends React.Component {
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
        number: state.callApiReducer.number
    }
}

// actions
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(callApiAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(callApiContainer);


