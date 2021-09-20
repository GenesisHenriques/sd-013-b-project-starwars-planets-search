import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function InputFilter() {
  const {
    handleChangeFiltered,
    filters,
    handleFilterColumn,
    handleFilterComparison,
    handleFilterValue,
    handleClick,
  } = useContext(TableContext);
  const { filteredByName } = filters;

  return (
    <div>
      <label htmlFor="name-filter">
        Digite Planeta:
        <input
          id="name-filter"
          data-testid="name-filter"
          value={ filteredByName }
          onChange={ handleChangeFiltered }
        />
      </label>

      <select
        data-testid="column-filter"
        name="column-filter"
        onChange={ handleFilterColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison-filter"
        onChange={ handleFilterComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">igual a</option>
        <option value="igual a">menor que</option>
      </select>

      <label htmlFor="number">
        Insira um valor:
        <input
          id="number"
          type="number"
          data-testid="value-filter"
          name="value-filter"
          onChange={ handleFilterValue }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filter
      </button>
    </div>
  );
}

export default InputFilter;
