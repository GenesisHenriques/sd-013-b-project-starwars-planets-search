import React, { useContext, useState } from 'react';
import AppContext from '../Contexts/AppContext';

function FilterNumbers() {
  const [column, setColumn] = useState('Options');
  const [comparison, setComparison] = useState('Maior que');
  const [value, setValue] = useState(0);
  const { setFilters, filters } = useContext(AppContext);
  // const { filterByNumericValues } = filters;

  const handleClick = () => {
    setFilters(
      { ...filters,
        filterByNumericValues: [...filters.filterByNumericValues,
          { column, comparison, value }] },
    );
    console.log(setFilters());
  };

  return (
    <form>
      <label htmlFor="colum">
        <select
          onChange={ ({ target }) => { setColumn(target.value); } }
          name="column"
          id="column"
          data-testid="column-filter"
        >
          <option value="Population">Population</option>
          <option value="Orbital_period">Orbital_period</option>
          <option value="Diameter">Diameter</option>
          <option value="Rotation_period">Rotation_period</option>
          <option value="Surface_water">Surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          onChange={ ({ target }) => { setComparison(target.value); } }
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
        >
          <option value="Maior que">Maior que</option>
          <option value="Menor que">Menor que</option>
          <option value="Igual a">Igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor:
        <input
          onChange={ ({ target }) => { setValue(target.value); } }
          type="number"
          id="value-filter"
          data-testid="value-filter"
        />
      </label>
      <button
        onClick={ (event) => { event.preventDefault(); handleClick(); } }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterNumbers;
