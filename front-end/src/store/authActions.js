import axios from "axios";

import { requestStart, registerSuccess, loginSuccess, requestFailure } from "./authSlice";

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "./authTypes";

const BASE_URL = "http://127.0.0.1:8000/";

export const registerUser = (userData) => async(dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        await axios.post(`${BASE_URL}register/`, userData);
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response?.data?.message || "Registration failed"
        });
    }
};

export const loginUser = (credentials) => async(dispatch) => {
    dispatch(requestStart());
    try {
        const response = await axios.post(`${BASE_URL}login/`, credentials);
        dispatch(loginSuccess(response.data));
    } catch(error) {
        dispatch(requestFailure(error.response?.data || "Login Failed"))
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch(logout());
};