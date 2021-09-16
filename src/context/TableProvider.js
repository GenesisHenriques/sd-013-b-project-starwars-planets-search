import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(url);
      const { results } = await response.json();
      setData(results);
    }
    fetchAPI();
  }, []);

  return (
    <TableContext.Provider value={ data }>
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
