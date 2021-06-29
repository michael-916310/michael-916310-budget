import React from 'react';
import { Radio, Collapse } from 'antd';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from './../../app/hooks';

import { TExpenseItem } from './../../app/common';
import { actions } from './actions';

const { Panel } = Collapse;

function ExpenseItemsList(){

  const list = useAppSelector((state: any)=>(state.expenseItemsList.expenseList));
  const list1 = list.filter((item: TExpenseItem) => (item.oftenUsed > 0));
  const list2 = list.filter((item: TExpenseItem) => (item.oftenUsed === 0));

  const dispatch = useAppDispatch();

  function renderList(lst:[]){
    return (
      lst.map((item: any)=>{
        return (
          <Radio.Button
            key = { item.id } value={item.id}
            style = {{ margin: '1px', minWidth:'7rem' }}
          >
            { item.name }
          </Radio.Button>
        )
      })
    )
  }

  return (
    <Radio.Group
      defaultValue="1"
      buttonStyle="solid"
      style = {{ textAlign: 'center', display:'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
      size="large"
      onChange = {(e)=>{
        dispatch(
          actions.otherActionCreators.expenseItemSelectedAC(e.target.value)
        )
      }}
    >
      {renderList(list1)}
      <Collapse style ={{width:'100%'}}>
        <Panel header="другие статьи" key="1">
          <div style = {{ textAlign: 'center', display:'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {renderList(list2)}
          </div>
        </Panel>
      </Collapse>
    </Radio.Group>
  )
}

export {ExpenseItemsList};