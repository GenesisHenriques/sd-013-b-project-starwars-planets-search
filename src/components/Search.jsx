import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const {
    // função filtrarNomePlaneta()
    filterPlanetName,
    filterByNumericValues,
  } = useContext(PlanetsContext);

  return (
    <div>
      <p> Search </p>
      <label htmlFor="name-filter">
        Type the planet name:
        <input
          data-testid="name-filter"
          type="text"
          onChange={ (e) => filterPlanetName(e.target.value) }
        />
      </label>
      <div>
        <label htmlFor="column-filter">
          Choose an option:
          <select
            data-testid="column-filter"
            onChange={ (e) => filterByNumericValues(e.target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
      </div>
      <hr />
    </div>
  );
}

export default Search;
