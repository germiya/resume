

const initialState = {
     name: "Germiya Jose's Profile"
};

const AppReducer = (state = initialState , action) => {
    const newState = Object.assign({}, state);
    return newState;
}

export default  AppReducer;
