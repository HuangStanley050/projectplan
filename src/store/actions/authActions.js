import * as actionTypes from "./actionTypes.js";

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
    };
};

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL
    };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginStart());
    };
};
