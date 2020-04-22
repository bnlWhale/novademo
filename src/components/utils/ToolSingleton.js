/*


MyStore.js
const store = createStore(myReducer);
export store;
or

const store = createStore(myReducer);
export default store;


MyClient.js
import {store} from './MyStore'
store.dispatch(...)


or if you used default
import store from './MyStore'
store.dispatch(...)

 */
import * as React from 'react';
import { Result, Button } from 'antd';

let result;
const creatResultPanel =()=>{
    return(
        <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
                <Button type="primary" key="console">
                    Go Console
                </Button>
            }
        />
    )
}

const createSingle = fn => {
    alert("init get result panel "+result);
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};
export function getSingle(){
    return createSingle(creatResultPanel)();
}



