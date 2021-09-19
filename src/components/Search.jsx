import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const {
    // função filtrarNomePlaneta()
    filterPlanetName,
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
      <hr />
    </div>
  );
}

export default Search;
