import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchAPI';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await fetchPlanets();
        // Aqui estou desestruturando o objeto com a chave results, vinda da API
        const { results } = await response.json();
        // Salvo o resultado no state planets, mas removendo a chave residents
        setPlanets(results.filter((item) => delete item.residents));
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []);
  return (
    <PlanetContext.Provider value={ { planets } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
