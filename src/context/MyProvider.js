import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function MyProvider({ children }) {
  const [data, setData] = useState({});

  const fetchApi = useCallback(async () => {
    const response = await (await fetch(URL)).json();
    response.results.forEach((element) => delete element.residents);

    setData(response);
  }, []);

  return (
    <div>
      <MyContext.Provider value={ { data, fetchApi } }>
        {children}
      </MyContext.Provider>
    </div>
  );
}

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MyProvider;
