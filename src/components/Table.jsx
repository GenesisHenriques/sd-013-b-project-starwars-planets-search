import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterText from './FilterText';

function Table() {
  const { data, isLoading, filterPlanets } = useContext(PlanetsContext);

  if (isLoading) {
    return <h2>Carregando..</h2>;
  }

  return (
    <table>
      <FilterText />
      <tr>
        { Object.keys(data[0]).map((planet, index) => (
          <th key={ index }>
            { planet }
          </th>
        )) }
      </tr>
      <tbody>
        { filterPlanets(data).map((planets, index) => (
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
