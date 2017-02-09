import { createReducer } from 'reduxsauce'
import { Types } from '../actions/counterAction'


const initialState = {
    number: 0
}

// the eagle has landed
export const increment = (state = initialState, action) => {
    return { ...state, number: state.number + action.number }
}

// uh oh
export const decrement = (state = initialState, action) => {
    return { ...state, number: state.number - action.number }
}

// map our action types to our reducer functions
export const counterReducer = {
    [Types.INCREMENT]: increment,
    [Types.DECREMENT]: decrement,
}

export default createReducer(initialState, counterReducer)



// const initialState = {
//     number: 0
// }

// const counterReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 number: state.number + action.number
//             }
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 number: state.number - action.number
//             }
//         default: 
//             return state;
//     }
// }

// export default counterReducer;