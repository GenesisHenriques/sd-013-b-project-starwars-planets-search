import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setReturnOfApi] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });
  const [arrayFiltered, setArrayFiltered] = useState([]);
  const [input, setInput] = useState('');
  const [selectCollum, setSelectCollum] = useState('');
  const [selectNumber, setSelectNumber] = useState('');
  const [inputNumber, setNumber] = useState(0);
  const [switchh, setSwitch] = useState(false);

  useEffect(() => {
    const newObj = {
      column: selectCollum,
      comparison: selectNumber,
      value: inputNumber,
    };
    setFilters((prevState) => ({
      ...prevState.filters,
      filterByName: { name: input },
      filterByNumericValues: [{
        ...newObj,
      }],
    }));
  }, [input, selectCollum, selectNumber, inputNumber]);

  const handleClickSearch = (planets, select, maq, value) => {
    setSwitch(true);
    switch (maq) {
    case 'maior que':
      setArrayFiltered(planets.filter((element) => element[select] > Number(value)));
      break;
    case 'menor que':
      setArrayFiltered(planets.filter((element) => element[select] <= value));
      break;
    case 'igual a':
      setArrayFiltered(planets.filter((element) => element[select] === value));
      break;
    default:
      return planets;
    }
  };

  //   else{
  //     return
  //   }
  //   // switch (choiceSearch) {
  //   // case 'menor que':
  //   //   console.log(choiceSearch);
  //   //   return planetss.filter((element) => element.population === pop)
  //   //   .filter((element) => element.pop < );
  //   // default:
  //   //   return planetss;
  //   // }
  // };

  // useEffect(() => {
  //   if (input !== '') {
  //     setFilters((prevState) => ({
  //       ...prevState.filters,
  //       filterByName: { name: input },
  //     }));
  //   }
  // }, [input]);

  const filterByName = (planets) => {
    const { filterByName: { name } } = filters;
    const filterName = planets.filter((element) => element.name.includes(name));
    return filterName;
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
    setInput,
    filterByName,
    setSelectCollum,
    setSelectNumber,
    setNumber,
    handleClickSearch,
    selectCollum,
    selectNumber,
    inputNumber,
    arrayFiltered,
    switchh,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
