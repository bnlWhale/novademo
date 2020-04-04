import "../cssdir/Novademo.css"
import * as React from "react";
import {getTxtArray, getItemArray} from "../utils/Utils";
import SideBarPage from "./SideBarPage";
import {routes} from "./RouterConfig";
import HomePage from "./HomePage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

class MainStage extends React.Component {


    render() {
        let { path, url } = useRouteMatch();
        return(

            <div className="main_content">
                <div className="content_wrap">
                    <SideBarPage />
                    <div className="right_wrap">
                        <div className="r_box">
                            <Switch>

                            </Switch>
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
