import * as actionTypes from "../actions/actionTypes";
const initialState = {
    email: null,
    password: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state

            };
        default:
            return state;
    }

};

export default reducer;
