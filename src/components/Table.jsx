import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { state } = useContext(PlanetsContext);

  function table() {
    if (state) return console.log(state);
    // pegar o state.results
    // criar um array com filter excluindo a residentes
    // fazer o map de um array aqui para popular a tabela
  }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>residents</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
        </tr>
      </thead>
      <tbody>
        { table() }
      </tbody>
    </table>
  );
}

export default Table;
