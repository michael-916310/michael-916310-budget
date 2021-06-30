import React from 'react';

import { Radio } from 'antd';

import { useAppSelector, useAppDispatch } from './../../app/hooks';
import { TExpenseGroupItem } from './../../app/commonTypes';
import { actions } from './actions';

export function ExpenseGroupList(){

  let list = useAppSelector((state)=>state.expenseGroupList.expenseGroup);
  list = list.filter((item: TExpenseGroupItem) => !item.obsolete);
  const def = list.filter((item: TExpenseGroupItem) => item.defaultSelection);

  const dispatch = useAppDispatch();

  return (
    <Radio.Group
      size="large"
      optionType="button"
      buttonStyle="outline"
      defaultValue = {(Array.isArray(def)? def[0].id:-1)}
      style = {{display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      onChange = {(e)=>{
        dispatch(
          actions.otherActionCreators.expenseGroupSelectedAC(e.target.value)
        )
      }}
    >
      {list.map((item: {id: number, name: string}) => (
          <Radio.Button
            key = { item.id } value={item.id}
          >
            { item.name }
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}