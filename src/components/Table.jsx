import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Table() {
  const {
    planets,
    loadingFetch,
    filters: { filterByName: { name } },
  } = useContext(planetsContext);

  return (
    <div>
      <h1>Tabela</h1>
      <table>
        <thead>
          <tr>
            {
              loadingFetch && Object.keys(planets[0])
                .map((planet) => {
                  if (planet === 'residents') {
                    return null;
                  }
                  return (
                    <th key={ planet }>{planet}</th>
                  );
                })
            }
          </tr>
        </thead>
        <tbody>
          { loadingFetch && planets
            .filter((planet) => planet.name.toLowerCase()
              .includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
