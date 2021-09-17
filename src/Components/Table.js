import React, { useContext } from 'react';
import ContextCreat from '../context/ContextCreat';

export default function Table() {
  const { filters } = useContext(ContextCreat);
  const headerTable = [
    'name',
    'created',
    'edited',
    'films',
    'rotation_period',
    'orbitalPeriod',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surfaceWater',
    'population',
    'url',
  ];

  return (
    <table>
      <thead>
        <tr>
          { headerTable.map((head) => (
            <th key={ head }>{head}</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { filters.filterByName.name
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.films[0]}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
      </tbody>
    </table>
  );
}
