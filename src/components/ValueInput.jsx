import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ComparisonInput() {
  const { filters, setFilters } = useContext(Context);

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        value: target.value,
      }],
    });
  };

  return (
    <label htmlFor="value-input">
      <input
        data-testid="value-filter"
        onChange={ handleChange }
        type="number"
        min="0"
      />
    </label>
  );
}
