import React, { useContext } from 'react';
import './App.css';
import Context from './context/Context';

function App() {
  const global = useContext(Context);
  console.log(global);

  return (

    <span>Hello, App !!!</span>

  );
}

export default App;
