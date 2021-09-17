import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { filters,
    setFilters, indexNumericFilter, setIndexNumericFilter } = useContext(AppContext);
  const [currentNumericFilter, setCurrentNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleFilterNameChange = ({ target }) => {
    const filterByName = { name: target.value };
    setFilters({ ...filters, filterByName });
  };

  const handleNumberChange = ({ target }) => {
    setCurrentNumericFilter({
      ...currentNumericFilter,
      [target.id]: target.value,
    });
  };

  const applyNumberFilter = () => {
    const auxArray = [...filters.filterByNumericValues];
    auxArray[indexNumericFilter] = currentNumericFilter;
    setIndexNumericFilter(indexNumericFilter + 1);
    setFilters({ ...filters, filterByNumericValues: auxArray });
  };

  return (
    <form>
      <label htmlFor="nameFilter">
        <input
          value={ filters.filterByName.name }
          data-testid="name-filter"
          type="text"
          onChange={ handleFilterNameChange }
          id="nameFilter"
        />
      </label>
      <select
        value={ filters.filterByNumericValues.column }
        id="column"
        onChange={ handleNumberChange }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        value={ filters.filterByNumericValues.comparison }
        id="comparison"
        onChange={ handleNumberChange }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value">
        <input
          value={ filters.filterByNumericValues.value }
          onChange={ handleNumberChange }
          data-testid="value-filter"
          type="number"
          id="value"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyNumberFilter }
      >
        Aplicar filtro numérico
      </button>
    </form>
  );
}

export default SearchBar;
