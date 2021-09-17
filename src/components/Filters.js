import React, { useContext } from 'react';

import NumericFilters from './NumericFilters';

import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filters, setNameFilter } = useContext(PlanetsContext);
  const { name } = filters.filterByName;

  return (
    <div>
      <div className="name-filter">
        <input
          data-testid="name-filter"
          type="text"
          value={ name }
          onChange={ ({ target }) => setNameFilter(target.value) }
        />
      </div>
      <NumericFilters />
    </div>
  );
}

export default Filters;
