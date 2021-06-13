import React, { useState } from 'react';
import { Input, Button } from 'antd'

import styles from './login.module.scss';
import {useAppDispatch} from './../../app/hooks';
import { setConstantValue } from 'typescript';

type btnType = {
  display: string;
  displayIcon: string;
  value: string;
  action: ()=>void;
}

const btnArray:btnType[]=[
  {display:'0', displayIcon:'0', value:'0', action:()=>{}},
  {display:'1', displayIcon:'0', value:'1', action:()=>{}},
  {display:'2', displayIcon:'0', value:'2', action:()=>{}},
  {display:'3', displayIcon:'0', value:'3', action:()=>{}},
];

export default function Login(){
  const [value, setValue] = useState('');

  function handleBtnPress(el:btnType) {
    setValue(`${value}${el.value}`);
  }

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <article className={styles.inputControlWrapper}>
          <Input
            readOnly={true}
            size='large'
            className={styles.inputControl}
            value={value}/>
        </article>
        <article className={styles.btnContainer}>
          {
            btnArray.map((el) => {
              return <Button
                shape='round'
                onClick={()=>{handleBtnPress(el)}}
                className={styles.btn}
              >
                  {el.display}
              </Button>;
            })
          }
        </article>
      </section>
    </main>
  )
}