import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FiltersHeader() {
  const { filters, setFilters } = useContext(PlanetsContext);

  function handleChange({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value.toLowerCase(),
      },
    });
  }

  return (
    <header className="header">
      <h1>Star Wars Planets</h1>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleChange }
          placeholder="Buscar..."
        />
      </form>
    </header>
  );
}
