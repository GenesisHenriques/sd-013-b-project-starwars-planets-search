import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filters, filtered } = useContext(MyContext);
  const { filterByName: { name } } = filters;

  if (data === undefined) {
    return <h3>Carregando...</h3>;
  }

  const renderData = (filtered === undefined ? data.results : filtered);

  return (
    <div>
      <p>Tabela</p>
      <table>
        <thead>
          <tr>
            {
              Object.keys(data.results[0]).map((columnData, index) => (
                <th key={ index }>{columnData}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            renderData.filter((planet) => planet.name.includes(name))
              .map((infoPlanet, index0) => (
                <tr key={ index0 }>
                  {Object.values(infoPlanet).map((info, index1) => (
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
