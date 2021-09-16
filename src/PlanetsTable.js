import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';

function PlanetsTable() {
  const {
    planets,
    search: { filters: { filterByName: { name } } },
  } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tempo de Rotação</th>
          <th>Perioto de Orbita</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Superficie com Água</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {planets.filter((planet) => planet.name.toLowerCase()
          .includes(name.toLowerCase()))
          .map((planet, index) => (
            <tr key={ index }>
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
              <td>{planets.created}</td>
              <td>{planets.edited}</td>
              <td>{planets.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default PlanetsTable;
