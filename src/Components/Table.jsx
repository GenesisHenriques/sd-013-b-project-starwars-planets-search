import React, { useContext } from 'react';
import AppContext from '../Contexts/AppContext';

function Table() {
  const { search } = useContext(AppContext);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation_period</th>
        <th>Orbital_period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface_water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
      { search.map((infoPlanet) => (
        <tr key={ infoPlanet.name }>
          <td>{ infoPlanet.name }</td>
          <td>{ infoPlanet.rotation_period }</td>
          <td>{ infoPlanet.orbital_period }</td>
          <td>{ infoPlanet.diameter }</td>
          <td>{ infoPlanet.climate }</td>
          <td>{ infoPlanet.gravity }</td>
          <td>{ infoPlanet.terrain }</td>
          <td>{ infoPlanet.surface_water }</td>
          <td>{ infoPlanet.population }</td>
          <td>{ infoPlanet.films }</td>
          <td>{ infoPlanet.created }</td>
          <td>{ infoPlanet.edited }</td>
          <td>{ infoPlanet.url }</td>
        </tr>
      ))}
      ;
    </table>
  );
}

export default Table;
