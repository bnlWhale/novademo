import * as React from "react"
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {Link, withRouter} from 'react-router-dom'
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


class HeaderNavibar extends React.Component{

    state = {
        current: 'mail',
    };

    handleClick = e => {

        this.setState({
            current: e.key,
        });
        alert(e.key+" "+this.state.current);
    };

    render() {
        return (

            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <MailOutlined />
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" >
                    <AppstoreOutlined />
                    Navigation Two
                </Menu.Item>
                <Menu.Item key="about" >
                    <Link to="/mainStage"/>
                    <AppstoreOutlined />
                    Navigation three
                </Menu.Item>
            </Menu>

        )

    }
}

export default HeaderNavibar;
