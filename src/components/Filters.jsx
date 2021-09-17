import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const { data, filterByNamePlanet, filterByValuesPlanet } = useContext(MyContext);

  // esse if é para que de o filter de colunas usando data funcione, pois o fetch demora um pouco:
  if (data === undefined) {
    return <h3>Carregando...</h3>;
  }

  return (
    <form>
      <label htmlFor="filterName">
        <input
          type="text"
          id="filterName"
          data-testid="name-filter"
          onChange={ ({ target }) => filterByNamePlanet(target.value) }
        />
      </label>

      {/* Filtragens mais complexas: */}
      <label htmlFor="column">
        Filtro de Colunas:
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          onClick={ ({ target }) => filterByValuesPlanet(target.name, target.value) }
          // onChange={ ({ target }) => console.log(target.value) }
        >
          {
            Object.keys(data.results[0]).map((columns, index) => (
              <option
                key={ index }
                value={ columns }
              >
                { columns }
              </option>
            ))
          }
        </select>
      </label>

      <label htmlFor="comparison">
        Filtro de comparação:
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onClick={ ({ target }) => filterByValuesPlanet(target.name, target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        Filtrar Valor:
        <input
          type="number"
          name="value"
          id="value"
          data-testid="value-filter"
          onChange={ ({ target }) => filterByValuesPlanet(target.name, target.value) }
        />
      </label>

      <button type="button" data-testid="button-filter">Filtrar</button>

    </form>
  );
}

export default Filters;
