import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

export default function Table() {
  const { data } = useContext(PlanetContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {data.length > 0 ? Object.keys(data[0]).map((element, index) => (
              <th key={ index }>{element}</th>
            )) : null }
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={ element.name }>
              <td>{element.name}</td>
              <td>{element.rotation_period}</td>
              <td>{element.orbital_period}</td>
              <td>{element.diameter}</td>
              <td>{element.climate}</td>
              <td>{element.gravity}</td>
              <td>{element.terrain}</td>
              <td>{element.surface_water}</td>
              <td>{element.population}</td>
              <td>{element.films}</td>
              <td>{element.created}</td>
              <td>{element.edited}</td>
              <td>{element.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
