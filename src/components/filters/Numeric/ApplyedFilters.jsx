import React, { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

export default function ApplyedFilters() {
  const { filters: { filterByNumericValues } } = useContext(PlanetsContext);

  return (
    <div>
      { filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index }>
          <span>{ `${column} ${comparison} ${value}` }</span>
        </div>
      )) }
    </div>
  );
}
