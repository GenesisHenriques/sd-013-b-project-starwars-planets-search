import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import getPlanets from '../services/swAPI';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
  };

  const fetchPlanets = async () => {
    const planets = await getPlanets();
    setData(planets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <DataContext.Provider value={ contextValue }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default DataProvider;
