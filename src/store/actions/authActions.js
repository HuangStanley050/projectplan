import * as actionTypes from "./actionTypes.js";

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = (userID) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userID: userID
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

export const signupSuccess = (userID) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        userID: userID
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
            .then(res => dispatch(loginSuccess(res.user.uid)))
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

export const signup = (email, password, firstName, lastName) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                //console.log(res.user.uid); //userID
                dispatch(signupSuccess(res.user.uid));

                return res.user.uid;
            })
            .then(res => {
                firestore.collection('users').doc(res).set({
                        firstName: firstName,
                        lastName: lastName,
                        initials: firstName[0] + lastName[0]
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            })
            .catch(err => dispatch(signupFail(err)));

    };
};
