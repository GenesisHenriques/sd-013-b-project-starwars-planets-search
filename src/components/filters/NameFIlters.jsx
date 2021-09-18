import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function NameFilters() {
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
    <input
      data-testid="name-filter"
      type="text"
      onChange={ handleChange }
      placeholder="Buscar..."
    />
  );
}
