import * as React from "react";
import LeftSideBar from "./LeftSideBar";
import {Route, Switch} from "react-router-dom";
import {routes} from "./RouterConfig";


class MainPage extends React.Component{


    render() {
        return (
            <div className="main_content">
                <div className="content_wrap">
                    <LeftSideBar />
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

export default MainPage;
