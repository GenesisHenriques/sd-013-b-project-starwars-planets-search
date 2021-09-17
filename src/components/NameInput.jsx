import React, { useContext } from 'react';
import Context from '../context/Context';

export default function NameInput() {
  const { filters, setFilters } = useContext(Context);
  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <label htmlFor="planet-search">
      Planeta:
      <input
        data-testid="name-filter"
        id="planet-search"
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />
    </label>
  );
}
