import React, { useContext, useState } from 'react';
import Context from './context/Context';

function Table() {
  const context = useContext(Context);
  const { data, loaded } = context;
  const { results } = data;

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const nome = filter.filters.filterByName.name;
  /* const lowerBusca = filter.toLowerCase();
        const planetasFiltrados = results
          .filter((planetFilter) => planetFilter.name.toLowerCase().includes(lowerBusca));
        console.log(planetasFiltrados);
        return (
          <ul>
            { planetasFiltrados
              .map((f) => (<li key={ f }><a href={ f }>{ f }</a></li>)) }
          </ul>
        ); */

  function criaTable(planet) {
    const { name,
      diameter,
      climate,
      gravity,
      terrain,
      population,
      films,
      created,
      edited,
      url,
    } = planet;

    const renderFilmes = () => (
      (
        <ul>
          { films.map((f) => (<li key={ f }><a href={ f }>{ f }</a></li>)) }
        </ul>
      )
    );

    return (
      <tr key={ planet.name }>
        <td>{ name }</td>
        <td>{ planet.rotation_period }</td>
        <td>{ planet.orbital_period }</td>
        <td>{ diameter }</td>
        <td>{ climate }</td>
        <td>{ gravity }</td>
        <td>{ terrain }</td>
        <td>{ planet.surface_water }</td>
        <td>{ population }</td>
        <td>{ renderFilmes() }</td>
        <td>{ created }</td>
        <td>{ edited }</td>
        <td>{ url }</td>
      </tr>
    );
  }

  function renderTable() {
    if (nome === '') {
      return results.map((planet) => (criaTable(planet)));
    }
    const lowerBusca = nome.toLowerCase();
    const planetasFiltrados = results
      .filter((planetFilter) => planetFilter.name.toLowerCase().includes(lowerBusca));
    return planetasFiltrados.map((planet) => (criaTable(planet)));
  }

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ nome }
        onChange={ (e) => setFilter({
          filters: {
            filterByName: {
              name: e.target.value,
            },
          },
        }) }
      />
      <table border="1">
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período Orbital</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terra</th>
          <th>Agua</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado em</th>
          <th>Editado</th>
          <th>URL</th>
        </tr>
        { loaded ? renderTable() : <h1>carregando...</h1>}
      </table>
    </div>
  );
}

export default Table; // gerg
