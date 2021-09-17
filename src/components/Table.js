import React, { useContext, useEffect } from 'react';

import MyContext from '../context/MyContext';

function Table() {
  const { data, fetchApi, filteredPlanets } = useContext(MyContext);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  if (!Object.entries(data).length) return <div>Carregando...</div>;

  const { results } = data;
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(results[0])
              .map((key) => <th key={ key }>{ key.replace('_', ' ') }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          filteredPlanets.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet).map((item) => <td key={ item }>{item}</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
