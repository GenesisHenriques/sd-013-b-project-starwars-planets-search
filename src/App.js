import React from 'react';
import './App.css';
import Header from './components/Header';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Header />
    </MyProvider>
  );
}

export default App;
