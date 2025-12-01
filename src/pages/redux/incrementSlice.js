import { createSlice } from "@reduxjs/toolkit";//createSlice creates actions + reducer together in one place.

const initialState = {
    value: 0,
}

export const incrementSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            // state.value ++;
            state.value +=1;
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment,decrement } = incrementSlice.actions;
export default incrementSlice.reducer;