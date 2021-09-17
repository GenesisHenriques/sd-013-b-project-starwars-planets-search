import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mainContext from './MainContext';
import requestApiPlanets from '../services/requestApiPlanets';
import useFetch from '../hooks/useFetch';

export default function MainProvider({ children }) {
  const [data, setDataPlanets] = useState([]);
  const [filters, setFilters] = useState({
    dataFilter: [],
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  const { results } = useFetch(requestApiPlanets);

  const newData = useCallback(() => (results ? results.map((planet) => {
    delete planet.residents;
    return planet;
  }) : []), [results]);

  const sortASC = (arrayFiltered, column) => {
    const negativeNumber = -1;
    arrayFiltered.sort((a, b) => {
      if (column === 'name') {
        if (a[column] > b[column]) { return 1; }
        if (a[column] < b[column]) { return negativeNumber; }
        return 0;
      }
      return Number(a[column]) - Number(b[column]);
    });
    return arrayFiltered;
  };

  const sortDSC = (arrayFiltered, column) => {
    const negativeNumber = -1;
    arrayFiltered.sort((a, b) => {
      if (column === 'name') {
        if (b[column] > a[column]) { return 1; }
        if (b[column] < a[column]) { return negativeNumber; }
        return 0;
      }
      return Number(b[column]) - Number(a[column]);
    });
    return arrayFiltered;
  };

  const sortFilter = useCallback(() => {
    const arrayFiltered = newData();
    if (filters.order) {
      const { column, sort } = filters.order;
      switch (sort) {
      case 'ASC':
        sortASC(arrayFiltered, column);
        break;
      case 'DESC':
        sortDSC(arrayFiltered, column);
        break;
      default:
        break;
      }
    }

    return arrayFiltered;
  }, [filters.order, newData]);

  useEffect(() => {
    const arrayFiltered = sortFilter();
    setDataPlanets(arrayFiltered);
    setFilters((oldState) => ({ ...oldState, dataFilter: arrayFiltered }));
  }, [filters.order, newData, sortFilter]);

  function handleFilterByName(newFilter, newArray) {
    setFilters({ ...filters, filterByName: { name: newFilter }, dataFilter: newArray });
  }

  function handlerFilterASCDSC(filterBy) {
    setFilters({
      ...filters,
      order: filterBy,
    });
  }

  const functionComparison = (comparison, a, b) => {
    switch (comparison) {
    case 'maior que':
      return Number(a) > Number(b);
    case 'menor que':
      return Number(a) < Number(b);
    case 'igual a':
      return Number(a) === Number(b);
    default:
      return true;
    }
  };

  function hadlerFilterByComparison(newFilter) {
    setFilters((oldState) => (
      {
        ...oldState,
        filterByNumericValues: [...oldState.filterByNumericValues, newFilter],
      }
    ));

    const { dataFilter } = filters;
    const { column, comparison, value } = newFilter;

    const newArray = dataFilter
      .filter((planet) => functionComparison(comparison, planet[column], value));

    setFilters((oldState) => (
      {
        ...oldState,
        dataFilter: newArray,
      }
    ));
  }

  const hadlerFilterData = useCallback((newArray = []) => {
    setFilters((oldState) => ({ ...oldState, dataFilter: newArray }));
  }, []);

  const hadlerClearFilter = useCallback(() => {
    setFilters({
      dataFilter: data,
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    });
  }, [data]);

  const contextValue = {
    data,
    // handleFilter,
    filters,
    handleFilterByName,
    hadlerFilterByComparison,
    hadlerFilterData,
    hadlerClearFilter,
    handlerFilterASCDSC,
  };

  return (
    <mainContext.Provider value={ contextValue }>
      {children}
    </mainContext.Provider>
  );
}

/* PropType Children:
https://www.ti-enxame.com/pt/reactjs/reactjs-qual-deve-ser-o-proptypes-para-.props.children/829844754/ */

MainProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
