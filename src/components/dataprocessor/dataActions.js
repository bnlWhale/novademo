export const ActionKey={
    Login:'Login',
    ShowResultPanel:'showResultPanel',
    ProgressNum:'progressNum',

}



export const loginRequest = () => ({ type: ActionKey.Login});
export const decrement = () => ({ type: "DEC" });
export const reset = () => ({ type: "RESET" });
