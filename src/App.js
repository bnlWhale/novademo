import React from 'react';
import './App.css';
import MainStage from "./components/container/MainStage";
import MainContainer from "./components/container/MainContainer";
import HomePage from "./components/container/HomePage";
import "./components/cssdir/HomePageCss.css";


function App() {
    return (
        <div className="App">
            <div className="main_header">
                <button onClick={()=>{
                    alert("click me");
                }}>click me</button>
            </div>
            <MainStage/>

        </div>
    );
}

export default App;
