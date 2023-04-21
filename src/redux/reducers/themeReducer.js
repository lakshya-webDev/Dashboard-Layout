const initialState = {
    theme: ""
}
const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "THEME":
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
};

export default themeReducer;