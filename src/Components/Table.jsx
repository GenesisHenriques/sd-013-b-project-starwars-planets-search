import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotationPeriod</th>
          <th>orbitalPeriod</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surfaceWater</th>
          <th>population</th>
          <th>created</th>
          <th>url</th>
          <th>edited</th>
          <th>films</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map(
            ({
              name,
              rotation_period: rotation,
              orbital_period: orbital,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: water,
              population,
              created,
              url,
              edited,
              films,
            }) => (
              <tr key={ name }>
                <td>{ name }</td>
                <td>{ rotation }</td>
                <td>{ orbital }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ water }</td>
                <td>{ population }</td>
                <td>{ created }</td>
                <td>{ url }</td>
                <td>{ edited }</td>
                <td>{ films[0] }</td>
              </tr>
            ),
          )
        }
      </tbody>
    </table>
  );
}

export default Table;
