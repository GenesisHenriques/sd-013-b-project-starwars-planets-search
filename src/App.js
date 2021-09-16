import React from 'react';
import StarWarsProvider from './Context/starWarsProvider';
import Home from './Pages/home';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
