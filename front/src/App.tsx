import React from 'react';
import { useSelector } from 'react-redux';

import Login from './components/login/login';
import { SiderDemo } from './components/layout/layoutDemo';

function App() {

  const isAuthenticated = useSelector((state:any) => {return state.auth.isAuthenticated})

  return (
    <>
      {isAuthenticated && <SiderDemo/>}
      {!isAuthenticated && <Login/>}
    </>
  );
}

export default App;
