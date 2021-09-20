import React, { useContext } from 'react';
import SwContext from '../context/SwContext';
import InputFilter from './InputFilter';
import SelectFilter from './SelectFilter';

function Filter() {
  const { filters, setFilters } = useContext(SwContext);

  const column = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const comparison = ['maior que', 'menor que', 'igual a'];

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
        options={ column }
        onChange={ handleChange }
        testId="column-filter"
      />
      <SelectFilter
        name="comparison"
        options={ comparison }
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
