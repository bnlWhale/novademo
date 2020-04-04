import * as React from "react";
import {getTxtArray} from "../utils/Utils";


class AboutPage extends React.Component {

    render() {


            return(
                <div >
                    {getTxtArray(5,"MainStage_right_content")}
                </div>

            )
    }

}

export default AboutPage;
