import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

const FilterList = () => {
  const planets = useContext(PlanetsContext);
  const { filters: { filterByNumericValues }, setFilters, filters } = planets;

  const clickHandler = (e) => {
    const newFilters = filterByNumericValues
      .filter((el) => el.column !== e.target.id);

    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
  };

  return (
    <div style={ { backgroundColor: 'tomato' } }>
      { filterByNumericValues.map((filter, i) => (
        <div key={ i } data-testid="filter">
          <span>{filter.column}</span>
          { ' - ' }
          <span>{filter.comparison}</span>
          { ' - ' }
          <span>{filter.value}</span>
          { ' - ' }
          <button
            onClick={ clickHandler }
            id={ filter.column }
            type="button"
          >
            X
          </button>
        </div>
      )) }
    </div>
  );
};

export default FilterList;
