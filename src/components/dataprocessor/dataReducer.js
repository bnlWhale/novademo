const initState = {
    books: [],
    wasLogin: false,
};

export default (state = initState, action) => {
    switch (action.type) {

        case "Login":{
            return {
              ...state,
                wasLogin: true
            }
        };
        case "Logout":{
            return {
                ...state,
                wasLogin: false
            }
        };
        default: {
            return state;
        }
    }
};
