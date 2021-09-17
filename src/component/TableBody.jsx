import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableBody() {
  const { data, filters: { filter: { name } } } = useContext(PlanetContext);

  const filtredData = data.filter((planet) => planet.name.includes(name));

  return (
    <tbody>
      {filtredData.map((planet, index) => {
        const values = Object.values(planet);
        return (
          <tr key={ index }>
            {values.map((value, index2) => (
              <td key={ index2 }>{ value }</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
