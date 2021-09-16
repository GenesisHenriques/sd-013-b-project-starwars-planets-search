import React, { useContext } from 'react';

import MainContext from '../context/MainContext';

function NameFilter() {
  const { filterPlanetsByName } = useContext(MainContext);

  return (
    <label htmlFor="name-filter">
      Filter By Name:
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => filterPlanetsByName(e.target.value) }
      />
    </label>
  );
}

export default NameFilter;
