import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { ArrowLeftOutlined, SendOutlined } from '@ant-design/icons';

import styles from './login.module.scss';
import { checkLogin } from './service';

type btnType = {
  display?: string;
  displayIcon?: any;
  value: string;
  action: ((item: btnType)=>void) | (()=>void);
}



export default function Login(){
  const [value, setValue] = useState('');

  function handleBtnPress(item:btnType) {
    setValue(`${value}${item.value}`);
  }

  function backspaceBtnPress() {
    setValue(value.substring(0,value.length-1));
  }

  const btnArray:btnType[]=[
    {display:'1', value:'1', action:handleBtnPress},
    {display:'2', value:'2', action:handleBtnPress},
    {display:'3', value:'3', action:handleBtnPress},
    {display:'4', value:'4', action:handleBtnPress},
    {display:'5', value:'5', action:handleBtnPress},
    {display:'6', value:'6', action:handleBtnPress},
    {display:'7', value:'7', action:handleBtnPress},
    {display:'8', value:'8', action:handleBtnPress},
    {display:'9', value:'9', action:handleBtnPress},
    {display:'0', value:'0', action:handleBtnPress},
    {displayIcon:<ArrowLeftOutlined/>, value:'backspace', action:backspaceBtnPress},
    {displayIcon:<SendOutlined/>, value:'send', action:()=>{checkLogin(value)}},
  ];

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <article className={styles.inputControlWrapper}>
          <Input
            readOnly={true}
            className={styles.inputControl}
            value={value}/>
        </article>
        <article className={styles.btnContainer}>
          {
            btnArray.map((item) => (
                <Button
                key = {item.value}
                shape='round'
                onClick = {()=>{item.action(item)}}
                className={styles.btn}
              >
                {(item.display) ? (item.display) : (item.displayIcon)}
              </Button>
              )
            )
          }
        </article>
      </section>
    </main>
  )
}