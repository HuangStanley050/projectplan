import * as actionTypes from "../actions/actionTypes";
const initialState = {
    loading: false,
    projects: [{
            id: 1,
            title: "help with homework",
            content: "blah blah blah"
        },
        {
            id: 2,
            title: "clean your room",
            content: "asdfdsaf  dsafdsafsaf"
        },
        {
            id: 3,
            title: "wash clothes",
            content: "adsfdsafdsaf"
        }
    ]
}

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
