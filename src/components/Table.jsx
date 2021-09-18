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

  function filterPlanets() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          // como pegar os valores por tag e name http://jsfiddle.net/2ZL4G/1/
          ...filters.filterByNumericValues[0],
          column: document.querySelector('select[name="column"]').value,
          comparison: document.querySelector('select[name="comparison"]').value,
          value: document.querySelector('input[name="value"]').value,
        },
        ...filters.filterByNumericValues,
      ],
    });
  }

  function showFilteredPlanets(dado) {
    const { filterByName: { name }, filterByNumericValues } = filters;
    const filteredByName = dado.filter(
      (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
    );
    if (filterByNumericValues[0].comparison === 'maior que') {
      return filteredByName.filter(
        (planet) => Number(planet[filterByNumericValues[0].column])
          > Number(filterByNumericValues[0].value),
      );
    }
    if (filterByNumericValues[0].comparison === 'menor que') {
      return filteredByName.filter(
        (planet) => Number(planet[filterByNumericValues[0].column])
          < Number(filterByNumericValues[0].value),
      );
    }
    if (filterByNumericValues[0].comparison === 'igual a') {
      return filteredByName.filter(
        (planet) => Number(planet[filterByNumericValues[0].column])
          === Number(filterByNumericValues[0].value),
      );
    }
    return filteredByName;
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
        // onChange={ filterPlanets }
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
        // onChange={ filterPlanets }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        data-testid="value-filter"
        type="number"
        placeholder="type a number"
        // onChange={ filterPlanets }
      />
      <button type="button" data-testid="button-filter" onClick={ filterPlanets }>
        Filtrar
      </button>
      <table>
        <thead>
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
        </thead>
        <tbody>
          {/* ajuda de como montar tabela vista aqui https://www.pluralsight.com/guides/dynamic-tables-from-editable-columns-in-react-html */}
          {showFilteredPlanets(data).map((planet) => (
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
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
