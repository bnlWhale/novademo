import * as React from 'react';
import './App.css';
import MainStage from "./components/container/MainStage";
import AboutPage from "./components/container/AboutPage";
import HomePage from "./components/container/HomePage";
import "./components/cssdir/HomePageCss.css";
import MainHeader from "./components/container/MainHeader";
import {
    BrowserRouter as Router,
    withRouter,
    Route,
    Switch
} from 'react-router-dom';
import HeaderNavibar from "./components/container/HeaderNavibar";
import MainPage from "./components/container/MainPage";

class App extends React.Component {

    render() {
        return (

            <div className="App">
                <div className="main_header">
                    <HeaderNavibar/>
                </div>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/mainPage">
                        <MainPage/>
                    </Route>
                    <Route path="/mainStage">
                        <MainStage/>
                    </Route>
                </Switch>
            </div>


        );

    }


}


export default withRouter(App);
