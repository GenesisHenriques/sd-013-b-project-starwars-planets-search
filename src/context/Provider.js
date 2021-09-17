import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services';

const Context = createContext();

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [planetsCopy, setPlanetsCopy] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const fetchData = async () => {
    const { results } = await getPlanets();
    results.forEach((element) => delete element.residents);
    setPlanets(results);
    setPlanetsCopy(results);
  };

  const handleName = ({ target }) => {
    setFilter({ filterByName: { name: target.value } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filtered = planets.filter((planet) => planet.name
      .toLocaleLowerCase()
      .includes(name.toLocaleLowerCase()));
    setPlanetsCopy(filtered);
  }, [filters, planets]);

  const context = { planets, planetsCopy, setPlanets, filters, setFilter, handleName };
  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, Provider };
