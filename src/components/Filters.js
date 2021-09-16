import React, { useContext, useState } from 'react';

import MyContext from '../context/MyContext';

import { OPTIONS_COLUMN, OPTION_COMPARISON } from '../data';

function Filters() {
  const {
    filters: { filterByName: { name } },
    handleChange,
    handleClick,
  } = useContext(MyContext);
  const [column, setColumn] = useState('population');
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

  return (
    <div>
      <label htmlFor="name">
        Filter by name:
        <input
          type="text"
          name="name"
          id="name"
          value={ name }
          onChange={ handleChange }
          autoComplete="off"
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="column">
        <select
          name="column"
          onChange={ handleColumn }
          id="column"
          data-testid="column-filter"
        >
          {
            OPTIONS_COLUMN.map((option) => (
              <option key={ option }>
                {option}
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          onChange={ handleComparison }
          id="comparison"
          data-testid="comparison-filter"
        >
          {
            OPTION_COMPARISON.map((option) => (
              <option
                key={ option }
                value={ option }
              >
                {option}
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          name="value"
          id="value"
          placeholder="0"
          onChange={ handleValue }
          autoComplete="off"
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick({ column, comparison, value }) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
