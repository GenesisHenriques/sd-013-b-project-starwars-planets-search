import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const { setFilterByName } = useContext(PlanetsContext);
  return (
    <>
      Filters
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (ev) => setFilterByName(ev.target.value) }
      />
    </>
  );
}
