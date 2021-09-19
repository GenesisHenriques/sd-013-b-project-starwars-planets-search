import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const {
    // função filtrarNomePlaneta()
    filterPlanetName,
    filterByNumericValues,
  } = useContext(PlanetsContext);

  //  const [filteredByNumericValues, setFilteredByNumericValues] = useState(
  // {
  //   column: 'population',
  //   comparison: 'maior que',
  //   value: '100000',
  // }

  return (
    <div>
      <p> Search </p>
      <label htmlFor="name-filter">
        Type the planet name:
        <input
          data-testid="name-filter"
          name="name"
          onChange={ (e) => filterPlanetName(e.target.value) }
          type="text"
        />
      </label>
      <div>
        <label htmlFor="column-filter">
          Choose an option:
          <select
            data-testid="column-filter"
            name="column"
            onChange={ (event) => filterByNumericValues(event.target) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>

        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => filterByNumericValues(event.target) }
        >
          <option value="bigger_than">maior que</option>
          <option value="less_than">menor que</option>
          <option value="equal_to">igual a</option>
        </select>

        <input
          data-testid="value-filter"
          name="value"
          onChange={ (event) => filterByNumericValues(event.target) }
          type="number"
          placeholder="digite um número"
        />

        <button
          data-testid="button-filter"
          type="button"
        >
          Search
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Search;
