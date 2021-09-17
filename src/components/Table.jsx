import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data,
    text,
    setText,
    arrFiltered,
    number,
    setNumber,
    handleClick,
    setColumn,
    setComparison,
  } = useContext(PlanetsContext);
  if (arrFiltered === undefined) {
    return <p>Loading...</p>;
  }
  const dataFinal = arrFiltered;
  return (
    <>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          value={ text }
          onChange={ (e) => setText(e.target.value) }
        />
        <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
          <option value="">Selecione</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="">Selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ number }
          onChange={ (e) => setNumber(e.target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </div>
      <table border="1">
        <thead>
          <tr>
            {Object.keys(data.results[0])
              .filter((e) => e !== 'residents')
              .map((e, index) => <th key={ index }>{e}</th>)}
          </tr>
        </thead>
        <tbody>
          {dataFinal.map((e, index) => (
            <tr key={ index }>
              <td>{e.name}</td>
              <td>{e.rotation_period}</td>
              <td>{e.orbital_period}</td>
              <td>{e.diameter}</td>
              <td>{e.climate}</td>
              <td>{e.gravity}</td>
              <td>{e.terrain}</td>
              <td>{e.surface_water}</td>
              <td>{e.population}</td>
              <td>{e.films}</td>
              <td>{e.created}</td>
              <td>{e.edited}</td>
              <td>{e.url}</td>
            </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
