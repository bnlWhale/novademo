import * as React from 'react';
import '../cssdir/CssOnFlexLayout.css'
import 'antd/dist/antd.css';
import { Progress, Button } from 'antd';



export default ()=>{

    return(
        <div className="container">
            <div className="container_1">
                <div className="item_1"><h3>stretching all, fixed space</h3></div>
                <div className="item_1">item 1</div>
                <div className="item_1">item 2</div>
                <div className="item_1">item 3</div>
            </div>

        </div>

    )
}