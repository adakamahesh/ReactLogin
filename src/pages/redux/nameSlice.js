import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsrs = createAsyncThunk('fetchUsers', async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    return data.json()
})// Async API call to fetch users

export const users = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        error: false,
    },
    // Handle async thunk actions
    extraReducers: (builder) => {
        // When API is called → pending
        builder.addCase(fetchUsrs.pending, (state, action) => {
            state.isLoading = true;
        })// When API succeeds → fulfilled
        builder.addCase(fetchUsrs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }) // When API fails → rejected
        builder.addCase(fetchUsrs.rejected, (state, action) => {
            state.error = true;
        })
    }
})

export default users.reducer;