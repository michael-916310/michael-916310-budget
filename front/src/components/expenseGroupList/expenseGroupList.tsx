import React from 'react';

import { Radio } from 'antd';

import { useAppSelector } from './../../app/hooks';
import { TExpenseGroupItem } from './../../app/commonTypes';

export function ExpenseGroupList(){
  let list = useAppSelector((state)=>state.expenseGroupList.expenseGroup);
  list = list.filter((item: TExpenseGroupItem) => !item.obsolete);
  return (
    <Radio.Group
      size="large"
      optionType="button"
      buttonStyle="outline"
      defaultValue = {1}
      style = {{display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {list.map((item: {id: number, name: string}) => (
          <Radio.Button
            key = { item.id } value={item.id}
            //style = {{ margin: '1px', minWidth:'7rem' }}
          >
            { item.name }
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}