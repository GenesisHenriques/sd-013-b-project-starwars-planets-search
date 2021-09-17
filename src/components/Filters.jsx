import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const { data, filterByNamePlanet } = useContext(MyContext);

  // esse if é para que de o filter de colunas usando data funcione, pois o fetch demora um pouco:
  if (data === undefined) {
    return <h3>Carregando...</h3>;
  }
  console.log(`data no filters ${data}`);

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
      <label htmlFor="column-filter">
        Filtro de Colunas:
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
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
      <label htmlFor="comparison-filter">
        Filtro de comparação:
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
        >
          <option
            value="maior-que"
          >
            maior que

          </option>
          <option
            value="menor-que"
          >
            menor que

          </option>
          <option
            value="igual-a"
          >
            igual a

          </option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Filtrar Valor:
        <input
          type="number"
          name="value-filter"
          id="value-filter"
          data-testid="value-filter"
          onChange={ ({ target }) => filterByValuesPlanet(target.value) }
        />
      </label>

      <button type="button" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default Filters;
