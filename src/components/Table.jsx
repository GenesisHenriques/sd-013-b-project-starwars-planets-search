import React, { useState, useContext } from 'react';

import MyContext from './MyContext';

function Table() {
  const { data } = useContext(MyContext);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  /* links que me ajudaram nas funções de filtragem:
  https://www.youtube.com/watch?v=d1r0aK5awWk
  https://stackoverflow.com/questions/62116449/saving-object-in-react-usestate
  https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg
  */

  function filterPlanet({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  function filterPlanets({ target }) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [target.name]: target.value,
        },
      ],
    });
  }

  function showFilteredPlanets(dado) {
    const {
      filterByName: { name },
    } = filters;
    return dado.filter(
      (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  function showFilteredPlanetsSelect(dado) {
    const { filterByNumericValues } = filters;
    if (filterByNumericValues[0].comparison === 'maior') {
      return dado.filter(
        (planet) => planet.filterByNumericValues[0].column
          > Number(filterByNumericValues[0].value),
      );
    }
    if (filterByNumericValues[0].comparison === 'menor') {
      return dado.filter(
        (planet) => planet.filterByNumericValues[0].column
          < Number(filterByNumericValues[0].value),
      );
    }
    if (filterByNumericValues[0].comparison === 'igual') {
      return dado.filter(
        (planet) => planet.filterByNumericValues[0].column
          === Number(filterByNumericValues[0].value),
      );
    }
  }

  return (
    <main>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search planet"
        value={ filters.filterByName.name }
        onChange={ filterPlanet }
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ filterPlanets }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ filterPlanets }
      >
        <option value="maior">maior que</option>
        <option value="menor">menor que</option>
        <option value="igual">igual</option>
      </select>
      <input
        name="value"
        data-testid="value-filter"
        type="number"
        placeholder="type a number"
        value={ filters.filterByNumericValues[0].value }
        onChange={ filterPlanets }
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
