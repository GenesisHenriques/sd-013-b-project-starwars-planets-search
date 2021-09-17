import React, { useContext } from 'react';
import Context from '../../context/Context';
import func from '../../services';

function NameFilter() {
  const { state, setState } = useContext(Context);
  return (
    <input
      data-testid="name-filter"
      typt="text"
      onChange={ (e) => setState(func.filterByPlanetName(state, state.api, e)) }
    />
  );
}

export default NameFilter;
