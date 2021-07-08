import React from 'react';

import { Button, Descriptions, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useAppSelector } from './../../app/hooks';

import { IExpenseListItem } from './reducer';

import styles from './expenseList.module.scss';

export function ExpenseList(){

  const [deleteConfirmIndex, setDeleteConfirmIndex] = React.useState(-1);

  const list:IExpenseListItem[] = useAppSelector(state=>state.expenseList.expenseList);

  return (
    <>
        {list.map((item:IExpenseListItem) => {
            return (
              <p className={styles.itemContainer}>
                <Descriptions
                  bordered
                  column={{ xl: 4, sm: 2, xs: 1 }}
                  size="small"
                  className={styles.description}
                  extra = {
                    <Popconfirm
                      title="Title"
                      visible ={item.id===deleteConfirmIndex}
                    >
                      <Button
                        type="primary"
                        onClick={()=>{setDeleteConfirmIndex(item.id)} }
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
              </p>
            )
        })}
    </>
  )
}