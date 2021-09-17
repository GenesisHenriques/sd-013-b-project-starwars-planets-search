import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ComparisonInput() {
  const { actualFilter, setActualFilter } = useContext(Context);

  const options = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target }) => {
    setActualFilter({
      ...actualFilter,
      comparison: target.value,
    });
  };

  return (
    <select data-testid="comparison-filter" onChange={ handleChange }>
      {options.map((option) => (
        <option key={ option } value={ option }>{ option }</option>
      ))}
    </select>
  );
}
