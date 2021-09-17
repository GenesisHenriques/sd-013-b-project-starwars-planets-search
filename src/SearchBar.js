import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';

const OPTIONS_COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SearchBar() {
  const { search, setSearch } = useContext(StarWarsContext);

  const handleChangeName = ({ target: { value } }) => {
    setSearch({
      filters: {
        ...search.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  const handleClickColumn = () => {
    const columnValue = document.getElementById('select-colum');
    const selectComparisonValue = document.getElementById('select-comparison');
    const textValue = document.getElementById('value-text');
    setSearch({
      filters: {
        ...search.filters,
        filterByNumericValues: [
          ...search.filters.filterByNumericValues,
          {
            column: columnValue.value,
            comparison: selectComparisonValue.value,
            value: textValue.value,
          },
        ],
      },
    });
    columnValue.value = '';
    selectComparisonValue.value = 'maior que';
    textValue.value = '';
  };

  const { filters: { filterByNumericValues } } = search;

  return (
    <div>
      <label htmlFor="search-input">
        <input
          data-testid="name-filter"
          onChange={ handleChangeName }
          value={ search.filters.filterByName.name }
          type="text"
          name="search"
          id="search-input"
        />
      </label>
      <label htmlFor="select-colum">
        <select
          marked="column"
          data-testid="column-filter"
          name="column"
          id="select-colum"
        >
          {
            OPTIONS_COLUMN.filter((option) => filterByNumericValues
              .every((filter) => !filter.column.includes(option)))
              .map((filterColumn) => (
                <option
                  key={ filterColumn }
                  value={ filterColumn }
                >
                  {filterColumn}
                </option>))
          }
        </select>
      </label>
      <label htmlFor="select-comparison">
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="select-comparison"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-text">
        <input data-testid="value-filter" type="text" name="value" id="value-text" />
      </label>
      <button
        data-testid="button-filter"
        onClick={ handleClickColumn }
        type="button"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
