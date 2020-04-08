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


        switch(e.key){




        }
        this.setState({
            current: e.key,
        });

    };

    render() {
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

export default HeaderNavibar;
