import React, { useContext, useState } from 'react';

import PlanetsContext from '../context/PlanetsContext';

import FilterList from './FilterList';

const columns = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const FilterMenu = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const filteredColumns = (
    columns
      .filter((col) => !filterByNumericValues.some((el) => el.column === col))
  );

  const textChangeHandler = (e) => {
    setFilters({ ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  const submitHandler = () => {
    if (!value) return;

    setFilters({ ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  return (
    <div>
      <h1>BUSCA</h1>
      <input
        data-testid="name-filter"
        onChange={ textChangeHandler }
        type="text"
      />
      <select
        onChange={ (e) => setColumn(e.target.value) }
        data-testid="column-filter"
      >
        { filteredColumns.map((col, i) => (
          <option key={ i }>{col}</option>
        )) }
      </select>
      <select
        onChange={ (e) => setComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ (e) => setValue(e.target.value) }
        data-testid="value-filter"
        type="number"
        value={ value }
      />
      <button
        onClick={ submitHandler }
        data-testid="button-filter"
        type="submit"
      >
        FILTRAR
      </button>
      <FilterList />
    </div>
  );
};

export default FilterMenu;
