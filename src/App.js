import * as React from 'react';
import './App.css';
import { connect } from "react-redux";
import MainStage from "./components/container/MainStage";
import AboutPage from "./components/container/AboutPage";
import HomePage from "./components/container/HomePage";
import "./components/cssdir/HomePageCss.css";
import MainHeader from "./components/container/MainHeader";
import {
    BrowserRouter as Router,
    withRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import HeaderNavibar from "./components/container/HeaderNavbar";
import MainPage from "./components/container/MainPage";
import LoginPage from "./components/container/LoginPage";
import WelcomePage from "./components/container/WelcomePage";
import LoadingIndicator from "./components/container/LoadingIndicator";
import LayoutWithFlex from "./components/container/LayoutWithFlex";
import {FlexboxLayoutPatterns} from "./components/container/FlexboxLayoutPatterns";




class App extends React.Component {

    render() {

        const {wasLogin} = this.props;
        return (
            <Router>
                <div className="App">

                    <div>
                          <HeaderNavibar/>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/flexLayoutPattern" />
                        </Route>

                        <Route path="/mainStage">
                            <MainStage/>
                        </Route>
                        <Route path="/mainPage">
                            <MainPage/>
                        </Route>
                        <Route path="/loginPage">
                            <LoginPage/>
                        </Route>
                        <Route path="/welcomePage">
                            <WelcomePage/>
                        </Route>
                        <Route path="/homePage">
                            <HomePage/>
                        </Route>
                        <Route path="/layoutTest">
                            <LayoutWithFlex/>
                        </Route>
                        <Route path="/flexLayoutPattern">
                            <FlexboxLayoutPatterns/>
                        </Route>
                    </Switch>

                    {/*
                 <MainStage/>
                */}

                </div>
            </Router>
        );

    }
}

const mapStateToProps = state => ({
    wasLogin: state.wasLogin
});

const mapDispatchToProps = {

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


