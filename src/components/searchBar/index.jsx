import React, { useCallback, useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function SearchBar() {
  const { handleFilterByName } = useContext(MainContext);

  const handleChange = useCallback(
    ({ target }) => {
      handleFilterByName(target.value);
    },
    [handleFilterByName],
  );

  return (
    <div>
      <form>
        <label htmlFor="search-bar">
          Pesquisar:
          <input
            data-testid="name-filter"
            type="text"
            name="searchBar"
            id="search-bar"
            placeholder="Pesquisar Pelo nome"
            onChange={ handleChange }
          />
        </label>
      </form>
    </div>
  );
}
