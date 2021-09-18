import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { planets } = useContext(Context);

  if (planets === undefined) {
    return <h3>Loading...</h3>;
  }

  let theads = [];
  if (planets.length > 0) {
    theads = Object.keys(planets[0]);
  }

  return (
    <table>
      <thead>
        <tr>
          { theads.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
