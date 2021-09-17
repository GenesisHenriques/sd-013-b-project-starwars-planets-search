import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterNameInput() {
  const {
    setFilter,
    filters,
    filters: { filterByName: { name } } } = useContext(PlanetsContext);

  return (
    <label htmlFor="name">
      Planet Name:
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        value={ name }
        onChange={ ({ target: { value } }) => setFilter(
          { ...filters,
            filterByName: { name: value } },
        ) }
      />
    </label>
  );
}
