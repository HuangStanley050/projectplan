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

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS

    };
};

export const logoutFail = (err) => {
    return {
        type: actionTypes.LOGOUT_FAIL,
        msg: err
    };
};

export const signupSuccess = () => {
    return {
        type: actionTypes.SIGNUP_SUCCESS
    };
};

export const signupFail = (err) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
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
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(res => dispatch(logoutSuccess()))
            .catch(err => dispatch(logoutFail(err)));
    };
};

export const signup = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => dispatch(signupSuccess()))
            .catch(err => dispatch(signupFail(err)));
    };
};
