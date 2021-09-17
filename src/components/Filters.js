import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { searchTerm, filterByName } = useContext(PlanetsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ searchTerm }
        onChange={ ({ target }) => filterByName(target.value) }
      />
    </div>
  );
}

export default Filters;
