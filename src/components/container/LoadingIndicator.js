import React from 'react';
import Icon from '@ant-design/icons';
import Spin from '@ant-design/icons';

import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

export default  ()=> {
    const antIcon = <SyncOutlined type="loading-3-quarters" style={{ fontSize: 30 }} spin />;
    return (
        <Spin indicator={antIcon} style = {{display: 'block', textAlign: 'center', marginTop: 30}} />
    );
}

