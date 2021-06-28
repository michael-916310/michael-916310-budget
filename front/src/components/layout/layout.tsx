import React from 'react';
import { Layout, Menu } from 'antd';
import { CalendarOutlined, CheckOutlined, EditOutlined, ExportOutlined, LogoutOutlined, PlusOutlined } from '@ant-design/icons';

import { AddExpense } from './../addExpense/addExpense';
import styles from './layout.module.scss';


const {  Header, Content, Footer } = Layout;

function AppLayout()  {

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><PlusOutlined/></Menu.Item>
          <Menu.Item key="2"><CalendarOutlined/></Menu.Item>
          <Menu.Item key="3"><LogoutOutlined/></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 5px' }}>
        <div className={styles.layout_content}>
          <AddExpense/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Бюджет расходов</Footer>
    </Layout>
  );
}

export {AppLayout as Layout};