import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    async function requiredData() {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      try {
        const { results } = await (await fetch(END_POINT)).json();
        const orderedPlanetsData = results
          .sort(({ name: a }, { name: b }) => a.localeCompare(b));
        setPlanetsData(orderedPlanetsData);
      } catch (error) {
        console.log(error);
      }
    }
    requiredData();
  }, []);

  const contextValue = {
    planetsData,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
