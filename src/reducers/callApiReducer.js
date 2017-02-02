const initialState = {
    number: 3
}

const callApiReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC':
            return {
                ...state,
                number: state.number + action.number
            }
        case 'DEC':
            return {
                ...state,
                number: state.number - action.number
            }
        default: 
            return state;
    }
}

export default callApiReducer;