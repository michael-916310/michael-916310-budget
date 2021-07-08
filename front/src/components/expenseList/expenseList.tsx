import React, { useEffect } from 'react';

import { Button, Descriptions, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useAppSelector } from './../../app/hooks';
import { IExpenseListItem } from './reducer';
import { loadExpenseList } from './service';

import styles from './expenseList.module.scss';

export function ExpenseList(){

  const [deleteConfirmIndex, setDeleteConfirmIndex] = React.useState(-1);

  const list:IExpenseListItem[] = useAppSelector(state=>state.expenseList.expenseList);


  useEffect(()=>{
    loadExpenseList();
  },[])

  return (
    <>
        {list.map((item:IExpenseListItem) => {
            return (
              <section className={styles.itemContainer} key={item.id}>
                <Descriptions
                  bordered
                  column={{ xl: 4, sm: 2, xs: 1 }}
                  size="small"
                  className={styles.description}
                  extra = {
                    <Popconfirm
                      title={`Удалить <${item.expenseName}> на <${item.amount}> рублей за ${item.day} число?`}
                      visible ={item.id===deleteConfirmIndex}
                      cancelText = "Отменить"
                      cancelButtonProps = {{size:"large"}}
                      okText = "Да, удалить"
                      okButtonProps ={{size:"large"}}
                      onCancel = {()=>{setDeleteConfirmIndex(-1)}}
                      onConfirm = {()=>{
                        setDeleteConfirmIndex(-1);
                      }}
                    >
                      <Button
                        type="primary"
                        size ="large"
                        onClick={()=>{setDeleteConfirmIndex(item.id)} }
                        className = {styles.buttonDelete}
                      >
                        <DeleteOutlined />
                      </Button>
                    </Popconfirm>
                  }
                >
                  <Descriptions.Item label="Статья">{item.expenseName}</Descriptions.Item>
                  <Descriptions.Item label="Сумма">{item.amount}</Descriptions.Item>
                  <Descriptions.Item label="Группа">{item.groupName}</Descriptions.Item>
                  <Descriptions.Item label="Дата">{item.period}-{item.day}</Descriptions.Item>
                  <Descriptions.Item label="Описание" span={2}>{item.description}</Descriptions.Item>
                </Descriptions>
              </section>
            )
        })}
    </>
  )
}