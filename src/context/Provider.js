import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsApi from '../services/getPlanetsApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filter, setFilter] = useState([]);

  const contextValue = {
    data,
    setData,
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: filter,
    },
    setFilterName,
    setFilter,
    newData,
    setNewData,
  };

  const fetchPlanets = async () => {
    const planets = await getPlanetsApi();
    planets.map((planet) => delete planet.residents);
    setData(planets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;