import React, { useContext } from 'react';

import MainContext from '../context/MainContext';

function FilterList() {
  const { filters: { filterByNumericValues }, removeFilter } = useContext(MainContext);

  if (filterByNumericValues.length === 0) {
    return <div>Nenhum filtro selecionado</div>;
  }
  return (
    <div>
      <p>Lista de filtros</p>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          {`${column} é ${comparison}: ${value}`}
          <button type="button" onClick={ () => removeFilter(column) }>X</button>
        </div>
      ))}
    </div>
  );
}

export default FilterList;
