import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  const [input, setInput] = useState();
  const [arrFiltered, setArrFiltered] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    setFilters({
      filterByName: {
        name: input,
      },
    });
  }, [input]);

  useEffect(() => {
    if (input !== undefined) {
      const filtered = data.results.filter((e) => e.name.includes(input));
      setArrFiltered(filtered);
    }
  }, [input, data]);

  async function fetchPlanets() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    setData(response);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const obj = {
    data,
    input,
    filters,
    setInput,
    arrFiltered,
  };
  return (
    <PlanetsContext.Provider value={ obj }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
