import * as actionTypes from "../actions/actionTypes";
const initialState = {
    authStatus: false,
    userID: null,
    error: null

};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state

            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                authStatus: true,
                userID: action.userID,
                error: null
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                authStatus: false,
                error: action.msg
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                authStatus: false,
                error: null
            };
        case actionTypes.LOGOUT_FAIL:
            return {
                ...state,
                error: action.msg
            };
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                authStatus: true,
                userID: action.userID
            };
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                authStatus: false,
                error: action.msg
            };
        default:
            return state;
    }

};

export default reducer;
