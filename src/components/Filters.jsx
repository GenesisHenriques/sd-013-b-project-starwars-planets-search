import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Filters() {
  const { handleNameFilter } = useContext(SWContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Filtrar Planetas por Nome:
        <input
          type="text"
          name="name-filter"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (ev) => handleNameFilter(ev.target.value) }
        />
      </label>
      <div>
        <label htmlFor="category">
          Escolha a categoria:
          <select name="category" id="category" data-testid="column-filter">
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="rule">
          Escolha a regra de comparação:
          <select name="rule" id="rule" data-testid="comparison-filter">
            <option value="maior-que">maior que</option>
            <option value="menor-que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value" data-testid="value-filter">
          <input type="number" name="value" id="value" />
        </label>
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </div>
    </div>
  );
}

export default Filters;
