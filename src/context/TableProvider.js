import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  // const [columnState, setColumnState] = useState([]);
  const [nameColumn, setNameColumn] = useState('population');
  const [comparisonState, setComparisonState] = useState('maior que');
  const [valueState, setValueState] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: nameColumn,
        comparison: comparisonState,
        value: valueState,
      },
    ],
  });

  const [dataFiltered, setDataFiltered] = useState([]);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(url);
      const { results } = await response.json();
      setData(results);
      setDataFiltered(results);
    }
    fetchAPI();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const search = data
      .filter((selectedPlanet) => selectedPlanet.name.toLowerCase()
        .includes(name));
    setDataFiltered(search);
  }, [filters, data]);

  function handleChangeFiltered({ target }) {
    setFilters({ filterByName: { name: target.value.toLocaleLowerCase() } });
  }

  function handleFilterColumn({ target }) {
    // setColumnState(dataFiltered.map((planet) => planet[target.value]));
    setNameColumn(target.value);
  }

  function handleFilterValue({ target }) {
    setValueState(target.value);
  }

  function handleFilterComparison({ target }) {
    setComparisonState(target.value);
  }

  function handleClick() {
    switch (comparisonState) {
    case 'maior que':
      setDataFiltered(data
        .filter((planet) => Number(planet[nameColumn]) > Number(valueState)));
      break;
    case 'menor que':
      setDataFiltered(data
        .filter((planet) => Number(planet[nameColumn]) < Number(valueState)));
      break;
    default:
      setDataFiltered(data
        .filter((planet) => Number(planet[nameColumn]) === Number(valueState)));
      break;
    }
  }

  return (
    <TableContext.Provider
      value={ {
        handleChangeFiltered,
        data,
        filters,
        dataFiltered,
        handleFilterColumn,
        handleFilterComparison,
        handleFilterValue,
        handleClick,
      } }
    >
      {children}
    </TableContext.Provider>
  );
}

// código retirado do stackoverflow
// link: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

TableProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TableProvider;
