import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data, filters,
    auxData, setAuxData,
  } = useContext(AppContext);

  useEffect(() => {
    setAuxData([...data]);
  }, [data, setAuxData]);

  useEffect(() => {
    function comparisonHelper(filter) {
      if (filter.comparison === 'maior que') {
        setAuxData((prevAuxData) => (prevAuxData.filter(
          (planet) => (Number(planet[filter.column])) > (Number(filter.value)),
        )));
      } if (filter.comparison === 'menor que') {
        setAuxData((prevAuxData) => (prevAuxData.filter(
          (planet) => (Number(planet[filter.column])) < (Number(filter.value)),
        )));
      } if (filter.comparison === 'igual a') {
        setAuxData((prevAuxData) => (prevAuxData.filter(
          (planet) => (Number(planet[filter.column])) === (Number(filter.value)),
        )));
      }
    }
    (filters.filterByNumericValues)
      .map((currentNumericFilter) => comparisonHelper(currentNumericFilter));
  },
  [filters.filterByNumericValues, setAuxData]);

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

  function renderTableBody() {
    return (
      <tbody>
        {auxData
          .filter((planet) => planet.name.includes(filters.filterByName.name))
          .map((planet) => renderTableRow(planet))}
      </tbody>);
  }

  if (data.length > 0) {
    return (
      <table border="2">
        {renderTableHeader()}
        {renderTableBody()}
      </table>
    );
  }
  return (<h2>Preparando tabela</h2>);
};

export default Table;
