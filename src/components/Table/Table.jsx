import React, { useContext } from 'react';
import Context from '../../context/Context';

function Table() {
  const { state: { api } } = useContext(Context);
  return (
    <div>
      {api
        && typeof api === 'object'
        ? (
          <table>
            <caption>Star Wars Planets</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surface Water</th>
                <th>Population</th>
                <th>Films</th>
                <th>Created</th>
                <th>Edited</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {
                api.map(({
                  name,
                  rotation_period: rotationPeriod,
                  orbital_period: orbitalPeriod,
                  diameter,
                  climate,
                  gravity,
                  terrain,
                  surface_water: surfaceWater,
                  population,
                  films,
                  created,
                  edited,
                  url,
                }, i) => (
                  <tr key={ `planet- ${i}` }>
                    <td>{ name }</td>
                    <td>{ rotationPeriod }</td>
                    <td>{ orbitalPeriod }</td>
                    <td>{ diameter }</td>
                    <td>{ climate }</td>
                    <td>{ gravity }</td>
                    <td>{ terrain }</td>
                    <td>{ surfaceWater }</td>
                    <td>{ population }</td>
                    <td>{ films }</td>
                    <td>{ created }</td>
                    <td>{ edited }</td>
                    <td>{ url }</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
        : (
          <h1>
            loading...
          </h1>
        )}
    </div>
  );
}

export default Table;
