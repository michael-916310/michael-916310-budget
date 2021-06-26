import React from 'react';
import { useSelector } from 'react-redux';

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

export default App;
