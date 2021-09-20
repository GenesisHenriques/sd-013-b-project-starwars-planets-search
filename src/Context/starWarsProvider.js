import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import starWarsAPI from '../Services/StarwarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterName: {
      name: '',
    },
    filterNumbers: [],
  });
  const [options, setOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function api() {
      const { results } = await starWarsAPI();
      results.map((object) => delete object.residents);
      setData(results);
      setNewData(results);
      setLoading(false);
    }
    api();
  }, []);

  const store = {
    data,
    newData,
    setNewData,
    loading,
    filters,
    setFilters,
    options,
    setOptions,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  return (
    <MyContext.Provider value={ store }>
      { children }
    </MyContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
