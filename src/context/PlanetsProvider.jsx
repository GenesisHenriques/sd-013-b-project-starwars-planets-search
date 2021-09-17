import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  const [text, setText] = useState();
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState();
  const [number, setNumber] = useState('');
  const [arrFiltered, setArrFiltered] = useState();
  const [colunmFilter, setColunmFilter] = useState([
    'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setFilters({
      filterByName,
      filterByNumericValues,
    });
  }, [filterByName, filterByNumericValues]);

  function newColumnFilter() {
    setFilterByNumericValues([
      {
        column,
        comparison,
        value: number,
      },
    ]);
    const newFilter = colunmFilter.filter((e) => e !== column);
    setColunmFilter(newFilter);
  }

  useEffect(() => {
    if (data !== undefined) {
      setArrFiltered(data.results);
    }
  }, [data]);

  useEffect(() => {
    setFilterByNumericValues({
      column,
      comparison,
      value: number,
    });
  }, [column, comparison, number]);

  function handleClick() {
    if (text !== undefined) {
      setText('');
    }
    newColumnFilter();
    let filtered = [];
    if (comparison === 'maior que') {
      filtered = data.results.filter((e) => Number((e[column]) > Number(number)));
    } else if (comparison === 'menor que') {
      filtered = data.results.filter((e) => Number((e[column]) < Number(number)));
    } else {
      filtered = data.results.filter((e) => Number((e[column]) === number));
    }
    setArrFiltered(filtered);
  }

  useEffect(() => {
    setFilterByName({
      name: text,
    });
  }, [text]);

  useEffect(() => {
    if (text !== undefined) {
      const filtered = data.results.filter((e) => e.name.includes(text));
      setArrFiltered(filtered);
    }
  }, [text, data]);

  async function fetchPlanets() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    setData(response);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const obj = {
    data,
    filterByName,
    filterByNumericValues,
    filters,
    arrFiltered,
    text,
    column,
    number,
    comparison,
    colunmFilter,
    setColunmFilter,
    handleClick,
    setText,
    setColumn,
    setComparison,
    setNumber,
  };
  return (
    <PlanetsContext.Provider value={ obj }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
