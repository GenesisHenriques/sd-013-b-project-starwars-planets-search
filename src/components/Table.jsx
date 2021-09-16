import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, input, setInput, arrFiltered } = useContext(PlanetsContext);
  if (data === undefined) {
    return <p>Loading...</p>;
  }
  const dataFinal = (arrFiltered === undefined) ? data.results : arrFiltered;
  return (
    <>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          value={ input }
          onChange={ (e) => setInput(e.target.value) }
        />
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
