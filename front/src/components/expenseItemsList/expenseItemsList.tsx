import React, { useEffect } from 'react';
import { Radio } from 'antd';

import {loadExpenseItemsList} from './service';

function ExpenseItemsList(){

  useEffect(()=>{
    loadExpenseItemsList();
  }, [])

  return (
    <>
    Статья расходов
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
      <Radio.Button value="e">eeeeeee eee e</Radio.Button>
      <Radio.Button value="f">ffff ffffffff</Radio.Button>
      <Radio.Button value="g">gggggggggggggggg</Radio.Button>
    </Radio.Group>
  </>
  )
}

export {ExpenseItemsList};