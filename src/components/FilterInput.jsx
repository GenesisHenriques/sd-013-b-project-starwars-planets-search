import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterInput() {
  const { contextValue } = useContext(PlanetsContext);
  const { filters, setFilters } = contextValue;

  function handleFilter({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <input type="text" data-testid="name-filter" onChange={ handleFilter } />
  );
}
