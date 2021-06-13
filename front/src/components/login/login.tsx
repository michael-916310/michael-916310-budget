import React from 'react';
import {Card } from 'antd';

import styles from './login.module.scss';
import {useAppDispatch} from './../../app/hooks';


export default function Login(){
  return (
    <main className={styles.main}>
      <section>
        ВВЕДИТЕ КОД
      </section>
    </main>
  )
}