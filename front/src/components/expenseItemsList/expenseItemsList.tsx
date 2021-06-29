import React from 'react';
import { Radio, Collapse } from 'antd';
import { useSelector } from 'react-redux';
import { TExpenseItem } from './../../app/common';

const { Panel } = Collapse;

function ExpenseItemsList(){

  let list = useSelector((state: any)=>(state.expenseItemsList.expenseList));

  console.log('ExpenseItemsList',list);

  const list1 = list.filter((item: TExpenseItem) => (item.oftenUsed > 0));
  const list2 = list.filter((item: TExpenseItem) => (item.oftenUsed === 0));

  function renderList(lst:[]){
    return (
      lst.map((item: any)=>{
        return (
          <Radio.Button
            key = { item.id } value={item.id}
            style = {{ margin: '1px', minWidth:'8rem' }}
          >
            { item.name }
          </Radio.Button>
        )
      })
    )
  }

  return (
    <>
    <Radio.Group
      defaultValue="1"
      buttonStyle="solid"
      style = {{ textAlign: 'center', display:'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
      size="large"
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
  </>
  )
}

export {ExpenseItemsList};