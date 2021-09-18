import React, { useContext, useState } from 'react';
import PlanetContext from '../context/Context';

function NumberFilter() {
  const [columnFilter, handleChangeColumn] = useState('population');
  const [comparisonFilter, handleChangeComparison] = useState('menor que');
  const [valueFilter, handleChangeValue] = useState(0);
  const { handleNumericValues } = useContext(PlanetContext);
  const [newFilter, handleChangeFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  function removeItemArray(column) {
    const remColumn = [...newFilter];
    remColumn.splice(remColumn.indexOf(column), 1);
    handleChangeFilter(remColumn);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => { handleChangeColumn(target.value); } }
      >
        {newFilter.map((item) => <option value={ item } key={ item }>{item}</option>)}
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
        onClick={ () => {
          handleNumericValues(columnFilter, comparisonFilter, valueFilter);
          removeItemArray(columnFilter);
        } }
      >
        Enviar
      </button>
    </div>
  );
}

export default NumberFilter;
