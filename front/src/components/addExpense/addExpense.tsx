import React, {useState} from 'react';
import moment from 'moment';

import { Button, DatePicker, Divider, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

import { ExpenseItemsList } from './../expenseItemsList/expenseItemsList';
import { useAppSelector } from './../../app/hooks';
import { isNumeric } from './../../app/common';


function AddExpense(){
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  const selectedExpenseId = useAppSelector(( state ) => state.expenseItemsList.selectedExpense?.id);
  const selectedExpenseName = useAppSelector(( state ) => state.expenseItemsList.selectedExpense?.name);

  const [expenseSum, setExpenseSum] = useState('');
  const [expenseDat, setExpenseDat] = useState(new Date());

  function isOk(){
    return (!!selectedExpenseId && isNumeric(expenseSum) && (+expenseSum !== 0) && (!!expenseDat));
  }

  return (
    <>
      <Divider/>

      <ExpenseItemsList/>

      <Divider/>

      <DatePicker
        defaultValue={moment(expenseDat, dateFormatList[0])}
        size = "large"
        mode = "date"
        inputReadOnly = {true}
        format={dateFormatList}
        style={{width:'100%', margin:'5px 0'}}
        value = { moment(expenseDat, dateFormatList[0]) }
        onChange = {(e) => {
          if (e) {
            setExpenseDat(new Date(e.year(), e.month(), e.date()));
            }
          }
        }
      />

      <Input
        prefix="₽"
        suffix="RUR"
        placeholder="сумма"
        size = "large"
        style={{width:'100%', margin:'5px 0'}}
        value = {expenseSum}
        onChange = {(e)=> {
          const v = e.target.value;
          if (isNumeric(v)) {
            setExpenseSum(v);
          }
        }}
      />

      <TextArea
        placeholder="коментарии"
        autoSize
        size = "large"
        style={{width:'100%', margin:'5px 0'}}
      />

      <Button
        type="primary"
        shape="round"
        icon={<CheckOutlined/>}
        size="large"
        style={{width:'100%', margin:'5px 0'}}
        disabled ={!isOk()}
      >
        {
          isOk() ? `${selectedExpenseName} ${expenseSum}` : ''
        }

      </Button>
    </>
  )
}

export {AddExpense};