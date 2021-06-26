import React from 'react';
import { Layout, Menu } from 'antd';

import { ExpenseItemsList } from '../expenseItemsList/expenseItemsList';

import styles from './layout.module.scss';

const {  Header, Content, Footer } = Layout;

function AppLayout()  {

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className={styles.layout_content}>
          <ExpenseItemsList/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Бюджет расходов</Footer>
    </Layout>
  );
}

export {AppLayout as Layout};