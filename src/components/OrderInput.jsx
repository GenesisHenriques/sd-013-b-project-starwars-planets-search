import React, { useContext, useState } from 'react';
import Context from '../context/Context';

export default function OrderInput() {
  const { filters, setFilters } = useContext(Context);
  const [columnSort, setColumnSort] = useState('name');
  const [radioSort, setradioSort] = useState('ASC');

  const options = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const handleClick = () => {
    console.log(columnSort, radioSort);
    setFilters({
      ...filters,
      order: { column: columnSort, sort: radioSort },
    });
  };

  return (
    <div>
      <select onChange={ ({ target }) => setColumnSort(target.value) } data-testid="column-sort">
        {options.map((option, index) => (
          <option key={ index }>{ option }</option>
        ))}
      </select>
      <div onChange={ ({ target }) => setradioSort(target.value) }>
        <label htmlFor="sort-radio">
          Ascendente
          <input data-testid="column-sort-input-asc" type="radio" name="sort-radio" checked="checked" value="ASC" />
        </label>
        <label htmlFor="sort-radio">
          Descendente
          <input data-testid="column-sort-input-desc" type="radio" name="sort-radio" value="DESC" />
        </label>
      </div>
      <button data-testid="column-sort-button" onClick={ handleClick } type="button">Ordenar</button>
    </div>
  );
}
