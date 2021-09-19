import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [filtredData, setFiltredData] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    console.log('foi');
    setFiltredData(data);
  }, [data]);

  useEffect(() => {
    const { filterByNumericValues } = filters;
    console.log('table');
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      switch (comparison) {
      case 'maior que':
        return setFiltredData(filtredData
          .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10)));
      case 'igual a':
        return setFiltredData(filtredData
          .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10)));
      case 'menor que':
        return setFiltredData(filtredData
          .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10)));
      default:
        return null;
      }
    });
  }, [filters]);

  useEffect(() => {
    setPlanets(filtredData);
    setPlanets(filtredData
      .filter((planet) => planet.name.includes(filters.filterByName.name)));
    console.log('FilterName');
  }, [filters.filterByName.name, filtredData]);

  return (
    <PlanetContext.Provider
      value={
        {
          data,
          setData,
          filters,
          setFilter,
          filtredData,
          setFiltredData,
          planets,
          setPlanets }
      }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;
