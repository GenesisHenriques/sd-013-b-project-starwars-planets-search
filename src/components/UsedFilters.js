import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function UsedFilters() {
  const {
    availableColumns, filters, setAvailableColumns, setFilterMethod, setFilters,
  } = useContext(PlanetContext);

  function handleClick({ target }) {
    const grandParentDiv = target.parentElement.parentElement;
    const columnToRestore = grandParentDiv.querySelector('select').value;
    setAvailableColumns(
      [
        ...availableColumns,
        columnToRestore,
      ],
    );
    let newFiltersAfterExclude = [];
    newFiltersAfterExclude = filters.filterByNumericValues
      .filter((filter) => filter.column !== columnToRestore);
    if (newFiltersAfterExclude.length > 0) {
      setFilters({
        filterByNumericValues: newFiltersAfterExclude,
      });
    } else {
      setFilters({
        filterByName: {
          name: '',
        },
      });
      setFilterMethod('noFilter');
    }
  }

  if (filters.filterByNumericValues) {
    const { filterByNumericValues } = filters;

    return filterByNumericValues.length > 0
      && filterByNumericValues.map((usedFilter, index) => (
        <div
          key={ index }
        >
          <select
            className="column"
            name="name"
            disabled
          >
            <option>{ usedFilter.column }</option>
          </select>
          <select
            disabled
          >
            <option>{ usedFilter.comparison }</option>
          </select>
          <input
            type="number"
            value={ usedFilter.value }
            disabled
          />
          <span
            data-testid="filter"
          >
            <button
              type="button"
              onClick={ handleClick }
            >
              X
            </button>
          </span>
        </div>
      ));
  }
}

export default UsedFilters;
