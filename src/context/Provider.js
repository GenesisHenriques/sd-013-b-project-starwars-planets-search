import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanetsApi from '../services/fetchPlanetsApi';
import PlanetsContext from './PlanetsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  // Agrupando leitura e escrita em um obj
  const contextPlanets = {
    data,
    setData,
    filters: {
      filterByName: {
        name: filter,
      },
    },
    setFilter,
  };

  // Guarda os dados do fetch no state
  const keepPlanets = async () => {
    const planets = await fetchPlanetsApi();
    planets.map((planet) => delete planet.residents);
    setData(planets);
  };

  useEffect(() => {
    keepPlanets();
  }, []);

  // Essa parte estava entrando em um loop muito doido, fiz esse codigo em outro lugar
  // Crédito ao Rodrigo que me ajudou tirando uma dúvida

  // useEffect(() => {
  //   console.log(filter);
  //   const newData = data.filter((planet) => planet.name.includes(filter));
  //   console.log(newData);
  //   //setData(newData);
  // });

  return (
    <PlanetsContext.Provider value={ contextPlanets }>
      { children }
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
