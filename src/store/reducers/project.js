const initialState = {
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
    return state;
};

export default reducer;