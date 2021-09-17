import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ValueInput() {
  const { actualFilter, setActualFilter } = useContext(Context);

  const handleChange = ({ target }) => {
    setActualFilter({
      ...actualFilter,
      value: target.value,
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
