import React from 'react';

import { Layout, Menu } from 'antd';
import { CalendarOutlined, LogoutOutlined, PlusOutlined } from '@ant-design/icons';

import { useAppSelector, useAppDispatch } from './../../app/hooks';
import { AddExpense } from './../addExpense/addExpense';
import { ExpenseList } from './../expenseList/expenseList';

import { selectMenuAC } from './actions';
import { actions } from './../login/actions';

import { loadExpenseList } from './../expenseList/service';

import styles from './layout.module.scss';



const {  Header, Content, Footer } = Layout;

function AppLayout()  {

  const selectedItem = useAppSelector((state)=>state.menu.selectedIndex);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <Header>
        <Menu
          theme="dark" mode="horizontal"
          selectedKeys={[selectedItem]}
          onSelect = {function({ item, key, keyPath, selectedKeys, domEvent }){
            if (key==='1' || key==='2') {
              dispatch(selectMenuAC(key));
            } if (key === '3') {
              dispatch(actions.other.authLogoutAC());
            }
            if (key==='2') {
              // loading expense list
              loadExpenseList();
            }
          }}
        >
          <Menu.Item key="1"><PlusOutlined/></Menu.Item>
          <Menu.Item key="2"><CalendarOutlined/></Menu.Item>
          <Menu.Item key="3"><LogoutOutlined/></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 5px' }}>
        <div className={styles.layout_content}>
          {selectedItem==='1' && <AddExpense/>}
          {selectedItem==='2' && <ExpenseList/>}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Бюджет расходов</Footer>
    </Layout>
  );
}

export {AppLayout as Layout};