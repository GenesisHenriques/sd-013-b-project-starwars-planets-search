import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import fetchPlanets from '../services';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function MyProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const fetchApi = useCallback(async () => {
    const response = await fetchPlanets(URL);
    response.results.forEach((element) => delete element.residents);

    setData({ ...response });
  }, []);

  return (
    <div>
      <MyContext.Provider value={ { data, fetchApi, name, handleChange } }>
        {children}
      </MyContext.Provider>
    </div>
  );
}

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MyProvider;
