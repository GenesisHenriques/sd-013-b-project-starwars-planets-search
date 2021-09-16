import React, { useContext, useEffect } from 'react';

import MyContext from '../context/MyContext';

function Table() {
  const { data, fetchApi } = useContext(MyContext);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  if (!Object.entries(data).length) return <div>Carregando...</div>;
  console.log(data);
  const { results } = data;
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(results[0]).map((key) => <th key={ key }>{ key }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          results.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet).map((item, index) => <td key={ index }>{item}</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
