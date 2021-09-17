import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  if (data === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <table>
      {/* <thead>Tabela de planetas</thead> */}
      <tbody>
        <tr>
          {
            data.map((planet) => <td key={ planet.name }>{planet.name}</td>)
          }
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
