import React, { useContext } from 'react';

import MyContext from '../context/MyContext';

function Filters() {
  const { name, handleChange } = useContext(MyContext);
  return (
    <div>
      <label htmlFor="name">
        Filter by name:
        <input
          type="text"
          name="name"
          id="name"
          value={ name }
          onChange={ handleChange }
          autoComplete="off"
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default Filters;
