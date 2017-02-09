import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  INCREMENT
  DECREMENT
`); 

export const incrementAction = () => ({ type: Types.INCREMENT, number: 1 })
export const decrementAction = () => ({ type: Types.DECREMENT, number: 1 })


// export const incrementAction = () => ({ type: 'INCREMENT', number: 1 })
// export const decrementAction = () => ({ type: 'DECREMENT', number: 1 })
