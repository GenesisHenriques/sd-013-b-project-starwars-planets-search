import React, { useContext } from 'react';
import './App.css';

import { PlanetsContext } from './contexts/PlanetsProvider';

import testData from './testData';

function App() {
  const planets = useContext(PlanetsContext) || testData;

  fetch('');
  return (
    <table style={ { width: '100%' } }>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>el.edited</th>
          <th>el.url</th>
        </tr>
      </thead>
      <tbody>
        { planets.count > 0 && (
          planets.results.map((el, i) => (
            <tr key={ i }>
              <td>{el.name}</td>
              <td>{el.rotation_period}</td>
              <td>{el.orbital_period}</td>
              <td>{el.diameter}</td>
              <td>{el.climate}</td>
              <td>{el.gravity}</td>
              <td>{el.terrain}</td>
              <td>{el.surface_water}</td>
              <td>{el.population}</td>
              <td>{el.films}</td>
              <td>{el.created}</td>
              <td>{el.edited}</td>
              <td>{el.url}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default App;
