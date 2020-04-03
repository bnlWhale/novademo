import * as React from 'react';
import './App.css';
import MainStage from "./components/container/MainStage";
import AboutPage from "./components/container/AboutPage";
import HomePage from "./components/container/HomePage";
import "./components/cssdir/HomePageCss.css";
import MainHeader from "./components/container/MainHeader";
import {
    BrowserRouter,
    withRouter,
    Switch
} from 'react-router-dom';
import HeaderNavibar from "./components/container/HeaderNavibar";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="main_header">
                    <HeaderNavibar/>
                </div>
                <MainStage/>
            </div>
        );

    }


}


export default withRouter(App);
