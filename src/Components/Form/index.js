import React, { useContext, useState } from 'react';
import planetsContext from '../../context/planetsContext';

function Form() {
  const { name, comparison } = useContext(planetsContext);
  const { filters: { filterByNumericValues: filtro } } = useContext(planetsContext);
  const [dropdown, setDropdown] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  console.log(dropdown, filtro);
  const [last, setLast] = useState();

  function renderOptions() {
    const listOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return listOptions.map((option) => {
      if (last !== option) {
        return <option value={ option }>{option}</option>;
      }
      return null;
    });
  }

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          id="name"
          data-testid="name-filter"
          onChange={ ({ target }) => name(target.value) }
        />
      </label>
      <label htmlFor="column">
        Column
        <select
          id="column"
          data-testid="column-filter"
          onChange={ ({ target }) => setDropdown({ ...dropdown, column: target.value }) }
        >
          {
            renderOptions()
          }
        </select>
      </label>
      <label htmlFor="drop2">
        <select
          id="drop2"
          data-testid="comparison-filter"
          onChange={
            ({ target }) => setDropdown({ ...dropdown, comparison: target.value })
          }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="number">
        Value
        <input
          data-testid="value-filter"
          id="number"
          type="number"
          onChange={ ({ target }) => setDropdown({ ...dropdown, value: target.value }) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => { comparison(dropdown); setLast(dropdown.column); } }
      >
        Add Filter
      </button>
    </form>
  );
}

export default Form;
