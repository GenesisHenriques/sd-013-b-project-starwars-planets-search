import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const SWContext = createContext({
  data: [],
});

export const useSWContext = () => useContext(SWContext);

export const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets').then((response) => response.json());

      results.forEach((planet) => delete planet.residents);

      setData(results);
    };
    fetchData();
  }, []);

  return (
    <SWContext.Provider value={ { data } }>
      { children }
    </SWContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
