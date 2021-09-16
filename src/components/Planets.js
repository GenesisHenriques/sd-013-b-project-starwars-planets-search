import React, { useEffect, useState } from 'react';
import PlanetsTable from '../components/PlanetsTable';
import { useProvider } from '../context/PlanetProvider';
import FilterPlanetsByNumber from './FilterPlanetsByNumber';

function Planets() {
  const [data, setData] = useState([]);
  const { filters, setFilters } = useProvider();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  function filterData(rows) {
    const { filterByName: { name } } = filters;
    const { filterByNumericValues } = filters;
    const minusOne = -1;

    if (filterByNumericValues.length > 0) {
      const { column, comparison, value } = filterByNumericValues[0];
      switch (comparison) {
      case 'maior que':
        return rows.filter((row) => (
          row.name.toLowerCase().indexOf(name.toLowerCase() > minusOne)
          && parseInt(row[column], 0) > parseInt(value, 0)
        ));
      case 'menor que':
        return rows.filter((row) => (
          row.name.toLowerCase().indexOf(name.toLowerCase() > minusOne)
          && parseInt(row[column], 0) < parseInt(value, 0)
        ));
      case 'igual a':
        return rows.filter((row) => (
          row.name.toLowerCase().indexOf(name.toLowerCase() > minusOne)
          && parseInt(row[column], 0) === parseInt(value, 0)
        ));
      default:
      }
    }

    return rows.filter((row) => (
      row.name.toLowerCase().indexOf(name.toLowerCase()) > minusOne
    ));
  }

  return (
    <div>
      <label htmlFor="name-filter">
        Pesquisar Planeta:
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (e) => setFilters({
            filterByName: {
              name: e.target.value,
            },
          }) }
        />
      </label>
      <FilterPlanetsByNumber />
      <PlanetsTable dataTable={ filterData(data) } />
    </div>
  );
}

export default Planets;