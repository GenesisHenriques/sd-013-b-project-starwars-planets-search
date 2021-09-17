import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { dataFiltered } = useContext(TableContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotatio period</th>
          <th>Orbital period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>Surface water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {
          dataFiltered && dataFiltered.map((starWar) => (
            <tr key={ starWar.name }>
              <td>{ starWar.name }</td>
              <td>{ starWar.rotation_period }</td>
              <td>{ starWar.orbital_period }</td>
              <td>{ starWar.diameter }</td>
              <td>{ starWar.climate }</td>
              <td>{ starWar.gravity }</td>
              <td>{ starWar.terrain }</td>
              <td>{ starWar.surface_water }</td>
              <td>{ starWar.population }</td>
              <td>{ starWar.films }</td>
              <td>{ starWar.created }</td>
              <td>{ starWar.edited }</td>
              <td>{ starWar.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
