import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function NameFilter() {
  const { filters, setFilters } = useContext(AppContext);

  const handleName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };
  return (
    <div>
      <label htmlFor="name-filter">
        Filtrar por Nome
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ handleName }
        />
      </label>
    </div>
  );
}

export default NameFilter;
