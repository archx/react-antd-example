import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined
} from '@ant-design/icons';

import '../styles/Home.scss';

const { Header, Sider, Content } = Layout;

const Home: React.FC<{}> = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(e => !e);
    };


    return (
        <div className="Home">
            <Layout style={{height: '100%'}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">
                        <span>{collapsed ? "RA" : "Ract Antd"}</span>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            首页
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        这就是主页内容
                    </Content>
                </Layout>
            </Layout>
        </div>
    );

}

export default Home;