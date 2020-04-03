import * as React from "react";
import {getTxtArray, getItemArray} from "../utils/Utils";
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';
import {routes} from "./RouterConfig";

class SideBarPage extends React.Component{



    render() {
        return(
            <div className="l_box">
                {/*
                 {getItemArray(30, 'MainStage_side_bar')}
                */}
                <div>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/bubblegum">Bubblegum</Link>
                        </li>
                        <li>
                            <Link to="/shoelaces">Shoelaces</Link>
                        </li>
                    </ul>
                    <Switch>
                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>


            </div>
        )
    }

}
export default SideBarPage;