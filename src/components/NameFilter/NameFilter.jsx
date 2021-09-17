import React, { useContext } from 'react';
import Context from '../../context/Context';
import func from '../../services';

function NameFilter() {
  const { state, setState } = useContext(Context);
  return (
    <div>

      <label htmlFor="name-filter">
        {'Search planet by name: '}
        <input
          data-testid="name-filter"
          id="name-filter"
          type="text"
          onChange={ (e) => setState(func.filterByPlanetName(state, state.api, e)) }
        />
      </label>
    </div>
  );
}

export default NameFilter;
