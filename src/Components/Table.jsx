import React, { useContext } from 'react';
import Context from '../Context/MyContext';

export default function Table() {
  const { data, loading, filtered } = useContext(Context);

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

  const dataRender = (filtered === undefined) ? data : filtered;

  const renderFilms = () => (
    <table>
      <thead>
        <tr>
          { titles
            .map((title) => (
              <th key={ title }>{ title }</th>
            )) }
        </tr>
      </thead>
      <tbody>
        { dataRender
          .map((planets) => (
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
      { loading ? renderFilms() : <h1>loading...</h1> }
    </div>
  );
}
