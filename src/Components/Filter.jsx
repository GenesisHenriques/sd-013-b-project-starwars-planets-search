import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

let columnDropdown = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const comparisonDropdown = ['maior que', 'menor que', 'igual a'];

const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

function Filter() {
  const {
    filters,
    filters: { filterByName },
    setFilters,
  } = useContext(StarWarsContext);
  const [state, setState] = useState(INITIAL_STATE);
  const { column, comparison, value: inputValue } = state;

  function handleChange({ target }) {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  function stateUpdater({ target }) {
    const { id, value } = target;
    setState({
      ...state,
      [id]: value,
    });
  }

  function handleClick() {
    if (columnDropdown.length) {
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison,
            value: inputValue,
          },
        ],
      });

      const newColumn = [];

      columnDropdown.forEach((columnValue) => {
        if (columnValue === column) return;
        newColumn.push(columnValue);
      });

      columnDropdown = newColumn;

      setState({
        ...state,
        column: columnDropdown[0],
      });
    }
  }

  return (
    <div>
      <input
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ handleChange }
        type="text"
      />

      <select
        id="column"
        value={ column }
        onChange={ stateUpdater }
        data-testid="column-filter"
      >
        { columnDropdown.map((option) => <option key={ option }>{ option }</option>) }
      </select>

      <select
        id="comparison"
        value={ comparison }
        onChange={ stateUpdater }
        data-testid="comparison-filter"
      >
        { comparisonDropdown.map((option) => <option key={ option }>{ option }</option>) }
      </select>

      <input
        id="value"
        value={ inputValue }
        onChange={ stateUpdater }
        data-testid="value-filter"
        type="number"
      />

      <button
        onClick={ handleClick }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
