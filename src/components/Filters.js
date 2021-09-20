import React, { useContext, useState } from 'react';

import MyContext from '../context/MyContext';

import { OPTIONS_COLUMN, OPTION_COMPARISON } from '../data';
import Input from './Input';
import Select from './Select';

function Filters() {
  const {
    filters: { filterByName: { name } },
    filters: { filterByNumericValues },
    addFilterByName,
    addFilterByNumericValues,
    removeFilterByNumericValues,
  } = useContext(MyContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleValue = ({ target }) => {
    setValue(target.value);
  };

  const handleButton = () => {
    addFilterByNumericValues({ column, comparison, value });
  };

  const removeFilter = ({ target }) => {
    removeFilterByNumericValues(target.name);
  };

  const columnsList = () => (
    filterByNumericValues.length
      ? OPTIONS_COLUMN
        .filter((opt) => filterByNumericValues
          .some((filter) => filter.column !== opt))
      : OPTIONS_COLUMN
  );

  return (
    <div className="form">
      <Input
        type="text"
        name="name"
        value={ name }
        placeholder="Search name"
        onchange={ addFilterByName }
      />
      <div>
        <Select
          name="column"
          onChange={ handleColumn }
          options={ columnsList() }
        />
        <Select
          name="comparison"
          onChange={ handleComparison }
          options={ OPTION_COMPARISON }
        />
        <Input
          type="number"
          name="value"
          value={ value }
          placeholder="0"
          onchange={ handleValue }
        />
        <button
          className="btn"
          type="button"
          data-testid="button-filter"
          onClick={ handleButton }
        >
          Filtrar
        </button>
        { filterByNumericValues.map((filter) => (
          <div key={ filter.column } data-testid="filter">
            {filter.column}
            <button
              name={ filter.column }
              type="button"
              onClick={ removeFilter }
            >
              X
            </button>
          </div>
        )) }
      </div>
    </div>
  );
}

export default Filters;
