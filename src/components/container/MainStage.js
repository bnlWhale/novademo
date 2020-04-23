import "../cssdir/Novademo.css"
import React from "react";
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
import ImageFile from "./ImageFile";
import PreviewImageUpload from "./PreviewImageUpload";
import FileUploadHook from "./FileUploadHook";

function MainStage() {


    let {path, url} = useRouteMatch();
    return (

        <div className="main_content">
            <div className="content_wrap">
                <SideBarPage/>
                <div className="right_wrap">
                    <div className="r_box">
                        <Switch>
                            <Route exact path={path}>
                                <h3>Please select a topic.</h3>
                            </Route>
                            <Route path={`${path}/:topicId`}>
                                <Topic />
                            </Route>
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

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
    switch (topicId) {
        case "components":
            topicId = <ImageFile/>;
            break;
        case "rendering":
            topicId = <PreviewImageUpload/>;
            break;
        case "props-v-state":
            topicId = <FileUploadHook/>;
            break;
        default:break;
    }


    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}

export default MainStage;
