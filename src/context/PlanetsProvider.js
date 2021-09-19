import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

const endPointAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      //  const response = await ;
      const { results } = await fetch(endPointAPI).then((res) => res.json());
      setData(results);
    }
    fetchPlanets();
  }, []);

  // const data = planets;
  // console.log(data);
  //  const contextValue = { planets, setPlanets };

  return (
    <PlanetsContext.Provider value={ { data } }>
      {children}
    </PlanetsContext.Provider>
  );
}

//  Referencia da PropType: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
