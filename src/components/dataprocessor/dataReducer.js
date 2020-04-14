import {ActionKey} from "./dataActions";

const initState = {
    books: [],
    wasLogin: 'aaaa',
};

export default (state = initState, action) => {
    switch (action.type) {

        case ActionKey.Login:{
            return {
              ...state,
                wasLogin: action.val,
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
