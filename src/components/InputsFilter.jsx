import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function InputsFilters() {
  const { setName } = useContext(StarWarsContext);
  return (
    <label htmlFor="name">
      Name:
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        onChange={ ({ target }) => setName(target.value) }
      />
    </label>
  );
}
