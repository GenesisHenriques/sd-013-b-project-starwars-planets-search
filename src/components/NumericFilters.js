import React, { useContext, useState } from 'react';

import PlanetsContext from '../context/PlanetsContext';

import Select from './Select';

const NumericFilters = () => {
  const {
    setNumericFilter,
    columnOptions,
    comparisonOptions,
    filteredColumns,
  } = useContext(PlanetsContext);

  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState(comparisonOptions[0]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setNumericFilter({ column, comparison, value });
  };

  return (
    <form className="numeric-filters" onSubmit={ handleSubmit }>
      <Select
        id="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        options={ filteredColumns }
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
  );
};

export default NumericFilters;
