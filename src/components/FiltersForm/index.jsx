import React from 'react';
import { useSWContext } from '../../context';

const FiltersForm = () => {
  const { filters, handleNameFilterChange } = useSWContext();
  const { filterByName: { name } } = filters;

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ name }
      onChange={ (e) => handleNameFilterChange(e.target.value) }
    />
  );
};

export default FiltersForm;
