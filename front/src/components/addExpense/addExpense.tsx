import React from 'react';
import moment from 'moment';

import { Button, DatePicker, Divider, Input } from 'antd';

import { ExpenseItemsList } from './../expenseItemsList/expenseItemsList';
import { CheckOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

function AddExpense(){
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  return (
    <>
      <ExpenseItemsList/>

      <Divider/>

      <DatePicker
        defaultValue={moment(new Date(), dateFormatList[0])}
        size = "large"
        format={dateFormatList}
        style={{width:'100%', margin:'5px 0'}}
      />

      <Input
        prefix="₽"
        suffix="RUR"
        placeholder="сумма"
        size = "large"
        style={{width:'100%', margin:'5px 0'}}
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
      >
        Красота
      </Button>

    </>
  )
}

export {AddExpense};