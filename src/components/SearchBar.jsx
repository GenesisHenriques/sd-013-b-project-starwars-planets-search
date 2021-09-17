import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { filters, setFilters } = useContext(AppContext);
  const handleFilterNameChange = ({ target }) => {
    const filterByName = { name: target.value };
    setFilters({ ...filters, filterByName });
  };

  return (
    <form>
      <label htmlFor="nameFilter">
        <input
          value={ filters.filterByName.name }
          data-testid="name-filter"
          type="text"
          onChange={ handleFilterNameChange }
          id="nameFilter"
        />
      </label>
    </form>
  );
}

export default SearchBar;
