import {ActionKey} from "./dataActions";

const initState = {
    wasLogin: false,
    ShowResultPanel: false,
    ProgressNum:0,

};

export default (state = initState, action) => {
    console.log("dataReduce:" + action.type + ' ' + state.ShowResultPanel);
    switch (action.type) {

        case ActionKey.Login: {
            return {
                ...state,
                wasLogin: action.val,
            }
        }
            ;

        case ActionKey.ShowResultPanel: {
            return {
                ...state,
                ShowResultPanel: !state.ShowResultPanel,
            };
        }

        case ActionKey.ProgressNum: {
            return {
                ...state,
                ProgressNum: action.val,
            };
        }


        default: {
            return state;
        }
    }
}
;
