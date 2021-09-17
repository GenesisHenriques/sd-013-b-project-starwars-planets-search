import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function SearchBar() {
  const { setFilterSearch } = useContext(PlanetsContext);
  const [searchedText, setSearchedText] = useState('');

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  useEffect(() => {
    setFilterSearch(searchedText);
  }, [searchedText, setFilterSearch]);

  return (
    <form>
      <label htmlFor="name-filter">
        Pesquisar:
        <input
          type="text"
          onChange={ ({ target }) => setSearchedText(target.value) }
          data-testid="name-filter"
          id="name-filter"
        />
      </label>

      <label htmlFor="select-column">
        Coluna:
        <select
          data-testid="column-filter"
          id="select-column"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison-filter">
        comparação:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button type="button" data-testid="button-filter">Filtrar</button>
    </form>
  );
}
