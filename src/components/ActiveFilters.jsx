import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ActiveFitlers() {
  const { filters, setFilters } = useContext(Context);
  const { filterByNumericValues } = filters;

  const handleClick = (index) => {
    const copy = [...filterByNumericValues];
    copy.splice(index, 1);
    setFilters({
      ...filters,
      filterByNumericValues: copy,
    });
  };

  return (
    <div>
      { filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index }>
          <p data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button type="button" onClick={ () => handleClick(index) }>
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
