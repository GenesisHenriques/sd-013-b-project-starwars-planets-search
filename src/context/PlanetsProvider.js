import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsApi from '../helpers/fecthPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState({name: ''});
  const [filters, setFilters] = useState(false);

  const dataValue = {
    data,
    dataFiltered,
    setDataFiltered,
    setFilterByName,
    filters: {
      filterByName,
    },
  };

  useEffect(() => {
    // setLoading(true);
    async function feth() {
      setData(await fetchPlanetsApi());
      setDataFiltered(await fetchPlanetsApi());
    }
    feth();
  }, []);

  // const teste = () => {
  //   console.log('teste');
  // };

  // useEffect(() => {
  //   // console.log(data);
  //   setLoading(false);
  // }, [data]);

  const textFilter = () => {
    const filtered = data.filter(filterByName.name);
    setDataFiltered(filtered);
    console.log(dataFiltered);
  };

  useEffect(() => {
    console.log(filterByName.name);
    // setLoading(false);
    // textFilter();
  }, [filterByName]);

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
