import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { filters, setFilters,
    indexNumericFilter, setIndexNumericFilter,
    availableColumns, setAvailableColumns,
    currentNumericFilter, setCurrentNumericFilter,
    disabled,
  } = useContext(AppContext);

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
    const auxAvailableColumns = [...availableColumns];
    const secondAuxAvailableColumns = auxAvailableColumns
      .filter((column) => column !== currentNumericFilter.column);
    setAvailableColumns(secondAuxAvailableColumns);
    const auxObj = { ...currentNumericFilter, column: secondAuxAvailableColumns[0] };
    setCurrentNumericFilter(auxObj);
    setIndexNumericFilter(indexNumericFilter + 1);
    setFilters({ ...filters, filterByNumericValues: auxArray });
  };

  const renderSelectOptions = () => (
    availableColumns.map((column) => (
      <option key={ column } value={ column }>{column}</option>
    ))
  );

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
        value={ currentNumericFilter.column }
        id="column"
        onChange={ handleNumberChange }
        data-testid="column-filter"
      >
        {renderSelectOptions()}
      </select>
      <select
        value={ currentNumericFilter.comparison }
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
          value={ currentNumericFilter.value }
          onChange={ handleNumberChange }
          data-testid="value-filter"
          type="number"
          id="value"
        />
      </label>
      <button
        type="button"
        disabled={ disabled }
        data-testid="button-filter"
        onClick={ applyNumberFilter }
      >
        Aplicar filtro numérico
      </button>
    </form>
  );
}

export default SearchBar;
