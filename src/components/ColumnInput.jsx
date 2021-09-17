import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ColumnInput() {
  const { filters, setFilters } = useContext(Context);

  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        column: target.value,
      }],
    });
  };

  return (
    <select data-testid="column-filter" onChange={ handleChange }>
      {options.map((option) => (
        <option key={ option } value={ option }>{ option }</option>
      ))}
    </select>
  );
}
