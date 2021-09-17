import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;

// { name,
// rotation_period,
// orbital_period,
// diameter,
// climate,
// gravity,
// terrain,
// surface_water,
// population,
// residents,
// films,
// created,
// edited }

// ['Name',
// 'Rotation Period',
// 'Orbital Period',
// 'Diameter',
// 'Climate',
// 'Gravity',
// 'Terrain',
// 'Surface Water',
// 'Population',
// 'Residents',
// 'Films',
// 'Created',
// 'Edited']
