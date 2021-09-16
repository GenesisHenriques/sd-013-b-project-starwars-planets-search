import React from 'react';
import './App.css';
import PageHome from './pages/PageHome';
import MyContextProvider from './MyContext/MyContextProvider';

function App() {
  return (
    <MyContextProvider>
      <PageHome />
    </MyContextProvider>
  );
}

export default App;
