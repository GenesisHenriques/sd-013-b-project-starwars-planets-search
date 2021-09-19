import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import getPlanets from '../service/api';

function MyProvider({ children }) {
  const [data, setData] = useState([{ data: {} }]);

  useEffect(() => {
    getPlanets().then(({ results }) => setData(results));
  }, []);

  return (
    <MyContext.Provider value={ data }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyProvider;
