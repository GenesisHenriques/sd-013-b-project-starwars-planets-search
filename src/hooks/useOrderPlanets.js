import { useCallback, useContext, useEffect, useState } from 'react';
import StarContext from '../context/StarContext';

function useOrderPlanets() {
  const {
    filters: { order: { column, sort } },
    filters: { dataFiltered },
    handleSetData,

  } = useContext(StarContext);

  const orderPlanets = useCallback((newData) => {
    // extraido de: https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
    const num = -1;
    switch (sort) {
    case 'ASC':
      return newData.sort((a, b) => ((a[column] < b[column]) ? num : 1));
      // return newData.sort((a, b) => a[column] - b[column]);
    case 'DESC':
      return newData.sort((b, a) => (a[column] - b[column]));
    default:
      break;
    }
  }, [column, sort]);

  const addColumnattribute = useCallback(() => {
    if (dataFiltered.length > 0) {
      const dataOrdened = orderPlanets(dataFiltered);
      handleSetData(dataOrdened);
    }
  }, [dataFiltered, handleSetData, orderPlanets]);

  useEffect(() => {
    addColumnattribute();
  }, [addColumnattribute]);
}

export default useOrderPlanets;
