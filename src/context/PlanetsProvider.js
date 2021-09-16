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
  const [input, setInput] = useState('');
  const [selectCollum, setSelectCollum] = useState('');
  const [selectNumber, setSelectNumber] = useState('');
  const [inputNumber, setNumber] = useState(0);

  useEffect(() => {
    setFilters({
      filterByNumericValues: {
        column: selectCollum,
        comparison: selectNumber,
        value: inputNumber,
      },
    });
  }, [selectCollum, selectNumber, inputNumber]);

  // const handleClickSearch = (planetss, select, maq, value) => {
  //   let teste = 0;
  //   if (select === 'population' && maq === 'menor que') {
  //     return planetss.filter((element) => element.population)
  //       .filter((element) => element.population < value);
  //   }

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

  useEffect(() => {
    setFilters({
      filterByName: { name: input },
    });
  }, [input]);

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
    // handleClickSearch,
    // selectCollum,
    // selectNumber,
    // inputNumber,
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
