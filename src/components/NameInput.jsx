import React, { useContext } from 'react';
import Context from '../context/Context';
import useFilter from '../hooks/useFilter';

export default function NameInput() {
  const { filters, setFilters } = useContext(Context);
  const [handleFilter] = useFilter();

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
    handleFilter();
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
