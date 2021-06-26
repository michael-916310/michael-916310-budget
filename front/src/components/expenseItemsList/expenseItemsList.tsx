import React from 'react';
import { Radio } from 'antd';
import { useSelector } from 'react-redux';

function ExpenseItemsList(){

  const list = useSelector((state: any)=>(state.expenseItemsList.expenseList));

  return (
    <>
    Статья расходов
    <Radio.Group defaultValue="a" buttonStyle="solid">
      {list.map((item: any)=>{
        return (
          <Radio.Button value={item.id}>{ item.name }</Radio.Button>
        )
      })}
    </Radio.Group>
  </>
  )
}

export {ExpenseItemsList};