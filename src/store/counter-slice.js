import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // EVEN IT SEEMS WE ARE MUTATING THE STATE, REDUX TOOLKIT USES IMMER TO PREVENT US
            // FROM DOING SOMETHING LIKE THIS HERE AND CREATES NEW STATE TO OVERRIDE THE EXISTING ONE
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})


export default counterSlice