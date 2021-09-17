import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './Context';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [filterData, setFilterDT] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await endpoint.json();
      results.filter((result) => delete result.residents);
      setData(results);
      setFilterDT(results);
    };
    getPlanets();
  }, []);

  function handleChange({ target }) {
    setFilters(target.value.toLowerCase());
    const search = data.filter(
      (planet) => planet.name.toLowerCase().includes(target.value),
    );
    setFilterDT(search);
  }

  return (
    <PlanetContext.Provider value={ { handleChange, filters, filterData, setFilterDT } }>
      { children }
    </PlanetContext.Provider>
  );
}
// QUAL PROP ERA O CHILDREN https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
