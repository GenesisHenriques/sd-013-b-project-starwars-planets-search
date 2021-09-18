import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getResponse from '../services';

const TableContext = createContext();
export const useTableContext = () => useContext(TableContext);

export default function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const contextValue = {
    data,
    loading,
    setData,
    setLoading,
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
