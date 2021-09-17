import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/planetsAPI';

const initialFilters = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

// eu não faço ideia do que tô fazendo
function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilter] = useState(initialFilters);
  const [headers, setHeaders] = useState([]);

  const fetchPlanets = async () => {
    const response = await getPlanets();

    setData(response);
    setHeaders(
      Object.keys(response.results[0]).filter((key) => key !== 'residents'),
    );
  };

  const setNameFilter = (search) => {
    setFilter({
      ...filters,
      filterByName: { ...filters.filterByName, name: search },
    });
  };

  const setNumericFilter = (numericFilter) => {
    const { filterByNumericValues } = filters;

    setFilter({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, numericFilter],
    });
  };

  const applyNameFilter = (array, name) => (
    array.filter(({ name: planetName }) => (
      planetName.toLowerCase().includes(name.toLowerCase())
    ))
  );

  const applyNumericFilter = (array, numericFilterArray) => {
    let tempFilteredArray = [...array];
    const comparisonTable = {
      'maior que': (columnValue, comparisonValue) => columnValue > comparisonValue,
      'menor que': (columnValue, comparisonValue) => columnValue < comparisonValue,
      'igual a': (columnValue, comparisonValue) => columnValue === comparisonValue,
    };

    numericFilterArray.forEach(({ column, comparison, value }) => {
      tempFilteredArray = tempFilteredArray.filter((planet) => {
        const columnValue = Number(planet[column]);
        const comparisonValue = Number(value);

        return comparisonTable[comparison](
          columnValue,
          comparisonValue,
        );
      });
    });

    return tempFilteredArray;
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    if (data && data.results) {
      const { results } = data;
      const { filterByName, filterByNumericValues } = filters;

      let tempFilteredArray = [...results];
      tempFilteredArray = applyNameFilter(tempFilteredArray, filterByName.name);
      tempFilteredArray = applyNumericFilter(
        tempFilteredArray,
        filterByNumericValues,
      );

      setFilteredPlanets(tempFilteredArray);
    }
  }, [data, filters]);

  return (
    <PlanetsContext.Provider
      value={ {
        filteredPlanets,
        headers,
        filters,
        setNameFilter,
        setNumericFilter,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
