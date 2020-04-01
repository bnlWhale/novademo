import "../cssdir/Novademo.css"
import * as React from "react";
import {getTxtArray, Footer} from "../utils/Utils";

class MainStage extends React.Component {


    render() {

        return(

            <div className="main_content">

                <div className="content_wrap">
                    <div className="l_box">
                        <p>one</p>
                        <p>two</p>
                        <p>three</p>
                        <p>four</p>
                        <p>five</p>
                        <p>six</p>
                        <p>seven</p>
                        <p>eight</p>
                        <p>nine</p>
                        <p>ten</p>
                        <p>eleven</p>
                        <p>twelve</p>
                        <p>thirteen</p>
                        <p>fourteen</p>
                        <p>fifteen</p>
                        <p>sixteen</p>
                        <p>seventeen</p>
                        <p>eighteen</p>
                        <p>nineteen</p>
                        <p>twenty</p>
                        <p>twenty-one</p>
                        <p>twenty-two</p>
                        <p>twenty-three</p>
                        <p>twenty-four</p>
                        <p>twenty-five</p>
                        <p>twenty-six</p>
                        <p>twenty-seven</p>
                        <p>twenty-eight</p>
                        <p>twenty-nine</p>
                        <p>thirty</p>
                    </div>
                    <div className="right_wrap">
                        <div className="r_box">
                            {getTxtArray(22)}
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
