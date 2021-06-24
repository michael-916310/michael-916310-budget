import React from 'react';
import { useSelector } from 'react-redux';

import Login from './components/login/login';

function App() {

  const isAuthenticated = useSelector((state:any) => {return state.auth.isAuthenticated})

  return (
    <>
      {!isAuthenticated && <Login/>}

    </>
  );
}

export default App;
