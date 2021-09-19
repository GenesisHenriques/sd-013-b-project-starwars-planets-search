import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filterByName } = useContext(Context);

  return (
    <div>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          id="name"
          data-testid="name-filter"
          onChange={ (event) => filterByName(event.target.value) }
        />
      </label>
    </div>
  );
}

export default Filters;
