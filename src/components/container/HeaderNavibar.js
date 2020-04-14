import * as React from "react"
import 'antd/dist/antd.css';
import {Menu} from 'antd';
import {Link, withRouter} from 'react-router-dom'
import MergeCellsOutlined, {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';

import {connect} from "react-redux";
import {ActionKey} from "../dataprocessor/dataActions";
import axios from "../utils/AxiosAPI";

const {SubMenu} = Menu;

class HeaderNavibar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        };
    }


    handleClick = e => {
       console.log("click handlclick");
        const {dispatch} = this.props;
        switch (e.key) {
            case "schedule": {
                dispatch({
                    type: ActionKey.Login,
                    val: 'bbbb',
                })
                this.sendRequest();
                break;
            }

            case "security":{
                dispatch({
                    type: ActionKey.Login,
                    val: 'cccc',
                })
                break;

            }

            default:{
                break;
            }


        }
        this.setState({
            current: e.key,
        });

    };

    componentDidMount(){
        axios.interceptors.request.use((config) => {
            // config.setHeaders([
            //     // 在这里设置请求头与携带token信息
            // ]);
            console.log("axios interceptors");
            return config
        }, (error) => {
            return Promise.reject(error);
        });
    }

    sendRequest(){



        axios.get('greeting').then(response=>{
            let {id, content} = response.data;
            alert(id+"  "+content);
        }).catch(error=>{
            alert("show error "+error);
        });
    }

    render() {

        const {wasLogin, dispatch} = this.props;

        return (
            <div className="header_panel">
                <h1>NOVA</h1>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/"/>
                        <MailOutlined/>
                        Home
                    </Menu.Item>
                    <Menu.Item key="schedule">
                        <AppstoreOutlined/>
                        <Link to="/aboutPage"/>
                        Schedule
                    </Menu.Item>
                    <Menu.Item key="security">
                        <Link to="/mainStage"/>
                        <AppstoreOutlined/>
                        Login || Register
                    </Menu.Item>
                    <Menu.Item key="jobInfo">
                        <Link to="/mainStage"/>
                        <AppstoreOutlined/>
                        Post
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Link to="/mainStage"/>
                        <AppstoreOutlined/>
                        Profile
                    </Menu.Item>
                </Menu>
            </div>


        )

    }
}

const mapStateToProps = state => ({
    wasLogin: state.wasLogin
});


export default connect(
    mapStateToProps
)(HeaderNavibar);

