import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Table from './Components/Table';
import Filters from './Components/Filters';
import PlanetsProvider from './Context/PlanetProvider';
import OrderFilter from './Components/OrderFilter';

function App() {
  return (
    <PlanetsProvider>
      <header className="background-starwars">
        <ReactAudioPlayer
          src="./styles/MarchImperial.mp3"
          autoPlay
          controls
        />
        <Filters />
        <OrderFilter />
      </header>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
