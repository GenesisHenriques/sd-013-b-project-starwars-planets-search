import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setPlanets(data.results);
    }
    getData();
  }, []);

  function setName(name) {
    setFilters(
      {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column: '',
            comparison: '',
            value: '',
          },
        ],
      },
    );
    const temp = planets.filter(
      (planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()),
    );
    setFiltered(temp);
  }

  function filterHelper(planet, column, comparison, value) {
    switch (comparison) {
    case 'maior que':
      if (Number(planet[column]) > Number(value)) return true;
      break;
    case 'igual a':
      if (Number(planet[column]) === Number(value)) return true;
      break;
    case 'menor que':
      if (Number(planet[column]) < Number(value)) return true;
      break;
    default:
      return false;
    }
  }

  function setComparison({ column, comparison, value }) {
    setFilters(
      {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      },
    );

    const temp = planets.filter(
      (planet) => filterHelper(planet, column, comparison, value),
    );
    setFiltered(temp);
  }

  const obj = {
    data: planets,
    name: (name) => setName(name),
    comparison: (object) => setComparison(object),
    filtered,
    filters,
  };

  return (
    <planetsContext.Provider value={ obj }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PlanetsProvider;
