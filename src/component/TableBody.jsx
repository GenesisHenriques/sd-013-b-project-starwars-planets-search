import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableBody() {
  const { data } = useContext(PlanetContext);

  return (
    <tbody>
      {data.map((planet) => {
        const values = Object.values(planet);
        return (
          <tr key={ planet.name }>
            {values.map((value) => (
              <td key={ value }>{ value }</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
