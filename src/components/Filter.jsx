import React, { useContext } from 'react';
import SwContext from '../context/SwContext';
import InputFilter from './InputFilter';
import SelectFilter from './SelectFilter';

function Filter() {
  const { filters, setFilters } = useContext(SwContext);

  function handleChange(event) {
    const { target: { value, name } } = event;
    if (name === 'name') {
      setFilters([
        {
          ...filters[0],
          filterByName: {
            [name]: value,
          },
          filter: false,
        },
      ]);
    } else {
      setFilters([
        {
          ...filters[0],
          filterByNumericValues: [{
            ...filters[0].filterByNumericValues[0],
            [name]: value,
          }],
          filter: false,
        },
      ]);
    }
  }

  function onClickFilter() {
    const { column, filterByNumericValues } = filters[0];
    const { column: element } = filterByNumericValues[0];
    column.splice(column.indexOf(element), 1);
    setFilters([
      {
        ...filters[0],
        filter: true,
      },
    ]);
  }

  return (
    <form>
      <InputFilter
        name="name"
        type="text"
        onChange={ handleChange }
        testId="name-filter"
      />
      <SelectFilter
        name="column"
        options={ filters[0].column }
        onChange={ handleChange }
        testId="column-filter"
      />
      <SelectFilter
        name="comparison"
        options={ filters[0].comparison }
        onChange={ handleChange }
        testId="comparison-filter"
      />
      <InputFilter
        name="value"
        type="number"
        onChange={ handleChange }
        testId="value-filter"
      />
      <button
        type="button"
        onClick={ onClickFilter }
        data-testid="button-filter"
      >
        Submit
      </button>
    </form>
  );
}

export default Filter;
