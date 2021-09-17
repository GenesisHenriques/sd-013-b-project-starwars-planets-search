import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsAPI from '../services/StarWarsAPI';
import MyContext from './MyContext';

function MyContextProvider({ children }) {
  const [data, setData] = useState({});
  // const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filters, setFilters] = useState(
    { filterByName: { name: '' },
      filterByNumericValues: [] },
  );

  async function getApiResponse() {
    try {
      const RetornoDaApi = await StarwarsAPI();

      setData(RetornoDaApi);
    } catch (error) {
      setData(error);
    }
  }
  useEffect(() => {
    getApiResponse();
  }, []);

  return (
    <MyContext.Provider
      value={ {
        data,
        filters,
        setFilters,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MyContextProvider;
