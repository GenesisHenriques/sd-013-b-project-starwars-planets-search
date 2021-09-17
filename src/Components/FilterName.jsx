import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';

function FilterName() {
  const { setFilters, data, setSearch } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setFilters(target.value);
    setSearch(data
      .filter((planet) => planet.name.toLowerCase().includes(target.value)));
  };

  return (
    <label htmlFor="name-filter">
      Nome:
      <input
        onChange={ handleChange }
        id="name-filter"
        data-testid="name-filter"
        type="text"
      />
    </label>
  );
}

export default FilterName;
