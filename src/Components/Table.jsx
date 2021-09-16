import React, { useContext } from 'react';
import Context from '../Context/MyContext';

export default function Table() {
  const { data, loading } = useContext(Context);
  const titles = [
    'climate',
    'created',
    'diameter',
    'edited',
    'films',
    'gravity',
    'orbital_period',
    'population',
    'rotation_period',
    'name',
    'surface_water',
    'terrain',
    'url',
  ];

  const renderFilms = () => (
    <table>
      <thead>
        <tr>
          <th>{ titles[0] }</th>
          <th>{ titles[1] }</th>
          <th>{ titles[2] }</th>
          <th>{ titles[3] }</th>
          <th>{ titles[4] }</th>
          <th>{ titles[5] }</th>
          <th>{ titles[6] }</th>
          <th>{ titles[7] }</th>
          <th>{ titles[8] }</th>
          <th>{ titles[9] }</th>
          <th>{ titles[10] }</th>
          <th>{ titles[11] }</th>
          <th>{ titles[12] }</th>
        </tr>
      </thead>
      <tbody>
        { data.map((planets) => (
          <tr key={ planets.name }>
            <td>{planets.climate}</td>
            <td>{planets.created}</td>
            <td>{planets.diameter}</td>
            <td>{planets.edited}</td>
            {planets.films.map((film) => (
              <td key={ film }>
                <p>{film}</p>
              </td>
            ))}
            <td>{planets.gravity}</td>
            <td>{planets.name}</td>
            <td>{planets.orbital_period}</td>
            <td>{planets.population}</td>
            <td>{planets.rotation_period}</td>
            <td>{planets.surface_water}</td>
            <td>{planets.terrain}</td>
            <td>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      {loading ? renderFilms() : <p>Loading...</p>}
    </div>
  );
}
