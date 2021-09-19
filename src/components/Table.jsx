import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';

export default function Table() {
  const { dados, name } = useContext(StarWarsContext);

  if (dados.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(dados[0]).map((planet) => (
              <th key={ planet.name }>
                {planet}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {dados
            .filter((planet) => planet.name.toLowerCase().includes(
              name.toLowerCase(),
            ))
            .map((planet) => (
              <tr key={ planet.creatd }>
                <td>{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.created}</td>
                <td>{planet.diameter}</td>
                <td>{planet.edited}</td>
                <td>{planet.films}</td>
                <td>{planet.gravity}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.population}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.terrain}</td>
                <td>{planet.url}</td>
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}
