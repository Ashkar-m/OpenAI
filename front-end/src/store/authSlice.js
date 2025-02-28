import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        requestStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state) => {
            state.loading = false;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.username;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        },
        requestFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
});

export const { requestStart, registerSuccess, loginSuccess, requestFailure, logout } = authSlice.actions;

export default authSlice.reducer;