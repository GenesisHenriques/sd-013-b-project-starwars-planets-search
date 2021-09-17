import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsApi from '../helpers/fecthPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  // const [dataFiltered, setFiltered] = useState();
  // const [loading, setLoading] = useState(false);

  const dataValue = {
    data,
    setData,
  };

  useEffect(() => {
    // setLoading(true);
    async function feth() {
      setData(await fetchPlanetsApi());
    }
    feth();
  }, []);

  // useEffect(() => {
  //   // console.log(data);
  //   setLoading(false);
  // }, [data]);

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
