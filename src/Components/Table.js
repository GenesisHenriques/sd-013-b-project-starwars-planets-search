import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Table() {
  const { data: { results },
    filters: { filterByName: { name } } } = useContext(PlanetContext);

  if (results.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(results[0]).map((header, index) => (
            <th key={ index }>
              { header }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results
          .filter((filterPlanet) => filterPlanet.name.includes(name))
          .map((planet, index) => (
            <tr key={ index }>
              {Object.values(planet).map((info, index2) => (
                <td key={ index2 }>
                  { info }
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
