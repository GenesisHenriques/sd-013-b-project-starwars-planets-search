import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function Filters() {
  const {
    filters,
    setFilters,
  } = useContext(planetsContext);

  function handleChange({ target }) {
    const toLowerCase = target.value.toLowerCase();
    setFilters((prevState) => ({
      ...prevState,
      filterByName: {
        ...prevState.filterByName,
        name: toLowerCase,
      },
    }));
  }

  return (
    <div>
      <h1>Filtros</h1>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          value={ filters.filterByName.name }
          onChange={ handleChange }
        />
      </form>
    </div>
  );
}
