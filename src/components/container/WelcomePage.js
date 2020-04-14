import * as React from "react";
import LoadingIndicator from "./LoadingIndicator";
import MergeCellsOutlined from '@ant-design/icons';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    WhatsAppOutlined,
    SplitCellsOutlined,
} from '@ant-design/icons';
import { Spin } from 'antd';
import UploadPage from "./UploadPage";

const divLayoutStyle = {
    display: 'flex',
    minHeight: 'calc(100vh - 100px)',
    width: '100%',
    top: '100px',
    flexDirection: 'column',
};

const divContentStyle = {
    flex: '1 0 auto',
}

const divFooterStyle = {
    flexShrink:  0,
    height: '100px',
    backgroundColor: 'burlywood',
}



export default ()=>{

    return(
        <div style={divLayoutStyle}>
            <div style={divContentStyle}>

                <h1> welcome page ! </h1>
                <SyncOutlined spin />
                <WhatsAppOutlined />
                <SplitCellsOutlined size="large" />
                <Spin size="large" />
                <h1> welcome page ! </h1>
                <UploadPage/>
            </div>
            <div style={divFooterStyle}>
                footer
            </div>
        </div>
    )




}