import React, { useContext } from 'react';
import ContextCreat from '../context/ContextCreat';

function Header() {
  const { handleName, handleValueFilter, handleFilterClick } = useContext(ContextCreat);
  return (
    <header>
      <label htmlFor="name">
        Planets Filter
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          id="name"
          onChange={ ({ target }) => handleName(target.value) }
        />
      </label>
      <label
        htmlFor="filterNumeric"
      >
        <select
          data-testid="column-filter"
          name="filterNumeric"
          id="filterNumeric"
          onChange={ ({ target }) => handleValueFilter(target.value, 'columFilter') }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="filterBiggerSmallerEqual">
        <select
          name="filterBiggerSmallerEqual"
          id="filterBiggerSmallerEqual"
          data-testid="comparison-filter"
          onChange={ ({ target }) => handleValueFilter(target.value, 'comparisonFilter') }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        <input
          type="number"
          id="valueFilter"
          data-testid="value-filter"
          onChange={ ({ target }) => handleValueFilter(target.value, 'valueFilter') }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterClick }
      >
        Filter
      </button>

    </header>
  );
}

export default Header;
