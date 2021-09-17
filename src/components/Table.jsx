import React, { useState, useContext } from 'react';

import MyContext from './MyContext';

function Table() {
  const { data } = useContext(MyContext);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });

  function filterMovie({ target }) {
    setFilters({ filterByName: { name: target.value } });
  }

  function showFilteredPlanets(dado) {
    const {
      filterByName: { name },
    } = filters;
    return dado.filter((planet) => planet.name.toLowerCase().includes(name));
  }

  return (
    <main>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search planet"
        value={ filters.filterByName.name }
        onChange={ filterMovie }
      />
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Obrital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>url</th>
        </tr>
        {/* ajuda de como montar tabel vista aqui https://www.pluralsight.com/guides/dynamic-tables-from-editable-columns-in-react-html */}
        {filters.filterByName.name.length
          ? showFilteredPlanets(data).map((planet) => (
            <tr key={ planet.name }>
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
            </tr>
          ))
          : data.map((planet) => (
            <tr key={ planet.url }>
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
            </tr>
          ))}
      </table>
    </main>
  );
}

export default Table;
