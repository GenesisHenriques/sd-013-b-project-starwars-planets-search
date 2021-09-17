import React, { useState, useContext, useEffect } from 'react';

import MainContext from '../context/MainContext';

const columnFilters = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function NumberFilter() {
  const { filterPlanetsByNumericValue,
    filters: { filterByNumericValues } } = useContext(MainContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('bigger');
  const [value, setValue] = useState('');
  const [updatedColumns, setUpdatedColumns] = useState(columnFilters);

  useEffect(() => {
    filterByNumericValues
      .forEach((filter) => setUpdatedColumns((prevState) => prevState
        .filter((updatedColumn) => updatedColumn !== filter.column)));
  }, [filterByNumericValues]);

  return (
    <div>
      <label htmlFor="column-filter">
        Filter By Amount Of:
        <select
          name="amount"
          value={ column }
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          {updatedColumns.map((filter) => (
            <option key={ filter } value={ filter }>{filter}</option>
          ))}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        It Should Be:
        <select
          name="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

      </label>
      {/* Referência para inserir apenas números no input de texto: https://www.techiedelight.com/restrict-html-input-text-box-to-allow-only-numeric-values/ */}
      <input
        type="text"
        data-testid="value-filter"
        value={ value }
        onChange={ (e) => {
          const regex = new RegExp(/[0-9]+/);
          if (regex.test(e.target.value)) {
            setValue(e.target.value);
          }
          e.target.value = e.target.value
            .replace(/[^0-9.]/g, '')
            .replace(/(\..*)\./g, '$1');
        } }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          filterPlanetsByNumericValue(column, comparison, value);
          setColumn('population');
          setComparison('bigger');
          setValue('');
        } }
      >
        Add Filter
      </button>
    </div>
  );
}

export default NumberFilter;
