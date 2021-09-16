import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function FilterName() {
  const { filterPlanetByName } = useContext(PlanetContext);

  return (
    <label htmlFor="name-filter">
      Filter Name:
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => filterPlanetByName(e.target.value) }
      />
    </label>
  );
}

export default FilterName;
