

const initialState = {
     name: "Germiya K Jose"
};

const AppReducer = (state = initialState , action) => {
    const newState = Object.assign({}, state);
    return newState;
}

export default  AppReducer;
