import React, { useState, useContext } from 'react';

import MainContext from '../context/MainContext';

function SortFilter() {
  const { data: { results }, setSortFilter } = useContext(MainContext);

  const [column, setColumn] = useState('name');
  const [order, setOrder] = useState('ASC');

  function handleChange(e) {
    setColumn(e.target.value);
  }

  function handleClick(e) {
    setOrder(e.target.value);
  }

  if (results.length === 0) {
    return <span>Carregando...</span>;
  } return (
    <div>
      <label htmlFor="column-sort">
        Sort by:
        <select data-testid="column-sort" onChange={ handleChange }>
          {Object.keys(results[0]).map((header) => (
            <option key={ header } value={ header }>{header}</option>
          ))}
        </select>
      </label>
      <input
        name="sort"
        type="radio"
        value="ASC"
        data-testid="column-sort-input-asc"
        onClick={ handleClick }
      />
      Ascending Order
      <input
        name="sort"
        type="radio"
        value="DESC"
        data-testid="column-sort-input-desc"
        onClick={ handleClick }
      />
      Descending Order
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setSortFilter(column, order) }
      >
        Set order
      </button>
    </div>
  );
}

export default SortFilter;
