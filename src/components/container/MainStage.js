import "../cssdir/Novademo.css"
import * as React from "react";
import {getTxtArray, getItemArray} from "../utils/Utils";
import SideBarPage from "./SideBarPage";
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import {routes} from "./RouterConfig";
import HomePage from "./HomePage";


class MainStage extends React.Component {


    render() {

        return(

            <div className="main_content">
                <div className="content_wrap">
                    <SideBarPage />
                    <div className="right_wrap">
                        <div className="r_box">
                            <Switch>
                                {routes.map((route, index) => (
                                    // Render more <Route>s with the same paths as
                                    // above, but different components this time.
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
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
