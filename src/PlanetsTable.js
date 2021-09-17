import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';

function PlanetsTable() {
  const {
    planets,
    search: { filters: { filterByNumericValues, filterByName: { name } } },
  } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tempo de Rotação</th>
          <th>Periodo de Orbita</th>
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
          .filter((planet) => filterByNumericValues.every((searchColumn) => {
            if (searchColumn.comparison === 'maior que') {
              return parseFloat(planet[
                searchColumn.column]) > parseFloat(searchColumn.value);
            } if (searchColumn.comparison === 'menor que') {
              return parseFloat(planet[
                searchColumn.column]) < parseFloat(searchColumn.value);
            } if (searchColumn.comparison === 'igual a') {
              return parseFloat(planet[
                searchColumn.column]) === parseFloat(searchColumn.value);
            }
            return true;
          }))
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
