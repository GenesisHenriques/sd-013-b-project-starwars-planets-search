import React, { useContext } from 'react';
import SwContext from '../context/SwContext';

function Filter() {
  const { filters, setFiltersByName } = useContext(SwContext);

  function handleChange(event) {
    const { target: { value, name } } = event;
    setFiltersByName([
      {
        filterByName: {
          [name]: value,
        },
      },
    ]);
  }

  return (
    <form>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          onChange={ handleChange }
          placeholder="Filtre pelo nome do planeta"
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Filter;
