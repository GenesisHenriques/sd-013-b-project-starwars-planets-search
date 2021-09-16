import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

const SWContext = createContext({
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
});

export const useSWContext = () => useContext(SWContext);

export const SWProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets').then((response) => response.json());

      results.forEach((planet) => delete planet.residents);

      setPlanets(results);
    };
    fetchData();
  }, []);

  const handleNameFilterChange = useCallback((name) => {
    setFilterByName({
      name,
    });
  }, []);

  const data = useMemo(() => planets.filter(({ name }) => {
    const filter = new RegExp(filterByName.name, 'i');
    return filter.test(name);
  }), [planets, filterByName]);

  const context = useMemo(() => ({
    data,
    filters: {
      filterByName,
    },
    handleNameFilterChange,
  }), [data, filterByName, handleNameFilterChange]);

  return (
    <SWContext.Provider value={ context }>
      { children }
    </SWContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
