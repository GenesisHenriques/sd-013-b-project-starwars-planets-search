import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setReturnOfApi] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: '',
        value: '',
      },
    ],
  });
  const [input, setInput] = useState('');
  const [selectCollum, setSelectCollum] = useState('population');
  const [selectNumber, setSelectNumber] = useState('');
  const [inputNumber, setNumber] = useState(0);
  const [toggleSearch, setToggleSearch] = useState(false);

  useEffect(() => {
    setFilters((prevState) => ({
      ...prevState.filters,
      filterByName: { name: input },
      filterByNumericValues: [],
    }));
  }, [input]);

  const verifyLength = () => {
    if (selectNumber !== '' && inputNumber !== 0) {
      return true;
    }
    return false;
  };

  const filteredArray = (planets, select, maq, value) => {
    if (input !== '') {
      const filterName = planets.filter((element) => element.name.includes(input));
      return filterName;
    }
    if (toggleSearch) {
      switch (maq) {
      case 'maior que':
        return planets.filter((element) => element[select] > Number(value));
      case 'menor que':
        return planets.filter((element) => element[select] <= value);
      case 'igual a':
        return planets.filter((element) => element[select] === value);
      default:
        return planets;
      }
    }
    return data;
  };

  const fetchApi = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const obj = await response.json();
    const objFiltered = obj.results;
    setReturnOfApi(objFiltered);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const context = {
    data,
    selectCollum,
    selectNumber,
    filters,
    inputNumber,
    setInput,
    setSelectCollum,
    setSelectNumber,
    setNumber,
    verifyLength,
    setToggleSearch,
    filteredArray,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
