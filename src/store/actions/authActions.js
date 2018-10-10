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

export const loginFail = (err) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        msg: err
    };
};

export const login = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        dispatch(loginStart());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => dispatch(loginSuccess()))
            .catch(err => dispatch(loginFail(err.message)));
    };
};

export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {

    };
};
