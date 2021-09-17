import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const { filterByNamePlanet } = useContext(MyContext);

  return (
    <form>
      <label htmlFor="filterName">
        <input
          type="text"
          id="filterName"
          data-testid="name-filter"
          onChange={ ({ target }) => filterByNamePlanet(target.value) }
        />
      </label>
    </form>
  );
}

export default Filters;
