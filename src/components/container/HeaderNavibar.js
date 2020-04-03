import * as React from "react"
import 'antd/dist/antd.css';
import {Menu} from 'antd';
import {Link, withRouter} from 'react-router-dom'
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';

const {SubMenu} = Menu;


class HeaderNavibar extends React.Component {

    state = {
        current: 'mail',
    };

    handleClick = e => {

        this.setState({
            current: e.key,
        });

    };

    render() {
        return (
            <div className="header_panel">
                <h1>NOVA</h1>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="mail">
                        <MailOutlined/>
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="app">
                        <AppstoreOutlined/>
                        Navigation Two
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/mainPage"/>
                        <AppstoreOutlined/>
                        Navigation three
                    </Menu.Item>
                </Menu>
            </div>


        )

    }
}

export default HeaderNavibar;
