import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState(false);
  const [filters, setFilter] = useState({
    nameFilter: '',
    numbersFilter: {
      columnFilter: '',
      comparisonFilter: '',
      valueFilter: 0,
    },
  });

  const contextValue = {
    data,
    filters,
    setFilter,
  };
  useEffect(() => {
    fetchAPI(setData);
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Provider;
