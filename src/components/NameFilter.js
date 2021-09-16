import React, { useState, useContext, useEffect } from 'react';

import MainContext from '../context/MainContext';

function NameFilter() {
  const [nameFilter, setNameFilter] = useState('');
  const { filterPlanetsByName } = useContext(MainContext);

  useEffect(() => {
    filterPlanetsByName(nameFilter);
  }, [nameFilter]);

  return (
    <label htmlFor="name-filter">
      Filter By Name:
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setNameFilter(e.target.value) }
      />
    </label>
  );
}

export default NameFilter;
