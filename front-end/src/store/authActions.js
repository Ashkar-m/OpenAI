import axios from "axios";

import { requestStart, registerSuccess, loginSuccess, requestFailure } from "./authSlice";

const BASE_URL = "http://127.0.0.1:8000/";

export const registerUser = (userData) => async(dispatch) => {
    dispatch(requestStart());
    try {
        await axios.post(`${BASE_URL}register/`, userData);
        dispatch(registerSuccess());
    } catch (error) {
        dispatch(requestFailure(error.response?.data || "Registration failed"))
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