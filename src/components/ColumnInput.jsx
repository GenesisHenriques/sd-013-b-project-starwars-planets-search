import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ColumnInput() {
  const { actualFilter, setActualFilter,
    filters: { filterByNumericValues } } = useContext(Context);

  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const removeUsedOptions = () => {
    filterByNumericValues.forEach(({ column }) => {
      options.splice(options.indexOf(column), 1);
    });
    return options;
  };

  const handleChange = ({ target }) => {
    setActualFilter({
      ...actualFilter,
      column: target.value,
    });
  };

  return (
    <select data-testid="column-filter" onChange={ handleChange }>
      {removeUsedOptions().map((option) => (
        <option key={ option } value={ option }>{ option }</option>
      ))}
    </select>
  );
}
