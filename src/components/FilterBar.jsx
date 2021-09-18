import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterBar() {
  const { setFilterByName } = useContext(PlanetsContext);

  return (
    <div>
      <label htmlFor="searchText">
        Pesquisar:
        <input
          type="text"
          // value={ filterByName }
          id="searchText"
          name="searchText"
          placeholder="Pesquisar por nome"
          data-testid="name-filter"
          onChange={ ({ target }) => setFilterByName({ name: target.value }) }
        />
      </label>
    </div>
  );
}

export default FilterBar;
