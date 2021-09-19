import React, { useContext } from 'react';
import ContextCreat from '../context/ContextCreat';

function Header() {
  const {
    handleName,
    handleValueFilter,
    columnsFilter,
    filters,
  } = useContext(ContextCreat);
  const { optionValue } = filters;

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
          { optionValue.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          )) }
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
        onClick={ columnsFilter }
      >
        Filter
      </button>

    </header>
  );
}

export default Header;
