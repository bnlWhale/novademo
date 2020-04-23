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
import 'antd/dist/antd.css';
import { Progress, Button } from 'antd';

const {SubMenu} = Menu;

const divLayoutStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
};

const menuStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
};

const progressbarStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '99%',
};

class HeaderNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        };
    }

    handleClick = e => {
       console.log("HeaderNavbar click handlclick");
        const {dispatch} = this.props;
        dispatch({ type: ActionKey.ProgressNum, val:0 });
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

            case "jobInfo":{
                dispatch({
                    type: ActionKey.ShowResultPanel,
                    val: true,
                })
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

        const {wasLogin, dispatch, progressNum} = this.props;

        return (
            <div  className="head_content">
                <div className="sub_head_content">
                    <h1 style={divLayoutStyle}>NOVA</h1>
                    <Menu   style={menuStyle}   onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="home">
                            <Link to="/"/>
                            <MailOutlined/>
                            Home
                        </Menu.Item>
                        <Menu.Item key="editor">
                            <AppstoreOutlined/>
                            <Link to="/postEditorPage"/>
                            Editor Post
                        </Menu.Item>
                        <Menu.Item key="security">
                            <Link to="/mainStage"/>
                            <AppstoreOutlined/>
                            Login || Register
                        </Menu.Item>
                        <Menu.Item key="jobInfo">
                            <AppstoreOutlined/>
                            Dispatch Action
                        </Menu.Item>
                        <Menu.Item key="profile">
                            <Link to="/homePage"/>
                            <AppstoreOutlined/>
                            Profile
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="head_item_1">
                    <Progress  style={progressbarStyle} strokeWidth={5} percent={progressNum} width={200}/>
                </div>
                {/*



                */}
            </div>



        )

    }
}

const mapStateToProps = state => ({
    wasLogin: state.wasLogin,
    progressNum:state.ProgressNum,
});


export default connect(
    mapStateToProps
)(HeaderNavbar);

