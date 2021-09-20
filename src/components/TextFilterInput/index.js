import React from 'react';

import { useTableContext } from '../../context/TableProvider';

export default function TextFilterInput() {
  const { handleFilterPlanets } = useTableContext();
  return (
    <label htmlFor="name">
      Filter By name
      <input
        type="text"
        data-testid="name-filter"
        name="name"
        onChange={ handleFilterPlanets }
      />
    </label>
  );
}
