import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Filters() {
  const { handleNameFilter } = useContext(SWContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Filtrar Planetas por Nome:
        <input
          type="text"
          name="name-filter"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (ev) => handleNameFilter(ev.target.value) }
        />
      </label>
    </div>
  );
}

export default Filters;
