import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data } = useContext(MyContext);

  if (data === undefined) {
    return <h3>Carregando...</h3>;
  }

  console.log(data);

  return (
    <div>
      <p>Tabela</p>
      <table>
        <thead>
          <tr>
            {
              Object.keys(data.results[0]).map((column, index) => (
                <th key={ index }>{column}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.results.map((rowsPlanet, index0) => (
              <tr key={ index0 }>
                {Object.values(rowsPlanet).map((info, index1) => (
                  <td key={ index1 }>
                    {info}
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
