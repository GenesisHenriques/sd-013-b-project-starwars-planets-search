import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';
import fetchDataApi from '../services/fetchDataApi';

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMyApi() {
      const result = await fetchDataApi();
      setData(result);
    }
    fetchMyApi();
    setLoading(true);
  }, []);

  const props = {
    data,
    loading,
  };

  return (
    <Context.Provider value={ props }>
      { children }
    </Context.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};
