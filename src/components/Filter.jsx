import React, { useContext, useState } from 'react';
import Select from './Select';
import PlanetContext from '../context/PlanetContext';
import { saveInputPlanets } from '../services/helper';

export default function Filter() {
  const [nameFilter, setNameFilter] = useState('');
  const [valueFilter, setValueFilter] = useState(0);
  const { setInputPlanets, setInputNumbers, comboFilter } = useContext(PlanetContext);

  return (
    <div>
      <input
        type="text"
        name="nameFilter"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ ({ target }) => saveInputPlanets(setNameFilter,
          setInputPlanets, target) }
      />
      <Select
        params={ {
          id: 'column-filter',
          title: 'columnFilter',
          filter: 'column',
        } }
      />
      <Select
        params={ {
          id: 'comparison-filter',
          title: 'comparisonFilter',
          filter: 'comparison',
        } }
      />
      <input
        type="number"
        name="valueFilter"
        data-testid="value-filter"
        min="0"
        value={ valueFilter }
        onChange={ ({ target }) => saveInputPlanets(setValueFilter,
          setInputNumbers, target) }
      />
      <button type="button" data-testid="button-filter" onClick={ comboFilter }>
        Filtrar
      </button>
    </div>
  );
}
