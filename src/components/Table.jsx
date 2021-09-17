import React, { useContext } from 'react';
import SwContext from '../context/SwContext';

function lineTitleTable() {
  return (
    <tr>
      <th> name </th>
      <th> rotation_period </th>
      <th> orbital_period </th>
      <th> diameter </th>
      <th> climate </th>
      <th> gravity </th>
      <th> terrain </th>
      <th> surface_water </th>
      <th> population </th>
      <th> films </th>
      <th> created </th>
      <th> edited </th>
      <th> url </th>
    </tr>
  );
}

function linePlanetTable(planet, index) {
  const { name, rotation_period: rotation, orbital_period: orbital,
    diameter, climate, gravity, terrain, surface_water: surface,
    population, films, created, edited, url,
  } = planet;
  return (
    <tr key={ index }>
      <td>{ name }</td>
      <td>{ rotation }</td>
      <td>{ orbital }</td>
      <td>{ diameter}</td>
      <td>{ climate }</td>
      <td>{ gravity }</td>
      <td>{ terrain }</td>
      <td>{ surface }</td>
      <td>{ population }</td>
      <td>{ films }</td>
      <td>{ created }</td>
      <td>{ edited }</td>
      <td>{ url }</td>
    </tr>
  );
}

function Table() {
  const { planets } = useContext(SwContext);
  return (
    <>
      <h1>H1 TABLE</h1>
      <table>
        { lineTitleTable() }
        { planets.map((planet, index) => (linePlanetTable(planet, index)))}
      </table>
    </>
  );
}

export default Table;
