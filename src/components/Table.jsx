import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data, filters } = useContext(AppContext);

  function renderTableHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Período de Rotação</th>
          <th>Período de Órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água na superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criação</th>
          <th>Edição</th>
          <th>URL</th>
        </tr>
      </thead>
    );
  }

  function renderTableRow(planet) {
    const renderFilms = (films) => (
      <ul>
        {films.map((film, index) => (
          <li key={ index }>
            <a href={ film } target="blank">
              { film }
            </a>
          </li>))}
      </ul>
    );

    return (
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
        <td>{renderFilms(planet.films)}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td><a href={ planet.url } target="blank">{planet.url}</a></td>
      </tr>
    );
  }

  if (data.length > 0) {
    return (
      <table border="2">
        {renderTableHeader()}
        <tbody>
          {data
            .filter((planet) => planet.name.includes(filters.filterByName.name))
            .map((planet) => renderTableRow(planet))}
        </tbody>
      </table>
    );
  }
  return (<h2>Preparando tabela</h2>);
};

export default Table;
