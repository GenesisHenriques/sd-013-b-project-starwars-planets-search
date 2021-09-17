import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';

function PlanetsTable() {
  const {
    planets,
    search: { filters: { order, filterByNumericValues, filterByName: { name } } },
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
          .sort((first, second) => {
            if (Number.isNaN(
              parseFloat(first[order.column]) - parseFloat(
                second[order.column],
              ),
            ) !== true) {
              if (order.sort === 'ASC') {
                return parseFloat(first[order.column]) - parseFloat(second[order.column]);
              } if (order.sort === 'DESC') {
                return parseFloat(second[order.column]) - parseFloat(first[order.column]);
              }
            }
            const MENOS_1 = -1;
            if (order.sort === 'ASC') {
              if (first[order.column] > second[order.column]) {
                return 1;
              } if (first[order.column] < second[order.column]) {
                return MENOS_1;
              }
              return 0;
            }
            if (order.sort === 'DESC') {
              if (first[order.column] < second[order.column]) {
                return 1;
              } if (first[order.column] > second[order.column]) {
                return MENOS_1;
              }
            }
            return 0;
          })
          .map((planet, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{planet.name}</td>
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
