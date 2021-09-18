import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [indexNumericFilter, setIndexNumericFilter] = useState(0);
  const [availableColumns, setAvailableColumns] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [currentNumericFilter, setCurrentNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const [auxData, setAuxData] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const contextValue = {
    data,
    filters,
    setFilters,
    indexNumericFilter,
    setIndexNumericFilter,
    availableColumns,
    setAvailableColumns,
    currentNumericFilter,
    setCurrentNumericFilter,
    auxData,
    setAuxData,
    disabled,
    setDisabled,
  };

  const removeResidentsKey = (dataFromAPI) => {
    dataFromAPI.map((planet) => delete planet.residents);
    setData(dataFromAPI);
  };

  useEffect(() => {
    if (availableColumns.length === 0) {
      setDisabled(true);
    }
  }, [availableColumns]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const responseObj = await response.json();
      removeResidentsKey(responseObj.results);
    };
    fetchPlanets();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Provider;
