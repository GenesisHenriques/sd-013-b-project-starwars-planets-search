import React, { useContext } from 'react';
import ContextCreat from '../context/ContextCreat';

export default function Table() {
  const { filters, planets } = useContext(ContextCreat);
  function noFilter() {
    return planets
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
      ));
  }
  function filterName() {
    return filters.filterByName.name
      .map((nameFilter) => (
        <tr key={ nameFilter.name }>
          <td>{nameFilter.name}</td>
          <td>{nameFilter.created}</td>
          <td>{nameFilter.edited}</td>
          <td>{nameFilter.films[0]}</td>
          <td>{nameFilter.rotation_period}</td>
          <td>{nameFilter.orbital_period}</td>
          <td>{nameFilter.diameter}</td>
          <td>{nameFilter.climate}</td>
          <td>{nameFilter.gravity}</td>
          <td>{nameFilter.terrain}</td>
          <td>{nameFilter.surface_water}</td>
          <td>{nameFilter.population}</td>
          <td>{nameFilter.url}</td>
        </tr>
      ));
  }
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
        { filters.filterByName.name.length === 0 ? noFilter() : filterName() }
      </tbody>
    </table>
  );
}
