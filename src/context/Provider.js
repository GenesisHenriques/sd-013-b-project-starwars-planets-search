import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Api from '../services/Api';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
    setData,
  };

  useEffect(() => {
    Api().then((response) => {
      setData(response);
    });
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
