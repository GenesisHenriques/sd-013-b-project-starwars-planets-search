import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const planets = useContext(PlanetsContext);
  const { data: { results }, filters } = planets;
  const { filterByName: { name }, filterByNumericValues } = filters;

  console.log(filterByNumericValues);

  let filteredPlanets = results;

  if (name) {
    filteredPlanets = results.filter((el) => el.name.includes(name.trim()));
  }

  if (filterByNumericValues.length > 1) {
    filterByNumericValues.forEach((filtr, i) => {
      const { column, comparison, value } = filterByNumericValues[i];

      filteredPlanets = filteredPlanets.filter((el) => {
        if (comparison === 'maior que') return el[column] * 1 > value * 1;
        if (comparison === 'igual a') return el[column] * 1 === value * 1;
        if (comparison === 'menor que') return el[column] * 1 < value * 1;

        return true;
      });

      console.log('aaaaaa', filteredPlanets);
    });
  }

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
        { results.length > 0 && (
          filteredPlanets.map((el, i) => (
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
};

export default Table;
