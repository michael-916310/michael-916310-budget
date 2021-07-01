import React, {useEffect, useState} from 'react';
import moment from 'moment';

import { Button, DatePicker, Divider, Input, Alert, Spin } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

import { ExpenseGroupList } from './../expenseGroupList/expenseGroupList';
import { ExpenseItemsList } from './../expenseItemsList/expenseItemsList';
import { useAppSelector } from './../../app/hooks';
import { isNumeric } from '../../app/commonFN';

import { fetchURL } from './../../app/service';

import styles from './addExpense.module.scss';


function AddExpense(){
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  const selectedExpenseId = useAppSelector(( state ) => state.expenseItemsList.selectedExpense?.id);
  const selectedExpenseName = useAppSelector(( state ) => state.expenseItemsList.selectedExpense?.name);
  const selectedExpenseGroup = useAppSelector(( state ) => state.expenseGroupList.selectedGroup);

  const [expenseDat, setExpenseDat] = useState(new Date());
  const [expenseSum, setExpenseSum] = useState('');
  const [expenseComment, setExpenseComment] = useState('');

  const [submitProcess, setSubmitProcess] = useState({
    isStart: false,
    isFail: false,
    isSuccess: false,
    errMessage:'',
  });


  useEffect(()=>{
    if (submitProcess.isStart) {
      fetchURL(
        '/expense/add',
         {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              expenseGroupId: selectedExpenseGroup.id,
              expenseId: selectedExpenseId,
              expenseSum: expenseSum,
              expenseDate: expenseDat,
              expenseComment: expenseComment
            })
          },
      ).then((res)=>{
        if (res.status>0) {
          setSubmitProcess({isStart: false, isFail: false, isSuccess: true, errMessage:''});

        } else {
          setSubmitProcess({
            isStart: false,
            isFail: true,
            isSuccess: false,
            errMessage:res.message,
          })
        }
      }).catch((err)=>{
        setSubmitProcess({
          isStart: false,
          isFail: true,
          isSuccess: false,
          errMessage:err.message,
        })
      })
    }
  }, [submitProcess.isStart]);

  function isOkToSubmit(){
    return (
      !!selectedExpenseGroup &&
      (selectedExpenseGroup.id>0) &&
      !!selectedExpenseId &&
      isNumeric(expenseSum) && (+expenseSum !== 0) && (!!expenseDat)
    );
  }

  return (
    <>
      <ExpenseGroupList/>
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
        value = {expenseComment}
        onChange = {(e)=>{
          setExpenseComment(e.target.value);
        }}
      />

      {submitProcess.isFail &&
        <Alert message={submitProcess.errMessage} type="error" showIcon />}

      {submitProcess.isSuccess &&
        <Alert message="Успешно сохранена" type="success" showIcon />}

      <Button
        type="primary"
        shape="round"
        icon={<CheckOutlined/>}
        size="large"
        style={{width:'100%', margin:'5px 0'}}
        disabled ={!isOkToSubmit() || submitProcess.isStart}
        onClick = {()=>{
          setSubmitProcess({
            isStart: true,
            isFail: false,
            isSuccess: false,
            errMessage:'',
          })
         }}
      >
        { isOkToSubmit()
          ? `${selectedExpenseName} (${selectedExpenseGroup.name}) : ${expenseSum}`
          : ''
        }
      </Button>

      {submitProcess.isStart &&
        <Spin size="large" className={styles.spinier}/>}
    </>
  )
}

export {AddExpense};