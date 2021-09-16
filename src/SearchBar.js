import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';

function SearchBar() {
  const { search, setSearch } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setSearch({
      filters: {
        filterByName: {
          name: target.value,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="search-input">
        <input
          data-testid="name-filter"
          onChange={ handleChange }
          value={ search.filters.filterByName.name }
          type="text"
          name="search"
          id="search-input"
        />
      </label>
    </div>
  );
}

export default SearchBar;
