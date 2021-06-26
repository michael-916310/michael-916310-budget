import React from 'react';
import { Radio } from 'antd';
import { useSelector } from 'react-redux';

function ExpenseItemsList(){

  const list = useSelector((state: any)=>(state.expenseItemsList.expenseList));

  return (
    <>
    <Radio.Group defaultValue="1" buttonStyle="solid" style = {{ textAlign: 'center' }}>
      {list.map((item: any)=>{
        return (
          <Radio.Button key = { item.id } value={item.id} style = {{ margin: '1px' }} >{ item.name }</Radio.Button>
        )
      })}
    </Radio.Group>
  </>
  )
}

export {ExpenseItemsList};