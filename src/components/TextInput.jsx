import React, { useContext } from 'react';
import PlanetContext from '../context/Context';

function TextInput() {
  const { filters, setFilters } = useContext(PlanetContext);
  const { filterByName: { name } } = filters;

  function handleFilter(event) {
    setFilters({
      ...filters,
      filterByName: {
        name: event.target.value,
      },
    });
  }

  return (
    <div>
      <label htmlFor="name">
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          value={ name }
          onChange={ (event) => handleFilter(event) }
          placeholder="Find your wayward planet, we will"
        />
      </label>
    </div>
  );
}

export default TextInput;
