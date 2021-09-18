import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    data, filterByNamePlanet,
    filters, setFilters } = useContext(MyContext);

  const [filtersObj, setFiltersObj] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const columnsSelectFilter = [
    '-',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const checkColumnsSeleted = () => {
    // checa se no filter do context existe mesma coluna do select de coluna do componente:
    const filterByNVLength = filters.filterByNumericValues;
    for (let i = 0; i <= filterByNVLength.lentgh; i += 1) {
      columnsSelectFilter.forEach((column, indexC) => {
        if (filterByNVLength[i].column === column) {
          return columnsSelectFilter.splice(indexC, 1);
        }
      });
    }
  };

  const handleClickButtonFilter = () => {
    // quando clicar em filtrar:
    // columnsSelectFilter.forEach((columnS, indexS) => {
    //   if (filtersObj.column === columnS) {
    //     return columnsSelectFilter.splice(indexS, 1);
    //   }
    // });
    checkColumnsSeleted();

    console.log(columnsSelectFilter);

    setFilters(
      { ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, filtersObj],
      },
    );
  };

  const handleFilters = ({ target }) => {
    const { name, value } = target;
    setFiltersObj({ ...filtersObj, [name]: value });
  };

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
          onChange={ handleFilters }
        >
          {
            columnsSelectFilter.map((columns, index) => (
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
          onChange={ handleFilters }
        >
          <option value="-">-</option>
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
          onChange={ handleFilters }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClickButtonFilter() }
      >
        Filtrar

      </button>

    </form>
  );
}

export default Filters;
