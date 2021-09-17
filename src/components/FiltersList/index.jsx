import React from 'react';
import { useSWContext } from '../../context';

const FiltersList = () => {
  const { filters: { filterByNumericValues }, removeNumericFilter } = useSWContext();

  return filterByNumericValues.map(({ column, comparison, value }) => (
    <div data-testid="filter" key={ column }>
      <span>{ `${column} ${comparison} ${value}` }</span>
      <button type="button" onClick={ () => removeNumericFilter(column) }>
        X
      </button>
    </div>
  ));
};

export default FiltersList;
