import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mainContext from './MainContext';
import requestApiPlanets from '../services/requestApiPlanets';
import useFetch from '../hooks/useFetch';

export default function MainProvider({ children }) {
  const [data, setDataPlanets] = useState([]);

  const { results } = useFetch(requestApiPlanets);

  const newData = useCallback(() => (results ? results.map((planet) => {
    delete planet.residents;
    return planet;
  }) : []), [results]);

  useEffect(() => {
    setDataPlanets(newData());
  }, [newData]);

  const contextValue = {
    data,
    setDataPlanets,
  };

  return (
    <mainContext.Provider value={ contextValue }>
      {children}
    </mainContext.Provider>
  );
}

/* PropType Children:
https://www.ti-enxame.com/pt/reactjs/reactjs-qual-deve-ser-o-proptypes-para-.props.children/829844754/ */

MainProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
