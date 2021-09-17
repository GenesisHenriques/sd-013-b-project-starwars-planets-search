import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

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
  const {
    data,
    filters: { filterByName, filterByNumericValues },
    clicked,
  } = useContext(StarWarsContext);
  const { name } = filterByName;
  const numericFilter = filterByNumericValues[filterByNumericValues.length - 1];
  const { column, comparison, value } = numericFilter;

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
          .filter((planet) => {
            if (clicked && comparison === 'maior que') {
              return Number(planet[column]) > value;
            }
            if (clicked && comparison === 'menor que') {
              return Number(planet[column] < value)
              || planet[column] === 'unknown';
            }
            if (clicked && comparison === 'igual a') {
              return Number(planet[column] === value);
            }
            return data;
          })
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
