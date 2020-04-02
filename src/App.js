import React from 'react';
import './App.css';
import MainStage from "./components/container/MainStage";
import AboutPage from "./components/container/AboutPage";
import HomePage from "./components/container/HomePage";
import "./components/cssdir/HomePageCss.css";
import MainHeader from "./components/container/MainHeader";


function App() {
    return (
        <div className="App">
            <div className="main_header">
               <MainHeader/>
            </div>
            <MainStage/>

        </div>
    );
}

export default App;
