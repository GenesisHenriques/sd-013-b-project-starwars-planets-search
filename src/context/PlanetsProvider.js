import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsApi from '../helpers/fecthPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  // const [filters, setFilters] = useState({});

  const dataValue = {
    data,
    dataFiltered,
    setDataFiltered,
    setFilterByName,
    filterByName,
  };

  useEffect(() => {
    async function feth() {
      setData(await fetchPlanetsApi());
      setDataFiltered(await fetchPlanetsApi());
    }
    feth();
  }, []);

  return (
    <PlanetsContext.Provider value={ dataValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
