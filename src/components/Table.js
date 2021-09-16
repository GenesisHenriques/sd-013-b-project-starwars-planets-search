import React, { useContext } from 'react';
import { Context } from '../context/Provider';

const Table = () => {
  const { planets } = useContext(Context);
  if (planets.length === 0) {
    return <div>Carregando...</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          { Object.keys(planets[0]).map((item, index) => (
            <th key={ index }>{ item }</th>))}
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, index) => (
          <tr key={ index }>
            { Object.values(planet).map((item) => (
              <td key={ item }>
                { item }
              </td>
            ))}
          </tr>))}
      </tbody>
    </table>
  );
};

export default Table;
