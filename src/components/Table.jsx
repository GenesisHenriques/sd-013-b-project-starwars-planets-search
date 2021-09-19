import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Table() {
  const { data, theads, filters } = useContext(SWContext);
  const filterName = filters.filterByName.name;

  return (
    <table width="100%" border="1">
      <thead>
        <tr>
          {theads.map((thead) => <th key={ thead }>{ thead }</th>)}
        </tr>
      </thead>
      <tbody>
        {data
          .filter(({ name: planetName }) => (
            planetName.toLowerCase().includes(filterName.toLowerCase())
          ))
          .map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>

  );
}

export default Table;
