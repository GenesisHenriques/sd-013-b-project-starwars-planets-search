import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getResponse from '../../services';

const TableContext = createContext();
export const useTableContext = () => useContext(TableContext);

export default function TableProvider({ children }) {
  const FILTERS_INITIAL_VALUE = {
    filters: {
      filterByName: { name: '' },
      filterByNumericValue: 0,
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilter] = useState(FILTERS_INITIAL_VALUE);
  const [filteredData, setFilteredData] = useState([]);

  const getPlanets = () => {
    const getData = async () => {
      setLoading(true);
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await getResponse(URL);
      results.map((planet) => delete planet.residents);
      setData(results);
      setLoading(false);
    };
    getData();
  };

  useEffect(getPlanets, []);

  const handleFilterPlanets = ({ target: { value, name } }) => {
    const newFilteredData = (
      data.filter((planet) => (planet.name.toLowerCase().includes(value.toLowerCase())))
    );
    setFilter(
      { filters: { ...filters.filters, filterByName: { [name]: value.toLowerCase() } } },
    );
    setFilteredData(newFilteredData);
  };

  const contextValue = {
    data,
    loading,
    filters,
    filteredData,
    setData,
    setLoading,
    setFilter,
    setFilteredData,
    handleFilterPlanets,
  };

  return (
    <TableContext.Provider value={ contextValue }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
