import React from 'react';
import { Card } from 'antd';

import styles from './login.module.scss';
import {useAppDispatch} from './../../app/hooks';


export default function Login(){
  return (
    <main className={styles.main}>
      <Card title="Введите код" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </main>
  )
}