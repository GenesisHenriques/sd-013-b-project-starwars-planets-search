import React, { useContext } from 'react';
import PlanetContext from '../context/Context';

function FilterPlanet() {
  const { name, handleChange } = useContext(PlanetContext);
  // const { name } = filters.filterByName;

  return (
    <div>
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}
export default FilterPlanet;
