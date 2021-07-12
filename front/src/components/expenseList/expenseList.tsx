import React, { useEffect } from 'react';

import { Button, Descriptions, Popconfirm, Alert, Spin} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useAppSelector } from './../../app/hooks';
import { IExpenseListItem } from './reducer';
import { loadExpenseList, deleteExpenseItem } from './service';

import styles from './expenseList.module.scss';

export function ExpenseList(){

  const [deleteConfirmIndex, setDeleteConfirmIndex] = React.useState(-1);

  const list:IExpenseListItem[] = useAppSelector(state=>state.expenseList.expenseList);

  const expenseListSteps = useAppSelector(state=>state.expenseList.request);
  const deleteSteps = useAppSelector((state)=>(state.expenseListItemDelete.request));


  useEffect(()=>{
    // При первой отрисовке все флаг false -  грузим список расходов
    if (!deleteSteps.fetchStart && !deleteSteps.fetchFail && !deleteSteps.fetchSuccess) {
      loadExpenseList();
    }
    // При успешном удалении расхода - грузим список расходов
    if (!deleteSteps.fetchStart && !deleteSteps.fetchFail && deleteSteps.fetchSuccess) {
      loadExpenseList();
    }
    // При ошибке при удалении - на всякий случай перегрузим список
    if (!deleteSteps.fetchStart && deleteSteps.fetchFail && !deleteSteps.fetchSuccess) {
      loadExpenseList();
    }
  },[deleteSteps])

  return (
    <>
      {expenseListSteps.fetchFail &&
        <Alert message={expenseListSteps.error.message} type="error" showIcon />}
      {list.map((item:IExpenseListItem) => {
          let titleText = `Удалить <${item.expenseName}> на <${item.amount}> рублей за ${item.day} число?`;
          if (deleteSteps.fetchFail) {
            titleText = `Ошибка при удалении записи: ${deleteSteps.error.message}`
          }
          return (
            <section className={styles.itemContainer} key={item.id}>
              <Descriptions
                bordered
                column={{ xl: 4, sm: 2, xs: 1 }}
                size="small"
                className={styles.description}
                extra = {
                  <Popconfirm
                    title={titleText}
                    visible ={item.id===deleteConfirmIndex}
                    cancelText = "Отменить"
                    cancelButtonProps = {{size:"large"}}
                    okText = "Да, удалить"
                    okButtonProps ={{size:"large", loading:deleteSteps.fetchStart }}
                    onCancel = {()=>{setDeleteConfirmIndex(-1)}}
                    onConfirm = {()=>{
                      deleteExpenseItem(item.id);
                    }}
                  >
                    <Button
                      type="primary"
                      size ="large"
                      onClick={()=>{setDeleteConfirmIndex(item.id)} }
                      className = {styles.buttonDelete}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Popconfirm>
                }
              >
                <Descriptions.Item label="Статья">{item.expenseName}</Descriptions.Item>
                <Descriptions.Item label="Сумма">{item.amount}</Descriptions.Item>
                <Descriptions.Item label="Группа">{item.groupName}</Descriptions.Item>
                <Descriptions.Item label="Дата">{item.period}-{item.day}</Descriptions.Item>
                <Descriptions.Item label="Описание" /*span={2}*/>{item.description}</Descriptions.Item>
              </Descriptions>
            </section>
          )
      })}
      {expenseListSteps.fetchStart &&
        <Spin size="large" className={styles.spinier}/>}
    </>
  )
}