import React, { useContext, useState } from 'react';
import PlanetContext from '../context/Context';

function NumberFilter() {
  const [columnFilter, handleChangeColumn] = useState('population');
  const [comparisonFilter, handleChangeComparison] = useState('menor que');
  const [valueFilter, handleChangeValue] = useState(0);
  const { handleNumericValues } = useContext(PlanetContext);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => { handleChangeColumn(target.value); } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => { handleChangeComparison(target.value); } }
      >
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="name"
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => { handleChangeValue(Number(target.value)); } }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleNumericValues(columnFilter, comparisonFilter, valueFilter) }
      >
        Enviar
      </button>
    </div>
  );
}

export default NumberFilter;
