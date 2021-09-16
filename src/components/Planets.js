import React, { useEffect, useState } from 'react';
import PlanetsTable from '../components/PlanetsTable';
import { useProvider } from '../context/PlanetProvider';

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
    const minusOne = -1;
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
      <PlanetsTable dataTable={ filterData(data) } />
    </div>
  );
}

export default Planets;