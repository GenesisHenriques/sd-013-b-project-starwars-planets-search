import React, { useContext, useState } from 'react';

import PlanetsContext from '../context/PlanetsContext';

import Select from './Select';

function Filters() {
  const { filters, setNameFilter, setNumericFilter } = useContext(PlanetsContext);
  const { name } = filters.filterByName;

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState(comparisonOptions[0]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setNumericFilter({ column, comparison, value });
  };

  return (
    <div>
      <div className="name-filter">
        <input
          data-testid="name-filter"
          type="text"
          value={ name }
          onChange={ ({ target }) => setNameFilter(target.value) }
        />
      </div>
      <form className="numeric-filters" onSubmit={ handleSubmit }>
        <Select
          id="column-filter"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
          options={ columnOptions }
        />

        <Select
          id="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
          options={ comparisonOptions }
        />

        <input
          data-testid="value-filter"
          type="text"
          value={ value }
          onChange={ ({ target }) => setValue(target.value.replace(/\D/, '')) }
        />

        <button data-testid="button-filter" type="submit">
          filter
        </button>
      </form>
    </div>
  );
}

export default Filters;
