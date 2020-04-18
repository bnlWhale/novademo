import * as React from 'react';
import '../cssdir/LayoutTest.css';
import 'antd/dist/antd.css';
import { Progress, Button } from 'antd';

export default ()=>{

    return(
        <div className="main_content_test">
            <div className="main_sub_content_test">
                <div className="main_content_item"> item_0</div>
                <div className="main_content_item"> item_1</div>
                <div className="main_content_item_1">
                    <div className="sub_item_test"> sub_item_0</div>
                    <div className="sub_item_test"> sub_item_1</div>
                    <div className="sub_item_test"> sub_item_2 sub_item_2
                        sub_item_2 sub_item_2 sub_item_2 sub_item_2 sub_item_2 sub_item_2 sub_item_2 sub_item_2
                    </div>
                </div>
            </div>
            {/*   <div className="main_footer_test">
                    footer
                 </div>
             */}


        </div>

    )
}

