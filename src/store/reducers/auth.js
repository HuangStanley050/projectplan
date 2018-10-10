import * as actionTypes from "../actions/actionTypes";
const initialState = {
    authStatus: false,
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
                error: null
            };
        case actionTypes.LOGIN_FAIL:
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
