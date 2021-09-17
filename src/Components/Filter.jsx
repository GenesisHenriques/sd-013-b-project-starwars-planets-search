import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filter() {
  const {
    filters,
    filters: { filterByName },
    setFilters,
  } = useContext(StarWarsContext);

  function handleChange({ target }) {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <input
      data-testid="name-filter"
      value={ filterByName.name }
      onChange={ handleChange }
      type="text"
    />
  );
}

export default Filter;
