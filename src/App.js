import React from 'react';
import './App.css';
import Initial from './Components/Initial';
import PlanetsProvider from './context/planetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Initial />

    </PlanetsProvider>
  );
}

export default App;
