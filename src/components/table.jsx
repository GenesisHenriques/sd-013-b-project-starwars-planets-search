import React, { useContext } from 'react';

import StarWarsContext from '../context/starWarsContext';

const HEADERS = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

function Table() {
  const { data, filters: { filterName } } = useContext(StarWarsContext);
  const { name } = filterName;

  return (
    <table>
      <tbody>
        <tr>
          {HEADERS.map((header, index) => (
            <th key={ index }>
              {header}
            </th>))}
        </tr>
      </tbody>

      <tbody>
        {data.filter((planet) => planet.name.includes(name))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
