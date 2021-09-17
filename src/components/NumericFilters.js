import React, { useContext, useState } from 'react';

import PlanetsContext from '../context/PlanetsContext';

import Select from './Select';

const NumericFilters = () => {
  const { setNumericFilter } = useContext(PlanetsContext);

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
  const [filteredColumns, setFilteredColumns] = useState(columnOptions);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNumericFilter({ column, comparison, value });
    setFilteredColumns(filteredColumns.filter(
      (columnName) => columnName !== column,
    ));
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
