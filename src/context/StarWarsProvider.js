import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/RequestPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: 0,
    }],
  });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    async function getPlanet() {
      const planets = await fetchPlanets();
      setData(planets);
    }
    getPlanet();
  }, []);

  function handleChange({ target }) {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  }

  function setColumn({ target }) {
    const { name } = target;
    const { filterByNumericValues } = filters;
    const numericFilter = filterByNumericValues[filterByNumericValues.length - 1];
    const { comparison, value } = numericFilter;
    setFilters({ ...filters,
      filterByNumericValues: [{
        [name]: target.value,
        comparison,
        value,
      }] });
  }

  function setComparison({ target }) {
    const { name } = target;
    const { filterByNumericValues } = filters;
    const numericFilter = filterByNumericValues[filterByNumericValues.length - 1];
    const { column, value } = numericFilter;
    setFilters({ ...filters,
      filterByNumericValues: [{
        column,
        [name]: target.value,
        value,
      }] });
  }

  function setValue({ target }) {
    const { name } = target;
    const { filterByNumericValues } = filters;
    const numericFilter = filterByNumericValues[filterByNumericValues.length - 1];
    const { column, comparison } = numericFilter;
    setFilters({ ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        [name]: target.value,
      }] });
  }

  function handleButton() {
    setClicked(true);
  }

  const contextValue = {
    data,
    filters,
    clicked,
    handleChange,
    setColumn,
    setComparison,
    setValue,
    handleButton,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  // troquei element por node. dica dos colegas da turma;
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
