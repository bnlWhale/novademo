import "../cssdir/HomePageCss.css"
import * as React from "react";
import {getTxtArray, getItemArray} from "../utils/Utils";
import PreviewImageUpload from "./PreviewImageUpload";

class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <div>
                    <PreviewImageUpload/>
                </div>
                <div>
                    {getTxtArray(22,"MainStage_right_content")}
                </div>
                <div className="main_footer">
                    footer
                </div>
            </div>

        )
    }

}

export default HomePage;
