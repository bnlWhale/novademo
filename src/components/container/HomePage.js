import "../cssdir/HomePageCss.css"
import * as React from "react";
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';


class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {



        return(
            <router>
                <switch>

                </switch>


                <div>
                    this is a home page !
                </div>
            </router>

        )
    }

}

export default withRouter(HomePage);
