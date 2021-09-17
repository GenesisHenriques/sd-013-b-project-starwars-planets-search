import { React, useState } from 'react';
import PropTypes from 'prop-types';
import requisitionApi from '../services/Api';
import Context from './PlanetsContext';

function Provider({ children }) {
  const [array, setPlanets] = useState([]);
  const planets = async () => {
    setPlanets(array.concat(await requisitionApi()));
  };
  return (
    <main>
      <Context.Provider value={ { array, planets } }>
        {children}
      </Context.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default Provider;
