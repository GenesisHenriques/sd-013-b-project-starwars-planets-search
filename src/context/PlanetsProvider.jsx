import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchPlanets } from '../services/api';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);
  const [filtersArray] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    async function getPlanets() {
      try {
        const { results } = await fetchPlanets();
        setData(results);
      } catch (error) {
        console.log(error);
      }
    }
    getPlanets();
  }, []);

  // DEFINE OS TÍTULOS DA TABELA DE ACORDO COM AS INFORMAÇÕES EM DATA( MENOS URL, MANTENDO 13 COLUNAS NO TOTAL )
  useEffect(() => {
    if (data[0]) {
      setDataTitle(Object.keys(data[0])
        .filter((key) => key !== 'url'));
    }
  }, [data]);

  return (
    <PlanetsContext.Provider
      value={ { data, dataTitle, filtersArray, filters, setFilters } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
