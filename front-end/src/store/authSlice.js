import { createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://127.0.0.1:8000/";

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "./authTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, user: action.payload, error: null };
        case REGISTER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;