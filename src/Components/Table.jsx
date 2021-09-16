import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Table() {
  const { data } = useContext(DataContext);

  return (
    <table>
      <tbody>
        { data.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.films }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
