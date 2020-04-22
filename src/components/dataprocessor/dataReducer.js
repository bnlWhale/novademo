import {ActionKey} from "./dataActions";

const initState = {
    books: [],
    wasLogin: 'aaaa',
    ShowResultPanel:false,
};

export default (state = initState, action) => {
    console.log("dataReduce:"+action.type+' '+state.ShowResultPanel);
    switch (action.type) {

        case ActionKey.Login:{
            return {
              ...state,
                wasLogin: action.val,
            }
        };

        case ActionKey.ShowResultPanel:{
            return{
                ...state,
                ShowResultPanel: !state.ShowResultPanel,
            }


        }

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
