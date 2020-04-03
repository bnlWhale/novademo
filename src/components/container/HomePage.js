import "../cssdir/HomePageCss.css"
import * as React from "react";
import {getTxtArray, getItemArray} from "../utils/Utils";

class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                {getTxtArray(22,"MainStage_right_content")}
            </div>

        )
    }

}

export default HomePage;
