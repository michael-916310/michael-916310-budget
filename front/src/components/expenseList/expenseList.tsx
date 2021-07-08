import React from 'react';

import { Card, Descriptions } from 'antd';

import { useAppSelector } from './../../app/hooks';

import { IExpenseListItem } from './reducer';

export function ExpenseList(){

  const list:[] = useAppSelector(state=>state.expenseList.expenseList);
  return (
    <>
      {/* { list.map((item:any)=>{
        return (
          <Card title={`${item.expenseName} ${item.amount}`}>
            <p>месяц: {item.period}, день: {item.day}</p>
            <p>{item.groupName}</p>
            <p>{item.expenseName}</p>
            <p>{item.description}</p>
          </Card>
        )
      })} */}
        {list.map((item:IExpenseListItem) => {
            return (
              <p>
              <Descriptions
                title={`Запись: ${item.id}`}
                bordered
                //column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                column={{ sm: 2, xs: 1 }}
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