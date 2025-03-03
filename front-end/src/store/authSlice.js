
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        registerSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        registerFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { registerSuccess, registerFailure, logout } = authSlice.actions;
export default authSlice.reducer;
