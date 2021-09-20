import React, { useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters, filterByName: { name: value } });
  };

  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleChange }
      />
    </label>

  );
}

export default Filter;
