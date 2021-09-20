import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Api from '../services/Api';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');

  const contextValue = {
    data,
    setData,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
    setFilterName,
  };

  const apiResult = async () => {
    const response = await Api();
    setData(response);
  };

  useEffect(() => {
    apiResult();
  },
  []);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Provider;
