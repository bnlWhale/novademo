import * as React from "react";
import HeaderNavibar from "./HeaderNavibar";
import "../cssdir/Novademo.css";

const divStyle = {
    display:'flex',
    flexDirection: 'row',
    margin: '40px',
    border: '5px solid pink'
};


class MainHeader extends React.Component{

    render() {
        return (

            <div className="header_panel">
                <div><h1>NOVA</h1></div>
                <HeaderNavibar/>
            </div>

        )
    }
}

export default MainHeader;