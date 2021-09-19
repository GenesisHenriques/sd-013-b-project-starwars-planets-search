import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    state,
    filterPlanetName, // função filtrarNomePlaneta()
    filteredPlanetName, // nome do planeta filtrado
  } = useContext(PlanetsContext);

  function table() {
    if (state) {
      return (
        state
          .filter((planet) => planet.name.includes(filteredPlanetName))
          .map((item) => (
            <tr key={ item.name }>
              <td>{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films }</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>
          ))
      );
    }
  }

  return (
    <main>
      Type the planet name:
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => filterPlanetName(e.target.value) }
      />
      <table>
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
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {table()}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
