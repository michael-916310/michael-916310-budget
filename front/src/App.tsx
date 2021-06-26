import React from 'react';
import { useSelector } from 'react-redux';

import { loadExpenseItemsList } from './components/expenseItemsList/service';
import Login from './components/login/login';
import { Layout } from './components/layout/layout';

function App() {

  const isAuthenticated = useSelector((state:any) => {return state.auth.isAuthenticated})

  return (
    <>
      {isAuthenticated && <Layout/>}
      {!isAuthenticated && <Login/>}
    </>
  );
}

loadExpenseItemsList();
export default App;
