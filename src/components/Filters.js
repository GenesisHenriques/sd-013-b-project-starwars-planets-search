import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChanges = ({ target }) => {
    setFilters({ filteredByName: target.value });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChanges }
        value={ filters.filteredByName }
      />
    </div>
  );
}

export default Filters;
