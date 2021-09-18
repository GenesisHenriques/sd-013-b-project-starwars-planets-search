import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

// não desfiltra
function FiltersSection() {
  const { filters, setFilters,
    availableColumns, setAvailableColumns,
    currentNumericFilter, setCurrentNumericFilter,
    setIndexNumericFilter,
    setDisabled,
    setAuxData,
    data,
  } = useContext(AppContext);

  function deleteFilter(currentfilter) {
    setAuxData([...data]);
    const auxFiltersArray = [...filters.filterByNumericValues];
    const filteredFiltersArray = auxFiltersArray
      .filter((filterObj) => filterObj.column !== currentfilter.column);
    setFilters({ ...filters, filterByNumericValues: filteredFiltersArray });
    const auxAvailableColumns = availableColumns;
    auxAvailableColumns.push(currentfilter.column);
    const auxCurrentNumericFilter = { ...currentNumericFilter,
      column: auxAvailableColumns[0] };
    setCurrentNumericFilter(auxCurrentNumericFilter);
    setAvailableColumns(auxAvailableColumns);
    setIndexNumericFilter((prevIndexNumericFilter) => prevIndexNumericFilter - 1);
    setDisabled(false);
  }

  const renderFilter = (filter) => (
    <div key={ filter.column } data-testid="filter">
      <h4>{`${filter.column} ${filter.comparison} ${filter.value}`}</h4>
      <button type="button" onClick={ () => deleteFilter(filter) }>X</button>
    </div>
  );

  return (
    <div>
      {filters.filterByNumericValues.map((filter) => renderFilter(filter))}
    </div>
  );
}

export default FiltersSection;
