import { useCallback, useContext, useEffect } from 'react';
import StarContext from '../context/StarContext';

function useSearchPlanets() {
  const {
    data: { data },
    filters: { filterByName: { name } },
    handleSetData,
  } = useContext(StarContext);

  const filterPlanets = useCallback(() => {
    const newData = data.filter((planet) => (
      planet.name.toUpperCase().includes(name.toUpperCase())
    ));
    handleSetData(newData);
  }, [data, handleSetData, name]);

  // const getPlanets = useCallback(() => {
  //   handleSetData(data);
  // }, [data, handleSetData]);

  useEffect(() => {
    filterPlanets();
  }, [filterPlanets, name]);

  // useEffect(() => {
  //   getPlanets();
  // }, [data, getPlanets, handleSetData]);
}

export default useSearchPlanets;
