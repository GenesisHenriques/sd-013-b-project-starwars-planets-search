import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterTable() {
  const {
    setFilter,
    filters: { filterByName: { name } } } = useContext(PlanetsContext);

  return (
    <label htmlFor="name">
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        value={ name }
        onChange={ ({ target: { value } }) => setFilter(
          { filterByName: { name: value } },
        ) }
      />
    </label>
  );
}
