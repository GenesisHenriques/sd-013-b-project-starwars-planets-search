import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, isLoading } = useContext(PlanetsContext);

  if (isLoading) {
    return <h2>Carregando..</h2>;
  }

  return (
    <table>
      <tr>
        { Object.keys(data[0]).map((planet, index) => (
          <th key={ index }>
            { planet }
          </th>
        )) }
      </tr>
      <tbody>
        { data.map((planets, index) => (
          <tr key={ index }>
            { Object.values(planets).map((info, index2) => (
              <td key={ index2 }>{ info }</td>
            ))}
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
