import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'username',
    initialState: {
        users: []
    },
    reducers: {
        addusers: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const { addusers } = userSlice.actions;
export default userSlice.reducer;