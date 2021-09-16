import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  return (
    <div>
      <div>
        <label htmlFor="filterName">
          Planet name:
          <input
            data-testid="name-filter"
            type="text"
            name="filterName"
            value={ filters.filterByName.name }
            onChange={ (event) => setFilters({
              filterByName: {
                name: event.target.value,
              },
            }) }
          />
        </label>
      </div>
      <br />
      <table border="1">
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
          {data === undefined
            ? <tr>Loading...</tr>
            : data
              .filter((planet) => planet.name.includes(filters.filterByName.name))
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
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
                </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
