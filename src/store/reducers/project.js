import * as actionTypes from "../actions/actionTypes";
const initialState = {
    loading: false

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false

            };
        case actionTypes.CREATE_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;

    }

};

export default reducer;
