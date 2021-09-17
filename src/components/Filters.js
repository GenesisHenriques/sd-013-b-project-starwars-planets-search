import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

const Filters = () => {
  const { filters, setFilters } = useContext(PlanetsContext);

  const changeHandler = (e) => {
    setFilters({ ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  return (
    <div>
      <h1>BUSCA</h1>
      <input
        data-testid="name-filter"
        onChange={ changeHandler }
        type="text"
      />
    </div>
  );
};

export default Filters;
