import "../cssdir/Novademo.css"
import * as React from "react";
import {getTxtArray, getItemArray} from "../utils/Utils";

class MainStage extends React.Component {


    render() {

        return(

            <div className="main_content">

                <div className="content_wrap">
                    <div className="l_box">
                        {getItemArray(30, 'MainStage_side_bar')}
                    </div>
                    <div className="right_wrap">
                        <div className="r_box">
                            {getTxtArray(22,"MainStage_right_content")}
                        </div>
                        <div className="main_footer">
                            footer
                        </div>
                    </div>


                </div>
            </div>
        )










    }

}

export default MainStage;
